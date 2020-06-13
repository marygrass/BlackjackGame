function ageInDays(){

    var birthyear= prompt("enter your year of birth");
    var ageInDayss=(2018 - birthyear) * 365;
    var h1= document.createElement('h1');
    var text= document.createTextNode('you are ' + ageInDayss + ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(text);
    document.getElementById('flex-box-result').appendChild(h1);

    console.log(ageInDayss);
}

function reset(){
document.getElementById('ageInDays').remove();
}

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flexcats');
    image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
div.appendChild(image);
}

function deleteCats(){
   var div = document.getElementById('flexcats');

    while (div.firstChild) {
        div.firstChild.remove();
    }
}