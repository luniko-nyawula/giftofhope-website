/*
   Gift of Hope Foundation - Part 3 JavaScript

   The script is kept simple. It adds:
   - responsive navigation
   - service search
   - a FAQ accordion
   - a simple image lightbox
   - enquiry and contact form validation
   - email preparation
   - a small page-load effect
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


    /* PART 3: Show today's date automatically. */
    var todayDate = document.querySelector('#today-date');

    if (todayDate) {
        var today = new Date();
        todayDate.textContent = today.toLocaleDateString('en-ZA', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
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
                    card.classList.remove('hidden');
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
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


    /* PART 3: Simple image gallery and lightbox. */
    var galleryImages = document.querySelectorAll('.gallery-image');

    galleryImages.forEach(function (image) {

        image.addEventListener('click', function () {

            var lightbox = document.querySelector('#lightbox');

            if (!lightbox) {
                lightbox = document.createElement('div');
                lightbox.id = 'lightbox';
                lightbox.className = 'lightbox';
                lightbox.setAttribute('aria-hidden', 'true');

                lightbox.innerHTML =
                    '<div class="lightbox-box">' +
                    '<button class="lightbox-close" type="button">Close</button>' +
                    '<img class="lightbox-image" src="" alt="">' +
                    '</div>';

                document.body.appendChild(lightbox);

                lightbox.querySelector('.lightbox-close')
                    .addEventListener('click', closeLightbox);

                lightbox.addEventListener('click', function (event) {
                    if (event.target === lightbox) {
                        closeLightbox();
                    }
                });
            }

            var largeImage = lightbox.querySelector('.lightbox-image');

            largeImage.src = image.getAttribute('src');
            largeImage.alt = image.getAttribute('alt');

            lightbox.classList.add('open');
            lightbox.setAttribute('aria-hidden', 'false');
        });
    });


    /* PART 3: Close the lightbox with the Escape key. */
    function closeLightbox() {
        var lightbox = document.querySelector('#lightbox');

        if (lightbox) {
            lightbox.classList.remove('open');
            lightbox.setAttribute('aria-hidden', 'true');
        }
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    });


    /* PART 3: Enquiry and contact form validation. */
    function setupEmailForm(formId, recipient) {

        var form = document.querySelector(formId);

        if (!form) {
            return;
        }

        form.addEventListener('submit', function (event) {

            var status = form.querySelector('.status');

            if (!form.checkValidity()) {
                event.preventDefault();
                form.reportValidity();

                if (status) {
                    status.textContent =
                        'Please check the form and complete all required fields.';
                    status.classList.add('show', 'error');
                }

                return;
            }

            event.preventDefault();

            var emailSubject = 'Gift of Hope Foundation Website Message';
            var emailBody = '';

            var fields = form.querySelectorAll('input, select, textarea');

            fields.forEach(function (field) {

                if (field.name && field.type !== 'submit') {
                    var label = field.name.replace(/_/g, ' ');
                    emailBody +=
                        label + ': ' + field.value + '\n';
                }

            });

            if (status) {
                status.textContent =
                    'Your email application will open with your message details.';
                status.classList.remove('error');
                status.classList.add('show');
            }

            window.location.href =
                'mailto:' + recipient +
                '?subject=' + encodeURIComponent(emailSubject) +
                '&body=' + encodeURIComponent(emailBody);
        });
    }

    setupEmailForm('#enquiry-form', 'info@giftofhope.org.za');
    setupEmailForm('#contact-form', 'info@giftofhope.org.za');

});
