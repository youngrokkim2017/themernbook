import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserModel from "../models/User.js";

export const registerUser = async (req, res) => {
    // const { username, password, firstname, lastname } = req.body;

    const salt = await bcrypt.genSalt(10);  // amount of hashing the viewing string
    // const hashedPassword = await bcrypt.hash(password, salt);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // const newUser = new UserModel({ 
    //     username, 
    //     password: hashedPassword, 
    //     firstname, 
    //     lastname,
    // });

    req.body.password = hashedPassword;

    const newUser = new UserModel(req.body);
    const { username } = req.body;

    try {
        // check if username already exists
        const oldUser = await UserModel.findOne({ username })
        if (oldUser) {
            return res.status(400).json({ message: 'username is already registered' })
        }

        const user = await newUser.save();

        const token = jwt.sign({
            username: user.username,
            id: user._id
        }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })

        // res.status(200).json(newUser);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username: username })

        if (user) {
            const validity = await bcrypt.compare(password, user.password)  // boolean

            // validity ? res.status(200).json(user) : res.status(400).json('Wrong Password')
            if (!validity) {
                res.status(400).json("Wrong password")
            } else {
                const token = jwt.sign({
                    username: user.username,
                    id: user._id
                }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
                
                res.status(200).json({ user, token });
            }
        } else {
            res.status(404).json('User does not exist')
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}