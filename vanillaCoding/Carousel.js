const content = document.querySelector(".content");
const prev = content.querySelector(".prev");
const imageHolder = content.querySelector(".imageHolder");
const forward = content.querySelector(".forward");
const dot = content.querySelector(".dot");

const images = {
    0 : "https://cdn.pixabay.com/photo/2017/02/04/22/37/panther-2038656__480.png",
    1 : "https://cdn.pixabay.com/photo/2017/09/01/00/16/png-2702697__480.png",
    2 : "https://cdn.pixabay.com/photo/2017/08/27/20/10/png-2687339__480.png",
    3 : "https://cdn.pixabay.com/photo/2016/10/11/18/34/black-1732414__480.png",
    4 : "https://cdn.pixabay.com/photo/2016/03/23/04/57/cat-1274094__480.png"
}

prev.addEventListener("click", clickPrev);
forward.addEventListener("click", clickForward);

let count = 0;
function clickPrev(){
    if (count < 5){
    imageHolder.setAttribute("src", images[4-count]);
    return count = count +1;
    } else {
        imageHolder.setAttribute("src", images[4]);
        return count = 1;
    }
}

function clickForward(){
    if (count < 5) {
    imageHolder.setAttribute("src", images[count]);
    count = count+1;
    } else{
        imageHolder.setAttribute("src", images[0]);
            return count=1;
    }
}

function moveTo(i){
    imageHolder.setAttribute("src", images[i]);
}
