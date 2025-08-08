console.log('first js file');

const allList = document.getElementsByTagName('li');
console.log(allList);

const allTitle = document.getElementsByClassName('section_title');
console.log(allTitle);

const firstId = document.getElementById('first_Section');
console.log(firstId);

const secondId = document.getElementById('second_Section');
console.log(secondId);

const thirdId = document.getElementById('third_Section');
console.log(thirdId);

secondId.style.backgroundColor = 'lightGray';
secondId.style.color = 'green';
secondId.style.padding = '10px';
secondId.style.marginBottom = '10px';
secondId.style.borderRadius = '10px';
console.log(secondId);


firstId.style.backgroundColor = 'lightBlue';
firstId.style.color = 'red';
firstId.style.padding = '10px';
firstId.style.marginBottom = '10px';
firstId.style.borderRadius = '10px';
console.log(firstId);

thirdId.style.backgroundColor = 'lightYellow';
thirdId.style.color = 'blueViolet';
thirdId.style.padding = '10px';
thirdId.style.marginBottom = '10px';
thirdId.style.borderRadius = '10px';
console.log(thirdId);




