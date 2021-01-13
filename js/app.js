var dataContainer = document.getElementById("house-info");
var occupiedFilter = document.getElementById("occupied-filter")
var citySelected = `Edron`;

function loadEnd(){
  loadAll();
}
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
function loadPor(){
  citySelected = `Port Hope`;
  dataContainer = document.getElementById(`house-info-${citySelected}`);
  loadCity();
}
function loadRat(){
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
          console.log(`${citySelected} homes Loaded Succesfully`);
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
                    var houseCity = data.houses.town;
                    var houseName = auctionedHomes[i].name;
                  var houseRent = auctionedHomes[i].rent;
                  var houseSize = auctionedHomes[i].size;
                  var houseStatus = auctionedHomes[i].status;
                  var houseID = auctionedHomes[i].houseid;
                  var houseStatusString = houseStatus.substring(houseStatus.indexOf("auctioned"), houseStatus.indexOf(" ("));
                  var bidAmount_input = houseStatus.substring(houseStatus.indexOf("(")+1, houseStatus.indexOf(" gold"));
                  var bidAmount_output= bidAmount_input;
                  var houseBid = parseInt(bidAmount_output, 10);
                  var houseTime = houseStatus.substring(houseStatus.indexOf("; ")+1, houseStatus.indexOf(")"));
                  var badge = document.createElement('div');
                badge.className = 'card house-cards rounded bg-cards text-white shadow text-center mb-5';
                badge.innerHTML =
                `
                <img src="https://static.tibia.com/images/houses/house_${houseID}.png" class="card-img-top rounded p-2" alt="...">
                    <div class="card-header text-dark">
                        ${houseName}
                    </div>
                    <div class="card-block">
                        <div class="row house-info-label">
                            <div class="col-6">Size:</div>
                            <div class="col-6">Beds:</div>
                        </div>
                        <div class="row house-info-value">
                            <div class="col-6">${houseSize} SQM</div>
                            <div class="col-6">0</div>
                        </div>
                        <div class="row house-info-label">
                            <div class="col-6">Rent:</div>
                            <div class="col-6">Town:</div>
                        </div>
                        <div class="row house-info-value">
                            <div class="col-6">${houseRent.toLocaleString("en")} gps</div>
                            <div class="col-6">${houseCity}</div>
                        </div>
                        <div class="row house-info-label">
                            <div class="col-12">Current Bid:</div>
                        </div>
                        <div class="row house-info-value">
                            <div class="col-12">${houseBid.toLocaleString("en")} gps</div>
                        </div>
                        <div class="row">
                            <div class="col-12"></div>
                        </div>
                        <div class="row py-2">
                            <div class="col-12">${houseTime}</div>
                        </div>
                    </div>
                    <a href="https://www.tibia.com/community/?subtopic=houses&page=view&world=Nefera&town=${citySelected}&state=&type=houses&order=&houseid=${houseID}" target="_blank" class="btn btn-primary rounded m-2">Open on Tibia.com</a>
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
              <img src="images/404.jpg" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title house_name">No houses here :(</h5>
              <p class="card-text house_size">NO HOUSE FOR U</p>
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
              var houseCity = data.houses.town;
              var houseName = allHomes[i].name;
              var houseRent = allHomes[i].rent;
              var houseSize = allHomes[i].size;
              var houseStatus = allHomes[i].status;
              var houseID = allHomes[i].houseid;
              if (data.houses.houses[i].status !== "rented"){
                var houseTime = houseStatus.substring(houseStatus.indexOf("; ")+1, houseStatus.indexOf(")"));
                var houseStatusString = houseStatus.substring(houseStatus.indexOf("auctioned"), houseStatus.indexOf(" ("));
                var bidAmount_input = houseStatus.substring(houseStatus.indexOf("(")+1, houseStatus.indexOf(" gold"));
                var bidAmount_output= bidAmount_input;
                var houseBid = parseInt(bidAmount_output, 10);
              }
              else{}
              if (data.houses.houses[i].status !== "rented"){
              var badge = document.createElement('div');
                badge.className = 'card house-cards rounded bg-cards text-white shadow text-center mb-5';
                badge.innerHTML =

                `
                <img src="https://static.tibia.com/images/houses/house_${houseID}.png" class="card-img-top rounded p-2" alt="...">
                    <div class="card-header text-dark">
                        ${houseName}
                    </div>
                    <div class="card-block">
                        <div class="row house-info-label">
                            <div class="col-6">Size:</div>
                            <div class="col-6">Beds:</div>
                        </div>
                        <div class="row house-info-value">
                            <div class="col-6">${houseSize} SQM</div>
                            <div class="col-6">0</div>
                        </div>
                        <div class="row house-info-label">
                            <div class="col-6">Rent:</div>
                            <div class="col-6">Town:</div>
                        </div>
                        <div class="row house-info-value">
                            <div class="col-6">${houseRent.toLocaleString("en")} gps</div>
                            <div class="col-6">${houseCity}</div>
                        </div>
                        <div class="row house-info-label">
                            <div class="col-12">Current Bid:</div>
                        </div>
                        <div class="row house-info-value">
                            <div class="col-12">${houseBid.toLocaleString("en")} gps</div>
                        </div>
                        <div class="row">
                            <div class="col-12"></div>
                        </div>
                        <div class="row py-2">
                            <div class="col-12">${houseTime}</div>
                        </div>
                    </div>
                    <a href="https://www.tibia.com/community/?subtopic=houses&page=view&world=Nefera&town=${citySelected}&state=&type=houses&order=&houseid=${houseID}" target="_blank" class="btn btn-primary rounded m-2">Open on Tibia.com</a>
                </div>
                `
              }
              else{
                var badge = document.createElement('div');
                badge.className = 'card house-cards rounded bg-cards text-white shadow text-center mb-5';
                badge.innerHTML =
                    `
                <img src="https://static.tibia.com/images/houses/house_${houseID}.png" class="card-img-top rounded p-2" alt="...">
                    <div class="card-header occupied text-white">
                        ${houseName}
                    </div>
                    <div class="card-block">
                        <div class="row house-info-label">
                            <div class="col-6">Size:</div>
                            <div class="col-6">Beds:</div>
                        </div>
                        <div class="row house-info-value">
                            <div class="col-6">${houseSize} SQM</div>
                            <div class="col-6">0</div>
                        </div>
                        <div class="row house-info-label">
                            <div class="col-6">Rent:</div>
                            <div class="col-6">Town:</div>
                        </div>
                        <div class="row house-info-value">
                            <div class="col-6">${houseRent.toLocaleString("en")} gps</div>
                            <div class="col-6">${houseCity}</div>
                        </div>
                        <div class="row house-info-label">
                            <div class="col-12">Currently Occupied:</div>
                        </div>
                        <div class="row house-info-value">
                            <div class="col-12">Ric Nexus</div>
                        </div>
                        <div class="row">
                            <div class="col-12"></div>
                        </div>
                        <div class="row py-2">
                            <div class="col-12">~~</div>
                        </div>
                    </div>
                    <a href="https://www.tibia.com/community/?subtopic=houses&page=view&world=Nefera&town=${citySelected}&state=&type=houses&order=&houseid=${houseID}" target="_blank" class="btn btn-primary rounded m-2">Open on Tibia.com</a>
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

for (let i=0;i<building.length;i++){
  let opt = building[i]
  let el = document.createElement("option")
  el.textContent=opt
  el.value=opt
  formBuilding.appendChild(el)
}