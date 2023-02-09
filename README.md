# Vegan recepten webapplicatie met React

Vegetarisch koken, daar hebben de meeste mensen inmiddels wel een paar recepten voor op de plank liggen. Maar een groter bewustzijn met betrekking tot klimaat en gezondheid leidt bij een steeds meer mensen tot nieuwe eetwensen (denk aan FODMAP, lactosevrij en veganistisch). In deze webapplicatie kun je recepten zoeken die passen bij die verschillende eetwensen.

[Voorwaarden](#voorwaarden) | [Project opstarten](#project-opstarten) | [Tools](#tools) | [Commando's](#commando--s) | [Dependencies](#dependencies) | [Voorbeelden](#hoe-kun-je-dit-project-gebruiken-twee-voorbeelden) | [NOVI Hogeschool](#novi-hogeschool-voor-ict) |

![Screenshot home.png](src%2Fassets%2FScreenshot%20home.png)

## Voorwaarden

Om dit project te kunnen starten, heb je de volgende onderdelen nodig:

- Node.js / Nodemon (versie hoger dan 14)
- Google Chrome
- Je favoriete IDE (ik gebruikte WebStorm)

## Project opstarten

Misschien heb je nog geen ervaring binnen het frontend-landschap, of heb je nog nooit een React project gedraaid. Met dit stappenplan kun je in een mum van tijd aan de slag:

1. Clone deze repository:

`git clone LINK`

2. Installeer de dependencies:

`npm install`

3. Koppel de Edamam API:

```
Zie stappenplan in tools hieronder
```

4. Start de development server:

`npm start`

Opent je browser niet automatisch, klik dan op de link http://localhost:3000 in de terminal om naar het project te gaan. Werkt het commando helemaal niet, sluit dan eerst de development server (CNTRL + C) en start opnieuw via het start commando.

Kom je er met dit stappenplan toch nog niet helemaal uit? Hier vind je de officiele documentatie ['Getting Started' van Create React App]((https://create-react-app.dev/docs/getting-started)).

## Tools

### Edamam API

1. Ga naar de website van de [Edamam API](https://developer.edamam.com/edamam-recipe-api) en maak een gratis account aan om een persoonlijke ID en key te verkrijgen.

2. Maak een eigen `.env`-bestand aan in het React-project. Zet hierin jouw persoonlijke ID en key uit stap 1 achter de variabel-namen zoals beschreven in `env.dist` (`REACT_APP_API_ID=` en `REACT_APP_API_KEY=`).

3. Run het volgende commando in de terminal:

`npm run build`

### Wachtwoord voor NOVI examinator

Omdat dit project wordt nagekeken, staan hier de ID en key uit de Edamam API voor de examinator(en):

`REACT_APP_API_ID=4e1e2f8f`
`REACT_APP_MY_API_KEY=324092c9d55a77b05f596a354fa9d42f`

### NOVI Educational Backend

Voor het registratie- en inlogproces in dit project, wordt gebruikt gemaakt van de [NOVI Educational Backend](https://github.com/hogeschoolnovi/novi-educational-backend-documentation). Deze backend is gebouwd door NOVI en mag alleen worden gebruikt voor opleidings-doeleinden.

Let op: de database met gebruikers wordt vaak binnen één uur weer geleegd. De backend draait op een Heroku server. Deze server wordt automatisch inactief wanneer er een tijdje geen requests gemaakt worden. De eerste request die de server weer uit de 'slaapstand' haalt zal daarom maximaal 30 seconden op zich kunnen laten wachten. Daarna zal de responsetijd normaal zijn. Voer daarom altijd eerst een test-request uit.

## Commando's

In het project kun je verschillende codes runnen. De meeste zijn al genoemd, maar hier vind je ze op een rij met wat extra uitleg:

`npm install`
Hiermee haal je alle dependencies uit de `package.json` (node_modules) van het project binnen.

`npm start`
Start de webapplicatie op in development mode. Open http://localhost:3000 om het te zien in je browser. Wanneer je iets aanpast en opslaat worden de wijzigingen direct toegepast. Je hoeft de pagina niet handmatig te verversen.

`npm run build`
Door middel van Webpack worden al onze losse JavaScript, HTML en CSS bestanden samengevoegd tot één grote statische bundel code; dit noemen we de build. Een nieuw .env-bestand is pas onderdeel van het project wanneer er minstens één build is gedraaid, omdat deze buiten de src-map staat.

`npm test`
Lanceert de test runner

`npm run eject`
Het wordt afgeraden dit commando te gebruiken. En let op: na gebruik van dit commando kun je het niet meer ongedaan maken. Als je niet tevreden bent met de standaard instellingen van React, kun je dit commando gebruiken om alles handmatig in te stellen.

Meer informatie? Bekijk de officiele documentatie ['Available Scripts' in React](https://create-react-app.dev/docs/available-scripts/).

## Dependencies

In de package.json vind je de volledige lijst van dependencies. Hieronder vind je enkele belangrijke dependencies in dit project en een link naar documentatie.

- [axios](https://www.npmjs.com/package/axios)
- [react](https://reactjs.org/docs/getting-started.html)
- [react-router-dom](https://reactrouter.com/en/main)
- [web-vitals](https://github.com/GoogleChrome/web-vitals)
- [prettier](https://prettier.io/) (development dependency)

## Hoe kun je dit project gebruiken? Twee voorbeelden

Waarvoor zou je deze applicatie kunnen gebruiken? Hier een aantal voorbeelden:

- Een van jouw kinderen gaat binnenkort naar de middelbare school. Jullie hebben de afspraak dat middelbare scholieren minstens een dag per week thuis koken. Maar de zoon of dochter in kwestie heeft veel allergieen en kan niet goed bedenken wat ze wel en niet kan koken. Pas het get-request in de Recipe Search Function zo aan dat alleen recepten worden getoond die jouw kind mag hebben (tip: haal de alcohol recepten uit het get-request).
- Steeds meer van jouw vrienden en kennissen hebben specifieke dieetwensen. Personaliseer de RecipeQuestions pagina zo dat je kunt zoeken op de dieetwensen van jouw vrienden. Maak bijvoorbeeld een zin: "Ik eet vanavond met..." + een inputveld per vriend. Koppel de namen van jouw vrienden aan de juiste health labels in de API, zodat je per vriend alleen receptsuggesties krijgt die hij/zij wil eten (tip: niet-veganistische recepten worden nu niet meegenomen, maar zijn wel beschikbaar in de Edamam API).

## NOVI Hogeschool voor ICT


Dit project is gemaakt als eindopdracht van de leerlijn Frontend Development
bij [NOVI](https://www.novi.nl/full-stack-developer/) Hogeschool voor ICT met behulp van
de [Create React App](https://create-react-app.dev/docs/documentation-intro).

```
Veel kook/code plezier!
```
