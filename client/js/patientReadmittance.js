(function(window, angular) {
  'use strict';

  // Initialize all of the submodules of the angular object
  angular.module('patientReadmittance.controllers', [])
  angular.module('patientReadmittance.filters', [])
  angular.module('patientReadmittance.services', [])
  angular.module('patientReadmittance.directives', [])

  // Create & bind enforce to the window object so it's globally accessible
  var patientReadmittance = angular.module('patientReadmittance', [
  'restangular',
  'patientReadmittance.controllers',
  'patientReadmittance.filters',
  'patientReadmittance.services',
  'patientReadmittance.directives',
  'ui.router',
  'ui.bootstrap'
  ])
  window.patientReadmittance = patientReadmittance
	
})(window, window.angular);
