import { Provider } from "react-redux";
import React from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";

import store from "../redux/store";
import withRedux, { createWrapper } from "next-redux-wrapper";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: lightblue;
    font-size: 20px;
    text-transform: uppercase;
    &:hover {
      color: rgba(0,0,0,0.6)
    }
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
