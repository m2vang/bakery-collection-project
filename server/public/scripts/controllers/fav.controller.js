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

    fc.removeFav = function (favId) {
        console.log('in removeFav', favId);
        $http({
            method: 'DELETE',
            url: '/fav/deleteFavs/' + favId
        }).then(function (response) {
            alert('Bakery fav deleted!');
            getFavs();
        }).catch(function (error) {
            alert('Unable to delete fav!');
            console.log('error in removeFav', error);
        }); //end of DELETE
    }; //end of removeType
}); //end of controller