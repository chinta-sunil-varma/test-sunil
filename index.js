const express = require('express')
const fetch=require('fetch')
const app = express()
// const axios = require('axios');
const request = require('request');


function fet()
{
    
    request('https://jsonplaceholder.typicode.com/todos', function (error, response, body) {
      
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
}

app.listen('5000', () => {
    console.log('server succesfuly listening');
    fet()
   
   
})
