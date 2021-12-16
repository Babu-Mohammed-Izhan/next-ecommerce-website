import Link from "next/link";
import { useState } from "react";
import { selectCart } from "../features/cart/cartSlice";
import { useAppSelector } from "../app/hook";

const Navbar = () => {
  const [hidden, setHidden] = useState(true);
  const cart = useAppSelector(selectCart);

  const handleToggle = () => {
    setHidden(!hidden);
  };
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div
        className="
      container
      px-6
      py-3
      mx-auto
      md:flex md:justify-between md:items-center
    "
      >
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a
                className="
                bg-clip-text text-transparent
                 bg-gradient-to-r 
                 from-blue-500 
                 to-purple-500
            text-xl
            font-bold
            dark:text-white
            md:text-2xl
            hover:to-purple-400
            hover:from-blue-400
          "
              >
                Casity
              </a>
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="
            text-gray-500
            dark:text-gray-200
            hover:text-gray-600
            dark:hover:text-gray-400
            focus:outline-none focus:text-gray-600
            dark:focus:text-gray-400
          "
              aria-label="toggle menu"
              onClick={() => handleToggle()}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`items-center md:flex ${hidden ? "hidden" : ""}`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link href="/">
              <a
                className="
            my-2
            text-gray-700
            dark:text-gray-200
            hover:text-indigo-500
            dark:hover:text-indigo-400
            md:mx-4 md:my-0
          "
              >
                Home
              </a>
            </Link>

            <Link href="/products">
              <a
                className="
                my-2
            text-gray-700
            dark:text-gray-200
            hover:text-indigo-500
            dark:hover:text-indigo-400
            md:mx-4 md:my-0
          "
              >
                Shop
              </a>
            </Link>
            <Link href="/contact">
              <a
                className="
                my-2
            text-gray-700
            dark:text-gray-200
            hover:text-indigo-500
            dark:hover:text-indigo-400
            md:mx-4 md:my-0
          "
              >
                Contact
              </a>
            </Link>
            <Link href="/about">
              <a
                className="
                my-2
            text-gray-700
            dark:text-gray-200
            hover:text-indigo-500
            dark:hover:text-indigo-400
            md:mx-4 md:my-0
          "
              >
                About
              </a>
            </Link>
          </div>

          <div className="flex justify-start md:block">
            <Link href="/cart">
              <a
                className="
                my-2
            relative
            text-gray-700
            dark:text-gray-200
            hover:text-gray-600
            dark:hover:text-gray-300
            md:my-0
          "
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                {cart.cart.length > 0 ? (
                  <span
                    className="
              absolute
              top-0
              left-0
              px-1
              text-[10px] text-white
              bg-indigo-500
              rounded-full
            "
                  >
                    {cart.cart.length}
                  </span>
                ) : null}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
