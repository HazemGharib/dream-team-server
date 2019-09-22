import express = require('express');
import request = require("request");
import bodyParser = require('body-parser');
import environment = require('../environment')

const app: express.Application = express();
const port: string = environment.port
const apiBaseUrl: string = environment.apiBaseUrl;
const apiKey: string = environment.apiKey;
const eplId: string = environment.eplId;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/standings', function (req, res) {
  var apiRequest = { 
    method: 'GET',
    url: `${apiBaseUrl}?action=get_standings&league_id=${eplId}&APIkey=${apiKey}`
  };

  request(apiRequest, function (error, response, body) {
    if (error) throw new Error(error);
    res.send(JSON.parse(response.body));  
  });
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});