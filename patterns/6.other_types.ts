// Probably one of the more advanced types are conditional types. These allow you creat a new type based on conditions
// of the type you are checking. Some of the best examples of ways to use this come from the definitions of built in
// type alias into TypeScript

// Create a new type from an interface that excludes the given types.
// type Exclude<T, U> = T extends U ? never : T;
type numberOrString = number | string;
type justNumber = Exclude<numberOrString, string>;

// Create a type by just including certain types
// type Extract<T, U> = T extends U ? T : never;
type justString = Extract<numberOrString, string>;


// Use only certain keys an interface
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };
interface User {
    user_id: number;
    username: string;
}

type UserCore = Pick<User, 'username'>


