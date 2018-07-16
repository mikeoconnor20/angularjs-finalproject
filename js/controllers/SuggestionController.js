app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
	$scope.post = suggestions.posts[$routeParams.id];
    
	$scope.addComment = function() {

	//if input empty, don't submit
	if(!$scope.comment || $scope.comment === "") {
		return;
	}
	 
	//push suggestion posts in suggestions.js
	$scope.comments.push({ 
		body: $scope.comment,
		upvotes: 0,
	});
	 
	//after submit, clear input
	$scope.comment = '';
	};

	$scope.upVote = function(comment) {
		comment.upvotes += 1;
	}; 

}]);