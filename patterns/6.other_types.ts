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
interface JobPosting {
    id: number;
    description: string;
    level: number;
    manager: string|null;
    benefits?: string[];
}

type JobPostingCore = Pick<JobPosting, 'description'|'level'>

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type NoBenefitsJobPosting = Omit<JobPosting, 'benefits'>

// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// }
type ReadonlyJobPosting = Readonly<JobPosting>;

// type Required<T> = {
//     [P in keyof T]-?: T[P];
// };
type AllPropertiesRequiredJobPosting = Required<JobPosting>;

// type NonNullable<T> = T extends null | undefined ? never : T;
type NonNullableJobPosting = NonNullable<JobPosting>;

// Get types of a function

type funcType = (param1: string, param2: boolean, param3?: number) => string[]

// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
type FunctionParams = Parameters<funcType>;
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type FunctionReturn = ReturnType<funcType>;