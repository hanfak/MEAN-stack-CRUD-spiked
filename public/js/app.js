"use strict";

(function(){
  angular
  .module("tagAnything", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .factory("Product", productFactory)
  .controller("productsIndexController", productsIndexCtrl)
  .controller("productsShowController", productsShowCtrl)
  .controller("productsNewController", productsNewCtrl);

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
    .state("productShow", {
      url:      "/products/:name",
      templateUrl:  "/html/products-show.html",
      controller:   "productsShowController",
      controllerAs: "pShowVM"
    })
    .state("productNew", {
      url:      "/new",
      templateUrl:  "/html/products-new.html",
      controller:   "productsNewController",
      controllerAs: "pNewVM"
    });
    $urlRouterProvider.otherwise("/");
  }

  productFactory.$inject = ["$resource"];
  function productFactory($resource){
    var Product = $resource("/api/products");
    return Product;
  }

  productsIndexCtrl.$inject = ["Product"];
  function productsIndexCtrl(Product){
    var vm  = this;
    vm.products = Product.query();
   }

  productsNewCtrl.$inject = ["Product"];
  function productsNewCtrl(Product, $location){
    var vm  = this;
    vm.create = function(){
     Product.save(vm.newProduct);
    };
  }

  productsShowCtrl.$inject = ["$stateParams"];
  function productsShowCtrl($stateParams){
    var vm        = this;
    vm.product    = $stateParams;
  }
})();
