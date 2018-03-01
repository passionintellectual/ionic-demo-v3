var faker = require('faker')

function generateproducts () {
  var products = [];
  var globalTagsArray = [];
  var globalTagsObjArray = [];
  var imgCats = ['business', 'technics', 'nature', 'city', 'animals', 'abstract', 'food', 'sports', 'nightlife'];
  for (var id = 0; id < 50; id++) {

    var tagsNumber = (Math.random() * 10) + 1;
    var tagsArray = [];
    for(var i= 0; i< tagsNumber; i++) {
        const dept = faker.commerce.department();
        tagsArray.push(dept);
        if(!globalTagsArray.includes(dept)){
            globalTagsArray.push(dept);
            globalTagsObjArray.push({
                id:dept,
                description:"Some category Description"
            })
        }
        
    }

    var imgsNumber = Math.round(Math.random() * 10) + 1;
    var imgs = [];
    var catForProduct = imgCats[imgCatsIndex];
    for (let j = 0; j < imgsNumber; j++) {
        var imgCatsIndex = Math.floor(Math.random() * imgCats.length - 1) + 1;

        const img = faker.image.imageUrl(400,800, catForProduct);

        imgs.push(img);
    }


    products.push({
      "id": id,
      "title": faker.commerce.productName(),
      "name":faker.commerce.product(),
      "description": faker.lorem.paragraph(),
      "adjective": faker.commerce.productAdjective() + faker.commerce.productMaterial(),
      "price": faker.commerce.price(),
      "tags": tagsArray,
      "images": imgs 
    })
  }
  return { "products": products, "tags": globalTagsObjArray }
}
module.exports = generateproducts