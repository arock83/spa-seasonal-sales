console.log("season-sales.js loaded");

var productsRequest = new XMLHttpRequest();
var categoriesRequest = new XMLHttpRequest();
var products;
var categories;
var productList = document.getElementById("productList");

productsRequest.addEventListener("load", productsLoad);
categoriesRequest.addEventListener("load", categoriesLoad);
productsRequest.addEventListener("error", loadError);
categoriesRequest.addEventListener("error", loadError);

function productsLoad(event) {
	console.log("products JSON loaded");
	products = JSON.parse(event.target.responseText);
	console.log(products);
	createList(products);
}

function categoriesLoad(event) {
	console.log("categories JSON loaded");
	categories = JSON.parse(event.target.responseText);
	console.log(categories);
}

function loadError(event) {
	console.log("there was an error loading a json file");
}
productsRequest.open("GET", "products.json");
categoriesRequest.open("GET", "categories.json");
productsRequest.send();
categoriesRequest.send();

function createList(object) {
	var list = `<h1>Products</h1>`;
	var items = object.products;
	for (n=0;n<items.length;n+=1) {
		console.log(items[n]);
		list += `<h3>`+items[n].name+`</h3>`;
		list += `<p>`+items[n].price+`</p>`;
		list += `<p>`+items[n].category_id+`</p>`;
	}
	productList.innerHTML = list;
};

