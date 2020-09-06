# wasm 3D

Following [Rust 3D Graphics in the Browser](https://www.youtube.com/watch?v=p7DtoeuDT5Y&list=PLLqEtX6ql2EyPAZ1M2_C0GgVd4A-_L4_5&index=21&t=966s) tutorials.  

## useful related resources
* https://webglfundamentals.org/  
* https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API  

## setup

Clone https://github.com/jinjagit/wasm-test  
I copied from local disk = got some files not removed by `.gitignore`    
(my template is adapted from Siddharth Naithani's excellent template: https://github.com/sn99/wasm-template-rust)  

create `.gitignore` in project root and add:  
```
/target
**/*.rs.bk
Cargo.lock
```
add `travis.yml` with contents as on Github repo.  
set `"name": "wasm-3d"` in `package.json`, and also change to:  
```
"dependencies": {
    "wasm-3d": "file:../pkg"
  },
  ```
set `name = "wasm-3d"` in `Cargo.toml`  
edit first line in `index.js` to: `import * as wasm from "wasm-3d";`  
delete `target` directory (and contents)  
`$ wasm-pack build`  
`$ cd www`  
`$ npm install`  
edit `index.html` to `<title>Wasm 3D</title>`  
`$ npm run start` should run app in broswer ' `localhost:8080`  
`$ cd ..`  
`$ git init`  
`$ git add .`  
`$ git commit -m "first commit"`  
create repo. "wasm-3d" on GitHub  
`$ git remote add origin git@github.com:jinjagit/wasm-3d.git`  
`$ git push origin master`  
Create gh-pages branch on GitHub repo.  
Go to: https://travis-ci.com/signin and sign in with GitHub  
Find wasm-3d in repos list  
Click 'settings' for repo.  
Add env. var: `GITHUB_TOKEN` value: \<personal access token value\>  
Re-run deploy 'build' CI job (will have failed on first push) - should now be running @ `https://jinjagit.github.io/wasm-3d/`    
  
== Now have deployable wasm framework  

replace / edit `Cargo.toml` to be:  
```
[package]
name = "wasm-3d"
version = "0.1.0"
authors = ["Simon Tharby, following tutorial by Doug Milford"]
edition = "2018"

[lib]
crate-type = ["cdylib", "rlib"]

[features]
default = ["console_error_panic_hook"]

[dependencies]
wasm-bindgen = { version = "0.2.58", features = ["serde-serialize"] }
console_error_panic_hook = { version = "0.1.6", optional = true }
js-sys = "0.3.35"
lazy_static = "1.3.0" # allows us to easily set up some application states
nalgebra = "0.18.0" # algebra library (including matrices)

[dev-dependencies]
wasm-bindgen-test = "0.3.8"

[dependencies.web-sys]
version = "0.3.35"
features = [
  "console",
  'Document',
  'Element',
  'EventTarget',
  'HtmlCanvasElement',
  'MouseEvent',
  'WebGlBuffer',
  'WebGlProgram',
  'WebGlRenderingContext',
  'WebGlShader',
  'WebGlUniformLocation',
  'Window',
]

# resolves `Fatal: error in validating input` error on was-pack build, from:
# https://github.com/cloudflare/wrangler/issues/1474
[package.metadata.wasm-pack.profile.release]
wasm-opt = false
```  
replace / edit `lib.rs` to be:   
```
extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub struct RustClient {

}

#[wasm_bindgen]
impl RustClient {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        log("New was hit");
        Self {

        }
    }

    pub fn update(&mut self, _time: f32, _height: f32, _width: f32) -> Result<(), JsValue> {
        log("Update was hit");
        Ok(())
    }

    pub fn render(&self) {
        log("Render was hit");
    }
}
```
replace / edit `index.js` to be:
```
const rust = import('../pkg/wasm_3d');
const canvas = document.getElementById('rustCanvas');
const gl = canvas.getContext('webgl', {antialias: true});

rust.then(m => {
    if (!gl) {
        alert('Failed to initialize WebGl');
        return;
    }

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const FPS_THROTTLE = 1000.0 / 30.0; // ms / frames
    const rustClient = new m.RustClient();
    const initialTime = Date.now();
    let lastDrawTime = -1;// In milliseconds

    function render() {
        window.requestAnimationFrame(render);
        const currentTime = Date.now();

        if (currentTime >= lastDrawTime + FPS_THROTTLE) {
            lastDrawTime = currentTime;

            if (window.innerHeight !== canvas.height || window.innerWidth !== canvas.width) {
                canvas.height = window.innerHeight;
                canvas.clientHeight = window.innerHeight;
                canvas.style.height = window.innerHeight;

                canvas.width = window.innerWidth;
                canvas.clientWidth = window.innerWidth;
                canvas.style.width = window.innerWidth;

                gl.viewport(0, 0, window.innerWidth, window.innerHeight);
            }
            let elapsedTime = currentTime - initialTime;
            rustClient.update(elapsedTime, window.innerHeight, window.innerWidth);
            rustClient.render();
        }

    }

    render();
});
```    
replace / edit `index.html` to be:  
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="icon" href="data:;base64,iVBORwOKGO=" /> <!--set favicon to nothing, to prevent console error-->
    <title>Wasm 3D</title>
</head>
<body style="background-color: rgb(0, 0, 0); margin: 0; overflow: hidden;">
    <canvas id="rustCanvas"></canvas>
<script src="./bootstrap.js"></script>
<noscript>This page contains webassembly and javascript content, please enable javascript in your browser.</noscript>
</body>
</html>
```
`$ wasm-pack build` from project root 
`$ cd www`  
`$ npm run start` should now have tutorial boiler-plate example running @ `localhost:8080` 
`$ git add .`  
`$ git commit -m "first commit"`   
`$ git push origin master` 
Should now deploy a build via Travis CI == tutorial boiler-plate now deployed  

  ------------------------------------------------------  
#### I have omitted lots of stuff from the tutorial config files, especially from `webpack.config.js`, `cargo.toml`, and `package.json`, and have not included `web.config` at all, since the omissions seem to be irrelevant (unused) at this point. As the tutorial progresses, I may discover various omitted components are, in fact, necessary.  
#### I have also omitted some parts of various files from the wasm-test repo. used as a template (which is itself a cut-down version of Siddharth Naithani's wasm-template-rust repo.) Again, I may need to reinstate some of the removed parts.  
#### For now, however, things are working, both locally and when deployed.    
  ------------------------------------------------------
