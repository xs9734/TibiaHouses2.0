
let guildHalls = [`Ab'dendriel`,`Carlin`,`Kazordoon`,`Thais`,`Venore`,`Ankrahmun`,`Darashia`,`Edron`,`Farmine`,`Gray Beach`,`Issavi`,`Liberty Bay`,`Port Hope`,`Rathleton`,`Svargrond`,`Yalahar`];
var dataContainer = document.getElementById("house-info");
var counter=0;

function loadHouses(){
    console.log(guildHalls.length);
    for (var i=0; i < guildHalls.length; i++){

        var guildHallsCounted = `https://api.tibiadata.com/v2/guildhalls/Nefera/${guildHalls[counter]}/guildhalls.json`
        fetch(guildHallsCounted).then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                response.json().then(function (data) {
                    console.log(`city loaded! ${guildHalls[counter]}`);
                    console.log(`Got the data fam.`);
                    allGuildhalls = [];
                    console.log(data.houses.houses.length);
                    for (var i=0; i < data.houses.houses.length; i++){
                        allGuildhalls.push(data.houses.houses[i]);
                        var houseCity = data.houses.town;
                        var houseID = allGuildhalls[i].houseid;
                        var houseName = allGuildhalls[i].name;
                        var houseSize = allGuildhalls[i].size;
                        var houseStatus = allGuildhalls[i].status;
                        var houseRent = allGuildhalls[i].rent;
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
            <p class="card-text house_time">${houseTime}</p>
            <a href="https://www.tibia.com/community/?subtopic=houses&page=view&world=Nefera&town=${citySelected}&state=&type=houses&order=&houseid=${houseID}" target="_blank" class="btn btn-primary mt-auto"> Open on Tibia.com</a>
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
              <p class="card-text house_time">Currently owned by <a href="https://www.tibia.com/community/?subtopic=characters&name=Durin" target="_blank"> Durin </a></p>
              <a href="https://www.tibia.com/community/?subtopic=houses&page=view&world=Nefera&town=${citySelected}&state=&type=houses&order=&houseid=${houseID}" target="_blank" class="btn btn-primary mt-auto"> Open on Tibia.com</a>
              </div>
              `
                        }
                        ;
                        dataContainer.appendChild(badge);
                        console.log(`House ${i} - ${houseName} loaded succesfully`);
                        console.log("Checkmark Status is false. " + occupiedFilter);
                    }
                })})

        counter++;
    }

}
