const userInfo = require('../models/users.model')
const {validationResult } = require('express-validator')

module.exports = {
    addUser: async (req, res) =>{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {name, username, number, street, city, country, email, phone, website} = req.body
        const newUser = {name, username ,address: {number, street, city, country}, email, phone, website}
        try{      
            await new userInfo(newUser).save()
            res.json({statusCode: 201, message: "User added successfully", data: { user: req.body }})
        }
        catch(error){
            res.json({Error: error.message})
        }
    },

    getUser: async (req, res) =>{
        try{
           const data = await userInfo.find()
                if(Object.keys(data).length !== 0){
                    res.json({statusCode: 200, data: { user: data }})
                }else{
                    res.json({statusCode: 200, message: "Empty...No Data available!"})
                }
        }catch(error){
            res.json({Error: error.message})
        }
    },

    findUser: async (req, res) =>{
        try{
            const data = await userInfo.findById(req.params.id)
            if(data){
                res.json({statusCode: 200, data: { user: data }})
            }else{
                res.json({statusCode: 200, message: "'User doesn\'t exist'"})
            }
        }
        catch(error){
            res.json({Error: error.message})
        }
    },

    updateUser: async (req, res) =>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try{
            const data = await userInfo.findByIdAndUpdate(req.params.id, {$set: req.body})
            if(data){          
                res.json({statusCode: 200, message: "Update succesfully", data: {user: data}})
            }else{
                res.json({statusCode: 200, message: "'User doesn\'t exist'"})
            }
        }
        catch(error){
            res.json({Error: error.message})
        }
    },

    deleteUser: async (req, res) =>{
        try{
            const data = await userInfo.findByIdAndDelete(req.params.id)
            if(data){
                res.json({statusCode: 200, message: 'User successfully deleted', data: {user: data}})
            }else{
                res.json({statusCode: 200, message: 'User doesn\'t exist'})
            }
        }
        catch(error){
            res.json({Error: error.message})
        }
    }

}

