'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Spell = mongoose.model('Spell'),
  _ = require('lodash');


/**
 * Find article by id
 */
exports.spell = function(req, res, next, id) {
  Spell.load(id, function(err, spell) {
    if (err) return next(err);
    if (!spell) return next(new Error('Failed to load spell ' + id));
    req.spell = spell;
    next();
  });
};

/**
 * Create an article
 */
exports.create = function(req, res) {
  var spell = new Spell(req.body);
  //clase.user = req.user;
  spell.save(function(err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot save the spell',
        message: err
      });
    }
    res.json(spell);

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
  Spell.find().sort('-created').populate('user', 'name username').exec(function(err, articles) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot list the articles'
      });
    }
    res.json(articles);

  });
};
