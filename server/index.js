// here we're importing your express app
const server = require('./app');

// We're telling the app to listen for network requests on port 3000
// idiomatic server will separate the listener here from the server in app.js, so the listener is not inside the server
// everything in the server occurs first and then the listener is added here after
server.listen(3000, function() {
  console.log('Server is listening on http://localhost:3000');
});
