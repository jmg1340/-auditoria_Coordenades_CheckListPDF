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




}