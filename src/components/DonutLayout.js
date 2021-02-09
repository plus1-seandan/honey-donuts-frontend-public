import {
  Center,
  Heading,
  Wrap,
  WrapItem,
  Box,
  Image,
  Text,
  Button,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React, { memo } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { addDonutToBox } from "../actions";
import { ItemTypes } from "../ItemTypes";
import { donuts } from "../constants";
export const Donut = ({ donut }) => {
  const dispatch = useDispatch();
  const customBox = useSelector((state) => state.customBox);

  const [{ isDragging }, drag] = useDrag({
    item: { name: donut.name, type: ItemTypes.BOX },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        if (customBox.length >= 12) {
          return;
        }
        dispatch(addDonutToBox(item));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <Box ref={drag}>
      <Image fit boxSize="100px" src={donut.img} />
    </Box>
  );
};
const Item = ({ donut }) => {
  return (
    <WrapItem>
      <Donut donut={donut} />
      <Text alignSelf="center">{donut.label}</Text>
    </WrapItem>
  );
};
const DonutLayout = () => {
  return (
    <Center>
      <Box overflow="hidden" maxW="1000px">
        <Wrap>
          {Object.values(donuts).map((donut) => (
            <Item donut={donut} key={donut.name} />
          ))}
        </Wrap>
      </Box>
    </Center>
  );
};

export default DonutLayout;
