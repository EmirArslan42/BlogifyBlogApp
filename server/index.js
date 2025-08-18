import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from "../server/routes/posts.js";

const app=express();
dotenv.config();

app.use(cors()); // gönderdiğimiz isteklerde,paktlerde sorun yaşamamak için cors'u kullanıyoruz.
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.use("/posts",postRoutes);

const PORT=process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Blogify is coming soon...ı dont konwwwww");;
    /*res.json({author:"Emir Arslan",message:"I love you"});*/
})

mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    app.listen(process.env.PORT,()=>{
    console.log("Server is running on port ", PORT);
});
    console.log("MongoDB connected successfully");
})
.catch((err)=>{
    console.log("MongoDB connection error:", err);;
})

