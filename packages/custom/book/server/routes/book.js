'use strict';

/* jshint -W098 */

var spells = require('../controllers/spell');

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && req.article.user.id !== req.user.id) {
    return res.status(401).send('User is not authorized');
  }
  next();
};

module.exports = function(Spell, app, auth) {

  app.route('/spells')
    .get(spells.all)
    .post(spells.create);
/* app.route('/classes/:classId')
    .get(auth.isMongoId, articles.show)
    .put(auth.isMongoId, auth.requiresLogin, hasAuthorization, articles.update)
    .delete(auth.isMongoId, auth.requiresLogin, hasAuthorization, articles.destroy);
*/
  // Finish with setting up the classId param
  //app.param('classId', classes.class);
};
/*
// The Package is past automatically as first parameter
module.exports = function(Book, app, auth, database) {

  app.get('/book/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/book/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/book/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/book/example/render', function(req, res, next) {
    Book.render('index', {
      package: 'book'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
*/