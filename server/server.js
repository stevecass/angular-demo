var express = require('express');
var faker = require("faker");
var jsonServer = require('json-server');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var app = express();

function generatePerson(id) {
  return {
    id: id,
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName()
    },
    email: faker.internet.email(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    company: faker.company.companyName(),
    address: {
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
    },
    phone: faker.phone.phoneNumber(),
    bio: faker.lorem.paragraph()
  }
}

function generateFakeData() {
  var people = [];
  for(var i=1; i<=20; i++) {
    people.push(generatePerson(i));
  }
  return {people: people};
}

app.use(cookieParser());
app.use(session(
  {name:'session',
   keys: ['ef305d06ecb84574b9befe9d4d31c87654cf7f30ec82', '5ae3af1d866dab6a73eb4eb0601b44215c4ab05aa']
  }
));
app.use(require('body-parser').json());

app.get('/whoami', function(req, res) {
  if (req.session && req.session.user) {
    res.json(req.session.user);
  } else {
    res.json({status: "Not logged in"});
  }
});


app.post('/login', function(req, res) {
  console.log(req.session);
    var user = {name: "John Doe", status:"OK", access_token:"some-fancy-token"};
    req.session.user = user;
    res.json(user);
});

var people = generateFakeData();
var jServer = jsonServer.create();
jServer.use(jsonServer.defaults());
var router = jsonServer.router(people);
jServer.use(router);
app.use(jServer);
app.listen(3000);
