var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form');
});

router.post('/new', function (req, res, next) {
  messages.push({
    added: new Date(),
    text: req.body.message,
    user: req.body.author,
  });

  res.redirect('/');
});

module.exports = router;
