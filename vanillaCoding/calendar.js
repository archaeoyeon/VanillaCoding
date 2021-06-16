const cal = document.querySelector(".cal");
const currentYear = document.querySelector(".currentYear");
const currentMonth = document.querySelector(".currentMonth");
const prev = document.querySelector(".prev");
const forward = document.querySelector(".forward");

const today = document.querySelector(".today");
const days = document.querySelector(".days");
const datelist = document.querySelector(".datelist");



const monthList = ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const daysofWeek = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let date = new Date();
let year = date.getFullYear();

prev.addEventListener("click", lastMonth);
forward.addEventListener("click", NextMonth);


function thisMonth(){
    setCalendar(date, year);
    callToday();
}

function lastMonth(){
    date = new Date(year, date.getMonth()-1, date.getDate());
    year = date.getFullYear();
    setCalendar(date, year);
}

function NextMonth(){
    date = new Date(year, date.getMonth()+1, date.getDate());
    year = date.getFullYear();
    setCalendar(date, year);
}


//달력 생성//
function setCalendar(date, year){
    currentYear.innerHTML = year;

    //현재 달 설정//
    let monthNow = date.getMonth();
    currentMonth.innerHTML = `${monthList[monthNow]}`;
  
    //요일명 나열//
    let week = "";
    for (var i=0; i<7; i++) {
        week += `<div>${daysofWeek[i]}</div>`;
        days.innerHTML = week ;
    }


    //지난달의 마지막날짜와 요일 확인(달력의 맨 앞에 위치시킬 것)//
    let last_LastMonth = new Date(year, monthNow, 0);
    let firstday_cal = last_LastMonth.getDay();
    let firstdate_cal = last_LastMonth.getDate();

    //이번달의 마지막날짜와 요일 확인//
    let last_curMonth = new Date(year, monthNow+1, 0);
    let lastDay = last_curMonth.getDay();
    let lastDate = last_curMonth.getDate();


    let dates_Month = "";

    //지난달 마지막 요일을 이용해서 현재 달력에 지난달 날짜 중 일부 추가//
    for ( var i=firstday_cal+1; i>0 ; i--) {
        if(i===7) break;
        dates_Month += `<div  class="notThisMon" id=${firstdate_cal-i+1}">${firstdate_cal-i+1}</div>`
        datelist.innerHTML = dates_Month;
    }

    //이번달 날짜//
    for ( var i=1; i <lastDate+1 ; i++) {
        dates_Month += `<div id=${i} class="thisMon" onclick="clickDate(${i})">${i}</div>`
        datelist.innerHTML = dates_Month;
    }

    //이번달 마지막 요일을 이용해서 현재 달력에 다음달 날짜 중 일부 추가//
    for( var i=1; i<7-lastDay ; i++) {
        dates_Month += `<div class="notThisMon" id=${i})" >${i}</div>`
        datelist.innerHTML = dates_Month;
    }
}

thisMonth();



//오늘 날짜 출력//
function callToday(){
    today.innerHTML = `${date.getDate()} ${daysofWeek[date.getDay()]} ${monthList[date.getMonth()]}`;
}

//클릭한 날짜 출력//
function clickDate(i){
    let clickCal = new Date(year, date.getMonth(), i);
    const thisMonlist = document.querySelectorAll(".thisMon");
    thisMonlist[i-1].classList.toggle("clicked");
    today.innerHTML = `${clickCal.getDate()} ${daysofWeek[clickCal.getDay()]} ${monthList[clickCal.getMonth()]} `;
}
