import Stripe from "stripe";
import { CardProduct, CartProduct } from "../types";

export const checkoutCreate = async (cart: CartProduct[]) => {
  const stripe = new Stripe(`${process.env.STRIPE_PRIVATE_KEY}`, {
    apiVersion: "2020-08-27",
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: cart.map((item) => {
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
    success_url: `${process.env.DOMAIN}/success`,
    cancel_url: `${process.env.DOMAIN}/canceled`,
  });

  return session;
};
