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
        <div onclick='editItem(${i})' class='edit'>Edit</div>
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

function editItem(index) {
  userTitle.value = `${itemsList[index].title}`;
  specification.value = `${itemsList[index].specification}`;
  imageInput.value = `${itemsList[index].image}`;
}

addButton.addEventListener('click', () => {

  // e.preventDefault();
  window.location.reload(true);
  if (userTitle.value.trim() && specification.value.trim() && imageInput.value) {
  
    let str = imageInput.value;
    let arr = [];
  
    for (let i=0;i<str.length;i++) {
      if (i > 11) {
        arr.push(str[i]);
      }
    }

    let jointStr = arr.join('');

    itemsList.push({title:[userTitle.value], specification:[specification.value], image:[jointStr]});
    
    setToLocal();
    
    showElements();
    
    userTitle.value = '';
    specification.value = '';
    imageInput.value = '';
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
    // }, false); 
