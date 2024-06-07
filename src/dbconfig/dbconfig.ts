
import mongoose from "mongoose";

export async function config(){
        try {
                mongoose.connect(process.env.MONGO_URL !);
                const connection=mongoose.connection;
                connection.on('connected',()=>{
                        console.log("connected successfully");
                })
                connection.on('error',(err)=>{
                        console.log(err.message);  
                        console.log("error occured on connection");
                        process.exit();
                })
        } catch (error) {
                console.log("error occured on db connection");
                console.log(error)
        }
}
