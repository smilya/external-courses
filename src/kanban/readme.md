# Kanban board
***
The project is a training taks emulating kanban-board layout.
The repository contains:
* **src** folder 
* **dist** folder
* **index.js** file
### SRC folder
Includes all the source code files and assets. JS-files represent modules, so in order to launch the sourse code you need a server emulation like webpack-dev-server or browser-sync.
The sourse code contains package.json with 'sync' command described to launch browser-sync. As you got it installed globally on your PC just type 'npm run sync' in a console to run the code in your browser.
### DIST folder
The folder contains the project buildup made by webpack. CSS and JS files are compressed and united in the bundle.js file. There are also fonts, images and icon files put down separately. You can run the project in any browser openind the index.html
### Index.js file
The file is used as the entry point during the project webpack buildup. 