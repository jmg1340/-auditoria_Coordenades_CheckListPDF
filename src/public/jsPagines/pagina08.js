/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina08 (ctx){

  /* CAPÇALERA */
	pintaCapsalera(ctx)


	/* LLOCS DE TREBALL */
	
	/* -- cablejat */
	let objLlocs = oAudit.instalacionsComunicacions.llocsDeTeball

	new Cercle(ctx.doc, 257.0, 136.0, objLlocs.estatCablejat == "muy deficiente").pinta()
	new Cercle(ctx.doc, 280.0, 136.0, objLlocs.estatCablejat == "deficiente").pinta()
	new Cercle(ctx.doc, 303.0, 136.0, objLlocs.estatCablejat == "mejorable").pinta()
	new Cercle(ctx.doc, 327.0, 136.0, objLlocs.estatCablejat == "aceptable").pinta()
	new Cercle(ctx.doc, 350.0, 136.0, objLlocs.estatCablejat == "correcto").pinta()


	/* -- tomas de datos */
	let objPtsX = oAudit.instalacionsComunicacions.llocsDeTeball.puntsXarxa

	new Cercle(ctx.doc, 257.0, 170.0, objPtsX.estat == "muy deficiente").pinta()
	new Cercle(ctx.doc, 280.0, 170.0, objPtsX.estat == "deficiente").pinta()
	new Cercle(ctx.doc, 303.0, 170.0, objPtsX.estat == "mejorable").pinta()
	new Cercle(ctx.doc, 327.0, 170.0, objPtsX.estat == "aceptable").pinta()
	new Cercle(ctx.doc, 350.0, 170.0, objPtsX.estat == "correcto").pinta()


	new Cercle(ctx.doc, 234.0, 188.0, objPtsX.identificacio.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 188.0, !objPtsX.identificacio.existeix && objPtsX.identificacio.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 188.0, !!objPtsX.identificacio.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objPtsX.identificacio.observacions, 362.0, 192.0 - 8);


	new Cercle(ctx.doc, 234.0, 205.0, objPtsX.suficientsPunts.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 205.0, !objPtsX.suficientsPunts.existeix && objPtsX.suficientsPunts.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 205.0, !!objPtsX.suficientsPunts.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objPtsX.suficientsPunts.observacions, 362.0, 210.0 - 8);


	new Cercle(ctx.doc, 234.0, 222.0, objPtsX.miniSwitchs.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 222.0, !objPtsX.miniSwitchs.existeix && objPtsX.miniSwitchs.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 222.0, !!objPtsX.miniSwitchs.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objPtsX.miniSwitchs.observacions, 362.0, 226.0 - 8);


	/* -- electricitat */
	let objElec = oAudit.instalacionsComunicacions.llocsDeTeball.electricitat

	new Cercle(ctx.doc, 257.0, 255.0, objElec.estat == "muy deficiente").pinta()
	new Cercle(ctx.doc, 280.0, 255.0, objElec.estat == "deficiente").pinta()
	new Cercle(ctx.doc, 303.0, 255.0, objElec.estat == "mejorable").pinta()
	new Cercle(ctx.doc, 327.0, 255.0, objElec.estat == "aceptable").pinta()
	new Cercle(ctx.doc, 350.0, 255.0, objElec.estat == "correcto").pinta()

	new Cercle(ctx.doc, 234.0, 273.0, objElec.suficientsEndolls.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 273.0, !objElec.suficientsEndolls.existeix && objElec.suficientsEndolls.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 273.0, !!objElec.suficientsEndolls.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objElec.suficientsEndolls.observacions, 362.0, 278.0 - 8);

	new Cercle(ctx.doc, 234.0, 290.0, objElec.regletes.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 290.0, !objElec.regletes.existeix && objElec.regletes.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 290.0, !!objElec.regletes.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objElec.regletes.observacions, 362.0, 295.0 - 8);

	new Cercle(ctx.doc, 234.0, 307.0, objElec.regletesCascada.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 307.0, !objElec.regletesCascada.existeix && objElec.regletesCascada.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 307.0, !!objElec.regletesCascada.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objElec.regletesCascada.observacions, 362.0, 312.0 - 8);



	ctx.doc.text(oAudit.instalacionsComunicacions.llocsDeTeball.observacions, 84.0, 350.0 - 8);





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