const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide name'],
  },
  price: {
    type: Number,
    required: [true, 'please provide price'],
  },
  image: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Product', ProductSchema)
