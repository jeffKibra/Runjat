import {
  Container,
  Flex,
  Text,
  Grid,
  GridItem,
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

//image
import chessImage from "../public/statics/images/compass1.png";


const array=[
  {
    title:"OUR MISSION", 
    content:"To satisfy our clients through offering high quality construction services by engaging qualified specialists, quality materials and equipment."
  }, 
  {
    title:"OUR VISSION", 
    content:"To develop a leading international values-based business engaged in the provision of construction and engineering services."
  }
]

function Values() {
  return (
    <Container mt="40px" maxW="container.lg">
     
      <Grid columnGap={6} templateColumns="repeat(12, 1fr)" mb="16px">
        <GridItem colSpan={[12, 6]} mt="16px">
          <Flex
            h="full"
            alignItems="center"
            // shadow="dark-lg"
            borderRadius="20px"
          >
            <Image
              width={5184}
              height={3888}
              src={chessImage}
              alt="motivated workforce"
              objectFit="cover"
              objectPosition="center"
              style={{
                borderRadius: "20px",
              }}
            />
          </Flex>
        </GridItem>

        <GridItem colSpan={[12, 6]} mt="16px">
          {array.map(({title, content}, i)=>(
            <Box pb={i===0 ? 6: 2} key={i}>
              <Heading as="h3" pb={2}  size="md" color="#A70106">
                {title}
              </Heading>
              <Text textAlign="left" fontSize="large">
                {content}
              </Text>
            </Box>
            )
          )}

          {/* We pursue this ambition by;
.
Anticipating and responding to the future needs of our clients
.
Taking a broad, long-term view of our relationship with customers.
.
Striving for continuous performance improvement and demonstrating professional
excellence in all our activities.
.
Encouraging our people to develop and contribute to their full potential. */}


        </GridItem>
      </Grid>
    </Container>
  );
}

export default Values;
