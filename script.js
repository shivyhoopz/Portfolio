
/**
### Project Instructions: Creating a Portfolio Website

#### Objective:
Create a personal portfolio website to showcase your skills, projects, and experience using HTML and CSS.

---

#### **Step 1: Set Up Your Project Structure**

1. **Create a project directory** on your computer called `portfolio`.
2. Inside the `portfolio` directory, create the following subdirectories and files:
   - `index.html`
   - `css/`
     - `styles.css`
   - `images/` (to store your images)

---

#### **Step 2: Create the HTML Structure**

1. Open `index.html` and create the basic structure using the `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>` tags.
2. Within the `<head>` tag, add:
   - A `<meta charset="UTF-8">` tag for character encoding.
   - A `<meta name="viewport" content="width=device-width, initial-scale=1.0">` tag for responsive design.
   - A `<title>` tag to set the page title.
   - A `<link rel="stylesheet" href="css/styles.css">` tag to link your CSS file.

3. Within the `<body>` tag, create the following sections:
   - **Header**: Contains a navigation menu.
   - **Home Section**: Introduction with a welcome message.
   - **About Section**: Brief introduction about yourself.
   - **Projects Section**: Showcase your projects.
   - **Contact Section**: Form to contact you.
   - **Footer**: Copyright information.

---

#### **Step 3: Add Content to the HTML**

1. **Header Section**:
   - Use the `<header>` tag.
   - Inside the `<header>`, create a `<nav>` element with an unordered list (`<ul>`) and list items (`<li>`) for navigation links (e.g., Home, About, Projects, Contact).

2. **Home Section**:
   - Use the `<section id="home">` tag.
   - Add a `<h1>` tag for the main welcome message.
   - Add a `<p>` tag for a brief introduction.

3. **About Section**:
   - Use the `<section id="about">` tag.
   - Add a `<h2>` tag for the section title.
   - Add a `<p>` tag to write a brief introduction about yourself.

4. **Projects Section**:
   - Use the `<section id="projects">` tag.
   - Add a `<h2>` tag for the section title.
   - Create a `<div class="project">` for each project, containing:
     - A `<h3>` tag for the project title.
     - An `<img>` tag for the project image.
     - A `<p>` tag for the project description.

5. **Contact Section**:
   - Use the `<section id="contact">` tag.
   - Add a `<h2>` tag for the section title.
   - Create a form using the `<form id="contact-form">` tag, with inputs for name, email, and message, and a submit button.

6. **Footer Section**:
   - Use the `<footer>` tag.
   - Add a `<p>` tag for the copyright information.

---

#### **Step 4: Style Your Portfolio with CSS**

1. Open `css/styles.css` and start by resetting some default styles using the `*` selector.

2. Add general styles for the `body` tag:
   - Set the font family and line height.

3. Style the **Header**:
   - Set the background color, text color, padding, and text alignment.
   - Style the navigation menu (`nav ul`, `nav ul li`, `nav ul li a`).

4. Style the **Sections**:
   - Add padding and margins for each section.
   - Differentiate sections with background colors.

5. Style the **Project Divs**:
   - Add margin for each project.
   - Ensure images are responsive by setting the width to 100%.

6. Style the **Contact Form**:
   - Add styles for the form, labels, inputs, and textarea.
   - Style the submit button.

7. Style the **Footer**:
   - Set background color, text color, padding, and text alignment.

---

#### **Step 5: Add Your Content**

1. Replace placeholder text with your actual content:
   - Update the navigation links.
   - Add your introduction and details in the About section.
   - Add your real projects with images and descriptions in the Projects section.
   - Customize the Contact form as needed.

2. Add images to the `images/` directory and use them in the Projects section.

---

#### **Step 6: Test and Optimize**

1. **Test** your website on different browsers to ensure compatibility.
2. **Optimize** images and other resources for faster loading times.
3. **Ensure Responsiveness** by adding media queries in your CSS for different screen sizes.

---

#### **Step 7: Deploy Your Portfolio**

1. **Choose a hosting platform**: GitHub Pages, Netlify, Vercel, etc.
2. **Deploy your site**: Follow the platform's instructions to upload your project and make it live.

---
*/
 /* document.querySelector("#home-btn").onclick=()=>{
   document.querySelector("#home").style.display="block";
 /*  document.querySelector("#contact").style.display="none";
   document.querySelector("#about").style.display="none";
   document.querySelector("#projects").style.display="none";
}*/
document.querySelector("#home").style.display="block";
const allsections = document.querySelectorAll(".nav-section");
function hideallsection(){
  
   for(let i=0; i<allsections.length; i++){
      allsections[i].style.display="none"
   }
   
}
const allnav = document.querySelectorAll(".navlink")
for(let i = 0; i<allnav.length;i++){
   allnav[i].onclick=()=>{
      hideallsection();
      allsections[i].style.display="block"
   }
}





document.querySelector("#submitb").onclick=(event)=>{
 event.preventDefault();
 let name = document.querySelector("#name").value;
 let email = document.querySelector("#email").value;
 let message = document.querySelector("#message").value;
 alert(name+ "\n"+email+"\n"+message)
 
 document.querySelector("#success").style.display="block";
}




/*
document.querySelector("#about-btn").onclick=()=>{
   document.querySelector("#about").style.display="block";
   document.querySelector("#home").style.display="none";
   document.querySelector("#projects").style.display="none";
   document.querySelector("#contact").style.display="none";
}
document.querySelector("#projects-btn").onclick=()=>{
   document.querySelector("#projects").style.display="block";
   document.querySelector("#home").style.display="none";
   document.querySelector("#about").style.display="none";
   document.querySelector("#contact").style.display="none";
}
document.querySelector("#contact-btn").onclick=()=>{
   document.querySelector("#contact").style.display="block";
   document.querySelector("#home").style.display="none";
   document.querySelector("#about").style.display="none";
   document.querySelector("#projects").style.display="none";
}
   */