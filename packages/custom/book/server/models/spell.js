'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Spell Schema
 */
var SpellSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  tag: [{
    type: String}],
  level: {
    type: Number,
    required: true,
  },
  school: {
    type: String,
    required: true,
    trim: true
  },
  casting_time: {
    type: String,
    required: true,
    trim: true
  },
  range: {
    type: String,
    required: true,
    trim: true
  },
  components: {
    verbal:Number,
    somatic:Number,
    material:Number,
    _id: false,
  },
  duration: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

/**
 * Validations
 */
SpellSchema.path('name').validate(function(name) {
  return !!name;
}, 'Title cannot be blank');

SpellSchema.path('description').validate(function(description) {
  return !!description;
}, 'Content cannot be blank');

/**
 * Statics
 */
SpellSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Spell', SpellSchema);
