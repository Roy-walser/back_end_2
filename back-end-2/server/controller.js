let realEstates = require("./db.json");
let globalID = 4;

module.exports = {
  getHouses: (req, res) => {
    // console.log(req.body)
    res.status(200).send(realEstates);
  },
  deleteHouses: (req, res) => {
    // console.log(req.body)
    let index = realEstates.findIndex((elem) => elem.id === +req.params.id);
    realEstates.splice(index, 1);
    res.status(200).send(realEstates);
  },
  createHouses: (req, res) => {
    // console.log(req.body)
    const { address, price, imageURL } = req.body;
    let newHouse = {
      id: +globalID,
      address,
      price: +price,
      imageURL,
    };
    realEstates.push(newHouse);
    globalID++;
    res.status(200).send(realEstates);
  },
  updateHouses: (req, res) => {
    // console.log(req.body)
    const { type } = req.body;
    let index = realEstates.findIndex((elem) => elem.id === +req.params.id);
    if (type === "plus") {
      realEstates[index].price += 10000;
      res.status(200).send(realEstates);
    } else if (type === "minus" && realEstates[index].price >= 10001) {
      realEstates[index].price -= 10000;
      res.status(200).send(realEstates);
    } else {
      res.status(400).send("Invalid Price!");
    }
  },
};