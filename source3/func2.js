const my_funtion = (data, result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result), 2000);
  })
    .finally(() => console.log("Promise ready6"))
    .then(result => result)
    .catch(err => reject(new Error("Whoops!")));
};
module.exports = my_funtion;
