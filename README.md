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
Add env. var: GITHUB_TOKEN value: \<personal access token value\>  
Re-run build (will have failed on first push)
