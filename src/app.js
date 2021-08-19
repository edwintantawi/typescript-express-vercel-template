const path = require('path');
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
routes(app);

app.listen(PORT, () =>
  console.log(`server running in http://localhost:${PORT}`)
);
