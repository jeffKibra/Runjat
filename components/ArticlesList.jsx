import {
  Box,
  Flex,
  Heading,
  Container,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

import ArticleCard from "./ui/ArticleCard";

function ArticlesList(props) {
  const { articles } = props;
  console.log({ articles });

  return (
    <Box bg="gray.100" py={4}>
      <Container maxW="container.lg">
        <Flex alignItems="center" w="full" direction="column">
          <Heading size="lg">Articles</Heading>
          <Box w="100px" h="2px" bg="cyan" m={2} />
        </Flex>
        {articles && articles.length > 0 ? (
          <Wrap spacing={4} justify="center" mt={2}>
            {articles.map((article, i) => {
              const { title, imageTitle, featureImage, excerpt, slug } =
                article;
              return (
                <WrapItem key={i} display="flex" justifyContent="center">
                  <ArticleCard
                    title={title}
                    imageTitle={imageTitle}
                    featureImage={featureImage}
                    excerpt={excerpt}
                    slug={slug}
                  />
                </WrapItem>
              );
            })}
          </Wrap>
        ) : (
          <Flex w="full" h="200px" justify="center" align="center">
            <Heading size="md">coming soon!</Heading>
          </Flex>
        )}
      </Container>
    </Box>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      featureImage: PropTypes.string.isRequired,
      imageTitle: PropTypes.string.isRequired,
      categories: PropTypes.array.isRequired,
      excerpt: PropTypes.string.isRequired,
    })
  ),
};

export default ArticlesList;
