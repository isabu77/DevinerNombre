
function aleatoire(min, max) {
	// Génère un nombre aléatoire compris entre 1 et 100
    return Math.floor(Math.random() * (max - min)) + min;
}

// saisie d'un nombre 
function saisieNombre(question) {
	var nombre = prompt(question);

	//Tant que le nombre n'est pas un nombre
	// Ou le nombre est supérieur à 100
	// Ou nombre est inferieur à 1
	while (!Number(nombre) || nombre > 100 || nombre < 1)
	{
		// reponse Annuler
		// Si nombre strictement égal à null
		if (nombre === null)
			//On quitte la fonction !
			return null;

		nombre = prompt("J'ai demandé un NOMBRE entre 1 et 100");
	}
	return(parseInt(nombre));
}

// fonction principale
function actionDevine(nbEssaisDepart) {
	var nbEssai = nbEssaisDepart;
	var solution = aleatoire(1,100);
	var reponse = true; //La reponse est initialisée à true
	console.log(solution);

	while (reponse === true)
	{

		var nombre = saisieNombre("Saisis un nombre entre 1 et 100");

		//Si nombre egal 0
		if (nombre === 0)
			return; // On quitte la fonction

		while (nbEssai > 0 )
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
			// Si nombre est null
			if (nombre === null)
				return; //On quitte la fonction

			if (parseInt(nombre) === solution){
				alert("BRAVO ! tu as trouvé !");
				return;
			}
			nbEssai-= 1;
		}
		//  https://developer.mozilla.org/fr/docs/Web/API/Window/confirm
		
		reponse = confirm("C'est PERDU ! \nLes " + (nbEssaisDepart+1) + " essais sont écoulés.\nLa solution était " + solution + ".\nVeux-tu recommencer le jeu ?");
		// reponse Annuler
		if (reponse === false)
			return(0);
	}

	return;
}

