const express = require('express')
const router = express.Router()

const{getProduct,updateProduct,createProduct,deleteProduct}=require('../controller/controller')


router.get('/product',getProduct)
router.put('/product/:id',updateProduct)
router.post('/product',createProduct)
router.delete('/product/:id',deleteProduct)

module.exports = router