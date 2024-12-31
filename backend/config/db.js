import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://zahranniyas:mvz2LqqCvRGxajtA@cluster0.xnmtj.mongodb.net/pizza-shop"
    )
    .then(() => console.log("DB Connected"));
};
