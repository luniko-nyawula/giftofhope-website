/*
   Gift of Hope Foundation - Part 3 JavaScript

   The script is kept simple. It adds:
   - responsive navigation
   - service search
   - a small accordion
   - enquiry form validation and email support
   - a simple page-load effect
*/

document.addEventListener('DOMContentLoaded', function () {

    /* PART 2: Responsive navigation. */
    var navigation = document.querySelector('header nav');

    if (navigation) {
        var menuButton = navigation.parentNode.querySelector('.nav-toggle');

        if (!menuButton) {
            menuButton = document.createElement('button');
            menuButton.type = 'button';
            menuButton.className = 'mobile-menu-button';
            menuButton.textContent = 'Menu';
            menuButton.setAttribute('aria-expanded', 'false');
            navigation.parentNode.insertBefore(menuButton, navigation);
        }

        menuButton.addEventListener('click', function () {
            var menuIsOpen;

            if (menuButton.classList.contains('nav-toggle')) {
                navigation.classList.toggle('open');
                menuIsOpen = navigation.classList.contains('open');
            } else {
                navigation.classList.toggle('mobile-open');
                menuIsOpen = navigation.classList.contains('mobile-open');
            }

            menuButton.setAttribute('aria-expanded', menuIsOpen);
            menuButton.textContent = menuIsOpen ? 'Close' : 'Menu';
        });

        var links = navigation.querySelectorAll('a');

        links.forEach(function (link) {
            link.addEventListener('click', function () {
                navigation.classList.remove('open');
                navigation.classList.remove('mobile-open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.textContent = 'Menu';
            });
        });
    }


    /* PART 3: Add a small page-load transition. */
    document.body.classList.add('page-ready');


    /* PART 3: Search the service cards as the user types. */
    var serviceSearch = document.querySelector('#service-search');
    var serviceCards = document.querySelectorAll('.service-card');
    var serviceCount = document.querySelector('#service-count');

    if (serviceSearch && serviceCards.length > 0) {

        function showServices() {
            var searchText = serviceSearch.value.toLowerCase();
            var visibleCount = 0;

            serviceCards.forEach(function (card) {
                var serviceName = card.getAttribute('data-service').toLowerCase();

                if (serviceName.includes(searchText)) {
                    card.style.display = 'inline-block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (serviceCount) {
                serviceCount.textContent =
                    visibleCount + ' programme(s) found';
            }
        }

        serviceSearch.addEventListener('input', showServices);

        showServices();
    }


    /* PART 3: Simple accordion for common questions. */
    var accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(function (button) {

        button.addEventListener('click', function () {
            var answer = button.nextElementSibling;
            var isOpen = button.getAttribute('aria-expanded') === 'true';

            button.setAttribute('aria-expanded', !isOpen);

            if (isOpen) {
                answer.classList.remove('open');
            } else {
                answer.classList.add('open');
            }
        });

    });


    /* PART 3: Enquiry form validation and email support. */
    var enquiryForm = document.querySelector('#enquiry-form');

    if (enquiryForm) {

        enquiryForm.addEventListener('submit', function (event) {
            var status = document.querySelector('#form-status');

            if (!enquiryForm.checkValidity()) {
                event.preventDefault();
                enquiryForm.reportValidity();

                if (status) {
                    status.textContent = 'Please complete all required fields before sending the enquiry.';
                    status.classList.add('show', 'error');
                }

                return;
            }

            event.preventDefault();

            var fullName = document.querySelector('#fullname').value;
            var email = document.querySelector('#email').value;
            var phone = document.querySelector('#phone').value;
            var enquiryType = document.querySelector('#enquiry-type').value;
            var message = document.querySelector('#message').value;

            var emailSubject = encodeURIComponent(
                'Gift of Hope Foundation Enquiry'
            );

            var emailBody = encodeURIComponent(
                'Full Name: ' + fullName + '\n' +
                'Email: ' + email + '\n' +
                'Phone: ' + phone + '\n' +
                'Enquiry Type: ' + enquiryType + '\n\n' +
                'Message:\n' + message
            );

            if (status) {
                status.textContent =
                    'Your email application will open with your enquiry details.';
                status.classList.remove('error');
                status.classList.add('show');
            }

            window.location.href =
                'mailto:info@giftofhope.org.za?subject=' +
                emailSubject +
                '&body=' +
                emailBody;
        });
    }

});
