const mongoose = require("mongoose")
const customerSchema = mongoose.Schema({
    Cust_Name:String,
    Cust_Age: {
    type:Number,
    min:1,
    max:100
    },
    Mail_Id:{
        type:String,
        match:/^[a-zA-Z]+$/
    }
})
module.exports = mongoose.model("customer",customerSchema)


  