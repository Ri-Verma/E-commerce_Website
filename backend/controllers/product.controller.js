import Product from "../models/product.model.js";
import mongoose from "mongoose";


// get method
export const getProducts = async(req, res)=>{
    try {
        const product = await Product.find({});
        res.status(201).json({sucess:true, data: product});
    } catch (error) {
        console.log("error in featching product", error.message);
        res.status(500).json({sucess: false, message: "Server Error"});
        
    }
}

//// creating a log 
export const createProduct = async(req, res)=>{
    const product = req.body; //user input

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({sucess:false, message: "Provide all the details."});
    }

    const newProduct = new Product(product);

    // saving the log
    try {
        await newProduct.save();
        res.status(201).json({sucess:true, message: "The details have been saved."});

    } catch (error) {
        console.error("Error in saving the product.", error.message);
        res.status(500).json({sucess: false, message: "Server Error"});
        
    }


}

/// update method
export const updateProduct = async(req,res) =>{

    const {id} = req.params;
    console.log("id",id);
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({sucess:false, message: "Product not found"});
        
    }

    try {
        const updateProduct = await Product.findByIdAndUpdate(id, product,{new:true});

        res.status(200).json({sucess:true, message: "Product updated"});
    } catch (error) {
        console.log("error in updating product", error.message);
    }

}

// deleting the log
export const deleteProduct =  async(req,res) =>{

    const {id} = req.params;
    console.log("id",id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({sucess:false, message: "Product not found"});
        
    }
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({sucess:true, message: "Product deleted"});
    } catch (error) {
        console.log("error in deleting product", error.message);
        
        res.status(400).json({sucess:false, message: "Server error"});

        
    }

}