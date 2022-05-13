export default (req, res) => {
  if (req.session.email && req.session.password) return res.redirect("/logout")
  else return res.render('login', { title: 'Connexion' });
};