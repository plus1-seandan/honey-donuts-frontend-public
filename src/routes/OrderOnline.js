import React from "react";
import { GridItem, Grid, Box } from "@chakra-ui/react";

// import Cart from "../components/Cart";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const OrderOnline = () => {
  return (
    <Grid
      h="100%"
      templateRows="repeat(12, 1fr)"
      templateColumns="repeat(12, 1fr)"
    >
      <GridItem rowStart={1} rowEnd={13} colStart={1} colEnd={2} />
      <GridItem rowStart={1} rowEnd={1} colStart={2} colEnd={12}>
        <Header />
      </GridItem>
      <GridItem mt="400px" rowStart={1} rowEnd={13} colStart={2} colEnd={12}>
        <Box>
          <Menu />
          <Box mt="80px">
            <Footer />
          </Box>
        </Box>
      </GridItem>
      <GridItem rowStart={1} rowEnd={13} colStart={12} colEnd={13} />
    </Grid>
  );
};
export default OrderOnline;
