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
    
    
    userTitle.value = '';
    specification.value = '';
    imageInput.value = '';
  }

  showElements();
    
  
  
});




