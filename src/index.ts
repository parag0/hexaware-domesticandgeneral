import Logic from "../src/lib/Logic";

const message = "hello^%$*&(world";
const stringOps = new Logic(message);

const data = JSON.stringify(stringOps.duplicateCharCount());
console.log(data);
