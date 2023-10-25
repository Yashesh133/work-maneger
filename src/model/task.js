import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  title :{
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  addDate:{
    type : Date,
    require : true,
    default : Date.now()
  },
  status : {
    type : String,
    enum : ["pending", "completed",]
  },
  userId : {
    type : mongoose.ObjectId,
    required : true
  }
});

export const Task = mongoose.models.tasks ||  mongoose.model("tasks", taskSchema);
