app.controller('signup',function($scope,$http,myConstants){

console.log("signup Contoller sucees");
$scope.signup=function(){
   

            $http({
                url:myConstants.url+"/users/userSignUp",
                method:"POST",
                data:{
                first_name:$scope.fname,
                last_name:$scope.lname,
                address:{
                    Address1:'471 Curtis Avenue',
                    Address2:'',
                    City:'Chandigarh',
                    State :'Chandigarh',

                    Country :'India',
                    ZipCode:$scope.location
                },
                locationLatitude:'30.44',
                locationLongitude:'76.47',
                mobile:$scope.mobile,
                countryCode:'+91',
                reg_as:'SEEKER',
                email:$scope.email,
                password:$scope.password,
                dob:$scope.dob,
                
                app_version:"1.0",
                device_token:"WEB TOKEN",
                device_type:"IOS",
                time_zone:"530",
                seeker_profile_type:'Individual',
                // profilePhoto:$scope.file
                // 'fileUpload.uploadFileToUrl($scope.myFile, '/images')'
            }

            }).success(function(response){

                console.log(response);

            }).error(function(response){
                console.log(response);

            })

    };
  

    


});