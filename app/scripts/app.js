// angular.module is a global place for creating, registering and retrieving Angular modules
// 'bizdir' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'bizdir.controllers' is found in controllers.js
angular.module('bizdir', [
	'ionic',
	'ionic.cloud',
	'ngCordova',

	'firebase',
	'config',
	'gMaps',
	'ionic.rating',

	'bizdir.products',
	'bizdir.news',
	'bizdir.map',
	'bizdir.businesses',
	'bizdir.favorite-businesses',
	'bizdir.push',
	'bizdir.menu',
	'bizdir.services',
	'bizdir.catalogs',
	'bizdir.contact-us',
	'bizdir.wordpress',
	'bizdir.drupal',
	'bizdir.reviews',
  'bizdir.horariosonibus',
  'bizdir.anuncienoguiaapp',
  'bizdir.telefonesuteis'
])

.value('_', window._)

  .run(function($ionicPlatform, $ionicPopup, $ionicHistory) {
    $ionicPlatform.registerBackButtonAction(function (e) {
      e.preventDefault();

      function showConfirm() {
        var confirmPopup = $ionicPopup.show({
          title: 'Sair do GuiaApp?',
          template: 'Tem certeza que quer sair do GuiaApp?',
          buttons: [{
            text: 'Cancelar',
            type: 'button-stable button-outline',
          }, {
            text: 'Ok',
            type: 'button-stable',
            onTap: function () {
              ionic.Platform.exitApp();
            }
          }]
        });
      }

      // Is there a page to go back to?
      if ($ionicHistory.backView()) {
        // Go back in history
        $ionicHistory.backView().go();
      } else {
        // This is the last page: Show confirmation popup
        showConfirm();
      }

      return false;
    }, 101);
  })

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)

		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($urlRouterProvider) {
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/businesses');
});
