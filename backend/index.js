const cors = require("cors")
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");

const router = require("./routers/routers");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// mongodb connection through mongoose
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {}, () => {
  console.log("Connected To MongoDB\n")
});

// middlewares
app.use(express.urlencoded({
  extended: false
}));
app.use(cors())
app.use(express.json());
app.use(helmet()); // security
app.use(morgan("common")); // log info

app.use(router);

app.listen(PORT, () => {
  console.log(`\nServer is running at port ${PORT}\n`);
})