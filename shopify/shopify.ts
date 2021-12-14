async function ShopifyData(query: string) {
  const URL = `https://${process.env.domain}/api/2021-07/graphql.json`;

  const options = {
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": `${process.env.storefrontAccessToken}`,
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
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

export async function getAllProducts() {
  const query = `
    {
    products(first: 25) {
      edges {
        node {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 5) {
            edges {
              node {
                originalSrc
                altText
              }
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
