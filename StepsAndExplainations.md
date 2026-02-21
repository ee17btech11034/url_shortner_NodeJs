Git Commands:
- git init (to initialize the git repo)
- git add . (stage all files)
- git commit -m "repective comment" (commit that change)
- git push (we can use now)


Installations:
- Install nodeJs (stable version) [May face this => https://v2know.com/article/1158]
- Install Git, VS Code[prettier, jellyfish]


Building Process:
- cmd > `npm init` (to initialize the project) -> generate "package.json" and added a "start" script.
- require("http) and then create a server using this.
- We will build different Routes/paths using Switch
- Check requests like "http://localhost:8000/about", "http://localhost:8000/", "http://localhost:8000/contactUs", etc
- We do not ship node modules folder. We just ship package.json file. `npm install` that installs all deps from this json file.
- require module first looks pakage into "deps in json" > "npm modules".


Extra informations:
- URL (uniform Resource Locator):
  -- Ex => https://www.abc.com/Paths
      --> https is Protocol (HyperText transfer protocol Secure)
        --> protocol is a set of rules which tells browser that how they will communicate
        --> We use SSL certificate for encryted/ secure.
       --> http is also protocol but less secure and SSL is not used.
       --> ws (webSockets) is also protocol but for real time communication 
      
      --> www.abc.com It is domain, user friendly name for server IP.
        --> cmd > `ping google.com` => we can get ip address
      
      --> Paths are for routes of different pages. 
        --> / for homepage, /about for About page
        --> /projects/tic-tac-toe is nested path. 

      --> Query Parameters 
        --> It is extra information which we can pass with out URl. Starts after "?"
          --> we can send extra information from frontend.
          --> https://abc.com/about?userId=3&userName=Raj ==> here userId=3&userName=Raj is query

-"URL information":
  -- As we see "req.url give the full path after domain. 
  -- We need package which can give these in different parts. 
  -- Go to npm js (can download any node package from here) "https://www.npmjs.com/" and search for url
  -- install using `npm i url` or `npm install url`


- HTTP Methods:
  -- GET :-> When we want to get some data from server. (most of requests are GET only) Can check `{req.method}`
          -> Browser By default GET req hi krta hai. inspect > network > refresh page > check the first instance and look the type switch `req.method === "POST"`
  -- POST :-> When we want to send some Data to Server. (people use post for put and patch as well but it is not recommended) => https://www.w3schools.com/tags/ref_httpmethods.asp
  -- PUT :-> When we want to  upload a new entry for existing user. Like upload a picture or something
  -- PATCH :-> When we want to modify some instance of data of a user. 
  -- DELETE :-> When we want to delete the data from server


Execution Command:
  -- can run this script with CMD (not powershell):=>  `npm start`