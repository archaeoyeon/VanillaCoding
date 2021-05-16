const weatherin = document.querySelector(".WeatherIn"),
    askme = weatherin.querySelector("input") ;
const Yourlocation = document.querySelector(".YourLocation");
const background = document.querySelector(".backgroundimg");


const SpecialLoc = ["Seoul", "Newyork", "London", "Beijing"]

const loclist = "loc";


function savedata(text) {
    localStorage.setItem(loclist, text);
}

function currentloc(text) {
    if (SpecialLoc.includes(text)){
        Yourlocation.innerHTML = `${text} is hot. </br>Go to home!`
        background.classList.add("hot")
        background.classList.remove("cold")
    } else {
        Yourlocation.innerHTML = `${text} is cold. </br>Stay in side!`
        background.classList.add("cold")
        background.classList.remove("hot")
    }
}

function submitEvent(event){
    event.preventDefault();
    const getdata = askme.value ;
    savedata(getdata) ;
    currentloc(getdata);
}

function asklocation(){
    weatherin.addEventListener("submit", submitEvent)
}

function LocWeather(){
    const loc = localStorage.getItem(loclist);
    if (loc === null) {
        asklocation()
    } else{
        currentloc(loc)
    }
}

function init(){
    LocWeather()
}

init()