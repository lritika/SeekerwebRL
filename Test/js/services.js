app.controller('services',function($scope,$http,myConstants){
fetch();
//getServicesbyloc();
console.log("Service Contoller suceesfully loaded......");

 

                function fetch(){
                    
                        console.log("Fetch Service Contoller suceesfully loaded......");


                        console.log("getServicesbyloc suceesfully loaded......");



                            $http({

                                
                                
                                url:myConstants.url+"/location/services?latitude=40.5827152&longitude=-74.336",
                                method:"GET",
                                

                            }).success(function(response){
                                $scope.details=response.data;
                            // console.log($scope.details);

                            }).error(function(response){
                                console.log(response);

                            })
                }

$scope.add = function() {
   var latt=$scope.latitude;
  
  console.log(latt);
 
}
// $scope.getServicesbyloc=function(){
//    console.log("getServicesbyloc suceesfully loaded......");

//             $http({
//                 url:myConstants.url+"/location/services",
//                 method:"GET",
//                 data:{
//                 latitude:$scope.username,
//                 longitude:$scope.password,
                
//             }

//             }).success(function(response){

//                 console.log(response);

//             }).error(function(response){
//                 console.log(response);

//             })

//     };

    


});