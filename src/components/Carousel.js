import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import { Box, Button, Image } from "@chakra-ui/react";

function ImageCarousel(props) {
  var items = [
    {
      image: `https://assets.bonappetit.com/photos/57acec251b3340441497533d/master/pass/ba-best-breakfast-sandwich.jpg`,
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      image: `https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fassets.marthastewart.com%2Fstyles%2Fwmax-750%2Fd29%2Fbaked-cake-donut-7000185-1217%2Fbaked-cake-donut-7000185-1217_horiz.jpg%3Fitok%3Du2jvutxq`,
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/xcWxAhFmtEm8UdrM62NckzUe7mA=/0x0:1389x841/1200x900/filters:focal(584x310:806x532):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62561759/koala_kolache_fb.0.0.jpg",
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
  ];

  return (
    <Box h="300px">
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

function Item(props) {
  return (
    <Image
      alt="No Image Available"
      borderRadius="5%"
      h="300px"
      w="100%"
      objectFit="cover"
      src={props.item.image}
    />
  );
}

export default ImageCarousel;
