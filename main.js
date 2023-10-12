

// Elements
const header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle");
const app = document.getElementById("app");
const projectsContainer = document.querySelector(".projects");

const projects =[

  {
title: "REELS-BRIDS:Movie shows",
description:
 "Fitness and health have never been more accessible. Map - Pro offers an interactive workout mapping appor athletes and fitness enthusiasts who love tracking their workouts and seeing the change in their fitness. Map - Pro is an easy-to-use fitness app that provides safe and effective workouts in ",
image: "https://pbs.twimg.com/media/FeSw_tdVsAA4JxI?format=jpg&name=large",
tools: "html, css, js, leaflet.js, parcel",
liveLink: "https://sarkarfahim.github.io/REELS-BRIDS/",
githubLink: "https://github.com/sarkarfahim/REELS-BRIDS"
},

{
title: "Spectra Bank - An online bank application",
description: "Spectra Bank is an online bank that helps you save with the power of technology! With our application, you can easily deposit checks, transfer money, and send and receive payments. All without any hassle. What's more: we've made sure the experience of using Spectra Bank is as seamless as possible. With a modern UI and UX, it's not hard to see why many people are switching their banking to Spectra Bank!",
image: "https://pbs.twimg.com/media/FeSw4W6VIAEDuOg?format=jpg&name=large",
tools: "html, css, js",
liveLink: "https://sarkarfahim.github.io/Bank-projectg/",
githubLink: "https://github.com/sarkarfahim/Bank-projectg"
},
{
title: "Tera Guard - An anti-virus website",
description: "A mix of pure simplicity and functional elegance, Tera Guard is a web-based security solution thaprovides protection against internet threats, malware and cyber-attacks. With our robust system, you can be confident that your data and network are safe from hackers and malicious intent. Enjoy the peace of mind knowing your business is protected with our 24/7 customer support team.",
image: "https://pbs.twimg.com/media/FeSw8ekVEAEK797?format=jpg&name=large",
tools: "html, css, js, parcel",
liveLink: " https://sarkarfahim.github.io/devoloper-portfolio/",
githubLink: "https://github.com/sarkarfahim/TERA-GURD2"
},

];


class App{
  constructor(){
   this._stikeyNav();
   this._activeLinks();
   this._togglerMobilenav();
   this._tagCloud();
   this._writeType();
   this._projectEmpliment()
  };
///stikey navbar
  _stikeyNav(){
    const navHeight = nav.getBoundingClientRect().height;

    const navObserver = new IntersectionObserver(this._sticky, {
     root: null,
     threshold: 0,
     rootMargin: `-${navHeight}px`,
  });
     navObserver.observe(header);
  }
    _sticky(entries) {
    const entry = entries[0];
     if (!entry.isIntersecting) header.classList.add("sticky");
     else header.classList.remove("sticky");
   };

// Link active
_activeLinks(){
 links.forEach((link) =>
  link.addEventListener("click", (e) => {
    const link = e.target;
    const siblings = link.closest(".links").querySelectorAll(".link");

    siblings.forEach((sibling) => {
      sibling === link
        ? (sibling.style.color = "rgb(184, 67, 20)")
        : (sibling.style.color = "rgb(209, 213, 219)");
    });
  })
);
};
// Link toggle
_togglerMobilenav(){
   toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.contains("toggle-close")
    ? this.disapearMobileNav()
    : this.apearMobileNav();
});
linksContainer.addEventListener("click", () => {
  if (linksContainer.classList.contains("links-open")) this.disapearMobileNav();
});
  
};
  disapearMobileNav() {
  toggleBtn.classList.remove("toggle-close");
  linksContainer.style.animation = "mobileNavDisappear 0.65s 1";
  setTimeout(() => linksContainer.classList.remove("links-open"), 500);
  document.querySelector("html").style.overflow = "visible";
};
  apearMobileNav() {
  toggleBtn.classList.add("toggle-close");
  linksContainer.classList.add("links-open");
  linksContainer.style.animation = "mobileNavAppear 0.6s 1";
  document.querySelector("html").style.overflow = "hidden";
};

_tagCloud(){

  const mySkills=[
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Netlify",
  "JavaScript (ES6+)",
  "AJAX",
  "Fetch API",
  "NPM",
  "Parcel",
  "Flowbite",
  "Vercel",
  ];

  const options = {
    radius: 320,
    maxSpeed:'fast',
    initSpeed:'fast',
    direction:135,
    keep:true,

  };

 const tagCloud = TagCloud(".content",mySkills,options);

};


_writeType(){
 const typeWrite = new  Typewriter(app, {
  loop: true,delay: 75,
});
  
 typeWrite
  .pauseFor(2000)
  .typeString('Wev developer.')
  .pauseFor(1000)
  .deleteChars(14)
  .start();

};

_projectEmpliment(){
  projects.forEach(project => {
    
   
    const html = `
        <div class="project">
          <div class="project-img">
            <img
              src="${project.image}"
              alt="Photo of ${project.title}"
            />
          </div>
          <h3 class="project-title">
          ${project.title}
          </h3>
          <p class="project-details">
            ${project.description}
          </p>
          <p class="project-tools">
            Tools: <span>${project.tools}</span>
          </p>
          <div class="project-btns">
            <a href="${project.liveLink}" target="_blank"
              >Live Site &rarr;</a
            >
            <a
              href="${project.githubLink}"
              target="_blank"
              >GitHub &rarr;</a>
          </div>
        </div>
    `;

    projectsContainer.insertAdjacentHTML("afterbegin", html);

  });

}
};

const myProject = new App();









