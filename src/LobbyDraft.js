import React from "react";
import { Box, Heading, Container, Flex } from "@chakra-ui/react";

const LobbyDraft = () => {
  document.title = "Lobby Draft";
  return (
    <Flex direction="column" minH="100vh">
      <Box bg="teal.500" color="white" p={4}>
        <Heading as="h1" size="xl">
          Lobby Draft
        </Heading>
      </Box>
      <Container maxW="container.md" mt={10}>
        <Heading as="h2" size="lg" mb={4}>
          Welcome to Lobby Draft
        </Heading>
        <Box>
          <p>In demo mode.</p>
        </Box>
      </Container>
    </Flex>
  );
};

export default LobbyDraft;
