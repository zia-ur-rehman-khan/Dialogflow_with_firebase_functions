const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld1 = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase! 1");
});
exports.helloWorld2 = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase! 2");
});
exports.helloWorld3 = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!3");
});
