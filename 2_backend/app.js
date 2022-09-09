const express = require('express');
const cors = require('cors');
const app = express();

const connectMongoDB = require('./config/db.js')
const User = require('./models/User.model.js')


require("dotenv").config();
const PORT = process.env.PORT || 5000;

// connectiong DB
connectMongoDB();

// Middlewares
app.use(express.json());
app.use(cors())

// Routes
//  -- sign in new user
app.post('/api/users', async (req, res)=> {
   const {name, surname, email, time, date} = req.body;
   
// -- checking if user with given email already exists
const invalidExists = await User.findOne({ time, date });
// --- if yes: error 
if(invalidExists){
    res.status(400).send("Invalid time")
    
}

// --- if no: save user data to DB
const user = await User.create({name, surname, email, time, date });

// after data was saved to DB: sending confirmationt to user
if (user){
    res.status(201).send('User created')
}else{
    res.status(400).send('Invalid user data')
 
}
})

// see all users
app.get('/api/users', async (req, res)=> {
  
  try{ const user = await User.find()
    if(user){
        res.status(201).json({user})
    }
}catch(error){res.status(400).send('Bad request')}
})
// sign out user 
app.delete('/api/users/:id', async (req, res)=> {
    try{
        const userId = req.params.id;

        const deleteUser = await User.findByIdAndDelete(userId)
        if(!deleteUser){
        res.status(400).send('user was not deleted')
        }else{
            res.send("user was deleted")
        }
    }catch(error){res.status(400).send(error)}
})



app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));