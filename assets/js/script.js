var selectedRow=null;function showAlert(e,t){var l=document.createElement("div"),t=(l.className="alert alert-"+t,l.appendChild(document.createTextNode(e)),document.querySelector(".container")),e=document.querySelector(".main");t.insertBefore(l,e),setTimeout(()=>document.querySelector(".alert").remove(),3e3)}function clearFields(){document.querySelector("Task").value="",document.querySelector("Day").value="",document.querySelector("Time").value=""}function isLocalStorageSupported(){try{return localStorage.setItem("test","test"),localStorage.removeItem("test"),!0}catch(e){return!1}}document.querySelector("#Task-form").addEventListener("submit",e=>{e.preventDefault();var t,l,e=document.querySelector("#Task").value,r=document.querySelector("#Day").value,n=document.querySelector("#Time").value;""==e||""==r||""==n?showAlert("please fill all fields","danger"):(null==selectedRow?(t=document.querySelector("#Task-list"),(l=document.createElement("tr")).innerHTML=`
    <td>${e}</td>
    <td>${r}</td>
    <td>${n}</td>
    <td>
        <a href="#" class="btn btn-outline-info btn-sm edit">Edit</a>
        <a href="#" class="btn btn-danger btn-sm delete">Delete</a>

    
    `,t.appendChild(l),selectedRow=null,showAlert("task Added","success")):(selectedRow.children[0].textContent=e,selectedRow.children[1].textContent=r,selectedRow.children[2].textContent=n,selectedRow=null,showAlert("Task Edited","succ")),clearFields())}),document.querySelector("#Task-list").addEventListener("click",e=>{(target=e.target).classList.contains("edit")&&(selectedRow=target.parentElement.parentElement,document.querySelector("#Task").value=selectedRow.children[0].textContent,document.querySelector("#Day").value=selectedRow.children[1].textContent,document.querySelector("#Time").value=selectedRow.children[2].textContent)}),document.querySelector("#Task-list").addEventListener("click",e=>{(target=e.target).classList.contains("delete")&&(target.parentElement.parentElement.remove(),showAlert("Task Deleted","danger"))}),isLocalStorageSupported()?document.getElementById("project").style.display="block":alert("Your browser does not support local storage. The project cannot be displayed.");