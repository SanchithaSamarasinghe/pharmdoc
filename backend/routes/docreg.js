const express = require('express');
const regdoc = require('../models/regdoc');

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret';

router.post("/regdoc/newdoc",async (req,res)=>{
    try{
        const {
            fullname,slmcregno,email,password} = req.body;
    if(!password || !slmcregno){
        return res.status(400).json({message: 'check details'});

    }
    const newdoc = new regdoc({fullname,slmcregno,email,password});
    await newdoc.save();

    res.status(201).json({ message: 'success'});
    
}
    catch(error){
    res.status(500).json({ message: 'error111',error});
}

    
    
});

router.post('/regdoc', async (req, res) => {
    const { slmcregno, password } = req.body;
    try {
        const user = await regdoc.findOne({ slmcregno });
        if (!user) return res.status(400).send('Invalid username ');

        
        if (password !== user.password) return res.status(400).send('Invalid username or password');

       
        else res.status(200).json({ message: 'OK' });
    } catch (error) {
        res.status(500).send('internal server error');
    }
});

module.exports = router;