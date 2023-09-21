var selectedRow= null;


// showing alerts--------------------------------//

function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main= document.querySelector(".main");
    container.insertBefore(div, main);


    setTimeout( ()=> document.querySelector(".alert").remove(), 3000);

}

// clear all data code------------------------------//

function clearFields(){
    document.querySelector("Task").value="";
    document.querySelector("Day").value="";
    document.querySelector("Time").value="";

}

// ADD data code ---------------------------------//

document.querySelector("#Task-form").addEventListener("submit", (e) =>{
    e.preventDefault();


const Task = document.querySelector("#Task").value;
const Day = document.querySelector("#Day").value;
const Time = document.querySelector("#Time").value;

if(Task =="" || Day=="" || Time=="") {
    showAlert("please fill all fields" ,"danger");
}
else{
if(selectedRow == null){
    const list = document.querySelector("#Task-list");
    const row = document.createElement("tr");

    row.innerHTML=`
    <td>${Task}</td>
    <td>${Day}</td>
    <td>${Time}</td>
    <td>
        <a href="#" class="btn btn-outline-info btn-sm edit">Edit</a>
        <a href="#" class="btn btn-danger btn-sm delete">Delete</a>

    
    `;
    list.appendChild(row);
    selectedRow = null;
    showAlert("task Added", "success");
  }
  else{
    selectedRow.children[0].textContent = Task;
    selectedRow.children[1].textContent = Day;
    selectedRow.children[2].textContent = Time;
    selectedRow = null;
    showAlert("Task Edited","succ");

  }
  clearFields();
 }
});

// Edit Data code---------------------//

document.querySelector("#Task-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#Task").value =selectedRow.children[0].textContent;
        document.querySelector("#Day").value =selectedRow.children[1].textContent;
        document.querySelector("#Time").value =selectedRow.children[2].textContent;
    }

});

// Delete data code------------------------//
document.querySelector("#Task-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Task Deleted" ,"danger");
    }
});




