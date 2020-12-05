import React from "react";
import { Helmet } from "react-helmet-async";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const appTheme = extendTheme({
  colors: {
    brand: {
      100: "#CCD0E7",
      200: "6E769E60",
      800: "BDC3DD",
      900: "#9094B4",
    },
  },
  fonts: {
    heading: `"Roboto Condensed", sans-serif`,
    body: "Roboto, sans-serif",
    mono: "Menlo, monospace",
  },
  textStyles: {
    h1: {
      fontSize: ["4xl", "5xl"],
      fontWeight: "bold",
      lineHeight: "56px",
    },
    p: {
      fontWeight: "bold",
      py: 4,
      color: "rgba(204, 208, 231, 0.5)",
    },
  },
});

type PageWrapperProps = {
  children: React.ReactNode;
  title: string;
};

export const PageWrapper = ({
  children,
  title,
}: PageWrapperProps & React.ReactNode) => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ChakraProvider theme={appTheme}>
        <Box w="100%" h="100vh">
          {children}
        </Box>
      </ChakraProvider>
    </>
  );
};
