const Shop = () => {
  const products = [
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
    { name: "JJK", price: 12 },
  ];
  return (
    <div className="container mx-auto px-6">
      <h3 className="text-gray-700 text-2xl font-medium">All Cases</h3>
      <span className="mt-3 text-sm text-gray-500">200+ Products</span>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products &&
          products.map((p) => {
            return (
              <div
                className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden mt-5"
                key={p.name}
              >
                <div className="flex items-end justify-end h-56 w-full bg-cover">
                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
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
                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase">{p.name}</h3>
                  <span className="text-gray-500 mt-2">$ {p.price}</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Shop;
