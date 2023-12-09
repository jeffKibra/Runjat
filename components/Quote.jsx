import {
  Container,
  Heading,
  Text,
  Flex,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";

//image
import QuoteIcon from "../public/statics/icons/quote-left-solid.svg";

function Quote() {
  return (
    <Container my="80px"  maxWidth="container.md">
      
      <Stack w='full' direction={['column', 'row']} >
        <Flex alignItems='flex-start' justifyContent='center'>
<Image color="cyan" src={QuoteIcon} alt="quote img" width="100%" height="100%" />

        </Flex>

    
          {/* <Flex w="full" h="full" direction="column" justifyContent='center' > */}
            <Text lineHeight={2} textAlign={"center"} fontSize="1.4rem">
              We aspire to work closely with our clients, to understand and help them address their current and
future needs, delivering high quality value for money solutions through our efforts and
those of our key supply partners.
            </Text>
            
          {/* </Flex> */}
      </Stack>
      
        
    </Container>
  );
}

export default Quote;
