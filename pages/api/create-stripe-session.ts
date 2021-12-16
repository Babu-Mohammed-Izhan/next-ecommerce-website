import { CartProduct } from "./../../types";
import { NextApiResponse, NextApiRequest } from "next";

const stripe = require("stripe")(`${process.env.STRIPE_PRIVATE_KEY}`);

import Stripe from "stripe";

const checkout = async (req: NextApiRequest, res: NextApiResponse) => {
  const products = req.body;

  const stripe = new Stripe(`${process.env.STRIPE_PRIVATE_KEY}`, {
    apiVersion: "2020-08-27",
  });

  const redirectURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://stripe-checkout-next-js-demo.vercel.app";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: products.map((item: CartProduct) => {
      return {
        price_data: {
          currency: "inr",
          product_data: {
            name: item.node.title,
          },
          unit_amount:
            Number(item.node.priceRange.maxVariantPrice.amount) * 100,
        },
        quantity: item.amount,
      };
    }),
    mode: "payment",
    success_url: `${redirectURL}?status=success`,
    cancel_url: `${redirectURL}?status=canceled`,
  });

  res.json({ id: session.id });
};

export default checkout;
