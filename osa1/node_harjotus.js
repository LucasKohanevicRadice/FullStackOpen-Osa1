

// Muuttujat:

// Javascriptissä voi määritellä muuttujat const, let ja var avulla. 

// -   Const on muuttumaton muuttuja, vakio, ikäänkuin yksiarvoinen tuple pythonissa.

// -   let on muuttuja on perinteistyyppinen muuttuja, jonka arvo voi muuttua lennossa, eri komennoin tms.

// -   var on ilmeisesti letin tyyppinen muuttuja, mutta koska var toimii tietyissä tilanteissa eri tavalla
//     kuin useimpien kielien muuttujien määrittely, ei varin käyttö ole suositeltavaa.



// esimerkki:


const x = 1
let y = 5

console.log(x,y) // tulostuu 1,5
y += 10
console.log(x,y) // tulostuu 1,15
y = "teksti"
console.log(x,y) // tulostuu 1,teksti
x = 4 // aiheuttaa virheen, koska const on muuttumaton muuttuja.





// Taulukot:


// Taulukko ja muutama esimerkki sen käytöstä:

const t = [1,-1,3]

t.push(5)   // Ilmeisesti js. push on sama kuin append pythonissa ? 

console.log(t.length)   // tulostuu 4
console.log(t[1])   // tulostuu -1, t kutsuu muuttujan t, [1], indeksin kutsuminen toimii samalla tavalla kuin pythonissa.

t.forEach(value => {
    console.log(value)  // Jokainen taulukon/listan arvo tulostuu omalle rivilleen.
})


// Huomaa, että taulukon sisältöä voi kuitenki muuttaa koska taulukko on olio. Eli ilmeisesti jos const muuttujana on vain yksittäinen arvo, niin silloin sen sisältöä ei voi muuttaa.


// Eräs tapa käydä taulukon alkiot läpi on esimerkissä käytetty forEach, joka saa parametrikseen nuolisyntaksilla määritellyn funktion. (Aika samanlainen kuin for-lause pythonissa)


// Edellisessä esimerkissä taulukkoon lisättiin uusi alkio metodilla push. Reactin kanssa sovelletaan usein funktionaalisen ohjelmoinnin tekniikoita, ja eräs piirre on käyttää muuttumattomia
// (immutable) tietorakenteita. React koodissa kannattaakin mieluummin käyttää metodia concat, joka ei lisää alkiota taulukkoon vaan luo uuden taulukon, jossa on lisättävä alkio
// sekä vanhan taulukon sisältö.

// Esimerkki concatista:

const t = [1,2,3]
const t2 = t.concat(5)

console.log(t)  // tulostuu [1,2,3]
console.log(t2) // tulostuu [1,2,3,5]

// t.concat(5) siis luo uuden taulukon/listan t2, vanhasta taulukosta t, johon se lisää numeron 5 taulukon loppuun.


// metodi map:

const t = [1,2,3]

const m1 = t.map(value => value*2)

console.log(m1) // tulostuu [2,4,6]

// map muodostaa siis uuden taulukon vanhan taulukon perusteella, mutta käyttää myös määriteltyä funktiota jokaiseen taulukon alkioon. 
// Tässä tapauksessa map kaksinkertaisti jokaisen alkuperäisen alkion arvon ja sijoitti nämä uudet arvot uuteen taulukkoon.

// map voi muuttaa myös taulukon täysin erilaiseen muotoon:

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)

// tulostuu ['<li>1</li>', '<li>2</li>', '<li>3</li>' ]]

// Yllä lukuja sisältävästä taulukosta tehdään map-metodin avulla HTML-koodia sisältävä taulukko. Kurssin osassa2 tullaan näkemään, että mapia käytetään reactissa todella usein.

// Taulukon yksittäisiä alkioita on helppo sijoittaa muuttujiin destrukturoivan sijoituslauseen avulla:

const t = [1,2,3,4,5]
 
const [first, second, ...rest] = t

console.log(first,second) // tulostuu 1,2
consloe.log(rest)   //  tulostuu [3,4,5]

// Yllä muuttujiin first ja second sijoitetaan taulukon kaksi ensimmäistä lukua. Muuttujaan rest kerätään sijoituksesta jäljelle jääneet luvut omaksi taulukoksi.



// Oliot:

// Javascriptissä on muutama tapa määritellä olioita. Erittäin yleisesti käytetään olioliteraaleja (olio_literaali), 
// eli määritellään olio luettelemalla sen kentät (property) aaltosulkeiden sisään.

const object1 = {
    name: "Arto Hellas",
    age: 35,
    education: "Filosofian tohtori",
}

const object12 = {
    name: "Full Stack -websovelluskehitys",
    level: "aineopinto",
    size: 5,
}

const object3 = {
    name: {
        first: "Juha",
        last: "Tauriainen",
    },
    grades : [2,3,5,3],
    department: "TKTL",
}

// Kenttien arvot voivat olla mitä vaan: lukuja merkkijonoja taulukoita, olioita...
// Olioden kenttiin viitataan pistenotaatiolla tai hakasulkeilla:

console.log(object1.name) // Tulostuu arto hellas. Toimii aika samalla tavalla kuin luokat pythonissa. object1 on tietyn luokan nimi ja name, grades etc. on sen attribuutteja.
const fieldName = 'age'
console.log(object1[fieldName]) // tulostuu 35

//  Olioille voidaan lisätä kenttiä/attribuutteja myös lennossa joko pistenotaation tai hakasulkeiden avulla:

object1.address = "tapiola"
object1["secret number"] = 12341

//  Jälimmäinen lisäyksistä on pakko tehdä hakasulkeiden avulla, sillä pistenotaatiota käytettäessä secret number ei kelpaa kentän nimeksi. Todennäköisimmin välilyönnin takia.
//  Javascriptissä olioilla voi myös olla metodeja. Tällä kursilla ei kuitenkaan tarvitse itse määriteltyjä metodillisia olioita, joten asiaa ei käsitellä kuin lyhyesti.

// Olioita on myös mahdollista määritellä ns. konstruktorifunktioiden avulla, jolloin saadaan hieman monien muiden ohjelmointikielin kuten javan tai Pythonin luokkia muistuttava mekanismi.
//  Javascriptissä ei kuitenkaan ole luokkia samassa mielessä kuin olio-ohjelmointikielissä. Kieleen on kuitenkin lisätty versiosta ES6 alkaen luokkasyntaksi,
//  joka helpottaa tietyissä tilanteissa olio-ohjelmointikielimäisten luokkien esittämistä.


// Funktiot

//  Olemme jo tutustuneet ns.nuolifunktioiden määrittelyyn. Täydellinen eli "pitkän kaavan" mukaan menevä tapa nuolifunktion määrittelyyn on seuraava:

const sum = (p1,p2) => {
    console.log(p1)
    console.log(p2) // console.log lähettää konsolille muuttujien datatyypin, hyödyllistä debugatessa.
    return p1 + p2
}

//  Funktioita kutsutaan seuraavasti:

const result = sum(1,5)
console.log(result)

//  Jos muuttujia on vain yksi, voidaan sulut jättää määrittelystä pois:

const square = p => {
    console.log(p)
    return p*p
}

// Jos funktio sisältää ainoastaan yhden lausekkeen, ei aaltosulkeita tarvita. Tällöin funktio palauttaa ainoan lausekkeensa arvon.
// Eli jos poistetaan konsoliin tulostus, voidaan edellinen funktio ilmaista lyhyemmin seuraavast:

const square = p => p*p

// Tämä muoto on erityisen kätevä käsiteltäessä taulukkoja esim. map-metodin avulla:

const t = [1,2,3]

const tSquared = t.map(p => p*p) // tSquared on nyt [1,4,9]

// Nuolifunktio on tullut javascriptiin vasta muutama vuosi sitten version ES6 myötä. Tätä ennen ainoa tapa funktioiden määrittelyyn oli avainsanan function käyttö.

// Määrittelytapoja on kaksi, funktiolla voidaan antaa function declaratiion - tyyppisessä määrittelyssä nimi, jonka avulla funktioon voidaan viitata:

function product (a,b) {
    return a*b
}

const vastaus = product(2,6)

//  Toinen tapa on tehdä määrittely funktiolausekkeena. Tällöin funktiolle ei tarvitse antaa nimeä ja määrittely voi sijaita muun koodin seassa:

const average = function (a,b) {
    return (a+b) / 2
}

const vastaus = average(2,5)

//  Tällä kurssilla kuitenkin määritellään kaikki funktiot nuolisyntaksin avulla.




