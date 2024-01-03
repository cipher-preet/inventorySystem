const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productInfo = new Schema({
  userId: 
  {
     type: Schema.Types.ObjectId, 
     ref: 'User'
  },
  name: {
    type: String,
    required: true,
  },
  dateReceived: {
    type: Date,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  dateDispatched: {
    type: Date,
  },
  dispatchQuantity: {
    type: Number,
  },
  pendingItems: {
    type: Number,
    default: function () {
      return this.quantity - (this.dispatchQuantity || 0);
    },
  },
  status: {
    type: String,
    enum: ['Pending', 'Dispatched', 'Complete'],
    default: 'Pending',
  },
  qrcode: {
    type: String,
    required: true,
  }
});

const Product = mongoose.model('Product', productInfo);

module.exports = Product;
