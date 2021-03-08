async function getAllCountries() {
    try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all');
        // haal data uit het result object

        // DESTRUCTURING !!!!
        const {data} = response;  /* hier haal je alle data uit de objecten dmv destructuring*/


        // Opgave 2, sorteren op population van laag naar hoog

        data.sort((a, b) => {
            return a.population - b.population;
        });


        // Opgave 3

        // Kan met .map
        //definieer de plek (target) in de webpage  <ul id="country-list"></ul>

        const countryList = document.getElementById('country-list');

        // loop door de hele data

        for (let i = 0; i < data.length; i++) {

            //Eerst destructuring om eea leesbaarder te maken
            const {flag, name, region, population} = data[i];


            const newRow = document.createElement('li');
            newRow.setAttribute('class', 'country-clickable');

            // <img> element maken voor de vlag
            const newFlag = document.createElement('img');
            newFlag.setAttribute('src', flag);
            newFlag.setAttribute('class', 'flag');
            // <img> aan ons <li> element toevoegen
            newRow.appendChild(newFlag);

            // plak de name achter de img dmv de <span> tag

            const newName = document.createElement('span');
            newName.textContent = name;
            newName.setAttribute('class', region);
            // zet mbv function checkColor kleur goed (region)
            newName.style.color = checkColor(region)
            newRow.appendChild(newName);


            // met p element population eronder zetten, met een style.opacity om visibility aan/uit te zetten
            // eerst population omzetten naar 1000 tallen ed

            populationWithIntl = (Intl.NumberFormat("en-US").format(population))

            const newPopString = document.createElement('p');
            newPopString.setAttribute('class', 'popString');
            newPopString.textContent = `Has a population of ${populationWithIntl} people`; /* Let op backtick!!*/
            newPopString.style.opacity = `0`;
            newRow.appendChild(newPopString);


            // maak event listener
            newRow.addEventListener("click", () => {
//                Wanneer opacity 0 is, verander het naar 1, anders maak opacity 0
                changeOpacity(newPopString);
            });


            countryList.appendChild(newRow);


        }


    } catch (errorDescription) {


        const errorMessageToWeb = document.getElementById("errorMessageWeb");
        errorMessageToWeb.textContent = "something went wrong";
    }
}

getAllCountries();


function changeOpacity(newPopString) {
//  Wanneer opacity 0 is, verander het naar 1, anders maak opacity 0
    if (newPopString.style.opacity == 0) {
        console.log("clicked")
        newPopString.style.opacity = `1`
    } else {
        newPopString.style.opacity = `0`
    }
}

function checkColor(region) {
    let color = "#323330";

    switch (region) {
        case `Africa`:
            color = "#5575C1";
            break;

        case `Americas`:
            color = "#4C834B";
            break;

        case `Asia`:
            color = "#D24E5B";
            break;

        case `Europe`:
            color = "#FFD435";
            break;

        case `Oceania`:
            color = "#A653BA";
            break;

        default:
            color = "#323330";


    }
    return color


}