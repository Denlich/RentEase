import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";
import { SequelizeUser } from "./User.js";

interface FlatRow {
  id: number;
  name: string;
  description: string;
  price: number;
  userId: number;
}

export class SequelizeFlat extends Model<FlatRow, Omit<FlatRow, "id">> {
  declare id: number;
  declare name: string;
  declare description: string;
  declare price: number;
  declare userId: number;
}

SequelizeFlat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: "flats",
  }
);

SequelizeFlat.belongsTo(SequelizeUser, { foreignKey: "userId" });
