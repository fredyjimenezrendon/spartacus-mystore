const express = require('express');

const app = express();

app.use(express.static('./dist/spartacus-mystore'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/spartacus-mystore' }
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)
