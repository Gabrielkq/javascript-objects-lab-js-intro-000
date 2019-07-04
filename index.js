var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
 //object[key] = value;
 //return object;
 //var newObj =  new Object(object,{ [key]: value });
 //return newObj;
 var newObj = Object.assign({}, object, { [key]: value });
 return newObj;
}