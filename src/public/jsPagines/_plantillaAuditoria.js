let oAudit = {


  
  // idAuditoria: null,
  data: "31/12/2021",
  nomCentre: "Nom del centre",
  tecnic: "Jordi Miserachs",

  sector: null,
  domicili: null,
  DC: null,
  interlocutors: null,



  // INSTALACIONS I COMUNICACIONS

  instalacionsComunicacions: {

    informacioPrevia: {

      CA: {
        codi: null,
        idSiteBT: null,
        totalUsuaris: 0,
        Linia1: null,
        Linia2: null,
        CiscPrime: {
          NumRouters: null,
          NumSwitchs: null,
          NumAPsWifi: null
        },
        CuesImpressioMTF: null,
        CuesImpressio: null
      },
      TareasRequeridas:{
        RetirarMinipacsDelRack: false,
        RevisarCascosJabra: false,
        RetirarDelRack: false,
        Otras: null
      }
    },



    sala: {
      existeix: null,     // propietat NO Rafa. Aportada per JMG
      centreSecundari: {
        existeix: null,
        idCentrePrincipal: null
      },

      accessibilitat: {
        cerraduraPorta: {
          existeix: null,
          observacions: null
        },
        estatPorta: null,	// oberta / tancada
        zonaPasLliure: {
          existeix: null,
          observacions: null,
        },
      },

      proveidorWAN: {
        estatInstalacio: null,	// valor entre 1 - 5
        instalacionsObsoletes: {
          existeix: null,
          observacions: null
        },
        idLinia1: {
          existeix: null,
          observacions: null
        },
        idLinia2: {
          existeix: null,
          observacions: null
        },
        estatConvertidorLinia1: null, 	// valor 1 - 5
        estatConvertidorLinia2: null,	// valor 1 - 5
      },

      SAI : {
        estatSAI: null,	// valor 1 - 5
        connexioSwitch: {
          existeix: null,
          connexioPortSW1Gi26: false,
          connexio: {
            SW: null,
            port: null
          }

        },
        instalacioSAI: null,	// opcions: enrackat; a terra dins el rack; al terra junt al rack
        elementsConnectatsSAI: {
          router: false,	// true / false
          switchs: false,
          convertidorLinia1: false,
          convertidorLinia2: false,
          altres: false
        },
        elementsRegletaNeta: {
          router: false,	// true / false
          switchs: false,
          convertidorLinia1: false,
          convertidorLinia2: false,
          altres: false
        },
        elementsRegletaBruta: {
          router: false,	// true / false
          switchs: false,
          convertidorLinia1: false,
          convertidorLinia2: false,
          altres: false
        },
      },

      aspecteSala: null,	// valor 1 - 5
      climatitzacio: {
        existeix: null,
        observacions: null
      },
      ventilacio: {
        existeix: null,
        observacions: null
      },
      latiguillos: {
        existeix: null,
        observacions: null
      },
      numRacksAdecuats: {
        existeix: null,
        observacions: null
      },
      elementsBaixaInventari: {
        existeix: null,
        observacions: null
      },

      numRacks: null,
      numRacksAdecuat: {
        existeix: null,
        observacions: null
      },


      racks: []
    },


    llocsDeTeball : {
      estatCablejat: null, 	// valor 1 - 5

      puntsXarxa: {
        estat: null,	// valor 1 - 5
        identificacio: {
          existeix: null,		// true / false
          observacions: null
        },
        suficientsPunts: {
          existeix: null, 	// true / false
          observacions: null
        },
        miniSwitchs: {
          existeix: null, 	// true / false
          observacions: null
        }
      },

      electricitat: {
        estat: null,	// valor 1 - 5
        suficientsEndolls: {
          existeix: null,		// true / false
          observacions: null
        },
        regletes: {
          existeix: null, 	// true / false
          observacions: null
        },
        regletesCascada: {
          existeix: null, 	// true / false
          observacions: null
        }
      },

      observacions: null
    },

    LAN : {

      SWidentificats: {  // estan identificats ?
        existeix: null,		// true / false
        observacions: null
      },
      wifiAPs: {
        quantitat: null,
        ubicacio: {
          salaEspera: false,
          altres: null
        },
        APvisible: {  // estan identificats ?
          existeix: null,		// true / false
          observacions: null
        },
        coberturaPROAS: {  // estan identificats ?
          existeix: null,		// true / false
          observacions: null
        },
        carteleriaWifi: {  // estan identificats ?
          existeix: null,		// true / false
          observacions: null
        },
        observacions: null
      },

      NumCuesImpressioMTF: null,
      NumCuesImpressio: null,
      altresDispositius: null,
      coberturaWifi: null,
      observacions: null,
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
