import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

const Admindata =mongoose.model('admindata',AdminSchema);
export default Admindata;