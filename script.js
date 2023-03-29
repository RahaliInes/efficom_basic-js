function syracuse(){
  
  //récupération de la saisie depuis le html
  let saisie = document.getElementById(elementid:"saisieNumber").value;
  let compteur = 0;

  //nous allons commencer notre itération
  while(saisie !=1){
    compteur = compteur+1; //compteur++

    //vérification si saisie est pair
    if(saisie % 2 == 0){
      saisie = saisie / 2; //saisie /=2
    }
    else{
        saisie = 3 * saisie + 1;
    }
    
  }
  console.log(compteur);
}