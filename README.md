- voegt <prebuiltpage> toe aan siteprl, en een folder + prebuilt file in publisher
- maakt een /webdesigns/playground/pages/xx/ folder aan
- kopieert daar .es, .scss, .whlib en .witty naar toe
- voegt:

require('../pages/niew2444922/niew2444922.es');

toe aan een algemene pages.es (om 1 webpack bundle te houden)

Setup:
wh sitemgr install Playground

Create new playground:
wh run modulescript::playground/create_playground.whscr "Vertical Scroll"
