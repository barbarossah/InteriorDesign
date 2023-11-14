let formCreate = document.querySelector(".dashboard__panel_form");
let userTitle = document.querySelector(".Title");
let specification = document.querySelector(".specification");
let imageInput = document.querySelector(".image");
let addButton = document.querySelector(".add-btn");
let table = document.querySelector(".dashboard__panel_table_body");
let saveButton = document.querySelector(".save-btn");

let indexForEdit = 0;

let itemsList = JSON.parse(localStorage.getItem("storageList"))
  ? JSON.parse(localStorage.getItem("storageList"))
  : [];

if (itemsList.length) {
  showElements();
}

if (!saveButton.classList.contains("hidden")) {
  addButton.addEventListener("change", () => {
    addButton.disabled = true;
  });
}

function showElements() {
  table.innerHTML = "";
  for (let i in itemsList) {
    table.innerHTML += `<tr><td class='dashboard__panel_table_body_td'>${itemsList[i].title}</td>
      <td class='dashboard__panel_table_body_option'>
        <div onclick='editItem(${i})' class='edit'>Edit</div>
        <div onclick='deleteItem(${i})' class='delete'>Delete</div>
      </td>
    </tr>`;
  }
}

function setToLocal() {
  localStorage.setItem("storageList", JSON.stringify(itemsList));
}

function deleteItem(id) {
  itemsList.splice(id, 1);
  setToLocal();
  showElements();
}

function editItem(index) {
  userTitle.value = "";
  specification.value = "";
  imageInput.value = "";
  userTitle.value = `${itemsList[index].title}`;
  specification.value = `${itemsList[index].specification}`;
  // imageInput.value = `${itemsList[index].image}`;
  saveButton.classList.remove("hidden");
  indexForEdit = index;
}

saveButton.addEventListener("click", () => {
  // location.reload();

  if (!imageInput.value) {
    imageInput.classList.add("red-border");
  }

  if (
    userTitle.value.trim() &&
    specification.value.trim() &&
    imageInput.value
  ) {
    let str = imageInput.value;
    let arr = [];

    for (let i = 0; i < str.length; i++) {
      if (i > 11) {
        arr.push(str[i]);
      }
    }

    let jointStr = arr.join("");

    itemsList[indexForEdit].title = userTitle.value;
    itemsList[indexForEdit].specification = specification.value;
    itemsList[indexForEdit].image = jointStr;

    userTitle.value = "";
    specification.value = "";
    imageInput.value = "";
    saveButton.classList.add("hidden");
    imageInput.classList.remove("red-border");
  }

  setToLocal();
  showElements();
});

/* document.getElementsByClassName('image').addEventListener('change', function(){
  if( this.value ){
    console.log( "Оппа, выбрали файл!" );
    console.log( this.value );
  } else { // Если после выбранного тыкнули еще раз, но дальше cancel
    console.log( "Файл не выбран" ); 
  }
}); */

addButton.addEventListener("click", () => {
  // e.preventDefault();
  // window.location.reload(true);

  if (!imageInput.value) {
    imageInput.classList.add("red-border");
  }

  // let saveButton = document.querySelector(".save-btn");

  if (
    userTitle.value.trim() &&
    specification.value.trim() &&
    imageInput.value &&
    saveButton.classList.contains("hidden")
  ) {
    let str = imageInput.value;
    let arr = [];

    for (let i = 0; i < str.length; i++) {
      if (i > 11) {
        arr.push(str[i]);
      }
    }

    let jointStr = arr.join("");

    itemsList.push({
      title: [userTitle.value],
      specification: [specification.value],
      image: [jointStr],
    });

    setToLocal();

    showElements();

    userTitle.value = "";
    specification.value = "";
    imageInput.value = "";
    imageInput.classList.remove("red-border");
  }
});

// editItem();

// imageInput.addEventListener("load", function () {
//   let imgCanvas = document.createElement("canvas"),
//       imgContext = imgCanvas.getContext("2d");

//   // Make sure canvas is as big as the picture
//   imgCanvas.width = imageInput.width;
//   imgCanvas.height = imageInput.height;

//   // Draw image into canvas element
//   imgContext.drawImage(imageInput, 0, 0, imageInput.width, imageInput.height);

//   // Get canvas contents as a data URL
//   var imgAsDataURL = imgCanvas.toDataURL("image/png");

//   // Save image into localStorage
//  /*  try {
//       localStorage.setItem("image", imgAsDataURL);
//   }
//   catch (e) {
//       console.log("Storage failed: " + e);
//   } */
//  }, false);

let auth = document.querySelector(".authorization");
let loginButton = document.querySelector(".authorization__form_button");
let userName = document.querySelector(".authorization__form_login");
let userPassword = document.querySelector(".authorization__form_password");
let closeButton = document.querySelector(".dashboard__sections_form_button");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  // window.location.reload(false);
  if (userName.value == "admin" && userPassword.value == "2495") {
    auth.style.translate = "-105% 0";
  }
});

closeButton.onclick = () => {
  auth.style.translate = "0";
  userName.value = "";
  userPassword.value = "";
};

let dash = document.querySelector(".dashboard__panel");
let fd = document.querySelector(".formDatas");

function dNone() {
  dash.style.display = "none";
  fd.style.display = "flex";
}

function dBlock() {
  dash.style.display = "block";
  fd.style.display = "none";
}

document.getElementById("fd").addEventListener("click", dNone);
document.querySelector(".dashboard__sections_item").addEventListener("click", dBlock);

let formData = localStorage.getItem("formData");
let data = JSON.parse(formData);
let formTable = document.getElementById("tableData");
let deleteData = document.querySelector(".deleteForm")

function showTable() {
  formTable.innerHTML = "";
  for (let i in data) {
    formTable.innerHTML += `<tr>
    <td class='border'>${data[i].name}</td>
    <td class='border'>${data[i].email}</td>
    <td class='border'>${data[i].type}</td>
    <td class='border'>${data[i].comment}</td>
    <td class='border'><button class="deleteForm" onclick='deleteItem(${i})'>Delete</button></td>
    </tr>`;
  }
}

function deleteItem(id) {
  data.splice(id, 1);
  setToForm();
  showTable();
}

function setToForm() {
  localStorage.setItem("localList", JSON.stringify(data));
}

window.addEventListener('storage', () => {
  // When local storage changes do something like a refresh
  window.location.reload(true)
});

showTable()
