/*function num(n) {
    if(typeof n === "number") {
        let arrNum = [];
        if(n < 0) {
            for(let i = 1; i != n-1 ; i--) {
                arrNum.push(i)
            }
        } else {
            for(let i = 1; i <= n; i++) {
                arrNum.push(i)
            }
        } console.log(arrNum);
        return arrNum.join("");
    } else return NaN;
}
console.log(num(-3));*/



/*через прототайп

var Vehicle = function(x,y){
this.x = x;
this.y = y;
};
var Tank = function(){
    Vehicle.bind(this);
    this.armory = 100;
}
Tank.prototype.fire = function(){
    this.armory--;
    console.log(`Огонь! \n запас патронов ${this.armory}`)
}
Tank.prototype.move  = function(){
    this.x++;
    this.y++;
}
let t34 = new Tank(0,0);
t34.fire();
console.log(t34.__proto__);
console.log(Tank.prototype)*/