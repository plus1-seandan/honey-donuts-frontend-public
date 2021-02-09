import { Box, Button, Center, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Categories = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/order-online");
  };

  return (
    <Box>
      <Wrap h="1000px">
        <WrapItem
          w="49%"
          h="500px"
          d="flex"
          justifyContent="center"
          alignItems="center"
          bgImage="url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190619-air-fryer-donuts-302-landscape-pf-1561758031.jpg') "
          backgroundPosition="center"
          backgroundSize="cover"
          borderRadius="5%"
          _hover={{ opacity: "50%" }}
        >
          <Button boxShadow="dark-lg" w="200px" onClick={handleClick}>
            Donuts
          </Button>
        </WrapItem>
        <WrapItem
          w="49%"
          bg="green.200"
          h="500px"
          d="flex"
          justifyContent="center"
          alignItems="center"
          bgImage="url('https://houseofyumm.com/wp-content/uploads/2020/04/Texas-Kolaches-7.jpg') "
          backgroundPosition="center"
          borderRadius="5%"
          _hover={{ opacity: "50%" }}
        >
          <Button boxShadow="dark-lg" w="200px" onClick={handleClick}>
            Kolaches
          </Button>
        </WrapItem>
        <WrapItem
          w="49%"
          bg="tomato"
          h="500px"
          d="flex"
          justifyContent="center"
          alignItems="center"
          bgImage="url('https://ebcatering.com/usercontent/product_sub_img/menuitem_Beverages.jpg') "
          backgroundPosition="center"
          backgroundSize="cover"
          borderRadius="5%"
          _hover={{ opacity: "50%" }}
        >
          <Button boxShadow="dark-lg" w="200px" onClick={handleClick}>
            Beverages
          </Button>
        </WrapItem>
        <WrapItem
          w="49%"
          bg="blue.200"
          h="500px"
          d="flex"
          justifyContent="center"
          alignItems="center"
          bgImage="url('https://assets.bonappetit.com/photos/57acec251b3340441497533d/master/pass/ba-best-breakfast-sandwich.jpg') "
          backgroundPosition="center"
          backgroundSize="cover"
          borderRadius="5%"
          _hover={{ opacity: "50%" }}
        >
          <Button boxShadow="dark-lg" w="200px" onClick={handleClick}>
            Breakfast
          </Button>
        </WrapItem>
      </Wrap>
    </Box>
  );
};
export default Categories;
