'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Book = new Module('book');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Book.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Book.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Book.menus.add({
    title: 'book example page',
    link: 'book example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Book.aggregateAsset('css', 'book.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Book.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Book.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Book.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Book;
});
