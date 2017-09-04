# Teach Yourself - Canvas/Websockets
*Note, I ended up not being able to make this work in tandem by the time the assignment was due*

## Why did you choose this subject?
* I've always been interested in the idea of making a game and I thought this would be a good experiment to see what it was like to make a simple online game -- using the canvas html element and Websockets.

## What problem does it solve?
* Websockets solves the problem of handling multiple users and telling clients when a page needs to be refreshed and what part of the page needs to be refreshed.  
* Canvas helps by making it easier to draw objects on a webpage

## Why does one use it?
* Sockets can be used to handle multiple users on the same page when the page needs to constantly be updating for users
* Canvas is mostly for visually displaying something that you've drawn with javascript; be it a graph, a drawing, or a game.

## What is the history of this technology?
* Michael Carter built Websockets in 2008, it was meant to provide full-duplex communication.  He wanted to replace a technology called Comet, which he claimed was innefficient for small messages/changes.  Websockets is maintained by the team at websocket.org

## What is your opinion on the technology after having built something with it?
* Websockets is fast and effective when used properly.  It's also really cool.  It was harder than I thought it would to implement it for something like a game.  But its cool how it works.  It seems like you are basically writing in your own listening events on the server side.  You tell Websockets what to listen for and what to change when it hears that.  
## What are the biggest conceptual hurdles (if any) you encountered when researching this?
* I obviously bit off more than I could chew and hit a few walls trying to implement websockets on a game.  Figuring out the lingo of websockets was a little tricky and then figuring out how exactly to implement every change I was telling websockets to listen for was hard.  Canvas was pretty straightforward and much easier to use once you figure out a few basics.  
## What resources do you recommend for interested students?
* Definitely the websockets tutorial on making a chat app, that was fairly digestable.  I used a phaser/sockets tutorial that I completed but maybe went a little too far in the technical direction to fully take everything in.  
## What article or forum was most helpful to you in learning this?
* https://socket.io/get-started/chat/
* https://phaser.io/news/2017/03/socketio-multiplayer-tutorial
## What are 3 interview questions one might be asked about this technology?
* What are Websockets?
* How do they work?
* What are some ways Websockets can be useful/implemented?

## How to run
* In your console, type node index.js to kick off the server, then visit localhost://6969 in your browser.  
* You will need script tags for sockets/jquery in this example.  You will also need to use npm install for the express/sockets packages
