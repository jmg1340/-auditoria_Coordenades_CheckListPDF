/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina05 (ctx){

  /* CAPÇALERA */
	pintaCapsalera(ctx)

	
	let objSala = oAudit.instalacionsComunicacions.sala

	new Cercle(ctx.doc, 265.0, 57.0, objSala.aspecteSala == "muy deficiente").pinta()
	new Cercle(ctx.doc, 300.0, 57.0, objSala.aspecteSala == "deficiente").pinta()
	new Cercle(ctx.doc, 336.0, 57.0, objSala.aspecteSala == "mejorable").pinta()
	new Cercle(ctx.doc, 371.0, 57.0, objSala.aspecteSala == "aceptable").pinta()
	new Cercle(ctx.doc, 407.0, 57.0, objSala.aspecteSala == "correcto").pinta()


	new Cercle(ctx.doc, 265.0, 71.0, objSala.climatitzacio.existeix).pinta()
	new Cercle(ctx.doc, 300.0, 71.0, !objSala.climatitzacio.existeix && objSala.climatitzacio.existeix != null).pinta()
	ctx.doc.text(objSala.climatitzacio.observacions, 415.0, 75.0 - 8);

	new Cercle(ctx.doc, 264.0, 90.0, objSala.ventilacio.existeix).pinta()
	new Cercle(ctx.doc, 300.0, 90.0, !objSala.ventilacio.existeix && objSala.ventilacio.existeix != null).pinta()
	ctx.doc.text(objSala.ventilacio.observacions, 415.0, 95.0 - 8);

	new Cercle(ctx.doc, 265.0, 110.0, objSala.latiguillos.existeix).pinta()
	new Cercle(ctx.doc, 300.0, 110.0, !objSala.latiguillos.existeix && objSala.latiguillos.existeix != null).pinta()
	ctx.doc.text(objSala.latiguillos.observacions, 415.0, 114.0 - 8);

	new Cercle(ctx.doc, 265.0, 129.0, objSala.elementsBaixaInventari.existeix).pinta()
	new Cercle(ctx.doc, 300.0, 129.0, !objSala.elementsBaixaInventari.existeix && objSala.elementsBaixaInventari.existeix != null).pinta()
	ctx.doc.text(objSala.elementsBaixaInventari.observacions, 415.0, 133.0 - 8);



	/* RACKS */

	ctx.doc.text(objSala.numRacks, 121.0, 170.0 - 8);

	new Cercle(ctx.doc, 193.0, 185.0, objSala.numRacksAdecuat.existeix).pinta()
	new Cercle(ctx.doc, 229.0, 185.0, !objSala.numRacksAdecuat.existeix && objSala.numRacksAdecuat.existeix != null).pinta()
	// new Quadrat(ctx.doc, 293.0, 221.0, !!objSala.numRacksAdecuats.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objSala.numRacksAdecuat.observacions, 337.0, 189.0 - 8);




	/* Tractament del array de RACKS */

	let arrR = objSala.racks
	let margeEsquerre = 0;
	let distanciaObs = 0;
	arrR.forEach(function(rack, index){
		
		ctx.doc.text(rack.ubicacio, 231.0 + margeEsquerre, 239.0 - 8);
		// ctx.doc.text(rack.tipusRack, 246.0 + margeEsquerre, 279.0 - 8);
		new Cercle(ctx.doc, 243 + margeEsquerre, 248, rack.tipusRack == "armario").pinta()
		new Cercle(ctx.doc, 296 + margeEsquerre, 248.0, rack.tipusRack == "cofre").pinta()

		new Cercle(ctx.doc, 251.0 + margeEsquerre, 265, rack.estatGeneral == "muy deficiente").pinta()
		new Cercle(ctx.doc, 266.0 + margeEsquerre, 265, rack.estatGeneral == "deficiente").pinta()
		new Cercle(ctx.doc, 281.0 + margeEsquerre, 265, rack.estatGeneral == "mejorable").pinta()
		new Cercle(ctx.doc, 296.0 + margeEsquerre, 265, rack.estatGeneral == "aceptable").pinta()
		new Cercle(ctx.doc, 311.0 + margeEsquerre, 265, rack.estatGeneral == "correcto").pinta()

		new Cercle(ctx.doc, 251.0 + margeEsquerre, 281, rack.aspecteNeteja == "muy deficiente").pinta()
		new Cercle(ctx.doc, 266.0 + margeEsquerre, 281, rack.aspecteNeteja == "deficiente").pinta()
		new Cercle(ctx.doc, 281.0 + margeEsquerre, 281, rack.aspecteNeteja == "mejorable").pinta()
		new Cercle(ctx.doc, 296.0 + margeEsquerre, 281, rack.aspecteNeteja == "aceptable").pinta()
		new Cercle(ctx.doc, 311.0 + margeEsquerre, 281, rack.aspecteNeteja == "correcto").pinta()

		new Cercle(ctx.doc, 268.0 + margeEsquerre, 298.0, rack.pany.existeix).pinta()
		new Cercle(ctx.doc, 287.0 + margeEsquerre, 298.0, !rack.pany.existeix && rack.pany.existeix != null).pinta()

		new Cercle(ctx.doc, 268.0 + margeEsquerre, 314.0, rack.pany.clauAlPany).pinta()
		new Cercle(ctx.doc, 287.0 + margeEsquerre, 314.0, !rack.pany.clauAlPany && rack.pany.clauAlPany != null).pinta()

		// ctx.doc.text(rack.pany.estatPany, 246.0 + margeEsquerre, 365.0 - 8);
		new Cercle(ctx.doc, 240 + margeEsquerre, 332, rack.pany.estatPany == "abierto").pinta()
		new Cercle(ctx.doc, 288 + margeEsquerre, 332.0, rack.pany.estatPany == "cerrado").pinta()

		new Cercle(ctx.doc, 268.0 + margeEsquerre, 349.0, rack.zonaPasLliure).pinta()
		new Cercle(ctx.doc, 287.0 + margeEsquerre, 349.0, !rack.zonaPasLliure && rack.zonaPasLliure != null).pinta()




		/* RACK -- cablejat */
		new Cercle(ctx.doc, 251.0 + margeEsquerre, 384, rack.cablejat.aspecte == "muy deficiente").pinta()
		new Cercle(ctx.doc, 266.0 + margeEsquerre, 384, rack.cablejat.aspecte == "deficiente").pinta()
		new Cercle(ctx.doc, 281.0 + margeEsquerre, 384, rack.cablejat.aspecte == "mejorable").pinta()
		new Cercle(ctx.doc, 296.0 + margeEsquerre, 384, rack.cablejat.aspecte == "aceptable").pinta()
		new Cercle(ctx.doc, 311.0 + margeEsquerre, 384, rack.cablejat.aspecte == "correcto").pinta()


		ctx.doc.text(rack.cablejat.pPanels.numPPanelActius, 280.0 + margeEsquerre, 407.0 - 8);

		// ctx.doc.text(rack.cablejat.pPanels.categoriesPPanel, 234.0 + margeEsquerre, 448.0 - 8);
		new Cercle(ctx.doc, 243.0 + margeEsquerre, 417, rack.cablejat.pPanels.categoriesPPanel == "cat5").pinta()
		new Cercle(ctx.doc, 260.0 + margeEsquerre, 417, rack.cablejat.pPanels.categoriesPPanel == "cat5e").pinta()
		new Cercle(ctx.doc, 281.0 + margeEsquerre, 417, rack.cablejat.pPanels.categoriesPPanel == "cat6").pinta()
		new Cercle(ctx.doc, 298.0 + margeEsquerre, 417, rack.cablejat.pPanels.categoriesPPanel == "mixte").pinta()

		new Cercle(ctx.doc, 251.0 + margeEsquerre, 434, rack.cablejat.estatTerminacions == "muy deficiente").pinta()
		new Cercle(ctx.doc, 266.0 + margeEsquerre, 434, rack.cablejat.estatTerminacions == "deficiente").pinta()
		new Cercle(ctx.doc, 281.0 + margeEsquerre, 434, rack.cablejat.estatTerminacions == "mejorable").pinta()
		new Cercle(ctx.doc, 296.0 + margeEsquerre, 434, rack.cablejat.estatTerminacions == "aceptable").pinta()
		new Cercle(ctx.doc, 311.0 + margeEsquerre, 434, rack.cablejat.estatTerminacions == "correcto").pinta()


		new Cercle(ctx.doc, 268.0 + margeEsquerre, 451.0, rack.cablejat.duplicadorPorts).pinta()
		new Cercle(ctx.doc, 287.0 + margeEsquerre, 451.0, !rack.cablejat.duplicadorPorts && rack.cablejat.duplicadorPorts != null).pinta()

		new Cercle(ctx.doc, 268.0 + margeEsquerre, 468.0, rack.cablejat.cablejatObsolet).pinta()
		new Cercle(ctx.doc, 287.0 + margeEsquerre, 468.0, !rack.cablejat.cablejatObsolet && rack.cablejat.cablejatObsolet != null).pinta()


		/* Rack -- electricitat */

		new Cercle(ctx.doc, 251.0 + margeEsquerre, 502, rack.electricitat.estat == "muy deficiente").pinta()
		new Cercle(ctx.doc, 266.0 + margeEsquerre, 502, rack.electricitat.estat == "deficiente").pinta()
		new Cercle(ctx.doc, 281.0 + margeEsquerre, 502, rack.electricitat.estat == "mejorable").pinta()
		new Cercle(ctx.doc, 296.0 + margeEsquerre, 502, rack.electricitat.estat == "aceptable").pinta()
		new Cercle(ctx.doc, 311.0 + margeEsquerre, 502, rack.electricitat.estat == "correcto").pinta()


		new Cercle(ctx.doc, 268.0 + margeEsquerre, 518.0, rack.electricitat.regletaSuministramentNet).pinta()
		new Cercle(ctx.doc, 287.0 + margeEsquerre, 518.0, !rack.electricitat.regletaSuministramentNet && rack.electricitat.regletaSuministramentNet != null).pinta()

		new Cercle(ctx.doc, 268.0 + margeEsquerre, 534.0, rack.electricitat.regletaSuministramentBrut).pinta()
		new Cercle(ctx.doc, 287.0 + margeEsquerre, 534.0, !rack.electricitat.regletaSuministramentBrut && rack.electricitat.regletaSuministramentBrut != null).pinta()

		ctx.doc.text(rack.electricitat.observacions, 229.0 + margeEsquerre, 557.0 - 8);

		/* --- */

		new Cercle(ctx.doc, 268.0 + margeEsquerre, 567.0, rack.ventilacio).pinta()
		new Cercle(ctx.doc, 287.0 + margeEsquerre, 567.0, !rack.ventilacio && rack.ventilacio != null).pinta()

		new Cercle(ctx.doc, 268.0 + margeEsquerre, 585.0, rack.dispositiusObsolets).pinta()
		new Cercle(ctx.doc, 287.0 + margeEsquerre, 585.0, !rack.dispositiusObsolets && rack.dispositiusObsolets != null).pinta()


		ctx.doc.text(rack.observacions, 229.0 + margeEsquerre, 610.0 - 8);
		// ctx.doc.text("RACK " + (index + 1) + ":     " + rack.observacions, 76, 662.0 - 8 + distanciaObs);  

		// establim marge per al següent rack
		switch (index){
			case 0: margeEsquerre += 113; break;  // per al rack 2
			case 1: margeEsquerre += 109.0; break;  // per al rack 3
			// case 2: margeEsquerre += 67.5; break;  // per al rack 4
			// case 3: margeEsquerre += 68.5; break;  // per al rack 5
		}
		
		// distanciaObs += 15
		

	})



	/* LLOCS DE TREBALL */
	
	/* -- cablejat */
	let objLlocs = oAudit.instalacionsComunicacions.llocsDeTeball

	new Cercle(ctx.doc, 228.0, 688.0, objLlocs.estatCablejat == "muy deficiente").pinta()
	new Cercle(ctx.doc, 264.0, 688.0, objLlocs.estatCablejat == "deficiente").pinta()
	new Cercle(ctx.doc, 300.0, 688.0, objLlocs.estatCablejat == "mejorable").pinta()
	new Cercle(ctx.doc, 335.0, 688.0, objLlocs.estatCablejat == "aceptable").pinta()
	new Cercle(ctx.doc, 371.0, 688.0, objLlocs.estatCablejat == "correcto").pinta()


	/* -- tomas de datos */
	let objPtsX = oAudit.instalacionsComunicacions.llocsDeTeball.puntsXarxa

	new Cercle(ctx.doc, 228.0, 721.0, objPtsX.estat == "muy deficiente").pinta()
	new Cercle(ctx.doc, 264.0, 721.0, objPtsX.estat == "deficiente").pinta()
	new Cercle(ctx.doc, 300.0, 721.0, objPtsX.estat == "mejorable").pinta()
	new Cercle(ctx.doc, 335.0, 721.0, objPtsX.estat == "aceptable").pinta()
	new Cercle(ctx.doc, 371.0, 721.0, objPtsX.estat == "correcto").pinta()


	new Cercle(ctx.doc, 228.0, 740.0, objPtsX.identificacio.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 740.0, !objPtsX.identificacio.existeix && objPtsX.identificacio.existeix != null).pinta()
	ctx.doc.text(objPtsX.identificacio.observacions, 375.0, 745.0 - 8);


	new Cercle(ctx.doc, 228.0, 760.0, objPtsX.suficientsPunts.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 760.0, !objPtsX.suficientsPunts.existeix && objPtsX.suficientsPunts.existeix != null).pinta()
	ctx.doc.text(objPtsX.suficientsPunts.observacions, 375.0, 763.0 - 8);


	new Cercle(ctx.doc, 228.0, 779.0, objPtsX.miniSwitchs.existeix).pinta()
	new Cercle(ctx.doc, 264.0, 779.0, !objPtsX.miniSwitchs.existeix && objPtsX.miniSwitchs.existeix != null).pinta()
	ctx.doc.text(objPtsX.miniSwitchs.observacions, 375.0, 783.0 - 8);































}