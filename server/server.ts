import express from "express";
import connector from "./db";
const app = express();

connector();

app.listen(3001, () => {
  console.log("daddy!!");
});
