import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

import PageLayout from "../components/layout/PageLayout";
import PageBanner from "../components/layout/PageBanner";
import Values from "../components/Values";
// import ValuesSlider from "../components/ValuesSlider";
import AllValues from "../components/AllValues";
//image
import image from "../public/statics/images/many_pipes.jpg";

function WhoWeAre() {
  return (
    <PageLayout
      pageTitle="About us | necessary values for employees - Ignatius factor hr"
      pageDescription="A HR company focused on instilling the right values to your workforce, integrity, open door policy, customer service, taking care of the three (3) Ps"
    >
      <PageBanner
        image={{
          src: image,
          title: "chess rook piece",
        }}
      >
        <Container
          color="white"
          display="flex"
          w="full"
          h="full"
          alignItems="center"
        >
          <Flex mt="150px" direction="column">
            <header>
              <Heading as="h1" size="xl" mb="16px">
                IGNATIUS FACTOR HR CONSULTING
              </Heading>
            </header>
            <Text fontSize="xl">
              A HR consulting company focused on values!
            </Text>
          </Flex>
        </Container>
      </PageBanner>
      {/* <Quote /> */}
      <Values />
      {/* <ValuesSlider /> */}
      <AllValues />
    </PageLayout>
  );
}

export default WhoWeAre;
