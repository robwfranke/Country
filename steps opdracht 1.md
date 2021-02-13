Opdracht 1.

Maak een 'Zoek'-knop op de pagina en koppel deze aan een functie die de gegevens over België ophaalt en dit in de 
console logt. Tip: Als de de documentatie bekijkt en op async zoekt, vindt je ee voorbeeld van een GET-request.


## De gebruiker kan de knop zien

1. zoek knop maken (html), met id

## De gebruiker gaat klikken

1. knop selecteren (getElementById)
2. Eventlistener

## wanneer gebruiker klikt, asynchrone functie aanroepen

1. variabele maken met country => Belgie  (hardcoden)
2. url maken https://restcountries.eu/rest/v2/name/${country}?fullText=true  LET OP BACKTICKS!!!!!!!
3. axios.get url
4. await toevoegen
5. response => checken


