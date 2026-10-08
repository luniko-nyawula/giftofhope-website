# Gift of Hope Foundation Website

## Project overview
This is the Gift of Hope Foundation website from Part 1 with the required Part 2 improvements added.

The original Part 1 page content and structure were kept as the base. Part 2 adds external CSS, responsive design, basic JavaScript and documentation.

## Pages
- Home
- About Us
- Services
- Enquiry
- Contact Us

## Part 2 changes
- Added one external CSS file for all pages.
- Added basic typography, layout, colour and spacing styles.
- Added hover, focus and active states.
- Added tablet and mobile breakpoints.
- Added responsive images.
- Added a simple mobile navigation button using JavaScript.
- Added simple enquiry form feedback using JavaScript.
- Added comments that identify the Part 2 work.
- Added changelog, testing notes, checklist and references.

## How to run
1. Open `index.html` in a web browser.
2. Use the navigation links to open the other pages.
3. Make the browser window smaller to test the responsive layout.
4. On a small screen, use the Menu button to open the navigation.

## Technologies
- HTML5
- CSS3
- JavaScript
- Git and GitHub

## Repository
https://github.com/luniko-nyawula/giftofhope-website

## Project folder structure

The main page is in `index.html`. The other pages are inside the `pages` folder. CSS and JavaScript are inside the `assets` folder.

## Simple setup

No framework or build tool is required. The website can be opened directly in a browser.

## Responsive testing

The layout should be checked at desktop, tablet and mobile widths to make sure the navigation and content remain usable.

## Navigation

The navigation is shared across the pages so visitors can move between Home, About Us, Services, Enquiry and Contact Us.

## Browser testing

The website can be tested in a modern browser without installing extra software.

## Part 3 changes

Part 3 focuses on functionality, forms, SEO and deployment.

### JavaScript functionality
- Added a simple image gallery with a lightbox on the Services page.
- Added a separate general contact form on the Contact page.
- Added a simple search box on the Services page.
- Added a simple accordion for common questions.
- Added a small page-load transition.
- Improved the enquiry form with client-side validation.
- The enquiry and contact forms prepare an email using the visitor's default email application.

### SEO improvements
- Added relevant page descriptions and keywords.
- Kept clear H1, H2 and H3 headings.
- Kept descriptive internal links.
- Improved image alt text.
- Added lazy loading to content images.
- Added `robots.txt` and `sitemap.xml`.

### External service
- Added a Google Maps embed on the Contact page for the Durban area.

### Deployment
A GitHub Pages workflow is included in `.github/workflows/pages.yml`.

To publish the website, GitHub Pages must use **GitHub Actions** as the deployment source in the repository settings.

Expected website address:
https://luniko-nyawula.github.io/giftofhope-website/

### Part 3 limitation
The enquiry form uses a mailto link because this student project does not have a server-side email system. The visitor's normal email application opens with the form details already prepared.
