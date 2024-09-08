"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};
// Function to generate resume HTML
const generateResumeHTML = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Get all inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const institutionInput = document.getElementById('institution');
    const degreeInput = document.getElementById('degree');
    const graduationDateInput = document.getElementById('graduation-date');
    const skillsInput = document.getElementById('skills');
    const companyInput = document.getElementById('company');
    const positionInput = document.getElementById('position');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const responsibilitiesInput = document.getElementById('responsibilities');
    const aboutInput = document.getElementById('about-me');
    const photoInput = document.getElementById('photo');
    // Basic validation
    if (!nameInput || !emailInput || !phoneInput || !addressInput ||
        !institutionInput || !degreeInput || !graduationDateInput ||
        !skillsInput || !companyInput || !positionInput ||
        !startDateInput || !endDateInput || !responsibilitiesInput) {
        alert('Please ensure all required fields are present.');
        return '';
    }
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const address = addressInput.value.trim();
    const photoBase64 = photoInput && ((_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0]) ? yield fileToBase64(photoInput.files[0]) : '';
    const institution = institutionInput.value.trim();
    const degree = degreeInput.value.trim();
    const graduationDate = graduationDateInput.value.trim();
    const skills = skillsInput.value.trim();
    const company = companyInput.value.trim();
    const position = positionInput.value.trim();
    const startDate = startDateInput.value.trim();
    const endDate = endDateInput.value.trim();
    const responsibilities = responsibilitiesInput.value.trim();
    const about = aboutInput ? aboutInput.value.trim() : '';
    if (!name || !email || !phone || !address || !institution ||
        !degree || !graduationDate || !skills || !company ||
        !position || !startDate || !endDate || !responsibilities) {
        alert('Please fill in all required fields.');
        return '';
    }
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return '';
    }
    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number (11 digits).');
        return '';
    }
    // Validate dates (simple check)
    if (new Date(startDate) > new Date(endDate)) {
        alert('End date cannot be before the start date.');
        return '';
    }
    // Generate resume HTML
    return `
       <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    <style>
        .resume-container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
            border: 1px solid #000829;
            background-color: #93a8cb;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* Header Styling */
        .resume-header h1 {
            color: #fff; 
            margin: 0;
            padding: 10px;
            border-radius: 5px;
            background-color: #05005e; 
            border: 2px solid black; 
            font-size: 24px;
        }
        
        .resume-header p {
            font-size: 16px;
            margin: 5px 0;
        }

        /* Personal Information Section Styling */
        .resume-header {
            background-color: #f9f9f9;
            border: 1px solid #ddd; 
            border-radius: 8px;
            padding: 20px; 
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
            margin-bottom: 20px; 
        }

        /* Profile Image Styling */
        .resume-header img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            display: block;
            margin: 20px auto;
            box-shadow: 0 4px 12px #05005e; 
            transition: box-shadow 0.3s ease; 
        }

        /* About Me Section Styling */
        .about-me {
            color: #000000;
            background-color: #f9ffff;
            border: none;
            font-size: 20px;
            padding: 5px;
            margin-top: 10px; 
            border-bottom: 2px solid #ddd;
        }

        .resume-section {
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #ddd; 
            border-radius: 8px;
            background-color: #f9f9f9;
        }

        .resume-section h2 {
            color: #fff; 
            margin: 0;
            padding: 10px;
            border-radius: 5px;
            background-color: #05005e; 
            border: 2px solid black; 
            font-size: 24px;
        }

        /* Education Section Styling */
        .education-container {
            margin-bottom: 50px; 
        }

        .education-container.hidden {
            display: none; 
        }

        .education ul {
            list-style-type: none; 
            padding: 0;
        }

        .education li {
            margin-bottom: 15px; 
            padding: 10px;
            border: 1px solid #ddd; 
            border-radius: 5px; 
            background-color: #fff; 
        }

        /* Work Experience Section Styling */
        .work-experience-container {
            margin-bottom: 50px; 
        }

        .work-experience-container.hidden {
            display: none; 
        }

        .work-experience ul {
            list-style-type: none; 
            padding: 0;
        }

        .work-experience li {
            margin-bottom: 15px; 
            padding: 10px;
            border: 1px solid #ddd; 
            border-radius: 5px; 
            background-color: #fff; 
        }

        /* Skills Section Styling */
        .skills-container {
            margin-bottom: 50px; 
        }

        .skills-container.hidden {
            display: none; 
        }

        .skill {
            padding: 10px 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 15px; 
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-name {
            font-size: 16px;
            color: #333;
        }

        /* Button Styling */
        button {
            display: inline-block;
            padding: 10px 15px;
            font-size: 16px;
            color: #fff;
            background-color: #003366; 
            border: 2px solid black; 
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            transition: background-color 0.3s ease, transform 0.2s ease; 
        }

        button:hover {
            background-color: #002244; 
            transform: translateY(-2px); 
        }
    </style>
</head>
<body>
    <div class="resume-container">
        <div class="resume-header">
            ${photoBase64 ? `<img src="${photoBase64}" alt="Photo"/>` : '<p>No photo available</p>'}
            <h1>${name}</h1>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Address: ${address}</p>
        </div>
          <div class="resume-section about-me">
            <h2>About</h2>
            <p>${about}</p>
        </div>
        <div class="resume-section education-container">
            <h2>Education</h2>
            <p><strong>Institution: ${institution}</strong></p>
            <p>Degree: ${degree}</p>
            <p>Graduation Date: ${graduationDate}</p>
        </div>
         <div class="resume-section work-experience-container">
            <h2>Work Experience</h2>
            <p><strong>${company}</strong> - ${position}</p>
            <p>Start Date: ${startDate}</p>
            <p>End Date: ${endDate || 'Present'}</p>
            <p>Responsibilities: ${responsibilities}</p>
        </div>
        <div class="resume-section skills-container">
            <h2>Skills</h2>
            <p>${skills}</p>
        </div>
       
    </div>
</body>
</html>
`;
});
// Event listeners and functions
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-resume');
    const resumeOutput = document.getElementById('resume-output');
    const resumeContent = document.getElementById('resume-content');
    generateButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        const resumeHTML = yield generateResumeHTML();
        if (resumeHTML) {
            resumeContent.innerHTML = resumeHTML;
            resumeOutput.classList.remove('hidden');
        }
    }));
    // Education Section Toggle Button
    const toggleButtonEducation = document.getElementById("toggle-education");
    const educationContainer = document.querySelector(".education-container");
    toggleButtonEducation === null || toggleButtonEducation === void 0 ? void 0 : toggleButtonEducation.addEventListener("click", () => {
        if (educationContainer.style.display === "none" || !educationContainer.style.display) {
            educationContainer.style.display = "block";
            toggleButtonEducation.textContent = "Hide Education";
        }
        else {
            educationContainer.style.display = "none";
            toggleButtonEducation.textContent = "Show Education";
        }
    });
    // Work Experience Section Toggle Button
    const toggleButtonWork = document.getElementById("toggle-work");
    const workExperienceContainer = document.querySelector(".work-experience-container");
    toggleButtonWork === null || toggleButtonWork === void 0 ? void 0 : toggleButtonWork.addEventListener("click", () => {
        if (workExperienceContainer.style.display === "none" || !workExperienceContainer.style.display) {
            workExperienceContainer.style.display = "block";
            toggleButtonWork.textContent = "Hide Work Experience";
        }
        else {
            workExperienceContainer.style.display = "none";
            toggleButtonWork.textContent = "Show Work Experience";
        }
    });
    // Skills Section Toggle Button
    const toggleButtonSkills = document.getElementById("toggle-skills");
    const skillsContainer = document.querySelector(".skills-container");
    toggleButtonSkills === null || toggleButtonSkills === void 0 ? void 0 : toggleButtonSkills.addEventListener("click", () => {
        if (skillsContainer.style.display === "none" || !skillsContainer.style.display) {
            skillsContainer.style.display = "block";
            toggleButtonSkills.textContent = "Hide Skills";
        }
        else {
            skillsContainer.style.display = "none";
            toggleButtonSkills.textContent = "Show Skills";
        }
    });
    // Navigation toggle script
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});