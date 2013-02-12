
var model = require("../models");
var Ingredient = model.Ingredient;


exports.new = function(req, res){
  res.render('ingredient', {title: "New Ingredient"});
};

exports.create = function(req, res){
	var ing = new Ingredient({name: req.body.ingredient, cost: req.body.cost});
  ing.save (function(err){
    if (err)
      return console.log("error", err);
		res.send("Ingredient Saved!");
	});
};