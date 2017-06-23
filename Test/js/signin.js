app.controller('signin',function($scope,$http,myConstants){

console.log("Contoller sucees");
$scope.login=function(){
   

            $http({
                url:myConstants.url+"/auth/login",
                method:"POST",
                data:{
                email:$scope.username,
                password:$scope.password,
                current_role:"SEEKER",
                app_version:"1.0",
                device_token:"WEB TOKEN",
                device_type:"IOS",
                time_zone:"530"
            }

            }).success(function(response){

                console.log(response);

            }).error(function(response){
                console.log(response);

            })

    };

    


});