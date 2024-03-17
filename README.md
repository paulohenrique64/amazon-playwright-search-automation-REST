## Technologies used and requirements

- Node LTS
- NPM or Yarn
- Playwright
- Express

## About [REST Version]

I chose <strong> Playwright </strong> for this project due to its compatibility with multiple browsers, such as Chromium and Firefox, as well as its intuitive usability and excellent scalability.
<br><br>
In this <strong>version</strong>, when the user accesses the `/api/search/:keyword` endpoint, the express server returns a JSON containing the searched product data.

- Searched product details that this application collects
    - Title
    - Price
    - Boughts
    - Bullet points

## 🛠 Installation and Setup Instructions

1. Clone this repository: `git clone https://github.com/paulohenrique64/amazon-playwright-search-automation-REST.git`
2. Go to project directory: `cd amazon-playwright-search-automation-REST`
3. Install dependencies: `npm install` or  `yarn install`
4. Run: `npm run start` or `yarn run start`
5. Go to <a href="http://localhost:3000" target="_blank">http://localhost:8080</a> in the browser
6. Use `/api/search/:keyword` enpoint for search a product
7. Ready 🎉

<strong>Tip:</strong> You can view the `page.png` photo in backend for follow the automation steps during search process.

## :rocket: For more informations

- **[Playwright Documentation](https://playwright.dev/docs/intro)**
