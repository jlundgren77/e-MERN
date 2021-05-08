const express = require('express');

const router = express.Router();

const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  listRelated,
  listCategories,
  listBySearch,
  photo,
} = require('../controllers/product');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.post('/product/create/:userId', isAdmin, requireSignin, isAuth, create);

router.get('/product/:productId', read);

router.delete(
  '/product/:productId/:userId',
  isAdmin,
  requireSignin,
  isAuth,
  remove
);

router.put('/product/:productId/:userId', update);

router.get('/products', list);

router.get('/products/related/:productId', listRelated);
router.get('/products/categories', listCategories);
router.post('/products/by/search', listBySearch);
router.get('/products/photo/:productId', photo);

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;
