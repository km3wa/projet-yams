import { Patisserie } from "../../Models/Patisserie";

const getRandomPatisserie = () => Patisserie.find({ number: { $gt: 0 } })
  .then(docs => {
    const randIndex = Math.floor(Math.random() * docs.length);
    return docs[randIndex];
  });

const getPatisseries = () => Patisserie.find({ number: { $gt: 0 } }).then(docs => docs);
const decrementPatisserie = (p) => Patisserie.findOneAndUpdate({ _id: p._id }, { $set: { number: p.number - 1 } });
const resetPatisserieCount = () => Patisserie.updateMany({}, { $set: { number: 10 } }, {}, (err) => console.log(err ?? "patisseries reset"));

export { getRandomPatisserie, getPatisseries, decrementPatisserie, resetPatisserieCount };