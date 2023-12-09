import { Container, Flex, Heading, Grid, GridItem, Text,  Box } from "@chakra-ui/react";
import Image from "next/image";

import sideImage from '../public/statics/images/personnel.jpg'

// bg="#d3d3d3"

function WhyUs() {
  return (
          <Container  maxW="container.lg" py={10} px="2rem">
            <Grid columnGap={6} templateColumns="repeat(12, 1fr)">
              
              <GridItem mt="20px" colSpan={[12, null, 6]}>
                  <Heading as="h2" pb={4} color="#A70106" >
                    WHY US?
                  </Heading>
        
                        <Box w="full" fontSize="1.1rem" lineHeight={1.8} >

                  <Text pb={2}>
                  We take pride in building long-term relationships with our clients, excellence and professionalism and pro-activeness by anticipating and responding to the future needs of our clients.
                  {/* We adhere to strict rules and regulations to ensure safety of our clients and their property, our personnel and the environment. We make conscious actions to ensure we preserve the environment and that our work, in the very least, does not contribute to increasing the carbon footprint. We mainly achieve this by reusing and recycling as much as possible and implementing proper waste collection and disposal. */}
                  </Text>
                  <Text pb={2}>
                    Benefit from our innovations and best-in-class solutions in regards to your construction needs. In our aspirations for excellence, we not only ensure we offer unrivalled services, but we also keep at per with upcoming industry practices. This leads to solutions that are reliable.  
                  </Text>
                  <Text pb={2}>
                  {/* We are registered with the National Construction Authority (Building, Roads and Water works category NCA 7). This ensures the highest level of accountability for us as a company. We offer over 3 decades of experince in construction and water works. We know how to get things done. All our employees are professionally trained and offer   */}
                    We offer over 3 decades of experince in construction and water works. We know how to get things done. All our employees are professionally trained.

                  </Text>
                </Box>
              </GridItem>

              <GridItem
                mt="20px"
                colSpan={[12, null, 6]}
                display="flex"
                justifyContent="center"
              >
                <Flex h="full" w="100%" >
                  <Image
                    src={sideImage}
                    alt="why us"
                    title="good personnel"
                    width={1280}
                  
                    height={640}
                    // width='100%'
                    // height="auto"
                    objectFit="contain"
                    style={{ borderRadius: "20px" }}
                  />
                </Flex>
              </GridItem>
            </Grid>
          </Container>
  );
}

export default WhyUs;
