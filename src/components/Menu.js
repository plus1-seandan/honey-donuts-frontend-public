import React, { useEffect, useState, useRef, createref } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core/";
import MenuSection from "./MenuSection";
import { Center, Heading, Box } from "@chakra-ui/react";

const useStyles = makeStyles((theme) => ({
  tabs: {
    position: "sticky",
    top: 0,
    width: "100%",
    background: "white",
    zIndex: "10",
  },
}));

const list = [
  { id: "donuts" },
  { id: "kolache" },
  { id: "breakfast" },
  { id: "drinks" },
];

export default function Menu() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [menu, setMenu] = useState();

  const refs = list.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const handleScroll = (id) => {
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const getMenu = async () => {
    const response = await axios.get(
      `http://${process.env.REACT_APP_SERVER_URL}/menu`
    );
    setMenu(response.data);
  };

  useEffect(() => {
    const asyncFunc = async () => {
      await getMenu();
    };
    asyncFunc();
  }, []);

  const MenuItem = ({ item, index }) => {
    return (
      <Box mt="50px" key={index}>
        <Heading ref={refs[item.category.name]}>{item.category.name}</Heading>
        <MenuSection menuItem={item} />
      </Box>
    );
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box mt="50px">
      <Center className={classes.tabs}>
        <Tabs orientation="horizontal" value={value} onChange={handleChange}>
          <Tab label="Donuts" onClick={() => handleScroll("donuts")} />
          <Tab label="Kolaches" onClick={() => handleScroll("kolache")} />
          <Tab label="Breakfast" onClick={() => handleScroll("breakfast")} />
          <Tab label="Drinks" onClick={() => handleScroll("drinks")} />
        </Tabs>
      </Center>
      <Box>
        {menu
          ? menu.map((m, index) => {
              return <MenuItem index={index} key={index} item={m} />;
            })
          : null}
      </Box>
    </Box>
  );
}
