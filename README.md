# Develop and deploy wasm (compiled from Rust) + JS:

### Note: this process uses Travis CI to deploy to GitHub Pages.

Clone https://github.com/jinjagit/wasm-test I copied from local disk = got some files not removed by .gitignore    
(based Siddharth Naithani's excellent template and readme. This was invaluable to me in getting the Travis CI to deploy the wasm package: https://github.com/sn99/wasm-template-rust)  

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
delete `target` directory (and contents)  
`$ wasm-pack build`  
`$ cd www`  
`$ npm install`  
edit `index.html` to `<title>Wasm 3D</title>`  
`$ cd ..`  
`$ git init`  
`$ git add .`  
`$ git commit -m "first commit"`  
create repo. "wasm-3d" on GitHub  

