import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { CartProduct } from "../types";

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
