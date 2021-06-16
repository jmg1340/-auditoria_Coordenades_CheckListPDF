window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');
	

	var txtCoord = document.getElementById('txtCoordenades');

	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');

	var imatgeFons = new Image();
	imatgeFons.crossOrigin="anonymous"
	imatgeFons.src = "./imatgesChecklist/Pagina_07.jpg";

	console.log(`imatgeFons.src = ${imatgeFons.src}`)
	imatgeFons.onload = function () {
		// context.scale(2, 2)
		// context.drawImage(imatgeFons, 0, 0, 595.28, 841.89);  //Equivalent A4 paper dimensions in pixels at 300 DPI and 72 DPI respectively are: 2480 pixels x 3508 pixels (print resolution) 595 pixels x 842 pixels (screen resolution)
		context.drawImage(imatgeFons, 0, 0, 1190.56, 1683.78);  //Equivalent A4 paper dimensions in pixels at 300 DPI and 72 DPI respectively are: 2480 pixels x 3508 pixels (print resolution) 595 pixels x 842 pixels (screen resolution)

		canvas.addEventListener('mousemove', function (evt) {
			var mousePos = getMousePos(canvas, evt);
			var message = 'x: ' + Math.round(mousePos.x / 2).toFixed(1) + '  y: ' + Math.round(mousePos.y / 2).toFixed(1);
			writeMessage(canvas, message, mousePos.x, mousePos.y);
			txtCoord.innerHTML = message
		}, false);

		canvas.addEventListener("click", function(evt){ 
			var mousePos = getMousePos(canvas, evt);
			var coord =  Math.round(mousePos.x / 2).toFixed(1) + ', ' + Math.round(mousePos.y / 2).toFixed(1);
			copiarPortapapeles(coord)
		})

	}
	imatgeFons.onerror = function () { alert(imatgeFons.src + ' failed to load.'); };



	function writeMessage(canvas, message, x, y) {
		var context = canvas.getContext('2d');
		// context.clearRect(0, 0, canvas.width, canvas.height);
		
		// context.drawImage(imatgeFons, 0, 0, 595, 842);
		context.drawImage(imatgeFons, 0, 0, 1190.56, 1683.78);
		context.font = 'bold 20pt Calibri bold';

		// context.fillStyle = 'yellow';
		// context.fillRect(x, y-8, x+20, y);
		context.fillStyle = 'blue';
		context.fillText(message, x, y);
	}

	function getMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};
	}

	function copiarPortapapeles ( coordenades ){ 
		navigator.clipboard.writeText( coordenades ).then(function() {
			console.log("COOREDENADES copiades")
		}, function() {
			console.log("clipboard write failed")
		});
	}


});