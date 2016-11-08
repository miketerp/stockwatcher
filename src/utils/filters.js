var filters = {
  truncatePrice: function(val) {
    // TODO: Incase of berkshire hathaway, aka. the most expensive stock, find a new way.
    if( val.length > 7 ) {
      val = val.split('.')[0];
    }

    return new Number(parseFloat(val)).toFixed(2).toLocaleString();
  },
  truncatePercent: function(val) {
    // This is needed because sometimes Yahoo returns with more than 2 digits on cents.
    val = parseFloat(val);

    if ( val > 0 ) {
      val = '+' + val.toFixed(2);
    } else {
      val = val.toFixed(2);
    }

    return val + '%';
  }
};

module.exports = filters;