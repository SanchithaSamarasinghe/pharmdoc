const express = require('express');
const prescription = require('../models/prescription');

const router = express.Router();

router.post("/prescription/newpres", async (req , res)=>{
   try {
    const { phoneNumber, patientName , age , email , presC} = req.body;
    
    if(!phoneNumber || !patientName ){
        return res.status(400).json({message: 'please fill the required fields'});

    }
    //new prescription
    const newPres = new prescription({ phoneNumber, patientName , age , email , presC});
    await newPres.save();

    res.status(201).json({ message: 'success'});
    
   }
   catch(error){
    res.status(500).json({ message: 'error',error});
   }

   //view
   router.get('/prescription',async (req,res)=>{
        const prescList = await prescription.find();
        res.send(prescList);

        if(!prescList) {
            res.status(500).json({success: false})
        }
        res.send(prescList);
        


        })
    });
  


module.exports = router;