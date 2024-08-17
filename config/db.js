import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://singamuthu118:8870619219@cluster0.zn9eckc.mongodb.net/foodie').then(()=>console.log("DB Connected"));
}