function rpsGame(yourChoice) {

    var botChoice, choice;
    var st = yourChoice.name;
    eval('choice=' + st);
    number = random();
    botChoice = numerToChoice(number);
  

    var winner = decideWinner(choice, botChoice);

    imageChoice(yourChoice.id, botChoice, finalMessage(winner));
}

function random() {
    return Math.floor(Math.random() * 3);
}

function numerToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(choice, botChoice) {
    if (choice.wins == botChoice) {

        return 1;
    }
    else if (choice.name == botChoice) {

        return 0;
    }
    else {

        return -1;
    }
}

function finalMessage(winner) {
    if (winner == -1) {
        return {
            'message': 'You Lost!',
            'color': 'red'
        }

    }

    else if (winner == 0) {
        return {
            'message': 'You tied!',
            'color': 'yellow'
        }
    } else {
        return {
            'message': 'You won!',
            'color': 'green'
        }
    }

}

function imageChoice(humanImageChoice,
    botImageChoice, yourMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src

    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' style='box-shadow: 5px 10px 18px blue;'>";
    document.getElementById('flexboxrps').appendChild(humanDiv);
    messageDiv.innerHTML = "<h1 style='color:"+yourMessage.color+";padding:30px'>" + yourMessage.message + " </h1>";
    document.getElementById('flexboxrps').appendChild(messageDiv);
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' style='box-shadow: 5px 10px 18px red;'>";
    document.getElementById('flexboxrps').appendChild(botDiv);

}