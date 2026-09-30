# Testing Notes

| Check | Result |
|---|---|
| All five pages link to the external stylesheet | Pass |
| No inline CSS was added | Pass |
| All five pages load the external JavaScript file | Pass |
| Hover, focus and active states are included | Pass |
| Tablet and mobile breakpoints are included | Pass |
| Images use responsive sizing | Pass |
| Mobile navigation uses JavaScript | Pass |
| Enquiry form has basic JavaScript feedback | Pass |
| Existing page links were kept | Pass |

## Manual browser test
Open the website in a browser at desktop, tablet and mobile widths. At widths below 700px, test the Menu button and check that the navigation opens and closes.

### Desktop check
The pages were checked at a normal desktop browser width and the navigation and content remained visible.

### Mobile check
The pages were checked at a small width and the navigation button and stacked content were tested.


### Form test
The enquiry form was tested with empty required fields and with completed fields.


### Navigation link test
The navigation links were checked to make sure the existing page destinations remain available.

## Part 3 testing

| Test | Expected result | Result |
|---|---|---|
| Services search | Matching programmes remain visible while other cards are hidden | Pass |
| Services accordion | Clicking a question opens and closes its answer | Pass |
| Enquiry required fields | Browser prevents incomplete submissions | Pass |
| Enquiry email | A valid form prepares a mailto email with the entered details | Pass |
| Google Maps | Map is visible on the Contact page | Pass |
| SEO metadata | Each page has a descriptive title and meta description | Pass |
| Responsive layout | Website remains usable on desktop, tablet and mobile | Pass |
| Sitemap and robots | Files are available in the project root | Pass |
| GitHub Pages workflow | Workflow file is present and configured for main | Pass |

## Part 3 deployment note

The GitHub Pages workflow is ready for deployment. In repository Settings > Pages, choose **GitHub Actions** as the source if it has not already been selected.
