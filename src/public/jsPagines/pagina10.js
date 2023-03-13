/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina10 (ctx){

  /* CAPÇALERA */
	pintaCapsalera(ctx)


	/* SEGURETAT DE LA INFORMACIO */
	
	/* -- seguretat fisica i de l'entorn */
	let objAI = oAudit.seguretatInformacio.alarmaIntrusio

	new Cercle(ctx.doc, 228.0, 85.00, objAI.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 85.0, !objAI.existeix && objAI.existeix != null).pinta()
	ctx.doc.text(objAI.observacions, 370.0, 88.0 - 8);	


	
	/* -- Videovigilancia */
	let objVV = oAudit.seguretatInformacio.videovigilancia
	
	new Cercle(ctx.doc, 229.0, 104.0, objVV.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 104.0, !objVV.existeix && objVV.existeix != null).pinta()
	ctx.doc.text(objVV.observacions, 370.0, 108.0 - 8);	

	new Cercle(ctx.doc, 229.0, 123.0, objVV.gestioInterna.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 123.0, !objVV.gestioInterna.existeix && objVV.gestioInterna.existeix != null).pinta()
	ctx.doc.text(objVV.gestioInterna.observacions, 370.0, 127.0 - 8);	
	
	ctx.doc.text(objVV.gestioInterna.gravacioImatges.personalAmbAcces, 190.0, 146.0 - 8);	
	ctx.doc.text(objVV.gestioInterna.gravacioImatges.periodeConservacio, 190.0, 163.0 - 8);	
	
	
	
	new Cercle(ctx.doc, 229.0, 179.0, objVV.gestioExterna.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 179.0, !objVV.gestioExterna.existeix && objVV.gestioExterna.existeix != null).pinta()
	ctx.doc.text(objVV.gestioExterna.observacionsExistencia, 370.0, 183.0 - 8);	
	
	ctx.doc.text(objVV.gestioExterna.periodeConservacio, 190.0, 201.0 - 8);	
	
	new Cercle(ctx.doc, 228.0, 217.0, objVV.gestioExterna.evidencia).pinta()
	new Cercle(ctx.doc, 264.0, 217.0, !objVV.gestioExterna.evidencia && objVV.gestioExterna.evidencia != null).pinta()
	ctx.doc.text(objVV.gestioExterna.observacionsEvidencia, 370.0, 220.0 - 8);	
	

	
	new Cercle(ctx.doc, 229.0, 235.0, objVV.retol.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 236.0, !objVV.retol.existeix && objVV.retol.existeix != null).pinta()
	ctx.doc.text(objVV.retol.observacions, 370.0, 239.0 - 8);	
	
	new Cercle(ctx.doc, 229.0, 255.0, objVV.carteleriaActualitzada.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 255.0, !objVV.carteleriaActualitzada.existeix && objVV.carteleriaActualitzada.existeix != null).pinta()
	ctx.doc.text(objVV.carteleriaActualitzada.observacions, 370.0, 259.0 - 8);	
	
	
	
	let objAIn = oAudit.seguretatInformacio.alarmaIncendis

	new Cercle(ctx.doc, 229.0, 274.0, objAIn.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 274.0, !objAIn.existeix && objAIn.existeix != null).pinta()
	ctx.doc.text(objAIn.observacions, 370.0, 278.0 - 8);	



	/* -- seguretat de les operacions */
	let objSO = oAudit.seguretatInformacio.GADAplanContinuidadNegocio

	new Cercle(ctx.doc, 264.0, 347.0, objSO.existeix).pinta()
	new Cercle(ctx.doc, 300.0, 347.0, !objSO.existeix && objSO.existeix != null).pinta()
	ctx.doc.text(objSO.observacions, 406.0, 351.0 - 8);	


	let objCAlt = oAudit.seguretatInformacio.GADAcentresAlternatius

	new Cercle(ctx.doc, 264.0, 366.0, objCAlt.existeix).pinta()
	new Cercle(ctx.doc, 300.0, 366.0, !objCAlt.existeix && objCAlt.existeix != null).pinta()
	ctx.doc.text(objCAlt.observacions, 406.0, 370.0 - 8);	


	let objTS = oAudit.seguretatInformacio.telefonSupervivencia

	new Cercle(ctx.doc, 264.0, 385.0, objTS.existeix).pinta()
	new Cercle(ctx.doc, 300.0, 385.0, !objTS.existeix && objTS.existeix != null).pinta()
	ctx.doc.text(objTS.observacions, 406.0, 389.0 - 8);	


	let objPP = oAudit.seguretatInformacio.procedimentsPaper

	new Cercle(ctx.doc, 264.0, 405.0, objPP.existeix).pinta()
	new Cercle(ctx.doc, 299.0, 405.0, !objPP.existeix && objPP.existeix != null).pinta()
	ctx.doc.text(objPP.observacions, 406.0, 409.0 - 8);	


	// let objPE = oAudit.seguretatInformacio.pendriveEmergencia

	// new Cercle(ctx.doc, 234.0, 408.0, objPE.ubicacioCorrecte.existeix).pinta()
	// new Cercle(ctx.doc, 263.0, 408.0, !objPE.ubicacioCorrecte.existeix && objPE.ubicacioCorrecte.existeix != null).pinta()
	// ctx.doc.text(objPE.ubicacioCorrecte.observacions, 360.0, 412.0 - 8);	

	// new Cercle(ctx.doc, 234.0, 425.0, objPE.ultimaVersio.existeix).pinta()
	// new Cercle(ctx.doc, 263.0, 425.0, !objPE.ultimaVersio.existeix && objPE.ultimaVersio.existeix != null).pinta()
	// ctx.doc.text(objPE.ultimaVersio.observacions, 360.0, 429.0 - 8);	

	// new Cercle(ctx.doc, 234.0, 442.0, objPE.actualitzacio.feta).pinta()
	// new Cercle(ctx.doc, 263.0, 442.0, !objPE.actualitzacio.feta && objPE.actualitzacio.feta != null).pinta()
	// ctx.doc.text(objPE.actualitzacio.observacions, 360.0, 446.0 - 8);	





	/* -- seguretat de les comunicacionss */
	let objAS = oAudit.seguretatInformacio.accesSegurSalaComunicacions

	new Cercle(ctx.doc, 264.0, 470.0, objAS.existeix).pinta()
	new Cercle(ctx.doc, 299.0, 470.0, !objAS.existeix && objAS.existeix != null).pinta()
	ctx.doc.text(objAS.observacions, 406.0, 474.0 - 8);	


	let objAR = oAudit.seguretatInformacio.accesSegurRack

	new Cercle(ctx.doc, 264.0, 490.0, objAR.existeix).pinta()
	new Cercle(ctx.doc, 300.0, 490.0, !objAR.existeix && objAR.existeix != null).pinta()
	ctx.doc.text(objAR.observacions, 406.0, 493.0 - 8);	


	let objSAIR = oAudit.seguretatInformacio.SAIRack

	new Cercle(ctx.doc, 264.0, 509.0, objSAIR.existeix).pinta()
	new Cercle(ctx.doc, 300.0, 509.0, !objSAIR.existeix && objSAIR.existeix != null).pinta()
	ctx.doc.text(objSAIR.observacions, 406.0, 513.0 - 8);	


	// let objPuntsX = oAudit.seguretatInformacio.puntsXarxaSalaEspera

	// new Cercle(ctx.doc, 234.0, 530.0, objPuntsX.existeix).pinta()
	// new Cercle(ctx.doc, 263.0, 530.0, !objPuntsX.existeix && objPuntsX.existeix != null).pinta()
	// ctx.doc.text(objPuntsX.observacions, 360.0, 534.0 - 8);	


	ctx.doc.text(oAudit.seguretatInformacio.observacions, 90.0, 561.0 - 8);	
}