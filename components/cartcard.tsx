import Image from "next/image";
import { CartProduct } from "../types";
import { useAppDispatch } from "../app/hook";
import { removeProduct } from "../features/cart/cartSlice";

interface cartCardType {
  data: CartProduct;
  key: string;
}

const Cartcard = ({ data }: cartCardType) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(
      removeProduct({
        ...data,
      })
    );
  };

  return (
    <div className="flex justify-between items-center mt-6 pt-6">
      <div className="flex items-center">
        {" "}
        <Image
          src="https://i.imgur.com/EEguU02.jpg"
          width="60"
          height="60"
          className="rounded-full "
          alt="product"
        />
        <div className="flex flex-col ml-3">
          <span className="md:text-md font-medium">{data.node.title}</span>{" "}
          <span className="md:text-md font-medium px-4">
            {data.node.handle}
          </span>{" "}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="pr-8 flex ">{data.amount}</div>
        <div className="pr-8 ">
          {" "}
          <span className="text-xs font-medium">
            ₹ {data.node.priceRange.maxVariantPrice.amount}
          </span>{" "}
        </div>
        <div>
          {" "}
          <button
            className="fa fa-close text-xs font-medium"
            onClick={() => handleDelete()}
          >
            Delete
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
