import { Compteur, Patisserie } from "../Models/Patisserie";

export const getPatisseries = () => Patisserie.find({ number: { $gt: 0 }})
  .then(docs => {
    if (!docs[0]) return false
    else return docs;
  })

export const getCounter = () => Compteur.findOne().then(doc => doc);

export const getRandomPatisserie = () => Patisserie.find({ number: { $gt: 0 } })
  .then(docs => {
    const randIndex = Math.floor(Math.random() * docs.length);
    return docs[randIndex];
  });

export const decrementPatisserie = (p) => {
  Patisserie.findOneAndUpdate({ _id: p._id }, { $set: { number: p.number - 1 } });
};

export const decrementCounter = (c) => Compteur.updateMany({$set: {count: c.count-1}});

export const resetPatisserieCount = () => Patisserie.updateMany({}, { $set: { number: 10 } }, {}, (err, res) => console.log(res) );
export const resetGlobalCount = () => Compteur.updateMany({}, { $set: {count: 50}}, {}, (err,res) => console.log(res));