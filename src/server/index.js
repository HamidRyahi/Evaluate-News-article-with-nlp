// Require hidden api key
const dotenv = require("dotenv");
dotenv.config();

//Meaningcloud credentials for API
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const API_KEY = process.env.API_KEY;

var path = require('path')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require("node-fetch");

// Express to run server and routes
const express = require('express')

// Start up an instance of app
const app = express()

//Middleware
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

//Origin allowance
const cors = require("cors");
app.use(cors());


app.use(express.static('dist'))
// app.use(express.static('src/client/views/index.html'))



console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})


const port = 8081;

app.listen(port, function () {
    console.log('app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


// Post Route
app.post("/article", async (req, res) => {
  const articleUrl = req.body.articleUrl;
  console.log("article URL:", articleUrl);
  const parameters = "&lang=en&url=";
  let url = `${baseUrl}${API_KEY}${parameters}${articleUrl}`;
  console.log(url);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON",
    }
  });
  try {
    const data = await response.json();
    res.send({
      score_tag: data.score_tag,
      agreement: data.agreement,
      subjectivity: data.subjectivity,
      confidence: data.confidence,
      irony: data.irony
    });
  } catch (err) {
    console.log("error", err);
  }
});
