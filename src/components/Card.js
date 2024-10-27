import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      maxWidth="md"
    >
      <Image src={imageSrc} alt={title} width="100%" height="200px" objectFit="cover" />
      <VStack align="start" spacing={4} p={4}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray.600" fontSize="sm">
          {description}
        </Text>
        <HStack spacing={1} color="teal.500" cursor="pointer">
          <Text fontWeight="bold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
