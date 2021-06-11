

class Cercle {
	constructor(doc, x, y, bChosen){
		this.doc = doc;
		this.x = x;
		this.y = y;
		this.bChosen = bChosen;
		this.radi = 3
	}

	pinta = function (){
		if (this.bChosen){
			this.doc.circle(this.x, this.y, this.radi).fillAndStroke("red", "#900")
		}
		return
	}
}

class Quadrat {
	constructor(doc, x, y, bChosen){
		this.doc = doc;
		this.x = x;
		this.y = y;
		this.bChosen = bChosen;
		this._amplada = 3;
		this._altura = 3
	}

	pinta = function (){
		if (this.bChosen){

			let coordX = this.x - this._amplada / 2;
			let coordY = this.y - this._altura / 2;

			this.doc.lineWidth(2);

			this.doc.lineCap('round')
			.moveTo(coordX, coordY)
			.lineTo(coordX + this._amplada, coordY + this._altura)
			.stroke("red");
			
			this.doc.lineCap('round')
			.moveTo(coordX + this._amplada, coordY)
			.lineTo(coordX , coordY + this._altura)
			.stroke("red");
		}
		return
	}
}

