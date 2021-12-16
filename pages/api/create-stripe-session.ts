import { CartProduct } from "./../../types";
import { NextApiResponse, NextApiRequest } from "next";
import Stripe from "stripe";

const checkout = async (req: NextApiRequest, res: NextApiResponse) => {
  const products = req.body.cart;
  console.log(products);

  const stripe = new Stripe(`${process.env.STRIPE_PRIVATE_KEY}`, {
    apiVersion: "2020-08-27",
  });

  const redirectURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://stripe-checkout-next-js-demo.vercel.app";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["IN"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "inr",
          },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
    ],
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
    success_url: `${redirectURL}/success`,
    cancel_url: `${redirectURL}/cancelled`,
  });

  res.json({ id: session.id });
};

export default checkout;
