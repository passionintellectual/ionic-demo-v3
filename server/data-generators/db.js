module.exports = function() {
  var productRepo = require('./products')();

    return {
      users: require('./users')(),
      products: productRepo.products,
      tags: productRepo.tags,
      slides:require('./slides')()
      
    }
  }