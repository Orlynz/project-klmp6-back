import { Sequelize } from "sequelize";
import dbCrud from "../config/databaseCrud.js";

const { DataTypes } = Sequelize;

const School = dbCrud.define(
  "school",
  {
    nama: {
      type: DataTypes.STRING,
    },
    alamat: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default School;
