app.factory('suggestions', [function() {
	var demoSuggestions = {
		posts: [
		  {
			title: 'Free pizza at club meetings',
			upvotes: 15,
			comments: [
					{ 
						body: 'Sounds great!',
						upvotes: 5
					}
				]
		  },
		  {
			title: 'End all club emails with Laffy Taffy jokes',
			upvotes: 9,
			comments: [
					{ 
						body: 'But they are funny XD',
						upvotes: 1
					}
				]
		  },
		  {
			title: 'Recycle bins in the hallway',
			upvotes: 7,
			comments: [
					{ 
						body: 'Couldn\'t hurt to go green',
						upvotes: 5
					}
				]
		  },
		  {
			title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
			upvotes: 3,
			comments: [
					{ 
						body: 'Oooooooooh! I\'m halfway there!',
						upvotes: 5
					}
				]
		  }
		]
	};
	return demoSuggestions;
}]);