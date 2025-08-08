console.log('third file');


const mainSection = document.getElementById('main_section');

const sectionFour = document.createElement('section');
sectionFour.innerHTML = `
<h1>Seciton Item-4</h1>
<p>Extra text to added this paragraph</p>
<ul>
    <li>item 01</li>
    <li>item 02</li>
    <li>item 03</li>
    <li>item 04</li>
</ul>
`

mainSection.appendChild(sectionFour);

sectionFour.style.backgroundColor = 'lightGray';
sectionFour.style.padding = '10px';
sectionFour.style.borderRadius = '10px';
sectionFour.style.color = 'steelBlue';
