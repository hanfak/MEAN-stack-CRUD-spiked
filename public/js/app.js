"use strict";

(function(){
  angular
  .module("tagAnything", [
    "ui.router"
  ])
  .config(Router)
  .controller("productsIndexController", productsIndexCtrl);

  Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
  function Router($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("productsIndex", {
      url:      "/",
      templateUrl: "html/products-index.html",
      controller:   "productsIndexController",
      controllerAs: "pIndexVM"
    })
    .state("test", {
      url:      "/test",
      templateUrl: 'test.html'
    });
    $urlRouterProvider.otherwise("/");
  }

  function productsIndexCtrl(){
    var vm  = this;
    vm.name = 'han';
   }
})();
