/* 
Pinta les respostes del la 	PAGINA 7, segons les cooredenades
*/


function pintaPagina07 (ctx){

  /* CAPÇALERA */
	pintaCapsalera(ctx)


	/* CONTINUACIÓ LAN */
	
	// faltaria apartat medició cobertura wifi
	// let objCob = oAudit.instalacionsComunicacions.LAN.coberturaWifi

	// ctx.doc.text(objCob.dbProas, 218.0, 258.0 - 8);
	// ctx.doc.text(objCob.dbSalaReunions, 218.0, 274.0 - 8);
	// ctx.doc.text(objCob.altre1.lloc, 80.0, 291.0 - 8);
	// ctx.doc.text(objCob.altre1.dbAltre1, 217.0, 291.0 - 8);
	// ctx.doc.text(objCob.altre2.lloc, 80.0, 310.0 - 8);
	// ctx.doc.text(objCob.altre2.dbAltre2, 217.0, 309.0 - 8);
	
	// ctx.doc.text(objCob.observacionsCoberturaWifi, 296.0, 258.0 - 8);



	// obseravacions LAN
	// ctx.doc.text(objImpr.observacions, 84.0, 360.0 - 8);





	/* TELEMEDICINA */

	let objTM = oAudit.instalacionsComunicacions.telemedicina

	new Cercle(ctx.doc, 193.0, 85.0, objTM.existeix).pinta()
	new Cercle(ctx.doc, 229.0, 85.0, !objTM.existeix && objTM.existeix != null).pinta()
	ctx.doc.text(objTM.observacions, 337.0, 88.0 - 8);

	new Quadrat(ctx.doc, 193.0, 101.0, !!objTM.dispositius.TV32).pinta()
	new Quadrat(ctx.doc, 264.0, 101.0, !!objTM.dispositius.Jabra510).pinta()
	new Quadrat(ctx.doc, 335.0, 101.0, !!objTM.dispositius.camaraIP).pinta()
	new Quadrat(ctx.doc, 406.0, 101.0, !!objTM.dispositius.DisplayPort).pinta()

	new Cercle(ctx.doc, 193.0, 117.0, objTM.estat == "muy deficiente").pinta()
	new Cercle(ctx.doc, 229.0, 117.0, objTM.estat == "deficiente").pinta()
	new Cercle(ctx.doc, 264.0, 117.0, objTM.estat == "mejorable").pinta()
	new Cercle(ctx.doc, 300.0, 117.0, objTM.estat == "aceptable").pinta()
	new Cercle(ctx.doc, 335.0, 117.0, objTM.estat == "correcto").pinta()


	/* LECTOR CD/DVD EXTERN */

	let objTLcd = oAudit.instalacionsComunicacions.LectorCDDVDExtern

	new Cercle(ctx.doc, 193.0, 167.0, objTLcd.existeix).pinta()
	new Cercle(ctx.doc, 229.0, 167.0, !objTLcd.existeix && objTLcd.existeix != null).pinta()
	ctx.doc.text(objTLcd.observacions, 336.0, 171.0 - 8);


	/* FIRMA BIOMETRICA */

	let objFB = oAudit.instalacionsComunicacions.firmaBiometrica

	ctx.doc.text(objFB.numTablets, 155.0, 219.0 - 8);

	new Cercle(ctx.doc, 193.0, 235.0, objFB.tabletsApagades.existeix).pinta()
	new Cercle(ctx.doc, 228.0, 235.0, !objFB.tabletsApagades.existeix && objFB.tabletsApagades.existeix != null).pinta()
	ctx.doc.text(objFB.tabletsApagades.observacions, 336.0, 239.0 - 8);

	new Cercle(ctx.doc, 193.0, 254.0, objFB.retirarTablets.existeix).pinta()
	new Cercle(ctx.doc, 228.0, 254.0, !objFB.retirarTablets.existeix && objFB.retirarTablets.existeix != null).pinta()
	ctx.doc.text(objFB.retirarTablets.observacions, 336.0, 258.0 - 8);


	// --- tablets ---
	ctx.doc.text(objFB.tablets.t1.codi, 85.0, 292.0 - 8);
	ctx.doc.text(objFB.tablets.t1.ubicacio, 145.0, 292.0 - 8);
	ctx.doc.text(objFB.tablets.t1.observacions, 344.0, 292.0 - 8);

	ctx.doc.text(objFB.tablets.t2.codi, 85.0, 306.0 - 8);
	ctx.doc.text(objFB.tablets.t2.ubicacio, 145.0, 306.0 - 8);
	ctx.doc.text(objFB.tablets.t2.observacions, 344.0, 306.0 - 8);

	ctx.doc.text(objFB.tablets.t3.codi, 85.0, 322.0 - 8);
	ctx.doc.text(objFB.tablets.t3.ubicacio, 145.0, 322.0 - 8);
	ctx.doc.text(objFB.tablets.t3.observacions, 345.0, 322.0 - 8);

	ctx.doc.text(objFB.tablets.t4.codi, 85.0, 337.0 - 8);
	ctx.doc.text(objFB.tablets.t4.ubicacio, 145.0, 337.0 - 8);
	ctx.doc.text(objFB.tablets.t4.observacions, 344.0, 337.0 - 8);

	ctx.doc.text(objFB.tablets.t5.codi, 85.0, 353.0 - 8);
	ctx.doc.text(objFB.tablets.t5.ubicacio, 145.0, 353.0 - 8);
	ctx.doc.text(objFB.tablets.t5.observacions, 344.0, 353.0 - 8);

	ctx.doc.text(objFB.tablets.t6.codi, 85.0, 368.0 - 8);
	ctx.doc.text(objFB.tablets.t6.ubicacio, 145.0, 368.0 - 8);
	ctx.doc.text(objFB.tablets.t6.observacions, 344.0, 368.0 - 8);

	ctx.doc.text(objFB.tablets.t7.codi, 85.0, 384.0 - 8);
	ctx.doc.text(objFB.tablets.t7.ubicacio, 145.0, 384.0 - 8);
	ctx.doc.text(objFB.tablets.t7.observacions, 344.0, 384.0 - 8);


	/* GESTION DE TURNOS */

	let objgDt = oAudit.instalacionsComunicacions.gestioTorns


	new Quadrat(ctx.doc, 86.0, 461.0, !!objgDt.dispositius.totem).pinta()
	new Quadrat(ctx.doc, 157.0, 461.0, !!objgDt.dispositius.impresores).pinta()
	new Quadrat(ctx.doc, 300.0, 461.0, !!objgDt.dispositius.pantalles).pinta()

	ctx.doc.text(objgDt.dispositius.observacions, 93.0, 500.0 - 8);

	new Cercle(ctx.doc, 86.0, 625.0, objgDt.revisio.avisAPacients.existeix).pinta()
	new Cercle(ctx.doc, 121.0, 625.0, !objgDt.revisio.avisAPacients.existeix && objgDt.revisio.avisAPacients.existeix != null).pinta()
	ctx.doc.text(objgDt.revisio.avisAPacients.observacions, 222.0, 628.0 - 8);

	new Cercle(ctx.doc, 86.0, 664.0, objgDt.revisio.arribadaPacient.existeix).pinta()
	new Cercle(ctx.doc, 121.0, 664.0, !objgDt.revisio.arribadaPacient.existeix && objgDt.revisio.arribadaPacient.existeix != null).pinta()
	ctx.doc.text(objgDt.revisio.arribadaPacient.observacions, 222.0, 667.0 - 8);










	ctx.doc.text(oAudit.instalacionsComunicacions.observacions, 67.0, 708.0 - 8);



}