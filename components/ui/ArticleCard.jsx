import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

function ArticleCard(props) {
  const { featureImage, imageTitle, title, excerpt, slug } = props;
  // console.log({ slug, props });

  return (
    <Flex
      wordBreak="break-word"
      direction="column"
      w="300px"
      bg="white"
      borderRadius="md"
      shadow="lg"
      cursor="pointer"
    >
      <Flex w="full" h="200px">
        <Image
          width="300px"
          height="200px"
          src={featureImage}
          alt={imageTitle}
          priority
          style={{ borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }}
        />
      </Flex>
      <Flex w="full" px={4} pt={4} pb={2}>
        <Heading size="sm">{title}</Heading>
      </Flex>
      <Flex w="full" px={4} pt={0}>
        <Text
          wordBreak="break-word"
          fontSize="sm"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            height: "84px",
          }}
        >
          {excerpt}
        </Text>
      </Flex>
      <Flex p={4}>
        <Link href={`/blog/${slug}`} passHref>
          <Button colorScheme="cyan" variant="outline">
            READ MORE
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

ArticleCard.propTypes = {
  featureImage: PropTypes.string.isRequired,
  imageTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default ArticleCard;
