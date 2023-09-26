let selectedRow = null;




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




function generateUniqueSlug(taskName) {
    const slug = createSlug(taskName);
    const slugElements = document.querySelectorAll('.slug');

    let isUnique = true;
    
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




document.querySelector("#Task-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const Task = document.querySelector("#Task").value;
    const Day = document.querySelector("#Day").value;
    const Time = document.querySelector("#Time").value;

    const Slug = generateUniqueSlug(Task); 


    if (Slug === null) {
        
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
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Task Added", "success");
        } else {
            selectedRow.children[0].textContent = Task;
            selectedRow.children[1].textContent = Day;
            selectedRow.children[2].textContent = Time;
            selectedRow = null;
            showAlert("Task Edited", "success");
        }
        clearFields();
    }
});


document.querySelector("#Task-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#Task").value = selectedRow.children[0].textContent;
        document.querySelector("#Day").value = selectedRow.children[1].textContent;
        document.querySelector("#Time").value = selectedRow.children[2].textContent;

    }

});


document.querySelector("#Task-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Task Deleted", "danger");
    }
});

function createSlug(text) {
    return text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .substring(0, 50);
}





function isLocalStorageSupported() {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
    } catch (e) {
        return false;
    }
}


if (isLocalStorageSupported()) {
    document.getElementById('project').style.display = 'block';
} else {
    alert('Your browser does not support local storage. The project cannot be displayed.');
}






