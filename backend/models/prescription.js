const mongoose = require('mongoose');

const presCSchema = mongoose.Schema({
    
    phoneNumber:{
        type:String,
        require:true,
        unique:true
    },
    patientName:{
        type:String,
        required:true
        
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    presC:{
        type:String,
        require:true
    }

});

module.exports = mongoose.model('prescription',presCSchema);
