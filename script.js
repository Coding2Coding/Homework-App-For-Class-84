var canvas = document.getElementById("canvas");
var canvasReference = canvas.getContext("2d");

var car1Object = "";
var car2Object = "";

var car1Image = "car1.png";
var car2Image = "rover.png";

var car1Width = 70;
var car2Width = 70;

var car1Height = 40;
var car2Height = 40;

var car1XCoordinate = 14;
var car2XCoordinate = 14;

var car1YCoordinate = 14;
var car2YCoordinate = 70;

function add() {
    car1Object = new Image();
    car2Object = new Image();
    
    car1Object.onload = uploadCar1Image;
    car2Object.onload = uploadCar2Image;
    
    car1Object.src = car1Image;
    car2Object.src = car2Image;
}

function uploadCar1Image() {
    canvasReference.drawImage(car1Object, car1XCoordinate, car1YCoordinate, car1Width, car1Height);
}

function uploadCar2Image() {
    canvasReference.drawImage(car2Object, car2XCoordinate, car2YCoordinate, car2Width, car2Height);
}

window.addEventListener("keydown", keydown);

function keydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == "38") {
        car1Forward();
        console.log("forwardKey1");
    }

    if(keyPressed == "40") {
        car1Down();
        console.log("downKey1");
    }

    if(keyPressed == "37") {
        car1Left();
        console.log("leftKey1");
    }

    if(keyPressed == "39") {
        car1Right();
        console.log("rightKey1");
    }

    if(keyPressed == "87") {
        car2Forward();
        console.log("forwardKey2");
    }

    if(keyPressed == "83") {
        car2Down();
        console.log("downKey2");
    }

    if(keyPressed == "65") {
        car2Left();
        console.log("leftKey2");
    }

    if(keyPressed == "68") {
        car2Right();
        console.log("rightKey2");
    }
}