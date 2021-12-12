import { selectCart } from "../features/cart/cartSlice";
import { useAppSelector } from "../app/hook";
import Cartcard from "../components/cartcard";
import Link from "next/link";
import { CartProduct } from "../types";

const Cart = () => {
  const cart = useAppSelector(selectCart);
  const cartArray = cart.cart;

  return (
    <div className="p-4 px-5 py-5 w-11/12 m-auto ">
      <div className=" p-5">
        <h1 className="text-2xl font-medium ">Shopping Cart</h1>
        {cartArray.length > 0 ? (
          <div className=" p-5">
            {cartArray.map((p: CartProduct) => {
              return <Cartcard data={p} key={p.name} />;
            })}
            <div className="flex justify-between items-center mt-6 pt-6 border-t">
              <div className="flex items-center">
                {" "}
                <i className=" text-sm pr-2"></i>{" "}
                <Link href="/" passHref>
                  <span className="text-md font-medium text-purple-500 cursor-pointer">
                    Continue Shopping
                  </span>
                </Link>{" "}
              </div>
              <div className="flex flex-col">
                {" "}
                <div className="flex justify-center items-end">
                  <span className="text-sm font-medium text-gray-400 mr-1">
                    Subtotal:
                  </span>{" "}
                  <span className="text-lg font-bold text-gray-800 ">
                    {" "}
                    $24.90
                  </span>{" "}
                </div>
                <button className="mt-4 h-8 w-full bg-purple-500 rounded focus:outline-none text-white hover:bg-purple-600">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Cart;
