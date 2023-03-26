/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:*/
let ppl = [{ name: "Anthony", score: 10 },
    { name: "Fred", score: 10 },
    { name: "Anthony", score: -8 },
    { name: "Winnie", score: 12 }
];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }


let peeps = [
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 }
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
/***********************************************************************/

function countScores(people) {
    let obj = {}
    people.forEach(function(person) {
        let value = Object.values(person)

        if (obj[value[0] !== undefined]) {
            obj[value[0]] += value[1]
        } else {
            obj[value[0]] = value[1]
        }
    })
    return obj
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
