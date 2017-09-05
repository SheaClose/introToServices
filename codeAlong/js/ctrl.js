angular
  .module('app')
  .controller('phoneBookCtrl', function($scope, phoneBookService) {
    $scope.people = phoneBookService.people;

    $scope.addContact = function(contactObj) {
      phoneBookService.addContact(contactObj);
      $scope.newContact = {};
    };
    $scope.deleteContact = function(index) {
      phoneBookService.deleteContact(index);
    };
  });
