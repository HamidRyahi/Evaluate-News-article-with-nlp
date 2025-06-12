// import fetch from "node-fetch";
const fetch = require('node-fetch');

// Require hidden api key
const dotenv = require("dotenv");
dotenv.config();

var path = require('path');

const mockAPIResponse = require('./mockAPI.js');

// Express to run server and routes
const express = require('express');

//Meaningcloud credentials for API
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const API_KEY = process.env.API_KEY;

// Start up an instance of app
const app = express();

//Middleware
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Origin allowance
const cors = require("cors");
app.use(cors());
app.use(express.static('dist'));
// app.use(express.static('src/client/views/index.html'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

const port = 8081;

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`app listening on port ${port}!`);
})

let projectData = {};
app.post('/article', async (req, res) => {
    const articleUrl = req.body.articleUrl;
    let url = `${baseUrl}${API_KEY}&url=${articleUrl}`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON",
        }
    });
    try {
        const data = await response.json();
        projectData['score_tag'] = data.score_tag;
        projectData['agreement'] = data.agreement;
        projectData['subjectivity'] = data.subjectivity;
        projectData['confidence'] = data.confidence;
        projectData['irony'] = data.irony;
        console.log("server", projectData);
        res.send(projectData);
    } catch (error) {
        console.log("error", error);
    }
});

// GET route that returns the projectData object
// app.get('/allData', (req, res) => {
//     res.send(projectData);
// });
