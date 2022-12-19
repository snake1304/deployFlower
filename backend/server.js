const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/databse");
const cloudinary = require("cloudinary");

//Handing Uncaught Exception
process.on("unCaugthException", (err) => {
  console.log(`Error ${err.message}`);
  console.log(`Shutting down server due to  Uncaught Exception`);

  server.closer(() => {
    process.exit(1);
  });
});

//Config
dotenv.config({ path: "backend/config/config.env" });
//Connecting to databse
connectDatabase();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.listen(process.env.PORT, () => {
  console.log(`Server is working in localhost:${process.env.PORT}`);
});

//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error ${err.message}`);
  console.log(`Shutting down server due to Unhandled Promise Rejection`);

  server.closer(() => {
    process.exit(1);
  });
});
