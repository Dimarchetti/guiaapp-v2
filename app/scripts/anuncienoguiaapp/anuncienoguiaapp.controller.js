(function() {
  'use strict';

  angular
    .module('bizdir.anuncienoguiaapp')
    .controller('AnuncienoguiaappController', AnuncienoguiaappController);

  AnuncienoguiaappController.$inject = ['externalAppsService'];

  /* @ngInject */
  function AnuncienoguiaappController(externalAppsService) {
    var vm = angular.extend(this, {
      openWhatsapp: openWhatsapp

    });

    function openWhatsapp() {
      var apizap = "https://api.whatsapp.com/send?phone=5521997848484&text=Oi+Tudo+bem%3F+Estou+interessado+em+anunciar+no+GuiaApp+Maric%C3%A1.+Me+chamo+%28coloque+seu+nome+aqui%29";
      externalAppsService.whatsapp(apizap);
    }


  }
})();
