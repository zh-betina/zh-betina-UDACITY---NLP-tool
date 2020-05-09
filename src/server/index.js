const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const dotenv = require('dotenv');
dotenv.config();
const path = require('path');


const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});


const cors = require('cors');
app.use(cors());
app.use(express.static('dist'));

app.listen(8081, ()=>{console.log("Running")});


app.get("/", (req, res)=>{
  res.sendFile('dist/index.html');
});

let text;

app.post('/sendUrl', (req, res)=>{

  console.log(req.body.urlText)
  textapi.sentiment({
    text: req.body.urlText,
    mode: 'document'
  }, function(error, response) {
    if (error === null) {
      console.log(response);
      text = {"apiData": response};
      res.send(text);
    } else {
      console.log("While GETing the API response, an error occured");
    }
  });
});
