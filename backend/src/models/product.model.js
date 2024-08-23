const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
      id: {
        type: Number,
        unique: true,
        required: true
      },
      nome: {
        type: String,
        required: true,
      },
      codigo: {
        type: String,
        required: true,
        unique: true,
      },
      descricao: {
        type: String,
      },
      preco: {
        type: Number,
        required: true,
      }
    },
    {
      timestamps:true
    }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;