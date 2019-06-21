// Probably the most commonly used additions you will use in TypeScript are interfaces. Interfaces gives a shape to
// objects and classes that allow you to compose complex types.

interface User {
    readonly id: number, // Types can marked as readonly so you can not change them.
    username: string,
    first_name: string,
    last_name: string,
    phone_number?: string, // Types can be optional

    // You can declare more advanced types like functions
    getFullName(): string;
}

const user: User = {
    id: 1,
    username: 'frank.smith',
    first_name: 'Frank',
    last_name: 'Smith',
    getFullName() { return `${this.first_name} ${this.last_name}` },
}

// user.id = 9; // Fails because you can not change a readonly value

// Classes can also implement an interface
class Member implements User {
    readonly id: number;
    username: string;
    first_name: string;
    last_name: string;

    constructor(id: number, username: string, firstName: string, lastName: string) {
        this.id = id;
        this.username = username;
        this.first_name = firstName;
        this.last_name = lastName;
    }

    getFullName() {
        return `${this.first_name} ${this.last_name}`;
    }
}

// Functions can accept interfaces
function printUser(user: User) {
    console.log(`${user.username} (${user.getFullName()})`);
}

printUser(user);
printUser(new Member(2, 'test', 'Jack', 'Johnson'));

// At a pure software design level interfaces can have more options than what is defined in them. This is true in
// TypeScript except for one exception.

const maybeUser = {
    id: 3,
    username: 'test1',
    first_name: 'Judy',
    last_name: 'Dent',
    getFullName() { return `${this.first_name} ${this.last_name}` },

    // This value is not defined on the object.
    unknown_item: 'item',
}

// Can be assigned to a variable that represents a user interface
const definiteUser: User = maybeUser;

// The exception to this though is if you try to construct a new object literal and assign it to an interface. The idea
// here is that the extra values are not going to be used ever as they are not in the interface so it is likely a bug.

const otherUser: User = {
    id: 4,
    username: 'test2',
    first_name: 'Judy 2',
    last_name: 'Dent 2',
    getFullName() { return `${this.first_name} ${this.last_name}` },

    // This value is not defined on the object. Will error out here.
    // unknown_item: 'item',

// We can explicitly cast to the interface if this is needed.
} // as any;

// One of the common uses of objects is to define a specific type to a particular key of an object. In TypeScript you
// can use index types to have this be typed.

interface UserCache {
    // an arbitrary string may return a user
    [index: string]: User|undefined;
    // an arbitrary number may also return a user
    // Index types can also be readonly
    readonly [index: number]: User|undefined;
}

const cache: UserCache = {
    [definiteUser.username]: definiteUser,
}

const potentialUser = cache['test1'];

// Interface can also extend other interfaces

enum Privilege {
    BILLING,
    ADMIN,
    REPORTS,
}

interface AdminUser extends User {
    /// All values of User are apart of Admin User
    privileges: Privilege[]
}

let adminUser: AdminUser = {
    id: 5,
    username: 'test3',
    first_name: 'Admin',
    last_name: 'User',
    getFullName() { return `${this.first_name} ${this.last_name}` },
    privileges: [Privilege.ADMIN, Privilege.BILLING],
}

