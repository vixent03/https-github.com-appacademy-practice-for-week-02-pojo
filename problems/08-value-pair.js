/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:*/
let object1 = { name: 'One', location: 'NY', age: 3 };
let object2 = { name: 'Two', location: 'SF' };
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
/***********************************************************************/

function valuePair(obj1, obj2, key) {
    const target1 = []
    const target2 = []

    let value1 = obj1[key]
    let value2 = obj2[key]


    target1.push(value1)
    target2.push(value2)

    console.log(target1.concat(target2))

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
