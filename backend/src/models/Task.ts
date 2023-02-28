import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, 'Please provide task'],
        maxlength: 150
    }
},{timestamps:true})
export  const model = mongoose.model('Task', taskSchema);
