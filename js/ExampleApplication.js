/**
 * Router / main app file for the example application
 *
 * @author Total Onion Ltd
 * @license GNU 
 */
var exampleApp = {
	
	mode: 'app',																					// switching this from "app" to "web" will allow you to test it locally in a browser

	initialize: function() {
		trace('starting Example App');
		
		switch(this.mode) {
			case 'app':
				document.addEventListener('deviceready', exampleApp.onDeviceReady, false);
				break;

			case 'web':
				$(document).ready(function() {
					exampleApp.onDeviceReady();
				});
		}
	},
	
	onDeviceReady: function() {
		trace('exampleApp.onDeviceReady()');

		var BackboneApp = Backbone.Router.extend({

			routes: {																				// set navigable routes in the app; just a default home page will do for this
				'':								'home'
			},

			initialize: function() {																// Any code to run before the router kicks in should go here
				trace('BackboneApp::initialize()');
			},

			home: function() {																		// 'home' is the function called by the Router, setup in the routes
				trace('BackboneApp::home()');

				window.mainView = new MyListView({													// Create a new instance of the MyListView model
					model: new window.MyListModel()													//		- passing in a new instance of the MyListModel as its model
				});

				$('#master_container').html(window.mainView.render().el);
			}
		});

		window.backboneApp = new BackboneApp();														// Create a new instance of our new BackboneApp
		Backbone.history.start();																	// and start the history hash change handler
	}
};

/**
 * Fuck-up prevention; checks to see if the console exists before posting to it,
 * so that console.log messages that are accidentally left in do not break a
 * page when run live. Called "trace" as I have been doing a lot of AS3 today
 * and I keep typing it anyway.
 * @param  string message
 * @return void
 */
function trace(message,highlight) {
	if(typeof(console) != 'undefined' && typeof(console.log) == 'function') {
		console.log(message);
	}
}