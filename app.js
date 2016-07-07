var age = 15;
var pi = 3.1416;
var date = new Date();
var compute_Area = function(l,w){
    return l * w;
};
var name ="John Joseph Cero";
var line_Space = "\n";

console.log(line_Space);
console.log(age);
console.log(pi);
console.log(date);
console.log(name);
console.log(compute_Area(10,60));

console.log(line_Space);

console.log('Age \t' + age);
console.log('PI \t' + pi.toFixed(2));

console.log(line_Space);

var x = 1;
var y = null;
var waladiha = undefined;

    if(x)
        console.log('x is true');
     
    if(!y)
        console.log('y is fales');
     
    if(!waladiha)
        console.log('wala diha is undefined');
    
console.log(line_Space);

// ========= JSON 'Javasript Object Notation' ================ //

var jsonObject = {
    name: 'Emmanuel',
    lastname: 'Baldisco',
    address: 'Antequera'
};

console.log(jsonObject.name);
console.log(jsonObject.lastname);
console.log(jsonObject.address);
console.log(jsonObject);

console.log(line_Space);