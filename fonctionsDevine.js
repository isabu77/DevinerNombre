
function aleatoire(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// saisie d'un nombre 
function saisieNombre(question) {
	var nombre = prompt(question);
	while (!Number(nombre) || nombre < 1 || nombre > 100)
	{
		// reponse Annuler
		if (nombre === null)
			return(null);

		nombre = prompt("J'ai demandé un NOMBRE entre 1 et 100");
	}
	return(parseInt(nombre));
}

// fonction prncipale
function actionDevine(nbEssais) {
	var nbEssai = nbEssais;
	var solution = aleatoire(1,100);
	var reponse = true;
	console.log(solution);

	while (reponse === true)
	{

		var nombre = saisieNombre("Saisis un nombre entre 1 et 100");
		if (nombre === 0)
			return;
		while (nbEssai-- > 0 )
		{
			if (parseInt(nombre) > solution)
			{
				nombre = saisieNombre("c'est MOINS. Essaye encore !");
			}
			else
			{
				if (parseInt(nombre) < solution)
				{
					nombre = saisieNombre("c'est PLUS. Essaye encore !");
				}
			}
			// reponse Annuler ?
			if (nombre === null)
				return;

			if (parseInt(nombre) === solution){
				alert("BRAVO ! tu as trouvé !");
				return;
			}
		}
		reponse = confirm("C'est PERDU ! \nLes " + (nbEssais+1) + " essais sont écoulés.\nLa solution était " + solution + ".\nVeux-tu recommencer le jeu ?");
		// reponse Annuler
		if (reponse === false)
			return(0);
	}

	return;
}

