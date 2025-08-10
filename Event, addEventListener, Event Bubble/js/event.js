console.log('This is Separate JS File');

// option-01: directly set on the HTML element
// <button onclick="console.log(65)">Another Button</button>
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option-02: add onlclick function on the HTML element
// <button onclick = makeRed()>Make Red</button>
const makeBlue = document.getElementById('blue_btn');
makeBlue.onclick = makeBlueColor;

function makeBlueColor(){
    document.body.style.backgroundColor = 'blue';
}

const makePurple = document.getElementById('purple_btn');
makePurple.onclick = makePurpleColor;

function makePurpleColor(){
    document.body.style.backgroundColor = 'purple';
}

// option-03: adddEventListener
const makePink = document.getElementById('pink_btn');
makePink.addEventListener('click', makePinkColor)

function makePinkColor(){
    document.body.style.backgroundColor = 'pink';
}

// option-04: another 
const makeGreen = document.getElementById('green_btn');
makeGreen.addEventListener('click', function makeGreenColor(){
    document.body.style.backgroundColor = 'green';
});

// option-05: final useable
// IMPORTANT: We will use this most of the times 
// document.getElementById('id').addEventListener('click', function(){});
document.getElementById('goldenRod_btn').addEventListener('click', function makeGoldenRod(){
    document.body.style.backgroundColor = 'goldenRod';
}); 



