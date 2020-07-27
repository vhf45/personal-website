
// SETUP
var express     = require("express");
var app         = express();

var indexRoutes = require("./routes/index");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require("mongoose");

// backup connection if no environment variable available
// var url = process.env.DATABASEURL || "mongodb://localhost:27017/database1";
// var url = "mongodb://localhost:27017/motorcycles"
// mongoose.connect(url, { useNewUrlParser: true });


// create directory to store .css files, will be folder we have to work from when linking to other files, keep this in mind
app.use(express.static(__dirname + "/public"));

// Below means we don't have to include .ejs filetype on routes
app.set("view engine", "ejs");

// Tell app to use method-override
var methodOverride = require("method-override");
app.use(methodOverride("_method"));


// Tells program to use required route files
// Can also add argument in below files to prefix route 
// app.use("/motorcycles", commentRoutes);
app.use(indexRoutes);










// LISTEN ON PORT 3000, REPLACED WITH process.env.PORT, process.env.IP AS ON C9

// Replaced process.env.PORT with 8080
// app.listen(process.env.PORT, process.env.IP, function(){
//    console.log("Server started");
// });
app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("Server started");
});

