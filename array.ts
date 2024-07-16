const names: string[] = [];

names.push("Harsh"); // no error

//names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

console.log(names);

const names1: readonly string[] = ["Harsh"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment 
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(numbers);
let head: number = numbers[0]; // no error
console.log(head);

export{}