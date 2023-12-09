import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

import NavBar from "./nav";
import BackgroundImage from "../ui/BackgroundImage";

function PageBanner(props) {
  const {
    image: { src, title },
    objectFit,
    children,
  } = props;

  return (
    <BackgroundImage objectFit={objectFit} src={src} imageTitle={title}>
      <Flex w="full" h="full" direction="column">
        <NavBar />
        {children}
      </Flex>
    </BackgroundImage>
  );
}

PageBanner.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
  objectFit: PropTypes.oneOf([
    "cover",
    "contain",
    "fill",
    "none",
    "scale-down",
  ]),
};

export default PageBanner;
