const express = require('express')
const router = express.Router()

const { uploadProductImage } = require('../controllers/uploadsController')
const {
  getAllProducts,
  createProduct,
} = require('../controllers/productController')

router.route('/').get(getAllProducts).post(createProduct)
router.route('/image').post(uploadProductImage)

module.exports = router
