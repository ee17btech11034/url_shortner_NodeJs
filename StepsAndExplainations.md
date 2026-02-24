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
- URL Shortner:
  -- Takes a URl and return short url with short ID. (POST)
  -- We store this in DB
  -- Redirect user when they enter this. (GET)
  -- use nanoid to generate

- We need to pass a Header from client to tell that we are sending JSON data. https://www.browserstack.com/guide/what-is-the-content-type-header
- req.body is undefined because GET requests should not have a request body according to HTTP standards.
  
Execution Command:
  -- can run this script with CMD (not powershell):=>  `npm start`