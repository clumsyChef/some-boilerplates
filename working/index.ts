import add2Numbers from "./module/add";
import multiply2Numbers from "./module/multi";

const sum: number = add2Numbers(3, 5);
const doubleOfSum: number = sum * 2;
const multi: number = multiply2Numbers(sum, doubleOfSum);
console.log(multi);
console.log(multi);
