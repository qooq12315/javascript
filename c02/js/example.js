let greeting = "Howdy";
let my_name = " 123";
let message = ', 請檢查以下訂單:';
let welcome = greeting +  my_name + message;
let greetingElement = document.getElementById('greeting');
greetingElement.innerText = welcome;

let sign = "aaaaaa";
let userSign_element = document.getElementById('userSign')
userSign_element.innerText = sign;

let tiles = sign.length
let tiles_element = document.getElementById('tiles')
tiles_element.innerText = String(tiles);

let subTotal = tiles * 5;
let subTotal_element = document.getElementById('subTotal')
subTotal_element.innerText = '$' + String(subTotal)

let shipping =  7;

let shipping_element = document.getElementById('shipping')
shipping_element.innerText = '$' + String(shipping)

let grandTotal  = shipping + subTotal
let grandTotal_element = document.getElementById('grandTotal')
grandTotal_element.innerText = '$' + String(grandTotal)