function RockPaperScissors(){
    var user = document.getElementById("userInput");
    user = user.value.toLowerCase();
    document.getElementById("user").innerHTML = "You chose " + user;
    var computerHand = computer();
    document.getElementById("computerHand").innerHTML = "The computer threw "  + computerHand;
    
    if(user == "rock" && computerHand == "rock"){
        document.getElementById("RockPaperScissorsOutput").innerHTML = "You tied!";
    }else if(user == "rock" && computerHand == "paper"){
        document.getElementById("RockPaperScissorsOutput").innerHTML ="You Lost!";
    }else if(user == "rock" && computerHand == "scissors"){
        document.getElementById("RockPaperScissorsOutput").innerHTML ="You Win!";
    }else if(user == "paper" && computerHand == "paper"){
        document.getElementById("RockPaperScissorsOutput").innerHTML ="You Tied!";
    }else if(user == "paper" && computerHand == "scissors"){
        document.getElementById("RockPaperScissorsOutput").innerHTML ="You Lost!";
    }else if(user == "paper" && computerHand == "rock"){
        document.getElementById("RockPaperScissorsOutput").innerHTML ="You Win!";
    }else if(user == "scissors" && computerHand == "paper"){
        document.getElementById("RockPaperScissorsOutput").innerHTML ="You Win!";
    }else if(user == "scissors" && computerHand == "scissors"){
        document.getElementById("RockPaperScissorsOutput").innerHTML ="You Tied!";
    }else{
        document.getElementById("RockPaperScissorsOutput").innerHTML ="You Lost!";
    }
}

function computer(){
    var computerHand = Math.floor(Math.random() * 3) + 1;
    
    if(computerHand == 1){
        return "rock";
    }else if(computerHand == 2){
        return "paper";
    }else{
        return "scissors";
    }
}
