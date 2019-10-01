var randomwords = ["планета","река","енот"];
var pickrandomword = function(words){
    return words[Math.floor(Math.random() * words.length)]
};

console.log(pickrandomword(randomwords));
