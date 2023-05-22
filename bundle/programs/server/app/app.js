var require = meteorInstall({"lib":{"i18n":{"en.i18n.json":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/i18n/en.i18n.json                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"error-message":"An error occurred : ","access-denied--page-title":"Access denied !","access-denied--login-needed":"You need to login first.","access-denied--login":"Log in","admin--page-title":"Administration","admin--spaces-list":"List of spaces","admin--spaces-title":"Title","admin--spaces-creation":"Date of creation","admin--spaces-owner":"Owner","admin--spaces-actions":"Actions","admin--spaces-open":"Open","admin--spaces-delete":"Delete","admin--users-list":"List of teacher accounts","admin--users-logins":"Login","admin--users-creation":"Date of creation","admin--users-last-connexion":"Last connection","admin--users-actions":"Actions","admin--users-change-password":"Change password","admin--users-delete":"Delete","admin--user-delete-message":"Delete this user ?","admin--user-delete-confirm-message":"The user has been deleted.","admin--change-password-message":"Enter a new password for the user:","admin--change-password-confirm-message":"The password has been changed.","layout--connection-status":"Disconnected","login--page-title":"Login","login--mail":"E-mail","login--password":"Password","login--send-mail-forgot-password-link":"Reset my password","login--button-submit":"Log in","login--register":"You need an account ?","login--register-contact-admin":"Please contact your Beekee Box administrator.","login--register-link":"Create an account","login--user-not-found":"Username does not exist.","login--incorrect-password":"Password does not match.","login--send-mail-forgot-password":"An email has been sent to % s with a link to reset your password.","login--send-mail-forgot-password-error":"An error has occurred. Please contact the administrator at : vincent.widmer@beekee.ch","login--send-mail-forgot-password-error-log":"Error sending an email to recover password : %s","logout--page-title":"Sign out","not-found--page-title":"Page not found","not-found--page-description":"Sorry, we can not find a page at this address.","not-found--go-back":"Return to home","privacy--page-title":"Privacy policy","privacy--content":"<h3> Teacher Account Information </h3> <p> When you create a teacher account, you must provide a valid email address and password. These details are not public and can be modified at any time. Beekee Live will not share this information with third parties. </p> <h3> Publications, photos, users </h3> <p> Beekee Live follows a strict data protection policy. The data published on Beekee Live are hosted on servers located in Switzerland. The Beekee Live platform is therefore subject to Swiss data protection law. Publications, photographs, user names and any other data published on the platform are the exclusive property of the user. At any time, a user may choose to permanently delete his/her data. In no event will Beekee Live transmit this data to third parties. </p> <h3> Intervention of a technician </h3> <p> On request of the user, a technician can access a space and consult the data stored on it in order to solve a technical problem. </p> <h3> Cookies </h3> <p> Like many websites, Beekee Live uses cookies to facilitate the use of the platform. The information contained in these cookies is not used by Beekee Live for any other purpose. </p>","register--page-title":"Create an account","register--mail":"E-mail","register--name":"Name","register--password":"Password","register--password-confirm":"Confirm password","register--password-dont-match":"Confirm password doesn't match.","register--terms":"By registering, you accept our <a href=\"{{pathFor 'privacy'}}\" target=\"_blank\">terms and conditions</a>.<br>Your e-mail address will not be disclosed to third parties.","register--button-submit":"Sign up","register--mail-exist":"There already exists a user account with this email address.","register--mail-no-valid-message":"Please enter a valid email address.","register--mail-subject":"Your registration on Beekee Live","register--mail-content":"<h2>Welcome to <a href=\"https://live.beekee.ch\">Beekee Live</a>!</h2><h3>We’re glad you’re here. Start teaching today by creating your first Beekee Live space!</h3><p><b>Tip</b> : Did you know that you can use Beekee Live on computer, smartphone or tablet without the need of installing an app?</p><p>The <a href=\"https://www.beekee.ch\">Beekee Team</a></p>","reset-password--page-title":"Reset your password","reset-password--new-password":"New password","reset-password--button-submit":"Save","register--password-changed-message":"The password has been changed.","space-edit-categories--page-title":"Manage categories","space-edit-categories--page-description":"The categories are used to classify posts.<br />Unlike tags, categories are defined in advance by the teacher.","space-edit-categories--confirm-delete":"Delete category","space-edit--button-submit-add-category":"Add","space-edit-categories--edit-category":"Edit category","space-edit--page-title":"Settings","space-edit--subtitle-general":"General","space-edit--list-title-change-code":"Change the access code","space-edit--description-change-code":"Share this code with your students so they can join this space.","space-edit--list-title-rename-space":"Rename this space","space-edit--list-title-delete-space":"Delete this space","space-edit--list-title-content":"Content","space-edit--list-title-flow":"Continuous Flow","space-edit--description-flow":"By enabling Continuous Flow, new publications are displayed in real time.","space-edit--list-title-categories":"Manage categories","space-edit--list-title-comments":"Allow comments","space-edit--subtitle-users":"Users","space-edit--list-title-users":"Manage authors","space-edit--list-title-free-users":"Free authors","space-edit--description-free-users":"By activating \"Free authors\", users are able to enter their username when they first log in. Otherwise, they will choose from an editable list under \"Manage authors\".","space-edit--subtitle-permissions":"Permissions","space-edit--select-permissions-own":"Authors can edit their own publications","space-edit--select-permissions-all":"Authors can edit all publications","space-edit--select-permissions-none":"Nobody can add or edit publications","space-edit--subtitle-box":"Box","space-edit--list-title-update-box":"Update the Box","space-edit--list-title-ip":"IP address :","space-edit--list-title-sync":"Synchronize with the cloud","space-edit--description-sync":"Connect the beekee box using an ethernet cable to sync its content with the cloud (www.beekee.ch). This may take several minutes.","space-edit--subtitle-account":"Your account","space-edit--description-change-password":"Change your account password.","space-edit--change-code-message":"Change the access code","space-edit--change-code-confirm-message":"The access code has been changed.","space-edit--change-code-already-used-message":"This code is already assigned to another space.","space-edit--rename-space-message":"Rename this space","space-edit--rename-space-confirm-message":"This space is now called","space-edit--delete-space-message":"Permanently delete this space and its contents ?","space-edit--delete-space-confirm-message":"The space has been removed.","space-edit--sync-login-message":"To synchronize this space with the cloud, you must have an account on www.beekee.ch.\nIf this is the case, enter the username linked to your account :","space-edit--sync-error-message":"A problem has occurred. Check that the box is connected to the internet and try again.","space-edit--update-message":"Updating of the box may make the platform inaccessible for several minutes.\nDo you want to continue ?","space-edit--update-waiting-message":"The box will be updated, please wait...","space-edit--no-ip":"No IP address","space-edit--not-connected":"Not connected","space-edit--module-resources":"Distribute files to your learners","space-edit--permissions-public-space":"Allows anyone to access the contents and interact within this Space without needing an Access Code","space-edit--permissions-add-categories":"Users can add categories","space-edit--permissions-add-posts":"Users can add posts","space-edit-authors---page-title":"Manage authors","space-edit-authors---page-description":"Author names are used to identify publications.<br>For example, add the name of your students or the name of a group.","space-edit-authors---submit-button":"Add","space-edit-authors--delete-author-message":"Delete the author %s ?","space-edit-authors--edit-author-message":"Modify the author :","space-edit-authors--add-author-error-message":"There is already an author with this name.","index-student--title":"The platform to promote real-time collaboration","index-student--wrapper-text":"A private space to share photos and messages <br> with your students, colleagues or friends.","index-student--code":"Private space","index-student--code-input-placeholder":"Enter an access code","index-student--visited-title":"Recently visited :","index-student--delete-recent":"(delete)","index-student--public-spaces-title":"Public spaces","index-student--button-code-link":"Validate","index-student--space-doesnt-exist-message":"This space does not exist.\nMake sure to respect the upper and lower case.","index-student--create-your-space-1":"Have you tried","index-student--create-your-space-2":"Beekee Live","index-student--create-your-space-3":" to promote real-time collaboration with your students?","index-student--privacy":"Privacy","index-student--about-us":"About us","index-teacher--spaces-title":"Your wheels","index-teacher--no-space":"You have not created a wheel yet.","index-teacher--button-submit-space":"Create a new wheel","index-teacher--shutdown":"Shutdown","index-teacher--shutdown-message":"Do you really want to shutdown the box ?","index-teacher--shutdown-confirm":"The box will shutdown in a few seconds...","update--reboot-confirm":"The box will reboot in a few seconds...","space-page--hide-panel":"Hide","space-page--code-panel-title":"Space's access code :","space-page--code-panel-description":"Spread this code for others to join you:","space-page--pinned-title":"Pinned","space-page--post-order":"Sort","space-page--post-order-asc":"Newest first","space-page--post-order-desc":"Older first","space-page--no-post":"There are no posts to display yet.","space-submit--page-title":"Create a space","space-submit--space-name":"Name of the space","space-submit--button-submit":"Create","space-submit--button-cancel":"Cancel","space-users--page-title":"Want to change your name ?","space-users-first-connection--page-title":"What is your name ?","space-users--page-description":"It will be used to identify your contributions","space-users--input-choose-author-placeholder":"Type a name...","space-users--submit-author":"Validate","space-users--user-exist":"The user %s already exists. Connect with this name ?","space-sidebar--home":"Home","space-sidebar--live-feed":"Live feed","space-sidebar--categories":"CATEGORIES","space-sidebar--add-category":"Add","space-sidebar--authors":"AUTHORS","space-sidebar--lessons":"Lessons","space-sidebar--resources":"Resources","space-submit--create-space":"Create a new wheel","space-submit--create-space-placeholer":"Wheel name","space-sidebar--create-own-space-1":"Create your own space","space-sidebar--create-own-space-2":"for free!","space-sidebar--privacy":"Privacy","space-sidebar--about-us":"About us","header--back":"Back","header--admin-access":"Teacher Access","header--register":"Create an account","header--login":"Log in","header--exit-message":"Leave this wheel ?","menu--show-all":"Show all","menu--favorites":"My favorites","menu--files":"Files","menu--images":"Images","menu--categories":"Categories","menu--authors":"Authors","menu--tags":"Keywords","menu--code":"Access code","post-edit--submit-button":"Edit","post-item--remove-pin":"Remove pin","post-item--add-pin":"Pin on top","post-item--remove-favorites":"Remove from my favorites","post-item--add-favorites":"Add to my favorites","post-item--delete-post-confirm":"Delete the post ?","post-item--delete-comment-confirm":"Delete the comment ?","post-submit--body-placeholder":"Say something...","post-submit--tags-placeholder":"Add Keywords...","post-submit--select-category":"Select a category","post-submit--no-category":"No category","post-submit--delete-image":"Delete the image","post-submit--confirm-delete-image":"Delete the image ?\nThis action is irreversible.","post-submit--confirm-delete-file":"Delete the file ?\nThis action is irreversible.","post-submit--submit-button":"Send","user-settings--page-title":"User settings","user-settings--confirm-logout":"Are you sure you want to sign out ?","user-settings--change-password":"Change password","user-settings--logout":"Sign out","user-settings--change-password-old-message":"Current Password :","user-settings--change-password-new-message":"New Password :","user-settings--change-password-confirm-message":"Your Password has been changed.","space-header--leave":"Leave this wheel","space-header--settings":"Settings","post--edit":"Edit","post--delete":"Delete","home--title":"Home","home--space-code-message":"<strong>Bzz!</strong> Spread this code for others to join you:","home--submit-button":"Add a section","home-post--order-up":"Up","home-post--order-down":"Down","home-post-delete--title":"Delete this section","home-post-delete--confirm":"Delete this section ?","home-post-edit--title":"Edit section","home-post-submit--title":"Add a section","home-post-submit--placeholder":"Title of the section","home-post-submit--confirm-toast":"The new section has been added.","modal--close":"Close","modal--cancel":"Cancel","modal--delete":"Delete","modal--submit":"Submit","modal--save":"Save changes","lessons--title":"Lessons","lessons--subtitle":"Articulate Storyline materials","lessons--submit-button":"Add a lesson","lessons-post--start-lesson":"Start this lesson","lessons-post-submit--title":"Add a lesson","lessons-post-submit--title-placeholder":"Title of the lesson","lessons-post-submit--description-placeholder":"Description of the lesson","lessons-post-submit--help":"Lessons must be exported in HTML5 format within Storyline.<br>The resulting folder must be zipped before being uploaded, and the .zip file must have the same name as the zipped folder it contains.","lessons-post-submit--confirm-toast":"The new lesson has been added.","lessons-post-delete--confirm":"Do you want to delete this lesson ?","lessons-post-delete--title":"Delete this lesson","lessons-post-edit--title":"Edit lesson","lessons-upload--button":"Upload a Storyline lesson","resources--title":"Resources","resources-post-edit--title":"Edit resource","resources-post-submit--title":"Add a resource","resources-post-submit--title-placeholder":"Title of the resource","resources-post-submit--description-placeholder":"Description of the ressource","resources-post-submit--confirm-toast":"The new resource has been added.","resources--submit-button":"Add a resource","resources-category-edit--title":"Edit a category","resources-category-submit--title":"Add a category","resources-category-submit--placeholder":"Category name","live-feed--notification-panel":"new messages","live-feed--load-more":"Load more...","live-feed-category-edit--title":"Edit a category","live-feed-category-submit--title":"Add a category","live-feed-category-submit--placeholder":"Category name","live-feed-post-delete--delete-confirm":"Do you want to delete this post ?","live-feed-post-delete--title":"Delete this post","live-feed-post--add-comment":"Add a comment...","live-feed-post--nb-likes-with-me":"You and %s people","live-feed-post--like":"You like","live-feed-post--nb-likes":"people","live-feed-post-submit--add-category":"+ Add a category...","live-feed-post-edit--title":"Edit post","live-feed-delete-comment--title":"Delete comment","live-feed-delete-comment--subtitle":"Delete this comment?","wheel--click-to-spin":"Click to spin!","wheel--welcome-message-title":"Welcome to your new Wheel!","wheel--welcome-message-body":"Start by adding students.","wheel--add-students":"Add new students","wheel-settings--add-student":"Add a student","wheel-settings--students-list":"Students","wheel-settings--show-all":"Show All","wheel-settings--hide-all":"Hide All","wheel--students":"Student(s)","wheel--hidden":"hidden","wheel--show":"show","wheel--hide-student":"Hide this student","admin--users-edit":"Edit","admin--user-edit-message":"Edit the name :"};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fr-FR.i18n.json":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/i18n/fr-FR.i18n.json                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["fr-FR"] = ["fr-FR","fr-FR"];
if(_.isUndefined(TAPi18n.translations["fr-FR"])) {
  TAPi18n.translations["fr-FR"] = {};
}

if(_.isUndefined(TAPi18n.translations["fr-FR"][namespace])) {
  TAPi18n.translations["fr-FR"][namespace] = {};
}

_.extend(TAPi18n.translations["fr-FR"][namespace], {"error-message":"Une erreur est survenue : ","access-denied--page-title":"Accès refusé !","access-denied--login-needed":"Vous devez d'abord vous connecter","access-denied--login":"Se connecter","admin--page-title":"Administration","admin--spaces-list":"Liste des espaces","admin--spaces-title":"Titre","admin--spaces-creation":"Date de création","admin--spaces-owner":"Propriétaire","admin--spaces-actions":"Actions","admin--spaces-open":"Ouvrir","admin--spaces-delete":"Supprimer","admin--users-list":"Liste des comptes enseignants","admin--users-logins":"Identifiant","admin--users-creation":"Date de création","admin--users-last-connexion":"Dernière connexion","admin--users-actions":"Actions","admin--users-change-password":"Changer le mot de passe","admin--users-delete":"Supprimer","admin--user-delete-message":"Supprimer cet utilisateur ?","admin--user-delete-confirm-message":"L'utilisateur a été supprimé","admin--change-password-message":"Entrez un nouveau mot de passe pour l'utilisateur :","admin--change-password-confirm-message":"Le mot de passe a bien été changé.","layout--connection-status":"Déconnecté","login--page-title":"Accès enseignant","login--mail":"E-mail","login--password":"Mot de passe","login--send-mail-forgot-password-link":"Réinitialiser mon mot de passe","login--button-submit":"S'identifier","login--register":"Vous n'avez pas encore de compte ?","login--register-contact-admin":"Contactez l'administrateur de la Beekee Box.","login--register-link":"Créez un compte","login--user-not-found":"L'utilisateur n'existe pas.","login--incorrect-password":"Le mot de passe n'est pas correct.","login--send-mail-forgot-password":"Un e-mail a été envoyé à l'adresse %s comprenant un lien pour réinitialiser votre mot de passe.","login--send-mail-forgot-password-error":"Une erreur est survenue. Merci de contacter l'administrateur à l'adresse : vincent.widmer@beekee.ch","login--send-mail-forgot-password-error-log":"Erreur lors de l'envoi d'un e-mail pour récupérer un mot de passe : %s","logout--page-title":"Se déconnecter","not-found--page-title":"Page introuvable","not-found--page-description":"Désolé, nous ne pouvons pas trouver une page à cette adresse.","not-found--go-back":"Revenir à l'accueil","privacy--page-title":"Politique de confidentialité","privacy--content":"<h3>Informations sur les comptes enseignants</h3><p>Lorsque vous crééz un compte « enseignant », vous devez fournir une adresse e-mail valide ainsi qu’un mot de passe. Ces données ne sont pas publiques et peuvent être modifiées à tout moment. Beekee Live ne divulguera en aucun cas ces informations à des tiers.</p><h3>Publications, photos, utilisateurs</h3><p>Beekee Live suit une politique de protection des données stricte. Les données publiées sur Beekee Live sont hébergées sur des serveurs localisés en Suisse. La plateforme Beekee Live est donc soumise au droit suisse sur la protection des données.Les publications, photographies, noms d’utilisateurs et toutes autres données publiées sur la plateforme sont la propriété exclusive de l’utilisateur. À tout moment, il peut choisir de supprimer définitivement ces données. En aucun cas Beekee Live ne transmettra ces données à des tiers.</p><h3>Intervention d’un technicien</h3><p>Sur demande de l’utilisateur, un technicien peut accéder à un espace et consulter les données qui s’y trouvent pour résoudre un problème technique.</p><h3>Cookies</h3><p>Comme de nombreux sites internet, Beekee Live utilise des cookies pour faciliter l’utilisation de la plateforme. Les informations contenues dans ces cookies ne sont pas utilisées par Beekee Live dans un autre but.</p>","register--page-title":"Créer un compte","register--mail":"E-mail","register--name":"Nom","register--password":"Mot de passe","register--password-confirm":"Confirmez le mot de passe","register--password-dont-match":"Les mots de passe de sont pas identiques.","register--terms":"En vous enregistrant, vous acceptez notre <a href=\"{{pathFor 'privacy'}}\" target=\"_blank\">politique de confidentialité</a>.<br>Votre adresse e-mail ne sera pas transmise à des tiers.","register--button-submit":"S'enregistrer","register--mail-exist":"Un compte lié à cet e-mail existe déjà.","register--mail-no-valid-message":"Merci d'entrer une adresse e-mail valide.","register--mail-subject":"Votre inscription sur Beekee Live","register--mail-content":"<h2>Bienvenue sur <a href=\"https://live.beekee.ch\">Beekee Live</a>!</h1><h3>Nous sommes fiers de vous compter parmi nous. Commencez dès aujourd'hui à enseigner en créant votre premier espace Beekee Live !</h3><p><b>Astuce</b> : Savez-vous que vous pouvez utiliser Beekee Live sur ordinateur, smartphone ou tablette sans avoir besoin d'installer une app ?</p><p>L'<a href=\"https://www.beekee.ch\">équipe Beekee</a></p>","reset-password--page-title":"Réinitialiser votre mot de passe","reset-password--new-password":"Nouveau mot de passe","reset-password--button-submit":"Enregistrer","register--password-changed-message":"Le mot de passe a été changé.","space-edit-categories--page-title":"Gérer les catégories","space-edit-categories--page-description":"Les catégories servent à classer les publications.<br />À la différence des tags, les catégories sont définies à l'avance par l'enseignant.","space-edit-categories--confirm-delete":"Supprimer la catégorie","space-edit--button-submit-add-category":"Ajouter","space-edit-categories--edit-category":"Modifier la catégorie","space-edit--page-title":"Paramètres","space-edit--subtitle-general":"Général","space-edit--list-title-change-code":"Changer le code d'accès","space-edit--description-change-code":"Transmettez le code d'accès à vos élèves pour qu'ils  rejoignent cet espace.","space-edit--list-title-rename-space":"Renommer cet espace","space-edit--list-title-delete-space":"Supprimer cet espace","space-edit--list-title-content":"Contenu","space-edit--list-title-flow":"Flux continu","space-edit--description-flow":"En activant le flux continu, les nouvelles publications s'affichent en temps réel.","space-edit--list-title-categories":"Gérer les catégories","space-edit--list-title-comments":"Autoriser les commentaires","space-edit--subtitle-users":"Utilisateurs","space-edit--list-title-users":"Gérer les auteurs","space-edit--list-title-free-users":"Auteurs libres","space-edit--description-free-users":"En activant \"Auteurs libres\", les utilisateurs entrent eux-même leur nom d'utilisateur à la première connexion. Autrement, ils choisiront parmis une liste modifiable sous \"Gérer les auteurs\".","space-edit--subtitle-permissions":"Permissions","space-edit--select-permissions-own":"Les auteurs peuvent modifier leurs propres publications","space-edit--select-permissions-all":"Les auteurs peuvent modifier toutes les publications","space-edit--select-permissions-none":"Personne ne peut ajouter ou modifier des publications","space-edit--subtitle-box":"Box","space-edit--list-title-update-box":"Mettre à jour la box","space-edit--list-title-ip":"Adresse IP :","space-edit--list-title-sync":"Syncroniser avec le cloud","space-edit--description-sync":"Branchez la beekee box à l'aide d'un câble ethernet pour syncroniser son contenu avec le cloud (www.beekee.ch). Cela peut prendre plusieurs minutes.","space-edit--subtitle-account":"Votre compte","space-edit--description-change-password":"Modifier le mot de passe de votre compte.","space-edit--change-code-message":"Changer le code d'accès","space-edit--change-code-confirm-message":"Le code d'accès a été changé.","space-edit--change-code-already-used-message":"Ce code est déjà attribué à un autre espace.","space-edit--rename-space-message":"Renommer cet espace","space-edit--rename-space-confirm-message":"Cet espace s'appelle désormais","space-edit--delete-space-message":"Effacer définitivement cet espace et son contenu ?","space-edit--delete-space-confirm-message":"L'espace a bien été supprimé.","space-edit--sync-login-message":"Pour synchroniser cet espace avec le cloud, vous devez posséder un compte sur www.beekee.ch.\nSi c'est le cas, entrez le nom d'utilisateur de votre compte :","space-edit--sync-error-message":"Un problème est survenu. Vérifiez que la box est bien connectée à internet et recommencez.","space-edit--update-message":"La mise à jour de la box peut rendre la plateforme inaccessible pendant plusieurs minutes.\nVoulez-vous continuer ?","space-edit--update-waiting-message":"La box va être mise à jour, merci de patienter...","space-edit--no-ip":"Pas d'adresse IP","space-edit--not-connected":"Non connecté","space-edit--module-resources":"Mettre à disposition des fichiers pour vos étudiants","space-edit--public-space":"Permet à n'importe qui de se connecter à cet espace sans nécessiter de code d'accès","space-edit--permissions-add-categories":"Les utilisateurs peuvent ajouter des catégories","space-edit--permissions-add-posts":"Les utilisateurs peuvent ajouter des posts","space-edit-authors---page-title":"Gérer les auteurs","space-edit-authors---page-description":"Les auteurs servent à identifier les publications.<br>Ajoutez par exemple le nom de vos élèves ou le nom d'un groupe.","space-edit-authors---submit-button":"Ajouter","space-edit-authors--delete-author-message":"Supprimer l'auteur %s ?","space-edit-authors--edit-author-message":"Modifier l'auteur :","space-edit-authors--add-author-error-message":"Il y a déjà un auteur avec ce nom.","index-student--title":"La plateforme pour soutenir la collaboration en temps réel","index-student--wrapper-text":"Un espace privé pour partager photos et messages<br>avec vos étudiants, collègues ou amis.","index-student--code":"Espace privé","index-student--code-input-placeholder":"Entrez un code d'accès","index-student--visited-title":"Récemment visité :","index-student--delete-recent":"(effacer)","index-student--public-spaces-title":"Espaces publics","index-student--button-code-link":"Valider","index-student--space-doesnt-exist-message":"Cet espace n'existe pas.\nAssurez-vous de respecter les majuscules et les minuscules.","index-student--create-your-space-1":"Avez-vous essayé","index-student--create-your-space-2":"Beekee Live","index-student--create-your-space-3":" pour promouvoir la collaboration en temps réel avec vos élèves ?","index-student--privacy":"Confidentialité","index-student--about-us":"À propos de nous","index-teacher--spaces-title":"Vos roues","index-teacher--no-space":"Vous n'avez pas encore créé de roue.","index-teacher--button-submit-space":"Créer une nouvelle roue","index-teacher--shutdown":"Éteindre","index-teacher--shutdown-message":"Voulez-vous vraiment éteindre la box ?","index-teacher--shutdown-confirm":"La box va s'éteindre dans quelques secondes...","update--reboot-confirm":"La box va redémarrer dans quelques secondes...","space-page--hide-panel":"Cacher","space-page--code-panel-title":"Code d'accès de l'espace :","space-page--code-panel-description":"Transmettez ce code pour que d'autres vous rejoignent:","space-page--pinned-title":"Épinglés","space-page--post-order":"Tri","space-page--post-order-asc":"Plus récents d'abord","space-page--post-order-desc":"Plus anciens d'abord","space-page--no-post":"Il n'y pas encore de publication à afficher.","space-submit--page-title":"Créer un espace","space-submit--space-name":"Nom de l'espace","space-submit--button-submit":"Créer","space-submit--button-cancel":"Annuler","space-users-first-connection--page-title":"Quel est votre nom ?","space-users--page-title":"Vous voulez changer de nom d'utilisateur ?","space-users--page-description":"Il sera utilisé pour identifier vos contributions","space-users--input-choose-author-placeholder":"Entrez un nom...","space-users--submit-author":"Valider","space-users--user-exist":"L'utilisateur %s existe déjà. Se connecter avec ce nom ?","space-sidebar--home":"Accueil","space-sidebar--live-feed":"Direct","space-sidebar--categories":"CATEGORIES","space-sidebar--add-category":"Ajouter","space-sidebar--authors":"AUTEURS","space-sidebar--lessons":"Leçons","space-sidebar--resources":"Ressources","space-sidebar--create-own-space-1":"Créé votre propre espace","space-sidebar--create-own-space-2":"gratuitement !","space-sidebar--privacy":"Confidentialité","space-sidebar--about-us":"À propos de nous","space-submit--create-space":"Créer une nouvelle roue","space-submit--create-space-placeholer":"Nom de la roue","header--back":"Retour","header--admin-access":"Accès enseignant","header--register":"Créer un comte","header--login":"S'identifier","header--exit-message":"Quitter cette roue ?","menu--show-all":"Tout afficher","menu--favorites":"Mes favoris","menu--files":"Fichiers","menu--images":"Images","menu--categories":"Catégories","menu--authors":"Auteurs","menu--tags":"Mots-clés","menu--code":"Code d'accès","post-edit--submit-button":"Modifier","post-item--remove-pin":"Retirer l'épingle","post-item--add-pin":"Épingler en haut","post-item--remove-favorites":"Retirer de mes favoris","post-item--add-favorites":"Ajouter à mes favoris","post-item--delete-post-confirm":"Effacer la publication ?","post-item--delete-comment-confirm":"Effacer le commentaire ?","post-submit--body-placeholder":"Dites quelque chose...","post-submit--tags-placeholder":"Ajoutez des mots-clés...","post-submit--select-category":"Sélectionnez une catégorie","post-submit--no-category":"Aucune catégorie","post-submit--delete-image":"Supprimer l'image","post-submit--confirm-delete-image":"Effacer l'image ?\nCette action est irréversible.","post-submit--confirm-delete-file":"Effacer le fichier ?\nCette action est irréversible.","post-submit--submit-button":"Envoyer","user-settings--page-title":"Paramètres de l'utilisateur","user-settings--confirm-logout":"Voulez-vous vraiment vous déconnecter ?","user-settings--change-password":"Changer mot de passe","user-settings--logout":"Se déconnecter","user-settings--change-password-old-message":"Mot de passe actuel :","user-settings--change-password-new-message":"Nouveau mot de passe :","user-settings--change-password-confirm-message":"Votre mot de passe a été changé.","space-header--leave":"Quitter cette roue","space-header--settings":"Paramètres","post--edit":"Éditer","post--delete":"Supprimer","home--title":"Accueil","home--space-code-message":"<strong>Bzz!</strong> Partagez ce code pour que d'autres se joignent à vous:","home--submit-button":"Ajouter une section","home-post--order-up":"Monter","home-post--order-down":"Descendre","home-post-delete--title":"Supprimer cette section","home-post-delete--confirm":"Supprimer cette section ?","modal--close":"Fermer","modal--cancel":"Annuler","modal--delete":"Supprimer","modal--save":"Sauver les changements","modal--submit":"Soumettre","home-post-edit--title":"Modifier la section","home-post-submit--title":"Ajouter une section","home-post-submit--placeholder":"Titre de la section","home-post-submit--confirm-toast":"La section a été ajoutée.","lessons--title":"Leçons","lessons--subtitle":"E-learning Articulate Storyline","lessons--submit-button":"Ajouter une leçon","lessons-post--start-lesson":"Lancer cette leçon","lessons-post-submit--title":"Ajouter une leçon","lessons-post-submit--title-placeholder":"Titre de la leçon","lessons-post-submit--description-placeholder":"Description de la leçon","lessons-post-submit--help":"Les leçons doivent être exportées au format HTML5 à partir du logiciel Storyline.<br>Le dossier résultant doit être zippé avant d'être uploadé, et le .zip doit avoir le même nom que le dossier qu'il contient.","lessons-post-submit--confirm-toast":"La leçon a été ajoutée.","lessons-post-delete--confirm":"Voulez-vous supprimer cette leçon ?","lessons-post-delete--title":"Supprimer cette leçon","lessons-post-edit--title":"Editer une leçon","lessons-upload--button":"Uploader une leçon Storyline","resources--title":"Ressources","resources-post-edit--title":"Editer une resource","resources-post-submit--title":"Ajouter une ressource","resources-post-submit--title-placeholder":"Titre de la ressource","resources-post-submit--description-placeholder":"Description de la ressource","resources-post-submit--confirm-toast":"La ressource a été ajoutée.","resources--submit-button":"Ajouter une ressource","resources-category-edit--title":"Éditer une catégorie","resources-category-submit--title":"Ajouter une catégorie","resources-category-submit--placeholder":"Nom de la catégorie","live-feed--notification-panel":"nouveau(x) message(s)","live-feed--load-more":"Charger plus...","live-feed-category-edit--title":"Éditer une catégorie","live-feed-category-submit--title":"Ajouter une catégorie","live-feed-category-submit--placeholder":"Nom de la catégorie","live-feed-post-delete--delete-confirm":"Voulez-vous supprimer ce post ?","live-feed-post-delete--title":"Supprimer ce post","live-feed-post--add-comment":"Ajoutez un commentaire...","live-feed-post--nb-likes-with-me":"Vous et %s personne(s)","live-feed-post--like":"Vous aimez","live-feed-post--nb-likes":"personne(s)","live-feed-post-submit--add-category":"+ Ajouter une catégorie...","live-feed-post-edit--title":"Éditer un post","live-feed-delete-comment--title":"Supprimer un commentaire","live-feed-delete-comment--subtitle":"Supprimer ce commentaire ?","wheel--click-to-spin":"Cliquer pour tourner !","wheel--welcome-message-title":"Bienvenue sur votre nouvelle roue !","wheel--welcome-message-body":"Commencez par ajouter des élèves.","wheel--add-students":"Ajouter des élèves","wheel-settings--add-student":"Ajouter un élève","wheel-settings--students-list":"Élèves","wheel-settings--show-all":"Afficher tous","wheel-settings--hide-all":"Masquer tous","wheel--students":"élève(s)","wheel--hidden":"masqué(s)","wheel--show":"afficher","wheel--hide-student":"Masquer cet étudiant","admin--users-edit":"Éditer","admin--user-edit-message":"Modifiez le nom :"});
TAPi18n._registerServerTranslator("fr-FR", namespace);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"app_loader.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/app_loader.js                                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (Meteor.isServer) {
  Inject.rawHead("metaLoader", '<meta name="viewport" content="initial-scale=1.0, user-scalable=0, width=device-width, height=device-height"/><meta name="apple-mobile-web-app-capable" content="yes">	<meta name="mobile-web-app-capable" content="yes">');
  Inject.rawBody("htmlLoader", Assets.getText('app_loader.html'));
}

if (Meteor.isClient) {
  Meteor.startup(function () {
    setTimeout(function () {
      $("#inject-loader-wrapper").fadeOut(500, function () {
        $(this).remove();
      });
    }, 700);
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"api":{"apps.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/apps.js                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Apps: () => Apps
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Apps = new Mongo.Collection('home-apps');
Apps.allow({
  insert: function () {
    return true;
  },
  update: function (userId, space) {
    return true;
  },
  remove: function (userId, space) {
    return true;
  } // insert: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },
  // update: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },
  // remove: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); }

}); // Publications

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('allApps', function appsPublication() {
    return Apps.find();
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"synchronizations.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/synchronizations.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Synchronizations: () => Synchronizations
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Synchronizations = new Mongo.Collection('home-synchronizations');
Synchronizations.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  } // insert: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },
  // update: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },
  // remove: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); }

}); // Publications

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('allSynchronizations', function synchronizationsPublication() {
    return Synchronizations.find();
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/users.js                                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);

// var usersDB	= new MongoInternals.RemoteCollectionDriver('mongodb://localhost:27017/beekee-live');
// var collection	= usersDB.open('users');
//const database = new MongoInternals.RemoteCollectionDriver('mongodb://localhost:27017/beekee-live');
//const collection = new Mongo.Collection("users", { _driver: database });
//export const Users = new Mongo.Collection("users", { _driver: database });
// Sharing the same Account collection than beekee-live
if (Meteor.isServer) {
  // check that the userId specified is admin
  isAdmin = function (userId) {
    console.log("isadmin");
    return Roles.userIsInRole(Meteor.user(), 'admin');
  }; // Publish Roles to client


  Meteor.publish(null, function () {
    if (this.userId) {
      return Meteor.roleAssignment.find({
        'user._id': this.userId
      });
    } else {
      this.ready();
    }
  });
  Meteor.publish(null, function () {
    return Meteor.roleAssignment.find();
  }); // Meteor.publish('allUsers', function () {
  // 	console.log("users: "+Meteor.users.find().count());
  //   return Meteor.users.find();
  // });
  // Server2 = DDP.connect("http://beekee.box:83");
  // Accounts.connection = Server2;
  //var database = new MongoInternals.RemoteCollectionDriver('mongodb://localhost:27017/beekee-live');
  //Meteor.users = new Mongo.Collection("users", { _driver: database });
  //export const Users = new Mongo.Collection('apps');
  // This code only runs on the server
  // Meteor.publish('allUsers', function () {
  // 	console.log("users: "+Meteor.users.find().count());
  //   return Meteor.users.find();
  // });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"fixtures.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/fixtures.js                                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Apps;
module.link("../imports/api/apps.js", {
  Apps(v) {
    Apps = v;
  }

}, 0);

// ###  Create admin user at first start  ###
if (Meteor.users.find().count() === 0) {
  // Create the admin role
  Roles.createRole('admin', {
    unlessExists: true
  });
  var adminPassword = Meteor.settings.adminPassword;
  var users = [{
    username: "admin",
    roles: ['admin']
  }];

  _.each(users, function (user) {
    var id;
    id = Accounts.createUser({
      username: user.username,
      email: "Admin",
      password: adminPassword,
      profile: {
        name: "Admin"
      }
    });

    if (user.roles.length > 0) {
      Roles.addUsersToRoles(id, user.roles);
    }
  });
}

if (Apps.find().count() === 0) {
  var defaultApps = [{
    name: "Live",
    customApp: false,
    onlyTeacher: false,
    order: 3,
    doc_user: false,
    doc_admin: false,
    last_version: "1.3.3",
    url: "http://live.beekee.box",
    icon: "beekee-live.png",
    description: "Beekee Live promote real-time interaction by allowing learners to express themselves asking questions, posting photos or sharing files.",
    installed: true,
    version: "1.4",
    hidden: false
  }, {
    name: "Resources",
    customApp: false,
    onlyTeacher: false,
    order: 7,
    doc_user: false,
    doc_admin: false,
    last_version: "1.3.3",
    url: "http://resources.beekee.box",
    icon: "beekee-resources.png",
    description: "With Beekee Resources, you can easily share files with your learners.",
    installed: true,
    version: "0.1",
    hidden: false
  }, {
    name: "Wheel",
    customApp: false,
    onlyTeacher: true,
    order: 9,
    doc_user: false,
    doc_admin: false,
    last_version: "0.7",
    url: "http://wheel.beekee.box",
    icon: "beekee-wheel.png",
    description: "Beekee Wheel is a simple random picker wheel that allow you to pick up a random name.",
    installed: true,
    version: "0.8",
    hidden: false
  }, {
    name: "Timer",
    customApp: false,
    onlyTeacher: false,
    order: 8,
    doc_user: false,
    doc_admin: false,
    last_version: "1.3.3",
    url: "http://timer.beekee.box",
    icon: "beekee-timer.png",
    description: "Beekee Timer is a simple timer that lets your learners know how much time they have left.",
    installed: true,
    version: "0.1",
    hidden: false
  }, {
    name: "Moodle",
    customApp: true,
    onlyTeacher: false,
    order: 1,
    doc_user: "moodle_teacherdoc.pdf",
    doc_admin: false,
    last_version: "xx",
    url: "http://moodle.beekee.box",
    icon: "moodle.png",
    description: "Moodle is a free, online Learning Management system enabling educators to create their own private website filled with dynamic courses that extend learning, any time, anywhere.",
    installed: true,
    version: "3.11.2",
    hidden: false
  }, {
    name: "Kolibri",
    customApp: true,
    onlyTeacher: false,
    order: 2,
    doc_user: "kolibri_userdoc.pdf",
    doc_admin: false,
    last_version: "xx",
    url: "http://kolibri.beekee.box",
    icon: "kolibri.png",
    description: "Kolibri is an open-source educational platform specially designed to provide offline access to a wide range of quality, openly licensed educational resources in low-resource contexts like rural schools, refugee camps, orphanages, and also in non-formal school programs.",
    installed: true,
    version: "0.14.7",
    hidden: false
  }, // {name:"Etherpad", customApp:true, onlyTeacher:false, order:5, doc_user:false, doc_admin:false, last_version:"xx", url:"http://etherpad.beekee.box", icon:"etherpad.png", description:"Etherpad allows you to edit documents collaboratively in real-time, much like a live multi-player editor that runs in your browser. Write articles, press releases, to-do lists, etc. together with your friends, fellow students or colleagues, all working on the same document at the same time.", installed:true, version: "1.8.14", hidden:false},
  {
    name: "Storm",
    customApp: true,
    onlyTeacher: false,
    order: 4,
    doc_user: false,
    doc_admin: false,
    last_version: "xx",
    url: "http://storm.beekee.box",
    icon: "storm.png",
    description: "Create and animate live surveys, brainstorms and quizzes.",
    installed: true,
    version: "0.4.5",
    hidden: false
  }, {
    name: "Pad",
    customApp: true,
    onlyTeacher: false,
    order: 5,
    doc_user: false,
    doc_admin: false,
    last_version: "xx",
    url: "http://pad.beekee.box",
    icon: "pad.png",
    description: "Create collaborative walls to share and organize content.",
    installed: true,
    version: "0.8.1",
    hidden: false
  }, {
    name: "Buzzer",
    customApp: true,
    onlyTeacher: true,
    order: 6,
    doc_user: false,
    doc_admin: false,
    last_version: "xx",
    url: "http://buzzer.beekee.box",
    icon: "buzzer.png",
    description: "Create a virtual gaming room around a connected buzzer.",
    installed: true,
    version: "0.2.4",
    hidden: false
  }];

  _.each(defaultApps, function (defaultApps) {
    Apps.insert(defaultApps);
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/methods.js                                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let HTTP;
module.link("meteor/http", {
  HTTP(v) {
    HTTP = v;
  }

}, 0);
Meteor.startup(function () {
  if (Meteor.isServer) {
    var fs = Npm.require('fs');

    exec = Npm.require('child_process').exec; // No idea what is this ?

    cmd = Meteor.wrapAsync(exec);
    var wifiSettingsPath = Meteor.settings.wifiSettingsPath;
    var configPath = Meteor.settings.configPath;

    const readline = require('readline');

    Meteor.methods({
      'adminSetNewPassword': function (adminId, userId, newPassword) {
        // Admin can forcibly change the password for a user
        if (Roles.userIsInRole(adminId, 'admin')) {
          Accounts.setPassword(userId, newPassword);
        }
      },
      'createAccount': function (email, password, profile) {
        return Accounts.createUser({
          email: email,
          password: password,
          profile: profile
        }); // Callback is not supported on server-side
      },
      'editAccount': function (userId, email, password, profile) {
        Meteor.users.update({
          _id: userId
        }, {
          $set: {
            'emails.0.address': email,
            profile: profile
          }
        });

        if (password) {
          Accounts.setPassword(userId, password);
        }
      },
      'deleteUser': function (userId) {
        Meteor.users.remove(userId, function (error, result) {
          if (error) {
            console.log("Error when deleting user : " + error.message);
          }
        });
      },
      'addAdminRole': function (userId) {
        Roles.addUsersToRoles(userId, 'admin');
      },
      'removeAdminRole': function (userId) {
        Roles.removeUsersFromRoles(userId, 'admin');
      },
      // 'getUsedSpace': function() {
      // 	var res;
      // 	res = cmd("df / -h | awk '{print ($3)}' | tail -1") + "/ " + cmd("df / -h | awk '{print ($2)}' | tail -1") + " ("+cmd("df / | awk '{print ($5)}' | tail -1")+"used)";
      // 	return res;
      // },
      'runCommand': function (password, command) {
        var res;
        res = cmd("echo " + password + " | sudo -S " + command);
        return res;
      },
      'getUsedSpace': function () {
        var res = {}; //res = cmd("df / -h | awk '{print ($3)}' | tail -1") + "/ " + cmd("df / -h | awk '{print ($2)}' | tail -1") + " ("+cmd("df / | awk '{print ($5)}' | tail -1")+"used)";

        res.storageUsage = cmd("df / | awk '{print ($3)}' | tail -1");
        res.storageUsage = res.storageUsage / 1000000;
        res.storageUsage = res.storageUsage.toFixed(2);
        res.storageTotal = cmd("df / | awk '{print ($2)}' | tail -1");
        res.storageTotal = res.storageTotal / 1000000;
        res.storageTotal = res.storageTotal.toFixed(2);
        res.percentage = cmd("df / | awk '{print ($5)}' | tail -1");
        return res;
      },
      'getSSID': function () {
        var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
        var match = data.match(new RegExp('ssid=(.*)'));
        var SSID = match[1];
        SSID = decodeURIComponent(SSID.replace(/../g, '%$&'));
        return SSID;
      },
      'setSSID': function (newSSID) {
        var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
        const encodedNewSSID = new Buffer(newSSID).toString('hex'); // Convert into Hex

        var newData = data.replace(data.match(new RegExp('ssid=(.*)'))[1], encodedNewSSID);
        fs.writeFileSync(wifiSettingsPath, newData, 'utf-8');
      },
      'getWifiPassword': function () {
        var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
        var match = data.match(new RegExp('password=(.*)'));
        var password = match[1];
        return password;
      },
      'setWifiPassword': function (newPassword) {
        var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
        var newData = data.replace(data.match(new RegExp('password=(.*)'))[1], newPassword);
        fs.writeFileSync(wifiSettingsPath, newData, 'utf-8');
      },
      'getWifiChannel': function () {
        var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
        var match = data.match(new RegExp('channel=(.*)'));
        var channel = match[1];
        return channel;
      },
      'setWifiChannel': function (newChannel) {
        var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
        var newData = data.replace(data.match(new RegExp('channel=(.*)'))[1], newChannel);
        fs.writeFileSync(wifiSettingsPath, newData, 'utf-8');
      },
      'getSerial': function () {
        var data = fs.readFileSync(configPath, 'utf-8');
        var match = data.match(new RegExp('SERIAL=(.*)'));
        var serial = match[1];
        return serial;
      },
      'getOperatorName': function () {
        var operatorName;
        operatorName = cmd("sudo qmicli --device=/dev/cdc-wdm0 --nas-get-operator-name | grep -m2 'Name             ' | awk '{print $3}'");
        return operatorName;
      },
      'getSignalStrength': function () {
        var signalStrength;
        signalStrength = cmd("sudo qmicli --device=/dev/cdc-wdm0 --nas-get-signal-strength | grep -m1 Network | awk '{print $3, $2}'");
        return signalStrength;
      },
      // 'getBand': function () {
      // 	var band;
      //			band = cmd("sudo qmicli --device=/dev/cdc-wdm0 --nas-get-signal-strength | grep -m1 Network | awk \"{print $2}\" | cut -d\\' -f2");
      // 	return band;
      // },
      'getAPN': function () {
        var data = fs.readFileSync(configPath, 'utf-8');
        var match = data.match(new RegExp('APN=(.*)'));
        var APN = match[1];
        return APN;
      },
      'getAPNUser': function () {
        var data = fs.readFileSync(configPath, 'utf-8');
        var match = data.match(new RegExp('APN_USERNAME=(.*)'));
        var APNUser = match[1];
        return APNUser;
      },
      'getAPNPassword': function () {
        var data = fs.readFileSync(configPath, 'utf-8');
        var match = data.match(new RegExp('APN_PASSWORD=(.*)'));
        var APNPassword = match[1];
        return APNPassword;
      },
      'getSimPin': function () {
        var data = fs.readFileSync(configPath, 'utf-8');
        var match = data.match(new RegExp('SIM_PIN=(.*)'));
        var SimPin = match[1];
        if (SimPin != "") return "******";else return "";
      },
      'setSimPin': function (PIN) {
        var data = fs.readFileSync(configPath, 'utf-8');
        var newData = data.replace(data.match(new RegExp('SIM_PIN=.*')), 'SIM_PIN=' + PIN);
        fs.writeFileSync(configPath, newData, 'utf-8');
      },
      'setAPN': function (APN, user, password) {
        var data = fs.readFileSync(configPath, 'utf-8');
        var newData = data.replace(data.match(new RegExp('APN=.*')), 'APN=' + APN); // var newData = data.replace(data.match(new RegExp('APN=(.*)'))[1], APN);

        fs.writeFileSync(configPath, newData, 'utf-8');
      },
      'setAPNUser': function (APNUser) {
        var data = fs.readFileSync(configPath, 'utf-8');
        var newData = data.replace(data.match(new RegExp('APN_USERNAME=.*')), 'APN_USERNAME=' + APNUser);
        fs.writeFileSync(configPath, newData, 'utf-8');
      },
      'setAPNPassword': function (APNPassword) {
        var data = fs.readFileSync(configPath, 'utf-8');
        var newData = data.replace(data.match(new RegExp('APN_PASSWORD=.*')), 'APN_PASSWORD=' + APNPassword);
        fs.writeFileSync(configPath, newData, 'utf-8');
      },
      'getRemoteStatus': function () {
        var res;
        res = cmd("systemctl is-active remote-iot.service >/dev/null 2>&1 && echo 1 || echo 0");

        if (res[0] == "1") {
          // [0] is a hack because the result res has one extra character
          return true;
        } else return false;
      },
      'getAutoSyncStatus': function () {
        var res;
        res = cmd("systemctl is-active autosync.service >/dev/null 2>&1 && echo 1 || echo 0");

        if (res[0] == "1") {
          // [0] is a hack because the result res has one extra character
          return true;
        } else return false;
      },
      'getInternetSharingStatus': function () {
        var res;
        res = cmd("sudo wifi-ap.config get share.disabled");

        if (res.includes("true")) {
          res = false;
        } else res = true;

        return res;
      },
      'activateInternetSharing': function () {
        var res;
        res = cmd("sudo wifi-ap.config set share.disabled=false");
        return res;
      },
      'disactivateInternetSharing': function () {
        var res;
        res = cmd("sudo wifi-ap.config set share.disabled=true");
        return res;
      },
      'activateRemote': function () {
        var res;
        res = cmd("sudo systemctl start remote-iot.service");
        res2 = cmd("sudo systemctl enable remote-iot.service");
        return res;
      },
      'disactivateRemote': function () {
        var res;
        res = cmd("sudo systemctl stop remote-iot.service");
        res2 = cmd("sudo systemctl disable remote-iot.service");
        return res;
      },
      'activateAutoSync': function () {
        var res;
        res = cmd("sudo systemctl start autosync.service");
        res2 = cmd("sudo systemctl enable autosync.service");
        return res;
      },
      'disactivateAutoSync': function () {
        var res;
        res = cmd("sudo systemctl stop autosync.service");
        res2 = cmd("sudo systemctl disable autosync.service");
        return res;
      },
      'getPiJuiceStatus': function () {
        var res;
        var scriptsPath = Meteor.settings.scriptsPath;
        res = cmd("python3 " + scriptsPath + "/pijuice_status.py"); //res = cmd("python3 /home/ubuntu/scripts/pijuice_status.py");

        return res;
      },
      'getEth0IP': function () {
        // Get IP of box
        var res; //console.log("result : "+"ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");

        res = cmd("ip addr show eth0 | grep \"inet\\b\" | awk '{print $2}' | cut -d/ -f1"); //res = cmd("ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");
        //console.log("ip : "+"ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ifconfig "+interface+" 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");

        return res;
      },
      'getWwan0IP': function () {
        // Get IP of box
        var res; //console.log("result : "+"ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");

        res = cmd("ip addr show wwan0 | grep \"inet\\b\" | awk '{print $2}' | cut -d/ -f1"); //res = cmd("ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");
        //console.log("ip : "+"ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ifconfig "+interface+" 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");

        return res;
      },
      'getBeekeeOsVersion': function () {
        var beekeeOsVersion = Meteor.settings.public.beekeeOsVersion;
        return beekeeOsVersion;
      },
      'getBeekeeHomeVersion': function () {
        json = JSON.parse(Assets.getText("version.json"));
        return json.version;
      },
      'restartMobileConnect': function () {
        var res;
        res = cmd("sudo systemctl restart mobile_connect.service");
        return res;
        '';
      },
      synchronize: function () {
        console.log("Starting sync...");
        var deviceSerial = Meteor.settings.public.serial;
        var deviceToken = Meteor.settings.moodleAPIToken;
        var url = Meteor.settings.cloudURL + "/api/startSync";
        var options = {
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            'deviceSerial': deviceSerial,
            'deviceToken': deviceToken
          },
          npmRequestOptions: {
            rejectUnauthorized: false,
            // TODO remove when deploy
            timeout: 1200000
          },
          timeout: 1200000
        };

        try {
          console.log("url: " + url);
          console.log("options: " + options);
          console.log("ici"); //var result = HTTP.call('POST', url, options);

          var result = HTTP.post(url, options);
          var resultContent = result.content; //Synchronizations.insert({date:Date.now()});

          return resultContent;
        } catch (e) {
          console.log("Error while trying to syncronize...", e);
          return "Error while trying to syncronize... " + e;
        } //return resultContent;

      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publications.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/publications.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Meteor.publish('allApps', function() {
// 	return Apps.find({});
// });
// Meteor.publish("users", function() {
//     return Meteor.users.find({}, {fields:{createdAt: true, profile: true, emails: true, username: true}});
// });
Meteor.publish('allUsers', function () {
  console.log("users: " + Meteor.users.find().count());
  return Meteor.users.find();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.link("../imports/api/apps.js");
module.link("../imports/api/synchronizations.js");
module.link("../imports/api/users.js");
module.link("../server/fixtures.js");
module.link("../server/methods.js");
module.link("../server/publications.js");
module.link("../lib/app_loader.js");
//import {DDP} from 'meteor/ddp';
//import {Accounts} from 'meteor/accounts-base';
// import '../imports/startup/server/fixtures.js';
// import '../imports/api/fixtures.js';
Meteor.startup(() => {
  console.log("meteor started..."); // code to run on server at startup
  //  Server2 = DDP.connect("http://beekee.box:83");
  // Accounts.connection = Server2;
  // console.log("on connecte...");
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/lib/i18n/en.i18n.json");
require("/lib/i18n/fr-FR.i18n.json");
var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiZmFkZU91dCIsInJlbW92ZSIsIm1vZHVsZSIsImV4cG9ydCIsIkFwcHMiLCJNb25nbyIsImxpbmsiLCJ2IiwiQ29sbGVjdGlvbiIsImFsbG93IiwiaW5zZXJ0IiwidXBkYXRlIiwidXNlcklkIiwic3BhY2UiLCJwdWJsaXNoIiwiYXBwc1B1YmxpY2F0aW9uIiwiZmluZCIsIlN5bmNocm9uaXphdGlvbnMiLCJzeW5jaHJvbml6YXRpb25zUHVibGljYXRpb24iLCJpc0FkbWluIiwiY29uc29sZSIsImxvZyIsIlJvbGVzIiwidXNlcklzSW5Sb2xlIiwidXNlciIsInJvbGVBc3NpZ25tZW50IiwicmVhZHkiLCJ1c2VycyIsImNvdW50IiwiY3JlYXRlUm9sZSIsInVubGVzc0V4aXN0cyIsImFkbWluUGFzc3dvcmQiLCJzZXR0aW5ncyIsInVzZXJuYW1lIiwicm9sZXMiLCJfIiwiZWFjaCIsImlkIiwiQWNjb3VudHMiLCJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInByb2ZpbGUiLCJuYW1lIiwibGVuZ3RoIiwiYWRkVXNlcnNUb1JvbGVzIiwiZGVmYXVsdEFwcHMiLCJjdXN0b21BcHAiLCJvbmx5VGVhY2hlciIsIm9yZGVyIiwiZG9jX3VzZXIiLCJkb2NfYWRtaW4iLCJsYXN0X3ZlcnNpb24iLCJ1cmwiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJpbnN0YWxsZWQiLCJ2ZXJzaW9uIiwiaGlkZGVuIiwiSFRUUCIsImZzIiwiTnBtIiwicmVxdWlyZSIsImV4ZWMiLCJjbWQiLCJ3cmFwQXN5bmMiLCJ3aWZpU2V0dGluZ3NQYXRoIiwiY29uZmlnUGF0aCIsInJlYWRsaW5lIiwibWV0aG9kcyIsImFkbWluSWQiLCJuZXdQYXNzd29yZCIsInNldFBhc3N3b3JkIiwiX2lkIiwiJHNldCIsImVycm9yIiwicmVzdWx0IiwibWVzc2FnZSIsInJlbW92ZVVzZXJzRnJvbVJvbGVzIiwiY29tbWFuZCIsInJlcyIsInN0b3JhZ2VVc2FnZSIsInRvRml4ZWQiLCJzdG9yYWdlVG90YWwiLCJwZXJjZW50YWdlIiwiZGF0YSIsInJlYWRGaWxlU3luYyIsIm1hdGNoIiwiUmVnRXhwIiwiU1NJRCIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJuZXdTU0lEIiwiZW5jb2RlZE5ld1NTSUQiLCJCdWZmZXIiLCJ0b1N0cmluZyIsIm5ld0RhdGEiLCJ3cml0ZUZpbGVTeW5jIiwiY2hhbm5lbCIsIm5ld0NoYW5uZWwiLCJzZXJpYWwiLCJvcGVyYXRvck5hbWUiLCJzaWduYWxTdHJlbmd0aCIsIkFQTiIsIkFQTlVzZXIiLCJBUE5QYXNzd29yZCIsIlNpbVBpbiIsIlBJTiIsImluY2x1ZGVzIiwicmVzMiIsInNjcmlwdHNQYXRoIiwiYmVla2VlT3NWZXJzaW9uIiwicHVibGljIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInN5bmNocm9uaXplIiwiZGV2aWNlU2VyaWFsIiwiZGV2aWNlVG9rZW4iLCJtb29kbGVBUElUb2tlbiIsImNsb3VkVVJMIiwib3B0aW9ucyIsImhlYWRlcnMiLCJucG1SZXF1ZXN0T3B0aW9ucyIsInJlamVjdFVuYXV0aG9yaXplZCIsInRpbWVvdXQiLCJwb3N0IiwicmVzdWx0Q29udGVudCIsImNvbnRlbnQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sQ0FBQ0MsUUFBWCxFQUFxQjtBQUNwQkMsUUFBTSxDQUFDQyxPQUFQLENBQWUsWUFBZixFQUE2QiwyTkFBN0I7QUFFQUQsUUFBTSxDQUFDRSxPQUFQLENBQWUsWUFBZixFQUE2QkMsTUFBTSxDQUFDQyxPQUFQLENBQWUsaUJBQWYsQ0FBN0I7QUFDQTs7QUFFRCxJQUFJTixNQUFNLENBQUNPLFFBQVgsRUFBcUI7QUFDcEJQLFFBQU0sQ0FBQ1EsT0FBUCxDQUFlLFlBQVc7QUFDekJDLGNBQVUsQ0FBQyxZQUFXO0FBQ3JCQyxPQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QkMsT0FBNUIsQ0FBb0MsR0FBcEMsRUFBeUMsWUFBVztBQUFFRCxTQUFDLENBQUMsSUFBRCxDQUFELENBQVFFLE1BQVI7QUFBbUIsT0FBekU7QUFDQSxLQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0EsR0FKRDtBQUtBLEM7Ozs7Ozs7Ozs7O0FDWkRDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUNDLE1BQUksRUFBQyxNQUFJQTtBQUFWLENBQWQ7QUFBK0IsSUFBSUMsS0FBSjtBQUFVSCxNQUFNLENBQUNJLElBQVAsQ0FBWSxjQUFaLEVBQTJCO0FBQUNELE9BQUssQ0FBQ0UsQ0FBRCxFQUFHO0FBQUNGLFNBQUssR0FBQ0UsQ0FBTjtBQUFROztBQUFsQixDQUEzQixFQUErQyxDQUEvQztBQUVsQyxNQUFNSCxJQUFJLEdBQUcsSUFBSUMsS0FBSyxDQUFDRyxVQUFWLENBQXFCLFdBQXJCLENBQWI7QUFJUEosSUFBSSxDQUFDSyxLQUFMLENBQVc7QUFFVkMsUUFBTSxFQUFFLFlBQVc7QUFBRSxXQUFPLElBQVA7QUFBWSxHQUZ2QjtBQUdWQyxRQUFNLEVB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QUNDLEdBQVIsQ0FBWSxtQkFBWixFQURvQixDQUtuQjtBQUVEO0FBQ0E7QUFDQTtBQUNBLENBVkQsRSIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXHRJbmplY3QucmF3SGVhZChcIm1ldGFMb2FkZXJcIiwgJzxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT0wLCB3aWR0aD1kZXZpY2Utd2lkdGgsIGhlaWdodD1kZXZpY2UtaGVpZ2h0XCIvPjxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiPlx0PG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCI+Jyk7XG5cblx0SW5qZWN0LnJhd0JvZHkoXCJodG1sTG9hZGVyXCIsIEFzc2V0cy5nZXRUZXh0KCdhcHBfbG9hZGVyLmh0bWwnKSk7XG59XG5cbmlmIChNZXRlb3IuaXNDbGllbnQpIHtcblx0TWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24oKSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoXCIjaW5qZWN0LWxvYWRlci13cmFwcGVyXCIpLmZhZGVPdXQoNTAwLCBmdW5jdGlvbigpIHsgJCh0aGlzKS5yZW1vdmUoKTsgfSk7XG5cdFx0fSwgNzAwKTtcblx0fSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuIFxuZXhwb3J0IGNvbnN0IEFwcHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignaG9tZS1hcHBzJyk7XG5cblxuXG5BcHBzLmFsbG93KHtcblxuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHVwZGF0ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gdHJ1ZX0sXG5cdHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gdHJ1ZX0sXG5cblx0Ly8gaW5zZXJ0OiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHVwZGF0ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyByZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH1cbn0pO1xuXG4vLyBQdWJsaWNhdGlvbnNcblxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbEFwcHMnLCBmdW5jdGlvbiBhcHBzUHVibGljYXRpb24oKSB7XG4gICAgcmV0dXJuIEFwcHMuZmluZCgpO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgU3luY2hyb25pemF0aW9ucyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdob21lLXN5bmNocm9uaXphdGlvbnMnKTtcblxuXG5cblN5bmNocm9uaXphdGlvbnMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0dXBkYXRlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cblx0Ly8gaW5zZXJ0OiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHVwZGF0ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyByZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH1cbn0pO1xuXG4vLyBQdWJsaWNhdGlvbnNcblxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbFN5bmNocm9uaXphdGlvbnMnLCBmdW5jdGlvbiBzeW5jaHJvbml6YXRpb25zUHVibGljYXRpb24oKSB7XG4gICAgcmV0dXJuIFN5bmNocm9uaXphdGlvbnMuZmluZCgpO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5cbi8vIHZhciB1c2Vyc0RCXHQ9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vLyB2YXIgY29sbGVjdGlvblx0PSB1c2Vyc0RCLm9wZW4oJ3VzZXJzJyk7XG5cblxuLy9jb25zdCBkYXRhYmFzZSA9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vL2NvbnN0IGNvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vZXhwb3J0IGNvbnN0IFVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vLyBTaGFyaW5nIHRoZSBzYW1lIEFjY291bnQgY29sbGVjdGlvbiB0aGFuIGJlZWtlZS1saXZlXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0Ly8gY2hlY2sgdGhhdCB0aGUgdXNlcklkIHNwZWNpZmllZCBpcyBhZG1pblxuaXNBZG1pbiA9IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRjb25zb2xlLmxvZyhcImlzYWRtaW5cIik7XG4gIHJldHVybiBSb2xlcy51c2VySXNJblJvbGUoTWV0ZW9yLnVzZXIoKSwgJ2FkbWluJyk7XG59XG5cblxuLy8gUHVibGlzaCBSb2xlcyB0byBjbGllbnRcbk1ldGVvci5wdWJsaXNoKG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgcmV0dXJuIE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKHsgJ3VzZXIuX2lkJzogdGhpcy51c2VySWQgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5yZWFkeSgpXG4gIH1cbn0pO1xuXG5NZXRlb3IucHVibGlzaChudWxsLCBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoKTtcblxufSk7XG5cbiAgLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICAvLyBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gIC8vICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIC8vIH0pO1xuXG4vLyBTZXJ2ZXIyID0gRERQLmNvbm5lY3QoXCJodHRwOi8vYmVla2VlLmJveDo4M1wiKTtcbi8vIEFjY291bnRzLmNvbm5lY3Rpb24gPSBTZXJ2ZXIyO1xuXG5cbi8vdmFyIGRhdGFiYXNlID0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vTWV0ZW9yLnVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vL2V4cG9ydCBjb25zdCBVc2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdhcHBzJyk7XG5cblxuICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcbiAgLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICAvLyBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gIC8vICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIC8vIH0pO1xufSIsImltcG9ydCB7IEFwcHMgfSBmcm9tICcuLi9pbXBvcnRzL2FwaS9hcHBzLmpzJztcblxuXG4vLyAjIyMgIENyZWF0ZSBhZG1pbiB1c2VyIGF0IGZpcnN0IHN0YXJ0ICAjIyNcblxuXG5pZiAoTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG5cdFxuXHQvLyBDcmVhdGUgdGhlIGFkbWluIHJvbGVcblx0Um9sZXMuY3JlYXRlUm9sZSgnYWRtaW4nLCB7dW5sZXNzRXhpc3RzOiB0cnVlfSk7XG5cblx0dmFyIGFkbWluUGFzc3dvcmQgPSBNZXRlb3Iuc2V0dGluZ3MuYWRtaW5QYXNzd29yZDtcblxuXHR2YXIgdXNlcnMgPSBbXG5cdFx0e3VzZXJuYW1lOlwiYWRtaW5cIixyb2xlczpbJ2FkbWluJ119LFxuXHRdO1xuXG5cdF8uZWFjaCh1c2VycywgZnVuY3Rpb24gKHVzZXIpIHtcblx0XHR2YXIgaWQ7XG5cdFx0aWQgPSBBY2NvdW50cy5jcmVhdGVVc2VyKHtcblx0XHRcdHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuXHRcdFx0ZW1haWw6IFwiQWRtaW5cIixcblx0XHRcdHBhc3N3b3JkOiBhZG1pblBhc3N3b3JkLFxuXHRcdFx0cHJvZmlsZTp7bmFtZTpcIkFkbWluXCJ9XG5cdFx0fSk7XG5cblx0XHRpZiAodXNlci5yb2xlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRSb2xlcy5hZGRVc2Vyc1RvUm9sZXMoaWQsIHVzZXIucm9sZXMpO1xuXHRcdH1cblx0fSk7XG59XG5cblxuaWYgKEFwcHMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblxuXHR2YXIgZGVmYXVsdEFwcHMgPSBbXG5cdFx0e25hbWU6XCJMaXZlXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjMsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly9saXZlLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1saXZlLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBMaXZlIHByb21vdGUgcmVhbC10aW1lIGludGVyYWN0aW9uIGJ5IGFsbG93aW5nIGxlYXJuZXJzIHRvIGV4cHJlc3MgdGhlbXNlbHZlcyBhc2tpbmcgcXVlc3Rpb25zLCBwb3N0aW5nIHBob3RvcyBvciBzaGFyaW5nIGZpbGVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlJlc291cmNlc1wiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo3LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vcmVzb3VyY2VzLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1yZXNvdXJjZXMucG5nXCIsIGRlc2NyaXB0aW9uOlwiV2l0aCBCZWVrZWUgUmVzb3VyY2VzLCB5b3UgY2FuIGVhc2lseSBzaGFyZSBmaWxlcyB3aXRoIHlvdXIgbGVhcm5lcnMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiV2hlZWxcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjp0cnVlLCBvcmRlcjo5LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIwLjdcIiwgdXJsOlwiaHR0cDovL3doZWVsLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS13aGVlbC5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgV2hlZWwgaXMgYSBzaW1wbGUgcmFuZG9tIHBpY2tlciB3aGVlbCB0aGF0IGFsbG93IHlvdSB0byBwaWNrIHVwIGEgcmFuZG9tIG5hbWUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiVGltZXJcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6OCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL3RpbWVyLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS10aW1lci5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgVGltZXIgaXMgYSBzaW1wbGUgdGltZXIgdGhhdCBsZXRzIHlvdXIgbGVhcm5lcnMga25vdyBob3cgbXVjaCB0aW1lIHRoZXkgaGF2ZSBsZWZ0LlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIk1vb2RsZVwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjEsIGRvY191c2VyOlwibW9vZGxlX3RlYWNoZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL21vb2RsZS5iZWVrZWUuYm94XCIsIGljb246XCJtb29kbGUucG5nXCIsIGRlc2NyaXB0aW9uOlwiTW9vZGxlIGlzIGEgZnJlZSwgb25saW5lIExlYXJuaW5nIE1hbmFnZW1lbnQgc3lzdGVtIGVuYWJsaW5nIGVkdWNhdG9ycyB0byBjcmVhdGUgdGhlaXIgb3duIHByaXZhdGUgd2Vic2l0ZSBmaWxsZWQgd2l0aCBkeW5hbWljIGNvdXJzZXMgdGhhdCBleHRlbmQgbGVhcm5pbmcsIGFueSB0aW1lLCBhbnl3aGVyZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMy4xMS4yXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJLb2xpYnJpXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MiwgZG9jX3VzZXI6XCJrb2xpYnJpX3VzZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2tvbGlicmkuYmVla2VlLmJveFwiLCBpY29uOlwia29saWJyaS5wbmdcIiwgZGVzY3JpcHRpb246XCJLb2xpYnJpIGlzIGFuIG9wZW4tc291cmNlIGVkdWNhdGlvbmFsIHBsYXRmb3JtIHNwZWNpYWxseSBkZXNpZ25lZCB0byBwcm92aWRlIG9mZmxpbmUgYWNjZXNzIHRvIGEgd2lkZSByYW5nZSBvZiBxdWFsaXR5LCBvcGVubHkgbGljZW5zZWQgZWR1Y2F0aW9uYWwgcmVzb3VyY2VzIGluIGxvdy1yZXNvdXJjZSBjb250ZXh0cyBsaWtlIHJ1cmFsIHNjaG9vbHMsIHJlZnVnZWUgY2FtcHMsIG9ycGhhbmFnZXMsIGFuZCBhbHNvIGluIG5vbi1mb3JtYWwgc2Nob29sIHByb2dyYW1zLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjE0LjdcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHQvLyB7bmFtZTpcIkV0aGVycGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2V0aGVycGFkLmJlZWtlZS5ib3hcIiwgaWNvbjpcImV0aGVycGFkLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkV0aGVycGFkIGFsbG93cyB5b3UgdG8gZWRpdCBkb2N1bWVudHMgY29sbGFib3JhdGl2ZWx5IGluIHJlYWwtdGltZSwgbXVjaCBsaWtlIGEgbGl2ZSBtdWx0aS1wbGF5ZXIgZWRpdG9yIHRoYXQgcnVucyBpbiB5b3VyIGJyb3dzZXIuIFdyaXRlIGFydGljbGVzLCBwcmVzcyByZWxlYXNlcywgdG8tZG8gbGlzdHMsIGV0Yy4gdG9nZXRoZXIgd2l0aCB5b3VyIGZyaWVuZHMsIGZlbGxvdyBzdHVkZW50cyBvciBjb2xsZWFndWVzLCBhbGwgd29ya2luZyBvbiB0aGUgc2FtZSBkb2N1bWVudCBhdCB0aGUgc2FtZSB0aW1lLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjguMTRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlN0b3JtXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3N0b3JtLmJlZWtlZS5ib3hcIiwgaWNvbjpcInN0b3JtLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhbmQgYW5pbWF0ZSBsaXZlIHN1cnZleXMsIGJyYWluc3Rvcm1zIGFuZCBxdWl6emVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjQuNVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiUGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3BhZC5iZWVrZWUuYm94XCIsIGljb246XCJwYWQucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGNvbGxhYm9yYXRpdmUgd2FsbHMgdG8gc2hhcmUgYW5kIG9yZ2FuaXplIGNvbnRlbnQuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJCdXp6ZXJcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOnRydWUsIG9yZGVyOjYsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9idXp6ZXIuYmVla2VlLmJveFwiLCBpY29uOlwiYnV6emVyLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhIHZpcnR1YWwgZ2FtaW5nIHJvb20gYXJvdW5kIGEgY29ubmVjdGVkIGJ1enplci5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4yLjRcIiwgaGlkZGVuOmZhbHNlfSxcblxuXHRdO1xuXG5cdF8uZWFjaChkZWZhdWx0QXBwcywgZnVuY3Rpb24gKGRlZmF1bHRBcHBzKSB7XG5cdFx0QXBwcy5pbnNlcnQoZGVmYXVsdEFwcHMpO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBIVFRQIH0gZnJvbSAnbWV0ZW9yL2h0dHAnXG5cbk1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuXG5cdGlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHR2YXIgZnMgPSBOcG0ucmVxdWlyZSgnZnMnKTtcblx0ZXhlYyA9IE5wbS5yZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuZXhlYzsgLy8gTm8gaWRlYSB3aGF0IGlzIHRoaXMgP1xuXHRjbWQgPSBNZXRlb3Iud3JhcEFzeW5jKGV4ZWMpO1xuXG5cdHZhciB3aWZpU2V0dGluZ3NQYXRoID0gTWV0ZW9yLnNldHRpbmdzLndpZmlTZXR0aW5nc1BhdGg7XG5cdHZhciBjb25maWdQYXRoID0gTWV0ZW9yLnNldHRpbmdzLmNvbmZpZ1BhdGg7XG5cdGNvbnN0IHJlYWRsaW5lID0gcmVxdWlyZSgncmVhZGxpbmUnKTtcblxuXG5cdE1ldGVvci5tZXRob2RzKHtcblxuXHRcdCdhZG1pblNldE5ld1Bhc3N3b3JkJzogZnVuY3Rpb24oYWRtaW5JZCwgdXNlcklkLCBuZXdQYXNzd29yZCkgeyAvLyBBZG1pbiBjYW4gZm9yY2libHkgY2hhbmdlIHRoZSBwYXNzd29yZCBmb3IgYSB1c2VyXG5cdFx0XHRpZiAoUm9sZXMudXNlcklzSW5Sb2xlKGFkbWluSWQsICdhZG1pbicpKSB7XG5cdFx0XHRcdEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgbmV3UGFzc3dvcmQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2NyZWF0ZUFjY291bnQnOiBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQsIHByb2ZpbGUpIHtcblx0XHRcdHJldHVybiBBY2NvdW50cy5jcmVhdGVVc2VyKHtlbWFpbDplbWFpbCxwYXNzd29yZDpwYXNzd29yZCxwcm9maWxlOnByb2ZpbGV9KTsgLy8gQ2FsbGJhY2sgaXMgbm90IHN1cHBvcnRlZCBvbiBzZXJ2ZXItc2lkZVxuXHRcdH0sXG5cdFx0J2VkaXRBY2NvdW50JzogZnVuY3Rpb24odXNlcklkLCBlbWFpbCwgcGFzc3dvcmQsIHByb2ZpbGUpIHtcblx0XHRcdE1ldGVvci51c2Vycy51cGRhdGUoe19pZDogdXNlcklkfSwge1xuXHQgIFx0XHRcdCRzZXQ6IHtcblx0ICAgIFx0XHRcdCdlbWFpbHMuMC5hZGRyZXNzJzogZW1haWwsXG5cdCAgICBcdFx0XHRwcm9maWxlOiBwcm9maWxlXG5cdCAgXHRcdFx0fVxuXHRcdFx0fSk7XHRcblx0XHRcdGlmIChwYXNzd29yZCkge1xuXHRcdFx0XHRBY2NvdW50cy5zZXRQYXNzd29yZCh1c2VySWQsIHBhc3N3b3JkKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdkZWxldGVVc2VyJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRNZXRlb3IudXNlcnMucmVtb3ZlKHVzZXJJZCwgZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGVuIGRlbGV0aW5nIHVzZXIgOiBcIitlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnYWRkQWRtaW5Sb2xlJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklkLCAnYWRtaW4nKTtcblx0XHR9LFxuXHRcdCdyZW1vdmVBZG1pblJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLnJlbW92ZVVzZXJzRnJvbVJvbGVzKHVzZXJJZCwgJ2FkbWluJyk7XG5cdFx0fSxcblx0XHQvLyAnZ2V0VXNlZFNwYWNlJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0cmVzID0gY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIikgKyBcIi8gXCIgKyBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKSArIFwiIChcIitjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKStcInVzZWQpXCI7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzO1xuXHRcdC8vIH0sXG5cdFx0J3J1bkNvbW1hbmQnOiBmdW5jdGlvbihwYXNzd29yZCwgY29tbWFuZCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcImVjaG8gXCIrcGFzc3dvcmQrXCIgfCBzdWRvIC1TIFwiK2NvbW1hbmQpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRVc2VkU3BhY2UnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXMgPSB7fTtcblx0XHRcdC8vcmVzID0gY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIikgKyBcIi8gXCIgKyBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKSArIFwiIChcIitjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKStcInVzZWQpXCI7XG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIilcblx0XHRcdHJlcy5zdG9yYWdlVXNhZ2UgPSByZXMuc3RvcmFnZVVzYWdlLzEwMDAwMDA7XG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gcmVzLnN0b3JhZ2VVc2FnZS50b0ZpeGVkKDIpO1xuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpXG5cdFx0XHRyZXMuc3RvcmFnZVRvdGFsID0gcmVzLnN0b3JhZ2VUb3RhbC8xMDAwMDAwO1xuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IHJlcy5zdG9yYWdlVG90YWwudG9GaXhlZCgyKTtcblx0XHRcdHJlcy5wZXJjZW50YWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFNTSUQnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnc3NpZD0oLiopJykpO1xuICBcdFx0XHR2YXIgU1NJRCA9IG1hdGNoWzFdO1xuICBcdFx0XHRTU0lEID0gZGVjb2RlVVJJQ29tcG9uZW50KFNTSUQucmVwbGFjZSgvLi4vZywgJyUkJicpKVxuICBcdFx0XHRyZXR1cm4gU1NJRDtcblx0XHR9LFxuXHRcdCdzZXRTU0lEJzogZnVuY3Rpb24obmV3U1NJRCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdGNvbnN0IGVuY29kZWROZXdTU0lEID0gbmV3IEJ1ZmZlcihuZXdTU0lEKS50b1N0cmluZygnaGV4Jyk7IC8vIENvbnZlcnQgaW50byBIZXhcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdzc2lkPSguKiknKSlbMV0sIGVuY29kZWROZXdTU0lEKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0V2lmaVBhc3N3b3JkJzogZnVuY3Rpb24oKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3Bhc3N3b3JkPSguKiknKSk7XG4gIFx0XHRcdHZhciBwYXNzd29yZCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gcGFzc3dvcmQ7XG5cdFx0fSxcblx0XHQnc2V0V2lmaVBhc3N3b3JkJzogZnVuY3Rpb24obmV3UGFzc3dvcmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3Bhc3N3b3JkPSguKiknKSlbMV0sIG5ld1Bhc3N3b3JkKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0V2lmaUNoYW5uZWwnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJykpO1xuICBcdFx0XHR2YXIgY2hhbm5lbCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gY2hhbm5lbDtcblx0XHR9LFxuXHRcdCdzZXRXaWZpQ2hhbm5lbCc6IGZ1bmN0aW9uKG5ld0NoYW5uZWwpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpKVsxXSwgbmV3Q2hhbm5lbCk7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFNlcmlhbCc6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnU0VSSUFMPSguKiknKSk7XG4gIFx0XHRcdHZhciBzZXJpYWwgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIHNlcmlhbDtcblx0XHR9LFxuXHRcdCdnZXRPcGVyYXRvck5hbWUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvcGVyYXRvck5hbWU7XG5cdFx0XHRvcGVyYXRvck5hbWUgPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1vcGVyYXRvci1uYW1lIHwgZ3JlcCAtbTIgJ05hbWUgICAgICAgICAgICAgJyB8IGF3ayAne3ByaW50ICQzfSdcIik7XG5cdFx0XHRyZXR1cm4gb3BlcmF0b3JOYW1lO1xuXHRcdH0sXG5cdFx0J2dldFNpZ25hbFN0cmVuZ3RoJzogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHNpZ25hbFN0cmVuZ3RoO1xuXHRcdFx0c2lnbmFsU3RyZW5ndGggPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrICd7cHJpbnQgJDMsICQyfSdcIik7XG5cdFx0XHRyZXR1cm4gc2lnbmFsU3RyZW5ndGg7XG5cdFx0fSxcblx0XHQvLyAnZ2V0QmFuZCc6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdHZhciBiYW5kO1xuLy9cdFx0XHRiYW5kID0gY21kKFwic3VkbyBxbWljbGkgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayBcXFwie3ByaW50ICQyfVxcXCIgfCBjdXQgLWRcXFxcJyAtZjJcIik7XG5cdFx0Ly8gXHRyZXR1cm4gYmFuZDtcblx0XHQvLyB9LFxuXHRcdCdnZXRBUE4nOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTj0oLiopJykpO1xuICBcdFx0XHR2YXIgQVBOID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBBUE47XG5cdFx0fSxcblx0XHQnZ2V0QVBOVXNlcic6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1VTRVJOQU1FPSguKiknKSk7XG4gIFx0XHRcdHZhciBBUE5Vc2VyID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBBUE5Vc2VyO1xuXHRcdH0sXG5cdFx0J2dldEFQTlBhc3N3b3JkJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE5fUEFTU1dPUkQ9KC4qKScpKTtcbiAgXHRcdFx0dmFyIEFQTlBhc3N3b3JkID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBBUE5QYXNzd29yZDtcblx0XHR9LFxuXHRcdCdnZXRTaW1QaW4nOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ1NJTV9QSU49KC4qKScpKTtcbiAgXHRcdFx0dmFyIFNpbVBpbiA9IG1hdGNoWzFdO1xuICBcdFx0XHRpZiAoU2ltUGluICE9IFwiXCIpXG4gIFx0XHRcdFx0cmV0dXJuIFwiKioqKioqXCI7XG4gIFx0XHRcdGVsc2VcbiAgXHRcdFx0XHRyZXR1cm4gXCJcIjtcblx0XHR9LFxuXHRcdCdzZXRTaW1QaW4nOiBmdW5jdGlvbihQSU4pIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ1NJTV9QSU49LionKSksICdTSU1fUElOPScrUElOKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOJzogZnVuY3Rpb24oQVBOLCB1c2VyLCBwYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOPS4qJykpLCAnQVBOPScrQVBOKTtcbiAgXHRcdFx0Ly8gdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49KC4qKScpKVsxXSwgQVBOKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOVXNlcic6IGZ1bmN0aW9uKEFQTlVzZXIpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9VU0VSTkFNRT0uKicpKSwgJ0FQTl9VU0VSTkFNRT0nK0FQTlVzZXIpO1xuICBcdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J3NldEFQTlBhc3N3b3JkJzogZnVuY3Rpb24oQVBOUGFzc3dvcmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9QQVNTV09SRD0uKicpKSwgJ0FQTl9QQVNTV09SRD0nK0FQTlBhc3N3b3JkKTtcbiAgXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRSZW1vdGVTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzeXN0ZW1jdGwgaXMtYWN0aXZlIHJlbW90ZS1pb3Quc2VydmljZSA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyAxIHx8IGVjaG8gMFwiKTtcblx0XHRcdGlmIChyZXNbMF0gPT0gXCIxXCIpIHsgLy8gWzBdIGlzIGEgaGFjayBiZWNhdXNlIHRoZSByZXN1bHQgcmVzIGhhcyBvbmUgZXh0cmEgY2hhcmFjdGVyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQnZ2V0QXV0b1N5bmNTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzeXN0ZW1jdGwgaXMtYWN0aXZlIGF1dG9zeW5jLnNlcnZpY2UgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gMSB8fCBlY2hvIDBcIik7XG5cdFx0XHRpZiAocmVzWzBdID09IFwiMVwiKSB7IC8vIFswXSBpcyBhIGhhY2sgYmVjYXVzZSB0aGUgcmVzdWx0IHJlcyBoYXMgb25lIGV4dHJhIGNoYXJhY3RlclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0J2dldEludGVybmV0U2hhcmluZ1N0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gd2lmaS1hcC5jb25maWcgZ2V0IHNoYXJlLmRpc2FibGVkXCIpO1xuXG5cdFx0XHRpZiAocmVzLmluY2x1ZGVzKFwidHJ1ZVwiKSkge1xuXHRcdFx0XHRyZXMgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGVsc2UgXG5cdFx0XHRcdHJlcyA9IHRydWU7XG5cdFx0XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2FjdGl2YXRlSW50ZXJuZXRTaGFyaW5nJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyB3aWZpLWFwLmNvbmZpZyBzZXQgc2hhcmUuZGlzYWJsZWQ9ZmFsc2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2Rpc2FjdGl2YXRlSW50ZXJuZXRTaGFyaW5nJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyB3aWZpLWFwLmNvbmZpZyBzZXQgc2hhcmUuZGlzYWJsZWQ9dHJ1ZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnYWN0aXZhdGVSZW1vdGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdGFydCByZW1vdGUtaW90LnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZW5hYmxlIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZGlzYWN0aXZhdGVSZW1vdGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdG9wIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBkaXNhYmxlIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnYWN0aXZhdGVBdXRvU3luYyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0YXJ0IGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZW5hYmxlIGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2Rpc2FjdGl2YXRlQXV0b1N5bmMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdG9wIGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZGlzYWJsZSBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRQaUp1aWNlU3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0dmFyIHNjcmlwdHNQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnNjcmlwdHNQYXRoO1xuXHRcdFx0cmVzID0gY21kKFwicHl0aG9uMyBcIitzY3JpcHRzUGF0aCtcIi9waWp1aWNlX3N0YXR1cy5weVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwicHl0aG9uMyAvaG9tZS91YnVudHUvc2NyaXB0cy9waWp1aWNlX3N0YXR1cy5weVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0RXRoMElQJzogZnVuY3Rpb24oKSB7IC8vIEdldCBJUCBvZiBib3hcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwicmVzdWx0IDogXCIrXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcXFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cblx0XHRcdC8vY29uc29sZS5sb2coXCJpcCA6IFwiK1wiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgXCIraW50ZXJmYWNlK1wiIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0V3dhbjBJUCc6IGZ1bmN0aW9uKCkgeyAvLyBHZXQgSVAgb2YgYm94XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcInJlc3VsdCA6IFwiK1wiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgd3dhbjAgfCBncmVwIFxcXCJpbmV0XFxcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiaXAgOiBcIitcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIFwiK2ludGVyZmFjZStcIiAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0XG5cdFx0J2dldEJlZWtlZU9zVmVyc2lvbic6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGJlZWtlZU9zVmVyc2lvbiA9IE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuYmVla2VlT3NWZXJzaW9uO1xuXHRcdFx0cmV0dXJuIGJlZWtlZU9zVmVyc2lvbjtcblx0XHR9LFxuXHRcdCdnZXRCZWVrZWVIb21lVmVyc2lvbic6IGZ1bmN0aW9uKCkge1xuXHRcdFx0anNvbiA9IEpTT04ucGFyc2UoQXNzZXRzLmdldFRleHQoXCJ2ZXJzaW9uLmpzb25cIikpO1xuXHRcdFx0cmV0dXJuIGpzb24udmVyc2lvbjtcblx0XHR9LFxuXHRcdCdyZXN0YXJ0TW9iaWxlQ29ubmVjdCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHJlc3RhcnQgbW9iaWxlX2Nvbm5lY3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7Jydcblx0XHR9LFxuXHRcdHN5bmNocm9uaXplOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0Y29uc29sZS5sb2coXCJTdGFydGluZyBzeW5jLi4uXCIpO1xuXG5cdFx0XHR2YXIgZGV2aWNlU2VyaWFsID0gTWV0ZW9yLnNldHRpbmdzLnB1YmxpYy5zZXJpYWw7XG5cdFx0XHR2YXIgZGV2aWNlVG9rZW4gPSBNZXRlb3Iuc2V0dGluZ3MubW9vZGxlQVBJVG9rZW47XG5cdFx0XHR2YXIgdXJsID0gTWV0ZW9yLnNldHRpbmdzLmNsb3VkVVJMICsgXCIvYXBpL3N0YXJ0U3luY1wiO1xuXHRcdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0J2RldmljZVNlcmlhbCc6IGRldmljZVNlcmlhbCxcblx0XHRcdFx0XHQnZGV2aWNlVG9rZW4nOiBkZXZpY2VUb2tlblxuXHRcdFx0XHR9LFxuXHRcdFx0ICAgIG5wbVJlcXVlc3RPcHRpb25zOiB7XG5cdFx0XHQgICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsIC8vIFRPRE8gcmVtb3ZlIHdoZW4gZGVwbG95XG5cdFx0XHQgICAgICAgIHRpbWVvdXQ6IDEyMDAwMDBcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgIHRpbWVvdXQ6IDEyMDAwMDBcblx0XHRcdH1cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwidXJsOiBcIit1cmwpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIm9wdGlvbnM6IFwiK29wdGlvbnMpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImljaVwiKTtcblx0XHRcdFx0Ly92YXIgcmVzdWx0ID0gSFRUUC5jYWxsKCdQT1NUJywgdXJsLCBvcHRpb25zKTtcblxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gSFRUUC5wb3N0KCB1cmwsIG9wdGlvbnMgKTtcblx0XHRcdFx0dmFyIHJlc3VsdENvbnRlbnQgPSByZXN1bHQuY29udGVudDtcblx0XHRcdFx0Ly9TeW5jaHJvbml6YXRpb25zLmluc2VydCh7ZGF0ZTpEYXRlLm5vdygpfSk7XG5cdFx0XHRcdHJldHVybiByZXN1bHRDb250ZW50O1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCBcIkVycm9yIHdoaWxlIHRyeWluZyB0byBzeW5jcm9uaXplLi4uXCIsIGUgKTtcblx0XHRcdFx0cmV0dXJuIFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi4gXCIrIGU7XG5cdFx0XHR9XG5cdFx0Ly9yZXR1cm4gcmVzdWx0Q29udGVudDtcblx0XHR9LFxuXHR9KTtcbn1cbn0pOyIsIi8vIE1ldGVvci5wdWJsaXNoKCdhbGxBcHBzJywgZnVuY3Rpb24oKSB7XG4vLyBcdHJldHVybiBBcHBzLmZpbmQoe30pO1xuLy8gfSk7XG5cbi8vIE1ldGVvci5wdWJsaXNoKFwidXNlcnNcIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKHt9LCB7ZmllbGRzOntjcmVhdGVkQXQ6IHRydWUsIHByb2ZpbGU6IHRydWUsIGVtYWlsczogdHJ1ZSwgdXNlcm5hbWU6IHRydWV9fSk7XG4vLyB9KTtcblxuXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICB9KTsiLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcblxuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9hcHBzLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvc3luY2hyb25pemF0aW9ucy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL3VzZXJzLmpzJztcblxuaW1wb3J0ICcuLi9zZXJ2ZXIvZml4dHVyZXMuanMnO1xuaW1wb3J0ICcuLi9zZXJ2ZXIvbWV0aG9kcy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci9wdWJsaWNhdGlvbnMuanMnO1xuaW1wb3J0ICcuLi9saWIvYXBwX2xvYWRlci5qcyc7XG5cblxuLy9pbXBvcnQge0REUH0gZnJvbSAnbWV0ZW9yL2RkcCc7XG4vL2ltcG9ydCB7QWNjb3VudHN9IGZyb20gJ21ldGVvci9hY2NvdW50cy1iYXNlJztcblxuXG4vLyBpbXBvcnQgJy4uL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXIvZml4dHVyZXMuanMnO1xuXG4vLyBpbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2ZpeHR1cmVzLmpzJztcblxuXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG5cdGNvbnNvbGUubG9nKFwibWV0ZW9yIHN0YXJ0ZWQuLi5cIik7XG5cblxuXG4gIC8vIGNvZGUgdG8gcnVuIG9uIHNlcnZlciBhdCBzdGFydHVwXG5cbiAvLyAgU2VydmVyMiA9IEREUC5jb25uZWN0KFwiaHR0cDovL2JlZWtlZS5ib3g6ODNcIik7XG5cdC8vIEFjY291bnRzLmNvbm5lY3Rpb24gPSBTZXJ2ZXIyO1xuXHQvLyBjb25zb2xlLmxvZyhcIm9uIGNvbm5lY3RlLi4uXCIpO1xufSk7XG4iXX0=
