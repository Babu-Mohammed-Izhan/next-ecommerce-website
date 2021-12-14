interface priceRange {
  maxVariantPrice: {
    amount: string;
  };
}

export interface CardProduct {
  data: {
    node: {
      title: string;
      id: string;
      handle: string;
      priceRange: priceRange;
    };
  };
}

export interface Product {
  node: {
    title: string;
    id: string;
    handle: string;
    priceRange: priceRange;
  };
}

export interface CartProduct {
  node: {
    title: string;
    id: string;
    handle: string;
    priceRange: priceRange;
  };
  amount: number;
}
