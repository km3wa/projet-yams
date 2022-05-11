import mongoose from 'mongoose';
import express from "express";
import route from "./routes/routes";
import dotenv from 'dotenv';
import { resetGlobalCount, resetPatisserieCount } from './utils/db';
import { Player } from './Models/Patisserie';

dotenv.config();
const { APP_LOCALHOST : hostname, APP_PORT: port, APP_DSN: dsn } = process.env;
const app = express();

mongoose.connect(dsn, {
  "useNewUrlParser": true,
  "useUnifiedTopology": true,
})

resetPatisserieCount();
resetGlobalCount();

Player.insertMany([{email: "test@test.fr", password: "azdkop", has_played: false}]);

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('/public'));
app.set('view engine', 'pug');

app.use('/', route);

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});
