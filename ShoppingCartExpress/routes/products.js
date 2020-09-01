var express = require('express');
var router = express.Router();
const Product=require('../models/product');
const { post } = require('../app');

/* GET users listing. */
router.get('/', async(req, res)=> {
  try{
    const products= await Product.find();
    res.json(products);
  }
  catch(err){
    res.json({message: err});
  }
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    const product=new Product({
      name:req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
      description: req.body.description
    });
    product.save()
      .then(data=>{
          res.json(data);
        })
        .catch(err=>{
          res.json({message: err});
        });
});

router.get('/:id', async(req, res)=> {
  try{
    const product= await Product.findById({_id: req.params.id});
    res.json(product);
  }
  catch(err){
    res.json({message: err});
  }
});

router.delete('/:id', async(req, res)=> {
  try{
    const deleteProduct= await Product.remove({_id: req.params.id});
    res.json(deleteProduct);
  }
  catch(err){
    res.json({message: err});
  }
});

router.put('/:id', async(req, res)=> {
  try{
    const product= await Product.update({_id: req.params.id}, { $set: req.body});
    res.json(product);
  }
  catch(err){
    res.json({message: err});
  }
});


module.exports = router;
