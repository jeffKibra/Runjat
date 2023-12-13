import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import ContactUs from "../components/ContactUs";

import PageLayout from "../components/layout/PageLayout";
import PageBanner from "../components/layout/PageBanner";
//image
import image from "../public/statics/images/black-phone.jpg";

function GetInTouch() {
  return (
    <PageLayout
      pageTitle="contact us | HR services in kenya - runjat hr contacts"
      pageDescription="call us, email us, send us a message and we will get back to you. Connect with us in facebook, twitter, linkedin."
    >
      <PageBanner
        image={{
          src: image,
          title: "black telephone",
        }}
      >
        <Container
          color="white"
          display="flex"
          w="full"
          h="full"
          alignItems="center"
        >
          <Flex direction="column">
            <header>
              <Heading as="h1" size="2xl" mb="16px">
                Ready to Talk?
              </Heading>
            </header>
            <Text fontSize="xl">We are just a phone call away!</Text>
          </Flex>
        </Container>
      </PageBanner>
      <ContactUs />
    </PageLayout>
  );
}

export default GetInTouch;
