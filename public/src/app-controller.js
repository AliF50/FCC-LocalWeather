app.controller('WeatherController', ['$scope', 'locationFactory', 'weatherFactory', function($scope, locationFactory, weatherFactory) {
    $scope.locationData = {};
    $scope.weatherData = {};
    $scope.units = "metric";
    $scope.unitsToDisplay = 'C';

    locationFactory.getData().then(function(result) {
        console.log(result.data);
        $scope.locationData.lat = result.data.loc.split(',')[0];
        $scope.locationData.lon = result.data.loc.split(',')[1];
        $scope.locationData.city = result.data.city;
        $scope.locationData.region = result.data.region;
        $scope.locationData.country = result.data.country;
        console.log($scope.locationData);
        weatherFactory.getData($scope.locationData.lat, $scope.locationData.lon, $scope.units).then(function(result) {
            console.log(result.data);
            $scope.weatherData.temp = result.data.main.temp;
            $scope.weatherData.icon = result.data.weather[0].icon;
            $scope.weatherData.desc = result.data.weather[0].main;
        });
    });

    $scope.toggleUnits = function() {
        if ($scope.units === "metric") {
            $scope.units = "imperial";
            $scope.weatherData.temp = 1.8 * $scope.weatherData.temp + 32;
            $scope.unitsToDisplay = 'F';
        } else {
            $scope.units = "metric";
            $scope.weatherData.temp = ($scope.weatherData.temp - 32) / 1.8;
            $scope.unitsToDisplay = 'C';
        }
    };
}]);
