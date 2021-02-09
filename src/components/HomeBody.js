import {
  Box,
  Button,
  Center,
  Heading,
  Spacer,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Icon, InlineIcon } from "@iconify/react";
import yelpIcon from "@iconify-icons/fa-brands/yelp";

import ImageCarousel from "./Carousel";
import { CenterFocusStrongSharp } from "@material-ui/icons";
import Categories from "./Categories";

const doorDashStyle = {
  position: "relative",
  width: "209px",
  height: "45px",
  margin: "0px auto",
  backgroundImage:
    "url(https://cdn.doordash.com/media/button/button_red_m.svg)",
  color: "transparent",
};

const HomeBody = () => {
  const history = useHistory();

  const Connect = () => {
    return (
      <Box mt="20px" mb="50px">
        <Heading>Connect with us!</Heading>
        <Box d="flex">
          <Box mr="30px">
            <Icon icon={yelpIcon} color="red" fontSize="40" />
          </Box>
          <InstagramIcon fontSize="large" />
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <ImageCarousel />
      <Box mt="50px">
        <Heading>
          Order through our partners. Or place an order through our website!
        </Heading>
        <Box d="flex">
          <Button mr="30px" onClick={() => history.push("/order-online")}>
            Order Online
          </Button>
          <a
            href="https://www.doordash.com/business/413237/?utm_source=partner-link&utm_medium=website&utm_campaign=413237&utm_content=red-m"
            target="_blank"
            alt="Order Food Delivery with DoorDash"
            title="Order Food Delivery with DoorDash"
          >
            <div style={doorDashStyle}>Order Food Delivery with DoorDash</div>
          </a>
        </Box>
        <Connect />
        <Categories />
      </Box>
    </Box>
  );
};

export default HomeBody;
