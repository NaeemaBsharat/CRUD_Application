


if (typeof(Storage) !== "undefined") {


    let selectedRow = null;
    const taskMap = {};




    function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);


    setTimeout(() => document.querySelector(".alert").remove(), 3000);

    }



    function clearFields() {
    document.querySelector("Task").value = "";
    document.querySelector("Day").value = "";
    document.querySelector("Time").value = "";

    }

    function generateSlug(taskName) {
        
        return taskName.toLowerCase().replace(/\s+/g, '-');
    }

    function isTaskUnique(slug) {
    
        return !(slug in taskMap);
    }

    document.querySelector("#Task-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const Task = document.querySelector("#Task").value;
    const Day = document.querySelector("#Day").value;
    const Time = document.querySelector("#Time").value;
    const slug = generateSlug(Task);

    if (Task == "" || Day == "" || Time == "") {
        showAlert("Please fill all fields", "danger");
    } else {

     if (!isTaskUnique(slug)) {
            showAlert("Task already exists", "danger");
        }


      else {
        if (selectedRow == null) {
            const list = document.querySelector("#Task-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${Task}</td>
                <td>${Day}</td>
                <td>${Time}</td>
                <td>
                    <a href="#" class="btn btn-outline-info btn-sm edit">Edit</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            `;
            list.appendChild(row);
            taskMap[slug] = true;
            selectedRow = null;
            showAlert("Task Added", "success");
        } else {
            taskMap[slug] = true;
            selectedRow.children[0].textContent = Task;
            selectedRow.children[1].textContent = Day;
            selectedRow.children[2].textContent = Time;
            selectedRow = null;
            showAlert("Task Edited", "success");
            document.querySelector("#submit-button").value = "ADD";
        }
        clearFields();
    }
}
    });



    document.querySelector("#Task-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#Task").value = selectedRow.children[0].textContent;
        document.querySelector("#Day").value = selectedRow.children[1].textContent;
        document.querySelector("#Time").value = selectedRow.children[2].textContent;

        document.querySelector("#submit-button").value = "EDIT";

    }

    });

   
    document.querySelector("#Task-list").addEventListener("click", (e) => {
        target = e.target;
        if (target.classList.contains("delete")) {
           // const slugToDelete = generateSlug(selectedRow.children[0].textContent);
            //delete taskMap[slugToDelete]; 
            target.parentElement.parentElement.remove();
            showAlert("Task Deleted", "danger");
    }
    });
}
else {
    alert("Your browser does not support local storage. Please consider using a different browser.");

}












