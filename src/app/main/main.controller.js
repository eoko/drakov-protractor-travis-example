(function() {
  'use strict';

  angular
    .module('drakovProtractorTravisExample')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Restangular) {
    var vm = this;
    vm.getMessage = function() {
      Restangular
        .withConfig(function(config) {
          config.setBaseUrl('http://localhost:3010')
        })
        .one('message').get()
        .then(function(message) {
          vm.message = message;
        });
    };
  }
})();
