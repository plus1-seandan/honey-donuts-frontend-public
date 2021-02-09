import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Link,
  Heading,
  Center,
  Spacer,
  Text,
  Image,
  IconButton,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

import logoOF from "../logoOF.png";
import Cart from "./Cart";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart);

  const handleClose = () => {
    setIsOpen(false);
  };

  const link = (
    <Link href={"/customize-box"} color="tomato">
      here
    </Link>
  );

  return (
    <Box w="100%" mt="20px">
      <Box d="flex" justifyContent="flex-start">
        <HStack spacing="24px">
          <Box w="180px" h="10">
            <Link as={ReachLink} to="/">
              <Text textAlign="center">Home</Text>
            </Link>
          </Box>
          <Box w="180px" h="10">
            <Link as={ReachLink} to="/order-online">
              <Text textAlign="center">Order Online</Text>
            </Link>
          </Box>
          <Box w="180px" h="10">
            <Link as={ReachLink} to="/reviews">
              <Text textAlign="center">Reviews</Text>
            </Link>
          </Box>
        </HStack>
        <Spacer />
        <Box d="flex" position="relative">
          <Box position="absolute" alignSelf="center" left="-200px">
            Shopping Cart
          </Box>
          <IconButton
            ml="8px"
            size="lg"
            icon={<ShoppingCartIcon />}
            onClick={() => setIsOpen(true)}
            position="absolute"
            left="-50px"
          />
          <Box
            position="absolute"
            alignSelf="flex-start"
            zIndex="10"
            left="-3px"
          >
            <Badge fontSize="1em" colorScheme="green">
              {cart ? cart.length : 0}
            </Badge>
          </Box>
        </Box>
      </Box>
      <Center w="100%" d="flex" flexDirection="column" pt={8}>
        <Image boxSize="150px" src={logoOF} />
        <Heading>Honey Donuts</Heading>
      </Center>
      <Spacer />
      <Box
        w="100%"
        d="flex"
        h="70px"
        alignItems="flex-end"
        justifyContent="center"
      >
        <Text fontSize="xl">
          Try our new interactive ordering system {link}!
        </Text>
      </Box>
      <Cart isOpen={isOpen} handleClose={handleClose} />
    </Box>
  );
};

export default Header;
