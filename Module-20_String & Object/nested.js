const college = {
    name: 'Feni Govt. College',
    class: ['11','12'],
    events: ['science fair', 'victory day'],
    speciality: {
        color: 'blue',
        result: {
            gpa: 5.00,
            merit: 'topmost'
        }
    }
};
college.speciality.baseColor = 'white';
college.speciality.result.merit = 'top top most';
console.log(college.speciality);
console.log(college.speciality.color);
console.log(college.speciality.baseColor);

console.log("GPA", college.speciality.result.gpa);
console.log("GPA Level", college.speciality.result.merit);

console.log(college.events[0]);
console.log(college.events[1]);

// delete property
delete college.class;

delete college.speciality.result; // delete result object 
console.log(college);


