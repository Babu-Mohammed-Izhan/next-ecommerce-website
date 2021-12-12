import Image from "next/image";
import { CartProduct } from "../types";

interface cartCardType {
  data: CartProduct;
  key: string;
}

const Cartcard = ({ data }: cartCardType) => {
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
          {" "}
          <span className="md:text-md font-medium">{data.name}</span>{" "}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="pr-8 flex ">
          {" "}
          <span className="font-semibold">-</span>{" "}
          <input
            type="text"
            className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
            value={data.amount}
          />{" "}
          <span className="font-semibold">+</span>{" "}
        </div>
        <div className="pr-8 ">
          {" "}
          <span className="text-xs font-medium">$ {data.price}</span>{" "}
        </div>
        <div>
          {" "}
          <i className="fa fa-close text-xs font-medium"></i>{" "}
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
