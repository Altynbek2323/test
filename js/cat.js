/*let Cat = function(name){
    this.name = name;
    this.tiredness = 0;
    this.happiness = 0;
    this.loneliness = 0;
    this.hunger = 0;
    this.getHappiness = function(){
        if((this.loneliness+this.happiness+this.tiredness+this.hunger)>=400/2){return ' оочень счастлив'}
        else if((this.loneliness+this.happiness+this.tiredness+this.hunger)>=400/4){return ' счатлив'}
        else if((this.loneliness+this.happiness+this.tiredness+this.hunger)>=400/6){return ' не счатлив'}
        else{return ' оочень не счастлив'}
    }

    this.feed = function(){
        this.hunger += 20;
        this.happiness += 20;
        console.log("После обеда " + this.name + " не голоден " + this.hunger + " и " + this.getHappiness());
    }
    this.sleep = function(){
        this.happiness += 20;
        this.tiredness += 20;
        console.log("После сна " + this.name + this.getHappiness() + " и стал бодрее на" + this.tiredness);
    }
    this.pet = function(){
        this.loneliness += 30;
        this.happiness +=25;
        console.log("после секса " + this.name + this.getHappiness());
    }
}
let vasya = new Cat("Вася");
vasya.feed();*/
