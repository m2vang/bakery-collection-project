myApp.controller('ManageController', function ($http) {
    console.log('ManageController hit');

    const mc = this;
    mc.types = [];

    getTypes();

    mc.addType = function() {
        $http({
            method: 'POST',
            url: '/manage/addType',
            data: { types: mc.type }
        }).then(function (response) {
            alert('New bakery type option added!');
            getTypes();
        }).catch(function (error) {
            alert('Unable to add bakery type option!');
            console.log('error in addType', error);
        }); //end of POST

        //empty type input field
        mc.type = '';
    }; //end of addType

    function getTypes() {
        console.log('in getTypes');
        $http({
            method: 'GET',
            url: '/manage'
        }).then(function (response) {
            mc.types = response.data;
            console.log(response.data);
        }).catch(function (error) {
            alert('Unable to get bakery types!');
            console.log('error in getTypes', error);
        }); //end of GET
    }; //end of getTypes

}); //end of controller