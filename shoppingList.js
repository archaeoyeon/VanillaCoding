const items = document.querySelector(".items");
const item = document.querySelector(".item");
const del =  document.querySelector(".delete");
const text =  document.querySelector(".toWrite");

/**사용자가 값을 입력시 item 클래스를 가진 태그를 복사하고
 del클래스의 버튼과 사용자가 입력한 값을 반영한 span 태그를 복사된 item태그에 자식노드로 추가 
 버튼의 경우는 클릭 이벤트를 기다리도록 설정하기
 **/
function uploadItem(userinput){
    let copyFormat = item.cloneNode(false);
    let copyDel = del.cloneNode(true);
    let newItem = document.createElement("span");

    items.append(copyFormat);
    copyFormat.append(newItem);
    copyFormat.append(copyDel);
    
    newItem.innerHTML = userinput;
    text.value="";
    text.focus();

    copyFormat.scrollIntoView({block: 'center'});
    
    copyDel.addEventListener("click", ()=>{
        copyDel.parentNode.remove(copyFormat);
    });
}

del.addEventListener("click", ()=>{
    del.parentNode.remove(item);
});



