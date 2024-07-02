const mongoose = require('mongoose');

const collectionName = "order"

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  ],
  total: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'shipped'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const orderModel = mongoose.model(collectionName, orderSchema);

module.exports = orderModel;
