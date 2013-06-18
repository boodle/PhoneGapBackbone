(function($) {
	$(document).ready(function() {																	// inside a document ready so that the template elements will be available

		/**
		 * Display the example list
		 */
		window.MyListView = Backbone.View.extend({

			template: _.template($("#MyListView").html()),											// as this is inside a document ready, we can use jQuery to grab the template from the index.html

			/**
			 * Setup scope, add listeners, and
			 * tell the models to perform a fetch
			 * @return void
			 */
			initialize: function() {
				trace('MyListView::initialize()');
				
				_.bindAll(this,'render','renderMyListItem');										// list what functons need access to "this"
				
				this.model.bind('change:version', this.render);										// event listener for when the MyListModel has loaded
				this.model.collection.bind('add', this.renderMyListItem);							// listen for anything added to the MyListItemCollection

				this.model.fetch();																	// tell the MyListModel to load it's data
				this.model.collection.fetch();														// tell the MyListItemCollection to load it's data
			},

			/**
			 * Render the List
			 * @return View
			 */
			render: function() {
				trace('MyListView::render()');

				this.$el.html(this.template(this.model.toJSON()));									// render the template, using the data from the model
				return this;
			},

			/**
			 * Render a single list item, and add it to 
			 * the <ul> tag in this view
			 *
			 * @param MyListItemModel
			 * @return void
			 */
			renderMyListItem: function(myListItemModel) {
				trace('MyListView::renderMyListItems()');

				var myListItemView = new window.MyListItemView({									// Create an instance of MyListItemView
					model: myListItemModel 															// using the passed in model from the collection
				});

				this.$('ul').append(myListItemView.render().el);									// and add to the <ul>
			}
		});
	});
})(jQuery);