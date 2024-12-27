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

//tbody- megcsinálása, és az elemeinek hozzáadása
const tbody = document.createElement('tbody') //létrehozunk egy tbody- elemet, createElement: string
table.appendChild(tbody) //a tbody- elemet hozzácsatoljuk a table- hez

//1.sor
const tbodyr1 = document.createElement('tr') //létrehozzuk a tbody 1. sorát , createElement: string
tbody.appendChild(tbodyr1) //az 1. sort hozzácsatoljuk a tbody- hoz

const tbodyr2 = document.createElement('tr') //létrehozzuk a tbody 2. sorát 
tbody.appendChild(tbodyr2) //az 2. sort hozzácsatoljuk a tbody- hoz

const r1td1 = document.createElement('td') //létrehozzuk az 1. sor 1. celláját , createElement: string
r1td1.rowSpan = 2 //beállítjuk a rowSpant a cellára
r1td1.innerHTML = tomb[0].nemz //beállíjuk a cella szövegét (innerHTML-t) a tomb első objektumának nemz tulajdosága
tbodyr1.appendChild(r1td1) // hozzácsatoljuk a cellát az 1. sorhoz

const r1td2 = document.createElement('td') //létrehozzuk az 1. sor 2. celláját , createElement: string
r1td2.innerHTML = tomb[0].szerz //cella szövege a tomb első objektumának szerz tulajdosága
tbodyr1.appendChild(r1td2) // hozzácsatoljuk a cellát az 1. sorhoz

const r1td3 = document.createElement('td') //létrehozzuk az 1. sor 3. celláját , createElement: string
r1td3.innerHTML = tomb[0].mu //cella szövege a tomb első objektumának mu tulajdosága
tbodyr1.appendChild(r1td3) // hozzácsatoljuk a cellát az 1. sorhoz

const r2td1 = document.createElement('td') //létrehozzuk a 2. sor 1. celláját , createElement: string
r2td1.innerHTML = tomb[0].szerz2 //beállíjuk a cella szövegét (innerHTML-t) a tomb első objektumának szerz2 tulajdoságára
tbodyr2.appendChild(r2td1) // hozzácsatoljuk a cellát a 2. sorhoz

const r2td2 = document.createElement('td') //létrehozzuk a 2. sor 2. celláját , createElement: string
r2td2.innerHTML = tomb[0].mu2 //beállíjuk a cella szövegét (innerHTML-t) a tomb első objektumának mu2 tulajdoságára
tbodyr2.appendChild(r2td2) // hozzácsatoljuk a cellát a 2. sorhoz

// 2. sor
const tbodyr3 = document.createElement('tr') //létrehozzuk a tbody 3. sorát , createElement: string
tbody.appendChild(tbodyr3) //a 3. sort  hozzácsatoljuk a tbody- hoz

const r3td1 = document.createElement('td') //létrehozzuk az 3. sor 1. celláját , createElement: string
r3td1.innerHTML = tomb[1].nemz //cella szövege a tomb masodik objektumának nemz tulajdosága
tbodyr3.appendChild(r3td1) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td2 = document.createElement('td') //létrehozzuk a 3. sor 2. celláját , createElement: string
r3td2.innerHTML = tomb[1].szerz //cella szövege a tomb masodik objektumának szerz tulajdosága
tbodyr3.appendChild(r3td2) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td3 = document.createElement('td') //létrehozzuk a 3. sor 3. celláját , createElement: string
r3td3.innerHTML = tomb[1].mu //cella szövege a tomb masodik objektumának mu tulajdosága
tbodyr3.appendChild(r3td3) // hozzácsatoljuk a cellát a 3. sorhoz

// 3. sor
const tbodyr4 = document.createElement('tr') //létrehozzuk a tbody 4. sorát , createElement: string
tbody.appendChild(tbodyr4) //az 4. sort  hozzácsatoljuk a tbody- hoz

const tbodyr5 = document.createElement('tr') //létrehozzuk a tbody 5. sorát 
tbody.appendChild(tbodyr5)  //a 5. sort  hozzácsatoljuk a tbody- hoz

const r4td1 = document.createElement('td') //létrehozzuk az 4. sor 1. celláját , createElement: string
r4td1.rowSpan= 2 //beállítjuk a rowSpant a cellára
r4td1.innerHTML = tomb[2].nemz //cella szövege a tomb harmadik objektumának nemz tulajdosága
tbodyr4.appendChild(r4td1) // hozzácsatoljuk a cellát az 4. sorhoz

const r4td2 = document.createElement('td') //létrehozzuk az 4. sor 2. celláját , createElement: string
r4td2.innerHTML = tomb[2].szerz //cella szövege a tomb harmadik objektumának szerz tulajdosága
tbodyr4.appendChild(r4td2) // hozzácsatoljuk a cellát az 4. sorhoz

const r4td3 = document.createElement('td') //létrehozzuk az 4. sor 2. celláját , createElement: string
r4td3.innerHTML = tomb[2].mu //cella szövege a tomb harmadik objektumának mu tulajdosága
tbodyr4.appendChild(r4td3) // hozzácsatoljuk a cellát az 4. sorhoz

const r5td1 = document.createElement('td') //létrehozzuk a 5. sor 1. celláját , createElement: string
r5td1.innerHTML = tomb[2].szerz2 //cella szövege a tomb harmadik objektumának szerz2 tulajdosága
tbodyr5.appendChild(r5td1)// hozzácsatoljuk a cellát a 5. sorhoz

const r5td2 = document.createElement('td') //létrehozzuk a 5. sor 2. celláját , createElement: string
r5td2.innerHTML = tomb[2].mu2 //cella szövege a tomb harmadik objektumának mu2 tulajdosága
tbodyr5.appendChild(r5td2) // hozzácsatoljuk a cellát a 5. sorhoz

//4.sor
const tbodyr6 = document.createElement('tr') //létrehozzuk a tbody 6. sorát, createElement: string
tbody.appendChild(tbodyr6) //a 6. sort  hozzácsatoljuk a tbody- hoz

const r6td1 = document.createElement('td') //létrehozzuk a 6. sor 1. celláját , createElement: string
r6td1.innerHTML = tomb[3].nemz //cella szövege a tomb negyedik objektumának nemz tulajdosága
tbodyr6.appendChild(r6td1) // hozzácsatoljuk a cellát a 6. sorhoz

const r6td2 = document.createElement('td') //létrehozzuk a 6. sor 2. celláját , createElement: string
r6td2.innerHTML = tomb[3].szerz //cella szövege a tomb negyedik objektumának szerz tulajdosága
tbodyr6.appendChild(r6td2) // hozzácsatoljuk a cellát a 6. sorhoz

const r6td3 = document.createElement('td') //létrehozzuk a 6. sor 3. celláját , createElement: string
r6td3.innerHTML = tomb[3].mu //cella szövege a tomb negyedik objektumának mu tulajdosnága
tbodyr6.appendChild(r6td3) // hozzácsatoljuk a cellát a 6. sorhoz