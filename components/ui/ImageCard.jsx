import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

import PropTypes from "prop-types";

function ImageCard(props) {
  const { src, imageTitle, children } = props;

  return (
    <Flex
      position="relative"
      w="full"
      h="full"
      borderRadius="20px"
      shadow="dark-lg"
    >
      <Box
        zIndex={-1}
        h="full"
        w="full"
        position="absolute"
        top={0}
        left={0}
        opacity={1}
        borderRadius="20px"
      >
        <Image
          style={{ zIndex: 0, borderRadius: "20px" }}
          src={src}
          alt={imageTitle}
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box
        position="absolute"
        top={0}
        left={0}
        h="full"
        w="full"
        backgroundColor="#303030"
        opacity={0.8}
        borderRadius="20px"
      />
      <Box
        flexGrow={1}
        position="relative"
        zIndex={2}
        h="full"
        w="full"
        borderRadius="20px"
        p="16px"
      >
        {children}
      </Box>
    </Flex>
  );
}

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  imageTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ImageCard;
