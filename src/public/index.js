document.addEventListener("DOMContentLoaded", function(){

  var paginesPDF = [
    "Seleccionar pagina",
    "Pagina_01.jpg",
    "Pagina_02.jpg",
    "Pagina_03.jpg",
    "Pagina_04.jpg",
    "Pagina_05.jpg",
    "Pagina_06.jpg",
    "Pagina_07.jpg",
    "Pagina_08.jpg",
    "Pagina_09.jpg",
    "Pagina_10.jpg",
    "Pagina_11.jpg",
    "Pagina_12.jpg",
    "Pagina_13.jpg",
    "Pagina_14.jpg",
    "Pagina_15.jpg",
    "Pagina_16.jpg",
    "Pagina_17.jpg",
    "Pagina_18.jpg",
    "Pagina_19.jpg",
    "Pagina_20.jpg",
    "Pagina_21.jpg",
  ]


  var selectorPags = document.getElementById("seleccionarPags");
  paginesPDF.forEach( function(item){
    let newOption = new Option(item,item);  // text, valor
    selectorPags.add( newOption, undefined)   // The first argument is the new option and the second one is an existing option.
  })

  selectorPags.onchange = function(event){
    // alert(event.target.value)
    createPdf(event.target.value)
  }
  

  var iframe = document.querySelector('iframe');
  var createPdf = function (imatge) {

    // var text = editor.getValue();
    var stream = blobStream();
    var ctx = new canvas2pdf.PdfContext(stream, {
      size: 'A4',
      margins: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      } 
    });
    

    var background = new Image();
    background.crossOrigin="anonymous"
    background.src = `./imatgesChecklist/${imatge}`;
    // Make sure the image is loaded first otherwise nothing will draw.
    background.onload = function(){
      ctx.drawImage(background, 0, 0, 595.28, 841.89);
      
      ctx.fillStyle='red';
			ctx.doc.fontSize(8)
      // ctx.fillRect(50,50,100,100);
      // ctx.doc.polygon([0, 0], [595.28, 841.89]);
      // ctx.doc.stroke();
      
      switch (imatge){
				case "Pagina_01.jpg": pintaPagina01(ctx); break;
				case "Pagina_02.jpg": pintaCapsalera(ctx); break;
				case "Pagina_03.jpg": pintaCapsalera(ctx); break;
				case "Pagina_04.jpg": pintaCapsalera(ctx); break;
				case "Pagina_05.jpg": pintaPagina05(ctx); break;
				case "Pagina_06.jpg": pintaPagina06(ctx); break;
			}
			

      ctx.end()
    }

    // eval(text);
    ctx.stream.on('finish', function () {
      iframe.src = ctx.stream.toBlobURL('application/pdf');
    });

  }



})