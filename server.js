const express = require('express');

const app = express();

app.use(express.static('./dist/nyax-user-app-temp-json'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/nyax-user-app-temp-json/'}),
);

app.listen(process.env.PORT || 8080);
