// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

//angular.module('starter', ['ionic','starter.controllers','ngCordova'])
angular.module('starter', ['ionic','starter.controllers','ngCordova', 'starter.services','ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  
  .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html',
          controller: 'settingsCtrl'
        }
         
      }
    })
  
     .state('app.ToDo1', {
      url: '/ToDo1',
      views: {
        'menuContent': {
          templateUrl: 'templates/List1.html',
          controller: 'List1Ctrl'
        }
           
      }
    })
  
  .state('app.ToDo2', {
      url: '/ToDo2',
      views: {
        'menuContent': {
          templateUrl: 'templates/List2.html',
          controller: 'List2Ctrl'
        }
          
      }
    })
  
  .state('app.ToDo3', {
      url: '/ToDo3',
      views: {
        'menuContent': {
          templateUrl: 'templates/List3.html',
          controller: 'List3Ctrl'
        }
           
      }
  
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/settings');
});
