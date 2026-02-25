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
- Deploy project on Cloud Services
    --> We can use free cloud service like Railway, AWS (somewhat)
    --> We can not hardcode portnumber. We use "process.env.PORT"
    --> We can not hardcode mongo url as it can be on same machine or different. We use "process.env.MONGO_URL" --> it is custom variable.
    --> Cloud providers automatically `npm start` run krte hai to it should exist
    --> We should create .env file parallel to index.js, which will have all env variables. `npm i dotenv` to load and use these
    --> In AWS, we can rename index.js to app.js if we want.


- AWS Deployment: 
    --> go to "cponsole.aws.com" and create a free account
    --> Select "mumbai" and search "elastic beanstalk" > "Create a server"
    --> Fille name and select nodeJs version. 
        --> delete node_modules
        --> select remaining files and do compress (zip)
        --> upload this zip
    --> Go to configuration > software configuration > edit
        --> MONGO_URL => URL got from Mongo (you should use password in it) => App name
- MongoDB: 
    --> Go to mongoDb and create account
    --> Ask the ip (ip of machine which will access this DB)
    --> Clieck on "connect" and copy the Url whioch comes right after it.
  
Execution Command:
  -- can run this script with CMD (not powershell):=>  `npm run start-dev` for testing in local machine. We need to use `run`.