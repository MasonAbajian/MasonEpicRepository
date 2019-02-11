function diceGame(){
    var diceOne = Math.floor(Math.random() * 6)+1;
    var diceTwo = Math.floor(Math.random() * 6)+1;
    var total = diceOne + diceTwo;
    game(total);
    
}

function game(number){
    if(number == 7){
         document.getElementById("diceOutput").innerHTML = "You rolled " + number + ", You Win!";
    }else if(number == 11){
         document.getElementById("diceOutput").innerHTML = "You rolled " + number + ", You Win!";
    }else if(number == 2 || number == 3 || number == 12){
         document.getElementById("diceOutput").innerHTML = "You rolled " + number + ", You lose!";
    }else{
         document.getElementById("diceOutput").innerHTML = "You rolled " + number + ", Please roll again";
    }
}
