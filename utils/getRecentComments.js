import { query, getDocs, collection, where, orderBy } from "firebase/firestore";

import { db } from "../constants/firebase";
import formatArticle from "./formatArticle";

export default async function getRecentComments(articleId) {
  const blogId = process.env.BLOG_ID;
  const q = query(
    collection(db, "blogs", blogId, "articles", articleId, "comments"),
    orderBy("createdAt", "desc"),
    where("status", "==", "active")
  );

  const snap = await getDocs(q);
  const comments = [];
  snap.forEach((commentDoc) => {
    comments.push(
      formatArticle({
        ...commentDoc.data(),
        articleId: commentDoc.id,
      })
    );
  });

  return comments;
}
