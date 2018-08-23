myApp.controller('AddController', function ($http) {
    console.log('AddController hit');

    const ac = this;

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
        }).catch(function (error) {
            alert('Unable to add bakery item!');
            console.log('error in addItem', error);
        }); //end of POST

    }; //end of addItem
    

    
}); //end of controller