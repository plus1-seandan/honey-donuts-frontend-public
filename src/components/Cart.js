import React, { useEffect, useState } from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Grid,
  Spacer,
  Box,
  RadioGroup,
  Radio,
  Stack,
  HStack,
  Text,
} from "@chakra-ui/react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useDispatch, useSelector } from "react-redux";

import { removeItemFromCart, setSelectedItem } from "../actions";
import { useHistory } from "react-router-dom";

const OrderItems = ({ items }) => {
  return items.map((item, index) => {
    return <Item item={item} idx={index} key={index} />;
  });
};

const Item = ({ item, idx }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeItemFromCart(idx));
  };

  const handleEdit = () => {
    dispatch(setSelectedItem(item, idx));
    history.push("/order-online");
  };

  return (
    <Box mt={4}>
      <HStack spacing="24px" alignItems="flex-start">
        <Box w="40px">x{item.quantity}</Box>
        <Box w="300px">
          <Text fontSize="xl">{item.name}</Text>
          {item.notes && <Text color="gray.500">Notes: {item.notes}</Text>}
        </Box>
        <Box w="100px">${Number(item.totalPrice).toFixed(2)}</Box>
      </HStack>
      <Box d="flex" justifyContent="flex-end" mb="20px">
        <Button size="md" onClick={handleEdit} mr="20px">
          Edit
        </Button>
        <Button size="md" bg="tomato" onClick={handleClick}>
          Remove
        </Button>
      </Box>
    </Box>
  );
};

const TAX_RATE = 0.0875;

const type = {
  DELIVERY: "delivery",
  PICKUP: "pickup",
};

const Cart = ({ isOpen, handleClose }) => {
  const [orderType, setOrderType] = useState(type.DELIVERY);
  const [address, setAddress] = useState("123 Some Fake Address, New York, NY");

  let todayP1 = new Date();
  todayP1.setDate(todayP1.getDate() + 1);
  const [selectedDate, setSelectedDate] = useState(todayP1);
  const [total, setTotal] = useState({
    subTotal: 0,
    taxFees: 0,
    grandTotal: 0,
  });

  const cart = useSelector((state) => state.cart);
  const handleDateChange = (date) => {
    if (todayP1 >= date) {
      return;
    }
    setSelectedDate(date);
  };

  const calculateTotal = () => {
    // let subTotal = 0;
    if (cart.length < 1) {
      return;
    }
    let taxFees = orderType === type.DELIVERY ? 0 : 5; //5 dollar delivery fee
    let grandTotal = 0;
    let subTotal = cart.reduce(function (total, item) {
      return total + Number(item.totalPrice);
    }, 0);

    taxFees = subTotal * TAX_RATE;
    grandTotal = taxFees + subTotal;
    setTotal({ subTotal, taxFees, grandTotal });
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={handleClose} size="lg">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Order</DrawerHeader>
          <DrawerBody>
            <form onSubmit={handleSubmit}>
              <RadioGroup onChange={setOrderType} value={orderType} mb="20px">
                <Stack direction="row">
                  <Radio value="pickup">Pickup</Radio>
                  <Radio value="delivery">Delivery</Radio>
                </Stack>
              </RadioGroup>
              {orderType === type.DELIVERY && (
                <Input value={address} readOnly />
              )}
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid justify="space-around" d="flex">
                  <Box>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label={
                        orderType === type.PICKUP
                          ? "Pickup Date"
                          : "Delivery Date"
                      }
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Box>
                </Grid>
              </MuiPickersUtilsProvider>
              {cart && <OrderItems items={cart} />}
              <Box borderTop="solid">
                <Box d="flex">
                  Subtotal:
                  <Spacer /> ${total.subTotal.toFixed(2)}
                </Box>
                <Box d="flex">
                  Tax/Fees: <Spacer />${total.taxFees.toFixed(2)}
                </Box>
                <Box d="flex" mt="20px">
                  <Text fontSize="xl">
                    Total: <Spacer />
                  </Text>
                  <Spacer />
                  <Text fontSize="xl" as="u">
                    ${total.grandTotal.toFixed(2)}
                  </Text>
                </Box>
              </Box>
              <Box d="flex" justifyContent="flex-end" mt="30px">
                <Button type="submit">Checkout</Button>
              </Box>
            </form>
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
export default Cart;
