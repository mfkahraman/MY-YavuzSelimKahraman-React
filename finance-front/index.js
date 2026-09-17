//destructuring

// let array = [10, 20, 30, 40, 50];

// let user = {
//   fullname: "Yavuz Selim Kahraman",
//   age: 30,
// };

// let [birinci, ikinci, ...others] = array;

// console.log(birinci, ikinci); // 10 20
// console.log(others); // [30, 40, 50]

// let { fullname: elma, age: armut } = user;

// console.log("elma", elma); // Yavuz Selim Kahraman
// console.log("armut", armut); // 30

// let loginData = {
//   username: "mfkahramann",
//   password: "safasfas",
// };

// console.log("loginExample", loginData);

// console.log("loginExample destructuring", { ...loginData, age: 35 });
// console.log("loginExample destructuring", { ...loginData, password: "newpassword" });

//Local Storage
// localStorage.setItem("key", "124214");
// let key = localStorage.getItem("key");
// console.log("key", key);

//JSON.stringify
// let userData = {
//   username: "furkan",
//   password: "1234",
// };
// let stringData = JSON.stringify({ username: "furkan", password: "1234" });
// let convertedData = JSON.parse(stringData);
// console.log("stringData", stringData);
// console.log("userData", userData);
// console.log("convertedData", convertedData);