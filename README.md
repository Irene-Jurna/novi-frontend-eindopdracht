# Vegan recepten webapplicatie met React

Vegetarisch koken, daar hebben de meeste mensen inmiddels wel een paar recepten voor op de plank liggen. Maar een groter bewustzijn met betrekking tot klimaat en gezondheid leidt bij een steeds meer mensen tot nieuwe eetwensen (denk aan FODMAP, lactosevrij en veganistisch). In deze webapplicatie kun je recepten zoeken die passen bij die verschillende eetwensen.

[Voorwaarden](#voorwaarden) | [Project opstarten](#project-opstarten) | [Tools](#tools) | [Commando's](#commando--s) | [Dependencies](#dependencies) | [Usage examples](#usage-examples) | [NOVI Hogeschool](#novi-hogeschool-voor-ict) |

![Screenshot home.png](src%2Fassets%2FScreenshot%20home.png)

## Voorwaarden

Om dit project te kunnen starten, heb je de volgende onderdelen nodig:

- Node.js / Nodemon (versie hoger dan 14)
- Google Chrome
- Je favoriete IDE (ik gebruikte WebStorm voor dit project. Gratis opties zijn Visual Studio Code, Atom of Sublime Text)

## Project opstarten

Misschien heb je nog geen ervaring binnen het frontend-landschap, of heb je nog nooit een React project gedraaid. Met dit stappenplan kun je in een mum van tijd aan de slag:

1. Clone deze repository:

`git clone LINK`

2. Navigeer naar de project directory:

`cd react-project`

3. Installeer de dependencies:

`npm install`

4. Koppel de Edamam API:

```
Zie stappenplan in tools hieronder
```

5. Start de development server:

`npm start`


Opent je browser niet automatisch, klik dan op de link http://localhost:3000 in de terminal om naar het project te gaan. Werkt het commando helemaal niet, sluit dan eerst de development server (CNTRL + C) en start opnieuw (`npm start`).

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

`npm build`
Door middel van Webpack worden al onze losse JavaScript, HTML en CSS bestanden samengevoegd tot één grote statische bundel code; dit noemen we de build. Een nieuw .env-bestand is pas onderdeel van het project wanneer er minstens één build is gedraaid, omdat deze buiten de src-map staat.

`npm test`

`npm run eject`

## Dependencies

- [axios](https://www.npmjs.com/package/axios)
- [react](https://beta.reactjs.org/)
- [react-router-dom](https://reactrouter.com/en/main)
- [web-vitals](https://github.com/GoogleChrome/web-vitals)
- prettier (development dependency)

## Usage examples



## NOVI Hogeschool voor ICT


Dit project is gemaakt als eindopdracht van de leerlijn Frontend Development
bij [NOVI](https://www.novi.nl/full-stack-developer/) Hogeschool voor ICT met behulp van
de [Create React App](https://github.com/facebook/create-react-app).

```
Veel kook/code plezier!
```
