import "dotenv/config.js";
import express from "express";
import cors from "cors";
import { sequelize } from "./database/sequelize.js";
import router from "./api/routes/Router.js";
import { errorHandler } from "./api/middlewares/errorHandler.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", router);
app.use(errorHandler);

sequelize
  .authenticate()
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  );
