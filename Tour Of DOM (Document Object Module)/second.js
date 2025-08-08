console.log('second js file');

const secondList = document.getElementById('second_list')

const ulList = document.createElement('li');
ulList.innerText = 'item 05';
secondList.appendChild(ulList);

