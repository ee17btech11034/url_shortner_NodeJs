Git Commands:
- git init (to initialize the git repo)
- git add . (stage all files)
- git commit -m "repective comment" (commit that change)

- git branch -M main (To forcefully move to main as earlier git was using "master" branch)
- git remote add origin https://github.com/ee17btech11034/url_shortner_NodeJs.git (we are sayig that set this remote url as "origin")
- git push -u origin main (origin is denoting that repo and main is for main branch)


Installations:
- Install nodeJs (stable version) [May face this => https://v2know.com/article/1158]
- Install Git, VS Code[prettier, jellyfish]


Building Process:
- 


Extra informations:
- Modular Programming: -> We divide code into small modules. 
    -- `module.exports = {func1, func2}` or 
    -- `module.exports = func1; module.exports = func2;` -> will export latest one. Can use only one time      or
    -- `module.exports = {NewFunc1:func1, NewFunc2:func2}`
    -- `exports.func1 = () => {}; exports.func1 = () => {}`  => Here function Name is Anonymous as func1 is its property.
    -- `const moduleName = require("./pathToFile)`  ==> moduleName.NewFunc1()    ==> reuire is fron NodeJs not in JS
    -- `const {func1, func2} = require("./pathToFile)` --> Destructure way
    -- `require("pkgName")` -> it will search in node package dir or npm installed pkg direc. 
    -- `require("./pkgName")` -> it will search only in current dir. 
    -- `require("ctrl + space") -> it will give suggestions.

    -- function func(a, b) ==> a, b are Parameters
    -- func(2, 3) ==> 2, 3are Arguments

- Sync and Async =>
    -- Sync => sync task give us an result as it wait for that call to complete.
    -- Async => Does not return anything as it takes an CallBack function. (err, result)=>{if err{}else{}}

- "fs" module => we can interact with files using this module.


Execution Command:
  -- can run this script with CMD (not powershell):=>  `node calculator.js`