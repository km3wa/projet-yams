import mongoose from 'mongoose';
import express from "express";
import session from 'express-session';
import route from "./routes/routes";
import dotenv from 'dotenv';
import { resetPatisserieCount } from './utils/db_utils/patisseries';
import { resetCompteurCount } from './utils/db_utils/compteur';
import { resetPlayers } from './utils/db_utils/player';

dotenv.config();
const { APP_LOCALHOST : hostname, APP_PORT: port, APP_DSN: dsn, APP_SECRET: secret } = process.env;
const app = express();

mongoose.connect(dsn, {
  "useNewUrlParser": true,
  "useUnifiedTopology": true,
})

resetPatisserieCount();
resetCompteurCount();
resetPlayers();

app.use(session({
  secret: secret,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('view engine', 'pug');

app.use('/', route);

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});
