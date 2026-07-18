const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();


// ==============================
// MIDDLEWARE
// ==============================

app.use(cors());

app.use(express.json());


// ==============================
// MONGODB CONNECTION
// ==============================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error);
  });


// ==============================
// CONTACT ROUTE
// ==============================

app.use(
  "/api/contact",
  require("./routes/contact")
);


// ==============================
// TEST ROUTE
// ==============================

app.get("/", (req, res) => {

  res.send(
    "Portfolio Backend is Running"
  );

});


// ==============================
// SERVER
// ==============================

const PORT =
  process.env.PORT || 8000;


app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});