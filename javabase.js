
class Question {
    constructor(txt, img, rep, repA,repB,repC = null,repD =null) {
        this.texte = txt;
        this.image = img;
        this.reponse = rep;
        this.txtA = repA;
        this.txtB = repB;
        this.txtC = repC;
        this.txtD = repD;
    }

    afficher(){
        cache();
        
        titre.innerText = this.texte;
        this.image.hidden = false;

        titre.classList.remove("anime-entree");
        void titre.offsetWidth;
        titre.classList.add("anime-entree");
    
        this.image.classList.add("anime-entree");

        Abouton.hidden = false;
        Abouton.innerText = this.txtA;
        Abouton.onclick = () => this.verifier("A");

        Bbouton.hidden = false;
        Bbouton.innerText = this.txtB;
        Bbouton.onclick = () => this.verifier("B");

        if (this.txtC !== null) {
            Cbouton.hidden = false;
            Cbouton.innerText = this.txtC;
            Cbouton.onclick = () => this.verifier("C");
        }

        if (this.txtD !== null) {
            Dbouton.hidden = false;
            Dbouton.innerText = this.txtD;
            Dbouton.onclick = () => this.verifier("D");
        }
    }

    verifier(reponseCliquee) {
        if (reponseCliquee === this.reponse) {
            titre.innerText = "Vrai, c'est la bonne réponse !";
            titre.style.color = "green";
        } else {
            titre.innerText = "Faux...";
            titre.style.color = "red";
            titre.classList.add("anime-erreur");
            setTimeout(() => titre.classList.remove("anime-erreur"), 300);
        }
        
        
        Abouton.hidden = true;
        Bbouton.hidden = true;
        Cbouton.hidden = true;
        Dbouton.hidden = true;
        valider(); 
        }

}

const titre = document.getElementById('titre2');
const bouton = document.getElementById('monBouton');
const bouton2 = document.getElementById('monBouton2');
const suivant = document.createElement("button");
const main_titre = document.getElementById('titre');
const Abouton = document.createElement("button");
const Bbouton = document.createElement("button");
const Cbouton = document.createElement("button");
const Dbouton = document.createElement("button");
const image = document.createElement("img");
const image2 = document.createElement("img");
const image3 = document.createElement("img");
const image4 = document.createElement("img");
const image5 = document.createElement("img");
const placeholder = document.createElement("img");

let etapeActuelle = 0;

image.src = "lewis-vers.png";
image2.src = "H242.png";
image2.style.width = "700px";
image3.src = "paris.png";
image4.src = "jinx.png";
image4.style.width = "800px";
image5.src = "Gwen.png";
placeholder.src = "placeholder.png";
placeholder.style.width = "450px";

const q1 = new Question(
    "Qui a été tité champion du monde de Formule 1 en 2021 ?\n A. Verstappen \nB. Hamilton", 
    image, 
    "A", 
    "A. Verstappen", 
    "B. Hamilton",
);

const q3 = new Question(
    "La Tour Eiffel change de taille selon la température. Que se passe-t-il exactement en été ?", 
    image3, 
    "B", 
    "A. Elle s'enfonce de 2 cm", 
    "B. Elle grandit de 15 cm", 
    "C. Elle penche vers le Sud", 
    "D. Elle ne bouge pas"
);

const q4 = new Question(
    "Pour la première saison de la série Arcane, quel était le rythme de travail moyen des animateurs pour atteindre ce niveau de détail ?", 
    image4, 
    "C", 
    "A. 1 minute par jour", 
    "B. 5 secondes par jour", 
    "C. 1 image par jour", 
    "D. 24 images par jour"
);

const q5 = new Question(
    "Le record de vitesse d'une Formule 1 en course dépasse les 370 km/h.",
    placeholder,
    "B",
    "A. Faux",
    "B. Vrai"
);

const q6 = new Question(
    "Dans le film Spider-Man across the spider-verse, en quoi le style aquarelle est aussi impressionnante techniquement et artistiquement?", 
    image5, 
    "D", 
    "A. En demandant à des peintres de retoucher chaque image après le calcul", 
    "B. En filmant de vraies taches de peinture pour les coller sur les visages", 
    "C. En utilisant un filtre Instagram géant sur tout le film", 
    "D. En faisant varier les détails et les couleurs selon les émotions du personnage"
);

const q7 = new Question(
    "Combien de cœurs possède une pieuvre ?",
    placeholder,
    "B",
    "A. 1 seul",
    "B. 3 cœurs",
    "C. 5 cœurs",
    "D. Aucun"
);

const q8 = new Question(
    "Quel pilote détient le record du nombre de titres mondiaux en F1 (7 titres) avec Michael Schumacher ?",
    placeholder,
    "A",
    "A. Lewis Hamilton",
    "B. Sebastian Vettel"
);

const q9 = new Question(
    "Quelle est la langue la plus parlée au monde (langue maternelle) ?",
    placeholder,
    "A",
    "A. Le Mandarin",
    "B. L'Espagnol",
    "C. L'Anglais",
    "D. L'Arabe"
);

const q10 = new Question(
    "En quelle année a eu lieu le premier pas sur la Lune ?",
    placeholder,
    "B",
    "A. 1962",
    "B. 1969",
    "C. 1975",
    "D. 1981"
);

const q11 = new Question(
    "Le moteur d'une voiture électrique fait moins de bruit qu'un moteur thermique.",
    placeholder,
    "B",
    "A. Faux",
    "B. Vrai"
);

const q12 = new Question(
    "Quel est l'organe le plus lourd du corps humain ?",
    placeholder,
    "C",
    "A. Le Cœur",
    "B. Le Cerveau",
    "C. Le Foie",
    "D. L'Estomac"
);

const q13 = new Question(
    "Qui a peint la Joconde ?",
    placeholder,
    "B",
    "A. Claude Monet",
    "B. Léonard de Vinci",
    "C. Vincent van Gogh",
    "D. Pablo Picasso"
);
const listeQuestions = [q1, q3, q4, q5, q6, q7, q8, q9, q10, q12, q11, q13];

cache();

bouton.onclick = () => 
{
    if (titre2.innerText == "Ce texte va changer si tu clique sur le bouton")
    {
        titre.innerText = "Bravo, tu as cliqué !";
        bouton.innerText = "afficher l'ancien texte";
    }
    else
    {
        titre2.innerText = "Ce texte va changer si tu clique sur le bouton";
        bouton.innerText = "Clique ici";
        bouton2.hidden = false;
        bouton2.innerText = "passer à la suite";
    }
}

bouton2.onclick = () =>
{
    bouton.hidden = true;
    bouton2.hidden = true;

    etapeActuelle = 0;
    listeQuestions[etapeActuelle].afficher();
}

function cache() {
    Abouton.hidden = true;
    Bbouton.hidden = true;
    Cbouton.hidden = true;
    Dbouton.hidden = true;
    image.hidden = true;
    image2.hidden = true;
    image3.hidden = true;
    image4.hidden = true;
    image5.hidden = true;
    placeholder.hidden=true;
    bouton2.hidden = true;
    suivant.hidden = true;
}

function valider() {
    suivant.hidden = false;
    suivant.innerText = "suivant";
    suivant.onclick = () =>
    {
        cache();
        titre.innerText = "Chargement ...";
        titre.style.color = "black";

        etapeActuelle++;

        if (etapeActuelle < listeQuestions.length) {
            listeQuestions[etapeActuelle].afficher();
        } 
        else {
            titre.innerText = "Fin du Quiz !";
            bouton2.hidden=false;
            bouton2.innerText="recommencer";
        }

    } 
}

document.body.appendChild(image);
document.body.appendChild(image2);
document.body.appendChild(image3);
document.body.appendChild(image4);
document.body.appendChild(image5);
document.body.appendChild(placeholder);
const br = document.createElement("br");
document.body.appendChild(br);
document.body.appendChild(Abouton);
document.body.appendChild(Bbouton);
document.body.appendChild(Cbouton);
document.body.appendChild(Dbouton);
document.body.appendChild(suivant);