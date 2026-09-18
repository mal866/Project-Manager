import User from "../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const registerUser = async (req, res) => {
    try {
        const{email, name, password} = req.body

        const existingUser = await User.findOne({email})
        if(existingUser) {
            return res.status(400).json({
                message:"User already exists"
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = await User.create({
            email,
            password:hashPassword,
            name
        })

        //sending verification email!
        const verificationToken = jwt.sign(
            {userId: newUser._id},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        )
        //end

        res.status(201).json({
            message:"Verification email sent. Please check your inbox.",
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({message: "Internal Server Error"})
    }
}

// login user
const loginUser = async (req, res) => {
    try {
    } catch (error) {
        console.log(error)

        res.status(500).json({message: "Internal Server Error"})
    }
}

export {registerUser, loginUser}