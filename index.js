import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, 'dist')));

app.get('/*', function (req, res) {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(process.env.PORT);
