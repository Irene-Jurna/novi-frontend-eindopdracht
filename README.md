# Vegan recepten webapplicatie met React

Vegetarisch koken, daar hebben de meeste mensen inmiddels wel een paar recepten voor op de plank liggen. Maar een groter bewustzijn met betrekking tot klimaat en gezondheid leidt bij een steeds meer mensen tot nieuwe eetwensen (denk aan FODMAP, lactosevrij en veganistisch). In deze webapplicatie kun je recepten zoeken die passen bij die verschillende eetwensen.

[Prerequisites](#prerequisites) | [Getting started](#getting-started) | [Tools](#tools) | [Commando's](#commando--s) | [Built with](#built-with) | [Usage examples](#usage-examples) | [Meer informatie](#meer-weten) |

![leek.png](src%2Fassets%2Fleek.png)

## Prerequisites

- Node.js (versie hoger dan 14)
- Nodemon
- Google Chrome
- Je favoriete IDE (ik gebruikte WebStorm voor dit project. Gratis opties zijn Visual Studio Code, Atom of Sublime Text)

## Getting Started

1. Clone deze repository:

`git clone LINK`

2. Navigeer naar de project directory:

`cd react-project`

3. Installeer de dependencies:

`npm install`

4. Start de development server:

`npm start`

Opent je browser niet automatisch, klik dan op de link http://localhost:3000 in de terminal om naar het project te gaan.

5. Koppel de Edamam API (zie tools)

## Tools

### Edamam API

1. Maak een gratis account aan om een persoonlijke ID en key te verkrijgen

Website [Edamam API](https://developer.edamam.com/edamam-recipe-api)

2.Vul jouw persoonlijke ID en key in de code achter de variabelen:

`edamameId` en
`edamameKey`

Deze vind je op de pagina's: home, recipe questions, en recipe search function.

## Commando's

In het project kun je verschillende codes runnen:

`npm install`
Hiermee haal je alle dependencies uit de `package.json` (node_modules) van het project binnen.

`npm start`
Start de webapplicatie op. Open http://localhost:3000 om het te zien in je browser. Wanneer je iets aanpast en opslaat worden de wijzigingen direct toegepast. Je hoeft de pagina niet handmatig te verversen.

`npm test`

## Built With

- Prettier
- NPM (?)

## Usage examples



### Meer weten


Dit project is gemaakt als eindopdracht van de leerlijn Frontend Development
bij [NOVI](https://www.novi.nl/full-stack-developer/) Hogeschool voor ICT met behulp van
de [Create React App](https://github.com/facebook/create-react-app).

```
Veel kook/code plezier!
```
