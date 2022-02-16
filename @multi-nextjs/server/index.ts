import express from 'express';
import nextjs from 'next';
import { iam } from '@multi-nextjs/common/lib/iam';

const nextApp = nextjs({
  dev: process.env.NODE_ENV !== 'production',
  dir: './site1',
});
nextApp.prepare().then(() => {
  const app = express();

  const nextjsRequestHandler = nextApp.getRequestHandler();
  app.all('*', (req, res) => {

    return nextjsRequestHandler(req, res);
  });
  app.get('/', function (req, res) {
    res.send('Hello World')
  });

  const port = 5002;
  app.listen(port, () => {
    console.info(iam('server'));
    console.info(`> Ready on http://localhost:${port}`);
  });
});
