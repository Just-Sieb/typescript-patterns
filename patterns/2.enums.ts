// In TypeScript there are three different options each with their own advantages and disadvantages

// First TypeScript has a more traditional enum that looks very similar to an enum in other languages.
enum Color {
    RED, BLACK, BLUE, YELLOW
}

let color: Color = Color.BLACK;

// By default enums values are auto incrementing numbers with a starting index of 0. So logging our color variable
// prints 1 to the console.
console.log(`The value of Color.RED is ${Color.RED}`);

// We can also set the initial number value to auto-increment from that point.
enum Language {
    PYTHON = 5,
    JAVASCRIPT,
    JAVA ,
    TYPESCRIPT,
    GO,
    BASIC,
}

console.log(`The value of Language.JAVASCRIPT is ${Language.JAVASCRIPT}`);

// Of course you can also set each value to whatever you want.
enum HttpStatus {
    SUCCESS = 200,
    VALIDATION_ERROR = 400,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
}

// Most likely you will want to set them to specific strings. Billing makes heavy use of this pattern.
enum HttpMethod {
    DELETE = 'delete',
    HEAD = 'head',
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    PATCH = 'patch',
    CONNECT = 'connect',
    OPTIONS = 'options',
    TRACE = 'trace',
}

// The values can also be computed at runtime, but I can not think of a reason this is beneficial and I have never used it.
const list = [0, 1, 2 ,3]
enum Computed {
    A = list.length,
}


// The second variation are const enums. The syntax is the same as the last except they are prefixed with const. Const
// enums end up being removed from code and being inlined. I have not found the strictness they had to be beneficial.

const enum Direction {
    UP, DOWN, LEFT, RIGHT
}

console.log(`The value of Direction.UP is ${Direction.UP}`);

// Since they go away after compilation you can not iterate over them
// const methodValues = Object.values(HttpMethod);
// const directionValues = Object.values(Direction); // Fails to compile when uncommented

// For the most part I would suggest avoiding const enums and just using enums.


// The third form of enums are not technically enums, but you see them used a lot in 3rd party libraries and they are
// similar so I am mentioning them here. The are essentially just a type union of string values.

type option = 'yes' | 'no'

const choice: option = 'yes';
// If you try to choose any other value it fails to compile
// const choice2: option = 'bad_options';

// You see this option used in a lot of third party libraries that have type definitions in declaration files.
// The billing team has used them in a couple places, but I think we typically prefer just using enums.
