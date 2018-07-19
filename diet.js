var eat=angular.module('livetoeat',[]);
		eat.controller('diet',['$scope',function($scope,$http){
			$scope.sang = 0;
			$scope.trua = 0;
			$scope.toi = 0;	
			
    	$scope.thu2 = function() {
			$http.get("thu2.txt")
			.then(function(response){
				$scope.thucdon=response.data;
			});
			};	
		$scope.thu3 = function() {
			$http.get("thu3.txt")
			.then(function(response){
				$scope.thucdon=response.data;
			});
			};
		$scope.thu4 = function() {
			$http.get("thu4.txt")
			.then(function(response){
				$scope.thucdon=response.data;
			});
			};
		$scope.thu5 = function() {
			$http.get("thu5.txt")
			.then(function(response){
				$scope.thucdon=response.data;
			});
			};
		$scope.thu6 = function() {
			$http.get("thu6.txt")
			.then(function(response){
				$scope.thucdon=response.data;
			});
			};
		$scope.thu7 = function() {
			$http.get("thu7.txt")
			.then(function(response){
				$scope.thucdon=response.data;
			});
			};
		$scope.chunhat = function() {
			$http.get("chunhat.txt")
			.then(function(response){
				$scope.thucdon=response.data;
			});
			};
		}]);	