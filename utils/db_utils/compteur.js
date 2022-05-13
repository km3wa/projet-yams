import { Compteur } from "../../Models/Compteur";

const getCompteur = () => Compteur.findOne().then(doc => doc);
const decrementCompteur = (c) => Compteur.updateMany({ $set: { count: c.count - 1 } });
const resetCompteurCount = () => Compteur.updateMany({}, { $set: { count: 50 } }, {}, (err) => console.log(err ?? "compteur reset"));

export { getCompteur, decrementCompteur, resetCompteurCount };