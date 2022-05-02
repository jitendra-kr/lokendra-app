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


const dateFormat = (date) => {
  if (date) {
    const newDate = new Date(date);
    const month = newDate.toLocaleString("default", { month: "long" });
    return `${month} ${newDate.getDate()}, ${newDate.getFullYear()}`;
  }
}

const getDefaultHeadValues = () => {
  return {
    url: window.location.href
  }
}


module.exports = {
    getLimitedText,
    inputFieldsLimit,
    dateFormat,
    getDefaultHeadValues
}
