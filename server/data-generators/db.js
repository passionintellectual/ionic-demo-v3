module.exports = function() {
  var productRepo = require('./products')();

    return {
      users: require('./users')().users,
      products: productRepo.products,
      tags: productRepo.tags,
      slides:require('./slides')().slides
      
    };
  }