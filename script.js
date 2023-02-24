var pokeDex = [];

var GM = 0;

var inventory = {
    "pokeball":2,
    "healing pot":0
};

var zoneType = {
    0: "dryLand",
    1: "grass",
    2: "water"
};

var StartingZone = [
    [2,1,0,1,2],
    [2,1,0,1,2],
    [2,1,0,1,2],
    [2,1,0,1,2]
];

async function getPokeData(name){
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+name);
    var pokeData = await response.json();
    return pokeData;
}

function play(){
    terminal = document.querySelector(".main");
    canvas = document.querySelector(".canvas");
    ctx = canvas.getContext("2d");
    terminal.innerHTML = "";
    terminal.style.textAlign = "";
    terminal.style.padding = "0";
}

function invoke(){
    GM = true;
}