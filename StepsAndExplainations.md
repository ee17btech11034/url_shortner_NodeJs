Git Commands:
- git init (to initialize the git repo)
- git add . (stage all files)
- git commit -m "repective comment" (commit that change)
- git push (we can use now)


Installations:
- Install nodeJs (stable version) [May face this => https://v2know.com/article/1158]
- Install Git, VS Code[prettier, jellyfish]
- Install Requestly for API testing (Earlier we used to do it on POSTMAN)


Building Process:
- cmd > `npm init` (to initialize the project) -> generate "package.json" and added a "start" script.



Extra informations:

- REST Rules:
  -- 1. Follow Server Client request properly (Server Client Architecture)
  -- 2. Correctly use HTTP Methods

- Define REST API:
  -- Create a proper documentation of all PAIs needed. 
    -- GET    /users       =>  list of all users
    -- GET    /users/1     =>  get the details of user with ID 1
    -- GET    /users/2     =>  get the details of user with ID 2 
    -- GET    /users/x     =>  get the details of user with ID x     [We call it Dynamic Routing] -> use "users/:x"
    -- POST   /users       =>  Create a new user. (It may return the user ID)
    -- PATCH  /users/1     =>  Update the details of user 1
    -- DELETE  /users/1    =>  DELETE user 1

    
  When our server handles both SSR (Server side render -> return HTML) and CSR (Client Side render -> return JSON)
    -- GET     /api/users  =>  We want to return JSON Data
    -- GET     /users      =>  We want to return HTML. 

  When we return HTML 
   -- When using braces, we must explicitly state the return value. Without braces, the expression following the arrow gets automatically returned.

  We can do this as well for all the other methods. like /api/users/x, 
  POST, PATCH, DELETE, PUT can only be "/api/users" untill we want to return some data in return to that req.

- Will use "https://mockaroo.com/" to get the Dummy DATA for now as we do not have DB rightnow. 


- We can only do "GET" request as we do not have option to select the METHOD. In broser we use Forms to use POST.
- We use POSTMAN or Requestly to test other METHODS.

- Request from Requestly:
  -- Go to Body > select "x-www-form-urlencoded" (This is to send the data in form format.) [can select JSOn or other format as well]
  -- Fill the form data like key val pairs

Execution Command:
  -- can run this script with CMD (not powershell):=>  `npm start`