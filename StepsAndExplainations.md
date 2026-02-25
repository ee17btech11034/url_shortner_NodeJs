Git Commands:
- git init (to initialize the git repo)
- git add . (stage all files)
- git commit -m "repective comment" (commit that change)
- git push (we can use now)


Installations:
- Install nodeJs (stable version) [May face this => https://v2know.com/article/1158]
- Install Git, VS Code[prettier, jellyfish], Requestly/Postman, nodemon, nanoid `npm i nanoid`


Building Process:
- cmd > `npm init` (to initialize the project) -> generate "package.json" and added a "start" script.



Extra informations:
- Blogging Application
  -- `npm i nondemon -D` => This dep is added in dev dependencies not the regular. dev-deps are not shipped in production as we do not need to restart server everytime.
  -- Partials:->
      -- We some some common part of HTML which is same on multiple pages like navbar, footer, etc.
      -- we store them in "views/partials". We can create new components with common code as well.
      -- Include "link" from CDN into head and script into script.
  
  -- Will use Salt-paper Hash for passwords
  -- userSchema.pre("save", ) => we tells that run this right before we save user in DB.
      -- this keyword shows issue when using with arrow function "undefined (inherits `this` from outer scope, e.g., `window`)", looks for parent's this. but in normal it referes to obj.
  -- encrypt password with "crypto" https://nodejs.org/api/crypto.html#crypto
      -- It is builtIn package, no need to install.
  
  -- "/login", "/signup" -> we should use POST instead of GET. As we will send uname and pass in body. 
  -- "/logout" -> Should be post or delete. Delete of we are using any session id. we can clear this. Why not GET here. Some browser use Pre-fetch meansif they see any action or script with GET then they try to fetch data early to reduce latency.
    -- Forms me hame name="" use krna padega to store these vales which are filled in those spaces.
    -- To match the password with stored one. Better to use "Virtual function" of mongoose.
            -- like 
                userSchema.static('functionname', function (email, pass){user = this.findone(email)})
  -- res.clearcookie(), when user logout then .redirect("/")
  -- ref: user (refer createdBy ref to user [name given while creating user model] in blog schema )
  
Execution Command:
  -- can run this script with CMD (not powershell):=>  `npm run start-dev` for testing in local machine. We need to use `run`.