async function getStudents() {
    const response = await fetch('/students');
    return await response.json()
};

async function init () {
    const students = await getStudents();
    document.body.innerHTML = getStudentListHTML(students);
};

function getStudentListHTML (students){
    console.log(students);
    const studentListHTMLs = students.map(studentComponent);
    console.log(studentListHTMLs);
    return studentListHTMLs.join(""); 
};

function studentComponent (student) {
    return `
        <div calss="student">
            <p>${student.name}</p>
            <p>${student.status}</p>
        </div>
    `
};

init();