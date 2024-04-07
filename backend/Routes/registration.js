const express = require('express');

const router =express.Router()

router.get('/',(req,res)=>{

    res.json({mssg:'get all registrationdetails'});
})

router.get('/:id',(req,res)=>{

    res.json({mssg:' get user  by id'});
})
router.post('/',(req,res)=>{

    res.json({mssg:' post a new user'});
})

router.delete('/:id',(req,res)=>{

    res.json({mssg:' Delete user'});
})

router.patch('/:id',(req,res)=>{

    res.json({mssg:' Delete user'});
})
module.exports=router