(function() {
  'use strict';

  angular
    .module('bizdir.anuncienoguiaapp', [
      'ionic',
      'ngCordova',
      'LocalStorageModule',
      'bizdir.common',
      'ionic-toast'
    ])
    .config(function($stateProvider) {
      $stateProvider
        .state('app.anuncienoguiaapp', {
          url: '/anuncienoguiaapp',
          views: {
            'menuContent': {
              templateUrl: 'scripts/anuncienoguiaapp/anuncienoguiaapp.html',
              controller: 'AnuncienoguiaappController as vm'
            }
          }
        });
    });
})();
