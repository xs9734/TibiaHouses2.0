const server = ['Adra','Antica','Assombra','Astera','Belluma','Belobra','Bona','Calmera','Carnera','Celebra','Celesta','Concorda','Cosera','Damora','Descubra','Dibra','Duna','Emera','Epoca','Estela','Faluna','Ferobra','Firmera','Funera','Furia','Garnera','Gentebra','Gladera','Harmonia','Helera','Honbra','Impera','Inabra','Javibra','Jonera','Kalibra','Kenora','Libertabra','Lobera','Luminera','Lutabra','Macabra','Menera','Mitigera','Monza','Nefera','Noctera','Nossobra','Olera','Ombra','Pacembra','Pacera','Peloria','Premia','Pyra','Quelibra','Quintera','Ragna','Refugia','Relania','Relembra','Secura','Serdebra','Serenebra','Solidera','Talera','Torpera','Tortura','Unica','Utobra','Venebra','Vita','Vunira','Wintera','Wizera','Xandebra','Xylona','Yonabra','Ysolera','Zenobra','Zuna','Zunera'];
const city = [`Ab'dendriel`,`Ankrahmun`,`Carlin`,`Darashia`,`Edron`,'Farmine','Gray Beach',`Issavi`,`Kazordoon`,`Liberty Bay`,`Port Hope`,`Rathleton`,`Svargrond`,`Thais`,`Venore`,`Yalahar`];
const building = ['Houses','Guildhalls'];
let occupied = true;
let formServer = document.getElementById("selectServer");
let formCity = document.getElementById("selectCity");
let formBuilding = document.getElementById("selectBuilding");
$(document).ready(function(){
    $('select').formSelect();
    $('.sidenav').sidenav();
});
// Populate Server Menu
for (let i=0; i< server.length;i++){
    let opt = server[i];
    let el = document.createElement("option");
    el.textContent=opt;
    el.value=opt;
    formServer.appendChild(el);
}
// Populate City Menu
for (let i=0; i< city.length;i++){
    let opt = city[i];
    let el = document.createElement("option");
    el.textContent=opt;
    el.value=opt;
    formCity.appendChild(el);
}
// Populate Building Type
for (let i=0; i<building.length;i++){
    let opt = building[i];
    let el = document.createElement("option");
    el.textContent=opt;
    el.value=opt;
    formBuilding.appendChild(el);
}