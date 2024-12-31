import pizzaModel from "../models/pizzaModel.js";
import fs from "fs";

// all pizza list
const listPizza = async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.json({ success: true, data: pizzas });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// add pizza
const addPizza = async (req, res) => {
  try {
    let image_filename = `${req.file.filename}`;

    const pizza = new pizzaModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });

    await pizza.save();
    res.json({ success: true, message: "Pizza Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// delete pizza
const removePizza = async (req, res) => {
  try {
    const pizza = await pizzaModel.findById(req.body.id);
    fs.unlink(`uploads/${pizza.image}`, () => {});

    await pizzaModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Pizza Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { listPizza, addPizza, removePizza };
