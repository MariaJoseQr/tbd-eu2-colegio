const express = require("express");
const cors = require("cors");
const app = express();
const indexRoutes = require("./routes/index");
const connectDB = require("./config/db");

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
