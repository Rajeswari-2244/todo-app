const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container")
const button=document.getElementById("btn")
button.addEventListener("click",()=>{
    if(inputBox.value===""){
        alert("enter the correct value")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span)


    }
    inputBox.value="";
    setData()
})


// function addTask(){
//     if(inputBox.value===""){
//                 alert("enter the correct value")
//             }
//             else{
//                 let li=document.createElement("li");
//                 li.innerHTML=inputBox.value;
//                 listContainer.appendChild(li);
//             }
//             inputBox.value="";
// }


listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        setData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        setData()
    }
},false)


function setData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showlist(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showlist();