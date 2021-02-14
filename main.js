// const axios = require("axios");
const searchButton = document.getElementById("searchButton")
// console.log(searchButton) checking of het bestaat
//
// const flagOfCountryWeb = ""


async function getCountryInfo() {

    //------------------------------------------------------------------
    // resetten variabelen/messages
    //------------------------------------------------------------------

    //resetten errormessage
    const errorMessageToWeb = document.getElementById("errorMessageWeb")
    errorMessageToWeb.textContent = ``


    // resetten flag en country
    const flagOfCountryWeb = document.getElementById("flag")
    flagOfCountryWeb.removeAttribute("src")
    flagOfCountryWeb.removeAttribute("alt")
    const flagCountryToWeb = document.getElementById("flagCountry")
    flagCountryToWeb.textContent = ``

    // resetten text

    const countryNameStringtoWeb = document.getElementById("countryNameStringWeb")
    countryNameStringtoWeb.textContent = ``

    const capitalStringToWeb = document.getElementById("capitalStringWeb")

    capitalStringToWeb.textContent = ``

    const stringOfLanguagesToWeb = document.getElementById("stringOfLanguagesWeb")
    stringOfLanguagesToWeb.textContent = ``
    //------------------------------------------------------------------



    //---------------ophalen landnaam-------------

    const country = document.getElementById("countryNameWeb").value
    // ---------------------------------------------------

    try {
        // const country = "schweiz"
        const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true` /*LET OP BACKTICK!!!!!!!!!!!*/
        // console.log("url=", url)
        // console.log("get country here", country)
        const response = await axios.get(url)
        console.log("country info??", response)


// opdracht 2, maak string  [country-naam]
// is situated in [subarea-name]. It has a population of [amount] people.

        console.log(response.data[0].name)/*array, met 1 object erin, deze bevat bijv name*/
        console.log(response.data[0].subregion)/*array, met 1 object erin, deze bevat bijv subregion*/
        console.log(response.data[0].population)/*array, met 1 object erin, deze bevat bijv subregion*/
        const countryName = response.data[0].name;
        const subareaName = response.data[0].subregion;
        const amountPopulation = response.data[0].population
        const countryNameString = countryName + "  is situated in " + subareaName + ". It has a population of " + amountPopulation + " people."

        console.log("Opdracht 2= ", countryNameString)


// opdracht 3
//Maak op basis van de response de volgende string en log dit in de console: The capital is [city]

        let capitalString = "The capital is " + response.data[0].capital;

        console.log("Opdracht 3:", capitalString)


        //Opdracht 4

        // Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt. In een land kunnen één of twee currencies gebruikt worden:
        //
        //     1 valuta: and you can pay with [currency]'s
        // 2 valuta's: and you can pay with [currency]'s and [currency]'s

        const responseArrayLength = response.data[0].currencies.length
        console.log("aantal currencies", responseArrayLength)


        // const CurrencyArray = response.data[0].currencies[2].name
        let listOfCurrencies = ""

        for (let i = 0; i < response.data[0].currencies.length; i++) {

            if (response.data[0].currencies[i].name != null) {
                // console.log(response.data[0].currencies[i].name)
                listOfCurrencies = listOfCurrencies + response.data[0].currencies[i].name + ","
                // console.log(listOfCurrencies)
            }


        }
        listOfCurrencies = listOfCurrencies.slice(0, -1)/* verwijder laatste komma*/

        console.log("Opdracht 4: lijst met valuta: ", listOfCurrencies)


        //  Opdracht 5:
// duitsland werkt niet, germany wel, Aruba, nederland, zimbabwe werken alle.


        // Bonusopdracht: Maak een functie die ongeacht het aantal talen die in een land gesproken worden, een string maakt:
        //
        // 1 taal: They speak [language]
        // 2 talen: They speak [language] and [language]
        // 3 talen: They speak [language], [language] and [language]
        // etc.

        const numberOfLanguages = response.data[0].languages.length

        let stringOfLanguages = "They speak " + response.data[0].languages[0].name

        for (let i = 1; i < numberOfLanguages - 1; i++) {


            if (numberOfLanguages - i > 0) {
                stringOfLanguages = stringOfLanguages + ", " + response.data[0].languages[i].name
            }


        }
        if (numberOfLanguages > 1) {

            stringOfLanguages = stringOfLanguages + " and " + response.data[0].languages[numberOfLanguages - 1].nativeName
        }

        console.log(stringOfLanguages)


        //---------------------------------------------------------------
        //--------------- hier goede vlag in webpage zetten--------------
        const flagOfCountryWeb = document.getElementById("flag")
        const flagOfCountry = response.data[0].flag
        console.log("flagOfCountry", flagOfCountry)
        flagOfCountryWeb.setAttribute("src", flagOfCountry)
        flagOfCountryWeb.setAttribute("alt", "flag")
        const flagCountryToWeb = document.getElementById("flagCountry")
        flagCountryToWeb.textContent = `${country}`
        //---------------------------------------------------------------


        const countryNameStringtoWeb = document.getElementById("countryNameStringWeb")
        countryNameStringtoWeb.textContent = `${countryNameString}`

        const capitalStringToWeb = document.getElementById("capitalStringWeb")
        capitalString = capitalString + " and you can pay with " + listOfCurrencies + "'s"
        capitalStringToWeb.textContent = `${capitalString}`

        const stringOfLanguagesToWeb = document.getElementById("stringOfLanguagesWeb")
        stringOfLanguagesToWeb.textContent = `${stringOfLanguages}`


    } catch (errorDescription) {


        const errorMessageToWeb = document.getElementById("errorMessageWeb")
        errorMessageToWeb.textContent = `Er is iets fout gegaan`

        // console.log("error", errorDescription.message)
        // console.log("error response", errorDescription.response)
        // const messageError = "Er is iets fout gegaan"
        // const errorElement = document.createElement("h1")
        // errorElement.textContent = messageError
        // const errorText = document.getElementById("errorMessage");
        // errorText.appendChild(errorElement)


    }


}

// -------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//                     AANROEPEN ASYNC FUNCTION getCountryInfo                  //
// -------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
searchButton.addEventListener("click", getCountryInfo);
// searchButton.addEventListener("click", testFunction); je kunt meerder async functions
//op dezelfde searchbutton zetten
//
// function testFunction() {
//
//     console.log("testFunction")
//
//     const textje = document.getElementById("countryNameWeb").value
//     console.log("textje ", textje)
// }


// Get the input field  WANNEER DE ENTER KEY GEDRUKT WORDT, IS DAT NET ALSOF JE DE SEARCH KNOP INDRUKT
const input = document.getElementById("countryNameWeb");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("searchButton").click();
    }
});