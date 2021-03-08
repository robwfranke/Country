// https://restcountries.eu/#api-endpoints-all


const searchButton = document.getElementById("searchButton");


async function getCountryInfo() {

    //------------------------------------------------------------------
    // resetten variabelen/messages
    //------------------------------------------------------------------

    //resetten errormessage
    const errorMessageToWeb = document.getElementById("errorMessageWeb");
    errorMessageToWeb.textContent = ``;


    // resetten flag en country
    const flagOfCountryWeb = document.getElementById("flag");
    flagOfCountryWeb.removeAttribute("src");
    flagOfCountryWeb.removeAttribute("alt");
    const flagCountryToWeb = document.getElementById("flagCountry");
    flagCountryToWeb.textContent = ``;

    // resetten text

    const countryNameStringtoWeb = document.getElementById("countryNameStringWeb");
    countryNameStringtoWeb.textContent = ``;

    const capitalStringToWeb = document.getElementById("capitalStringWeb");

    capitalStringToWeb.textContent = ``;

    const stringOfLanguagesToWeb = document.getElementById("stringOfLanguagesWeb");
    stringOfLanguagesToWeb.textContent = ``;
    //------------------------------------------------------------------


    //---------------ophalen landnaam-------------

    const country = document.getElementById("countryNameWeb").value;
    //------------------------------------------------------------------


    try {
        const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`; /*LET OP BACKTICK!!!!!!!!!!!*/
        const response = await axios.get(url);


        //-----------------------------
        // Input weghalen
        //-------------------------------

        document.getElementById('countryNameWeb').value = "";


// opdracht 2, maak string  [countryNameString

        const countryName = response.data[0].name;
        const subareaName = response.data[0].subregion;
        const amountPopulation = response.data[0].population;
        const countryNameString = countryName + "  is situated in " + subareaName + ". It has a population of " + amountPopulation + " people.";


// opdracht 3
//Maak op basis van de response de volgende string en log dit in de console: The capital is [city]

        let capitalString = "The capital is " + response.data[0].capital;


        //Opdracht 4

        // Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt. In een land kunnen één of twee currencies gebruikt worden:
        //
        //     1 valuta: and you can pay with [currency]'s
        // 2 valuta's: and you can pay with [currency]'s and [currency]'s


        let listOfCurrencies = "";

        for (let i = 0; i < response.data[0].currencies.length; i++) {
            if (response.data[0].currencies[i].name != null) {
                listOfCurrencies = listOfCurrencies + response.data[0].currencies[i].name + ",";
            }
        }
        listOfCurrencies = listOfCurrencies.slice(0, -1);/* verwijder laatste komma*/


        //  Opdracht 5:
// duitsland werkt niet, germany wel, Aruba, nederland, zimbabwe werken alle.


        // Bonusopdracht: Maak een functie die ongeacht het aantal talen die in een land gesproken worden, een string maakt:
        //
        // 1 taal: They speak [language]
        // 2 talen: They speak [language] and [language]
        // 3 talen: They speak [language], [language] and [language]
        // etc.

        const numberOfLanguages = response.data[0].languages.length;
        let stringOfLanguages = "They speak " + response.data[0].languages[0].name;
        for (let i = 1; i < numberOfLanguages - 1; i++) {
            if (numberOfLanguages - i > 0) {
                stringOfLanguages = stringOfLanguages + ", " + response.data[0].languages[i].name;
            }
        }
        if (numberOfLanguages > 1) {
            stringOfLanguages = stringOfLanguages + " and " + response.data[0].languages[numberOfLanguages - 1].name;
        }


        //---------------------------------------------------------------
        //--------------- hier goede vlag in webpage zetten--------------
        //---------------------------------------------------------------
        //    set background


        // geef invoervelden back ground kleur
        const cFColor = document.getElementById("cF")
        cFColor.style.backgroundColor = "mediumvioletred"
        // Kan ook  : const cFColor=document.getElementById("cF").style.backgroundColor="mediumvioletred"


        const cTColor = document.getElementById("cT")
        cTColor.style.backgroundColor = "mediumvioletred"
        //target nu het "flag" element  Hier nog niet met destructure zie part2


        const flagOfCountryWeb = document.getElementById("flag");
        const flagOfCountry = response.data[0].flag;
        flagOfCountryWeb.setAttribute("src", flagOfCountry);
        flagOfCountryWeb.setAttribute("alt", "flag");

        //zet landnaam naast vlag
        const flagCountryToWeb = document.getElementById("flagCountry");
        flagCountryToWeb.textContent = `${country}`


        //---------------------------------------------------------------

        //---------------------------------------------------------------
        //--------------- hier goede text in webpage zetten--------------
        //---------------------------------------------------------------
        const countryNameStringtoWeb = document.getElementById("countryNameStringWeb");
        countryNameStringtoWeb.textContent = `${countryNameString}`;

        const capitalStringToWeb = document.getElementById("capitalStringWeb");
        capitalString = capitalString + " and you can pay with " + listOfCurrencies + "'s";
        capitalStringToWeb.textContent = `${capitalString}`;

        const stringOfLanguagesToWeb = document.getElementById("stringOfLanguagesWeb");
        stringOfLanguagesToWeb.textContent = `${stringOfLanguages}`;


        //----------------------------------------------------------------------------------------
        //Part 2


        //***************  END of TRY *****************************************************


        //***********************************************************************************
        //***********************************************************************************
        //***********************************************************************************


    } catch (errorDescription) {


        const errorMessageToWeb = document.getElementById("errorMessageWeb");
        errorMessageToWeb.textContent = `Er is iets fout gegaan`;
    }


}

// -------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//                     AANROEPEN ASYNC FUNCTION getCountryInfo                  //
// -------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
searchButton.addEventListener("click", getCountryInfo);


// Get the input field  WANNEER DE ENTER KEY GEDRUKT WORDT, IS DAT NET ALSOF JE DE SEARCH KNOP INDRUKT
const input = document.getElementById("countryNameWeb");
input.addEventListener("keyup", function (event) {
    // if (event.keyCode === 13)
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("searchButton").click();
    }
});





