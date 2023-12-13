import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

import PageLayout from "../components/layout/PageLayout";
import PageBanner from "../components/layout/PageBanner";
import Mission from "../components/Mission";
// import ValuesSlider from "../components/ValuesSlider";
import OurValues from "../components/OurValues";
//image
import image from "../public/statics/images/head-questions.png";

function WhoWeAre() {
  return (
    <PageLayout
      pageTitle="About us | a company based on values - Runjat Builders"
      pageDescription="A company guided by values in its daily activities."
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
          // justifyContent='center'
        >
          <Flex  direction="column">
            <header>
              <Heading as="h1" size="xl" mb="16px" >
                ABOUT US
              </Heading>
            </header>
            <Text fontSize="xl">
              In providing our services we endeavour to deliver beyond client
              expectations and satisfy our clients whilst rewarding all the stakeholders
            </Text>
          </Flex>
        </Container>
      </PageBanner>
      {/* <Quote /> */}
      <Mission />
      {/* <ValuesSlider /> */}
      <OurValues />
    </PageLayout>
  );
}

export default WhoWeAre;
