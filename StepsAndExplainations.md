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
- Clusters:=>
    -- We deploy our NodeJs on a machine. When user connects with machine, all users connect with same machine which increases load on that core. 
    -- We create a replica of nodeJs and run it on a worker (in this case it can be a signle core/thread process - CPU type). 
    -- Now req will go to main NodeJs process and it will assign a worker to us. Different worker for different clients. 
    -- Max workers we can increase is max CPUs available.
    -- Ot follows "Round Robin" approach.

- NGINX (Engine - x):=>
    -- It is a powerful web server and uses a non-threaded, event-driven architecture.
    -- It can handle other things like "load balancing" and "HTTP caching" or can be used as a "reverse proxy"
    -- NGINX is most popular Reverse Proxy server.

    --> It can handle 10K concurrent req
    --> cache HTTP req
    --> Act as Reverse Proxy, Load Balancer, API Gateway.
    --> Server and Cache Static files like images, videos, etc.
    --> Handle SSL certificates

- Proxy Server:=> (Forward Proxy) 
    - Multiple clients connect with a VPN and that VPN creates a connection with Server.
    - Server does not know where this req came from

- Reverse Proxy :=>
    - We have multiple servers running. Client creates a connection with VPN and VPN sends that request to any server available. 
    - Client does not know which server resolved that req.
  
Execution Command:
  -- can run this script with CMD (not powershell):=>  `npm run start-dev` for testing in local machine. We need to use `run`.