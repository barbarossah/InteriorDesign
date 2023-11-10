let items = document.querySelector('.latest-projects__items');

let itemsList = JSON.parse(localStorage.getItem('storageList')) ? JSON.parse(localStorage.getItem('storageList')) : [];

if (itemsList.length) {
  showProjectItems();
}

function showProjectItems() {
  items.innerHTML = '';
  //${itemsList[i].title}
  //${itemsList[i].specification}
  //${itemsList[i].image}
  for (let i in itemsList) {
    items.innerHTML += `<div class='latest-projects__items_item'>
      <div>
        <h3 class='latest-projects__items_item__left_title'>The Tropical 
        Workspace Style</h3>
        <p>Tropical style is all about comfort, ease and utility and is eclectic by definition. The style is characterized by warm and colors drawn mostly from lighting.
        </p>
      </div>
      <div class='latest-projects__items_item'>
        <img src='./assets/media/picture-16.jpg' alt='picture'>
      </div>
    </div>`;
  }
}