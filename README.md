# Bear Crew Notes v0.1

Bear Crew Notes is a small web application for creating notes and store them on server. Frontend is built with React and Redux. Backend uses node.js + Express and MongoDB. Also we use rich text editor called [Megadraft](https://github.com/globocom/megadraft) – can be replaced with any Draft.js editor.

![Bear Crew Notes](https://pp.userapi.com/c851332/v851332743/a0190/uUC7b1OW_a0.jpg)

## Available features:

- Adding and deleting notes
- Searching through the notes
- Adding images

### Editing text:

- Bold
- Italic
- Unorderd list
- Ordered list
- Headers
- Media content

## In the future updates:

- Editing profile
- Our own rich text editor
- Sharing notes
- PDF export
- Tags 

## Installation

First of all you have to installMongoDB, then start the server:
```sh
$ git clone https://github.com/bear-crew/notes
$ cd notes/server
$ npm install
$ node server
```
and the application itself
```sh
$ cd notes/client
$ npm install
$ npm start
```
