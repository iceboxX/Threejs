var express = require('express');
var app = express();
app.use(express.static('libs'));
app.use(express.static('assets'));
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {

    res.sendFile(__dirname + '/one/exampleone.html');

});

app.listen(app.get('port'), () => {

    console.log('App is listening on port', app.get('port'));
    console.log('  Press CTRL-C to stop\n');

});
module.exports = app;
