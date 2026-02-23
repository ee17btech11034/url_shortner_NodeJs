Git Commands:
- git init (to initialize the git repo)
- git add . (stage all files)
- git commit -m "repective comment" (commit that change)
- git push (we can use now)


Installations:
- Install nodeJs (stable version) [May face this => https://v2know.com/article/1158]
- Install Git, VS Code[prettier, jellyfish], Requestly/Postman, nodemon


Building Process:
- cmd > `npm init` (to initialize the project) -> generate "package.json" and added a "start" script.



Extra informations:
- Model View Controller: it is a flow. "Controller" --Manipulate--> "Model", "Model" --update--> "View"
  -- consists 3 components -> 1. Model, 2. View, 3. Controller.
  -- Divide code into multiple parts for maintainability 
  -- We create some folders for specific tasks 
    -- 1. controllers -> All controllers will be here (GET, POST, etc are called controllers)
    -- 2. models -> All models will be here
        -- We define "Schema" and export "Models" 
    -- 3. routes -> All routes will be here
        -- When we refactor routes then we need "router", can not use app directly.
    -- 4. views -> All views will be here
    -- 5. middlewares -> All middlewares will be here
  
Execution Command:
  -- can run this script with CMD (not powershell):=>  `npm start`