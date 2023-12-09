import { ThemeProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";

import store from "../store";

import Toasts from "../components/ui/Toasts";

//css
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styles = {
  global: (props) => {
    console.log({ props });
    return {
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("black", "black")(props),
        lineHeight: "base",
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word",
      },
    };
  },
};

const config = (theme) => {
  console.log({ theme });
  return {
    initialColorMode: "dark",
    useSystemColorMode: false,
  };
};

const theme = extendTheme({ config, styles });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Toasts />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
