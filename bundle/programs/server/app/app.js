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
translations[namespace] = {"error-message":"An error occurred : ","access-denied--page-title":"Access denied !","access-denied--login-needed":"You need to login first.","access-denied--login":"Log in","admin--page-title":"Administration","admin--spaces-list":"List of spaces","admin--spaces-title":"Title","admin--spaces-creation":"Date of creation","admin--spaces-owner":"Owner","admin--spaces-actions":"Actions","admin--spaces-open":"Open","admin--spaces-delete":"Delete","admin--users-list":"List of teacher accounts","admin--users-logins":"Login","admin--users-creation":"Date of creation","admin--users-last-connexion":"Last connection","admin--users-actions":"Actions","admin--users-change-password":"Change password","admin--users-delete":"Delete","admin--user-delete-message":"Delete this user ?","admin--user-delete-confirm-message":"The user has been deleted.","admin--change-password-message":"Enter a new password for the user:","admin--change-password-confirm-message":"The password has been changed.","layout--connection-status":"Disconnected","login--page-title":"Login","login--mail":"E-mail","login--password":"Password","login--send-mail-forgot-password-link":"Reset my password","login--button-submit":"Log in","login--register":"You need a Teacher account ?","login--register-contact-admin":"Please contact your Beekee Box administrator.","login--register-link":"Create an account","login--user-not-found":"Username does not exist.","login--incorrect-password":"Password does not match.","login--send-mail-forgot-password":"An email has been sent to % s with a link to reset your password.","login--send-mail-forgot-password-error":"An error has occurred. Please contact the administrator at : vincent.widmer@beekee.ch","login--send-mail-forgot-password-error-log":"Error sending an email to recover password : %s","logout--page-title":"Sign out","not-found--page-title":"Page not found","not-found--page-description":"Sorry, we can not find a page at this address.","not-found--go-back":"Return to home","privacy--page-title":"Privacy policy","privacy--content":"<h3> Teacher Account Information </h3> <p> When you create a teacher account, you must provide a valid email address and password. These details are not public and can be modified at any time. Beekee Live will not share this information with third parties. </p> <h3> Publications, photos, users </h3> <p> Beekee Live follows a strict data protection policy. The data published on Beekee Live are hosted on servers located in Switzerland. The Beekee Live platform is therefore subject to Swiss data protection law. Publications, photographs, user names and any other data published on the platform are the exclusive property of the user. At any time, a user may choose to permanently delete his/her data. In no event will Beekee Live transmit this data to third parties. </p> <h3> Intervention of a technician </h3> <p> On request of the user, a technician can access a space and consult the data stored on it in order to solve a technical problem. </p> <h3> Cookies </h3> <p> Like many websites, Beekee Live uses cookies to facilitate the use of the platform. The information contained in these cookies is not used by Beekee Live for any other purpose. </p>","register--page-title":"Create an account","register--mail":"E-mail","register--name":"Name","register--password":"Password","register--password-confirm":"Confirm password","register--password-dont-match":"Confirm password doesn't match.","register--terms":"By registering, you accept our <a href=\"{{pathFor 'privacy'}}\" target=\"_blank\">terms and conditions</a>.<br>Your e-mail address will not be disclosed to third parties.","register--button-submit":"Sign up","register--mail-exist":"There already exists a user account with this email address.","register--mail-no-valid-message":"Please enter a valid email address.","register--mail-subject":"Your registration on Beekee Live","register--mail-content":"<h2>Welcome to <a href=\"https://live.beekee.ch\">Beekee Live</a>!</h2><h3>We’re glad you’re here. Start teaching today by creating your first Beekee Live space!</h3><p><b>Tip</b> : Did you know that you can use Beekee Live on computer, smartphone or tablet without the need of installing an app?</p><p>The <a href=\"https://www.beekee.ch\">Beekee Team</a></p>","reset-password--page-title":"Reset your password","reset-password--new-password":"New password","reset-password--button-submit":"Save","register--password-changed-message":"The password has been changed.","space-edit-categories--page-title":"Manage categories","space-edit-categories--page-description":"The categories are used to classify posts.<br />Unlike tags, categories are defined in advance by the teacher.","space-edit-categories--confirm-delete":"Delete category","space-edit--button-submit-add-category":"Add","space-edit-categories--edit-category":"Edit category","space-edit--page-title":"Settings","space-edit--subtitle-general":"General","space-edit--list-title-change-code":"Change the access code","space-edit--description-change-code":"Share this code with your students so they can join this space.","space-edit--list-title-rename-space":"Rename this space","space-edit--list-title-delete-space":"Delete this space","space-edit--list-title-content":"Content","space-edit--list-title-flow":"Continuous Flow","space-edit--description-flow":"By enabling Continuous Flow, new publications are displayed in real time.","space-edit--list-title-categories":"Manage categories","space-edit--list-title-comments":"Allow comments","space-edit--subtitle-users":"Users","space-edit--list-title-users":"Manage authors","space-edit--list-title-free-users":"Free authors","space-edit--description-free-users":"By activating \"Free authors\", users are able to enter their username when they first log in. Otherwise, they will choose from an editable list under \"Manage authors\".","space-edit--subtitle-permissions":"Permissions","space-edit--select-permissions-own":"Authors can edit their own publications","space-edit--select-permissions-all":"Authors can edit all publications","space-edit--select-permissions-none":"Nobody can add or edit publications","space-edit--subtitle-box":"Box","space-edit--list-title-update-box":"Update the Box","space-edit--list-title-ip":"IP address :","space-edit--list-title-sync":"Synchronize with the cloud","space-edit--description-sync":"Connect the beekee box using an ethernet cable to sync its content with the cloud (www.beekee.ch). This may take several minutes.","space-edit--subtitle-account":"Your account","space-edit--description-change-password":"Change your account password.","space-edit--change-code-message":"Change the access code","space-edit--change-code-confirm-message":"The access code has been changed.","space-edit--change-code-already-used-message":"This code is already assigned to another space.","space-edit--rename-space-message":"Rename this space","space-edit--rename-space-confirm-message":"This space is now called","space-edit--delete-space-message":"Permanently delete this space and its contents ?","space-edit--delete-space-confirm-message":"The space has been removed.","space-edit--sync-login-message":"To synchronize this space with the cloud, you must have an account on www.beekee.ch.\nIf this is the case, enter the username linked to your account :","space-edit--sync-error-message":"A problem has occurred. Check that the box is connected to the internet and try again.","space-edit--update-message":"Updating of the box may make the platform inaccessible for several minutes.\nDo you want to continue ?","space-edit--update-waiting-message":"The box will be updated, please wait...","space-edit--no-ip":"No IP address","space-edit--not-connected":"Not connected","space-edit--module-resources":"Distribute files to your learners","space-edit--permissions-public-space":"Allows anyone to access the contents and interact within this Space without needing an Access Code","space-edit--permissions-add-categories":"Users can add categories","space-edit--permissions-add-posts":"Users can add posts","space-edit-authors---page-title":"Manage authors","space-edit-authors---page-description":"Author names are used to identify publications.<br>For example, add the name of your students or the name of a group.","space-edit-authors---submit-button":"Add","space-edit-authors--delete-author-message":"Delete the author %s ?","space-edit-authors--edit-author-message":"Modify the author :","space-edit-authors--add-author-error-message":"There is already an author with this name.","index-student--title":"The platform to promote real-time collaboration","index-student--wrapper-text":"A private space to share photos and messages <br> with your students, colleagues or friends.","index-student--code":"Private space","index-student--code-input-placeholder":"Enter an access code","index-student--visited-title":"Recently visited :","index-student--delete-recent":"(delete)","index-student--public-spaces-title":"Public spaces","index-student--button-code-link":"Validate","index-student--space-doesnt-exist-message":"This space does not exist.\nMake sure to respect the upper and lower case.","index-student--create-your-space-1":"Have you tried","index-student--create-your-space-2":"Beekee Live","index-student--create-your-space-3":" to promote real-time collaboration with your students?","index-student--privacy":"Privacy","index-student--about-us":"About us","index-teacher--spaces-title":"Your wheels","index-teacher--no-space":"You have not created a wheel yet.","index-teacher--button-submit-space":"Create a new wheel","index-teacher--shutdown":"Shutdown","index-teacher--shutdown-message":"Do you really want to shutdown the box ?","index-teacher--shutdown-confirm":"The box will shutdown in a few seconds...","update--reboot-confirm":"The box will reboot in a few seconds...","space-page--hide-panel":"Hide","space-page--code-panel-title":"Space's access code :","space-page--code-panel-description":"Spread this code for others to join you:","space-page--pinned-title":"Pinned","space-page--post-order":"Sort","space-page--post-order-asc":"Newest first","space-page--post-order-desc":"Older first","space-page--no-post":"There are no posts to display yet.","space-submit--page-title":"Create a space","space-submit--space-name":"Name of the space","space-submit--button-submit":"Create","space-submit--button-cancel":"Cancel","space-users--page-title":"Want to change your name ?","space-users-first-connection--page-title":"What is your name ?","space-users--page-description":"It will be used to identify your contributions","space-users--input-choose-author-placeholder":"Type a name...","space-users--submit-author":"Validate","space-users--user-exist":"The user %s already exists. Connect with this name ?","space-sidebar--home":"Home","space-sidebar--live-feed":"Live feed","space-sidebar--categories":"CATEGORIES","space-sidebar--add-category":"Add","space-sidebar--authors":"AUTHORS","space-sidebar--lessons":"Lessons","space-sidebar--resources":"Resources","space-submit--create-space":"Create a new wheel","space-submit--create-space-placeholer":"Wheel name","space-sidebar--create-own-space-1":"Create your own space","space-sidebar--create-own-space-2":"for free!","space-sidebar--privacy":"Privacy","space-sidebar--about-us":"About us","header--back":"Back","header--admin-access":"Teacher Access","header--register":"Create an account","header--login":"Log in","header--exit-message":"Leave this wheel ?","menu--show-all":"Show all","menu--favorites":"My favorites","menu--files":"Files","menu--images":"Images","menu--categories":"Categories","menu--authors":"Authors","menu--tags":"Keywords","menu--code":"Access code","post-edit--submit-button":"Edit","post-item--remove-pin":"Remove pin","post-item--add-pin":"Pin on top","post-item--remove-favorites":"Remove from my favorites","post-item--add-favorites":"Add to my favorites","post-item--delete-post-confirm":"Delete the post ?","post-item--delete-comment-confirm":"Delete the comment ?","post-submit--body-placeholder":"Say something...","post-submit--tags-placeholder":"Add Keywords...","post-submit--select-category":"Select a category","post-submit--no-category":"No category","post-submit--delete-image":"Delete the image","post-submit--confirm-delete-image":"Delete the image ?\nThis action is irreversible.","post-submit--confirm-delete-file":"Delete the file ?\nThis action is irreversible.","post-submit--submit-button":"Send","user-settings--page-title":"User settings","user-settings--confirm-logout":"Are you sure you want to sign out ?","user-settings--change-password":"Change password","user-settings--logout":"Sign out","user-settings--change-password-old-message":"Current Password :","user-settings--change-password-new-message":"New Password :","user-settings--change-password-confirm-message":"Your Password has been changed.","space-header--leave":"Leave this wheel","space-header--settings":"Settings","post--edit":"Edit","post--delete":"Delete","home--title":"Home","home--space-code-message":"<strong>Bzz!</strong> Spread this code for others to join you:","home--submit-button":"Add a section","home-post--order-up":"Up","home-post--order-down":"Down","home-post-delete--title":"Delete this section","home-post-delete--confirm":"Delete this section ?","home-post-edit--title":"Edit section","home-post-submit--title":"Add a section","home-post-submit--placeholder":"Title of the section","home-post-submit--confirm-toast":"The new section has been added.","modal--close":"Close","modal--cancel":"Cancel","modal--delete":"Delete","modal--submit":"Submit","modal--save":"Save changes","lessons--title":"Lessons","lessons--subtitle":"Articulate Storyline materials","lessons--submit-button":"Add a lesson","lessons-post--start-lesson":"Start this lesson","lessons-post-submit--title":"Add a lesson","lessons-post-submit--title-placeholder":"Title of the lesson","lessons-post-submit--description-placeholder":"Description of the lesson","lessons-post-submit--help":"Lessons must be exported in HTML5 format within Storyline.<br>The resulting folder must be zipped before being uploaded, and the .zip file must have the same name as the zipped folder it contains.","lessons-post-submit--confirm-toast":"The new lesson has been added.","lessons-post-delete--confirm":"Do you want to delete this lesson ?","lessons-post-delete--title":"Delete this lesson","lessons-post-edit--title":"Edit lesson","lessons-upload--button":"Upload a Storyline lesson","resources--title":"Resources","resources-post-edit--title":"Edit resource","resources-post-submit--title":"Add a resource","resources-post-submit--title-placeholder":"Title of the resource","resources-post-submit--description-placeholder":"Description of the ressource","resources-post-submit--confirm-toast":"The new resource has been added.","resources--submit-button":"Add a resource","resources-category-edit--title":"Edit a category","resources-category-submit--title":"Add a category","resources-category-submit--placeholder":"Category name","live-feed--notification-panel":"new messages","live-feed--load-more":"Load more...","live-feed-category-edit--title":"Edit a category","live-feed-category-submit--title":"Add a category","live-feed-category-submit--placeholder":"Category name","live-feed-post-delete--delete-confirm":"Do you want to delete this post ?","live-feed-post-delete--title":"Delete this post","live-feed-post--add-comment":"Add a comment...","live-feed-post--nb-likes-with-me":"You and %s people","live-feed-post--like":"You like","live-feed-post--nb-likes":"people","live-feed-post-submit--add-category":"+ Add a category...","live-feed-post-edit--title":"Edit post","live-feed-delete-comment--title":"Delete comment","live-feed-delete-comment--subtitle":"Delete this comment?","wheel--click-to-spin":"Click to spin!","wheel--welcome-message-title":"Welcome to your new Wheel!","wheel--welcome-message-body":"Start by adding students.","wheel--add-students":"Add new students","wheel-settings--add-student":"Add a student","wheel-settings--students-list":"Students","wheel-settings--show-all":"Show All","wheel-settings--hide-all":"Hide All","wheel--students":"Student(s)","wheel--hidden":"hidden","wheel--show":"show","wheel--hide-student":"Hide this student","admin--users-edit":"Edit","admin--user-edit-message":"Edit the name :"};
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
    order: 1,
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
    order: 2,
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
    order: 3,
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
    order: 2,
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
    order: 4,
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
    order: 5,
    doc_user: "kolibri_userdoc.pdf",
    doc_admin: false,
    last_version: "xx",
    url: "http://kolibri.beekee.box",
    icon: "kolibri.png",
    description: "Kolibri is an open-source educational platform specially designed to provide offline access to a wide range of quality, openly licensed educational resources in low-resource contexts like rural schools, refugee camps, orphanages, and also in non-formal school programs.",
    installed: true,
    version: "0.14.7",
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
      'getVersion': function () {
        json = JSON.parse(Assets.getText("version.json"));
        return json.version;
      },
      'synchronize': function (syncGrades, syncBackups) {
        // Get IP of box
        var res;
        var scriptsPath = Meteor.settings.scriptsPath;

        if (syncGrades) {
          res = cmd("/bin/bash " + scriptsPath + "/export_grades.sh");
        }

        if (syncBackups) {
          res = cmd("/bin/bash " + scriptsPath + "/export_backup.sh");
        }

        return res;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiZmFkZU91dCIsInJlbW92ZSIsIm1vZHVsZSIsImV4cG9ydCIsIkFwcHMiLCJNb25nbyIsImxpbmsiLCJ2IiwiQ29sbGVjdGlvbiIsImFsbG93IiwiaW5zZXJ0IiwidXBkYXRlIiwidXNlcklkIiwic3BhY2UiLCJwdWJsaXNoIiwiYXBwc1B1YmxpY2F0aW9uIiwiZmluZCIsIlN5bmNocm9uaXphdGlvbnMiLCJzeW5jaHJvbml6YXRpb25zUHVibGljYXRpb24iLCJpc0FkbWluIiwiY29uc29sZSIsImxvZyIsIlJvbGVzIiwidXNlcklzSW5Sb2xlIiwidXNlciIsInJvbGVBc3NpZ25tZW50IiwicmVhZHkiLCJ1c2VycyIsImNvdW50IiwiY3JlYXRlUm9sZSIsInVubGVzc0V4aXN0cyIsImFkbWluUGFzc3dvcmQiLCJzZXR0aW5ncyIsInVzZXJuYW1lIiwicm9sZXMiLCJfIiwiZWFjaCIsImlkIiwiQWNjb3VudHMiLCJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInByb2ZpbGUiLCJuYW1lIiwibGVuZ3RoIiwiYWRkVXNlcnNUb1JvbGVzIiwiZGVmYXVsdEFwcHMiLCJjdXN0b21BcHAiLCJvbmx5VGVhY2hlciIsIm9yZGVyIiwiZG9jX3VzZXIiLCJkb2NfYWRtaW4iLCJsYXN0X3ZlcnNpb24iLCJ1cmwiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJpbnN0YWxsZWQiLCJ2ZXJzaW9uIiwiaGlkZGVuIiwiSFRUUCIsImZzIiwiTnBtIiwicmVxdWlyZSIsImV4ZWMiLCJjbWQiLCJ3cmFwQXN5bmMiLCJ3aWZpU2V0dGluZ3NQYXRoIiwiY29uZmlnUGF0aCIsInJlYWRsaW5lIiwibWV0aG9kcyIsImFkbWluSWQiLCJuZXdQYXNzd29yZCIsInNldFBhc3N3b3JkIiwiX2lkIiwiJHNldCIsImVycm9yIiwicmVzdWx0IiwibWVzc2FnZSIsInJlbW92ZVVzZXJzRnJvbVJvbGVzIiwicmVzIiwic3RvcmFnZVVzYWdlIiwidG9GaXhlZCIsInN0b3JhZ2VUb3RhbCIsInBlcmNlbnRhZ2UiLCJkYXRhIiwicmVhZEZpbGVTeW5jIiwibWF0Y2giLCJSZWdFeHAiLCJTU0lEIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsIm5ld1NTSUQiLCJlbmNvZGVkTmV3U1NJRCIsIkJ1ZmZlciIsInRvU3RyaW5nIiwibmV3RGF0YSIsIndyaXRlRmlsZVN5bmMiLCJjaGFubmVsIiwibmV3Q2hhbm5lbCIsInNlcmlhbCIsIkFQTiIsIkFQTlVzZXIiLCJBUE5QYXNzd29yZCIsImluY2x1ZGVzIiwicmVzMiIsInNjcmlwdHNQYXRoIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInN5bmNHcmFkZXMiLCJzeW5jQmFja3VwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLENBQUNDLFFBQVgsRUFBcUI7QUFDcEJDLFFBQU0sQ0FBQ0MsT0FBUCxDQUFlLFlBQWYsRUFBNkIsMk5BQTdCO0FBRUFELFFB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QUFaO0FBQXFDSixNQUFNLENBQUNJLElBQVAsQ0FBWSxzQkFBWjtBQUFvQ0osTUFBTSxDQUFDSSxJQUFQLENBQVksMkJBQVo7QUFBeUNKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHNCQUFaO0FBWWpUO0FBQ0E7QUFHQTtBQUVBO0FBR0FqQixNQUFNLENBQUNRLE9BQVAsQ0FBZSxNQUFNO0FBQ3BCdUIsU0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFEb0IsQ0FLbkI7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQVZELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblx0SW5qZWN0LnJhd0hlYWQoXCJtZXRhTG9hZGVyXCIsICc8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBoZWlnaHQ9ZGV2aWNlLWhlaWdodFwiLz48bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj5cdDxtZXRhIG5hbWU9XCJtb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiPicpO1xuXG5cdEluamVjdC5yYXdCb2R5KFwiaHRtbExvYWRlclwiLCBBc3NldHMuZ2V0VGV4dCgnYXBwX2xvYWRlci5odG1sJykpO1xufVxuXG5pZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XG5cdE1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKFwiI2luamVjdC1sb2FkZXItd3JhcHBlclwiKS5mYWRlT3V0KDUwMCwgZnVuY3Rpb24oKSB7ICQodGhpcykucmVtb3ZlKCk7IH0pO1xuXHRcdH0sIDcwMCk7XG5cdH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBBcHBzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtYXBwcycpO1xuXG5cblxuQXBwcy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXG5cdC8vIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyB1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gcmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9XG59KTtcblxuLy8gUHVibGljYXRpb25zXG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxBcHBzJywgZnVuY3Rpb24gYXBwc1B1YmxpY2F0aW9uKCkge1xuICAgIHJldHVybiBBcHBzLmZpbmQoKTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuIFxuZXhwb3J0IGNvbnN0IFN5bmNocm9uaXphdGlvbnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignaG9tZS1zeW5jaHJvbml6YXRpb25zJyk7XG5cblxuXG5TeW5jaHJvbml6YXRpb25zLmFsbG93KHtcblxuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHVwZGF0ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0cmVtb3ZlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXG5cdC8vIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyB1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gcmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9XG59KTtcblxuLy8gUHVibGljYXRpb25zXG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxTeW5jaHJvbml6YXRpb25zJywgZnVuY3Rpb24gc3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uKCkge1xuICAgIHJldHVybiBTeW5jaHJvbml6YXRpb25zLmZpbmQoKTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG4vLyB2YXIgdXNlcnNEQlx0PSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy8gdmFyIGNvbGxlY3Rpb25cdD0gdXNlcnNEQi5vcGVuKCd1c2VycycpO1xuXG5cbi8vY29uc3QgZGF0YWJhc2UgPSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy9jb25zdCBjb2xsZWN0aW9uID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vL2V4cG9ydCBjb25zdCBVc2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy8gU2hhcmluZyB0aGUgc2FtZSBBY2NvdW50IGNvbGxlY3Rpb24gdGhhbiBiZWVrZWUtbGl2ZVxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXG5cdC8vIGNoZWNrIHRoYXQgdGhlIHVzZXJJZCBzcGVjaWZpZWQgaXMgYWRtaW5cbmlzQWRtaW4gPSBmdW5jdGlvbih1c2VySWQpIHtcblx0Y29uc29sZS5sb2coXCJpc2FkbWluXCIpO1xuICByZXR1cm4gUm9sZXMudXNlcklzSW5Sb2xlKE1ldGVvci51c2VyKCksICdhZG1pbicpO1xufVxuXG5cbi8vIFB1Ymxpc2ggUm9sZXMgdG8gY2xpZW50XG5NZXRlb3IucHVibGlzaChudWxsLCBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnVzZXJJZCkge1xuICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCh7ICd1c2VyLl9pZCc6IHRoaXMudXNlcklkIH0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucmVhZHkoKVxuICB9XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKCk7XG5cbn0pO1xuXG4gIC8vIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgLy8gXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAvLyAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICAvLyB9KTtcblxuLy8gU2VydmVyMiA9IEREUC5jb25uZWN0KFwiaHR0cDovL2JlZWtlZS5ib3g6ODNcIik7XG4vLyBBY2NvdW50cy5jb25uZWN0aW9uID0gU2VydmVyMjtcblxuXG4vL3ZhciBkYXRhYmFzZSA9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vL01ldGVvci51c2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy9leHBvcnQgY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignYXBwcycpO1xuXG5cbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIC8vIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgLy8gXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAvLyAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICAvLyB9KTtcbn0iLCJpbXBvcnQgeyBBcHBzIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvYXBwcy5qcyc7XG5cblxuLy8gIyMjICBDcmVhdGUgYWRtaW4gdXNlciBhdCBmaXJzdCBzdGFydCAgIyMjXG5cblxuaWYgKE1ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuXHRcblx0Ly8gQ3JlYXRlIHRoZSBhZG1pbiByb2xlXG5cdFJvbGVzLmNyZWF0ZVJvbGUoJ2FkbWluJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXG5cdHZhciBhZG1pblBhc3N3b3JkID0gTWV0ZW9yLnNldHRpbmdzLmFkbWluUGFzc3dvcmQ7XG5cblx0dmFyIHVzZXJzID0gW1xuXHRcdHt1c2VybmFtZTpcImFkbWluXCIscm9sZXM6WydhZG1pbiddfSxcblx0XTtcblxuXHRfLmVhY2godXNlcnMsIGZ1bmN0aW9uICh1c2VyKSB7XG5cdFx0dmFyIGlkO1xuXHRcdGlkID0gQWNjb3VudHMuY3JlYXRlVXNlcih7XG5cdFx0XHR1c2VybmFtZTogdXNlci51c2VybmFtZSxcblx0XHRcdGVtYWlsOiBcIkFkbWluXCIsXG5cdFx0XHRwYXNzd29yZDogYWRtaW5QYXNzd29yZCxcblx0XHRcdHByb2ZpbGU6e25hbWU6XCJBZG1pblwifVxuXHRcdH0pO1xuXG5cdFx0aWYgKHVzZXIucm9sZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Um9sZXMuYWRkVXNlcnNUb1JvbGVzKGlkLCB1c2VyLnJvbGVzKTtcblx0XHR9XG5cdH0pO1xufVxuXG5cbmlmIChBcHBzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG5cblx0dmFyIGRlZmF1bHRBcHBzID0gW1xuXHRcdHtuYW1lOlwiTGl2ZVwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjoxLCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vbGl2ZS5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtbGl2ZS5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgTGl2ZSBwcm9tb3RlIHJlYWwtdGltZSBpbnRlcmFjdGlvbiBieSBhbGxvd2luZyBsZWFybmVycyB0byBleHByZXNzIHRoZW1zZWx2ZXMgYXNraW5nIHF1ZXN0aW9ucywgcG9zdGluZyBwaG90b3Mgb3Igc2hhcmluZyBmaWxlcy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMS40XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJSZXNvdXJjZXNcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MiwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL3Jlc291cmNlcy5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtcmVzb3VyY2VzLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIldpdGggQmVla2VlIFJlc291cmNlcywgeW91IGNhbiBlYXNpbHkgc2hhcmUgZmlsZXMgd2l0aCB5b3VyIGxlYXJuZXJzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIldoZWVsXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6dHJ1ZSwgb3JkZXI6MywgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMC43XCIsIHVybDpcImh0dHA6Ly93aGVlbC5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtd2hlZWwucG5nXCIsIGRlc2NyaXB0aW9uOlwiQmVla2VlIFdoZWVsIGlzIGEgc2ltcGxlIHJhbmRvbSBwaWNrZXIgd2hlZWwgdGhhdCBhbGxvdyB5b3UgdG8gcGljayB1cCBhIHJhbmRvbSBuYW1lLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjhcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlRpbWVyXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjIsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly90aW1lci5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtdGltZXIucG5nXCIsIGRlc2NyaXB0aW9uOlwiQmVla2VlIFRpbWVyIGlzIGEgc2ltcGxlIHRpbWVyIHRoYXQgbGV0cyB5b3VyIGxlYXJuZXJzIGtub3cgaG93IG11Y2ggdGltZSB0aGV5IGhhdmUgbGVmdC5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJNb29kbGVcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo0LCBkb2NfdXNlcjpcIm1vb2RsZV90ZWFjaGVyZG9jLnBkZlwiLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9tb29kbGUuYmVla2VlLmJveFwiLCBpY29uOlwibW9vZGxlLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIk1vb2RsZSBpcyBhIGZyZWUsIG9ubGluZSBMZWFybmluZyBNYW5hZ2VtZW50IHN5c3RlbSBlbmFibGluZyBlZHVjYXRvcnMgdG8gY3JlYXRlIHRoZWlyIG93biBwcml2YXRlIHdlYnNpdGUgZmlsbGVkIHdpdGggZHluYW1pYyBjb3Vyc2VzIHRoYXQgZXh0ZW5kIGxlYXJuaW5nLCBhbnkgdGltZSwgYW55d2hlcmUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjMuMTEuMlwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiS29saWJyaVwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjUsIGRvY191c2VyOlwia29saWJyaV91c2VyZG9jLnBkZlwiLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9rb2xpYnJpLmJlZWtlZS5ib3hcIiwgaWNvbjpcImtvbGlicmkucG5nXCIsIGRlc2NyaXB0aW9uOlwiS29saWJyaSBpcyBhbiBvcGVuLXNvdXJjZSBlZHVjYXRpb25hbCBwbGF0Zm9ybSBzcGVjaWFsbHkgZGVzaWduZWQgdG8gcHJvdmlkZSBvZmZsaW5lIGFjY2VzcyB0byBhIHdpZGUgcmFuZ2Ugb2YgcXVhbGl0eSwgb3Blbmx5IGxpY2Vuc2VkIGVkdWNhdGlvbmFsIHJlc291cmNlcyBpbiBsb3ctcmVzb3VyY2UgY29udGV4dHMgbGlrZSBydXJhbCBzY2hvb2xzLCByZWZ1Z2VlIGNhbXBzLCBvcnBoYW5hZ2VzLCBhbmQgYWxzbyBpbiBub24tZm9ybWFsIHNjaG9vbCBwcm9ncmFtcy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4xNC43XCIsIGhpZGRlbjpmYWxzZX0sXG5cdF07XG5cblx0Xy5lYWNoKGRlZmF1bHRBcHBzLCBmdW5jdGlvbiAoZGVmYXVsdEFwcHMpIHtcblx0XHRBcHBzLmluc2VydChkZWZhdWx0QXBwcyk7XG5cdH0pO1xufSIsImltcG9ydCB7IEhUVFAgfSBmcm9tICdtZXRlb3IvaHR0cCdcblxuTWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24oKSB7XG5cblx0aWYgKE1ldGVvci5pc1NlcnZlcikge1xuXG5cdHZhciBmcyA9IE5wbS5yZXF1aXJlKCdmcycpO1xuXHRleGVjID0gTnBtLnJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5leGVjOyAvLyBObyBpZGVhIHdoYXQgaXMgdGhpcyA/XG5cdGNtZCA9IE1ldGVvci53cmFwQXN5bmMoZXhlYyk7XG5cblx0dmFyIHdpZmlTZXR0aW5nc1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Mud2lmaVNldHRpbmdzUGF0aDtcblx0dmFyIGNvbmZpZ1BhdGggPSBNZXRlb3Iuc2V0dGluZ3MuY29uZmlnUGF0aDtcblx0Y29uc3QgcmVhZGxpbmUgPSByZXF1aXJlKCdyZWFkbGluZScpO1xuXG5cblx0TWV0ZW9yLm1ldGhvZHMoe1xuXG5cdFx0J2FkbWluU2V0TmV3UGFzc3dvcmQnOiBmdW5jdGlvbihhZG1pbklkLCB1c2VySWQsIG5ld1Bhc3N3b3JkKSB7IC8vIEFkbWluIGNhbiBmb3JjaWJseSBjaGFuZ2UgdGhlIHBhc3N3b3JkIGZvciBhIHVzZXJcblx0XHRcdGlmIChSb2xlcy51c2VySXNJblJvbGUoYWRtaW5JZCwgJ2FkbWluJykpIHtcblx0XHRcdFx0QWNjb3VudHMuc2V0UGFzc3dvcmQodXNlcklkLCBuZXdQYXNzd29yZCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnY3JlYXRlQWNjb3VudCc6IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCwgcHJvZmlsZSkge1xuXHRcdFx0cmV0dXJuIEFjY291bnRzLmNyZWF0ZVVzZXIoe2VtYWlsOmVtYWlsLHBhc3N3b3JkOnBhc3N3b3JkLHByb2ZpbGU6cHJvZmlsZX0pOyAvLyBDYWxsYmFjayBpcyBub3Qgc3VwcG9ydGVkIG9uIHNlcnZlci1zaWRlXG5cdFx0fSxcblx0XHQnZWRpdEFjY291bnQnOiBmdW5jdGlvbih1c2VySWQsIGVtYWlsLCBwYXNzd29yZCwgcHJvZmlsZSkge1xuXHRcdFx0TWV0ZW9yLnVzZXJzLnVwZGF0ZSh7X2lkOiB1c2VySWR9LCB7XG5cdCAgXHRcdFx0JHNldDoge1xuXHQgICAgXHRcdFx0J2VtYWlscy4wLmFkZHJlc3MnOiBlbWFpbCxcblx0ICAgIFx0XHRcdHByb2ZpbGU6IHByb2ZpbGVcblx0ICBcdFx0XHR9XG5cdFx0XHR9KTtcdFxuXHRcdFx0aWYgKHBhc3N3b3JkKSB7XG5cdFx0XHRcdEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgcGFzc3dvcmQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2RlbGV0ZVVzZXInOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdE1ldGVvci51c2Vycy5yZW1vdmUodXNlcklkLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHdoZW4gZGVsZXRpbmcgdXNlciA6IFwiK2Vycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdhZGRBZG1pblJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsICdhZG1pbicpO1xuXHRcdH0sXG5cdFx0J3JlbW92ZUFkbWluUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMucmVtb3ZlVXNlcnNGcm9tUm9sZXModXNlcklkLCAnYWRtaW4nKTtcblx0XHR9LFxuXHRcdC8vICdnZXRVc2VkU3BhY2UnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciByZXM7XG5cdFx0Ly8gXHRyZXMgPSBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKSArIFwiLyBcIiArIGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpICsgXCIgKFwiK2NtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpK1widXNlZClcIjtcblx0XHQvLyBcdHJldHVybiByZXM7XG5cdFx0Ly8gfSxcblx0XHQnZ2V0VXNlZFNwYWNlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzID0ge307XG5cdFx0XHQvL3JlcyA9IGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpICsgXCIvIFwiICsgY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIikgKyBcIiAoXCIrY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIikrXCJ1c2VkKVwiO1xuXHRcdFx0cmVzLnN0b3JhZ2VVc2FnZSA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpXG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gcmVzLnN0b3JhZ2VVc2FnZS8xMDAwMDAwO1xuXHRcdFx0cmVzLnN0b3JhZ2VVc2FnZSA9IHJlcy5zdG9yYWdlVXNhZ2UudG9GaXhlZCgyKTtcblx0XHRcdHJlcy5zdG9yYWdlVG90YWwgPSBjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKVxuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IHJlcy5zdG9yYWdlVG90YWwvMTAwMDAwMDtcblx0XHRcdHJlcy5zdG9yYWdlVG90YWwgPSByZXMuc3RvcmFnZVRvdGFsLnRvRml4ZWQoMik7XG5cdFx0XHRyZXMucGVyY2VudGFnZSA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRTU0lEJzogZnVuY3Rpb24oKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3NzaWQ9KC4qKScpKTtcbiAgXHRcdFx0dmFyIFNTSUQgPSBtYXRjaFsxXTtcbiAgXHRcdFx0U1NJRCA9IGRlY29kZVVSSUNvbXBvbmVudChTU0lELnJlcGxhY2UoLy4uL2csICclJCYnKSlcbiAgXHRcdFx0cmV0dXJuIFNTSUQ7XG5cdFx0fSxcblx0XHQnc2V0U1NJRCc6IGZ1bmN0aW9uKG5ld1NTSUQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHRjb25zdCBlbmNvZGVkTmV3U1NJRCA9IG5ldyBCdWZmZXIobmV3U1NJRCkudG9TdHJpbmcoJ2hleCcpOyAvLyBDb252ZXJ0IGludG8gSGV4XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnc3NpZD0oLiopJykpWzFdLCBlbmNvZGVkTmV3U1NJRCk7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFdpZmlQYXNzd29yZCc6IGZ1bmN0aW9uKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdwYXNzd29yZD0oLiopJykpO1xuICBcdFx0XHR2YXIgcGFzc3dvcmQgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIHBhc3N3b3JkO1xuXHRcdH0sXG5cdFx0J3NldFdpZmlQYXNzd29yZCc6IGZ1bmN0aW9uKG5ld1Bhc3N3b3JkKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdwYXNzd29yZD0oLiopJykpWzFdLCBuZXdQYXNzd29yZCk7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFdpZmlDaGFubmVsJzogZnVuY3Rpb24oKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpKTtcbiAgXHRcdFx0dmFyIGNoYW5uZWwgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIGNoYW5uZWw7XG5cdFx0fSxcblx0XHQnc2V0V2lmaUNoYW5uZWwnOiBmdW5jdGlvbihuZXdDaGFubmVsKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdjaGFubmVsPSguKiknKSlbMV0sIG5ld0NoYW5uZWwpO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRTZXJpYWwnOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ1NFUklBTD0oLiopJykpO1xuICBcdFx0XHR2YXIgc2VyaWFsID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBzZXJpYWw7XG5cdFx0fSxcblx0XHQnZ2V0QVBOJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49KC4qKScpKTtcbiAgXHRcdFx0dmFyIEFQTiA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gQVBOO1xuXHRcdH0sXG5cdFx0J2dldEFQTlVzZXInOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9VU0VSTkFNRT0oLiopJykpO1xuICBcdFx0XHR2YXIgQVBOVXNlciA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gQVBOVXNlcjtcblx0XHR9LFxuXHRcdCdnZXRBUE5QYXNzd29yZCc6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1BBU1NXT1JEPSguKiknKSk7XG4gIFx0XHRcdHZhciBBUE5QYXNzd29yZCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gQVBOUGFzc3dvcmQ7XG5cdFx0fSxcblx0XHQnc2V0QVBOJzogZnVuY3Rpb24oQVBOLCB1c2VyLCBwYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOPS4qJykpLCAnQVBOPScrQVBOKTtcbiAgXHRcdFx0Ly8gdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49KC4qKScpKVsxXSwgQVBOKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOVXNlcic6IGZ1bmN0aW9uKEFQTlVzZXIpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9VU0VSTkFNRT0uKicpKSwgJ0FQTl9VU0VSTkFNRT0nK0FQTlVzZXIpO1xuICBcdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J3NldEFQTlBhc3N3b3JkJzogZnVuY3Rpb24oQVBOUGFzc3dvcmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9QQVNTV09SRD0uKicpKSwgJ0FQTl9QQVNTV09SRD0nK0FQTlBhc3N3b3JkKTtcbiAgXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRSZW1vdGVTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzeXN0ZW1jdGwgaXMtYWN0aXZlIHJlbW90ZS1pb3Quc2VydmljZSA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyAxIHx8IGVjaG8gMFwiKTtcblx0XHRcdGlmIChyZXNbMF0gPT0gXCIxXCIpIHsgLy8gWzBdIGlzIGEgaGFjayBiZWNhdXNlIHRoZSByZXN1bHQgcmVzIGhhcyBvbmUgZXh0cmEgY2hhcmFjdGVyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyB3aWZpLWFwLmNvbmZpZyBnZXQgc2hhcmUuZGlzYWJsZWRcIik7XG5cblx0XHRcdGlmIChyZXMuaW5jbHVkZXMoXCJ0cnVlXCIpKSB7XG5cdFx0XHRcdHJlcyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBcblx0XHRcdFx0cmVzID0gdHJ1ZTtcblx0XHRcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnYWN0aXZhdGVJbnRlcm5ldFNoYXJpbmcnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHdpZmktYXAuY29uZmlnIHNldCBzaGFyZS5kaXNhYmxlZD1mYWxzZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZGlzYWN0aXZhdGVJbnRlcm5ldFNoYXJpbmcnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHdpZmktYXAuY29uZmlnIHNldCBzaGFyZS5kaXNhYmxlZD10cnVlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdhY3RpdmF0ZVJlbW90ZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0YXJ0IHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdkaXNhY3RpdmF0ZVJlbW90ZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGRpc2FibGUgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRQaUp1aWNlU3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0dmFyIHNjcmlwdHNQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnNjcmlwdHNQYXRoO1xuXHRcdFx0cmVzID0gY21kKFwicHl0aG9uMyBcIitzY3JpcHRzUGF0aCtcIi9waWp1aWNlX3N0YXR1cy5weVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwicHl0aG9uMyAvaG9tZS91YnVudHUvc2NyaXB0cy9waWp1aWNlX3N0YXR1cy5weVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0RXRoMElQJzogZnVuY3Rpb24oKSB7IC8vIEdldCBJUCBvZiBib3hcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwicmVzdWx0IDogXCIrXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcXFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cblx0XHRcdC8vY29uc29sZS5sb2coXCJpcCA6IFwiK1wiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgXCIraW50ZXJmYWNlK1wiIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0V3dhbjBJUCc6IGZ1bmN0aW9uKCkgeyAvLyBHZXQgSVAgb2YgYm94XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcInJlc3VsdCA6IFwiK1wiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgd3dhbjAgfCBncmVwIFxcXCJpbmV0XFxcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiaXAgOiBcIitcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIFwiK2ludGVyZmFjZStcIiAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFZlcnNpb24nOiBmdW5jdGlvbigpIHtcblx0XHRcdGpzb24gPSBKU09OLnBhcnNlKEFzc2V0cy5nZXRUZXh0KFwidmVyc2lvbi5qc29uXCIpKTtcblx0XHRcdHJldHVybiBqc29uLnZlcnNpb247XG5cdFx0fSxcblx0XHQnc3luY2hyb25pemUnOiBmdW5jdGlvbihzeW5jR3JhZGVzLCBzeW5jQmFja3VwcykgeyAvLyBHZXQgSVAgb2YgYm94XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0dmFyIHNjcmlwdHNQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnNjcmlwdHNQYXRoO1xuXHRcdFx0aWYgKHN5bmNHcmFkZXMpIHtcblx0XHRcdFx0cmVzID0gY21kKFwiL2Jpbi9iYXNoIFwiK3NjcmlwdHNQYXRoK1wiL2V4cG9ydF9ncmFkZXMuc2hcIik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc3luY0JhY2t1cHMpIHtcblx0XHRcdFx0cmVzID0gY21kKFwiL2Jpbi9iYXNoIFwiK3NjcmlwdHNQYXRoK1wiL2V4cG9ydF9iYWNrdXAuc2hcIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH1cblx0fSk7XG59XG59KTsiLCIvLyBNZXRlb3IucHVibGlzaCgnYWxsQXBwcycsIGZ1bmN0aW9uKCkge1xuLy8gXHRyZXR1cm4gQXBwcy5maW5kKHt9KTtcbi8vIH0pO1xuXG4vLyBNZXRlb3IucHVibGlzaChcInVzZXJzXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCh7fSwge2ZpZWxkczp7Y3JlYXRlZEF0OiB0cnVlLCBwcm9maWxlOiB0cnVlLCBlbWFpbHM6IHRydWUsIHVzZXJuYW1lOiB0cnVlfX0pO1xuLy8gfSk7XG5cblxuICBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgfSk7IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5cbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvYXBwcy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS91c2Vycy5qcyc7XG5cbmltcG9ydCAnLi4vc2VydmVyL2ZpeHR1cmVzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL21ldGhvZHMuanMnO1xuaW1wb3J0ICcuLi9zZXJ2ZXIvcHVibGljYXRpb25zLmpzJztcbmltcG9ydCAnLi4vbGliL2FwcF9sb2FkZXIuanMnO1xuXG5cbi8vaW1wb3J0IHtERFB9IGZyb20gJ21ldGVvci9kZHAnO1xuLy9pbXBvcnQge0FjY291bnRzfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSc7XG5cblxuLy8gaW1wb3J0ICcuLi9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2ZpeHR1cmVzLmpzJztcblxuLy8gaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9maXh0dXJlcy5qcyc7XG5cblxuTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuXHRjb25zb2xlLmxvZyhcIm1ldGVvciBzdGFydGVkLi4uXCIpO1xuXG5cblxuICAvLyBjb2RlIHRvIHJ1biBvbiBzZXJ2ZXIgYXQgc3RhcnR1cFxuXG4gLy8gIFNlcnZlcjIgPSBERFAuY29ubmVjdChcImh0dHA6Ly9iZWVrZWUuYm94OjgzXCIpO1xuXHQvLyBBY2NvdW50cy5jb25uZWN0aW9uID0gU2VydmVyMjtcblx0Ly8gY29uc29sZS5sb2coXCJvbiBjb25uZWN0ZS4uLlwiKTtcbn0pO1xuIl19
