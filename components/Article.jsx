import {
  Flex,
  VStack,
  Stack,
  Container,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Grid,
  GridItem,
  Link as ChakraLink,
  Avatar,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import CreateComment from "../containers/CreateComment";

function Article(props) {
  const { recentComments, relatedArticles, article } = props;
  const {
    featureImage,
    imageTitle,
    title,
    content,
    categories,
    blogId,
    articleId,
  } = article;
  console.log({ props });

  return (
    <Flex w="full" h="full" bg="gray.100">
      <Container my={5} maxW="container.lg">
        <Grid mt={4} columnGap={4} rowGap={4} templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={[12, null, null, 9]}>
            <VStack
              as="article"
              bg="white"
              shadow="md"
              borderRadius="md"
              alignItems="flex-start"
              w="full"
            >
              <Flex as="section" borderTopRadius="md">
                <Image
                  width="1280px"
                  height="640px"
                  src={featureImage}
                  alt={imageTitle}
                  style={{
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                  }}
                  objectPosition="center"
                  objectFit="cover"
                />
              </Flex>
              <VStack
                // as="article"
                // bg="white"
                // shadow="md"
                // borderRadius="md"
                alignItems="flex-start"
                w="full"
                pt={4}
              >
                <VStack
                  as="header"
                  alignItems="flex-start"
                  w="full"
                  p={4}
                  pb={1}
                >
                  <Heading as="h1" size="lg">
                    {title}
                  </Heading>
                  <Flex w="200px" h="3px" bg="cyan" mb={5} />
                </VStack>
                <Categories categories={categories} />

                <Flex
                  as="main"
                  p={4}
                  dangerouslySetInnerHTML={{ __html: content }}
                ></Flex>
              </VStack>
            </VStack>

            <CreateComment articleId={articleId} blogId={blogId} />
            <RecentComments comments={recentComments} />
          </GridItem>
          <GridItem colSpan={[12, null, null, 3]}>
            {relatedArticles && Array.isArray(relatedArticles) && (
              <RelatedArticles articles={relatedArticles} />
            )}
          </GridItem>
        </Grid>
      </Container>
    </Flex>
  );
}

function Categories(props) {
  const { categories } = props;
  return (
    <Wrap w="full" alignItems="flex-start" p={2} pt={0}>
      {categories.map((category, i) => {
        const { name } = category;

        return (
          <WrapItem
            py={1}
            px={2}
            mx={2}
            borderRadius="md"
            as="span"
            key={i}
            // bg="cyan"
            border="blue 1px solid"
          >
            <Text fontSize="sm"># {name}</Text>
          </WrapItem>
        );
      })}
    </Wrap>
  );
}

function RecentComments(props) {
  const { comments } = props;

  return (
    <VStack
      bg="white"
      borderRadius="md"
      shadow="md"
      w="full"
      p={4}
      mt={4}
      alignItems="flex-start"
    >
      <Flex borderBottom="1px solid cyan">
        <Heading as="h3" size="sm">
          Recent Comments
        </Heading>
      </Flex>
      {comments?.map(({ comment, firstName, lastName }, i) => {
        return (
          <Stack w="full" direction="row" key={i}>
            <Avatar size="sm" name={`${firstName} ${lastName}`} />
            <VStack
              bg="gray.100"
              borderRadius="md"
              w="full"
              alignItems="flex-start"
              p={2}
            >
              <Flex alignItems="center">
                <Text fontWeight="bold" mt="0px !important" fontSize="sm">
                  {`${firstName} ${lastName}`}
                </Text>
              </Flex>
              <Text>{comment}</Text>
            </VStack>
          </Stack>
        );
      })}
    </VStack>
  );
}

function RelatedArticles(props) {
  const { articles } = props;
  console.log({ articles, props });

  return (
    <VStack
      bg="white"
      borderRadius="md"
      shadow="md"
      p={4}
      alignItems="flex-start"
      w="full"
    >
      <Heading size="sm">Related Reads</Heading>
      <Flex w="100px" h="1px" bg="cyan" />
      {articles.map((article, i) => {
        const { featureImage, imageTitle, title, slug } = article;
        // console.log({ article });
        return (
          <Flex key={i} w="full" justify="flex-start" alignItems="center">
            <Flex w="fit-content">
              <Image
                width={50}
                height={50}
                src={featureImage}
                alt={imageTitle}
                style={{ borderRadius: "50%" }}
              />
            </Flex>
            <Link href={`/blog/${slug}`} passHref>
              <ChakraLink>
                <Heading pl={5} size="xs">
                  {title}
                </Heading>
              </ChakraLink>
            </Link>
          </Flex>
        );
      })}
    </VStack>
  );
}

export default Article;
