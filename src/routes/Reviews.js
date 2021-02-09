import { GridItem, Grid } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import ReviewsBox from "../components/Reviews";

const Reviews = () => {
  return (
    <Grid
      h="1400px"
      templateRows="repeat(12, 1fr)"
      templateColumns="repeat(12, 1fr)"
    >
      <GridItem rowStart={1} rowEnd={13} colStart={1} colEnd={2} />
      <GridItem rowStart={1} rowEnd={4} colStart={2} colEnd={12}>
        <Header />
      </GridItem>
      <GridItem rowStart={4} rowEnd={13} colStart={2} colEnd={12}>
        <ReviewsBox />
      </GridItem>
      <GridItem rowStart={1} rowEnd={13} colStart={12} colEnd={13} />
    </Grid>
  );
};
export default Reviews;
