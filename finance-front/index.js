//destructuring

let array = [10, 20 , 30, 40, 50];

let user = {
    fullname : "Yavuz Selim Kahraman",
};

let [birinci, ikinci, ...others] = array;

console.log(birinci, ikinci); // 10 20
console.log(others); // [30, 40, 50]

let {fullname: elma, age: armut} = user;

console.log("elma", elma); // Yavuz Selim Kahraman
console.log("armut", armut); // 30