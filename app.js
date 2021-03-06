const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current dir
// ectory from where the script is running
app.use(express.static(__dirname));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/BookmarkerApp.html'));
});

app.listen(port);