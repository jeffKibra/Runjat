import { useRef } from "react";
import NextLink from "next/link";
import {
  Link,
  Flex,
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { RiMenu3Fill } from "react-icons/ri";

import routes from "../../../constants/routes";

function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box display={["block", "block", "block", "none"]}>
      <IconButton
        ref={btnRef}
        icon={<RiMenu3Fill />}
        variant="outline"
        fontSize="xl"
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            {routes.map((route, i, arr) => {
              const { href, name } = route;

              return (
                <Flex direction="column" alignItems="center" key={i}>
                  <NextLink href={href} passHref>
                    <Link
                      p="12px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="full"
                      h="full"
                      _hover={{
                        bg: "rgba(0,0,0,0.1)",
                      }}
                    >
                      {name}{" "}
                    </Link>
                  </NextLink>
                  {i < arr.length - 1 && <Box h="1px" width="80%" bg="cyan" />}
                </Flex>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MobileMenu;
