import {
  Container,
  Box,
  Grid,
  GridItem,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

import routes from "../../constants/routes";
import contacts from "../../constants/contacts";

function SubFooter() {
  return (
    <Box bg="rgba(0,0,0,0.8)" pt="40px" color="white">
      <Container maxW="container.md" p="24px">
        <Grid columnGap={6} templateColumns="repeat(12, 1fr)">
          <GridItem mb="20px" colSpan={[12, 6]}>
            <Heading as="h4" color='#A70106' pb="8px" size="md">
              SITE LINKS
            </Heading>

            <List>
              {routes.map((route, i) => {
                const { href, name } = route;

                return (
                  <ListItem key={i}>
                    <QuickLink href={href}>{name}</QuickLink>
                  </ListItem>
                );
              })}
            </List>
          </GridItem>


          <GridItem mb="20px" colSpan={[12, 6]}>
            <Heading as="h4" color="#A70106" pb="8px" size="md">
              CONTACT INFORMATION
            </Heading>
            {/* <Heading pt="8px" size="sm">
              Name
            </Heading>
            <Flex h="2px" w="40px" bg="pink" /> */}
            {/* <Text pt="8px">{contacts.name}</Text> */}

            {/* <Heading pt="8px" size="sm">
              Address
            </Heading>
            <Flex h="2px" w="55px" bg="pink" /> */}
            <Text pt="8px">{contacts.address}</Text>
{/* 
            <Heading pt="8px" size="sm">
              Phone
            </Heading>
            <Flex h="2px" w="40px" bg="pink" /> */}
            <Text pt="8px">{contacts.phone}</Text>

            {/* <Heading pt="8px" size="sm">
              Email
            </Heading>
            <Flex h="2px" w="35px" bg="pink" /> */}
            <Text pt="8px">{contacts.email}</Text>
          </GridItem>

          
          {/* <GridItem mb="20px" colSpan={[12, 4]}>
            <Heading as="h4" pb="8px" size="sm">
              LET&#39;S CONNECT
            </Heading>
            <Flex h="5px" w="90px" bg="blue" />
            <List mt="8px">
              {socials.map((social, i) => {
                const { name, icon, href } = social;
                return (
                  <ListItem key={i} display="flex" alignItems="center" mb="8px">
                    <ListIcon fontSize="4xl" as={icon} />
                    <Link href={href} target="_blank">
                      {name}
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </GridItem> */}
        </Grid>
      </Container>
    </Box>
  );
}

const socials = [
  {
    name: "Facebook",
    icon: RiFacebookBoxFill,
    bg: "facebook.900",
    href: "/",
  },
  {
    name: "Twitter",
    icon: RiTwitterFill,
    bg: "twitter",
    href: contacts.twitter,
  },
  {
    name: "Linkedin",
    icon: RiLinkedinBoxFill,
    bg: "linkedin",
    href: contacts.linkedIn,
  },
];

export default SubFooter;

function QuickLink(props) {
  const { href, children } = props;

  return (
    <Text pb="8px">
      <NextLink href={href} passHref>
        <Link>{children}</Link>
      </NextLink>
    </Text>
  );
}
