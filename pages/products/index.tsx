import React from 'react';
import Card from '../../components/card';
import { getAllProducts } from '../../lib/shopify';
import { CartProduct, Product } from '../../types';

interface ProductList {
  products: CartProduct[];
}

const Shop = ({ products }: ProductList) => {
  return (
    <div className="container mx-auto px-6 py-5">
      <h3 className="text-gray-700 text-2xl font-medium">All Cases</h3>
      <span className="mt-3 text-sm text-gray-500">200+ Products</span>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products &&
          products.map((p: Product) => {
            return <Card key={p.node.id} data={p} />;
          })}
      </div>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const data: CartProduct[] = await getAllProducts(30);

  return {
    props: {
      products: data,
    },
  };
}

export default Shop;
