//First Task
var http = require('http');
var fs = require('fs');

var http = http.createServer(function(req,res){
	res.write('Hello human!\n');

	if(req.url == '/stream'){
		fs.createReadStream('exampleL.txt').pipe(res);
		var path = 'exampleL.txt';
		var fileP = fs.statSync(path, function(err, stats) {
				console.log('File is, '+ fileP.size);
		})

			if(fileP.size>56000){
				console.log('exampleL.txt' + ' GIGANTIC  ' + fileP.size);
				stream.on('data', function(chunk){			
					res.write('start chunk');
					res.write(chunk.toString());
					res.write('end chunk');

			});
				}else if(fileP.size<56000){
					console.log('exampleS.txt' + ' tiny ' + fileP.size);
					stream.on('data', function(){
						res.write('data');
						res.end()
					});

			};
	};
		

	if(req.url == '/file'){
		fs.readFile('exampleS.txt', function(err,data){
		res.write(data);
		res.end();
	});
	};
});


http.listen(3000, function(){
	console.log('Server on localhost:3000');
})