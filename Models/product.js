const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product title is required"]
    },
  
    price: {
        type: Number,
        required: true
    },

   
    rating:{
            type: Number,
            default:0
        },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
        // enum:['ikea','liddy','caressa','marcos']
        enum:{
            values:["ikea","liddy","caressa","marcos"],
            message:"{VALUE} is not supported"
        },
    },

},{
    timestamps: true
});

module.exports = mongoose.model("Product", productSchema);