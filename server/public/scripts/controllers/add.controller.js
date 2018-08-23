myApp.controller('AddController', function ($http) {
    console.log('AddController hit');

    const ac = this;
    ac.goods = [];

    getItems();

    //addItem() will add a new item to the bakery list
    ac.addItem = function() {
        $http({
            method: 'POST',
            url: '/addItem',
            data: {
                name: ac.name,
                baked_types_id: ac.baked_types_id,
                baked_date: ac.baked_date,
                eat_by: ac.eat_by,
                image_url: ac.image_url
            }
        }).then(function (response) {
            alert('Bakery item successfully added!');
            getItems();
        }).catch(function (error) {
            alert('Unable to add bakery item!');
            console.log('error in addItem', error);
        }); //end of POST
    }; //end of addItem
    
    //empty input fields after submission
    ac.name = '';
    ac.baked_types_id = '';
    ac.baked_date = '';
    ac.eat_by = '';
    ac.image_url = '';

    function getItems() {
        console.log('in getItems');
        $http({
            method: 'GET',
            url: '/add'
        }).then(function (response) {
            ac.goods = response.data;
            console.log(response);
            
        }).catch(function (error) {
            alert('Unable to get baked goods!');
            console.log('error in getItems', error);
        }); //end of GET
    }; //end of getItems

}); //end of controller