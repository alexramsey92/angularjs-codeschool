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
	// make the first tab displayed equal to tab with the value of 1
	this.tab = 1;
	// set the tab by passing in the number of the current selection
	this.selectTab = function(setTab) {
		this.tab = setTab;
	}
	// check if the tab is selected or not at that moment and return a boolean here
	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	}
})

  app.controller('GalleryController', function() {
    this.imageIndex = 0;
    this.currentImageChange = function(imageNumber) {
      console.log(imageNumber);
      this.imageIndex = imageNumber || 0;
    };
  });

var gems = [

{
	name: 'Azurite', 
	price: 2.95, 
	description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.',
	canPurchase: true,
	soldOut: true,
	images: [
      'img/gem-02.gif',
      'img/gem-05.gif',
      'img/gem-09.gif'
	]
},

{
	name: 'Bloodstone', 
	price: 5.95, 
	description: 'Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.',
	canPurchase: true,
	soldOut: false,
	images: [
      'img/gem-01.gif',
      'img/gem-03.gif',
      'img/gem-04.gif'
	]
}

];


})();

