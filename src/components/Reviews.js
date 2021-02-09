import { Box, GridItem, Grid, Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import DisplayReviews from "./DisplayReviews";
import ReviewModal from "./ReviewModal";

const ReviewsBox = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      h="100%"
      templateRows="repeat(12, 1fr)"
      templateColumns="repeat(12, 1fr)"
    >
      <GridItem rowStart={1} rowEnd={13} colStart={1} colEnd={2} />
      <GridItem rowStart={1} rowEnd={2} colStart={2} colEnd={12}>
        <Box d="flex" alignItems="flex-end" flexDirection="column" mt="30px">
          <Box>
            <Button bg="#00FF7F" onClick={() => setOpen(true)}>
              Leave us a Review
            </Button>
          </Box>
        </Box>
      </GridItem>
      <GridItem rowStart={2} rowEnd={11} colStart={2} colEnd={12}>
        <DisplayReviews />
      </GridItem>
      <GridItem rowStart={11} rowEnd={13} colStart={2} colEnd={12} />
      <GridItem rowStart={1} rowEnd={13} colStart={12} colEnd={13} />
      <ReviewModal isOpen={open} handleClose={handleClose} />
    </Grid>
  );
};

export default ReviewsBox;
