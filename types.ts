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
      images: {
        edges: [
          {
            node: {
              id: string;
              src: string;
            };
          }
        ];
      };
    };
  };
}

export interface Product {
  node: {
    title: string;
    id: string;
    handle: string;
    priceRange: priceRange;
    images: {
      edges: [
        {
          node: {
            id: string;
            src: string;
          };
        }
      ];
    };
  };
}

export interface CartProduct {
  node: {
    title: string;
    id: string;
    handle: string;
    priceRange: priceRange;
    images: {
      edges: [
        {
          node: {
            id: string;
            src: string;
          };
        }
      ];
    };
  };
  amount: number;
  model: string;
}
