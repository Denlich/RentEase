import "dotenv/config.js";
import express from "express";
import cors from "cors";
import { sequelize } from "./database/sequelize.js";
import router from "./api/routes/Router.js";
import { errorHandler } from "./api/middlewares/errorHandler.js";
import { SequelizeUser } from "./database/models/User.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", router);
app.use(errorHandler);

const initApp = async () => {
  try {
    await sequelize.authenticate();

    SequelizeUser.sync({ alter: true });

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

initApp();
