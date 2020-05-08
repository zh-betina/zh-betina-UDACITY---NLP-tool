//dotenv to keep API credentials hidden
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
//aylien API
const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'));

app.listen(process.env.PORT, ()=>{console.log("Running")});


app.get("/", (req, res)=>{
  res.sendFile('dist/index.html');
});

let newResponse = [];
let text;

app.post('/sendReview', (req, res)=>{

textapi.aspectBasedSentiment({
      'domain': 'restaurants',
      'text': req.body.review
      }, function(err, response) {
      if (err === null) {
        response.aspects.forEach(function(aspect) {
          console.log(aspect);
        });
          text = {
            "aspects": response.aspects
          };
        res.send(text);
      };
    }
  );
});
