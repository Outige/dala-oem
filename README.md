# Dala OEM Quote Engine

Static mobile-first website for Dala's OEM, ODM and private-label manufacturing quote funnel.

## Files

- `index.html` - page structure, SEO metadata, sections and quote form
- `styles.css` - mobile-first responsive visual system
- `script.js` - product prefill behavior, form validation and submit placeholder
- `assets/` - image and logo assets to add before launch

## Run Locally

Open `index.html` directly in a browser, or serve the folder with a simple local server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. Go to repository `Settings`.
3. Open `Pages`.
4. Set source to the main branch and root folder.
5. Save and wait for GitHub Pages to publish.

No build step is required.

## Replace Images

Add production assets under `assets/`.

- Hero image: `assets/factory-hero.jpg`
- Recommended hero size: 1800x1200px
- Recommended format: compressed WebP or JPG
- Recommended subject: industrial factory, filling line, packaging line, production floor or warehouse

Partner logos are currently text placeholders in `index.html`.

- Recommended logo format: SVG or transparent PNG
- Recommended logo size: 300x120px
- Use grayscale or monochrome treatment for consistency

## Update WhatsApp and Email

Replace every placeholder WhatsApp link:

```text
https://wa.me/00000000000
```

Replace placeholder email links:

```text
sales@example.com
```

Also update the JSON-LD contact details in the `<head>` of `index.html`.

## Connect the Form Later

The form currently prevents default submission, validates required fields, logs the request object to the browser console, and shows a success message.

Connection options:

- Formspree
- Netlify Forms
- Airtable
- Custom API endpoint
- CRM webhook

Look for the `TODO` comment inside the quote form in `index.html`, then replace the JavaScript placeholder submission in `script.js` with the selected service integration.

## Launch Checklist

- Replace hero image.
- Replace partner logo placeholders.
- Replace WhatsApp number.
- Replace email address.
- Update Open Graph URL and image.
- Update Organization schema URL, email and phone.
- Confirm product certification claims for each market before publishing.
