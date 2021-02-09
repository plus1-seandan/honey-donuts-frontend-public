import { Box, Image, Badge, Spacer, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import React from "react";

const property = {
  imageUrl:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190619-air-fryer-donuts-302-landscape-pf-1561758031.jpg",
  imageAlt: "Rear view of modern home with pool",
};

export default function MenuItem({ item, handleModalOpen }) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        h="300px"
        w="100%"
        objectFit="cover"
        src={item.image}
        alt={property.imageAlt}
      />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2">
            Hot 🔥
          </Badge>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {item.name}
        </Box>
        <Box d="flex">
          ${item.price}
          <Box as="span" color="gray.600" fontSize="sm">
            /each
          </Box>
          <Spacer />
          <Box>
            <IconButton
              onClick={() => {
                handleModalOpen(item);
              }}
              icon={<AddIcon />}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
