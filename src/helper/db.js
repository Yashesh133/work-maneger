import mongoose from "mongoose"
import {User} from "../model/users"

export const  connectDb = async() => {
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:"work_management"
        })

        console.log("db connected ...");
        // const user = new User({
        //     name: "user",
        //     email: "user@example.com",
        //     password: "password",
        //     about: "this is a test"
        // })
        // await user.save();
        // console.log("user saved successfully")
         
    }
    catch(error){
        console.log("failed to connect");
        console.log(error);
    }
} 