/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina13 (ctx){

  /* CAPÇALERA */
	pintaCapsalera(ctx)


	/* ACCIONS DE MILLORA */
	
	/* -- Observacionss */
	let objObs = oAudit.accionsMillora.observacions

	new Quadrat(ctx.doc, 41.0, 180.0, objObs.rack.neteja).pinta()
	new Quadrat(ctx.doc, 41.0, 194.0, objObs.rack.sanejar).pinta()
	new Quadrat(ctx.doc, 41.0, 209.0, objObs.rack.retirarPatchP).pinta()
	new Quadrat(ctx.doc, 41.0, 223.0, objObs.rack.retirarRack).pinta()

	new Quadrat(ctx.doc, 41.0, 237.0, objObs.wanSanejar).pinta()

	new Quadrat(ctx.doc, 41.0, 251.0, objObs.sala.neteja).pinta()
	new Quadrat(ctx.doc, 41.0, 265.0, objObs.sala.retirarObjectes).pinta()

	new Quadrat(ctx.doc, 41.0, 279.0, objObs.SAI.revisoDispNoConnectats).pinta()

	new Quadrat(ctx.doc, 41.0, 294.0, objObs.enviarPendriveBIOS).pinta()
	new Quadrat(ctx.doc, 41.0, 308.0, objObs.enviarLatiguillos).pinta()

	new Quadrat(ctx.doc, 41.0, 322.0, objObs.llocsTreball.ampliacioPuntsXarxa).pinta()
	new Quadrat(ctx.doc, 41.0, 336.0, objObs.llocsTreball.revisarPresesXarxa).pinta()
	new Quadrat(ctx.doc, 41.0, 350.0, objObs.llocsTreball.revisarCaixaConexions).pinta()

	new Quadrat(ctx.doc, 41.0, 364.0, objObs.revisarTelemedicina).pinta()
	new Quadrat(ctx.doc, 41.0, 379.0, objObs.revisarVideoconferencia).pinta()
	// new Quadrat(ctx.doc, 75.0, 496.0, objObs.enviarWebcam).pinta()

	new Quadrat(ctx.doc, 41.0, 393.0, objObs.CU.enviarAuricularsReservaEvolve65).pinta()
	new Quadrat(ctx.doc, 41.0, 407.0, objObs.CU.enviarAuricularsReservaJabra930).pinta()
	new Quadrat(ctx.doc, 41.0, 421.0, objObs.CU.enviarAuricularsReserva).pinta()
	new Quadrat(ctx.doc, 41.0, 436.0, objObs.CU.enviarAltaveuJabra).pinta()

	new Quadrat(ctx.doc, 41.0, 449.0, objObs.Seguretat.solicitarDestructoraPaper).pinta()
	new Quadrat(ctx.doc, 41.0, 464.0, objObs.Seguretat.solicitarContenidor).pinta()
	new Quadrat(ctx.doc, 41.0, 478.0, objObs.Seguretat.visibilitatPantalles).pinta()
	
	new Quadrat(ctx.doc, 41.0, 492.0, objObs.enviarLectorCDDVD).pinta()
	// new Quadrat(ctx.doc, 75.0, 479.0, objObs.renoveProjector).pinta()


	// new Quadrat(ctx.doc, 75.0, 513.0, !!objObs.altres).pinta() // !! converteix un string a boolean; "" es false;
	// ctx.doc.text(objObs.altres, 86.0, 518.0 - 8);	



	/* -- No Conformitats */
	let objNC = oAudit.accionsMillora.NC

	// new Quadrat(ctx.doc, 75.0, 581.0, objNC.enviarPendriveEmergencia).pinta()
	new Quadrat(ctx.doc, 314.0, 180.0, objNC.solicitarDestructoraPaper).pinta()
	new Quadrat(ctx.doc, 314.0, 194.0, objNC.solicitarContenidor).pinta()
	new Quadrat(ctx.doc, 314.0, 209.0, objNC.visibilitatPantalles).pinta()
	new Quadrat(ctx.doc, 314.0, 223.0, objNC.salaRackSenseClau).pinta()
	new Quadrat(ctx.doc, 314.0, 237.0, objNC.rackSenseClaus).pinta()
	new Quadrat(ctx.doc, 314.0, 251.0, objNC.carteleriaLOPD).pinta()
	new Quadrat(ctx.doc, 314.0, 265.0, objNC.suportsBackup).pinta()
	new Quadrat(ctx.doc, 314.0, 279.0, objNC.docsSensibles).pinta()

	// new Quadrat(ctx.doc, 75.0, 734.0, !!objNC.altres).pinta() // !! converteix un string a boolean; "" es false;
	// ctx.doc.text(objNC.altres, 86.0, 739.0 - 8);	




}