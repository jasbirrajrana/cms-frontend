import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";

import { client } from "./apollo";
import customTheme from "./styles/theme";
import GlobalStyle from "./GlobalStyle";
import "@fontsource/raleway";
import "@fontsource/ubuntu";
import "@fontsource/kristi";
import "@fontsource/ubuntu-mono";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <ColorModeScript />
      <ApolloProvider client={client}>
        <GlobalStyle />
        <App />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://cra.link/PWA

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
