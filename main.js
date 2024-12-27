const fejlec = { //letrehozzuk a fejlec objetumat
    nemz: "Nemzetiség", //létrehozzuk a fejlec nemz tulajdonságát
    szerz: "Szerző", //létrehozzuk a fejlec szerz tulajdonságát
    mu: "Mű" //létrehozzuk a fejlec mu tulajdonságát
}

const elsosor = { //letrehozzuk az első sor objetumat
    nemz: "Orosz", //létrehozzuk a elsosor nemz tulajdonságát
    szerz: "Gogol", //létrehozzuk a elsosor szerz tulajdonságát
    mu: "A köpönyeg", //létrehozzuk a elsosor mu tulajdonságát
    szerz2: "Csehov", //létrehozzuk a elsosor szerz2 tulajdonságát
    mu2: "A csinovnyik halála" //létrehozzuk a elsosor mu2 tulajdonságát
}

const masodiksor = { //letrehozzuk a második sor objetumat
    nemz: "Cseh", //létrehozzuk a masodiksor nemz tulajdonságát
    szerz: "Franz Kafka", //létrehozzuk a masodiksor szerz tulajdonságát
    mu: "Az átváltozás" //létrehozzuk a masodiksor mu tulajdonságát
}

const harmadiksor = { //letrehozzuk a harmadik sor objetumat
    nemz: "Magyar", //létrehozzuk a harmadiksor nemz tulajdonságát
    szerz: "Örkény István", //létrehozzuk a harmadiksor szerz tulajdonságát
    mu: "Egyperces Novellák", //létrehozzuk a harmadiksor mu tulajdonságát
    szerz2: "József Attila", //létrehozzuk a harmadiksor szerz2 tulajdonságát
    mu2: "Klárisok" //létrehozzuk a harmadiksor mu2 tulajdonságát
}

const negyediksor = { //letrehozzuk a negyedik sor objetumat
    nemz: "Svájc", //létrehozzuk a negyediksor nemz tulajdonságát
    szerz: "Friedrich Dürrenmatt", //létrehozzuk a negyediksor szerz tulajdonságát
    mu: "A fizikusok" //létrehozzuk a negyediksor mu tulajdonságát
}

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
r1td1.innerHTML = elsosor.nemz //beállíjuk a cella szövegét (innerHTML-t) a elsosor objektum nemz tulajdosága
tbodyr1.appendChild(r1td1) // hozzácsatoljuk a cellát az 1. sorhoz

const r1td2 = document.createElement('td') //létrehozzuk az 1. sor 2. celláját , createElement: string
r1td2.innerHTML = elsosor.szerz //cella szövege elsosor objektum szerz tulajdosága
tbodyr1.appendChild(r1td2) // hozzácsatoljuk a cellát az 1. sorhoz

const r1td3 = document.createElement('td') //létrehozzuk az 1. sor 3. celláját , createElement: string
r1td3.innerHTML = elsosor.mu //cella szövege az elsosor objektum mu tulajdosága
tbodyr1.appendChild(r1td3) // hozzácsatoljuk a cellát az 1. sorhoz

const r2td1 = document.createElement('td') //létrehozzuk a 2. sor 1. celláját , createElement: string
r2td1.innerHTML = elsosor.szerz2 //beállíjuk a cella szövegét (innerHTML-t) az elsosor objektum szerz2 tulajdoságára
tbodyr2.appendChild(r2td1) // hozzácsatoljuk a cellát a 2. sorhoz

const r2td2 = document.createElement('td') //létrehozzuk a 2. sor 2. celláját , createElement: string
r2td2.innerHTML = elsosor.mu2 //beállíjuk a cella szövegét (innerHTML-t) az elsosor objektum mu2 tulajdoságára
tbodyr2.appendChild(r2td2) // hozzácsatoljuk a cellát a 2. sorhoz

// 2. sor
const tbodyr3 = document.createElement('tr') //létrehozzuk a tbody 3. sorát , createElement: string
tbody.appendChild(tbodyr3) //a 3. sort  hozzácsatoljuk a tbody- hoz

const r3td1 = document.createElement('td') //létrehozzuk az 3. sor 1. celláját , createElement: string
r3td1.innerHTML = masodiksor.nemz //cella szövege a masodiksor objektum nemz tulajdosága
tbodyr3.appendChild(r3td1) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td2 = document.createElement('td') //létrehozzuk a 3. sor 2. celláját , createElement: string
r3td2.innerHTML = masodiksor.szerz //cella szövege a masodiksor objektum szerz tulajdosága
tbodyr3.appendChild(r3td2) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td3 = document.createElement('td') //létrehozzuk a 3. sor 3. celláját , createElement: string
r3td3.innerHTML = masodiksor.mu //cella szövege a masodiksor objektum mu tulajdosága
tbodyr3.appendChild(r3td3) // hozzácsatoljuk a cellát a 3. sorhoz

// 3. sor
const tbodyr4 = document.createElement('tr') //létrehozzuk a tbody 4. sorát , createElement: string
tbody.appendChild(tbodyr4) //az 4. sort  hozzácsatoljuk a tbody- hoz

const tbodyr5 = document.createElement('tr') //létrehozzuk a tbody 5. sorát 
tbody.appendChild(tbodyr5)  //a 5. sort  hozzácsatoljuk a tbody- hoz

const r4td1 = document.createElement('td') //létrehozzuk az 4. sor 1. celláját , createElement: string
r4td1.rowSpan= 2 //beállítjuk a rowSpant a cellára
r4td1.innerHTML = harmadiksor.nemz //cella szövege a harmadiksor objektum nemz tulajdosága
tbodyr4.appendChild(r4td1) // hozzácsatoljuk a cellát az 4. sorhoz

const r4td2 = document.createElement('td') //létrehozzuk az 4. sor 2. celláját , createElement: string
r4td2.innerHTML = harmadiksor.szerz //cella szövege a harmadiksor objektum szerz tulajdosága
tbodyr4.appendChild(r4td2) // hozzácsatoljuk a cellát az 4. sorhoz

const r4td3 = document.createElement('td') //létrehozzuk az 4. sor 2. celláját , createElement: string
r4td3.innerHTML = harmadiksor.mu //cella szövege a harmadiksor objektum mu tulajdosága
tbodyr4.appendChild(r4td3) // hozzácsatoljuk a cellát az 4. sorhoz

const r5td1 = document.createElement('td') //létrehozzuk a 5. sor 1. celláját , createElement: string
r5td1.innerHTML = harmadiksor.szerz2 //cella szövege a harmadiksor objektum szerz2 tulajdosága
tbodyr5.appendChild(r5td1)// hozzácsatoljuk a cellát a 5. sorhoz

const r5td2 = document.createElement('td') //létrehozzuk a 5. sor 2. celláját , createElement: string
r5td2.innerHTML = harmadiksor.mu2 //cella szövege a harmadiksor objektum mu2 tulajdosága
tbodyr5.appendChild(r5td2) // hozzácsatoljuk a cellát a 5. sorhoz

//4.sor
const tbodyr6 = document.createElement('tr') //létrehozzuk a tbody 6. sorát, createElement: string
tbody.appendChild(tbodyr6) //a 6. sort  hozzácsatoljuk a tbody- hoz

const r6td1 = document.createElement('td') //létrehozzuk a 6. sor 1. celláját , createElement: string
r6td1.innerHTML = negyediksor.nemz //cella szövege a negyediksor objektum nemz tulajdosága
tbodyr6.appendChild(r6td1) // hozzácsatoljuk a cellát a 6. sorhoz

const r6td2 = document.createElement('td') //létrehozzuk a 6. sor 2. celláját , createElement: string
r6td2.innerHTML = negyediksor.szerz //cella szövege a negyediksor objektum szerz tulajdosága
tbodyr6.appendChild(r6td2) // hozzácsatoljuk a cellát a 6. sorhoz

const r6td3 = document.createElement('td') //létrehozzuk a 6. sor 3. celláját , createElement: string
r6td3.innerHTML = negyediksor.mu //cella szövege a negyediksor objektum mu tulajdosága
tbodyr6.appendChild(r6td3) // hozzácsatoljuk a cellát a 6. sorhoz