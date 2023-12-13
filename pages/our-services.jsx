import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

import PageLayout from "../components/layout/PageLayout";
import PageBanner from "../components/layout/PageBanner";
import Services from "../components/Services";
//image
import image from "../public/statics/images/pipings_and_house_plan.jpg";

function OurServices() {
  return (
    <PageLayout
      pageTitle="HR Services | runjat builders services"
      pageDescription="Recruitment and selection, professional health and safety, compensation benefits and payrolls, labour laws, honest appraisals and feedback,  INDUCTION PERIOD AND CONFIGURING PRESENT AND FUTURE CONDITION OF THE EMPLOYEE, "
    >
      <PageBanner
        image={{
          src: image,
          title: "checkmate",
        }}
      >
        <Container
          color="white"
          display="flex"
          w="full"
          h="full"
          alignItems="center"
          maxW="container.md"
        >
          <Flex direction="column">
            <header>
              <Heading as="h1" size="xl" mb="16px">
                HR REDEFINED!
              </Heading>
            </header>
            <Heading lineHeight={2} size="md">
              We have an assortment of services and products to meet any plumbing need!
            </Heading>
          </Flex>
        </Container>
      </PageBanner>
      <Services />
    </PageLayout>
  );
}

export default OurServices;
