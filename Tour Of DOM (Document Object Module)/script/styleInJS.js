const sections = document.querySelectorAll('section');
// console.log(sections);

for(const sectionAll of sections){
    // console.log(sectionAll);
    sectionAll.style.border = '2px solid steelblue';
    sectionAll.style.marginBottom = '5px';
    sectionAll.style.borderRadius = '10px';
    sectionAll.style.padding = '10px';
    sectionAll.style.backgroundColor = 'LightGray';
    
    
}

// const placesContainer = document.getElementById('places_container');
// placesContainer.style.backgroundColor = 'lightGreen';

const placesContainer = document.getElementById('places_container');
// placesContainer.classList.add('text_center');
placesContainer.classList.remove('large_text');
