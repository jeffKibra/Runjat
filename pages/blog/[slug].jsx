import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

import {
  getArticle,
  getActiveArticles,
  getRecentComments,
  getRelatedArticles,
} from "../../utils";

import PageLayout from "../../components/layout/PageLayout";
import NavBar from "../../components/layout/nav";
import FullpageSpinner from "../../components/ui/FullpageSpinner";
import Article from "../../components/Article";

function ArticlePage(props) {
  const router = useRouter();
  const { isFallback, isReady } = router;
  // console.log({ isFallback, isReady });

  return isFallback ? <FullpageSpinner /> : <LoadedPage {...props} />;
}

export default ArticlePage;

function LoadedPage(props) {
  console.log({ props });
  const { pageTitle, pageDescription } = props.article;
  return (
    <PageLayout
      pageTitle={pageTitle || ""}
      pageDescription={pageDescription || ""}
    >
      <Box w="full" position="relative">
        <Box
          position="absolute"
          w="full"
          h="80px"
          zIndex={-1}
          bg="rgba(0,0,0,0.9)"
        />
        <NavBar />
      </Box>
      <Article {...props} />
    </PageLayout>
  );
}

export async function getStaticProps({ params }) {
  try {
    const { slug } = params;
    // console.log({ params });

    const article = await getArticle(slug);
    //   console.log({ article });

    const { articleId, categoriesIds } = article;
    const relatedArticles = await getRelatedArticles(categoriesIds, articleId);
    const recentComments = await getRecentComments(articleId);

    // console.log({ relatedArticles, recentComments });

    if (!article) {
      throw new Error("Article not found");
    }

    return {
      props: {
        article,
        relatedArticles,
        recentComments,
      },
      revalidate: 60 * 60, //1 hr
    };
  } catch (error) {
    console.log({ error });
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const articles = await getActiveArticles();

  const paths = [];
  articles.forEach((article) => {
    const { slug } = article;
    paths.push({ params: { slug: `${slug}` } });
  });

  return {
    paths,
    fallback: true,
  };
}
