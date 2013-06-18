(function($) {

	/**
	 * Data container for a ListItem
	 * @return void
	 */
	window.MyListItemModel = Backbone.Model.extend({

		url: '',																					// No URL needed as we're loading all the data in one go from via the collection

		defaults: {																					// set default values; just out of habit
			title: '',
			url:''
		}
	});

})(jQuery);