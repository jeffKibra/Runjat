import { Flex, Heading, Button, Text, Container } from "@chakra-ui/react";
import NextLink from "next/link";

import { GET_IN_TOUCH } from "../constants/routes";

function Welcome() {
  return (
    <Container maxW="700px" flexGrow={1} display="flex">
      <Flex flexGrow={1} justifyContent="center" alignItems="center">
        <Flex  color="white" textAlign="center" direction="column">
          <header>
            {/* <Heading as="h1" size="xl" color="white">
              
            </Heading> */}
            {/* <Container> */}
              {/* <Heading mt="20px" >
                Having a great plumber does not have to be a pipedream!
              </Heading> */}
              <Heading mt="20px" >
                Benefit from over 3 decades of experience building lasting solutions for your peace of mind!
              </Heading>
            {/* </Container> */}
          </header>

          <Flex mt="30px" justifyContent="center">
            <NextLink href={GET_IN_TOUCH} passHref>
              <Button textColor="white" color="#A70106" variant="solid">
                GET IN TOUCH
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Welcome;



// bathtub img= Photo by cottonbro studio: https://www.pexels.com/photo/white-ceramic-bathtub-with-water-4154994/