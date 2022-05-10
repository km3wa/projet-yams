# préparations
- initialiser un projet node via npm init
- installer express, babel-node, nodemon, pug, mongoose, peut-être dotenv
- pour plus tard, installer express-session
- initialiser un dépot git

# Etape 1 : lancer de dés
- instancier une variable contenant 
- écrire une fonction qui permet d'avoir un nombre aléatoire entre 1 et 6,
- écrire une fonction qui retourne un array de 5 dés
- écrire une fonction qui permet de vérifier le nombre de dés identiques et retourne un nombre de patisseries gagnées

# Etape 2 : templating w/ pug
- créer un header et footer pour l'appli entière
- créer une view index.pug qui affichent le résultat du lancer de dés, ainsi que le nombre de patisseries gagnées (deviendra les patisseries exactes gagnées plus tard)
- créer une view login.pug pour plus tard
- bootstrap ?

# Etape 3 : création base de données
- insérer les patisseries dans une collection mongodb
- créer un schema patisseries pour mongoose
- écrire des fonctions qui permettent de soustraire le nb de patisseries gagnées à un type de patisserie aléatoire

# Etape 4 : gestion utilisateurs
- utiliser express-session pour gérer la création d'utilisateur
- hashage de mot de passe ? (facultatif peut être fait plus tard si j'ai le temps)
- l'utilisateur aura un boolean "has_played" : ne pourra plus jouer s'il est affecté à true