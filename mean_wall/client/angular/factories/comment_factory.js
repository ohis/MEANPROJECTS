app.factory('CommentFactory', function($http){
	var factory = {};

	factory.create = function(newComment, callback){
    console.log("created comment");
    console.log(newComment);
		$http.post('/comments', newComment).then(callback);
	}
	factory.destroy = function(id, callback){
		$http.delete('/comments/' + id).then(callback);
	}
	factory.updateLikes = function(comment_id, user_id, callback){
		$http.put('/comments/' + comment_id + '/likes', { user: user_id }).then(callback);
	}

	return factory;
})
