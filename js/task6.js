/*let word = "dog";
for(var i = 1;i < word.length; i++){
    console.log(word[i]);
   for(var b = 0;b < word.length;b++){
       console.log(word.slice(i, b+1));
   }
}*/





var cat = {
  sound: "Мяу",
  name: "Киска",
  speak:speak
};
cat.speak();
var pig = {
  name:"Чочко",
  sound:"Хрю хрю",
  speak:speak
};
pig.speak();
var horse = {
  name:"Шторм",
  sound:"Иха",
  speak:speak
};
horse.speak();

function speak(){
  console.log(this.sound + " Меня зовут " + this.name + "!");

}

 