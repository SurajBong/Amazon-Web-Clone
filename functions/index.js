const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQFueCwaJOhBL5a4Vzck2BeDYPgq7CK6thmWGHsO5B8yCEi9Z3ZBMUUz75Qm7SRU36UC7rKZEiuFTyUh5X2NEVL00ET4b5yxN"
);

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request receined ----------", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    description: "test description",
    payment_method_types: ["card"],
    shipping: {
      name: "Jenny Rosen",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-e629e/us-central1/api
