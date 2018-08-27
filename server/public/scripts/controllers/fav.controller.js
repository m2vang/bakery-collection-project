myApp.controller('FavController', function ($http) {
    console.log('FavController hit');
    
    const fc = this;
    fc.favGoods = [];
    getFavs();

    function getFavs() {
        console.log('in getFavs');
        $http({
            method: 'GET',
            url: '/fav'
        }).then(function (response) {
            console.log('response.data', response);
            fc.favGoods = response.data;
        }).catch(function (error) {
            alert('Unable to get fav baked goods!');
            console.log('error in getItems-fav', error);
        }); //end of GET
    }; //end of getItems
}); //end of controller