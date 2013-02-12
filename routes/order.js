
var model = require("../models");
var Order = model.Order;
var Ingredient = model.Ingredient;

exports.create = function(req, res){
  Ingredient.find().exec(function(err, ingredients){
    if(err) throw err;
    res.render('order', {title: "New Order", ingredients: ingredients});  
  })
  
};

exports.save = function(req, res){
	console.log('new order created with ' + req.body);
  var newOrder = new model.Order({ customerName: req.body.name, ingredients: req.body.ingredients });
  newOrder.save(function(err) {
    if (err)
      return console.log("error saving order", err);
  });

};


exports.all = function(req, res){
	var orders = model.Order.find().populate('ingredients').exec(function (err, docs) {
    if (err)
      return console.log("error listing orders");
    res.render('allorders', { title : "List of Orders", orders : docs });
  });
}

exports.deleteorder = function(req, res){
  console.log("delete is called");
  Order.find({_id:req.body.id}).remove().exec(function(err){
    if (err) throw err;
  });
}
/*
app.get('/cats/delete/old', function (req, res){
  Cat.find().sort('-age').limit(1).exec(function (err, cats){
    if (err) return console.log("error", err);
    Cat.findOne().where('_id',cats[0]._id).remove();
    res.send("removed kitty");
  });
});
*/