const input = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')

function addItem(){
    
    let value = input.value.trim()
    if(value ==''){
        alert("Enter a proper value")
    }
    else{
        const element = document.createElement("li")
        element.innerHTML = value
        listContainer.appendChild(element)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        element.appendChild(span)
    }
    input.value = ""
    saveData();
}


listContainer.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML=localStorage.getItem("data")
}

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addItem();
    }
});

showData();