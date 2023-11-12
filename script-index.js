let items = document.querySelector('.latest-projects__items');

let itemsList = JSON.parse(localStorage.getItem('storageList')) ? JSON.parse(localStorage.getItem('storageList')) : [];

if (itemsList.length) {
  showProjectItems();
}

function showProjectItems() {

  items.innerHTML = '';
  for (let i in itemsList) {
    
    items.innerHTML += `<div class='latest-projects__items_item'>
      <div>
        <h3>${itemsList[i].title}
        </h3>
        <p>${itemsList[i].specification}</p>
        <button class='button'>
          Read more
        </button>
      </div>
      <div>
        
        <img src='./assets/media/${itemsList[i].image}' alt=''>
      </div>
    </div>`;
  }

}