import { Container, Flex, Heading } from "@chakra-ui/react";

import { getActiveArticles } from "../../utils";

import PageLayout from "../../components/layout/PageLayout";
import PageBanner from "../../components/layout/PageBanner";
import ArticlesList from "../../components/ArticlesList";
//image
import image from "../../public/statics/images/blog1.jpg";

function Blog(props) {
  console.log({ props });
  const { articles } = props;

  return (
    <PageLayout
      pageTitle="HR Blog | runjat builders Blog"
      pageDescription="runjat builders blog, HR Blog"
    >
      <PageBanner
        image={{
          src: image,
          title: "blog image",
        }}
      >
        <Container
          color="white"
          display="flex"
          w="full"
          h="full"
          alignItems="center"
          maxW="container.md"
        >
          <Flex direction="column">
            <header>
              <Heading as="h1" size="xl" mb="16px">
                OUR BLOG
              </Heading>
            </header>
            <Heading lineHeight={2} size="md">
              runjat builders Knowledge Centre. Be inspired.
            </Heading>
          </Flex>
        </Container>
      </PageBanner>
      <ArticlesList articles={articles} />
    </PageLayout>
  );
}

export default Blog;

export async function getStaticProps() {
  const articles = await getActiveArticles();

  return {
    props: { articles },
    revalidate: 60,
  };
}
