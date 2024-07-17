// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     const connection = await mongoose.connect(
//       "mongodb+srv://vivekkeshtwal05:vivek%1234@cluster0.1mtandu.mongodb.net/",
//       {
//         dbName: "work_manager",
//       }
//     );

//     console.log("db connected...");
//     console.log("connected with host ", connection.connections[0].host);
//   } catch (error) {
//     console.log("failed to connect with database");
//     console.log(error);
//   }
// };

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "work_manager",
    });

    console.log("db connected...");
    console.log("connected with host ", connection.connection.host);
  } catch (error) {
    console.log("failed to connect with database");
    console.log(error);
  }
};
