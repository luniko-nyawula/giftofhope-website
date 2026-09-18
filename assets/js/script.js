/*
   Gift of Hope Foundation - Part 2 JavaScript

   PART 2 REQUIREMENT:
   A small amount of JavaScript is used for
   responsive navigation and simple user interaction
   on the enquiry form.
*/


document.addEventListener('DOMContentLoaded', function () {


    /* PART 2: Responsive navigation button. */

    var menuButton = document.querySelector('.nav-toggle');
    var navigation = document.querySelector('#main-navigation');


    if (menuButton && navigation) {

        menuButton.addEventListener('click', function () {

            /* Toggle the navigation when the user selects Menu. */
            navigation.classList.toggle('open');


            if (navigation.classList.contains('open')) {

                menuButton.textContent = 'Close';

                menuButton.setAttribute(
                    'aria-expanded',
                    'true'
                );

            } else {

                menuButton.textContent = 'Menu';

                menuButton.setAttribute(
                    'aria-expanded',
                    'false'
                );

            }

        });

    }


    /* PART 2: Small form interaction
       to give the user feedback. */

    var enquiryForm = document.querySelector('form');


    if (enquiryForm) {

        enquiryForm.addEventListener(
            'submit',
            function (event) {

                /* Keep the demo page on screen
                   instead of sending to a server. */
                event.preventDefault();


                if (enquiryForm.checkValidity()) {

                    alert(
                        'Thank you. Your enquiry form is ready for submission.'
                    );

                    enquiryForm.reset();

                }

            }
        );

    }

});