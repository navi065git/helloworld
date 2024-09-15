// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Generative AI: Shaping the Future</title>
      <style>
        body {
          font-family: 'Helvetica Neue', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f7f8fa;
          color: #333;
        }

        .banner {
          background: linear-gradient(90deg, rgba(45, 156, 219, 1) 0%, rgba(22, 93, 161, 1) 100%);
          color: white;
          padding: 50px;
          text-align: center;
        }

        .banner h2 {
          margin: 0;
          font-size: 2.5em;
          font-weight: 600;
        }

        header {
          text-align: center;
          padding: 30px 0;
          background-color: #ffffff;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        }

        header h1 {
          font-size: 3em;
          font-weight: bold;
          color: #333;
          margin: 0;
        }

        main {
          max-width: 900px;
          margin: 40px auto;
          padding: 0 20px;
          line-height: 1.6;
        }

        main p {
          font-size: 1.3em;
          margin-bottom: 30px;
          color: #555;
        }

        .cta {
          background-color: #2d9cdb;
          color: white;
          text-align: center;
          padding: 15px;
          font-size: 1.2em;
          border-radius: 8px;
          display: inline-block;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .cta:hover {
          background-color: #1b78b6;
        }

        footer {
          background-color: #222;
          color: white;
          text-align: center;
          padding: 20px 0;
          margin-top: 50px;
          font-size: 0.9em;
        }

        footer p {
          margin: 0;
        }
      </style>
    </head>
    <body>

      <!-- Banner Section -->
      <div class="banner">
        <h2>Innovate with Generative AI</h2>
      </div>

      <!-- Header Section -->
      <header>
        <h1>The Future of Business is AI-Powered</h1>
      </header>

      <!-- Main Content -->
      <main>
        <p>
          Generative AI is revolutionizing industries across the globe by empowering businesses to generate high-quality, human-like content at unprecedented speeds. Whether it’s text, images, or code, AI is transforming how we approach creativity, automation, and productivity.
        </p>
        <p>
          This technology allows us to solve complex problems faster, improve decision-making with data-driven insights, and unlock new levels of innovation. By embracing AI, companies can reduce time-to-market, enhance customer experiences, and stay ahead of the competition.
        </p>

        <!-- Call to Action -->
        <a href="#" class="cta">Learn More About AI Solutions</a>
      </main>

      <!-- Footer Section -->
      <footer>
        <p>&copy; 2024 Powered by Generative AI. All Rights Reserved.</p>
      </footer>

    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
