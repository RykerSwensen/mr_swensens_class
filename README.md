# Setup Introduction
Hello, this is my repository for Mr. Swensen's Class. This code was made for Tate Swensen 
a 3rd grade public school teacher. I made this application for him to assist him with having more assignments, 
quizzes, and assistance for students and the parents of said students. 

I chose to learn and work in the PERN stack for this specific application.

### Installs
To create this application, you will need to run a few installs:
```sh
npx create-react-app <your projects name>
cd <your projects name>
npm i -D nodemon
npm i express pg cors
npm i jsonwebtoken bcrypt
```
Then make sure to open your project folder in the code editor of you choice. I used VScode.

Create React App will not only install React, but it also will give yuo a basic template
for the project structure. It also will install all Node Modules.
These are a JavaScript framework that can run JavaScript Code.
I chose to use Node as I used Svelte in the last JavaScript framework I worked in.
It also includes setups for yarn and jest, which I hope to later implement in the project.

There should be a .gitignore file. This is important to note, as it is the file we will tell GitHub not to pull.
For example, we don't need to push node_modules, as all dependencies are easier to install after a clone. It helps 
prevent errors or incompatibility with different versions of these tools.

I installed Nodemon as a tool to automatically restart the node application when a file change is saved.

Express is a Node web framework. 

PG is the install for PostgreSQL. The database of choice. 

Cors is a package that is used between Node and Express to allow the browser and server to interact.

We are using jsonwebtoken for authentication. 

Bcrypt is a password hasher that will be used in user storage.

### Folder Layout. 
For this project I am going to alter the folders slightly to make the purposes of everything clear and consise. 
I began by creating a server folder that will be used for all of our server purposes. 
The server folder includes: 
node_modules,
index.js,
package-lock.json,
and package.json.

### Favicon
When you use create-react-app, you will want to change out some of the pre-filled template material. 
Leaving the react favicon is a way to make your projects work demenish quickly. It makes your project feel more like a template itself. 
I used and recommend this site:
* [favicon](https://favicon.io/)
I also recommend that if you use an image, to use an image with a tranparent background. This will help make your
favicon stand out. I chose to use an apple, as it is common to associate an apple with a teacher in the US. 
Once you download the formatted images, grab the 16x16, 32x32, and ico file to assure you can have the most compatability.
Make sure your favicon file names match the index.html file. I then recommend removing all the old favicon images.

### Head Title
Another thing you need to change is the head title. This is the title that appears in the tab you run the project. By
default, it will say "React App." This is another thing that can be seen as "sloppy" to leave in. Just include the title of your project!
My project is Mr. Swensen's Class!

### TODO
README Server Folder: 
index.js
database.sql
