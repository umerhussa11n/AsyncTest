const my_funtion1 = (data, result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result), 2000);
  })
    .finally(() => console.log("Promise ready1"))
    .catch(err => reject(new Error("Whoops!")));
};
module.exports = my_funtion1;
