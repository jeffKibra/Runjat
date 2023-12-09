import {
  Container,
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  Heading,
} from "@chakra-ui/react";
import Card, { CardHeader, CardContent } from "./ui/Card";

import values from "../constants/values";

function AllValues() {
  return (
    <Box w="full" bg="#d3d3d3" id="values">
      <Container as="section" mt="40px" pb="40px" pt="20px" maxW="container.lg">
        <header>
          <Heading as="h2" size="lg" color="grey">
            VALUES
          </Heading>
        </header>
        <Box backgroundColor="teal" h="5px" w="100px" />
        <Grid
          mt="16px"
          columnGap={6}
          rowGap={6}
          templateColumns="repeat(12, 1fr)"
        >
          {values.map((value, i) => {
            const { title, content } = value;

            return (
              <GridItem key={i} colSpan={[12, 6, 4]}>
                <Card>
                  <CardHeader>{title}</CardHeader>
                  <Flex w="full" justify="center">
                    <Box width="100px" h="3px" bg="cyan" mt="5px" mb="5px" />
                  </Flex>

                  <CardContent>
                    <Text>{content}</Text>
                  </CardContent>
                </Card>
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default AllValues;
