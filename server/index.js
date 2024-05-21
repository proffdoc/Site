const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { Schema } = mongoose;
const DB_URL = process.env.DB_URL;
const port = process.env.PORT || 8080;

require("dotenv").config();
console.log(process.env);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const ProductSchema = new Schema({
  title: { type: String, require: true },
  price: { type: Number, require: true },
  description: { type: String, require: true },
  image: { type: String, require: true },
});

const ProductModel = mongoose.mongoose.model("Products", ProductSchema);

app.get("api/products/", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    if (products.length > 0) {
        res.status(200).send({message:"success", data: products})
    }else{
        res.status(204).send({message:"empty data", data:null});
    }
  } catch (error) {
    console.log(error);
  }
});
app.get("api/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await ProductModel.findById(id);
        if (product) {
            res.status(200).send({message: "success", data: product})
        } else {
            res.status(404).send({message: "not found", data: null})            
        }
    } catch (error) {
        console.log(error);
    }
});


app.delete("api/products/:id", async (req, res) => {
    const { id } = req.params
    try {
        const DeletedProduct = await ProductModel.findByIdAndDelete(id)
        const products = await ProductModel.find({});

        res.status(200).send({
            message : "deleted successfully",
            DeletedProduct: DeletedProduct,
            allProducts: products,
        })
    } catch (error) {
        res.status(500).send({message:error.message})
    }
});
app.post("api/products", async (req, res) => {
});
app.put("api/products/:id", (req, res) => {});
app.patch("api/products/:id", (req, res) => {});

mongoose
  .connect(process.env.DB_URL)
  .then((db) => {
    console.log("Connected!");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log(
    `Example app listening on port ${port}, base url http://localhost:${process.env.PORT}/`
  );
});
