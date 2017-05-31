app.factory('locationFactory', ['$http', function($http) {
    var factory = {};

    factory.getData = function() {
        return $http.get('https://ipinfo.io/json');
    };
    return factory;
}]);
