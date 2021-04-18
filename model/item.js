const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
    {
        place:{
            type: String,
            // required: [true,"Enter place name"],
            trim: true
        },
        country:{
            type: String,
            // required: [true,"Enter age"],
        },
        price:{
            type: String,
            // required: [true,"Select Gender"],
            trim: true
        },
        photo: {
            type: String,
            default: "no-photo.jpg",
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
    }
);


module.exports = mongoose.model("Item",ItemSchema);
