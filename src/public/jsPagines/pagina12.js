/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina12 (ctx){

  /* CAPÇALERA */
	pintaCapsalera(ctx)


	/* VALORACIONS */
	
	let objForm = oAudit.valoracions

	ctx.doc.text(objForm.usuari.queixes,80.0, 166.0 - 8);	
	ctx.doc.text(objForm.usuari.suggeriments, 80.0, 298.0 - 8);	
	ctx.doc.text(objForm.usuari.millores, 80.0, 407.0 - 8);	

	ctx.doc.text(objForm.tecnic.valoracions, 78.0, 528.0 - 8);	


}