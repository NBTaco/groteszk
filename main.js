const nemz = "Nemzetiség" //létrehozunk egy változót a nemzetiségnek
const szerz = "Szerző" //létrehozunk egy változót a szerzőnek
const mu = "Mű" //létrehozunk egy változót a műnek

const nemz1 = "Orosz" //létrehozunk egy változót az 1. nemzetiségnek
const szerz1 = "Gogol" //létrehozunk egy változót az 1. szerzőnek
const mu1 = "A köpönyeg" //létrehozunk egy változót az 1. munek
const szerz2 = "Csehov" //létrehozunk egy változót a 2. szerzőnek
const mu2 = "A csinovnyik halála" //létrehozunk egy változót a 2. munek
    
const nemz2 = "Cseh" //létrehozunk egy változót a 2. nemzetiségnek
const szerz3 = "Franz Kafka" //létrehozunk egy változót a 3. szerzőnek
const mu3 = "Az átváltozás" //létrehozunk egy változót a 3. munek

const nemz3 = "Magyar" //létrehozunk egy változót a 3. nemzetiségnek
const szerz4 = "Örkény István" //létrehozunk egy változót a 4. szerzőnek
const mu4 = "Egyperces Novellák" //létrehozunk egy változót a 4. munek
const szerz5 = "József Attila" //létrehozunk egy változót a 5. szerzőnek
const mu5 = "Klárisok" //létrehozunk egy változót a 5. munek

const nemz4 = "Svájc" //létrehozunk egy változót az 4. nemzetiségnek
const szerz6 = "Friedrich Dürrenmatt" //létrehozunk egy változót a 6. szerzőnek
const mu6 = "A fizikusok" //létrehozunk egy változót a 6. munek

const table = document.createElement('table') // Létrehozzuk a table- elemet, createElement: string
document.body.appendChild(table) //a table elemet hozzácsatoljuk a body- hoz

const thead = document.createElement('thead') //létrehozunk egy thead- elemet createElement: string
table.appendChild(thead) //a thead elemet hozzácsatoljuk a table- hez

const theadr1 = document.createElement('tr') //létrehozunk egy tr- elemet, createElement: string
thead.appendChild(theadr1) //a tr elemet hozzácsatoljuk a thead- hez

const theadc1 = document.createElement('th') //létrehozunk egy th- elemet, createElement: string
theadc1.innerHTML = nemz //a létrehozot th- nek beállítjuk a szövegét(innerHTML-t) nemz változó
theadr1.appendChild(theadc1) //a th elemet hozzácsatoljuk a tr- hez (theadr1)
 
const theadc2 = document.createElement('th') //létrehozunk egy th- elemet, createElement: string
theadc2.innerHTML = szerz //a létrehozot th- nek beállítjuk a szövegét(innerHTML-t) szerz valtozo
theadr1.appendChild(theadc2) //a th elemet hozzácsatoljuk a tr- hez (theadr1)

const theadc3 = document.createElement('th') //létrehozunk egy th- elemet, createElement: string
theadc3.innerHTML = mu //a létrehozot th- nek beállítjuk a szövegét(innerHTML-t) mu valtozo
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
r1td1.innerHTML = nemz1 //beállíjuk a cella szövegét (innerHTML-t) nemz1
tbodyr1.appendChild(r1td1) // hozzácsatoljuk a cellát az 1. sorhoz

const r1td2 = document.createElement('td') //létrehozzuk az 1. sor 2. celláját , createElement: string
r1td2.innerHTML = szerz1 //cella szövege szerz1 valtozo
tbodyr1.appendChild(r1td2) // hozzácsatoljuk a cellát az 1. sorhoz

const r1td3 = document.createElement('td') //létrehozzuk az 1. sor 3. celláját , createElement: string
r1td3.innerHTML = mu1 //cella szövege mu1 valtozo
tbodyr1.appendChild(r1td3) // hozzácsatoljuk a cellát az 1. sorhoz

const r2td1 = document.createElement('td') //létrehozzuk a 2. sor 1. celláját , createElement: string
r2td1.innerHTML = szerz2 //beállíjuk a cella szövegét (innerHTML-t) szerz2 valtozo
tbodyr2.appendChild(r2td1) // hozzácsatoljuk a cellát a 2. sorhoz

const r2td2 = document.createElement('td') //létrehozzuk a 2. sor 2. celláját , createElement: string
r2td2.innerHTML = mu2 //beállíjuk a cella szövegét (innerHTML-t) mu2 valtozo
tbodyr2.appendChild(r2td2) // hozzácsatoljuk a cellát a 2. sorhoz

// 2. sor
const tbodyr3 = document.createElement('tr') //létrehozzuk a tbody 3. sorát , createElement: string
tbody.appendChild(tbodyr3) //a 3. sort  hozzácsatoljuk a tbody- hoz

const r3td1 = document.createElement('td') //létrehozzuk az 3. sor 1. celláját , createElement: string
r3td1.innerHTML = nemz2 //cella szövege nemz2 valtozo
tbodyr3.appendChild(r3td1) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td2 = document.createElement('td') //létrehozzuk a 3. sor 2. celláját , createElement: string
r3td2.innerHTML = szerz3 //cella szövege szerz3 valtozo
tbodyr3.appendChild(r3td2) // hozzácsatoljuk a cellát a 3. sorhoz

const r3td3 = document.createElement('td') //létrehozzuk a 3. sor 3. celláját , createElement: string
r3td3.innerHTML = mu3 //cella szövege mu3 valtozo
tbodyr3.appendChild(r3td3) // hozzácsatoljuk a cellát a 3. sorhoz

// 3. sor
const tbodyr4 = document.createElement('tr') //létrehozzuk a tbody 4. sorát , createElement: string
tbody.appendChild(tbodyr4) //az 4. sort  hozzácsatoljuk a tbody- hoz

const tbodyr5 = document.createElement('tr') //létrehozzuk a tbody 5. sorát 
tbody.appendChild(tbodyr5)  //a 5. sort  hozzácsatoljuk a tbody- hoz

const r4td1 = document.createElement('td') //létrehozzuk az 4. sor 1. celláját , createElement: string
r4td1.rowSpan= 2 //beállítjuk a rowSpant a cellára
r4td1.innerHTML = nemz3 //cella szövege nemz3 valtozo
tbodyr4.appendChild(r4td1) // hozzácsatoljuk a cellát az 4. sorhoz

const r4td2 = document.createElement('td') //létrehozzuk az 4. sor 2. celláját , createElement: string
r4td2.innerHTML = szerz4 //cella szövege szerz4 valtozo
tbodyr4.appendChild(r4td2) // hozzácsatoljuk a cellát az 4. sorhoz

const r4td3 = document.createElement('td') //létrehozzuk az 4. sor 2. celláját , createElement: string
r4td3.innerHTML = mu4 //cella szövege mu4 valtozo
tbodyr4.appendChild(r4td3) // hozzácsatoljuk a cellát az 4. sorhoz

const r5td1 = document.createElement('td') //létrehozzuk a 5. sor 1. celláját , createElement: string
r5td1.innerHTML = szerz5 //cella szövege szerz5 valtozo
tbodyr5.appendChild(r5td1)// hozzácsatoljuk a cellát a 5. sorhoz

const r5td2 = document.createElement('td') //létrehozzuk a 5. sor 2. celláját , createElement: string
r5td2.innerHTML = mu5 //cella szövege mu5 valtozo
tbodyr5.appendChild(r5td2) // hozzácsatoljuk a cellát a 5. sorhoz

//4.sor
const tbodyr6 = document.createElement('tr') //létrehozzuk a tbody 6. sorát, createElement: string
tbody.appendChild(tbodyr6) //a 6. sort  hozzácsatoljuk a tbody- hoz

const r6td1 = document.createElement('td') //létrehozzuk a 6. sor 1. celláját , createElement: string
r6td1.innerHTML = nemz4 //cella szövege nemz4 valtozo
tbodyr6.appendChild(r6td1) // hozzácsatoljuk a cellát a 6. sorhoz

const r6td2 = document.createElement('td') //létrehozzuk a 6. sor 2. celláját , createElement: string
r6td2.innerHTML = szerz6 //cella szövege szerz6 valtozo
tbodyr6.appendChild(r6td2) // hozzácsatoljuk a cellát a 6. sorhoz

const r6td3 = document.createElement('td') //létrehozzuk a 6. sor 3. celláját , createElement: string
r6td3.innerHTML = mu6 //cella szövege mu6 valtozo
tbodyr6.appendChild(r6td3) // hozzácsatoljuk a cellát a 6. sorhoz