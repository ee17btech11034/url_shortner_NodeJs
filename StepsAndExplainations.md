Git Commands:
- git init (to initialize the git repo)
- git add . (stage all files)
- git commit -m "repective comment" (commit that change)

- git branch -M main (To forcefully move to main as earlier git was using "master" branch)
- git remote add origin https://github.com/ee17btech11034/url_shortner_NodeJs.git (we are sayig that set this remote url as "origin")
- git push -u origin main (origin is denoting that repo and main is for main branch)


Installations:
- Install nodeJs (stable version) [May face this => https://v2know.com/article/1158]
- Install Git, VS Code[prettier, jellyfish]


Building Process:
- 


Extra informations:
- NodeJs Workflow:=>
    -- Client send request to server
    -- it goes to "Event Queue"
    -- "Event Loop" Takes request from "Event Queue" in FIFO order
    -- Request can be of 2 types =>
        -- 1. non-blocking (Async) => process it and provide response
        -- 2. Blocking Operation (Synchronous) => we give this to "Thread pool" or "worker pool" to handle, it will resolve and send response. Threads are CORE CPUs. 
                -- bydefault Threads = 4, max => limited by machines.
                -- require("os").cpus().length -> max thread size


Execution Command:
  -- can run this script with CMD (not powershell):=>  `node nodewf`