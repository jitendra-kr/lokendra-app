getLimitedText = (text, limit) => {
    limit = limit ? limit : 63;
    if (text.length > limit) {
      return text.substring(0, limit) + " ... ";
    }
    return text;
};

module.exports = {
    getLimitedText
}