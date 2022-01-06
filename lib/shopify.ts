import { CardProduct, CartProduct } from "../types";

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

// export async function createCheckout(cart: CartProduct[]) {
//   const lineItemsObject = cart.map((item: CartProduct) => {
//     return `{
//       variantId: "${item.node.id}",
//       quantity: ${item.amount}
//     }`;
//   });

//   const query = `
//       mutation {
//         checkoutCreate(input: {
//           lineItems: [${lineItemsObject}]
//         }) {
//           checkout {
//             id
//             webUrl
//           }
//         }
//       }`;

//   const response = await ShopifyData(query);

//   console.log(response);

//   const checkout = response.data.checkoutCreate.checkout
//     ? response.data.checkoutCreate.checkout
//     : [];

//   return checkout;
// }
