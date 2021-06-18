/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina09 (ctx){

  /* CAPÇALERA */
	pintaCapsalera(ctx)


	/* CONTINUACIÓ LAN */
	
	/* -- otros dispositivos */
	let objImpr = oAudit.instalacionsComunicacions.LAN

	ctx.doc.text(objImpr.altresDispositius, 105.0, 122.0 - 8);

	// faltaria apartat medició cobertura wifi
	ctx.doc.text(objImpr.observacions, 84.0, 360.0 - 8);





	/* CLIMATIZACIÓ */
	
	let objEq = oAudit.instalacionsComunicacions.equipamentConexions

	new Quadrat(ctx.doc, 76.0, 442.0, !!objEq.connexioPortSW1Gi23).pinta()
	new Quadrat(ctx.doc, 172.0, 442.0, !!objEq.altraConnexioSW).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objEq.altraConnexioSW, 234.0, 447.0 - 8);
	ctx.doc.text(objEq.altraConnexioGi, 280.0, 447.0 - 8);


	let objEq = oAudit.instalacionsComunicacions.equipamentConexions

	new Cercle(ctx.doc, 174.0, 630.0, objAps.APvisible.existeix).pinta()
	new Cercle(ctx.doc, 204.0, 630.0, !objAps.APvisible.existeix && objAps.APvisible.existeix != null).pinta()
	new Quadrat(ctx.doc, 233.0, 630.0, !!objAps.APvisible.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAps.APvisible.observacions, 312.0, 634.0 - 8);



}