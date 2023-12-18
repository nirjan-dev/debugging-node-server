The related blog post can be read on my [personal blog here](https://nirjan.dev/blog/how-to-debug-a-node-js-server).

# Introduction
This is a demo node.js server which just returns "hello world" after 3 seconds when you visit localhost:3000. It also has some NPM commands to enable debugging with the Node.js debugger and the chrome dev tools debugger.

# How to start the server

1. clone the repo locally
2. make sure you use the node version > 20
3. run `npm start`
4. go to localhost:3000 to trigger the endpoint
5. you should see hello world after 3 seconds.
6. To use the node CLI debugger run `npm run start:debug`
7. To use the chrome debugger run `npm run start:chrome-debug`
