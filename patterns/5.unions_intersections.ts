// I have used unions a lot of difference places. Most commonly I use them in a sort of sentinel pattern.

interface Rectangle {
    x: number;
    y: number;
}

interface Circle {
    radius: number;
}

type Shape =
    | Circle
    | Rectangle;


let shape: Shape = { radius: 5 };

function getDiameter(shape: Shape) {
    if ('x' in shape) {
        return shape.x * 2 + shape.y * 2;
    } else {
        return shape.radius * 2 * Math.PI;
    }
}

getDiameter({ radius: 2 });
getDiameter({ x: 1, y: 7 });

// We can also create user defined type guard function. The return type is parameter name is type
function isRectangle(shape: any): shape is Rectangle {
    return typeof shape === 'object'
        && typeof shape.x === 'number'
        && typeof shape.y === 'number'
}

if (isRectangle(shape)) {
    shape.x;
}

// Most commonly I have one field in the interface that is the same across the union which I can easily perform a type
// check across the union to know what the other types are.

interface Fish {
    kind: 'fish'; // Can also use this for an enum value
    swimSpeed: number;
}

interface Dog {
    kind: 'dog';
    isMansBestFriend: true;
}

type Animal =
    | Fish
    | Dog;

function tellAnimalFact(animal: Animal) {
    switch (animal.kind) {
        case 'dog':
            console.log(`Dog's are Man's best friend: ${animal.isMansBestFriend}`);
            break;
        case 'fish':
            console.log(`Fish can swim ${animal.swimSpeed} mph`);
            break;
    }
}

// TypeScript also support intersection type. Intersection contains all values of the combined interfaces

type FishDogHybrid =
    & Omit<Fish, "kind">
    & Omit<Dog, "kind">
    & { kind: 'fish_dog' };

let fishDog: FishDogHybrid = {
    kind: 'fish_dog',
    isMansBestFriend: true,
    swimSpeed: 7,
}
