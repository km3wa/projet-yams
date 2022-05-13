import { getCompteur } from "../utils/db_utils/compteur";
import { getPatisseries } from "../utils/db_utils/patisseries";

export default async (req, res) => {
  const { count } = await getCompteur();
  const patisseries = await getPatisseries();

  return res.render('index', { title: 'Accueil', count, patisseries });
};