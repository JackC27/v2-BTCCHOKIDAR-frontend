// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//const Airtable = require('airtable');
//Launch server with options and a couple of routes
//console.log("🚀 ~ file: index.js ~ line 6 ~ developmentPort", developmentPort.port)
// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeAp
const cors = require('cors');
const axios = require("axios");

exports.webhook = functions.https.onCall((req, res) => {
    res.send("Hello world");
});

//server FN 

exports.ytlinks = functions.https.onCall( (data,  ctx) => {
  console.log("Data Ctx", {data, ctx})
  // res.set("Access-Control-Allow-Origin", "*");
  // res.set("Access-Control-Allow-Credentials", "true");
  // res.set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  // res.set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  
  // console.log(" METHOD ", req.method);
  const { ATBASE, AIRTABLE } = process.env;
  // These options are for the axios request. So in this request we are creating options for the axios request to airtable. Which
  // returns our results to the function. So the current issue does no lie within the function calling the airtable results. 
  // The issue results from a call from a hosted function back to the hosted static site.
  // 
  // https://stackoverflow.com/questions/71712493/firebase-function-using-axios-get-receives-error-request-has-invalid-method-g
  // https://stackoverflow.com/questions/42784000/calling-a-cloud-function-from-another-cloud-function/73801218#73801218
  // https://stackoverflow.com/questions/49476231/how-to-call-firebase-callable-functions-with-
  // https://stackoverflow.com/questions/51066434/firebase-cloud-functions-difference-between-onrequest-and-oncall

  const options = {
    method: 'GET',
    url: `https://api.airtable.com/v0/${ATBASE}/Youtube%20Links`,
    headers: {
      Authorization: `Bearer ${AIRTABLE}`, 
      'Access-Control-Allow-Origin': "*", 
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    }
  };
  
  return new Promise( (resolve, reject) => {
    axios.request(options)
    .then( (response) => {
      resolve( response.data );
    })
    .catch( (error) => {
      console.error(error);
      reject(error)
    })

  })
})

//app.listen(port, 1, () => console.log(`Listening at port: ${port}`));
//"2022-08-17T05:32:19.06495768Z  stdout: KEYS:  [ 'status', 'statusText', 'headers', 'config', 'request', 'data' ]"
