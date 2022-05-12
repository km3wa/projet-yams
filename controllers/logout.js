export default (req, res) => {
  req.session.email = undefined;
  req.session.password = undefined;

  return res.redirect('/');
}