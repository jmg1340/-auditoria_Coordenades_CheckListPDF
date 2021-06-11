/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina06 (ctx){

  /* CAPÇALERA */
	pintaCapsalera(ctx)

	
	/* INFORMACION OBTENIDA DE GADA Y PRIME */
	let objIP = oAudit.instalacionsComunicacions.informacioPrevia

	ctx.doc.text(objIP.CA.codi, 107.0, 142.0 - 8);
	ctx.doc.text(objIP.CA.idSiteBT, 232.0, 142.0 - 8);
	ctx.doc.text(objIP.CA.totalUsuaris, 386.0, 142.0 - 8);

	ctx.doc.text(objIP.CA.Linia1, 132.0, 159.0 - 8);
	ctx.doc.text(objIP.CA.Linia2, 352.0, 159.0 - 8);

	ctx.doc.text(objIP.CA.CiscPrime.NumRouters, 127.0, 176.0 - 8);
	ctx.doc.text(objIP.CA.CiscPrime.NumSwitchs, 256.0, 176.0 - 8);
	ctx.doc.text(objIP.CA.CiscPrime.NumAPsWifi, 365.0, 176.0 - 8);

	ctx.doc.text(objIP.CA.CuesImpressioMTF, 163.0, 193.0 - 8);
	ctx.doc.text(objIP.CA.CuesImpressio, 274.0, 193.0 - 8);
	


	
	new Quadrat(ctx.doc, 66.0, 223.0, objIP.TareasRequeridas.RetirarMinipacsDelRack).pinta()
	new Quadrat(ctx.doc, 66.0, 240.0, objIP.TareasRequeridas.RevisarCascosJabra).pinta()
	new Quadrat(ctx.doc, 66.0, 257.0, objIP.TareasRequeridas.RetirarDelRack).pinta()





	/* SALA DE COMUNICACIONES */


	/* -- Centro secundario */
	let objS = oAudit.instalacionsComunicacions.sala

	new Cercle(ctx.doc, 345.0, 294.0, objS.centreSecundari.existeix).pinta()
	new Cercle(ctx.doc, 374.0, 294.0, !objS.centreSecundari.existeix).pinta()
	new Quadrat(ctx.doc, 403.0, 294.0, !!objS.centreSecundari.idCentrePrincipal).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objS.centreSecundari.idCentrePrincipal, 468.0, 298.0 - 8);
	
	

	/* -- Accesibilidad sala */
	let objAcc = oAudit.instalacionsComunicacions.sala.accessibilitat
	
	new Cercle(ctx.doc, 234.0, 329.0, objAcc.cerraduraPorta.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 329.0, !objAcc.cerraduraPorta.existeix && objAcc.cerraduraPorta.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 329.0, !!objAcc.cerraduraPorta.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAcc.cerraduraPorta.observacions, 362.0, 334.0 - 8);
	
	new Cercle(ctx.doc, 234.0, 345.0, objAcc.estatPorta == "abierta" ? true : false).pinta() 
	new Cercle(ctx.doc, 293.0, 345.0, objAcc.estatPorta == "cerrada" ? true : false).pinta()			

	new Cercle(ctx.doc, 234.0, 363.0, objAcc.zonaPasLliure.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 363.0, !objAcc.zonaPasLliure.existeix && objAcc.zonaPasLliure.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 363.0, !!objAcc.zonaPasLliure.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAcc.zonaPasLliure.observacions, 362.0, 368.0 - 8);



	/* -- WAN proveedor externo */
	let objProv = oAudit.instalacionsComunicacions.sala.proveidorWAN

	new Cercle(ctx.doc, 257.0, 394.0, objProv.estatInstalacio == "muy deficiente").pinta()
	new Cercle(ctx.doc, 280.0, 394.0, objProv.estatInstalacio == "deficiente").pinta()
	new Cercle(ctx.doc, 303.0, 394.0, objProv.estatInstalacio == "mejorable").pinta()
	new Cercle(ctx.doc, 327.0, 394.0, objProv.estatInstalacio == "aceptable").pinta()
	new Cercle(ctx.doc, 350.0, 394.0, objProv.estatInstalacio == "correcto").pinta()


	new Cercle(ctx.doc, 234.0, 412.0, objProv.instalacionsObsoletes.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 412.0, !objProv.instalacionsObsoletes.existeix && objProv.instalacionsObsoletes.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 412.0, !!objProv.instalacionsObsoletes.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objProv.instalacionsObsoletes.observacions, 362.0, 416.0 - 8);


	new Cercle(ctx.doc, 234.0, 429.0, objProv.idLinia1.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 429.0, !objProv.idLinia1.existeix && objProv.idLinia1.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 429.0, !!objProv.idLinia1.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objProv.idLinia1.observacions, 362.0, 433.0 - 8);


	new Cercle(ctx.doc, 234.0, 447.0, objProv.idLinia2.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 447.0, !objProv.idLinia2.existeix && objProv.idLinia2.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 447.0, !!objProv.idLinia2.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objProv.idLinia2.observacions, 362.0, 451.0 - 8);



	new Cercle(ctx.doc, 257.0, 462.0, objProv.estatConvertidorLinia1 == "muy deficiente").pinta()
	new Cercle(ctx.doc, 280.0, 462.0, objProv.estatConvertidorLinia1 == "deficiente").pinta()
	new Cercle(ctx.doc, 303.0, 462.0, objProv.estatConvertidorLinia1 == "mejorable").pinta()
	new Cercle(ctx.doc, 327.0, 462.0, objProv.estatConvertidorLinia1 == "aceptable").pinta()
	new Cercle(ctx.doc, 350.0, 462.0, objProv.estatConvertidorLinia1 == "correcto").pinta()

	new Cercle(ctx.doc, 257.0, 479.0, objProv.estatConvertidorLinia2 == "muy deficiente").pinta()
	new Cercle(ctx.doc, 280.0, 479.0, objProv.estatConvertidorLinia2 == "deficiente").pinta()
	new Cercle(ctx.doc, 303.0, 479.0, objProv.estatConvertidorLinia2 == "mejorable").pinta()
	new Cercle(ctx.doc, 327.0, 479.0, objProv.estatConvertidorLinia2 == "aceptable").pinta()
	new Cercle(ctx.doc, 350.0, 479.0, objProv.estatConvertidorLinia2 == "correcto").pinta()



	/* -- SAI */
	let objSAI = oAudit.instalacionsComunicacions.sala.SAI

	new Cercle(ctx.doc, 257.0, 514.0, objSAI.estatSAI == "muy deficiente").pinta()
	new Cercle(ctx.doc, 280.0, 514.0, objSAI.estatSAI == "deficiente").pinta()
	new Cercle(ctx.doc, 303.0, 514.0, objSAI.estatSAI == "mejorable").pinta()
	new Cercle(ctx.doc, 327.0, 514.0, objSAI.estatSAI == "aceptable").pinta()
	new Cercle(ctx.doc, 350.0, 514.0, objSAI.estatSAI == "correcto").pinta()


	new Cercle(ctx.doc, 234.0, 532.0, objSAI.connexioSwitch.existeix).pinta()
	new Cercle(ctx.doc, 257.0, 532.0, !objSAI.connexioSwitch.existeix && objSAI.connexioSwitch.existeix != null).pinta()
	new Quadrat(ctx.doc, 299.0, 532.0, objSAI.connexioSwitch.connexioPortSW1Gi26).pinta() 
	new Quadrat(ctx.doc, 395.0, 532.0, !!objSAI.connexioSwitch.connexio.SW).pinta() 
	ctx.doc.text(objSAI.connexioSwitch.connexio.SW, 453.0, 537.0 - 8);
	ctx.doc.text(objSAI.connexioSwitch.connexio.port, 490.0, 537.0 - 8);


	new Cercle(ctx.doc, 234.0, 549.0, objSAI.instalacioSAI == "enrackado").pinta()
	new Cercle(ctx.doc, 293.0, 549.0, objSAI.instalacioSAI == "sueloEnRack").pinta()
	new Cercle(ctx.doc, 406.0, 549.0, objSAI.instalacioSAI == "sueloJuntoRack").pinta()


	// ELEMENTS CONNECTATS

	new Quadrat(ctx.doc, 183.0, 680.0, objSAI.elementsConnectatsSAI.router).pinta()	
	new Quadrat(ctx.doc, 199.0, 680.0, objSAI.elementsConnectatsSAI.switch1).pinta()	
	new Quadrat(ctx.doc, 217.0, 680.0, objSAI.elementsConnectatsSAI.switch2).pinta()	
	new Quadrat(ctx.doc, 234.0, 680.0, objSAI.elementsConnectatsSAI.switch3).pinta()	
	new Quadrat(ctx.doc, 251.0, 680.0, objSAI.elementsConnectatsSAI.convertidorLinia1).pinta()	
	new Quadrat(ctx.doc, 268.0, 680.0, objSAI.elementsConnectatsSAI.convertidorLinia2).pinta()	
	new Quadrat(ctx.doc, 285.0, 680.0, objSAI.elementsConnectatsSAI.raspberry).pinta()	
	new Quadrat(ctx.doc, 302.0, 680.0, objSAI.elementsConnectatsSAI.filMusical).pinta()	
	new Quadrat(ctx.doc, 319.0, 680.0, objSAI.elementsConnectatsSAI.ampliFilM).pinta()	
	new Quadrat(ctx.doc, 336.0, 680.0, objSAI.elementsConnectatsSAI.altres).pinta()	

	new Quadrat(ctx.doc, 183.0, 698.0, objSAI.elementsConnectatsSAI.router).pinta()	
	new Quadrat(ctx.doc, 199.0, 698.0, objSAI.elementsConnectatsSAI.switch1).pinta()	
	new Quadrat(ctx.doc, 217.0, 698.0, objSAI.elementsConnectatsSAI.switch2).pinta()	
	new Quadrat(ctx.doc, 234.0, 698.0, objSAI.elementsConnectatsSAI.switch3).pinta()	
	new Quadrat(ctx.doc, 251.0, 698.0, objSAI.elementsConnectatsSAI.convertidorLinia1).pinta()	
	new Quadrat(ctx.doc, 268.0, 698.0, objSAI.elementsConnectatsSAI.convertidorLinia2).pinta()	
	new Quadrat(ctx.doc, 285.0, 698.0, objSAI.elementsConnectatsSAI.raspberry).pinta()	
	new Quadrat(ctx.doc, 302.0, 698.0, objSAI.elementsConnectatsSAI.filMusical).pinta()	
	new Quadrat(ctx.doc, 319.0, 698.0, objSAI.elementsConnectatsSAI.ampliFilM).pinta()	
	new Quadrat(ctx.doc, 336.0, 698.0, objSAI.elementsConnectatsSAI.altres).pinta()	

	new Quadrat(ctx.doc, 183.0, 716.0, objSAI.elementsConnectatsSAI.router).pinta()	
	new Quadrat(ctx.doc, 199.0, 716.0, objSAI.elementsConnectatsSAI.switch1).pinta()	
	new Quadrat(ctx.doc, 217.0, 716.0, objSAI.elementsConnectatsSAI.switch2).pinta()	
	new Quadrat(ctx.doc, 234.0, 716.0, objSAI.elementsConnectatsSAI.switch3).pinta()	
	new Quadrat(ctx.doc, 251.0, 716.0, objSAI.elementsConnectatsSAI.convertidorLinia1).pinta()	
	new Quadrat(ctx.doc, 268.0, 716.0, objSAI.elementsConnectatsSAI.convertidorLinia2).pinta()	
	new Quadrat(ctx.doc, 285.0, 716.0, objSAI.elementsConnectatsSAI.raspberry).pinta()	
	new Quadrat(ctx.doc, 302.0, 716.0, objSAI.elementsConnectatsSAI.filMusical).pinta()	
	new Quadrat(ctx.doc, 319.0, 716.0, objSAI.elementsConnectatsSAI.ampliFilM).pinta()	
	new Quadrat(ctx.doc, 336.0, 716.0, objSAI.elementsConnectatsSAI.altres).pinta()	


















}