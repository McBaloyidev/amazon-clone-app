const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OX48MIF6tQUd187aEc1DD75MLC7TsfoOWRADgCvrI2GffvD3llpvG0Q3LD2EwuPIU2gAtDYjn9BmP8MdH1q20ht005e4IgdlY"
);

// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (req, res) => res.status(200).send("Hello world!"));

app.post("/payments/create", async (req, res) => {
  try {
    const total = req.query.total;

    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, 
      currency: "usd",
    });

    // Send the client secret to the client
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating PaymentIntent:", error.message);
    res.status(500).json({ error: "Unable to create PaymentIntent" });
  }
});

// List commands
exports.api = functions.https.onRequest(app);
