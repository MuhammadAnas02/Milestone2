interface ResumeData {
    name: string;
    fatherName: string;
    age: number;
    gender: string;
    qualifications: {
        matriculation: string;
        intermediate: string;
        bachelors: string;
    };
    skills: string[];
}

// Function to get form data
function getFormData(): ResumeData | null {
    const name = (document.querySelector('#name') as HTMLInputElement).value;
    const fatherName = (document.querySelector('#fatherName') as HTMLInputElement).value;
    const age = parseInt((document.querySelector('#age') as HTMLInputElement).value, 10);
    const gender = (document.querySelector('#gender') as HTMLSelectElement).value;
    const matriculation = (document.querySelector('#matriculation') as HTMLInputElement).value;
    const intermediate = (document.querySelector('#intermediate') as HTMLInputElement).value;
    const bachelors = (document.querySelector('#bachelors') as HTMLInputElement).value;
    const skills = [(document.querySelector('#skills') as HTMLInputElement).value];

    if (!name || !fatherName || !age || !gender || !matriculation || !intermediate || !bachelors || !skills) {
        alert("Please fill out all fields.");
        return null;
    }

    return {
        name,
        fatherName,
        age,
        gender,
        qualifications: {
            matriculation,
            intermediate,
            bachelors,
        },
        skills,
    };
}

// Function to display resume data dynamically
function displayResumeData(data: ResumeData) {
    const displayContainer = document.querySelector('#resume-display') as HTMLElement;
    displayContainer.innerHTML = `
        <h2>Your Resume</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Father's Name:</strong> ${data.fatherName}</p>
        <p><strong>Age:</strong> ${data.age}</p>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <h3>Qualifications</h3>
        <ul>
            <li>Matriculation: ${data.qualifications.matriculation}</li>
            <li>Intermediate: ${data.qualifications.intermediate}</li>
            <li>Bachelors: ${data.qualifications.bachelors}</li>
        </ul>
        <h3>Skills</h3>
        <ul>
            ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
    `;
}

// Handle form submission
function handleFormSubmit(event: Event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
    const resumeData = getFormData();
    if (resumeData) {
        displayResumeData(resumeData);
    }
}

// Attach event listener to the form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#resume-form') as HTMLFormElement;
    form.addEventListener('submit', handleFormSubmit);
});
