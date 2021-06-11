/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina05 (ctx){

  /* CAPÇALERA */
	pintaCapsalera(ctx)

	/* Resta de dades */
	ctx.doc.text(oAudit.nomCentre, 135.0, 154.0 - 8);
	ctx.doc.text(oAudit.sector, 135.0, 174.0 - 8);
	ctx.doc.text(oAudit.instalacionsComunicacions.informacioPrevia.CA.codi, 135.0, 195.0 - 8);
	ctx.doc.text(oAudit.domicili, 135.0, 213.0 - 8);

	ctx.doc.text("Jordi Miserachs Guix",190.0, 270.0 - 8);
	ctx.doc.text(oAudit.DC, 190.0, 290.0 - 8);
	ctx.doc.text(oAudit.interlocutors, 190.0, 330.0 - 8);
}