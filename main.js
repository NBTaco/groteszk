const fejlec = { //letrehozzuk a fejlec objetumat
    nemz: "Nemzetiség", //létrehozzuk a fejlec nemz tulajdonságát
    szerz: "Szerző", //létrehozzuk a fejlec szerz tulajdonságát
    mu: "Mű" //létrehozzuk a fejlec mu tulajdonságát
}

const tomb = [ //létrehozzuk a tombot az objektumoknak
    {
        nemz: "Orosz", //létrehozzuk a tomb elso objektumaának nemz tulajdonságát
        szerz: "Gogol", //létrehozzuk a tomb elso objektumaának szerz tulajdonságát
        mu: "A köpönyeg", //létrehozzuk a tomb elso objektumaának mu tulajdonságát
        szerz2: "Csehov", //létrehozzuk a tomb elso objektumaának szerz2 tulajdonságát
        mu2: "A csinovnyik halála" //létrehozzuk a tomb elso objektumaának mu2 tulajdonságát
    },
    { 
        nemz: "Cseh", //létrehozzuk a tomb masodik objektumának nemz tulajdonságát
        szerz: "Franz Kafka", //létrehozzuk a tomb masodik objektumának szerz tulajdonságát
        mu: "Az átváltozás" //létrehozzuk a tomb masodik objektumának mu tulajdonságát
    },
    { 
        nemz: "Magyar", //létrehozzuk a tomb harmadik objektumának nemz tulajdonságát
        szerz: "Örkény István", //létrehozzuk a tomb harmadik objektumának szerz tulajdonságát
        mu: "Egyperces Novellák", //létrehozzuk a tomb harmadik objektumának mu tulajdonságát
        szerz2: "József Attila", //létrehozzuk a tomb harmadik objektumának szerz2 tulajdonságát
        mu2: "Klárisok" //létrehozzuk a tomb harmadik objektumának mu2 tulajdonságát
    },
    { 
        nemz: "Svájc", //létrehozzuk a tomb negyedik objektumának nemz tulajdonságát
        szerz: "Friedrich Dürrenmatt", //létrehozzuk a tomb negyedik objektumának szerz tulajdonságát
        mu: "A fizikusok" //létrehozzuk a tomb negyedik objektumának mu tulajdonságát
    }
]

const formt = [ //létrehozzuk a tombot a formnak
    {
        label: "Származás:", //létrehozzuk a tomb elso objektumaának label tulajdonságát
        id: "szarmazas", //létrehozzuk a tomb elso objektumaának id tulajdonságát
    },
    {
        label: "1. szerző:", //létrehozzuk a tomb masodik objektumaának label tulajdonságát
        id: "szerzo1", //létrehozzuk a tomb masodik objektumaának id tulajdonságát
    },
    {
        label: "1. szerző műve:", //létrehozzuk a tomb harmadik objektumaának label tulajdonságát
        id: "szerzo1mu", //létrehozzuk a tomb harmadik objektumaának id tulajdonságát
    },
    {
        label: "2. szerző:", //létrehozzuk a tomb negyedik objektumaának label tulajdonságát
        id: "szerzo2", //létrehozzuk a tomb negyedik objektumaának id tulajdonságát
    },
    {
        label: "2. szerző műve:", //létrehozzuk a tomb otodik objektumaának label tulajdonságát
        id: "szerzo2mu", //létrehozzuk a tomb otodik objektumaának id tulajdonságát
    }
]

formGeneralas()//meghivom a formGeneralas fuggvenyt

const table = document.createElement('table') // Létrehozzuk a table- elemet, createElement: string
document.body.appendChild(table) //a table elemet hozzácsatoljuk a body- hoz

/**
 * a függvény véggmegy egy tömbön, ami a megadott paraméter, majd a tömb objektumai alapján létrehoz egy táblázatot, 
 * a fejlecet a fejlecGeneralas függvény használatával csinálja
 * 
 * @param {Array} array //a tömb neve
 */
function RenderTable(array){ //léterhozom a RenderTable függvény, ebben generálódik a táblázat, a tablazat az array paraméter alapján generalodik
    fejlecGeneralas(fejlec) //megivom a fejlecGeneralas fuggvenyt a fejlec objektum paraméerrel

    for(let i = 0; i < tomb.length; i++){ // végigmegyünk a tömbön, az i. objkektummal dolgozunk mindig
        const tbody = document.createElement('tbody') //létrehozunk egy tbody- elemet, createElement: string
        table.appendChild(tbody) //a tbody- elemet hozzácsatoljuk a table- hez

        const tbodyr1 = document.createElement('tr') //létrehozunk egy sort
        tbody.appendChild(tbodyr1) //az 1. sort hozzácsatoljuk a tbody- hoz

        const tbodyr2 = document.createElement('tr') //létrehozunk mégegy sort
        tbody.appendChild(tbodyr2) //az 2. sort hozzácsatoljuk a tbody- hoz

        const aktualis = array[i] //az aktualis  objektumot kivesszuk egy valtozoba
        let index = 0 //az index alapveto erteke 0

        for(const j in aktualis){ //vegigmegyunk az aktualis objektum tulajdonságain
            if(index === 0){ // haz az index 0 akkor megyunk be
                const td1 = document.createElement('td') //létrehozzuk az első sor 1. celláját
                td1.innerHTML = aktualis[j] //beállíjuk a cella szövegét a z aktualis objektum j. tulajdonságaára
                td1.rowSpan = 2 //beállítjuk a rowSpant a cellára
                tbodyr1.appendChild(td1) // hozzácsatoljuk a cellát az 1. sorhoz
            }

            if(index === 1){ // ha az index 1 akkor megyunk be
                const td2 = document.createElement('td') //létrehozzuk az első sor 2. celláját
                td2.innerHTML = aktualis[j] //cella szövege a tomb i. objektumának szerz tulajdosága
                tbodyr1.appendChild(td2) // hozzácsatoljuk a cellát az 1. sorhoz
            }

            if(index === 2){ // ha az index 2 akkor megyunk be
                const td3 = document.createElement('td') //létrehozzuk az első sor 3. celláját
                td3.innerHTML = aktualis[j] //beállíjuk a cella szövegét a z aktualis objektum j. tulajdonságaára
                tbodyr1.appendChild(td3) // hozzácsatoljuk a cellát az 1. sorhoz
            }

            if(index === 3){ // ha az index 3 akkor megyunk be
                const td4 = document.createElement('td') //létrehozzuk a 2. sor 1. celláját
                td4.innerHTML = aktualis[j] //beállíjuk a cella szövegét a z aktualis objektum j. tulajdonságaára
                tbodyr2.appendChild(td4) // hozzácsatoljuk a cellát a 2. sorhoz
            }

            if(index === 4){ // ha az index 4 akkor megyunk be
                const td5 = document.createElement('td') //létrehozzuk a 2. sor  2. celláját
                td5.innerHTML = aktualis[j] //beállíjuk a cella szövegét a z aktualis objektum j. tulajdonságaára
                tbodyr2.appendChild(td5) // hozzácsatoljuk a cellát a 2. sorhoz
            }
            index++ //növeljuk az indexet 1-el
        }
    } 
}
RenderTable(tomb) // meghivom a RenderTable függvényt tomb paraméterrel

/**
 * //a függvény egy validáviós függvény, amely úgy működik, hogy az első paraméter egy HTML elem, amelynek megnézi hogy van e szövege,
 *  ha nincs akkor kírja az errorsz paraméternek megadott szöveget
 * 
 * @param {HTMLElement} elem //a validálni kívánt html elem
 * @param {string} errorsz  //az error szövege
 * @returns True ha van szövege az elemnek , False ha nincs
 */
function validacio(elem, errorsz){ //letrehozzuk a validacio fuggvenyt
    let valid = true //a valid alap erteke true
    if(elem.value === ""){  //akkor megyunk be ha az elem parameter ures
        const parent = elem.parentElement //kivesszuk a prentet egy valtozoba
        const error = parent.querySelector(".error") //kivesszuk a class errort egy valtozoba
        if(error != ""){  //ha az error nem ures akkor megyunk be
            error.innerHTML = errorsz //az error szovege az errorsz parameter lesz
        }
        valid = false //a valid erteket falsera allitjuk
    }
    return valid //a valid ertekevel terunk vissza
}

/**
 * A függvény arra szolgál, hogy két elemet mér össze (elsoelem, masodikelem), ha mindkettő üres akkor nem csinál semmit, 
 * de amennyiben csak az egyik üres akkor a másikhoz kiírja az errorsz paraméternek megadott szövegetm a függvényben használva van a validacio() függvény
 * 
 * @param {HTMLElement} elsoelem 
 * @param {HTMLElement} masodikelem 
 * @param {string} errorsz 
 * @returns True, ha átmegy , False ha nem
 */
function kettovalidacio(elsoelem, masodikelem, errorsz){  //letrehozom a kettovalidacio fuggvenyt
    let valid = true //a valid alap erteke true
    if(elsoelem.value != "" && !validacio(masodikelem, errorsz)){ //ha az elsoelem nem ures, es a masodikeleme validacioja false akkor megyunk be
        valid =false //a validot falsera allitom
    }
    if(masodikelem.value != "" && !validacio(elsoelem, errorsz)){ //ha az masodikelem nem ures, es a elsoelem validacioja false akkor megyunk be
        valid =false //a validot falsera allitom
    }
    return valid //a valid ertekevel terunk vissza
}   

/**
 * //a függvény azt csinálja, hogy a megadott paraméter (objektum) en végigmegy, és annak mintájáralétrehozza a táblázat fejlécét
 * 
 * @param {Object} objektum //a fejlec tulajdonságait tároló objektum
 */
function fejlecGeneralas(objektum){ //letrehozom a fejlecGeneralas fuggvenyt, paramétere egy objektum, ami alapján generál
    const thead = document.createElement('thead') //létrehozunk egy thead- elemet
    table.appendChild(thead) //a thead elemet hozzácsatoljuk a table- hez

    const theadr = document.createElement('tr') //létrehozunk egy tr- elemet
    thead.appendChild(theadr) //a tr elemet hozzácsatoljuk a thead- hez

    for(const i in objektum){ //vegigiteraliunk az objektum tulajdonsagain
        const theadc = document.createElement('th') //létrehozunk egy th- elemet, createElement: string
        theadc.innerHTML = objektum[i] //a létrehozot th- nek beállítjuk a szövegét(innerHTML-t) az objektum i. tulajdonsága
        theadr.appendChild(theadc) //a th elemet hozzácsatoljuk a tr- hez (theadr)
    }
 
}
const form = document.getElementById('form') //a formot a html rol kiveszem egy valtozoba getelementbyidval

/**
 * a függvény a formt tömb alapján létrehoz egy formot a HTML-en
 */
function formGeneralas(){ //letrehozom a formGeneralas fuggvenyt
    const form = document.createElement('form') //letrehozom a formot egy form valtozoval
    document.body.appendChild(form) //a body-hoz hozzáadom a formot
    form.id = "form" //a form id-ja "form"
    form.action = "#" //a form action-je "#"
    for(let i = 0; i < formt.length; i++ ){ //végigmegyönk a formt tömbön és a form tömb mindegyik objektumával megcsináljuk ->
        const div =  document.createElement('div') //létrehozunk egy div elemet 
        form.appendChild(div) //a divet hozzáadjuk a formhoz

        const label = document.createElement('label') // létrehozunk egy labelt
        div.appendChild(label) //a labelt hozzáadjuk a divhez
        label.innerHTML = formt[i].label //a label innerHTML-je a formt aktualis objektumának label tulajdonsága

        const br = document.createElement('br') //létrehozunk egy br-t 
        div.appendChild(br) //a brt hozzáadjuk a divhez

        const input = document.createElement('input') //létrehozunk egy input mezőt
        div.appendChild(input)  //a input mezőt hozzáadjuk a divhez
        input.type = "text" //az input typeja "text"
        input.id = formt[i].id //az input idja formt aktualis objektumának id tulajdonsága
        input.name = formt[i].id //az input name-e formt aktualis objektumának id tulajdonsága

        const br2 = document.createElement('br') //létrehpzunk megegy brt
        div.appendChild(br2) //a brt hozzáadjuk a divhez

        const span = document.createElement('span') //létrehozunk egy spant az errornak
        div.appendChild(span) //a divhez hozzáadjkuk a spant
        span.className = "error" //a span class-a error
        
        const br3 = document.createElement('br') //létrehozunk mégegy br-t
        div.appendChild(br3) //a br-t hozzáadjuk a divhez

    }
    const button = document.createElement('button') //létrehozunk egy gombot
    button.innerHTML = "Hozzáadás" //a gomb szövege hozzáadás
    form.appendChild(button) //a formhoz houuáadjuk a gombot

}



form.addEventListener('submit', function(e){ //a form submit eseményére teszek eseménykezelőt
    e.preventDefault() //meggatolom az alapveto mukodest 
    const nemzHTML = document.getElementById('szarmazas') //elkerem a html rol a szarmazas-t
    const szerz1HTML = document.getElementById('szerzo1') //elkerem a html rol a szerzo1-et
    const mu1HTML = document.getElementById('szerzo1mu') //elkerem a html rol a szerzo1mu-t
    const szerz2HTML = document.getElementById('szerzo2') //elkerem a html rol a szerzo2-t
    const mu2HTML = document.getElementById('szerzo2mu') //elkerem a html rol a szerzo2mu-t

    const nemzV = nemzHTML.value //a nemzHTML eretekt belerakom a nemzV változóba
    const szerz1V = szerz1HTML.value //a szerz1HTML eretekt belerakom a szerz1V változóba
    const mu1V = mu1HTML.value //a mu1HTML eretekt belerakom a mu1V változóba
    const szerz2V = szerz2HTML.value //a szerz2HTML eretekt belerakom a szerz2V változóba
    const mu2V = mu2HTML.value //a mu2HTML eretekt belerakom a mu2V változóba

    const errorszoveg = "A mező kiöltése kötelező!" //az errorszoveg valtozo "A mező kiöltése kötelező!"
    const aktualis = e.currentTarget //az aktualis elemet kivesszuk egy valtozoba
    const errorok = aktualis.querySelectorAll('.error') //az class errorokat kivesszuk egy valtozoba
    let valid = true //a valid erteke alapvetoen true

    for(const i of errorok){ //vegigitaralunk az errorok on
        i.innerHTML = "" //az osszes errort ""-re éllitjuk
    }

    if(!validacio(nemzHTML, errorszoveg)){  //ha a validacio falseal ter vissza akkor megyunk be
        valid = false // a validot falsera allitjuk
    }

    if(!validacio(szerz1HTML, errorszoveg)){  //ha a validacio falseal ter vissza akkor megyunk be
        valid = false // a validot falsera allitjuk
    }

    if(!validacio(mu1HTML, errorszoveg)){  //ha a validacio falseal ter vissza akkor megyunk be
        valid = false // a validot falsera allitjuk
    }

    if(!kettovalidacio(szerz2HTML, mu2HTML, errorszoveg)){ //meghivom a kettovalidacio fuggvenyt a  szerz2HTML és a mu2HTML elemekre, ha false akkor megyunk be
        valid = false // a validot falsera allitjuk
    }

    if(valid){ //ha a valid true akkor megyunk be
        if(szerz2V == "" && mu2V == ""){ //ha a szerz2V és a mu2V üres akkor megyunk be
            const ujObj =  { //létrehozok egy uj objektumot
                nemz: nemzV, //a nemz tulajdonsag erteke nemzV
                szerz: szerz1V, //a szerz tulajdonsag erteke szerz1V
                mu: mu1V //a mu tulajdonsag erteke mu1V
            }
            tomb.push(ujObj) //a tombbe berakom az uj objektumot
        }
        else { 
            const ujObj =  { //létrehozok egy uj objektumot
                nemz: nemzV, //a nemz tulajdonsag erteke nemzV
                szerz: szerz1V, //a szerz tulajdonsag erteke szerz1V
                mu: mu1V, //a mu tulajdonsag erteke mu1V
                szerz2: szerz2V, //a szerz2 tulajdonsag erteke szerz2V
                mu2: mu2V //a mu2 tulajdonsag erteke mu2V
            }
            tomb.push(ujObj) //a tombbe berakom az uj objektumot
        }
    }
    table.innerHTML = "" //a table-t clearelem, hogy ne hozzágeneráljon az eddigi táblázathoz, hanem hogy legyen egy uj tablazat
    RenderTable(tomb) //meghivom a RenderTable függvényt tomb paraméterrel
})