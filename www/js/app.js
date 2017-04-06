(function(){

var app = angular.module('starter', ['ionic']);

//my object that can be reached everywhere in the iffe function
var myinfo = 
{
  first: '',
  surname: '',
  phone: '',
  email: '',
  checkin: '',
  checkout: '',
  mail: '',
  children: '0',
  adults: '1',
  roomid: ''
};

//Creates the controller
app.controller('myCtrl', function($scope, $http, $state){

  //Getting the data from the json file
  $http.get('myjson/data.json').success(function (data){
    $scope.database = data;
  });

  //Takes the info from info and puts into info so I can use it from the scope with angular
  $scope.info = myinfo;

  //Myform objects
  $scope.infoForm = {};
  $scope.startForm = {};

  //Takes the parameterobject and put it into the roomid spot. 
  $scope.gettheobject = function(thisobject){
    myinfo.roomid = thisobject;
  }
  
  //A funktion that restarts the app
  $scope.restartApp = function(){

    window.location = "index.html"; 

  }

  //Gets the currentdate and adds it to the scope
  $scope.currentdate = new Date();



});


//My lovely router that redirection myviews
app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('book', {
    url: '/book',
    templateUrl: 'myviews/start.html',
    controller: 'myCtrl'
  });

  $stateProvider.state('list', {
    url: '/list',
    templateUrl: 'myviews/list.html',
    controller: 'myCtrl'
  });

  $stateProvider.state('receipt', {
    url: '/receipt',
    templateUrl: 'myviews/receipt.html',
    controller: 'myCtrl'
  });

  $stateProvider.state('room', {
    url: '/room/:roomID',
    templateUrl: 'myviews/room.html',
    controller: 'myCtrl'
  });

  $stateProvider.state('info', {
    url: '/info',
    templateUrl: 'myviews/info.html',
    controller: 'myCtrl'
  });

  //Standard redirection
  $urlRouterProvider.otherwise('/book');

});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

}());