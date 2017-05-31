app.factory('weatherFactory', ['$http', function($http) {
    var factory = {};
    factory.lat = "";
    factory.lon = "";
    factory.units = "";
    factory.getData = function(lat, lon, units) {
        this.lat = lat;
        this.lon = lon;
        this.units = units;
        return $http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=e82ef0a324f3f4965a0dcc11a0e6c987&units=' + units);
    };

    return factory;
}]);