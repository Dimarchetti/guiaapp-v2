(function() {
  'use strict';

  angular
    .module('bizdir.telefonesuteis')
    .controller('TelefonesUteisController', TelefonesUteisController);

  TelefonesUteisController.$inject = ['$scope'];

  /* @ngInject */
  function TelefonesUteisController($scope) {
    $scope.groups = [
      {
        "id": 1,
        "name": "Aeroporto Santos Dumont",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 3398-5050"
          }
        ]
      },
      {
        "id": 2,
        "name": "Aeroporto Internacional Tom Jobim",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 3814-7070"
          }
        ]
      },
      {
        "id": 3,
        "name": "Ambulância (Emergência)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "192"
          }
        ]
      },
      {
        "id": 4,
        "name": "AMPLA (ENEL)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "0800-024-3236"
          }
        ]
      },
      {
        "id": 5,
        "name": "ANEEL",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "167"
          }
        ]
      },
      {
        "id": 6,
        "name": "Associação Comercial de Maricá",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2637-3819"
          }
        ]
      },
      {
        "id": 7,
        "name": "AMARI – Assoc. dos Moradores e Amigos do Recanto de Itaipuaçu",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2638-4238"
          }
        ]
      },
      {
        "id": 8,
        "name": "Barcas (CCR)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "0800-721-1012"
          }
        ]
      },
      {
        "id": 9,
        "name": "Bombeiros (Posto Maricá)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2648-2857"
          }
        ]
      },
      {
        "id": 10,
        "name": "Cartório Cordeirinho 2ª Distrito",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 3398-5050"
          }
        ]
      },
      {
        "id": 11,
        "name": "Cartório de Inoã",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2646-4287"
          }
        ]
      },
      {
        "id": 12,
        "name": "Cartório de Maricá",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2637-2915"
          }
        ]
      },
      {
        "id": 13,
        "name": "Casa da Mulher – Maricá",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 3731-5636"
          }
        ]
      },
      {
        "id": 14,
        "name": "CEDAE MARICÁ",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 3731-2961"
          }
        ]
      },
      {
        "id": 15,
        "name": "Cemitério",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2634-1810"
          }
        ]
      },
      {
        "id": 16,
        "name": "Central de Agendamento de consultas Médicas(Secretaria da saúde)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 32637-3617"
          }
        ]
      },
      {
        "id": 17,
        "name": "Correio Central",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 3003-0100"
          }
        ]
      },
      {
        "id": 18,
        "name": "Correio de Maricá",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2637-2379"
          }
        ]
      },
      {
        "id": 19,
        "name": "Crianças Desaparecidas",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2286-8337"
          }
        ]
      },
      {
        "id": 20,
        "name": "Defesa Civil",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "199"
          }
        ]
      },
      {
        "id": 21,
        "name": "Delegacia 82ª de Policia Civil",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 3731-9965"
          }
        ]
      },
      {
        "id": 22,
        "name": "Delegacia de Mulher (Niterói)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2717-0558"
          }
        ]
      },
      {
        "name": "Delegacias Especializadas de Atendimento à Mulher",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "180"
          }
        ]
      },
      {
        "id": 24,
        "name": "DETRAN São José do Embassaí",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "0800-0204042"
          }
        ]
      },
      {
        "id": 25,
        "name": "DETRAN S.José - Agendamento",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 3460-4040"
          }
        ]
      },
      {
        "id": 26,
        "name": "Disque Denúncia",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2253-1177"
          }
        ]
      },
      {
        "id": 27,
        "name": "Disque (Pessoas Desaparecidas)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "100"
          }
        ]
      },
      {
        "id": 28,
        "name": "Disque Saúde",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "136"
          }
        ]
      },
      {
        "id": 29,
        "name": "DPO (Barra de Maricá)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2648-9001"
          }
        ]
      },
      {
        "id": 30,
        "name": "DPO (Barroco/J.Atlântico)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2638-9023"
          }
        ]
      },
      {
        "id": 31,
        "name": "DPO (Centro de Maricá)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2637-1285"
          }
        ]
      },
      {
        "id": 32,
        "name": "DPO (Inoã)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2716-0665"
          }
        ]
      },
      {
        "id": 33,
        "name": "DPO (Ponta Negra)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2648-1650"
          }
        ]
      },
      {
        "id": 34,
        "name": "DPO (São José do Imbassaí)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2637-8260"
          }
        ]
      },
      {
        "id": 35,
        "name": "FEEMA",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2334-8394"
          }
        ]
      },
      {
        "id": 36,
        "name": "Forum",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 3508-8000"
          }
        ]
      },
      {
        "id": 37,
        "name": "Hospital Conde Modesto Leal",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2637-1713"
          }
        ]
      },
      {
        "id": 38,
        "name": "INSS",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "135"
          }
        ]
      },
      {
        "id": 39,
        "name": "Narcóticos Anônimos",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2516-0057"
          }
        ]
      },
      {
        "id": 40,
        "name": "Polícia",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "190"
          }
        ]
      },
      {
        "id": 41,
        "name": "Ponte S.A. (Tráfego)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2620-9333"
          }
        ]
      },
      {
        "id": 42,
        "name": "Posto de Saúde Inoã",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2629-6434"
          }
        ]
      },
      {
        "id": 43,
        "name": "Posto de Saúde São José",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2634-1592"
          }
        ]
      },
      {
        "id": 44,
        "name": "Posto de Saúde Barra de Maricá",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2648-9116"
          }
        ]
      },
      {
        "id": 45,
        "name": "Posto de Saúde Central",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2634-1590"
          }
        ]
      },
      {
        "id": 46,
        "name": "Posto de Saúde Ponta Negra",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2648-6337"
          }
        ]
      },
      {
        "id": 47,
        "name": "Posto de Saúde Ponta Grossa",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2634-0333"
          }
        ]
      },
      {
        "id": 48,
        "name": "Posto de Saúde Jardim Atlântico (Rua 53)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 3732.2002"
          }
        ]
      },
      {
        "id": 49,
        "name": "Posto de Saúde Santa Rita (Rua 83)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2638-4156"
          }
        ]
      },
      {
        "id": 50,
        "name": "Posto de Saúde Espraiado",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2648-6589"
          }
        ]
      },
      {
        "id": 51,
        "name": "Posto de Saúde Recanto",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2638-4876"
          }
        ]
      },
      {
        "id": 52,
        "name": "Prefeitura de Maricá",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2637-2052"
          }
        ]
      },
      {
        "id": 53,
        "name": "Procon",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2634-1342"
          }
        ]
      },
      {
        "id": 54,
        "name": "Rodoviária Novo Rio",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 3213-1800"
          }
        ]
      },
      {
        "id": 55,
        "name": "Secretaria de Conservação Urbana",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 3732-0023"
          }
        ]
      },
      {
        "id": 56,
        "name": "Secretaria de Ambiente e Urbanismo",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2637-8085"
          }
        ]
      },
      {
        "id": 57,
        "name": "Sebrae Maricá",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 3731-2067"
          }
        ]
      },
      {
        "id": 58,
        "name": "Secretaria de Educação",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2637-8817"
          }
        ]
      },
      {
        "id": 59,
        "name": "Tribunal Regional Eleitoral",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2637-3511"
          }
        ]
      },
      {
        "id": 60,
        "name": "UPA 24h. Inoã",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2636-7228"
          }
        ]
      },
      {
        "id": 61,
        "name": "Viação Costa Leste",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2637-2179"
          }
        ]
      },
      {
        "id": 62,
        "name": "Viação N. S. do Amparo",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "0800-886-1000"
          }
        ]
      },
      {
        "id": 63,
        "name": "Vigilância Sanitária",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2503-2282"
          }
        ]
      },
      {
        "id": 64,
        "name": "Zona Eleitoral (55ª)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "21 2367-1955"
          }
        ]
      }
    ];

    $scope.toggleGroup = function (group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
      // $ionicScrollDelegate.resize();
    };

      $scope.toggleSubGroup = function (item) {
        if ($scope.isSubGroupShown(item)) {
          $scope.shownChild = null;
        } else {
          $scope.shownChild = item;
        }
        // $ionicScrollDelegate.resize();
      };

      $scope.isGroupShown = function (group) {
        return $scope.shownGroup === group;
      };

      $scope.isSubGroupShown = function (item) {
        return $scope.shownChild === item;
      };
  }

})();
