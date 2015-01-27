'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Class = new Module('class');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Class.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Class.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Class.menus.add({
    title: 'class example page',
    link: 'class example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Class.aggregateAsset('css', 'class.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Class.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Class.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Class.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Class;
});
