document
.querySelector(`form`)
.addEventListener(`Submit`,  setGrade)

let grades = [];

function setGrade() {
    e.preventDefault(e);
    let name = document.querySelector('#name').value
    let grade = parseFloat (document.querySelector(`#grade`).value)
    console.log({name,grade})
    grades.push(grades)
    (printGrades)
}

function printGrades() {
    let o = document.querySelector('#output');
    let sum = 0;
    for (let i=0; i<grades.length; i++){
        sum += grades[i].grade;
    }
    let avg = sum/grades.length;
    o.innerText = avg;
}