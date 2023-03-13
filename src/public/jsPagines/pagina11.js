/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina11 (ctx){

  /* CAPÇALERA */
	pintaCapsalera(ctx)


	/* FORMACIO */
	
	let objForm = oAudit.formacio
	/* -- auriculars */

	new Cercle(ctx.doc, 86.0, 127.0, objForm.auriculars).pinta()
	new Cercle(ctx.doc, 122.0, 127.0, !objForm.auriculars && objForm.auriculars != null).pinta()
	// new Quadrat(ctx.doc, 58.0, 150.0, !!objForm.auriculars.observacions).pinta() // !! converteix un string a boolean; "" es false;
	// ctx.doc.text(objForm.auriculars.observacions, 66.0, 166.0 - 8);	



	/* -- videoconferencia */

	new Cercle(ctx.doc, 86.0, 191.0, objForm.videoconferencia).pinta()
	new Cercle(ctx.doc, 122.0, 191.0, !objForm.videoconferencia && objForm.videoconferencia != null).pinta()
	// new Quadrat(ctx.doc, 58.0, 269.0, !!objForm.videoconferencia.instruccionsEntregades).pinta() 
	// new Quadrat(ctx.doc, 58.0, 284.0, !!objForm.videoconferencia.observacions).pinta() // !! converteix un string a boolean; "" es false;
	// ctx.doc.text(objForm.videoconferencia.observacions, 66.0, 300.0 - 8);	


	/* -- llicència M3 */

	new Cercle(ctx.doc, 86.0, 338.0, objForm.llicenciesM3).pinta()
	new Cercle(ctx.doc, 122.0, 338.0, !objForm.llicenciesM3 && objForm.llicenciesM3 != null).pinta()
	// new Quadrat(ctx.doc, 58.0, 378.0, !!objForm.llicenciesM3.observacions).pinta() // !! converteix un string a boolean; "" es false;
	// ctx.doc.text(objForm.llicenciesM3.observacions, 66.0, 398.0 - 8);	



	/* -- Telefon supervivencia */

	new Cercle(ctx.doc, 86.0, 421.0, objForm.telefonSupervivencia).pinta()
	new Cercle(ctx.doc, 122.0, 421.0, !objForm.telefonSupervivencia && objForm.telefonSupervivencia != null).pinta()
	// new Quadrat(ctx.doc, 58.0, 521.0, !!objForm.telefonSupervivencia.observacions).pinta() // !! converteix un string a boolean; "" es false;
	// ctx.doc.text(objForm.telefonSupervivencia.observacions,66.0, 542.0 - 8);	


		/* -- Observacions */
	ctx.doc.text(objForm.observacions, 74.0, 525.0 - 8);	

}