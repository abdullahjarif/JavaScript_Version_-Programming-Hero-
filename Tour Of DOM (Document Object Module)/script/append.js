// console.log("append js");
// 1. where to add
const placesList = document.getElementById('places_list');
// console.log(placesList);

// 2. what to be added
const list = document.createElement('li');
list.innerText = 'Rangamati';
// list.innerText = 'Chitagong';

placesList.appendChild(list);
console.log(placesList);


// 1. where to add
const mainContainer = document.getElementById('main_container');

// 2. what to be added
const sectionAdd = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
sectionAdd.appendChild(h1);

const sectionUl = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Burgar';
sectionUl.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Biriyani';
sectionUl.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Fried Rice';
sectionUl.appendChild(li3);

sectionAdd.appendChild(sectionUl);

mainContainer.appendChild(sectionAdd);


// another way
// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
<li>Panjabi</li>
<li>Sharee</li>
<li>Lehenga</li>
<li>Sherwani</li>
</ul>
`
mainContainer.appendChild(sectionDress);




