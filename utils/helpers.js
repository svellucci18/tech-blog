module.exports = {
  // the helper method 'format_time' will take in a timestamp and return a string with only the time
  format_date: (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return month + "/" + day + "/" + year;
  },
};
