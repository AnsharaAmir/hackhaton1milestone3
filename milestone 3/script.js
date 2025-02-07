var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('e-mail');
    var contactElement = document.getElementById('contact');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeOutput = "\n   <h3> Resume </h3>\n   <p><strong>Name:</strong>".concat(name_1, "</p>\n<p><strong>email:</strong>").concat(email, "</p>\n<p><strong>contact:</strong>").concat(contact, "</p>\n<h4>Education</h4>\n<p> ").concat(education, " </p>\n<h4>Experience</h4>\n<p> ").concat(experience, "</p>\n<h4>Skills</h4>\n<p> ").concat(skills, "</p>\n   ");
        var outputDiv = document.getElementById('resumeOutput');
        if (outputDiv) {
            outputDiv.innerHTML = resumeOutput;
        }
        else {
            console.error("resumeOutput div not found!");
        }
    }
});
