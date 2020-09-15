
var citySelected = "https://api.tibiadata.com/v2/houses/Nefera/Ankrahmun.json"

function fetchTown(){  
    fetch(citySelected)
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
                  var houseStatus = auctionedHomes[i].status;
                  var houseID = auctionedHomes[i].houseid;
                  var badge = document.createElement('div');
                badge.className = 'card house-cards';
                badge.innerHTML =//* retrieve house Id, for images and use as "images/house_${houseID}.png"*//
                `
                <img src="https://static.tibia.com/images/houses/house_${houseID}.png" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title house_name">${houseName}</h5>
                <p class="card-text house_size">{house_size}</p>
                <p class="card-text house_beds">{house_beds}</p>
                <p class="card-text house_rent">${houseRent}</p>
                <p class="card-text house_bid">${houseStatus}</p>
                <p class="card-text house_time">{house_time}</p>
                <a href="#" class="btn btn-primary">{house_link}</a>
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
              <p class="card-text house_size">{house_size}</p>
              <p class="card-text house_beds">{house_beds}</p>
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
              var houseStatus = allHomes[i].status;
              var badge = document.createElement('div');
              badge.className = 'card house-cards';
              badge.innerHTML =
              `
              <img src="images/house_0000.png" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title house_name">${houseName}</h5>
              <p class="card-text house_size">{house_size}</p>
              <p class="card-text house_beds">{house_beds}</p>
              <p class="card-text house_rent">${houseRent}</p>
              <p class="card-text house_bid">${houseStatus}</p>
              <p class="card-text house_time">{house_time}</p>
              <a href="#" class="btn btn-primary">{house_link}</a>
              </div>
              `
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


${houseStatus}


  var output_element = document.getElementById('my-output');
  
  var bidAmount_input = houseStatus.substring(houseStatus.indexOf("(")+1, houseStatus.indexOf(" gold"));
  var  bidAmount_output= bidAmount_input;
  var bidTotal = parseInt(bidAmount_input, 10);
  
  
  houseBid.innerText = bidTotal.toLocaleString("en");;
  
  


  `auctioned (1200001 gold; 4 days left)`