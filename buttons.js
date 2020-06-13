var allbuttons = document.getElementsByTagName('button');


var copyButtons = [];
for (let index = 0; index < allbuttons.length; index++) {
    copyButtons.push(allbuttons[index].classList[1]);

}



function colorChange(buttonThingy) {
    console.log(buttonThingy.value);
    if (buttonThingy.value == 'red') {
redColor();
    }
    else if (buttonThingy.value == 'green'){
greenColor();
    }
    else if (buttonThingy.value == 'reset'){
resetButton();
    }
    else if (buttonThingy.value == 'random'){
randomColor();
    }
    
    
}

function redColor () {
   for (let index = 0; index < allbuttons.length; index++) {
     allbuttons[index].classList.remove(allbuttons[index].classList[1]);
      allbuttons[index].classList.add('btn-danger'); 
   } 
}
function greenColor () {
    for (let index = 0; index < allbuttons.length; index++) {
      allbuttons[index].classList.remove(allbuttons[index].classList[1]);
       allbuttons[index].classList.add('btn-success'); 
       
    } 
 }

 function resetButton(){
     for (let index = 0; index < allbuttons.length; index++) {
   
         allbuttons[index].classList.remove(allbuttons[index].classList[1]);
         allbuttons[index].classList.add(copyButtons[index]);
        
     }
 }

 function randomColor(){
     var color = ['btn-primary','btn-danger','btn-success', 'btn-warning'];
    for (let index = 0; index < allbuttons.length; index++) {
  let ran = Math.floor(Math.random()*4);
        allbuttons[index].classList.remove(allbuttons[index].classList[1]);
        allbuttons[index].classList.add(color[ran]);
       
    }
}