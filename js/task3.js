/*let dogs = ["Haski","Kandek","Ovcharka","Taks","Labradors"];
let str = dogs[0] ;
for(i = 1;i < 4;i++){
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
/*function numberrange(x,y){
  //let a =[];
  for(i = x;i <= y;i++){
    a = x[i];
  console.log(x,y);
}
}
numberrange(4,14);*/

/*function ex3(x, y){
  var res = [];
  for(var i = x+1; i < y; i++){
  res.push(i);
  }
  return res.join();
  }
  
  console.log(ex3(2, 10));*/


  var dogs = ['Pitbuull','rex','aktosh','charlieeeeeeeeeeeeeee'];
    var result = dogs[0];
    for(i=0; i < dogs.length; i++){
      if(dogs[i].length < result.length){
        result=dogs[i];
      }
    }
    console.log(result);

