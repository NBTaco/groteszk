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
RenderTable(tomb) // meghivom a RenderTable függvényt tomb paraméterrel
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
    RenderTable(tomb) //meghivom a RenderTable függvényt tomb paraméterrel
})