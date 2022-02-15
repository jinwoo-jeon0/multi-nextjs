import express from 'express';
import { iam } from '@multi-nextjs/common/lib/iam';

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
});

const port = 5002;
app.listen(port, () => {
  console.info(iam('server'));
  console.info(`> Ready on http://localhost:${port}`);
});
