import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/card";
import { getAllProducts } from "../shopify/shopify";

const Home: NextPage = ({ moreProducts }: any) => {
  const data = [
    {
      title: "Anime",
      products: moreProducts,
    },
    {
      title: "Superhero",
      products: moreProducts,
    },
  ];
  return (
    <div>
      <Head>
        <title>Casey</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-6 pt-3">
        <div className="h-64 rounded-md overflow-hidden bg-cover bg-center">
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-4xl text-white font-semibold">Hard Cover</h2>
              <p className="mt-2 text-gray-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facere provident molestias ipsam sint voluptatum
                pariatur.
              </p>
              <button
                className="flex items-center mt-4 px-3 py-2  bg-gradient-to-r 
                 from-blue-600 
                 to-purple-600 text-white text-sm uppercase font-medium rounded hover:from-blue-500 hover:to-purple-500 focus:outline-none "
              >
                <span>Shop Now</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex mt-8 md:-mx-4">
          <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2">
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Anime Cases
                </h2>
                <p className="mt-2 text-gray-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore facere provident molestias ipsam sint voluptatum
                  pariatur.
                </p>
                <button
                  className="flex items-center mt-4 px-2 py-2  bg-gradient-to-r from-blue-600 
                 to-purple-600 text-white text-sm uppercase font-medium rounded hover:from-blue-500 hover:to-purple-500 focus:outline-none "
                >
                  <span>Shop Now</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Super Hero Cases
                </h2>
                <p className="mt-2 text-gray-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore facere provident molestias ipsam sint voluptatum
                  pariatur.
                </p>
                <button
                  className="flex items-center mt-4 px-2 py-2  bg-gradient-to-r from-blue-600 
                 to-purple-600 text-white text-sm uppercase font-medium rounded hover:from-blue-500 hover:to-purple-500 focus:outline-none "
                >
                  <span>Shop Now</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          {data &&
            data.map((d) => {
              return (
                <div key={d.title}>
                  <h3 className="text-gray-600 text-2xl font-medium">
                    {d.title}
                  </h3>
                  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    {d.products &&
                      d.products.map((p: any) => {
                        return <Card key={p.name} data={p} />;
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const data = await getAllProducts();
  console.log(data);

  return {
    props: {
      moreProducts: data,
    },
  };
}

export default Home;
