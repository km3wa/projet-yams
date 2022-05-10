import mongoose from 'mongoose';
import express from "express";
import route from "./routes/routes";
import dotenv from 'dotenv';
import patisseries from './utils/patisseries';
import { Patisserie } from './Models/Patisserie';

dotenv.config();
const { APP_LOCALHOST : hostname, APP_PORT: port, APP_DSN: dsn } = process.env;
const app = express();

mongoose.connect(dsn, {
  "useNewUrlParser": true,
  "useUnifiedTopology": true,
})

/*
Patisserie.insertMany(patisseries, function (err) {
  if (err) throw err;

  console.log("saved");
});
*/
  
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'pug');

app.use('/', route);

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});
