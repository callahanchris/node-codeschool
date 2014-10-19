var fs = require( 'fs' );

var file = fs.createReadStream( 'echoServer.js' );
var newFile = fs.createWriteStream( 'echoServerCopy.js' );

file.pipe( newFile );