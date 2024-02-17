import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

interface UserRow {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}

export class SequelizeUser extends Model<UserRow, Omit<UserRow, "id">> {
  declare id: number;
  declare username: string;
  declare firstName: string;
  declare lastName: string;
  declare password: string;
}

SequelizeUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: "users",
  }
);
