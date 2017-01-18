(function(angular, patientReadmittance) {
  'use strict';
  
  patientReadmittance.controller('PAController', function ($scope, $modal, $stateParams, $state) {

    $scope.open = function () {
      $modal.open({
        templateUrl: 'myModalContent.html',
        backdrop: true,
        windowClass: 'modal',
        controller: function ($scope, $modalInstance) {
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        }
      });
    };
    
    // Expose certain providers to the view
    $stateParams.gScope = $scope;
    $scope.stateParams = $stateParams
    $scope.userKey = "User1";
   

    // Show and hide loader icon when the pages change
    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) { 
      $scope.loader=true
    })
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) { 
      $scope.controller=toState.name
      $scope.loader=false
    })
    $scope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) { 
      $scope.loader=false
      console.log(error)
    })

    $scope.xxgotoState = function(state) {
      if (state == "results2") {
        window.scrollTo(0,0); // reset in case prev not scrolled  
        var nPageH = $(document).height();
        var nViewH = window.outerHeight;
        if (nViewH > nPageH) {
          nViewH -= 250;
          $('BODY').css('height',nViewH + 'px');
        }
        window.scrollTo(0,1);
      }
      $state.go(state);
    };
    
})

})(window.angular, window.patientReadmittance);
