const userCtrl = {}

const User = require('../models/User')

userCtrl.renderSignUpForm = (req, res) =>{
    res.render('users/signup')
}

userCtrl.signup = async (req,res)=>{
    const errors = []

    const { name, email,password, confirm_password } = req.body
    if(password != confirm_password){
        errors.push({text:'Password do not watch'})
    }
    if(password.length < 4){
        errors.push({text:'Password must be at least 4 characteres'})
    }
    if(errors.length > 0){
        res.render('users/signup',{
            errors,
            name,
            email,
            password,
            confirm_password
        })
    }else {
        const emailUser = await User.findOne({email:email})
        if(emailUser){
            req.flash('error_msg', 'the email is already in use')
            res.redirect('/users/signup')
        }else{
            const newUser = new User({name,email,password})
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save()
            req.flash('success_msg','You are registered')
            res.redirect('/users/signin')
        }
    }
}

userCtrl.renderSigninForm = (req,res) =>{
    res.render('users/signin')
}

userCtrl.signin = (req,res)=>{
    res.send('signin')
}

userCtrl.logout = (req, res) =>{
    res.send('logout')
}

module.exports = userCtrl