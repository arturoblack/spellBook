'use strict';

/* jshint -W098 */
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
