import { getDocs, collection, query, where, limit } from "firebase/firestore";

import { db } from "../constants/firebase";
import formatArticle from "./formatArticle";

export default async function getArticle(slug) {
  const blogId = process.env.BLOG_ID;
  const q = query(
    collection(db, "blogs", blogId, "articles"),
    where("slug", "==", slug),
    limit(1)
  );
  const snap = await getDocs(q);
  const articleDoc = snap.docs[0];

  //   let article = {
  //     title: "article not found!",
  //     content: "Please ensure you got the correct article slug",
  //     pageTitle: "Article not found!",
  //     pageDescription: "",
  //   };

  if (articleDoc.exists) {
    return formatArticle({
      ...articleDoc.data(),
      articleId: articleDoc.id,
    });
  }

  return null;
}
