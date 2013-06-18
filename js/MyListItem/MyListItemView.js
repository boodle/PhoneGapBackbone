(function($) {
	$(document).ready(function() {																	// inside a document ready so that the template elements will be available

		/**
		 * Display an example list item
		 */
		window.MyListItemView = Backbone.View.extend({

			template: _.template($("#MyListItemView").html()),										// Grab the template from index.html with jQuery
			tagName: 'li',																			// render these as <li> tags rather than the default <div>

			initialize: function() {
				trace('MyListItemView::initialize()');
				_.bindAll(this,'render');															// set what methods need access to "this"
			},

			/**
			 * Render the ListItem
			 * @return View
			 */
			render: function() {
				trace('MyListItemView::render()');
				this.$el.html(this.template(this.model.toJSON()));									// Render the template using the data from the model
				return this;
			}
		});
	});
})(jQuery);