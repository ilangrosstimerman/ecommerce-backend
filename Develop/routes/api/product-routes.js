const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  try{
    const productData = await Product.findAll({
      include:[Category, {model:Tag,through:ProductTag}],
    });
    res.status(200).json(productData);

  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
});
router.post('/', (req, res) => {
 
  Product.create(req.body)
    .then((product) => {
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {