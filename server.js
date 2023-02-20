
const express = require("express");
// import { faker } from "@faker-js/faker";
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;

class Usuario {
  constructor() {
    this.id = faker.random.alpha();
    this.nomber = faker.name.firstName();
    this.apellido = faker.name.lastName();
    this.telefono = faker.phone.number();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Empresa {
  constructor() {
    this.id = faker.random.numeric();
    this.nombre = faker.company.name();
    this.direccion = [
      {
        calle: faker.address.street(),
        ciudad: faker.address.country(),
        estado: faker.address.state(),
        codigoPostal: faker.address.countryCode(),
        pais: faker.address.country(),
      },
    ];
  }
}

// req es la abreviatura para request
// res es la abreviatura para response
app.get("/api/users/new", (req, res) => {
  res.json(new Usuario());
});

app.get("/api/companies/new", (req, res) => {
  res.json(new Empresa());
});

app.get("/api/user/company/new", (req, res) => {
  res.json([
    {
      Usuario: new Usuario(),
      Empresa: new Empresa(),
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));