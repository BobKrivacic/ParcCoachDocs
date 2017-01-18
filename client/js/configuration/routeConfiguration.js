(function(patientReadmittance) {

//this is another change

  patientReadmittance.config(function ($stateProvider, RestangularProvider) {
    $stateProvider
    // Patients Level Routes
    .state('index', {
      url: '/',
      templateUrl: function($stateParams) {
        $stateParams.state='index';
        $stateParams.title="Readmittance";
        $stateParams.showType = 'all';
        return 'views/layouts/index-inner.html';
      },
      controller: 'PatientsController',
    })
    .state('home', {
      url: '',
      templateUrl: function($stateParams) {
        $stateParams.state='home';
        $stateParams.title="Readmittance";
        $stateParams.showType = 'all';
        return 'views/layouts/index-inner.html';
      },
      controller: 'PatientsController',
    })
    .state('termsofuse', {
      url: '/termsofuse',
      templateUrl: function($stateParams) {
        $stateParams.state='termsofuse';
        $stateParams.title="Terms of use";
        $stateParams.showType = 'all';
        return 'views/layouts/terms-of-use.html';
      },
      controller: 'PatientsController',
    })
    .state('installation', {
      url: '/installation',
      templateUrl: function($stateParams) {
        $stateParams.state='installation';
        $stateParams.title="Installation Instructions";
        $stateParams.showType = 'all';
        return 'views/layouts/installation.html';
      },
      controller: 'PatientsController',
    })
    .state('brochure', {
      url: '/brochure',
      templateUrl: function($stateParams) {
        $stateParams.state='brochure';
        $stateParams.title="Patient Brochure";
        $stateParams.showType = 'all';
        return 'views/layouts/brochure.html';
      },
      controller: 'PatientsController',
    })
    .state('hospital', {
      url: '/hospital',
      templateUrl: function($stateParams) {
        $stateParams.state='hospital';
        $stateParams.title="Hospital Brochure";
        $stateParams.showType = 'all';
        return 'views/layouts/hospital.html';
      },
      controller: 'PatientsController',
    })
    .state('quickstart', {
      url: '/quickstart',
      templateUrl: function($stateParams) {
        $stateParams.state='quickstart';
        $stateParams.title="Quick Start";
        $stateParams.showType = 'all';
        return 'views/layouts/quickstart.html';
      },
      controller: 'PatientsController',
    })
    .state('workflow1', {
      url: '/workflow1',
      templateUrl: function($stateParams) {
        $stateParams.state='workflow1';
        $stateParams.title="Workflow 1";
        $stateParams.showType = 'all';
        return 'views/layouts/workflow1.html';
      },
      controller: 'PatientsController',
    })
    .state('workflow2', {
      url: '/workflow2',
      templateUrl: function($stateParams) {
        $stateParams.state='workflow2';
        $stateParams.title="Workflow 2";
        $stateParams.showType = 'all';
        return 'views/layouts/workflow2.html';
      },
      controller: 'PatientsController',
    })
    .state('download', {
      url: '/download',
      templateUrl: function($stateParams) {
        $stateParams.state='download';
        $stateParams.title="Download App";
        $stateParams.showType = 'all';
        //return 'views/layouts/patients_debug.html';
        return 'views/layouts/download.html';
      },
      controller: 'PatientsController',
    })

  })

})(window.patientReadmittance);