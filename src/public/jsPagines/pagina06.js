/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina06 (ctx){

  /* CAPÇALERA */
	pintaCapsalera(ctx)



	/* -- electricitat */
	let objElec = oAudit.instalacionsComunicacions.llocsDeTeball.electricitat

	new Cercle(ctx.doc, 229.0, 74.0, objElec.estat == "muy deficiente").pinta()
	new Cercle(ctx.doc, 264.0, 74.0, objElec.estat == "deficiente").pinta()
	new Cercle(ctx.doc, 300.0, 74.0, objElec.estat == "mejorable").pinta()
	new Cercle(ctx.doc, 335.0, 74.0, objElec.estat == "aceptable").pinta()
	new Cercle(ctx.doc, 371.0, 74.0, objElec.estat == "correcto").pinta()

	new Cercle(ctx.doc, 229.0, 93.0, objElec.suficientsEndolls.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 93.0, !objElec.suficientsEndolls.existeix && objElec.suficientsEndolls.existeix != null).pinta()
	ctx.doc.text(objElec.suficientsEndolls.observacions, 372.0, 97.0 - 8);

	new Cercle(ctx.doc, 229.0, 112.0, objElec.regletes.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 112.0, !objElec.regletes.existeix && objElec.regletes.existeix != null).pinta()
	ctx.doc.text(objElec.regletes.observacions, 372.0, 115.0 - 8);

	new Cercle(ctx.doc, 229.0, 131.0, objElec.regletesCascada.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 131.0, !objElec.regletesCascada.existeix && objElec.regletesCascada.existeix != null).pinta()
	ctx.doc.text(objElec.regletesCascada.observacions, 372.0, 135.0 - 8);



	ctx.doc.text(oAudit.instalacionsComunicacions.llocsDeTeball.observacions, 144.0, 156.0 - 8);





	/* LAN */

	/* -- Switchs */
	let objSW = oAudit.instalacionsComunicacions.LAN

	new Cercle(ctx.doc, 229.0, 248.0, objSW.SWidentificats.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 248.0, !objSW.SWidentificats.existeix && objSW.SWidentificats.existeix != null).pinta()
	ctx.doc.text(objSW.SWidentificats.observacions, 372.0, 252.0 - 8);


	/* -- APs wifi */
	let objAps = oAudit.instalacionsComunicacions.LAN.wifiAPs

	ctx.doc.text(objAps.quantitat, 116.0, 301.0 - 8);
	// new Quadrat(ctx.doc, 286.0, 613.0, !!objAps.ubicacio.salaEspera).pinta()
	// new Quadrat(ctx.doc, 363.0, 613.0, !!objAps.ubicacio.altres).pinta() // !! converteix un string a boolean; "" es false;
	// ctx.doc.text(objAps.ubicacio.altres, 374.0, 617.0 - 8);

	// --- APs ---
	ctx.doc.text(objAps.APs.AP1.ubicacio, 96.0, 319.0 - 8);
	ctx.doc.text(objAps.APs.AP1.observacions, 260.0, 319.0 - 8);

	ctx.doc.text(objAps.APs.AP2.ubicacio, 96.0, 330.0 - 8);
	ctx.doc.text(objAps.APs.AP2.observacions, 260.0, 330.0 - 8);

	ctx.doc.text(objAps.APs.AP3.ubicacio, 96.0, 341.0 - 8);
	ctx.doc.text(objAps.APs.AP3.observacions, 260.0, 341.0 - 8);

	ctx.doc.text(objAps.APs.AP4.ubicacio, 96.0, 352.0 - 8);
	ctx.doc.text(objAps.APs.AP4.observacions, 260.0, 352.0 - 8);

	ctx.doc.text(objAps.APs.AP5.ubicacio, 96.0, 363.0 - 8);
	ctx.doc.text(objAps.APs.AP5.observacions, 260.0, 363.0 - 8);



	new Cercle(ctx.doc, 228.0, 384.0, objAps.APvisible.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 384.0, !objAps.APvisible.existeix && objAps.APvisible.existeix != null).pinta()
	ctx.doc.text(objAps.APvisible.observacions, 372.0, 388.0 - 8);

	new Cercle(ctx.doc, 228.0, 403.0, objAps.carteleriaWifi.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 403.0, !objAps.carteleriaWifi.existeix && objAps.carteleriaWifi.existeix != null).pinta()
	ctx.doc.text(objAps.carteleriaWifi.observacions, 372.0, 407.0 - 8);
	
	ctx.doc.text(objAps.observacions, 162.0, 426.0 - 8);
	
	// --- cobertura wifi ---
	ctx.doc.text(objAps.coberturaWifi.dbProas, 238.0, 468.0 - 8);
	ctx.doc.text(objAps.coberturaWifi.dbSalaReunions, 239.0, 481.0 - 8);


	ctx.doc.text(objAps.coberturaWifi.altre1.lloc, 70.0, 494.0 - 8);
	ctx.doc.text(objAps.coberturaWifi.altre1.dbAltre1, 238.0, 494.0 - 8);

	ctx.doc.text(objAps.coberturaWifi.altre2.lloc, 70.0, 506.0 - 8);
	ctx.doc.text(objAps.coberturaWifi.altre2.dbAltre2, 238.0, 506.0 - 8);

	ctx.doc.text(objAps.coberturaWifi.altre3.lloc, 70.0, 518.0 - 8);
	ctx.doc.text(objAps.coberturaWifi.altre3.dbAltre3, 238.0, 518.0 - 8);

	ctx.doc.text(objAps.coberturaWifi.altre4.lloc, 70.0, 530.0 - 8);
	ctx.doc.text(objAps.coberturaWifi.altre4.dbAltre4, 238.0, 530.0 - 8);

	


	// new Cercle(ctx.doc, 187.0, 647.0, objAps.coberturaPROAS.existeix).pinta()
	// new Cercle(ctx.doc, 217.0, 647.0, !objAps.coberturaPROAS.existeix && objAps.coberturaPROAS.existeix != null).pinta()
	// ctx.doc.text(objAps.coberturaPROAS.observacions, 312.0, 651.0 - 8);


	/* -- IMPRSORES / MTFs */
	let objImpr = oAudit.instalacionsComunicacions.LAN

	ctx.doc.text(objImpr.NumCuesImpressio, 185.0, 574.0 - 8);
	ctx.doc.text(objImpr.NumCuesImpressioMTF, 185.0, 592.0 - 8);

	/* -- otros dispositivos */
	ctx.doc.text(objImpr.altresDispositius, 185.0, 612.0 - 8);



	/* CLIMATIZACIÓ */
	
	let objEq = oAudit.instalacionsComunicacions.equipamentConexions

	new Quadrat(ctx.doc, 86.0, 673.0, !!objEq.connexioPortSW1Gi23).pinta()
	new Quadrat(ctx.doc, 193.0, 673.0, !!objEq.altraConnexioSW).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objEq.altraConnexioSW, 251.0, 676.0 - 8);
	ctx.doc.text(objEq.altraConnexioGi, 285.0, 676.0 - 8);
	ctx.doc.text(objEq.observacions, 164.0, 690.0 - 8);


	// let objPen = oAudit.instalacionsComunicacions.pendriveBIOS

	// new Cercle(ctx.doc, 234.0, 510.0, objPen.existeix).pinta()
	// new Cercle(ctx.doc, 264.0, 510.0, !objPen.existeix && objPen.existeix != null).pinta()
	// new Quadrat(ctx.doc, 293.0, 510.0, !!objPen.ubicacio).pinta() // !! converteix un string a boolean; "" es false;
	// ctx.doc.text(objPen.ubicacio, 342.0, 514.0 - 8);
	// new Quadrat(ctx.doc, 416.0, 510.0, !!objPen.observacions).pinta() // !! converteix un string a boolean; "" es false;
	// ctx.doc.text(objPen.observacions, 481.0, 514.0 - 8);


	let objFil = oAudit.instalacionsComunicacions.filMusical

	new Cercle(ctx.doc, 228.0, 726.0, objFil.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 726.0, !objFil.existeix && objFil.existeix != null).pinta()
	ctx.doc.text(objFil.observacions, 372.0, 729.0 - 8);
	
	
	// new Quadrat(ctx.doc, 293.0, 544.0, !!objFil.connexioSwitch).pinta() // !! converteix un string a boolean; "" es false;
	// ctx.doc.text(objFil.connexioSwitch, 354.0, 549.0 - 8);
	// ctx.doc.text(objFil.connexioPort, 389.0, 549.0 - 8);

	// new Quadrat(ctx.doc, 234.0, 562.0, !!objFil.observacions).pinta() // !! converteix un string a boolean; "" es false;






}