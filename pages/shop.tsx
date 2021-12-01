import React from "react";
import Card from "../components/card";

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
            return <Card key={p.name} data={p} />;
          })}
      </div>
    </div>
  );
};

export default Shop;
