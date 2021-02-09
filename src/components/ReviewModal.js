import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Input,
  Textarea,
  Select,
  Spacer,
  FormControl,
  FormLabel,
  FormHelperText,
  StatHelpText,
  Text,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import axios from "axios";

const initState = {
  firstName: "",
  lastName: "",
  comments: "",
  rating: 5,
};
function ReviewModal({ isOpen, item, handleClose }) {
  const [review, setReview] = useState(initState);

  const validateData = () => {
    return !(!review.firstName || !review.lastName || !review.rating);
  };

  const postReview = async () => {
    const postResult = await axios({
      method: "post",
      url: `http://${process.env.REACT_APP_SERVER_URL}/review`,
      headers: {},
      data: review,
    });
    if (!postResult.data) {
      setReview({ ...review, error: "Could not submit review" });
    } else {
      setReview(initState);
      handleClose();
    }
  };

  const submitReview = async () => {
    const validated = validateData();

    if (!validated) {
      setReview({ ...review, error: "Could not submit review" });
      return;
    }
    postReview();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitReview();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
              <Box
                d="flex"
                alignItems="baseline"
                flexDirection="column"
                m="20px"
              >
                <Box mb="20px">
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      placeholder="First Name"
                      w="120px"
                      mr="20px"
                      onChange={(e) => {
                        setReview({ ...review, firstName: e.target.value });
                      }}
                    />
                  </FormControl>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      placeholder="Last Name"
                      w="120px"
                      onChange={(e) => {
                        setReview({ ...review, lastName: e.target.value });
                      }}
                    />
                    <FormHelperText>
                      Only the first initial of your last name will be displayed
                    </FormHelperText>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="rating" isRequired>
                    <FormLabel>Rating</FormLabel>
                    <Select
                      placeholder="Select option"
                      type="rating"
                      onChange={(e) => {
                        setReview({
                          ...review,
                          rating: parseInt(e.target.value),
                        });
                      }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box mt="20px" w="100%">
                  <FormControl id="review">
                    <FormLabel>Review</FormLabel>
                    <Textarea
                      onChange={(e) => {
                        setReview({ ...review, comments: e.target.value });
                      }}
                      placeholder="Please tell us how we did!"
                      h="300px"
                    />
                  </FormControl>
                </Box>
                <Box d="flex" mt="30px" flexDirection="column">
                  <Box p="10px">
                    <Button
                      onClick={() => {
                        handleClose();
                        setReview(initState);
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                  <Spacer />
                  <Box p="10px">
                    <Button onClick={handleSubmit}>Submit Review</Button>
                  </Box>
                  {review.error && (
                    <Box p="20px">
                      <Text color="tomato">{review.error}</Text>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ReviewModal;
