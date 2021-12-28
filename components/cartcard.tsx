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
        <Image
          src={data.node.images.edges[0].node.src}
          alt="product-image"
          height="100"
          width="100"
          className="rounded-full"
        />{" "}
        <div className="flex flex-col ml-3 px-4">
          <span className="md:text-xl font-medium">{data.node.title}</span>{" "}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="pr-8 flex ">{data.amount}</div>
        <div className="pr-3 md:pr-8 w-16 md:w-full">
          {" "}
          <span className=" font-medium text-sm md:text-lg">
            ₹ {data.node.priceRange.maxVariantPrice.amount}
          </span>{" "}
        </div>
        <div>
          {" "}
          <button
            className="text-white bg-red-500 rounded px-3 py-1 hover:text-white hover:bg-red-700 font-medium"
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
