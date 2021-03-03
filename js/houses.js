//Materialize Load
$(document).ready(function(){
    $('select').formSelect();
    $('.sidenav').sidenav();
});
const dataContainer = document.getElementById("dataContainer")
let testArray = [20802,
    59070,
    20007,
    20605,
    50405
]
let houseArray = [10006, 10007, 10101, 10102, 10103, 10104, 10112, 10113, 10114, 10121, 10122, 10123, 10124, 10201, 10202,
    10203, 10204, 10205, 10206, 10211, 10212, 10213, 10214, 10215, 10216, 10301, 10302, 10303, 10304, 10305,
    10306, 10307, 10308, 10311, 10312, 10313, 10314, 10315, 10316, 10317, 10318, 10319, 10320, 10321, 10322,
    10323, 10324, 10325, 10326, 10401, 10402, 10403, 10404, 10405, 10407, 10408, 10501, 10502, 10503, 10504,
    10505, 10508, 10510, 10602, 10603, 10701, 10702, 10703, 10802, 10803, 10804, 10901, 10902, 10903, 10904,
    10905, 11001, 11002, 11003, 11004, 11005, 11006, 11007, 11008, 11009, 11010, 11011, 11012, 11013, 11014,
    11015, 11016, 11017, 11018, 11019, 11020, 11021, 11022, 11023, 11024, 11401, 11402, 11404, 12003, 12004,
    12005, 12006, 12007, 12008, 12009, 12100, 14003, 14004, 14005, 14006, 14008, 14010, 14011, 15001, 15002,
    17001, 19001, 19003, 19004, 19005, 19006, 19008, 19009, 19010, 19011, 19012, 19013, 19014, 19015, 19016,
    19017, 19018, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20102, 20103, 20104, 20201,
    20202, 20203, 20204, 20205, 20206, 20301, 20304, 20305, 20306, 20307, 20308, 20309, 20310, 20314, 20315,
    20316, 20317, 20318, 20319, 20320, 20321, 20322, 20323, 20324, 20325, 20326, 20327, 20401, 20402, 20403,
    20404, 20405, 20501, 20502, 20503, 20504, 20505, 20508, 20509, 20510, 20512, 20513, 20514, 20601, 20602,
    20603, 20604, 20605, 20606, 20607, 20701, 20702, 20703, 20704, 20705, 20706, 20707, 20709, 20710, 20713,
    20714, 20715, 20801, 20802, 20803, 20902, 22001, 22002, 22003, 22004, 22006, 22007, 24001, 24002, 24004,
    24005, 24006, 24007, 24008, 24009, 24010, 24011, 24012, 24013, 30101, 30102, 30103, 30104, 30105, 30106,
    30107, 30201, 30202, 30203, 30204, 30206, 30301, 30304, 30307, 30308, 30312, 30313, 30401, 30402, 30403,
    30404, 30405, 30501, 30502, 30504, 30507, 30510, 30511, 30512, 30513, 30517, 30523, 30601, 30602, 30603,
    30604, 30605, 30606, 30607, 30608, 30610, 32001, 32002, 32003, 32004, 32007, 32009, 32013, 32014, 32016,
    33001, 35006, 35007, 35008, 35009, 35010, 35011, 35012, 35013, 35014, 35015, 35016, 35017, 35018, 35019,
    35020, 35021, 35022, 35023, 35024, 35025, 35026, 35027, 35028, 35029, 35030, 35031, 35032, 35033, 35034,
    35035, 35036, 35037, 35038, 35039, 35040, 35041, 35042, 35043, 35044, 35045, 35046, 35047, 35048, 35049,
    35050, 35051, 35052, 35053, 35054, 35055, 35056, 35057, 35058, 35059, 35060, 35061, 35062, 35063, 35064,
    35065, 35066, 35067, 35068, 35069, 35070, 37001, 37002, 37003, 37004, 37005, 37006, 37007, 37008, 37009,
    37010, 37011, 37012, 37013, 37014, 37015, 37016, 37017, 37018, 37019, 37020, 40101, 40102, 40103, 40104,
    40105, 40106, 40107, 40108, 40109, 40110, 40211, 40212, 40222, 40224, 40234, 40242, 40243, 40244, 40301,
    40302, 40303, 40304, 40401, 40402, 40403, 40404, 40405, 40406, 40407, 40408, 40409, 40410, 40411, 40412,
    40413, 40414, 40501, 40502, 40503, 40504, 40505, 40506, 40507, 40508, 40509, 40510, 40611, 40614, 40621,
    40622, 40625, 40638, 45001, 45002, 45003, 45004, 45005, 45006, 45007, 45008, 45009, 46001, 46002, 46003,
    46004, 46005, 46006, 46007, 46008, 46009, 46010, 46011, 46012, 46013, 46014, 46015, 46016, 46017, 46018,
    46019, 46020, 46021, 46022, 46023, 46024, 46025, 46026, 46027, 46028, 46029, 46030, 46031, 46032, 46033,
    46034, 46035, 48001, 48002, 48003, 48004, 48005, 48006, 50101, 50102, 50103, 50104, 50105, 50106, 50107,
    50108, 50109, 50110, 50111, 50112, 50113, 50114, 50115, 50116, 50117, 50118, 50119, 50120, 50121, 50122,
    50123, 50124, 50125, 50126, 50127, 50128, 50129, 50201, 50202, 50203, 50204, 50205, 50301, 50302, 50303,
    50304, 50305, 50306, 50307, 50308, 50309, 50311, 50312, 50315, 50317, 50318, 50319, 50321, 50323, 50325,
    50326, 50401, 50402, 50403, 50404, 50405, 50406, 50407, 50408, 50409, 50410, 50501, 50502, 50503, 50504,
    50505, 50506, 50507, 50508, 50509, 50510, 50511, 50512, 50513, 50514, 50515, 50516, 50517, 50518, 50604,
    50702, 50703, 50704, 50705, 50706, 50707, 52001, 52002, 52003, 52004, 52005, 52006, 52007, 52008, 52009,
    52010, 52011, 52012, 52013, 52016, 52017, 52020, 52021, 54001, 54002, 54003, 54004, 54005, 54006, 54007,
    54009, 54010, 54012, 54013, 54014, 54015, 54016, 54017, 54018, 54019, 54020, 54021, 54022, 54023, 54024,
    54025, 54026, 55001, 55002, 55003, 55004, 55005, 55006, 55007, 55008, 55009, 55010, 55011, 55012, 55013,
    55014, 55015, 55101, 55102, 55103, 55104, 55105, 55106, 55107, 55108, 55109, 55110, 55111, 55112, 55113,
    55114, 55115, 55116, 55117, 55118, 55119, 55120, 55121, 55122, 55123, 55124, 55125, 55126, 55127, 55128,
    55129, 55130, 55131, 55201, 55202, 55203, 55204, 55205, 55206, 55207, 55208, 55209, 55210, 55211, 55212,
    55213, 57001, 58000, 58001, 58002, 58003, 58004, 58005, 58006, 58007, 58008, 58009, 58010, 58011, 58012,
    58013, 58014, 58015, 58016, 58017, 58018, 58019, 58020, 58021, 58022, 58023, 58024, 58025, 58026, 58027,
    58028, 58029, 58030, 58031, 58032, 58034, 58035, 58036, 58037, 58038, 58042, 58043, 58044, 58045, 58046,
    59223, 59001, 59002, 59003, 59004, 59005, 59006, 59007, 59008, 59009, 59010, 59011, 59012, 59013, 59014,
    59015, 59016, 59017, 59018, 59019, 59021, 59022, 59023, 59025, 59026, 59027, 59028, 59029, 59030, 59031,
    59032, 59033, 59034, 59035, 59036, 59037, 59038, 59039, 59040, 59041, 59042, 59043, 59044, 59045, 59046,
    59047, 59048, 59049, 59050, 59051, 59052, 59053, 59054, 59055, 59056, 59057, 59058, 59059, 59060, 59061,
    59062, 59063, 59064, 59065, 59067, 59068, 59069, 59070, 59071, 59072, 59074, 59075, 61000, 61001, 61002,
    61003, 61004, 61005, 61006, 61007, 61008, 61009, 61010, 61011, 61012, 61013, 61014, 61015, 61016, 61017,
    61018, 61019, 61020, 61021, 61022, 61023, 61024, 61025, 61026, 61027, 61028, 61029, 61030, 61031, 61032,
    61033, 61034, 61035, 61036, 61037, 61038, 61039, 61040, 61041, 61042, 61043, 61044, 61045, 61046, 61047,
    61048, 61049, 61050, 62000, 62001, 62002, 62003, 62004, 62005, 62006, 62007, 62008, 62009, 62010, 62011,
    62012, 62013, 62014, 62015, 62016, 62019, 62020, 62021, 62022, 62023, 62024, 63001, 63002, 63003, 63004,
    63005, 63006, 63007, 63008, 63009, 63010, 63011, 63012, 63013, 64001, 64002, 64003, 64004, 64005, 64006,
    64007, 64008, 64009, 64010, 64011, 64012, 64013, 64014, 64015, 64016, 64017, 64018, 64019, 64020, 64021,
    64022, 64023, 64024, 64025, 64027, 64029, 64030, 64031, 64032, 64033, 64034, 64035, 64036, 65001, 65002,
    65003, 65004, 65005, 65006, 65007, 65008, 65009, 65010, 65011, 65012, 65013, 65015, 65016, 65017, 65018,
    65019, 65020, 65021, 65022]
let counter = 0

function loadHouseList(){
    for(let i=0 ; i <houseArray.length; i++){
        let houseArrayCounted = `https://api.tibiadata.com/v2/house/Nefera/${houseArray[counter]}.json`
        fetch(houseArrayCounted).then(
            function(response){
                if (response.status !== 200){
                    console.log(`looks like there was a problem. Status Code: ` + response.status);
                    return;
                }
                response.json().then(function(data){
                    if(data.house.status.auction == false){
                        if(data.house.status.onwer_new !== null){
                            var str = data.house.status.original
                            if (str.endsWith("gold coins.")==true){
                                var seller = str.substring(str.indexOf("rented by")+10, str.indexOf("."))
                                var buyer = str.substring(str.indexOf("pass the house to")+18, str.indexOf("for"))
                                var transfer_date = str.substring(str.indexOf("move out on")+12, str.indexOf("(time of daily server save)"))
                                var transferAmount_input = str.substring(str.indexOf("for")+4, str.indexOf(" gold"));
                                console.log("------------");
                                console.log(data.house.name);
                                console.log(data.house.houseid);
                                console.log(seller);
                                console.log(buyer);
                                console.log(transferAmount_input);
                                console.log("------------");
                                let houseinfo = document.createElement("tr")
                                houseinfo.innerHTML=
                                    `
                                    <td>${data.house.houseid}</td>
                                    <td>${data.house.name}</td>
                                    <td>${seller}</td>
                                    <td>${buyer}</td>
                                    <td>${transferAmount_input}</td>
                                    <td>Nefera</td>
                                    <td>${transfer_date}</td>
                                    <td>${data.house.status.original}</td>
                                    `
                                dataContainer.appendChild(houseinfo)
                            }
                        }
                    }

                })
            }
        )
        counter++;
    }

}
function loadHouseListAntica(){
    for(let i=0 ; i <houseArray.length; i++){
        let houseArrayCounted = `https://api.tibiadata.com/v2/house/Antica/${houseArray[counter]}.json`
        fetch(houseArrayCounted).then(
            function(response){
                if (response.status !== 200){
                    console.log(`looks like there was a problem. Status Code: ` + response.status);
                    return;
                }
                response.json().then(function(data){
                    if(data.house.status.auction == false){
                        if(data.house.status.onwer_new !== null){
                            var str = data.house.status.original
                            if (str.endsWith("gold coins.")==true){
                                var seller = str.substring(str.indexOf("rented by")+10, str.indexOf("."))
                                var buyer = str.substring(str.indexOf("pass the house to")+18, str.indexOf("for"))
                                var transfer_date = str.substring(str.indexOf("move out on")+12, str.indexOf("(time of daily server save)"))
                                var transferAmount_input = str.substring(str.indexOf("for")+4, str.indexOf(" gold"));
                                console.log("------------");
                                console.log(data.house.name);
                                console.log(data.house.houseid);
                                console.log(seller);
                                console.log(buyer);
                                console.log(transferAmount_input);
                                console.log("------------");
                                let houseinfo = document.createElement("tr")
                                houseinfo.innerHTML=
                                    `
                                    <td>${data.house.houseid}</td>
                                    <td>${data.house.name}</td>
                                    <td>${seller}</td>
                                    <td>${buyer}</td>
                                    <td>${transferAmount_input}</td>
                                    <td>Antica</td>
                                    <td>${transfer_date}</td>
                                    <td>${data.house.status.original}</td>
                                    `
                                dataContainer.appendChild(houseinfo)
                            }
                        }
                    }

                })
            }
        )
        counter++;
    }

}
function loadHouseListSecura(){
    for(let i=0 ; i <houseArray.length; i++){
        let houseArrayCounted = `https://api.tibiadata.com/v2/house/Secura/${houseArray[counter]}.json`
        fetch(houseArrayCounted).then(
            function(response){
                if (response.status !== 200){
                    console.log(`looks like there was a problem. Status Code: ` + response.status);
                    return;
                }
                response.json().then(function(data){
                    if(data.house.status.auction == false){
                        if(data.house.status.onwer_new !== null){
                            var str = data.house.status.original
                            if (str.endsWith("gold coins.")==true){
                                var seller = str.substring(str.indexOf("rented by")+10, str.indexOf("."))
                                var buyer = str.substring(str.indexOf("pass the house to")+18, str.indexOf("for"))
                                var transfer_date = str.substring(str.indexOf("move out on")+12, str.indexOf("(time of daily server save)"))
                                var transferAmount_input = str.substring(str.indexOf("for")+4, str.indexOf(" gold"));
                                console.log("------------");
                                console.log(data.house.name);
                                console.log(data.house.houseid);
                                console.log(seller);
                                console.log(buyer);
                                console.log(transferAmount_input);
                                console.log("------------");
                                let houseinfo = document.createElement("tr")
                                houseinfo.innerHTML=
                                    `
                                    <td>${data.house.houseid}</td>
                                    <td>${data.house.name}</td>
                                    <td>${seller}</td>
                                    <td>${buyer}</td>
                                    <td>${transferAmount_input}</td>
                                    <td>Secura</td>
                                    <td>${transfer_date}</td>
                                    <td>${data.house.status.original}</td>
                                    `
                                dataContainer.appendChild(houseinfo)
                            }
                        }
                    }

                })
            }
        )
        counter++;
    }

}

function loadTestList(){
    for(let i=0 ; i <testArray.length; i++){
        let houseArrayCounted = `https://api.tibiadata.com/v2/house/Nefera/${testArray[counter]}.json`
        fetch(houseArrayCounted).then(
            function(response){
                if (response.status !== 200){
                    console.log(`looks like there was a problem. Status Code: ` + response.status);
                    return;
                }
                response.json().then(function(data){
                    if(data.house.status.auction == false){
                        if(data.house.status.onwer_new !== null){
                            var str = data.house.status.original
                            if (str.endsWith("gold coins.")==true){
                                var seller = str.substring(str.indexOf("rented by")+10, str.indexOf("."))
                                var buyer = str.substring(str.indexOf("pass the house to")+18, str.indexOf("for"))
                                var transfer_date = str.substring(str.indexOf("move out on")+12, str.indexOf("(time of daily server save)"))
                                var transferAmount_input = str.substring(str.indexOf("for")+4, str.indexOf(" gold"));
                                console.log("------------");
                                console.log(data.house.name);
                                console.log(data.house.houseid);
                                console.log(seller);
                                console.log(buyer);
                                console.log(transferAmount_input);
                                console.log("------------");
                                let houseinfo = document.createElement("tr")
                                houseinfo.innerHTML=
                                    `
                                    <td>${data.house.houseid}</td>
                                    <td>${data.house.name}</td>
                                    <td>${seller}</td>
                                    <td>${buyer}</td>
                                    <td>${transferAmount_input}</td>
                                    <td>ServerName</td>
                                    <td>${transfer_date}</td>
                                    <td>${data.house.status.original}</td>
                                    `
                                dataContainer.appendChild(houseinfo)
                            }
                        }
                    }

                })
            }
        )
        counter++;
    }

}
