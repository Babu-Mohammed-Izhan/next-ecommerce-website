import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/card";

const Home: NextPage = () => {
  const data = [
    {
      title: "Anime",
      products: [
        { name: "Demon Slayer", price: 12 },
        { name: "JJK", price: 12 },
        { name: "Naruto", price: 12 },
        { name: "Jojo", price: 12 },
      ],
    },
    {
      title: "Superhero",
      products: [
        { name: "SuperMan", price: 12 },
        { name: "Batman", price: 12 },
        { name: "Iron Man", price: 12 },
        { name: "Captain America", price: 12 },
      ],
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
              <h2 className="text-2xl text-white font-semibold">Hard Cover</h2>
              <p className="mt-2 text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facere provident molestias ipsam sint voluptatum
                pariatur.
              </p>
              <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
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
                <p className="mt-2 text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore facere provident molestias ipsam sint voluptatum
                  pariatur.
                </p>
                <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
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
                <p className="mt-2 text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore facere provident molestias ipsam sint voluptatum
                  pariatur.
                </p>
                <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
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
                <>
                  <h3 className="text-gray-600 text-2xl font-medium">
                    {d.title}
                  </h3>
                  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    {d.products &&
                      d.products.map((p) => {
                        return <Card key={p.name} data={p} />;
                      })}
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
