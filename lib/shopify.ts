async function ShopifyData(query: string) {
  const URL = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2022-01/graphql.json`;

  const options = {
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": `13621b6f6015e95d606a4eeceb25c02d`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });
    return data;
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}

export async function getAllProducts() {
  const query = `
  {
    products(first: 30) {
      edges {
        node {
          id
          handle
          title
          images(first: 3) {
            edges {
              node {
                id
                src
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
  
  `;

  const response = await ShopifyData(query);

  const allProducts = response.data.products.edges
    ? response.data.products.edges
    : [];

  return allProducts;
}

export async function getAllCollections() {
  const query = `
  {
    collections(first:5){
      edges{
        node{
          id
          handle
        }
      }
    }
  }
  
  `;

  const response = await ShopifyData(query);

  const allCollections = response.data.collections.products.edges
    ? response.data.products.edges
    : [];

  return allCollections;
}

export async function getAllPoductCollection(handle: string) {
  const query = `
  {
    collection(handle:"${handle}") {
      products(first:5) {
        edges {
          node {
            id
            handle
            title
            images(first: 3) {
              edges {
                node {
                  id
                  src
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  }
  
  
  `;

  const response = await ShopifyData(query);

  const allCollections = response.data.collection.products.edges
    ? response.data.collection.products.edges
    : [];

  return allCollections;
}
