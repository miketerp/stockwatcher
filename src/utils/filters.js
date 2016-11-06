var filters = {
  truncatePrice: function(val) {
    // In most cases not needed but incase of berkshire hathaway, the most expensive stock.
    if( val.length > 7 ) {
      val = val.split('.')[0];
    }

    return parseFloat(val).toLocaleString();
  },
  truncatePercent: function(val) {
    // This is needed because sometimes Yahoo returns with more than 2 digits
    val = parseFloat(val);

    if (val > 0 ) {
      val = '+' + val.toFixed(2);
    } else {
      val = val.toFixed(2);
    }

    return val + '%';
  }
};

module.exports = filters;