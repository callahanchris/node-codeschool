var fs = require( 'fs' );
var http = require( 'http' );

http.createServer( function( request, response ) {
  var newFile = fs.createWriteStream( 'streamOutput.md' );
  request.pipe( newFile );

  request.on( 'end', function () {
    response.end( 'uploaded!' );
  });
}).listen( 8080 );