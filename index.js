// Buttons
const button = document.querySelector('#display-name-button');
const nameTag = document.querySelector('#display-name');

button.addEventListener('click', () => {
  nameTag.classList.remove("invisible");

})
// Mouse Over
const lightBulb = document.querySelector('#light-bulb');

lightBulb.addEventListener('mouseover', () => {
  lightBulb.src = 'images/light-bulb-on.png';
  
})
lightBulb.addEventListener('mouseout', () => {
  lightBulb.src = 'images/light-bulb-off.png';
  
})
// Toggle
const toggleBtn = document.querySelector('#toggle-button');
const toggleAlert = document.querySelector('#toggle-alert');

toggleBtn.addEventListener('click', () => {
  toggleAlert.classList.toggle('invisible');
})

// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side
const inputVal = document.querySelector('#form-validate-first-name');
const submitBtn = document.querySelector('#submitbtn');
console.log(inputVal.value.length);
submitBtn.addEventListener('click', () => {
  let nameLength = inputVal.value.length;

  if (nameLength >= 3) {
    inputVal.classList.add('is-valid');
    inputVal.classList.remove('is-invalid');
  } else {
    inputVal.classList.add('is-invalid');
    inputVal.classList.remove('is-valid');

  }
})
// Challenge: Lists
const hobbyInput = document.querySelector('#form-hobby-text')
const addBtn = document.querySelector('#addBtn');
const hobbyList = document.querySelector('#hobby-list');

addBtn.addEventListener('click', () => {
  // hobbyInput.value
  hobbyList.innerHTML += `<li class="list-group-item">${hobbyInput.value}</li>`;
})

// Challenge: Lists (Part 2)
let deleteList = document.querySelectorAll('.badge');

for (let i = 0; i < deleteList.length; i++) {
    deleteList[i].addEventListener('click', () => {
        deleteList[i].parentElement.remove()
    })
}


//better solution below! (for the forms)

// Buttons
const button = document.querySelector('#display-name-button');
const nameTag = document.querySelector('#display-name');
button.addEventListener('click', () => {
  nameTag.classList.remove("invisible");
})
// Mouse Over
const lightBulb = document.querySelector('#light-bulb');
lightBulb.addEventListener('mouseover', () => {
  lightBulb.src = 'images/light-bulb-on.png';
})
lightBulb.addEventListener('mouseout', () => {
  lightBulb.src = 'images/light-bulb-off.png';
})
// Toggle
const toggleBtn = document.querySelector('#toggle-button');
const toggleAlert = document.querySelector('#toggle-alert');
toggleBtn.addEventListener('click', () => {
  toggleAlert.classList.toggle('invisible');
})
// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side
const inputVal = document.querySelector('#form-validate-first-name');
const submitForm = document.querySelector('#form-validate');
submitForm.addEventListener('submit', event => {
    event.preventDefault();
  let nameLength = inputVal.value.length;
  if (nameLength >= 3) {
    inputVal.classList.add('is-valid');
    inputVal.classList.remove('is-invalid');
  } else {
    inputVal.classList.add('is-invalid');
    inputVal.classList.remove('is-valid');
  }
})
// Challenge: Lists
const hobbyInput = document.querySelector('#form-hobby-text')
const addForm = document.querySelector('#form-hobby');
const hobbyList = document.querySelector('#hobby-list');
addForm.addEventListener('submit', e => {
    e.preventDefault();
  // hobbyInput.value
  hobbyList.innerHTML += `<li class="list-group-item">${hobbyInput.value}</li>`;
  hobbyInput.value = '';
})
// Challenge: Lists (Part 2)
let deleteList = document.querySelectorAll('.badge');
for (let i = 0; i < deleteList.length; i++) {
    deleteList[i].addEventListener('click', () => {
        deleteList[i].parentElement.remove()
    })
}