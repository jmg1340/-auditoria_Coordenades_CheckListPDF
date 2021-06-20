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
	let objCob = oAudit.instalacionsComunicacions.LAN.coberturaWifi

	ctx.doc.text(objCob.dbProas, 218.0, 258.0 - 8);
	ctx.doc.text(objCob.dbSalaReunions, 218.0, 274.0 - 8);
	ctx.doc.text(objCob.altre1.lloc, 80.0, 291.0 - 8);
	ctx.doc.text(objCob.altre1.dbAltre1, 217.0, 291.0 - 8);
	ctx.doc.text(objCob.altre2.lloc, 80.0, 310.0 - 8);
	ctx.doc.text(objCob.altre2.dbAltre2, 217.0, 309.0 - 8);
	
	ctx.doc.text(objCob.observacionsCoberturaWifi, 296.0, 258.0 - 8);



	// obseravacions LAN
	ctx.doc.text(objImpr.observacions, 84.0, 360.0 - 8);





	/* CLIMATIZACIÓ */
	
	let objEq = oAudit.instalacionsComunicacions.equipamentConexions

	new Quadrat(ctx.doc, 76.0, 442.0, !!objEq.connexioPortSW1Gi23).pinta()
	new Quadrat(ctx.doc, 172.0, 442.0, !!objEq.altraConnexioSW).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objEq.altraConnexioSW, 234.0, 447.0 - 8);
	ctx.doc.text(objEq.altraConnexioGi, 280.0, 447.0 - 8);


	let objPen = oAudit.instalacionsComunicacions.pendriveBIOS

	new Cercle(ctx.doc, 234.0, 510.0, objPen.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 510.0, !objPen.existeix && objPen.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 510.0, !!objPen.ubicacio).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objPen.ubicacio, 342.0, 514.0 - 8);
	new Quadrat(ctx.doc, 416.0, 510.0, !!objPen.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objPen.observacions, 481.0, 514.0 - 8);


	let objFil = oAudit.instalacionsComunicacions.filMusical

	new Cercle(ctx.doc, 234.0, 545.0, objFil.existeix).pinta()
	new Cercle(ctx.doc, 257.0, 545.0, !objFil.existeix && objFil.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 544.0, !!objFil.connexioSwitch).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objFil.connexioSwitch, 354.0, 549.0 - 8);
	ctx.doc.text(objFil.connexioPort, 389.0, 549.0 - 8);

	new Quadrat(ctx.doc, 234.0, 562.0, !!objFil.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objFil.observacions, 299.0, 566.0 - 8);



	let objTM = oAudit.instalacionsComunicacions.telemedicina

	new Cercle(ctx.doc, 234.0, 595.0, objTM.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 595.0, !objTM.existeix && objTM.existeix != null).pinta()
	new Quadrat(ctx.doc, 292.0, 595.0, !!objTM.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objTM.observacions, 358.0, 600.0 - 8);

	new Quadrat(ctx.doc, 234.0, 612.0, !!objTM.dispositius.TV32).pinta()
	new Quadrat(ctx.doc, 272.0, 612.0, !!objTM.dispositius.Jabra510).pinta()
	new Quadrat(ctx.doc, 323.0, 612.0, !!objTM.dispositius.camaraIP).pinta()
	new Quadrat(ctx.doc, 376.0, 612.0, !!objTM.dispositius.DisplayPort).pinta()

	new Cercle(ctx.doc, 257.0, 628.0, objTM.estat == "muy deficiente").pinta()
	new Cercle(ctx.doc, 280.0, 628.0, objTM.estat == "deficiente").pinta()
	new Cercle(ctx.doc, 303.0, 628.0, objTM.estat == "mejorable").pinta()
	new Cercle(ctx.doc, 327.0, 628.0, objTM.estat == "aceptable").pinta()
	new Cercle(ctx.doc, 350.0, 628.0, objTM.estat == "correcto").pinta()


	let objTLcd = oAudit.instalacionsComunicacions.LectorCDDVDExtern

	new Cercle(ctx.doc, 234.0, 663.0, objTLcd.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 663.0, !objTLcd.existeix && objTLcd.existeix != null).pinta()
	new Quadrat(ctx.doc, 292.0, 663.0, !!objTLcd.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objTLcd.observacions, 358.0, 668.0 - 8);




	ctx.doc.text(oAudit.instalacionsComunicacions.observacions, 75.0, 708.0 - 8);



}