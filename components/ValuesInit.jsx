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
import Link from "next/link";

//image
import chessImage from "../public/statics/images/many_pipes.jpg";

function ValuesInit() {
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
            shadow="dark-lg"
            borderRadius="20px"
          >
            <Image
              width={5184}
              height={3888}
              src={chessImage}
              alt="motivated workforce"
              objectFit="cover"
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
              a business ought to have values that drive their workforce.
            </Text>
            <UnorderedList>
              <ListItem>Integrity</ListItem>
              <ListItem>Respect</ListItem>
              <ListItem>Taking care of the three (3) Ps</ListItem>
              <ListItem>Talent acquisition and retention</ListItem>{" "}
              <ListItem>Social responsibility ...</ListItem>
            </UnorderedList>

            <Flex>
              <Link href="/WhoWeAre/#values" passHref>
                <Button mt="20px" colorScheme="cyan">
                  KNOW MORE
                </Button>
              </Link>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default ValuesInit;
