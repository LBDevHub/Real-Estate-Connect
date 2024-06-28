import bycrptjs from 'bcryptjs';
import User from '../modules/user.module.js';
import { errorHandler } from '../utils/error.js';


export const test = (req, res)=> {
    res.json({
        message: 'Hey There, Dont just give up bro!  Life Could be hard sometimes but just hit back harder.'
    });
};


export const updateUser =  async (req, res, next) => {
    if(req.user.id !== req.params.id) return next(errorHandler(401, "You  cant update user if not authorized!"))
        try {
            if (req.body.password) {
                req.body.password = bycrptjs.hashSync(req.body.password, 10)
            }
            const updateUser = await User.findByIdAndUpdate(req.params.id,{
                $set:{
                    username: req.body.username,
                    email: req.body.email,
                    phone: req.body.phone,
                    password: req.body.password,
                    avatar: req.body.avatar,
                }
            }, {new:true})


            const {password, ...rest} = updateUser._doc

            res.status(200).json(rest)

        } catch (error) {
            next(error);
        }


};