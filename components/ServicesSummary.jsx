import {
  Container,
  Flex,
  Heading,
  Wrap,
  WrapItem,
  Center,
  Button,
  Text,
  Grid, GridItem, VStack, Box, Show, Hide
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";


import ImageCard from "./ui/ImageCard";

import servicesList from "../constants/servicesList";

import { OUR_SERVICES } from "../constants/routes";

function ServicesSummary() {
  return (
    <Container maxW="container.lg" mb="50px" px={8} direction="column">
      
      <Heading as="h2"  color="#A70106"  mb={8}>
        WHAT WE DO
      </Heading>
      {/* <Flex mt="5px" backgroundColor="cyan" h="5px" w="180px" /> */}

      <Grid gap={4} rowGap={16} templateColumns="repeat(12, 1fr)" justifyContent='center' >
        {servicesList.map((item, i) => {
          const {
            
            content,
            icon: { src, alt },
          } = item;

          const isFiller=!content && !src

          if(isFiller){
            return (
            <Hide key={i} below="sm">
              <GridItem  key={i} colSpan={2}>
            </GridItem>
            </Hide>
            )
          }

          return (
            <GridItem
            colSpan={[12,  4]}
              key={i}
              display="flex"
              flexDirection="column"
              opacity={1}
              transition="opacity 0.5s"
              _hover={{ opacity: 0.5 }}
            >
              <VStack w="full" h="full" flexDirection="column">
                  <Flex w="70px" h="70px" mb={2}>
                  <Image src={src} alt={alt} width="100%" height="100%" />
                  </Flex>

                  <Box px={4}>
                    <Text textAlign='center' lineHeight={1.8} fontSize="1.1rem">
                    {content}
                  </Text>
                  </Box>
              </VStack>
                
              
            </GridItem>
          );
        })}
        
      </Grid>
      
    </Container>
  );
}

export default ServicesSummary;
