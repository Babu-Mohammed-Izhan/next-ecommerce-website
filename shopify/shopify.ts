async function ShopifyData(query: string) {
  const URL = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2021-10/graphql.json`;

  const options = {
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": `${process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN}`,
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
    products(first: 30) {
      edges {
        node {
          id
          handle
          title
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

export async function createCheckout(
  id: string,
  quantity: number,
  model: string
) {
  const query = `
      mutation {
        checkoutCreate(input: {
          lineItems: [{ variantId: "${id}", quantity: ${quantity}, model: ${model}}]
        }) {
          checkout {
            id
            webUrl
          }
        }
      }`;

  const response = await ShopifyData(query);

  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : [];

  return checkout;
}
