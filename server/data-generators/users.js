var faker = require('faker')
function generateusers () {
  var users = []
  for (var id = 0; id < 500; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var email = faker.internet.email()
    users.push({
      "id": id,
      "avatar": faker.internet.avatar(),
      "first_name": firstName,
      "last_name": lastName,
      "email": email
    })
  }
  return { "users": users }
}
module.exports = generateusers
