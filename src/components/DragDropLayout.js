import {
  Grid,
  GridItem,
  Box,
  VStack,
  Heading,
  Spacer,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addItemToCart, clearDonutBox, removeFromDonutBox } from "../actions";
import BoxLayout from "./BoxLayout";
import DonutLayout from "./DonutLayout";

//debounce

function DragDropLayout() {
  const dispatch = useDispatch();
  const customBox = useSelector((state) => state.customBox);
  const history = useHistory();
  const handleClearBox = () => {
    dispatch(clearDonutBox());
  };
  const createOrder = () => {
    let notes = "";
    customBox.forEach((item) => {
      notes += ` x1 ${item.name}`;
    });
    const result = {
      name: "Custom Dozen",
      quantity: 1,
      totalPrice: 20,
      notes,
    };
    return result;
  };

  const handleSubmit = () => {
    const result = createOrder();
    dispatch(addItemToCart(result));
    dispatch(clearDonutBox());
    history.push("/order-online");
  };

  const handleClick = (idx) => {
    dispatch(removeFromDonutBox(idx));
  };

  return (
    <Box mt="100px">
      <Grid
        h="50%"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
        mt="20px"
        d="flex"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <GridItem h="100%" rowStart={1} rowEnd={7} colStart={1} colEnd={13}>
          <VStack mt="-80px">
            <Box>
              <Button mr="8px" onClick={handleClearBox}>
                Clear
              </Button>
              <Button onClick={handleSubmit}>Add To Cart</Button>
            </Box>
            <BoxLayout customBox={customBox} handleClick={handleClick} />
          </VStack>
        </GridItem>
        <GridItem rowStart={7} rowEnd={13} colStart={1} colEnd={13}>
          <Box>
            <Center d="flex" flexDirection="column">
              <Text fontSize="2xl" color="#FFC0CB">
                Drag donuts into the box | Click to remove
              </Text>
            </Center>
          </Box>
          <DonutLayout />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default DragDropLayout;
