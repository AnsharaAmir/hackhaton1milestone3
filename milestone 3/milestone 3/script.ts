document.getElementById('resumeform')?.addEventListener('submit', function(event)
{
   event.preventDefault();
   const nameElement= document.getElementById('name') as HTMLInputElement;
   const emailElement= document.getElementById('e-mail') as HTMLInputElement;
   const contactElement= document.getElementById('contact') as HTMLInputElement;
   const educationElement= document.getElementById('education') as HTMLInputElement;
   const experienceElement= document.getElementById('experience') as HTMLInputElement;
   const skillsElement= document.getElementById('skills') as HTMLInputElement;
if (nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement){
const name = nameElement.value;
const email = emailElement.value;
const contact  = contactElement.value;
const education = educationElement.value;
const experience = experienceElement.value;
const skills = skillsElement.value;



   const resumeOutput = `
   <h3> Resume </h3>
   <p><strong>Name:</strong>${name}</p>
<p><strong>email:</strong>${email}</p>
<p><strong>contact:</strong>${contact}</p>
<h4>Education</h4>
<p> ${education} </p>
<h4>Experience</h4>
<p> ${experience}</p>
<h4>Skills</h4>
<p> ${skills}</p>
   `;
   const outputDiv = document.getElementById('resumeOutput');
   if (outputDiv) {
       outputDiv.innerHTML = resumeOutput;
   } else {
       console.error("resumeOutput div not found!");
   }

   
}
}
)