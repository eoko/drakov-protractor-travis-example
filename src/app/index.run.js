(function() {
  'use strict';

  angular
    .module('drakovProtractorTravisExample')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
