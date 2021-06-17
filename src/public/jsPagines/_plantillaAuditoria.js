let oAudit = {


  
  // idAuditoria: null,
  data: "31/12/2021",
  nomCentre: "Nom del centre",
  tecnic: "Jordi Miserachs",

  sector: "Sector XX",
  domicili: "Carrer Tal, numero qual, codi postal ciutat",
  DC: "Nom del director del centre",
  interlocutors: "nom director, JASP",



  // INSTALACIONS I COMUNICACIONS

  instalacionsComunicacions: {

    informacioPrevia: {

      CA: {
        codi: "ASXXXX",
        idSiteBT: 1234567,
        totalUsuaris: 10,
        Linia1: "Linia dades principal",
        Linia2: "Linia dades backup",
        CiscPrime: {
          NumRouters: 1,
          NumSwitchs: 3,
          NumAPsWifi: 2
        },
        CuesImpressioMTF: 1,
        CuesImpressio: 5
      },
      TareasRequeridas:{
        RetirarMinipacsDelRack: true,
        RevisarCascosJabra: true,
        RetirarDelRack: true,
        Otras: null
      }
    },



    sala: {
      existeix: null,     // propietat NO Rafa. Aportada per JMG
      centreSecundari: {
        existeix: true,
        idCentrePrincipal: "aaa"
      },

      accessibilitat: {
        cerraduraPorta: {
          existeix: null,
          observacions: "observacions cerradura Porta"
        },
        estatPorta: "abierta",	// oberta / tancada
        zonaPasLliure: {
          existeix: true,
          observacions: "observacions zona de pas lliure",
        },
      },

      proveidorWAN: {
        estatInstalacio: "correcto",	// valor entre 1 - 5
        instalacionsObsoletes: {
          existeix: false,
          observacions: "observacions instalacions obsoletes"
        },
        idLinia1: {
          existeix: true,
          observacions: "observacions idLinia 1"
        },
        idLinia2: {
          existeix: false,
          observacions: "observacions idLinia 2"
        },
        estatConvertidorLinia1: "deficiente", 	// valor 1 - 5
        estatConvertidorLinia2: "mejorable",	// valor 1 - 5
      },

      SAI : {
        estatSAI: "aceptable",	// valor 1 - 5
        connexioSwitch: {
          existeix: false,
          connexioPortSW1Gi26: true,
          connexio: {
            SW: "SW2",
            port: 23
          }

        },
        instalacioSAI: "sueloJuntoRack",	// opcions: enrackat; a terra dins el rack; al terra junt al rack
        elementsConnectatsSAI: {
          router: true,
          switchs: true,
					switch1: true,
					switch2: true,
					switch3: true,
          convertidorLinia1: true,
          convertidorLinia2: true,
					raspberry: true,
					filMusical: true,
					ampliFilM: true,
          altres: true
        },
        elementsRegletaNeta: {
          router: true,
          switchs: true,
					switch1: true,
					switch2: true,
					switch3: true,
          convertidorLinia1: true,
          convertidorLinia2: true,
					raspberry: true,
					filMusical: true,
					ampliFilM: true,
          altres: true
        },
        elementsRegletaBruta: {
          router: true,
          switchs: true,
					switch1: true,
					switch2: true,
					switch3: true,
          convertidorLinia1: true,
          convertidorLinia2: true,
					raspberry: true,
					filMusical: true,
					ampliFilM: true,
          altres: true
        },
      },

      aspecteSala: "deficiente",	// valor 1 - 5
      climatitzacio: {
        existeix: true,
        observacions: "observacions climatitzacio"
      },
      ventilacio: {
        existeix: true,
        observacions: "observacions ventilacio"
      },
      latiguillos: {
        existeix: true,
        observacions: "observacions latiguillos"
      },
      // numRacksAdecuats: {
      //   existeix: true,
      //   observacions: "observacions num racks adecuat"
      // },
      elementsBaixaInventari: {
        existeix: false,
        observacions: "observacions elements baixa inventari"
      },

      numRacks: 3,
      numRacksAdecuat: {
        existeix: true,
        observacions: "observacions num racks adecuat"
      },


      racks: [

        {
          idRack: null,
          ubicacio: "ubicacio rack 1",
          tipusRack: "armario",
          estatGeneral: "muy deficiente",
          aspecteNeteja: "muy deficiente",
          pany: {
            existeix: true,
            clauAlPany: false,
            estatPany: "abierta"
          },
          zonaPasLliure: false,
          cablejat: {
            aspecte: "muy deficiente",
            pPanels: {
              numPPanelActius: 3,
              categoriesPPanel: "cat6"
            },
            estatTerminacions: "muy deficiente",
            duplicadorPorts: false,
            cablejatObsolet: true
          },
          electricitat: {
            estat: "muy deficiene",
            regletaSuministramentNet: true,
            regletaSuministramentBrut: false,
            observacions: "obs electricitat"
          },
          ventilacio: true,
          dispositiusObsolets: false,
          observacions: "Obs rack 1"
        },

        {
          idRack: null,
          ubicacio: "sala administracio",
          tipusRack: "cofre",
          estatGeneral: "deficiente",
          aspecteNeteja: "deficiente",
          pany: {
            existeix: false,
            clauAlPany: true,
            estatPany: "cerrada"
          },
          zonaPasLliure: true,
          cablejat: {
            aspecte: "deficiente",
            pPanels: {
              numPPanelActius: 5,
              categoriesPPanel: "cat5e"
            },
            estatTerminacions: "mejorable",
            duplicadorPorts: false,
            cablejatObsolet: true
          },
          electricitat: {
            estat: "deficiente",
            regletaSuministramentNet: false,
            regletaSuministramentBrut: true,
            observacions: "obs electricitat"
          },
          ventilacio: false,
          dispositiusObsolets: true,
          observacions: "obs rack 2"
        },

        {
          idRack: null,
          ubicacio: "ubicacio rack 3",
          tipusRack: "cofre",
          estatGeneral: "aceptable",
          aspecteNeteja: "aceptable",
          pany: {
            existeix: true,
            clauAlPany: false,
            estatPany: "abierta"
          },
          zonaPasLliure: false,
          cablejat: {
            aspecte: "aceptable",
            pPanels: {
              numPPanelActius: 4,
              categoriesPPanel: "cat5e"
            },
            estatTerminacions: "aceptable",
            duplicadorPorts: true,
            cablejatObsolet: false
          },
          electricitat: {
            estat: "aceptable",
            regletaSuministramentNet: false,
            regletaSuministramentBrut: false,
            observacions: "obs electricitat"
          },
          ventilacio: true,
          dispositiusObsolets: false,
          observacions: "obs rack 3"
        },

        {
          idRack: null,
          ubicacio: "ubicacio rack 4",
          tipusRack: "cofre",
          estatGeneral: "mejorable",
          aspecteNeteja: "mejorable",
          pany: {
            existeix: true,
            clauAlPany: false,
            estatPany: "abierta"
          },
          zonaPasLliure: false,
          cablejat: {
            aspecte: "mejorable",
            pPanels: {
              numPPanelActius: 4,
              categoriesPPanel: "cat5e"
            },
            estatTerminacions: "mejorable",
            duplicadorPorts: true,
            cablejatObsolet: false
          },
          electricitat: {
            estat: "mejorable",
            regletaSuministramentNet: false,
            regletaSuministramentBrut: false,
            observacions: "obs electricitat"
          },
          ventilacio: true,
          dispositiusObsolets: false,
          observacions: "obs rack 4"
        },

        {
          idRack: null,
          ubicacio: "ubicacio rack 5",
          tipusRack: "cofre",
          estatGeneral: "correcto",
          aspecteNeteja: "correcto",
          pany: {
            existeix: true,
            clauAlPany: false,
            estatPany: "abierta"
          },
          zonaPasLliure: false,
          cablejat: {
            aspecte: "correcto",
            pPanels: {
              numPPanelActius: 4,
              categoriesPPanel: "cat5e"
            },
            estatTerminacions: "correcto",
            duplicadorPorts: true,
            cablejatObsolet: false
          },
          electricitat: {
            estat: "correcto",
            regletaSuministramentNet: false,
            regletaSuministramentBrut: false,
            observacions: "obs electricitat"
          },
          ventilacio: true,
          dispositiusObsolets: false,
          observacions: "obs rack 5"
        }


			]
    },


    llocsDeTeball : {
      estatCablejat: "aceptable", 	// valor 1 - 5

      puntsXarxa: {
        estat: "deficiente",	// valor 1 - 5
        identificacio: {
          existeix: true,		// true / false
          observacions: "observacions punts identificacio punts xarxa"
        },
        suficientsPunts: {
          existeix: false, 	// true / false
          observacions: "observacins punts suficients"
        },
        miniSwitchs: {
          existeix: true, 	// true / false
          observacions: "observacions miniswitchs"
        }
      },

      electricitat: {
        estat: "correcto",	// valor 1 - 5
        suficientsEndolls: {
          existeix: false,		// true / false
          observacions: "observacions suficients endolls"
        },
        regletes: {
          existeix: true, 	// true / false
          observacions: "observacions regletes"
        },
        regletesCascada: {
          existeix: false, 	// true / false
          observacions: "observacions regletes en cascada"
        }
      },

      observacions: "observacions generals dels llocs de treball"
    },

    LAN : {

      SWidentificats: {  // estan identificats ?
        existeix: true,		// true / false
        observacions: "observacions switchs identificats"
      },
      wifiAPs: {
        quantitat: 2,
        ubicacio: {
          salaEspera: false,
          altres: "ubicades en un altre lloc"
        },
        APvisible: {  // estan identificats ?
          existeix: false,		// true / false
          observacions: "observacions app visible"
        },
        coberturaPROAS: {  // estan identificats ?
          existeix: false,		// true / false
          observacions: "observacions cobertura PROAS"
        },
        carteleriaWifi: {  // estan identificats ?
          existeix: true,		// true / false
          observacions: "observacions carteleria wifi"
        },
        observacions: "observacions AP wifi"
      },

      NumCuesImpressioMTF: 1,
      NumCuesImpressio: 6,
      altresDispositius: "altres dispositius",
      coberturaWifi: null,
      observacions: "observacions generals LAN",
    },


    equipamentConexions: {
      connexioPortSW1Gi23: false,
      altraConnexio: null,
    },

    pendriveBIOS : {
      existeix: null,		// true / false
      ubicacio: null,
      observacions: null
    },

    filMusical: {
      existeix: null,
      connexioSwitchPort: null,
      observacions: null
    },

    telemedicina : {
      existeix: null, 	// true / false
      observacions: null,
      dispositius: {
        TV32: false,		// true / false
        Jabra510: false,	// true / false
        camaraIP: false,	// true / false
        DisplayPort: false, 	// true / false
      },
      estat: null,	// valor 1 - 5
    },

    LectorCDDVDExtern : {
      existeix: null,		// true / false
      observacions: null
    },

    observacions: null

  },



  // COMUNICACIONS UNIFICADES

  comunicacionsUnificades : {
    salaReunions: {
      existeix: false,
      observacions: null,
      capacitat: null,
      mides: null,
      dispositius: {
        SX10: false,		// true / false
        SX80: false,		// true / false
        roomkit: false,	// true / false
        DX80: false,	// true / false
        camaraWeb: false,  // true / false
        tablet: false, 	// true / false
        mando: false,		// true / false
        altaveu: false, 	// true / false
        TV: false,		// true / false
        projector: false, // true / false
        PC: false, // true / false
        displayPortHDMI: false, 	// true / false
        conversorVGA_HDMI: false,	// true / false
        cableAudio: false,	// true / false
        duplicadorHDMI: false,	// true / false
      },
      recomanacions: null,
    },
    videoconferencia : {
      // existeix: null, 	// true / false
      // observacionsExistencia: null,
      operativa: null,	// true / false
      observacionsOperativa: null,
      // estat: null,		// valor 1 - 5
      prova: {
        feta: false,
        observacions: null,
        trucada: false,	// true / false
        compartirPc: false, // true / false
        audio: false,	// true / false
        video: false, 	// true / false
        resultat: null,	// valor 1 - 5
      },
      observacions: null
    },

    telefonSupervivencia : {
      existeix: null,		// true / false
      observacionsExistencia: null,
      DDI: null,
      instruccions: null,
      estat: null,		// valor 1 - 5
      ubicacio: null,
      prova : {
        trucadaSortint: false,	// true / false
        trucadaEntrant: false, 	// true / false
        desconectarTensio: false,
        nivellAudioRing: false
      },
      nivellCobertura: null,
      nivellBateria: null,
      connectatCorrent: null,
      instruccionsProperes: null,
      observacions: null,
    },

    auricularsRecanvi: {
      existeix: null,		// true / false
      observacions: null,
      quantitat: null,	// numero
    }

  },


  // SEGURETAT DE LA INFORMACIO

  seguretatInformacio : {

    taulesNetes : {
      documentacioSobreTaules: {
        existeix: null,		// true / false
        observacions: null
      },
      documentacioImpresores : {
        existeix: null,		// true / false
        observacions: null
      },
      documentacioPapeleres : {
        existeix: null,		// true / false
        observacions: null
      }
    },

    destruccioDocuments: {
      destructoraPapers: {
        existeix: null,			// true / false
        observacionsPapers: null,
        complementCDs: null,	// true / false
        observacionsCDs: null,
        quantitat: null,		// numero
      },
      contenidorSegur: {
        existeix: null,			// true / false
        observacions: null,
        quantitat: null,		// numero
      }
    },

    OrientacioPantalles: {
      exterior: null, 		// true / false
      observacionsExterior: null,
      zonaPas: null, 			// true / false
      observacionsZonaPas: null
    },

    carteleriaLOPD: {
      PROAS: null, 		// true / false
      observacionsPROAS: null,
      CEX: null, 			// true / false
      observacionsCEX: null
    },

    materialBaixaInventari: {
      existeix: null, 	// true / false
      observacions: null
    },

    suportsFisics: {
      existeix: null, 	// true / false
      observacions: null
    },

    documentacioSensible: {
      existeix: null, 	// true / false
      observacions: null
    },

    expedientsGreus: {
      existeix: null, 	// true / false
      observacions: null
    },



    accesAlCentre : {
      personalIntern: {
        usuarisAmbClaus: {
          existeix: null,		// true / false
          observacions: null 	// numero
        },
        codisAlarma: {
          tipus: null,		// individuals / generic
          observacions: null 	// numero
        },
      },
      personalExtern: {

        llibreRegistre: {
          existeix: null,		// true / false
          observacions: null 	// numero
        },
        usuarisAmbClaus: {
          existeix: null,		// true / false
          observacions: null 	// numero
        },
        codisAlarma: {
          tipus: null,		// individuals / generic
          observacions: null 	// numero
        },
      },
      accesForaHorariHabitual: {
        existeix: null,		// true / false
        observacions: null 	// numero
      },

      observacions: null,
    },





    // seguridad fisica i del entorno


    alarmaIntrusio: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },
    alarmaIncendis: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    videovigilancia : {
      existeix: null,		// true / false
      observacions: null,
      gestioInterna: {
        existeix: null,
        observacions: null,
        gravacioImatges: {
          personalAmbAcces: null,
          periodeConservacio: null
        },
      },
      gestioExterna: {
        existeix: null,
        observacionsExistencia: null,
        periodeConservacio: null,
        evidencia: null,
        observacionsEvidencia: null
      },

      retol: {
        existeix: null,		// true / false
        observacions: null 	// numero
      },
      carteleriaActualitzada: {
        existeix: null,		// true / false
        observacions: null 	// numero
      },
    },



    // Seguretat de les operacions

    // continuidad de negocio

    centresAlternatiusGADA: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    telefonSupervivencia: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    procedimentsPaper: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    pendriveEmergencia: {
      ubicacioCorrecte : {
        existeix: null,		// Esta en un sobre enganxat al rack ?
        observacions: null
      },
      ultimaVersio : {
        existeix: null,		// true / false
        observacions: null
      },
      actualitzacio : {
        feta: null, 	// true / false
        observacions: null
      },
    },


    // seguretat de les comunicacions

    accesSegurSalaComunicacions: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    accesSegurRack: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    SAIRack: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    puntsXarxaSalaEspera: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    observacions: null

  },

  formacio: {
    auriculars: {
      formacioFeta: null,
      observacions: null
    },

    videoconferencia: {
      formacioFeta: null,
      instruccionsEntregades: null,
      observacions: null
    },

    llicenciesM3: {
      formacioFeta: null,
      observacions: null
    },

    telefonSupervivencia: {
      formacioFeta: null,
      observacions: null
    },

    observacions: null
  },

  valoracions: {
    usuari: {
      queixes: null,
      suggeriments: null,
      millores: null
    },

    tecnic: {
      valoracions: null
    }
  },

  accionsMillora: {
    observacions:{
      rack:{
        neteja: false,
        sanejar: false,
        retirarPatchP: false,
        retirarRack: false
      },
      wanSanejar: false,
      sala: {
        neteja: false,
        retirarObjectes: false
      },
      SAI: {
        revisoDispNoConnectats: false,
      },
      enviarPendriveBIOS: false,
      enviarLatiguillos: false,
      llocsTreball: {
        ampliacioPuntsXarxa: false,
        revisarPresesXarxa: false,
        revisarCaixaConexions: false,
      },
      revisarTelemedicina: false,
      revisarVideoconferencia: false,
      enviarWebcam: false,
      CU: {
        enviarAuricularsReserva: false,
        enviarAltaveu: false,
      },
      enviarLectorCDDVD: false,
      renoveProjector: false,
      altres: null
    },

    NC: {
      enviarPendriveEmergencia: false,
      solicitarDestructoraPaper: false,
      solicitarContenidor: false,
      visibilitatPantalles: false,
      salaRackSenseClau: false,
      rackSenseClaus: false,
      carteleriaLOPD: false,
      suportsBackup: false,
      docsSensibles: false,
      altres: null
    }
  }

}
