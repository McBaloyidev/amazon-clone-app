const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OX48MIF6tQUd187aEc1DD75MLC7TsfoOWRADgCvrI2GffvD3llpvG0Q3LD2EwuPIU2gAtDYjn9BmP8MdH1q20ht005e4IgdlY"
);

//API

//-APP Config
const app = express();

//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API Routes
app.get("/", (req, res) => res.status(200).send("Hello world!"));

//-List comannds
exports.api = functions.https.onRequest(app);
