var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll().then(function(data) {
      res.render("index", { burgers: data});
    }).catch(err => res.json(err));
  });

  app.put("/api/burgers", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.Burger.update(req.body, {
          where: req.body.id
    }).then(function(data) {
      res.json(data);
    }).catch(err => res.json(err));
  });

  app.post("/api/burgers", function(req, res) {
    db.Burger.create(req.body).then(function(data) {
      res.json(data);
    }).catch(err => res.json(err));
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.Burger.destroy({
      where: req.params
    }).then(function(data) {
      res.json(data);
    }).catch(err => res.json(err));
  });

};
