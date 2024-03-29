var express  = require( 'express' ),
    path     = require( 'path' ),
    bp       = require('body-parser'),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use( bp.json() );

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
