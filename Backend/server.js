const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/img',express.static(__dirname + "/uploaded"));
app.use(cors());


app.use("/api/v2/authen/", require("./api_authen"))

app.listen(8085, ()=>{
    console.log("Backend is running..")
})