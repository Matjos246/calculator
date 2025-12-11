// now that weare done with html and css, now needs to functionality to our app and for our Js we have alot to write and starts with getting the display element with ID display(#display) and we have three functions.... And we have 3 functions to display , function of 1.appendToDisplay 2.calculate  3.clearDisplay .....let set the display color to be white, ok thats much better

const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function calculate(){ 
    try{

    //eval() takes in arithmetic operation and give or output the mathematical answer accordingly.
          display.value=eval(display.value);
    }

    catch{
      display.value=  "Error 404";
    }
}

function deleteLast() {
    let disp = document.getElementById("display");
    disp.value = disp.value.slice(0, -1);
}

function clearDisplay(){
    display.value=""
}
