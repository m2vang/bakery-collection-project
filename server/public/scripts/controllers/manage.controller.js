myApp.controller('ManageController', function ($http) {
    console.log('ManageController hit');

    const mc = this;
    mc.types = [];

    mc.addType = function() {
        $http({
            method: 'POST',
            url: '/manage/addType',
            data: { types: mc.type }
        }).then(function (response) {
            alert('New bakery type option added!');
        }).catch(function (error) {
            alert('Unable to add bakery type option!');
            console.log('error in addType', error);
        }); //end of POST

        //empty type input field
        //mc.type = '';
    }; //end of addType

}); //end of controller