

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/burgers');


var ingredschema = mongoose.Schema({
	name: String, 
	cost: Number
});

var Ingredient = mongoose.model('Ingredient', ingredschema);

var orderschema = mongoose.Schema({
	customerName: String, 
	ingredients : [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }]
});

var Order = mongoose.model('Order', orderschema);

exports.Ingredient = Ingredient;
exports.Order = Order;