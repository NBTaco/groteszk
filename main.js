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

const table = document.createElement('table') // Létrehozzuk a table- elemet, createElement: string
document.body.appendChild(table) //a table elemet hozzácsatoljuk a body- hoz

function RenderTable(){ //léterhozom a RenderTable függvény, ebben generálódik a táblázat
    const thead = document.createElement('thead') //létrehozunk egy thead- elemet createElement: string
    table.appendChild(thead) //a thead elemet hozzácsatoljuk a table- hez

    const theadr1 = document.createElement('tr') //létrehozunk egy tr- elemet, createElement: string
    thead.appendChild(theadr1) //a tr elemet hozzácsatoljuk a thead- hez

    const theadc1 = document.createElement('th') //létrehozunk egy th- elemet, createElement: string
    theadc1.innerHTML = fejlec.nemz //a létrehozot th- nek beállítjuk a szövegét(innerHTML-t) a fejlec objektum nemz tulajdoságára
    theadr1.appendChild(theadc1) //a th elemet hozzácsatoljuk a tr- hez (theadr1)
 
    const theadc2 = document.createElement('th') //létrehozunk egy th- elemet, createElement: string
    theadc2.innerHTML = fejlec.szerz //a létrehozot th- nek beállítjuk a szövegét(innerHTML-t) a fejlec objektum szerz tulajdoságára
    theadr1.appendChild(theadc2) //a th elemet hozzácsatoljuk a tr- hez (theadr1)

    const theadc3 = document.createElement('th') //létrehozunk egy th- elemet, createElement: string
    theadc3.innerHTML = fejlec.mu //a létrehozot th- nek beállítjuk a szövegét(innerHTML-t) a fejlec objektum mu tulajdoságára
    theadr1.appendChild(theadc3) //a th elemet hozzácsatoljuk a tr- hez (theadr1)

    const tbody = document.createElement('tbody') //létrehozunk egy tbody- elemet, createElement: string
    table.appendChild(tbody) //a tbody- elemet hozzácsatoljuk a table- hez

    for(let i = 0; i < tomb.length; i++){ // végigmegyünk a tömbön, az i. objkektummal dolgozunk mindig
        const tbodyr1 = document.createElement('tr') //létrehozunk egy sort
        tbody.appendChild(tbodyr1) //az 1. sort hozzácsatoljuk a tbody- hoz

        const tbodyr2 = document.createElement('tr') //létrehozunk mégegy sort
        tbody.appendChild(tbodyr2) //az 2. sort hozzácsatoljuk a tbody- hoz

        const td1 = document.createElement('td') //létrehozzuk az első sor 1. celláját
        td1.rowSpan = 2 //beállítjuk a rowSpant a cellára
        td1.innerHTML = tomb[i].nemz //beállíjuk a cella szövegét a tomb i. objektumának nemz tulajdoságára
        tbodyr1.appendChild(td1) // hozzácsatoljuk a cellát az 1. sorhoz

        const td2 = document.createElement('td') //létrehozzuk az első sor 2. celláját
        td2.innerHTML = tomb[i].szerz //cella szövege a tomb i. objektumának szerz tulajdosága
        tbodyr1.appendChild(td2) // hozzácsatoljuk a cellát az 1. sorhoz

        const td3 = document.createElement('td') //létrehozzuk az első sor 3. celláját
        td3.innerHTML = tomb[i].mu //cella szövege a tomb i. objektumának mu tulajdosága
        tbodyr1.appendChild(td3) // hozzácsatoljuk a cellát az 1. sorhoz

        if(tomb[i].szerz2 && tomb[i].mu2){ //akkor megyönk be az elágazásba ha van szerz2 és mu2 
            const td4 = document.createElement('td') //létrehozzuk a 2. sor 1. celláját
            td4.innerHTML = tomb[i].szerz2 //beállíjuk a cella szövegét a tomb i. objektumának szerz2 tulajdoságára
            tbodyr2.appendChild(td4) // hozzácsatoljuk a cellát a 2. sorhoz

            const td5 = document.createElement('td') //létrehozzuk a 2. sor  2. celláját
            td5.innerHTML = tomb[i].mu2 //beállíjuk a cella szövegéta tomb i. objektumának mu2 tulajdoságára
            tbodyr2.appendChild(td5) // hozzácsatoljuk a cellát a 2. sorhoz
        }
    } 
}

RenderTable() // meghivom a RenderTable függvényt

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


const form = document.getElementById('form') //a formot a html rol kiveszem egy valtozoba getelementbyidval

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
    RenderTable() //meghivom a RenderTable függvényt
})