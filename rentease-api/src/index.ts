import "dotenv/config.js";
import express from "express";
import cors from "cors";
import { sequelize } from "./database/sequelize.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
