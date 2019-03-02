var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Burger.findAll({ include: [db.Customer],
    order: [["burger_name", "ASC"]] }).then(function (data) {


      res.render("index", { burgers: data });
    }).catch(err => res.json(err));
  });

  app.put("/api/burgers/:id", function (req, res) {

    db.Customer.create({
      name: req.body.customer_name
    }).then(function (data) {
      db.Customer.findOne({ where: { name: req.body.customer_name } }).then(function (results) {

        db.Burger.update({
          devoured: req.body.devoured,
          CustomerId: results.id
        }, {
            where: req.params
          }).then(function (conc) {
            res.json(conc);
          }).catch(err => res.json(err));
      }).catch(err => res.json(err));
    }).catch(err => res.json(err));
  });

  app.post("/api/burgers", function (req, res) {

    db.Burger.create(req.body).then(function (data) {
      res.json(data);
    }).catch(err => res.json(err));
  });

  app.delete("/api/burgers/:id", function (req, res) {
    db.Burger.destroy({
      where: req.params
    }).then(function (data) {
      res.json(data);
    }).catch(err => res.json(err));
  });

};
