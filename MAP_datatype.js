//map
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
//read Objects Vs Maps at this article
//A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.
//use map rather than using object
//good things about map
//A Map does not contain any keys by default. It only contains what is explicitly put into it.

//A Map's keys can be any value (including functions, objects, or any primitive).

//The keys in Map are ordered in a simple, straightforward way: A Map object iterates entries, keys, and values in the order of entry insertion

//The number of items in a Map is easily retrieved from its size property.

//	A Map is an iterable, so it can be directly iterated.

let contacts = new Map()
contacts.set('Jessie', { phone: "213-555-1234", address: "123 N 1st Ave" })
console.log(contacts.has('Jessie') );// true
console.log(contacts.get('Hilary') );// undefined
contacts.set('Hilary', { phone: "617-555-4321", address: "321 S 2nd St" })
console.log(contacts.get('Jessie')); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
console.log(contacts.size) // 2
contacts.delete('Jessie') // true
console.log(contacts.size) // 1
//Cloning and merging Maps
let original = new Map([
    [1, 'one']
])

let clone = new Map(original)

console.log(clone.get(1))       // one
console.log(original === clone) // false (useful for shallow comparison)