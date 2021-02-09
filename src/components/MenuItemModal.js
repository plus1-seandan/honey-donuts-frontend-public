import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Box,
  Image,
  Badge,
  Spacer,
  RadioGroup,
  Radio,
  Stack,
  Text,
  Textarea,
  IconButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart, updateItem, editCartItem } from "../actions";

function MenuItemModal({ onClose }) {
  const dispatch = useDispatch();
  const { isOpen, item, edit } = useSelector((state) => state.menu);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(item));
    onClose();
  };
  const handleEdit = () => {
    dispatch(editCartItem(item, edit));
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Box maxW="m" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={item.image} alt="Image Not Found" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2">
                  Hot 🔥
                </Badge>
              </Box>
              <form onSubmit={handleSubmit}>
                <Box
                  d="flex"
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {item.name}
                  <Spacer />${item.price}
                </Box>
                <Box pb={4}>{item.description}</Box>
                <Box>
                  <Text fontSize="lg">Special Request</Text>
                  <Textarea
                    placeholder="Tell us if you request special accomodations"
                    onChange={(e) => {
                      dispatch(updateItem("notes", e.target.value));
                    }}
                  />
                </Box>
                <Box d="flex" alignItems="center">
                  <Text fontSize="lg">Quantity</Text>
                  <Spacer />
                  <IconButton
                    icon={<MinusIcon />}
                    onClick={() => {
                      dispatch(
                        updateItem("quantity", Math.max(item.quantity - 1, 1))
                      );
                    }}
                  />
                  <Box pr={2} pl={2}>
                    {item.quantity}
                  </Box>
                  <IconButton
                    icon={<AddIcon />}
                    onClick={() => {
                      dispatch(updateItem("quantity", item.quantity + 1));
                    }}
                  />
                </Box>
                <Box d="flex" pt={4}>
                  <Text fontSize="lg">Price</Text>
                  <Spacer />
                  <Text fontSize="lg">
                    ${Number(item.totalPrice).toFixed(2)}
                  </Text>
                </Box>
                {edit !== -1 ? (
                  <Box pt={6} d="flex" justifyContent="flex-end">
                    <Button onClick={handleEdit}>Edit</Button>
                  </Box>
                ) : (
                  <Box pt={6} d="flex" justifyContent="flex-end">
                    <Button type="submit">ADD TO CART</Button>
                  </Box>
                )}
              </form>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
export default MenuItemModal;
