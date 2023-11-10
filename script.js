let formCreate = document.querySelector('.dashboard__panel_form');
let userTitle = document.querySelector('.Title');
let specification = document.querySelector('.specification');
let imageInput = document.querySelector('.image');
let addButton = document.querySelector('.add-btn');
let table = document.querySelector('.dashboard__panel_table_body');
// let itemsList = [];

//check

let itemsList = JSON.parse(localStorage.getItem('storageList')) ? JSON.parse(localStorage.getItem('storageList')) : [];

if (itemsList.length) {
  showElements();
}

/* ============== index.html  =================== */

let items = document.querySelector('.latest-projects__items');

/* ============== index.html  =================== */

function showElements() {
  table.innerHTML = '';
  for (let i in itemsList) {

    
    table.innerHTML += `<tr><td class='dashboard__panel_table_body_td'>${itemsList[i].title}</td>
      <td class='dashboard__panel_table_body_option'>
        <div class='edit'>Edit</div>
        <div class='delete'>Delete</div>
      </td>
    </tr>`;
    
  } 
}

addButton.addEventListener('click', () => {
// && imageInput.value  
// && specification.value.trim()
  // e.preventDefault();
  if (userTitle.value.trim()) {

    itemsList.push({title:[userTitle.value], specification:[specification.value], image:[imageInput.value]});
    
    localStorage.setItem('storageList', JSON.stringify(itemsList));
    
    
    showElements();
    userTitle.value = '';
    specification.value = '';
    imageInput.value = '';
  }
    
    // parsedList = JSON.parse(localStorage.getItem('itemsList'));
    // console.log(parsedList);
    

  
    
  
});


// JSON.parse(localStorage.getItem('itemsList'));


// items.innerHTML = '';


// for (let i in itemsList) {

//   items.innerHTML += `<div><div style='font-size: 35px'>${itemsList[i].title}</div>
//   <div'>
//   </div>
//   </div>`;
// }