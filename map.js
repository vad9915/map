var map_names = new Map();
var map_prices = new Map();
var map_time = new Map();

map_names.set("Acer", "Nitro 5");
map_names.set("Lenovo", "Ideapad");
map_names.set("HP", "Pavilion");

map_prices.set(30000, "Acer");
map_prices.set(13000, "Lenovo");
map_prices.set(19000, "HP");

map_time.set(5, "Acer");
map_time.set(10, "Lenovo");
map_time.set(12, "HP");

var c = 0;
var min_price, max_price;
var name_min_price, name_max_price;

for (let key of map_prices.keys()){
    if (c === 0){
        c +=1;
        min_price = key;
        max_price = key;
        name_min_price = map_prices.get(key);
        name_max_price = map_prices.get(key);
    }
    else {
        if (max_price < key){
            max_price = key;
            name_max_price = map_prices.get(key)
        }
        else if (min_price > key){
            min_price = key;
            name_min_price = map_prices.get(key);
        }
    }
}

var min_price_time, max_price_time;

for (let key of map_time.keys()){
    if (map_time.get(key) === name_min_price){
        min_price_time = key;
    }
    else if (map_time.get(key) === name_max_price){
        max_price_time = key;
    }
}

//////////////////////////////////////////////////////////////////

var c = 0;
var min_time, max_time;
var name_min_time, name_max_time;

for (let key of map_time.keys()){
    if (c === 0){
        c +=1;
        min_time = key;
        max_time = key;
        name_min_time = map_time.get(key);
        name_max_time = map_time.get(key);
    }
    else {
        if (max_time < key){
            max_time = key;
            name_max_time = map_time.get(key)
        }
        else if (min_time > key){
            min_time = key;
            name_min_time = map_time.get(key);
        }
    }
}

var min_time_price, max_time_price;

for (let key of map_prices.keys()){
    if (map_prices.get(key) === name_min_time){
        min_time_price = key;
    }
    else if (map_prices.get(key) === name_max_time){
        max_time_price = key;
    }
}

//////////////////////////////////////////////////////////////////

console.log(map_names.get(name_min_price) + ": " + min_price  + ", виробник: " + name_min_price + ", час на доставку: " + min_price_time);
console.log(map_names.get(name_max_price) + ": " + max_price  + ", виробник: " + name_max_price + ", час на доставку: " + max_price_time);
console.log(map_names.get(name_min_time) + ": " + min_time_price  + ", виробник: " + name_min_time + ", час на доставку: " + min_time);
console.log(map_names.get(name_max_time) + ": " + max_time_price  + ", виробник: " + name_max_time + ", час на доставку: " + max_time);