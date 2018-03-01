var faker = require('faker')
function generateslides () {
    var imgCats = ['business', 'technics', 'nature', 'city', 'animals', 'abstract', 'food', 'sports', 'nightlife'];

  var slides = []
  for (var id = 0; id < 5; id++) {
   
    slides.push({
      "id": id,
      "title": faker.lorem.sentence(),
      "description": faker.lorem.paragraph(),
      "imageUrl": faker.image.imageUrl(600,800, imgCats[faker.random.number(imgCats.length -1)]),
      "redirectUrl": faker.internet.url()
    });
  }
  return { "slides": slides }
}
module.exports = generateslides