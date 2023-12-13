import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

import contacts from "../constants/contacts";

import SendEmail from "../containers/SendEmail";
//images
import placeholderImage from "../public/statics/images/placeholder.png";
import telephoneImage from "../public/statics/images/telephone.png";
import emailImage from "../public/statics/images/email.png";

function ContactUs(props) {
  return (
    <Box
      bg="black"
      w="full"
      h="full"
      as="section"
      id="contact-us"
      pt="40px"
      p="16px"
    >
      <Container mt="40px" maxW="container.md">
        <Grid columnGap={6} templateColumns="repeat(12, 1fr)">
          <GridItem mb="40px" colSpan={[12, 6]}>
            <header>
              <Heading as="h2"  pb={3} color="white">
                GET IN TOUCH
              </Heading>
            </header>

            {/* <Box h="5px" w="150px" bg="blue" /> */}
            <address>
              <VStack mt="24px" spacing={4} color="white">
                {addresses.map((obj, i) => {
                  const { content, title, image } = obj;

                  return (
                    <Flex w="full" key={i} alignItems='center'>
                      <ImageContainer>
                        <Image
                          src={image}
                          alt={title}
                          width={512}
                          height={512}
                        />
                      </ImageContainer>
                      <Flex pl={4} h="full" alignItems="center" flexGrow={1}>
                        <Text wordBreak="break-word">{content}</Text>
                      </Flex>
                    </Flex>
                  );
                })}
              </VStack>
            </address>
          </GridItem>

          <GridItem mb="20px" colSpan={[12, 6]}>
            <SendEmail />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactUs;

const addresses = [
  {
    title: "Address",
    content: contacts.address,
    image: placeholderImage,
  },
  {
    title: "Phone",
    content: contacts.phone,
    image: telephoneImage,
  },
  {
    title: "Email",
    content: contacts.email,
    image: emailImage,
  },
];

function ImageContainer({ children }) {
  return <Flex width="50px">{children}</Flex>;
}
