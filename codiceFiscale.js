function CodiceFiscale(cognome, nome, sesso, lNascita, provincia, giorno, mese, anno) {
    let CodFiscale = "";
    let consonanti = /[bcdfghjklmnpqrstvwxyz]/gi
    let vocali = /[aeiou]/gi

    //Calcolo delle prime tre cifre (cognome)
    let p1 = cognome.match(consonanti);
    switch (true) {
        case p1.length === 2: {
            let p1_v = cognome.match(vocali);
            p1 = (p1[0] + p1[1] + p1_v[0]).toUpperCase();
            break;
        }

        case p1.length < 2: {
            let p1_v = cognome.match(vocali);
            p1 = (p1[0] + p1_v[0] + p1_v[1]).toUpperCase();
            break;
        }

        default: {
            p1 = (p1[0] + p1[1] + p1[2]).toUpperCase();
            break;
        }
    }

    //Calcolo delle seconde tre cifre (nome)
    let p2 = nome.match(consonanti);
    switch (true) {
        case p2.length === 2: {
            let p2_v = nome.match(vocali);
            p2 = (p2[0] + p2[1] + p2_v[0]).toUpperCase();
            break;
        }

        case p2.length < 2: {
            let p2_v = nome.match(vocali);
            p2 = (p2[0] + p2_v[0] + p2_v[1]).toUpperCase();
            break;
        }

        case p2.length >= 4: {
            p2 = (p2[0] + p2[2] + p2[3]).toUpperCase();
            break;
        }

        default: {
            p2 = (p2[0] + p2[1] + p2[2]).toUpperCase();
            break;
        }
    }

    //Calcolo delle terze tre cifre (mese, anno)
    let p3 = (anno[2] + anno[3]).toUpperCase();
    mese = mese.toUpperCase();
    CodFiscale = p1 + p2 + p3;

    switch (true) {
        case mese === "1" || mese === "GENNAIO": {
            CodFiscale += "A";
            break;
        }

        case mese === "2" || mese === "FEBBRAIO": {
            CodFiscale += "B";
            break;
        }

        case mese === "3" || mese === "MARZO": {
            CodFiscale += "C";
            break;
        }

        case mese === "4" || mese === "APRILE": {
            CodFiscale += "D";
            break;
        }

        case mese === "5" || mese === "MAGGIO": {
            CodFiscale += "E";
            break;
        }

        case mese === "6" || mese === "GIUGNO": {
            CodFiscale += "H";
            break;
        }

        case mese === "7" || mese === "LUGLIO": {
            CodFiscale += "L";
            break;
        }

        case mese === "8" || mese === "AGOSTO": {
            CodFiscale += "M";
            break;
        }

        case mese === "9" || mese === "SETTEMBRE": {
            CodFiscale += "P";
            break;
        }

        case mese === "10" || mese === "OTTOBRE": {
            CodFiscale += "R";
            break;
        }

        case mese === "11" || mese === "NOVEMBRE": {
            CodFiscale += "S";
            break;
        }

        case mese === "12" || mese === "DICEMBRE": {
            CodFiscale += "T";
            break;
        }
    }

    //Calcolo delle quarte due cifre (giorno, sesso)
    let p4 = giorno;
    if (sesso === "f") {
        p4 = parseInt(p4);
        p4 += 40;
        p4 = p4.toString();
    }

    if (giorno > 1 && giorno < 9) {
        CodFiscale += "0" + p4;
    } else {
        CodFiscale += p4;
    }

    //Calcolo delle quinte quattro cifre (comune)
    let p5 = CodCatasto(lNascita);
    CodFiscale += p5;

    return CodFiscale
}


console.log(CodiceFiscale(
    "guarna",
    "federico",
    "m",
    "alcamo",
    "tp",
    "3",
    "6",
    "2002"
))

function CodCatasto(a) {
    let codiciCatastali = [
        {
            ID: "A001",
            COMUNE: "ABANO TERME"
        },
        {
            ID: "A004",
            COMUNE: "ABBADIA CERRETO"
        },
        {
            ID: "A005",
            COMUNE: "ABBADIA LARIANA"
        },
        {
            ID: "A006",
            COMUNE: "ABBADIA SAN SALVATORE"
        },
        {
            ID: "A007",
            COMUNE: "ABBASANTA"
        },
        {
            ID: "A008",
            COMUNE: "ABBATEGGIO"
        },
        {
            ID: "A010",
            COMUNE: "ABBIATEGRASSO"
        },
        {
            ID: "A012",
            COMUNE: "ABETONE"
        },
        {
            ID: "M376",
            COMUNE: "ABETONE CUTIGLIANO"
        },
        {
            ID: "A013",
            COMUNE: "ABRIOLA"
        },
        {
            ID: "A014",
            COMUNE: "ACATE"
        },
        {
            ID: "A015",
            COMUNE: "ACCADIA"
        },
        {
            ID: "A016",
            COMUNE: "ACCEGLIO"
        },
        {
            ID: "A017",
            COMUNE: "ACCETTURA"
        },
        {
            ID: "A018",
            COMUNE: "ACCIANO"
        },
        {
            ID: "A019",
            COMUNE: "ACCUMOLI"
        },
        {
            ID: "A020",
            COMUNE: "ACERENZA"
        },
        {
            ID: "A023",
            COMUNE: "ACERNO"
        },
        {
            ID: "A024",
            COMUNE: "ACERRA"
        },
        {
            ID: "A025",
            COMUNE: "ACI BONACCORSI"
        },
        {
            ID: "A026",
            COMUNE: "ACI CASTELLO"
        },
        {
            ID: "A027",
            COMUNE: "ACI CATENA"
        },
        {
            ID: "A029",
            COMUNE: "ACI SANT'ANTONIO"
        },
        {
            ID: "A028",
            COMUNE: "ACIREALE"
        },
        {
            ID: "A031",
            COMUNE: "ACQUACANINA"
        },
        {
            ID: "A032",
            COMUNE: "ACQUAFONDATA"
        },
        {
            ID: "A033",
            COMUNE: "ACQUAFORMOSA"
        },
        {
            ID: "A034",
            COMUNE: "ACQUAFREDDA"
        },
        {
            ID: "A035",
            COMUNE: "ACQUALAGNA"
        },
        {
            ID: "A039",
            COMUNE: "ACQUANEGRA CREMONESE"
        },
        {
            ID: "A038",
            COMUNE: "ACQUANEGRA SUL CHIESE"
        },
        {
            ID: "A040",
            COMUNE: "ACQUAPENDENTE"
        },
        {
            ID: "A041",
            COMUNE: "ACQUAPPESA"
        },
        {
            ID: "A042",
            COMUNE: "ACQUARICA DEL CAPO"
        },
        {
            ID: "A043",
            COMUNE: "ACQUARO"
        },
        {
            ID: "A044",
            COMUNE: "ACQUASANTA TERME"
        },
        {
            ID: "A045",
            COMUNE: "ACQUASPARTA"
        },
        {
            ID: "A050",
            COMUNE: "ACQUAVIVA COLLECROCE"
        },
        {
            ID: "A048",
            COMUNE: "ACQUAVIVA DELLE FONTI"
        },
        {
            ID: "A051",
            COMUNE: "ACQUAVIVA D'ISERNIA"
        },
        {
            ID: "A047",
            COMUNE: "ACQUAVIVA PICENA"
        },
        {
            ID: "A049",
            COMUNE: "ACQUAVIVA PLATANI"
        },
        {
            ID: "M211",
            COMUNE: "ACQUEDOLCI"
        },
        {
            ID: "A052",
            COMUNE: "ACQUI TERME"
        },
        {
            ID: "A053",
            COMUNE: "ACRI"
        },
        {
            ID: "A054",
            COMUNE: "ACUTO"
        },
        {
            ID: "A055",
            COMUNE: "ADELFIA"
        },
        {
            ID: "A056",
            COMUNE: "ADRANO"
        },
        {
            ID: "A057",
            COMUNE: "ADRARA SAN MARTINO"
        },
        {
            ID: "A058",
            COMUNE: "ADRARA SAN ROCCO"
        },
        {
            ID: "A059",
            COMUNE: "ADRIA"
        },
        {
            ID: "A060",
            COMUNE: "ADRO"
        },
        {
            ID: "A061",
            COMUNE: "AFFI"
        },
        {
            ID: "A062",
            COMUNE: "AFFILE"
        },
        {
            ID: "A064",
            COMUNE: "AFRAGOLA"
        },
        {
            ID: "A065",
            COMUNE: "AFRICO"
        },
        {
            ID: "A067",
            COMUNE: "AGAZZANO"
        },
        {
            ID: "A068",
            COMUNE: "AGEROLA"
        },
        {
            ID: "A069",
            COMUNE: "AGGIUS"
        },
        {
            ID: "A070",
            COMUNE: "AGIRA"
        },
        {
            ID: "A071",
            COMUNE: "AGLIANA"
        },
        {
            ID: "A072",
            COMUNE: "AGLIANO TERME"
        },
        {
            ID: "A074",
            COMUNE: "AGLIE'"
        },
        {
            ID: "H848",
            COMUNE: "AGLIENTU"
        },
        {
            ID: "A075",
            COMUNE: "AGNA"
        },
        {
            ID: "A076",
            COMUNE: "AGNADELLO"
        },
        {
            ID: "A077",
            COMUNE: "AGNANA CALABRA"
        },
        {
            ID: "A080",
            COMUNE: "AGNONE"
        },
        {
            ID: "A082",
            COMUNE: "AGNOSINE"
        },
        {
            ID: "A083",
            COMUNE: "AGORDO"
        },
        {
            ID: "A084",
            COMUNE: "AGOSTA"
        },
        {
            ID: "A085",
            COMUNE: "AGRA"
        },
        {
            ID: "A087",
            COMUNE: "AGRATE BRIANZA"
        },
        {
            ID: "A088",
            COMUNE: "AGRATE CONTURBIA"
        },
        {
            ID: "A089",
            COMUNE: "AGRIGENTO"
        },
        {
            ID: "A091",
            COMUNE: "AGROPOLI"
        },
        {
            ID: "A092",
            COMUNE: "AGUGLIANO"
        },
        {
            ID: "A093",
            COMUNE: "AGUGLIARO"
        },
        {
            ID: "A096",
            COMUNE: "AICURZIO"
        },
        {
            ID: "A097",
            COMUNE: "AIDOMAGGIORE"
        },
        {
            ID: "A098",
            COMUNE: "AIDONE"
        },
        {
            ID: "A100",
            COMUNE: "AIELLI"
        },
        {
            ID: "A102",
            COMUNE: "AIELLO CALABRO"
        },
        {
            ID: "A103",
            COMUNE: "AIELLO DEL FRIULI"
        },
        {
            ID: "A101",
            COMUNE: "AIELLO DEL SABATO"
        },
        {
            ID: "A105",
            COMUNE: "AIETA"
        },
        {
            ID: "A106",
            COMUNE: "AILANO"
        },
        {
            ID: "A107",
            COMUNE: "AILOCHE"
        },
        {
            ID: "A109",
            COMUNE: "AIRASCA"
        },
        {
            ID: "A110",
            COMUNE: "AIROLA"
        },
        {
            ID: "A111",
            COMUNE: "AIROLE"
        },
        {
            ID: "A112",
            COMUNE: "AIRUNO"
        },
        {
            ID: "A113",
            COMUNE: "AISONE"
        },
        {
            ID: "A116",
            COMUNE: "ALA"
        },
        {
            ID: "A115",
            COMUNE: "ALA' DEI SARDI"
        },
        {
            ID: "A117",
            COMUNE: "ALA DI STURA"
        },
        {
            ID: "A118",
            COMUNE: "ALAGNA"
        },
        {
            ID: "A119",
            COMUNE: "ALAGNA VALSESIA"
        },
        {
            ID: "A120",
            COMUNE: "ALANNO"
        },
        {
            ID: "A121",
            COMUNE: "ALANO DI PIAVE"
        },
        {
            ID: "A122",
            COMUNE: "ALASSIO"
        },
        {
            ID: "A123",
            COMUNE: "ALATRI"
        },
        {
            ID: "A124",
            COMUNE: "ALBA"
        },
        {
            ID: "A125",
            COMUNE: "ALBA ADRIATICA"
        },
        {
            ID: "A126",
            COMUNE: "ALBAGIARA"
        },
        {
            ID: "A127",
            COMUNE: "ALBAIRATE"
        },
        {
            ID: "A128",
            COMUNE: "ALBANELLA"
        },
        {
            ID: "A131",
            COMUNE: "ALBANO DI LUCANIA"
        },
        {
            ID: "A132",
            COMUNE: "ALBANO LAZIALE"
        },
        {
            ID: "A129",
            COMUNE: "ALBANO SANT'ALESSANDRO"
        },
        {
            ID: "A130",
            COMUNE: "ALBANO VERCELLESE"
        },
        {
            ID: "A134",
            COMUNE: "ALBAREDO ARNABOLDI"
        },
        {
            ID: "A137",
            COMUNE: "ALBAREDO D'ADIGE"
        },
        {
            ID: "A135",
            COMUNE: "ALBAREDO PER SAN MARCO"
        },
        {
            ID: "A138",
            COMUNE: "ALBARETO"
        },
        {
            ID: "A139",
            COMUNE: "ALBARETTO DELLA TORRE"
        },
        {
            ID: "A143",
            COMUNE: "ALBAVILLA"
        },
        {
            ID: "A145",
            COMUNE: "ALBENGA"
        },
        {
            ID: "A146",
            COMUNE: "ALBERA LIGURE"
        },
        {
            ID: "A149",
            COMUNE: "ALBEROBELLO"
        },
        {
            ID: "A150",
            COMUNE: "ALBERONA"
        },
        {
            ID: "A153",
            COMUNE: "ALBESE CON CASSANO"
        },
        {
            ID: "A154",
            COMUNE: "ALBETTONE"
        },
        {
            ID: "A155",
            COMUNE: "ALBI"
        },
        {
            ID: "A158",
            COMUNE: "ALBIANO"
        },
        {
            ID: "A157",
            COMUNE: "ALBIANO D'IVREA"
        },
        {
            ID: "A159",
            COMUNE: "ALBIATE"
        },
        {
            ID: "A160",
            COMUNE: "ALBIDONA"
        },
        {
            ID: "A161",
            COMUNE: "ALBIGNASEGO"
        },
        {
            ID: "A162",
            COMUNE: "ALBINEA"
        },
        {
            ID: "A163",
            COMUNE: "ALBINO"
        },
        {
            ID: "A164",
            COMUNE: "ALBIOLO"
        },
        {
            ID: "A166",
            COMUNE: "ALBISOLA SUPERIORE"
        },
        {
            ID: "A165",
            COMUNE: "ALBISSOLA MARINA"
        },
        {
            ID: "A167",
            COMUNE: "ALBIZZATE"
        },
        {
            ID: "A171",
            COMUNE: "ALBONESE"
        },
        {
            ID: "A172",
            COMUNE: "ALBOSAGGIA"
        },
        {
            ID: "A173",
            COMUNE: "ALBUGNANO"
        },
        {
            ID: "A175",
            COMUNE: "ALBUZZANO"
        },
        {
            ID: "A176",
            COMUNE: "ALCAMO"
        },
        {
            ID: "A177",
            COMUNE: "ALCARA LI FUSI"
        },
        {
            ID: "A178",
            COMUNE: "ALDENO"
        },
        {
            ID: "A179",
            COMUNE: "ALDINO .ALDEIN."
        },
        {
            ID: "A180",
            COMUNE: "ALES"
        },
        {
            ID: "A182",
            COMUNE: "ALESSANDRIA"
        },
        {
            ID: "A183",
            COMUNE: "ALESSANDRIA DEL CARRETTO"
        },
        {
            ID: "A181",
            COMUNE: "ALESSANDRIA DELLA ROCCA"
        },
        {
            ID: "A184",
            COMUNE: "ALESSANO"
        },
        {
            ID: "A185",
            COMUNE: "ALEZIO"
        },
        {
            ID: "A186",
            COMUNE: "ALFANO"
        },
        {
            ID: "A187",
            COMUNE: "ALFEDENA"
        },
        {
            ID: "A188",
            COMUNE: "ALFIANELLO"
        },
        {
            ID: "A189",
            COMUNE: "ALFIANO NATTA"
        },
        {
            ID: "A191",
            COMUNE: "ALFONSINE"
        },
        {
            ID: "A192",
            COMUNE: "ALGHERO"
        },
        {
            ID: "A193",
            COMUNE: "ALGUA"
        },
        {
            ID: "A194",
            COMUNE: "ALI'"
        },
        {
            ID: "A201",
            COMUNE: "ALI' TERME"
        },
        {
            ID: "A195",
            COMUNE: "ALIA"
        },
        {
            ID: "A196",
            COMUNE: "ALIANO"
        },
        {
            ID: "A197",
            COMUNE: "ALICE BEL COLLE"
        },
        {
            ID: "A198",
            COMUNE: "ALICE CASTELLO"
        },
        {
            ID: "A199",
            COMUNE: "ALICE SUPERIORE"
        },
        {
            ID: "A200",
            COMUNE: "ALIFE"
        },
        {
            ID: "A202",
            COMUNE: "ALIMENA"
        },
        {
            ID: "A203",
            COMUNE: "ALIMINUSA"
        },
        {
            ID: "A204",
            COMUNE: "ALLAI"
        },
        {
            ID: "A206",
            COMUNE: "ALLEGHE"
        },
        {
            ID: "A205",
            COMUNE: "ALLEIN"
        },
        {
            ID: "A207",
            COMUNE: "ALLERONA"
        },
        {
            ID: "A208",
            COMUNE: "ALLISTE"
        },
        {
            ID: "A210",
            COMUNE: "ALLUMIERE"
        },
        {
            ID: "A211",
            COMUNE: "ALLUVIONI CAMBIO'"
        },
        {
            ID: "M397",
            COMUNE: "ALLUVIONI PIOVERA"
        },
        {
            ID: "A214",
            COMUNE: "ALME'"
        },
        {
            ID: "A216",
            COMUNE: "ALMENNO SAN BARTOLOMEO"
        },
        {
            ID: "A217",
            COMUNE: "ALMENNO SAN SALVATORE"
        },
        {
            ID: "A218",
            COMUNE: "ALMESE"
        },
        {
            ID: "A220",
            COMUNE: "ALONTE"
        },
        {
            ID: "M375",
            COMUNE: "ALPAGO"
        },
        {
            ID: "A221",
            COMUNE: "ALPETTE"
        },
        {
            ID: "A222",
            COMUNE: "ALPIGNANO"
        },
        {
            ID: "A223",
            COMUNE: "ALSENO"
        },
        {
            ID: "A224",
            COMUNE: "ALSERIO"
        },
        {
            ID: "M386",
            COMUNE: "ALTA VAL TIDONE"
        },
        {
            ID: "M383",
            COMUNE: "ALTA VALLE INTELVI"
        },
        {
            ID: "A225",
            COMUNE: "ALTAMURA"
        },
        {
            ID: "A226",
            COMUNE: "ALTARE"
        },
        {
            ID: "M349",
            COMUNE: "ALTAVALLE"
        },
        {
            ID: "A228",
            COMUNE: "ALTAVILLA IRPINA"
        },
        {
            ID: "A229",
            COMUNE: "ALTAVILLA MILICIA"
        },
        {
            ID: "A227",
            COMUNE: "ALTAVILLA MONFERRATO"
        },
        {
            ID: "A230",
            COMUNE: "ALTAVILLA SILENTINA"
        },
        {
            ID: "A231",
            COMUNE: "ALTAVILLA VICENTINA"
        },
        {
            ID: "A233",
            COMUNE: "ALTIDONA"
        },
        {
            ID: "A234",
            COMUNE: "ALTILIA"
        },
        {
            ID: "A235",
            COMUNE: "ALTINO"
        },
        {
            ID: "A236",
            COMUNE: "ALTISSIMO"
        },
        {
            ID: "A237",
            COMUNE: "ALTIVOLE"
        },
        {
            ID: "A238",
            COMUNE: "ALTO"
        },
        {
            ID: "M369",
            COMUNE: "ALTO RENO TERME"
        },
        {
            ID: "M389",
            COMUNE: "ALTO SERMENZA"
        },
        {
            ID: "A239",
            COMUNE: "ALTOFONTE"
        },
        {
            ID: "A240",
            COMUNE: "ALTOMONTE"
        },
        {
            ID: "A241",
            COMUNE: "ALTOPASCIO"
        },
        {
            ID: "M350",
            COMUNE: "ALTOPIANO DELLA VIGOLANA"
        },
        {
            ID: "A242",
            COMUNE: "ALVIANO"
        },
        {
            ID: "A243",
            COMUNE: "ALVIGNANO"
        },
        {
            ID: "A244",
            COMUNE: "ALVITO"
        },
        {
            ID: "A246",
            COMUNE: "ALZANO LOMBARDO"
        },
        {
            ID: "A245",
            COMUNE: "ALZANO SCRIVIA"
        },
        {
            ID: "A249",
            COMUNE: "ALZATE BRIANZA"
        },
        {
            ID: "A251",
            COMUNE: "AMALFI"
        },
        {
            ID: "A252",
            COMUNE: "AMANDOLA"
        },
        {
            ID: "A253",
            COMUNE: "AMANTEA"
        },
        {
            ID: "A254",
            COMUNE: "AMARO"
        },
        {
            ID: "A255",
            COMUNE: "AMARONI"
        },
        {
            ID: "A256",
            COMUNE: "AMASENO"
        },
        {
            ID: "A257",
            COMUNE: "AMATO"
        },
        {
            ID: "A258",
            COMUNE: "AMATRICE"
        },
        {
            ID: "A259",
            COMUNE: "AMBIVERE"
        },
        {
            ID: "A260",
            COMUNE: "AMBLAR"
        },
        {
            ID: "M351",
            COMUNE: "AMBLAR-DON"
        },
        {
            ID: "A261",
            COMUNE: "AMEGLIA"
        },
        {
            ID: "A262",
            COMUNE: "AMELIA"
        },
        {
            ID: "A263",
            COMUNE: "AMENDOLARA"
        },
        {
            ID: "A264",
            COMUNE: "AMENO"
        },
        {
            ID: "A265",
            COMUNE: "AMOROSI"
        },
        {
            ID: "A267",
            COMUNE: "AMPEZZO"
        },
        {
            ID: "A268",
            COMUNE: "ANACAPRI"
        },
        {
            ID: "A269",
            COMUNE: "ANAGNI"
        },
        {
            ID: "A270",
            COMUNE: "ANCARANO"
        },
        {
            ID: "A271",
            COMUNE: "ANCONA"
        },
        {
            ID: "A272",
            COMUNE: "ANDALI"
        },
        {
            ID: "A274",
            COMUNE: "ANDALO"
        },
        {
            ID: "A273",
            COMUNE: "ANDALO VALTELLINO"
        },
        {
            ID: "A275",
            COMUNE: "ANDEZENO"
        },
        {
            ID: "A278",
            COMUNE: "ANDORA"
        },
        {
            ID: "A280",
            COMUNE: "ANDORNO MICCA"
        },
        {
            ID: "A281",
            COMUNE: "ANDRANO"
        },
        {
            ID: "A282",
            COMUNE: "ANDRATE"
        },
        {
            ID: "A283",
            COMUNE: "ANDREIS"
        },
        {
            ID: "A284",
            COMUNE: "ANDRETTA"
        },
        {
            ID: "A285",
            COMUNE: "ANDRIA"
        },
        {
            ID: "A286",
            COMUNE: "ANDRIANO .ANDRIAN."
        },
        {
            ID: "A287",
            COMUNE: "ANELA"
        },
        {
            ID: "A288",
            COMUNE: "ANFO"
        },
        {
            ID: "A290",
            COMUNE: "ANGERA"
        },
        {
            ID: "A291",
            COMUNE: "ANGHIARI"
        },
        {
            ID: "A292",
            COMUNE: "ANGIARI"
        },
        {
            ID: "A293",
            COMUNE: "ANGOLO TERME"
        },
        {
            ID: "A294",
            COMUNE: "ANGRI"
        },
        {
            ID: "A295",
            COMUNE: "ANGROGNA"
        },
        {
            ID: "A297",
            COMUNE: "ANGUILLARA SABAZIA"
        },
        {
            ID: "A296",
            COMUNE: "ANGUILLARA VENETA"
        },
        {
            ID: "A299",
            COMUNE: "ANNICCO"
        },
        {
            ID: "A301",
            COMUNE: "ANNONE DI BRIANZA"
        },
        {
            ID: "A302",
            COMUNE: "ANNONE VENETO"
        },
        {
            ID: "A303",
            COMUNE: "ANOIA"
        },
        {
            ID: "A304",
            COMUNE: "ANTEGNATE"
        },
        {
            ID: "A306",
            COMUNE: "ANTERIVO .ALTREI."
        },
        {
            ID: "A305",
            COMUNE: "ANTEY-SAINT-ANDRE'"
        },
        {
            ID: "A309",
            COMUNE: "ANTICOLI CORRADO"
        },
        {
            ID: "A312",
            COMUNE: "ANTIGNANO"
        },
        {
            ID: "A313",
            COMUNE: "ANTILLO"
        },
        {
            ID: "A314",
            COMUNE: "ANTONIMINA"
        },
        {
            ID: "A315",
            COMUNE: "ANTRODOCO"
        },
        {
            ID: "A317",
            COMUNE: "ANTRONA SCHIERANCO"
        },
        {
            ID: "A318",
            COMUNE: "ANVERSA DEGLI ABRUZZI"
        },
        {
            ID: "A319",
            COMUNE: "ANZANO DEL PARCO"
        },
        {
            ID: "A320",
            COMUNE: "ANZANO DI PUGLIA"
        },
        {
            ID: "A321",
            COMUNE: "ANZI"
        },
        {
            ID: "A323",
            COMUNE: "ANZIO"
        },
        {
            ID: "A324",
            COMUNE: "ANZOLA DELL'EMILIA"
        },
        {
            ID: "A325",
            COMUNE: "ANZOLA D'OSSOLA"
        },
        {
            ID: "A326",
            COMUNE: "AOSTA"
        },
        {
            ID: "A327",
            COMUNE: "APECCHIO"
        },
        {
            ID: "A328",
            COMUNE: "APICE"
        },
        {
            ID: "A329",
            COMUNE: "APIRO"
        },
        {
            ID: "A330",
            COMUNE: "APOLLOSA"
        },
        {
            ID: "A333",
            COMUNE: "APPIANO GENTILE"
        },
        {
            ID: "A332",
            COMUNE: "APPIANO SULLA STRADA DEL VINO .EPPAN AN DER."
        },
        {
            ID: "A334",
            COMUNE: "APPIGNANO"
        },
        {
            ID: "A335",
            COMUNE: "APPIGNANO DEL TRONTO"
        },
        {
            ID: "A337",
            COMUNE: "APRICA"
        },
        {
            ID: "A338",
            COMUNE: "APRICALE"
        },
        {
            ID: "A339",
            COMUNE: "APRICENA"
        },
        {
            ID: "A340",
            COMUNE: "APRIGLIANO"
        },
        {
            ID: "A341",
            COMUNE: "APRILIA"
        },
        {
            ID: "A343",
            COMUNE: "AQUARA"
        },
        {
            ID: "A344",
            COMUNE: "AQUILA D'ARROSCIA"
        },
        {
            ID: "A346",
            COMUNE: "AQUILEIA"
        },
        {
            ID: "A347",
            COMUNE: "AQUILONIA"
        },
        {
            ID: "A348",
            COMUNE: "AQUINO"
        },
        {
            ID: "A350",
            COMUNE: "ARADEO"
        },
        {
            ID: "A351",
            COMUNE: "ARAGONA"
        },
        {
            ID: "A352",
            COMUNE: "ARAMENGO"
        },
        {
            ID: "A354",
            COMUNE: "ARBA"
        },
        {
            ID: "A357",
            COMUNE: "ARBOREA"
        },
        {
            ID: "A358",
            COMUNE: "ARBORIO"
        },
        {
            ID: "A359",
            COMUNE: "ARBUS"
        },
        {
            ID: "A360",
            COMUNE: "ARCADE"
        },
        {
            ID: "A363",
            COMUNE: "ARCE"
        },
        {
            ID: "A365",
            COMUNE: "ARCENE"
        },
        {
            ID: "A366",
            COMUNE: "ARCEVIA"
        },
        {
            ID: "A367",
            COMUNE: "ARCHI"
        },
        {
            ID: "A369",
            COMUNE: "ARCIDOSSO"
        },
        {
            ID: "A370",
            COMUNE: "ARCINAZZO ROMANO"
        },
        {
            ID: "A371",
            COMUNE: "ARCISATE"
        },
        {
            ID: "A372",
            COMUNE: "ARCO"
        },
        {
            ID: "A373",
            COMUNE: "ARCOLA"
        },
        {
            ID: "A374",
            COMUNE: "ARCOLE"
        },
        {
            ID: "A375",
            COMUNE: "ARCONATE"
        },
        {
            ID: "A376",
            COMUNE: "ARCORE"
        },
        {
            ID: "A377",
            COMUNE: "ARCUGNANO"
        },
        {
            ID: "A379",
            COMUNE: "ARDARA"
        },
        {
            ID: "A380",
            COMUNE: "ARDAULI"
        },
        {
            ID: "M213",
            COMUNE: "ARDEA"
        },
        {
            ID: "A382",
            COMUNE: "ARDENNO"
        },
        {
            ID: "A383",
            COMUNE: "ARDESIO"
        },
        {
            ID: "A385",
            COMUNE: "ARDORE"
        },
        {
            ID: "A386",
            COMUNE: "ARENA"
        },
        {
            ID: "A387",
            COMUNE: "ARENA PO"
        },
        {
            ID: "A388",
            COMUNE: "ARENZANO"
        },
        {
            ID: "A389",
            COMUNE: "ARESE"
        },
        {
            ID: "A390",
            COMUNE: "AREZZO"
        },
        {
            ID: "A391",
            COMUNE: "ARGEGNO"
        },
        {
            ID: "A392",
            COMUNE: "ARGELATO"
        },
        {
            ID: "A393",
            COMUNE: "ARGENTA"
        },
        {
            ID: "A394",
            COMUNE: "ARGENTERA"
        },
        {
            ID: "A396",
            COMUNE: "ARGUELLO"
        },
        {
            ID: "A397",
            COMUNE: "ARGUSTO"
        },
        {
            ID: "A398",
            COMUNE: "ARI"
        },
        {
            ID: "A399",
            COMUNE: "ARIANO IRPINO"
        },
        {
            ID: "A400",
            COMUNE: "ARIANO NEL POLESINE"
        },
        {
            ID: "A401",
            COMUNE: "ARICCIA"
        },
        {
            ID: "A402",
            COMUNE: "ARIELLI"
        },
        {
            ID: "A403",
            COMUNE: "ARIENZO"
        },
        {
            ID: "A405",
            COMUNE: "ARIGNANO"
        },
        {
            ID: "A407",
            COMUNE: "ARITZO"
        },
        {
            ID: "A409",
            COMUNE: "ARIZZANO"
        },
        {
            ID: "A412",
            COMUNE: "ARLENA DI CASTRO"
        },
        {
            ID: "A413",
            COMUNE: "ARLUNO"
        },
        {
            ID: "A414",
            COMUNE: "ARMENO"
        },
        {
            ID: "A415",
            COMUNE: "ARMENTO"
        },
        {
            ID: "A418",
            COMUNE: "ARMO"
        },
        {
            ID: "A419",
            COMUNE: "ARMUNGIA"
        },
        {
            ID: "A424",
            COMUNE: "ARNAD"
        },
        {
            ID: "A421",
            COMUNE: "ARNARA"
        },
        {
            ID: "A422",
            COMUNE: "ARNASCO"
        },
        {
            ID: "A425",
            COMUNE: "ARNESANO"
        },
        {
            ID: "A427",
            COMUNE: "AROLA"
        },
        {
            ID: "A429",
            COMUNE: "ARONA"
        },
        {
            ID: "A430",
            COMUNE: "AROSIO"
        },
        {
            ID: "A431",
            COMUNE: "ARPAIA"
        },
        {
            ID: "A432",
            COMUNE: "ARPAISE"
        },
        {
            ID: "A433",
            COMUNE: "ARPINO"
        },
        {
            ID: "A434",
            COMUNE: "ARQUA' PETRARCA"
        },
        {
            ID: "A435",
            COMUNE: "ARQUA' POLESINE"
        },
        {
            ID: "A437",
            COMUNE: "ARQUATA DEL TRONTO"
        },
        {
            ID: "A436",
            COMUNE: "ARQUATA SCRIVIA"
        },
        {
            ID: "A438",
            COMUNE: "ARRE"
        },
        {
            ID: "A439",
            COMUNE: "ARRONE"
        },
        {
            ID: "A441",
            COMUNE: "ARSAGO SEPRIO"
        },
        {
            ID: "A443",
            COMUNE: "ARSIE'"
        },
        {
            ID: "A444",
            COMUNE: "ARSIERO"
        },
        {
            ID: "A445",
            COMUNE: "ARSITA"
        },
        {
            ID: "A446",
            COMUNE: "ARSOLI"
        },
        {
            ID: "A447",
            COMUNE: "ARTA TERME"
        },
        {
            ID: "A448",
            COMUNE: "ARTEGNA"
        },
        {
            ID: "A449",
            COMUNE: "ARTENA"
        },
        {
            ID: "A451",
            COMUNE: "ARTOGNE"
        },
        {
            ID: "A452",
            COMUNE: "ARVIER"
        },
        {
            ID: "A453",
            COMUNE: "ARZACHENA"
        },
        {
            ID: "A440",
            COMUNE: "ARZAGO D'ADDA"
        },
        {
            ID: "A454",
            COMUNE: "ARZANA"
        },
        {
            ID: "A455",
            COMUNE: "ARZANO"
        },
        {
            ID: "A456",
            COMUNE: "ARZENE"
        },
        {
            ID: "A458",
            COMUNE: "ARZERGRANDE"
        },
        {
            ID: "A459",
            COMUNE: "ARZIGNANO"
        },
        {
            ID: "A460",
            COMUNE: "ASCEA"
        },
        {
            ID: "A461",
            COMUNE: "ASCIANO"
        },
        {
            ID: "A462",
            COMUNE: "ASCOLI PICENO"
        },
        {
            ID: "A463",
            COMUNE: "ASCOLI SATRIANO"
        },
        {
            ID: "A464",
            COMUNE: "ASCREA"
        },
        {
            ID: "A465",
            COMUNE: "ASIAGO"
        },
        {
            ID: "A467",
            COMUNE: "ASIGLIANO VENETO"
        },
        {
            ID: "A466",
            COMUNE: "ASIGLIANO VERCELLESE"
        },
        {
            ID: "A470",
            COMUNE: "ASOLA"
        },
        {
            ID: "A471",
            COMUNE: "ASOLO"
        },
        {
            ID: "A473",
            COMUNE: "ASSAGO"
        },
        {
            ID: "A474",
            COMUNE: "ASSEMINI"
        },
        {
            ID: "A475",
            COMUNE: "ASSISI"
        },
        {
            ID: "A476",
            COMUNE: "ASSO"
        },
        {
            ID: "A477",
            COMUNE: "ASSOLO"
        },
        {
            ID: "A478",
            COMUNE: "ASSORO"
        },
        {
            ID: "A479",
            COMUNE: "ASTI"
        },
        {
            ID: "A480",
            COMUNE: "ASUNI"
        },
        {
            ID: "A481",
            COMUNE: "ATELETA"
        },
        {
            ID: "A482",
            COMUNE: "ATELLA"
        },
        {
            ID: "A484",
            COMUNE: "ATENA LUCANA"
        },
        {
            ID: "A485",
            COMUNE: "ATESSA"
        },
        {
            ID: "A486",
            COMUNE: "ATINA"
        },
        {
            ID: "A487",
            COMUNE: "ATRANI"
        },
        {
            ID: "A488",
            COMUNE: "ATRI"
        },
        {
            ID: "A489",
            COMUNE: "ATRIPALDA"
        },
        {
            ID: "A490",
            COMUNE: "ATTIGLIANO"
        },
        {
            ID: "A491",
            COMUNE: "ATTIMIS"
        },
        {
            ID: "A492",
            COMUNE: "ATZARA"
        },
        {
            ID: "A493",
            COMUNE: "AUDITORE"
        },
        {
            ID: "A494",
            COMUNE: "AUGUSTA"
        },
        {
            ID: "A495",
            COMUNE: "AULETTA"
        },
        {
            ID: "A496",
            COMUNE: "AULLA"
        },
        {
            ID: "A497",
            COMUNE: "AURANO"
        },
        {
            ID: "A499",
            COMUNE: "AURIGO"
        },
        {
            ID: "A501",
            COMUNE: "AURONZO DI CADORE"
        },
        {
            ID: "A502",
            COMUNE: "AUSONIA"
        },
        {
            ID: "A503",
            COMUNE: "AUSTIS"
        },
        {
            ID: "A506",
            COMUNE: "AVEGNO"
        },
        {
            ID: "A507",
            COMUNE: "AVELENGO .HAFLING."
        },
        {
            ID: "A508",
            COMUNE: "AVELLA"
        },
        {
            ID: "A509",
            COMUNE: "AVELLINO"
        },
        {
            ID: "A511",
            COMUNE: "AVERARA"
        },
        {
            ID: "A512",
            COMUNE: "AVERSA"
        },
        {
            ID: "A514",
            COMUNE: "AVETRANA"
        },
        {
            ID: "A515",
            COMUNE: "AVEZZANO"
        },
        {
            ID: "A516",
            COMUNE: "AVIANO"
        },
        {
            ID: "A517",
            COMUNE: "AVIATICO"
        },
        {
            ID: "A518",
            COMUNE: "AVIGLIANA"
        },
        {
            ID: "A519",
            COMUNE: "AVIGLIANO"
        },
        {
            ID: "M258",
            COMUNE: "AVIGLIANO UMBRO"
        },
        {
            ID: "A520",
            COMUNE: "AVIO"
        },
        {
            ID: "A521",
            COMUNE: "AVISE"
        },
        {
            ID: "A522",
            COMUNE: "AVOLA"
        },
        {
            ID: "A523",
            COMUNE: "AVOLASCA"
        },
        {
            ID: "A094",
            COMUNE: "AYAS"
        },
        {
            ID: "A108",
            COMUNE: "AYMAVILLES"
        },
        {
            ID: "A525",
            COMUNE: "AZEGLIO"
        },
        {
            ID: "A526",
            COMUNE: "AZZANELLO"
        },
        {
            ID: "A527",
            COMUNE: "AZZANO D'ASTI"
        },
        {
            ID: "A530",
            COMUNE: "AZZANO DECIMO"
        },
        {
            ID: "A529",
            COMUNE: "AZZANO MELLA"
        },
        {
            ID: "A528",
            COMUNE: "AZZANO SAN PAOLO"
        },
        {
            ID: "A531",
            COMUNE: "AZZATE"
        },
        {
            ID: "A532",
            COMUNE: "AZZIO"
        },
        {
            ID: "A533",
            COMUNE: "AZZONE"
        },
        {
            ID: "A534",
            COMUNE: "BACENO"
        },
        {
            ID: "A535",
            COMUNE: "BACOLI"
        },
        {
            ID: "A536",
            COMUNE: "BADALUCCO"
        },
        {
            ID: "M214",
            COMUNE: "BADESI"
        },
        {
            ID: "A537",
            COMUNE: "BADIA .ABTEI."
        },
        {
            ID: "A540",
            COMUNE: "BADIA CALAVENA"
        },
        {
            ID: "A538",
            COMUNE: "BADIA PAVESE"
        },
        {
            ID: "A539",
            COMUNE: "BADIA POLESINE"
        },
        {
            ID: "A541",
            COMUNE: "BADIA TEDALDA"
        },
        {
            ID: "A542",
            COMUNE: "BADOLATO"
        },
        {
            ID: "A544",
            COMUNE: "BAGALADI"
        },
        {
            ID: "A546",
            COMUNE: "BAGHERIA"
        },
        {
            ID: "A547",
            COMUNE: "BAGNACAVALLO"
        },
        {
            ID: "A552",
            COMUNE: "BAGNARA CALABRA"
        },
        {
            ID: "A551",
            COMUNE: "BAGNARA DI ROMAGNA"
        },
        {
            ID: "A550",
            COMUNE: "BAGNARIA"
        },
        {
            ID: "A553",
            COMUNE: "BAGNARIA ARSA"
        },
        {
            ID: "A555",
            COMUNE: "BAGNASCO"
        },
        {
            ID: "A557",
            COMUNE: "BAGNATICA"
        },
        {
            ID: "A560",
            COMUNE: "BAGNI DI LUCCA"
        },
        {
            ID: "A564",
            COMUNE: "BAGNO A RIPOLI"
        },
        {
            ID: "A565",
            COMUNE: "BAGNO DI ROMAGNA"
        },
        {
            ID: "A567",
            COMUNE: "BAGNOLI DEL TRIGNO"
        },
        {
            ID: "A568",
            COMUNE: "BAGNOLI DI SOPRA"
        },
        {
            ID: "A566",
            COMUNE: "BAGNOLI IRPINO"
        },
        {
            ID: "A570",
            COMUNE: "BAGNOLO CREMASCO"
        },
        {
            ID: "A572",
            COMUNE: "BAGNOLO DEL SALENTO"
        },
        {
            ID: "A574",
            COMUNE: "BAGNOLO DI PO"
        },
        {
            ID: "A573",
            COMUNE: "BAGNOLO IN PIANO"
        },
        {
            ID: "A569",
            COMUNE: "BAGNOLO MELLA"
        },
        {
            ID: "A571",
            COMUNE: "BAGNOLO PIEMONTE"
        },
        {
            ID: "A575",
            COMUNE: "BAGNOLO SAN VITO"
        },
        {
            ID: "A576",
            COMUNE: "BAGNONE"
        },
        {
            ID: "A577",
            COMUNE: "BAGNOREGIO"
        },
        {
            ID: "A578",
            COMUNE: "BAGOLINO"
        },
        {
            ID: "A579",
            COMUNE: "BAIA E LATINA"
        },
        {
            ID: "A580",
            COMUNE: "BAIANO"
        },
        {
            ID: "A581",
            COMUNE: "BAIARDO"
        },
        {
            ID: "A584",
            COMUNE: "BAIRO"
        },
        {
            ID: "A586",
            COMUNE: "BAISO"
        },
        {
            ID: "A587",
            COMUNE: "BALANGERO"
        },
        {
            ID: "A588",
            COMUNE: "BALDICHIERI D'ASTI"
        },
        {
            ID: "A590",
            COMUNE: "BALDISSERO CANAVESE"
        },
        {
            ID: "A589",
            COMUNE: "BALDISSERO D'ALBA"
        },
        {
            ID: "A591",
            COMUNE: "BALDISSERO TORINESE"
        },
        {
            ID: "A592",
            COMUNE: "BALESTRATE"
        },
        {
            ID: "A593",
            COMUNE: "BALESTRINO"
        },
        {
            ID: "A594",
            COMUNE: "BALLABIO"
        },
        {
            ID: "A597",
            COMUNE: "BALLAO"
        },
        {
            ID: "A599",
            COMUNE: "BALME"
        },
        {
            ID: "A600",
            COMUNE: "BALMUCCIA"
        },
        {
            ID: "A601",
            COMUNE: "BALOCCO"
        },
        {
            ID: "A603",
            COMUNE: "BALSORANO"
        },
        {
            ID: "A604",
            COMUNE: "BALVANO"
        },
        {
            ID: "A605",
            COMUNE: "BALZOLA"
        },
        {
            ID: "A606",
            COMUNE: "BANARI"
        },
        {
            ID: "A607",
            COMUNE: "BANCHETTE"
        },
        {
            ID: "A610",
            COMUNE: "BANNIO ANZINO"
        },
        {
            ID: "A612",
            COMUNE: "BANZI"
        },
        {
            ID: "A613",
            COMUNE: "BAONE"
        },
        {
            ID: "A614",
            COMUNE: "BARADILI"
        },
        {
            ID: "A615",
            COMUNE: "BARAGIANO"
        },
        {
            ID: "A616",
            COMUNE: "BARANELLO"
        },
        {
            ID: "A617",
            COMUNE: "BARANO D'ISCHIA"
        },
        {
            ID: "A618",
            COMUNE: "BARANZATE"
        },
        {
            ID: "A619",
            COMUNE: "BARASSO"
        },
        {
            ID: "A621",
            COMUNE: "BARATILI SAN PIETRO"
        },
        {
            ID: "A625",
            COMUNE: "BARBANIA"
        },
        {
            ID: "A626",
            COMUNE: "BARBARA"
        },
        {
            ID: "M401",
            COMUNE: "BARBARANO MOSSANO"
        },
        {
            ID: "A628",
            COMUNE: "BARBARANO ROMANO"
        },
        {
            ID: "A627",
            COMUNE: "BARBARANO VICENTINO"
        },
        {
            ID: "A629",
            COMUNE: "BARBARESCO"
        },
        {
            ID: "A630",
            COMUNE: "BARBARIGA"
        },
        {
            ID: "A631",
            COMUNE: "BARBATA"
        },
        {
            ID: "A632",
            COMUNE: "BARBERINO DI MUGELLO"
        },
        {
            ID: "M408",
            COMUNE: "BARBERINO TAVARNELLE"
        },
        {
            ID: "A633",
            COMUNE: "BARBERINO VAL D'ELSA"
        },
        {
            ID: "A634",
            COMUNE: "BARBIANELLO"
        },
        {
            ID: "A635",
            COMUNE: "BARBIANO .BARBIAN."
        },
        {
            ID: "A637",
            COMUNE: "BARBONA"
        },
        {
            ID: "A638",
            COMUNE: "BARCELLONA POZZO DI GOTTO"
        },
        {
            ID: "A639",
            COMUNE: "BARCHI"
        },
        {
            ID: "A640",
            COMUNE: "BARCIS"
        },
        {
            ID: "A643",
            COMUNE: "BARD"
        },
        {
            ID: "A645",
            COMUNE: "BARDELLO"
        },
        {
            ID: "A646",
            COMUNE: "BARDI"
        },
        {
            ID: "A647",
            COMUNE: "BARDINETO"
        },
        {
            ID: "A650",
            COMUNE: "BARDOLINO"
        },
        {
            ID: "A651",
            COMUNE: "BARDONECCHIA"
        },
        {
            ID: "A652",
            COMUNE: "BAREGGIO"
        },
        {
            ID: "A653",
            COMUNE: "BARENGO"
        },
        {
            ID: "A655",
            COMUNE: "BARESSA"
        },
        {
            ID: "A656",
            COMUNE: "BARETE"
        },
        {
            ID: "A657",
            COMUNE: "BARGA"
        },
        {
            ID: "A658",
            COMUNE: "BARGAGLI"
        },
        {
            ID: "A660",
            COMUNE: "BARGE"
        },
        {
            ID: "A661",
            COMUNE: "BARGHE"
        },
        {
            ID: "A662",
            COMUNE: "BARI"
        },
        {
            ID: "A663",
            COMUNE: "BARI SARDO"
        },
        {
            ID: "A664",
            COMUNE: "BARIANO"
        },
        {
            ID: "A665",
            COMUNE: "BARICELLA"
        },
        {
            ID: "A666",
            COMUNE: "BARILE"
        },
        {
            ID: "A667",
            COMUNE: "BARISCIANO"
        },
        {
            ID: "A668",
            COMUNE: "BARLASSINA"
        },
        {
            ID: "A669",
            COMUNE: "BARLETTA"
        },
        {
            ID: "A670",
            COMUNE: "BARNI"
        },
        {
            ID: "A671",
            COMUNE: "BAROLO"
        },
        {
            ID: "A673",
            COMUNE: "BARONE CANAVESE"
        },
        {
            ID: "A674",
            COMUNE: "BARONISSI"
        },
        {
            ID: "A676",
            COMUNE: "BARRAFRANCA"
        },
        {
            ID: "A677",
            COMUNE: "BARRALI"
        },
        {
            ID: "A678",
            COMUNE: "BARREA"
        },
        {
            ID: "A681",
            COMUNE: "BARUMINI"
        },
        {
            ID: "A683",
            COMUNE: "BARZAGO"
        },
        {
            ID: "A684",
            COMUNE: "BARZANA"
        },
        {
            ID: "A686",
            COMUNE: "BARZANO'"
        },
        {
            ID: "A687",
            COMUNE: "BARZIO"
        },
        {
            ID: "A689",
            COMUNE: "BASALUZZO"
        },
        {
            ID: "A690",
            COMUNE: "BASCAPE'"
        },
        {
            ID: "A691",
            COMUNE: "BASCHI"
        },
        {
            ID: "A692",
            COMUNE: "BASCIANO"
        },
        {
            ID: "A694",
            COMUNE: "BASELGA DI PINE'"
        },
        {
            ID: "A696",
            COMUNE: "BASELICE"
        },
        {
            ID: "A697",
            COMUNE: "BASIANO"
        },
        {
            ID: "A698",
            COMUNE: "BASICO'"
        },
        {
            ID: "A699",
            COMUNE: "BASIGLIO"
        },
        {
            ID: "A700",
            COMUNE: "BASILIANO"
        },
        {
            ID: "A702",
            COMUNE: "BASSANO BRESCIANO"
        },
        {
            ID: "A703",
            COMUNE: "BASSANO DEL GRAPPA"
        },
        {
            ID: "A706",
            COMUNE: "BASSANO IN TEVERINA"
        },
        {
            ID: "A704",
            COMUNE: "BASSANO ROMANO"
        },
        {
            ID: "A707",
            COMUNE: "BASSIANO"
        },
        {
            ID: "A708",
            COMUNE: "BASSIGNANA"
        },
        {
            ID: "A709",
            COMUNE: "BASTIA MONDOVI'"
        },
        {
            ID: "A710",
            COMUNE: "BASTIA UMBRA"
        },
        {
            ID: "A711",
            COMUNE: "BASTIDA DE' DOSSI"
        },
        {
            ID: "A712",
            COMUNE: "BASTIDA PANCARANA"
        },
        {
            ID: "A713",
            COMUNE: "BASTIGLIA"
        },
        {
            ID: "A714",
            COMUNE: "BATTAGLIA TERME"
        },
        {
            ID: "A716",
            COMUNE: "BATTIFOLLO"
        },
        {
            ID: "A717",
            COMUNE: "BATTIPAGLIA"
        },
        {
            ID: "A718",
            COMUNE: "BATTUDA"
        },
        {
            ID: "A719",
            COMUNE: "BAUCINA"
        },
        {
            ID: "A721",
            COMUNE: "BAULADU"
        },
        {
            ID: "A722",
            COMUNE: "BAUNEI"
        },
        {
            ID: "A725",
            COMUNE: "BAVENO"
        },
        {
            ID: "A726",
            COMUNE: "BAZZANO"
        },
        {
            ID: "A728",
            COMUNE: "BEDERO VALCUVIA"
        },
        {
            ID: "A729",
            COMUNE: "BEDIZZOLE"
        },
        {
            ID: "A730",
            COMUNE: "BEDOLLO"
        },
        {
            ID: "A731",
            COMUNE: "BEDONIA"
        },
        {
            ID: "A732",
            COMUNE: "BEDULITA"
        },
        {
            ID: "A733",
            COMUNE: "BEE"
        },
        {
            ID: "A734",
            COMUNE: "BEINASCO"
        },
        {
            ID: "A735",
            COMUNE: "BEINETTE"
        },
        {
            ID: "A736",
            COMUNE: "BELCASTRO"
        },
        {
            ID: "A737",
            COMUNE: "BELFIORE"
        },
        {
            ID: "A740",
            COMUNE: "BELFORTE ALL'ISAURO"
        },
        {
            ID: "A739",
            COMUNE: "BELFORTE DEL CHIENTI"
        },
        {
            ID: "A738",
            COMUNE: "BELFORTE MONFERRATO"
        },
        {
            ID: "A741",
            COMUNE: "BELGIOIOSO"
        },
        {
            ID: "A742",
            COMUNE: "BELGIRATE"
        },
        {
            ID: "A743",
            COMUNE: "BELLA"
        },
        {
            ID: "A744",
            COMUNE: "BELLAGIO"
        },
        {
            ID: "M335",
            COMUNE: "BELLAGIO"
        },
        {
            ID: "A745",
            COMUNE: "BELLANO"
        },
        {
            ID: "A746",
            COMUNE: "BELLANTE"
        },
        {
            ID: "A747",
            COMUNE: "BELLARIA-IGEA MARINA"
        },
        {
            ID: "A749",
            COMUNE: "BELLEGRA"
        },
        {
            ID: "A750",
            COMUNE: "BELLINO"
        },
        {
            ID: "A751",
            COMUNE: "BELLINZAGO LOMBARDO"
        },
        {
            ID: "A752",
            COMUNE: "BELLINZAGO NOVARESE"
        },
        {
            ID: "M294",
            COMUNE: "BELLIZZI"
        },
        {
            ID: "A755",
            COMUNE: "BELLONA"
        },
        {
            ID: "A756",
            COMUNE: "BELLOSGUARDO"
        },
        {
            ID: "A757",
            COMUNE: "BELLUNO"
        },
        {
            ID: "A759",
            COMUNE: "BELLUSCO"
        },
        {
            ID: "A762",
            COMUNE: "BELMONTE CALABRO"
        },
        {
            ID: "A763",
            COMUNE: "BELMONTE CASTELLO"
        },
        {
            ID: "A761",
            COMUNE: "BELMONTE DEL SANNIO"
        },
        {
            ID: "A765",
            COMUNE: "BELMONTE IN SABINA"
        },
        {
            ID: "A764",
            COMUNE: "BELMONTE MEZZAGNO"
        },
        {
            ID: "A760",
            COMUNE: "BELMONTE PICENO"
        },
        {
            ID: "A766",
            COMUNE: "BELPASSO"
        },
        {
            ID: "A768",
            COMUNE: "BELSITO"
        },
        {
            ID: "A772",
            COMUNE: "BELVEDERE DI SPINELLO"
        },
        {
            ID: "A774",
            COMUNE: "BELVEDERE LANGHE"
        },
        {
            ID: "A773",
            COMUNE: "BELVEDERE MARITTIMO"
        },
        {
            ID: "A769",
            COMUNE: "BELVEDERE OSTRENSE"
        },
        {
            ID: "A770",
            COMUNE: "BELVEGLIO"
        },
        {
            ID: "A776",
            COMUNE: "BELVI'"
        },
        {
            ID: "A777",
            COMUNE: "BEMA"
        },
        {
            ID: "A778",
            COMUNE: "BENE LARIO"
        },
        {
            ID: "A779",
            COMUNE: "BENE VAGIENNA"
        },
        {
            ID: "A780",
            COMUNE: "BENESTARE"
        },
        {
            ID: "A781",
            COMUNE: "BENETUTTI"
        },
        {
            ID: "A782",
            COMUNE: "BENEVELLO"
        },
        {
            ID: "A783",
            COMUNE: "BENEVENTO"
        },
        {
            ID: "A784",
            COMUNE: "BENNA"
        },
        {
            ID: "A785",
            COMUNE: "BENTIVOGLIO"
        },
        {
            ID: "A786",
            COMUNE: "BERBENNO"
        },
        {
            ID: "A787",
            COMUNE: "BERBENNO DI VALTELLINA"
        },
        {
            ID: "A788",
            COMUNE: "BERCETO"
        },
        {
            ID: "A789",
            COMUNE: "BERCHIDDA"
        },
        {
            ID: "A791",
            COMUNE: "BEREGAZZO CON FIGLIARO"
        },
        {
            ID: "A792",
            COMUNE: "BEREGUARDO"
        },
        {
            ID: "A793",
            COMUNE: "BERGAMASCO"
        },
        {
            ID: "A794",
            COMUNE: "BERGAMO"
        },
        {
            ID: "A795",
            COMUNE: "BERGANTINO"
        },
        {
            ID: "A796",
            COMUNE: "BERGEGGI"
        },
        {
            ID: "A798",
            COMUNE: "BERGOLO"
        },
        {
            ID: "A799",
            COMUNE: "BERLINGO"
        },
        {
            ID: "A801",
            COMUNE: "BERNALDA"
        },
        {
            ID: "A802",
            COMUNE: "BERNAREGGIO"
        },
        {
            ID: "A804",
            COMUNE: "BERNATE TICINO"
        },
        {
            ID: "A805",
            COMUNE: "BERNEZZO"
        },
        {
            ID: "A806",
            COMUNE: "BERRA"
        },
        {
            ID: "A808",
            COMUNE: "BERSONE"
        },
        {
            ID: "A809",
            COMUNE: "BERTINORO"
        },
        {
            ID: "A810",
            COMUNE: "BERTIOLO"
        },
        {
            ID: "A811",
            COMUNE: "BERTONICO"
        },
        {
            ID: "A812",
            COMUNE: "BERZANO DI SAN PIETRO"
        },
        {
            ID: "A813",
            COMUNE: "BERZANO DI TORTONA"
        },
        {
            ID: "A816",
            COMUNE: "BERZO DEMO"
        },
        {
            ID: "A817",
            COMUNE: "BERZO INFERIORE"
        },
        {
            ID: "A815",
            COMUNE: "BERZO SAN FERMO"
        },
        {
            ID: "A818",
            COMUNE: "BESANA IN BRIANZA"
        },
        {
            ID: "A819",
            COMUNE: "BESANO"
        },
        {
            ID: "A820",
            COMUNE: "BESATE"
        },
        {
            ID: "A821",
            COMUNE: "BESENELLO"
        },
        {
            ID: "A823",
            COMUNE: "BESENZONE"
        },
        {
            ID: "A825",
            COMUNE: "BESNATE"
        },
        {
            ID: "A826",
            COMUNE: "BESOZZO"
        },
        {
            ID: "A827",
            COMUNE: "BESSUDE"
        },
        {
            ID: "A831",
            COMUNE: "BETTOLA"
        },
        {
            ID: "A832",
            COMUNE: "BETTONA"
        },
        {
            ID: "A834",
            COMUNE: "BEURA-CARDEZZA"
        },
        {
            ID: "A835",
            COMUNE: "BEVAGNA"
        },
        {
            ID: "A836",
            COMUNE: "BEVERINO"
        },
        {
            ID: "A837",
            COMUNE: "BEVILACQUA"
        },
        {
            ID: "A839",
            COMUNE: "BEZZECCA"
        },
        {
            ID: "A841",
            COMUNE: "BIANCAVILLA"
        },
        {
            ID: "A842",
            COMUNE: "BIANCHI"
        },
        {
            ID: "A843",
            COMUNE: "BIANCO"
        },
        {
            ID: "A844",
            COMUNE: "BIANDRATE"
        },
        {
            ID: "A845",
            COMUNE: "BIANDRONNO"
        },
        {
            ID: "A846",
            COMUNE: "BIANZANO"
        },
        {
            ID: "A847",
            COMUNE: "BIANZE'"
        },
        {
            ID: "A848",
            COMUNE: "BIANZONE"
        },
        {
            ID: "A849",
            COMUNE: "BIASSONO"
        },
        {
            ID: "A850",
            COMUNE: "BIBBIANO"
        },
        {
            ID: "A851",
            COMUNE: "BIBBIENA"
        },
        {
            ID: "A852",
            COMUNE: "BIBBONA"
        },
        {
            ID: "A853",
            COMUNE: "BIBIANA"
        },
        {
            ID: "A854",
            COMUNE: "BICCARI"
        },
        {
            ID: "A855",
            COMUNE: "BICINICCO"
        },
        {
            ID: "A856",
            COMUNE: "BIDONI'"
        },
        {
            ID: "A859",
            COMUNE: "BIELLA"
        },
        {
            ID: "A861",
            COMUNE: "BIENNO"
        },
        {
            ID: "A863",
            COMUNE: "BIENO"
        },
        {
            ID: "A864",
            COMUNE: "BIENTINA"
        },
        {
            ID: "A866",
            COMUNE: "BIGARELLO"
        },
        {
            ID: "A870",
            COMUNE: "BINAGO"
        },
        {
            ID: "A872",
            COMUNE: "BINASCO"
        },
        {
            ID: "A874",
            COMUNE: "BINETTO"
        },
        {
            ID: "A876",
            COMUNE: "BIOGLIO"
        },
        {
            ID: "A877",
            COMUNE: "BIONAZ"
        },
        {
            ID: "A878",
            COMUNE: "BIONE"
        },
        {
            ID: "A880",
            COMUNE: "BIRORI"
        },
        {
            ID: "A881",
            COMUNE: "BISACCIA"
        },
        {
            ID: "A882",
            COMUNE: "BISACQUINO"
        },
        {
            ID: "A883",
            COMUNE: "BISCEGLIE"
        },
        {
            ID: "A884",
            COMUNE: "BISEGNA"
        },
        {
            ID: "A885",
            COMUNE: "BISENTI"
        },
        {
            ID: "A887",
            COMUNE: "BISIGNANO"
        },
        {
            ID: "A889",
            COMUNE: "BISTAGNO"
        },
        {
            ID: "A891",
            COMUNE: "BISUSCHIO"
        },
        {
            ID: "A892",
            COMUNE: "BITETTO"
        },
        {
            ID: "A893",
            COMUNE: "BITONTO"
        },
        {
            ID: "A894",
            COMUNE: "BITRITTO"
        },
        {
            ID: "A895",
            COMUNE: "BITTI"
        },
        {
            ID: "A896",
            COMUNE: "BIVONA"
        },
        {
            ID: "A897",
            COMUNE: "BIVONGI"
        },
        {
            ID: "A898",
            COMUNE: "BIZZARONE"
        },
        {
            ID: "A901",
            COMUNE: "BLEGGIO INFERIORE"
        },
        {
            ID: "A902",
            COMUNE: "BLEGGIO SUPERIORE"
        },
        {
            ID: "A903",
            COMUNE: "BLELLO"
        },
        {
            ID: "A857",
            COMUNE: "BLERA"
        },
        {
            ID: "A904",
            COMUNE: "BLESSAGNO"
        },
        {
            ID: "A905",
            COMUNE: "BLEVIO"
        },
        {
            ID: "M268",
            COMUNE: "BLUFI"
        },
        {
            ID: "A906",
            COMUNE: "BOARA PISANI"
        },
        {
            ID: "A909",
            COMUNE: "BOBBIO"
        },
        {
            ID: "A910",
            COMUNE: "BOBBIO PELLICE"
        },
        {
            ID: "A911",
            COMUNE: "BOCA"
        },
        {
            ID: "A912",
            COMUNE: "BOCCHIGLIERO"
        },
        {
            ID: "A914",
            COMUNE: "BOCCIOLETO"
        },
        {
            ID: "A916",
            COMUNE: "BOCENAGO"
        },
        {
            ID: "A918",
            COMUNE: "BODIO LOMNAGO"
        },
        {
            ID: "A919",
            COMUNE: "BOFFALORA D'ADDA"
        },
        {
            ID: "A920",
            COMUNE: "BOFFALORA SOPRA TICINO"
        },
        {
            ID: "A922",
            COMUNE: "BOGLIASCO"
        },
        {
            ID: "A925",
            COMUNE: "BOGNANCO"
        },
        {
            ID: "A929",
            COMUNE: "BOGOGNO"
        },
        {
            ID: "A931",
            COMUNE: "BOISSANO"
        },
        {
            ID: "A930",
            COMUNE: "BOJANO"
        },
        {
            ID: "A932",
            COMUNE: "BOLANO"
        },
        {
            ID: "A933",
            COMUNE: "BOLBENO"
        },
        {
            ID: "A937",
            COMUNE: "BOLGARE"
        },
        {
            ID: "A940",
            COMUNE: "BOLLATE"
        },
        {
            ID: "A941",
            COMUNE: "BOLLENGO"
        },
        {
            ID: "A944",
            COMUNE: "BOLOGNA"
        },
        {
            ID: "A945",
            COMUNE: "BOLOGNANO"
        },
        {
            ID: "A946",
            COMUNE: "BOLOGNETTA"
        },
        {
            ID: "A947",
            COMUNE: "BOLOGNOLA"
        },
        {
            ID: "A948",
            COMUNE: "BOLOTANA"
        },
        {
            ID: "A949",
            COMUNE: "BOLSENA"
        },
        {
            ID: "A950",
            COMUNE: "BOLTIERE"
        },
        {
            ID: "A952",
            COMUNE: "BOLZANO .BOZEN."
        },
        {
            ID: "A953",
            COMUNE: "BOLZANO NOVARESE"
        },
        {
            ID: "A954",
            COMUNE: "BOLZANO VICENTINO"
        },
        {
            ID: "A955",
            COMUNE: "BOMARZO"
        },
        {
            ID: "A956",
            COMUNE: "BOMBA"
        },
        {
            ID: "A957",
            COMUNE: "BOMPENSIERE"
        },
        {
            ID: "A958",
            COMUNE: "BOMPIETRO"
        },
        {
            ID: "A959",
            COMUNE: "BOMPORTO"
        },
        {
            ID: "A960",
            COMUNE: "BONARCADO"
        },
        {
            ID: "A961",
            COMUNE: "BONASSOLA"
        },
        {
            ID: "A963",
            COMUNE: "BONATE SOPRA"
        },
        {
            ID: "A962",
            COMUNE: "BONATE SOTTO"
        },
        {
            ID: "A964",
            COMUNE: "BONAVIGO"
        },
        {
            ID: "A965",
            COMUNE: "BONDENO"
        },
        {
            ID: "A967",
            COMUNE: "BONDO"
        },
        {
            ID: "A968",
            COMUNE: "BONDONE"
        },
        {
            ID: "A970",
            COMUNE: "BONEA"
        },
        {
            ID: "A971",
            COMUNE: "BONEFRO"
        },
        {
            ID: "A972",
            COMUNE: "BONEMERSE"
        },
        {
            ID: "A973",
            COMUNE: "BONIFATI"
        },
        {
            ID: "A975",
            COMUNE: "BONITO"
        },
        {
            ID: "A976",
            COMUNE: "BONNANARO"
        },
        {
            ID: "A977",
            COMUNE: "BONO"
        },
        {
            ID: "A978",
            COMUNE: "BONORVA"
        },
        {
            ID: "A979",
            COMUNE: "BONVICINO"
        },
        {
            ID: "A981",
            COMUNE: "BORBONA"
        },
        {
            ID: "A982",
            COMUNE: "BORCA DI CADORE"
        },
        {
            ID: "A983",
            COMUNE: "BORDANO"
        },
        {
            ID: "A984",
            COMUNE: "BORDIGHERA"
        },
        {
            ID: "A986",
            COMUNE: "BORDOLANO"
        },
        {
            ID: "A987",
            COMUNE: "BORE"
        },
        {
            ID: "A988",
            COMUNE: "BORETTO"
        },
        {
            ID: "A989",
            COMUNE: "BORGARELLO"
        },
        {
            ID: "A990",
            COMUNE: "BORGARO TORINESE"
        },
        {
            ID: "A991",
            COMUNE: "BORGETTO"
        },
        {
            ID: "A993",
            COMUNE: "BORGHETTO D'ARROSCIA"
        },
        {
            ID: "A998",
            COMUNE: "BORGHETTO DI BORBERA"
        },
        {
            ID: "A992",
            COMUNE: "BORGHETTO DI VARA"
        },
        {
            ID: "A995",
            COMUNE: "BORGHETTO LODIGIANO"
        },
        {
            ID: "A999",
            COMUNE: "BORGHETTO SANTO SPIRITO"
        },
        {
            ID: "B001",
            COMUNE: "BORGHI"
        },
        {
            ID: "B002",
            COMUNE: "BORGIA"
        },
        {
            ID: "B003",
            COMUNE: "BORGIALLO"
        },
        {
            ID: "B005",
            COMUNE: "BORGIO VEREZZI"
        },
        {
            ID: "B007",
            COMUNE: "BORGO A MOZZANO"
        },
        {
            ID: "M352",
            COMUNE: "BORGO CHIESE"
        },
        {
            ID: "B009",
            COMUNE: "BORGO D'ALE"
        },
        {
            ID: "M429",
            COMUNE: "BORGO D'ANAUNIA"
        },
        {
            ID: "B010",
            COMUNE: "BORGO DI TERZO"
        },
        {
            ID: "M353",
            COMUNE: "BORGO LARES"
        },
        {
            ID: "M396",
            COMUNE: "BORGO MANTOVANO"
        },
        {
            ID: "B026",
            COMUNE: "BORGO PACE"
        },
        {
            ID: "B028",
            COMUNE: "BORGO PRIOLO"
        },
        {
            ID: "B033",
            COMUNE: "BORGO SAN DALMAZZO"
        },
        {
            ID: "B035",
            COMUNE: "BORGO SAN GIACOMO"
        },
        {
            ID: "B017",
            COMUNE: "BORGO SAN GIOVANNI"
        },
        {
            ID: "B036",
            COMUNE: "BORGO SAN LORENZO"
        },
        {
            ID: "B037",
            COMUNE: "BORGO SAN MARTINO"
        },
        {
            ID: "B038",
            COMUNE: "BORGO SAN SIRO"
        },
        {
            ID: "B043",
            COMUNE: "BORGO TICINO"
        },
        {
            ID: "B044",
            COMUNE: "BORGO TOSSIGNANO"
        },
        {
            ID: "B042",
            COMUNE: "BORGO VAL DI TARO"
        },
        {
            ID: "M421",
            COMUNE: "BORGO VALBELLUNA"
        },
        {
            ID: "B006",
            COMUNE: "BORGO VALSUGANA"
        },
        {
            ID: "A996",
            COMUNE: "BORGO VELINO"
        },
        {
            ID: "M402",
            COMUNE: "BORGO VENETO"
        },
        {
            ID: "B046",
            COMUNE: "BORGO VERCELLI"
        },
        {
            ID: "M340",
            COMUNE: "BORGO VIRGILIO"
        },
        {
            ID: "M406",
            COMUNE: "BORGOCARBONARA"
        },
        {
            ID: "B011",
            COMUNE: "BORGOFORTE"
        },
        {
            ID: "B015",
            COMUNE: "BORGOFRANCO D'IVREA"
        },
        {
            ID: "B013",
            COMUNE: "BORGOFRANCO SUL PO"
        },
        {
            ID: "B016",
            COMUNE: "BORGOLAVEZZARO"
        },
        {
            ID: "B018",
            COMUNE: "BORGOMALE"
        },
        {
            ID: "B019",
            COMUNE: "BORGOMANERO"
        },
        {
            ID: "B020",
            COMUNE: "BORGOMARO"
        },
        {
            ID: "B021",
            COMUNE: "BORGOMASINO"
        },
        {
            ID: "M370",
            COMUNE: "BORGOMEZZAVALLE"
        },
        {
            ID: "B024",
            COMUNE: "BORGONE SUSA"
        },
        {
            ID: "B025",
            COMUNE: "BORGONOVO VAL TIDONE"
        },
        {
            ID: "B029",
            COMUNE: "BORGORATTO ALESSANDRINO"
        },
        {
            ID: "B030",
            COMUNE: "BORGORATTO MORMOROLO"
        },
        {
            ID: "B031",
            COMUNE: "BORGORICCO"
        },
        {
            ID: "B008",
            COMUNE: "BORGOROSE"
        },
        {
            ID: "B040",
            COMUNE: "BORGOSATOLLO"
        },
        {
            ID: "B041",
            COMUNE: "BORGOSESIA"
        },
        {
            ID: "B048",
            COMUNE: "BORMIDA"
        },
        {
            ID: "B049",
            COMUNE: "BORMIO"
        },
        {
            ID: "B051",
            COMUNE: "BORNASCO"
        },
        {
            ID: "B054",
            COMUNE: "BORNO"
        },
        {
            ID: "B055",
            COMUNE: "BORONEDDU"
        },
        {
            ID: "B056",
            COMUNE: "BORORE"
        },
        {
            ID: "B057",
            COMUNE: "BORRELLO"
        },
        {
            ID: "B058",
            COMUNE: "BORRIANA"
        },
        {
            ID: "B061",
            COMUNE: "BORSO DEL GRAPPA"
        },
        {
            ID: "B062",
            COMUNE: "BORTIGALI"
        },
        {
            ID: "B063",
            COMUNE: "BORTIGIADAS"
        },
        {
            ID: "B064",
            COMUNE: "BORUTTA"
        },
        {
            ID: "B067",
            COMUNE: "BORZONASCA"
        },
        {
            ID: "B068",
            COMUNE: "BOSA"
        },
        {
            ID: "B069",
            COMUNE: "BOSARO"
        },
        {
            ID: "B070",
            COMUNE: "BOSCHI SANT'ANNA"
        },
        {
            ID: "B073",
            COMUNE: "BOSCO CHIESANUOVA"
        },
        {
            ID: "B071",
            COMUNE: "BOSCO MARENGO"
        },
        {
            ID: "B075",
            COMUNE: "BOSCONERO"
        },
        {
            ID: "B076",
            COMUNE: "BOSCOREALE"
        },
        {
            ID: "B077",
            COMUNE: "BOSCOTRECASE"
        },
        {
            ID: "B078",
            COMUNE: "BOSENTINO"
        },
        {
            ID: "B079",
            COMUNE: "BOSIA"
        },
        {
            ID: "B080",
            COMUNE: "BOSIO"
        },
        {
            ID: "B081",
            COMUNE: "BOSISIO PARINI"
        },
        {
            ID: "B082",
            COMUNE: "BOSNASCO"
        },
        {
            ID: "B083",
            COMUNE: "BOSSICO"
        },
        {
            ID: "B084",
            COMUNE: "BOSSOLASCO"
        },
        {
            ID: "B085",
            COMUNE: "BOTRICELLO"
        },
        {
            ID: "B086",
            COMUNE: "BOTRUGNO"
        },
        {
            ID: "B088",
            COMUNE: "BOTTANUCO"
        },
        {
            ID: "B091",
            COMUNE: "BOTTICINO"
        },
        {
            ID: "B094",
            COMUNE: "BOTTIDDA"
        },
        {
            ID: "B097",
            COMUNE: "BOVA"
        },
        {
            ID: "B099",
            COMUNE: "BOVA MARINA"
        },
        {
            ID: "B098",
            COMUNE: "BOVALINO"
        },
        {
            ID: "B100",
            COMUNE: "BOVEGNO"
        },
        {
            ID: "B101",
            COMUNE: "BOVES"
        },
        {
            ID: "B102",
            COMUNE: "BOVEZZO"
        },
        {
            ID: "A720",
            COMUNE: "BOVILLE ERNICA"
        },
        {
            ID: "B104",
            COMUNE: "BOVINO"
        },
        {
            ID: "B105",
            COMUNE: "BOVISIO-MASCIAGO"
        },
        {
            ID: "B106",
            COMUNE: "BOVOLENTA"
        },
        {
            ID: "B107",
            COMUNE: "BOVOLONE"
        },
        {
            ID: "B109",
            COMUNE: "BOZZOLE"
        },
        {
            ID: "B110",
            COMUNE: "BOZZOLO"
        },
        {
            ID: "B111",
            COMUNE: "BRA"
        },
        {
            ID: "B112",
            COMUNE: "BRACCA"
        },
        {
            ID: "B114",
            COMUNE: "BRACCIANO"
        },
        {
            ID: "B115",
            COMUNE: "BRACIGLIANO"
        },
        {
            ID: "B116",
            COMUNE: "BRAIES .PRAGS."
        },
        {
            ID: "B117",
            COMUNE: "BRALLO DI PREGOLA"
        },
        {
            ID: "B118",
            COMUNE: "BRANCALEONE"
        },
        {
            ID: "B120",
            COMUNE: "BRANDICO"
        },
        {
            ID: "B121",
            COMUNE: "BRANDIZZO"
        },
        {
            ID: "B123",
            COMUNE: "BRANZI"
        },
        {
            ID: "B124",
            COMUNE: "BRAONE"
        },
        {
            ID: "B126",
            COMUNE: "BREBBIA"
        },
        {
            ID: "B128",
            COMUNE: "BREDA DI PIAVE"
        },
        {
            ID: "B131",
            COMUNE: "BREGANO"
        },
        {
            ID: "B132",
            COMUNE: "BREGANZE"
        },
        {
            ID: "B134",
            COMUNE: "BREGNANO"
        },
        {
            ID: "B135",
            COMUNE: "BREGUZZO"
        },
        {
            ID: "B136",
            COMUNE: "BREIA"
        },
        {
            ID: "B137",
            COMUNE: "BREMBATE"
        },
        {
            ID: "B138",
            COMUNE: "BREMBATE DI SOPRA"
        },
        {
            ID: "B140",
            COMUNE: "BREMBILLA"
        },
        {
            ID: "B141",
            COMUNE: "BREMBIO"
        },
        {
            ID: "B142",
            COMUNE: "BREME"
        },
        {
            ID: "B143",
            COMUNE: "BRENDOLA"
        },
        {
            ID: "B144",
            COMUNE: "BRENNA"
        },
        {
            ID: "B145",
            COMUNE: "BRENNERO .BRENNER."
        },
        {
            ID: "B149",
            COMUNE: "BRENO"
        },
        {
            ID: "B150",
            COMUNE: "BRENTA"
        },
        {
            ID: "B152",
            COMUNE: "BRENTINO BELLUNO"
        },
        {
            ID: "B153",
            COMUNE: "BRENTONICO"
        },
        {
            ID: "B154",
            COMUNE: "BRENZONE SUL GARDA"
        },
        {
            ID: "B156",
            COMUNE: "BRESCELLO"
        },
        {
            ID: "B157",
            COMUNE: "BRESCIA"
        },
        {
            ID: "B158",
            COMUNE: "BRESIMO"
        },
        {
            ID: "B159",
            COMUNE: "BRESSANA BOTTARONE"
        },
        {
            ID: "B160",
            COMUNE: "BRESSANONE .BRIXEN."
        },
        {
            ID: "B161",
            COMUNE: "BRESSANVIDO"
        },
        {
            ID: "B162",
            COMUNE: "BRESSO"
        },
        {
            ID: "B165",
            COMUNE: "BREZ"
        },
        {
            ID: "B166",
            COMUNE: "BREZZO DI BEDERO"
        },
        {
            ID: "B167",
            COMUNE: "BRIAGLIA"
        },
        {
            ID: "B169",
            COMUNE: "BRIATICO"
        },
        {
            ID: "B171",
            COMUNE: "BRICHERASIO"
        },
        {
            ID: "B172",
            COMUNE: "BRIENNO"
        },
        {
            ID: "B173",
            COMUNE: "BRIENZA"
        },
        {
            ID: "B175",
            COMUNE: "BRIGA ALTA"
        },
        {
            ID: "B176",
            COMUNE: "BRIGA NOVARESE"
        },
        {
            ID: "B178",
            COMUNE: "BRIGNANO GERA D'ADDA"
        },
        {
            ID: "B179",
            COMUNE: "BRIGNANO-FRASCATA"
        },
        {
            ID: "B180",
            COMUNE: "BRINDISI"
        },
        {
            ID: "B181",
            COMUNE: "BRINDISI MONTAGNA"
        },
        {
            ID: "B182",
            COMUNE: "BRINZIO"
        },
        {
            ID: "B183",
            COMUNE: "BRIONA"
        },
        {
            ID: "B184",
            COMUNE: "BRIONE"
        },
        {
            ID: "B185",
            COMUNE: "BRIONE"
        },
        {
            ID: "B187",
            COMUNE: "BRIOSCO"
        },
        {
            ID: "B188",
            COMUNE: "BRISIGHELLA"
        },
        {
            ID: "B191",
            COMUNE: "BRISSAGO-VALTRAVAGLIA"
        },
        {
            ID: "B192",
            COMUNE: "BRISSOGNE"
        },
        {
            ID: "B193",
            COMUNE: "BRITTOLI"
        },
        {
            ID: "B194",
            COMUNE: "BRIVIO"
        },
        {
            ID: "B195",
            COMUNE: "BROCCOSTELLA"
        },
        {
            ID: "B196",
            COMUNE: "BROGLIANO"
        },
        {
            ID: "B197",
            COMUNE: "BROGNATURO"
        },
        {
            ID: "B198",
            COMUNE: "BROLO"
        },
        {
            ID: "B200",
            COMUNE: "BRONDELLO"
        },
        {
            ID: "B201",
            COMUNE: "BRONI"
        },
        {
            ID: "B202",
            COMUNE: "BRONTE"
        },
        {
            ID: "B203",
            COMUNE: "BRONZOLO .BRANZOLL."
        },
        {
            ID: "B204",
            COMUNE: "BROSSASCO"
        },
        {
            ID: "B205",
            COMUNE: "BROSSO"
        },
        {
            ID: "B207",
            COMUNE: "BROVELLO-CARPUGNINO"
        },
        {
            ID: "B209",
            COMUNE: "BROZOLO"
        },
        {
            ID: "B212",
            COMUNE: "BRUGHERIO"
        },
        {
            ID: "B213",
            COMUNE: "BRUGINE"
        },
        {
            ID: "B214",
            COMUNE: "BRUGNATO"
        },
        {
            ID: "B215",
            COMUNE: "BRUGNERA"
        },
        {
            ID: "B216",
            COMUNE: "BRUINO"
        },
        {
            ID: "B217",
            COMUNE: "BRUMANO"
        },
        {
            ID: "B218",
            COMUNE: "BRUNATE"
        },
        {
            ID: "B219",
            COMUNE: "BRUNELLO"
        },
        {
            ID: "B220",
            COMUNE: "BRUNICO .BRUNECK."
        },
        {
            ID: "B221",
            COMUNE: "BRUNO"
        },
        {
            ID: "B223",
            COMUNE: "BRUSAPORTO"
        },
        {
            ID: "B225",
            COMUNE: "BRUSASCO"
        },
        {
            ID: "B227",
            COMUNE: "BRUSCIANO"
        },
        {
            ID: "B228",
            COMUNE: "BRUSIMPIANO"
        },
        {
            ID: "B229",
            COMUNE: "BRUSNENGO"
        },
        {
            ID: "B230",
            COMUNE: "BRUSSON"
        },
        {
            ID: "B232",
            COMUNE: "BRUZOLO"
        },
        {
            ID: "B234",
            COMUNE: "BRUZZANO ZEFFIRIO"
        },
        {
            ID: "B235",
            COMUNE: "BUBBIANO"
        },
        {
            ID: "B236",
            COMUNE: "BUBBIO"
        },
        {
            ID: "B237",
            COMUNE: "BUCCHERI"
        },
        {
            ID: "B238",
            COMUNE: "BUCCHIANICO"
        },
        {
            ID: "B239",
            COMUNE: "BUCCIANO"
        },
        {
            ID: "B240",
            COMUNE: "BUCCINASCO"
        },
        {
            ID: "B242",
            COMUNE: "BUCCINO"
        },
        {
            ID: "B243",
            COMUNE: "BUCINE"
        },
        {
            ID: "B246",
            COMUNE: "BUDDUSO'"
        },
        {
            ID: "B247",
            COMUNE: "BUDOIA"
        },
        {
            ID: "B248",
            COMUNE: "BUDONI"
        },
        {
            ID: "B249",
            COMUNE: "BUDRIO"
        },
        {
            ID: "B250",
            COMUNE: "BUGGERRU"
        },
        {
            ID: "B251",
            COMUNE: "BUGGIANO"
        },
        {
            ID: "B255",
            COMUNE: "BUGLIO IN MONTE"
        },
        {
            ID: "B256",
            COMUNE: "BUGNARA"
        },
        {
            ID: "B258",
            COMUNE: "BUGUGGIATE"
        },
        {
            ID: "B259",
            COMUNE: "BUJA"
        },
        {
            ID: "B261",
            COMUNE: "BULCIAGO"
        },
        {
            ID: "B262",
            COMUNE: "BULGAROGRASSO"
        },
        {
            ID: "B264",
            COMUNE: "BULTEI"
        },
        {
            ID: "B265",
            COMUNE: "BULZI"
        },
        {
            ID: "B266",
            COMUNE: "BUONABITACOLO"
        },
        {
            ID: "B267",
            COMUNE: "BUONALBERGO"
        },
        {
            ID: "B269",
            COMUNE: "BUONCONVENTO"
        },
        {
            ID: "B270",
            COMUNE: "BUONVICINO"
        },
        {
            ID: "B272",
            COMUNE: "BURAGO DI MOLGORA"
        },
        {
            ID: "B274",
            COMUNE: "BURCEI"
        },
        {
            ID: "B275",
            COMUNE: "BURGIO"
        },
        {
            ID: "B276",
            COMUNE: "BURGOS"
        },
        {
            ID: "B278",
            COMUNE: "BURIASCO"
        },
        {
            ID: "B279",
            COMUNE: "BUROLO"
        },
        {
            ID: "B280",
            COMUNE: "BURONZO"
        },
        {
            ID: "B281",
            COMUNE: "BUSACHI"
        },
        {
            ID: "B282",
            COMUNE: "BUSALLA"
        },
        {
            ID: "B283",
            COMUNE: "BUSANA"
        },
        {
            ID: "B284",
            COMUNE: "BUSANO"
        },
        {
            ID: "B285",
            COMUNE: "BUSCA"
        },
        {
            ID: "B286",
            COMUNE: "BUSCATE"
        },
        {
            ID: "B287",
            COMUNE: "BUSCEMI"
        },
        {
            ID: "B288",
            COMUNE: "BUSETO PALIZZOLO"
        },
        {
            ID: "B289",
            COMUNE: "BUSNAGO"
        },
        {
            ID: "B292",
            COMUNE: "BUSSERO"
        },
        {
            ID: "B293",
            COMUNE: "BUSSETO"
        },
        {
            ID: "B294",
            COMUNE: "BUSSI SUL TIRINO"
        },
        {
            ID: "B295",
            COMUNE: "BUSSO"
        },
        {
            ID: "B296",
            COMUNE: "BUSSOLENGO"
        },
        {
            ID: "B297",
            COMUNE: "BUSSOLENO"
        },
        {
            ID: "B300",
            COMUNE: "BUSTO ARSIZIO"
        },
        {
            ID: "B301",
            COMUNE: "BUSTO GAROLFO"
        },
        {
            ID: "B302",
            COMUNE: "BUTERA"
        },
        {
            ID: "B303",
            COMUNE: "BUTI"
        },
        {
            ID: "B304",
            COMUNE: "BUTTAPIETRA"
        },
        {
            ID: "B305",
            COMUNE: "BUTTIGLIERA ALTA"
        },
        {
            ID: "B306",
            COMUNE: "BUTTIGLIERA D'ASTI"
        },
        {
            ID: "B309",
            COMUNE: "BUTTRIO"
        },
        {
            ID: "G207",
            COMUNE: "PABILLONIS"
        },
        {
            ID: "G209",
            COMUNE: "PACE DEL MELA"
        },
        {
            ID: "G208",
            COMUNE: "PACECO"
        },
        {
            ID: "G210",
            COMUNE: "PACENTRO"
        },
        {
            ID: "G211",
            COMUNE: "PACHINO"
        },
        {
            ID: "G212",
            COMUNE: "PACIANO"
        },
        {
            ID: "G213",
            COMUNE: "PADENGHE SUL GARDA"
        },
        {
            ID: "G214",
            COMUNE: "PADERGNONE"
        },
        {
            ID: "G215",
            COMUNE: "PADERNA"
        },
        {
            ID: "G218",
            COMUNE: "PADERNO D'ADDA"
        },
        {
            ID: "G221",
            COMUNE: "PADERNO DEL GRAPPA"
        },
        {
            ID: "G220",
            COMUNE: "PADERNO DUGNANO"
        },
        {
            ID: "G217",
            COMUNE: "PADERNO FRANCIACORTA"
        },
        {
            ID: "G222",
            COMUNE: "PADERNO PONCHIELLI"
        },
        {
            ID: "G224",
            COMUNE: "PADOVA"
        },
        {
            ID: "G225",
            COMUNE: "PADRIA"
        },
        {
            ID: "M301",
            COMUNE: "PADRU"
        },
        {
            ID: "G226",
            COMUNE: "PADULA"
        },
        {
            ID: "G227",
            COMUNE: "PADULI"
        },
        {
            ID: "G228",
            COMUNE: "PAESANA"
        },
        {
            ID: "G229",
            COMUNE: "PAESE"
        },
        {
            ID: "G230",
            COMUNE: "PAGANI"
        },
        {
            ID: "G232",
            COMUNE: "PAGANICO SABINO"
        },
        {
            ID: "G233",
            COMUNE: "PAGAZZANO"
        },
        {
            ID: "G234",
            COMUNE: "PAGLIARA"
        },
        {
            ID: "G237",
            COMUNE: "PAGLIETA"
        },
        {
            ID: "G238",
            COMUNE: "PAGNACCO"
        },
        {
            ID: "G240",
            COMUNE: "PAGNO"
        },
        {
            ID: "G241",
            COMUNE: "PAGNONA"
        },
        {
            ID: "G242",
            COMUNE: "PAGO DEL VALLO DI LAURO"
        },
        {
            ID: "G243",
            COMUNE: "PAGO VEIANO"
        },
        {
            ID: "G247",
            COMUNE: "PAISCO LOVENO"
        },
        {
            ID: "G248",
            COMUNE: "PAITONE"
        },
        {
            ID: "G249",
            COMUNE: "PALADINA"
        },
        {
            ID: "G250",
            COMUNE: "PALAGANO"
        },
        {
            ID: "G251",
            COMUNE: "PALAGIANELLO"
        },
        {
            ID: "G252",
            COMUNE: "PALAGIANO"
        },
        {
            ID: "G253",
            COMUNE: "PALAGONIA"
        },
        {
            ID: "G254",
            COMUNE: "PALAIA"
        },
        {
            ID: "G255",
            COMUNE: "PALANZANO"
        },
        {
            ID: "G257",
            COMUNE: "PALATA"
        },
        {
            ID: "G258",
            COMUNE: "PALAU"
        },
        {
            ID: "G259",
            COMUNE: "PALAZZAGO"
        },
        {
            ID: "G263",
            COMUNE: "PALAZZO ADRIANO"
        },
        {
            ID: "G262",
            COMUNE: "PALAZZO CANAVESE"
        },
        {
            ID: "G260",
            COMUNE: "PALAZZO PIGNANO"
        },
        {
            ID: "G261",
            COMUNE: "PALAZZO SAN GERVASIO"
        },
        {
            ID: "G267",
            COMUNE: "PALAZZOLO ACREIDE"
        },
        {
            ID: "G268",
            COMUNE: "PALAZZOLO DELLO STELLA"
        },
        {
            ID: "G264",
            COMUNE: "PALAZZOLO SULL'OGLIO"
        },
        {
            ID: "G266",
            COMUNE: "PALAZZOLO VERCELLESE"
        },
        {
            ID: "G270",
            COMUNE: "PALAZZUOLO SUL SENIO"
        },
        {
            ID: "G271",
            COMUNE: "PALENA"
        },
        {
            ID: "G272",
            COMUNE: "PALERMITI"
        },
        {
            ID: "G273",
            COMUNE: "PALERMO"
        },
        {
            ID: "G274",
            COMUNE: "PALESTRINA"
        },
        {
            ID: "G275",
            COMUNE: "PALESTRO"
        },
        {
            ID: "G276",
            COMUNE: "PALIANO"
        },
        {
            ID: "G277",
            COMUNE: "PALIZZI"
        },
        {
            ID: "G278",
            COMUNE: "PALLAGORIO"
        },
        {
            ID: "G280",
            COMUNE: "PALLANZENO"
        },
        {
            ID: "G281",
            COMUNE: "PALLARE"
        },
        {
            ID: "G283",
            COMUNE: "PALMA CAMPANIA"
        },
        {
            ID: "G282",
            COMUNE: "PALMA DI MONTECHIARO"
        },
        {
            ID: "G284",
            COMUNE: "PALMANOVA"
        },
        {
            ID: "G285",
            COMUNE: "PALMARIGGI"
        },
        {
            ID: "G286",
            COMUNE: "PALMAS ARBOREA"
        },
        {
            ID: "G288",
            COMUNE: "PALMI"
        },
        {
            ID: "G289",
            COMUNE: "PALMIANO"
        },
        {
            ID: "G290",
            COMUNE: "PALMOLI"
        },
        {
            ID: "G291",
            COMUNE: "PALO DEL COLLE"
        },
        {
            ID: "G293",
            COMUNE: "PALOMBARA SABINA"
        },
        {
            ID: "G294",
            COMUNE: "PALOMBARO"
        },
        {
            ID: "G292",
            COMUNE: "PALOMONTE"
        },
        {
            ID: "G295",
            COMUNE: "PALOSCO"
        },
        {
            ID: "G297",
            COMUNE: "PALU'"
        },
        {
            ID: "G296",
            COMUNE: "PALU' DEL FERSINA"
        },
        {
            ID: "G298",
            COMUNE: "PALUDI"
        },
        {
            ID: "G300",
            COMUNE: "PALUZZA"
        },
        {
            ID: "G302",
            COMUNE: "PAMPARATO"
        },
        {
            ID: "G303",
            COMUNE: "PANCALIERI"
        },
        {
            ID: "G304",
            COMUNE: "PANCARANA"
        },
        {
            ID: "G305",
            COMUNE: "PANCHIA'"
        },
        {
            ID: "G306",
            COMUNE: "PANDINO"
        },
        {
            ID: "G307",
            COMUNE: "PANETTIERI"
        },
        {
            ID: "G308",
            COMUNE: "PANICALE"
        },
        {
            ID: "G311",
            COMUNE: "PANNARANO"
        },
        {
            ID: "G312",
            COMUNE: "PANNI"
        },
        {
            ID: "G315",
            COMUNE: "PANTELLERIA"
        },
        {
            ID: "G316",
            COMUNE: "PANTIGLIATE"
        },
        {
            ID: "G317",
            COMUNE: "PAOLA"
        },
        {
            ID: "G318",
            COMUNE: "PAOLISI"
        },
        {
            ID: "G320",
            COMUNE: "PAPASIDERO"
        },
        {
            ID: "G323",
            COMUNE: "PAPOZZE"
        },
        {
            ID: "G324",
            COMUNE: "PARABIAGO"
        },
        {
            ID: "G325",
            COMUNE: "PARABITA"
        },
        {
            ID: "G327",
            COMUNE: "PARATICO"
        },
        {
            ID: "G328",
            COMUNE: "PARCINES .PARTSCHINS."
        },
        {
            ID: "G329",
            COMUNE: "PARE'"
        },
        {
            ID: "G330",
            COMUNE: "PARELLA"
        },
        {
            ID: "G331",
            COMUNE: "PARENTI"
        },
        {
            ID: "G333",
            COMUNE: "PARETE"
        },
        {
            ID: "G334",
            COMUNE: "PARETO"
        },
        {
            ID: "G335",
            COMUNE: "PARGHELIA"
        },
        {
            ID: "G336",
            COMUNE: "PARLASCO"
        },
        {
            ID: "G337",
            COMUNE: "PARMA"
        },
        {
            ID: "G338",
            COMUNE: "PARODI LIGURE"
        },
        {
            ID: "G339",
            COMUNE: "PAROLDO"
        },
        {
            ID: "G340",
            COMUNE: "PAROLISE"
        },
        {
            ID: "G342",
            COMUNE: "PARONA"
        },
        {
            ID: "G344",
            COMUNE: "PARRANO"
        },
        {
            ID: "G346",
            COMUNE: "PARRE"
        },
        {
            ID: "G347",
            COMUNE: "PARTANNA"
        },
        {
            ID: "G348",
            COMUNE: "PARTINICO"
        },
        {
            ID: "G349",
            COMUNE: "PARUZZARO"
        },
        {
            ID: "G350",
            COMUNE: "PARZANICA"
        },
        {
            ID: "G352",
            COMUNE: "PASIAN DI PRATO"
        },
        {
            ID: "G353",
            COMUNE: "PASIANO DI PORDENONE"
        },
        {
            ID: "G354",
            COMUNE: "PASPARDO"
        },
        {
            ID: "G358",
            COMUNE: "PASSERANO MARMORITO"
        },
        {
            ID: "G359",
            COMUNE: "PASSIGNANO SUL TRASIMENO"
        },
        {
            ID: "G361",
            COMUNE: "PASSIRANO"
        },
        {
            ID: "G362",
            COMUNE: "PASTENA"
        },
        {
            ID: "G364",
            COMUNE: "PASTORANO"
        },
        {
            ID: "G365",
            COMUNE: "PASTRENGO"
        },
        {
            ID: "G367",
            COMUNE: "PASTURANA"
        },
        {
            ID: "G368",
            COMUNE: "PASTURO"
        },
        {
            ID: "G371",
            COMUNE: "PATERNO'"
        },
        {
            ID: "M269",
            COMUNE: "PATERNO"
        },
        {
            ID: "G372",
            COMUNE: "PATERNO CALABRO"
        },
        {
            ID: "G370",
            COMUNE: "PATERNOPOLI"
        },
        {
            ID: "G374",
            COMUNE: "PATRICA"
        },
        {
            ID: "G376",
            COMUNE: "PATTADA"
        },
        {
            ID: "G377",
            COMUNE: "PATTI"
        },
        {
            ID: "G378",
            COMUNE: "PATU'"
        },
        {
            ID: "G379",
            COMUNE: "PAU"
        },
        {
            ID: "G381",
            COMUNE: "PAULARO"
        },
        {
            ID: "G382",
            COMUNE: "PAULI ARBAREI"
        },
        {
            ID: "G384",
            COMUNE: "PAULILATINO"
        },
        {
            ID: "G385",
            COMUNE: "PAULLO"
        },
        {
            ID: "G386",
            COMUNE: "PAUPISI"
        },
        {
            ID: "G387",
            COMUNE: "PAVAROLO"
        },
        {
            ID: "G388",
            COMUNE: "PAVIA"
        },
        {
            ID: "G389",
            COMUNE: "PAVIA DI UDINE"
        },
        {
            ID: "G392",
            COMUNE: "PAVONE CANAVESE"
        },
        {
            ID: "G391",
            COMUNE: "PAVONE DEL MELLA"
        },
        {
            ID: "G393",
            COMUNE: "PAVULLO NEL FRIGNANO"
        },
        {
            ID: "G394",
            COMUNE: "PAZZANO"
        },
        {
            ID: "G395",
            COMUNE: "PECCIOLI"
        },
        {
            ID: "G396",
            COMUNE: "PECCO"
        },
        {
            ID: "G397",
            COMUNE: "PECETTO DI VALENZA"
        },
        {
            ID: "G398",
            COMUNE: "PECETTO TORINESE"
        },
        {
            ID: "G399",
            COMUNE: "PECORARA"
        },
        {
            ID: "G400",
            COMUNE: "PEDACE"
        },
        {
            ID: "G402",
            COMUNE: "PEDARA"
        },
        {
            ID: "G403",
            COMUNE: "PEDASO"
        },
        {
            ID: "G404",
            COMUNE: "PEDAVENA"
        },
        {
            ID: "G406",
            COMUNE: "PEDEMONTE"
        },
        {
            ID: "G408",
            COMUNE: "PEDEROBBA"
        },
        {
            ID: "G410",
            COMUNE: "PEDESINA"
        },
        {
            ID: "G411",
            COMUNE: "PEDIVIGLIANO"
        },
        {
            ID: "G412",
            COMUNE: "PEDRENGO"
        },
        {
            ID: "G415",
            COMUNE: "PEGLIO"
        },
        {
            ID: "G416",
            COMUNE: "PEGLIO"
        },
        {
            ID: "G417",
            COMUNE: "PEGOGNAGA"
        },
        {
            ID: "G418",
            COMUNE: "PEIA"
        },
        {
            ID: "G419",
            COMUNE: "PEIO"
        },
        {
            ID: "G420",
            COMUNE: "PELAGO"
        },
        {
            ID: "G421",
            COMUNE: "PELLA"
        },
        {
            ID: "G424",
            COMUNE: "PELLEGRINO PARMENSE"
        },
        {
            ID: "G426",
            COMUNE: "PELLEZZANO"
        },
        {
            ID: "G427",
            COMUNE: "PELLIO INTELVI"
        },
        {
            ID: "G428",
            COMUNE: "PELLIZZANO"
        },
        {
            ID: "G429",
            COMUNE: "PELUGO"
        },
        {
            ID: "G430",
            COMUNE: "PENANGO"
        },
        {
            ID: "G432",
            COMUNE: "PENNA IN TEVERINA"
        },
        {
            ID: "G436",
            COMUNE: "PENNA SAN GIOVANNI"
        },
        {
            ID: "G437",
            COMUNE: "PENNA SANT'ANDREA"
        },
        {
            ID: "G433",
            COMUNE: "PENNABILLI"
        },
        {
            ID: "G434",
            COMUNE: "PENNADOMO"
        },
        {
            ID: "G435",
            COMUNE: "PENNAPIEDIMONTE"
        },
        {
            ID: "G438",
            COMUNE: "PENNE"
        },
        {
            ID: "G439",
            COMUNE: "PENTONE"
        },
        {
            ID: "G441",
            COMUNE: "PERANO"
        },
        {
            ID: "G442",
            COMUNE: "PERAROLO DI CADORE"
        },
        {
            ID: "G443",
            COMUNE: "PERCA .PERCHA."
        },
        {
            ID: "G444",
            COMUNE: "PERCILE"
        },
        {
            ID: "G445",
            COMUNE: "PERDASDEFOGU"
        },
        {
            ID: "G446",
            COMUNE: "PERDAXIUS"
        },
        {
            ID: "G447",
            COMUNE: "PERDIFUMO"
        },
        {
            ID: "G448",
            COMUNE: "PEREGO"
        },
        {
            ID: "G449",
            COMUNE: "PERETO"
        },
        {
            ID: "G450",
            COMUNE: "PERFUGAS"
        },
        {
            ID: "G451",
            COMUNE: "PERGINE VALDARNO"
        },
        {
            ID: "G452",
            COMUNE: "PERGINE VALSUGANA"
        },
        {
            ID: "G453",
            COMUNE: "PERGOLA"
        },
        {
            ID: "G454",
            COMUNE: "PERINALDO"
        },
        {
            ID: "G455",
            COMUNE: "PERITO"
        },
        {
            ID: "G456",
            COMUNE: "PERLEDO"
        },
        {
            ID: "G457",
            COMUNE: "PERLETTO"
        },
        {
            ID: "G458",
            COMUNE: "PERLO"
        },
        {
            ID: "G459",
            COMUNE: "PERLOZ"
        },
        {
            ID: "G461",
            COMUNE: "PERNUMIA"
        },
        {
            ID: "C013",
            COMUNE: "PERO"
        },
        {
            ID: "G463",
            COMUNE: "PEROSA ARGENTINA"
        },
        {
            ID: "G462",
            COMUNE: "PEROSA CANAVESE"
        },
        {
            ID: "G465",
            COMUNE: "PERRERO"
        },
        {
            ID: "G469",
            COMUNE: "PERSICO DOSIMO"
        },
        {
            ID: "G471",
            COMUNE: "PERTENGO"
        },
        {
            ID: "G474",
            COMUNE: "PERTICA ALTA"
        },
        {
            ID: "G475",
            COMUNE: "PERTICA BASSA"
        },
        {
            ID: "G476",
            COMUNE: "PERTOSA"
        },
        {
            ID: "G477",
            COMUNE: "PERTUSIO"
        },
        {
            ID: "G478",
            COMUNE: "PERUGIA"
        },
        {
            ID: "G479",
            COMUNE: "PESARO"
        },
        {
            ID: "G480",
            COMUNE: "PESCAGLIA"
        },
        {
            ID: "G481",
            COMUNE: "PESCANTINA"
        },
        {
            ID: "G482",
            COMUNE: "PESCARA"
        },
        {
            ID: "G483",
            COMUNE: "PESCAROLO ED UNITI"
        },
        {
            ID: "G484",
            COMUNE: "PESCASSEROLI"
        },
        {
            ID: "G485",
            COMUNE: "PESCATE"
        },
        {
            ID: "G486",
            COMUNE: "PESCHE"
        },
        {
            ID: "G487",
            COMUNE: "PESCHICI"
        },
        {
            ID: "G488",
            COMUNE: "PESCHIERA BORROMEO"
        },
        {
            ID: "G489",
            COMUNE: "PESCHIERA DEL GARDA"
        },
        {
            ID: "G491",
            COMUNE: "PESCIA"
        },
        {
            ID: "G492",
            COMUNE: "PESCINA"
        },
        {
            ID: "G494",
            COMUNE: "PESCO SANNITA"
        },
        {
            ID: "G493",
            COMUNE: "PESCOCOSTANZO"
        },
        {
            ID: "G495",
            COMUNE: "PESCOLANCIANO"
        },
        {
            ID: "G496",
            COMUNE: "PESCOPAGANO"
        },
        {
            ID: "G497",
            COMUNE: "PESCOPENNATARO"
        },
        {
            ID: "G498",
            COMUNE: "PESCOROCCHIANO"
        },
        {
            ID: "G499",
            COMUNE: "PESCOSANSONESCO"
        },
        {
            ID: "G500",
            COMUNE: "PESCOSOLIDO"
        },
        {
            ID: "G502",
            COMUNE: "PESSANO CON BORNAGO"
        },
        {
            ID: "G504",
            COMUNE: "PESSINA CREMONESE"
        },
        {
            ID: "G505",
            COMUNE: "PESSINETTO"
        },
        {
            ID: "G506",
            COMUNE: "PETACCIATO"
        },
        {
            ID: "G508",
            COMUNE: "PETILIA POLICASTRO"
        },
        {
            ID: "G509",
            COMUNE: "PETINA"
        },
        {
            ID: "G510",
            COMUNE: "PETRALIA SOPRANA"
        },
        {
            ID: "G511",
            COMUNE: "PETRALIA SOTTANA"
        },
        {
            ID: "G513",
            COMUNE: "PETRELLA SALTO"
        },
        {
            ID: "G512",
            COMUNE: "PETRELLA TIFERNINA"
        },
        {
            ID: "G514",
            COMUNE: "PETRIANO"
        },
        {
            ID: "G515",
            COMUNE: "PETRIOLO"
        },
        {
            ID: "G516",
            COMUNE: "PETRITOLI"
        },
        {
            ID: "G517",
            COMUNE: "PETRIZZI"
        },
        {
            ID: "G518",
            COMUNE: "PETRONA'"
        },
        {
            ID: "M281",
            COMUNE: "PETROSINO"
        },
        {
            ID: "G519",
            COMUNE: "PETRURO IRPINO"
        },
        {
            ID: "G520",
            COMUNE: "PETTENASCO"
        },
        {
            ID: "G521",
            COMUNE: "PETTINENGO"
        },
        {
            ID: "G522",
            COMUNE: "PETTINEO"
        },
        {
            ID: "G523",
            COMUNE: "PETTORANELLO DEL MOLISE"
        },
        {
            ID: "G524",
            COMUNE: "PETTORANO SUL GIZIO"
        },
        {
            ID: "G525",
            COMUNE: "PETTORAZZA GRIMANI"
        },
        {
            ID: "G526",
            COMUNE: "PEVERAGNO"
        },
        {
            ID: "G528",
            COMUNE: "PEZZANA"
        },
        {
            ID: "G529",
            COMUNE: "PEZZAZE"
        },
        {
            ID: "G532",
            COMUNE: "PEZZOLO VALLE UZZONE"
        },
        {
            ID: "G535",
            COMUNE: "PIACENZA"
        },
        {
            ID: "G534",
            COMUNE: "PIACENZA D'ADIGE"
        },
        {
            ID: "G536",
            COMUNE: "PIADENA"
        },
        {
            ID: "M418",
            COMUNE: "PIADENA DRIZZONA"
        },
        {
            ID: "G537",
            COMUNE: "PIAGGE"
        },
        {
            ID: "G538",
            COMUNE: "PIAGGINE"
        },
        {
            ID: "G546",
            COMUNE: "PIAN CAMUNO"
        },
        {
            ID: "G552",
            COMUNE: "PIAN DI SCO"
        },
        {
            ID: "G542",
            COMUNE: "PIANA CRIXIA"
        },
        {
            ID: "G543",
            COMUNE: "PIANA DEGLI ALBANESI"
        },
        {
            ID: "G541",
            COMUNE: "PIANA DI MONTE VERNA"
        },
        {
            ID: "G547",
            COMUNE: "PIANCASTAGNAIO"
        },
        {
            ID: "G549",
            COMUNE: "PIANCOGNO"
        },
        {
            ID: "G551",
            COMUNE: "PIANDIMELETO"
        },
        {
            ID: "G553",
            COMUNE: "PIANE CRATI"
        },
        {
            ID: "G555",
            COMUNE: "PIANELLA"
        },
        {
            ID: "G556",
            COMUNE: "PIANELLO DEL LARIO"
        },
        {
            ID: "G557",
            COMUNE: "PIANELLO VAL TIDONE"
        },
        {
            ID: "G558",
            COMUNE: "PIANENGO"
        },
        {
            ID: "G559",
            COMUNE: "PIANEZZA"
        },
        {
            ID: "G560",
            COMUNE: "PIANEZZE"
        },
        {
            ID: "G561",
            COMUNE: "PIANFEI"
        },
        {
            ID: "G564",
            COMUNE: "PIANICO"
        },
        {
            ID: "G565",
            COMUNE: "PIANIGA"
        },
        {
            ID: "G568",
            COMUNE: "PIANO DI SORRENTO"
        },
        {
            ID: "D546",
            COMUNE: "PIANOPOLI"
        },
        {
            ID: "G570",
            COMUNE: "PIANORO"
        },
        {
            ID: "G571",
            COMUNE: "PIANSANO"
        },
        {
            ID: "G572",
            COMUNE: "PIANTEDO"
        },
        {
            ID: "G574",
            COMUNE: "PIARIO"
        },
        {
            ID: "G575",
            COMUNE: "PIASCO"
        },
        {
            ID: "G576",
            COMUNE: "PIATEDA"
        },
        {
            ID: "G577",
            COMUNE: "PIATTO"
        },
        {
            ID: "G582",
            COMUNE: "PIAZZA AL SERCHIO"
        },
        {
            ID: "G580",
            COMUNE: "PIAZZA ARMERINA"
        },
        {
            ID: "G579",
            COMUNE: "PIAZZA BREMBANA"
        },
        {
            ID: "G583",
            COMUNE: "PIAZZATORRE"
        },
        {
            ID: "G587",
            COMUNE: "PIAZZOLA SUL BRENTA"
        },
        {
            ID: "G588",
            COMUNE: "PIAZZOLO"
        },
        {
            ID: "G589",
            COMUNE: "PICCIANO"
        },
        {
            ID: "G590",
            COMUNE: "PICERNO"
        },
        {
            ID: "G591",
            COMUNE: "PICINISCO"
        },
        {
            ID: "G592",
            COMUNE: "PICO"
        },
        {
            ID: "G593",
            COMUNE: "PIEA"
        },
        {
            ID: "G594",
            COMUNE: "PIEDICAVALLO"
        },
        {
            ID: "G597",
            COMUNE: "PIEDIMONTE ETNEO"
        },
        {
            ID: "G596",
            COMUNE: "PIEDIMONTE MATESE"
        },
        {
            ID: "G598",
            COMUNE: "PIEDIMONTE SAN GERMANO"
        },
        {
            ID: "G600",
            COMUNE: "PIEDIMULERA"
        },
        {
            ID: "G601",
            COMUNE: "PIEGARO"
        },
        {
            ID: "G602",
            COMUNE: "PIENZA"
        },
        {
            ID: "G603",
            COMUNE: "PIERANICA"
        },
        {
            ID: "G612",
            COMUNE: "PIETRA DE' GIORGI"
        },
        {
            ID: "G605",
            COMUNE: "PIETRA LIGURE"
        },
        {
            ID: "G619",
            COMUNE: "PIETRA MARAZZI"
        },
        {
            ID: "G606",
            COMUNE: "PIETRABBONDANTE"
        },
        {
            ID: "G607",
            COMUNE: "PIETRABRUNA"
        },
        {
            ID: "G608",
            COMUNE: "PIETRACAMELA"
        },
        {
            ID: "G609",
            COMUNE: "PIETRACATELLA"
        },
        {
            ID: "G610",
            COMUNE: "PIETRACUPA"
        },
        {
            ID: "G611",
            COMUNE: "PIETRADEFUSI"
        },
        {
            ID: "G613",
            COMUNE: "PIETRAFERRAZZANA"
        },
        {
            ID: "G615",
            COMUNE: "PIETRAFITTA"
        },
        {
            ID: "G616",
            COMUNE: "PIETRAGALLA"
        },
        {
            ID: "G618",
            COMUNE: "PIETRALUNGA"
        },
        {
            ID: "G620",
            COMUNE: "PIETRAMELARA"
        },
        {
            ID: "G604",
            COMUNE: "PIETRAMONTECORVINO"
        },
        {
            ID: "G621",
            COMUNE: "PIETRANICO"
        },
        {
            ID: "G622",
            COMUNE: "PIETRAPAOLA"
        },
        {
            ID: "G623",
            COMUNE: "PIETRAPERTOSA"
        },
        {
            ID: "G624",
            COMUNE: "PIETRAPERZIA"
        },
        {
            ID: "G625",
            COMUNE: "PIETRAPORZIO"
        },
        {
            ID: "G626",
            COMUNE: "PIETRAROJA"
        },
        {
            ID: "G627",
            COMUNE: "PIETRARUBBIA"
        },
        {
            ID: "G628",
            COMUNE: "PIETRASANTA"
        },
        {
            ID: "G629",
            COMUNE: "PIETRASTORNINA"
        },
        {
            ID: "G630",
            COMUNE: "PIETRAVAIRANO"
        },
        {
            ID: "G631",
            COMUNE: "PIETRELCINA"
        },
        {
            ID: "G636",
            COMUNE: "PIEVE A NIEVOLE"
        },
        {
            ID: "G635",
            COMUNE: "PIEVE ALBIGNOLA"
        },
        {
            ID: "G638",
            COMUNE: "PIEVE D'ALPAGO"
        },
        {
            ID: "G639",
            COMUNE: "PIEVE DEL CAIRO"
        },
        {
            ID: "M422",
            COMUNE: "PIEVE DEL GRAPPA"
        },
        {
            ID: "G641",
            COMUNE: "PIEVE DI BONO"
        },
        {
            ID: "M365",
            COMUNE: "PIEVE DI BONO-PREZZO"
        },
        {
            ID: "G642",
            COMUNE: "PIEVE DI CADORE"
        },
        {
            ID: "G643",
            COMUNE: "PIEVE DI CENTO"
        },
        {
            ID: "G633",
            COMUNE: "PIEVE DI CORIANO"
        },
        {
            ID: "G644",
            COMUNE: "PIEVE DI LEDRO"
        },
        {
            ID: "G645",
            COMUNE: "PIEVE DI SOLIGO"
        },
        {
            ID: "G632",
            COMUNE: "PIEVE DI TECO"
        },
        {
            ID: "G647",
            COMUNE: "PIEVE D'OLMI"
        },
        {
            ID: "G634",
            COMUNE: "PIEVE EMANUELE"
        },
        {
            ID: "G096",
            COMUNE: "PIEVE FISSIRAGA"
        },
        {
            ID: "G648",
            COMUNE: "PIEVE FOSCIANA"
        },
        {
            ID: "G646",
            COMUNE: "PIEVE LIGURE"
        },
        {
            ID: "G650",
            COMUNE: "PIEVE PORTO MORONE"
        },
        {
            ID: "G651",
            COMUNE: "PIEVE SAN GIACOMO"
        },
        {
            ID: "G653",
            COMUNE: "PIEVE SANTO STEFANO"
        },
        {
            ID: "G656",
            COMUNE: "PIEVE TESINO"
        },
        {
            ID: "G657",
            COMUNE: "PIEVE TORINA"
        },
        {
            ID: "G658",
            COMUNE: "PIEVE VERGONTE"
        },
        {
            ID: "G637",
            COMUNE: "PIEVEBOVIGLIANA"
        },
        {
            ID: "G649",
            COMUNE: "PIEVEPELAGO"
        },
        {
            ID: "G659",
            COMUNE: "PIGLIO"
        },
        {
            ID: "G660",
            COMUNE: "PIGNA"
        },
        {
            ID: "G662",
            COMUNE: "PIGNATARO INTERAMNA"
        },
        {
            ID: "G661",
            COMUNE: "PIGNATARO MAGGIORE"
        },
        {
            ID: "G663",
            COMUNE: "PIGNOLA"
        },
        {
            ID: "G664",
            COMUNE: "PIGNONE"
        },
        {
            ID: "G665",
            COMUNE: "PIGRA"
        },
        {
            ID: "G666",
            COMUNE: "PILA"
        },
        {
            ID: "G669",
            COMUNE: "PIMENTEL"
        },
        {
            ID: "G670",
            COMUNE: "PIMONTE"
        },
        {
            ID: "G671",
            COMUNE: "PINAROLO PO"
        },
        {
            ID: "G672",
            COMUNE: "PINASCA"
        },
        {
            ID: "G673",
            COMUNE: "PINCARA"
        },
        {
            ID: "G674",
            COMUNE: "PINEROLO"
        },
        {
            ID: "F831",
            COMUNE: "PINETO"
        },
        {
            ID: "G676",
            COMUNE: "PINO D'ASTI"
        },
        {
            ID: "G677",
            COMUNE: "PINO SULLA SPONDA DEL LAGO MAGGIORE"
        },
        {
            ID: "G678",
            COMUNE: "PINO TORINESE"
        },
        {
            ID: "G680",
            COMUNE: "PINZANO AL TAGLIAMENTO"
        },
        {
            ID: "G681",
            COMUNE: "PINZOLO"
        },
        {
            ID: "G682",
            COMUNE: "PIOBBICO"
        },
        {
            ID: "G683",
            COMUNE: "PIOBESI D'ALBA"
        },
        {
            ID: "G684",
            COMUNE: "PIOBESI TORINESE"
        },
        {
            ID: "G685",
            COMUNE: "PIODE"
        },
        {
            ID: "G686",
            COMUNE: "PIOLTELLO"
        },
        {
            ID: "G687",
            COMUNE: "PIOMBINO"
        },
        {
            ID: "G688",
            COMUNE: "PIOMBINO DESE"
        },
        {
            ID: "G690",
            COMUNE: "PIORACO"
        },
        {
            ID: "G691",
            COMUNE: "PIOSSASCO"
        },
        {
            ID: "G692",
            COMUNE: "PIOVA' MASSAIA"
        },
        {
            ID: "G693",
            COMUNE: "PIOVE DI SACCO"
        },
        {
            ID: "G694",
            COMUNE: "PIOVENE ROCCHETTE"
        },
        {
            ID: "G695",
            COMUNE: "PIOVERA"
        },
        {
            ID: "G696",
            COMUNE: "PIOZZANO"
        },
        {
            ID: "G697",
            COMUNE: "PIOZZO"
        },
        {
            ID: "G699",
            COMUNE: "PIRAINO"
        },
        {
            ID: "G702",
            COMUNE: "PISA"
        },
        {
            ID: "G703",
            COMUNE: "PISANO"
        },
        {
            ID: "G705",
            COMUNE: "PISCINA"
        },
        {
            ID: "M291",
            COMUNE: "PISCINAS"
        },
        {
            ID: "G707",
            COMUNE: "PISCIOTTA"
        },
        {
            ID: "G710",
            COMUNE: "PISOGNE"
        },
        {
            ID: "G704",
            COMUNE: "PISONIANO"
        },
        {
            ID: "G712",
            COMUNE: "PISTICCI"
        },
        {
            ID: "G713",
            COMUNE: "PISTOIA"
        },
        {
            ID: "G715",
            COMUNE: "PITEGLIO"
        },
        {
            ID: "G716",
            COMUNE: "PITIGLIANO"
        },
        {
            ID: "G717",
            COMUNE: "PIUBEGA"
        },
        {
            ID: "G718",
            COMUNE: "PIURO"
        },
        {
            ID: "G719",
            COMUNE: "PIVERONE"
        },
        {
            ID: "G720",
            COMUNE: "PIZZALE"
        },
        {
            ID: "G721",
            COMUNE: "PIZZIGHETTONE"
        },
        {
            ID: "G722",
            COMUNE: "PIZZO"
        },
        {
            ID: "G724",
            COMUNE: "PIZZOFERRATO"
        },
        {
            ID: "G726",
            COMUNE: "PIZZOLI"
        },
        {
            ID: "G727",
            COMUNE: "PIZZONE"
        },
        {
            ID: "G728",
            COMUNE: "PIZZONI"
        },
        {
            ID: "G729",
            COMUNE: "PLACANICA"
        },
        {
            ID: "G733",
            COMUNE: "PLATACI"
        },
        {
            ID: "G734",
            COMUNE: "PLATANIA"
        },
        {
            ID: "G735",
            COMUNE: "PLATI'"
        },
        {
            ID: "G299",
            COMUNE: "PLAUS .PLAUS."
        },
        {
            ID: "G737",
            COMUNE: "PLESIO"
        },
        {
            ID: "G740",
            COMUNE: "PLOAGHE"
        },
        {
            ID: "G741",
            COMUNE: "PLODIO"
        },
        {
            ID: "G742",
            COMUNE: "POCAPAGLIA"
        },
        {
            ID: "G743",
            COMUNE: "POCENIA"
        },
        {
            ID: "G746",
            COMUNE: "PODENZANA"
        },
        {
            ID: "G747",
            COMUNE: "PODENZANO"
        },
        {
            ID: "G749",
            COMUNE: "POFI"
        },
        {
            ID: "G751",
            COMUNE: "POGGIARDO"
        },
        {
            ID: "G752",
            COMUNE: "POGGIBONSI"
        },
        {
            ID: "G754",
            COMUNE: "POGGIO A CAIANO"
        },
        {
            ID: "G755",
            COMUNE: "POGGIO BERNI"
        },
        {
            ID: "G756",
            COMUNE: "POGGIO BUSTONE"
        },
        {
            ID: "G757",
            COMUNE: "POGGIO CATINO"
        },
        {
            ID: "G761",
            COMUNE: "POGGIO IMPERIALE"
        },
        {
            ID: "G763",
            COMUNE: "POGGIO MIRTETO"
        },
        {
            ID: "G764",
            COMUNE: "POGGIO MOIANO"
        },
        {
            ID: "G765",
            COMUNE: "POGGIO NATIVO"
        },
        {
            ID: "G766",
            COMUNE: "POGGIO PICENZE"
        },
        {
            ID: "G768",
            COMUNE: "POGGIO RENATICO"
        },
        {
            ID: "G753",
            COMUNE: "POGGIO RUSCO"
        },
        {
            ID: "G770",
            COMUNE: "POGGIO SAN LORENZO"
        },
        {
            ID: "G771",
            COMUNE: "POGGIO SAN MARCELLO"
        },
        {
            ID: "D566",
            COMUNE: "POGGIO SAN VICINO"
        },
        {
            ID: "B317",
            COMUNE: "POGGIO SANNITA"
        },
        {
            ID: "M324",
            COMUNE: "POGGIO TORRIANA"
        },
        {
            ID: "G758",
            COMUNE: "POGGIODOMO"
        },
        {
            ID: "G760",
            COMUNE: "POGGIOFIORITO"
        },
        {
            ID: "G762",
            COMUNE: "POGGIOMARINO"
        },
        {
            ID: "G767",
            COMUNE: "POGGIOREALE"
        },
        {
            ID: "G769",
            COMUNE: "POGGIORSINI"
        },
        {
            ID: "G431",
            COMUNE: "POGGIRIDENTI"
        },
        {
            ID: "G772",
            COMUNE: "POGLIANO MILANESE"
        },
        {
            ID: "G773",
            COMUNE: "POGNANA LARIO"
        },
        {
            ID: "G774",
            COMUNE: "POGNANO"
        },
        {
            ID: "G775",
            COMUNE: "POGNO"
        },
        {
            ID: "G777",
            COMUNE: "POIRINO"
        },
        {
            ID: "G776",
            COMUNE: "POJANA MAGGIORE"
        },
        {
            ID: "G779",
            COMUNE: "POLAVENO"
        },
        {
            ID: "G780",
            COMUNE: "POLCENIGO"
        },
        {
            ID: "G782",
            COMUNE: "POLESELLA"
        },
        {
            ID: "G783",
            COMUNE: "POLESINE PARMENSE"
        },
        {
            ID: "M367",
            COMUNE: "POLESINE ZIBELLO"
        },
        {
            ID: "G784",
            COMUNE: "POLI"
        },
        {
            ID: "G785",
            COMUNE: "POLIA"
        },
        {
            ID: "G786",
            COMUNE: "POLICORO"
        },
        {
            ID: "G787",
            COMUNE: "POLIGNANO A MARE"
        },
        {
            ID: "G789",
            COMUNE: "POLINAGO"
        },
        {
            ID: "G790",
            COMUNE: "POLINO"
        },
        {
            ID: "G791",
            COMUNE: "POLISTENA"
        },
        {
            ID: "G792",
            COMUNE: "POLIZZI GENEROSA"
        },
        {
            ID: "G793",
            COMUNE: "POLLA"
        },
        {
            ID: "G794",
            COMUNE: "POLLEIN"
        },
        {
            ID: "G795",
            COMUNE: "POLLENA TROCCHIA"
        },
        {
            ID: "F567",
            COMUNE: "POLLENZA"
        },
        {
            ID: "G796",
            COMUNE: "POLLICA"
        },
        {
            ID: "G797",
            COMUNE: "POLLINA"
        },
        {
            ID: "G798",
            COMUNE: "POLLONE"
        },
        {
            ID: "G799",
            COMUNE: "POLLUTRI"
        },
        {
            ID: "G800",
            COMUNE: "POLONGHERA"
        },
        {
            ID: "G801",
            COMUNE: "POLPENAZZE DEL GARDA"
        },
        {
            ID: "G802",
            COMUNE: "POLVERARA"
        },
        {
            ID: "G803",
            COMUNE: "POLVERIGI"
        },
        {
            ID: "G804",
            COMUNE: "POMARANCE"
        },
        {
            ID: "G805",
            COMUNE: "POMARETTO"
        },
        {
            ID: "G806",
            COMUNE: "POMARICO"
        },
        {
            ID: "G807",
            COMUNE: "POMARO MONFERRATO"
        },
        {
            ID: "G808",
            COMUNE: "POMAROLO"
        },
        {
            ID: "G809",
            COMUNE: "POMBIA"
        },
        {
            ID: "G811",
            COMUNE: "POMEZIA"
        },
        {
            ID: "G812",
            COMUNE: "POMIGLIANO D'ARCO"
        },
        {
            ID: "G813",
            COMUNE: "POMPEI"
        },
        {
            ID: "G814",
            COMUNE: "POMPEIANA"
        },
        {
            ID: "G815",
            COMUNE: "POMPIANO"
        },
        {
            ID: "G816",
            COMUNE: "POMPONESCO"
        },
        {
            ID: "G817",
            COMUNE: "POMPU"
        },
        {
            ID: "G818",
            COMUNE: "PONCARALE"
        },
        {
            ID: "G820",
            COMUNE: "PONDERANO"
        },
        {
            ID: "G821",
            COMUNE: "PONNA"
        },
        {
            ID: "G822",
            COMUNE: "PONSACCO"
        },
        {
            ID: "G823",
            COMUNE: "PONSO"
        },
        {
            ID: "G826",
            COMUNE: "PONT CANAVESE"
        },
        {
            ID: "G825",
            COMUNE: "PONTASSIEVE"
        },
        {
            ID: "G545",
            COMUNE: "PONTBOSET"
        },
        {
            ID: "G827",
            COMUNE: "PONTE"
        },
        {
            ID: "G833",
            COMUNE: "PONTE BUGGIANESE"
        },
        {
            ID: "G842",
            COMUNE: "PONTE DELL'OLIO"
        },
        {
            ID: "G844",
            COMUNE: "PONTE DI LEGNO"
        },
        {
            ID: "G846",
            COMUNE: "PONTE DI PIAVE"
        },
        {
            ID: "G830",
            COMUNE: "PONTE GARDENA .WAIDBRUCK."
        },
        {
            ID: "G829",
            COMUNE: "PONTE IN VALTELLINA"
        },
        {
            ID: "G847",
            COMUNE: "PONTE LAMBRO"
        },
        {
            ID: "B662",
            COMUNE: "PONTE NELLE ALPI"
        },
        {
            ID: "G851",
            COMUNE: "PONTE NIZZA"
        },
        {
            ID: "F941",
            COMUNE: "PONTE NOSSA"
        },
        {
            ID: "G855",
            COMUNE: "PONTE SAN NICOLO'"
        },
        {
            ID: "G856",
            COMUNE: "PONTE SAN PIETRO"
        },
        {
            ID: "G831",
            COMUNE: "PONTEBBA"
        },
        {
            ID: "G834",
            COMUNE: "PONTECAGNANO FAIANO"
        },
        {
            ID: "G836",
            COMUNE: "PONTECCHIO POLESINE"
        },
        {
            ID: "G837",
            COMUNE: "PONTECHIANALE"
        },
        {
            ID: "G838",
            COMUNE: "PONTECORVO"
        },
        {
            ID: "G839",
            COMUNE: "PONTECURONE"
        },
        {
            ID: "G840",
            COMUNE: "PONTEDASSIO"
        },
        {
            ID: "G843",
            COMUNE: "PONTEDERA"
        },
        {
            ID: "G848",
            COMUNE: "PONTELANDOLFO"
        },
        {
            ID: "G849",
            COMUNE: "PONTELATONE"
        },
        {
            ID: "G850",
            COMUNE: "PONTELONGO"
        },
        {
            ID: "G852",
            COMUNE: "PONTENURE"
        },
        {
            ID: "G853",
            COMUNE: "PONTERANICA"
        },
        {
            ID: "G858",
            COMUNE: "PONTESTURA"
        },
        {
            ID: "G859",
            COMUNE: "PONTEVICO"
        },
        {
            ID: "G860",
            COMUNE: "PONTEY"
        },
        {
            ID: "G861",
            COMUNE: "PONTI"
        },
        {
            ID: "G862",
            COMUNE: "PONTI SUL MINCIO"
        },
        {
            ID: "G864",
            COMUNE: "PONTIDA"
        },
        {
            ID: "G865",
            COMUNE: "PONTINIA"
        },
        {
            ID: "G866",
            COMUNE: "PONTINVREA"
        },
        {
            ID: "G867",
            COMUNE: "PONTIROLO NUOVO"
        },
        {
            ID: "G869",
            COMUNE: "PONTOGLIO"
        },
        {
            ID: "G870",
            COMUNE: "PONTREMOLI"
        },
        {
            ID: "G854",
            COMUNE: "PONT-SAINT-MARTIN"
        },
        {
            ID: "G871",
            COMUNE: "PONZA"
        },
        {
            ID: "G873",
            COMUNE: "PONZANO DI FERMO"
        },
        {
            ID: "G872",
            COMUNE: "PONZANO MONFERRATO"
        },
        {
            ID: "G874",
            COMUNE: "PONZANO ROMANO"
        },
        {
            ID: "G875",
            COMUNE: "PONZANO VENETO"
        },
        {
            ID: "G877",
            COMUNE: "PONZONE"
        },
        {
            ID: "G878",
            COMUNE: "POPOLI"
        },
        {
            ID: "G879",
            COMUNE: "POPPI"
        },
        {
            ID: "G881",
            COMUNE: "PORANO"
        },
        {
            ID: "G882",
            COMUNE: "PORCARI"
        },
        {
            ID: "G886",
            COMUNE: "PORCIA"
        },
        {
            ID: "G888",
            COMUNE: "PORDENONE"
        },
        {
            ID: "G889",
            COMUNE: "PORLEZZA"
        },
        {
            ID: "G890",
            COMUNE: "PORNASSIO"
        },
        {
            ID: "G891",
            COMUNE: "PORPETTO"
        },
        {
            ID: "A558",
            COMUNE: "PORRETTA TERME"
        },
        {
            ID: "G894",
            COMUNE: "PORTACOMARO"
        },
        {
            ID: "G895",
            COMUNE: "PORTALBERA"
        },
        {
            ID: "G900",
            COMUNE: "PORTE"
        },
        {
            ID: "M358",
            COMUNE: "PORTE DI RENDENA"
        },
        {
            ID: "G902",
            COMUNE: "PORTICI"
        },
        {
            ID: "G903",
            COMUNE: "PORTICO DI CASERTA"
        },
        {
            ID: "G904",
            COMUNE: "PORTICO E SAN BENEDETTO"
        },
        {
            ID: "G905",
            COMUNE: "PORTIGLIOLA"
        },
        {
            ID: "E680",
            COMUNE: "PORTO AZZURRO"
        },
        {
            ID: "G906",
            COMUNE: "PORTO CERESIO"
        },
        {
            ID: "M263",
            COMUNE: "PORTO CESAREO"
        },
        {
            ID: "F299",
            COMUNE: "PORTO EMPEDOCLE"
        },
        {
            ID: "G917",
            COMUNE: "PORTO MANTOVANO"
        },
        {
            ID: "G919",
            COMUNE: "PORTO RECANATI"
        },
        {
            ID: "G920",
            COMUNE: "PORTO SAN GIORGIO"
        },
        {
            ID: "G921",
            COMUNE: "PORTO SANT'ELPIDIO"
        },
        {
            ID: "G923",
            COMUNE: "PORTO TOLLE"
        },
        {
            ID: "G924",
            COMUNE: "PORTO TORRES"
        },
        {
            ID: "G907",
            COMUNE: "PORTO VALTRAVAGLIA"
        },
        {
            ID: "G926",
            COMUNE: "PORTO VIRO"
        },
        {
            ID: "G909",
            COMUNE: "PORTOBUFFOLE'"
        },
        {
            ID: "G910",
            COMUNE: "PORTOCANNONE"
        },
        {
            ID: "G912",
            COMUNE: "PORTOFERRAIO"
        },
        {
            ID: "G913",
            COMUNE: "PORTOFINO"
        },
        {
            ID: "G914",
            COMUNE: "PORTOGRUARO"
        },
        {
            ID: "G916",
            COMUNE: "PORTOMAGGIORE"
        },
        {
            ID: "M257",
            COMUNE: "PORTOPALO DI CAPO PASSERO"
        },
        {
            ID: "G922",
            COMUNE: "PORTOSCUSO"
        },
        {
            ID: "G925",
            COMUNE: "PORTOVENERE"
        },
        {
            ID: "G927",
            COMUNE: "PORTULA"
        },
        {
            ID: "G929",
            COMUNE: "POSADA"
        },
        {
            ID: "G931",
            COMUNE: "POSINA"
        },
        {
            ID: "G932",
            COMUNE: "POSITANO"
        },
        {
            ID: "G933",
            COMUNE: "POSSAGNO"
        },
        {
            ID: "G934",
            COMUNE: "POSTA"
        },
        {
            ID: "G935",
            COMUNE: "POSTA FIBRENO"
        },
        {
            ID: "G936",
            COMUNE: "POSTAL .BURGSTALL."
        },
        {
            ID: "G937",
            COMUNE: "POSTALESIO"
        },
        {
            ID: "G939",
            COMUNE: "POSTIGLIONE"
        },
        {
            ID: "G940",
            COMUNE: "POSTUA"
        },
        {
            ID: "G942",
            COMUNE: "POTENZA"
        },
        {
            ID: "F632",
            COMUNE: "POTENZA PICENA"
        },
        {
            ID: "G943",
            COMUNE: "POVE DEL GRAPPA"
        },
        {
            ID: "G944",
            COMUNE: "POVEGLIANO"
        },
        {
            ID: "G945",
            COMUNE: "POVEGLIANO VERONESE"
        },
        {
            ID: "G947",
            COMUNE: "POVIGLIO"
        },
        {
            ID: "G949",
            COMUNE: "POVOLETTO"
        },
        {
            ID: "G950",
            COMUNE: "POZZA DI FASSA"
        },
        {
            ID: "G951",
            COMUNE: "POZZAGLIA SABINA"
        },
        {
            ID: "B914",
            COMUNE: "POZZAGLIO ED UNITI"
        },
        {
            ID: "G953",
            COMUNE: "POZZALLO"
        },
        {
            ID: "G954",
            COMUNE: "POZZILLI"
        },
        {
            ID: "G955",
            COMUNE: "POZZO D'ADDA"
        },
        {
            ID: "G960",
            COMUNE: "POZZOL GROPPO"
        },
        {
            ID: "G959",
            COMUNE: "POZZOLENGO"
        },
        {
            ID: "G957",
            COMUNE: "POZZOLEONE"
        },
        {
            ID: "G961",
            COMUNE: "POZZOLO FORMIGARO"
        },
        {
            ID: "G962",
            COMUNE: "POZZOMAGGIORE"
        },
        {
            ID: "G963",
            COMUNE: "POZZONOVO"
        },
        {
            ID: "G964",
            COMUNE: "POZZUOLI"
        },
        {
            ID: "G966",
            COMUNE: "POZZUOLO DEL FRIULI"
        },
        {
            ID: "G965",
            COMUNE: "POZZUOLO MARTESANA"
        },
        {
            ID: "G968",
            COMUNE: "PRADALUNGA"
        },
        {
            ID: "G969",
            COMUNE: "PRADAMANO"
        },
        {
            ID: "G970",
            COMUNE: "PRADLEVES"
        },
        {
            ID: "G973",
            COMUNE: "PRAGELATO"
        },
        {
            ID: "G975",
            COMUNE: "PRAIA A MARE"
        },
        {
            ID: "G976",
            COMUNE: "PRAIANO"
        },
        {
            ID: "G977",
            COMUNE: "PRALBOINO"
        },
        {
            ID: "G978",
            COMUNE: "PRALI"
        },
        {
            ID: "G979",
            COMUNE: "PRALORMO"
        },
        {
            ID: "G980",
            COMUNE: "PRALUNGO"
        },
        {
            ID: "G981",
            COMUNE: "PRAMAGGIORE"
        },
        {
            ID: "G982",
            COMUNE: "PRAMOLLO"
        },
        {
            ID: "G985",
            COMUNE: "PRAROLO"
        },
        {
            ID: "G986",
            COMUNE: "PRAROSTINO"
        },
        {
            ID: "G987",
            COMUNE: "PRASCO"
        },
        {
            ID: "G988",
            COMUNE: "PRASCORSANO"
        },
        {
            ID: "G989",
            COMUNE: "PRASO"
        },
        {
            ID: "G993",
            COMUNE: "PRATA CAMPORTACCIO"
        },
        {
            ID: "G992",
            COMUNE: "PRATA D'ANSIDONIA"
        },
        {
            ID: "G994",
            COMUNE: "PRATA DI PORDENONE"
        },
        {
            ID: "G990",
            COMUNE: "PRATA DI PRINCIPATO ULTRA"
        },
        {
            ID: "G991",
            COMUNE: "PRATA SANNITA"
        },
        {
            ID: "G995",
            COMUNE: "PRATELLA"
        },
        {
            ID: "G997",
            COMUNE: "PRATIGLIONE"
        },
        {
            ID: "G999",
            COMUNE: "PRATO"
        },
        {
            ID: "H004",
            COMUNE: "PRATO ALLO STELVIO .PRAD AM STILFSERJOCH."
        },
        {
            ID: "H002",
            COMUNE: "PRATO CARNICO"
        },
        {
            ID: "H001",
            COMUNE: "PRATO SESIA"
        },
        {
            ID: "H007",
            COMUNE: "PRATOLA PELIGNA"
        },
        {
            ID: "H006",
            COMUNE: "PRATOLA SERRA"
        },
        {
            ID: "H008",
            COMUNE: "PRATOVECCHIO"
        },
        {
            ID: "M329",
            COMUNE: "PRATOVECCHIO STIA"
        },
        {
            ID: "H010",
            COMUNE: "PRAVISDOMINI"
        },
        {
            ID: "G974",
            COMUNE: "PRAY"
        },
        {
            ID: "H011",
            COMUNE: "PRAZZO"
        },
        {
            ID: "H014",
            COMUNE: "PRECENICCO"
        },
        {
            ID: "H015",
            COMUNE: "PRECI"
        },
        {
            ID: "M344",
            COMUNE: "PREDAIA"
        },
        {
            ID: "H017",
            COMUNE: "PREDAPPIO"
        },
        {
            ID: "H018",
            COMUNE: "PREDAZZO"
        },
        {
            ID: "H019",
            COMUNE: "PREDOI .PRETTAU."
        },
        {
            ID: "H020",
            COMUNE: "PREDORE"
        },
        {
            ID: "H021",
            COMUNE: "PREDOSA"
        },
        {
            ID: "H022",
            COMUNE: "PREGANZIOL"
        },
        {
            ID: "H026",
            COMUNE: "PREGNANA MILANESE"
        },
        {
            ID: "H027",
            COMUNE: "PRELA'"
        },
        {
            ID: "H028",
            COMUNE: "PREMANA"
        },
        {
            ID: "H029",
            COMUNE: "PREMARIACCO"
        },
        {
            ID: "H030",
            COMUNE: "PREMENO"
        },
        {
            ID: "H033",
            COMUNE: "PREMIA"
        },
        {
            ID: "H034",
            COMUNE: "PREMILCUORE"
        },
        {
            ID: "H036",
            COMUNE: "PREMOLO"
        },
        {
            ID: "H037",
            COMUNE: "PREMOSELLO-CHIOVENDA"
        },
        {
            ID: "H038",
            COMUNE: "PREONE"
        },
        {
            ID: "H039",
            COMUNE: "PREORE"
        },
        {
            ID: "H040",
            COMUNE: "PREPOTTO"
        },
        {
            ID: "H042",
            COMUNE: "PRE'-SAINT-DIDIER"
        },
        {
            ID: "H043",
            COMUNE: "PRESEGLIE"
        },
        {
            ID: "H045",
            COMUNE: "PRESENZANO"
        },
        {
            ID: "H046",
            COMUNE: "PRESEZZO"
        },
        {
            ID: "H047",
            COMUNE: "PRESICCE"
        },
        {
            ID: "M428",
            COMUNE: "PRESICCE-ACQUARICA"
        },
        {
            ID: "H048",
            COMUNE: "PRESSANA"
        },
        {
            ID: "H050",
            COMUNE: "PRESTINE"
        },
        {
            ID: "H052",
            COMUNE: "PRETORO"
        },
        {
            ID: "H055",
            COMUNE: "PREVALLE"
        },
        {
            ID: "H056",
            COMUNE: "PREZZA"
        },
        {
            ID: "H057",
            COMUNE: "PREZZO"
        },
        {
            ID: "H059",
            COMUNE: "PRIERO"
        },
        {
            ID: "H062",
            COMUNE: "PRIGNANO CILENTO"
        },
        {
            ID: "H061",
            COMUNE: "PRIGNANO SULLA SECCHIA"
        },
        {
            ID: "H063",
            COMUNE: "PRIMALUNA"
        },
        {
            ID: "M359",
            COMUNE: "PRIMIERO SAN MARTINO DI CASTROZZA"
        },
        {
            ID: "H068",
            COMUNE: "PRIOCCA"
        },
        {
            ID: "H069",
            COMUNE: "PRIOLA"
        },
        {
            ID: "M279",
            COMUNE: "PRIOLO GARGALLO"
        },
        {
            ID: "G698",
            COMUNE: "PRIVERNO"
        },
        {
            ID: "H070",
            COMUNE: "PRIZZI"
        },
        {
            ID: "H071",
            COMUNE: "PROCENO"
        },
        {
            ID: "H072",
            COMUNE: "PROCIDA"
        },
        {
            ID: "H073",
            COMUNE: "PROPATA"
        },
        {
            ID: "H074",
            COMUNE: "PROSERPIO"
        },
        {
            ID: "H076",
            COMUNE: "PROSSEDI"
        },
        {
            ID: "H078",
            COMUNE: "PROVAGLIO D'ISEO"
        },
        {
            ID: "H077",
            COMUNE: "PROVAGLIO VAL SABBIA"
        },
        {
            ID: "H081",
            COMUNE: "PROVES .PROVEIS."
        },
        {
            ID: "H083",
            COMUNE: "PROVVIDENTI"
        },
        {
            ID: "H085",
            COMUNE: "PRUNETTO"
        },
        {
            ID: "H086",
            COMUNE: "PUEGNAGO DEL GARDA"
        },
        {
            ID: "H087",
            COMUNE: "PUGLIANELLO"
        },
        {
            ID: "H088",
            COMUNE: "PULA"
        },
        {
            ID: "H089",
            COMUNE: "PULFERO"
        },
        {
            ID: "H090",
            COMUNE: "PULSANO"
        },
        {
            ID: "H091",
            COMUNE: "PUMENENGO"
        },
        {
            ID: "H092",
            COMUNE: "PUOS D'ALPAGO"
        },
        {
            ID: "H094",
            COMUNE: "PUSIANO"
        },
        {
            ID: "H095",
            COMUNE: "PUTIFIGARI"
        },
        {
            ID: "H096",
            COMUNE: "PUTIGNANO"
        },
        {
            ID: "H647",
            COMUNE: "SABAUDIA"
        },
        {
            ID: "H648",
            COMUNE: "SABBIA"
        },
        {
            ID: "H650",
            COMUNE: "SABBIO CHIESE"
        },
        {
            ID: "H652",
            COMUNE: "SABBIONETA"
        },
        {
            ID: "H654",
            COMUNE: "SACCO"
        },
        {
            ID: "H655",
            COMUNE: "SACCOLONGO"
        },
        {
            ID: "H657",
            COMUNE: "SACILE"
        },
        {
            ID: "H658",
            COMUNE: "SACROFANO"
        },
        {
            ID: "H659",
            COMUNE: "SADALI"
        },
        {
            ID: "H661",
            COMUNE: "SAGAMA"
        },
        {
            ID: "H662",
            COMUNE: "SAGLIANO MICCA"
        },
        {
            ID: "H665",
            COMUNE: "SAGRADO"
        },
        {
            ID: "H666",
            COMUNE: "SAGRON MIS"
        },
        {
            ID: "H669",
            COMUNE: "SAINT-CHRISTOPHE"
        },
        {
            ID: "H670",
            COMUNE: "SAINT-DENIS"
        },
        {
            ID: "H671",
            COMUNE: "SAINT-MARCEL"
        },
        {
            ID: "H672",
            COMUNE: "SAINT-NICOLAS"
        },
        {
            ID: "H673",
            COMUNE: "SAINT-OYEN"
        },
        {
            ID: "H674",
            COMUNE: "SAINT-PIERRE"
        },
        {
            ID: "H675",
            COMUNE: "SAINT-RHEMY-EN-BOSSES"
        },
        {
            ID: "H676",
            COMUNE: "SAINT-VINCENT"
        },
        {
            ID: "H682",
            COMUNE: "SALA BAGANZA"
        },
        {
            ID: "H681",
            COMUNE: "SALA BIELLESE"
        },
        {
            ID: "H678",
            COMUNE: "SALA BOLOGNESE"
        },
        {
            ID: "H679",
            COMUNE: "SALA COMACINA"
        },
        {
            ID: "H683",
            COMUNE: "SALA CONSILINA"
        },
        {
            ID: "H677",
            COMUNE: "SALA MONFERRATO"
        },
        {
            ID: "H687",
            COMUNE: "SALANDRA"
        },
        {
            ID: "H688",
            COMUNE: "SALAPARUTA"
        },
        {
            ID: "H689",
            COMUNE: "SALARA"
        },
        {
            ID: "H690",
            COMUNE: "SALASCO"
        },
        {
            ID: "H691",
            COMUNE: "SALASSA"
        },
        {
            ID: "H684",
            COMUNE: "SALBERTRAND"
        },
        {
            ID: "F810",
            COMUNE: "SALCEDO"
        },
        {
            ID: "H693",
            COMUNE: "SALCITO"
        },
        {
            ID: "H694",
            COMUNE: "SALE"
        },
        {
            ID: "H695",
            COMUNE: "SALE DELLE LANGHE"
        },
        {
            ID: "H699",
            COMUNE: "SALE MARASINO"
        },
        {
            ID: "H704",
            COMUNE: "SALE SAN GIOVANNI"
        },
        {
            ID: "H700",
            COMUNE: "SALEMI"
        },
        {
            ID: "H686",
            COMUNE: "SALENTO"
        },
        {
            ID: "H702",
            COMUNE: "SALERANO CANAVESE"
        },
        {
            ID: "H701",
            COMUNE: "SALERANO SUL LAMBRO"
        },
        {
            ID: "H703",
            COMUNE: "SALERNO"
        },
        {
            ID: "H705",
            COMUNE: "SALETTO"
        },
        {
            ID: "H706",
            COMUNE: "SALGAREDA"
        },
        {
            ID: "H707",
            COMUNE: "SALI VERCELLESE"
        },
        {
            ID: "H708",
            COMUNE: "SALICE SALENTINO"
        },
        {
            ID: "H710",
            COMUNE: "SALICETO"
        },
        {
            ID: "H713",
            COMUNE: "SALISANO"
        },
        {
            ID: "H714",
            COMUNE: "SALIZZOLE"
        },
        {
            ID: "H715",
            COMUNE: "SALLE"
        },
        {
            ID: "H716",
            COMUNE: "SALMOUR"
        },
        {
            ID: "H717",
            COMUNE: "SALO'"
        },
        {
            ID: "H719",
            COMUNE: "SALORNO SULLA STRADA DEL VINO .SALURN AN DER"
        },
        {
            ID: "H720",
            COMUNE: "SALSOMAGGIORE TERME"
        },
        {
            ID: "H721",
            COMUNE: "SALTARA"
        },
        {
            ID: "H723",
            COMUNE: "SALTRIO"
        },
        {
            ID: "H724",
            COMUNE: "SALUDECIO"
        },
        {
            ID: "H725",
            COMUNE: "SALUGGIA"
        },
        {
            ID: "H726",
            COMUNE: "SALUSSOLA"
        },
        {
            ID: "H727",
            COMUNE: "SALUZZO"
        },
        {
            ID: "H729",
            COMUNE: "SALVE"
        },
        {
            ID: "H731",
            COMUNE: "SALVIROLA"
        },
        {
            ID: "H732",
            COMUNE: "SALVITELLE"
        },
        {
            ID: "H734",
            COMUNE: "SALZA DI PINEROLO"
        },
        {
            ID: "H733",
            COMUNE: "SALZA IRPINA"
        },
        {
            ID: "H735",
            COMUNE: "SALZANO"
        },
        {
            ID: "H736",
            COMUNE: "SAMARATE"
        },
        {
            ID: "H738",
            COMUNE: "SAMASSI"
        },
        {
            ID: "H739",
            COMUNE: "SAMATZAI"
        },
        {
            ID: "H743",
            COMUNE: "SAMBUCA DI SICILIA"
        },
        {
            ID: "H744",
            COMUNE: "SAMBUCA PISTOIESE"
        },
        {
            ID: "H745",
            COMUNE: "SAMBUCI"
        },
        {
            ID: "H746",
            COMUNE: "SAMBUCO"
        },
        {
            ID: "H749",
            COMUNE: "SAMMICHELE DI BARI"
        },
        {
            ID: "H013",
            COMUNE: "SAMO"
        },
        {
            ID: "H752",
            COMUNE: "SAMOLACO"
        },
        {
            ID: "H753",
            COMUNE: "SAMONE"
        },
        {
            ID: "H754",
            COMUNE: "SAMONE"
        },
        {
            ID: "H755",
            COMUNE: "SAMPEYRE"
        },
        {
            ID: "H756",
            COMUNE: "SAMUGHEO"
        },
        {
            ID: "H763",
            COMUNE: "SAN BARTOLOMEO AL MARE"
        },
        {
            ID: "H764",
            COMUNE: "SAN BARTOLOMEO IN GALDO"
        },
        {
            ID: "H760",
            COMUNE: "SAN BARTOLOMEO VAL CAVARGNA"
        },
        {
            ID: "H765",
            COMUNE: "SAN BASILE"
        },
        {
            ID: "H766",
            COMUNE: "SAN BASILIO"
        },
        {
            ID: "H767",
            COMUNE: "SAN BASSANO"
        },
        {
            ID: "H768",
            COMUNE: "SAN BELLINO"
        },
        {
            ID: "H770",
            COMUNE: "SAN BENEDETTO BELBO"
        },
        {
            ID: "H772",
            COMUNE: "SAN BENEDETTO DEI MARSI"
        },
        {
            ID: "H769",
            COMUNE: "SAN BENEDETTO DEL TRONTO"
        },
        {
            ID: "H773",
            COMUNE: "SAN BENEDETTO IN PERILLIS"
        },
        {
            ID: "H771",
            COMUNE: "SAN BENEDETTO PO"
        },
        {
            ID: "H774",
            COMUNE: "SAN BENEDETTO ULLANO"
        },
        {
            ID: "G566",
            COMUNE: "SAN BENEDETTO VAL DI SAMBRO"
        },
        {
            ID: "H775",
            COMUNE: "SAN BENIGNO CANAVESE"
        },
        {
            ID: "H777",
            COMUNE: "SAN BERNARDINO VERBANO"
        },
        {
            ID: "H780",
            COMUNE: "SAN BIAGIO DELLA CIMA"
        },
        {
            ID: "H781",
            COMUNE: "SAN BIAGIO DI CALLALTA"
        },
        {
            ID: "H778",
            COMUNE: "SAN BIAGIO PLATANI"
        },
        {
            ID: "H779",
            COMUNE: "SAN BIAGIO SARACINISCO"
        },
        {
            ID: "H782",
            COMUNE: "SAN BIASE"
        },
        {
            ID: "H783",
            COMUNE: "SAN BONIFACIO"
        },
        {
            ID: "H784",
            COMUNE: "SAN BUONO"
        },
        {
            ID: "H785",
            COMUNE: "SAN CALOGERO"
        },
        {
            ID: "H786",
            COMUNE: "SAN CANDIDO .INNICHEN."
        },
        {
            ID: "H787",
            COMUNE: "SAN CANZIAN D'ISONZO"
        },
        {
            ID: "H789",
            COMUNE: "SAN CARLO CANAVESE"
        },
        {
            ID: "H790",
            COMUNE: "SAN CASCIANO DEI BAGNI"
        },
        {
            ID: "H791",
            COMUNE: "SAN CASCIANO IN VAL DI PESA"
        },
        {
            ID: "M264",
            COMUNE: "SAN CASSIANO"
        },
        {
            ID: "H792",
            COMUNE: "SAN CATALDO"
        },
        {
            ID: "M295",
            COMUNE: "SAN CESAREO"
        },
        {
            ID: "H793",
            COMUNE: "SAN CESARIO DI LECCE"
        },
        {
            ID: "H794",
            COMUNE: "SAN CESARIO SUL PANARO"
        },
        {
            ID: "H795",
            COMUNE: "SAN CHIRICO NUOVO"
        },
        {
            ID: "H796",
            COMUNE: "SAN CHIRICO RAPARO"
        },
        {
            ID: "H797",
            COMUNE: "SAN CIPIRELLO"
        },
        {
            ID: "H798",
            COMUNE: "SAN CIPRIANO D'AVERSA"
        },
        {
            ID: "H800",
            COMUNE: "SAN CIPRIANO PICENTINO"
        },
        {
            ID: "H799",
            COMUNE: "SAN CIPRIANO PO"
        },
        {
            ID: "H801",
            COMUNE: "SAN CLEMENTE"
        },
        {
            ID: "H803",
            COMUNE: "SAN COLOMBANO AL LAMBRO"
        },
        {
            ID: "H804",
            COMUNE: "SAN COLOMBANO BELMONTE"
        },
        {
            ID: "H802",
            COMUNE: "SAN COLOMBANO CERTENOLI"
        },
        {
            ID: "H805",
            COMUNE: "SAN CONO"
        },
        {
            ID: "H806",
            COMUNE: "SAN COSMO ALBANESE"
        },
        {
            ID: "H808",
            COMUNE: "SAN COSTANTINO ALBANESE"
        },
        {
            ID: "H807",
            COMUNE: "SAN COSTANTINO CALABRO"
        },
        {
            ID: "H809",
            COMUNE: "SAN COSTANZO"
        },
        {
            ID: "H810",
            COMUNE: "SAN CRISTOFORO"
        },
        {
            ID: "H814",
            COMUNE: "SAN DAMIANO AL COLLE"
        },
        {
            ID: "H811",
            COMUNE: "SAN DAMIANO D'ASTI"
        },
        {
            ID: "H812",
            COMUNE: "SAN DAMIANO MACRA"
        },
        {
            ID: "H816",
            COMUNE: "SAN DANIELE DEL FRIULI"
        },
        {
            ID: "H815",
            COMUNE: "SAN DANIELE PO"
        },
        {
            ID: "H818",
            COMUNE: "SAN DEMETRIO CORONE"
        },
        {
            ID: "H819",
            COMUNE: "SAN DEMETRIO NE' VESTINI"
        },
        {
            ID: "H820",
            COMUNE: "SAN DIDERO"
        },
        {
            ID: "H823",
            COMUNE: "SAN DONA' DI PIAVE"
        },
        {
            ID: "H822",
            COMUNE: "SAN DONACI"
        },
        {
            ID: "H826",
            COMUNE: "SAN DONATO DI LECCE"
        },
        {
            ID: "H825",
            COMUNE: "SAN DONATO DI NINEA"
        },
        {
            ID: "H827",
            COMUNE: "SAN DONATO MILANESE"
        },
        {
            ID: "H824",
            COMUNE: "SAN DONATO VAL DI COMINO"
        },
        {
            ID: "D324",
            COMUNE: "SAN DORLIGO DELLA VALLE"
        },
        {
            ID: "H830",
            COMUNE: "SAN FEDELE INTELVI"
        },
        {
            ID: "H831",
            COMUNE: "SAN FELE"
        },
        {
            ID: "H834",
            COMUNE: "SAN FELICE A CANCELLO"
        },
        {
            ID: "H836",
            COMUNE: "SAN FELICE CIRCEO"
        },
        {
            ID: "H838",
            COMUNE: "SAN FELICE DEL BENACO"
        },
        {
            ID: "H833",
            COMUNE: "SAN FELICE DEL MOLISE"
        },
        {
            ID: "H835",
            COMUNE: "SAN FELICE SUL PANARO"
        },
        {
            ID: "M277",
            COMUNE: "SAN FERDINANDO"
        },
        {
            ID: "H839",
            COMUNE: "SAN FERDINANDO DI PUGLIA"
        },
        {
            ID: "H840",
            COMUNE: "SAN FERMO DELLA BATTAGLIA"
        },
        {
            ID: "H841",
            COMUNE: "SAN FILI"
        },
        {
            ID: "H842",
            COMUNE: "SAN FILIPPO DEL MELA"
        },
        {
            ID: "H843",
            COMUNE: "SAN FIOR"
        },
        {
            ID: "H844",
            COMUNE: "SAN FIORANO"
        },
        {
            ID: "H845",
            COMUNE: "SAN FLORIANO DEL COLLIO"
        },
        {
            ID: "H846",
            COMUNE: "SAN FLORO"
        },
        {
            ID: "H847",
            COMUNE: "SAN FRANCESCO AL CAMPO"
        },
        {
            ID: "H850",
            COMUNE: "SAN FRATELLO"
        },
        {
            ID: "H856",
            COMUNE: "SAN GAVINO MONREALE"
        },
        {
            ID: "H857",
            COMUNE: "SAN GEMINI"
        },
        {
            ID: "H858",
            COMUNE: "SAN GENESIO ATESINO .JENESIEN."
        },
        {
            ID: "H859",
            COMUNE: "SAN GENESIO ED UNITI"
        },
        {
            ID: "H860",
            COMUNE: "SAN GENNARO VESUVIANO"
        },
        {
            ID: "H862",
            COMUNE: "SAN GERMANO CHISONE"
        },
        {
            ID: "H863",
            COMUNE: "SAN GERMANO DEI BERICI"
        },
        {
            ID: "H861",
            COMUNE: "SAN GERMANO VERCELLESE"
        },
        {
            ID: "H865",
            COMUNE: "SAN GERVASIO BRESCIANO"
        },
        {
            ID: "H867",
            COMUNE: "SAN GIACOMO DEGLI SCHIAVONI"
        },
        {
            ID: "H870",
            COMUNE: "SAN GIACOMO DELLE SEGNATE"
        },
        {
            ID: "H868",
            COMUNE: "SAN GIACOMO FILIPPO"
        },
        {
            ID: "B952",
            COMUNE: "SAN GIACOMO VERCELLESE"
        },
        {
            ID: "H873",
            COMUNE: "SAN GILLIO"
        },
        {
            ID: "H875",
            COMUNE: "SAN GIMIGNANO"
        },
        {
            ID: "H876",
            COMUNE: "SAN GINESIO"
        },
        {
            ID: "H892",
            COMUNE: "SAN GIORGIO A CREMANO"
        },
        {
            ID: "H880",
            COMUNE: "SAN GIORGIO A LIRI"
        },
        {
            ID: "H881",
            COMUNE: "SAN GIORGIO ALBANESE"
        },
        {
            ID: "H883",
            COMUNE: "SAN GIORGIO BIGARELLO"
        },
        {
            ID: "H890",
            COMUNE: "SAN GIORGIO CANAVESE"
        },
        {
            ID: "H894",
            COMUNE: "SAN GIORGIO DEL SANNIO"
        },
        {
            ID: "H891",
            COMUNE: "SAN GIORGIO DELLA RICHINVELDA"
        },
        {
            ID: "H893",
            COMUNE: "SAN GIORGIO DELLE PERTICHE"
        },
        {
            ID: "H885",
            COMUNE: "SAN GIORGIO DI LOMELLINA"
        },
        {
            ID: "H895",
            COMUNE: "SAN GIORGIO DI NOGARO"
        },
        {
            ID: "H886",
            COMUNE: "SAN GIORGIO DI PESARO"
        },
        {
            ID: "H896",
            COMUNE: "SAN GIORGIO DI PIANO"
        },
        {
            ID: "H897",
            COMUNE: "SAN GIORGIO IN BOSCO"
        },
        {
            ID: "H882",
            COMUNE: "SAN GIORGIO IONICO"
        },
        {
            ID: "H898",
            COMUNE: "SAN GIORGIO LA MOLARA"
        },
        {
            ID: "H888",
            COMUNE: "SAN GIORGIO LUCANO"
        },
        {
            ID: "H878",
            COMUNE: "SAN GIORGIO MONFERRATO"
        },
        {
            ID: "H889",
            COMUNE: "SAN GIORGIO MORGETO"
        },
        {
            ID: "H887",
            COMUNE: "SAN GIORGIO PIACENTINO"
        },
        {
            ID: "H899",
            COMUNE: "SAN GIORGIO SCARAMPI"
        },
        {
            ID: "H884",
            COMUNE: "SAN GIORGIO SU LEGNANO"
        },
        {
            ID: "H900",
            COMUNE: "SAN GIORIO DI SUSA"
        },
        {
            ID: "H907",
            COMUNE: "SAN GIOVANNI A PIRO"
        },
        {
            ID: "H906",
            COMUNE: "SAN GIOVANNI AL NATISONE"
        },
        {
            ID: "H910",
            COMUNE: "SAN GIOVANNI BIANCO"
        },
        {
            ID: "H911",
            COMUNE: "SAN GIOVANNI D'ASSO"
        },
        {
            ID: "H912",
            COMUNE: "SAN GIOVANNI DEL DOSSO"
        },
        {
            ID: "M390",
            COMUNE: "SAN GIOVANNI DI FASSA-SEN JAN"
        },
        {
            ID: "H903",
            COMUNE: "SAN GIOVANNI DI GERACE"
        },
        {
            ID: "H914",
            COMUNE: "SAN GIOVANNI GEMINI"
        },
        {
            ID: "H916",
            COMUNE: "SAN GIOVANNI ILARIONE"
        },
        {
            ID: "H918",
            COMUNE: "SAN GIOVANNI IN CROCE"
        },
        {
            ID: "H919",
            COMUNE: "SAN GIOVANNI IN FIORE"
        },
        {
            ID: "H920",
            COMUNE: "SAN GIOVANNI IN GALDO"
        },
        {
            ID: "H921",
            COMUNE: "SAN GIOVANNI IN MARIGNANO"
        },
        {
            ID: "G467",
            COMUNE: "SAN GIOVANNI IN PERSICETO"
        },
        {
            ID: "H917",
            COMUNE: "SAN GIOVANNI INCARICO"
        },
        {
            ID: "H922",
            COMUNE: "SAN GIOVANNI LA PUNTA"
        },
        {
            ID: "H923",
            COMUNE: "SAN GIOVANNI LIPIONI"
        },
        {
            ID: "H924",
            COMUNE: "SAN GIOVANNI LUPATOTO"
        },
        {
            ID: "H926",
            COMUNE: "SAN GIOVANNI ROTONDO"
        },
        {
            ID: "G287",
            COMUNE: "SAN GIOVANNI SUERGIU"
        },
        {
            ID: "D690",
            COMUNE: "SAN GIOVANNI TEATINO"
        },
        {
            ID: "H901",
            COMUNE: "SAN GIOVANNI VALDARNO"
        },
        {
            ID: "H928",
            COMUNE: "SAN GIULIANO DEL SANNIO"
        },
        {
            ID: "H929",
            COMUNE: "SAN GIULIANO DI PUGLIA"
        },
        {
            ID: "H930",
            COMUNE: "SAN GIULIANO MILANESE"
        },
        {
            ID: "A562",
            COMUNE: "SAN GIULIANO TERME"
        },
        {
            ID: "H933",
            COMUNE: "SAN GIUSEPPE JATO"
        },
        {
            ID: "H931",
            COMUNE: "SAN GIUSEPPE VESUVIANO"
        },
        {
            ID: "H935",
            COMUNE: "SAN GIUSTINO"
        },
        {
            ID: "H936",
            COMUNE: "SAN GIUSTO CANAVESE"
        },
        {
            ID: "H937",
            COMUNE: "SAN GODENZO"
        },
        {
            ID: "H942",
            COMUNE: "SAN GREGORIO DA SASSOLA"
        },
        {
            ID: "H940",
            COMUNE: "SAN GREGORIO DI CATANIA"
        },
        {
            ID: "H941",
            COMUNE: "SAN GREGORIO D'IPPONA"
        },
        {
            ID: "H943",
            COMUNE: "SAN GREGORIO MAGNO"
        },
        {
            ID: "H939",
            COMUNE: "SAN GREGORIO MATESE"
        },
        {
            ID: "H938",
            COMUNE: "SAN GREGORIO NELLE ALPI"
        },
        {
            ID: "H945",
            COMUNE: "SAN LAZZARO DI SAVENA"
        },
        {
            ID: "H949",
            COMUNE: "SAN LEO"
        },
        {
            ID: "H951",
            COMUNE: "SAN LEONARDO"
        },
        {
            ID: "H952",
            COMUNE: "SAN LEONARDO IN PASSIRIA .ST LEONHARD IN PAS."
        },
        {
            ID: "H953",
            COMUNE: "SAN LEUCIO DEL SANNIO"
        },
        {
            ID: "H955",
            COMUNE: "SAN LORENZELLO"
        },
        {
            ID: "H959",
            COMUNE: "SAN LORENZO"
        },
        {
            ID: "H957",
            COMUNE: "SAN LORENZO AL MARE"
        },
        {
            ID: "H961",
            COMUNE: "SAN LORENZO BELLIZZI"
        },
        {
            ID: "H962",
            COMUNE: "SAN LORENZO DEL VALLO"
        },
        {
            ID: "H956",
            COMUNE: "SAN LORENZO DI SEBATO .ST LORENZEN."
        },
        {
            ID: "M345",
            COMUNE: "SAN LORENZO DORSINO"
        },
        {
            ID: "H966",
            COMUNE: "SAN LORENZO IN BANALE"
        },
        {
            ID: "H958",
            COMUNE: "SAN LORENZO IN CAMPO"
        },
        {
            ID: "H964",
            COMUNE: "SAN LORENZO ISONTINO"
        },
        {
            ID: "H967",
            COMUNE: "SAN LORENZO MAGGIORE"
        },
        {
            ID: "H969",
            COMUNE: "SAN LORENZO NUOVO"
        },
        {
            ID: "H970",
            COMUNE: "SAN LUCA"
        },
        {
            ID: "H971",
            COMUNE: "SAN LUCIDO"
        },
        {
            ID: "H973",
            COMUNE: "SAN LUPO"
        },
        {
            ID: "H976",
            COMUNE: "SAN MANGO D'AQUINO"
        },
        {
            ID: "H977",
            COMUNE: "SAN MANGO PIEMONTE"
        },
        {
            ID: "H975",
            COMUNE: "SAN MANGO SUL CALORE"
        },
        {
            ID: "H978",
            COMUNE: "SAN MARCELLINO"
        },
        {
            ID: "H979",
            COMUNE: "SAN MARCELLO"
        },
        {
            ID: "H980",
            COMUNE: "SAN MARCELLO PISTOIESE"
        },
        {
            ID: "M377",
            COMUNE: "SAN MARCELLO PITEGLIO"
        },
        {
            ID: "H981",
            COMUNE: "SAN MARCO ARGENTANO"
        },
        {
            ID: "H982",
            COMUNE: "SAN MARCO D'ALUNZIO"
        },
        {
            ID: "H984",
            COMUNE: "SAN MARCO DEI CAVOTI"
        },
        {
            ID: "F043",
            COMUNE: "SAN MARCO EVANGELISTA"
        },
        {
            ID: "H985",
            COMUNE: "SAN MARCO IN LAMIS"
        },
        {
            ID: "H986",
            COMUNE: "SAN MARCO LA CATOLA"
        },
        {
            ID: "H999",
            COMUNE: "SAN MARTINO AL TAGLIAMENTO"
        },
        {
            ID: "H987",
            COMUNE: "SAN MARTINO ALFIERI"
        },
        {
            ID: "I003",
            COMUNE: "SAN MARTINO BUON ALBERGO"
        },
        {
            ID: "H997",
            COMUNE: "SAN MARTINO CANAVESE"
        },
        {
            ID: "H994",
            COMUNE: "SAN MARTINO D'AGRI"
        },
        {
            ID: "I005",
            COMUNE: "SAN MARTINO DALL'ARGINE"
        },
        {
            ID: "I007",
            COMUNE: "SAN MARTINO DEL LAGO"
        },
        {
            ID: "H992",
            COMUNE: "SAN MARTINO DI FINITA"
        },
        {
            ID: "I008",
            COMUNE: "SAN MARTINO DI LUPARI"
        },
        {
            ID: "H996",
            COMUNE: "SAN MARTINO DI VENEZZE"
        },
        {
            ID: "H988",
            COMUNE: "SAN MARTINO IN BADIA .ST MARTIN IN THURN."
        },
        {
            ID: "H989",
            COMUNE: "SAN MARTINO IN PASSIRIA .ST MARTIN IN PASSEI."
        },
        {
            ID: "H990",
            COMUNE: "SAN MARTINO IN PENSILIS"
        },
        {
            ID: "I011",
            COMUNE: "SAN MARTINO IN RIO"
        },
        {
            ID: "I012",
            COMUNE: "SAN MARTINO IN STRADA"
        },
        {
            ID: "I002",
            COMUNE: "SAN MARTINO SANNITA"
        },
        {
            ID: "I014",
            COMUNE: "SAN MARTINO SICCOMARIO"
        },
        {
            ID: "H991",
            COMUNE: "SAN MARTINO SULLA MARRUCINA"
        },
        {
            ID: "I016",
            COMUNE: "SAN MARTINO VALLE CAUDINA"
        },
        {
            ID: "I018",
            COMUNE: "SAN MARZANO DI SAN GIUSEPPE"
        },
        {
            ID: "I017",
            COMUNE: "SAN MARZANO OLIVETO"
        },
        {
            ID: "I019",
            COMUNE: "SAN MARZANO SUL SARNO"
        },
        {
            ID: "I023",
            COMUNE: "SAN MASSIMO"
        },
        {
            ID: "I024",
            COMUNE: "SAN MAURIZIO CANAVESE"
        },
        {
            ID: "I025",
            COMUNE: "SAN MAURIZIO D'OPAGLIO"
        },
        {
            ID: "I028",
            COMUNE: "SAN MAURO CASTELVERDE"
        },
        {
            ID: "I031",
            COMUNE: "SAN MAURO CILENTO"
        },
        {
            ID: "H712",
            COMUNE: "SAN MAURO DI SALINE"
        },
        {
            ID: "I029",
            COMUNE: "SAN MAURO FORTE"
        },
        {
            ID: "I032",
            COMUNE: "SAN MAURO LA BRUCA"
        },
        {
            ID: "I026",
            COMUNE: "SAN MAURO MARCHESATO"
        },
        {
            ID: "I027",
            COMUNE: "SAN MAURO PASCOLI"
        },
        {
            ID: "I030",
            COMUNE: "SAN MAURO TORINESE"
        },
        {
            ID: "I040",
            COMUNE: "SAN MICHELE AL TAGLIAMENTO"
        },
        {
            ID: "I042",
            COMUNE: "SAN MICHELE ALL'ADIGE"
        },
        {
            ID: "I035",
            COMUNE: "SAN MICHELE DI GANZARIA"
        },
        {
            ID: "I034",
            COMUNE: "SAN MICHELE DI SERINO"
        },
        {
            ID: "I037",
            COMUNE: "SAN MICHELE MONDOVI'"
        },
        {
            ID: "I045",
            COMUNE: "SAN MICHELE SALENTINO"
        },
        {
            ID: "I046",
            COMUNE: "SAN MINIATO"
        },
        {
            ID: "I047",
            COMUNE: "SAN NAZARIO"
        },
        {
            ID: "I049",
            COMUNE: "SAN NAZZARO"
        },
        {
            ID: "I052",
            COMUNE: "SAN NAZZARO SESIA"
        },
        {
            ID: "I051",
            COMUNE: "SAN NAZZARO VAL CAVARGNA"
        },
        {
            ID: "I054",
            COMUNE: "SAN NICANDRO GARGANICO"
        },
        {
            ID: "I060",
            COMUNE: "SAN NICOLA ARCELLA"
        },
        {
            ID: "I061",
            COMUNE: "SAN NICOLA BARONIA"
        },
        {
            ID: "I058",
            COMUNE: "SAN NICOLA DA CRISSA"
        },
        {
            ID: "I057",
            COMUNE: "SAN NICOLA DELL'ALTO"
        },
        {
            ID: "I056",
            COMUNE: "SAN NICOLA LA STRADA"
        },
        {
            ID: "I062",
            COMUNE: "SAN NICOLA MANFREDI"
        },
        {
            ID: "A368",
            COMUNE: "SAN NICOLO' D'ARCIDANO"
        },
        {
            ID: "I063",
            COMUNE: "SAN NICOLO' DI COMELICO"
        },
        {
            ID: "G383",
            COMUNE: "SAN NICOLO' GERREI"
        },
        {
            ID: "I066",
            COMUNE: "SAN PANCRAZIO SALENTINO"
        },
        {
            ID: "I065",
            COMUNE: "SAN PANCRAZIO .ST PANKRAZ."
        },
        {
            ID: "G407",
            COMUNE: "SAN PAOLO"
        },
        {
            ID: "B906",
            COMUNE: "SAN PAOLO ALBANESE"
        },
        {
            ID: "I073",
            COMUNE: "SAN PAOLO BEL SITO"
        },
        {
            ID: "I074",
            COMUNE: "SAN PAOLO CERVO"
        },
        {
            ID: "B310",
            COMUNE: "SAN PAOLO D'ARGON"
        },
        {
            ID: "I072",
            COMUNE: "SAN PAOLO DI CIVITATE"
        },
        {
            ID: "I071",
            COMUNE: "SAN PAOLO DI JESI"
        },
        {
            ID: "I076",
            COMUNE: "SAN PAOLO SOLBRITO"
        },
        {
            ID: "I079",
            COMUNE: "SAN PELLEGRINO TERME"
        },
        {
            ID: "I082",
            COMUNE: "SAN PIER D'ISONZO"
        },
        {
            ID: "I084",
            COMUNE: "SAN PIER NICETO"
        },
        {
            ID: "I085",
            COMUNE: "SAN PIERO A SIEVE"
        },
        {
            ID: "I086",
            COMUNE: "SAN PIERO PATTI"
        },
        {
            ID: "I093",
            COMUNE: "SAN PIETRO A MAIDA"
        },
        {
            ID: "I092",
            COMUNE: "SAN PIETRO AL NATISONE"
        },
        {
            ID: "I089",
            COMUNE: "SAN PIETRO AL TANAGRO"
        },
        {
            ID: "I095",
            COMUNE: "SAN PIETRO APOSTOLO"
        },
        {
            ID: "I096",
            COMUNE: "SAN PIETRO AVELLANA"
        },
        {
            ID: "I098",
            COMUNE: "SAN PIETRO CLARENZA"
        },
        {
            ID: "I088",
            COMUNE: "SAN PIETRO DI CADORE"
        },
        {
            ID: "I102",
            COMUNE: "SAN PIETRO DI CARIDA'"
        },
        {
            ID: "I103",
            COMUNE: "SAN PIETRO DI FELETTO"
        },
        {
            ID: "I105",
            COMUNE: "SAN PIETRO DI MORUBIO"
        },
        {
            ID: "I108",
            COMUNE: "SAN PIETRO IN AMANTEA"
        },
        {
            ID: "I109",
            COMUNE: "SAN PIETRO IN CARIANO"
        },
        {
            ID: "I110",
            COMUNE: "SAN PIETRO IN CASALE"
        },
        {
            ID: "G788",
            COMUNE: "SAN PIETRO IN CERRO"
        },
        {
            ID: "I107",
            COMUNE: "SAN PIETRO IN GU"
        },
        {
            ID: "I114",
            COMUNE: "SAN PIETRO IN GUARANO"
        },
        {
            ID: "I115",
            COMUNE: "SAN PIETRO IN LAMA"
        },
        {
            ID: "I113",
            COMUNE: "SAN PIETRO INFINE"
        },
        {
            ID: "I116",
            COMUNE: "SAN PIETRO MOSEZZO"
        },
        {
            ID: "I117",
            COMUNE: "SAN PIETRO MUSSOLINO"
        },
        {
            ID: "I090",
            COMUNE: "SAN PIETRO VAL LEMINA"
        },
        {
            ID: "I119",
            COMUNE: "SAN PIETRO VERNOTICO"
        },
        {
            ID: "I120",
            COMUNE: "SAN PIETRO VIMINARIO"
        },
        {
            ID: "I121",
            COMUNE: "SAN PIO DELLE CAMERE"
        },
        {
            ID: "I125",
            COMUNE: "SAN POLO DEI CAVALIERI"
        },
        {
            ID: "I123",
            COMUNE: "SAN POLO D'ENZA"
        },
        {
            ID: "I124",
            COMUNE: "SAN POLO DI PIAVE"
        },
        {
            ID: "I122",
            COMUNE: "SAN POLO MATESE"
        },
        {
            ID: "I126",
            COMUNE: "SAN PONSO"
        },
        {
            ID: "I128",
            COMUNE: "SAN POSSIDONIO"
        },
        {
            ID: "I130",
            COMUNE: "SAN POTITO SANNITICO"
        },
        {
            ID: "I129",
            COMUNE: "SAN POTITO ULTRA"
        },
        {
            ID: "I131",
            COMUNE: "SAN PRISCO"
        },
        {
            ID: "I132",
            COMUNE: "SAN PROCOPIO"
        },
        {
            ID: "I133",
            COMUNE: "SAN PROSPERO"
        },
        {
            ID: "I135",
            COMUNE: "SAN QUIRICO D'ORCIA"
        },
        {
            ID: "I136",
            COMUNE: "SAN QUIRINO"
        },
        {
            ID: "I137",
            COMUNE: "SAN RAFFAELE CIMENA"
        },
        {
            ID: "I139",
            COMUNE: "SAN ROBERTO"
        },
        {
            ID: "I140",
            COMUNE: "SAN ROCCO AL PORTO"
        },
        {
            ID: "I142",
            COMUNE: "SAN ROMANO IN GARFAGNANA"
        },
        {
            ID: "I143",
            COMUNE: "SAN RUFO"
        },
        {
            ID: "I147",
            COMUNE: "SAN SALVATORE DI FITALIA"
        },
        {
            ID: "I144",
            COMUNE: "SAN SALVATORE MONFERRATO"
        },
        {
            ID: "I145",
            COMUNE: "SAN SALVATORE TELESINO"
        },
        {
            ID: "I148",
            COMUNE: "SAN SALVO"
        },
        {
            ID: "I151",
            COMUNE: "SAN SEBASTIANO AL VESUVIO"
        },
        {
            ID: "I150",
            COMUNE: "SAN SEBASTIANO CURONE"
        },
        {
            ID: "I152",
            COMUNE: "SAN SEBASTIANO DA PO"
        },
        {
            ID: "I154",
            COMUNE: "SAN SECONDO DI PINEROLO"
        },
        {
            ID: "I153",
            COMUNE: "SAN SECONDO PARMENSE"
        },
        {
            ID: "I157",
            COMUNE: "SAN SEVERINO LUCANO"
        },
        {
            ID: "I156",
            COMUNE: "SAN SEVERINO MARCHE"
        },
        {
            ID: "I158",
            COMUNE: "SAN SEVERO"
        },
        {
            ID: "I162",
            COMUNE: "SAN SIRO"
        },
        {
            ID: "I163",
            COMUNE: "SAN SOSSIO BARONIA"
        },
        {
            ID: "I164",
            COMUNE: "SAN SOSTENE"
        },
        {
            ID: "I165",
            COMUNE: "SAN SOSTI"
        },
        {
            ID: "I166",
            COMUNE: "SAN SPERATE"
        },
        {
            ID: "I373",
            COMUNE: "SAN STINO DI LIVENZA"
        },
        {
            ID: "I261",
            COMUNE: "SAN TAMMARO"
        },
        {
            ID: "I329",
            COMUNE: "SAN TEODORO"
        },
        {
            ID: "I328",
            COMUNE: "SAN TEODORO"
        },
        {
            ID: "I347",
            COMUNE: "SAN TOMASO AGORDINO"
        },
        {
            ID: "I376",
            COMUNE: "SAN VALENTINO IN ABRUZZO CITERIORE"
        },
        {
            ID: "I377",
            COMUNE: "SAN VALENTINO TORIO"
        },
        {
            ID: "I381",
            COMUNE: "SAN VENANZO"
        },
        {
            ID: "I382",
            COMUNE: "SAN VENDEMIANO"
        },
        {
            ID: "I384",
            COMUNE: "SAN VERO MILIS"
        },
        {
            ID: "I390",
            COMUNE: "SAN VINCENZO"
        },
        {
            ID: "I388",
            COMUNE: "SAN VINCENZO LA COSTA"
        },
        {
            ID: "I389",
            COMUNE: "SAN VINCENZO VALLE ROVETO"
        },
        {
            ID: "I391",
            COMUNE: "SAN VITALIANO"
        },
        {
            ID: "I402",
            COMUNE: "SAN VITO"
        },
        {
            ID: "I403",
            COMUNE: "SAN VITO AL TAGLIAMENTO"
        },
        {
            ID: "I404",
            COMUNE: "SAN VITO AL TORRE"
        },
        {
            ID: "I394",
            COMUNE: "SAN VITO CHIETINO"
        },
        {
            ID: "I396",
            COMUNE: "SAN VITO DEI NORMANNI"
        },
        {
            ID: "I392",
            COMUNE: "SAN VITO DI CADORE"
        },
        {
            ID: "I405",
            COMUNE: "SAN VITO DI FAGAGNA"
        },
        {
            ID: "I401",
            COMUNE: "SAN VITO DI LEGUZZANO"
        },
        {
            ID: "I407",
            COMUNE: "SAN VITO LO CAPO"
        },
        {
            ID: "I400",
            COMUNE: "SAN VITO ROMANO"
        },
        {
            ID: "I393",
            COMUNE: "SAN VITO SULLO IONIO"
        },
        {
            ID: "I408",
            COMUNE: "SAN VITTORE DEL LAZIO"
        },
        {
            ID: "I409",
            COMUNE: "SAN VITTORE OLONA"
        },
        {
            ID: "I414",
            COMUNE: "SAN ZENO DI MONTAGNA"
        },
        {
            ID: "I412",
            COMUNE: "SAN ZENO NAVIGLIO"
        },
        {
            ID: "I415",
            COMUNE: "SAN ZENONE AL LAMBRO"
        },
        {
            ID: "I416",
            COMUNE: "SAN ZENONE AL PO"
        },
        {
            ID: "I417",
            COMUNE: "SAN ZENONE DEGLI EZZELINI"
        },
        {
            ID: "H757",
            COMUNE: "SANARICA"
        },
        {
            ID: "H821",
            COMUNE: "SANDIGLIANO"
        },
        {
            ID: "H829",
            COMUNE: "SANDRIGO"
        },
        {
            ID: "H851",
            COMUNE: "SANFRE'"
        },
        {
            ID: "H852",
            COMUNE: "SANFRONT"
        },
        {
            ID: "H855",
            COMUNE: "SANGANO"
        },
        {
            ID: "H872",
            COMUNE: "SANGIANO"
        },
        {
            ID: "H877",
            COMUNE: "SANGINETO"
        },
        {
            ID: "H944",
            COMUNE: "SANGUINETTO"
        },
        {
            ID: "H974",
            COMUNE: "SANLURI"
        },
        {
            ID: "I048",
            COMUNE: "SANNAZZARO DE' BURGONDI"
        },
        {
            ID: "I053",
            COMUNE: "SANNICANDRO DI BARI"
        },
        {
            ID: "I059",
            COMUNE: "SANNICOLA"
        },
        {
            ID: "I138",
            COMUNE: "SANREMO"
        },
        {
            ID: "I155",
            COMUNE: "SANSEPOLCRO"
        },
        {
            ID: "I168",
            COMUNE: "SANTA BRIGIDA"
        },
        {
            ID: "I171",
            COMUNE: "SANTA CATERINA ALBANESE"
        },
        {
            ID: "I170",
            COMUNE: "SANTA CATERINA DELLO IONIO"
        },
        {
            ID: "I169",
            COMUNE: "SANTA CATERINA VILLARMOSA"
        },
        {
            ID: "I172",
            COMUNE: "SANTA CESAREA TERME"
        },
        {
            ID: "I176",
            COMUNE: "SANTA CRISTINA D'ASPROMONTE"
        },
        {
            ID: "I175",
            COMUNE: "SANTA CRISTINA E BISSONE"
        },
        {
            ID: "I174",
            COMUNE: "SANTA CRISTINA GELA"
        },
        {
            ID: "I173",
            COMUNE: "SANTA CRISTINA VALGARDENA .ST CHRISTINA IN G."
        },
        {
            ID: "I178",
            COMUNE: "SANTA CROCE CAMERINA"
        },
        {
            ID: "I179",
            COMUNE: "SANTA CROCE DEL SANNIO"
        },
        {
            ID: "I181",
            COMUNE: "SANTA CROCE DI MAGLIANO"
        },
        {
            ID: "I177",
            COMUNE: "SANTA CROCE SULL'ARNO"
        },
        {
            ID: "I183",
            COMUNE: "SANTA DOMENICA TALAO"
        },
        {
            ID: "I184",
            COMUNE: "SANTA DOMENICA VITTORIA"
        },
        {
            ID: "I185",
            COMUNE: "SANTA ELISABETTA"
        },
        {
            ID: "I187",
            COMUNE: "SANTA FIORA"
        },
        {
            ID: "I188",
            COMUNE: "SANTA FLAVIA"
        },
        {
            ID: "I203",
            COMUNE: "SANTA GIULETTA"
        },
        {
            ID: "I205",
            COMUNE: "SANTA GIUSTA"
        },
        {
            ID: "I206",
            COMUNE: "SANTA GIUSTINA"
        },
        {
            ID: "I207",
            COMUNE: "SANTA GIUSTINA IN COLLE"
        },
        {
            ID: "I217",
            COMUNE: "SANTA LUCE"
        },
        {
            ID: "I220",
            COMUNE: "SANTA LUCIA DEL MELA"
        },
        {
            ID: "I221",
            COMUNE: "SANTA LUCIA DI PIAVE"
        },
        {
            ID: "I219",
            COMUNE: "SANTA LUCIA DI SERINO"
        },
        {
            ID: "I226",
            COMUNE: "SANTA MARGHERITA D'ADIGE"
        },
        {
            ID: "I224",
            COMUNE: "SANTA MARGHERITA DI BELICE"
        },
        {
            ID: "I230",
            COMUNE: "SANTA MARGHERITA DI STAFFORA"
        },
        {
            ID: "I225",
            COMUNE: "SANTA MARGHERITA LIGURE"
        },
        {
            ID: "I232",
            COMUNE: "SANTA MARIA A MONTE"
        },
        {
            ID: "I233",
            COMUNE: "SANTA MARIA A VICO"
        },
        {
            ID: "I234",
            COMUNE: "SANTA MARIA CAPUA VETERE"
        },
        {
            ID: "M284",
            COMUNE: "SANTA MARIA COGHINAS"
        },
        {
            ID: "C717",
            COMUNE: "SANTA MARIA DEL CEDRO"
        },
        {
            ID: "I238",
            COMUNE: "SANTA MARIA DEL MOLISE"
        },
        {
            ID: "I237",
            COMUNE: "SANTA MARIA DELLA VERSA"
        },
        {
            ID: "I240",
            COMUNE: "SANTA MARIA DI LICODIA"
        },
        {
            ID: "I242",
            COMUNE: "SANTA MARIA DI SALA"
        },
        {
            ID: "I243",
            COMUNE: "SANTA MARIA HOE'"
        },
        {
            ID: "I244",
            COMUNE: "SANTA MARIA IMBARO"
        },
        {
            ID: "M273",
            COMUNE: "SANTA MARIA LA CARITA'"
        },
        {
            ID: "I247",
            COMUNE: "SANTA MARIA LA FOSSA"
        },
        {
            ID: "I248",
            COMUNE: "SANTA MARIA LA LONGA"
        },
        {
            ID: "I249",
            COMUNE: "SANTA MARIA MAGGIORE"
        },
        {
            ID: "I251",
            COMUNE: "SANTA MARIA NUOVA"
        },
        {
            ID: "I253",
            COMUNE: "SANTA MARINA"
        },
        {
            ID: "I254",
            COMUNE: "SANTA MARINA SALINA"
        },
        {
            ID: "I255",
            COMUNE: "SANTA MARINELLA"
        },
        {
            ID: "I291",
            COMUNE: "SANTA NINFA"
        },
        {
            ID: "I301",
            COMUNE: "SANTA PAOLINA"
        },
        {
            ID: "I308",
            COMUNE: "SANTA SEVERINA"
        },
        {
            ID: "I310",
            COMUNE: "SANTA SOFIA"
        },
        {
            ID: "I309",
            COMUNE: "SANTA SOFIA D'EPIRO"
        },
        {
            ID: "I311",
            COMUNE: "SANTA TERESA DI RIVA"
        },
        {
            ID: "I312",
            COMUNE: "SANTA TERESA GALLURA"
        },
        {
            ID: "I314",
            COMUNE: "SANTA VENERINA"
        },
        {
            ID: "I316",
            COMUNE: "SANTA VITTORIA D'ALBA"
        },
        {
            ID: "I315",
            COMUNE: "SANTA VITTORIA IN MATENANO"
        },
        {
            ID: "I182",
            COMUNE: "SANTADI"
        },
        {
            ID: "I189",
            COMUNE: "SANT'AGAPITO"
        },
        {
            ID: "I191",
            COMUNE: "SANT'AGATA BOLOGNESE"
        },
        {
            ID: "I197",
            COMUNE: "SANT'AGATA DE' GOTI"
        },
        {
            ID: "I198",
            COMUNE: "SANT'AGATA DEL BIANCO"
        },
        {
            ID: "I192",
            COMUNE: "SANT'AGATA DI ESARO"
        },
        {
            ID: "I199",
            COMUNE: "SANT'AGATA DI MILITELLO"
        },
        {
            ID: "I193",
            COMUNE: "SANT'AGATA DI PUGLIA"
        },
        {
            ID: "I201",
            COMUNE: "SANT'AGATA FELTRIA"
        },
        {
            ID: "I190",
            COMUNE: "SANT'AGATA FOSSILI"
        },
        {
            ID: "I202",
            COMUNE: "SANT'AGATA LI BATTIATI"
        },
        {
            ID: "I196",
            COMUNE: "SANT'AGATA SUL SANTERNO"
        },
        {
            ID: "I208",
            COMUNE: "SANT'AGNELLO"
        },
        {
            ID: "I209",
            COMUNE: "SANT'AGOSTINO"
        },
        {
            ID: "I210",
            COMUNE: "SANT'ALBANO STURA"
        },
        {
            ID: "I213",
            COMUNE: "SANT'ALESSIO CON VIALONE"
        },
        {
            ID: "I214",
            COMUNE: "SANT'ALESSIO IN ASPROMONTE"
        },
        {
            ID: "I215",
            COMUNE: "SANT'ALESSIO SICULO"
        },
        {
            ID: "I216",
            COMUNE: "SANT'ALFIO"
        },
        {
            ID: "I258",
            COMUNE: "SANT'AMBROGIO DI TORINO"
        },
        {
            ID: "I259",
            COMUNE: "SANT'AMBROGIO DI VALPOLICELLA"
        },
        {
            ID: "I256",
            COMUNE: "SANT'AMBROGIO SUL GARIGLIANO"
        },
        {
            ID: "I262",
            COMUNE: "SANT'ANASTASIA"
        },
        {
            ID: "I263",
            COMUNE: "SANT'ANATOLIA DI NARCO"
        },
        {
            ID: "I266",
            COMUNE: "SANT'ANDREA APOSTOLO DELLO IONIO"
        },
        {
            ID: "I265",
            COMUNE: "SANT'ANDREA DEL GARIGLIANO"
        },
        {
            ID: "I264",
            COMUNE: "SANT'ANDREA DI CONZA"
        },
        {
            ID: "I271",
            COMUNE: "SANT'ANDREA FRIUS"
        },
        {
            ID: "I277",
            COMUNE: "SANT'ANGELO A CUPOLO"
        },
        {
            ID: "I278",
            COMUNE: "SANT'ANGELO A FASANELLA"
        },
        {
            ID: "I280",
            COMUNE: "SANT'ANGELO A SCALA"
        },
        {
            ID: "I279",
            COMUNE: "SANT'ANGELO ALL'ESCA"
        },
        {
            ID: "I273",
            COMUNE: "SANT'ANGELO D'ALIFE"
        },
        {
            ID: "I281",
            COMUNE: "SANT'ANGELO DEI LOMBARDI"
        },
        {
            ID: "I282",
            COMUNE: "SANT'ANGELO DEL PESCO"
        },
        {
            ID: "I283",
            COMUNE: "SANT'ANGELO DI BROLO"
        },
        {
            ID: "I275",
            COMUNE: "SANT'ANGELO DI PIOVE DI SACCO"
        },
        {
            ID: "I285",
            COMUNE: "SANT'ANGELO IN LIZZOLA"
        },
        {
            ID: "I286",
            COMUNE: "SANT'ANGELO IN PONTANO"
        },
        {
            ID: "I287",
            COMUNE: "SANT'ANGELO IN VADO"
        },
        {
            ID: "I288",
            COMUNE: "SANT'ANGELO LE FRATTE"
        },
        {
            ID: "I289",
            COMUNE: "SANT'ANGELO LIMOSANO"
        },
        {
            ID: "I274",
            COMUNE: "SANT'ANGELO LODIGIANO"
        },
        {
            ID: "I276",
            COMUNE: "SANT'ANGELO LOMELLINA"
        },
        {
            ID: "I290",
            COMUNE: "SANT'ANGELO MUXARO"
        },
        {
            ID: "I284",
            COMUNE: "SANT'ANGELO ROMANO"
        },
        {
            ID: "M209",
            COMUNE: "SANT'ANNA ARRESI"
        },
        {
            ID: "I292",
            COMUNE: "SANT'ANNA D'ALFAEDO"
        },
        {
            ID: "I293",
            COMUNE: "SANT'ANTIMO"
        },
        {
            ID: "I294",
            COMUNE: "SANT'ANTIOCO"
        },
        {
            ID: "I296",
            COMUNE: "SANT'ANTONINO DI SUSA"
        },
        {
            ID: "I300",
            COMUNE: "SANT'ANTONIO ABATE"
        },
        {
            ID: "M276",
            COMUNE: "SANT'ANTONIO DI GALLURA"
        },
        {
            ID: "I302",
            COMUNE: "SANT'APOLLINARE"
        },
        {
            ID: "I305",
            COMUNE: "SANT'ARCANGELO"
        },
        {
            ID: "I304",
            COMUNE: "SANTARCANGELO DI ROMAGNA"
        },
        {
            ID: "F557",
            COMUNE: "SANT'ARCANGELO TRIMONTE"
        },
        {
            ID: "I306",
            COMUNE: "SANT'ARPINO"
        },
        {
            ID: "I307",
            COMUNE: "SANT'ARSENIO"
        },
        {
            ID: "I326",
            COMUNE: "SANTE MARIE"
        },
        {
            ID: "I318",
            COMUNE: "SANT'EGIDIO ALLA VIBRATA"
        },
        {
            ID: "I317",
            COMUNE: "SANT'EGIDIO DEL MONTE ALBINO"
        },
        {
            ID: "I319",
            COMUNE: "SANT'ELENA"
        },
        {
            ID: "B466",
            COMUNE: "SANT'ELENA SANNITA"
        },
        {
            ID: "I320",
            COMUNE: "SANT'ELIA A PIANISI"
        },
        {
            ID: "I321",
            COMUNE: "SANT'ELIA FIUMERAPIDO"
        },
        {
            ID: "I324",
            COMUNE: "SANT'ELPIDIO A MARE"
        },
        {
            ID: "I327",
            COMUNE: "SANTENA"
        },
        {
            ID: "I330",
            COMUNE: "SANTERAMO IN COLLE"
        },
        {
            ID: "I332",
            COMUNE: "SANT'EUFEMIA A MAIELLA"
        },
        {
            ID: "I333",
            COMUNE: "SANT'EUFEMIA D'ASPROMONTE"
        },
        {
            ID: "I335",
            COMUNE: "SANT'EUSANIO DEL SANGRO"
        },
        {
            ID: "I336",
            COMUNE: "SANT'EUSANIO FORCONESE"
        },
        {
            ID: "I337",
            COMUNE: "SANTHIA'"
        },
        {
            ID: "I339",
            COMUNE: "SANTI COSMA E DAMIANO"
        },
        {
            ID: "I341",
            COMUNE: "SANT'ILARIO DELLO IONIO"
        },
        {
            ID: "I342",
            COMUNE: "SANT'ILARIO D'ENZA"
        },
        {
            ID: "I344",
            COMUNE: "SANT'IPPOLITO"
        },
        {
            ID: "I365",
            COMUNE: "SANTO STEFANO AL MARE"
        },
        {
            ID: "I367",
            COMUNE: "SANTO STEFANO BELBO"
        },
        {
            ID: "I368",
            COMUNE: "SANTO STEFANO D'AVETO"
        },
        {
            ID: "I357",
            COMUNE: "SANTO STEFANO DEL SOLE"
        },
        {
            ID: "C919",
            COMUNE: "SANTO STEFANO DI CADORE"
        },
        {
            ID: "I370",
            COMUNE: "SANTO STEFANO DI CAMASTRA"
        },
        {
            ID: "I363",
            COMUNE: "SANTO STEFANO DI MAGRA"
        },
        {
            ID: "I359",
            COMUNE: "SANTO STEFANO DI ROGLIANO"
        },
        {
            ID: "I360",
            COMUNE: "SANTO STEFANO DI SESSANIO"
        },
        {
            ID: "I371",
            COMUNE: "SANTO STEFANO IN ASPROMONTE"
        },
        {
            ID: "I362",
            COMUNE: "SANTO STEFANO LODIGIANO"
        },
        {
            ID: "I356",
            COMUNE: "SANTO STEFANO QUISQUINA"
        },
        {
            ID: "I372",
            COMUNE: "SANTO STEFANO ROERO"
        },
        {
            ID: "I361",
            COMUNE: "SANTO STEFANO TICINO"
        },
        {
            ID: "I346",
            COMUNE: "SANT'OLCESE"
        },
        {
            ID: "I260",
            COMUNE: "SANTOMENNA"
        },
        {
            ID: "I348",
            COMUNE: "SANT'OMERO"
        },
        {
            ID: "M333",
            COMUNE: "SANT'OMOBONO TERME"
        },
        {
            ID: "I349",
            COMUNE: "SANT'OMOBONO TERME"
        },
        {
            ID: "I350",
            COMUNE: "SANT'ONOFRIO"
        },
        {
            ID: "I351",
            COMUNE: "SANTOPADRE"
        },
        {
            ID: "I352",
            COMUNE: "SANT'ORESTE"
        },
        {
            ID: "I353",
            COMUNE: "SANTORSO"
        },
        {
            ID: "I354",
            COMUNE: "SANT'ORSOLA TERME"
        },
        {
            ID: "I374",
            COMUNE: "SANTU LUSSURGIU"
        },
        {
            ID: "I375",
            COMUNE: "SANT'URBANO"
        },
        {
            ID: "I410",
            COMUNE: "SANZA"
        },
        {
            ID: "I411",
            COMUNE: "SANZENO"
        },
        {
            ID: "I418",
            COMUNE: "SAONARA"
        },
        {
            ID: "I420",
            COMUNE: "SAPONARA"
        },
        {
            ID: "I421",
            COMUNE: "SAPPADA"
        },
        {
            ID: "I422",
            COMUNE: "SAPRI"
        },
        {
            ID: "I423",
            COMUNE: "SARACENA"
        },
        {
            ID: "I424",
            COMUNE: "SARACINESCO"
        },
        {
            ID: "I425",
            COMUNE: "SARCEDO"
        },
        {
            ID: "I426",
            COMUNE: "SARCONI"
        },
        {
            ID: "I428",
            COMUNE: "SARDARA"
        },
        {
            ID: "I429",
            COMUNE: "SARDIGLIANO"
        },
        {
            ID: "I430",
            COMUNE: "SAREGO"
        },
        {
            ID: "I431",
            COMUNE: "SARENTINO .SARNTAL."
        },
        {
            ID: "I432",
            COMUNE: "SAREZZANO"
        },
        {
            ID: "I433",
            COMUNE: "SAREZZO"
        },
        {
            ID: "I434",
            COMUNE: "SARMATO"
        },
        {
            ID: "I435",
            COMUNE: "SARMEDE"
        },
        {
            ID: "I436",
            COMUNE: "SARNANO"
        },
        {
            ID: "I437",
            COMUNE: "SARNICO"
        },
        {
            ID: "I438",
            COMUNE: "SARNO"
        },
        {
            ID: "I439",
            COMUNE: "SARNONICO"
        },
        {
            ID: "I441",
            COMUNE: "SARONNO"
        },
        {
            ID: "I442",
            COMUNE: "SARRE"
        },
        {
            ID: "I443",
            COMUNE: "SARROCH"
        },
        {
            ID: "I444",
            COMUNE: "SARSINA"
        },
        {
            ID: "I445",
            COMUNE: "SARTEANO"
        },
        {
            ID: "I447",
            COMUNE: "SARTIRANA LOMELLINA"
        },
        {
            ID: "I448",
            COMUNE: "SARULE"
        },
        {
            ID: "I449",
            COMUNE: "SARZANA"
        },
        {
            ID: "I451",
            COMUNE: "SASSANO"
        },
        {
            ID: "I452",
            COMUNE: "SASSARI"
        },
        {
            ID: "I453",
            COMUNE: "SASSELLO"
        },
        {
            ID: "I454",
            COMUNE: "SASSETTA"
        },
        {
            ID: "I455",
            COMUNE: "SASSINORO"
        },
        {
            ID: "I457",
            COMUNE: "SASSO DI CASTALDA"
        },
        {
            ID: "G972",
            COMUNE: "SASSO MARCONI"
        },
        {
            ID: "I459",
            COMUNE: "SASSOCORVARO"
        },
        {
            ID: "M413",
            COMUNE: "SASSOCORVARO AUDITORE"
        },
        {
            ID: "I460",
            COMUNE: "SASSOFELTRIO"
        },
        {
            ID: "I461",
            COMUNE: "SASSOFERRATO"
        },
        {
            ID: "I462",
            COMUNE: "SASSUOLO"
        },
        {
            ID: "I463",
            COMUNE: "SATRIANO"
        },
        {
            ID: "G614",
            COMUNE: "SATRIANO DI LUCANIA"
        },
        {
            ID: "I464",
            COMUNE: "SAURIS"
        },
        {
            ID: "I465",
            COMUNE: "SAUZE DI CESANA"
        },
        {
            ID: "I466",
            COMUNE: "SAUZE D'OULX"
        },
        {
            ID: "I467",
            COMUNE: "SAVA"
        },
        {
            ID: "I468",
            COMUNE: "SAVELLI"
        },
        {
            ID: "I469",
            COMUNE: "SAVIANO"
        },
        {
            ID: "I470",
            COMUNE: "SAVIGLIANO"
        },
        {
            ID: "I471",
            COMUNE: "SAVIGNANO IRPINO"
        },
        {
            ID: "I473",
            COMUNE: "SAVIGNANO SUL PANARO"
        },
        {
            ID: "I472",
            COMUNE: "SAVIGNANO SUL RUBICONE"
        },
        {
            ID: "I474",
            COMUNE: "SAVIGNO"
        },
        {
            ID: "I475",
            COMUNE: "SAVIGNONE"
        },
        {
            ID: "I476",
            COMUNE: "SAVIORE DELL'ADAMELLO"
        },
        {
            ID: "I477",
            COMUNE: "SAVOCA"
        },
        {
            ID: "I478",
            COMUNE: "SAVOGNA"
        },
        {
            ID: "I479",
            COMUNE: "SAVOGNA D'ISONZO"
        },
        {
            ID: "H730",
            COMUNE: "SAVOIA DI LUCANIA"
        },
        {
            ID: "I480",
            COMUNE: "SAVONA"
        },
        {
            ID: "I482",
            COMUNE: "SCAFA"
        },
        {
            ID: "I483",
            COMUNE: "SCAFATI"
        },
        {
            ID: "I484",
            COMUNE: "SCAGNELLO"
        },
        {
            ID: "I486",
            COMUNE: "SCALA"
        },
        {
            ID: "I485",
            COMUNE: "SCALA COELI"
        },
        {
            ID: "I487",
            COMUNE: "SCALDASOLE"
        },
        {
            ID: "I489",
            COMUNE: "SCALEA"
        },
        {
            ID: "I490",
            COMUNE: "SCALENGHE"
        },
        {
            ID: "I492",
            COMUNE: "SCALETTA ZANCLEA"
        },
        {
            ID: "I493",
            COMUNE: "SCAMPITELLA"
        },
        {
            ID: "I494",
            COMUNE: "SCANDALE"
        },
        {
            ID: "I496",
            COMUNE: "SCANDIANO"
        },
        {
            ID: "B962",
            COMUNE: "SCANDICCI"
        },
        {
            ID: "I497",
            COMUNE: "SCANDOLARA RAVARA"
        },
        {
            ID: "I498",
            COMUNE: "SCANDOLARA RIPA D'OGLIO"
        },
        {
            ID: "I499",
            COMUNE: "SCANDRIGLIA"
        },
        {
            ID: "I501",
            COMUNE: "SCANNO"
        },
        {
            ID: "I503",
            COMUNE: "SCANO DI MONTIFERRO"
        },
        {
            ID: "I504",
            COMUNE: "SCANSANO"
        },
        {
            ID: "M256",
            COMUNE: "SCANZANO JONICO"
        },
        {
            ID: "I506",
            COMUNE: "SCANZOROSCIATE"
        },
        {
            ID: "I507",
            COMUNE: "SCAPOLI"
        },
        {
            ID: "I510",
            COMUNE: "SCARLINO"
        },
        {
            ID: "I511",
            COMUNE: "SCARMAGNO"
        },
        {
            ID: "I512",
            COMUNE: "SCARNAFIGI"
        },
        {
            ID: "I514",
            COMUNE: "SCARPERIA"
        },
        {
            ID: "M326",
            COMUNE: "SCARPERIA E SAN PIERO"
        },
        {
            ID: "I519",
            COMUNE: "SCENA .SCHENNA."
        },
        {
            ID: "I520",
            COMUNE: "SCERNI"
        },
        {
            ID: "I522",
            COMUNE: "SCHEGGIA E PASCELUPO"
        },
        {
            ID: "I523",
            COMUNE: "SCHEGGINO"
        },
        {
            ID: "I526",
            COMUNE: "SCHIAVI DI ABRUZZO"
        },
        {
            ID: "I527",
            COMUNE: "SCHIAVON"
        },
        {
            ID: "I529",
            COMUNE: "SCHIGNANO"
        },
        {
            ID: "I530",
            COMUNE: "SCHILPARIO"
        },
        {
            ID: "I531",
            COMUNE: "SCHIO"
        },
        {
            ID: "I532",
            COMUNE: "SCHIVENOGLIA"
        },
        {
            ID: "I533",
            COMUNE: "SCIACCA"
        },
        {
            ID: "I534",
            COMUNE: "SCIARA"
        },
        {
            ID: "I535",
            COMUNE: "SCICLI"
        },
        {
            ID: "I536",
            COMUNE: "SCIDO"
        },
        {
            ID: "D290",
            COMUNE: "SCIGLIANO"
        },
        {
            ID: "I537",
            COMUNE: "SCILLA"
        },
        {
            ID: "I538",
            COMUNE: "SCILLATO"
        },
        {
            ID: "I539",
            COMUNE: "SCIOLZE"
        },
        {
            ID: "I540",
            COMUNE: "SCISCIANO"
        },
        {
            ID: "I541",
            COMUNE: "SCLAFANI BAGNI"
        },
        {
            ID: "I543",
            COMUNE: "SCONTRONE"
        },
        {
            ID: "I544",
            COMUNE: "SCOPA"
        },
        {
            ID: "I545",
            COMUNE: "SCOPELLO"
        },
        {
            ID: "I546",
            COMUNE: "SCOPPITO"
        },
        {
            ID: "I548",
            COMUNE: "SCORDIA"
        },
        {
            ID: "I549",
            COMUNE: "SCORRANO"
        },
        {
            ID: "I551",
            COMUNE: "SCORZE'"
        },
        {
            ID: "I553",
            COMUNE: "SCURCOLA MARSICANA"
        },
        {
            ID: "I554",
            COMUNE: "SCURELLE"
        },
        {
            ID: "I555",
            COMUNE: "SCURZOLENGO"
        },
        {
            ID: "I556",
            COMUNE: "SEBORGA"
        },
        {
            ID: "I558",
            COMUNE: "SECINARO"
        },
        {
            ID: "I559",
            COMUNE: "SECLI'"
        },
        {
            ID: "I561",
            COMUNE: "SECUGNAGO"
        },
        {
            ID: "I562",
            COMUNE: "SEDEGLIANO"
        },
        {
            ID: "I563",
            COMUNE: "SEDICO"
        },
        {
            ID: "I564",
            COMUNE: "SEDILO"
        },
        {
            ID: "I565",
            COMUNE: "SEDINI"
        },
        {
            ID: "I566",
            COMUNE: "SEDRIANO"
        },
        {
            ID: "I567",
            COMUNE: "SEDRINA"
        },
        {
            ID: "I569",
            COMUNE: "SEFRO"
        },
        {
            ID: "I570",
            COMUNE: "SEGARIU"
        },
        {
            ID: "I571",
            COMUNE: "SEGGIANO"
        },
        {
            ID: "I573",
            COMUNE: "SEGNI"
        },
        {
            ID: "I576",
            COMUNE: "SEGONZANO"
        },
        {
            ID: "I577",
            COMUNE: "SEGRATE"
        },
        {
            ID: "I578",
            COMUNE: "SEGUSINO"
        },
        {
            ID: "I580",
            COMUNE: "SELARGIUS"
        },
        {
            ID: "I581",
            COMUNE: "SELCI"
        },
        {
            ID: "I582",
            COMUNE: "SELEGAS"
        },
        {
            ID: "M360",
            COMUNE: "SELLA GIUDICARIE"
        },
        {
            ID: "I585",
            COMUNE: "SELLANO"
        },
        {
            ID: "I588",
            COMUNE: "SELLERO"
        },
        {
            ID: "I589",
            COMUNE: "SELLIA"
        },
        {
            ID: "I590",
            COMUNE: "SELLIA MARINA"
        },
        {
            ID: "I593",
            COMUNE: "SELVA DEI MOLINI .MUEHLWALD."
        },
        {
            ID: "I592",
            COMUNE: "SELVA DI CADORE"
        },
        {
            ID: "I594",
            COMUNE: "SELVA DI PROGNO"
        },
        {
            ID: "I591",
            COMUNE: "SELVA DI VAL GARDENA .WOLKENSTEIN IN GROEDEN."
        },
        {
            ID: "I595",
            COMUNE: "SELVAZZANO DENTRO"
        },
        {
            ID: "I596",
            COMUNE: "SELVE MARCONE"
        },
        {
            ID: "I597",
            COMUNE: "SELVINO"
        },
        {
            ID: "I598",
            COMUNE: "SEMESTENE"
        },
        {
            ID: "I599",
            COMUNE: "SEMIANA"
        },
        {
            ID: "I600",
            COMUNE: "SEMINARA"
        },
        {
            ID: "I601",
            COMUNE: "SEMPRONIANO"
        },
        {
            ID: "I602",
            COMUNE: "SENAGO"
        },
        {
            ID: "I604",
            COMUNE: "SENALES .SCHNALS."
        },
        {
            ID: "I603",
            COMUNE: "SENALE-SAN FELICE .UNSERE LIEBE FRAU IM WALD."
        },
        {
            ID: "I605",
            COMUNE: "SENEGHE"
        },
        {
            ID: "I606",
            COMUNE: "SENERCHIA"
        },
        {
            ID: "I607",
            COMUNE: "SENIGA"
        },
        {
            ID: "I608",
            COMUNE: "SENIGALLIA"
        },
        {
            ID: "I609",
            COMUNE: "SENIS"
        },
        {
            ID: "I610",
            COMUNE: "SENISE"
        },
        {
            ID: "I611",
            COMUNE: "SENNA COMASCO"
        },
        {
            ID: "I612",
            COMUNE: "SENNA LODIGIANA"
        },
        {
            ID: "I613",
            COMUNE: "SENNARIOLO"
        },
        {
            ID: "I614",
            COMUNE: "SENNORI"
        },
        {
            ID: "I615",
            COMUNE: "SENORBI'"
        },
        {
            ID: "I618",
            COMUNE: "SEPINO"
        },
        {
            ID: "I619",
            COMUNE: "SEPPIANA"
        },
        {
            ID: "I621",
            COMUNE: "SEQUALS"
        },
        {
            ID: "I622",
            COMUNE: "SERAVEZZA"
        },
        {
            ID: "I624",
            COMUNE: "SERDIANA"
        },
        {
            ID: "I625",
            COMUNE: "SEREGNO"
        },
        {
            ID: "I626",
            COMUNE: "SEREN DEL GRAPPA"
        },
        {
            ID: "I627",
            COMUNE: "SERGNANO"
        },
        {
            ID: "I628",
            COMUNE: "SERIATE"
        },
        {
            ID: "I629",
            COMUNE: "SERINA"
        },
        {
            ID: "I630",
            COMUNE: "SERINO"
        },
        {
            ID: "I631",
            COMUNE: "SERLE"
        },
        {
            ID: "I632",
            COMUNE: "SERMIDE E FELONICA"
        },
        {
            ID: "I634",
            COMUNE: "SERMONETA"
        },
        {
            ID: "I635",
            COMUNE: "SERNAGLIA DELLA BATTAGLIA"
        },
        {
            ID: "I636",
            COMUNE: "SERNIO"
        },
        {
            ID: "I637",
            COMUNE: "SEROLE"
        },
        {
            ID: "I642",
            COMUNE: "SERRA D'AIELLO"
        },
        {
            ID: "I643",
            COMUNE: "SERRA DE' CONTI"
        },
        {
            ID: "I650",
            COMUNE: "SERRA PEDACE"
        },
        {
            ID: "I640",
            COMUNE: "SERRA RICCO'"
        },
        {
            ID: "I639",
            COMUNE: "SERRA SAN BRUNO"
        },
        {
            ID: "I653",
            COMUNE: "SERRA SAN QUIRICO"
        },
        {
            ID: "I654",
            COMUNE: "SERRA SANT'ABBONDIO"
        },
        {
            ID: "I641",
            COMUNE: "SERRACAPRIOLA"
        },
        {
            ID: "I644",
            COMUNE: "SERRADIFALCO"
        },
        {
            ID: "I646",
            COMUNE: "SERRALUNGA D'ALBA"
        },
        {
            ID: "I645",
            COMUNE: "SERRALUNGA DI CREA"
        },
        {
            ID: "I647",
            COMUNE: "SERRAMANNA"
        },
        {
            ID: "F357",
            COMUNE: "SERRAMAZZONI"
        },
        {
            ID: "I648",
            COMUNE: "SERRAMEZZANA"
        },
        {
            ID: "I649",
            COMUNE: "SERRAMONACESCA"
        },
        {
            ID: "I651",
            COMUNE: "SERRAPETRONA"
        },
        {
            ID: "I652",
            COMUNE: "SERRARA FONTANA"
        },
        {
            ID: "I655",
            COMUNE: "SERRASTRETTA"
        },
        {
            ID: "I656",
            COMUNE: "SERRATA"
        },
        {
            ID: "I662",
            COMUNE: "SERRAVALLE A PO"
        },
        {
            ID: "I661",
            COMUNE: "SERRAVALLE DI CHIENTI"
        },
        {
            ID: "I659",
            COMUNE: "SERRAVALLE LANGHE"
        },
        {
            ID: "I660",
            COMUNE: "SERRAVALLE PISTOIESE"
        },
        {
            ID: "I657",
            COMUNE: "SERRAVALLE SCRIVIA"
        },
        {
            ID: "I663",
            COMUNE: "SERRAVALLE SESIA"
        },
        {
            ID: "I666",
            COMUNE: "SERRE"
        },
        {
            ID: "I667",
            COMUNE: "SERRENTI"
        },
        {
            ID: "I668",
            COMUNE: "SERRI"
        },
        {
            ID: "I669",
            COMUNE: "SERRONE"
        },
        {
            ID: "I670",
            COMUNE: "SERRUNGARINA"
        },
        {
            ID: "I671",
            COMUNE: "SERSALE"
        },
        {
            ID: "C070",
            COMUNE: "SERVIGLIANO"
        },
        {
            ID: "I676",
            COMUNE: "SESSA AURUNCA"
        },
        {
            ID: "I677",
            COMUNE: "SESSA CILENTO"
        },
        {
            ID: "I678",
            COMUNE: "SESSAME"
        },
        {
            ID: "I679",
            COMUNE: "SESSANO DEL MOLISE"
        },
        {
            ID: "E070",
            COMUNE: "SESTA GODANO"
        },
        {
            ID: "I681",
            COMUNE: "SESTINO"
        },
        {
            ID: "I686",
            COMUNE: "SESTO AL REGHENA"
        },
        {
            ID: "I688",
            COMUNE: "SESTO CALENDE"
        },
        {
            ID: "I682",
            COMUNE: "SESTO CAMPANO"
        },
        {
            ID: "I683",
            COMUNE: "SESTO ED UNITI"
        },
        {
            ID: "I684",
            COMUNE: "SESTO FIORENTINO"
        },
        {
            ID: "I690",
            COMUNE: "SESTO SAN GIOVANNI"
        },
        {
            ID: "I687",
            COMUNE: "SESTO .SEXTEN."
        },
        {
            ID: "I689",
            COMUNE: "SESTOLA"
        },
        {
            ID: "I693",
            COMUNE: "SESTRI LEVANTE"
        },
        {
            ID: "I692",
            COMUNE: "SESTRIERE"
        },
        {
            ID: "I695",
            COMUNE: "SESTU"
        },
        {
            ID: "I696",
            COMUNE: "SETTALA"
        },
        {
            ID: "I697",
            COMUNE: "SETTEFRATI"
        },
        {
            ID: "I698",
            COMUNE: "SETTIME"
        },
        {
            ID: "I700",
            COMUNE: "SETTIMO MILANESE"
        },
        {
            ID: "I701",
            COMUNE: "SETTIMO ROTTARO"
        },
        {
            ID: "I699",
            COMUNE: "SETTIMO SAN PIETRO"
        },
        {
            ID: "I703",
            COMUNE: "SETTIMO TORINESE"
        },
        {
            ID: "I702",
            COMUNE: "SETTIMO VITTONE"
        },
        {
            ID: "I704",
            COMUNE: "SETTINGIANO"
        },
        {
            ID: "I705",
            COMUNE: "SETZU"
        },
        {
            ID: "I706",
            COMUNE: "SEUI"
        },
        {
            ID: "I707",
            COMUNE: "SEULO"
        },
        {
            ID: "I709",
            COMUNE: "SEVESO"
        },
        {
            ID: "I711",
            COMUNE: "SEZZADIO"
        },
        {
            ID: "I712",
            COMUNE: "SEZZE"
        },
        {
            ID: "I714",
            COMUNE: "SFRUZ"
        },
        {
            ID: "I715",
            COMUNE: "SGONICO"
        },
        {
            ID: "I716",
            COMUNE: "SGURGOLA"
        },
        {
            ID: "I717",
            COMUNE: "SIAMAGGIORE"
        },
        {
            ID: "I718",
            COMUNE: "SIAMANNA"
        },
        {
            ID: "I720",
            COMUNE: "SIANO"
        },
        {
            ID: "I721",
            COMUNE: "SIAPICCIA"
        },
        {
            ID: "M253",
            COMUNE: "SICIGNANO DEGLI ALBURNI"
        },
        {
            ID: "I723",
            COMUNE: "SICULIANA"
        },
        {
            ID: "I724",
            COMUNE: "SIDDI"
        },
        {
            ID: "I725",
            COMUNE: "SIDERNO"
        },
        {
            ID: "I726",
            COMUNE: "SIENA"
        },
        {
            ID: "I727",
            COMUNE: "SIGILLO"
        },
        {
            ID: "I728",
            COMUNE: "SIGNA"
        },
        {
            ID: "I729",
            COMUNE: "SILANDRO .SCHLANDERS."
        },
        {
            ID: "I730",
            COMUNE: "SILANUS"
        },
        {
            ID: "F116",
            COMUNE: "SILEA"
        },
        {
            ID: "I732",
            COMUNE: "SILIGO"
        },
        {
            ID: "I734",
            COMUNE: "SILIQUA"
        },
        {
            ID: "I735",
            COMUNE: "SILIUS"
        },
        {
            ID: "I737",
            COMUNE: "SILLANO"
        },
        {
            ID: "M347",
            COMUNE: "SILLANO GIUNCUGNANO"
        },
        {
            ID: "I736",
            COMUNE: "SILLAVENGO"
        },
        {
            ID: "I738",
            COMUNE: "SILVANO D'ORBA"
        },
        {
            ID: "I739",
            COMUNE: "SILVANO PIETRA"
        },
        {
            ID: "I741",
            COMUNE: "SILVI"
        },
        {
            ID: "I742",
            COMUNE: "SIMALA"
        },
        {
            ID: "I743",
            COMUNE: "SIMAXIS"
        },
        {
            ID: "I744",
            COMUNE: "SIMBARIO"
        },
        {
            ID: "I745",
            COMUNE: "SIMERI CRICHI"
        },
        {
            ID: "I747",
            COMUNE: "SINAGRA"
        },
        {
            ID: "A468",
            COMUNE: "SINALUNGA"
        },
        {
            ID: "I748",
            COMUNE: "SINDIA"
        },
        {
            ID: "I749",
            COMUNE: "SINI"
        },
        {
            ID: "I750",
            COMUNE: "SINIO"
        },
        {
            ID: "I751",
            COMUNE: "SINISCOLA"
        },
        {
            ID: "I752",
            COMUNE: "SINNAI"
        },
        {
            ID: "I753",
            COMUNE: "SINOPOLI"
        },
        {
            ID: "I754",
            COMUNE: "SIRACUSA"
        },
        {
            ID: "I756",
            COMUNE: "SIRIGNANO"
        },
        {
            ID: "I757",
            COMUNE: "SIRIS"
        },
        {
            ID: "I633",
            COMUNE: "SIRMIONE"
        },
        {
            ID: "I758",
            COMUNE: "SIROLO"
        },
        {
            ID: "I759",
            COMUNE: "SIRONE"
        },
        {
            ID: "I760",
            COMUNE: "SIROR"
        },
        {
            ID: "I761",
            COMUNE: "SIRTORI"
        },
        {
            ID: "I763",
            COMUNE: "SISSA"
        },
        {
            ID: "M325",
            COMUNE: "SISSA TRECASALI"
        },
        {
            ID: "I765",
            COMUNE: "SIURGUS DONIGALA"
        },
        {
            ID: "E265",
            COMUNE: "SIZIANO"
        },
        {
            ID: "I767",
            COMUNE: "SIZZANO"
        },
        {
            ID: "I771",
            COMUNE: "SLUDERNO .SCHLUDERNS."
        },
        {
            ID: "I772",
            COMUNE: "SMARANO"
        },
        {
            ID: "I774",
            COMUNE: "SMERILLO"
        },
        {
            ID: "I775",
            COMUNE: "SOAVE"
        },
        {
            ID: "I777",
            COMUNE: "SOCCHIEVE"
        },
        {
            ID: "I778",
            COMUNE: "SODDI'"
        },
        {
            ID: "I779",
            COMUNE: "SOGLIANO AL RUBICONE"
        },
        {
            ID: "I780",
            COMUNE: "SOGLIANO CAVOUR"
        },
        {
            ID: "I781",
            COMUNE: "SOGLIO"
        },
        {
            ID: "I782",
            COMUNE: "SOIANO DEL LAGO"
        },
        {
            ID: "I783",
            COMUNE: "SOLAGNA"
        },
        {
            ID: "I785",
            COMUNE: "SOLARINO"
        },
        {
            ID: "I786",
            COMUNE: "SOLARO"
        },
        {
            ID: "I787",
            COMUNE: "SOLAROLO"
        },
        {
            ID: "I790",
            COMUNE: "SOLAROLO RAINERIO"
        },
        {
            ID: "I791",
            COMUNE: "SOLARUSSA"
        },
        {
            ID: "I792",
            COMUNE: "SOLBIATE"
        },
        {
            ID: "I793",
            COMUNE: "SOLBIATE ARNO"
        },
        {
            ID: "M412",
            COMUNE: "SOLBIATE CON CAGNO"
        },
        {
            ID: "I794",
            COMUNE: "SOLBIATE OLONA"
        },
        {
            ID: "I796",
            COMUNE: "SOLDANO"
        },
        {
            ID: "I797",
            COMUNE: "SOLEMINIS"
        },
        {
            ID: "I798",
            COMUNE: "SOLERO"
        },
        {
            ID: "I799",
            COMUNE: "SOLESINO"
        },
        {
            ID: "I800",
            COMUNE: "SOLETO"
        },
        {
            ID: "I801",
            COMUNE: "SOLFERINO"
        },
        {
            ID: "I802",
            COMUNE: "SOLIERA"
        },
        {
            ID: "I803",
            COMUNE: "SOLIGNANO"
        },
        {
            ID: "I805",
            COMUNE: "SOLOFRA"
        },
        {
            ID: "I808",
            COMUNE: "SOLONGHELLO"
        },
        {
            ID: "I809",
            COMUNE: "SOLOPACA"
        },
        {
            ID: "I812",
            COMUNE: "SOLTO COLLINA"
        },
        {
            ID: "I813",
            COMUNE: "SOLZA"
        },
        {
            ID: "I815",
            COMUNE: "SOMAGLIA"
        },
        {
            ID: "I817",
            COMUNE: "SOMANO"
        },
        {
            ID: "I819",
            COMUNE: "SOMMA LOMBARDO"
        },
        {
            ID: "I820",
            COMUNE: "SOMMA VESUVIANA"
        },
        {
            ID: "I821",
            COMUNE: "SOMMACAMPAGNA"
        },
        {
            ID: "I822",
            COMUNE: "SOMMARIVA DEL BOSCO"
        },
        {
            ID: "I823",
            COMUNE: "SOMMARIVA PERNO"
        },
        {
            ID: "I824",
            COMUNE: "SOMMATINO"
        },
        {
            ID: "I825",
            COMUNE: "SOMMO"
        },
        {
            ID: "I826",
            COMUNE: "SONA"
        },
        {
            ID: "I827",
            COMUNE: "SONCINO"
        },
        {
            ID: "I828",
            COMUNE: "SONDALO"
        },
        {
            ID: "I829",
            COMUNE: "SONDRIO"
        },
        {
            ID: "I830",
            COMUNE: "SONGAVAZZO"
        },
        {
            ID: "I831",
            COMUNE: "SONICO"
        },
        {
            ID: "I832",
            COMUNE: "SONNINO"
        },
        {
            ID: "I835",
            COMUNE: "SOPRANA"
        },
        {
            ID: "I838",
            COMUNE: "SORA"
        },
        {
            ID: "I839",
            COMUNE: "SORAGA DI FASSA"
        },
        {
            ID: "I840",
            COMUNE: "SORAGNA"
        },
        {
            ID: "I841",
            COMUNE: "SORANO"
        },
        {
            ID: "I844",
            COMUNE: "SORBO SAN BASILE"
        },
        {
            ID: "I843",
            COMUNE: "SORBO SERPICO"
        },
        {
            ID: "I845",
            COMUNE: "SORBOLO"
        },
        {
            ID: "M411",
            COMUNE: "SORBOLO MEZZANI"
        },
        {
            ID: "I847",
            COMUNE: "SORDEVOLO"
        },
        {
            ID: "I848",
            COMUNE: "SORDIO"
        },
        {
            ID: "I849",
            COMUNE: "SORESINA"
        },
        {
            ID: "I850",
            COMUNE: "SORGA'"
        },
        {
            ID: "I851",
            COMUNE: "SORGONO"
        },
        {
            ID: "I852",
            COMUNE: "SORI"
        },
        {
            ID: "I853",
            COMUNE: "SORIANELLO"
        },
        {
            ID: "I854",
            COMUNE: "SORIANO CALABRO"
        },
        {
            ID: "I855",
            COMUNE: "SORIANO NEL CIMINO"
        },
        {
            ID: "I856",
            COMUNE: "SORICO"
        },
        {
            ID: "I857",
            COMUNE: "SORISO"
        },
        {
            ID: "I858",
            COMUNE: "SORISOLE"
        },
        {
            ID: "I860",
            COMUNE: "SORMANO"
        },
        {
            ID: "I861",
            COMUNE: "SORRADILE"
        },
        {
            ID: "I862",
            COMUNE: "SORRENTO"
        },
        {
            ID: "I863",
            COMUNE: "SORSO"
        },
        {
            ID: "I864",
            COMUNE: "SORTINO"
        },
        {
            ID: "I865",
            COMUNE: "SOSPIRO"
        },
        {
            ID: "I866",
            COMUNE: "SOSPIROLO"
        },
        {
            ID: "I867",
            COMUNE: "SOSSANO"
        },
        {
            ID: "I868",
            COMUNE: "SOSTEGNO"
        },
        {
            ID: "I869",
            COMUNE: "SOTTO IL MONTE GIOVANNI XXIII"
        },
        {
            ID: "I871",
            COMUNE: "SOVER"
        },
        {
            ID: "I872",
            COMUNE: "SOVERATO"
        },
        {
            ID: "I873",
            COMUNE: "SOVERE"
        },
        {
            ID: "I874",
            COMUNE: "SOVERIA MANNELLI"
        },
        {
            ID: "I875",
            COMUNE: "SOVERIA SIMERI"
        },
        {
            ID: "I876",
            COMUNE: "SOVERZENE"
        },
        {
            ID: "I877",
            COMUNE: "SOVICILLE"
        },
        {
            ID: "I878",
            COMUNE: "SOVICO"
        },
        {
            ID: "I879",
            COMUNE: "SOVIZZO"
        },
        {
            ID: "I673",
            COMUNE: "SOVRAMONTE"
        },
        {
            ID: "I880",
            COMUNE: "SOZZAGO"
        },
        {
            ID: "I881",
            COMUNE: "SPADAFORA"
        },
        {
            ID: "I884",
            COMUNE: "SPADOLA"
        },
        {
            ID: "I885",
            COMUNE: "SPARANISE"
        },
        {
            ID: "I886",
            COMUNE: "SPARONE"
        },
        {
            ID: "I887",
            COMUNE: "SPECCHIA"
        },
        {
            ID: "I888",
            COMUNE: "SPELLO"
        },
        {
            ID: "I889",
            COMUNE: "SPERA"
        },
        {
            ID: "I891",
            COMUNE: "SPERLINGA"
        },
        {
            ID: "I892",
            COMUNE: "SPERLONGA"
        },
        {
            ID: "I893",
            COMUNE: "SPERONE"
        },
        {
            ID: "I894",
            COMUNE: "SPESSA"
        },
        {
            ID: "I895",
            COMUNE: "SPEZZANO ALBANESE"
        },
        {
            ID: "I896",
            COMUNE: "SPEZZANO DELLA SILA"
        },
        {
            ID: "I898",
            COMUNE: "SPEZZANO PICCOLO"
        },
        {
            ID: "I899",
            COMUNE: "SPIAZZO"
        },
        {
            ID: "I901",
            COMUNE: "SPIGNO MONFERRATO"
        },
        {
            ID: "I902",
            COMUNE: "SPIGNO SATURNIA"
        },
        {
            ID: "I903",
            COMUNE: "SPILAMBERTO"
        },
        {
            ID: "I904",
            COMUNE: "SPILIMBERGO"
        },
        {
            ID: "I905",
            COMUNE: "SPILINGA"
        },
        {
            ID: "I906",
            COMUNE: "SPINADESCO"
        },
        {
            ID: "I907",
            COMUNE: "SPINAZZOLA"
        },
        {
            ID: "I908",
            COMUNE: "SPINEA"
        },
        {
            ID: "I909",
            COMUNE: "SPINEDA"
        },
        {
            ID: "I910",
            COMUNE: "SPINETE"
        },
        {
            ID: "I911",
            COMUNE: "SPINETO SCRIVIA"
        },
        {
            ID: "I912",
            COMUNE: "SPINETOLI"
        },
        {
            ID: "I914",
            COMUNE: "SPINO D'ADDA"
        },
        {
            ID: "I916",
            COMUNE: "SPINONE AL LAGO"
        },
        {
            ID: "I917",
            COMUNE: "SPINOSO"
        },
        {
            ID: "I919",
            COMUNE: "SPIRANO"
        },
        {
            ID: "I921",
            COMUNE: "SPOLETO"
        },
        {
            ID: "I922",
            COMUNE: "SPOLTORE"
        },
        {
            ID: "I923",
            COMUNE: "SPONGANO"
        },
        {
            ID: "I924",
            COMUNE: "SPORMAGGIORE"
        },
        {
            ID: "I925",
            COMUNE: "SPORMINORE"
        },
        {
            ID: "I926",
            COMUNE: "SPOTORNO"
        },
        {
            ID: "I927",
            COMUNE: "SPRESIANO"
        },
        {
            ID: "I928",
            COMUNE: "SPRIANA"
        },
        {
            ID: "I929",
            COMUNE: "SQUILLACE"
        },
        {
            ID: "I930",
            COMUNE: "SQUINZANO"
        },
        {
            ID: "I932",
            COMUNE: "STAFFOLO"
        },
        {
            ID: "I935",
            COMUNE: "STAGNO LOMBARDO"
        },
        {
            ID: "I936",
            COMUNE: "STAITI"
        },
        {
            ID: "I937",
            COMUNE: "STALETTI'"
        },
        {
            ID: "I938",
            COMUNE: "STANGHELLA"
        },
        {
            ID: "I939",
            COMUNE: "STARANZANO"
        },
        {
            ID: "M298",
            COMUNE: "STATTE"
        },
        {
            ID: "I941",
            COMUNE: "STAZZANO"
        },
        {
            ID: "I942",
            COMUNE: "STAZZEMA"
        },
        {
            ID: "I943",
            COMUNE: "STAZZONA"
        },
        {
            ID: "I945",
            COMUNE: "STEFANACONI"
        },
        {
            ID: "I946",
            COMUNE: "STELLA"
        },
        {
            ID: "G887",
            COMUNE: "STELLA CILENTO"
        },
        {
            ID: "I947",
            COMUNE: "STELLANELLO"
        },
        {
            ID: "I948",
            COMUNE: "STELVIO .STILFS."
        },
        {
            ID: "I949",
            COMUNE: "STENICO"
        },
        {
            ID: "I950",
            COMUNE: "STERNATIA"
        },
        {
            ID: "I951",
            COMUNE: "STEZZANO"
        },
        {
            ID: "I952",
            COMUNE: "STIA"
        },
        {
            ID: "I953",
            COMUNE: "STIENTA"
        },
        {
            ID: "I954",
            COMUNE: "STIGLIANO"
        },
        {
            ID: "I955",
            COMUNE: "STIGNANO"
        },
        {
            ID: "I956",
            COMUNE: "STILO"
        },
        {
            ID: "I959",
            COMUNE: "STIMIGLIANO"
        },
        {
            ID: "M290",
            COMUNE: "STINTINO"
        },
        {
            ID: "I960",
            COMUNE: "STIO"
        },
        {
            ID: "I962",
            COMUNE: "STORNARA"
        },
        {
            ID: "I963",
            COMUNE: "STORNARELLA"
        },
        {
            ID: "I964",
            COMUNE: "STORO"
        },
        {
            ID: "I965",
            COMUNE: "STRA"
        },
        {
            ID: "I968",
            COMUNE: "STRADELLA"
        },
        {
            ID: "I969",
            COMUNE: "STRAMBINELLO"
        },
        {
            ID: "I970",
            COMUNE: "STRAMBINO"
        },
        {
            ID: "I973",
            COMUNE: "STRANGOLAGALLI"
        },
        {
            ID: "I974",
            COMUNE: "STREGNA"
        },
        {
            ID: "I975",
            COMUNE: "STREMBO"
        },
        {
            ID: "I976",
            COMUNE: "STRESA"
        },
        {
            ID: "I977",
            COMUNE: "STREVI"
        },
        {
            ID: "I978",
            COMUNE: "STRIANO"
        },
        {
            ID: "I979",
            COMUNE: "STRIGNO"
        },
        {
            ID: "I980",
            COMUNE: "STRONA"
        },
        {
            ID: "I981",
            COMUNE: "STRONCONE"
        },
        {
            ID: "I982",
            COMUNE: "STRONGOLI"
        },
        {
            ID: "I984",
            COMUNE: "STROPPIANA"
        },
        {
            ID: "I985",
            COMUNE: "STROPPO"
        },
        {
            ID: "I986",
            COMUNE: "STROZZA"
        },
        {
            ID: "I990",
            COMUNE: "STURNO"
        },
        {
            ID: "B014",
            COMUNE: "SUARDI"
        },
        {
            ID: "I991",
            COMUNE: "SUBBIANO"
        },
        {
            ID: "I992",
            COMUNE: "SUBIACO"
        },
        {
            ID: "I993",
            COMUNE: "SUCCIVO"
        },
        {
            ID: "I994",
            COMUNE: "SUEGLIO"
        },
        {
            ID: "I995",
            COMUNE: "SUELLI"
        },
        {
            ID: "I996",
            COMUNE: "SUELLO"
        },
        {
            ID: "I997",
            COMUNE: "SUISIO"
        },
        {
            ID: "I998",
            COMUNE: "SULBIATE"
        },
        {
            ID: "I804",
            COMUNE: "SULMONA"
        },
        {
            ID: "L002",
            COMUNE: "SULZANO"
        },
        {
            ID: "L003",
            COMUNE: "SUMIRAGO"
        },
        {
            ID: "L004",
            COMUNE: "SUMMONTE"
        },
        {
            ID: "L006",
            COMUNE: "SUNI"
        },
        {
            ID: "L007",
            COMUNE: "SUNO"
        },
        {
            ID: "L008",
            COMUNE: "SUPERSANO"
        },
        {
            ID: "L009",
            COMUNE: "SUPINO"
        },
        {
            ID: "L010",
            COMUNE: "SURANO"
        },
        {
            ID: "L011",
            COMUNE: "SURBO"
        },
        {
            ID: "L013",
            COMUNE: "SUSA"
        },
        {
            ID: "L014",
            COMUNE: "SUSEGANA"
        },
        {
            ID: "L015",
            COMUNE: "SUSTINENTE"
        },
        {
            ID: "L016",
            COMUNE: "SUTERA"
        },
        {
            ID: "L017",
            COMUNE: "SUTRI"
        },
        {
            ID: "L018",
            COMUNE: "SUTRIO"
        },
        {
            ID: "L019",
            COMUNE: "SUVERETO"
        },
        {
            ID: "L020",
            COMUNE: "SUZZARA"
        },
        {
            ID: ""
        }
    ]
    let p5;
    for(let i = 0; i < codiciCatastali.length; i++) {
        if(codiciCatastali[i].COMUNE === a.toUpperCase()) {
            p5 = codiciCatastali[i].ID;
        }
    }
    return p5;
}