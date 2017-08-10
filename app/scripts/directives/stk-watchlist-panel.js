'use strict';

/**
 * @ngdoc directive
 * @name learningCrazeApp.directive:stkWatchlistPanel
 * @description
 * # stkWatchlistPanel
 */
angular.module('learningCrazeApp')
  .directive('stkWatchlistPanel', function ($location, $modal, WatchlistService) {
    return {
      template: 'views/Helloworld.html',
      restrict: 'E',
      scope:[],
      link: function ($scope) {
        //[2] Initialize variables
        $scope.watchlist ={};
        var addListModal = $modal({
          scope:$scope,
          template:'views/addlistmodal.html',
          show:false
        });
        //[3] Bind model from service to this scope
        $scope.watchlists=WatchlistService.query();
        //[4] Display add list modal
        
      }
    };
  });
