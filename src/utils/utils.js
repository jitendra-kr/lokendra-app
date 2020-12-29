 const getLimitedText = (text, limit) => {
    limit = limit ? limit : 63;
    if (text.length > limit) {
      return text.substring(0, limit) + " ... ";
    }
    return text;
};

const inputFieldsLimit = {
  firstName: 15,
  lastName: 15
}


module.exports = {
    getLimitedText,
    inputFieldsLimit
}
