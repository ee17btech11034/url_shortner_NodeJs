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



Extra informations:
- ExpressJs:
  -- `http.createServer(handlerfunc)` -> handler function handles all routes.
  -- If application is big and there are many routes present then it is hard to manage Methods and routes.
  -- ExpressJs handles these for us. `npm i express`
  -- Express also uses http internally
  -- app.METHOD(PATH, handler)
  -- Now we do not need url as Express is handling those routes. `npm uninstall url`

- Version:
  -- Major.Minor.Update
      -- Update -> when small bug fixes (optional version)
      -- Minor -> small changes like adding a new function (Recommended version) (Security fix)
      -- Major -> Major change like removed some functionality (Be cautious)
  -- types:
      -- "a.b.c" -> all hardcoded
      -- "^a.b.c" -> Can increase ba dn c but Do not increase a
      -- "~a.b.c" -> can increase only c not a, b. 
      -- "2.x.x" -> will increase x to latest.
      -- We can use <=, >=, range format etc.  

- REST API: (Representational State Transfer API)
  -- It is an architectural style for building web services that use HTTP methods to perform operations on resources.  It is not a protocol, but a set of constraints that enable scalable, stateless, and uniform communication between systems.
  -- We build APIs based on these REST defined rules/constraints. We run Node on these.

-> Other:
 - gRPC, GraphQL, and SOAP, FAST API, etc.


- REST vs GraphQL
  -- Endpoints: REST has multiple endpoints ; GraphQL uses a single endpoint. 
    -- Rest: e.g., /users, /users/1/posts, /users/1/followers
    --  e.g., /graphql
  -- Data Fetching: REST may over/under-fetch; GraphQL returns only requested fields.
    -- GET /users/1 returns {id, name, email, address, dob} — even if only name is needed
    -- { user(id: "1") { name } }
  -- Schema: GraphQL has a strong, typed schema; REST schema is optional. 
  -- Real-time: GraphQL supports subscriptions; REST requires WebSockets.

- Response type:
  -- HTML as response: {also called SSR => Server Side Rendering}
    -- We can do all the stuff and render things on server
    -- Then send that HTML to frontend. But it is good only for Web applications, not for devices like Alexa, mobile app, etc.

  -- JSON as response: (CSR => Client Side Rendering)
    -- We send Raw data as JSON (Key-value pairs) format. 
    -- Process in frontend and then show it. It is slow. 

- REST Rules:
  -- 1. Follow Server Client request properly (Server Client Architecture)
  -- 2. Correctly use HTTP Methods


Execution Command:
  -- can run this script with CMD (not powershell):=>  `npm start`