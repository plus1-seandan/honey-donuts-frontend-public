import { Box, Wrap, WrapItem, Center } from "@chakra-ui/react";
import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { Donut } from "./DonutLayout";
import { donuts } from "../constants";

const BoxLayout = ({ customBox, handleClick }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: () => ({ name: "DonutBox" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const Item = ({ item, index }) => {
    return (
      <WrapItem
        w="22%"
        h="100px"
        onClick={() => handleClick(index)}
        key={index}
      >
        <Donut donut={donuts[item.name]} />
      </WrapItem>
    );
  };
  return (
    <Center>
      <Box ref={drop} textAlign="center" maxHeight="330px" w="700px">
        <Wrap h="330px" border="solid">
          {customBox &&
            customBox.map((item, index) => (
              <Item item={item} index={index} key={index} />
            ))}
        </Wrap>
      </Box>
    </Center>
  );
};

export default BoxLayout;
