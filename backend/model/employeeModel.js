import mongoose from 'mongoose';
// const mongoose = require("mongoose");
// if( !mongoose.Types.ObjectId.isValid(id) ) return false;

// let ObjectId = mongoose.Schema.Types.ObjectId;

const EmployeeSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    email: {
        type:String,
    }, 
    phone: {
        type:String,
    },
    DOB: {
        type:String
    }, 
    dateOfEmployement: {
        type:String  
    }, 
        city: {type:String},
        pincode: {type:Number},         
        address1: {type:String },
}, { timestamps: true })

const postschema = mongoose.model('Employeelist', EmployeeSchema);

export default postschema;
