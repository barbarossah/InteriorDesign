let formCreate = document.querySelector('.dashboard__panel_form');
let userTitle = document.querySelector('.Title');
let specification = document.querySelector('.specification');
let imageInput = document.querySelector('.image');
let addButton = document.querySelector('.add-btn');
let table = document.querySelector('.dashboard__panel_table_body');


//check

let itemsList = JSON.parse(localStorage.getItem('storageList')) ? JSON.parse(localStorage.getItem('storageList')) : [];

if (itemsList.length) {
  showElements();
}


function showElements() {
  table.innerHTML = '';
  for (let i in itemsList) {

    
    table.innerHTML += `<tr><td class='dashboard__panel_table_body_td'>${itemsList[i].title}</td>
      <td class='dashboard__panel_table_body_option'>
        <div class='edit'>Edit</div>
        <div onclick='deleteItem(${i})' class='delete'>Delete</div>
      </td>
    </tr>`;
    
  } 
}

function setToLocal() {
  localStorage.setItem('storageList', JSON.stringify(itemsList));
}

function deleteItem(id) {
  itemsList.splice(id, 1)
  setToLocal();
  showElements();
}





addButton.addEventListener('click', () => {
// && imageInput.value  
// && specification.value.trim()
  // e.preventDefault();
  window.location.reload(true);
  if (userTitle.value.trim()) {

    let str = imageInput.value;
    let arr = [];

    for (let i=0;i<str.length;i++) {
      if (i > 11) {
        arr.push(str[i]);
      }
    }

    let jointStr = arr.join('');
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
    // }, false); 

    itemsList.push({title:[userTitle.value], specification:[specification.value], image:[jointStr]});
    
    setToLocal();
    
    showElements();
    
    userTitle.value = '';
    specification.value = '';
    imageInput.value = '';
  }

    
  
  
});




