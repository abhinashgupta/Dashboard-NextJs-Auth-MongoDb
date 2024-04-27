import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () =>
      console.log("MongoDB connected successfully")
    );
    connection.on("error", (error) => {
      console.error(
        "MongoDb connection error, please make sure db is connected" + error
      );
    });
  } catch (error) {
    console.error("Something went Wrong in Database Connection", error);
  }
}
