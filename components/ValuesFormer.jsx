import {
  Container,
  Flex,
  Text,
  Grid,
  GridItem,
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

//image
import chessImage from "../public/statics/images/many_pipes.jpg";

function Values() {
  return (
    <Container mt="40px" maxW="container.lg">
      <Heading as="h2" size="lg" color="grey">
        VALUES ARE EVERYTHING
      </Heading>
      <Box mt="5px" backgroundColor="cyan" h="5px" w="280px" />
      <Grid columnGap={6} templateColumns="repeat(12, 1fr)" mb="16px">
        <GridItem colSpan={[12, 6]} mt="16px">
          <Flex
            h="full"
            alignItems="center"
            // shadow="dark-lg"
            borderRadius="20px"
          >
            <Image
              width={5184}
              height={3888}
              src={chessImage}
              alt="motivated workforce"
              objectFit="cover"
              objectPosition="center"
              style={{
                borderRadius: "20px",
              }}
            />
          </Flex>
        </GridItem>
        <GridItem colSpan={[12, 6]} mt="16px">
          <Flex h="full" mt="16px" direction="column">
            <Text textAlign="left" fontSize="large">
              Whether its a small, medium or large business, an organization or
              a business ought to have values that drive their workforce. It is
              this values that shift outlooks such as:
            </Text>
            <UnorderedList mt="16px">
              <ListItem>
                work <b>to</b> duty and responsibility
              </ListItem>
              <ListItem>
                someone else will do it <b>to</b> I have to do it
              </ListItem>
              <ListItem>profit is tied to my effortless performance</ListItem>
              <ListItem>
                bonuses are a individual efforts made collectively
              </ListItem>
            </UnorderedList>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Values;
