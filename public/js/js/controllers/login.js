function LoginController(t,n,o){this.credentials={},this.authenticate=function(e){t.authenticate(e).then(function(){o.$broadcast("loggedIn"),n.go("search")})},this.submit=function(){t.login(this.credentials,{url:"/api/login"}).then(function(){o.$broadcast("loggedIn"),n.go("search")})}}angular.module("TravellyApp").controller("LoginController",LoginController),LoginController.$inject=["$auth","$state","$rootScope"];