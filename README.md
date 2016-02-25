# test-umd

on souhaite integrer le projet 'proj4js' et 'proj4leaflet' dans un bundle 
où la lib. leaflet est en dependance externe. 
la variable 'proj4' doit être globale.

les sources sont en AMD avec requirejs.

> la commande 'gulp requirejs' construit un bundle nettoyé de tout appel à
'requirejs' dans le répertoire 'js'

> la commande 'gulp umd' construit un bundle multi plateforme dans le 
répertoire 'umd'

cf. les 3 exemples en mode browser en AMD ou UMD.


