var faker = require('faker')
function generateslides () {
    var imgCats = ['business', 'technics', 'nature', 'city', 'animals', 'abstract', 'food', 'sports', 'nightlife'];

  var slides = []
  for (var id = 0; id < 5; id++) {
   
    slides.push({
      "id": id,
      "image-url": faker.image.imageUrl(400,800, imgCats[faker.random.number(imgCats.length -1)]),
      "redirect-url": faker.internet.url()
    })
  }
  return { "slides": slides }
}
module.exports = generateslides