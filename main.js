const searchButton = document.getElementById("searchButton")
console.log(searchButton)


async function getCountryInfo() {

    try {
        const country = "schweiz"
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
        const stringOpdracht2 = countryName + "  is situated in " + subareaName + ". It has a population of " + amountPopulation + " people."

        console.log("Opdracht 2= ", stringOpdracht2)


// opdracht 3
//Maak op basis van de response de volgende string en log dit in de console: The capital is [city]

        const capital = response.data[0].capital;
        console.log("Opdracht 3: The capital is", capital)


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

        const numberOfLanguages =response.data[0].languages.length

        let stringOfLanguages = "They speak: " + response.data[0].languages[0].nativeName

        for (let i = 1; i < numberOfLanguages-1; i++) {

            // console.log(response.data[0].languages[i].nativeName)

            if (numberOfLanguages-i>0){
                stringOfLanguages = stringOfLanguages+", " + response.data[0].languages[i].nativeName
            }


        }
        if (numberOfLanguages>1){

            stringOfLanguages = stringOfLanguages + " and " +response.data[0].languages[numberOfLanguages-1].nativeName
        }

        console.log(stringOfLanguages)

    } catch (errorDescription) {

        console.log("error", errorDescription.message)
        console.log("error response", errorDescription.response)
        const message = "Er is iets fout gegaan"
        const errorElement = document.createElement("h1")
        errorElement.textContent = message
        const errorText = document.getElementById("errorMessage");
        errorText.appendChild(errorElement)


    }


}


searchButton.addEventListener("click", getCountryInfo);


