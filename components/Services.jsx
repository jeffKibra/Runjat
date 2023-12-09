import { Container, Flex, Heading, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

import servicesList from "../constants/servicesList";

function Services() {
  return (
    <Flex direction="column" bg="#d3d3d3">
      <Container
        mt="40px"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Heading as="h2" mb="5px" size="md" color="blue">
          OUR SERVICES
        </Heading>
        <Flex w="100px" h="3px" bg="cyan" mb="40px" />
      </Container>

      {servicesList.map((item, i) => {
        const {
          title,
          content,
          icon: { src, alt },
          id,
        } = item;

        if(!src){
          return null
        }

        return (
          <Container as="article" id={id} key={i} maxW="container.lg" mb="40px">
            <header>
              <Heading as="h3" size="sm" color="brown" mb="5px">
                {title}
              </Heading>
            </header>
            <Flex width="100px" h="3px" bg="cyan" mb="16px" />
            <Grid columnGap={6} templateColumns="repeat(12, 1fr)">
              <GridItem
                mt="20px"
                colSpan={[12, null, 6]}
                display="flex"
                justifyContent="center"
                h="300px"
              >
                <Flex h="full" w="100%">
                  <Image
                    src={src}
                    alt={alt}
                    title={alt}
                    width={1280}
                    height={640}
                    objectFit="cover"
                    style={{ borderRadius: "20px" }}
                  />
                </Flex>
              </GridItem>
              <GridItem mt="20px" colSpan={[12, null, 6]}>
                <Flex w="full" textAlign={["center", null, "left"]}>
                  {content}
                </Flex>
              </GridItem>
            </Grid>
          </Container>
        );
      })}
    </Flex>
  );
}

export default Services;
