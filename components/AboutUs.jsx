import {
  Flex,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";

//images
// import bearingImage from "../public/statics/images/bearing.png";
// import cycleImage from "../public/statics/images/cycle.jpg";
// import wheelImage from "../public/statics/images/captain-wheel.jpg";

function AboutUs() {
  return (
    <Container id="about-us" maxW="container.lg" mt="40px">
      <header>
        <Heading as="h2" color="grey" size="lg">
          WHO WE ARE
        </Heading>
      </header>
      <Flex h="5px" w="140px" bg="orange" mt="5px" mb="5px" />
      <Grid mt="20px" columnGap={6} templateColumns="repeat(12, 1fr)">
        {/* {us.map((data, i) => {
          const { title, image, content, alt } = data;

          return (
            <GridItem key={i} colSpan={[12, 4]}>
              <Flex
                p="16px"
                direction="column"
                alignItems="center"
                textAlign="center"
              >
                <ImageContainer>
                  <Image src={image} alt={alt} width={512} height={512} />
                </ImageContainer>
                <Heading as="h3" mt="16px" size="sm">
                  {title}
                </Heading>
                <Text mt="16px">{content}</Text>
              </Flex>
            </GridItem>
          );
        })} */}
      </Grid>
      <Flex
                p="16px"
                direction="column"
                alignItems="center"
                textAlign="center"
              >
                {/* <ImageContainer>
                  <Image src={image} alt={alt} width={512} height={512} />
                </ImageContainer> */}
                {/* <Heading as="h3" mt="16px" size="sm">
                  {title}
                </Heading> */}
                <Text mt="16px">Don&apos;t let a simple leak turn into a catastrophe. From small repairs to major home and commercial plumbing instalations, we got you. We are a certified plumbing company with decades of exprience in customer satisfaction and expert work. We put an end to your frustrations and promise long-term peace of ming in regards to your plumbing issues. We are only a call away.  </Text>
              </Flex>
    </Container>
  );
}

export default AboutUs;

// const us = [
//   {
//     title: "OUR PURPOSE",
//     image: bearingImage,
//     alt: "bearing",
//     content:
//       "To help our business partners achieve excellence through a motivated workforce.",
//   },
//   {
//     title: "OUR MISSION",
//     image: cycleImage,
//     alt: "metamorphosis cycle",
//     content:
//       "Avail ourselves to our business partners by offering timely and quality professional help that is capable of supporting its strategic mission and objectives",
//   },
//   {
//     title: "OUR VISION",
//     image: wheelImage,
//     alt: "captains wheel",
//     content:
//       "To be a reliable HR consulting Firm through helping our business partners achieve their strategic mission through an empowered workforce.",
//   },
// ];

function ImageContainer({ children }) {
  return <Flex width="70%">{children}</Flex>;
}
