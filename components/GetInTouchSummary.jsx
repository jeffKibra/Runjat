import {
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";

import { GET_IN_TOUCH } from "../constants/routes";

function GetInTouchSummary() {
  return (
    <Box
      color="white"
      h="300px"
      background="linear-gradient(to right, teal 0%, cyan 100%)"
    >
      <Container h="full" maxW="container.md">
        <Grid h="full" columnGap={6} templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={[12, 8]} display="flex" alignItems="center">
            <Box>
              <header>
                <Heading as="h1" mb="20px">
                  Ready to Talk?{" "}
                </Heading>
              </header>
              <Flex alignItems="center">
                <Text fontSize="lg" display="flex" alignItems="center">
                  We would love to hear from you.{" "}
                </Text>
              </Flex>
            </Box>
          </GridItem>

          <GridItem
            colSpan={[12, 4]}
            display="flex"
            alignItems={["flex-start", "center"]}
          >
            <Link href={GET_IN_TOUCH} passHref>
              <Button
                _hover={{
                  bg: "cyan.300",
                }}
                colorScheme="black"
                variant="outline"
              >
                GET IN TOUCH
              </Button>
            </Link>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default GetInTouchSummary;
