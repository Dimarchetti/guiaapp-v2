(function() {
  'use strict';

  angular
    .module('bizdir.horariosonibus')
    .controller('HorariosonibusController', HorariosonibusController);

  HorariosonibusController.$inject = ['$scope'];

  /* @ngInject */
  function HorariosonibusController($scope) {
    $scope.groups = [
      {
        "id": 1,
        "name": "R.128 - Via Estr. de Itaipuaçu x Recanto (Saída Itaipuaçu - Recanto)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "6:30(MC) | 7:30(MC) | 8:30(MC) | 9:30(MC) | 10:30(MC) | 11:30(MC) | 12:30(MC) | 13:30(MC) | 14:30(MC) | 15:30(MC) | 16:30(MC) | 17:30(MC) | 18:30(MC) | 19:30(MC) | 20:30(MC) | 21:30(MC)",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "7:00(MC) | 8:00(MC) | 9:00(MC) | 10:00(MC) | 11:00(MC) | 12:00(MC) | 13:00(MC) | 14:00(MC) | 15:00(MC) | 16:00(MC) | 17:00(MC) | 18:00(MC) | 19:00(MC) | 20:00(MC) | 21:00(MC) | 22:00(MC) | 23:00(MC)",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "7:00(MC) | 8:00(MC) | 9:00(MC) | 10:00(MC) | 11:00(MC) | 12:00(MC) | 13:00(MC) | 14:00(MC) | 15:00(MC) | 16:00(MC) | 17:00(MC) | 18:00(MC) | 19:00(MC) | 20:00(MC) | 21:00(MC) | 22:00(MC) | 23:00(MC)",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "R.128 - Via Estr. de Itaipuaçu x Recanto (Saída R.126 via Estr. de Itaipuaçu)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "6:30(MC) | 7:30(MC) | 8:30(MC) | 9:30(MC) | 10:30(MC) | 11:30(MC) | 12:30(MC) | 13:30(MC) | 14:30(MC) | 15:30(MC) | 16:30(MC) | 17:30(MC) | 18:30(MC) | 19:30(MC) | 20:30(MC) | 21:30(MC)",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "0:00(MC) | 6:35(MC) | 8:05(MC) | 9:00(MC) | 10:05(MC) | 11:00(MC) | 12:00(MC) | 13:00(MC) | 14:00(MC) | 15:05(MC) | 16:00(MC) | 17:00(MC) | 18:00(MC) | 19:00(MC) | 20:00(MC) | 21:00(MC) | 22:00(MC)",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "0:00(MC) | 6:40(MC) | 8:00(MC) | 9:00(MC) | 9:55(MC) | 11:00(MC) | 12:05(MC) | 13:00(MC) | 14:05(MC) | 15:00(MC) | 16:00(MC) | 17:00(MC) | 18:04(MC) | 19:00(MC) | 20:05(MC) | 21:55(MC)",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 3,
        "name": "Anaia x Candelária (Saída Anaia)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:00(MC) | 6:00(MC) | 7:30(MC) | 18:25(MC)",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 4,
        "name": "Anaia x Candelária (Saída Rio de Janeiro)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "6:40(MC) | 16:40(MC) | 18:10(MC) | 19:40(MC)",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 5,
        "name": "Anaia x Niterói - Via Tribobó (Saída Anaia)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "4:30(MC) | 4:50(MC) | 5:09(MC) | 5:28(MC) | 5:48(MC) | 6:08(MC) | 6:28(MC) | 6:48(MC) | 7:08(MC) | 7:28(MC) | 7:50(MC) | 8:12(MC) | 8:35(MC) | 8:58(MC) | 9:28(MC) | 9:59(MC) | 10:27(MC) | 11:00(MC) | 11:30(MC) | 12:01(MC) | 12:30(MC) | 13:00(MC) | 13:33(MC) | 14:01(MC) | 14:34(MC) | 15:06(MC) | 15:38(MC) | 16:10(MC) | 16:40(MC) | 17:10(MC) | 17:40(MC) | 18:05(MC) | 18:30(MC) | 18:55(MC) | 19:19(MC) | 19:44(MC) | 20:09(MC) | 20:34(MC) | 20:59(MC) | 21:24(MC) | 21:50(MC) | 22:13(MC)",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "4:30(MC) | 4:50(MC) | 5:09(MC) | 5:28(MC) | 5:48(MC) | 6:08(MC) | 6:28(MC) | 6:48(MC) | 7:08(MC) | 7:28(MC) | 7:50(MC) | 8:12(MC) | 8:35(MC) | 8:58(MC) | 9:28(MC) | 9:59(MC) | 10:27(MC) | 11:00(MC) | 11:30(MC) | 12:01(MC) | 12:30(MC) | 13:00(MC) | 13:33(MC) | 14:01(MC) | 14:34(MC) | 15:06(MC) | 15:38(MC) | 16:10(MC) | 16:40(MC) | 17:10(MC) | 17:40(MC) | 18:05(MC) | 18:30(MC) | 18:55(MC) | 19:19(MC) | 19:44(MC) | 20:09(MC) | 20:34(MC) | 20:59(MC) | 21:24(MC) | 21:50(MC) | 22:13(MC)",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "5:35(MC) | 6:15(MC) | 6:55(MC) | 7:35(MC) | 8:05(MC) | 8:35(MC) | 9:05(MC) | 9:35(MC) | 10:05(MC) | 10:35(MC) | 11:05(MC) | 11:35(MC) | 12:06(MC) | 12:35(MC) | 13:05(MC) | 13:35(MC) | 14:05(MC) | 14:33(MC) | 15:02(MC) | 15:32(MC) | 16:02(MC) | 16:31(MC) | 17:01(MC) | 17:30(MC) | 18:00(MC) | 18:34(MC) | 19:05(MC) | 19:36(MC) | 20:08(MC) | 20:35(MC) | 21:05(MC) | 21:35(MC)",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 6,
        "name": "Anaia x Niterói - Via Tribobó (Saída Niterói)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:09(MC) | 5:49(MC) | 6:19(MC) | 6:49(MC) | 7:19(MC) | 7:49(MC) | 8:19(MC) | 8:49(MC) | 9:19(MC) | 9:47(MC) | 10:19(MC) | 10:49(MC) | 11:19(MC) | 11:47(MC) | 12:17(MC) | 12:50(MC) | 13:19(MC) | 13:49(MC) | 14:19(MC) | 14:48(MC) | 15:16(MC) | 15:38(MC) | 16:00(MC) | 16:22(MC) | 16:44(MC) | 17:05(MC) | 17:29(MC) | 17:50(MC) | 18:12(MC) | 18:34(MC) | 18:56(MC) | 19:18(MC) | 19:40(MC) | 20:01(MC) | 20:22(MC) | 20:44(MC) | 21:07(MC) | 21:30(MC) | 21:54(MC) | 22:19(MC) | 22:49(MC)",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "1:00(MC) | 5:37(MC) | 5:59(MC) | 6:21(MC) | 6:43(MC) | 7:03(MC) | 7:23(MC) | 7:43(MC) | 8:03(MC) | 8:23(MC) | 8:43(MC) | 9:03(MC) | 9:23(MC) | 9:43(MC) | 10:03(MC) | 10:23(MC) | 10:43(MC) | 11:03(MC) | 11:23(MC) | 11:43(MC) | 12:03(MC) | 12:23(MC) | 12:43(MC) | 13:03(MC) | 13:24(MC) | 13:44(MC) | 14:04(MC) | 14:24(MC) | 14:45(MC) | 15:05(MC) | 15:26(MC) | 15:47(MC) | 16:07(MC) | 16:27(MC) | 16:47(MC) | 17:07(MC) | 17:27(MC) | 17:47(MC) | 18:07(MC) | 18:27(MC) | 18:47(MC) | 19:07(MC) | 19:27(MC) | 19:47(MC) | 20:07(MC) | 20:27(MC) | 20:47(MC) | 21:07(MC) | 21:27(MC) | 22:00(MC)",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "6:18(MC) | 7:02(MC) | 7:32(MC) | 7:57(MC) | 8:22(MC) | 8:52(MC) | 9:22(MC) | 9:52(MC) | 10:22(MC) | 10:52(MC) | 11:22(MC) | 11:52(MC) | 12:22(MC) | 12:52(MC) | 13:22(MC) | 13:52(MC) | 14:22(MC) | 14:52(MC) | 15:22(MC) | 15:52(MC) | 16:22(MC) | 16:52(MC) | 17:22(MC) | 17:52(MC) | 18:22(MC) | 18:53(MC) | 19:26(MC) | 19:56(MC) | 20:26(MC) | 20:56(MC) | 21:22(MC) | 21:47(MC) | 22:12(MC)",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 7,
        "name": "Avenida 2 - Rua 034 - Circular (Saída Avenida 2)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:30(MC) | 6:00(MC) | 6:30(MC) | 7:00(MC) | 7:30(MC) | 8:10(MC)|  8:50(MC) | 9:35(MC) | 10:20(MC) | 11:10(MC) | 12:00(MC) | 13:00(MC) | 14:00(MC) | 14:50(MC)|  15:35(MC) | 16:20(MC) | 17:05(MC) | 17:50(MC) | 18:30(MC) | 19:00(MC) | 19:30(MC) | 20:00(MC)|  20:30(MC) | 21:00(MC) | 21:35(MC) | 22:05(MC)",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "5:30(MC) | 6:30(MC) | 7:30(MC) | 8:30(MC) | 9:30(MC) | 10:30(MC)|  11:30(MC) | 12:30(MC) | 13:30(MC) | 14:30(MC) | 15:30(MC) | 16:30(MC) | 17:30(MC) | 18:30(MC)|  19:30(MC) | 20:30(MC) | 21:30(MC) | 22:30(MC)",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "5:30(MC) | 6:30(MC) | 7:30(MC) | 8:30(MC) | 9:30(MC) | 10:30(MC)|  11:30(MC) | 12:30(MC) | 13:30(MC) | 14:30(MC) | 15:30(MC) | 16:30(MC) | 17:30(MC) | 18:30(MC)|  19:30(MC) | 20:30(MC) | 21:30(MC) | 22:30(MC)",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 8,
        "name": "Cassorotiba x Inoã (Saída Cassorotiba)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "8:20(MC) | 12:15(MC) | 18:55(MC)",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "8:05(MC) | 12:30(MC) | 17:30(MC)",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "8:05(MC) | 12:30(MC) | 17:30(MC)",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 9,
        "name": "Cassorotiba x Inoã (Saída Inoã)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "7:40(MC) | 11:40(MC) | 18:20(MC)",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "7:40(MC) | 12:00(MC) | 17:00(MC)",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "7:40(MC) | 12:00(MC) | 17:00(MC)",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 10,
        "name": "Engenho do Roçado x Niterói (Saída Eng. do Roçado)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:00(MC) | 5:25(MC) | 5:50(MC) | 6:18(MC) | 7:00(MC) | 7:29(MC) | 7:58(MC) | 8:37(MC) | 9:23(MC) | 10:40(MC) | 11:33(MC) | 12:40(MC) | 13:23(MC) | 14:06(MC) | 14:50(MC) | 15:24(MC) | 15:58(MC) | 16:32(MC) | 17:07(MC) | 17:47(MC) | 18:45(MC) | 19:29(MC) | 20:14(MC) | 21:29(MC)",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "5:59(MC) | 7:44(MC) | 9:39(MC) | 16:00(MC) | 18:00(MC)",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "6:00(MC) | 7:30(MC) | 9:20(MC) | 16:00(MC) | 18:00(MC)",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 11,
        "name": "Engenho do Roçado x Niterói (Saída Eng. do Roçado)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "6:15(MC) | 6:44(MC) | 7:14(MC) | 8:01(MC) | 8:47(MC) | 9:52(MC) | 10:54(MC) | 11:50(MC) | 12:38(MC) | 13:20(MC) | 14:05(MC) | 14:39(MC) | 15:10(MC) | 15:39(MC) | 16:10(MC) | 16:40(MC) | 17:10(MC) | 17:43(MC) | 18:28(MC) | 19:09(MC) | 19:45(MC) | 20:30(MC) | 21:15(MC) | 22:41(MC)",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "7:00(MC) | 8:44(MC) | 15:02(MC) | 17:00(MC) | 19:01(MC)",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "6:50(MC) | 8:20(MC) | 15:01(MC) | 17:00(MC) | 19:00(MC)",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 12,
        "name": "EXPRESSO - Maricá x Castelo (Saída Maricá)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "05:00(TA) | 06:00(TA) | 07:00(TA) | 08:00(TA) | 09:00(TA) | 11:00(TA) | 13:00(TA) | 15:00(TA) | 16:00(TA) | 17:00(TA) | 18:30(TA) | 19:30(TA) | ",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 13,
        "name": "EXPRESSO - Maricá x Castelo (Saída Castelo)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "07:00(TA) | 08:30(TA) | 09:30(TA) | 11:00(TA) | 13:00(TA) | 15:00(TA) | 16:00(TA) | 17:00(TA) | 18:00(TA) | 19:00(TA) | 20:10(TA) | 21:10(TA) | ",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 14,
        "name": "Inoã x Itaipuaçu - Cajueiro R.128 (Saída Inoã)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "0:00(MC) | 4:30(MC) | 5:00(MC) | 5:30(MC) | 6:00(MC) | 6:40(MC) | 7:04(MC) | 7:40(MC) | 8:05(MC) | 8:40(MC) | 9:05(MC) | 9:30(MC) | 10:04(MC) | 10:30(MC) | 10:57(MC) | 11:23(MC) | 11:48(MC) | 12:13(MC) | 12:38(MC) | 13:03(MC) | 13:28(MC) | 13:54(MC) | 14:20(MC) | 14:45(MC) | 15:10(MC) | 15:33(MC) | 15:53(MC) | 16:13(MC) | 16:31(MC) | 16:49(MC) | 17:07(MC) | 17:26(MC) | 17:47(MC) | 18:08(MC) | 18:29(MC) | 18:51(MC) | 19:00 (MC)R.O19:13(MC) | 19:36(MC) | 20:02(MC) | 20:34(MC) | 21:00(MC) | 21:29(MC) | 22:00(MC) | 22:46(MC) | 23:20(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "0:00(MC) | 4:30(MC) | 5:00(MC) | 5:30(MC) | 6:00(MC) | 6:30(MC) | 7:00(MC) | 7:29(MC) | 7:56(MC) | 8:25(MC) | 8:50(MC) | 9:17(MC) | 9:44(MC) | 10:11(MC) | 10:38(MC) | 11:05(MC) | 11:32(MC) | 11:59(MC) | 12:26(MC) | 12:53(MC) | 13:20(MC) | 13:47(MC) | 14:14(MC) | 14:41(MC) | 15:08(MC) | 15:35(MC) | 16:02(MC) | 16:29(MC) | 16:56(MC) | 17:23(MC) | 17:50(MC) | 18:17(MC) | 18:44(MC) | 19:11(MC) | 19:38(MC) | 20:05(MC) | 20:33(MC) | 21:03(MC) | 21:33(MC) | 22:03(MC) | 22:35(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "0:00(MC) | 4:30(MC) | 5:00(MC) | 5:30(MC) | 6:00(MC) | 6:30(MC) | 7:15(MC) | 7:55(MC) | 8:35(MC) | 9:20(MC) | 10:00(MC) | 10:45(MC) | 11:25(MC) | 12:10(MC) | 12:50(MC) | 13:35(MC) | 14:15(MC) | 15:00(MC) | 15:45(MC) | 16:30(MC) | 17:15(MC) | 17:55(MC) | 18:40(MC) | 19:20(MC) | 20:05(MC) | 20:45(MC) | 21:25(MC) | 22:10(MC) | 22:50(MC) | 23:30(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 15,
        "name": "Inoã x Itaipuaçu - Cajueiro R.128 (Saída Inoã)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "0:10(MC) | 0:45(MC) | 5:00(MC) | 5:30(MC) | 6:00(MC) | 6:40(MC) | 7:15(MC) | 7:45(MC) | 8:15(MC) | 8:45(MC) | 9:20(MC) | 9:45(MC) | 10:13(MC) | 10:47(MC) | 11:14(MC) | 11:42(MC) | 12:12(MC) | 12:37(MC) | 13:01(MC) | 13:23(MC) | 13:50(MC) | 14:15(MC) | 14:40(MC) | 15:06(MC) | 15:33(MC) | 15:55(MC) | 16:19(MC) | 16:42(MC) | 17:05(MC) | 17:21(MC) | 17:44(MC) | 18:05(MC) | 18:25(MC) | 18:45(MC) | 19:10(MC) | 19:32(MC) | 19:54(MC) | 20:15 (MC)R.O20:20(MC) | 20:46(MC) | 21:12(MC) | 21:38(MC) | 22:04(MC) | 22:25(MC) | 22:56(MC) | 23:25(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "0:35(MC) | 5:10(MC) | 5:40(MC) | 6:10(MC) | 6:40(MC) | 7:11(MC) | 7:40(MC) | 8:12(MC) | 8:41(MC) | 9:08(MC) | 9:35(MC) | 10:02(MC) | 10:29(MC) | 10:56(MC) | 11:23(MC) | 11:50(MC) | 12:17(MC) | 12:44(MC) | 13:11(MC) | 13:38(MC) | 14:05(MC) | 14:32(MC) | 14:59(MC) | 15:26(MC) | 15:53(MC) | 16:20(MC) | 16:47(MC) | 17:14(MC) | 17:41(MC) | 18:08(MC) | 18:35(MC) | 19:02(MC) | 19:29(MC) | 19:56(MC) | 20:23(MC) | 20:50(MC) | 21:17(MC) | 21:44(MC) | 22:11(MC) | 22:38(MC) | 23:15(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "0:05(MC) | 0:35(MC) | 5:00(MC) | 5:30(MC) | 6:05(MC) | 6:35(MC) | 7:10(MC) | 7:50(MC) | 8:35(MC) | 9:15(MC) | 10:00(MC) | 10:40(MC) | 11:25(MC) | 12:05(MC) | 12:50(MC) | 13:30(MC) | 14:15(MC) | 15:00(MC) | 15:45(MC) | 16:30(MC) | 17:10(MC) | 17:55(MC) | 18:35(MC) | 19:20(MC) | 20:00(MC) | 20:45(MC) | 21:25(MC) | 22:05(MC) | 22:45(MC) | 23:25(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 16,
        "name": "Inoã x Itaipuaçu - Recanto (Saída Inoã)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:25(MC) | 6:00(MC) | 6:32(MC) | 7:57(MC) | 11:11(MC) | 12:05(MC) | 13:02(MC) | 15:24(MC) | 16:00(MC) | 17:01(MC) | 18:57(MC) | 21:01(MC) | s",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "5:00(MC) | 5:54(MC) | 6:41(MC) | 7:31(MC) | 8:20(MC) | 9:10(MC) | 9:54(MC) | 10:46(MC) | 11:30(MC) | 12:27(MC) | 13:07(MC) | 13:56(MC) | 14:59(MC) | 15:41(MC) | 16:39(MC) | 17:25(MC) | 18:21(MC) | 19:21(MC) | 20:10(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "5:39(MC) | 6:23(MC) | 7:00(MC) | 7:28(MC) | 8:07(MC) | 8:44(MC) | 9:08(MC) | 9:55(MC) | 10:22(MC) | 10:50(MC) | 11:27(MC) | 12:02(MC) | 12:30(MC) | 13:10(MC) | 14:08(MC) | 15:00(MC) | 15:53(MC) | 17:08(MC) | 18:35(MC) | 19:00(MC) | 20:16(MC) | 21:49(MC) | 22:40(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 17,
        "name": "Inoã x Itaipuaçu - Recanto (Saída Itaipuaçu - Recanto)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "0:05(MC) | 6:36(MC) | 7:32(MC) | 12:16(MC) | 14:59(MC) | 15:23(MC) | 16:00(MC) | 16:11(MC) | 17:19(MC) | 18:25(MC) | 18:45(MC) | 18:59(MC) | 19:29(MC) | 19:42(MC) | 19:52(MC) | 20:03(MC) | 20:13(MC) | 20:34(MC) | 21:20(MC) | 21:58(MC) | 22:04(MC) | 22:17(MC) | 23:00(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "5:36(MC) | 6:55(MC) | 7:29(MC) | 8:32(MC) | 8:59(MC) | 10:04(MC) | 10:38(MC) | 11:49(MC) | 12:17(MC) | 13:31(MC) | 15:11(MC) | 15:50(MC) | 16:50(MC) | 17:27(MC) | 18:32(MC) | 19:11(MC) | 20:10(MC) | 20:50(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "6:45(MC) | 7:15(MC) | 7:57(MC) | 8:15(MC) | 8:27(MC) | 9:33(MC) | 10:03(MC) | 10:40(MC) | 11:13(MC) | 11:46(MC) | 12:16(MC) | 12:55(MC) | 13:32(MC) | 15:00(MC) | 15:56(MC) | 16:40(MC) | 18:29(MC) | 19:26(MC) | 20:09(MC) | 21:02(MC) | 23:30(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 18,
        "name": "Inoã x Itaipuaçu - Recanto Via Itaocaia (Saída Inoã)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "4:45(MC) | 5:50(MC) | 6:50(MC) | 7:30(MC) | 8:25(MC) | 9:12(MC) | 10:01(MC) | 10:55(MC) | 11:37(MC) | 12:27(MC) | 13:22(MC) | 14:09(MC) | 15:04(MC) | 15:51(MC) | 16:41(MC) | 17:29(MC) | 18:21(MC) | 19:29(MC) | 20:30(MC) | 21:16(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "6:00(MC) | 7:40(MC) | 9:10(MC) | 10:58(MC) | 12:41(MC) | 14:15(MC) | 16:00(MC) | 17:38(MC) | 19:08(MC) | 21:00(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "6:00(MC) | 7:40(MC) | 9:20(MC) | 11:00(MC) | 12:40(MC) | 14:20(MC) | 16:00(MC) | 17:40(MC) | 19:20(MC) | 21:00(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 19,
        "name": "Inoã x Itaipuaçu - Recanto Via Itaocaia (Saída Inoã)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:28(MC) | 6:16(MC) | 7:20(MC) | 7:55(MC) | 8:50(MC) | 9:38(MC) | 10:28(MC) | 11:21(MC) | 12:05(MC) | 12:54(MC) | 13:49(MC) | 14:36(MC) | 15:26(MC) | 16:18(MC) | 17:10(MC) | 17:54(MC) | 18:50(MC) | 19:50(MC) | 20:25(MC) | 21:40(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "6:42(MC) | 8:10(MC) | 9:57(MC) | 11:28(MC) | 13:12(MC) | 13:54(MC) | 14:42(MC) | 16:26(MC) | 18:09(MC) | 19:55(MC) | 21:50(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "6:30(MC) | 9:08(MC) | 10:00(MC) | 11:37(MC) | 13:19(MC) | 14:00(MC) | 15:05(MC) | 16:40(MC) | 18:05(MC) | 19:45(MC) | 21:49(MC) | 22:35(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 20,
        "name": "Inoã x Santa Paula (Saída Inoã)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:40(MC) | 6:20(MC) | 7:00(MC) | 8:30(MC) | 9:45(MC) | 11:00(MC) | 12:38(MC) | 13:55(MC) | 15:20(MC) | 16:35(MC) | 17:50(MC) | 19:00(MC) | 20:00(MC) | 21:00(MC) | 22:00(MC) | 22:40(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "5:40(MC) | 6:20(MC) | 7:00(MC) | 9:00(MC) | 11:00(MC) | 13:30(MC) | 15:00(MC) | 19:00(MC) | 21:00(MC) | 22:00(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "5:40(MC) | 6:20(MC) | 7:00(MC) | 9:00(MC) | 11:00(MC) | 13:30(MC) | 15:00(MC) | 18:00(MC) | 19:00(MC) | 21:00(MC) | 22:00(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 21,
        "name": "Inoã x Santa Paula (Saída Santa Paula)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:20(MC) | 6:00(MC) | 6:40(MC) | 7:20(MC) | 8:50(MC) | 10:10(MC) | 11:35(MC) | 13:10(MC) | 14:30(MC) | 15:50(MC) | 17:15(MC) | 18:20(MC) | 19:25(MC) | 20:30(MC) | 21:30(MC) | 22:20(MC) | 23:00(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "5:20(MC) | 6:00(MC) | 6:40(MC) | 7:20(MC) | 8:05(MC) | 9:30(MC) | 11:20(MC) | 14:00(MC) | 15:30(MC) | 19:30(MC) | 21:30(MC) | 22:30(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "5:20(MC) | 6:00(MC) | 6:40(MC) | 7:20(MC) | 8:05(MC) | 9:30(MC) | 11:20(MC) | 14:00(MC) | 15:30(MC) | 18:20(MC) | 19:30(MC) | 21:30(MC) | 22:30(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 22,
        "name": "Itaipú x Niterói - Via Tribobó (Saída Itaipú)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:22(MC) | 5:30(MC) | 5:38(MC) | 5:46(MC) | 5:55(MC) | 6:02(MC) | 6:09(MC) | 6:18(MC) | 6:26(MC) | 6:34(MC) | 6:42(MC) | 6:50(MC) | 7:00(MC) | 7:12(MC) | 7:24(MC) | 7:35(MC) | 7:47(MC) | 7:59(MC) | 8:12(MC) | 8:25(MC) | 8:39(MC) | 8:53(MC) | 9:06(MC) | 9:20(MC) | 9:34(MC) | 9:48(MC) | 10:03(MC) | 10:18(MC) | 10:33(MC) | 10:48(MC) | 11:03(MC) | 11:18(MC) | 11:33(MC) | 11:48(MC) | 12:03(MC) | 12:18(MC) | 12:33(MC) | 12:48(MC) | 13:03(MC) | 13:18(MC) | 13:33(MC) | 13:48(MC) | 14:03(MC) | 14:18(MC) | 14:33(MC) | 14:48(MC) | 15:04(MC) | 15:20(MC) | 15:35(MC) | 15:50(MC) | 16:05(MC) |  16:17(MC) |  16:27(MC) |  16:39(MC) |  16:51(MC) |  16:55(MC) |  17:03(MC) |  17:11(MC) |  17:28(MC) |  17:36(MC) |  17:52(MC) |  17:59(MC) |  18:08(MC) |  18:30(MC) |  18:36(MC) |  18:58(MC) |  19:20(MC) |  19:42(MC) |  20:03(MC) |  20:25(MC) |  20:47(MC) |  21:08(MC) |  21:30(MC) |  21:51(MC) |  22:13(MC) |  22:33(MC) |  23:00(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "5:35(MC) | 5:50(MC) | 6:05(MC) | 6:17(MC) | 6:29(MC) | 6:40(MC) | 6:51(MC) | 7:02(MC) | 7:13(MC) | 7:24(MC) | 7:35(MC) | 7:46(MC) | 7:58(MC) | 8:11(MC) | 8:23(MC) | 8:35(MC) | 8:47(MC) | 8:59(MC) | 9:11(MC) | 9:23(MC) | 9:35(MC) | 9:47(MC) | 9:59(MC) | 10:11(MC) | 10:24(MC) | 10:36(MC) | 10:48(MC) | 11:00(MC) | 11:12(MC) | 11:24(MC) | 11:37(MC) | 11:49(MC) | 12:02(MC) | 12:14(MC) | 12:26(MC) | 12:39(MC) | 12:51(MC) | 13:03(MC) | 13:15(MC) | 13:27(MC) | 13:39(MC) | 13:50(MC) | 14:02(MC) | 14:13(MC) | 14:25(MC) | 14:37(MC) | 14:49(MC) | 15:01(MC) | 15:13(MC) | 15:26(MC) | 15:39(MC) |  15:53(MC) |  16:06(MC) |  16:20(MC) |  16:33(MC) |  16:47(MC) |  17:00(MC) |  17:13(MC) |  17:25(MC) |  17:38(MC) |  17:50(MC) |  18:03(MC) |  18:15(MC) |  18:28(MC) |  18:41(MC) |  18:57(MC) |  19:12(MC) |  19:28(MC) |  19:43(MC) |  19:59(MC) |  20:14(MC) |  20:22(MC) |  20:45(MC) |  21:10(MC) |  21:40(MC) |  22:10(MC) |  22:42(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "5:15(MC) | 5:40(MC) | 6:00(MC) | 6:15(MC) | 6:30(MC) | 6:45(MC) | 7:00(MC) | 7:14(MC) | 7:27(MC) | 7:40(MC) | 7:54(MC) | 8:07(MC) | 8:20(MC) | 8:33(MC) | 8:46(MC) | 9:00(MC) | 9:12(MC) | 9:24(MC) | 9:36(MC) | 9:48(MC) | 10:00(MC) | 10:12(MC) | 10:24(MC) | 10:36(MC) | 10:48(MC) | 11:00(MC) | 11:12(MC) | 11:24(MC) | 11:36(MC) | 11:48(MC) | 12:00(MC) | 12:12(MC) | 12:24(MC) | 12:36(MC) | 12:48(MC) | 13:00(MC) | 13:11(MC) | 13:24(MC) | 13:36(MC) | 13:48(MC) | 14:00(MC) | 14:12(MC) | 14:24(MC) | 14:36(MC) | 14:48(MC) | 15:00(MC) | 15:12(MC) | 15:24(MC) | 15:36(MC) | 15:48(MC) | 16:00(MC) |  16:15(MC) |  16:30(MC) |  16:45(MC) |  17:00(MC) |  17:15(MC) |  17:30(MC) |  17:45(MC) |  18:00(MC) |  18:15(MC) |  18:30(MC) |  18:45(MC) |  19:00(MC) |  19:15(MC) |  19:30(MC) |  19:45(MC) |  20:00(MC) |  20:12(MC) |  20:37(MC) |  21:07(MC) |  21:35(MC) |  22:05(MC) |  22:45(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 23,
        "name": "Itaipú x Niterói - Via Tribobó (Saída Niterói)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:25(MC) | 5:38(MC) | 5:51(MC) | 5:57(MC) | 6:03(MC) | 6:12(MC) | 6:16(MC) | 6:21(MC) | 6:30(MC) | 6:35(MC) | 6:39(MC) | 6:48(MC) | 6:57(MC) | 7:02(MC) | 7:07(MC) | 7:13(MC) | 7:18(MC) | 7:30(MC) | 7:43(MC) | 7:50(MC) | 8:00(MC) | 8:06(MC) | 8:14(MC) | 8:28(MC) | 8:42(MC) | 8:56(MC) | 9:11(MC) | 9:25(MC) | 9:39(MC) | 9:53(MC) | 10:07(MC) | 10:20(MC) | 10:34(MC) | 10:49(MC) | 11:04(MC) | 11:19(MC) | 11:34(MC) | 11:49(MC) | 12:04(MC) | 12:19(MC) | 12:34(MC) | 12:49(MC) | 13:03(MC) | 13:17(MC) | 13:31(MC) | 13:45(MC) | 14:00(MC) | 14:15(MC) | 14:30(MC) | 14:45(MC) | 15:00(MC) |  15:15(MC) |  15:29(MC) |  15:43(MC) |  15:57(MC) |  16:06(MC) |  16:15(MC) |  16:23(MC) |  16:32(MC) |  16:40(MC) |  16:49(MC) |  16:59(MC) |  17:10(MC) |  17:21(MC) |  17:32(MC) |  17:44(MC) |  17:55(MC) |  18:07(MC) |  18:18(MC) |  18:29(MC) |  18:41(MC) |  18:52(MC) |  19:03(MC) |  19:15(MC) |  19:26(MC) |  19:37(MC) |  19:48(MC) |  19:59(MC) |  20:10(MC) |  20:21(MC) |  20:31(MC) |  20:42(MC) |  20:52(MC) |  21:06(MC) |  21:26(MC) |  21:46(MC) |  22:07(MC) |  22:30(MC) |  23:15(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "5:41(MC) | 6:00(MC) | 6:12(MC) | 6:24(MC) | 6:37(MC) | 6:49(MC) | 7:02(MC) | 7:15(MC) | 7:28(MC) | 7:41(MC) | 7:53(MC) | 8:04(MC) | 8:16(MC) | 8:27(MC) | 8:38(MC) | 8:49(MC) | 9:00(MC) | 9:12(MC) | 9:24(MC) | 9:36(MC) | 9:48(MC) | 10:00(MC) | 10:12(MC) | 10:24(MC) | 10:36(MC) | 10:48(MC) | 11:00(MC) | 11:12(MC) | 11:24(MC) | 11:36(MC) | 11:48(MC) | 12:00(MC) | 12:12(MC) | 12:24(MC) | 12:36(MC) | 12:48(MC) | 13:00(MC) | 13:12(MC) | 13:24(MC) | 13:36(MC) | 13:48(MC) | 14:00(MC) | 14:12(MC) | 14:24(MC) | 14:36(MC) | 14:48(MC) | 15:00(MC) | 15:12(MC) | 15:24(MC) | 15:36(MC) | 15:48(MC) |  16:00(MC) |  16:12(MC) |  16:25(MC) |  16:38(MC) |  16:52(MC) |  17:05(MC) |  17:18(MC) |  17:31(MC) |  17:44(MC) |  17:57(MC) |  18:10(MC) |  18:23(MC) |  18:36(MC) |  18:48(MC) |  19:00(MC) |  19:12(MC) |  19:24(MC) |  19:36(MC) |  19:48(MC) |  20:00(MC) |  20:15(MC) |  20:32(MC) |  20:49(MC) |  21:07(MC) |  21:15(MC) |  21:28(MC) |  21:49(MC) |  22:10(MC) |  22:40(MC) |  23:10(MC) |  23:50(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "5:37(MC) | 5:54(MC) | 6:07(MC) | 6:20(MC) | 6:33(MC) | 6:46(MC) | 6:59(MC) | 7:12(MC) | 7:25(MC) | 7:37(MC) | 7:50(MC) | 8:03(MC) | 8:16(MC) | 8:29(MC) | 8:42(MC) | 8:55(MC) | 9:08(MC) | 9:21(MC) | 9:34(MC) | 9:47(MC) | 10:00(MC) | 10:12(MC) | 10:24(MC) | 10:36(MC) | 10:48(MC) | 11:01(MC) | 11:13(MC) | 11:26(MC) | 11:38(MC) | 11:51(MC) | 12:03(MC) | 12:16(MC) | 12:28(MC) | 12:41(MC) | 12:52(MC) | 13:03(MC) | 13:15(MC) | 13:27(MC) | 13:39(MC) | 13:51(MC) | 14:03(MC) | 14:15(MC) | 14:27(MC) | 14:39(MC) | 14:52(MC) | 15:04(MC) | 15:17(MC) | 15:29(MC) | 15:41(MC) | 15:53(MC) | 16:05(MC) |  16:19(MC) |  16:34(MC) |  16:49(MC) |  17:04(MC) |  17:19(MC) |  17:35(MC) |  17:50(MC) |  18:06(MC) |  18:21(MC) |  18:37(MC) |  18:52(MC) |  19:08(MC) |  19:23(MC) |  19:38(MC) |  19:53(MC) |  20:07(MC) |  20:21(MC) |  20:35(MC) |  20:49(MC) |  21:04(MC) |  21:19(MC) |  21:39(MC) |  22:02(MC) |  22:25(MC) |  23:10(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 24,
        "name": "Itaipú x Tribobó (Saída Itaipú)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "6:56(MC) | 16:11(MC) | 16:31(MC) | 16:47(MC) | 17:19(MC) | 17:44(MC) | 18:15(MC) | ",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 25,
        "name": "Itaipú x Tribobó (Saída Tribobó)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "4:40(MC) | 5:07(MC) | 5:27(MC) | 5:38(MC) | 6:03(MC) | 7:37(MC) | 16:58(MC) | 17:16(MC) | 17:34(MC) | 18:11(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "4:40(MC) | 5:05(MC) | 5:50(MC) | ",
                "grandChildCount": 9
              }
            ]
          }
        ]
      },
      {
        "id": 26,
        "name": "Itaipú x Varzéa das Moças (Saída Itaipú)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "23:20(MC)",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 27,
        "name": "Itaipú x Varzéa das Moças (Saída Várzea das Moças)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:10(MC) | 6:08(MC) | ",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 28,
        "name": "Itaipuaçu - R.128 Via Cajueiro x Castelo (Saída Itaipuaçu - R126 Via Cajueiro)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "4:10(TA) | 4:30(TA) | 4:45(TA) | 4:50(TA)B.C | 5:00(TA) | 5:10(TA)BAR | 5:15(TA)CAN | 5:30(TA)CAN | 5:40(TA)B.C | 5:45(TA) | 6:00(TA)CAN | 6:30(TA) | 7:00(TA)CAN | 7:56(TA) | 8:40(TA) | ",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 29,
        "name": "Itaipuaçu - R.128 Via Cajueiro x Castelo (Saída Castelo)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "6:04(TA) | 6:49(TA) | 16:10(TA) | 17:25(TA) | 17:30(TA)BAR | 18:00(TA) | 18:30(TA) | 19:01(TA) | 19:30(TA) | 19:30(TA)CAN | 20:10(TA) | 20:50(TA) | 21:20(TA) | 22:30(TA) | ",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 30,
        "name": "Itaipuaçu - R.128 x Niterói (Saída Rua 126 - Barroco)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "4:30(TA) | 5:00(TA)CAJ | 5:30(TA)CAJ | 5:39(TA) | 5:50(TA)CAJ | 6:09(TA) | 6:40(TA) | 7:15(TA)CAJ | 7:20(MC) | 8:05(TA)CAJ | 18:13(TA) | 18:39(TA) | 19:13(TA) | 19:53(TA) | 20:33(TA) | 21:00(TA) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "5:15(TA) | 5:45(TA) | 6:45(TA) | 7:30(TA) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "5:20(TA) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 31,
        "name": "Itaipuaçu - R.128 x Niterói (Saída Niterói)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "6:10(TA) | 16:15(TA) | 16:40(TA)CAJ | 17:00(TA) | 17:15(TA) | 17:40(TA)CAJ | 18:00(TA) | 18:29(TA) | 18:30(MC)CAJ | 18:55(TA) | 19:31(TA) | 19:40(TA)CAJ | 20:00(TA) | 20:30(TA) | 21:00(TA) | 21:31(TA) | 22:00(TA) | 22:30(TA) | 23:00(TA) | 23:30(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "21:27(TA) | 22:21(TA) | 23:20(TA) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "2:10(TA) | 23:25(TA)",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 32,
        "name": "Itaipuaçu - Recanto x Castelo (Saída Itaipuaçu - Recanto)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "3:28(TA) | 3:44(TA)R.C | 4:00(TA)R.C | 4:07(TA) | 4:14(TA)R.C | 4:21(TA)R.C | 4:28(TA) | 4:35(TA)R.C | 4:42(TA)R.C | 4:49(TA) | 4:56(TA)R.C | 5:03(TA)R.C | 5:10(TA) | 5:17(TA)R.C | 5:24(TA) | 5:31(TA) | 5:38(TA)R.C | 5:45(TA) | 5:52(TA)R.C | 6:00(TA) | 6:00(MC)CAN | 6:08(TA) | 6:16(TA)R.C | 6:24(TA) | 6:32(TA) | 6:40(TA)R.C | 6:48(TA) | 6:58(TA)R.C | 7:10(TA) | 7:22(TA) | 7:34(TA)R.C | 7:46(TA)R.C | 8:00(TA) | 8:32(MC)CAN | 8:40(TA)TRÇ | 9:00(TA)T.C | 9:20(TA)TRÇ | 9:40(TA)T.C | 10:00(TA) | 10:00(TA)TRÇ | 10:23(MC)CAN | 10:40(TA)T.C | 11:00(TA)TRÇ | 11:20(TA)T.C | 11:40(TA)TRÇ | 12:00(TA) | 12:00(TA)TRÇ | 12:40(TA)T.C | 13:06(TA)TRÇ | 13:33(TA)TRÇ | 14:00(TA) | 14:00(TA)TRÇ | 14:30(MC)CAN | 14:40(TA)TRÇ | 15:07(TA)TRÇ | 15:20(TA)TRÇ | 15:33(TA)TRÇ | 16:00(TA) | 16:00(TA)TRÇ | 16:30(TA)TRÇ | 16:45(TA)TRÇ | 17:00(TA)TRÇ | 17:15(TA)TRÇ | 17:30(TA)TRÇ | 17:45(TA) | 18:00(TA)TRÇ | 18:18(TA) | 18:34(MC)CAN | 18:36(TA) | 18:55(TA) | 19:15(TA)R.C | 19:35(TA) | 19:55(TA) | 20:15(TA) | 20:41(TA) | 21:08(TA) | 21:34(TA) | 22:01(TA) | 22:28(TA) | 23:00(TA)",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "4:00(TA) | 4:22(TA) | 4:44(TA) | 5:06(TA) | 5:28(TA) | 5:50(TA) | 6:05(TA) | 6:20(TA) | 6:35(TA) | 6:50(TA) | 7:23(TA) | 7:56(TA) | 8:32(TA)TRÇ | 9:10(TA)TRÇ | 9:50(TA)TRÇ | 10:30(TA)TRÇ | 11:00(TA)TRÇ | 11:30(TA)TRÇ | 12:00(TA)TRÇ | 12:30(TA)TRÇ | 13:00(TA)TRÇ | 13:35(TA)TRÇ | 14:10(TA)TRÇ | 14:45(TA)TRÇ | 15:20(TA)TRÇ | 15:55(TA)TRÇ | 16:25(TA)TRÇ | 16:55(TA)TRÇ | 17:25(TA)TRÇ | 17:55(TA)TRÇ | 18:25(TA)TRÇ | 19:00(TA)TRÇ | 19:35(TA)TRÇ | 20:10(TA)TRÇ | 20:50(TA)",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "5:00(TA) | 5:35(TA) | 6:20(TA)TRÇ | 7:30(TA)TRÇ | 8:38(TA)TRÇ | 9:37(TA)TRÇ | 10:37(TA)TRÇ | 11:37(TA)TRÇ | 12:37(TA)TRÇ | 13:37(TA)TRÇ | 14:22(TA)TRÇ | 15:02(TA)TRÇ | 15:32(TA)TRÇ | 16:02(TA)TRÇ | 16:32(TA)TRÇ | 17:02(TA)TRÇ | 17:32(TA)TRÇ | 18:02(TA)TRÇ | 18:32(TA)TRÇ | 19:03(TA)TRÇ | 19:33(TA)TRÇ | 20:05(TA)TRÇ | 20:40(TA)TRÇ | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 33,
        "name": "Itaipuaçu - Recanto x Castelo (Saída Castelo)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "0:30(TA) | 5:22(TA)R.C | 5:45(TA) | 5:47(TA)R.C | 6:06(TA)R.C | 6:13(TA) | 6:26(TA)R.C | 6:41(TA)TRÇ | 6:45(TA)T.C | 7:05(TA)T.C | 7:08(TA)TRÇ | 7:35(TA)TRÇ | 7:45(TA)T.C | 8:00(TA) | 8:18(TA)TRÇ | 8:29(MC)CAN | 8:35(TA)TRÇ | 8:52(TA)TRÇ | 9:09(TA)TRÇ | 9:26(TA)TRÇ | 9:43(TA)TRÇ | 10:00(TA) | 10:24(TA)TRÇ | 10:48(TA)TRÇ | 11:08(MC)CAN | 11:12(TA)TRÇ | 11:36(TA)TRÇ | 12:00(TA) | 12:20(TA)TRÇ | 12:30(MC)CAN | 12:40(TA)TRÇ | 13:00(TA)TRÇ | 13:20(TA)TRÇ | 13:40(TA)TRÇ | 14:00(TA) | 14:20(TA)TRÇ | 14:40(TA)TRÇ | 15:00(TA)TRÇ | 15:07(TA)R.C | 15:15(TA)TRÇ | 15:30(TA)TRÇ | 15:45(TA)TRÇ | 16:00(TA) | 16:00(TA)R.C | 16:14(MC)CAN | 16:16(TA)R.C | 16:20(TA) | 16:32(TA)R.C | 16:40(TA) | 16:48(TA)R.C | 17:00(TA) | 17:04(TA)R.C | 17:17(TA) | 17:20(TA)R.C | 17:34(TA) | 17:36(TA)R.C | 17:51(TA) | 17:53(TA)R.C | 18:08(TA) | 18:10(TA)R.C | 18:25(TA) | 18:27(TA)R.C | 18:42(TA) | 18:44(TA)R.C | 19:00(TA) | 19:17(TA)R.C | 19:18(TA) | 19:36(TA) | 20:00(TA) | 20:30(TA) | 20:33(MC)CAN | 21:03(TA) | 21:03(TA)R.C | 21:40(TA) | 22:18(TA) | 22:58(TA) | 23:38(TA)V.NIT | 23:56(TA)V.NIT",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "5:40(TA) | 6:08(TA) | 6:37(TA)TRÇ | 7:06(TA)TRÇ | 7:30(TA)TRÇ | 7:50(TA)TRÇ | 8:10(TA)TRÇ | 8:29(TA)TRÇ | 8:49(TA)TRÇ | 9:09(TA)TRÇ | 9:29(TA)TRÇ | 9:56(TA)TRÇ | 10:22(TA)TRÇ | 10:55(TA)TRÇ | 11:30(TA)TRÇ | 12:00(TA)TRÇ | 12:30(TA)TRÇ | 13:00(TA)TRÇ | 13:30(TA)TRÇ | 14:05(TA)TRÇ | 14:40(TA)TRÇ | 15:15(TA)TRÇ | 15:50(TA)TRÇ | 16:25(TA)TRÇ | 17:00(TA)TRÇ | 17:35(TA)TRÇ | 18:10(TA)TRÇ | 18:40(TA)TRÇ | 19:10(TA) | 19:40(TA) | 20:10(TA) | 20:40(TA) | 21:10(TA) | 21:45(TA) | 22:30(TA)",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "6:45(TA)TRÇ | 7:20(TA)TRÇ | 7:55(TA)TRÇ | 9:05(TA)TRÇ | 10:08(TA)TRÇ | 11:08(TA)TRÇ | 12:08(TA)TRÇ | 13:08(TA)TRÇ | 14:06(TA)TRÇ | 15:06(TA)TRÇ | 15:50(TA)TRÇ | 16:30(TA)TRÇ | 17:05(TA)TRÇ | 17:35(TA)TRÇ | 18:10(TA)TRÇ | 18:40(TA)TRÇ | 19:10(TA) | 19:40(TA) | 20:10(TA) | 20:40(TA) | 21:10(TA) | 21:45(TA) | 22:20(TA) | 22:55(TA)",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 34,
        "name": "Itaipuaçu - Recanto x Niterói (Saída Itaipuaçu - Recanto)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "4:09(TA) | 4:30(TA) | 4:50(TA) | 5:10(TA) | 5:10(MC) | 5:18(TA) | 5:28(TA) | 5:38(TA) | 5:48(TA) | 5:58(TA) | 6:08(TA) | 6:22(TA) | 6:38(TA) | 6:53(TA) | 7:09(TA) | 7:24(TA) | 7:40(TA) | 8:10(TA) | 8:32(MC) | 8:50(TA)TRÇ | 9:00(TA) | 9:10(TA)TRÇ | 9:50(TA)TRÇ | 10:10(TA)TRÇ | 10:30(TA)TRÇ | 10:50(TA)TRÇ | 11:00(TA) | 11:10(TA)TRÇ | 11:50(TA)TRÇ | 12:16(TA)TRÇ | 12:50(TA)TRÇ | 13:00(TA) | 13:16(TA)TRÇ | 13:30(MC) | 13:50(TA)TRÇ | 14:10(TA)TRÇ | 14:30(TA)TRÇ | 14:50(TA)TRÇ | 15:00(TA) | 15:10(TA)TRÇ | 15:50(TA)TRÇ | 16:00(TA) | 16:10(TA)TRÇ | 16:29(TA)TRÇ | 16:42(TA)TRÇ | 16:54(TA) | 17:08(TA)TRÇ | 17:22(TA) | 17:37(TA)TRÇ | 17:40(MC) | 17:44(MC) | 17:52(TA) | 18:07(TA) | 18:24(TA) | 18:42(TA) | 19:00(TA) | 19:18(TA) | 19:36(TA) |  19:54(TA) | 20:12(TA) | 20:30(TA) | 20:48(TA) | 21:08(TA) | 21:28(TA) | 21:48(TA) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "4:45(TA) | 5:05(TA) | 5:25(TA) | 6:05(TA) | 6:25(TA) | 7:00(TA) | 7:15(TA) | 7:45(TA) | 8:00(TA) | 8:18(TA)TRÇ | 8:36(TA)TRÇ | 8:53(TA)TRÇ | 9:11(TA)TRÇ | 9:28(TA)TRÇ | 9:46(TA)TRÇ | 10:03(TA)TRÇ | 10:23(TA)TRÇ | 10:45(TA)TRÇ | 11:07(TA)TRÇ | 11:31(TA)TRÇ | 11:55(TA)TRÇ | 12:19(TA)TRÇ | 12:43(TA)TRÇ | 13:08(TA)TRÇ | 13:32(TA)TRÇ | 13:57(TA)TRÇ | 14:22(TA)TRÇ | 14:46(TA)TRÇ | 15:10(TA)TRÇ | 15:33(TA)TRÇ | 15:55(TA)TRÇ | 16:17(TA)TRÇ | 16:39(TA)TRÇ | 17:01(TA)TRÇ | 17:23(TA)TRÇ | 17:45(TA)TRÇ | 18:07(TA)TRÇ | 18:30(TA)TRÇ | 18:53TA)T | RÇ | 19:17(TA)TRÇ | 19:44(TA)TRÇ | 20:10(TA)TRÇ | 20:40(TA)TRÇ | 21:10(TA)TRÇ | 21:50(TA) | 22:25(TA) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "4:45(TA) | 5:45(TA) | 6:20(TA)TRÇ | 6:55(TA)TRÇ | 7:35(TA)TRÇ | 8:10(TA)TRÇ | 8:45(TA)TRÇ | 9:20(TA)TRÇ | 9:55(TA)TRÇ | 10:30(TA)TRÇ | 11:05(TA)TRÇ | 11:40(TA)TRÇ | 12:15(TA)TRÇ | 12:50(TA)TRÇ | 13:25(TA)TRÇ | 14:00(TA)TRÇ | 14:35(TA)TRÇ | 15:10(TA)TRÇ | 15:40(TA)TRÇ | 16:10(TA)TRÇ | 16:35(TA)TRÇ | 17:00(TA)TRÇ | 17:20(TA)TRÇ | 17:40(TA)TRÇ | 18:00(TA)TRÇ | 18:28(TA)TRÇ | 18:56(TA)TRÇ | 19:24(TA)TRÇ | 19:53(TA)TRÇ | 20:23(TA)TRÇ | 20:56(TA)TRÇ | 21:25(TA) | 21:55(TA) | 22:30(TA) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 35,
        "name": "Itaipuaçu - Recanto x Niterói (Saída Niterói)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:30(TA) | 5:56(TA) | 6:22(TA) | 6:25(MC) | 6:48(TA) | 7:14(TA)TRÇ | 7:37(TA)TRÇ | 8:00(TA) | 8:20(TA)TRÇ | 8:40(TA)TRÇ | 9:00(TA) | 9:20(TA)TRÇ | 9:40(TA)TRÇ | 10:00(TA)TRÇ | 10:20(TA)TRÇ | 10:40(TA)TRÇ | 11:00(TA) | 11:00(MC) | 11:24(TA)TRÇ | 11:48(TA)TRÇ | 12:12(TA)TRÇ | 12:36(TA)TRÇ | 13:00(TA) | 13:20(TA)TRÇ | 13:40(TA)TRÇ | 14:00(TA)TRÇ | 14:20(TA)TRÇ | 14:40(TA)TRÇ | 15:00(TA) | 15:20(TA)TRÇ | 15:40(TA)TRÇ | 16:00(TA) | 16:00(MC) | 16:20(TA) | 16:34(TA) | 16:47(TA) | 17:00(TA) | 17:10(TA) | 17:20(TA) | 17:30(TA) | 17:40(TA) | 17:50(TA) | 18:00(TA) | 18:10(TA) | 18:20(TA) | 18:30(TA) | 18:40(TA) | 18:57(TA) | 19:14(TA) | 19:30(MC) | 19:31(TA) | 19:49(TA) | 20:07(TA) | 20:21(TA) | 20:25(TA) | 21:00(TA) | 21:15(TA) | 21:30(TA) | 21:4 5(TA) | 22:00(TA) | 22:15(TA) | 22:30(TA) | 22:48(MC) | 23:10(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "0:01(TA) | 6:26(TA) | 6:45(TA)TRÇ | 7:05(TA)TRÇ | 7:25(TA)TRÇ | 7:43(TA)TRÇ | 8:01(TA)TRÇ | 8:19(TA)TRÇ | 8:35(TA)TRÇ | 8:50(TA)TRÇ | 9:05(TA)TRÇ | 9:20(TA)TRÇ | 9:33(TA)TRÇ | 9:46(TA)TRÇ | 9:59(TA)TRÇ | 10:12(TA)TRÇ | 10:25(TA)TRÇ | 10:38(TA)TRÇ | 10:51(TA)TRÇ | 11:08(TA)TRÇ | 11:28(TA)TRÇ | 11:50(TA)TRÇ | 12:12(TA)TRÇ | 12:35(TA)TRÇ | 12:59(TA)TRÇ | 13:23(TA)TRÇ | 13:47(TA)TRÇ | 14:11(TA)TRÇ | 14:35(TA)TRÇ | 15:00(TA)TRÇ | 15:23(TA)TRÇ | 15:46(TA)TRÇ | 16:09(TA)TRÇ | 16:33(TA)TRÇ | 16:56(TA)TRÇ | 17:19(TA)TRÇ | 17:42(TA)TRÇ | 18:05(TA)TRÇ | 18:28(TA)TRÇ | 18:51(TA)TRÇ | 19:14(TA) | 19:40(TA)TRÇ | 20:07(TA) | 20:34(TA) | 21:00(TA) | 21:54(TA) | 22:48(TA) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "0:01(TA) | 6:20(TA)TRÇ | 6:55(TA)TRÇ | 7:20(TA)TRÇ | 7:50(TA)TRÇ | 8:20(TA)TRÇ | 8:55(TA)TRÇ | 9:30(TA)TRÇ | 10:05(TA)TRÇ | 10:40(TA)TRÇ | 11:15(TA)TRÇ | 11:50(TA)TRÇ | 12:25(TA)TRÇ | 13:00(TA)TRÇ | 13:35(TA)TRÇ | 14:10(TA)TRÇ | 14:45(TA)TRÇ | 15:20(TA)TRÇ | 15:50(TA)TRÇ | 16:20(TA)TRÇ | 16:50(TA)TRÇ | 17:20(TA)TRÇ | 17:46(TA)TRÇ | 18:11(TA)TRÇ | 18:36(TA)TRÇ | 19:00(TA)TRÇ | 19:23(TA)TRÇ | 19:46(TA)TRÇ | 20:10(TA) | 20:35(TA) | 21:05(TA) | 21:35(TA) | 22:50(TA) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 36,
        "name": "Itaipuaçu - Recanto X Rio do Ouro (Saída Itaipuaçu - Recanto)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:45(MC) | 6:56(MC) | 8:13(MC) | 11:00(MC) | 13:00(MC) | 14:35(MC) | 15:35(MC) | 16:10(MC) | 16:40(MC) | 17:09(MC) | 17:37(MC) | 18:00(MC) | 18:32(MC) | 19:08(MC) | 19:50(MC) | 20:41(MC) | 21:41(MC) | 22:30(MC) | 23:43(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "6:55(MC) | 7:55(MC) | 8:55(MC) | 10:00(MC) | 11:00(MC) | 12:10(MC) | 13:20(MC) | 14:30(MC) | 15:40(MC) | 16:50(MC) | 17:58(MC) | 18:59(MC) | 20:02(MC) | 21:07(MC) | 22:35(MC) | 23:55(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "7:30(MC) | 9:40(MC) | 11:55(MC) | 14:15(MC) | 16:25(MC) | 18:40(MC) | 20:45(MC) | 23:52(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 37,
        "name": "Itaipuaçu - Recanto X Rio do Ouro (Saída Rio do Ouro)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:45(MC) | 6:56(MC) | 8:13(MC) | 11:00(MC) | 13:00(MC) | 14:35(MC) | 15:35(MC) | 16:10(MC) | 16:40(MC) | 17:09(MC) | 17:37(MC) | 18:00(MC) | 18:32(MC) | 19:08(MC) | 19:50(MC) | 20:41(MC) | 21:41(MC) | 22:30(MC) | 23:43(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "6:55(MC) | 7:55(MC) | 8:55(MC) | 10:00(MC) | 11:00(MC) | 12:10(MC) | 13:20(MC) | 14:30(MC) | 15:40(MC) | 16:50(MC) | 17:58(MC) | 18:59(MC) | 20:02(MC) | 21:07(MC) | 22:35(MC) | 23:55(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "7:30(MC) | 9:40(MC) | 11:55(MC) | 14:15(MC) | 16:25(MC) | 18:40(MC) | 20:45(MC) | 23:52(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 38,
        "name": "Avenida 2 - Rua 034 - Circular (Saída Avenida 2)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "4:50(MC) | 5:45(MC) | 6:42(MC) | 7:20(MC) | 8:00(MC) | 10:00(MC) | 12:00(MC) | 14:00(MC) | 15:00(MC) | 16:00(MC) | 16:31(MC) | 17:00(MC) | 17:40(MC) | 18:34(MC) | 19:35(MC) | 20:15(MC) | 21:00(MC) | 22:35(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "5:50(MC) | 6:45(MC) | 7:50(MC) | 8:50(MC) | 9:55(MC) | 11:00(MC) | 12:10(MC) | 13:20(MC) | 14:30(MC) | 15:40(MC) | 16:50(MC) | 18:00(MC) | 19:10(MC) | 20:20(MC) | 21:50(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "6:30(MC) | 8:30(MC) | 10:50(MC) | 13:00(MC) | 15:15(MC) | 17:20(MC) | 19:40(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 39,
        "name": "Joquei x Niterói (Saída Joquei)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "0:02(MC) | 0:32(MC) | 4:00(MC) | 4:12(MC) | 4:24(MC) | 4:36(MC) | 4:48(MC) | 5:00(MC) | 5:06(MC) | 5:12(MC) | 5:18(MC) | 5:24(MC) | 5:30(MC) | 5:36(MC) | 5:42(MC) | 5:48(MC) | 5:54(MC) | 6:00(MC) | 6:05(MC) | 6:09(MC) | 6:14(MC) | 6:18(MC) | 6:23(MC) | 6:27(MC) | 6:32(MC) | 6:36(MC) | 6:41(MC) | 6:45(MC) | 6:50(MC) | 6:55(MC) | 7:03(MC) | 7:11(MC) | 7:19(MC) | 7:27(MC) | 7:36(MC) | 7:46(MC) | 7:56(MC) | 8:08(MC) | 8:20(MC) | 8:32(MC) | 8:44(MC) | 8:56(MC) | 9:11(MC) | 9:26(MC) | 9:41(MC) | 9:56(MC) | 10:11(MC) | 10:26(MC) | 10:41(MC) | 10:56(MC) | 11:11(MC) | 11:26(MC) | 11:41(MC) | 11:56(MC) | 12:11(MC) | 12:26(MC) | 12:41(MC) | 12:56(MC) | 13:11(MC) | 13:26(MC) | 13:41(MC) | 13:56(MC) | 14:11(MC) | 14:26(MC) | 14:41(MC) | 14:56(MC) | 15:11(MC) | 15:25(MC) | 15:39(MC) | 15:53(MC) | 16:06(MC) | 16:19(MC) | 16:31(MC) | 16:44(MC) | 16:55(MC) | 17:06(MC) | 17:18(MC) | 17:29(MC) | 17:41(MC) | 17:52(MC) | 18:04(MC) | 18:16(MC) | 18:28(MC) | 18:40(MC) | 18:51(MC) | 19:02(MC) | 19:13(MC) | 19:24(MC) | 19:35(MC) | 19:46(MC) | 19:57(MC) | 20:08(MC) | 20:19(MC) | 20:30(MC) | 20:41(MC) | 20:52(MC) | 21:04(MC) | 21:19(MC) | 21:37(MC) | 21:55(MC) | 22:14(MC) | 22:33(MC) | 22:52(MC) | 23:11(MC) | 23:31(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "0:15(MC) | 4:20(MC) | 4:35(MC) | 4:50(MC) | 5:05(MC) | 5:20(MC) | 5:35(MC) | 5:50(MC) | 6:02(MC) | 6:14(MC) | 6:26(MC) | 6:38(MC) | 6:50(MC) | 7:00(MC) | 7:10(MC) | 7:20(MC) | 7:30(MC) | 7:40(MC) | 7:50(MC) | 8:00(MC) | 8:12(MC) | 8:24(MC) | 8:36(MC) | 8:48(MC) | 9:00(MC) | 9:12(MC) | 9:24(MC) | 9:38(MC) | 9:52(MC) | 10:06(MC) | 10:20(MC) | 10:34(MC) | 10:47(MC) | 11:01(MC) | 11:15(MC) | 11:29(MC) | 11:42(MC) | 11:56(MC) | 12:10(MC) | 12:24(MC) | 12:38(MC) | 12:52(MC) | 13:05(MC) | 13:19(MC) | 13:32(MC) | 13:46(MC) | 13:59(MC) | 14:13(MC) | 14:26(MC) | 14:39(MC) | 14:52(MC) | 15:05(MC) | 15:18(MC) | 15:31(MC) | 15:44(MC) | 15:58(MC) | 16:11(MC) | 16:24(MC) | 16:38(MC) | 16:52(MC) | 17:06(MC) | 17:20(MC) | 17:34(MC) | 17:48(MC) | 18:02(MC) | 18:16(MC) | 18:30(MC) | 18:44(MC) | 18:57(MC) | 19:10(MC) | 19:23(MC) | 19:36(MC) | 19:49(MC) | 20:02(MC) | 20:15(MC) | 20:29(MC) | 20:42(MC) | 20:56(MC) | 21:09(MC) | 21:23(MC) | 21:36(MC) | 21:50(MC) | 22:04(MC) | 22:19(MC) | 22:35(MC) | 22:55(MC) | 23:20(MC) | 23:45(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "4:20(MC) | 4:39(MC) | 4:58(MC) | 5:17(MC) | 5:36(MC) | 5:55(MC) | 6:14(MC) | 6:32(MC) | 6:50(MC) | 7:08(MC) | 7:26(MC) | 7:46(MC) | 8:06(MC) | 8:26(MC) | 8:46(MC) | 9:06(MC) | 9:26(MC) | 9:46(MC) | 10:07(MC) | 10:28(MC) | 10:49(MC) | 11:10(MC) | 11:31(MC) | 11:52(MC) | 12:13(MC) | 12:34(MC) | 12:54(MC) | 13:14(MC) | 13:34(MC) | 13:54(MC) | 14:14(MC) | 14:34(MC) | 14:53(MC) | 15:13(MC) | 15:33(MC) | 15:53(MC) | 16:13(MC) | 16:33(MC) | 16:52(MC) | 17:11(MC) | 17:31(MC) | 17:49(MC) | 18:07(MC) | 18:26(MC) | 18:45(MC) | 19:04(MC) | 19:23(MC) | 19:42(MC) | 20:01(MC) | 20:20(MC) | 20:40(MC) | 21:00(MC) | 21:20(MC) | 21:40(MC) | 22:00(MC) | 22:20(MC) | 22:41(MC) | 23:02(MC) | 23:25(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 40,
        "name": "Joquei x Niterói (Saída Niterói)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "0:14(MC) | 0:43(MC) | 1:13(MC) | 4:41(MC) | 4:55(MC) | 5:08(MC) | 5:21(MC) | 5:34(MC) | 5:39(MC) | 5:47(MC) | 6:00(MC) | 6:10(MC) | 6:11(MC) | 6:21(MC) | 6:31(MC) | 6:41(MC) | 6:51(MC) | 7:01(MC) | 7:11(MC) | 7:21(MC) | 7:33(MC) | 7:43(MC) | 7:53(MC) | 8:03(MC) | 8:17(MC) | 8:31(MC) | 8:46(MC) | 9:01(MC) | 9:16(MC) | 9:31(MC) | 9:46(MC) | 10:01(MC) | 10:16(MC) | 10:31(MC) | 10:46(MC) | 11:01(MC) | 11:16(MC) | 11:31(MC) | 11:46(MC) | 12:01(MC) | 12:16(MC) | 12:31(MC) | 12:46(MC) | 13:01(MC) | 13:16(MC) | 13:31(MC) | 13:46(MC) | 14:01(MC) | 14:16(MC) | 14:31(MC) | 14:46(MC) | 15:00(MC) | 15:14(MC) | 15:28(MC) | 15:40(MC) | 15:50(MC) | 16:00(MC) | 16:07(MC) | 16:15(MC) | 16:22(MC) | 16:30(MC) | 16:38(MC) | 16:46(MC) | 16:54(MC) | 17:01(MC) | 17:09(MC) | 17:17(MC) | 17:25(MC) | 17:33(MC) | 17:41(MC) | 17:49(MC) | 17:57(MC) | 18:05(MC) | 18:12(MC) | 18:20(MC) | 18:28(MC) | 18:36(MC) | 18:44(MC) | 18:52(MC) | 18:59(MC) | 19:07(MC) | 19:16(MC) | 19:24(MC) | 19:33(MC) | 19:41(MC) | 19:50(MC) | 19:59(MC) | 20:09(MC) | 20:20(MC) | 20:31(MC) | 20:42(MC) | 20:52(MC) | 21:05(MC) | 21:18(MC) | 21:32(MC) | 21:46(MC) | 22:00(MC) | 22:14(MC) | 22:28(MC) | 22:43(MC) | 23:00(MC) | 23:24(MC) | 23:49(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "0:03(MC) | 0:25(MC) | 4:53(MC) | 5:15(MC) | 5:37(MC) | 5:53(MC) | 6:07(MC) | 6:21(MC) | 6:35(MC) | 6:49(MC) | 7:02(MC) | 7:15(MC) | 7:28(MC) | 7:41(MC) | 7:54(MC) | 8:08(MC) | 8:22(MC) | 8:36(MC) | 8:49(MC) | 9:03(MC) | 9:16(MC) | 9:30(MC) | 9:44(MC) | 9:57(MC) | 10:11(MC) | 10:24(MC) | 10:37(MC) | 10:50(MC) | 11:03(MC) | 11:16(MC) | 11:29(MC) | 11:43(MC) | 11:56(MC) | 12:10(MC) | 12:23(MC) | 12:37(MC) | 12:50(MC) | 13:04(MC) | 13:17(MC) | 13:31(MC) | 13:44(MC) | 13:57(MC) | 14:10(MC) | 14:24(MC) | 14:37(MC) | 14:50(MC) | 15:03(MC) | 15:16(MC) | 15:29(MC) | 15:42(MC) | 15:55(MC) | 16:08(MC) | 16:21(MC) | 16:34(MC) | 16:47(MC) | 17:00(MC) | 17:13(MC) | 17:26(MC) | 17:38(MC) | 17:50(MC) | 18:02(MC) | 18:15(MC) | 18:27(MC) | 18:40(MC) | 18:52(MC) | 19:05(MC) | 19:17(MC) | 19:29(MC) | 19:41(MC) | 19:53(MC) | 20:05(MC) | 20:17(MC) | 20:29(MC) | 20:41(MC) | 20:53(MC) | 21:05(MC) | 21:17(MC) | 21:29(MC) | 21:43(MC) | 21:57(MC) | 22:11(MC) | 22:26(MC) | 22:41(MC) | 22:56(MC) | 23:11(MC) | 23:26(MC) | 23:41(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "0:10(MC) | 5:00(MC) | 5:17(MC) | 5:39(MC) | 6:01(MC) | 6:23(MC) | 6:45(MC) | 7:07(MC) | 7:29(MC) | 7:51(MC) | 8:14(MC) | 8:35(MC) | 8:56(MC) | 9:17(MC) | 9:38(MC) | 9:58(MC) | 10:19(MC) | 10:39(MC) | 11:00(MC) | 11:20(MC) | 11:40(MC) | 12:00(MC) | 12:21(MC) | 12:41(MC) | 13:02(MC) | 13:22(MC) | 13:42(MC) | 14:02(MC) | 14:22(MC) | 14:42(MC) | 15:01(MC) | 15:21(MC) | 15:41(MC) | 16:01(MC) | 16:22(MC) | 16:42(MC) | 17:02(MC) | 17:23(MC) | 17:43(MC) | 18:03(MC) | 18:23(MC) | 18:42(MC) | 19:01(MC) | 19:20(MC) | 19:38(MC) | 19:57(MC) | 20:16(MC) | 20:34(MC) | 20:53(MC) | 21:11(MC) | 21:30(MC) | 21:48(MC) | 22:07(MC) | 22:26(MC) | 22:46(MC) | 23:06(MC) | 23:26(MC) | 23:48(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 41,
        "name": "Maricá x Castelo (Saída Maricá)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "0:03(TA) | 3:30(TA) | 3:50(TA) | 4:00(TA) | 4:10(TA)CAN | 4:20(TA) | 4:25(TA)CAN | 4:30(TA) | 4:35(TA)CAN | 4:39(TA) | 4:43(TA)CAN | 4:47(TA) | 4:51(TA)CAN | 4:54(TA) | 4:57(TA)CAN | 5:00(TA) | 5:03(TA)CAN | 5:05(MC)CAN | 5:06(TA) | 5:09(TA)CAN | 5:12(TA) | 5:15(TA)CAN | 5:17(TA) | 5:20(TA)CAN | 5:22(TA) | 5:25(TA)CAN | 5:27(TA) | 5:30(TA)CAN | 5:32(TA) | 5:35(TA) | 5:37(TA)CAN | 5:40(TA) | 5:43(TA)CAN | 5:46(TA) | 5:49(TA)CAN | 5:52(TA) | 5:56(TA)CAN | 6:00(TA) | 6:03(TA)CAN | 6:07(TA) | 6:11(TA)CAN | 6:15(TA) | 6:19(TA)CAN | 6:23(TA) | 6:27(TA)CAN | 6:34(TA) | 6:41(TA)CAN | 6:47(TA) | 6:57(TA)CAN | 7:07(TA) | 7:17(TA)CAN |  7:26(TA) | 7:35(TA)CAN |  7:45(TA) | 7:55(TA)CAN |  8:04(TA) | 8:14(TA)CAN |  8:23(TA) | 8:33(TA)CAN |  8:42(TA) | 8:52(TA)CAN |  9:01(TA) | 9:11(TA)CAN |  9:21(TA) | 9:31(TA)CAN |  9:40(TA) | 9:50(TA)CAN |  10:00(TA) | 10:10(TA)CAN | 10:20(TA) | 10:29(TA)CAN | 10:38(TA) | 10:48(TA)CAN | 10:57(TA) | 11:07(TA)CAN | 11:16(TA) | 11:26(TA)CAN | 11:36(TA) | 11:45(TA)CAN | 11:54(TA) | 12:04(TA)CAN | 12:14(TA) | 12:24(TA)CAN | 12:34(TA) | 12:44(TA)CAN | 12:54(TA) | 13:04(TA)CAN | 13:14(TA) | 13:24(TA)CAN | 13:34(TA) | 13:44(TA)CAN | 13:54(TA) | 14:04(TA)CAN | 14:14(TA) | 14:24(TA)CAN | 14:34(TA) | 14:44(TA)CAN | 14:54(TA) | 15:02(TA)CAN | 15:09(TA) | 15:17(TA)CAN | 15:24(TA) | 15:32(TA)CAN | 15:39(TA) | 15:47(TA)CAN | 15:54(TA) | 16:02(TA)CAN | 16:10(TA) | 16:19(TA)CAN | 16:27(TA) | 16:35(TA)CAN | 16:43(TA) | 16:51(TA)CAN | 16:59(TA) | 17:07(TA)CAN | 17:16(TA) | 17:27 (MC)CAN 17:28(TA)CAN | 17:39(TA) | 17:50(TA)CAN | 18:02(TA) | 18:14(TA)CAN | 18:26(TA) | 18:38(TA)CAN | 18:51(TA) | 19:05(TA)CAN | 19:20(TA) | 19:33(TA)CAN | 19:48(TA) | 20:09(TA) | 20:30(TA) | 20:55(TA) | 21:20(TA) | 21:50(TA) | 22:24(TA) | 23:13(TA) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "0:00(TA) | 4:00(TA) | 4:15(TA) | 4:30(TA) | 4:45(TA) | 5:00(TA) | 5:09(TA) | 5:18(TA) | 5:27(TA) | 5:36(TA) | 5:45(TA) | 5:56(TA) | 6:08(TA) | 6:20(TA) | 6:32(TA) | 6:44(TA) | 6:56(TA) | 7:08(TA) | 7:20(TA) | 7:33(TA) | 7:45(TA) | 7:58(TA) | 8:10(TA) | 8:22(TA) | 8:34(TA) | 8:46(TA) | 8:58(TA) | 9:10(TA) | 9:22(TA) | 9:34(TA) | 9:46(TA) | 9:58(TA) | 10:10(TA) | 10:22(TA) | 10:34(TA) | 10:47(TA) | 10:59(TA) | 11:12(TA) | 11:25(TA) | 11:37(TA) | 11:49(TA) | 12:01(TA) | 12:13(TA) | 12:25(TA) | 12:38(TA) | 12:50(TA) | 13:02(TA) | 13:14(TA) | 13:26(TA) | 13:38(TA) | 13:50(TA) | 14:02(TA) | 14:13(TA) | 14:25(TA) | 14:36(TA) | 14:48(TA) | 15:00(TA) | 15:12(TA) | 15:24(TA) | 15:36(TA) | 15:48(TA) | 16:00(TA) | 16:12(TA) | 16:24(TA) | 16:36(TA) | 16:48(TA) | 17:00(TA) | 17:11(TA) | 17:22(TA) | 17:34(TA) | 17:47(TA) | 18:00(TA) | 18:13(TA) | 18:28(TA) | 18:43(TA) | 19:02(TA) | 19:22(TA) | 19:44(TA) | 20:07(TA) | 20:30(TA) | 21:00(TA) | 21:34(TA) | 22:09(TA) | 22:56(TA) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "4:28(TA) | 4:48(TA) | 5:08(TA) | 5:28(TA) | 5:48(TA) | 6:08(TA) | 6:28(TA) | 6:48(TA) | 7:08(TA) | 7:28(TA) | 7:48(TA) | 8:08(TA) | 8:28(TA) | 8:48(TA) | 9:08(TA) | 9:28(TA) | 9:48(TA) | 10:08(TA) | 10:28(TA) | 10:48(TA) | 11:08(TA) | 11:28(TA) | 11:48(TA) | 12:08(TA) | 12:28(TA) | 12:48(TA) | 13:08(TA) | 13:28(TA) | 13:48(TA) | 14:08(TA) | 14:28(TA) | 14:45(TA) | 15:00(TA) | 15:15(TA) | 15:30(TA) | 15:45(TA) | 16:00(TA) | 16:15(TA) | 16:30(TA) | 16:45(TA) | 17:00(TA) | 17:15(TA) | 17:31(TA) | 17:47(TA) | 18:03(TA) | 18:20(TA) | 18:37(TA) | 18:53(TA) | 19:10(TA) | 19:28(TA) | 19:44(TA) | 20:08(TA) | 20:32(TA) | 21:00(TA) | 21:33(TA) | 22:20(TA) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 42,
        "name": "Maricá x Castelo (Saída Castelo)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "0:50(TA) | 1:30(TA) | 5:04(TA) | 5:19(TA) | 5:33(TA) | 5:47(TA) | 5:51(TA)CAN | 6:01(TA) | 6:05(TA)CAN | 6:13(TA) | 6:19(TA)CAN | 6:22(TA) | 6:32(TA) | 6:33(TA)CAN | 6:41(TA) | 6:47(TA)CAN | 6:50(TA) | 6:59(TA) | 7:01(TA)CAN | 7:08(TA) | 7:15(TA)CAN | 7:17(TA) | 7:26(TA) | 7:29(TA)CAN | 7:35(TA) | 7:43(TA)CAN | 7:50(TA) | 7:57(TA)CAN | 8:07(TA) | 8:15(TA)CAN | 8:27(TA) | 8:35(TA)CAN | 8:47(TA) | 8:55(TA)CAN | 9:07(TA) | 9:15(TA)CAN | 9:27(TA) | 9:35(TA)CAN | 9:47(TA) | 9:55(TA)CAN | 10:07(TA) | 10:15(TA)CAN | 10:27(TA) | 10:35(TA)CAN | 10:47(TA) | 10:56(TA)CAN | 11:07(TA) | 11:18(TA)CAN | 11:27(TA) | 11:40(TA)CAN | 11:47(TA) | 12:02(TA)CAN | 12:07(TA) | 12:24(TA)CAN | 12:27(TA) | 12:46(TA)CAN | 12:47(TA) | 13:07(TA)CAN | 13:07(TA) | 13:23(TA) | 13:28(TA)CAN | 13:39(TA) | 13:49(TA)CAN | 13:55(TA) | 14:10(TA)CAN | 14:10(TA) | 14:25(TA) | 14:30(TA)CAN | 14:38(TA) | 14:46(TA)CAN | 14:48(TA) | 15:00(TA) | 15:02(TA)CAN | 15:12(TA) | 15:18(TA)CAN | 15:24(TA) | 15:30(MC)CAN | 15:34(TA)CAN | 15:36(TA) | 15:48(TA) | 15:50(TA)CAN | 16:00(TA)CAN | 16:00(TA) | 16:10(TA)CAN | 16:12(TA) | 16:20(TA)CAN 16:22(TA) | 16:30(TA)CAN | 16:32(TA) | 16:40(TA)CAN | 16:42(TA) | 16:50(TA)CAN | 16:52(TA) | 17:00(TA)CAN | 17:02(TA) | 17:12(TA)CAN | 17:12(TA) | 17:22(TA) | 17:24(TA)CAN | 17:32(TA) | 17:39(TA)CAN | 17:42(TA) | 17:52(TA) | 17:54(TA)CAN | 18:02(TA) | 18:09(TA)CAN | 18:12(TA) | 18:22(TA) | 18:25(TA)CAN | 18:32(TA) | 18:41(TA)CAN | 18:42(TA) | 18:52(TA) | 18:57(TA)CAN | 19:03(TA) | 19:15(TA) | 19:16(TA)CAN | 19:30(TA) | 19:35(TA)CAN | 19:45(TA) | 19:55(TA)CAN | 20:00(TA) | 20:10(MC)CAN | 20:15(TA) | 20:16(TA)CAN | 20:30(TA) | 20:45(TA) | 20:46(TA)CAN | 21:00(TA) | 21:20(TA) | 21:21(TA)CAN | 21:40(TA) | 22:00(TA) | 22:20(TA) | 22:40(TA) | 23:10(TA) | 23:45(TA) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "0:27(TA) | 1:30(TA) | 5:25(TA) | 5:50(TA) | 6:05(TA) | 6:20(TA) | 6:31(TA) | 6:42(TA) | 6:53(TA) | 7:04(TA) | 7:14(TA) | 7:25(TA) | 7:35(TA) | 7:46(TA) | 7:57(TA) | 8:08(TA) | 8:19(TA) | 8:30(TA) | 8:41(TA) | 8:52(TA) | 9:03(TA) | 9:12(TA) | 9:21(TA) | 9:31(TA) | 9:41(TA) | 9:51(TA) | 10:01(TA) | 10:13(TA) | 10:25(TA) | 10:38(TA) | 10:50(TA) | 11:03(TA) | 11:15(TA) | 11:28(TA) | 11:40(TA) | 11:53(TA) | 12:05(TA) | 12:18(TA) | 12:30(TA) | 12:42(TA) | 12:55(TA) | 13:07(TA) | 13:20(TA) | 13:32(TA) | 13:45(TA) | 13:58(TA) | 14:11(TA) | 14:23(TA) | 14:36(TA) | 14:48(TA) | 14:59(TA) | 15:12(TA) | 15:24(TA) | 15:37(TA) | 15:50(TA) | 16:02(TA) | 16:15(TA) | 16:27(TA) | 16:40(TA) | 16:52(TA) | 17:05(TA) | 17:17(TA) | 17:30(TA) | 17:42(TA) | 17:55(TA) | 18:07(TA) | 18:20(TA) | 18:32(TA) | 18:45(TA) | 18:57(TA) | 19:10(TA) | 19:22(TA) | 19:35(TA) | 19:47(TA) | 20:00(TA) | 20:20(TA) | 20:40(TA) | 21:20(TA) | 21:41(TA) | 22:11(TA) | 22:41(TA) | 23:11(TA) | 23:41(TA) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "0:00(TA) | 6:04(TA) | 6:24(TA) | 6:44(TA) | 7:04(TA) | 7:24(TA) | 7:44(TA) | 8:04(TA) | 8:24(TA) | 8:44(TA) | 9:04(TA) | 9:24(TA) | 9:44(TA) | 10:04(TA) | 10:24(TA) | 10:44(TA) | 11:04(TA) | 11:24(TA) | 11:44(TA) | 12:04(TA) | 12:24(TA) | 12:44(TA) | 13:04(TA) | 13:24(TA) | 13:44(TA) | 14:04(TA) | 14:24(TA) | 14:44(TA) | 15:04(TA) | 15:24(TA) | 15:44(TA) | 16:04(TA) | 16:24(TA) | 16:39(TA) | 16:54(TA) | 17:09(TA) | 17:24(TA) | 17:39(TA) | 17:52(TA) | 18:06(TA) | 18:20(TA) | 18:33(TA) | 18:44(TA) | 18:55(TA) | 19:07(TA) | 19:18(TA) | 19:30(TA) | 19:41(TA) | 19:53(TA) | 20:04(TA) | 20:15(TA) | 20:27(TA) | 20:38(TA) | 20:49(TA) | 21:00(TA) | 21:11(TA) | 21:24(TA) | 21:42(TA) | 22:00(TA) | 22:20(TA) | 22:50(TA) | 23:20(TA) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 43,
        "name": "Maricá X Inoã - Via Avenida (Saída Maricá)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "06:26(MC) | 06:53(MC) | 07:05(MC) | 07:20(MC) | 07:29(MC) | 07:42(MC) | 07:55(MC) | 08:08(MC) | 08:21(MC) | 08:36(MC) | 08:51(MC) | 09:06(MC) | 09:20(MC) | 09:39(MC) | 09:54(MC) | 10:09(MC) | 10:26(MC) | 10:43(MC) | 11:00(MC) | 11:14(MC) | 11:28(MC) | 11:44(MC) | 12:00(MC) | 12:14(MC) | 12:29(MC) | 12:44(MC) | 13:00(MC) | 13:14(MC) | 13:29(MC) | 13:44(MC) | 14:05(MC) | 14:23(MC) | 14:42(MC) | 15:03(MC) | 15:18(MC) | 15:39(MC) | 15:54(MC) | 16:15(MC) | 16:25(MC) | 16:45(MC) | 16:55(MC) | 17:15(MC) | 17:25(MC) | 17:43(MC) | 17:55(MC) | 18:10(MC) | 18:26(MC) | 18:36(MC) | 18:53(MC) | 19:13(MC) | 19:32(MC) |  19:54(MC) |  20:16(MC) |  20:38(MC) |  21:00(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "7:11(MC) | 7:42(MC) | 8:11(MC) | 8:38(MC) | 9:08(MC) | 9:36(MC) | 10:06(MC) | 10:37(MC) | 11:07(MC) | 11:37(MC) | 12:07(MC) | 12:36(MC) | 13:07(MC) | 13:35(MC) | 14:06(MC) | 14:36(MC) | 15:05(MC) | 15:36(MC) | 16:08(MC) | 16:38(MC) | 17:08(MC) | 17:38(MC) | 18:05(MC) | 18:38(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "7:13(MC) | 8:46(MC) | 10:14(MC) | 11:29(MC) | 12:43(MC) | 14:14(MC) | 15:56(MC) | 17:14(MC) | 18:38(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 44,
        "name": "Maricá X Inoã - Via Avenida (Saída Inoã)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "06:10(MC) | 06:22(MC) | 06:34(MC) | 06:46(MC) | 06:58(MC) | 07:11(MC) | 07:23(MC) | 07:37(MC) | 07:45(MC) | 07:58(MC) | 08:10(MC) | 08:23(MC) | 08:35(MC) | 08:47(MC) | 08:59(MC) | 09:16(MC) | 09:33(MC) | 09:49(MC) | 10:05(MC) | 10:28(MC) | 10:46(MC) | 11:02(MC) | 11:20(MC) | 11:37(MC) | 11:54(MC) | 12:12(MC) | 12:30(MC) | 12:47(MC) | 13:05(MC) | 13:21(MC) | 13:35(MC) | 13:50(MC) | 14:04(MC) | 14:18(MC) | 14:34(MC) | 14:54(MC) | 15:10(MC) | 15:30(MC) | 15:50(MC) | 16:09(MC) | 16:25(MC) | 16:38(MC) | 16:51(MC) | 17:05(MC) | 17:16(MC) | 17:34(MC) | 17:50(MC) | 18:06(MC) | 18:27(MC) | 18:43(MC) | 19:03(MC) |  19:20(MC) |  19:41(MC) |  20:05(MC) |  20:50(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "7:00(MC) | 7:22(MC) | 7:52(MC) | 8:23(MC) | 8:51(MC) | 9:21(MC) | 9:52(MC) | 10:20(MC) | 10:50(MC) | 11:20(MC) | 11:48(MC) | 12:20(MC) | 12:48(MC) | 13:20(MC) | 13:50(MC) | 14:20(MC) | 14:48(MC) | 15:21(MC) | 15:49(MC) | 16:21(MC) | 16:48(MC) | 17:20(MC) | 17:48(MC) | 18:22(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "8:06(MC) | 9:30(MC) | 10:52(MC) | 12:06(MC) | 13:27(MC) | 15:07(MC) | 16:39(MC) | 17:53(MC) | 19:29(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 45,
        "name": "Maricá x Inoã - Via Flamengo (Saída Maricá)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "06:24(MC) | 07:40(MC) | 14:52(MC) | 15:41(MC) | 16:35(MC) | ",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 46,
        "name": "Maricá x Inoã - Via Flamengo (Saída Inoã)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "06:45(MC) | 08:27(MC) | 15:45(MC) | 17:45(MC) | ",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 47,
        "name": "Maricá x Itaipuaçu - Cajueiro R.128 (Saída Maricá)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "6:50(MC) | 9:15(MC) | 11:30(MC) | 13:50(MC) | 15:00(MC) | 17:15(MC) | 19:35(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "9:00(MC) | 12:00(MC) | 15:00(MC) | 18:00(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "9:00(MC) | 12:00(MC) | 15:00(MC) | 18:00(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 48,
        "name": "Maricá x Itaipuaçu - Cajueiro R.128 (Saída Itaipuaçu - Caj.R126)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:58(MC) | 8:00(MC) | 10:20(MC) | 12:35(MC) | 14:55(MC) | 16:05(MC) | 18:25(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "7:10(MC) | 10:10(MC) | 13:10(MC) | 16:10(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "7:10(MC) | 10:10(MC) | 13:10(MC) | 16:10(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 49,
        "name": "Maricá x Itaipuaçu - Recanto (Saída Maricá)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "1:00(MC) | 3:00(MC) | 5:05(MC) | 5:20(MC) | 5:33(MC) | 5:46(MC) | 5:59(MC) | 6:11(MC) | 6:24(MC) | 6:38(MC) | 6:52(MC) | 7:06(MC) | 7:20(MC) | 7:33(MC) | 7:47(MC) | 8:00(MC) | 8:14(MC) | 8:27(MC) | 8:41(MC) | 8:54(MC) | 9:07(MC) | 9:20(MC) | 9:33(MC) | 9:46(MC) | 9:59(MC) | 10:12(MC) | 10:24(MC) | 10:36(MC) | 10:48(MC) | 11:00(MC) | 11:12(MC) | 11:24(MC) | 11:36(MC) | 11:48(MC) | 12:00(MC) | 12:10(MC) | 12:20(MC) | 12:30(MC) | 12:40(MC) | 12:51(MC) | 13:02(MC) | 13:13(MC) | 13:25(MC) | 13:36(MC) | 13:48(MC) | 14:00(MC) | 14:11(MC) | 14:22(MC) | 14:33(MC) | 14:44(MC) | 14:55(MC) | 15:06(MC) | 15:17(MC) | 15:28(MC) | 15:39(MC) | 15:50(MC) | 16:01(MC) | 16:12(MC) | 16:23(MC) | 16:34(MC) | 16:44(MC) | 16:54(MC) | 17:04(MC) | 17:15(MC) | 17:26(MC) | 17:37(MC) | 17:48(MC) | 17:59(MC) | 18:10(MC) | 18:21(MC) | 18:32(MC) | 18:43(MC) | 18:54(MC) | 19:08(MC) | 19:24(MC) | 19:40(MC) | 20:00(MC) | 20:22(MC) | 20:44(MC) | 21:08(MC) | 21:33(MC) | 22:03(MC) | 22:40(MC) | 23:40(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "1:00(MC) | 3:00(MC) | 4:30(MC) | 4:50(MC) | 5:10(MC) | 5:30(MC) | 5:47(MC) | 6:04(MC) | 6:21(MC) | 6:38(MC) | 6:55(MC) | 7:12(MC) | 7:29(MC) | 7:46(MC) | 8:03(MC) | 8:20(MC) | 8:37(MC) | 8:54(MC) | 9:11(MC) | 9:28(MC) | 9:45(MC) | 10:02(MC) | 10:19(MC) | 10:36(MC) | 10:54(MC) | 11:12(MC) | 11:30(MC) | 11:48(MC) | 12:06(MC) | 12:24(MC) | 12:42(MC) | 13:00(MC) | 13:18(MC) | 13:36(MC) | 13:54(MC) | 14:12(MC) | 14:30(MC) | 14:48(MC) | 15:06(MC) | 15:24(MC) | 15:42(MC) | 16:00(MC) | 16:18(MC) | 16:36(MC) | 16:54(MC) | 17:11(MC) | 17:29(MC) | 17:46(MC) | 18:04(MC) | 18:22(MC) | 18:40(MC) | 19:00(MC) | 19:20(MC) | 19:40(MC) | 20:01(MC) | 20:38(MC) | 21:19(MC) | 21:57(MC) | 22:45(MC) | 23:30(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "1:00(MC) | 3:00(MC) | 4:00(MC) | 4:40(MC) | 5:20(MC) | 5:50(MC) | 6:20(MC) | 6:50(MC) | 7:20(MC) | 7:50(MC) | 8:20(MC) | 8:50(MC) | 9:20(MC) | 9:50(MC) | 10:20(MC) | 10:50(MC) | 11:20(MC) | 11:50(MC) | 12:20(MC) | 12:50(MC) | 13:20(MC) | 13:50(MC) | 14:20(MC) | 14:50(MC) | 15:20(MC) | 15:50(MC) | 16:20(MC) | 16:50(MC) | 17:20(MC) | 17:50(MC) | 18:20(MC) | 18:50(MC) | 19:20(MC) | 19:50(MC) | 20:20(MC) | 20:50(MC) | 21:20(MC) | 21:50(MC) | 22:20(MC) | 22:50(MC) | 23:30(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 50,
        "name": "Maricá x Itaipuaçu - Recanto (Saída Itaipuaçu Recanto)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "1:00(MC) | 2:20(MC) | 4:30(MC) | 5:10(MC) | 5:35(MC) | 5:50(MC) | 6:00(MC) | 6:10(MC) | 6:20(MC) | 6:30(MC) | 6:40(MC) | 6:50(MC) | 7:00(MC) | 7:12(MC) | 7:24(MC) | 7:36(MC) | 7:48(MC) | 8:00(MC) | 8:12(MC) | 8:24(MC) | 8:36(MC) | 8:48(MC) | 9:00(MC) | 9:12(MC) | 9:24(MC) | 9:36(MC) | 9:48(MC) | 10:00(MC) | 10:12(MC) | 10:24(MC) | 10:36(MC) | 10:48(MC) | 11:00(MC) | 11:10(MC) | 11:20(MC) | 11:30(MC) | 11:40(MC) | 11:50(MC) | 12:00(MC) | 12:11(MC) | 12:22(MC) | 12:33(MC) | 12:44(MC) | 12:55(MC) | 13:06(MC) | 13:17(MC) | 13:29(MC) | 13:41(MC) | 13:53(MC) | 14:05(MC) | 14:17(MC) | 14:29(MC) | 14:41(MC) | 14:53(MC) | 15:05(MC) | 15:17(MC) | 15:29(MC) | 15:41(MC) | 15:53(MC) | 16:05(MC) | 16:17(MC) | 16:29(MC) | 16:41(MC) | 16:52(MC) | 17:03(MC) | 17:14(MC) | 17:25(MC) | 17:36(MC) | 17:47(MC) | 17:58(MC) | 18:09(MC) | 18:20(MC) | 18:31(MC) | 18:51(MC) | 19:13(MC) | 19:35(MC) | 19:57(MC) | 20:19(MC) | 20:41(MC) | 21:03(MC) | 21:26(MC) | 21:49(MC) | 22:35(MC) | 23:40(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "1:00(MC) | 2:20(MC) | 4:20(MC) | 5:26(MC) | 5:43(MC) | 6:00(MC) | 6:16(MC) | 6:32(MC) | 6:48(MC) | 7:05(MC) | 7:21(MC) | 7:38(MC) | 7:55(MC) | 8:11(MC) | 8:28(MC) | 8:45(MC) | 9:02(MC) | 9:19(MC) | 9:36(MC) | 9:53(MC) | 10:10(MC) | 10:27(MC) | 10:44(MC) | 11:01(MC) | 11:18(MC) | 11:35(MC) | 11:52(MC) | 12:09(MC) | 12:26(MC) | 12:43(MC) | 13:01(MC) | 13:19(MC) | 13:37(MC) | 13:55(MC) | 14:13(MC) | 14:31(MC) | 14:49(MC) | 15:07(MC) | 15:25(MC) | 15:43(MC) | 16:01(MC) | 16:19(MC) | 16:37(MC) | 16:56(MC) | 17:14(MC) | 17:32(MC) | 17:50(MC) | 18:08(MC) | 18:26(MC) | 18:44(MC) | 19:02(MC) | 19:20(MC) | 19:38(MC) | 20:04(MC) | 20:30(MC) | 21:00(MC) | 21:30(MC) | 22:00(MC) | 22:37(MC) | 23:20(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "0:15(MC) | 1:00(MC) | 2:20(MC) | 4:20(MC) | 5:20(MC) | 5:50(MC) | 6:20(MC) | 6:50(MC) | 7:20(MC) | 7:50(MC) | 8:20(MC) | 8:50(MC) | 9:20(MC) | 9:50(MC) | 10:20(MC) | 10:50(MC) | 11:20(MC) | 11:50(MC) | 12:20(MC) | 12:50(MC) | 13:20(MC) | 13:50(MC) | 14:20(MC) | 14:50(MC) | 15:20(MC) | 15:50(MC) | 16:20(MC) | 16:50(MC) | 17:20(MC) | 17:50(MC) | 18:20(MC) | 18:50(MC) | 19:20(MC) | 19:50(MC) | 20:20(MC) | 20:50(MC) | 21:20(MC) | 21:50(MC) | 22:25(MC) | 23:00(MC) | 23:35(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 51,
        "name": "Maricá x Niterói (Saída Maricá)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "1:30(TA) | 4:35(TA) | 4:50(TA) | 5:05(TA) | 5:11(TA) | 5:17(TA) | 5:23(TA) | 5:29(MC) | 5:29(TA) | 5:35(TA) | 5:41(TA) | 5:47(TA) | 5:54(TA) | 6:02(TA) | 6:09(TA) | 6:17(TA) | 6:24(TA) | 6:32(TA) | 6:39(TA) | 6:47(TA) | 6:54(TA) | 7:02(TA) | 7:10(TA) | 7:19(TA) | 7:28(TA) | 7:37(TA) | 7:46(TA) | 7:56(TA) | 8:06(TA) | 8:16(TA) | 8:26(TA) | 8:36(TA) | 8:46(TA) | 8:56(TA) | 9:06(TA) | 9:16(TA) | 9:26(TA) | 9:36(TA) | 9:46(TA) | 9:56(TA) | 10:06(TA) | 10:16(TA) | 10:26(TA) | 10:36(TA) | 10:46(TA) | 10:56(TA) | 11:06(TA) | 11:16(TA) | 11:26(TA) | 11:36(TA) | 11:46(TA) | 11:56(TA) | 12:06(TA) | 12:16(TA) | 12:25(TA) | 12:35(TA) | 12:44(TA) | 12:54(TA) | 13:03(TA) | 13:12(TA) | 13:21(TA) | 13:31(TA) | 13:41(TA) | 13:50(TA) | 14:00(TA) | 14:10(TA) | 14:20(TA) | 14:30(TA) | 14:40(TA) | 14:50(TA) | 15:00(TA) | 15:10(TA) | 15:20(TA) | 15:30(TA) | 15:40(TA) | 15:50(TA) | 15:58(TA) | 16:07(TA) | 16:15(TA) | 16:24(TA) | 16:30 (MC) 16:32(TA) | 16:41(TA) | 16:49(TA) | 16:58(TA) | 17:07(TA) | 17:17(TA) | 17:27(TA) | 17:37(TA) | 17:47(TA) | 17:57(TA) | 18:07(TA) | 18:16(TA) | 18:26(TA) | 18:36(TA) | 18:46(TA) | 18:56(TA) | 19:05(TA) | 19:15(TA) | 19:24(TA) | 19:33(TA) | 19:42(TA) | 19:51(TA) | 19:59(TA) | 20:09(TA) | 20:18(TA) | 20:26(TA) | 20:35(TA) | 20:44(TA) | 20:53(TA) | 21:04(TA) | 21:15(TA) | 21:26(TA) | 21:43(TA) | 22:03(TA) | 22:25(TA) | 22:49(TA) | 23:15(TA) | 23:50(TA) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "1:30(TA) | 4:33(TA) | 5:22(TA) | 5:36(TA) | 5:49(TA) | 6:03(TA) | 6:16(TA) | 6:30(TA) | 6:43(TA) | 6:57(TA) | 7:10(TA) | 7:24(TA) | 7:37(TA) | 7:51(TA) | 8:04(TA) | 8:18(TA) | 8:31(TA) | 8:45(TA) | 8:58(TA) | 9:12(TA) | 9:25(TA) | 9:38(TA) | 9:52(TA) | 10:05(TA) | 10:19(TA) | 10:32(TA) | 10:45(TA) | 10:58(TA) | 11:11(TA) | 11:24(TA) | 11:37(TA) | 11:50(TA) | 12:03(TA) | 12:16(TA) | 12:29(TA) | 12:42(TA) | 12:54(TA) | 13:07(TA) | 13:18(TA) | 13:30(TA) | 13:42(TA) | 13:54(TA) | 14:06(TA) | 14:18(TA) | 14:30(TA) | 14:41(TA) | 14:53(TA) | 15:04(TA) | 15:16(TA) | 15:27(TA) | 15:38(TA) | 15:49(TA) | 16:00(TA) | 16:12(TA) | 16:24(TA) | 16:36(TA) | 16:48(TA) | 17:00(TA) | 17:12(TA) | 17:24(TA) | 17:36(TA) | 17:48(TA) | 18:00(TA) | 18:12(TA) | 18:24(TA) | 18:36(TA) | 18:48(TA) | 19:00(TA) | 19:13(TA) | 19:20(TA) | 19:27(TA) | 19:41(TA) | 19:55(TA) | 20:09(TA) | 20:23(TA) | 20:38(TA) | 20:55(TA) | 21:20(TA) | 21:45(TA) | 22:10(TA) | 22:35(TA) | 23:15(TA) | 23:55(TA) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "0:05(TA) | 1:30(TA) | 5:05(TA) | 5:35(TA) | 6:00(TA) | 6:23(TA) | 6:46(TA) | 7:10(TA) | 7:33(TA) | 7:57(TA) | 8:20(TA) | 8:43(TA) | 9:06(TA) | 9:29(TA) | 9:52(TA) | 10:16(TA) | 10:39(TA) | 11:03(TA) | 11:26(TA) | 11:50(TA) | 12:13(TA) | 12:37(TA) | 13:00(TA) | 13:24(TA) | 13:48(TA) | 14:12(TA) | 14:36(TA) | 15:00(TA) | 15:22(TA) | 15:44(TA) | 16:06(TA) | 16:28(TA) | 16:50(TA) | 17:11(TA) | 17:32(TA) | 17:53(TA) | 18:14(TA) | 18:35(TA) | 18:56(TA) | 19:17(TA) | 19:38(TA) | 19:59(TA) | 20:23(TA) | 20:47(TA) | 21:16(TA) | 21:50(TA) | 22:24(TA) | 22:59(TA) | 23:39(TA) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 52,
        "name": "Maricá x Niterói (Saída Niterói)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "0:17(TA) | 0:59(TA) | 2:45(TA) | 5:39(TA) | 6:00(TA) | 6:18(TA) | 6:37(TA) | 6:48(TA) | 6:59(TA) | 7:10(TA) | 7:20(TA) | 7:28(TA) | 7:36(TA) | 7:44(TA) | 7:52(TA) | 8:00(TA) | 8:08(TA) | 8:16(TA) | 8:24(TA) | 8:32(TA) | 8:40(TA) | 8:48(TA) | 8:49(MC) | 8:56(TA) | 9:04(TA) | 9:12(TA) | 9:20(TA) | 9:29(TA) | 9:40(TA) | 9:51(TA) | 10:02(TA) | 10:12(TA) | 10:22(TA) | 10:32(TA) | 10:42(TA) | 10:52(TA) | 11:02(TA) | 11:12(TA) | 11:22(TA) | 11:32(TA) | 11:42(TA) | 11:52(TA) | 12:03(TA) | 12:14(TA) | 12:25(TA) | 12:35(TA) | 12:46(TA) | 12:56(TA) | 13:06(TA) | 13:16(TA) | 13:26(TA) | 13:36(TA) | 13:46(TA) | 13:56(TA) | 14:06(TA) | 14:16(TA) | 14:27(TA) | 14:36(TA) | 14:46(TA) | 14:56(TA) | 15:06(TA) | 15:15(TA) | 15:24(TA) | 15:33(TA) | 15:42(TA) | 15:51(TA) | 16:00(TA) | 16:08(TA) | 16:17(TA) | 16:26(TA) | 16:34(TA) | 16:43(TA) | 16:51(TA) | 17:00(TA) | 17:07(TA) | 17:13(TA) | 17:20(TA) | 17:26(TA) | 17:33(TA) | 17:40(TA) | 17:47(TA) | 17:54(TA) | 18:01(TA) | 18:09(TA) | 18:17(TA) | 18:26(TA) | 18:34(TA) | 18:43(TA) | 18:52(TA) | 18:59(MC) |  19:01(TA) | 19:10(TA) | 19:19(TA) | 19:29(TA) | 19:38(TA) | 19:48(TA) | 19:57(TA) | 20:06(TA) | 20:15(TA) | 20:24(TA) | 20:33(TA) | 20:42(TA) | 20:51(TA) | 21:00(TA) | 21:08(TA) | 21:17(TA) | 21:25(TA) | 21:33(TA) | 21:42(TA) | 21:51(TA) | 22:00(TA) | 22:10(TA) | 22:20(TA) | 22:30(TA) | 22:40(TA) | 23:00(TA) | 23:24(TA) | 23:48(TA) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "0:01(TA) | 0:30(TA) | 1:05(TA) | 2:42(TA) | 5:49(TA) | 6:35(TA) | 6:50(TA) | 7:05(TA) | 7:20(TA) | 7:35(TA) | 7:49(TA) | 8:03(TA) | 8:17(TA) | 8:32(TA) | 8:46(TA) | 9:00(TA) | 9:13(TA) | 9:27(TA) | 9:40(TA) | 9:54(TA) | 10:07(TA) | 10:21(TA) | 10:34(TA) | 10:48(TA) | 11:01(TA) | 11:15(TA) | 11:29(TA) | 11:42(TA) | 11:55(TA) | 12:08(TA) | 12:21(TA) | 12:34(TA) | 12:47(TA) | 13:00(TA) | 13:12(TA) | 13:24(TA) | 13:36(TA) | 13:48(TA) | 14:00(TA) | 14:12(TA) | 14:24(TA) | 14:36(TA) | 14:48(TA) | 15:00(TA) | 15:12(TA) | 15:24(TA) | 15:36(TA) | 15:48(TA) | 16:00(TA) | 16:11(TA) | 16:22(TA) | 16:33(TA) | 16:44(TA) | 16:55(TA) | 17:06(TA) | 17:16(TA) | 17:27(TA) | 17:38(TA) | 17:48(TA) | 18:00(TA) | 18:12(TA) | 18:24(TA) | 18:37(TA) | 18:50(TA) | 19:03(TA) | 19:15(TA) | 19:28(TA) | 19:40(TA) | 19:53(TA) | 20:04(TA) | 20:18(TA) | 20:31(TA) | 20:45(TA) | 21:00(TA) | 21:00(TA) | 21:15(TA) | 21:30(TA) | 21:45(TA) | 22:00(TA) | 22:15(TA) | 22:40(TA) | 23:05(TA) | 23:30(TA) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "0:20(TA) | 0:49(TA) | 1:10(TA) | 2:42(TA) | 6:22(TA) | 6:48(TA) | 7:14(TA) | 7:41(TA) | 8:04(TA) | 8:27(TA) | 8:51(TA) | 9:14(TA) | 9:37(TA) | 10:00(TA) | 10:22(TA) | 10:44(TA) | 11:06(TA) | 11:29(TA) | 11:53(TA) | 12:17(TA) | 12:41(TA) | 13:05(TA) | 13:29(TA) | 13:53(TA) | 14:17(TA) | 14:41(TA) | 15:05(TA) | 15:28(TA) | 15:51(TA) | 16:14(TA) | 16:37(TA) | 17:00(TA) | 17:21(TA) | 17:43(TA) | 18:05(TA) | 18:27(TA) | 18:49(TA) | 19:11(TA) | 19:32(TA) | 19:53(TA) | 20:14(TA) | 20:35(TA) | 20:56(TA) | 21:17(TA) | 21:38(TA) | 21:59(TA) | 22:25(TA) | 22:55(TA) | 23:39(TA) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 53,
        "name": "Maricá x Rio do Ouro (Saída Maricá)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:00(MC) | 5:12(MC) | 5:24(MC) | 5:36(MC) | 5:48(MC) | 6:00(MC) | 6:12(MC) | 6:24(MC) | 6:37(MC) | 6:50(MC) | 7:03(MC) | 7:17(MC) | 7:31(MC) | 7:45(MC) | 7:59(MC) | 8:13(MC) | 8:27(MC) | 8:41(MC) | 8:55(MC) | 9:09(MC) | 9:23(MC) | 9:36(MC) | 9:50(MC) | 10:04(MC) | 10:18(MC) | 10:32(MC) | 10:47(MC) | 11:02(MC) | 11:17(MC) | 11:32(MC) | 11:47(MC) | 12:02(MC) | 12:17(MC) | 12:32(MC) | 12:47(MC) | 13:02(MC) | 13:17(MC) | 13:32(MC) | 13:47(MC) | 14:02(MC) | 14:17(MC) | 14:32(MC) | 14:47(MC) | 15:00(MC) | 15:12(MC) | 15:24(MC) | 15:36(MC) | 15:48(MC) | 16:00(MC) | 16:10(MC) | 16:20(MC) | 16:30(MC) | 16:40(MC) | 16:50(MC) | 17:00(MC) | 17:10(MC) | 17:20(MC) | 17:30(MC) | 17:40(MC) | 17:53(MC) | 18:07(MC) | 18:23(MC) | 18:40(MC) | 18:57(MC) | 19:15(MC) | 19:37(MC) | 20:05(MC) | 20:33(MC) | 21:04(MC) | 21:35(MC) | 22:10(MC) | 22:45(MC) | 23:20(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "0:15(MC) | 5:19(MC) | 5:37(MC) | 5:55(MC) | 6:10(MC) | 6:25(MC) | 6:40(MC) | 6:55(MC) | 7:08(MC) | 7:21(MC) | 7:33(MC) | 7:46(MC) | 7:58(MC) | 8:11(MC) | 8:23(MC) | 8:35(MC) | 8:47(MC) | 8:59(MC) | 9:11(MC) | 9:23(MC) | 9:34(MC) | 9:45(MC) | 9:56(MC) | 10:07(MC) | 10:18(MC) | 10:28(MC) | 10:39(MC) | 10:49(MC) | 11:01(MC) | 11:13(MC) | 11:25(MC) | 11:37(MC) | 11:49(MC) | 12:01(MC) | 12:14(MC) | 12:27(MC) | 12:39(MC) | 12:51(MC) | 13:03(MC) | 13:14(MC) | 13:25(MC) | 13:36(MC) | 13:47(MC) | 13:57(MC) | 14:08(MC) | 14:19(MC) | 14:30(MC) | 14:41(MC) | 14:52(MC) | 15:03(MC) | 15:14(MC) | 15:25(MC) | 15:35(MC) | 15:46(MC) | 15:57(MC) | 16:08(MC) | 16:19(MC) | 16:30(MC) | 16:40(MC) | 16:51(MC) | 17:02(MC) | 17:13(MC) | 17:24(MC) | 17:36(MC) | 17:48(MC) | 18:00(MC) | 18:15(MC) | 18:30(MC) | 18:45(MC) | 19:00(MC) | 19:15(MC) | 19:30(MC) | 19:46(MC) | 20:12(MC) | 20:38(MC) | 21:08(MC) | 21:38(MC) | 22:08(MC) | 22:38(MC) | 23:08(MC) | 23:38(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "0:15(MC) | 5:20(MC) | 5:46(MC) | 6:12(MC) | 6:37(MC) | 7:02(MC) | 7:26(MC) | 7:49(MC) | 8:09(MC) | 8:26(MC) | 8:43(MC) | 9:00(MC) | 9:17(MC) | 9:34(MC) | 9:52(MC) | 10:09(MC) | 10:27(MC) | 10:44(MC) | 11:02(MC) | 11:19(MC) | 11:36(MC) | 11:54(MC) | 12:12(MC) | 12:31(MC) | 12:50(MC) | 13:07(MC) | 13:24(MC) | 13:41(MC) | 13:58(MC) | 14:15(MC) | 14:32(MC) | 14:49(MC) | 15:05(MC) | 15:21(MC) | 15:37(MC) | 15:53(MC) | 16:09(MC) | 16:25(MC) | 16:40(MC) | 16:57(MC) | 17:15(MC) | 17:33(MC) | 17:51(MC) | 18:10(MC) | 18:29(MC) | 18:48(MC) | 19:07(MC) | 19:27(MC) | 19:47(MC) | 20:07(MC) | 20:27(MC) | 21:05(MC) | 21:40(MC) | 22:28(MC) | 23:18(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 54,
        "name": "Maricá x Rio do Ouro (Saída Rio do Ouro)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "4:25(MC) | 5:07(MC) | 5:30(MC) | 5:45(MC) | 6:00(MC) | 6:12(MC) | 6:24(MC) | 6:38(MC) | 6:52(MC) | 7:06(MC) | 7:19(MC) | 7:33(MC) | 7:46(MC) | 7:59(MC) | 8:13(MC) | 8:27(MC) | 8:41(MC) | 8:55(MC) | 9:10(MC) | 9:25(MC) | 9:40(MC) | 9:55(MC) | 10:10(MC) | 10:26(MC) | 10:42(MC) | 11:00(MC) | 11:17(MC) | 11:33(MC) | 11:49(MC) | 12:05(MC) | 12:22(MC) | 12:39(MC) | 12:55(MC) | 13:11(MC) | 13:27(MC) | 13:43(MC) | 13:59(MC) | 14:16(MC) | 14:34(MC) | 14:52(MC) | 15:10(MC) | 15:29(MC) | 15:46(MC) | 16:03(MC) | 16:18(MC) | 16:33(MC) | 16:46(MC) | 17:00(MC) | 17:13(MC) | 17:27(MC) | 17:41(MC) | 17:55(MC) | 18:08(MC) | 18:20(MC) | 18:32(MC) | 18:44(MC) | 18:57(MC) | 19:10(MC) | 19:23(MC) | 19:36(MC) | 19:56(MC) | 20:19(MC) | 20:47(MC) | 21:20(MC) | 21:57(MC) | 22:34(MC) | 23:40(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "0:10(MC) | 4:20(MC) | 5:20(MC) | 5:54(MC) | 6:10(MC) | 6:26(MC) | 6:42(MC) | 6:57(MC) | 7:11(MC) | 7:25(MC) | 7:38(MC) | 7:50(MC) | 8:01(MC) | 8:13(MC) | 8:24(MC) | 8:35(MC) | 8:46(MC) | 8:57(MC) | 9:08(MC) | 9:20(MC) | 9:32(MC) | 9:44(MC) | 9:56(MC) | 10:08(MC) | 10:20(MC) | 10:33(MC) | 10:46(MC) | 10:59(MC) | 11:12(MC) | 11:25(MC) | 11:38(MC) | 11:51(MC) | 12:04(MC) | 12:17(MC) | 12:30(MC) | 12:43(MC) | 12:56(MC) | 13:09(MC) | 13:22(MC) | 13:35(MC) | 13:48(MC) | 14:01(MC) | 14:14(MC) | 14:27(MC) | 14:40(MC) | 14:53(MC) | 15:06(MC) | 15:19(MC) | 15:32(MC) | 15:45(MC) | 15:58(MC) | 16:11(MC) | 16:24(MC) | 16:37(MC) | 16:50(MC) | 17:03(MC) | 17:16(MC) | 17:29(MC) | 17:42(MC) | 17:55(MC) | 18:08(MC) | 18:21(MC) | 18:34(MC) | 18:47(MC) | 19:02(MC) | 19:19(MC) | 19:40(MC) | 20:05(MC) | 20:30(MC) | 21:00(MC) | 21:30(MC) | 22:00(MC) | 22:30(MC) | 23:00(MC) | 23:30(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "0:10(MC) | 5:23(MC) | 5:47(MC) | 6:11(MC) | 6:35(MC) | 6:59(MC) | 7:23(MC) | 7:42(MC) | 7:59(MC) | 8:16(MC) | 8:32(MC) | 8:48(MC) | 9:06(MC) | 9:24(MC) | 9:42(MC) | 10:01(MC) | 10:21(MC) | 10:41(MC) | 11:01(MC) | 11:21(MC) | 11:43(MC) | 12:05(MC) | 12:26(MC) | 12:47(MC) | 13:07(MC) | 13:27(MC) | 13:46(MC) | 14:06(MC) | 14:28(MC) | 14:50(MC) | 15:12(MC) | 15:34(MC) | 15:56(MC) | 16:18(MC) | 16:40(MC) | 17:02(MC) | 17:24(MC) | 17:46(MC) | 18:10(MC) | 18:34(MC) | 18:59(MC) | 19:25(MC) | 19:51(MC) | 20:18(MC) | 20:45(MC) | 21:12(MC) | 21:39(MC) | 22:05(MC) | 22:32(MC) | 23:20(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 55,
        "name": "Maricá x Rio do Ouro - Via Flamengo (Saída Maricá)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "6:00(MC) | 6:52(MC) | 7:35(MC) | 11:28(MC) | 12:10(MC) | 16:00(MC) | 17:32(MC) | 18:28(MC) | 20:30(MC) | 22:10(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "6:00(MC) | 6:45(MC) | 7:35(MC) | 11:17(MC) | 12:10(MC) | 17:30(MC) | 18:31(MC) | 20:30(MC) | 22:15(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "6:00(MC) | 6:52(MC) | 7:32(MC) | 11:17(MC) | 12:15(MC) | 17:30(MC) | 18:33(MC) | 20:31(MC) | 22:14(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 56,
        "name": "Maricá x Rio do Ouro - Via Flamengo (Saída Rio do Ouro)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "6:04(MC) | 12:22(MC) | 17:00(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "6:04(MC) | 12:21(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "6:00(MC) | 12:21(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 57,
        "name": "Maricá x Rio do Ouro - Via São José (Saída Maricá)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Não há saída de Maricá no momento."
          }
        ]
      },
      {
        "id": 58,
        "name": "Maricá x Rio do Ouro - Via São José (Saída São José)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "6:35(MC) | 7:16(MC) | 8:04(MC) | 11:00(MC) | 11:40(MC) | 13:10(MC) | 14:30(MC) | 15:28(MC) | 16:25(MC) | 17:33(MC) | 18:35(MC) | 19:35(MC) | 20:58(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "6:33(MC) | 7:20(MC) | 7:45(MC) | 10:59(MC) | 11:50(MC) | 13:10(MC) | 14:30(MC) | 15:30(MC) | 16:30(MC) | 17:30(MC) | 18:30(MC) | 19:30(MC) | 20:57(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "6:30(MC) | 7:20(MC) | 10:48(MC) | 11:50(MC) | 13:10(MC) | 14:29(MC) | 15:30(MC) | 16:30(MC) | 17:30(MC) | 18:30(MC) | 19:31(MC) | 20:57(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 59,
        "name": "P.Negra x Niterói (Saída Ponta Negra)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "05:45(MC)",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 60,
        "name": "P.Negra x Niterói (Saída Niterói)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "17:00(TA)",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 61,
        "name": "Ponta Negra x Castelo (Saída Ponta Negra)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "3:50(TA) | 4:10(TA) | 4:30(TA) | 4:40(TA) | 4:50(TA) | 5:00(TA) | 5:25(TA) | 5:50(TA) | 6:40(TA) | 6:40(MC)CAN(Via M.Rib) | 7:00(TA) | 7:50(TA) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "5:30(TA) | 6:30(TA) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "16:00(TA) | 17:00 (TA) | 18:00(TA) | 19:00(TA) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 62,
        "name": "Ponta Negra x Castelo (Saída Castelo)",
        "iconURL": "img/bus/viagem-2.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "16:09(TA) | 16:36(TA) | 17:02(TA) | 17:36(TA) | 18:02(TA) | 18:35(TA) | 18:44(MC)Candelária Via M.Rib | 19:30(TA) | 20:30(TA) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "14:30(TA)",
                "grandChildCount": 9
              }
            ]
          }
        ]
      },
      {
        "id": 63,
        "name": "R.128 - Via Rua 034 x Recanto (Saída Itaipuaçu - Recanto)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "11:00(MC) | 11:59(MC) | 13:00(MC) | 18:00(MC) | 22:30(MC) | 23:30(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "0:00(MC) | 5:30(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "0:00(MC) | 5:30(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 64,
        "name": "R.128 - Via Rua 034 x Recanto (Saída R.126 Via Rua 034)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "7:00(MC) | 10:00(MC) | 12:00(MC) | 12:55(MC) | 17:00(MC) | 18:00(MC) | 22:30(MC) | 23:30(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "5:50(MC) | 23:00(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "5:50(MC) | 23:00(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 65,
        "name": "R.128 x Rio do Ouro - Via Barroco (Saída Rua 126 - Barroco)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "18:51(MC) | 19:55 (MC)",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 66,
        "name": "R.128 x Rio do Ouro - Via Barroco (Saída Rio do Ouro)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "06:20(MC) | 18:00(MC) | 19:02(MC) | 21:10(MC)",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 67,
        "name": "Santa Paula x Castelo (Saída Santa Paula)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:20(TA)",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 68,
        "name": "Terminal x Recanto (Saída Itaipuaçu - Recanto)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:45(MC) | 13:51(MC) | 14:43(MC) | 15:53(MC) | ",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 69,
        "name": "Terminal x Recanto (Saída Terminal de Itaipuaçu)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "13:25(MC) | 14:20(MC) | 15:21(MC) | ",
                "grandChildCount": 24
              }
            ]
          }
        ]
      },
      {
        "id": 70,
        "name": "Várzea das Moças x Niterói - Via Maria Paula (Saída Varzea da Moças)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "4:35(MC) | 4:56(MC) | 5:11(MC) | 5:26(MC) | 5:40(MC) | 5:54(MC) | 6:08(MC) | 6:22(MC) | 6:36(MC) | 6:49(MC) | 7:09(MC) | 7:28(MC) | 7:54(MC) | 8:20(MC) | 8:46(MC) | 9:13(MC) | 9:37(MC) | 10:04(MC) | 10:33(MC) | 11:09(MC) | 11:39(MC) | 12:10(MC) | 12:40(MC) | 13:11(MC) | 13:42(MC) | 14:12(MC) | 14:40(MC) | 15:00(MC) | 15:20(MC) | 15:40(MC) | 16:00(MC) | 16:20(MC) | 16:40(MC) | 17:00(MC) | 17:20(MC) | 17:42(MC) | 18:06(MC) | 18:30(MC) | 19:00(MC) | 19:30(MC) | 20:00(MC) | 20:30(MC) | 21:05(MC) | 21:40(MC) | 22:15(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "5:30(MC) | 5:59(MC) | 6:28(MC) | 6:57(MC) | 7:26(MC) | 7:54(MC) | 8:23(MC) | 8:52(MC) | 9:20(MC) | 9:50(MC) | 10:20(MC) | 10:50(MC) | 11:20(MC) | 11:50(MC) | 12:20(MC) | 12:50(MC) | 13:20(MC) | 13:50(MC) | 14:19(MC) | 14:50(MC) | 15:21(MC) | 15:52(MC) | 16:22(MC) | 16:52(MC) | 17:22(MC) | 17:52(MC) | 18:22(MC) | 18:52(MC) | 19:22(MC) | 19:52(MC) | 20:22(MC) | 20:52(MC) | 21:22(MC) | 21:52(MC) | 22:22(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "6:10(MC) | 6:44(MC) | 7:17(MC) | 7:50(MC) | 8:20(MC) | 8:50(MC) | 9:20(MC) | 9:50(MC) | 10:20(MC) | 10:50(MC) | 11:20(MC) | 11:50(MC) | 12:20(MC) | 12:50(MC) | 13:20(MC) | 13:50(MC) | 14:20(MC) | 14:48(MC) | 15:16(MC) | 15:44(MC) | 16:12(MC) | 16:39(MC) | 17:07(MC) | 17:37(MC) | 18:06(MC) | 18:34(MC) | 19:03(MC) | 19:34(MC) | 20:04(MC) | 20:34(MC) | 21:04(MC) | 21:34(MC) | 22:10(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 71,
        "name": "Várzea das Moças x Niterói - Via Maria Paula (Saída Niterói)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "5:21(MC) | 5:48(MC) | 6:15(MC) | 6:45(MC) | 7:15(MC) | 7:45(MC) | 8:16(MC) | 8:37(MC) | 8:58(MC) | 9:19(MC) | 9:40(MC) | 10:01(MC) | 10:22(MC) | 10:49(MC) | 11:16(MC) | 11:44(MC) | 12:14(MC) | 12:44(MC) | 13:16(MC) | 13:48(MC) | 14:18(MC) | 14:48(MC) | 15:15(MC) | 15:42(MC) | 16:09(MC) | 16:27(MC) | 16:45(MC) | 17:03(MC) | 17:21(MC) | 17:38(MC) | 18:00(MC) | 18:22(MC) | 18:45(MC) | 19:08(MC) | 19:31(MC) | 19:54(MC) | 20:21(MC) | 20:48(MC) | 21:15(MC) | 21:42(MC) | 22:09(MC) | 22:36(MC) | 23:10(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "6:18(MC) | 6:48(MC) | 7:18(MC) | 7:48(MC) | 8:19(MC) | 8:50(MC) | 9:20(MC) | 9:50(MC) | 10:20(MC) | 10:50(MC) | 11:20(MC) | 11:49(MC) | 12:18(MC) | 12:47(MC) | 13:16(MC) | 13:46(MC) | 14:17(MC) | 14:49(MC) | 15:20(MC) | 15:48(MC) | 16:18(MC) | 16:48(MC) | 17:18(MC) | 17:47(MC) | 18:16(MC) | 18:44(MC) | 19:14(MC) | 19:42(MC) | 20:11(MC) | 20:41(MC) | 21:10(MC) | 21:38(MC) | 22:07(MC) | 22:37(MC) | 23:07(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "7:00(MC) | 7:33(MC) | 8:07(MC) | 8:41(MC) | 9:11(MC) | 9:41(MC) | 10:11(MC) | 10:41(MC) | 11:10(MC) | 11:40(MC) | 12:10(MC) | 12:40(MC) | 13:10(MC) | 13:41(MC) | 14:11(MC) | 14:41(MC) | 15:11(MC) | 15:41(MC) | 16:11(MC) | 16:40(MC) | 17:08(MC) | 17:38(MC) | 18:06(MC) | 18:35(MC) | 19:05(MC) | 19:35(MC) | 20:05(MC) | 20:35(MC) | 21:05(MC) | 21:35(MC) | 22:05(MC) | 22:35(MC) | 23:05(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 72,
        "name": "Várzea das Moças x Niterói - Via Tribobó (Saída Varzea da Moças)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "1:10(MC) | 2:40(MC) | 4:20(MC) | 4:41(MC) | 4:50(MC) | 4:59(MC) | 5:04(MC) | 5:14(MC) | 5:18(MC) | 5:22(MC) | 5:26(MC) | 5:30(MC) | 5:34(MC) | 5:52(MC) | 6:08(MC) | 6:32(MC) | 23:39(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "1:11(MC) | 2:50(MC) | 4:20(MC) | 4:55(MC) | 5:18(MC) | 5:25(MC) | 5:39(MC) | 6:00(MC) | 23:39(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "1:10(MC) | 2:50(MC) | 4:20(MC) | 4:48(MC) | 5:05(MC) | 5:30(MC) | 5:51(MC) | 6:12(MC) | 23:39(MC) | ",
                "grandChildCount": 8
              }
            ]
          }
        ]
      },
      {
        "id": 73,
        "name": "Várzea das Moças x Niterói - Via Tribobó (Saída Niterói)",
        "iconURL": "img/bus/urbano1.png",
        "childItems": [
          {
            "childName": "Dias Úteis",
            "grandChildren": [
              {
                "grandChildName": "0:00(MC) | 0:30(MC) | 1:50(MC) | 3:30(MC) | 7:30(MC) | 8:16(MC) | 23:30(MC) | ",
                "grandChildCount": 24
              }
            ]
          },
          {
            "childName": "Sábado",
            "grandChildren": [
              {
                "grandChildName": "0:30(MC) | 1:50(MC) | 3:30(MC) | 5:10(MC) | ",
                "grandChildCount": 9
              }
            ]
          },
          {
            "childName": "Domingo",
            "grandChildren": [
              {
                "grandChildName": "0:30(MC) | 1:50(MC) | 3:30(MC) | 5:10(MC) | 23:50(MC) | ",
                "grandChildCount": 8
              }
            ]
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
