var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true});

mongoose.connection.collections['products'].drop(function(err){
    console.log("Products dropped!");
});

var products = [
        new Product({
        imagePath: 'https://argentina.gridohelado.com/wp-content/uploads/2016/06/tentacion-chocolate.jpg',
        title: 'Tentasión - Chocolate',
        description: 'Crema helada sabor Chocolate',
        price: 60
    }),
    new Product({
        imagePath: 'https://argentina.gridohelado.com/wp-content/uploads/2016/06/cucurucho-mini-gigante.jpg',
        title: 'Mini Gigante',
        description: 'Cucurucho con una bocha de helado, sabor a elección.',
        price: 50
    }),
    new Product({
        imagePath: 'https://argentina.gridohelado.com/wp-content/uploads/2017/09/cucurucho-gigante-2-bochas.jpg',
        title: 'Gigante 2 bochas',
        description: 'Cucurucho con dos bochas de helado, sabor a elección.',
        price: 50
    }),
    new Product({
        imagePath: 'https://argentina.gridohelado.com/wp-content/uploads/2016/06/torta-grido.jpg',
        title: 'Torta Grido',
        description: 'Crema helada de chocolate y dulce de leche, con base de galleta, decorada con salsa de chocolate.',
        price: 50
    }),
    new Product({
        imagePath: 'https://argentina.gridohelado.com/wp-content/uploads/2016/06/cucurucho-maxigrido.jpg',
        title: 'Bombón Crocante',
        description: 'Crema helada de dulce de leche cubierto con chocolate con leche, baño de repostería y cereal inflado.',
        price: 50
    }),
    new Product({
        imagePath: 'https://argentina.gridohelado.com/wp-content/uploads/2016/06/bombon-escoces.jpg',
        title: 'Bombón Escocés',
        description: 'Crema helada de chocolate y crema americana, con corazón de dulce de leche repostero, cubierto con baño de repostería y crocante de maní.',
        price: 50
    })
];

var done = 0;
for (var i = 0; i< products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit(); 
        }
    });
}
function exit(){
    console.log("Collection seeded!");
    mongoose.disconnect();
}
