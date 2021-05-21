const cal = document.querySelector(".cal");
const calhead = document.querySelector(".calhead")
const currentMonth = document.querySelector(".currentMonth");
const prev = document.querySelector(".prev");
const forward = document.querySelector(".forward");



const today = document.querySelector(".today");
const days = document.querySelector(".days");
const datelist = document.querySelector(".datelist");


monthlist = ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
daylist = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let date = new Date()
var year = date.getFullYear();

function calltoday(){
    today.innerHTML = `${date.getDate()} ${daylist[date.getDay()]} ${monthlist[date.getMonth()]} ` ;
    // date.toString을 하면 뒤에 시간, 시간대 정보가 따라오네..
}


function thisisCalendar(){
    var Monthnow = date.getMonth();
    currentMonth.innerHTML = `${monthlist[Monthnow]}`
  
    let monthday = ""
    for (var i=0; i<7; i++) {
        monthday += `<div>${daylist[i]}</div>` ;
        days.innerHTML = monthday ;
    }

    let monthdate = ""
    let MonthLast = new Date(year, Monthnow, 0);
    var lastday = MonthLast.getDay();
    var lastdate = MonthLast.getDate();
    let MonthFirst = new Date(year, Monthnow+1, 0)
    var firstdate = MonthFirst.getDate();
    var firstday = MonthFirst.getDay();

    for ( var i=lastday+1; i>0 ; i--) {
    monthdate += `<div  class="notThisMon" id=${lastdate-i+1}">${lastdate-i+1}</div>`
    datelist.innerHTML = monthdate;
    }

    for ( var i=1; i <firstdate+1 ; i++) {
    monthdate += `<div id=${i} onclick="clickDay(${i})">${i}</div>`
    datelist.innerHTML = monthdate;
    }

    for( var i=1; i<7-firstday ; i++) {
    monthdate += `<div class="notThisMon" id=${i})" >${i}</div>`
    datelist.innerHTML = monthdate;
    }

}


function clickDay(i){
    var clickcal = new Date(2021, date.getMonth(), i);
    today.innerHTML = `${clickcal.getDate()} ${daylist[clickcal.getDay()]} ${monthlist[clickcal.getMonth()]} ` ;
}


function thisMonth(){
    date = new Date();
    thisisCalendar();
}

function lastMonth(){
    date = new Date(year, date.getMonth()-1, date.getDate())
    thisisCalendar();
}

function NextMonth(){
    date = new Date(year, date.getMonth()+1, date.getDate())
    thisisCalendar();
}


prev.addEventListener("click", lastMonth);
forward.addEventListener("click", NextMonth);

thisMonth()
calltoday();

