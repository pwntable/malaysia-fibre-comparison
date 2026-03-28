# Malaysia Fibre Comparison

A complete, polished, and responsive web application built to compare fibre internet plans in Malaysia for new users.

## Features
- Compare top providers: Unifi, CelcomDigi, Maxis, and U Mobile.
- See detailed plan speeds, pricing, contract details, and bundled benefits.
- Filter by provider, speed, max price, or find the absolute cheapest overall constraints.
- Honest rankings based on hardcoded available data.
- Built without a backend—all data is processed in-browser.

## Data Source Note
The data provided in the application is based **strictly** on a static dataset provided upon project creation. Maxis only explicitly provided speed tiers and data for the 500Mbps tier, thus other tiers are marked honestly as "Not provided in current dataset".

## Technologies Used
- React 18
- Vite
- Tailwind CSS
- Lucide React (Icons)

## How to run locally
1. Ensure you have Node.js installed.
2. Clone this repository (or navigate to the workspace dir).
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the Vite dev server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to the localhost port shown in your terminal.

## How to deploy to GitHub Pages
1. Point your `git` remote pointing to your actual repository.
2. Run the provided deployment script:
   ```bash
   npm run deploy
   ```
   *(This uses the `gh-pages` package to build the application and push the `dist` folder directly to the `gh-pages` branch).*

*Disclaimer: This comparison is based only on the currently provided dataset and may not represent every latest package or promotion.*
