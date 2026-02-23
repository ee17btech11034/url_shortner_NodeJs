Git Commands:
- git init (to initialize the git repo)
- git add . (stage all files)
- git commit -m "repective comment" (commit that change)
- git push (we can use now)


Installations:
- Install nodeJs (stable version) [May face this => https://v2know.com/article/1158]
- Install Git, VS Code[prettier, jellyfish], Requestly/Postman, nodemon


Building Process:
- cmd > `npm init` (to initialize the project) -> generate "package.json" and added a "start" script.



Extra informations:
- MongoDB:
  -- No-SQL Document Based Database
  -- Strong support for Aggregation Pipes
  -- Works on BSON format
  -- Best for Node Applications

  -> SQL has Tables, MongoDB has Collections
  -> inside collections we have documents.

  -> Install MongoDB:
    -- Install it. install `mongosh` for shall to interact with MongoDb and run the commands.
    -- cmd > `mongosh`  (it shows we are in Db names "test")
          -- Result `mongodb://127.0.0.1:27017/?` ==> mongodb is running on ip `127.0.0.1` with port `27017`
          -- need these details to connect this to NodeJs

      -- Commands:
        -- `show dbs` -> show/list all DBs present
        -- `use <db_name>` -> will be using this db_name db now
        -- `show collections` -> show collections in a specific db
        -- `db.collection_name.find()` -> find all the matches
          -- `db.collection_name.find({})` -> shows all objects
        -- `db.collection_name.insert()` -> insert an object in this collection
          -- `db.collection_name.insert({key: val})` -> insert an object in this collection

- CRUD Operations:
  -- Create, Read, Update, Delete


- mongoose:
  -- we need an package to connect our NodeJs to MongoDB. `npm i mongoose`
  -- We create "Schema" (define the structure)
    -- We create a "Model" using "Schema"
    -- Using "Model" we do CRUD tasks.
  -- connect with mongoose
    -- mongoose.connect("mongodb://127.0.0.1:27017/shop-orders").then(()=>console.log("Mongoose is connected..."))
      -- "shop-orders" is the DBs name
    -- Like a shop data may have Users, Orders, Employees, etc. 
      -- Shop --> it is DB
      -- Users, Orders, Employees --> these are collections
      -- user, order, employee --> single object of collection.
  
  -- userModel is a way to interact with collection "users" which got created from "user" by adding "s:" in end.
    -- Each entry follows a Schema. 
    -- collection of entries is Collection "users". Node intereact with this using "Model".
  
Execution Command:
  -- can run this script with CMD (not powershell):=>  `npm start`