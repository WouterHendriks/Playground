## Algemeen
Met deze module kun je op een eenvoudige manier een "playground" maken. Dit is bedoeld om snel een "proof of concept" te kunnen maken en deze aan je publiek te laten zien, zonder dat je een wildgroei aan modules en webdesigns krijgt.

Toegevoegd worden:

- een bibliotheek-bestand (`.whlib`)
- een HTML-bestand (`.witty`)
- een ES6/ES7 bestand (`.es`)
- een SCSS bestand (`.scss`)

Deze bestanden worden toegevoegd aan deze module, met het pad:
/webhare-modules/playground/webdesigns/playground/pages/`newplayground`/

(webhare-modules is de map waarin je eigen modules staan, afhankelijk van je installatie)

## Installatie

### Module installatie
`git clone git@github.com:wouterhendriks/playground.git "$(wh getdatadir)installedmodules/playground"`

### Voeg de site "Playground" toe aan je Publisher
`wh sitemgr install Playground`

### Nieuwe "playground" toevoegen; 1e parameter is de titel voor je playground
`wh run modulescript::playground/create_playground.whscr "Vertical Scroll"`

## Werking
Uitvoeren van het script doet het volgende:

- voegt een `<prebuiltpage>` toe aan siteprl, en in Publisher een folder + prebuilt file
- maakt een `/webdesigns/playground/pages/xx/` folder aan op basis van de opgegeven titel
- kopieert daar .es, .scss, .whlib en .witty naar toe
- voegt `require('../pages/xx/xx.es');` toe aan een algemene pages.es (om 1 webpack bundle te houden)

In de Publisher heb je nu een nieuwe map met een pre-built page. In de genoemde `webdesigns/playground/pages/xx` heb je de beschikking over een library, Witty, JavaScript (ES6/7) en (S)CSS.
