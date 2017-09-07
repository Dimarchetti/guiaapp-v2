(function() {
	'use strict';

	angular
		.module('bizdir.anuncieguiaapp', [
			'ionic',
			'ngCordova',
			'bizdir.common'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.anuncieguiaapp', {
					url: '/anuncie-guiaapp/:businessId',
					views: {
						'menuContent': {
							templateUrl: 'scripts/anuncie-guiaapp/anuncie-guiaapp.html',
							controller: 'AnuncieguiaappController as vm'
						}
					},
					resolve: {
						business: function($stateParams, businessesService) {
							return businessesService.getBusiness($stateParams.businessId);
						}
					}
				});
		});
})();
