(function() {
    'use strict';

    angular
        .module('bizdir.horariosonibus', [
          'ionic',
          'ngCordova',
          'LocalStorageModule',
          'bizdir.common',
          'ionic-toast'
        ])
        .config(function($stateProvider) {
            $stateProvider
                .state('app.horariosonibus', {
                    url: '/horarios-onibus',
                    views: {
                        'menuContent': {
                            templateUrl: 'scripts/horarios-onibus/horarios-onibus.html',
                            controller: 'HorariosonibusController as vm'
                        }
                    }
                });
        });
})();
