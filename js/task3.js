/*let dogs = ["Ha","Kandek","Ovcharka","Taks","Labradors","pitbull","boxer","foxi"];
let str = dogs[0];
for(i = 1;i < dogs.length;i++){
  if (dogs[i].length < str.length){
    str = dogs[i];
  }
}
console.log(str);*/


/*function factorial(f){
  let x = 1;
  for(i = 1;i <= f; i++){
    x = (x)*i;
    console.log(x);
  }
}
factorial(4);*/



/*function range(x, y){
  var res = [];
  for(i = x+1; i < y; i++){
  res.push(i);
  }
   return res.join();
  }
  console.log(range(2,10));
  
  
  

/*function circumference(r){
  let p = 3.14;
  let c = 2*p*r;
  console.log(c);
}
circumference(2);*/



/*function fibonacci(num) {
  let sol = [0,1];
  for (let i = 2; i <= num; i++) {
    sol.push(sol[i-1] + sol[i-2]);
  }
  return sol;
}
console.log(fibonacci(8));*/



/*const dictionary ={
  hello:"Привет",
  man:"мужчина",
  woman:"женщина",
  child:"ребенок",
  god:"бог"
};
for(key in dictionary){
  console.log(dictionary[key]);
}*/



/*let matrix = [
  [3,4,5],
  [5,7,6],
  [10,11,18]
]
//console.log(matrix[1][2]);
for(i = 0;i < matrix.length;i++){
  let row = matrix[i];
  //console.log(row.join());
  for(j = 0;j < row.length;j++){
    console.log("row" + i + "-" + row[j]);
  }
}*/

/*unction consoleProduct(func){
  console.log(func());
}


let product = {
 price:100,
 shipping:5,
 getPrice(service1,service2,service3){
   let result = 0;

   result += this.price;
   result += this.shipping;
   result += (service1+service2+service3);

   return result;
 } 
}

//let a = product.getPrice;


//console.log(a.call(product, 5,10,20));
//console.log(product.getPrice.call(product,5,10,20));
//console.log(getPrice(1,2,3));
//console.log(product.getPrice.apply(product, [5,10,20]));
const getProductPrice = product.getPrice.bind(product,5,10,20);
consoleProduct(getProductPrice);*/




