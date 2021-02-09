// import { Box, Grid } from "@material-ui/core";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import MenuItemModal from "./MenuItemModal";
import { setSelectedItem, deselectItem } from "../actions";
import { formatItem } from "../util/formatItem";

function MenuSection({ menuItem }) {
  // const [open, setOpen] = useState(false);
  // const [item, setItem] = useState();
  const menu = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  const handleModalOpen = (item) => {
    dispatch(setSelectedItem(formatItem(item), -1));
  };

  return (
    <Box mt="30px">
      <Grid templateColumns="repeat(8, 1fr)" gap={8}>
        {menuItem.items.map((item) => (
          <GridItem colSpan={2} h="50" key={item.id}>
            <MenuItem
              item={item}
              handleModalOpen={() => {
                handleModalOpen(item);
              }}
            />
          </GridItem>
        ))}
      </Grid>
      {menu.isOpen && (
        <MenuItemModal
          onClose={() => {
            dispatch(deselectItem());
          }}
        />
      )}
    </Box>
  );
}
export default MenuSection;
