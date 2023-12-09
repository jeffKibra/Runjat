import { Spinner, Flex, Text } from "@chakra-ui/react";

function FullpageSpinner() {
  return (
    <Flex w="full" h="100vh" bg="gray.100" justify="center" align="center">
      <Flex direction="column" align="center">
        <Text>Loading ...</Text>
        <Spinner mt={4} colorScheme="cyan" size="xl" />
      </Flex>
    </Flex>
  );
}

export default FullpageSpinner;
