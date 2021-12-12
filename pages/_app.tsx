import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import Layout from "../components/layout";

import { Provider } from "react-redux";
import store from "../app/store";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </Provider>
  );
}
