const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true,
        default: 5
    },

    taste:{
        type: String,
        enum: ['spicy', 'non-spicy', 'sour','savory','sweet'],
        required: true
    },

    is_drink:{
        type: Boolean,
        default: false
    },

    ingredients:{
        type: [String],
        default: []
    },

    num_sales:{
        type: Number,
        default: 0
    }
});

const Menu = mongoose.model('Menu', menuItemSchema);

module.exports = Menu;
