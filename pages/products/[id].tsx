import Image from 'next/image';
import { useState } from 'react';
import Card from '../../components/card';
import { Product } from '../../types';
import { useAppDispatch } from '../../app/hook';
import { addProduct, CartState } from '../../features/cart/cartSlice';
import { useRouter } from 'next/router';
import { getAllProducts } from '../../lib/shopify';

interface ProductProps {
  product: Product;
  moreProducts: Product[];
}

const ProductPage = ({ product, moreProducts }: ProductProps) => {
  const [amount, setAmount] = useState(1);
  const [phone, setPhone] = useState('realme1');

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleOrder = () => {
    handleAddtoCart();
    router.push('/cart');
  };

  const handleModel = (e: any) => {
    e.preventDefault();
    setPhone(e.target.value);
  };

  const handleAddtoCart = () => {
    dispatch(
      addProduct({
        ...product,
        amount: amount,
        model: phone,
      })
    );
  };

  const modelArray = [
    'realme1',
    'realme2',
    'realme3',
    'realme4',
    'realme5',
    'realme6',
    'realme7',
    'realme8',
    'realme9',
    'realme8i',
    'realme7i',
    'realme6i',
    'realme5i',
    'realme4i',
  ];

  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center">
          <div className="w-full md:w-1/2 lg:h-96">
            {/* <Image
              className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
              src={product.node.images.edges[0].node.src}
              alt="Product Images"
              width="1000px"
              height="1000px"
            /> */}
          </div>
          <div className="w-full max-w-lg mx-auto md:mt-5 mt-20 md:ml-8  md:w-1/2">
            <h3 className="text-gray-700 uppercase text-lg">
              {product?.node.title}
            </h3>
            <span className="text-gray-500 mt-3">
              ₹ {product?.node.priceRange.maxVariantPrice.amount}
            </span>
            <hr className="my-3" />
            <div className="mt-2">
              <label className="text-gray-700 text-sm" htmlFor="count">
                Count:
              </label>
              <div className="flex items-center mt-1">
                <button
                  className="text-gray-500 focus:outline-none focus:text-gray-600"
                  onClick={() => setAmount(amount + 1)}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
                <span className="text-gray-700 text-lg mx-2">{amount}</span>
                <button
                  className="text-gray-500 focus:outline-none focus:text-gray-600"
                  onClick={() => (amount > 1 ? setAmount(amount - 1) : null)}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-20">
              <label className="text-gray-700 text-sm" htmlFor="count">
                Phone Model :
              </label>
              <select name="model" id="model" onChange={handleModel}>
                {modelArray.map((m) => {
                  return (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex items-center mt-6">
              <button
                className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                onClick={() => handleOrder()}
              >
                Order Now
              </button>
              <button
                className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none"
                onClick={() => handleAddtoCart()}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-56">
          <h3 className="text-gray-600 text-2xl font-medium">More Products</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {moreProducts &&
              moreProducts.map((p: Product) => {
                return <Card key={p.node.id} data={p} />;
              })}
          </div>
        </div>
      </div>
    </main>
  );
};

export async function getStaticProps(context: any) {
  const data: Product[] = await getAllProducts(30);

  const caseData = data.find((d: Product) => d.node.id === context.params.id);

  return {
    props: {
      product: caseData,
      moreProducts: data.slice(0, 4),
    },
  };
}

export async function getStaticPaths() {
  const data: Product[] = await getAllProducts(30);

  const paths =
    data &&
    data.map((d) => {
      return {
        params: {
          id: d.node.id,
        },
      };
    });

  return {
    paths,
    fallback: true,
  };
}
export default ProductPage;
