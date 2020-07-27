
var express = require("express");
var router = express.Router();

// ROUTES

// LANDING PAGE
router.get("/", function(req, res){
    res.render("landing");
});


module.exports = router;