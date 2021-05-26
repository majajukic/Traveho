import bycript from 'bcryptjs';//for hashing the passwords
import jwt from 'jsonwebtoken';//to keep the users logged in for some time.
import User from '../models/user.js';

export const signin = async(req, res) => {
    //destructuring email and password:
    const {email, password} = req.body;

    //always for async blocks use try-catch:
    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) {
            return res.status(404).json({ message: "User doesn't exist!" });
        }
        
        const isPasswordCorrect = await bycript.compare(password, existingUser.password);

        if(!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        //if the user exists in the database and the passwords match, we get the users tocken:
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, "test", { expiresIn: "1h" });
        res.status(200).json({ result: existingUser, token })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong"});
    }
}

export const signup = async(req, res) => {
    const {email, password, firstName, lastName, confirmPassword} = req.body;
    try {
        //we cannot create an account if there already is an existing user
        const existingUser = await User.findOne({ email });

        if(existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        if(password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords don't match!" });
        }

        //if the user doesn't yet exist, and the passwords match:
        const hashedPassword = await bycript.hash(password, 12);//12 level of difficulty (salting a password)
        const result = await User.create({ email, password: hashedPassword, name:`${firstName} ${lastName}` });
        const token = jwt.sign({ email: result.email, id: result._id }, "test", { expiresIn: "1h" });
        res.status(200).json({ result, token })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong"});
    }
}
