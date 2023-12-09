import {
  query,
  getDocs,
  collection,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

import { db } from "../constants/firebase";
import formatArticle from "./formatArticle";

export default async function getRelatedArticles(categoriesIds, articleId) {
  const blogId = process.env.BLOG_ID;
  const q = query(
    collection(db, "blogs", blogId, "articles"),
    orderBy("createdAt", "desc"),
    where("categoriesIds", "array-contains-any", categoriesIds),
    where("status", "==", "active"),
    limit(6)
  );

  const snap = await getDocs(q);
  const articles = [];
  snap.forEach((articleDoc) => {
    articles.push(
      formatArticle({
        ...articleDoc.data(),
        articleId: articleDoc.id,
      })
    );
  });

  return articles.filter((article) => article.articleId !== articleId);
}
