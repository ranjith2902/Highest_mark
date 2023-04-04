const studentMarksForm = document.querySelector(".studentForm");
const studentResult = document.querySelector("#blankcontainer");

studentMarksForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const marks = Array.from(this.elements['marks[]']).map(element => parseFloat(element.value));


    const highestMarks = Math.max(...marks);

    const studentIndex = marks.findIndex(marks => marks === highestMarks) + 1;

    const studentName = Student '${studentIndex}';

    const result = isNaN(highestMarks) ? "please enter the valid marks for all students : '${studentName}' scored the highest marks : '${highestmarks}'';

    studentResult.innerText = result;

}); 