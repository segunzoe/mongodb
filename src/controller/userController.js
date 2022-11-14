const User = require('../model/User')

// get all users

exports.getAllUsers = async (req,res) => {

    try {
        let users = await User.find();
        res.status(200).json({
               success: true,
               message: 'user found',
               users,
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
     });
    }
}

// get single User
// update User

// delete user