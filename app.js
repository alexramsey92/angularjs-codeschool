(function(){
// Define the Angular Application
var app = angular.module('store', []);
	// try to Define a few handy constants
	//app.constant('addCart', 'Add To Cart');

// Define the Controller
app.controller('StoreController', function(){
	this.products = gems;
});

app.controller('PanelController', function(){
	this.tab = 1;
	this.selectTab = function(setTab) {
		this.tab = setTab;
	}
	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	}
})

var gems = [

{
	name: 'Azurite', 
	price: 2.95, 
	description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.',
	canPurchase: true,
	soldOut: true,
	images: [{
      0: 'img/gem-02.gif',
      1: 'img/gem-05.gif',
      2: 'img/gem-09.gif'
	}]
},

{
	name: 'Bloodstone', 
	price: 5.95, 
	description: 'Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.',
	canPurchase: true,
	soldOut: false,
	images: [{
      0: 'img/gem-01.gif',
      1: 'img/gem-03.gif',
      2: 'img/gem-04.gif'
	}]
}

];


})();

