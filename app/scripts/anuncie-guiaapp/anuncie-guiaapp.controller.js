(function() {
	'use strict';

	angular
		.module('bizdir.anuncieguiaapp')
		.controller('AnuncieguiaappController', AnuncieguiaappController);

	AnuncieguiaappController.$inject = [
		'business', 'externalAppsService', '$cordovaEmailComposer', 'openHoursService'];

	/* @ngInject */
	function AnuncieguiaappController(
		business, externalAppsService, $cordovaEmailComposer, openHoursService) {
		var vm = angular.extend(this, {
			phoneNumber: business.phoneNumber,
			getDirections: getDirections,
			sendEmail: sendEmail,
			openFacebookPage: openFacebookPage,
			openHours: []
		});

		(function activate() {
			vm.openHours = business.openhours && openHoursService.getOpenHours(business.openhours);
		})();

		// **********************************************************************

		function getDirections() {
			externalAppsService.openMapsApp(business.officeLocation);
		}

		function sendEmail() {
			$cordovaEmailComposer.isAvailable().then(function() {
				var email = {
					to: business.email,
					subject: 'Cordova Icons',
					body: 'How are you? Nice greetings from Leipzig'
				};

				$cordovaEmailComposer.open(email);
			});
		}

		function openFacebookPage() {
			externalAppsService.openExternalUrl(business.facebookPage);
		}
	}
})();
