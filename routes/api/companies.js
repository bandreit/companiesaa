const express = require("express");
const router = express.Router();

const companies = [
  {
    id: 1,
    name: "Bucuria",
    address: "48 Ismail Street",
    city: "Chisinau",
    country: "Moldova",
    email: "bucuria@mail.md",
    phone_number: "+37364687947",
    beneficial_owners: []
  },
  {
    id: 2,
    name: "Zara",
    address: "10/2 Gefognad Street",
    city: "Vienna",
    country: "Austria",
    email: "vienna@zara.com",
    phone_number: "+3234524624",
    beneficial_owners: []
  },
  {
    id: 3,
    name: "Zubr",
    address: "3 Mihailovski Street",
    city: "Reni",
    country: "Ukraine",
    email: "reni@zubr.ua",
    phone_number: "+6538394633",
    beneficial_owners: []
  }
];

router
  .get("/", (req, res) => res.json(companies))
  .post("/", (req, res) => {
    const newCompany = {
      id: companies.length + 1,
      name: req.body.name,
      address: req.body.address,
      city: req.body.city,
      country: req.body.country,
      email: req.body.email,
      phone_number: req.body.phone_number
    };

    if (
      !newCompany.id ||
      !newCompany.name ||
      !newCompany.address ||
      !newCompany.city ||
      !newCompany.country
    ) {
      return res
        .status(400)
        .send({ msg: "Please include all the needed data" });
    }

    companies.push(newCompany);
    res.json(companies);
  });

router
  .get("/:id", (req, res) => {
    const found = companies.some(
      company => company.id === parseInt(req.params.id)
    );

    if (found) {
      res.json(
        companies.filter(company => company.id === parseInt(req.params.id))
      );
    } else {
      res.status(400).json({ msg: `No company with id of ${req.params.id}` });
    }
  })
  .put("/:id", (req, res) => {
    const found = companies.some(
      company => company.id === parseInt(req.params.id)
    );

    if (found) {
      const updCompany = req.body;
      companies.forEach(company => {
        if (company.id === parseInt(req.params.id)) {
          company.id = updCompany.id ? updCompany.id : company.id;
          company.name = updCompany.name ? updCompany.name : company.name;
          company.address = updCompany.address
            ? updCompany.address
            : company.address;
          company.city = updCompany.city ? updCompany.city : company.city;
          company.country = updCompany.country
            ? updCompany.country
            : company.country;
          company.email = updCompany.email ? updCompany.email : company.email;
          company.phone_number = updCompany.phone_number
            ? updCompany.phone_number
            : company.phone_number;
          res.json({ msg: "Company was updated", company });
        }
      });
    } else {
      res
        .status(400)
        .json({ msg: `No company with the id of ${req.params.id}` });
    }
  });

router.post("/:id/beneficial_owners", (req, res) => {
  const found = companies.some(
    company => company.id === parseInt(req.params.id)
  );
  const newBeneficialOwners = req.body;
  if (found) {
    companies.forEach(company => {
      if (company.id === parseInt(req.params.id)) {
        newBeneficialOwners.map(newBO => company.beneficial_owners.push(newBO));
        res.json(company);
      }
    });
  }
});

module.exports = router;
