import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000

// allow us to get input as json file
app.use(express.json()); 

app.use("/api/products", productRoutes);

// connecting the db with the server
app.listen(5000, ()=>{
    connectDB();
    if (connectDB){
        console.log("Database connected Server started at http://localhost:" + PORT);
    }
    else{
        console.log("Database not connected");
    }
});



