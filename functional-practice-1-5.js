function forEach(array, callback){
    // YOUR CODE HERE

    for(var i=0; i<array.length; i++){
    var el = array[i]
    callback(el)

    }
    // 
}

// tests
// ---
var total = 1
forEach([1, 2, 3, 4], function(a){ total *= a; })
console.assert(total === 24)

// ----------------------------
// using forEach() from above, write your own reduce()
// that takes an array and a function
// ----------------------------

function reduce(array, callback){
    // YOUR CODE HERE

    var total = array[0]
    forEach(array, function(element){
    	total = callback(element,total)
    })
    return total

    //
}

console.assert(
    reduce([1, 2, 3, 4], function(a, v){ return a*v }) === 24
)

// ----------------------------
// using reduce() from above, write your own sum()
// that adds up all arguments to sum (note: variadic behavior)
// ----------------------------

function sum(){

    // YOUR CODE HERE
   	var elements = Array.prototype.slice.call(arguments)
   	total = 0
   	reduce(elements, function(instance){
   		total += instance
   	})
   	return total
    // 
}

// tests
// ---
console.assert(sum(1, 2, 3) === 6)
console.assert(sum(1, 2, 3, 4) === 10)
console.assert(sum(1, 2, 3, 4, 5) === 15)

// ----------------------------
// using Array.sort(), sort the following array
// of people by name
// ----------------------------

var people = [
    {name:"Matt", alma_mater:"Univ of Texas - Austin"},
    {name:"Brian", alma_mater:"Texas A&M"},
    {name:"Jesse", alma_mater:"Univ of Texas - Austin"},
    {name:"Justin", alma_mater:"Univ of Florida"}
]

people.sort(function(a, b){

    // YOUR CODE HERE
    if(a.name < b.name){
    	return -1;
    }

    if(a.name > b.name){
    	return 1;
    }

    return 0
    // 

})


// tests
// ---
console.assert(people[0].name === "Brian")
console.assert(people[1].name === "Jesse")
console.assert(people[2].name === "Justin")

// ----------------------------
// Using Array.map(), Array.filter(), and Array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname
// ----------------------------

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

var results = customers
    .filter(function(element){
        // YOUR CODE HERE
        return (element.first[0] === "J")
        // 
    })
    .map(function(element){
        // YOUR CODE HERE
        return {
            fullname: element.first + " " + element.last
        }
        // return fullname: (element.first + " " + element.last)
        //
    })
    .sort(function(a,b){
        // YOUR CODE HERE
        if(b.fullname < a.fullname){
        return 1;
    }

    if(b.fullname > a.fullname){
        return -1;
    }

    return 0
        // 
    })

// tests
// ---
console.assert(results[0].fullname === "Jack White")
console.assert(results[2].fullname === "John Smith")
