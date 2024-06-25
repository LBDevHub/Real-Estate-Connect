import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
    },
    email: {
        type:String,
         required:true,
        unique:true,
    },
    password: {
         type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    avatar:{
        type: String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYU8ayHqMuoH0QIu_UdjqFMTInp-DG8D4yxT17h_sonhXlBJYlm3z-Zjow_bt085rhx4&usqp=CAU"
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;