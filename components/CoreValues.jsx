import {
  Container,
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

import Card, { CardHeader, CardContent } from "./ui/Card";

import values from "../constants/values";

import { WHO_WE_ARE } from "../constants/routes";

const cores = [
  "OPEN COMMUNICATION AND FEEDBACK",
  "INTEGRITY",
  "CUSTOMER SERVICE",
  "TAKING CARE OF THREE (3) Ps",
];

const coreValues = values.filter((value) => {
  const { title } = value;
  const index = cores.findIndex((core) => core === title);
  console.log({ index });

  return index > -1;
});

function CoreValues() {
  return (
    <Box w="full" bg="#d3d3d3" id="values">
      <Container as="section" mt="40px" pb="40px" pt="20px" maxW="container.lg">
        <Heading as="h2" size="lg" color="grey">
          CORE VALUES
        </Heading>
        <Box backgroundColor="teal" h="5px" w="140px" />
        <Grid
          mt="16px"
          columnGap={6}
          rowGap={6}
          templateColumns="repeat(12, 1fr)"
        >
          {coreValues.map((value, i) => {
            const { title, content } = value;

            return (
              <GridItem key={i} colSpan={[12, 6, 3]}>
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

        <Flex mt="30px" justifyContent="flex-end">
          <Link href={`${WHO_WE_ARE}/#values`} passHref>
            <Button colorScheme="cyan">KNOW MORE</Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}

export default CoreValues;
