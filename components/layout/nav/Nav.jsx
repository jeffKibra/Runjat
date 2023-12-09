import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import NormalLinks from "./NormalLinks";
import MobileMenu from "./MobileMenu";

import { HOME } from "../../../constants/routes";

//logo image
// import logoImage from "../../../public/statics/images/ignatiusLogo.png";

function Nav() {
  return (
    <Flex
      color="white"
      pl={["8px", "24px"]}
      pr={["8px", "24px"]}
      alignItems="center"
      height="80px"
      borderBottom="1px white solid"
      as="nav"
      maxW="100vw"
    >
      <Flex
        h="60px"
        w={["250px", "300px"]}
        _hover={{
          cursor: "pointer",
        }}
        alignItems='center'
      >
        {/* <Link href={HOME} passHref>
          <Image
            src={logoImage}
            alt="ignatius factor hr logo"
            height={3508}
            width={549}
          />
        </Link> */}
         <Link href={HOME} passHref>
          <Heading fontSize={["larger", 'x-large']}>RUNJAT BUILDERS & MECHANICAL ENGINEERS</Heading>
        </Link>
      </Flex>

      <Flex flexGrow={1} />
      <Flex />
      <NormalLinks />
      <MobileMenu />
    </Flex>
  );
}

export default Nav;
