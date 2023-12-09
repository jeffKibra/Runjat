import { Flex, Link } from "@chakra-ui/react";

import SubFooter from "./SubFooter";

function Footer(props) {
  return (
    <footer>
      <section>
        <SubFooter />
      </section>
      <Flex
        h="70px"
        bg="black"
        color="white"
        justifyContent="center"
        alignItems="center"
      >
        Copyright &copy; 2022{" "}
        <Link ml="4" href="https://finitecreations.co.ke" target="_blank">
          Finite Creations
        </Link>
      </Flex>
    </footer>
  );
}

export default Footer;
