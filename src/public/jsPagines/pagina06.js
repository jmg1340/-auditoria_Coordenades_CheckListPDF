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

	new Cercle(ctx.doc, 234.0, 511.0, objSW.SWidentificats.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 511.0, !objSW.SWidentificats.existeix && objSW.SWidentificats.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 511.0, !!objSW.SWidentificats.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objSW.SWidentificats.observacions, 362.0, 516.0 - 8);


	/* -- APs wifi */
	let objAps = oAudit.instalacionsComunicacions.LAN.wifiAPs

	ctx.doc.text(objAps.quantitat, 143.0, 615.0 - 8);
	new Quadrat(ctx.doc, 286.0, 613.0, !!objAps.ubicacio.salaEspera).pinta()
	new Quadrat(ctx.doc, 363.0, 613.0, !!objAps.ubicacio.altres).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAps.ubicacio.altres, 374.0, 617.0 - 8);

	new Cercle(ctx.doc, 174.0, 630.0, objAps.APvisible.existeix).pinta()
	new Cercle(ctx.doc, 204.0, 630.0, !objAps.APvisible.existeix && objAps.APvisible.existeix != null).pinta()
	new Quadrat(ctx.doc, 233.0, 630.0, !!objAps.APvisible.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAps.APvisible.observacions, 312.0, 634.0 - 8);

	new Cercle(ctx.doc, 187.0, 647.0, objAps.coberturaPROAS.existeix).pinta()
	new Cercle(ctx.doc, 217.0, 647.0, !objAps.coberturaPROAS.existeix && objAps.coberturaPROAS.existeix != null).pinta()
	new Quadrat(ctx.doc, 246.0, 647.0, !!objAps.coberturaPROAS.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAps.coberturaPROAS.observacions, 312.0, 651.0 - 8);

	new Cercle(ctx.doc, 187.0, 664.0, objAps.carteleriaWifi.existeix).pinta()
	new Cercle(ctx.doc, 217.0, 664.0, !objAps.carteleriaWifi.existeix && objAps.carteleriaWifi.existeix != null).pinta()
	new Quadrat(ctx.doc, 246.0, 664.0, !!objAps.carteleriaWifi.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAps.carteleriaWifi.observacions, 312.0, 668.0 - 8);

	ctx.doc.text(objAps.observacions, 177.0, 684.0 - 8);


	/* -- APs wifi */
	let objImpr = oAudit.instalacionsComunicacions.LAN

	ctx.doc.text(objImpr.NumCuesImpressioMTF, 190.0, 736.0 - 8);
	ctx.doc.text(objImpr.NumCuesImpressio, 287.0, 736.0 - 8);


}