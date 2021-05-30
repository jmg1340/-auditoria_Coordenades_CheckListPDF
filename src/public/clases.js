

class Cercle {
    constructor(doc, x, y, bChosen){
      this.doc = doc;
      this.x = x;
      this.y = y;
      this.bChosen = bChosen;
      this.radi = 5
    }

    pinta = function (){
      this.doc.setLineWidth(1)
      this.doc.setDrawColor(0)
      
      if (this.bChosen){
        this.doc.setFillColor(255, 0, 0)
        this.doc.circle(this.x, this.y, this.radi, 'FD')
      }

      this.doc.circle(this.x, this.y, this.radi)
    }

}