import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://vivekkeshtwal05:vivek@1234@cluster0.hgvksfe.mongodb.net/";
  mongoose
    .connect(connectionUrl)
    .then(() => console.log("blog database connected"))
    .catch((error) => console.log(error));
};

export default connectToDB;
