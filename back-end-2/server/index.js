const express = require("express");
const cors = require("cors");
const controller = require("./controller");

const app = express();

app.use(express.json());
app.use(cors());

const { getHouses, createHouses, updateHouses, deleteHouses } = controller;

app.get("/api/houses", getHouses);
app.delete("/api/houses/:id", deleteHouses);
app.post("/api/houses", createHouses);
app.put("/api/houses/:id", updateHouses);

app.listen(4004, () => console.log("Listening on port 4004"));