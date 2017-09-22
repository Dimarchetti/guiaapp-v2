(function() {
	'use strict';

	angular
		.module('bizdir.contact-us')
		.controller('ContactUsController', ContactUsController);

	ContactUsController.$inject = [
		'business', 'externalAppsService', '$cordovaEmailComposer', 'openHoursService','servicesService'];

	/* @ngInject */
	function ContactUsController(
		business, externalAppsService, $cordovaEmailComposer, openHoursService) {

		var vm = angular.extend(this, {
			phoneNumber: business.phoneNumber,
      name: business.name,
      pictures: business.logo,
      description: business.description,
      openWhatsapp: openWhatsapp,
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
					subject: 'Olá tudo bem?',
					body: 'Vi seu anúncio no aplicativo GuiaApp Maricá, você pode me atender?'
				};

				$cordovaEmailComposer.open(email);
			});
		}

		function openFacebookPage() {
			externalAppsService.openExternalUrl(business.facebookPage);
		}

		function openWhatsapp() {
		  externalAppsService.whatsapp(business.whatsapp);
    }

	}
})();
