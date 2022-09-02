function CodiceFiscale(cognome, nome, sesso, lNascita, provincia, giorno, mese, anno) {
    let CodFiscale = "";
    let consonanti = /[bcdfghjklmnpqrstvwxyz]/gi
    let vocali = /[aeiou]/gi
    const data = require("./CodiciComuni.json")

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
    let p5;
    for(let i = 0; i < data.length; i++) {
        if(data[i].COMUNE === lNascita.toUpperCase()) {
            p5 = data[i].ID;
        }
    }

    CodFiscale += p5;

    //Calcolo della sedicesima cifra (carattere di controllo)
    let p6;
    let p6_dispari = [];
    for(let i = 0; i <= CodFiscale.length; i = i + 2) { //Caratteri del codice in posizione dispari (1, 3, 5, 7, 9, 11, 13)
        p6_dispari.push(CodFiscale[i])
    }

    let p6_pari = [];
    for(let j = 1; j <= CodFiscale.length; j = j + 2) { //Caratteri del codice in posizione pari (0, 2, 4, 6, 8, 10, 12, 14)
        p6_pari.push(CodFiscale[j])
    }

    let count_pari = 0;
    for(let i = 0; i < p6_pari.length; i++) {
        //Pari
        switch(true) {
            case p6_pari[i] === "0": {
                count_pari += 0;
                break;
            }

            case p6_pari[i] === "1": {
                count_pari += 1;
                break;
            }

            case p6_pari[i] === "2": {
                count_pari += 2;
                break;
            }

            case p6_pari[i] === "3": {
                count_pari += 3;
                break;
            }

            case p6_pari[i] === "4": {
                count_pari += 4;
                break;
            }

            case p6_pari[i] === "5": {
                count_pari += 5;
                break;
            }

            case p6_pari[i] === "6": {
                count_pari += 6;
                break;
            }

            case p6_pari[i] === "7": {
                count_pari += 8;
                break;
            }

            case p6_pari[i] === "8": {
                count_pari += 8;
                break;
            }

            case p6_pari[i] === "9": {
                count_pari += 9;
                break;
            }
            //##################################################
            case p6_pari[i] === "A": {
                count_pari += 0;
                break;
            }

            case p6_pari[i] === "B": {
                count_pari += 1;
                break;
            }

            case p6_pari[i] === "C": {
                count_pari += 2;
                break;
            }

            case p6_pari[i] === "D": {
                count_pari += 3;
                break;
            }

            case p6_pari[i] === "E": {
                count_pari += 4;
                break;
            }

            case p6_pari[i] === "F": {
                count_pari += 5;
                break;
            }

            case p6_pari[i] === "G": {
                count_pari += 6;
                break;
            }

            case p6_pari[i] === "H": {
                count_pari += 8;
                break;
            }

            case p6_pari[i] === "I": {
                count_pari += 8;
                break;
            }

            case p6_pari[i] === "J": {
                count_pari += 9;
                break;
            }

            case p6_pari[i] === "K": {
                count_pari += 10;
                break;
            }

            case p6_pari[i] === "L": {
                count_pari += 11;
                break;
            }

            case p6_pari[i] === "M": {
                count_pari += 12;
                break;
            }

            case p6_pari[i] === "N": {
                count_pari += 13;
                break;
            }

            case p6_pari[i] === "O": {
                count_pari += 14;
                break;
            }

            case p6_pari[i] === "P": {
                count_pari += 15;
                break;
            }

            case p6_pari[i] === "Q": {
                count_pari += 16;
                break;
            }

            case p6_pari[i] === "R": {
                count_pari += 17;
                break;
            }

            case p6_pari[i] === "S": {
                count_pari += 18;
                break;
            }

            case p6_pari[i] === "T": {
                count_pari += 19;
                break;
            }

            case p6_pari[i] === "U": {
                count_pari += 20;
                break;
            }

            case p6_pari[i] === "V": {
                count_pari += 21;
                break;
            }

            case p6_pari[i] === "W": {
                count_pari += 22;
                break;
            }

            case p6_pari[i] === "X": {
                count_pari += 23;
                break;
            }

            case p6_pari[i] === "Y": {
                count_pari += 24;
                break;
            }

            case p6_pari[i] === "Z": {
                count_pari += 25;
                break;
            }
        }
    }

    let count_dispari = 0;
    for(let i = 0; i < p6_dispari.length; i++) {
        //Dispari
        switch(true) {
            case p6_dispari[i] === "0": {
                count_dispari += 1;
                break;
            }

            case p6_dispari[i] === "1": {
                count_dispari += 0;
                break;
            }

            case p6_dispari[i] === "2": {
                count_dispari += 5;
                break;
            }

            case p6_dispari[i] === "3": {
                count_dispari += 7;
                break;
            }

            case p6_pari[i] === "4": {
                count_dispari += 9;
                break;
            }

            case p6_dispari[i] === "5": {
                count_dispari += 13;
                break;
            }

            case p6_dispari[i] === "6": {
                count_dispari += 15;
                break;
            }

            case p6_dispari[i] === "7": {
                count_dispari += 17;
                break;
            }

            case p6_dispari[i] === "8": {
                count_dispari += 19;
                break;
            }

            case p6_dispari[i] === "9": {
                count_dispari += 21;
                break;
            }
            //##################################################
            case p6_dispari[i] === "A": {
                count_dispari += 1;
                break;
            }

            case p6_dispari[i] === "B": {
                count_dispari += 0;
                break;
            }

            case p6_dispari[i] === "C": {
                count_dispari += 5;
                break;
            }

            case p6_dispari[i] === "D": {
                count_dispari += 7;
                break;
            }

            case p6_dispari[i] === "E": {
                count_dispari += 9;
                break;
            }

            case p6_dispari[i] === "F": {
                count_dispari += 13;
                break;
            }

            case p6_dispari[i] === "G": {
                count_dispari += 15;
                break;
            }

            case p6_dispari[i] === "H": {
                count_dispari += 17;
                break;
            }

            case p6_pari[i] === "I": {
                count_dispari += 19;
                break;
            }

            case p6_dispari[i] === "J": {
                count_dispari += 21;
                break;
            }

            case p6_dispari[i] === "K": {
                count_dispari += 2;
                break;
            }

            case p6_dispari[i] === "L": {
                count_dispari += 4;
                break;
            }

            case p6_dispari[i] === "M": {
                count_dispari += 18;
                break;
            }

            case p6_dispari[i] === "N": {
                count_dispari += 20;
                break;
            }

            case p6_dispari[i] === "O": {
                count_dispari += 11;
                break;
            }

            case p6_dispari[i] === "P": {
                count_dispari += 3;
                break;
            }

            case p6_dispari[i] === "Q": {
                count_dispari += 6;
                break;
            }

            case p6_dispari[i] === "R": {
                count_dispari += 8;
                break;
            }

            case p6_dispari[i] === "S": {
                count_dispari += 12;
                break;
            }

            case p6_dispari[i] === "T": {
                count_dispari += 14;
                break;
            }

            case p6_dispari[i] === "U": {
                count_dispari += 16;
                break;
            }

            case p6_dispari[i] === "V": {
                count_dispari += 10;
                break;
            }

            case p6_dispari[i] === "W": {
                count_dispari += 22;
                break;
            }

            case p6_dispari[i] === "X": {
                count_dispari += 25;
                break;
            }

            case p6_dispari[i] === "Y": {
                count_dispari += 24;
                break;
            }

            case p6_dispari[i] === "Z": {
                count_dispari += 23;
                break;
            }
        }
    }

    p6 = ((count_pari + count_dispari) / 26);
    p6 = Math.floor(p6);
    p6 = count_pari + count_dispari - (p6 * 26);

    console.log(count_pari, count_dispari)
    console.log(p6) //resto

    switch(true) {
        case p6 === 0: {
            CodFiscale += "A";
            break;
        }

        case p6 === 1: {
            CodFiscale += "B";
            break;
        }

        case p6 === 2: {
            CodFiscale += "C";
            break;
        }

        case p6 === 3: {
            CodFiscale += "D";
            break;
        }

        case p6 === 4: {
            CodFiscale += "E";
            break;
        }

        case p6 === 5: {
            CodFiscale += "F";
            break;
        }

        case p6 === 6: {
            CodFiscale += "G";
            break;
        }

        case p6 === 7: {
            CodFiscale += "H";
            break;
        }

        case p6 === 8: {
            CodFiscale += "I";
            break;
        }

        case p6 === 9: {
            CodFiscale += "J";
            break;
        }

        case p6 === 10: {
            CodFiscale += "K";
            break;
        }

        case p6 === 11: {
            CodFiscale += "L";
            break;
        }

        case p6 === 12: {
            CodFiscale += "M";
            break;
        }

        case p6 === 13: {
            CodFiscale += "N";
            break;
        }

        case p6 === 14: {
            CodFiscale += "O";
            break;
        }

        case p6 === 15: {
            CodFiscale += "P";
            break;
        }

        case p6 === 16: {
            CodFiscale += "Q";
            break;
        }

        case p6 === 17: {
            CodFiscale += "R";
            break;
        }

        case p6 === 18: {
            CodFiscale += "S";
            break;
        }

        case p6 === 19: {
            CodFiscale += "T";
            break;
        }

        case p6 === 20: {
            CodFiscale += "U";
            break;
        }

        case p6 === 21: {
            CodFiscale += "V";
            break;
        }

        case p6 === 22: {
            CodFiscale += "W";
            break;
        }

        case p6 === 23: {
            CodFiscale += "X";
            break;
        }

        case p6 === 24: {
            CodFiscale += "Y";
            break;
        }

        case p6 === 25: {
            CodFiscale += "Z";
            break;
        }
    }
    return CodFiscale
}

console.log(CodiceFiscale(
    "stabile",
    "mario",
    "m",
    "palermo",
    "pa",
    "10",
    "3",
    "2002"
))
