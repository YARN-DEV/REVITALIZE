# REVITALIZE
A general wellness store that specializes in selling wellness products and devices

## Running the Website Locally

There are several ways to run this website on your local machine:

### Option 1: Using Node.js (Recommended)

1. Make sure you have [Node.js](https://nodejs.org/) installed (version 12 or higher)
2. Open a terminal in the project directory
3. Run the following command:
   ```bash
   npm start
   ```
4. The website will automatically open in your browser at `http://localhost:3000`

### Option 2: Using Python 3

If you have Python 3 installed:

```bash
python3 -m http.server 3000
```

Then open your browser and go to `http://localhost:3000`

### Option 3: Using Python 2

If you have Python 2 installed:

```bash
python -m SimpleHTTPServer 3000
```

Then open your browser and go to `http://localhost:3000`

### Option 4: Using VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Features

- **Home Page**: Welcoming hero section with call-to-action
- **Products**: Featured wellness products and devices
- **About**: Information about REVITALIZE
- **Contact**: Contact form for customer inquiries
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling, animations, and cart functionality

## What You'll See

When you run the website locally, you'll see:

1. A clean, modern navigation bar with the REVITALIZE logo
2. A beautiful hero section with a gradient background
3. 6 featured wellness products with prices and "Add to Cart" buttons
4. An about section explaining the store's mission
5. A contact form for customer inquiries
6. Smooth scrolling animations and interactive elements

## Project Structure

```
REVITALIZE/
├── index.html      # Main HTML file
├── styles.css      # Styling and responsive design
├── script.js       # Interactive functionality
├── package.json    # Project configuration
└── README.md       # This file
```

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- No external dependencies (beyond the development server)
