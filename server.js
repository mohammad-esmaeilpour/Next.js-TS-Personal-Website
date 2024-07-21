const { createServer } = require('http');
const next = require('next');

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res).catch(err => {
      console.error('Request handling error:', err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    });
  }).listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port', process.env.PORT || 3000);
  });
}).catch(err => {
  console.error('Error preparing application:', err);
});
