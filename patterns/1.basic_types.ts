// Basic Types
let firstName: string = 'Justin';
let theAnswer: number = 42;
let knownStars: bigint = 1000000000000000000000n; // Support for the new ESNEXT bigint with the correct config options May need transpiling to get working
let isValid: boolean = false;

// We can have arrays
let presidents: string[] = ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson']
// Alternative was to declare an array of types. It is needed for some complex types, but not preferred for simple types
let prime: Array<number> = [2, 3, 5, 7, 11, 13]
prime.push(17);
// prime.push('19'); // Errors: string type is not valid

// We can even type an array to make them act more like a tuple
let response: [boolean, string] = [true, 'a']
// response = ['string', false]; Error: not same format

// Want to ensure your tuple is not modified? Give it a readonly prefix.
const answer: readonly [boolean, string] = [false, 'b']
// answer[0] = true; // Error: readonly so we can not change it

// A type that will come across is any. It is typically evil and should be avoid unless absolutely necessary.
// It basically makes the type entirely untyped.
let value: any = 7;
value.push('test'); // This does not fail the compiler but it will fail in the runtime.

// If you have one you should use type guards to get the compiler to know it is a specific type
if (typeof value === 'number') {
    // value.push('test'); // This now fails since TypeScript knows it is a number
}

// A recent addition to TypeScript and a more type safe variation of any is unknown. Like any all types can be assigned
// to it, but you can not use it for anything until you get it to a more specific type.

let unknownValue: unknown;
unknownValue = 7;
// let num: number = unknownValue; // Error can not assign unknown to number
if (typeof unknownValue === 'number') {
    let knownNum = unknownValue; // TypeScript knows this is a number now.
}

unknownValue = ['test']
// unknownValue.push('item'); // Error do not know what type unknown is

/// Next we got null, undefined, and void. I think they behave largely how people expect them so I will not go into
// detail. By default values declared with let will be undefined until you assign something but you can change them
// back to undefined.
let person: string;
// const person2: string = person; // Fails since person is undefined.
person = 'Frank';
const person2: string = person; // Works since the compiler knows it is now not undefined.
// person = undefined; // Not allowed

// For null you have to allow the type to be nullable.
// person2 = null; // Not allowed
let person3: null|string = null;

// Void is mostly the same as undefined. Functions that return nothing will have a return value of void.
function noop() {
    return;
}


// Another special type is never. This is something that can never happen. It is used in some advanced types we will
// cover later, but the easiest way to see its value is in a function that throws.
function willThrow(): never {
    throw 'test';
}

// The last basic type is object which represents all non primitive types.
let obj: object = {};
obj = []; // JavaScript is weird and arrays are essentially just objects

// The type itself is not highly useful. It is sort of like unknown but explicitly for objects. You can assign any
// object to it, but you can not use it.
obj = {test: 1};
// obj.test // Error: does not know the type exists
// obj['test'] // Error: Index types do no exist on it either

// More commonly you will want to use an interface which we will cover shortly.

// You can also create type alias.

type UserId = number;
let id: UserId = 7;

// We will cover more advanced types with type alias later.
