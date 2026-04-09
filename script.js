// Smooth Scrolling

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const id = link.getAttribute("href").substring(1);
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Mobile Menu Toggle

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Hero Buttons

document.getElementById("myWork").onclick = () => {
    document.getElementById("projects")
        .scrollIntoView({ behavior: "smooth" });
};

document.getElementById("contact").onclick = () => {
    document.getElementById("contact")
        .scrollIntoView({ behavior: "smooth" });
};

// Active Navbar

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


// Scroll Animation

const revealElements = document.querySelectorAll(
    ".card, .project-card, .skill-card, .contact, .about-intro"
);

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < trigger) {
            el.classList.add("show");
        }
    });
});


// Typing the techs 

const roles = ["Full Stack Developer", "MERN Developer", "Frontend Specialist"];
const roleElement = document.querySelector(".about h3");

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
    roleElement.textContent = roles[i].substring(0, j);

    if (!isDeleting) {
        j++;

        if (j > roles[i].length) {
            isDeleting = true;
            setTimeout(type, 1200);
            return;
        }

    } else {
        j--;

        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % roles.length;
            j = 0;
        }
    }

    setTimeout(type, isDeleting ? 40 : 80);
}

document.addEventListener("DOMContentLoaded", type);