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
- cmd > `npm init` (to initialize the project) -> generate "package.json"
- require("http) and then create a server using this.
- If we make any changes then we need to restart server


Extra informations:
- Always creae an `index.js` as an entry point, it is good practice as we can see `"main": "index.js",` in package.json
- `http` package is built in in Node.
- Add `"start": "node index.js"` in package.json file now we can run it with `npm start`
  -- "CanBeAnyName": "node index.js" or "node index" automatically understand that we need to run JS file
- Headers:
  -- Headers contain extra information. It is present in both req and res.


Execution Command:
  -- can run this script with CMD (not powershell):=>  `node nodewf`