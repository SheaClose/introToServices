angular.module('app').controller('ctrl', function($scope, srv) {
  $scope.people = srv.people;
  $scope.removePerson = function(index) {
    srv.removePerson(index);
  };
  $scope.sortPeople = function() {
    srv.sortPeople();
  };
});
