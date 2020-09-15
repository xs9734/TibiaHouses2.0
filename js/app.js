var dataContainer = document.getElementById("house-info");
var occupiedFilter = document.getElementById("occupied-filter")
var citySelected = `Edron`;

function loadAbd(){
  citySelected=`Ab'Dendriel`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function loadAnk(){
  citySelected = `Ankrahmun`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function loadCar(){
  citySelected = `Carlin`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function loadDar(){
  citySelected = `Darashia`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function loadEdr(){
  citySelected = `Edron`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function loadFar(){
  citySelected = `Farmine`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function loadGra(){
  citySelected = `Gray Beach`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function loadIss(){
  citySelected = `Issavi`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function loadKaz(){
  citySelected = `Kazordoon`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function loadLib(){
  citySelected = `Liberty Bay`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function Por(){
  citySelected = `Port Hope`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function Rat(){
  citySelected = `Rathleton`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function loadSva(){
  citySelected = `Svargrond`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function loadTha(){
  citySelected = `Thais`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function loadVen(){
  citySelected = `Venore`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function loadYal(){
  citySelected = `Yalahar`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}

function loadCity(){
    clearBox();
    loadHouses();
}

function loadHouses(){  
    fetch(`https://api.tibiadata.com/v2/houses/Nefera/${citySelected}.json`)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        response.json().then(function(data) {
          console.log('Ankrahmun homes Loaded Succesfully');
          var f = document.getElementById("occupied-filter").checked;
            console.log("Status is currently" + f);
          console.log(data.houses.houses.length);
          allHomes = [];
          auctionedHomes = [];
          if (f == false){
                var occupied = 0;
                var empty = 0;
                for (var i=0; i<data.houses.houses.length; i++){
                  console.log("Houses Checked:" + i);
                    console.log("Rented Homes Counter: " + occupied);
                    console.log("Auctioned Homes Counter: " + empty);
                  if(data.houses.houses[i].status !== "rented"){
                    auctionedHomes.push(data.houses.houses[i]);
                    console.log("array status:" + auctionedHomes[i]);
                      var houseName = auctionedHomes[i].name;
                  var houseRent = auctionedHomes[i].rent;
                  var houseSize = auctionedHomes[i].size;
                  var houseStatus = auctionedHomes[i].status;
                  var houseID = auctionedHomes[i].houseid;
                  var houseStatusString = houseStatus.substring(houseStatus.indexOf("auctioned"), houseStatus.indexOf(" ("));
                  var bidAmount_input = houseStatus.substring(houseStatus.indexOf("(")+1, houseStatus.indexOf(" gold"));
                  var bidAmount_output= bidAmount_input;
                  var houseBid = parseInt(bidAmount_output, 10);
                  var badge = document.createElement('div');
                badge.className = 'card house-cards';
                badge.innerHTML =
                `
                <img src="https://static.tibia.com/images/houses/house_${houseID}.png" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column">
                <h5 class="card-title house_name">${houseName}</h5>
                <p class="card-text house_size">${houseSize} sqm</p>
                <p class="card-text house_beds">{house_beds}</p>
                <p class="card-text house_rent">${houseRent.toLocaleString("en")} gps</p>
                <p class="card-text house_status">${houseStatusString}</p>
                <p class="card-text house_bid">Current Bid: </br>${houseBid.toLocaleString("en")} gps</p>
                <a href="https://www.tibia.com/community/?subtopic=houses&page=view&world=Nefera&town=Ankrahmun&state=&type=houses&order=&houseid=${houseID}" class="btn btn-primary mt-auto"> Open on Tibia.com</a>
                </div>
                `
                ;
                  dataContainer.appendChild(badge);
                  console.log(`House ${i} - ${houseName} loaded succesfully`);
                        empty++;
                  }
                  else{
                         auctionedHomes.push(data.houses.houses[i]);
                   console.log("House is Occupied");
                      occupied++;
                  }
            }
                if (empty == 0){
              var badge = document.createElement('div');
              badge.className = 'card house-cards';
              badge.innerHTML =
              `
              <img src="images/house_0000.png" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title house_name">No houses here :(</h5>
              <p class="card-text house_size">{houseSize}</p>
              <p class="card-text house_beds">{houseBeds}</p>
              <p class="card-text house_rent">{houseRent}</p>
              <p class="card-text house_bid">{houseStatus}</p>
              <p class="card-text house_time">{house_time}</p>
              <a href="#" class="btn btn-primary">{house_link}</a>
              </div>
              `
              dataContainer.appendChild(badge);
                }
                else{
                    console.log("There are " + empty + " available");
                }
          }
          else if (f == true) {
            for (var i=0; i < data.houses.houses.length; i++){
              console.log("Houses Loaded: " + i);
              allHomes.push(data.houses.houses[i]);
              var houseName = allHomes[i].name;
              var houseRent = allHomes[i].rent;
              var houseSize = allHomes[i].size;
              var houseStatus = allHomes[i].status;
              var houseID = allHomes[i].houseid;
              if (data.houses.houses[i].status !== "rented"){
                var houseStatusString = houseStatus.substring(houseStatus.indexOf("auctioned"), houseStatus.indexOf(" ("));
                var bidAmount_input = houseStatus.substring(houseStatus.indexOf("(")+1, houseStatus.indexOf(" gold"));
                var bidAmount_output= bidAmount_input;
                var houseBid = parseInt(bidAmount_output, 10);
              }
              else{}
              if (data.houses.houses[i].status !== "rented"){
              var badge = document.createElement('div');
            badge.className = 'card house-cards';
            badge.innerHTML =
          
            `
            <img src="https://static.tibia.com/images/houses/house_${houseID}.png" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column">
            <h5 class="card-title house_name">${houseName}</h5>
            <p class="card-text house_size">${houseSize} sqm</p>
            <p class="card-text house_beds">{house_beds}</p>
            <p class="card-text house_rent">${houseRent.toLocaleString("en")} gps</p>
            <p class="card-text house_status">${houseStatusString}</p>
            <p class="card-text house_bid">Current Bid: </br>${houseBid.toLocaleString("en")} gps</p>
            <a href="https://www.tibia.com/community/?subtopic=houses&page=view&world=Nefera&town=Ankrahmun&state=&type=houses&order=&houseid=${houseID}" class="btn btn-primary mt-auto"> Open on Tibia.com</a>
            </div>
            `
            }
            else{
              var badge = document.createElement('div');
              badge.className = 'card house-cards';
              badge.innerHTML =
            
              `
              <img src="https://static.tibia.com/images/houses/house_${houseID}.png" class="card-img-top" alt="...">
              <div class="card-body d-flex flex-column">
              <h5 class="card-title house_name">${houseName}</h5>
              <p class="card-text house_size">${houseSize} sqm</p>
              <p class="card-text house_beds">{house_beds}</p>
              <p class="card-text house_rent">${houseRent.toLocaleString("en")} gps</p>
              <p class="card-text house_status">${houseStatus}</p>
              <a href="https://www.tibia.com/community/?subtopic=houses&page=view&world=Nefera&town=Ankrahmun&state=&type=houses&order=&houseid=${houseID}" class="btn btn-primary mt-auto"> Open on Tibia.com</a>
              </div>
              `
            }
            ;
              dataContainer.appendChild(badge);
              console.log(`House ${i} - ${houseName} loaded succesfully`);
              console.log("Checkmark Status is false. " + occupiedFilter);
            }
            }
            
        });
      }
    )
    .catch(function(err) { console.log('Fetch Error :-S', err);});
  }


  function clearBox()
{
  dataContainer.innerHTML = "";
}
function addtextBox()
{
  console.log("text added");
}