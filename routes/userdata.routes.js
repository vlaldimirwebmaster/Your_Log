const { Router } = require('express')
const User = require('../models/User.js')
const auth = require('../middleware/auth.middleware')
const router = Router()

// /api/userdata/get
console.log('call2');

router.get(
    '/get',
    auth,
    async (req, res) =>{        
        try {
            const userData = await User.findById(req.user.userId)
            res.json(userData)
        } catch (error) {
            console.log(error);
            
            res.status(500).json({message: 'Something is went wrong, try again'})
        }
    })

// api/userdata/update
router.post(
    '/update',
    auth,
    async (req, res) =>{
        console.log(req.body);
        try {
            const filter = { _id:  req.user.userId };
            const update = {
                activityCoefficient: req.body.activityCoefficient,
                height: req.body.height,
                weight: req.body.weight,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                birthDay: req.body.birthDay,
                sex: req.body.sex
            };
            let user = await User.findOneAndUpdate(filter, update);

            res.status(201).json({message:'Data was modified'})
        } catch (error) {
            console.log(error);
            res.status(500).json({message: 'Something is went wrong, try again'})
        }
})

module.exports = router