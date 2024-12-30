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

