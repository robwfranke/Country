// const createButton = document.getElementById("create-Button");
// console.log("create-Button text",createButton);
//
// createButton.addEventListener("click",()=>{
//
//     const countryInput = document.getElementById("countryName")
//     console.log("countryInput", countryInput)
// });

console.log("amjhgdc")

const searchButton = document.getElementById("searchButton")
console.log(searchButton)


async function getCountryInfo() {
    const country = "aruba"
    const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true` /*LET OP BACKTICK!!!!!!!!!!!*/
    console.log("url=",url)
    console.log("get country here", country)
    const response = await axios.get(url)
    console.log("country info??", response)


}


searchButton.addEventListener("click", getCountryInfo);