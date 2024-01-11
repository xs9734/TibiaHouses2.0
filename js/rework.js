//Materialize Load
$(document).ready(function(){
    $('select').formSelect();
    $('.sidenav').sidenav();
});

//Load Lists
const server = ["Ambra", "Antica", "Astera", "Axera", "Belobra", "Bombra", "Bona", "Calmera", "Castela", "Celebra", "Celesta", "Collabra", "Damora", "Descubra", "Dia", "Epoca", "Esmera", "Etebra", "Ferobra", "Firmera", "Flamera", "Gentebra", "Gladera", "Gravitera", "Guerribra", "Harmonia", "Havera", "Honbra", "Impulsa", "Inabra", "Issobra", "Jacabra", "Jadebra", "Jaguna", "Kalibra", "Kardera", "Kendria", "Lobera", "Luminera", "Lutabra", "Menera", "Monza", "Mykera", "Nadora", "Nefera", "Nevia", "Obscubra", "Ombra", "Ousabra", "Pacera", "Peloria", "Premia", "Pulsera", "Quelibra", "Quintera", "Rasteibra", "Refugia", "Retalia", "Runera", "Secura", "Serdebra", "Solidera", "Syrena", "Talera", "Thyria", "Tornabra", "Ustebra", "Utobra", "Venebra", "Vitera", "Vunira", "Wadira", "Wildera", "Wintera", "Yonabra", "Yovera", "Zuna", "Zunera"]
const city = [`Ab'dendriel`,`Ankrahmun`,`Carlin`,`Darashia`,`Edron`,'Farmine','Gray Beach',`Issavi`,`Kazordoon`,`Liberty Bay`,`Port Hope`,`Rathleton`,`Svargrond`,`Thais`,`Venore`,`Yalahar`]
const [dataContainer, formServer, formCity, formOccupied] = [
    document.getElementById("dataContainer"),
    document.getElementById("selectServer"),
    document.getElementById("selectCity"),
    document.getElementById("occupied")
  ];


for (let opt of server) {
    formServer.appendChild(Object.assign(document.createElement("option"), { textContent: opt, name: opt, value: opt }));
}

formCity.appendChild(Object.assign(document.createElement("option"), { textContent: "Select All", name: "Select All", value: "selectAll" }));
for (let opt of city){
    formCity.appendChild(Object.assign(document.createElement("option"),{textContent: opt, value: opt}));
}


function handleSelectAll() {
    const selectElement = document.getElementById("selectCity");
    const options = selectElement.options;

    if (options[0].selected) {
        for (let i = 1; i < options.length; i++) {
            options[i].selected = true;
        }
        options[0].selected = false;
    }
}

// Attach the function to the change event
document.getElementById("selectCity").addEventListener("change", handleSelectAll);


function loadJSONForCity(Server, City, Status, rentalStatus) {
    const link = `https://api.tibiadata.com/v4/houses/${Server}/${City}`;
    console.log(link);

    fetch(link)
        .then(response => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }

            response.json().then(data => {
                const homes = Status ? data.houses.house_list : data.houses.house_list.filter(home => !home.rented);

                homes.forEach(home => {
                    console.log(home);

                    rentalStatus = home.rented ? "Rented" : "Auctioned";

                    const houseinfo = document.createElement("tr");
                    houseinfo.innerHTML = `
                        <td>${home.name}</td>
                        <td>${home.size}</td>
                        <td></td>
                        <td>${home.rent}</td>
                        <td>${rentalStatus}</td>
                        <td class="money">${home.auction.current_bid} gps</td>
                        <td><a href="https://www.tibia.com/community/?subtopic=houses&page=view&houseid=${home.house_id}&world=${Server}" target="_blank">link</a></td>
                    `;

                    dataContainer.appendChild(houseinfo);
                    applyNumberFormatting();
                });
            });
        });
}

function test() {
    dataContainer.innerHTML = "";
    const Server = formServer.value;

    // Get selected options from formCity and build an array
    const selectedOptions = Array.from(formCity.selectedOptions).map(option => option.value);
    const City = selectedOptions.length > 0 ? selectedOptions : [formCity.value];

    console.log(City);

    const Status = formOccupied.checked;

    const cityMappings = {
        'Gray Beach': 'Gray%20Beach',
        'Port Hope': 'Port%20Hope',
        'Liberty Bay': 'Liberty%20Bay'
    };

    // Use the mapping for each selected option
    const mappedCities = City.map(city => cityMappings[city] || city);

    // Call loadJSONForCity for each city in the array
    mappedCities.forEach(city => loadJSONForCity(Server, city, Status));
}



function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Apply formatting to elements with the money class
document.addEventListener("DOMContentLoaded", function() {
    const moneyElements = document.querySelectorAll('.money');
    moneyElements.forEach(element => {
        const originalValue = element.textContent.trim();
        const formattedValue = formatNumberWithCommas(originalValue);
        element.textContent = formattedValue;
    });
});

function applyNumberFormatting() {
    const moneyElements = document.querySelectorAll('.money');
    moneyElements.forEach(element => {
        const originalValue = element.textContent.trim();
        const formattedValue = formatNumberWithCommas(originalValue);
        element.textContent = formattedValue;
    });
}

function prefillFormFromURL() {
    const urlParams = new URLSearchParams(window.location.search);

    const selectServerParam = urlParams.get('selectServer');

    if (selectServerParam !== null) {
        document.getElementById('selectServer').value = selectServerParam;
    }
}

// Call the prefillFormFromURL function when the page loads
document.addEventListener("DOMContentLoaded", prefillFormFromURL);
