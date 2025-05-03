// Basic Types in Typescript

// --> Primitive Types {Number, String, Boolean}
// e.g
let birthday: Number = 2;
let month: String = "November";
let isBirthdayToday = false;

// --> Array
// e.g
let colors: String[] = ["Purple", "Cyan", "Magenta"];

// --> Tuples
// e.g
let skillExperience: [String, Number] = ["React.js", 3];

// --> Enums - PascalCase
// e.g
enum ErrorCodes {
  OK = 200,
  CREATED = 201,
  BADREQUEST = 400,
  UNAUTHORIZED = 401,
  NOTFOUND = 404,
}
console.log(ErrorCodes.NOTFOUND);

// --> any - No type check
// --> unknown - Safe version of any requires to check type before using
// --> null - Represents an intentional absence of value
// --> undefined - Represents uninitialized value
// --> Never - Never returns

// examples:
let flexible: any = 4; // any type
let mysterious: unknown = "hi"; // must check before use
let empty: null = null; // intentionally nothing
let notSet: undefined; // not assigned yet
function fail(): never {
  // never returns
  throw new Error();
}
