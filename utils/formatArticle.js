function convertToDate(timestamp) {
  return `${new Date(timestamp.seconds)}`;
}

export default function formatArticle(article) {
  const { createdAt, modifiedAt } = article;

  return {
    ...article,
    createdAt: convertToDate(createdAt),
    modifiedAt: convertToDate(modifiedAt),
  };
}
