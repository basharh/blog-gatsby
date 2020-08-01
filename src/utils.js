function isArabic(str) {
  const arabicRegexRange = /[\u0600-\u06FF]/;
  return arabicRegexRange.test(str);
}

function getPostDataFromGoogleDoc(googleDoc) {
  const { id, document, childMarkdownRemark } = googleDoc;
  return {
    documentId: id,
    title: document.name,
    path: document.path,
    excerpt: childMarkdownRemark.excerpt,
    createdTime: document.createdTime,
    lang: isArabic(document.name) ? "ar" : "en",
  };
}

module.exports = {
  getPostDataFromGoogleDoc,
  isArabic,
};
