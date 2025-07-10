import mongoose from "mongoose";

const connectDB =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        const conn = mongoose.connection;

        conn.on('connected',()=>{
            console.log('mongoDB connected successfully')
        })

        conn.on('error',(err)=>{
            console.log("mongoDB connection error. please make sure that mongoDB is running. "+ err)
        })
        process.exit(1)
        
    } catch (error) {
        console.log('something went wrong', error)
    }
}

export default connectDB