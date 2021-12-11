import { selectCart } from "../features/cart/cartSlice";
import { useAppSelector } from "../app/hook";

const Cart = () => {
  const cart = useAppSelector(selectCart);

  console.log(cart);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Cart;
