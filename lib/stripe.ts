// import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { CardProduct, CartProduct } from "../types";

// export const checkoutCreate = async (cart: CartProduct[]) => {
//   const stripe = new Stripe(`${process.env.STRIPE_PRIVATE_KEY}`, {
//     apiVersion: "2020-08-27",
//   });

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: cart.map((item) => {
//       return {
//         price_data: {
//           currency: "inr",
//           product_data: {
//             name: item.node.title,
//           },
//           unit_amount:
//             Number(item.node.priceRange.maxVariantPrice.amount) * 100,
//         },
//         quantity: item.amount,
//       };
//     }),
//     mode: "payment",
//     success_url: `success`,
//     cancel_url: `canceled`,
//   });

//   return session;
// };

const checkoutCreate = async (cart: CartProduct[]) => {
  const stripePromise = loadStripe(
    "pk_test_51JHMrwSHAZAO2kf4DD8By9itZ1yv4lYlThKs7YPukANk6lx4vKSJEJqltqyQ4ntKFSugb7IKfryfAmZjc6klcn7L00fd2BqMxg"
  );
  const stripe = await stripePromise;
  const checkoutSession = await axios.post("/api/create-stripe-session", {
    cart,
  });
  const result =
    stripe &&
    (await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    }));
  if (result && result.error) {
    alert(result.error.message);
  }
};

export { checkoutCreate };
