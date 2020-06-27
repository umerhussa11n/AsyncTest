const myfunc1 = require("./source1/func1.js");
const myfunc2 = require("./source1/func2.js");
const myfunc3 = require("./source2/func1.js");
const myfunc4 = require("./source2/func2.js");
const myfunc5 = require("./source3/func1.js");
const myfunc6 = require("./source3/func2.js");

const data = {
  name: "test",
  age: "30"
};
const result = {
  state: "ok",
  type: "web developer"
};

async function func1() {
  let result1 = await myfunc1(data, result);
  console.log("result1", result1);

  let result2 = await myfunc2(data, result);
  console.log("result2", result2);
}
async function func2() {
  let result1 = await myfunc3(data, result);
  console.log("result1", result1);

  let result2 = await myfunc4(data, result);
  console.log("result2", result2);
}
async function func3() {
  let result1 = await myfunc5(data, result);
  console.log("result1", result1);

  let result2 = await myfunc6(data, result);
  console.log("result2", result2);
}
async function main() {
  await func1();
  await func2();
  await func3();
}
main();
