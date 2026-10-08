# Changelog

## Part 2 - 18 September 2026

### Added
- External `styles.css` linked to all five pages.
- Basic typography and layout styling.
- Colours, spacing and simple decoration.
- Hover, focus and active states.
- Tablet and mobile media queries.
- Responsive images.
- Responsive mobile navigation.
- Basic JavaScript for the mobile menu.
- Basic JavaScript feedback for the enquiry form.
- Comments explaining the Part 2 work.
- README, testing notes, checklist and references.

### Preserved
- The existing Part 1 HTML content and structure were kept as the base.

### Notes
The enquiry form is a front-end demonstration only. It does not send data to a real server.

### Part 1 preservation
The existing Part 1 website content was kept as the base while Part 2 styling and responsive features were added.

### Styling note
Part 2 styling is kept in the external stylesheet instead of using inline CSS.

### Responsive navigation
The mobile navigation was tested as part of the Part 2 responsive work.

### Accessibility
Simple keyboard focus states and navigation labels were kept in the Part 2 work.

## Part 3 - 30 September 2026

### Functionality
- Added a programme search field to the Services page.
- Added a simple common-questions accordion.
- Added a small page-load transition.
- Improved the enquiry form with client-side validation.
- Added phone number pattern checking and a minimum message length.
- Added email preparation using the visitor's default email application.

### SEO
- Improved page titles and meta descriptions.
- Added keyword meta tags to the main pages.
- Kept clear heading levels and internal links.
- Improved image alt text and added lazy loading where suitable.
- Added `robots.txt`.
- Added `sitemap.xml`.

### External service
- Added a Google Maps embed for the Durban area on the Contact page.

### Deployment
- Added a GitHub Pages workflow in `.github/workflows/pages.yml`.

### Notes
- The Part 1 and Part 2 website remains the base for Part 3.
- The Part 3 additions use basic HTML, CSS and JavaScript so the project remains easy to understand.
- The enquiry form still depends on the visitor having an email application configured on their device.


### Part 3 compliance touch-ups - 8 October 2026

| Area | Issue / requirement | Change made | Result |
|---|---|---|---|
| Functionality | The Part 3 guide requires an image gallery/lightbox | Added a three-image gallery on Services and a JavaScript lightbox with close controls | Users can click an image and view a larger version |
| Forms | The guide requires separate enquiry and contact forms | Added a general contact form to Contact Us | Enquiry and contact now have different purposes |
| Validation | Forms must provide HTML5 and JavaScript validation | Kept required, email, telephone pattern and message length validation and added JavaScript handling to both forms | Invalid input is stopped and feedback is shown |
| SEO | Pages should have a clear heading structure | Removed the second H1 from About Us and changed it to H2 | About page now has one main H1 |
| Presentation | Styling should remain in the external stylesheet | Removed old HTML alignment attributes from About Us and moved alignment to CSS | No inline style attribute or presentation alignment is used |
| Evidence | Testing must cover new Part 3 features | Added gallery and contact-form checks to TESTING.md | The new requirements are traceable in the repository |
