app.factory('weatherFactory', ['$http', function($http) {
    var factory = {};

    factory.getData = function(loc) {

        return $http.get('https://api.apixu.com/v1/current.json?key=b063d40dbb434ee7918174744173105&q=' + loc);
    };

    return factory;
}]);
