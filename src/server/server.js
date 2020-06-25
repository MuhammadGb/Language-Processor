const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var AYLIENTextAPI = require('aylien_textapi');
var textApi = new AYLIENTextAPI({
  application_id: `${process.env.API_ID}`,
  application_key: `${process.env.API_KEY}`
});

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'))


const urlAnalysis = async (req, res, next) => { 
try{
  textApi.sentiment({"url": req.body.url}, function(error, result) {
    res.send(result);
  
 });
} catch(error) {
  return next(error)
}
}
app.post("/link", urlAnalysis)


app.listen(8000, function () {
    console.log('Server is running on port 8000!')
})

module.export = { urlAnalysis }