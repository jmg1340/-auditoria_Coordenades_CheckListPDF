/* 
Pinta les respostes del la 	PAGINA 3, segons les cooredenades
*/


function pintaPagina03 (ctx){

  /* CAPÇALERA */
	pintaCapsalera(ctx)

	/* Resta de dades */
	ctx.doc.text(oAudit.dadesCentre.nomCentre, 130.0, 129.0 - 8);
	ctx.doc.text(oAudit.dadesCentre.sector, 130.0, 160.0 - 8);
	ctx.doc.text(oAudit.dadesCentre.codi, 130.0, 191.0 - 8);
	ctx.doc.text(oAudit.dadesCentre.domicili, 130.0, 222.0 - 8);

	ctx.doc.text(oAudit.dadesCentre.tecnic,205.0, 281.0 - 8);
	ctx.doc.text(oAudit.dadesCentre.DC, 205.0, 312.0 - 8);
	ctx.doc.text(oAudit.dadesCentre.interlocutors, 205.0, 343.0 - 8);
}