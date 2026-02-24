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
- SSR (Server Side Rendering):=>
  -- WHen we render most of the things on Server side and return HTML to client. 
  -- Earlier we had send all the JS, CSS and other files to Client which was taking time. As client can be on slow network.
  -- We can write all HTML, CSS, JS in a single return element which can be hactic and it will load NodeJs.
    -- Like we are writing HTMl with head, body and all with CSS and JS
  -- We have templates which handles this efficiently :=> EJS(Embedded JS templating), pugJs, handlebars, etc.

- EJS :=> 
  -- We will use EJS as it works well with Express. 
  -- `npm i ejs` and then we sent "view engine" as "ejs"
  -- we create these files in views folder. these are nothing but HTML files only.

<% urls.forEach(url => { %>
        <li> <%= url.shortId %> </li>
    <% }) %>
    --> We use <% %> to tell that it is an html tag but inside it there is a code. (My theory) but it does not leave anything on that place
    --> <%=  represents the continuation of code with it will leave the values. 

- local.shortId => home ko ham pass kre short Id from Backend. to wo local me store hoti hai

  
Execution Command:
  -- can run this script with CMD (not powershell):=>  `npm start`