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

let dataList = []

function formData() {
  // ev.preventDefault()

  let tName = document.getElementById("name").value
  let tEmail = document.getElementById("email").value
  let tType = document.getElementById("type").value
  let tComment = document.getElementById("us").value

  let data = {
    name: tName,
    email: tEmail,
    type: tType,
    comment: tComment
  }

  dataList.push(data)

  localStorage.setItem("formData", JSON.stringify(dataList));
}