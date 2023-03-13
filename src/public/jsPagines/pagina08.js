/* 
Pinta les respostes del la 	PAGINA 8, segons les cooredenades
*/


function pintaPagina08 (ctx){

  /* CAPÇALERA */
	pintaCapsalera(ctx)


	/* CU */
	
	/* -- sala de reunions */
	let objSR = oAudit.comunicacionsUnificades.salaReunions

	// new Cercle(ctx.doc, 234.0, 153.0, objSR.existeix).pinta()
	// new Cercle(ctx.doc, 264.0, 153.0, !objSR.existeix && objSR.existeix != null).pinta()
	// new Quadrat(ctx.doc, 293.0, 153.0, !!objSR.numero).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objSR.numero, 108.0, 138.0 - 8);	


	ctx.doc.text(objSR.capacitat, 301.0, 138.0 - 8);	
	ctx.doc.text(objSR.mides, 472.0, 138.0 - 8);	


	new Quadrat(ctx.doc, 158.0, 169.0, objSR.dispositius.SX10).pinta()
	new Quadrat(ctx.doc, 193.0, 169.0, objSR.dispositius.SX80).pinta()
	new Quadrat(ctx.doc, 229.0, 169.0, objSR.dispositius.roomkit).pinta()
	new Quadrat(ctx.doc, 300.0, 169.0, objSR.dispositius.DX80).pinta()
	new Quadrat(ctx.doc, 336.0, 169.0, objSR.dispositius.camaraWeb).pinta()
	new Quadrat(ctx.doc, 158.0, 183.0, objSR.dispositius.tablet).pinta()
	new Quadrat(ctx.doc, 229.0, 183.0, objSR.dispositius.mando).pinta()
	// new Quadrat(ctx.doc, 320.0, 221.0, objSR.dispositius.altaveu).pinta()
	new Quadrat(ctx.doc, 158.0, 197.0, objSR.dispositius.TV).pinta()
	new Quadrat(ctx.doc, 194.0, 197.0, objSR.dispositius.projector).pinta()
	new Quadrat(ctx.doc, 158.0, 211.0, objSR.dispositius.PC).pinta()
	new Quadrat(ctx.doc, 193.0, 212.0, objSR.dispositius.displayPortHDMI).pinta()
	new Quadrat(ctx.doc, 300.0, 212.0, objSR.dispositius.conversorVGA_HDMI).pinta()
	new Quadrat(ctx.doc, 442.0, 211.0, objSR.dispositius.cableAudio).pinta()
	new Quadrat(ctx.doc, 158.0, 224.0, objSR.dispositius.duplicadorHDMI).pinta()


	// new Quadrat(ctx.doc, 234.0, 273.0, objSR.recomanacions.renovarPorjector).pinta()
	// new Quadrat(ctx.doc, 328.0, 273.0, objSR.recomanacions.dotacioWebCam).pinta()
	// new Quadrat(ctx.doc, 412.0, 273.0, objSR.recomanacions.DotacioJabra).pinta()
	// new Quadrat(ctx.doc, 234.0, 290.0, !!objSR.recomanacions.altres).pinta()
	// ctx.doc.text(objSR.recomanacions.altres, 241.0, 294.0 - 8);




	/* -- videoconferencia */
	let objVC = oAudit.comunicacionsUnificades.videoconferencia

	// new Cercle(ctx.doc, 234.0, 324.0, objVC.operativa).pinta()
	// new Cercle(ctx.doc, 263.0, 324.0, !objVC.operativa && objVC.operativa != null).pinta()
	// new Quadrat(ctx.doc, 293.0, 324.0, !!objVC.observacionsOperativa).pinta() // !! converteix un string a boolean; "" es false;
	// ctx.doc.text(objVC.observacionsOperativa, 360.0, 328.0 - 8);	

	new Cercle(ctx.doc, 158.0, 271.0, objVC.prova.feta).pinta()
	new Cercle(ctx.doc, 193.0, 271.0, !objVC.prova.feta && objVC.prova.feta != null).pinta()

	new Cercle(ctx.doc, 157.0, 287.0, objVC.prova.resultat == "muy deficiente").pinta()
	new Cercle(ctx.doc, 193.0, 287.0, objVC.prova.resultat == "deficiente").pinta()
	new Cercle(ctx.doc, 228.0, 287.0, objVC.prova.resultat == "mejorable").pinta()
	new Cercle(ctx.doc, 264.0, 287.0, objVC.prova.resultat == "aceptable").pinta()
	new Cercle(ctx.doc, 299.0, 287.0, objVC.prova.resultat == "correcto").pinta()

	ctx.doc.text(objVC.prova.observacions, 142.0, 310.0 - 8);

	// new Quadrat(ctx.doc, 234.0, 358.0, objVC.prova.trucada).pinta()
	// new Quadrat(ctx.doc, 284.0, 358.0, objVC.prova.compartirPc).pinta()
	// new Quadrat(ctx.doc, 352.0, 358.0, objVC.prova.audio).pinta()
	// new Quadrat(ctx.doc, 391.0, 358.0, objVC.prova.video).pinta()



	/* -- telefon supervivència */
	let objTS = oAudit.comunicacionsUnificades.telefonSupervivencia

	new Cercle(ctx.doc, 193.0, 373.0, objTS.existeix).pinta()
	new Cercle(ctx.doc, 229.0, 373.0, !objTS.existeix && objTS.existeix != null).pinta()
	// new Quadrat(ctx.doc, 293.0, 408.0, !!objTS.observacionsExistencia).pinta() // !! converteix un string a boolean; "" es false;
	// ctx.doc.text(objTS.observacionsExistencia, 364.0, 413.0 - 8);	

	ctx.doc.text(objTS.DDI, 155.0, 395.0 - 8);	

	new Cercle(ctx.doc, 158.0, 408.0, objTS.estat == "muy deficiente").pinta()
	new Cercle(ctx.doc, 193.0, 408.0, objTS.estat == "deficiente").pinta()
	new Cercle(ctx.doc, 228.0, 408.0, objTS.estat == "mejorable").pinta()
	new Cercle(ctx.doc, 264.0, 408.0, objTS.estat == "aceptable").pinta()
	new Cercle(ctx.doc, 300.0, 408.0, objTS.estat == "correcto").pinta()

	ctx.doc.text(objTS.ubicacio, 154.0, 431.0 - 8);	

	new Cercle(ctx.doc, 157.0, 443.0, objTS.resultatProva == "muy deficiente").pinta()
	new Cercle(ctx.doc, 193.0, 443.0, objTS.resultatProva == "deficiente").pinta()
	new Cercle(ctx.doc, 229.0, 443.0, objTS.resultatProva == "mejorable").pinta()
	new Cercle(ctx.doc, 264.0, 443.0, objTS.resultatProva == "aceptable").pinta()
	new Cercle(ctx.doc, 299.0, 443.0, objTS.resultatProva == "correcto").pinta()

	new Quadrat(ctx.doc, 157.0, 460.0, objTS.prova.trucadaEntrant).pinta()
	new Quadrat(ctx.doc, 264.0, 460.0, objTS.prova.trucadaSortint).pinta()
	new Quadrat(ctx.doc, 372.0, 460.0, objTS.prova.desconectarTensio).pinta()
	new Quadrat(ctx.doc, 479.0, 460.0, objTS.prova.nivellAudioRing).pinta()


	// - nivells - 

	new Quadrat(ctx.doc, 263.0, 511.0, objTS.nivellCobertura == 1).pinta()
	new Quadrat(ctx.doc, 272.0, 511.0, objTS.nivellCobertura == 2).pinta()
	new Quadrat(ctx.doc, 281.0, 511.0, objTS.nivellCobertura == 3).pinta()
	new Quadrat(ctx.doc, 290.0, 511.0, objTS.nivellCobertura == 4).pinta()

	new Quadrat(ctx.doc, 264.0, 529.0, objTS.nivellBateria == 1).pinta()
	new Quadrat(ctx.doc, 273.0, 529.0, objTS.nivellBateria == 2).pinta()
	new Quadrat(ctx.doc, 281.0, 529.0, objTS.nivellBateria == 3).pinta()
	new Quadrat(ctx.doc, 290.0, 529.0, objTS.nivellBateria == 4).pinta()


	new Cercle(ctx.doc, 264.0, 548.0, objTS.connectatCorrent).pinta()
	new Cercle(ctx.doc, 299.0, 549.0, !objTS.connectatCorrent && objTS.connectatCorrent != null).pinta()

	new Cercle(ctx.doc, 335.0, 568.0, objTS.instruccionsProperes).pinta()
	new Cercle(ctx.doc, 370.0, 568.0, !objTS.instruccionsProperes && objTS.instruccionsProperes != null).pinta()



	/* -- auriculars */
	let objAR = oAudit.comunicacionsUnificades.auricularsRecanvi

	new Cercle(ctx.doc, 229.0, 630.0, objAR.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 630.0, !objAR.existeix && objAR.existeix != null).pinta()
	// new Quadrat(ctx.doc, 291.0, 672.0, !!objAR.observacions).pinta() // !! converteix un string a boolean; "" es false;
	// ctx.doc.text(objAR.observacions, 356.0, 676.0 - 8);	

	ctx.doc.text(objAR.quantitat, 219.0, 651.0 - 8);	




	ctx.doc.text(oAudit.comunicacionsUnificades.observacionsCU, 77.0, 693.0 - 8);


}