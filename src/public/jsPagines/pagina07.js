/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina07 (ctx){

  /* CAPÇALERA */
	pintaCapsalera(ctx)

	
	let objSala = oAudit.instalacionsComunicacions.sala

	new Cercle(ctx.doc, 257.0, 102.0, objSala.aspecteSala == "muy deficiente").pinta()
	new Cercle(ctx.doc, 280.0, 102.0, objSala.aspecteSala == "deficiente").pinta()
	new Cercle(ctx.doc, 303.0, 102.0, objSala.aspecteSala == "mejorable").pinta()
	new Cercle(ctx.doc, 327.0, 102.0, objSala.aspecteSala == "aceptable").pinta()
	new Cercle(ctx.doc, 350.0, 102.0, objSala.aspecteSala == "correcto").pinta()


	new Cercle(ctx.doc, 234.0, 120.0, objSala.climatitzacio.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 120.0, !objSala.climatitzacio.existeix && objSala.climatitzacio.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 120.0, !!objSala.climatitzacio.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objSala.climatitzacio.observacions, 362.0, 125.0 - 8);

	new Cercle(ctx.doc, 234.0, 138.0, objSala.ventilacio.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 138.0, !objSala.ventilacio.existeix && objSala.ventilacio.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 138.0, !!objSala.ventilacio.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objSala.ventilacio.observacions, 362.0, 143.0 - 8);

	new Cercle(ctx.doc, 234.0, 156.0, objSala.latiguillos.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 156.0, !objSala.latiguillos.existeix && objSala.latiguillos.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 156.0, !!objSala.latiguillos.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objSala.latiguillos.observacions, 362.0, 160.0 - 8);

	new Cercle(ctx.doc, 234.0, 172.0, objSala.elementsBaixaInventari.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 172.0, !objSala.elementsBaixaInventari.existeix && objSala.elementsBaixaInventari.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 172.0, !!objSala.elementsBaixaInventari.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objSala.elementsBaixaInventari.observacions, 362.0, 176.0 - 8);



	/* RACKS */

	ctx.doc.text(objSala.numRacks, 230.0, 206.0 - 8);

	new Cercle(ctx.doc, 234.0, 221.0, objSala.numRacksAdecuat.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 221.0, !objSala.numRacksAdecuat.existeix && objSala.numRacksAdecuat.existeix != null).pinta()
	// new Quadrat(ctx.doc, 293.0, 221.0, !!objSala.numRacksAdecuats.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objSala.numRacksAdecuat.observacions, 362.0, 224.0 - 8);




	/* Tractament del array de RACKS */

	let arrR = objSala.racks
	let margeEsquerre = 0;
	let distanciaObs = 0;
	arrR.forEach(function(rack, index){

		ctx.doc.text(rack.ubicacio, 234.0 + margeEsquerre, 262.0 - 8);
		ctx.doc.text(rack.tipusRack, 246.0 + margeEsquerre, 279.0 - 8);

		new Cercle(ctx.doc, 239.5 + margeEsquerre, 292.0, rack.estatGeneral == "muy deficiente").pinta()
		new Cercle(ctx.doc, 250.5 + margeEsquerre, 292.0, rack.estatGeneral == "deficiente").pinta()
		new Cercle(ctx.doc, 261.0 + margeEsquerre, 292.0, rack.estatGeneral == "mejorable").pinta()
		new Cercle(ctx.doc, 272.0 + margeEsquerre, 292.0, rack.estatGeneral == "aceptable").pinta()
		new Cercle(ctx.doc, 283.0 + margeEsquerre, 292.0, rack.estatGeneral == "correcto").pinta()

		new Cercle(ctx.doc, 239.5 + margeEsquerre, 309.5, rack.aspecteNeteja == "muy deficiente").pinta()
		new Cercle(ctx.doc, 251.0 + margeEsquerre, 309.5, rack.aspecteNeteja == "deficiente").pinta()
		new Cercle(ctx.doc, 261.0 + margeEsquerre, 309.5, rack.aspecteNeteja == "mejorable").pinta()
		new Cercle(ctx.doc, 272.0 + margeEsquerre, 309.5, rack.aspecteNeteja == "aceptable").pinta()
		new Cercle(ctx.doc, 283.0 + margeEsquerre, 309.5, rack.aspecteNeteja == "correcto").pinta()

		new Cercle(ctx.doc, 241.0 + margeEsquerre, 326.0, rack.pany.existeix).pinta()
		new Cercle(ctx.doc, 264.0 + margeEsquerre, 326.0, !rack.pany.existeix && rack.pany.existeix != null).pinta()

		new Cercle(ctx.doc, 241.0 + margeEsquerre, 342.0, rack.pany.clauAlPany).pinta()
		new Cercle(ctx.doc, 264.0 + margeEsquerre, 342.0, !rack.pany.clauAlPany && rack.pany.clauAlPany != null).pinta()

		ctx.doc.text(rack.pany.estatPany, 246.0 + margeEsquerre, 365.0 - 8);

		new Cercle(ctx.doc, 241.0 + margeEsquerre, 377.0, rack.zonaPasLliure).pinta()
		new Cercle(ctx.doc, 264.0 + margeEsquerre, 377.0, !rack.zonaPasLliure && rack.zonaPasLliure != null).pinta()


		/* RACK -- cablejat */

		new Cercle(ctx.doc, 239.5 + margeEsquerre, 411.0, rack.cablejat.aspecte == "muy deficiente").pinta()
		new Cercle(ctx.doc, 251.0 + margeEsquerre, 411.0, rack.cablejat.aspecte == "deficiente").pinta()
		new Cercle(ctx.doc, 261.0 + margeEsquerre, 411.0, rack.cablejat.aspecte == "mejorable").pinta()
		new Cercle(ctx.doc, 272.0 + margeEsquerre, 411.0, rack.cablejat.aspecte == "aceptable").pinta()
		new Cercle(ctx.doc, 283.0 + margeEsquerre, 411.0, rack.cablejat.aspecte == "correcto").pinta()

		ctx.doc.text(rack.cablejat.pPanels.numPPanelActius, 234.0 + margeEsquerre, 432.0 - 8);

		ctx.doc.text(rack.cablejat.pPanels.categoriesPPanel, 234.0 + margeEsquerre, 448.0 - 8);

		new Cercle(ctx.doc, 239.5 + margeEsquerre, 461, rack.cablejat.estatTerminacions == "muy deficiente").pinta()
		new Cercle(ctx.doc, 251.0 + margeEsquerre, 461, rack.cablejat.estatTerminacions == "deficiente").pinta()
		new Cercle(ctx.doc, 261.0 + margeEsquerre, 461, rack.cablejat.estatTerminacions == "mejorable").pinta()
		new Cercle(ctx.doc, 272.0 + margeEsquerre, 461, rack.cablejat.estatTerminacions == "aceptable").pinta()
		new Cercle(ctx.doc, 283.0 + margeEsquerre, 461, rack.cablejat.estatTerminacions == "correcto").pinta()


		new Cercle(ctx.doc, 241.0 + margeEsquerre, 479.0, rack.cablejat.duplicadorPorts).pinta()
		new Cercle(ctx.doc, 264.0 + margeEsquerre, 479.0, !rack.cablejat.duplicadorPorts && rack.cablejat.duplicadorPorts != null).pinta()

		new Cercle(ctx.doc, 241.0 + margeEsquerre, 495.0, rack.cablejat.cablejatObsolet).pinta()
		new Cercle(ctx.doc, 264.0 + margeEsquerre, 495.0, !rack.cablejat.cablejatObsolet && rack.cablejat.cablejatObsolet != null).pinta()


		/* Rack -- electricitat */

		new Cercle(ctx.doc, 239.5 + margeEsquerre, 530.0, rack.electricitat.estat == "muy deficiente").pinta()
		new Cercle(ctx.doc, 251.0 + margeEsquerre, 530.0, rack.electricitat.estat == "deficiente").pinta()
		new Cercle(ctx.doc, 261.0 + margeEsquerre, 530.0, rack.electricitat.estat == "mejorable").pinta()
		new Cercle(ctx.doc, 272.0 + margeEsquerre, 530.0, rack.electricitat.estat == "aceptable").pinta()
		new Cercle(ctx.doc, 283.0 + margeEsquerre, 530.0, rack.electricitat.estat == "correcto").pinta()


		new Cercle(ctx.doc, 241.0 + margeEsquerre, 546.0, rack.electricitat.regletaSuministramentNet).pinta()
		new Cercle(ctx.doc, 264.0 + margeEsquerre, 546.0, !rack.electricitat.regletaSuministramentNet && rack.electricitat.regletaSuministramentNet != null).pinta()

		new Cercle(ctx.doc, 241.0 + margeEsquerre, 563.0, rack.electricitat.regletaSuministramentBrut).pinta()
		new Cercle(ctx.doc, 264.0 + margeEsquerre, 563.0, !rack.electricitat.regletaSuministramentBrut && rack.electricitat.regletaSuministramentBrut != null).pinta()

		ctx.doc.text(rack.electricitat.observacions, 236.0 + margeEsquerre, 586.0 - 8);

		/* --- */


		new Cercle(ctx.doc, 241.0 + margeEsquerre, 598.0, rack.ventilacio).pinta()
		new Cercle(ctx.doc, 264.0 + margeEsquerre, 598.0, !rack.ventilacio && rack.ventilacio != null).pinta()

		new Cercle(ctx.doc, 241.0 + margeEsquerre, 614.0, rack.dispositiusObsolets).pinta()
		new Cercle(ctx.doc, 264.0 + margeEsquerre, 614.0, !rack.dispositiusObsolets && rack.dispositiusObsolets != null).pinta()

		ctx.doc.text("RACK " + (index + 1) + ":     " + rack.observacions, 76, 662.0 - 8 + distanciaObs);  

		// establim marge per al següent rack
		switch (index){
			case 0: margeEsquerre += 68.5; break;  // per al rack 2
			case 1: margeEsquerre += 67.0; break;  // per al rack 3
			case 2: margeEsquerre += 67.5; break;  // per al rack 4
			case 3: margeEsquerre += 68.5; break;  // per al rack 5
		}
		
		distanciaObs += 15
		

	})






























}