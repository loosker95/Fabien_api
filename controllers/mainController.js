const userInfo = require('../modeles/modelUsers')


module.exports = {

    homePage: (req, res) =>{
        res.render("../views/index");
    },

    addUser: async (req, res) =>{
        try{
            await new userInfo({
                id_user: req.body.id_user,
                name: req.body.name,
                username: req.body.username,
                address:{
                    number: req.body.number,
                    street: req.body.street,
                    city: req.body.city,
                    country : req.body.country,
                },
                email: req.body.email,
                phone: req.body.phone,
                website: req.body.website
    
            }).save()
            res.json('User added successfully')
        }
        catch(error){
            res.json({Error: error.message})
        }
    },

    getUser: async (req, res) =>{
        try{
           const data = await userInfo.find()
                if(Object.keys(data).length !== 0){
                    res.json(data)
                }else{
                    res.json("Empty...No Data available!");
                }
        }catch(error){
            res.json({Error: error.message})
        }
    },

    findUser: async (req, res) =>{
        try{
            const data = await userInfo.findById(req.params.id)
            if(data){
                res.json(data)
            }else{
                res.json('User doesn\'t exist')
            }
        }
        catch(error){
            res.json({Error: error.message})
        }
    },

    updateUser: async (req, res) =>{
        try{
            await userInfo.findByIdAndUpdate(req.params.id, {$set: req.body})
            res.json("Update succesfully")
        }
        catch(error){
            res.json({Error: error.message})
        }
    },

    deleteUser: async (req, res) =>{
        try{
            const data = await userInfo.findByIdAndDelete(req.params.id)
            if(data){
                res.json('User successfully deleted')
            }else{
                res.json('User doesn\'t exist')
            }
        }
        catch(error){
            res.json({Error: error.message})
        }
    }

}