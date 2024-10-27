import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import vmimage from "../images/VM.jpeg"; 

const greeting = "Hello, I am Varun!";
const bio1 = "A Full stack data scientist";
const bio2 = "specialised in AI, ML and FE (React)";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar
        size="xl"
        src={vmimage}
        name = "varun"
      />
      <Heading as="h1" size="1g">
        {greeting}
      </Heading>
      <Heading as="h2" size = "md" fontWeight="normal">
        {bio1}
      </Heading>
      <Heading as="h2" size = "md" fontWeight="normal">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
