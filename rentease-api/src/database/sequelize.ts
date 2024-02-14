import { Sequelize } from "sequelize";
import { development } from "./config.js";

export const sequelize = new Sequelize(development);

console.log(development);
