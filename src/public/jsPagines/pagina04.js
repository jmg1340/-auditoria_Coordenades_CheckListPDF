/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina04 (ctx){

  /* CAPÇALERA */
  pintaCapsalera(ctx)

	
  /* TAREAS REQUERIDAS */

  
  new Quadrat(ctx.doc, 86.0, 151.0, oAudit.tareasRequeridas.RetirarMinipacsDelRack).pinta()
  new Quadrat(ctx.doc, 86.0, 168.0, oAudit.tareasRequeridas.RevisarCascosJabra).pinta()
  new Quadrat(ctx.doc, 86.0, 185.0, oAudit.tareasRequeridas.RetirarDelRack).pinta()
  
  new Quadrat(ctx.doc, 86.0, 202.0, !!oAudit.tareasRequeridas.Retirar1).pinta() // !! converteix un string a boolean; "" es false;
  ctx.doc.text(oAudit.tareasRequeridas.Retirar1, 94.0, 206.0 - 8);

  new Quadrat(ctx.doc, 86.0, 219.0, !!oAudit.tareasRequeridas.Retirar2).pinta() // !! converteix un string a boolean; "" es false;
  ctx.doc.text(oAudit.tareasRequeridas.Retirar2, 94.0, 223.0 - 8);

  new Quadrat(ctx.doc, 264.0, 151.0, !!oAudit.tareasRequeridas.Retirar3).pinta() // !! converteix un string a boolean; "" es false;
  ctx.doc.text(oAudit.tareasRequeridas.Retirar3, 270.0, 155.0 - 8);

  new Quadrat(ctx.doc, 264.0, 168.0, !!oAudit.tareasRequeridas.Retirar4).pinta() // !! converteix un string a boolean; "" es false;
  ctx.doc.text(oAudit.tareasRequeridas.Retirar4, 270.0, 172.0 - 8);

  new Quadrat(ctx.doc, 264.0, 185.0, !!oAudit.tareasRequeridas.Retirar5).pinta() // !! converteix un string a boolean; "" es false;
  ctx.doc.text(oAudit.tareasRequeridas.Retirar5, 270.0, 189.0 - 8);





  /* SALA DE COMUNICACIONES */


  /* -- Centro secundario */
  let objS = oAudit.instalacionsComunicacions.sala

  new Cercle(ctx.doc, 299.0, 280.0, objS.centreSecundari.existeix).pinta()
  new Cercle(ctx.doc, 323.0, 280.0, !objS.centreSecundari.existeix).pinta()
  ctx.doc.text(objS.centreSecundari.idCentrePrincipal, 457.0, 283.0 - 8);
  
  

  /* -- Accesibilidad sala */
  let objAcc = oAudit.instalacionsComunicacions.sala.accessibilitat
  
  new Cercle(ctx.doc, 193.0, 329.0, objAcc.cerraduraPorta.existeix).pinta()
  new Cercle(ctx.doc, 228.0, 329.0, !objAcc.cerraduraPorta.existeix && objAcc.cerraduraPorta.existeix != null).pinta()
  ctx.doc.text(objAcc.cerraduraPorta.observacions, 338.0, 333.0 - 8);
  
  new Cercle(ctx.doc, 193.0, 346.0, objAcc.estatPorta == "abierta" ? true : false).pinta() 
  new Cercle(ctx.doc, 264.0, 346.0, objAcc.estatPorta == "cerrada" ? true : false).pinta()			

  new Cercle(ctx.doc, 193.0, 365.0, objAcc.zonaPasLliure.existeix).pinta()
  new Cercle(ctx.doc, 228.0, 365.0, !objAcc.zonaPasLliure.existeix && objAcc.zonaPasLliure.existeix != null).pinta()
  ctx.doc.text(objAcc.zonaPasLliure.observacions, 338.0, 368.0 - 8);



  /* -- WAN proveedor externo */
  let objProv = oAudit.instalacionsComunicacions.sala.proveidorWAN

  new Cercle(ctx.doc, 264.0, 398.0, objProv.estatInstalacio == "muy deficiente").pinta()
  new Cercle(ctx.doc, 300.0, 398.0, objProv.estatInstalacio == "deficiente").pinta()
  new Cercle(ctx.doc, 335.0, 398.0, objProv.estatInstalacio == "mejorable").pinta()
  new Cercle(ctx.doc, 371.0, 398.0, objProv.estatInstalacio == "aceptable").pinta()
  new Cercle(ctx.doc, 406.0, 398.0, objProv.estatInstalacio == "correcto").pinta()


  new Cercle(ctx.doc, 264.0, 417.0, objProv.instalacionsObsoletes.existeix).pinta()
  new Cercle(ctx.doc, 264.0, 412.0, !objProv.instalacionsObsoletes.existeix && objProv.instalacionsObsoletes.existeix != null).pinta()
  ctx.doc.text(objProv.instalacionsObsoletes.observacions, 410.0, 420.0 - 8);


  new Cercle(ctx.doc, 264.0, 436.0, objProv.idLinia1.existeix).pinta()
  new Cercle(ctx.doc, 300.0, 436.0, !objProv.idLinia1.existeix && objProv.idLinia1.existeix != null).pinta()
  ctx.doc.text(objProv.idLinia1.observacions, 410.0, 440.0 - 8);


  new Cercle(ctx.doc, 264.0, 456.0, objProv.idLinia2.existeix).pinta()
  new Cercle(ctx.doc, 300.0, 456.0, !objProv.idLinia2.existeix && objProv.idLinia2.existeix != null).pinta()
  ctx.doc.text(objProv.idLinia2.observacions, 410.0, 459.0 - 8);



  new Cercle(ctx.doc, 264.0, 472.0, objProv.estatConvertidorLinia1 == "muy deficiente").pinta()
  new Cercle(ctx.doc, 300.0, 472.0, objProv.estatConvertidorLinia1 == "deficiente").pinta()
  new Cercle(ctx.doc, 335.0, 472.0, objProv.estatConvertidorLinia1 == "mejorable").pinta()
  new Cercle(ctx.doc, 371.0, 472.0, objProv.estatConvertidorLinia1 == "aceptable").pinta()
  new Cercle(ctx.doc, 406.0, 472.0, objProv.estatConvertidorLinia1 == "correcto").pinta()

  new Cercle(ctx.doc, 264.0, 488.0, objProv.estatConvertidorLinia2 == "muy deficiente").pinta()
  new Cercle(ctx.doc, 300.0, 488.0, objProv.estatConvertidorLinia2 == "deficiente").pinta()
  new Cercle(ctx.doc, 335.0, 488.0, objProv.estatConvertidorLinia2 == "mejorable").pinta()
  new Cercle(ctx.doc, 371.0, 488.0, objProv.estatConvertidorLinia2 == "aceptable").pinta()
  new Cercle(ctx.doc, 406.0, 488.0, objProv.estatConvertidorLinia2 == "correcto").pinta()



  /* -- SAI */
  let objSAI = oAudit.instalacionsComunicacions.sala.SAI

  new Cercle(ctx.doc, 193.0, 535.0, objSAI.estatSAI == "muy deficiente").pinta()
  new Cercle(ctx.doc, 229.0, 535.0, objSAI.estatSAI == "deficiente").pinta()
  new Cercle(ctx.doc, 264.0, 535.0, objSAI.estatSAI == "mejorable").pinta()
  new Cercle(ctx.doc, 300.0, 535.0, objSAI.estatSAI == "aceptable").pinta()
  new Cercle(ctx.doc, 335.0, 535.0, objSAI.estatSAI == "correcto").pinta()


  new Cercle(ctx.doc, 193.0, 555.0, objSAI.connexioSwitch.existeix).pinta()
  new Cercle(ctx.doc, 229.0, 555.0, !objSAI.connexioSwitch.existeix && objSAI.connexioSwitch.existeix != null).pinta()
  new Quadrat(ctx.doc, 264.0, 554.0, objSAI.connexioSwitch.connexioPortSW1Gi26).pinta() 
  new Quadrat(ctx.doc, 371.0, 555.0, !!objSAI.connexioSwitch.connexio.SW).pinta() 
  ctx.doc.text(objSAI.connexioSwitch.connexio.SW, 429.0, 558.0 - 8);
  ctx.doc.text(objSAI.connexioSwitch.connexio.port, 463.0, 558.0 - 8);


  new Cercle(ctx.doc, 193.0, 571.0, objSAI.instalacioSAI == "enrackado").pinta()
  new Cercle(ctx.doc, 264.0, 571.0, objSAI.instalacioSAI == "sueloEnRack").pinta()
  new Cercle(ctx.doc, 406.0, 571.0, objSAI.instalacioSAI == "sueloJuntoRack").pinta()


  // ELEMENTS CONNECTATS

  textVertical06( ctx, 429.0, 676.0, objSAI.altresElements.element1.nom)
  textVertical06( ctx, 443.0, 676.0, objSAI.altresElements.element2.nom)
  textVertical06( ctx, 457.0, 676.0, objSAI.altresElements.element3.nom)
  textVertical06( ctx, 471.0, 676.0, objSAI.altresElements.element4.nom)
  textVertical06( ctx, 486.0, 676.0, objSAI.altresElements.element5.nom)
  textVertical06( ctx, 500.0, 676.0, objSAI.altresElements.element6.nom)




  new Quadrat(ctx.doc, 229.0, 690.0, objSAI.elementsConnectatsSAI.router).pinta()	
  new Quadrat(ctx.doc, 247.0, 690.0, objSAI.elementsConnectatsSAI.routerNFS).pinta()	
  new Quadrat(ctx.doc, 266.0, 690.0, objSAI.elementsConnectatsSAI.switch1).pinta()	
  new Quadrat(ctx.doc, 286.0, 690.0, objSAI.elementsConnectatsSAI.switch2).pinta()	
  new Quadrat(ctx.doc, 306.0, 690.0, objSAI.elementsConnectatsSAI.switch3).pinta()	
  new Quadrat(ctx.doc, 326.0, 690.0, objSAI.elementsConnectatsSAI.convertidorLinia1).pinta()	
  new Quadrat(ctx.doc, 346.0, 690.0, objSAI.elementsConnectatsSAI.convertidorLinia2).pinta()	
  new Quadrat(ctx.doc, 366.0, 690.0, objSAI.elementsConnectatsSAI.router4G).pinta()	
  new Quadrat(ctx.doc, 386.0, 690.0, objSAI.elementsConnectatsSAI.filMusical).pinta()	
  new Quadrat(ctx.doc, 406.0, 690.0, objSAI.elementsConnectatsSAI.ampliFilM).pinta()	
  new Quadrat(ctx.doc, 421.0, 690.0, objSAI.elementsConnectatsSAI.raspberry).pinta()

  new Quadrat(ctx.doc, 435.0, 690.0, objSAI.altresElements.element1.connexio.SAI).pinta()
  new Quadrat(ctx.doc, 449.0, 690.0, objSAI.altresElements.element2.connexio.SAI).pinta()
  new Quadrat(ctx.doc, 463.0, 690.0, objSAI.altresElements.element3.connexio.SAI).pinta()
  new Quadrat(ctx.doc, 477.0, 690.0, objSAI.altresElements.element4.connexio.SAI).pinta()
  new Quadrat(ctx.doc, 491.0, 690.0, objSAI.altresElements.element5.connexio.SAI).pinta()
  new Quadrat(ctx.doc, 506.0, 690.0, objSAI.altresElements.element6.connexio.SAI).pinta()





  new Quadrat(ctx.doc, 229.0, 706.0, objSAI.elementsRegletaNeta.router).pinta()	
  new Quadrat(ctx.doc, 247.0, 706.0, objSAI.elementsRegletaNeta.routerNFS).pinta()	
  new Quadrat(ctx.doc, 266.0, 706.0, objSAI.elementsRegletaNeta.switch1).pinta()	
  new Quadrat(ctx.doc, 286.0, 706.0, objSAI.elementsRegletaNeta.switch2).pinta()	
  new Quadrat(ctx.doc, 306.0, 706.0, objSAI.elementsRegletaNeta.switch3).pinta()	
  new Quadrat(ctx.doc, 326.0, 706.0, objSAI.elementsRegletaNeta.convertidorLinia1).pinta()	
  new Quadrat(ctx.doc, 346.0, 706.0, objSAI.elementsRegletaNeta.convertidorLinia2).pinta()	
  new Quadrat(ctx.doc, 366.0, 706.0, objSAI.elementsRegletaNeta.router4G).pinta()	
  new Quadrat(ctx.doc, 386.0, 706.0, objSAI.elementsRegletaNeta.filMusical).pinta()	
  new Quadrat(ctx.doc, 406.0, 706.0, objSAI.elementsRegletaNeta.ampliFilM).pinta()	
  new Quadrat(ctx.doc, 421.0, 706.0, objSAI.elementsRegletaNeta.raspberry).pinta()	

  new Quadrat(ctx.doc, 435.0, 706.0, objSAI.altresElements.element1.connexio.RNeta).pinta()
  new Quadrat(ctx.doc, 449.0, 706.0, objSAI.altresElements.element2.connexio.RNeta).pinta()
  new Quadrat(ctx.doc, 463.0, 706.0, objSAI.altresElements.element3.connexio.RNeta).pinta()
  new Quadrat(ctx.doc, 477.0, 706.0, objSAI.altresElements.element4.connexio.RNeta).pinta()
  new Quadrat(ctx.doc, 491.0, 706.0, objSAI.altresElements.element5.connexio.RNeta).pinta()
  new Quadrat(ctx.doc, 506.0, 706.0, objSAI.altresElements.element6.connexio.RNeta).pinta()




  new Quadrat(ctx.doc, 229.0, 720.0, objSAI.elementsRegletaBruta.router).pinta()	
  new Quadrat(ctx.doc, 247.0, 720.0, objSAI.elementsRegletaBruta.routerNFS).pinta()	
  new Quadrat(ctx.doc, 266.0, 720.0, objSAI.elementsRegletaBruta.switch1).pinta()	
  new Quadrat(ctx.doc, 286.0, 720.0, objSAI.elementsRegletaBruta.switch2).pinta()	
  new Quadrat(ctx.doc, 306.0, 720.0, objSAI.elementsRegletaBruta.switch3).pinta()	
  new Quadrat(ctx.doc, 326.0, 720.0, objSAI.elementsRegletaBruta.convertidorLinia1).pinta()	
  new Quadrat(ctx.doc, 346.0, 720.0, objSAI.elementsRegletaBruta.convertidorLinia2).pinta()	
  new Quadrat(ctx.doc, 366.0, 720.0, objSAI.elementsRegletaBruta.router4G).pinta()	
  new Quadrat(ctx.doc, 386.0, 720.0, objSAI.elementsRegletaBruta.filMusical).pinta()	
  new Quadrat(ctx.doc, 406.0, 720.0, objSAI.elementsRegletaBruta.ampliFilM).pinta()	
  new Quadrat(ctx.doc, 421.0, 720.0, objSAI.elementsRegletaBruta.raspberry).pinta()	

  new Quadrat(ctx.doc, 435.0, 720.0, objSAI.altresElements.element1.connexio.RBruta).pinta()
  new Quadrat(ctx.doc, 449.0, 720.0, objSAI.altresElements.element2.connexio.RBruta).pinta()
  new Quadrat(ctx.doc, 463.0, 720.0, objSAI.altresElements.element3.connexio.RBruta).pinta()
  new Quadrat(ctx.doc, 477.0, 720.0, objSAI.altresElements.element4.connexio.RBruta).pinta()
  new Quadrat(ctx.doc, 491.0, 720.0, objSAI.altresElements.element5.connexio.RBruta).pinta()
  new Quadrat(ctx.doc, 506.0, 720.0, objSAI.altresElements.element6.connexio.RBruta).pinta()





  new Quadrat(ctx.doc, 229.0, 747.0, objSAI.elementsSenseVerificar.router).pinta()	
  new Quadrat(ctx.doc, 247.0, 747.0, objSAI.elementsSenseVerificar.routerNFS).pinta()	
  new Quadrat(ctx.doc, 266.0, 747.0, objSAI.elementsSenseVerificar.switch1).pinta()	
  new Quadrat(ctx.doc, 286.0, 747.0, objSAI.elementsSenseVerificar.switch2).pinta()	
  new Quadrat(ctx.doc, 306.0, 747.0, objSAI.elementsSenseVerificar.switch3).pinta()	
  new Quadrat(ctx.doc, 326.0, 747.0, objSAI.elementsSenseVerificar.convertidorLinia1).pinta()	
  new Quadrat(ctx.doc, 346.0, 747.0, objSAI.elementsSenseVerificar.convertidorLinia2).pinta()	
  new Quadrat(ctx.doc, 366.0, 747.0, objSAI.elementsSenseVerificar.router4G).pinta()	
  new Quadrat(ctx.doc, 386.0, 747.0, objSAI.elementsSenseVerificar.filMusical).pinta()	
  new Quadrat(ctx.doc, 406.0, 747.0, objSAI.elementsSenseVerificar.ampliFilM).pinta()	
  new Quadrat(ctx.doc, 421.0, 747.0, objSAI.elementsSenseVerificar.raspberry).pinta()	

  new Quadrat(ctx.doc, 435.0, 747.0, objSAI.altresElements.element1.connexio.SenseVerificar).pinta()
  new Quadrat(ctx.doc, 449.0, 747.0, objSAI.altresElements.element2.connexio.SenseVerificar).pinta()
  new Quadrat(ctx.doc, 463.0, 747.0, objSAI.altresElements.element3.connexio.SenseVerificar).pinta()
  new Quadrat(ctx.doc, 477.0, 747.0, objSAI.altresElements.element4.connexio.SenseVerificar).pinta()
  new Quadrat(ctx.doc, 491.0, 747.0, objSAI.altresElements.element5.connexio.SenseVerificar).pinta()
  new Quadrat(ctx.doc, 506.0, 747.0, objSAI.altresElements.element6.connexio.SenseVerificar).pinta()




}




function textVertical06 (ctx, x, y, text) {
	ctx.doc.rotate(-90, { origin: [x,y] });
	ctx.doc.text( text, x, y);
	ctx.doc.rotate(-90 * (-1), { origin: [x,y] });	
}