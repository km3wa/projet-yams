import mongoose from 'mongoose';
import express from "express";
import route from "./routes/routes";
import dotenv from 'dotenv';
import patisseries from './utils/patisseries';
import { Compteur, Patisserie } from './Models/Patisserie';
import { dirname } from "path";
import url, { fileURLToPath } from "url";
import { resetGlobalCount, resetPatisserieCount } from './utils/db';

//export const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();
const { APP_LOCALHOST : hostname, APP_PORT: port, APP_DSN: dsn } = process.env;
const app = express();

mongoose.connect(dsn, {
  "useNewUrlParser": true,
  "useUnifiedTopology": true,
})

//resetPatisserieCount();
//resetGlobalCount();

//Compteur.insertMany([{count: 50}], (_) => console.log("saved"))

/*
Patisserie.insertMany(patisseries, function (err) {
  if (err) throw err;

  console.log("saved");
});
*/
  
app.use(express.static('/public'));
app.set('view engine', 'pug');

app.use('/', route);

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});
