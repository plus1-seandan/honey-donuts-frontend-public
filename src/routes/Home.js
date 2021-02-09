import { GridItem, Grid, Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBody from "../components/HomeBody";

const Home = (props) => {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(12, 1fr)"
      templateColumns="repeat(12, 1fr)"
    >
      <GridItem rowStart={1} rowEnd={13} colStart={1} colEnd={2} />
      <GridItem rowStart={1} rowEnd={4} colStart={2} colEnd={12}>
        <Header />
      </GridItem>
      <GridItem rowStart={4} rowEnd={12} colStart={2} colEnd={12} mt="120px">
        <HomeBody />
        <Box mt="100px">
          <Footer />
        </Box>
      </GridItem>
      <GridItem rowStart={1} rowEnd={13} colStart={12} colEnd={13} />
    </Grid>
  );
};

export default Home;
