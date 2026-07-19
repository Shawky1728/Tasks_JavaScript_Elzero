let myDiv = document.getElementsByTagName('div')[0];

myDiv.nextElementSibling.remove();

let divBefore = document.createElement('div');
divBefore.className = 'start';
divBefore.title = 'Start Element';
divBefore.setAttribute('data-value', 'Start');
divBefore.textContent = 'Start';

let divAfter = document.createElement('div');
divAfter.className = 'end';
divAfter.title = 'End Element';
divAfter.setAttribute('data-value', 'End');
divAfter.textContent = 'End';

myDiv.before(divBefore);
myDiv.after(divAfter);
