Stappenplan Data Fetching met AXIOS en doorzetten naar WEB page Loading/Error/Succes


1 JS & HTML &CSS files maken

2 Javascript script file linken             
<body>
<script src="index.js"> </script>
</body>

3 NPM init                                  npm init (krijg je package.json)

4 git init                                  git init

5 .gitignore maken                          inhoud:  node_modules
5a. add .  ,commit                      of via webstorm


6 Axios installeren                         npm install axios

7 Axios script linken
<body>
<script src="./node_modules/axios/dist/axios.min.js"></script>
<script src="index.js"></script>
</body>



8. Async functie maken en aanroepen

9. Request maken met axios                  axios.get(url)


10. "Await" de PROMISE data en error afhandeling

11 De response checken

12  loop over de array

13 voor elke string (imageUrl)

14 element aanmaken en source `<img src = "URL hier"`  "https://dog.ceo/api/breed/schnauzer/images"

15 alt toevoegen (wanneer geen plaatje bestaat)

16 list element in de html maken met een id

17 list selecteren

18 appenden  => list.appen(img)

Nu ERROR afhandeling

20 try/catch toevoegen

21 veroorzaken error +> check error

22 maak een error message (string)

23 Element maken

24 text.content setten naar de error message

25 galery selecteren

26 appenden aan de gallery

SPINNER MAKEN


27 Spinner hebben (gif?)

28 begin/eind bepalen

29 Spinner toevoegen

30 loading spinner in CSS laten zien: display block

31 class toevoegen aan de spinner getElement
32 succes/error spinner weghalen




Dit moet erin komen::::
Fetch dogs           show images

show loading         zodat users niet wegklikken

show error


url: "https://dog.ceo/api/breed/schnauzer/images"














