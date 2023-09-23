var selectedRow = null;


// showing alerts--------------------------------//

function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);


    setTimeout(() => document.querySelector(".alert").remove(), 3000);

}

// clear all data code------------------------------//

function clearFields() {
    document.querySelector("Task").value = "";
    document.querySelector("Day").value = "";
    document.querySelector("Time").value = "";

}


// Function to generate a unique slug

function generateUniqueSlug(taskName) {
    let slug = createSlug(taskName);
    const slugElements = document.querySelectorAll('.slug');

    let isUnique = true;
        // Check if the slug is unique
        for (const element of slugElements) {
            if (element.textContent === slug) {
                isUnique = false;
                break;
            }
        }
    
        if (!isUnique) {
            showAlert("Task name is not unique. Please enter another name.", "danger");
            return null; 
        }
    
        return slug;
    }


// ADD data code ---------------------------------//

document.querySelector("#Task-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const Task = document.querySelector("#Task").value;
    const Day = document.querySelector("#Day").value;
    const Time = document.querySelector("#Time").value;
    
    const Slug = generateUniqueSlug(Task); // Generate and check slug for uniqueness
    

    if (Slug === null) {
        // If slug is not unique, do not proceed
        return;
    }


    if (Task == "" || Day == "" || Time == "") {
        showAlert("Please fill all fields", "danger");
    } else {
        
        

        if (selectedRow == null) {
            const list = document.querySelector("#Task-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td class="slug">${Slug}</td>
                <td>${Day}</td>
                <td>${Time}</td>
                <td>
                    <a href="#" class="btn btn-outline-info btn-sm edit">Edit</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            `,t.appendChild(l),selectedRow=null,showAlert("Task Added","success")):(selectedRow.children[0].textContent=e,selectedRow.children[1].textContent=r,selectedRow.children[2].textContent=n,selectedRow=null,showAlert("Task Edited","success")),clearFields()))}),document.querySelector("#Task-list").addEventListener("click",e=>{(target=e.target).classList.contains("edit")&&(selectedRow=target.parentElement.parentElement,document.querySelector("#Task").value=selectedRow.children[0].textContent,document.querySelector("#Day").value=selectedRow.children[1].textContent,document.querySelector("#Time").value=selectedRow.children[2].textContent)}),document.querySelector("#Task-list").addEventListener("click",e=>{(target=e.target).classList.contains("delete")&&(target.parentElement.parentElement.remove(),showAlert("Task Deleted","danger"))}),isLocalStorageSupported()?document.getElementById("project").style.display="block":alert("Your browser does not support local storage. The project cannot be displayed.");