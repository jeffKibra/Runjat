import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import routes from "../../../constants/routes";

function NormalLinks() {
  return (
    <Flex display={["none", "none", "none", "flex"]} alignItems="center">
      {routes.map((route, i, arr) => {
        const { href, name } = route;

        return (
          <Flex h="full" key={i}>
            <NextLink href={href} passHref>
              <Link
                pl="24px"
                pr="24px"
                display="flex"
                alignItems="center"
                h="full"
              >
                {name}{" "}
              </Link>
            </NextLink>

            {i < arr.length - 1 && <Flex width="1px" h="60%" bg="white" />}
          </Flex>
        );
      })}
    </Flex>
  );
}

export default NormalLinks;
