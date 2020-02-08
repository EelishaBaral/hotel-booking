const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const fileupload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const path = require("path");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");

// Load env variable
dotenv.config({ path: "./config/config.env" });

// connect to database
connectDB();

const hotel = require("./Routers/hotel");
const auth = require("./Routers/auth");
const user = require("./Routers/users");
const app = express();

// Body parse
app.use(cors());
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cookieParser());
app.use(fileupload());
app.use("/api/v1/booking", hotel);
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", user);
app.use(express.static(path.join(__dirname, "public")));

app.use(errorHandler);
const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);
// Handle unhandle promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});
