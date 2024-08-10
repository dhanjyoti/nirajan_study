//  object -> data with key-value pairs, it will always be in a {} curly brackets

obj = {
    id: 1,
    name: "nirjan",
    age: 80,
    place: {
        state: "Madesh",
        city: {
            town: "sector-26",
            road: "main-road-2"
        }
    }
}

// console.log(obj.place.city.town);

// array ->Array is a list of similar or different data type, always in [] square brackets

// let pencils = ["apsara", "natraj", "graphite-pencils", "shadding-hd", 87];
let numArray = [1, 2, 3, 4, 5]
// console.log(pencils[1], pencils[2]);
// console.log("the length of this array is ",pencils.length);
let reversedArray = numArray.reverse()

console.log(reversedArray[1])


