interface priceRange {
  maxVariantPrice: {
    amount: string;
  };
}

export interface CartProduct {
  node: {
    title: string;
    id: string;
    handle: string;
    priceRange: priceRange;
  };
}

export interface Product {
  name: string;
  price: number;
}
