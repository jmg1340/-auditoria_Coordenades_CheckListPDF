/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina09 (ctx){

  /* CAPÇALERA */
	pintaCapsalera(ctx)


	/* SEGURETAT DE LA INFORMACIO */
	
	/* -- mesas limpias */
	let objML = oAudit.seguretatInformacio.taulesNetes

	new Cercle(ctx.doc, 228.0, 203.0, objML.documentacioSobreTaules.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 203.0, !objML.documentacioSobreTaules.existeix && objML.documentacioSobreTaules.existeix != null).pinta()
	ctx.doc.text(objML.documentacioSobreTaules.observacions, 370.0, 207.0 - 8);	

	new Cercle(ctx.doc, 229.0, 222.0, objML.documentacioImpresores.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 222.0, !objML.documentacioImpresores.existeix && objML.documentacioImpresores.existeix != null).pinta()
	ctx.doc.text(objML.documentacioImpresores.observacions, 370.0, 225.0 - 8);	

	new Cercle(ctx.doc, 228.0, 241.0, objML.documentacioPapeleres.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 241.0, !objML.documentacioPapeleres.existeix && objML.documentacioPapeleres.existeix != null).pinta()
	ctx.doc.text(objML.documentacioPapeleres.observacions, 370.0, 245.0 - 8);	



	/* -- destruccio de documents */
	let objDD = oAudit.seguretatInformacio.destruccioDocuments

	new Cercle(ctx.doc, 228.0, 277.0, objDD.destructoraPapers.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 277.0, !objDD.destructoraPapers.existeix && objDD.destructoraPapers.existeix != null).pinta()
	ctx.doc.text(objDD.destructoraPapers.observacionsPapers, 370.0, 281.0 - 8);	

	new Cercle(ctx.doc, 228.0, 297.0, objDD.destructoraPapers.complementCDs).pinta()
	new Cercle(ctx.doc, 264.0, 332.0, !objDD.destructoraPapers.complementCDs && objDD.destructoraPapers.complementCDs != null).pinta()
	ctx.doc.text(objDD.destructoraPapers.observacionsCDs, 370.0, 301.0 - 8);	

	ctx.doc.text(objDD.destructoraPapers.quantitat, 225.0, 316.0 - 8);


	new Cercle(ctx.doc, 229.0, 332.0, objDD.contenidorSegur.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 384.0, !objDD.contenidorSegur.existeix && objDD.contenidorSegur.existeix != null).pinta()
	ctx.doc.text(objDD.contenidorSegur.observacions, 370.0, 336.0 - 8);	

	ctx.doc.text(objDD.contenidorSegur.quantitat, 233.0, 352.0 - 8);



	/* -- orientacio pantalles */
	let objOP = oAudit.seguretatInformacio.OrientacioPantalles

	new Cercle(ctx.doc, 228.0, 384.0, objOP.exterior).pinta()
	new Cercle(ctx.doc, 264.0, 384.0, !objOP.exterior && objOP.exterior != null).pinta()
	ctx.doc.text(objOP.observacionsExterior, 370.0, 388.0 - 8);	

	new Cercle(ctx.doc, 228.0, 403.0, objOP.zonaPas).pinta()
	new Cercle(ctx.doc, 264.0, 403.0, !objOP.zonaPas && objOP.zonaPas != null).pinta()
	ctx.doc.text(objOP.observacionsZonaPas, 370.0, 407.0 - 8);	


	/* -- cartelleria LOPD */
	let objCL = oAudit.seguretatInformacio.carteleriaLOPD

	new Cercle(ctx.doc, 228.0, 440.0, objCL.PROAS).pinta()
	new Cercle(ctx.doc, 264.0, 440.0, !objCL.PROAS && objCL.PROAS != null).pinta()
	ctx.doc.text(objCL.observacionsPROAS, 370.0, 443.0 - 8);	

	new Cercle(ctx.doc, 228.0, 459.0, objCL.CEX).pinta()
	new Cercle(ctx.doc, 264.0, 459.0, !objCL.CEX && objCL.CEX != null).pinta()
	ctx.doc.text(objCL.observacionsCEX, 370.0, 463.0 - 8);	




	/* -- Gestion activos */
	let objMB = oAudit.seguretatInformacio.materialBaixaInventari

	new Cercle(ctx.doc, 229.0, 509.0, objMB.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 509.0, !objMB.existeix && objMB.existeix != null).pinta()
	ctx.doc.text(objMB.observacions, 370.0, 513.0 - 8);	


	let objSF = oAudit.seguretatInformacio.suportsFisics

	new Cercle(ctx.doc, 231.0, 528.0, objSF.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 528.0, !objSF.existeix && objSF.existeix != null).pinta()
	ctx.doc.text(objSF.observacions, 370.0, 532.0 - 8);	


	let objDS = oAudit.seguretatInformacio.documentacioSensible

	new Cercle(ctx.doc, 228.0, 547.0, objDS.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 547.0, !objDS.existeix && objDS.existeix != null).pinta()
	ctx.doc.text(objDS.observacions, 370.0, 551.0 - 8);	


	let objEG = oAudit.seguretatInformacio.expedientsGreus

	new Cercle(ctx.doc, 228.0, 567.0, objEG.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 567.0, !objEG.existeix && objEG.existeix != null).pinta()
	ctx.doc.text(objEG.observacions, 370.0, 570.0 - 8);	




	let objAPI = oAudit.seguretatInformacio.accesAlCentre.personalIntern

	new Cercle(ctx.doc,228.0, 634.0, objAPI.usuarisAmbClaus.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 634.0, !objAPI.usuarisAmbClaus.existeix && objAPI.usuarisAmbClaus.existeix != null).pinta()
	ctx.doc.text(objAPI.usuarisAmbClaus.observacions, 370.0, 637.0 - 8);	

	new Cercle(ctx.doc, 228.0, 653.0, objAPI.codisAlarma.tipus == "individuales").pinta()
	new Cercle(ctx.doc, 264.0, 653.0, objAPI.codisAlarma.tipus == "generico").pinta()
	ctx.doc.text(objAPI.codisAlarma.observacions, 370.0, 657.0 - 8);	


	let objAPE = oAudit.seguretatInformacio.accesAlCentre.personalExtern

	new Cercle(ctx.doc, 229.0, 689.0, objAPE.usuarisAmbClaus.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 689.0, !objAPE.usuarisAmbClaus.existeix && objAPE.usuarisAmbClaus.existeix != null).pinta()
	ctx.doc.text(objAPE.usuarisAmbClaus.observacions, 370.0, 693.0 - 8);	

	new Cercle(ctx.doc, 229.0, 708.0, objAPE.codisAlarma.tipus == "individuales").pinta()
	new Cercle(ctx.doc, 264.0, 708.0, objAPE.codisAlarma.tipus == "generico").pinta()
	ctx.doc.text(objAPE.codisAlarma.observacions, 370.0, 713.0- 8);	




	let objAFH = oAudit.seguretatInformacio.accesAlCentre.accesForaHorariHabitual

	new Cercle(ctx.doc, 228.0, 727.0, objAFH.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 728.0, !objAFH.existeix && objAFH.existeix != null).pinta()
	ctx.doc.text(objAFH.observacions, 370.0, 731.0 - 8);	





	ctx.doc.text(oAudit.seguretatInformacio.accesAlCentre.observacions, 66.0, 763.0 - 8);

}