(function() {
    'use strict';

    angular
        .module('bizdir.telefonesuteis', [
          'ionic',
          'ngCordova',
          'LocalStorageModule',
          'bizdir.common',
          'ionic-toast'
        ])
        .config(function($stateProvider) {
            $stateProvider
                .state('app.telefonesuteis', {
                    url: '/telefones-uteis',
                    views: {
                        'menuContent': {
                            templateUrl: 'scripts/telefones-uteis/telefones-uteis.html',
                            controller: 'TelefonesUteisController as vm'
                        }
                    }
                });
        });
})();
