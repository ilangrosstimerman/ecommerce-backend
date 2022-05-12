const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try{
    const categoryData = await Category.findAll({
      include:[{model:Product}],
    });
    res.status(200).json(categoryData);

  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
});
router.post('/', (req, res) => {
});
router.put('/:id', (req, res) => {
});
router.delete('/:id', (req, res) => {
});
module.exports = router;