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
- Polling Connection: 
    -- In Simple communication, client send HTTP req to server, server responds and close that connection.
    -- Suppose we are creating real time chat application, If A sends message to B. Then It goes from A to server. 
    -- untill B req server, server has no way to send client B that msg. 
    -- For this. All users will have to req server that "Is there any new msg for them". 
    -- This is called "Polling". Which increases load on server.

- WebSockets: "Bi-Directional" communication setup Protocol
    -- client send HTTP req to server and tells that convert this req to websockets. Server responds and stablish a connection with client. This is "Bi-Directional" communication. https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Upgrade
    -- Now they can share multiple chat without closing connection. 
    -- When user leave chatroom, client send HTTP req to server to close that websocket connection.
    -- `npm i socket.io`

- Node Streams:
    -- We can use `node-status-monitor` to monitor stats of CPU, our app is using.
    -- If we read a file and store that data into a variable and then upload it to client. We are using RAM memory. Suppose 1000s of clients are trying to read that data parallely. It is not good. 
    -- We use stream to send data into chunks

    -- const stream = fs.createreadStream("./sample.txt", "utf-8") -> we are creating datta into chunks
    -- stream.on("data", (check)=> res.write(chunk)) -> if datat is still remaining then load
    -- stream.on("end", ()=> res.end()) -> if no data remaining then end the response.
        --> issue is "this takes data into memory (x mb) and create a zip of it ( x mb). Total memory is (x+y mb) which is not good.
        --> zlib is a Node package which creates a zip without using extra space.
  
Execution Command:
  -- can run this script with CMD (not powershell):=>  `npm run start-dev` for testing in local machine. We need to use `run`.