import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Allow JSON request body parsing
app.use(express.json()); 

app.use("/api/products", productRoutes);

// Connect DB before starting server
const startServer = async () => {
    try {
        await connectDB();  // Ensure database connection before starting server
        console.log("Database connected");

        app.listen(PORT, () => {
            console.log(`Server started at http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error(`Database connection error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

startServer();
