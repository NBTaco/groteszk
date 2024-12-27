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