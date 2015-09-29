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
        .withConfig(function(config) {
          config.setBaseUrl(config.baseUrl + '/api');
          config
            .addFullRequestInterceptor(function(data, operation, what, url, headers) {
              if (angular.isObject(data)) {
                // POST, PUT, ...
                return {
                  headers: angular.extend({
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  }, headers)
                };
              } else {
                // GET, DELETE, ...
                headers = angular.copy(headers);
                delete headers['Content-Type'];
                return {
                  headers: {
                    Accept: 'application/json'
                  }
                };
              }
            });
        })
        .one('message').get()
        .then(function(message) {
          vm.message = message;
        });
    };
  }
})();
