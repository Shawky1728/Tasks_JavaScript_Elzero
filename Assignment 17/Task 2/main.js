let classToAdd = document.querySelector('.classes-to-add');
let classToRemove = document.querySelector('.classes-to-remove');
let classesList = document.querySelector('.classes-list div');
let data =[];

classToAdd.addEventListener('blur', function() {
  let newClass = this.value.trim().toLowerCase();
  let items = newClass.split(' ');
  if (newClass) {
    for (let i = 0; i < items.length; i++) {
     data.push(items[i]);
    }
    data.sort();
    this.value = '';
    updateClassesList();
  }
});

classToRemove.addEventListener('blur', function() {
  let classToRemove = this.value.trim().toLowerCase();
  let items = classToRemove.split(' ');
  if (classToRemove) {
    for (let i = 0; i < items.length; i++) {
      if(data.includes(items[i])) {
        data.splice(data.indexOf(items[i]), 1);
      }
    }
   data.sort();
    this.value = '';
    updateClassesList();
  }
});

function updateClassesList() {
  classesList.innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    let span = document.createElement('span');
    span.textContent = data[i];
    classesList.appendChild(span);
  }
}
