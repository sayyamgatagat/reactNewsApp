const express = require('express');
const cors = require('cors');
var unirest = require("unirest");
const app = express();
require('dotenv').config();
app.get('/getnews',cors(),(req,res)=>{
  API_link = "https://newsapi.org/v2/top-headlines?country=in&apiKey=" + process.env.API_KEY;
  var req = unirest("GET",API_link );
    req.end(function (resp) {
      if (resp.error) throw new Error(resp.error);
    
    console.log(resp.body.articles);
    res.json(resp.body.articles);
  });
})

app.get('/api/test', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'Jay', lastName: 'Gandhi'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);