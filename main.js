const table = document.createElement('table') // Létrehozzuk a table- elemet, createElement: string
document.body.appendChild(table) //a table elemet hozzácsatoljuk a body- hoz

const thead = document.createElement('thead') //létrehozunk egy thead- elemet createElement: string
table.appendChild(thead) //a thead elemet hozzácsatoljuk a table- hez

const theadr1 = document.createElement('tr') //létrehozunk egy tr- elemet, createElement: string
thead.appendChild(theadr1) //a tr elemet hozzácsatoljuk a thead- hez

const theadc1 = document.createElement('th') //létrehozunk egy th- elemet, createElement: string
theadc1.innerHTML = "Nemzetiség" //a létrehozot th- nek beállítjuk a szövegét(innerHTML-t): Nemzetiség-re, az innerHTML string
theadr1.appendChild(theadc1) //a th elemet hozzácsatoljuk a tr- hez (theadr1)
 
const theadc2 = document.createElement('th') //létrehozunk egy th- elemet, createElement: string
theadc2.innerHTML = "Szerző" //a létrehozot th- nek beállítjuk a szövegét(innerHTML-t): Szerző-re
theadr1.appendChild(theadc2) //a th elemet hozzácsatoljuk a tr- hez (theadr1)

const theadc3 = document.createElement('th') //létrehozunk egy th- elemet, createElement: string
theadc3.innerHTML = "Mű" //a létrehozot th- nek beállítjuk a szövegét(innerHTML-t): Mű-re
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
r1td1.innerHTML = "Orosz" //beállíjuk a cella szövegét (innerHTML-t):Orosz, az innerHTML string
tbodyr1.appendChild(r1td1) // hozzácsatoljuk a cellát az 1. sorhoz

const r1td2 = document.createElement('td') //létrehozzuk az 1. sor 2. celláját , createElement: string
r1td2.innerHTML = "Gogol" //cella szövege: Gogol, az innerHTML string
tbodyr1.appendChild(r1td2) // hozzácsatoljuk a cellát az 1. sorhoz

const r1td3 = document.createElement('td') //létrehozzuk az 1. sor 3. celláját , createElement: string
r1td3.innerHTML = "A köpönyeg" //cella szövege: A köpönyeg
tbodyr1.appendChild(r1td3) // hozzácsatoljuk a cellát az 1. sorhoz

const r2td1 = document.createElement('td') //létrehozzuk a 2. sor 1. celláját , createElement: string
r2td1.innerHTML = "Csehov" //beállíjuk a cella szövegét (innerHTML-t):Csehov, az innerHTML string
tbodyr2.appendChild(r2td1) // hozzácsatoljuk a cellát a 2. sorhoz

const r2td2 = document.createElement('td') //létrehozzuk a 2. sor 2. celláját , createElement: string
r2td2.innerHTML = "A csinovnyik halála" //beállíjuk a cella szövegét (innerHTML-t):A csinovnyik halála
tbodyr2.appendChild(r2td2) // hozzácsatoljuk a cellát a 2. sorhoz

// 2. sor
const tbodyr3 = document.createElement('tr') //létrehozzuk a tbody 3. sorát , createElement: string
tbody.appendChild(tbodyr3) //a 3. sort  hozzácsatoljuk a tbody- hoz

const r3td1 = document.createElement('td') //létrehozzuk az 3. sor 1. celláját , createElement: string
r3td1.innerHTML = "Cseh" //cella szövege: Cseh
tbodyr3.appendChild(r3td1) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td2 = document.createElement('td') //létrehozzuk a 3. sor 2. celláját , createElement: string
r3td2.innerHTML = "Franz Kafka" //cella szövege: Franz Kafka
tbodyr3.appendChild(r3td2) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td3 = document.createElement('td') //létrehozzuk a 3. sor 3. celláját , createElement: string
r3td3.innerHTML = "Az átváltozás" //cella szövege: Az átváltozás
tbodyr3.appendChild(r3td3) // hozzácsatoljuk a cellát a 3. sorhoz

// 3. sor
const tbodyr4 = document.createElement('tr') //létrehozzuk a tbody 4. sorát , createElement: string
tbody.appendChild(tbodyr4) //az 4. sort  hozzácsatoljuk a tbody- hoz

const tbodyr5 = document.createElement('tr') //létrehozzuk a tbody 5. sorát 
tbody.appendChild(tbodyr5)  //a 5. sort  hozzácsatoljuk a tbody- hoz

const r4td1 = document.createElement('td') //létrehozzuk az 4. sor 1. celláját , createElement: string
r4td1.rowSpan= 2 //beállítjuk a rowSpant a cellára
r4td1.innerHTML = "Magyar" //cella szövege: Magyar
tbodyr4.appendChild(r4td1) // hozzácsatoljuk a cellát az 4. sorhoz

const r4td2 = document.createElement('td') //létrehozzuk az 4. sor 2. celláját , createElement: string
r4td2.innerHTML = "Örkény István" //cella szövege: Örkény István
tbodyr4.appendChild(r4td2) // hozzácsatoljuk a cellát az 4. sorhoz

const r4td3 = document.createElement('td') //létrehozzuk az 4. sor 2. celláját , createElement: string
r4td3.innerHTML = "Egyperces Novellák" //cella szövege: Egyperces Novellák
tbodyr4.appendChild(r4td3) // hozzácsatoljuk a cellát az 4. sorhoz

const r5td1 = document.createElement('td') //létrehozzuk a 5. sor 1. celláját , createElement: string
r5td1.innerHTML = "József Attila" //cella szövege: József Attila
tbodyr5.appendChild(r5td1)// hozzácsatoljuk a cellát a 5. sorhoz

const r5td2 = document.createElement('td') //létrehozzuk a 5. sor 2. celláját , createElement: string
r5td2.innerHTML = "Klárisok" //cella szövege: Klárisok
tbodyr5.appendChild(r5td2) // hozzácsatoljuk a cellát a 5. sorhoz

//4.sor
const tbodyr6 = document.createElement('tr') //létrehozzuk a tbody 6. sorát, createElement: string
tbody.appendChild(tbodyr6) //a 6. sort  hozzácsatoljuk a tbody- hoz

const r6td1 = document.createElement('td') //létrehozzuk a 6. sor 1. celláját , createElement: string
r6td1.innerHTML = "Svájc" //cella szövege: Svájc
tbodyr6.appendChild(r6td1) // hozzácsatoljuk a cellát a 6. sorhoz

const r6td2 = document.createElement('td') //létrehozzuk a 6. sor 2. celláját , createElement: string
r6td2.innerHTML = "Friedrich Dürrenmatt" //cella szövege: Friedrich Dürrenmatt
tbodyr6.appendChild(r6td2) // hozzácsatoljuk a cellát a 6. sorhoz

const r6td3 = document.createElement('td') //létrehozzuk a 6. sor 3. celláját , createElement: string
r6td3.innerHTML = "A fizikusok" //cella szövege: A fizikusok
tbodyr6.appendChild(r6td3) // hozzácsatoljuk a cellát a 6. sorhoz