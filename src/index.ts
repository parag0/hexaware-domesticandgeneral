import Logic from "../src/lib/Logic";

const message = "hello^%$*&(world";
const stringOps = new Logic(message);

const data = stringOps.duplicateCharCount();
console.log(data);
