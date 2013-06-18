(function($) {

	/**
	 * Data container for a guide answer
	 * @return void
	 */
	window.MyListModel = Backbone.Model.extend({

		url: 'data/MyListData.json',													// load the data locally for the purposes of this example app

		defaults: {																		// set variable defaults incase we render before we have data
			version: ''
		},

		initialize: function() {
			trace('MyListModel::initialize()');
			this.collection = new window.MyListItemCollection();						// chreate an instance on the list item collection
		}
	});

})(jQuery);