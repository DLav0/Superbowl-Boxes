const afc = [0,1,2,3,4,5,6,7,8,9]

const nfc = [0,1,2,3,4,5,6,7,8,9]

 export const combos = [ [0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7], [0,8], [0,9], 
                 [1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [1,9],  
                 [2,0], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [2,9],  
                 [3,0], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8], [3,9],  
                 [4,0], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [4,8], [4,9],  
                 [5,0], [5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7], [5,8], [5,9],  
                 [6,0], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7], [6,8], [6,9],  
                 [7,0], [7,1], [7,2], [7,3], [7,4], [7,5], [7,6], [7,7], [7,8], [7,9],  
                 [8,0], [8,1], [8,2], [8,3], [8,4], [8,5], [8,6], [8,7], [8,8], [8,9],  
                 [9,0], [9,1], [9,2], [9,3], [9,4], [9,5], [9,6], [9,7], [9,8], [9,9]  ]




//It's going to splice a random number until the a4ray is empty.  
//Each person gets a random AFC and NFC number.  I'm pretty sure that will work3
//Everyone gets a unique combination.  Could use a class.
//I'm still curious how to randomize an array

const personDefault = {
    name:"Billy B",
    shortName:"Bill",
    email:"billy@snailmail.com",
    afc: 0,
    nfc: 0
}


 function junction() {
    return combos.splice(Math.floor(Math.random()*combos.length),1)[0];
}

export class Person {
    constructor(name, shortName, email) {
        this.name = name;
        this.shortName = shortName;
        this.email = email;
        this.both = junction()
        this.afc = this.both[0]
        this.nfc = this.both[1]

    }
}

// this.afc = afc.splice(Math.floor(Math.random()*afc.length),1)[0];
// this.nfc = nfc.splice(Math.floor(Math.random()*nfc.length),1)[0];
// This is wrong.  Would only be good for 10 people.  Does not include all combinations.

const person1 = new Person('Daniel Lavery','Dan L.','lavery0@yahoo.com')
const person2 = new Person('Bill Belicheck','Billy','randoEmail@deflate.com')
const person3 = new Person('OJ Simpson','OJ','didntdoit@snailmail.com')
const person4 = new Person('Sean Lavery','Pop','slavery@gmail.com')
const person5 = new Person('Out of Ideas','Out','tellmesomething@yahoo.com')
const person6 = new Person('Tommy Tutliger','Squirl','squirelwhirl@gmail.com')
const person7 = new Person('Tammy Tuglugger','Beets','tammy@gmail.com')

// console.log(combos.length)
// console.log(nfc)
// console.log(person1)
// console.log(person2)
// console.log(person3)
// console.log(person4)
// console.log(person5)
// console.log(person6)
// console.log(personDefault)



function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffleArray2(array) {
    let array2 = array.slice(0)
    for (var i = array2.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array2[i];
        array2[i] = array2[j];
        array2[j] = temp;
    }
    return array2;
}
// shuffleArray2() doesn't mutate the input array
//I may not actually need this function.  

const afcmixed = shuffleArray2(afc)
const nfcmixed = shuffleArray2(nfc)

// make an array with all posible combinations.  Nest in [afc,nfc] one hunderd times and use the randome splice method in the class.
// Not sure whether to put a method in the class or not.  

// Need to push to push each object to an array.  Maybe for now just define the array explicitely
// How to iterate the class 100 times?  Could use an extends.  Maybe a loop that iterates the class 100 times.  
// Probably use something like Workshop 5 in Bootstrap.  See file in Bootstrap file.

export const personsHard = [person1, person2, person3, person4, person5, person6, person7];


// When does the class call actually run when the app is started?
// I could make random numbers every time a new name is entered.  Think I'd rather have it assign the number and leave it.  Otherwise,
// A small mistake could randomize the whole thing.  





