/*Scroll to top*/
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/*Header*/
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('show');
}

/*Language Switch*/
function switchLanguage() {
  // Check the current language
  const currentLang = document.documentElement.lang;

  // Switch between English and Finnish
  if (currentLang === "en") {
    document.documentElement.lang = "fi";  // Change to Finnish
    document.getElementById("languageButton").textContent = "ENG";  // Change button text to "ENG"
  } else {
    document.documentElement.lang = "en";  // Change to English
    document.getElementById("languageButton").textContent = "FIN";  // Change button text to "FIN"
  }
}


/*Changing hero banner*/
const hero = document.querySelector('.hero');
const now = new Date().getHours();

if (document.body.id === 'home') {  // Check if we are on the front page
  if (now >= 6 && now < 12) {
    hero.style.backgroundImage = "url('images/morningsauna.jpg')";
    hero.querySelector('h2').textContent = "Start your day with sauna bliss!";
  } else if (now >= 12 && now < 18) {
    hero.style.backgroundImage = "url('../images/noonsauna.png')";
    hero.querySelector('h2').textContent = "Relax in the afternoon heat!";
  } else {
    hero.style.backgroundImage = "url('../images/eveningsauna.png')";
    hero.querySelector('h2').textContent = "Unwind under the evening sky!";
  }
}

/*Visitor Calculator*/
/* Off-peak & rush hours */
function calculateVisitorTime() {
    const timeInput = document.getElementById('time').value;
    const resultText = document.getElementById('result');
  
    // Check if input is valid
    if (timeInput < 0 || timeInput > 23 || timeInput === "") {
      resultText.textContent = "Please enter a valid time between 0 and 23.";
      resultText.style.color = "black";
      return;
    }
  
    // Define the peak and off-peak time ranges
    if (timeInput >= 6 && timeInput < 10) {
      resultText.textContent = "Enjoy a peaceful start to your day, there might be a few more guests, but it only enhances the experience.";
      resultText.style.color = "orange";
    } else if (timeInput >= 10 && timeInput < 12) {
      resultText.textContent = "The sauna is a bit more lively now. Enjoy the vibrant atmosphere!";
      resultText.style.color = "red";
    } else if (timeInput >= 12 && timeInput < 15) {
        resultText.textContent = "Enjoy a serene sauna experience, this is the perfect time to unwind in peace.";
        resultText.style.color = "green";
    } else if (timeInput >= 15 && timeInput < 20) {
      resultText.textContent = "It's a busy time, but the sauna is still a great place to unwind and enjoy the moment.";
      resultText.style.color = "red";
    } else {
      resultText.textContent = "It's off-peak! Enjoy a quiet sauna session.";
      resultText.style.color = "green";
    }
  }


  /*Gallery*/
  let slideIndex = 1;

  // Open the lightbox and show the clicked image
  function openLightbox() {
    document.getElementById('lightbox').style.display = "block";
  }
  
  // Close the lightbox
  function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
  }
  
  // Show the clicked image in the lightbox
  function currentSlide(n) {
    let images = document.getElementsByClassName("gallery-image");
    let lightboxImage = document.getElementById("lightbox-image");
    let caption = document.getElementById("caption");
    
    // Set the source of the large image
    lightboxImage.src = images[n - 1].src;
    
    // Set the caption (using alt text of the image)
    caption.textContent = images[n - 1].alt;
    
    slideIndex = n; // Update slide index
  }
  
  // Navigate through images using the prev/next buttons
  function changeSlide(n) {
    let images = document.getElementsByClassName("gallery-image");
    slideIndex += n;
    
    // Loop through images
    if (slideIndex > images.length) {
      slideIndex = 1;
    } else if (slideIndex < 1) {
      slideIndex = images.length;
    }
    
    let lightboxImage = document.getElementById("lightbox-image");
    let caption = document.getElementById("caption");
    
    // Update the image and caption
    lightboxImage.src = images[slideIndex - 1].src;
    caption.textContent = images[slideIndex - 1].alt;
  }

  