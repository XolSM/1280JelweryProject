//footer get year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


//Slider
document.addEventListener("DOMContentLoaded", function() {
    // Targetting
    const slider = document.querySelector('.slider');
    const slide = document.querySelectorAll('.slide'); //array of slides
    const slideCount = slide.length;
    let currentIndex = 0; // to start

    // setting slide index function
    function showSlide(index) {
        currentIndex = (index + slideCount) % slideCount; // Ensure index wraps around slideCount [0, slideCount-1]

        const translateValue = -currentIndex * 100; // so slides move to the left occupying 100% width (per translation)
        slider.style.transform = `translateX(${translateValue}%)`;
    }

    // next slide function
    function showNextSlide() {
        showSlide(currentIndex + 1);
    }

    // prev slide function
    function showPreviousSlide() {
        showSlide(currentIndex - 1);
    }

    // buttons listeners
    const nextButtons = document.querySelectorAll('.next');
    const prevButtons = document.querySelectorAll('.prev');

    nextButtons.forEach(button => {
        button.addEventListener('click', showNextSlide);
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', showPreviousSlide);
    });

    // Automatic slide change every 8 seconds
    setInterval(showNextSlide, 8000);
});



function sendMessage(){
    document.querySelector('.contact_div').innerHTML = '<h2> Form sent! <br> We will contact you within 48hr </h2>';
    return false;
}

function subscribe(){
    document.querySelector('.subscribe_form').innerHTML = '<p>SUBSCRIBED!</p>';
    return false;
}

