//Materialize Load
$(document).ready(function(){
    $('select').formSelect();
    $('.sidenav').sidenav();
});

//Load Lists
const server = ['Adra','Antica','Assombra','Astera','Belluma','Belobra','Bona','Calmera','Carnera','Celebra','Celesta','Concorda','Cosera','Damora','Descubra','Dibra','Duna','Emera','Epoca','Estela','Faluna','Ferobra','Firmera','Funera','Furia','Garnera','Gentebra','Gladera','Harmonia','Helera','Honbra','Impera','Inabra','Javibra','Jonera','Kalibra','Kenora','Libertabra','Lobera','Luminera','Lutabra','Macabra','Menera','Mitigera','Monza','Nefera','Noctera','Nossobra','Olera','Ombra','Pacembra','Pacera','Peloria','Premia','Pyra','Quelibra','Quintera','Ragna','Refugia','Relania','Relembra','Secura','Serdebra','Serenebra','Solidera','Talera','Torpera','Tortura','Unica','Utobra','Venebra','Vita','Vunira','Wintera','Wizera','Xandebra','Xylona','Yonabra','Ysolera','Zenobra','Zuna','Zunera']
const city = [`Ab'dendriel`,`Ankrahmun`,`Carlin`,`Darashia`,`Edron`,'Farmine','Gray Beach',`Issavi`,`Kazordoon`,`Liberty Bay`,`Port Hope`,`Rathleton`,`Svargrond`,`Thais`,`Venore`,`Yalahar`]
const building = ['Houses','Guildhalls']
const dataContainer = document.getElementById("dataContainer")
let formServer = document.getElementById("selectServer")
let formCity = document.getElementById("selectCity")
let formBuilding = document.getElementById("selectBuilding")
let formOccupied = document.getElementById("occupied")

// Populate Server Menu
for (let i=0;i<server.length;i++){
    let opt = server[i]
    let el = document.createElement("option")
    el.textContent=opt
    el.name=opt
    el.value=opt
    formServer.appendChild(el)
}
// Populate City Menu
for (let i=0;i<city.length;i++){
    let opt = city[i]
    let el = document.createElement("option")
    el.textContent=opt
    el.value=opt
    formCity.appendChild(el)
}
// Populate Building Type
for (let i=0;i<building.length;i++){
    let opt = building[i]
    let el = document.createElement("option")
    el.textContent=opt
    el.value=opt
    formBuilding.appendChild(el)
}

function test(){
    let a = formServer.value
    let b = formCity.value
    let c = formBuilding.value
    let d = formOccupied.checked
    if (b === 'Gray Beach'){
        b='Gray%20Beach'
    }
    else if (b === 'Port Hope'){
        b='Port%20Hope'
    }
    else if (b === 'Liberty Bay'){
        b='Liberty%20Bay'
    }
    loadJSON(a,b,c,d);
}

function loadJSON(a,b,c,d){
    let link = `https://api.tibiadata.com/v2/houses/${a}/${b}/${c}.json`
    console.log(link)
    fetch(link).then(function(response){
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        response.json().then(function(data){
            let auctionedHomes = []
            let allHomes = []
            if (d===false){ /*Only load unoccupied homes*/
                for(var i=0;i<data.houses.houses.length;i++){
                    if(data.houses.houses[i].status !== "rented"){
                        auctionedHomes.push(data.houses.houses[i])
                        console.log(auctionedHomes[i]);
                        let houseinfo = document.createElement("tr")
                        houseinfo.innerHTML=
                            `
                            <td>${auctionedHomes[i].name}</td>
                            <td>${auctionedHomes[i].size}</td>
                            <td></td>
                            <td>${auctionedHomes[i].rent}</td>
                            <td>${auctionedHomes[i].status}</td>
                            <td></td>
                            <td><a href="#" target="_blank">link</a></td>
                            `
                        dataContainer.appendChild(houseinfo)
                    }
                    else{
                        auctionedHomes.push(data.houses.houses[i])
                    }

                }
            }
            else if (d===true){ /*Load all including occupied homes*/
                for(var i=0;i<data.houses.houses.length;i++){
                    if(data.houses.houses[i].status !== "rented"){
                        allHomes.push(data.houses.houses[i])
                        console.log(allHomes[i]);
                    }
                    else{
                        allHomes.push(data.houses.houses[i])
                        console.log(allHomes[i]);
                    }
                }
            }
            else{
                console.log('what.')
            }
        })
    })
}
