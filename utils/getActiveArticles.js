import { query, getDocs, collection, where, orderBy } from "firebase/firestore";

import { db } from "../constants/firebase";
import formatArticle from "./formatArticle";

export default async function getActiveArticles() {
  const blogId = process.env.BLOG_ID;
  const q = query(
    collection(db, "blogs", blogId, "articles"),
    orderBy("createdAt", "desc"),
    where("status", "==", "active")
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

  return articles;
}
