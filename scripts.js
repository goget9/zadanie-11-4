function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var galaxyS6 = new Phone("Samsung", 2500, "black");
var iPhone6S = new Phone("Apple", 3500, "silver");
var one = new Phone("OnePlus", 2300, "black");

galaxyS6.printInfo();
iPhone6S.printInfo();
one.printInfo();
