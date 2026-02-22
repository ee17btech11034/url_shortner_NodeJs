Git Commands:
- git init (to initialize the git repo)
- git add . (stage all files)
- git commit -m "repective comment" (commit that change)
- git push (we can use now)


Installations:
- Install nodeJs (stable version) [May face this => https://v2know.com/article/1158]
- Install Git, VS Code[prettier, jellyfish], Requestly/Postman


Building Process:
- cmd > `npm init` (to initialize the project) -> generate "package.json" and added a "start" script.



Extra informations:
- As we can see app.METHOD(path, ...) :
  -- Many request has same path so we can combine them together. like `app.get("/users/:id"` `app.patch("/users/:id"`, `app.delete("/users/:id"`, etc.

- Express Middleware: https://expressjs.com/en/guide/using-middleware.html
  -- req goes to middleware then it goes to express and express decide which METHOD will be called.
  -- We can have multiple middlewares. 
  -- Req flow ==>        Client -> Middleware 1 -> middleware 2 -> ... -> Express app.
  -- We use middlewares to authenticate users and log the requestes or some other tasks. 
  -- Middleware can process on req and res means it can return the request or can add some data to it and send to next middlewares. 
  -- can create custom middleware `app.use(handlerfunction)`

- HTTP Headers:
  -- Every req and res has a package which has actual data. But on that packet we have some extra info that is called Headers. like address on envelope.
  -- Headers are an important part of the API req and res as they represent the meta-data associated with the API req and res.
  -- Headers carry information for the req and res body. Ex. Go to chrome > network > refresh yt on that page. Check Headers.
  -- If want to add custom Header it should start with "x-headerName". x- tells that it is custom. can read with `req.headers`.         res.setHeader("x-myName", "Raj") -> we can set in res.

- HTTP Status Code: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
  -- Status codes informs wheather a http req is successfully completed. => `res.status(200).json or send()`
    -- 1. Information response (100 -> 199)
    -- 2. Successful response (200 -> 299)
    -- 3. Redirection message (300 -> 399) -> When we redirect user
    -- 4. Client Error response (400 -> 499) -> Error on client side, like wrong password, trying to access a page which does not exist
    -- 5. Server Error response (500 -> 599) -> Error on Server side

- Everytime we make changes we have to restart server. 
  -- Let's install "nodemon" which will restart my server whenever new changes are there.
  -- `npm i nodemon`
  -- change the "start' script to "nodemon index.js"
  -- `npm start` to start server first time. 

Execution Command:
  -- can run this script with CMD (not powershell):=>  `npm start`