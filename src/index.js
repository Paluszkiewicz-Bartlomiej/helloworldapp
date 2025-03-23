import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  const regionName = process.env.REGION_NAME || 'Default';
  const resourceGroup = process.env.WEBSITE_RESOURCE_GROUP || 'Default';
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World App</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div class="container">
        <h1>Witaj Świecie prosto z ${regionName}! </h1>
        <h2>Z chmury azure.</h2>
        <p>Grupa zasobów ${resourceGroup}.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
