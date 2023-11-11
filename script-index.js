let items = document.querySelector('.latest-projects__items');

let itemsList = JSON.parse(localStorage.getItem('storageList')) ? JSON.parse(localStorage.getItem('storageList')) : [];

if (itemsList.length) {
  showProjectItems();
}

{/* <img src='${itemsList[i].image}' alt=''></img> */}
function showProjectItems() {
  /* let imgAdress = '';
  let imgSplit = '';
  let imageCorrection = ''; */
  items.innerHTML = '';
  for (let i in itemsList) {
    /* imgAdress = itemsList[i].image;
    imgSplit = imgAdress.split('');
    for (let j = 0; j < imgAdress.length; ++j) {
      if (j >= 12) {
        imageCorrection.push(imgAdress[j]);
      }
    }
    console.log(imageCorrection); */
    
    items.innerHTML += `<div class='latest-projects__items_item'>
      <div>
        <h3 class='latest-projects__items_item__left_title'>${itemsList[i].title}
        </h3>
        <p>${itemsList[i].specification}</p>
      </div>
      <div>
        
        <img src='./assets/media/${itemsList[i].image}' alt=''>
      </div>
    </div>`;
  }

}