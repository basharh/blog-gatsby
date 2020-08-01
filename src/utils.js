function isArabic(str) {
  const arabicRegexRange = /[\u0600-\u06FF]/;
  return arabicRegexRange.test(str);
}

module.exports = {
  isArabic,
};
