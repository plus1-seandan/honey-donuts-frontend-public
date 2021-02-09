import { GridItem, Grid, Box } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import DragDropLayout from "../components/DragDropLayout";
import Footer from "../components/Footer";

const CustomizeBox = (props) => {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(12, 1fr)"
      templateColumns="repeat(12, 1fr)"
    >
      <GridItem rowStart={1} rowEnd={13} colStart={1} colEnd={2} />
      <GridItem rowStart={1} rowEnd={2} colStart={2} colEnd={12}>
        <Header />
      </GridItem>
      <GridItem rowStart={2} rowEnd={11} colStart={2} colEnd={12}>
        <DragDropLayout />
        <GridItem rowStart={1} rowEnd={13} colStart={2} colEnd={12} mt="80px">
          <Footer />
        </GridItem>
      </GridItem>
      <GridItem rowStart={1} rowEnd={13} colStart={12} colEnd={13} />
    </Grid>
  );
};

export default CustomizeBox;
