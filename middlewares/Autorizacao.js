module.exports = (req, res, next) => {

    if(typeof(req.session.usuario) != "undefined"){
        return next();
    } else {
        return res.redirect("/errors/401")
    }

}
