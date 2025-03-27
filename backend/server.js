import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" })); 
app.use(express.json()); 

app.use("/api/products", productRoutes);

const startServer = async () => {
    try {
        await connectDB();
        console.log("Database connected");

        app.listen(PORT, () => {
            console.log(`Server started at http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error(`Database connection error: ${error.message}`);
        process.exit(1);
    }
};

startServer();
