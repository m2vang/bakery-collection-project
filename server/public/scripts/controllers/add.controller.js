myApp.controller('AddController', function ($http) {
    console.log('AddController hit');
    //let now = moment();
    const ac = this;
    ac.goods = [];
    ac.types = [];
    //run getItems() & getTypes when page loads
    getItems();
    getTypes();

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

        //empty input fields after submission
        ac.name = '';
        ac.baked_types_id = '';
        ac.baked_date = '';
        ac.eat_by = '';
        ac.image_url = '';
    }; //end of addItem

    //remove item by its id
    ac.removeItem = function(items) {
        console.log(items);
        $http({
            method: 'DELETE',
            url: '/delete/' + items
        }).then(function (response) {
            alert('Bakery item deleted!');
            getItems();
        }).catch(function (error) {
            alert('Unable to delete item!');
            console.log('error in removeItem', error);
        }); //end of DELETE
    }; //end of removeItem
    
    //getItems() will get all of the bakery items
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

    //getTypes() will get all of the types of bakery items
    function getTypes() {
        console.log('in getTypes');
        $http({
            method: 'GET',
            url: '/manage'
        }).then(function (response) {
            ac.types = response.data;
            console.log(response.data);
        }).catch(function (error) {
            alert('Unable to get bakery types!');
            console.log('error in getTypes', error);
        }); //end of GET
    }; //end of getTypes

}); //end of controller