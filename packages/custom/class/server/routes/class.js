'use strict';

var classes = require('../controllers/class');

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && req.article.user.id !== req.user.id) {
    return res.status(401).send('User is not authorized');
  }
  next();
};

module.exports = function(Articles, app, auth) {

  app.route('/classes')
    .get(classes.all)
    .post(classes.create);
/* app.route('/classes/:classId')
    .get(auth.isMongoId, articles.show)
    .put(auth.isMongoId, auth.requiresLogin, hasAuthorization, articles.update)
    .delete(auth.isMongoId, auth.requiresLogin, hasAuthorization, articles.destroy);
*/
  // Finish with setting up the classId param
  app.param('classId', classes.class);
};

/* jshint -W098 */
// The Package is past automatically as first parameter
/*module.exports = function(Class, app, auth, database) {

  app.get('/class/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/class/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/class/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/class/example/render', function(req, res, next) {
    Class.render('index', {
      package: 'class'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
*/