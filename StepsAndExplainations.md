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
- Authentication:==>

  -- Authentication Patterns :=>  2 types
    -- 1. Statefull:->
        -- It maintains state or datat on server side (We maintain data on server side.)
        -- When Client send req (like username & pass) to server.
          -- Server creates an session_id and keep a track of it and return this to client as well.
          -- Now whenever client sends a request we send session_id as well, Server check that track/state and understand that user is valid and then go for next step.
        -- Session_id/uid:->
          -- We have 3 ways to transfer uid:  
            -- 1. Cookies
            -- 2. response
            -- 3. headers
          -- We are using EJS (SSR), so we can use cookies as it is better option as we talk to server directly
          -- We use Headers for REST APIs. (Because APIs work for mobile app as well, which does not have browser cookies)
        -- Statefull me whenever we restart server it cleans map and we create a map to store those which takes memory which is not recommended. that's why stateless came.
        -- Best for Banking type bcz it give session id for a very short time

        -- if we store these cookies in DB.
          -- We can but it will increase latency as we will have to validate to Db.
          -- no of Read operation will increase on DB which is not good  in real scenarios.

    -- 2. Stateless:->
        -- It had no state.
        -- We put sessionId in user tokens and put a seal on it. Anyone can read but only we can change it
        -- Now server just need to verify that seal and fetch the data from it.
        -- These r called "JSON Web token".
        -- Send it in 2 ways                 1. cookies, 2. Response
    
    We can set this authentication in middleware.

    -- we need uuid (to gen session id), cookie-parser (to read cookies) (save these in map on server)
    -- app.use("path", middleware1, middleware2, ...router) -> We can set middleware in between as well
    -- res.redirect("home") //we can use this to redirect to different page
    -- Statefull me whenever we restart server it cleans map.

-- Whenever any cokkie comes from server, Browser stores it. (It is default behaviour)
-- Whenever client send any req then browser send respective cookies to server. (It is default behaviour)
  -- cookies are domain specific. https://expressjs.com/en/resources/middleware/cookie-parser.html
-- We use "Authorization" for reponse headers.  https://swagger.io/docs/specification/v3_0/authentication/bearer-authentication/
    -- "Authorization" is default Header.


-- Authorization handles the authorization to specific routes or data as well. We can set these rules.
  
Execution Command:
  -- can run this script with CMD (not powershell):=>  `npm start`