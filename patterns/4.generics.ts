// Typescript also supports a very advanced version of generics.
interface Length {
    length: number
}

function getLength<T extends Length>(item: T): number {
    return item.length;
}

getLength([]);
getLength({ length: 12 });


function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a'); // okay
// getProperty(x, 'm'); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
