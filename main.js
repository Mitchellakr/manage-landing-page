
// *****************creating constants**********************

const email = document.querySelector(".mail"),
    invalid = document.querySelector(".invalid"),
    go = document.querySelector("#go"),
    menu = document.querySelector(".menu"),
    nav = document.querySelector(".nav");

// giving the button (Go) a functionality of email validation when it is clicked

go.addEventListener('click', () => {
    let input = email.value;
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input === "") {
        invalid.textContent = "please fill the empty field"
        setTimeout(() => invalid.textContent = "", 3000)
        setTimeout(() => email.className = "mail", 3000)
        email.value = "";
    }
    else if (input.match(regex)) {
        invalid.textContent = "";
        email.value = "done";
        setTimeout(() => email.value = "", 5000)
        setTimeout(() => email.className = "mail", 5000)
    }
    else {
        invalid.textContent = "please insert a valid email";
        setTimeout(() => invalid.textContent = "", 3000)
        setTimeout(() => email.className = "mail", 3000)
        email.value = "";
    }
});

// functionality for the burger menu when it is clicked

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    nav.classList.toggle("navopen");
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
