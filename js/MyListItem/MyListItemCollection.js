(function($) {
	window.MyListItemCollection = Backbone.Collection.extend({
		model: window.MyListItemModel,																// set the model to use for items in the collection
		url: 'data/MyListItemsData.json'															// set where to load the items from
	})
})(jQuery);