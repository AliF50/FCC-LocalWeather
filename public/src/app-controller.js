app.controller('WeatherController', ['$scope', 'locationFactory', 'weatherFactory', function($scope, locationFactory, weatherFactory) {
    $scope.locationData = {};
    $scope.weatherData = {};
    $scope.units = "metric";
    $scope.unitsToDisplay = 'C';

    locationFactory.getData().then(function(result) {
        console.log(result.data);
        $scope.locationData.loc = result.data.loc
        $scope.locationData.city = result.data.city;
        $scope.locationData.region = result.data.region;
        $scope.locationData.country = result.data.country;
        console.log($scope.locationData);
        weatherFactory.getData($scope.locationData.loc).then(function(result) {
            console.log(result.data);
            $scope.weatherData.temp = result.data.current.temp_c;
            $scope.weatherData.icon = result.data.current.condition.icon;
            $scope.weatherData.desc = result.data.current.condition.text;
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
