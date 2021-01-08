
let guildHalls = [`Ab'dendriel`,`Carlin`,`Kazordoon`,`Thais`,`Venore`,`Ankrahmun`,`Darashia`,`Edron`,`Issavi`,`Liberty Bay`,`Port Hope`,`Rathleton`,`Svargrond`,`Yalahar`];
let dataContainergh = document.getElementById("gh-info");
let counter=0;

function loadGuildhalls(){
    console.log(guildHalls.length);
    for (var i=0; i < guildHalls.length; i++){

        var guildHallsCounted = `https://api.tibiadata.com/v2/houses/Nefera/${guildHalls[counter]}/guildhalls.json`
        fetch(guildHallsCounted).then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                response.json().then(function (data) {
                    let cityLabel = guildHalls[counter];
                    console.log(`city loaded! ${cityLabel}`);
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
                        dataContainergh.appendChild(badge);
                        console.log(`House ${i} - ${houseName} loaded succesfully`);
                    }
                })})

        counter++;
    }

}
