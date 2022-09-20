import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../component/layout/main";
import theme from "../libs/theme";
// import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
// import Footer from "../components/footer";

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      {/* <Fonts /> */}
      <Layout router={router}>
        <AnimatePresence>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        {/* <Footer /> */}
      </Layout>
    </ChakraProvider>
  );
};

export default Website;