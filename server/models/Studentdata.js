import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    en_no:{
        type:String,
        required:true,
    },
    dob:{
        type:Number,
        required:true,
    }
});

const Studentdata =mongoose.model('studentdata',StudentSchema);
export default Studentdata;