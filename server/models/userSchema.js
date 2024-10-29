const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
            imageUrl:{
                type:String,
                required:[true, "The name must be required"],
            },
            name:{
                type:String,
                required:[true, "The name must be required"],
            },
            email:{
                type:String,
                required:[true, "The email must be required"],
            },
            phone:{
                type:Number,
                required:[true, "The Number must be required"],
            },
            address:{
                type:String,
                required:[true, "The name must be required"],
            }
        })

const Users = mongoose.model("users", userSchema);

module.exports = Users;