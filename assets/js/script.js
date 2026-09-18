/*
   Gift of Hope Foundation - Part 2 JavaScript

   PART 2 requirement: a small amount of JavaScript is used to make
   the navigation responsive and to give the enquiry form simple feedback.
*/

document.addEventListener('DOMContentLoaded', function () {

    /* PART 2: Create a simple mobile menu button without changing the Part 1 navigation HTML. */
    var navigation = document.querySelector('header nav');

    if (navigation) {
        var menuButton = document.createElement('button');

        menuButton.type = 'button';
        menuButton.className = 'mobile-menu-button';
        menuButton.textContent = 'Menu';
        menuButton.setAttribute('aria-expanded', 'false');

        navigation.parentNode.insertBefore(menuButton, navigation);

        menuButton.addEventListener('click', function () {
            var menuIsOpen = navigation.classList.toggle('mobile-open');

            menuButton.setAttribute('aria-expanded', menuIsOpen);
            menuButton.textContent = menuIsOpen ? 'Close' : 'Menu';
        });

        /* PART 2: Close the mobile menu after a navigation link is selected. */
        var links = navigation.querySelectorAll('a');

        links.forEach(function (link) {
            link.addEventListener('click', function () {
                navigation.classList.remove('mobile-open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.textContent = 'Menu';
            });
        });
    }

    /* PART 2: Simple enquiry form feedback for the visitor. */
    var enquiryForm = document.querySelector('form');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (event) {
            event.preventDefault();

            if (!enquiryForm.checkValidity()) {
                enquiryForm.reportValidity();
                return;
            }

            var oldMessage = enquiryForm.querySelector('.form-message');

            if (oldMessage) {
                oldMessage.remove();
            }

            var message = document.createElement('p');
            message.className = 'form-message';
            message.textContent = 'Thank you. Your enquiry has been recorded for this website demonstration.';

            enquiryForm.appendChild(message);
            enquiryForm.reset();
        });
    }
});

/* PART 2: The script waits until the page has loaded before finding elements. */
