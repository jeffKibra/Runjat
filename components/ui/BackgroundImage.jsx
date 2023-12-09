import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

import PropTypes from "prop-types";

function BackgroundImage(props) {
  const { src, imageTitle, children, objectFit } = props;
  console.log({ objectFit });

  return (
    <Flex position="relative" h="100vh">
      <Box
        zIndex={-1}
        h="full"
        w="full"
        position="absolute"
        top={0}
        left={0}
        opacity={1}
      >
        <Image
          style={{ zIndex: 0 }}
          src={src}
          alt={imageTitle}
          layout="fill"
          objectPosition="center"
          objectFit={objectFit}
          priority
        />
      </Box>
      <Box
        position="absolute"
        top={0}
        left={0}
        h="full"
        w="full"
        backgroundColor="#303030"
        opacity={0.5}
      />
      <Box flexGrow={1} position="relative" zIndex={9} h="full" w="full">
        {children}
      </Box>
    </Flex>
  );
}

BackgroundImage.defaultProps = {
  objectFit: "cover",
};

BackgroundImage.propTypes = {
  src: PropTypes.any.isRequired,
  imageTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  objectFit: PropTypes.oneOf([
    "cover",
    "contain",
    "fill",
    "none",
    "scale-down",
  ]),
};

export default BackgroundImage;
