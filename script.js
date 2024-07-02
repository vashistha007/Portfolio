
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});


const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());



const textElement = document.getElementById('typing-text');
const textArray = ["Hello, I'm a Front-End Developer.", "I create dynamic web experiences.", "Let's build something amazing together!"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentText = textArray[textIndex];
    if (isDeleting) {
        textElement.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        textElement.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 1000; // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 200;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000); // Start typing effect after 1s
});




window.addEventListener('scroll', function() {
  const cont1 = document.querySelector('.cont1');
  const scrollPosition = window.scrollY;
  const screenHeight = window.innerHeight;

  // Adjust the frequency divisor based on screen width
  let frequencyDivisor = 2; // Default value

  if (window.innerWidth <= 600) {
    frequencyDivisor = 4; // Increase the divisor to slow down the movement
  }

  // Calculate the transformation based on the scroll position
  // Move from right to left and vice versa
  const maxTransform = 100; // Maximum transform value in pixels
  const transformValue = Math.sin(scrollPosition / (screenHeight * frequencyDivisor) * Math.PI) * -maxTransform;
  
  cont1.style.transform = `translateX(${transformValue}px)`;
});



window.addEventListener('scroll', function() {
  const aboutHeading = document.querySelector('#about h1');
  const scrollPosition = window.scrollY;
  const maxTransform = 300; // Maximum transform value in pixels
  const transformValue = scrollPosition * 0.3; // Adjust this value to control the speed

  // Check if the screen width is greater than 600px
  if (window.innerWidth > 600) {
    // Apply the transformation
    aboutHeading.style.top = `${transformValue}px`;
  } else {
    // Reset the transformation if screen width is 600px or less
    aboutHeading.style.top = '';
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const skillBars = entry.target.querySelectorAll(".skill-percentage");
              skillBars.forEach(skillBar => {
                  const percentage = skillBar.getAttribute("data-percentage");
                  skillBar.style.setProperty('--percentage', percentage);
                  skillBar.dataset.loaded = "true";
              });
              observer.unobserve(entry.target); // Optionally stop observing after the animation is triggered
          }
      });
  }, {
      threshold: 0.1 // Adjust the threshold as needed
  });

  const skillsSection = document.querySelector(".skills-section");
  observer.observe(skillsSection);
});


document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null, // Use the viewport as the container
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stop observing once the animation starts
      }
    });
  }, observerOptions);

  const skillsSection = document.querySelector('.skills-section');
  const skillsHeader = document.querySelector('#skills h2');
  
  if (skillsSection) {
    observer.observe(skillsSection);
  }

  if (skillsHeader) {
    observer.observe(skillsHeader);
  }
});



document.addEventListener('DOMContentLoaded', function() {
  let myDivs = document.getElementsByClassName('proj');

  for (let i = 0; i < myDivs.length; i++) {
    myDivs[i].addEventListener('mouseenter', function() {
      this.classList.add('additional-class');
      this.style.backgroundImage = 'none'; // Remove background image on mouse enter

      let texElement = this.querySelector('.tex');
      if (texElement) {
        texElement.style.display = 'block'; // Show texElement on mouse enter
      }
    });

    myDivs[i].addEventListener('mouseleave', function() {
      this.classList.remove('additional-class');
      this.style.backgroundImage = ''; // Restore background image on mouse leave

      let texElement = this.querySelector('.tex');
      if (texElement) {
        texElement.style.display = 'none'; // Hide texElement on mouse leave
      }
    });
  }
});



document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.5 });

  const target = document.querySelector('.con1 h1');
  observer.observe(target);

  
});

window.addEventListener('load', function() {
  document.querySelector('.social').classList.add('visible');
});

document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('.con1');

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust this threshold as needed
  });

  elements.forEach(function(element) {
    observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('.con');

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust this threshold as needed
  });

  elements.forEach(function(element) {
    observer.observe(element);
  });
});