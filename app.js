// const mynam = (document.getElementById("input0") as HTMLInputElement).value
// const fathName = (document.getElementById("input1") as HTMLInputElement).value
// const age = (document.getElementById("input2") as HTMLInputElement).value
// const education1 = (document.getElementById("input3") as HTMLInputElement).value
// const education2 = (document.getElementById("input4") as HTMLInputElement).value
// const education3 = (document.getElementById("input5") as HTMLInputElement).value
// const skills = (document.getElementById("input6") as HTMLInputElement).value
// const buttons = document.getElementById("upload-button") as HTMLButtonElement 
// Function to get form data
function getFormData() {
    var name = document.querySelector('#name').value;
    var fatherName = document.querySelector('#fatherName').value;
    var age = parseInt(document.querySelector('#age').value, 10);
    var gender = document.querySelector('#gender').value;
    var matriculation = document.querySelector('#matriculation').value;
    var intermediate = document.querySelector('#intermediate').value;
    var bachelors = document.querySelector('#bachelors').value;
    var skills = [document.querySelector('#skills').value];
    if (!name || !fatherName || !age || !gender || !matriculation || !intermediate || !bachelors || !skills) {
        alert("Please fill out all fields.");
        return null;
    }
    return {
        name: name,
        fatherName: fatherName,
        age: age,
        gender: gender,
        qualifications: {
            matriculation: matriculation,
            intermediate: intermediate,
            bachelors: bachelors,
        },
        skills: skills,
    };
}
// Function to display resume data dynamically
function displayResumeData(data) {
    var displayContainer = document.querySelector('#resume-display');
    displayContainer.innerHTML = "\n        <h2>Your Resume</h2>\n        <p><strong>Name:</strong> ".concat(data.name, "</p>\n        <p><strong>Father's Name:</strong> ").concat(data.fatherName, "</p>\n        <p><strong>Age:</strong> ").concat(data.age, "</p>\n        <p><strong>Gender:</strong> ").concat(data.gender, "</p>\n        <h3>Qualifications</h3>\n        <ul>\n            <li>Matriculation: ").concat(data.qualifications.matriculation, "</li>\n            <li>Intermediate: ").concat(data.qualifications.intermediate, "</li>\n            <li>Bachelors: ").concat(data.qualifications.bachelors, "</li>\n        </ul>\n        <h3>Skills</h3>\n        <ul>\n            ").concat(data.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n        </ul>\n    ");
}
// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
    var resumeData = getFormData();
    if (resumeData) {
        displayResumeData(resumeData);
    }
}
// Attach event listener to the form
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('#resume-form');
    form.addEventListener('submit', handleFormSubmit);
});
