'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Class = mongoose.model('Class'),
  _ = require('lodash');


/**
 * Find article by id
 */
exports.class = function(req, res, next, id) {
  Class.load(id, function(err, article) {
    if (err) return next(err);
    if (!article) return next(new Error('Failed to load article ' + id));
    req.article = article;
    next();
  });
};

/**
 * Create an article
 */
exports.create = function(req, res) {
  var clase = new Class(req.body);
  //clase.user = req.user;

  clase.save(function(err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot save the article'
      });
    }
    res.json(clase);

  });
};

/**
 * Update an article
 */
exports.update = function(req, res) {
  var article = req.article;

  article = _.extend(article, req.body);

  article.save(function(err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot update the article'
      });
    }
    res.json(article);

  });
};

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
  var article = req.article;

  article.remove(function(err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot delete the article'
      });
    }
    res.json(article);

  });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
  res.json(req.article);
};

/**
 * List of Articles
 */
exports.all = function(req, res) {
  Class.find().sort('-created').populate('user', 'name username').exec(function(err, articles) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot list the articles'
      });
    }
    res.json(articles);

  });
};
