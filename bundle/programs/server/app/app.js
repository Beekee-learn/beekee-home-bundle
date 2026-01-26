var require = meteorInstall({"lib":{"i18n":{"en.i18n.json":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// lib/i18n/en.i18n.json                                                                                      //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n._enable({"helper_name":"_","i18n_files_route":"/tap-i18n","preloaded_langs":[]});
TAPi18n.languages_names["en"] = ["English","English"];
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"error-message":"An error occurred : ","access-denied--page-title":"Access denied !","access-denied--login-needed":"You need to login first.","access-denied--login":"Log in","admin--page-title":"Administration","admin--spaces-list":"List of spaces","admin--spaces-title":"Title","admin--spaces-creation":"Date of creation","admin--spaces-owner":"Owner","admin--spaces-actions":"Actions","admin--spaces-open":"Open","admin--spaces-delete":"Delete","admin--users-list":"List of teacher accounts","admin--users-logins":"Login","admin--users-creation":"Date of creation","admin--users-last-connexion":"Last connection","admin--users-actions":"Actions","admin--users-change-password":"Change password","admin--users-delete":"Delete","admin--user-delete-message":"Delete this user ?","admin--user-delete-confirm-message":"The user has been deleted.","admin--change-password-message":"Enter a new password for the user:","admin--change-password-confirm-message":"The password has been changed.","layout--connection-status":"Disconnected","login--page-title":"Teacher Login","login--mail":"E-mail","login--password":"Password","login--send-mail-forgot-password-link":"Reset my password","login--button-submit":"Log in","login--register":"You need an account ?","login--register-contact-admin":"Please contact your Beekee Box administrator.","login--register-link":"Create an account","login--user-not-found":"Username does not exist.","login--incorrect-password":"Password does not match.","login--send-mail-forgot-password":"An email has been sent to % s with a link to reset your password.","login--send-mail-forgot-password-error":"An error has occurred. Please contact the administrator at : vincent.widmer@beekee.ch","login--send-mail-forgot-password-error-log":"Error sending an email to recover password : %s","logout--page-title":"Sign out","not-found--page-title":"Page not found","not-found--page-description":"Sorry, we can not find a page at this address.","not-found--go-back":"Return to home","privacy--page-title":"Privacy policy","privacy--content":"<h3> Teacher Account Information </h3> <p> When you create a teacher account, you must provide a valid email address and password. These details are not public and can be modified at any time. Beekee Live will not share this information with third parties. </p> <h3> Publications, photos, users </h3> <p> Beekee Live follows a strict data protection policy. The data published on Beekee Live are hosted on servers located in Switzerland. The Beekee Live platform is therefore subject to Swiss data protection law. Publications, photographs, user names and any other data published on the platform are the exclusive property of the user. At any time, a user may choose to permanently delete his/her data. In no event will Beekee Live transmit this data to third parties. </p> <h3> Intervention of a technician </h3> <p> On request of the user, a technician can access a space and consult the data stored on it in order to solve a technical problem. </p> <h3> Cookies </h3> <p> Like many websites, Beekee Live uses cookies to facilitate the use of the platform. The information contained in these cookies is not used by Beekee Live for any other purpose. </p>","register--page-title":"Create an account","register--mail":"E-mail","register--name":"Name","register--password":"Password","register--password-confirm":"Confirm password","register--password-dont-match":"Confirm password doesn't match.","register--terms":"By registering, you accept our <a href=\"{{pathFor 'privacy'}}\" target=\"_blank\">terms and conditions</a>.<br>Your e-mail address will not be disclosed to third parties.","register--button-submit":"Sign up","register--mail-exist":"There already exists a user account with this email address.","register--mail-no-valid-message":"Please enter a valid email address.","register--mail-subject":"Your registration on Beekee Live","register--mail-content":"<h2>Welcome to <a href=\"https://live.beekee.ch\">Beekee Live</a>!</h2><h3>We’re glad you’re here. Start teaching today by creating your first Beekee Live space!</h3><p><b>Tip</b> : Did you know that you can use Beekee Live on computer, smartphone or tablet without the need of installing an app?</p><p>The <a href=\"https://www.beekee.ch\">Beekee Team</a></p>","reset-password--page-title":"Reset your password","reset-password--new-password":"New password","reset-password--button-submit":"Save","register--password-changed-message":"The password has been changed.","space-edit-categories--page-title":"Manage categories","space-edit-categories--page-description":"The categories are used to classify posts.<br />Unlike tags, categories are defined in advance by the teacher.","space-edit-categories--confirm-delete":"Delete category","space-edit--button-submit-add-category":"Add","space-edit-categories--edit-category":"Edit category","space-edit--page-title":"Settings","space-edit--subtitle-general":"General","space-edit--list-title-change-code":"Change the access code","space-edit--description-change-code":"Share this code with your students so they can join this space.","space-edit--list-title-rename-space":"Rename this space","space-edit--list-title-delete-space":"Delete this space","space-edit--list-title-content":"Content","space-edit--list-title-flow":"Continuous Flow","space-edit--description-flow":"By enabling Continuous Flow, new publications are displayed in real time.","space-edit--list-title-categories":"Manage categories","space-edit--list-title-comments":"Allow comments","space-edit--subtitle-users":"Users","space-edit--list-title-users":"Manage authors","space-edit--list-title-free-users":"Free authors","space-edit--description-free-users":"By activating \"Free authors\", users are able to enter their username when they first log in. Otherwise, they will choose from an editable list under \"Manage authors\".","space-edit--subtitle-permissions":"Permissions","space-edit--select-permissions-own":"Authors can edit their own publications","space-edit--select-permissions-all":"Authors can edit all publications","space-edit--select-permissions-none":"Nobody can add or edit publications","space-edit--subtitle-box":"Box","space-edit--list-title-update-box":"Update the Box","space-edit--list-title-ip":"IP address :","space-edit--list-title-sync":"Synchronize with the cloud","space-edit--description-sync":"Connect the beekee box using an ethernet cable to sync its content with the cloud (www.beekee.ch). This may take several minutes.","space-edit--subtitle-account":"Your account","space-edit--description-change-password":"Change your account password.","space-edit--change-code-message":"Change the access code","space-edit--change-code-confirm-message":"The access code has been changed.","space-edit--change-code-already-used-message":"This code is already assigned to another space.","space-edit--rename-space-message":"Rename this space","space-edit--rename-space-confirm-message":"This space is now called","space-edit--delete-space-message":"Permanently delete this space and its contents ?","space-edit--delete-space-confirm-message":"The space has been removed.","space-edit--sync-login-message":"To synchronize this space with the cloud, you must have an account on www.beekee.ch.\nIf this is the case, enter the username linked to your account :","space-edit--sync-error-message":"A problem has occurred. Check that the box is connected to the internet and try again.","space-edit--update-message":"Updating of the box may make the platform inaccessible for several minutes.\nDo you want to continue ?","space-edit--update-waiting-message":"The box will be updated, please wait...","space-edit--no-ip":"No IP address","space-edit--not-connected":"Not connected","space-edit--module-resources":"Distribute files to your learners","space-edit--permissions-public-space":"Allows anyone to access the contents and interact within this Space without needing an Access Code","space-edit--permissions-add-categories":"Users can add categories","space-edit--permissions-add-posts":"Users can add posts","space-edit-authors---page-title":"Manage authors","space-edit-authors---page-description":"Author names are used to identify publications.<br>For example, add the name of your students or the name of a group.","space-edit-authors---submit-button":"Add","space-edit-authors--delete-author-message":"Delete the author %s ?","space-edit-authors--edit-author-message":"Modify the author :","space-edit-authors--add-author-error-message":"There is already an author with this name.","index-student--title":"The platform to promote real-time collaboration","index-student--wrapper-text":"A private space to share photos and messages <br> with your students, colleagues or friends.","index-student--code":"Private space","index-student--code-input-placeholder":"Enter an access code","index-student--visited-title":"Recently visited :","index-student--delete-recent":"(delete)","index-student--public-spaces-title":"Public spaces","index-student--button-code-link":"Validate","index-student--space-doesnt-exist-message":"This space does not exist.\nMake sure to respect the upper and lower case.","index-student--create-your-space-1":"Have you tried","index-student--create-your-space-2":"Beekee Live","index-student--create-your-space-3":" to promote real-time collaboration with your students?","index-student--privacy":"Privacy","index-student--about-us":"About us","index-teacher--spaces-title":"Your wheels","index-teacher--no-space":"You have not created a wheel yet.","index-teacher--button-submit-space":"Create a new wheel","index-teacher--shutdown":"Shutdown","index-teacher--shutdown-message":"Do you really want to shutdown the box ?","index-teacher--shutdown-confirm":"The box will shutdown in a few seconds...","update--reboot-confirm":"The box will reboot in a few seconds...","space-page--hide-panel":"Hide","space-page--code-panel-title":"Space's access code :","space-page--code-panel-description":"Spread this code for others to join you:","space-page--pinned-title":"Pinned","space-page--post-order":"Sort","space-page--post-order-asc":"Newest first","space-page--post-order-desc":"Older first","space-page--no-post":"There are no posts to display yet.","space-submit--page-title":"Create a space","space-submit--space-name":"Name of the space","space-submit--button-submit":"Create","space-submit--button-cancel":"Cancel","space-users--page-title":"Want to change your name ?","space-users-first-connection--page-title":"What is your name ?","space-users--page-description":"It will be used to identify your contributions","space-users--input-choose-author-placeholder":"Type a name...","space-users--submit-author":"Validate","space-users--user-exist":"The user %s already exists. Connect with this name ?","space-sidebar--home":"Home","space-sidebar--live-feed":"Live feed","space-sidebar--categories":"CATEGORIES","space-sidebar--add-category":"Add","space-sidebar--authors":"AUTHORS","space-sidebar--lessons":"Lessons","space-sidebar--resources":"Resources","space-submit--create-space":"Create a new wheel","space-submit--create-space-placeholer":"Wheel name","space-sidebar--create-own-space-1":"Create your own space","space-sidebar--create-own-space-2":"for free!","space-sidebar--privacy":"Privacy","space-sidebar--about-us":"About us","header--back":"Back","header--admin-access":"Teacher Login","header--register":"Create an account","header--login":"Log in","header--exit-message":"Leave this wheel ?","menu--show-all":"Show all","menu--favorites":"My favorites","menu--files":"Files","menu--images":"Images","menu--categories":"Categories","menu--authors":"Authors","menu--tags":"Keywords","menu--code":"Access code","post-edit--submit-button":"Edit","post-item--remove-pin":"Remove pin","post-item--add-pin":"Pin on top","post-item--remove-favorites":"Remove from my favorites","post-item--add-favorites":"Add to my favorites","post-item--delete-post-confirm":"Delete the post ?","post-item--delete-comment-confirm":"Delete the comment ?","post-submit--body-placeholder":"Say something...","post-submit--tags-placeholder":"Add Keywords...","post-submit--select-category":"Select a category","post-submit--no-category":"No category","post-submit--delete-image":"Delete the image","post-submit--confirm-delete-image":"Delete the image ?\nThis action is irreversible.","post-submit--confirm-delete-file":"Delete the file ?\nThis action is irreversible.","post-submit--submit-button":"Send","user-settings--page-title":"User settings","user-settings--confirm-logout":"Are you sure you want to sign out ?","user-settings--change-name":"Change Name","user-settings--change-password":"Change Password","user-settings--logout":"Sign out","user-settings--change-name-message":"New name :","user-settings--change-password-old-message":"Current Password :","user-settings--change-password-new-message":"New Password :","user-settings--change-password-confirm-message":"Your Password has been changed.","user-settings--change-email":"Change E-mail","user-settings--change-email-message":"New e-mail address :","user-settings--change-email-confirm-message":"Your e-mail address has been changed.","user-settings--change-email-incorrect":"Not an e-mail address","space-header--leave":"Leave this wheel","space-header--settings":"Settings","post--edit":"Edit","post--delete":"Delete","home--title":"Home","home--space-code-message":"<strong>Bzz!</strong> Spread this code for others to join you:","home--submit-button":"Add a section","home-post--order-up":"Up","home-post--order-down":"Down","home-post-delete--title":"Delete this section","home-post-delete--confirm":"Delete this section ?","home-post-edit--title":"Edit section","home-post-submit--title":"Add a section","home-post-submit--placeholder":"Title of the section","home-post-submit--confirm-toast":"The new section has been added.","modal--close":"Close","modal--cancel":"Cancel","modal--delete":"Delete","modal--submit":"Submit","modal--save":"Save changes","lessons--title":"Lessons","lessons--subtitle":"Articulate Storyline materials","lessons--submit-button":"Add a lesson","lessons-post--start-lesson":"Start this lesson","lessons-post-submit--title":"Add a lesson","lessons-post-submit--title-placeholder":"Title of the lesson","lessons-post-submit--description-placeholder":"Description of the lesson","lessons-post-submit--help":"Lessons must be exported in HTML5 format within Storyline.<br>The resulting folder must be zipped before being uploaded, and the .zip file must have the same name as the zipped folder it contains.","lessons-post-submit--confirm-toast":"The new lesson has been added.","lessons-post-delete--confirm":"Do you want to delete this lesson ?","lessons-post-delete--title":"Delete this lesson","lessons-post-edit--title":"Edit lesson","lessons-upload--button":"Upload a Storyline lesson","resources--title":"Resources","resources-post-edit--title":"Edit resource","resources-post-submit--title":"Add a resource","resources-post-submit--title-placeholder":"Title of the resource","resources-post-submit--description-placeholder":"Description of the ressource","resources-post-submit--confirm-toast":"The new resource has been added.","resources--submit-button":"Add a resource","resources-category-edit--title":"Edit a category","resources-category-submit--title":"Add a category","resources-category-submit--placeholder":"Category name","live-feed--notification-panel":"new messages","live-feed--load-more":"Load more...","live-feed-category-edit--title":"Edit a category","live-feed-category-submit--title":"Add a category","live-feed-category-submit--placeholder":"Category name","live-feed-post-delete--delete-confirm":"Do you want to delete this post ?","live-feed-post-delete--title":"Delete this post","live-feed-post--add-comment":"Add a comment...","live-feed-post--nb-likes-with-me":"You and %s people","live-feed-post--like":"You like","live-feed-post--nb-likes":"people","live-feed-post-submit--add-category":"+ Add a category...","live-feed-post-edit--title":"Edit post","live-feed-delete-comment--title":"Delete comment","live-feed-delete-comment--subtitle":"Delete this comment?","wheel--click-to-spin":"Click to spin!","wheel--welcome-message-title":"Welcome to your new Wheel!","wheel--welcome-message-body":"Start by adding students.","wheel--add-students":"Add new students","wheel-settings--add-student":"Add a student","wheel-settings--students-list":"Students","wheel-settings--show-all":"Show All","wheel-settings--hide-all":"Hide All","wheel--students":"Student(s)","wheel--hidden":"hidden","wheel--show":"show","wheel--hide-student":"Hide this student","admin--users-edit":"Edit","admin--user-edit-message":"Edit the name :"};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fr.i18n.json":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// lib/i18n/fr.i18n.json                                                                                      //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["fr"] = ["French (France)","Français"];
if(_.isUndefined(TAPi18n.translations["fr"])) {
  TAPi18n.translations["fr"] = {};
}

if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {
  TAPi18n.translations["fr"][namespace] = {};
}

_.extend(TAPi18n.translations["fr"][namespace], {"error-message":"Une erreur est survenue : ","access-denied--page-title":"Accès refusé !","access-denied--login-needed":"Vous devez d'abord vous connecter","access-denied--login":"Se connecter","admin--page-title":"Administration","admin--spaces-list":"Liste des espaces","admin--spaces-title":"Titre","admin--spaces-creation":"Date de création","admin--spaces-owner":"Propriétaire","admin--spaces-actions":"Actions","admin--spaces-open":"Ouvrir","admin--spaces-delete":"Supprimer","admin--users-list":"Liste des comptes enseignants","admin--users-logins":"Identifiant","admin--users-creation":"Date de création","admin--users-last-connexion":"Dernière connexion","admin--users-actions":"Actions","admin--users-change-password":"Changer le mot de passe","admin--users-delete":"Supprimer","admin--user-delete-message":"Supprimer cet utilisateur ?","admin--user-delete-confirm-message":"L'utilisateur a été supprimé","admin--change-password-message":"Entrez un nouveau mot de passe pour l'utilisateur :","admin--change-password-confirm-message":"Le mot de passe a bien été changé.","layout--connection-status":"Déconnecté","login--page-title":"Accès enseignant","login--mail":"E-mail","login--password":"Mot de passe","login--send-mail-forgot-password-link":"Réinitialiser mon mot de passe","login--button-submit":"S'identifier","login--register":"Vous n'avez pas encore de compte ?","login--register-contact-admin":"Contactez l'administrateur de la Beekee Box.","login--register-link":"Créez un compte","login--user-not-found":"L'utilisateur n'existe pas.","login--incorrect-password":"Le mot de passe n'est pas correct.","login--send-mail-forgot-password":"Un e-mail a été envoyé à l'adresse %s comprenant un lien pour réinitialiser votre mot de passe.","login--send-mail-forgot-password-error":"Une erreur est survenue. Merci de contacter l'administrateur à l'adresse : vincent.widmer@beekee.ch","login--send-mail-forgot-password-error-log":"Erreur lors de l'envoi d'un e-mail pour récupérer un mot de passe : %s","logout--page-title":"Se déconnecter","not-found--page-title":"Page introuvable","not-found--page-description":"Désolé, nous ne pouvons pas trouver une page à cette adresse.","not-found--go-back":"Revenir à l'accueil","privacy--page-title":"Politique de confidentialité","privacy--content":"<h3>Informations sur les comptes enseignants</h3><p>Lorsque vous crééz un compte « enseignant », vous devez fournir une adresse e-mail valide ainsi qu’un mot de passe. Ces données ne sont pas publiques et peuvent être modifiées à tout moment. Beekee Live ne divulguera en aucun cas ces informations à des tiers.</p><h3>Publications, photos, utilisateurs</h3><p>Beekee Live suit une politique de protection des données stricte. Les données publiées sur Beekee Live sont hébergées sur des serveurs localisés en Suisse. La plateforme Beekee Live est donc soumise au droit suisse sur la protection des données.Les publications, photographies, noms d’utilisateurs et toutes autres données publiées sur la plateforme sont la propriété exclusive de l’utilisateur. À tout moment, il peut choisir de supprimer définitivement ces données. En aucun cas Beekee Live ne transmettra ces données à des tiers.</p><h3>Intervention d’un technicien</h3><p>Sur demande de l’utilisateur, un technicien peut accéder à un espace et consulter les données qui s’y trouvent pour résoudre un problème technique.</p><h3>Cookies</h3><p>Comme de nombreux sites internet, Beekee Live utilise des cookies pour faciliter l’utilisation de la plateforme. Les informations contenues dans ces cookies ne sont pas utilisées par Beekee Live dans un autre but.</p>","register--page-title":"Créer un compte","register--mail":"E-mail","register--name":"Nom","register--password":"Mot de passe","register--password-confirm":"Confirmez le mot de passe","register--password-dont-match":"Les mots de passe de sont pas identiques.","register--terms":"En vous enregistrant, vous acceptez notre <a href=\"{{pathFor 'privacy'}}\" target=\"_blank\">politique de confidentialité</a>.<br>Votre adresse e-mail ne sera pas transmise à des tiers.","register--button-submit":"S'enregistrer","register--mail-exist":"Un compte lié à cet e-mail existe déjà.","register--mail-no-valid-message":"Merci d'entrer une adresse e-mail valide.","register--mail-subject":"Votre inscription sur Beekee Live","register--mail-content":"<h2>Bienvenue sur <a href=\"https://live.beekee.ch\">Beekee Live</a>!</h1><h3>Nous sommes fiers de vous compter parmi nous. Commencez dès aujourd'hui à enseigner en créant votre premier espace Beekee Live !</h3><p><b>Astuce</b> : Savez-vous que vous pouvez utiliser Beekee Live sur ordinateur, smartphone ou tablette sans avoir besoin d'installer une app ?</p><p>L'<a href=\"https://www.beekee.ch\">équipe Beekee</a></p>","reset-password--page-title":"Réinitialiser votre mot de passe","reset-password--new-password":"Nouveau mot de passe","reset-password--button-submit":"Enregistrer","register--password-changed-message":"Le mot de passe a été changé.","space-edit-categories--page-title":"Gérer les catégories","space-edit-categories--page-description":"Les catégories servent à classer les publications.<br />À la différence des tags, les catégories sont définies à l'avance par l'enseignant.","space-edit-categories--confirm-delete":"Supprimer la catégorie","space-edit--button-submit-add-category":"Ajouter","space-edit-categories--edit-category":"Modifier la catégorie","space-edit--page-title":"Paramètres","space-edit--subtitle-general":"Général","space-edit--list-title-change-code":"Changer le code d'accès","space-edit--description-change-code":"Transmettez le code d'accès à vos élèves pour qu'ils  rejoignent cet espace.","space-edit--list-title-rename-space":"Renommer cet espace","space-edit--list-title-delete-space":"Supprimer cet espace","space-edit--list-title-content":"Contenu","space-edit--list-title-flow":"Flux continu","space-edit--description-flow":"En activant le flux continu, les nouvelles publications s'affichent en temps réel.","space-edit--list-title-categories":"Gérer les catégories","space-edit--list-title-comments":"Autoriser les commentaires","space-edit--subtitle-users":"Utilisateurs","space-edit--list-title-users":"Gérer les auteurs","space-edit--list-title-free-users":"Auteurs libres","space-edit--description-free-users":"En activant \"Auteurs libres\", les utilisateurs entrent eux-même leur nom d'utilisateur à la première connexion. Autrement, ils choisiront parmis une liste modifiable sous \"Gérer les auteurs\".","space-edit--subtitle-permissions":"Permissions","space-edit--select-permissions-own":"Les auteurs peuvent modifier leurs propres publications","space-edit--select-permissions-all":"Les auteurs peuvent modifier toutes les publications","space-edit--select-permissions-none":"Personne ne peut ajouter ou modifier des publications","space-edit--subtitle-box":"Box","space-edit--list-title-update-box":"Mettre à jour la box","space-edit--list-title-ip":"Adresse IP :","space-edit--list-title-sync":"Syncroniser avec le cloud","space-edit--description-sync":"Branchez la beekee box à l'aide d'un câble ethernet pour syncroniser son contenu avec le cloud (www.beekee.ch). Cela peut prendre plusieurs minutes.","space-edit--subtitle-account":"Votre compte","space-edit--description-change-password":"Modifier le mot de passe de votre compte.","space-edit--change-code-message":"Changer le code d'accès","space-edit--change-code-confirm-message":"Le code d'accès a été changé.","space-edit--change-code-already-used-message":"Ce code est déjà attribué à un autre espace.","space-edit--rename-space-message":"Renommer cet espace","space-edit--rename-space-confirm-message":"Cet espace s'appelle désormais","space-edit--delete-space-message":"Effacer définitivement cet espace et son contenu ?","space-edit--delete-space-confirm-message":"L'espace a bien été supprimé.","space-edit--sync-login-message":"Pour synchroniser cet espace avec le cloud, vous devez posséder un compte sur www.beekee.ch.\nSi c'est le cas, entrez le nom d'utilisateur de votre compte :","space-edit--sync-error-message":"Un problème est survenu. Vérifiez que la box est bien connectée à internet et recommencez.","space-edit--update-message":"La mise à jour de la box peut rendre la plateforme inaccessible pendant plusieurs minutes.\nVoulez-vous continuer ?","space-edit--update-waiting-message":"La box va être mise à jour, merci de patienter...","space-edit--no-ip":"Pas d'adresse IP","space-edit--not-connected":"Non connecté","space-edit--module-resources":"Mettre à disposition des fichiers pour vos étudiants","space-edit--public-space":"Permet à n'importe qui de se connecter à cet espace sans nécessiter de code d'accès","space-edit--permissions-add-categories":"Les utilisateurs peuvent ajouter des catégories","space-edit--permissions-add-posts":"Les utilisateurs peuvent ajouter des posts","space-edit-authors---page-title":"Gérer les auteurs","space-edit-authors---page-description":"Les auteurs servent à identifier les publications.<br>Ajoutez par exemple le nom de vos élèves ou le nom d'un groupe.","space-edit-authors---submit-button":"Ajouter","space-edit-authors--delete-author-message":"Supprimer l'auteur %s ?","space-edit-authors--edit-author-message":"Modifier l'auteur :","space-edit-authors--add-author-error-message":"Il y a déjà un auteur avec ce nom.","index-student--title":"La plateforme pour soutenir la collaboration en temps réel","index-student--wrapper-text":"Un espace privé pour partager photos et messages<br>avec vos étudiants, collègues ou amis.","index-student--code":"Espace privé","index-student--code-input-placeholder":"Entrez un code d'accès","index-student--visited-title":"Récemment visité :","index-student--delete-recent":"(effacer)","index-student--public-spaces-title":"Espaces publics","index-student--button-code-link":"Valider","index-student--space-doesnt-exist-message":"Cet espace n'existe pas.\nAssurez-vous de respecter les majuscules et les minuscules.","index-student--create-your-space-1":"Avez-vous essayé","index-student--create-your-space-2":"Beekee Live","index-student--create-your-space-3":" pour promouvoir la collaboration en temps réel avec vos élèves ?","index-student--privacy":"Confidentialité","index-student--about-us":"À propos de nous","index-teacher--spaces-title":"Vos roues","index-teacher--no-space":"Vous n'avez pas encore créé de roue.","index-teacher--button-submit-space":"Créer une nouvelle roue","index-teacher--shutdown":"Éteindre","index-teacher--shutdown-message":"Voulez-vous vraiment éteindre la box ?","index-teacher--shutdown-confirm":"La box va s'éteindre dans quelques secondes...","update--reboot-confirm":"La box va redémarrer dans quelques secondes...","space-page--hide-panel":"Cacher","space-page--code-panel-title":"Code d'accès de l'espace :","space-page--code-panel-description":"Transmettez ce code pour que d'autres vous rejoignent:","space-page--pinned-title":"Épinglés","space-page--post-order":"Tri","space-page--post-order-asc":"Plus récents d'abord","space-page--post-order-desc":"Plus anciens d'abord","space-page--no-post":"Il n'y pas encore de publication à afficher.","space-submit--page-title":"Créer un espace","space-submit--space-name":"Nom de l'espace","space-submit--button-submit":"Créer","space-submit--button-cancel":"Annuler","space-users-first-connection--page-title":"Quel est votre nom ?","space-users--page-title":"Vous voulez changer de nom d'utilisateur ?","space-users--page-description":"Il sera utilisé pour identifier vos contributions","space-users--input-choose-author-placeholder":"Entrez un nom...","space-users--submit-author":"Valider","space-users--user-exist":"L'utilisateur %s existe déjà. Se connecter avec ce nom ?","space-sidebar--home":"Accueil","space-sidebar--live-feed":"Direct","space-sidebar--categories":"CATEGORIES","space-sidebar--add-category":"Ajouter","space-sidebar--authors":"AUTEURS","space-sidebar--lessons":"Leçons","space-sidebar--resources":"Ressources","space-sidebar--create-own-space-1":"Créé votre propre espace","space-sidebar--create-own-space-2":"gratuitement !","space-sidebar--privacy":"Confidentialité","space-sidebar--about-us":"À propos de nous","space-submit--create-space":"Créer une nouvelle roue","space-submit--create-space-placeholer":"Nom de la roue","header--back":"Retour","header--admin-access":"Accès enseignant","header--register":"Créer un comte","header--login":"S'identifier","header--exit-message":"Quitter cette roue ?","menu--show-all":"Tout afficher","menu--favorites":"Mes favoris","menu--files":"Fichiers","menu--images":"Images","menu--categories":"Catégories","menu--authors":"Auteurs","menu--tags":"Mots-clés","menu--code":"Code d'accès","post-edit--submit-button":"Modifier","post-item--remove-pin":"Retirer l'épingle","post-item--add-pin":"Épingler en haut","post-item--remove-favorites":"Retirer de mes favoris","post-item--add-favorites":"Ajouter à mes favoris","post-item--delete-post-confirm":"Effacer la publication ?","post-item--delete-comment-confirm":"Effacer le commentaire ?","post-submit--body-placeholder":"Dites quelque chose...","post-submit--tags-placeholder":"Ajoutez des mots-clés...","post-submit--select-category":"Sélectionnez une catégorie","post-submit--no-category":"Aucune catégorie","post-submit--delete-image":"Supprimer l'image","post-submit--confirm-delete-image":"Effacer l'image ?\nCette action est irréversible.","post-submit--confirm-delete-file":"Effacer le fichier ?\nCette action est irréversible.","post-submit--submit-button":"Envoyer","user-settings--page-title":"Paramètres de l'utilisateur","user-settings--confirm-logout":"Voulez-vous vraiment vous déconnecter ?","user-settings--change-password":"Changer mot de passe","user-settings--logout":"Se déconnecter","user-settings--change-password-old-message":"Mot de passe actuel :","user-settings--change-password-new-message":"Nouveau mot de passe :","user-settings--change-password-confirm-message":"Votre mot de passe a été changé.","space-header--leave":"Quitter cette roue","space-header--settings":"Paramètres","post--edit":"Éditer","post--delete":"Supprimer","home--title":"Accueil","home--space-code-message":"<strong>Bzz!</strong> Partagez ce code pour que d'autres se joignent à vous:","home--submit-button":"Ajouter une section","home-post--order-up":"Monter","home-post--order-down":"Descendre","home-post-delete--title":"Supprimer cette section","home-post-delete--confirm":"Supprimer cette section ?","modal--close":"Fermer","modal--cancel":"Annuler","modal--delete":"Supprimer","modal--save":"Sauver les changements","modal--submit":"Soumettre","home-post-edit--title":"Modifier la section","home-post-submit--title":"Ajouter une section","home-post-submit--placeholder":"Titre de la section","home-post-submit--confirm-toast":"La section a été ajoutée.","lessons--title":"Leçons","lessons--subtitle":"E-learning Articulate Storyline","lessons--submit-button":"Ajouter une leçon","lessons-post--start-lesson":"Lancer cette leçon","lessons-post-submit--title":"Ajouter une leçon","lessons-post-submit--title-placeholder":"Titre de la leçon","lessons-post-submit--description-placeholder":"Description de la leçon","lessons-post-submit--help":"Les leçons doivent être exportées au format HTML5 à partir du logiciel Storyline.<br>Le dossier résultant doit être zippé avant d'être uploadé, et le .zip doit avoir le même nom que le dossier qu'il contient.","lessons-post-submit--confirm-toast":"La leçon a été ajoutée.","lessons-post-delete--confirm":"Voulez-vous supprimer cette leçon ?","lessons-post-delete--title":"Supprimer cette leçon","lessons-post-edit--title":"Editer une leçon","lessons-upload--button":"Uploader une leçon Storyline","resources--title":"Ressources","resources-post-edit--title":"Editer une resource","resources-post-submit--title":"Ajouter une ressource","resources-post-submit--title-placeholder":"Titre de la ressource","resources-post-submit--description-placeholder":"Description de la ressource","resources-post-submit--confirm-toast":"La ressource a été ajoutée.","resources--submit-button":"Ajouter une ressource","resources-category-edit--title":"Éditer une catégorie","resources-category-submit--title":"Ajouter une catégorie","resources-category-submit--placeholder":"Nom de la catégorie","live-feed--notification-panel":"nouveau(x) message(s)","live-feed--load-more":"Charger plus...","live-feed-category-edit--title":"Éditer une catégorie","live-feed-category-submit--title":"Ajouter une catégorie","live-feed-category-submit--placeholder":"Nom de la catégorie","live-feed-post-delete--delete-confirm":"Voulez-vous supprimer ce post ?","live-feed-post-delete--title":"Supprimer ce post","live-feed-post--add-comment":"Ajoutez un commentaire...","live-feed-post--nb-likes-with-me":"Vous et %s personne(s)","live-feed-post--like":"Vous aimez","live-feed-post--nb-likes":"personne(s)","live-feed-post-submit--add-category":"+ Ajouter une catégorie...","live-feed-post-edit--title":"Éditer un post","live-feed-delete-comment--title":"Supprimer un commentaire","live-feed-delete-comment--subtitle":"Supprimer ce commentaire ?","wheel--click-to-spin":"Cliquer pour tourner !","wheel--welcome-message-title":"Bienvenue sur votre nouvelle roue !","wheel--welcome-message-body":"Commencez par ajouter des élèves.","wheel--add-students":"Ajouter des élèves","wheel-settings--add-student":"Ajouter un élève","wheel-settings--students-list":"Élèves","wheel-settings--show-all":"Afficher tous","wheel-settings--hide-all":"Masquer tous","wheel--students":"élève(s)","wheel--hidden":"masqué(s)","wheel--show":"afficher","wheel--hide-student":"Masquer cet étudiant","admin--users-edit":"Éditer","admin--user-edit-message":"Modifiez le nom :"});
TAPi18n._registerServerTranslator("fr", namespace);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"app_loader.js":function module(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// lib/app_loader.js                                                                                          //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
if (Meteor.isServer) {
  Inject.rawHead("metaLoader", '<meta name="viewport" content="initial-scale=1.0, user-scalable=0, width=device-width, height=device-height"/><meta name="apple-mobile-web-app-capable" content="yes">	<meta name="mobile-web-app-capable" content="yes">');
  Inject.rawBody("htmlLoader", Assets.getText('app_loader.html'));
}
if (Meteor.isClient) {
  Meteor.startup(function () {
    setTimeout(function () {
      $('.index--icon').addClass('animated-icon');
      $("#inject-loader-wrapper").fadeOut(500, function () {
        $(this).remove();
        $('.index--icon').removeClass('animated-icon');
      });
    }, 500);
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"i18n.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// lib/i18n.js                                                                                                //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
module.export({
  TAPi18n: () => TAPi18n
});
let TAPi18n;
module.link("meteor/tap:i18n", {
  TAPi18n(v) {
    TAPi18n = v;
  }
}, 0);
// Initialize TAPi18n on client startup
if (Meteor.isClient) {
  Meteor.startup(() => {
    // Set the default language
    TAPi18n.setLanguage('en');
    console.log('TAPi18n initialized with language: en');
  });
}

// Export for use in other files if needed
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"api":{"apps.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/api/apps.js                                                                                        //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  }

  // insert: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },

  // update: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },

  // remove: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); }
});

// Publications

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('allApps', function appsPublication() {
    return Apps.find();
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"synchronizations.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/api/synchronizations.js                                                                            //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  }

  // insert: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },

  // update: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },

  // remove: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); }
});

// Publications

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('allSynchronizations', function synchronizationsPublication() {
    return Synchronizations.find();
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/api/users.js                                                                                       //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  };

  // Publish Roles to client
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
  });

  // Meteor.publish('allUsers', function () {
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"fixtures.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// server/fixtures.js                                                                                         //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
let Apps;
module.link("../imports/api/apps.js", {
  Apps(v) {
    Apps = v;
  }
}, 0);
// Create the roles
Roles.createRole('manager', {
  unlessExists: true
});

// ###  Create admin user at first start  ###

if (Meteor.users.find().count() === 0) {
  // Create the role
  Roles.createRole('manager', {
    unlessExists: true
  });
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
      password: "admin",
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
  },
  // {name:"Etherpad", customApp:true, onlyTeacher:false, order:5, doc_user:false, doc_admin:false, last_version:"xx", url:"http://etherpad.beekee.box", icon:"etherpad.png", description:"Etherpad allows you to edit documents collaboratively in real-time, much like a live multi-player editor that runs in your browser. Write articles, press releases, to-do lists, etc. together with your friends, fellow students or colleagues, all working on the same document at the same time.", installed:true, version: "1.8.14", hidden:false},
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// server/methods.js                                                                                          //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
let HTTP;
module.link("meteor/http", {
  HTTP(v) {
    HTTP = v;
  }
}, 0);
// API Configuration
const API_BASE_URL = process.env.BEEKEE_API_URL || 'http://127.0.0.1:5000/api/v1';
const API_TIMEOUT = 30000; // 30 seconds

/**
 * Helper function to call the API
 */
function callAPI(method, endpoint) {
  let data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const url = "".concat(API_BASE_URL).concat(endpoint);
  const options = {
    timeout: API_TIMEOUT,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  if (data) {
    options.data = data;
  }
  try {
    let result;
    switch (method.toUpperCase()) {
      case 'GET':
        result = HTTP.get(url, options);
        break;
      case 'POST':
        result = HTTP.post(url, options);
        break;
      case 'PUT':
        result = HTTP.put(url, options);
        break;
      case 'DELETE':
        result = HTTP.del(url, options);
        break;
      default:
        throw new Meteor.Error('invalid-method', "Unsupported HTTP method: ".concat(method));
    }
    if (result.statusCode >= 200 && result.statusCode < 300) {
      return result.data;
    } else {
      throw new Meteor.Error('api-error', "API returned status ".concat(result.statusCode), result.data);
    }
  } catch (error) {
    console.error("API call failed: ".concat(method, " ").concat(endpoint), error);

    // If it's already a Meteor.Error, re-throw it
    if (error.error) {
      throw error;
    }

    // Otherwise, create a new Meteor.Error
    throw new Meteor.Error('api-connection-error', "Failed to connect to API: ".concat(error.message), {
      method,
      endpoint,
      originalError: error.toString()
    });
  }
}
Meteor.startup(function () {
  if (Meteor.isServer) {
    var fs = Npm.require('fs');
    Meteor.methods({
      // =====================================================================
      // USER MANAGEMENT (unchanged - no API needed)
      // =====================================================================

      'adminSetNewPassword': function (adminId, userId, newPassword) {
        if (Roles.userIsInRole(adminId, 'admin')) {
          Accounts.setPassword(userId, newPassword);
        }
      },
      'createAccount': function (email, password, profile) {
        return Accounts.createUser({
          email: email,
          password: password,
          profile: profile
        });
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
      'changeEmail': function (email) {
        check(email, String);
        var user = Meteor.user();
        var oldemail = user.emails;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (emailReg.test(email)) {
          if (oldemail != null) {
            Accounts.removeEmail(user._id, user.emails[0].address);
          }
          Accounts.addEmail(user._id, email);
          return email;
        }
        return null;
      },
      'deleteUser': function (userId) {
        Meteor.users.remove(userId, function (error, result) {
          if (error) {
            console.log("Error when deleting user : " + error.message);
          }
        });
      },
      'addManagerRole': function (userId) {
        Roles.addUsersToRoles(userId, 'manager');
      },
      'removeManagerRole': function (userId) {
        Roles.removeUsersFromRoles(userId, 'manager');
      },
      'addAdminRole': function (userId) {
        Roles.addUsersToRoles(userId, 'admin');
      },
      'removeAdminRole': function (userId) {
        Roles.removeUsersFromRoles(userId, 'admin');
      },
      // =====================================================================
      // SYSTEM - Using API
      // =====================================================================

      /**
       * Get disk usage
       * API: GET /api/v1/system/disk/usage
       */
      'getUsedSpace': function () {
        const result = callAPI('GET', '/system/disk/usage');

        // Return in same format as original
        return {
          storageUsage: result.used_gb,
          storageTotal: result.total_gb,
          percentage: result.percentage
        };
      },
      /**
       * Get device serial number
       * API: GET /api/v1/system/serial
       */
      'getSerial': function () {
        const result = callAPI('GET', '/system/serial');
        return result.serial;
      },
      /**
       * Get Beekee OS version
       * API: GET /api/v1/system/version/os
       */
      'getBeekeeOsVersion': function () {
        const result = callAPI('GET', '/system/version/os');
        return result.version;
      },
      /**
       * Get Beekee Home version
       * API: GET /api/v1/system/version/home
       */
      'getBeekeeHomeVersion': function () {
        const result = callAPI('GET', '/system/version/home');
        return result.version;
      },
      /**
       * Get battery status
       * API: GET /api/v1/system/battery
       */
      'getBatteryStatus': function () {
        const result = callAPI('GET', '/system/battery');
        return result.status;
      },
      /**
       * Check internet connectivity
       * API: GET /api/v1/system/online
       */
      'getIsOnline': function () {
        const result = callAPI('GET', '/system/online');
        return result.online;
      },
      /**
       * Reboot system
       * API: POST /api/v1/system/reboot
       */
      'reboot': function () {
        const result = callAPI('POST', '/system/reboot');
        return result.message;
      },
      /**
       * Shutdown system
       * API: POST /api/v1/system/shutdown
       */
      'shutdown': function () {
        const result = callAPI('POST', '/system/shutdown');
        return result.message;
      },
      // =====================================================================
      // WIFI SETTINGS - Using API
      // =====================================================================

      /**
       * Get WiFi SSID
       * API: GET /api/v1/wifi/ssid
       */
      'getSSID': function () {
        const result = callAPI('GET', '/wifi/ssid');
        return result.ssid;
      },
      /**
       * Set WiFi SSID
       * API: PUT /api/v1/wifi/ssid
       */
      'setSSID': function (newSSID) {
        const result = callAPI('PUT', '/wifi/ssid', {
          ssid: newSSID
        });
        return result.message;
      },
      /**
       * Get WiFi password
       * API: GET /api/v1/wifi/password
       */
      'getWifiPassword': function () {
        const result = callAPI('GET', '/wifi/password');
        return result.password;
      },
      /**
       * Set WiFi password
       * API: PUT /api/v1/wifi/password
       */
      'setWifiPassword': function (newPassword) {
        const result = callAPI('PUT', '/wifi/password', {
          password: newPassword
        });
        return result.message;
      },
      /**
       * Get WiFi channel
       * API: GET /api/v1/wifi/channel
       */
      'getWifiChannel': function () {
        const result = callAPI('GET', '/wifi/channel');
        return result.channel;
      },
      /**
       * Set WiFi channel
       * API: PUT /api/v1/wifi/channel
       */
      'setWifiChannel': function (newChannel) {
        const result = callAPI('PUT', '/wifi/channel', {
          channel: parseInt(newChannel)
        });
        return result.message;
      },
      // =====================================================================
      // MOBILE/MODEM - Using API
      // =====================================================================

      /**
       * Get mobile operator name
       * API: GET /api/v1/mobile/operator
       */
      'getOperatorName': function () {
        const result = callAPI('GET', '/mobile/operator');
        return result.operator;
      },
      /**
       * Get signal strength (qualitative)
       * API: GET /api/v1/mobile/signal
       */
      'getSignalStrength': function () {
        const result = callAPI('GET', '/mobile/signal');
        return result.quality; // Returns: Excellent, Good, Fair, Poor, Unknown
      },
      /**
       * Get SIM card status
       * API: GET /api/v1/mobile/sim/status
       */
      'getSimCardStatus': function () {
        const result = callAPI('GET', '/mobile/sim/status');
        return result.status; // Returns: OK, No SIM card, SIM card locked, etc.
      },
      /**
       * Get SIM PIN
       * API: GET /api/v1/mobile/sim/pin
       */
      'getSimPin': function () {
        const result = callAPI('GET', '/mobile/sim/pin');
        return result.pin;
      },
      /**
       * Set SIM PIN
       * API: PUT /api/v1/mobile/sim/pin
       */
      'setSimPin': function (PIN) {
        const result = callAPI('PUT', '/mobile/sim/pin', {
          pin: PIN
        });
        return result.message;
      },
      /**
       * Get APN
       * API: GET /api/v1/mobile/apn
       */
      'getAPN': function () {
        const result = callAPI('GET', '/mobile/apn');
        return result.apn;
      },
      /**
       * Set APN (with optional user and password)
       * API: PUT /api/v1/mobile/apn
       */
      'setAPN': function (APN, user, password) {
        const data = {
          apn: APN
        };
        if (user) data.user = user;
        if (password) data.password = password;
        const result = callAPI('PUT', '/mobile/apn', data);
        return result.message;
      },
      /**
       * Get APN username
       * API: GET /api/v1/mobile/apn/user
       */
      'getAPNUser': function () {
        const result = callAPI('GET', '/mobile/apn/user');
        return result.user;
      },
      /**
       * Set APN username
       * API: PUT /api/v1/mobile/apn/user
       */
      'setAPNUser': function (APNUser) {
        const result = callAPI('PUT', '/mobile/apn/user', {
          user: APNUser
        });
        return result.message;
      },
      /**
       * Get APN password
       * API: GET /api/v1/mobile/apn/password
       */
      'getAPNPassword': function () {
        const result = callAPI('GET', '/mobile/apn/password');
        return result.password;
      },
      /**
       * Set APN password
       * API: PUT /api/v1/mobile/apn/password
       */
      'setAPNPassword': function (APNPassword) {
        const result = callAPI('PUT', '/mobile/apn/password', {
          password: APNPassword
        });
        return result.message;
      },
      /**
       * Restart mobile connection
       * API: POST /api/v1/mobile/restart
       */
      'restartMobileConnect': function () {
        const result = callAPI('POST', '/mobile/restart');
        return result.message;
      },
      // =====================================================================
      // NETWORK - Using API
      // =====================================================================

      /**
       * Get Ethernet IP
       * API: GET /api/v1/network/ip/eth0
       */
      'getEth0IP': function () {
        const result = callAPI('GET', '/network/ip/eth0');
        return result.ip;
      },
      /**
       * Get Mobile/WWAN IP
       * API: GET /api/v1/network/ip/wwan0
       */
      'getWwan0IP': function () {
        const result = callAPI('GET', '/network/ip/wwan0');
        return result.ip;
      },
      /**
       * Get internet interface
       * API: GET /api/v1/network/internet/interface
       */
      'getInternetInterface': function () {
        const result = callAPI('GET', '/network/internet/interface');
        return result.interface;
      },
      /**
       * Get internet sharing status via Ethernet
       * API: GET /api/v1/network/sharing/ethernet/status
       */
      'getInternetSharingStatusEthernet': function () {
        const result = callAPI('GET', '/network/sharing/ethernet/status');
        return {
          status: result.enabled ? 'enabled for all' : 'disabled',
          macAddress: null
        };
      },
      /**
       * Enable internet sharing via Ethernet
       * API: POST /api/v1/network/sharing/ethernet/enable
       */
      'enableInternetSharingEthernet': function (callback) {
        try {
          const result = callAPI('POST', '/network/sharing/ethernet/enable');
          if (callback) callback(null, result.message);
          return result.message;
        } catch (error) {
          if (callback) callback(error);
          throw error;
        }
      },
      /**
       * Disable internet sharing via Ethernet
       * API: POST /api/v1/network/sharing/ethernet/disable
       */
      'disableInternetSharingEthernet': function (callback) {
        try {
          const result = callAPI('POST', '/network/sharing/ethernet/disable');
          if (callback) callback(null, result.message);
          return result.message;
        } catch (error) {
          if (callback) callback(error);
          throw error;
        }
      },
      /**
       * Get internet sharing status via Mobile
       * API: GET /api/v1/network/sharing/mobile/status
       */
      'getInternetSharingStatusMobile': function () {
        const result = callAPI('GET', '/network/sharing/mobile/status');
        return {
          status: result.enabled ? 'enabled for all' : 'disabled',
          macAddress: null
        };
      },
      /**
       * Enable internet sharing via Mobile
       * API: POST /api/v1/network/sharing/mobile/enable
       */
      'enableInternetSharingMobile': function (callback) {
        try {
          const result = callAPI('POST', '/network/sharing/mobile/enable');
          if (callback) callback(null, result.message);
          return result.message;
        } catch (error) {
          if (callback) callback(error);
          throw error;
        }
      },
      /**
       * Disable internet sharing via Mobile
       * API: POST /api/v1/network/sharing/mobile/disable
       */
      'disableInternetSharingMobile': function (callback) {
        try {
          const result = callAPI('POST', '/network/sharing/mobile/disable');
          if (callback) callback(null, result.message);
          return result.message;
        } catch (error) {
          if (callback) callback(error);
          throw error;
        }
      },
      /**
       * Allow internet for specific MAC via Ethernet
       * API: POST /api/v1/network/mac-filter/ethernet
       */
      'enableInternetForMacEthernet': function (macAddress, callback) {
        try {
          const result = callAPI('POST', '/network/mac-filter/ethernet', {
            mac: macAddress
          });
          if (callback) callback(null, result.message);
          return result.message;
        } catch (error) {
          if (callback) callback(error);
          throw error;
        }
      },
      /**
       * Remove all MAC filters for Ethernet
       * API: DELETE /api/v1/network/mac-filter/ethernet
       */
      'removeAllMacFiltersForEthernet': function (callback) {
        try {
          const result = callAPI('DELETE', '/network/mac-filter/ethernet');
          if (callback) callback(null, result.message);
          return result.message;
        } catch (error) {
          if (callback) callback(error);
          throw error;
        }
      },
      /**
       * Allow internet for specific MAC via Mobile
       * API: POST /api/v1/network/mac-filter/mobile
       */
      'allowInternetForMacMobile': function (macAddress, callback) {
        try {
          const result = callAPI('POST', '/network/mac-filter/mobile', {
            mac: macAddress
          });
          if (callback) callback(null, result.message);
          return result.message;
        } catch (error) {
          if (callback) callback(error);
          throw error;
        }
      },
      /**
       * Remove all MAC filters for Mobile
       * API: DELETE /api/v1/network/mac-filter/mobile
       */
      'removeAllMacFiltersForMobile': function (callback) {
        try {
          const result = callAPI('DELETE', '/network/mac-filter/mobile');
          if (callback) callback(null, result.message);
          return result.message;
        } catch (error) {
          if (callback) callback(error);
          throw error;
        }
      },
      // =====================================================================
      // SYNC - Using API
      // =====================================================================

      /**
       * Get remote sync status
       * API: GET /api/v1/sync/remote/status
       */
      'getRemoteStatus': function () {
        const result = callAPI('GET', '/sync/remote/status');
        return result.enabled;
      },
      /**
       * Activate remote sync
       * API: POST /api/v1/sync/remote/enable
       */
      'activateRemote': function () {
        const result = callAPI('POST', '/sync/remote/enable');
        return result.message;
      },
      /**
       * Deactivate remote sync
       * API: POST /api/v1/sync/remote/disable
       */
      'disactivateRemote': function () {
        const result = callAPI('POST', '/sync/remote/disable');
        return result.message;
      },
      /**
       * Get auto-sync status
       * API: GET /api/v1/sync/auto/status
       */
      'getAutoSyncStatus': function () {
        const result = callAPI('GET', '/sync/auto/status');
        return result.enabled;
      },
      /**
       * Activate auto-sync
       * API: POST /api/v1/sync/auto/enable
       */
      'activateAutoSync': function () {
        const result = callAPI('POST', '/sync/auto/enable');
        return result.message;
      },
      /**
       * Deactivate auto-sync
       * API: POST /api/v1/sync/auto/disable
       */
      'disactivateAutoSync': function () {
        const result = callAPI('POST', '/sync/auto/disable');
        return result.message;
      },
      /**
       * Get share internet via Ethernet status
       * API: GET /api/v1/sync/share-internet/ethernet/status
       */
      'getShareInternetViaEthernetStatus': function () {
        const result = callAPI('GET', '/sync/share-internet/ethernet/status');
        return result.enabled ? 'true' : 'false';
      },
      /**
       * Get share internet via Mobile status
       * API: GET /api/v1/sync/share-internet/mobile/status
       */
      'getShareInternetViaMobileStatus': function () {
        const result = callAPI('GET', '/sync/share-internet/mobile/status');
        return result.enabled ? 'true' : 'false';
      },
      /**
       * Synchronize with cloud
       * This keeps the original HTTP call to cloud, but triggers local sync via API
       */
      'synchronize': function () {
        console.log("Starting sync...");

        // First, trigger local sync preparation via API
        try {
          callAPI('POST', '/sync/now');
        } catch (error) {
          console.log("Error triggering local sync:", error);
        }

        // Then continue with cloud sync (original code)
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
            timeout: 1200000
          },
          timeout: 1200000
        };
        try {
          var result = HTTP.post(url, options);
          var resultContent = result.content;
          return resultContent;
        } catch (e) {
          console.log("Error while trying to synchronize...", e);
          return "Error while trying to synchronize... " + e;
        }
      },
      // =====================================================================
      // LEGACY METHOD (for backward compatibility)
      // =====================================================================

      /**
       * Run arbitrary command (deprecated - should not be used with API)
       * This is kept for backward compatibility but logs a warning
       */
      'runCommand': function (password, command) {
        console.warn('WARNING: runCommand() is deprecated. Please use specific API methods instead.');
        throw new Meteor.Error('deprecated', 'runCommand() is deprecated. The API does not support arbitrary commands for security reasons.');
      }
    }); // End Meteor.methods
  } // End if Meteor.isServer
}); // End Meteor.startup
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publications.js":function module(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// server/publications.js                                                                                     //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// server/main.js                                                                                             //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }
}, 0);
let TAPi18n;
module.link("meteor/tap:i18n", {
  TAPi18n(v) {
    TAPi18n = v;
  }
}, 1);
let WebApp;
module.link("meteor/webapp", {
  WebApp(v) {
    WebApp = v;
  }
}, 2);
module.link("../imports/api/apps.js");
module.link("../imports/api/synchronizations.js");
module.link("../imports/api/users.js");
module.link("../server/fixtures.js");
module.link("../server/methods.js");
module.link("../server/publications.js");
module.link("../lib/app_loader.js");
module.link("../lib/i18n.js");
// Import i18n configuration

//import {DDP} from 'meteor/ddp';
//import {Accounts} from 'meteor/accounts-base';

// import '../imports/startup/server/fixtures.js';

// import '../imports/api/fixtures.js';

Meteor.startup(() => {
  console.log("meteor started...");

  // code to run on server at startup

  //  Server2 = DDP.connect("http://beekee.box:83");
  // Accounts.connection = Server2;
  // console.log("on connecte...");
});

// Handle captive portal redirects
WebApp.connectHandlers.use('/redirect', (req, res, next) => {
  const url = new URL(req.url, "http://".concat(req.headers.host));
  const targetUrl = url.searchParams.get('url');
  if (targetUrl) {
    // Create a redirect page that attempts to break out of captive portal
    const html = "\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Redirecting...</title>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            text-align: center;\n            padding: 50px;\n            background: #f5f5f5;\n        }\n        .container {\n            background: white;\n            padding: 30px;\n            border-radius: 10px;\n            box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n            max-width: 400px;\n            margin: 0 auto;\n        }\n        .btn {\n            background: #007bff;\n            color: white;\n            padding: 12px 24px;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n            text-decoration: none;\n            display: inline-block;\n            margin: 10px;\n        }\n        .btn:hover { background: #0056b3; }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <h2>Opening App</h2>\n        <p>Attempting to open the app in your main browser...</p>\n        <p><strong>If the app doesn't open automatically:</strong></p>\n        <ol style=\"text-align: left;\">\n            <li>Close this captive portal window</li>\n            <li>Open your regular browser</li>\n            <li>Navigate to: <code>".concat(targetUrl, "</code></li>\n        </ol>\n        <a href=\"").concat(targetUrl, "\" class=\"btn\" target=\"_blank\">Open App</a>\n        <button class=\"btn\" onclick=\"window.close()\">Close Portal</button>\n    </div>\n\n    <script>\n        // Try multiple methods to break out of captive portal\n        setTimeout(function() {\n            // Method 1: Try to open in new window\n            try {\n                var newWindow = window.open('").concat(targetUrl, "', '_blank', 'toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes');\n                if (newWindow) {\n                    setTimeout(function() { window.close(); }, 2000);\n                }\n            } catch (e) {\n                console.log('Method 1 failed:', e);\n            }\n        }, 1000);\n\n        // Method 2: Direct navigation after delay\n        setTimeout(function() {\n            window.location.href = '").concat(targetUrl, "';\n        }, 3000);\n\n        // Method 3: For mobile devices\n        if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {\n            setTimeout(function() {\n                window.location.href = 'intent://").concat(targetUrl.replace(/^https?:\/\//, ''), "#Intent;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;end';\n            }, 2000);\n        }\n    </script>\n</body>\n</html>");
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(html);
  } else {
    res.writeHead(400, {
      'Content-Type': 'text/plain'
    });
    res.end('Missing url parameter');
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"project-i18n.js":function module(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// project-i18n.js                                                                                            //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
TAPi18n._enable({"helper_name":"_","supported_languages":["en","fr"],"i18n_files_route":"/tap-i18n","preloaded_langs":[]});
TAPi18n.languages_names["en"] = ["English","English"];
TAPi18n.languages_names["en"] = ["English","English"];
TAPi18n.languages_names["fr"] = ["French (France)","Français"];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},{
  "extensions": [
    ".js",
    ".json",
    ".mjs"
  ]
});

require("/lib/i18n/en.i18n.json");
require("/lib/i18n/fr.i18n.json");
require("/project-i18n.js");
var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi9pMThuLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9hcHBzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9zeW5jaHJvbml6YXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS91c2Vycy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL2ZpeHR1cmVzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWV0aG9kcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3B1YmxpY2F0aW9ucy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsiTWV0ZW9yIiwiaXNTZXJ2ZXIiLCJJbmplY3QiLCJyYXdIZWFkIiwicmF3Qm9keSIsIkFzc2V0cyIsImdldFRleHQiLCJpc0NsaWVudCIsInN0YXJ0dXAiLCJzZXRUaW1lb3V0IiwiJCIsImFkZENsYXNzIiwiZmFkZU91dCIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwibW9kdWxlIiwiZXhwb3J0IiwiVEFQaTE4biIsImxpbmsiLCJ2Iiwic2V0TGFuZ3VhZ2UiLCJjb25zb2xlIiwibG9nIiwiQXBwcyIsIk1vbmdvIiwiQ29sbGVjdGlvbiIsImFsbG93IiwiaW5zZXJ0IiwidXBkYXRlIiwidXNlcklkIiwic3BhY2UiLCJwdWJsaXNoIiwiYXBwc1B1YmxpY2F0aW9uIiwiZmluZCIsIlN5bmNocm9uaXphdGlvbnMiLCJzeW5jaHJvbml6YXRpb25zUHVibGljYXRpb24iLCJpc0FkbWluIiwiUm9sZXMiLCJ1c2VySXNJblJvbGUiLCJ1c2VyIiwicm9sZUFzc2lnbm1lbnQiLCJyZWFkeSIsImNyZWF0ZVJvbGUiLCJ1bmxlc3NFeGlzdHMiLCJ1c2VycyIsImNvdW50IiwiYWRtaW5QYXNzd29yZCIsInNldHRpbmdzIiwidXNlcm5hbWUiLCJyb2xlcyIsIl8iLCJlYWNoIiwiaWQiLCJBY2NvdW50cyIsImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJvZmlsZSIsIm5hbWUiLCJsZW5ndGgiLCJhZGRVc2Vyc1RvUm9sZXMiLCJkZWZhdWx0QXBwcyIsImN1c3RvbUFwcCIsIm9ubHlUZWFjaGVyIiwib3JkZXIiLCJkb2NfdXNlciIsImRvY19hZG1pbiIsImxhc3RfdmVyc2lvbiIsInVybCIsImljb24iLCJkZXNjcmlwdGlvbiIsImluc3RhbGxlZCIsInZlcnNpb24iLCJoaWRkZW4iLCJIVFRQIiwiQVBJX0JBU0VfVVJMIiwicHJvY2VzcyIsImVudiIsIkJFRUtFRV9BUElfVVJMIiwiQVBJX1RJTUVPVVQiLCJjYWxsQVBJIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJkYXRhIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY29uY2F0Iiwib3B0aW9ucyIsInRpbWVvdXQiLCJoZWFkZXJzIiwicmVzdWx0IiwidG9VcHBlckNhc2UiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsIiwiRXJyb3IiLCJzdGF0dXNDb2RlIiwiZXJyb3IiLCJtZXNzYWdlIiwib3JpZ2luYWxFcnJvciIsInRvU3RyaW5nIiwiZnMiLCJOcG0iLCJyZXF1aXJlIiwibWV0aG9kcyIsImFkbWluU2V0TmV3UGFzc3dvcmQiLCJhZG1pbklkIiwibmV3UGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNyZWF0ZUFjY291bnQiLCJlZGl0QWNjb3VudCIsIl9pZCIsIiRzZXQiLCJjaGFuZ2VFbWFpbCIsImNoZWNrIiwiU3RyaW5nIiwib2xkZW1haWwiLCJlbWFpbHMiLCJlbWFpbFJlZyIsInRlc3QiLCJyZW1vdmVFbWFpbCIsImFkZHJlc3MiLCJhZGRFbWFpbCIsImRlbGV0ZVVzZXIiLCJhZGRNYW5hZ2VyUm9sZSIsInJlbW92ZU1hbmFnZXJSb2xlIiwicmVtb3ZlVXNlcnNGcm9tUm9sZXMiLCJhZGRBZG1pblJvbGUiLCJyZW1vdmVBZG1pblJvbGUiLCJnZXRVc2VkU3BhY2UiLCJzdG9yYWdlVXNhZ2UiLCJ1c2VkX2diIiwic3RvcmFnZVRvdGFsIiwidG90YWxfZ2IiLCJwZXJjZW50YWdlIiwiZ2V0U2VyaWFsIiwic2VyaWFsIiwiZ2V0QmVla2VlT3NWZXJzaW9uIiwiZ2V0QmVla2VlSG9tZVZlcnNpb24iLCJnZXRCYXR0ZXJ5U3RhdHVzIiwic3RhdHVzIiwiZ2V0SXNPbmxpbmUiLCJvbmxpbmUiLCJyZWJvb3QiLCJzaHV0ZG93biIsImdldFNTSUQiLCJzc2lkIiwic2V0U1NJRCIsIm5ld1NTSUQiLCJnZXRXaWZpUGFzc3dvcmQiLCJzZXRXaWZpUGFzc3dvcmQiLCJnZXRXaWZpQ2hhbm5lbCIsImNoYW5uZWwiLCJzZXRXaWZpQ2hhbm5lbCIsIm5ld0NoYW5uZWwiLCJwYXJzZUludCIsImdldE9wZXJhdG9yTmFtZSIsIm9wZXJhdG9yIiwiZ2V0U2lnbmFsU3RyZW5ndGgiLCJxdWFsaXR5IiwiZ2V0U2ltQ2FyZFN0YXR1cyIsImdldFNpbVBpbiIsInBpbiIsInNldFNpbVBpbiIsIlBJTiIsImdldEFQTiIsImFwbiIsInNldEFQTiIsIkFQTiIsImdldEFQTlVzZXIiLCJzZXRBUE5Vc2VyIiwiQVBOVXNlciIsImdldEFQTlBhc3N3b3JkIiwic2V0QVBOUGFzc3dvcmQiLCJBUE5QYXNzd29yZCIsInJlc3RhcnRNb2JpbGVDb25uZWN0IiwiZ2V0RXRoMElQIiwiaXAiLCJnZXRXd2FuMElQIiwiZ2V0SW50ZXJuZXRJbnRlcmZhY2UiLCJpbnRlcmZhY2UiLCJnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCIsImVuYWJsZWQiLCJtYWNBZGRyZXNzIiwiZW5hYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQiLCJjYWxsYmFjayIsImRpc2FibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCIsImdldEludGVybmV0U2hhcmluZ1N0YXR1c01vYmlsZSIsImVuYWJsZUludGVybmV0U2hhcmluZ01vYmlsZSIsImRpc2FibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUiLCJlbmFibGVJbnRlcm5ldEZvck1hY0V0aGVybmV0IiwibWFjIiwicmVtb3ZlQWxsTWFjRmlsdGVyc0ZvckV0aGVybmV0IiwiYWxsb3dJbnRlcm5ldEZvck1hY01vYmlsZSIsInJlbW92ZUFsbE1hY0ZpbHRlcnNGb3JNb2JpbGUiLCJnZXRSZW1vdGVTdGF0dXMiLCJhY3RpdmF0ZVJlbW90ZSIsImRpc2FjdGl2YXRlUmVtb3RlIiwiZ2V0QXV0b1N5bmNTdGF0dXMiLCJhY3RpdmF0ZUF1dG9TeW5jIiwiZGlzYWN0aXZhdGVBdXRvU3luYyIsImdldFNoYXJlSW50ZXJuZXRWaWFFdGhlcm5ldFN0YXR1cyIsImdldFNoYXJlSW50ZXJuZXRWaWFNb2JpbGVTdGF0dXMiLCJzeW5jaHJvbml6ZSIsImRldmljZVNlcmlhbCIsInB1YmxpYyIsImRldmljZVRva2VuIiwibW9vZGxlQVBJVG9rZW4iLCJjbG91ZFVSTCIsIm5wbVJlcXVlc3RPcHRpb25zIiwicmVqZWN0VW5hdXRob3JpemVkIiwicmVzdWx0Q29udGVudCIsImNvbnRlbnQiLCJlIiwicnVuQ29tbWFuZCIsImNvbW1hbmQiLCJ3YXJuIiwiV2ViQXBwIiwiY29ubmVjdEhhbmRsZXJzIiwidXNlIiwicmVxIiwicmVzIiwibmV4dCIsIlVSTCIsImhvc3QiLCJ0YXJnZXRVcmwiLCJzZWFyY2hQYXJhbXMiLCJodG1sIiwicmVwbGFjZSIsIndyaXRlSGVhZCIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLENBQUNDLFFBQVEsRUFBRTtFQUNwQkMsTUFBTSxDQUFDQyxPQUFPLENBQUMsWUFBWSxFQUFFLDJOQUEyTixDQUFDO0VBRXpQRCxNQUFNLENBQUNFLE9BQU8sQ0FBQyxZQUFZLEVBQUVDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDaEU7QUFFQSxJQUFJTixNQUFNLENBQUNPLFFBQVEsRUFBRTtFQUNwQlAsTUFBTSxDQUFDUSxP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LENBU21CNEksU0FBUyw4ZUFBQTVJLE1BQUEsQ0FXbEI0SSxTQUFTLG1RQUFBNUksTUFBQSxDQU1JNEksU0FBUyxDQUFDRyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxrS0FLaEY7SUFFSlAsR0FBRyxDQUFDUSxTQUFTLENBQUMsR0FBRyxFQUFFO01BQUUsY0FBYyxFQUFFO0lBQVksQ0FBQyxDQUFDO0lBQ25EUixHQUFHLENBQUNTLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDO0VBQ2YsQ0FBQyxNQUFNO0lBQ0xOLEdBQUcsQ0FBQ1EsU0FBUyxDQUFDLEdBQUcsRUFBRTtNQUFFLGNBQWMsRUFBRTtJQUFhLENBQUMsQ0FBQztJQUNwRFIsR0FBRyxDQUFDUyxHQUFHLENBQUMsdUJBQXVCLENBQUM7RUFDbEM7QUFDRixDQUFDLENBQUMsQyIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXHRJbmplY3QucmF3SGVhZChcIm1ldGFMb2FkZXJcIiwgJzxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT0wLCB3aWR0aD1kZXZpY2Utd2lkdGgsIGhlaWdodD1kZXZpY2UtaGVpZ2h0XCIvPjxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiPlx0PG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCI+Jyk7XG5cblx0SW5qZWN0LnJhd0JvZHkoXCJodG1sTG9hZGVyXCIsIEFzc2V0cy5nZXRUZXh0KCdhcHBfbG9hZGVyLmh0bWwnKSk7XG59XG5cbmlmIChNZXRlb3IuaXNDbGllbnQpIHtcblx0TWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24oKSB7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQkKCcuaW5kZXgtLWljb24nKS5hZGRDbGFzcygnYW5pbWF0ZWQtaWNvbicpO1xuXG5cdFx0XHQkKFwiI2luamVjdC1sb2FkZXItd3JhcHBlclwiKS5mYWRlT3V0KDUwMCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdCQoJy5pbmRleC0taWNvbicpLnJlbW92ZUNsYXNzKCdhbmltYXRlZC1pY29uJyk7XG5cdFx0fSk7XG5cdFx0fSwgNTAwKTtcblx0fSk7XG59IiwiaW1wb3J0IHsgVEFQaTE4biB9IGZyb20gJ21ldGVvci90YXA6aTE4bic7XG5cbi8vIEluaXRpYWxpemUgVEFQaTE4biBvbiBjbGllbnQgc3RhcnR1cFxuaWYgKE1ldGVvci5pc0NsaWVudCkge1xuICBNZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IGxhbmd1YWdlXG4gICAgVEFQaTE4bi5zZXRMYW5ndWFnZSgnZW4nKTtcbiAgICBjb25zb2xlLmxvZygnVEFQaTE4biBpbml0aWFsaXplZCB3aXRoIGxhbmd1YWdlOiBlbicpO1xuICB9KTtcbn1cblxuLy8gRXhwb3J0IGZvciB1c2UgaW4gb3RoZXIgZmlsZXMgaWYgbmVlZGVkXG5leHBvcnQgeyBUQVBpMThuIH07XG4iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgQXBwcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdob21lLWFwcHMnKTtcblxuXG5cbkFwcHMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0dXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblx0cmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsQXBwcycsIGZ1bmN0aW9uIGFwcHNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gQXBwcy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBTeW5jaHJvbml6YXRpb25zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtc3luY2hyb25pemF0aW9ucycpO1xuXG5cblxuU3luY2hyb25pemF0aW9ucy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHJlbW92ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsU3luY2hyb25pemF0aW9ucycsIGZ1bmN0aW9uIHN5bmNocm9uaXphdGlvbnNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gU3luY2hyb25pemF0aW9ucy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuLy8gdmFyIHVzZXJzREJcdD0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vIHZhciBjb2xsZWN0aW9uXHQ9IHVzZXJzREIub3BlbigndXNlcnMnKTtcblxuXG4vL2NvbnN0IGRhdGFiYXNlID0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vY29uc3QgY29sbGVjdGlvbiA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy9leHBvcnQgY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vIFNoYXJpbmcgdGhlIHNhbWUgQWNjb3VudCBjb2xsZWN0aW9uIHRoYW4gYmVla2VlLWxpdmVcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHQvLyBjaGVjayB0aGF0IHRoZSB1c2VySWQgc3BlY2lmaWVkIGlzIGFkbWluXG5pc0FkbWluID0gZnVuY3Rpb24odXNlcklkKSB7XG5cdGNvbnNvbGUubG9nKFwiaXNhZG1pblwiKTtcbiAgcmV0dXJuIFJvbGVzLnVzZXJJc0luUm9sZShNZXRlb3IudXNlcigpLCAnYWRtaW4nKTtcbn1cblxuXG4vLyBQdWJsaXNoIFJvbGVzIHRvIGNsaWVudFxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoeyAndXNlci5faWQnOiB0aGlzLnVzZXJJZCB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJlYWR5KClcbiAgfVxufSk7XG5cbk1ldGVvci5wdWJsaXNoKG51bGwsIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCgpO1xuXG59KTtcblxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG5cbi8vIFNlcnZlcjIgPSBERFAuY29ubmVjdChcImh0dHA6Ly9iZWVrZWUuYm94OjgzXCIpO1xuLy8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFNlcnZlcjI7XG5cblxuLy92YXIgZGF0YWJhc2UgPSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy9NZXRlb3IudXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vZXhwb3J0IGNvbnN0IFVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2FwcHMnKTtcblxuXG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG59IiwiaW1wb3J0IHsgQXBwcyB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuXG5cdC8vIENyZWF0ZSB0aGUgcm9sZXNcblx0Um9sZXMuY3JlYXRlUm9sZSgnbWFuYWdlcicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblxuXG4vLyAjIyMgIENyZWF0ZSBhZG1pbiB1c2VyIGF0IGZpcnN0IHN0YXJ0ICAjIyNcblxuXG5pZiAoTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG5cblx0Ly8gQ3JlYXRlIHRoZSByb2xlXG5cdFJvbGVzLmNyZWF0ZVJvbGUoJ21hbmFnZXInLCB7dW5sZXNzRXhpc3RzOiB0cnVlfSk7XG5cdFJvbGVzLmNyZWF0ZVJvbGUoJ2FkbWluJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXG5cdHZhciBhZG1pblBhc3N3b3JkID0gTWV0ZW9yLnNldHRpbmdzLmFkbWluUGFzc3dvcmQ7XG5cblx0dmFyIHVzZXJzID0gW1xuXHRcdHt1c2VybmFtZTpcImFkbWluXCIscm9sZXM6WydhZG1pbiddfSxcblx0XTtcblxuXHRfLmVhY2godXNlcnMsIGZ1bmN0aW9uICh1c2VyKSB7XG5cdFx0dmFyIGlkO1xuXHRcdGlkID0gQWNjb3VudHMuY3JlYXRlVXNlcih7XG5cdFx0XHR1c2VybmFtZTogdXNlci51c2VybmFtZSxcblx0XHRcdGVtYWlsOiBcIkFkbWluXCIsXG5cdFx0XHRwYXNzd29yZDogXCJhZG1pblwiLFxuXHRcdFx0cHJvZmlsZTp7bmFtZTpcIkFkbWluXCJ9XG5cdFx0fSk7XG5cblx0XHRpZiAodXNlci5yb2xlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRSb2xlcy5hZGRVc2Vyc1RvUm9sZXMoaWQsIHVzZXIucm9sZXMpO1xuXHRcdH1cblx0fSk7XG59XG5cblxuaWYgKEFwcHMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblxuXHR2YXIgZGVmYXVsdEFwcHMgPSBbXG5cdFx0e25hbWU6XCJMaXZlXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjMsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly9saXZlLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1saXZlLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBMaXZlIHByb21vdGUgcmVhbC10aW1lIGludGVyYWN0aW9uIGJ5IGFsbG93aW5nIGxlYXJuZXJzIHRvIGV4cHJlc3MgdGhlbXNlbHZlcyBhc2tpbmcgcXVlc3Rpb25zLCBwb3N0aW5nIHBob3RvcyBvciBzaGFyaW5nIGZpbGVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlJlc291cmNlc1wiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo3LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vcmVzb3VyY2VzLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1yZXNvdXJjZXMucG5nXCIsIGRlc2NyaXB0aW9uOlwiV2l0aCBCZWVrZWUgUmVzb3VyY2VzLCB5b3UgY2FuIGVhc2lseSBzaGFyZSBmaWxlcyB3aXRoIHlvdXIgbGVhcm5lcnMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiV2hlZWxcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjp0cnVlLCBvcmRlcjo5LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIwLjdcIiwgdXJsOlwiaHR0cDovL3doZWVsLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS13aGVlbC5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgV2hlZWwgaXMgYSBzaW1wbGUgcmFuZG9tIHBpY2tlciB3aGVlbCB0aGF0IGFsbG93IHlvdSB0byBwaWNrIHVwIGEgcmFuZG9tIG5hbWUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiVGltZXJcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6OCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL3RpbWVyLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS10aW1lci5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgVGltZXIgaXMgYSBzaW1wbGUgdGltZXIgdGhhdCBsZXRzIHlvdXIgbGVhcm5lcnMga25vdyBob3cgbXVjaCB0aW1lIHRoZXkgaGF2ZSBsZWZ0LlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIk1vb2RsZVwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjEsIGRvY191c2VyOlwibW9vZGxlX3RlYWNoZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL21vb2RsZS5iZWVrZWUuYm94XCIsIGljb246XCJtb29kbGUucG5nXCIsIGRlc2NyaXB0aW9uOlwiTW9vZGxlIGlzIGEgZnJlZSwgb25saW5lIExlYXJuaW5nIE1hbmFnZW1lbnQgc3lzdGVtIGVuYWJsaW5nIGVkdWNhdG9ycyB0byBjcmVhdGUgdGhlaXIgb3duIHByaXZhdGUgd2Vic2l0ZSBmaWxsZWQgd2l0aCBkeW5hbWljIGNvdXJzZXMgdGhhdCBleHRlbmQgbGVhcm5pbmcsIGFueSB0aW1lLCBhbnl3aGVyZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMy4xMS4yXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJLb2xpYnJpXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MiwgZG9jX3VzZXI6XCJrb2xpYnJpX3VzZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2tvbGlicmkuYmVla2VlLmJveFwiLCBpY29uOlwia29saWJyaS5wbmdcIiwgZGVzY3JpcHRpb246XCJLb2xpYnJpIGlzIGFuIG9wZW4tc291cmNlIGVkdWNhdGlvbmFsIHBsYXRmb3JtIHNwZWNpYWxseSBkZXNpZ25lZCB0byBwcm92aWRlIG9mZmxpbmUgYWNjZXNzIHRvIGEgd2lkZSByYW5nZSBvZiBxdWFsaXR5LCBvcGVubHkgbGljZW5zZWQgZWR1Y2F0aW9uYWwgcmVzb3VyY2VzIGluIGxvdy1yZXNvdXJjZSBjb250ZXh0cyBsaWtlIHJ1cmFsIHNjaG9vbHMsIHJlZnVnZWUgY2FtcHMsIG9ycGhhbmFnZXMsIGFuZCBhbHNvIGluIG5vbi1mb3JtYWwgc2Nob29sIHByb2dyYW1zLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjE0LjdcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHQvLyB7bmFtZTpcIkV0aGVycGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2V0aGVycGFkLmJlZWtlZS5ib3hcIiwgaWNvbjpcImV0aGVycGFkLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkV0aGVycGFkIGFsbG93cyB5b3UgdG8gZWRpdCBkb2N1bWVudHMgY29sbGFib3JhdGl2ZWx5IGluIHJlYWwtdGltZSwgbXVjaCBsaWtlIGEgbGl2ZSBtdWx0aS1wbGF5ZXIgZWRpdG9yIHRoYXQgcnVucyBpbiB5b3VyIGJyb3dzZXIuIFdyaXRlIGFydGljbGVzLCBwcmVzcyByZWxlYXNlcywgdG8tZG8gbGlzdHMsIGV0Yy4gdG9nZXRoZXIgd2l0aCB5b3VyIGZyaWVuZHMsIGZlbGxvdyBzdHVkZW50cyBvciBjb2xsZWFndWVzLCBhbGwgd29ya2luZyBvbiB0aGUgc2FtZSBkb2N1bWVudCBhdCB0aGUgc2FtZSB0aW1lLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjguMTRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlN0b3JtXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3N0b3JtLmJlZWtlZS5ib3hcIiwgaWNvbjpcInN0b3JtLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhbmQgYW5pbWF0ZSBsaXZlIHN1cnZleXMsIGJyYWluc3Rvcm1zIGFuZCBxdWl6emVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjQuNVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiUGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3BhZC5iZWVrZWUuYm94XCIsIGljb246XCJwYWQucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGNvbGxhYm9yYXRpdmUgd2FsbHMgdG8gc2hhcmUgYW5kIG9yZ2FuaXplIGNvbnRlbnQuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJCdXp6ZXJcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOnRydWUsIG9yZGVyOjYsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9idXp6ZXIuYmVla2VlLmJveFwiLCBpY29uOlwiYnV6emVyLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhIHZpcnR1YWwgZ2FtaW5nIHJvb20gYXJvdW5kIGEgY29ubmVjdGVkIGJ1enplci5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4yLjRcIiwgaGlkZGVuOmZhbHNlfSxcblxuXHRdO1xuXG5cdF8uZWFjaChkZWZhdWx0QXBwcywgZnVuY3Rpb24gKGRlZmF1bHRBcHBzKSB7XG5cdFx0QXBwcy5pbnNlcnQoZGVmYXVsdEFwcHMpO1xuXHR9KTtcbn0iLCIvKipcbiAqIEJlZWtlZSBIb21lIC0gTWV0ZW9yIE1ldGhvZHMgKEFQSSBWZXJzaW9uKVxuICogXG4gKiBSZXBsYWNlcyBhbGwgY21kKCkgY2FsbHMgd2l0aCBSRVNUIEFQSSBjYWxscyB0byBiZWVrZWUtc3lzdGVtLWFwaVxuICogXG4gKiBBUEkgQmFzZSBVUkw6IGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9hcGkvdjFcbiAqL1xuXG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnbWV0ZW9yL2h0dHAnXG5cbi8vIEFQSSBDb25maWd1cmF0aW9uXG5jb25zdCBBUElfQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5CRUVLRUVfQVBJX1VSTCB8fCAnaHR0cDovLzEyNy4wLjAuMTo1MDAwL2FwaS92MSc7XG5jb25zdCBBUElfVElNRU9VVCA9IDMwMDAwOyAvLyAzMCBzZWNvbmRzXG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNhbGwgdGhlIEFQSVxuICovXG5mdW5jdGlvbiBjYWxsQVBJKG1ldGhvZCwgZW5kcG9pbnQsIGRhdGEgPSBudWxsKSB7XG4gICAgY29uc3QgdXJsID0gYCR7QVBJX0JBU0VfVVJMfSR7ZW5kcG9pbnR9YDtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICB0aW1lb3V0OiBBUElfVElNRU9VVCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaChtZXRob2QudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSAnR0VUJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBIVFRQLmdldCh1cmwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUE9TVCc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gSFRUUC5wb3N0KHVybCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQVVQnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IEhUVFAucHV0KHVybCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdERUxFVEUnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IEhUVFAuZGVsKHVybCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2ludmFsaWQtbWV0aG9kJywgYFVuc3VwcG9ydGVkIEhUVFAgbWV0aG9kOiAke21ldGhvZH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzQ29kZSA+PSAyMDAgJiYgcmVzdWx0LnN0YXR1c0NvZGUgPCAzMDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2FwaS1lcnJvcicsIGBBUEkgcmV0dXJuZWQgc3RhdHVzICR7cmVzdWx0LnN0YXR1c0NvZGV9YCwgcmVzdWx0LmRhdGEpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgQVBJIGNhbGwgZmFpbGVkOiAke21ldGhvZH0gJHtlbmRwb2ludH1gLCBlcnJvcik7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBpdCdzIGFscmVhZHkgYSBNZXRlb3IuRXJyb3IsIHJlLXRocm93IGl0XG4gICAgICAgIGlmIChlcnJvci5lcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIE90aGVyd2lzZSwgY3JlYXRlIGEgbmV3IE1ldGVvci5FcnJvclxuICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdhcGktY29ubmVjdGlvbi1lcnJvcicsIFxuICAgICAgICAgICAgYEZhaWxlZCB0byBjb25uZWN0IHRvIEFQSTogJHtlcnJvci5tZXNzYWdlfWAsXG4gICAgICAgICAgICB7IG1ldGhvZCwgZW5kcG9pbnQsIG9yaWdpbmFsRXJyb3I6IGVycm9yLnRvU3RyaW5nKCkgfVxuICAgICAgICApO1xuICAgIH1cbn1cblxuTWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXG4gICAgICAgIHZhciBmcyA9IE5wbS5yZXF1aXJlKCdmcycpO1xuXG4gICAgICAgIE1ldGVvci5tZXRob2RzKHtcblxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICAvLyBVU0VSIE1BTkFHRU1FTlQgKHVuY2hhbmdlZCAtIG5vIEFQSSBuZWVkZWQpXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgICAgICAgICAgJ2FkbWluU2V0TmV3UGFzc3dvcmQnOiBmdW5jdGlvbihhZG1pbklkLCB1c2VySWQsIG5ld1Bhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgaWYgKFJvbGVzLnVzZXJJc0luUm9sZShhZG1pbklkLCAnYWRtaW4nKSkge1xuICAgICAgICAgICAgICAgICAgICBBY2NvdW50cy5zZXRQYXNzd29yZCh1c2VySWQsIG5ld1Bhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnY3JlYXRlQWNjb3VudCc6IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCwgcHJvZmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50cy5jcmVhdGVVc2VyKHtlbWFpbDplbWFpbCwgcGFzc3dvcmQ6cGFzc3dvcmQsIHByb2ZpbGU6cHJvZmlsZX0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ2VkaXRBY2NvdW50JzogZnVuY3Rpb24odXNlcklkLCBlbWFpbCwgcGFzc3dvcmQsIHByb2ZpbGUpIHtcbiAgICAgICAgICAgICAgICBNZXRlb3IudXNlcnMudXBkYXRlKHtfaWQ6IHVzZXJJZH0sIHtcbiAgICAgICAgICAgICAgICAgICAgJHNldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2VtYWlscy4wLmFkZHJlc3MnOiBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGU6IHByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXNzd29yZCkge1xuICAgICAgICAgICAgICAgICAgICBBY2NvdW50cy5zZXRQYXNzd29yZCh1c2VySWQsIHBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnY2hhbmdlRW1haWwnOiBmdW5jdGlvbihlbWFpbCkge1xuICAgICAgICAgICAgICAgIGNoZWNrKGVtYWlsLCBTdHJpbmcpO1xuICAgICAgICAgICAgICAgIHZhciB1c2VyID0gTWV0ZW9yLnVzZXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgb2xkZW1haWwgPSB1c2VyLmVtYWlscztcbiAgICAgICAgICAgICAgICB2YXIgZW1haWxSZWcgPSAvXihbXFx3LVxcLl0rQChbXFx3LV0rXFwuKStbXFx3LV17Miw0fSk/JC87XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGVtYWlsUmVnLnRlc3QoZW1haWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKG9sZGVtYWlsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRzLnJlbW92ZUVtYWlsKHVzZXIuX2lkLCB1c2VyLmVtYWlsc1swXS5hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50cy5hZGRFbWFpbCh1c2VyLl9pZCwgZW1haWwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW1haWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ2RlbGV0ZVVzZXInOiBmdW5jdGlvbih1c2VySWQpIHtcbiAgICAgICAgICAgICAgICBNZXRlb3IudXNlcnMucmVtb3ZlKHVzZXJJZCwgZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoZW4gZGVsZXRpbmcgdXNlciA6IFwiK2Vycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnYWRkTWFuYWdlclJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcbiAgICAgICAgICAgICAgICBSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklkLCAnbWFuYWdlcicpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ3JlbW92ZU1hbmFnZXJSb2xlJzogZnVuY3Rpb24odXNlcklkKSB7XG4gICAgICAgICAgICAgICAgUm9sZXMucmVtb3ZlVXNlcnNGcm9tUm9sZXModXNlcklkLCAnbWFuYWdlcicpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ2FkZEFkbWluUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuICAgICAgICAgICAgICAgIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsICdhZG1pbicpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ3JlbW92ZUFkbWluUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuICAgICAgICAgICAgICAgIFJvbGVzLnJlbW92ZVVzZXJzRnJvbVJvbGVzKHVzZXJJZCwgJ2FkbWluJyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgIC8vIFNZU1RFTSAtIFVzaW5nIEFQSVxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IGRpc2sgdXNhZ2VcbiAgICAgICAgICAgICAqIEFQSTogR0VUIC9hcGkvdjEvc3lzdGVtL2Rpc2svdXNhZ2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ2dldFVzZWRTcGFjZSc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ0dFVCcsICcvc3lzdGVtL2Rpc2svdXNhZ2UnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gaW4gc2FtZSBmb3JtYXQgYXMgb3JpZ2luYWxcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlVXNhZ2U6IHJlc3VsdC51c2VkX2diLFxuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlVG90YWw6IHJlc3VsdC50b3RhbF9nYixcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZTogcmVzdWx0LnBlcmNlbnRhZ2VcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgZGV2aWNlIHNlcmlhbCBudW1iZXJcbiAgICAgICAgICAgICAqIEFQSTogR0VUIC9hcGkvdjEvc3lzdGVtL3NlcmlhbFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnZ2V0U2VyaWFsJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbEFQSSgnR0VUJywgJy9zeXN0ZW0vc2VyaWFsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zZXJpYWw7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBCZWVrZWUgT1MgdmVyc2lvblxuICAgICAgICAgICAgICogQVBJOiBHRVQgL2FwaS92MS9zeXN0ZW0vdmVyc2lvbi9vc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnZ2V0QmVla2VlT3NWZXJzaW9uJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbEFQSSgnR0VUJywgJy9zeXN0ZW0vdmVyc2lvbi9vcycpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudmVyc2lvbjtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IEJlZWtlZSBIb21lIHZlcnNpb25cbiAgICAgICAgICAgICAqIEFQSTogR0VUIC9hcGkvdjEvc3lzdGVtL3ZlcnNpb24vaG9tZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnZ2V0QmVla2VlSG9tZVZlcnNpb24nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsQVBJKCdHRVQnLCAnL3N5c3RlbS92ZXJzaW9uL2hvbWUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnZlcnNpb247XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBiYXR0ZXJ5IHN0YXR1c1xuICAgICAgICAgICAgICogQVBJOiBHRVQgL2FwaS92MS9zeXN0ZW0vYmF0dGVyeVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnZ2V0QmF0dGVyeVN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ0dFVCcsICcvc3lzdGVtL2JhdHRlcnknKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnN0YXR1cztcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2hlY2sgaW50ZXJuZXQgY29ubmVjdGl2aXR5XG4gICAgICAgICAgICAgKiBBUEk6IEdFVCAvYXBpL3YxL3N5c3RlbS9vbmxpbmVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ2dldElzT25saW5lJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbEFQSSgnR0VUJywgJy9zeXN0ZW0vb25saW5lJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5vbmxpbmU7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlYm9vdCBzeXN0ZW1cbiAgICAgICAgICAgICAqIEFQSTogUE9TVCAvYXBpL3YxL3N5c3RlbS9yZWJvb3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ3JlYm9vdCc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ1BPU1QnLCAnL3N5c3RlbS9yZWJvb3QnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0Lm1lc3NhZ2U7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNodXRkb3duIHN5c3RlbVxuICAgICAgICAgICAgICogQVBJOiBQT1NUIC9hcGkvdjEvc3lzdGVtL3NodXRkb3duXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdzaHV0ZG93bic6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ1BPU1QnLCAnL3N5c3RlbS9zaHV0ZG93bicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQubWVzc2FnZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgLy8gV0lGSSBTRVRUSU5HUyAtIFVzaW5nIEFQSVxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IFdpRmkgU1NJRFxuICAgICAgICAgICAgICogQVBJOiBHRVQgL2FwaS92MS93aWZpL3NzaWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ2dldFNTSUQnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsQVBJKCdHRVQnLCAnL3dpZmkvc3NpZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc3NpZDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0IFdpRmkgU1NJRFxuICAgICAgICAgICAgICogQVBJOiBQVVQgL2FwaS92MS93aWZpL3NzaWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ3NldFNTSUQnOiBmdW5jdGlvbihuZXdTU0lEKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbEFQSSgnUFVUJywgJy93aWZpL3NzaWQnLCB7IHNzaWQ6IG5ld1NTSUQgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5tZXNzYWdlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgV2lGaSBwYXNzd29yZFxuICAgICAgICAgICAgICogQVBJOiBHRVQgL2FwaS92MS93aWZpL3Bhc3N3b3JkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdnZXRXaWZpUGFzc3dvcmQnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsQVBJKCdHRVQnLCAnL3dpZmkvcGFzc3dvcmQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnBhc3N3b3JkO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTZXQgV2lGaSBwYXNzd29yZFxuICAgICAgICAgICAgICogQVBJOiBQVVQgL2FwaS92MS93aWZpL3Bhc3N3b3JkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdzZXRXaWZpUGFzc3dvcmQnOiBmdW5jdGlvbihuZXdQYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ1BVVCcsICcvd2lmaS9wYXNzd29yZCcsIHsgcGFzc3dvcmQ6IG5ld1Bhc3N3b3JkIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQubWVzc2FnZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IFdpRmkgY2hhbm5lbFxuICAgICAgICAgICAgICogQVBJOiBHRVQgL2FwaS92MS93aWZpL2NoYW5uZWxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ2dldFdpZmlDaGFubmVsJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbEFQSSgnR0VUJywgJy93aWZpL2NoYW5uZWwnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmNoYW5uZWw7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNldCBXaUZpIGNoYW5uZWxcbiAgICAgICAgICAgICAqIEFQSTogUFVUIC9hcGkvdjEvd2lmaS9jaGFubmVsXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdzZXRXaWZpQ2hhbm5lbCc6IGZ1bmN0aW9uKG5ld0NoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsQVBJKCdQVVQnLCAnL3dpZmkvY2hhbm5lbCcsIHsgY2hhbm5lbDogcGFyc2VJbnQobmV3Q2hhbm5lbCkgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5tZXNzYWdlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICAvLyBNT0JJTEUvTU9ERU0gLSBVc2luZyBBUElcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBtb2JpbGUgb3BlcmF0b3IgbmFtZVxuICAgICAgICAgICAgICogQVBJOiBHRVQgL2FwaS92MS9tb2JpbGUvb3BlcmF0b3JcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ2dldE9wZXJhdG9yTmFtZSc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ0dFVCcsICcvbW9iaWxlL29wZXJhdG9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5vcGVyYXRvcjtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHNpZ25hbCBzdHJlbmd0aCAocXVhbGl0YXRpdmUpXG4gICAgICAgICAgICAgKiBBUEk6IEdFVCAvYXBpL3YxL21vYmlsZS9zaWduYWxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ2dldFNpZ25hbFN0cmVuZ3RoJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbEFQSSgnR0VUJywgJy9tb2JpbGUvc2lnbmFsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5xdWFsaXR5OyAvLyBSZXR1cm5zOiBFeGNlbGxlbnQsIEdvb2QsIEZhaXIsIFBvb3IsIFVua25vd25cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IFNJTSBjYXJkIHN0YXR1c1xuICAgICAgICAgICAgICogQVBJOiBHRVQgL2FwaS92MS9tb2JpbGUvc2ltL3N0YXR1c1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnZ2V0U2ltQ2FyZFN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ0dFVCcsICcvbW9iaWxlL3NpbS9zdGF0dXMnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnN0YXR1czsgLy8gUmV0dXJuczogT0ssIE5vIFNJTSBjYXJkLCBTSU0gY2FyZCBsb2NrZWQsIGV0Yy5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IFNJTSBQSU5cbiAgICAgICAgICAgICAqIEFQSTogR0VUIC9hcGkvdjEvbW9iaWxlL3NpbS9waW5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ2dldFNpbVBpbic6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ0dFVCcsICcvbW9iaWxlL3NpbS9waW4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnBpbjtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0IFNJTSBQSU5cbiAgICAgICAgICAgICAqIEFQSTogUFVUIC9hcGkvdjEvbW9iaWxlL3NpbS9waW5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ3NldFNpbVBpbic6IGZ1bmN0aW9uKFBJTikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ1BVVCcsICcvbW9iaWxlL3NpbS9waW4nLCB7IHBpbjogUElOIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQubWVzc2FnZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IEFQTlxuICAgICAgICAgICAgICogQVBJOiBHRVQgL2FwaS92MS9tb2JpbGUvYXBuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdnZXRBUE4nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsQVBJKCdHRVQnLCAnL21vYmlsZS9hcG4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmFwbjtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0IEFQTiAod2l0aCBvcHRpb25hbCB1c2VyIGFuZCBwYXNzd29yZClcbiAgICAgICAgICAgICAqIEFQSTogUFVUIC9hcGkvdjEvbW9iaWxlL2FwblxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnc2V0QVBOJzogZnVuY3Rpb24oQVBOLCB1c2VyLCBwYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7IGFwbjogQVBOIH07XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIGRhdGEudXNlciA9IHVzZXI7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3N3b3JkKSBkYXRhLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbEFQSSgnUFVUJywgJy9tb2JpbGUvYXBuJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5tZXNzYWdlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgQVBOIHVzZXJuYW1lXG4gICAgICAgICAgICAgKiBBUEk6IEdFVCAvYXBpL3YxL21vYmlsZS9hcG4vdXNlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnZ2V0QVBOVXNlcic6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ0dFVCcsICcvbW9iaWxlL2Fwbi91c2VyJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC51c2VyO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTZXQgQVBOIHVzZXJuYW1lXG4gICAgICAgICAgICAgKiBBUEk6IFBVVCAvYXBpL3YxL21vYmlsZS9hcG4vdXNlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnc2V0QVBOVXNlcic6IGZ1bmN0aW9uKEFQTlVzZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsQVBJKCdQVVQnLCAnL21vYmlsZS9hcG4vdXNlcicsIHsgdXNlcjogQVBOVXNlciB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0Lm1lc3NhZ2U7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBBUE4gcGFzc3dvcmRcbiAgICAgICAgICAgICAqIEFQSTogR0VUIC9hcGkvdjEvbW9iaWxlL2Fwbi9wYXNzd29yZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnZ2V0QVBOUGFzc3dvcmQnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsQVBJKCdHRVQnLCAnL21vYmlsZS9hcG4vcGFzc3dvcmQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnBhc3N3b3JkO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTZXQgQVBOIHBhc3N3b3JkXG4gICAgICAgICAgICAgKiBBUEk6IFBVVCAvYXBpL3YxL21vYmlsZS9hcG4vcGFzc3dvcmRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ3NldEFQTlBhc3N3b3JkJzogZnVuY3Rpb24oQVBOUGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsQVBJKCdQVVQnLCAnL21vYmlsZS9hcG4vcGFzc3dvcmQnLCB7IHBhc3N3b3JkOiBBUE5QYXNzd29yZCB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0Lm1lc3NhZ2U7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlc3RhcnQgbW9iaWxlIGNvbm5lY3Rpb25cbiAgICAgICAgICAgICAqIEFQSTogUE9TVCAvYXBpL3YxL21vYmlsZS9yZXN0YXJ0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdyZXN0YXJ0TW9iaWxlQ29ubmVjdCc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ1BPU1QnLCAnL21vYmlsZS9yZXN0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5tZXNzYWdlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICAvLyBORVRXT1JLIC0gVXNpbmcgQVBJXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgRXRoZXJuZXQgSVBcbiAgICAgICAgICAgICAqIEFQSTogR0VUIC9hcGkvdjEvbmV0d29yay9pcC9ldGgwXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdnZXRFdGgwSVAnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsQVBJKCdHRVQnLCAnL25ldHdvcmsvaXAvZXRoMCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuaXA7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBNb2JpbGUvV1dBTiBJUFxuICAgICAgICAgICAgICogQVBJOiBHRVQgL2FwaS92MS9uZXR3b3JrL2lwL3d3YW4wXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdnZXRXd2FuMElQJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbEFQSSgnR0VUJywgJy9uZXR3b3JrL2lwL3d3YW4wJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5pcDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IGludGVybmV0IGludGVyZmFjZVxuICAgICAgICAgICAgICogQVBJOiBHRVQgL2FwaS92MS9uZXR3b3JrL2ludGVybmV0L2ludGVyZmFjZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnZ2V0SW50ZXJuZXRJbnRlcmZhY2UnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsQVBJKCdHRVQnLCAnL25ldHdvcmsvaW50ZXJuZXQvaW50ZXJmYWNlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5pbnRlcmZhY2U7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBpbnRlcm5ldCBzaGFyaW5nIHN0YXR1cyB2aWEgRXRoZXJuZXRcbiAgICAgICAgICAgICAqIEFQSTogR0VUIC9hcGkvdjEvbmV0d29yay9zaGFyaW5nL2V0aGVybmV0L3N0YXR1c1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsQVBJKCdHRVQnLCAnL25ldHdvcmsvc2hhcmluZy9ldGhlcm5ldC9zdGF0dXMnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlc3VsdC5lbmFibGVkID8gJ2VuYWJsZWQgZm9yIGFsbCcgOiAnZGlzYWJsZWQnLFxuICAgICAgICAgICAgICAgICAgICBtYWNBZGRyZXNzOiBudWxsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5hYmxlIGludGVybmV0IHNoYXJpbmcgdmlhIEV0aGVybmV0XG4gICAgICAgICAgICAgKiBBUEk6IFBPU1QgL2FwaS92MS9uZXR3b3JrL3NoYXJpbmcvZXRoZXJuZXQvZW5hYmxlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdlbmFibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbEFQSSgnUE9TVCcsICcvbmV0d29yay9zaGFyaW5nL2V0aGVybmV0L2VuYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHJlc3VsdC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERpc2FibGUgaW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXRcbiAgICAgICAgICAgICAqIEFQSTogUE9TVCAvYXBpL3YxL25ldHdvcmsvc2hhcmluZy9ldGhlcm5ldC9kaXNhYmxlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ1BPU1QnLCAnL25ldHdvcmsvc2hhcmluZy9ldGhlcm5ldC9kaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgcmVzdWx0Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0Lm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IGludGVybmV0IHNoYXJpbmcgc3RhdHVzIHZpYSBNb2JpbGVcbiAgICAgICAgICAgICAqIEFQSTogR0VUIC9hcGkvdjEvbmV0d29yay9zaGFyaW5nL21vYmlsZS9zdGF0dXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c01vYmlsZSc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ0dFVCcsICcvbmV0d29yay9zaGFyaW5nL21vYmlsZS9zdGF0dXMnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlc3VsdC5lbmFibGVkID8gJ2VuYWJsZWQgZm9yIGFsbCcgOiAnZGlzYWJsZWQnLFxuICAgICAgICAgICAgICAgICAgICBtYWNBZGRyZXNzOiBudWxsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5hYmxlIGludGVybmV0IHNoYXJpbmcgdmlhIE1vYmlsZVxuICAgICAgICAgICAgICogQVBJOiBQT1NUIC9hcGkvdjEvbmV0d29yay9zaGFyaW5nL21vYmlsZS9lbmFibGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ2VuYWJsZUludGVybmV0U2hhcmluZ01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbEFQSSgnUE9TVCcsICcvbmV0d29yay9zaGFyaW5nL21vYmlsZS9lbmFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCByZXN1bHQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQubWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEaXNhYmxlIGludGVybmV0IHNoYXJpbmcgdmlhIE1vYmlsZVxuICAgICAgICAgICAgICogQVBJOiBQT1NUIC9hcGkvdjEvbmV0d29yay9zaGFyaW5nL21vYmlsZS9kaXNhYmxlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsQVBJKCdQT1NUJywgJy9uZXR3b3JrL3NoYXJpbmcvbW9iaWxlL2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCByZXN1bHQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQubWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBbGxvdyBpbnRlcm5ldCBmb3Igc3BlY2lmaWMgTUFDIHZpYSBFdGhlcm5ldFxuICAgICAgICAgICAgICogQVBJOiBQT1NUIC9hcGkvdjEvbmV0d29yay9tYWMtZmlsdGVyL2V0aGVybmV0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdlbmFibGVJbnRlcm5ldEZvck1hY0V0aGVybmV0JzogZnVuY3Rpb24obWFjQWRkcmVzcywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsQVBJKCdQT1NUJywgJy9uZXR3b3JrL21hYy1maWx0ZXIvZXRoZXJuZXQnLCB7IG1hYzogbWFjQWRkcmVzcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCByZXN1bHQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQubWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW1vdmUgYWxsIE1BQyBmaWx0ZXJzIGZvciBFdGhlcm5ldFxuICAgICAgICAgICAgICogQVBJOiBERUxFVEUgL2FwaS92MS9uZXR3b3JrL21hYy1maWx0ZXIvZXRoZXJuZXRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ3JlbW92ZUFsbE1hY0ZpbHRlcnNGb3JFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbEFQSSgnREVMRVRFJywgJy9uZXR3b3JrL21hYy1maWx0ZXIvZXRoZXJuZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCByZXN1bHQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQubWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBbGxvdyBpbnRlcm5ldCBmb3Igc3BlY2lmaWMgTUFDIHZpYSBNb2JpbGVcbiAgICAgICAgICAgICAqIEFQSTogUE9TVCAvYXBpL3YxL25ldHdvcmsvbWFjLWZpbHRlci9tb2JpbGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ2FsbG93SW50ZXJuZXRGb3JNYWNNb2JpbGUnOiBmdW5jdGlvbihtYWNBZGRyZXNzLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ1BPU1QnLCAnL25ldHdvcmsvbWFjLWZpbHRlci9tb2JpbGUnLCB7IG1hYzogbWFjQWRkcmVzcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCByZXN1bHQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQubWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW1vdmUgYWxsIE1BQyBmaWx0ZXJzIGZvciBNb2JpbGVcbiAgICAgICAgICAgICAqIEFQSTogREVMRVRFIC9hcGkvdjEvbmV0d29yay9tYWMtZmlsdGVyL21vYmlsZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAncmVtb3ZlQWxsTWFjRmlsdGVyc0Zvck1vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbEFQSSgnREVMRVRFJywgJy9uZXR3b3JrL21hYy1maWx0ZXIvbW9iaWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgcmVzdWx0Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0Lm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgLy8gU1lOQyAtIFVzaW5nIEFQSVxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHJlbW90ZSBzeW5jIHN0YXR1c1xuICAgICAgICAgICAgICogQVBJOiBHRVQgL2FwaS92MS9zeW5jL3JlbW90ZS9zdGF0dXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ2dldFJlbW90ZVN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ0dFVCcsICcvc3luYy9yZW1vdGUvc3RhdHVzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5lbmFibGVkO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBY3RpdmF0ZSByZW1vdGUgc3luY1xuICAgICAgICAgICAgICogQVBJOiBQT1NUIC9hcGkvdjEvc3luYy9yZW1vdGUvZW5hYmxlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdhY3RpdmF0ZVJlbW90ZSc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ1BPU1QnLCAnL3N5bmMvcmVtb3RlL2VuYWJsZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQubWVzc2FnZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVhY3RpdmF0ZSByZW1vdGUgc3luY1xuICAgICAgICAgICAgICogQVBJOiBQT1NUIC9hcGkvdjEvc3luYy9yZW1vdGUvZGlzYWJsZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnZGlzYWN0aXZhdGVSZW1vdGUnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsQVBJKCdQT1NUJywgJy9zeW5jL3JlbW90ZS9kaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5tZXNzYWdlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgYXV0by1zeW5jIHN0YXR1c1xuICAgICAgICAgICAgICogQVBJOiBHRVQgL2FwaS92MS9zeW5jL2F1dG8vc3RhdHVzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdnZXRBdXRvU3luY1N0YXR1cyc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ0dFVCcsICcvc3luYy9hdXRvL3N0YXR1cycpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuZW5hYmxlZDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWN0aXZhdGUgYXV0by1zeW5jXG4gICAgICAgICAgICAgKiBBUEk6IFBPU1QgL2FwaS92MS9zeW5jL2F1dG8vZW5hYmxlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdhY3RpdmF0ZUF1dG9TeW5jJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbEFQSSgnUE9TVCcsICcvc3luYy9hdXRvL2VuYWJsZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQubWVzc2FnZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVhY3RpdmF0ZSBhdXRvLXN5bmNcbiAgICAgICAgICAgICAqIEFQSTogUE9TVCAvYXBpL3YxL3N5bmMvYXV0by9kaXNhYmxlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdkaXNhY3RpdmF0ZUF1dG9TeW5jJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbEFQSSgnUE9TVCcsICcvc3luYy9hdXRvL2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0Lm1lc3NhZ2U7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBzaGFyZSBpbnRlcm5ldCB2aWEgRXRoZXJuZXQgc3RhdHVzXG4gICAgICAgICAgICAgKiBBUEk6IEdFVCAvYXBpL3YxL3N5bmMvc2hhcmUtaW50ZXJuZXQvZXRoZXJuZXQvc3RhdHVzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdnZXRTaGFyZUludGVybmV0VmlhRXRoZXJuZXRTdGF0dXMnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsQVBJKCdHRVQnLCAnL3N5bmMvc2hhcmUtaW50ZXJuZXQvZXRoZXJuZXQvc3RhdHVzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5lbmFibGVkID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHNoYXJlIGludGVybmV0IHZpYSBNb2JpbGUgc3RhdHVzXG4gICAgICAgICAgICAgKiBBUEk6IEdFVCAvYXBpL3YxL3N5bmMvc2hhcmUtaW50ZXJuZXQvbW9iaWxlL3N0YXR1c1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnZ2V0U2hhcmVJbnRlcm5ldFZpYU1vYmlsZVN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxBUEkoJ0dFVCcsICcvc3luYy9zaGFyZS1pbnRlcm5ldC9tb2JpbGUvc3RhdHVzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5lbmFibGVkID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU3luY2hyb25pemUgd2l0aCBjbG91ZFxuICAgICAgICAgICAgICogVGhpcyBrZWVwcyB0aGUgb3JpZ2luYWwgSFRUUCBjYWxsIHRvIGNsb3VkLCBidXQgdHJpZ2dlcnMgbG9jYWwgc3luYyB2aWEgQVBJXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdzeW5jaHJvbml6ZSc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgc3luYy4uLlwiKTtcblxuICAgICAgICAgICAgICAgIC8vIEZpcnN0LCB0cmlnZ2VyIGxvY2FsIHN5bmMgcHJlcGFyYXRpb24gdmlhIEFQSVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxBUEkoJ1BPU1QnLCAnL3N5bmMvbm93Jyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciB0cmlnZ2VyaW5nIGxvY2FsIHN5bmM6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUaGVuIGNvbnRpbnVlIHdpdGggY2xvdWQgc3luYyAob3JpZ2luYWwgY29kZSlcbiAgICAgICAgICAgICAgICB2YXIgZGV2aWNlU2VyaWFsID0gTWV0ZW9yLnNldHRpbmdzLnB1YmxpYy5zZXJpYWw7XG4gICAgICAgICAgICAgICAgdmFyIGRldmljZVRva2VuID0gTWV0ZW9yLnNldHRpbmdzLm1vb2RsZUFQSVRva2VuO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBNZXRlb3Iuc2V0dGluZ3MuY2xvdWRVUkwgKyBcIi9hcGkvc3RhcnRTeW5jXCI7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdkZXZpY2VTZXJpYWwnOiBkZXZpY2VTZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGV2aWNlVG9rZW4nOiBkZXZpY2VUb2tlblxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBucG1SZXF1ZXN0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEyMDAwMDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMTIwMDAwMFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gSFRUUC5wb3N0KHVybCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRDb250ZW50ID0gcmVzdWx0LmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRDb250ZW50O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIHRyeWluZyB0byBzeW5jaHJvbml6ZS4uLlwiLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNocm9uaXplLi4uIFwiICsgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgIC8vIExFR0FDWSBNRVRIT0QgKGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUnVuIGFyYml0cmFyeSBjb21tYW5kIChkZXByZWNhdGVkIC0gc2hvdWxkIG5vdCBiZSB1c2VkIHdpdGggQVBJKVxuICAgICAgICAgICAgICogVGhpcyBpcyBrZXB0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGJ1dCBsb2dzIGEgd2FybmluZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAncnVuQ29tbWFuZCc6IGZ1bmN0aW9uKHBhc3N3b3JkLCBjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBydW5Db21tYW5kKCkgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBzcGVjaWZpYyBBUEkgbWV0aG9kcyBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2RlcHJlY2F0ZWQnLCBcbiAgICAgICAgICAgICAgICAgICAgJ3J1bkNvbW1hbmQoKSBpcyBkZXByZWNhdGVkLiBUaGUgQVBJIGRvZXMgbm90IHN1cHBvcnQgYXJiaXRyYXJ5IGNvbW1hbmRzIGZvciBzZWN1cml0eSByZWFzb25zLicpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICB9KTsgLy8gRW5kIE1ldGVvci5tZXRob2RzXG4gICAgfSAvLyBFbmQgaWYgTWV0ZW9yLmlzU2VydmVyXG59KTsgLy8gRW5kIE1ldGVvci5zdGFydHVwIiwiLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbEFwcHMnLCBmdW5jdGlvbigpIHtcbi8vIFx0cmV0dXJuIEFwcHMuZmluZCh7fSk7XG4vLyB9KTtcblxuLy8gTWV0ZW9yLnB1Ymxpc2goXCJ1c2Vyc1wiLCBmdW5jdGlvbigpIHtcbi8vICAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoe30sIHtmaWVsZHM6e2NyZWF0ZWRBdDogdHJ1ZSwgcHJvZmlsZTogdHJ1ZSwgZW1haWxzOiB0cnVlLCB1c2VybmFtZTogdHJ1ZX19KTtcbi8vIH0pO1xuXG5cbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIH0pOyIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgVEFQaTE4biB9IGZyb20gJ21ldGVvci90YXA6aTE4bic7XG5pbXBvcnQgeyBXZWJBcHAgfSBmcm9tICdtZXRlb3Ivd2ViYXBwJztcblxuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9hcHBzLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvc3luY2hyb25pemF0aW9ucy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL3VzZXJzLmpzJztcblxuaW1wb3J0ICcuLi9zZXJ2ZXIvZml4dHVyZXMuanMnO1xuaW1wb3J0ICcuLi9zZXJ2ZXIvbWV0aG9kcy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci9wdWJsaWNhdGlvbnMuanMnO1xuaW1wb3J0ICcuLi9saWIvYXBwX2xvYWRlci5qcyc7XG5pbXBvcnQgJy4uL2xpYi9pMThuLmpzJzsgLy8gSW1wb3J0IGkxOG4gY29uZmlndXJhdGlvblxuXG5cbi8vaW1wb3J0IHtERFB9IGZyb20gJ21ldGVvci9kZHAnO1xuLy9pbXBvcnQge0FjY291bnRzfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSc7XG5cblxuLy8gaW1wb3J0ICcuLi9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2ZpeHR1cmVzLmpzJztcblxuLy8gaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9maXh0dXJlcy5qcyc7XG5cblxuTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuXHRjb25zb2xlLmxvZyhcIm1ldGVvciBzdGFydGVkLi4uXCIpO1xuXG4gIC8vIGNvZGUgdG8gcnVuIG9uIHNlcnZlciBhdCBzdGFydHVwXG5cbiAvLyAgU2VydmVyMiA9IEREUC5jb25uZWN0KFwiaHR0cDovL2JlZWtlZS5ib3g6ODNcIik7XG5cdC8vIEFjY291bnRzLmNvbm5lY3Rpb24gPSBTZXJ2ZXIyO1xuXHQvLyBjb25zb2xlLmxvZyhcIm9uIGNvbm5lY3RlLi4uXCIpO1xufSk7XG5cbi8vIEhhbmRsZSBjYXB0aXZlIHBvcnRhbCByZWRpcmVjdHNcbldlYkFwcC5jb25uZWN0SGFuZGxlcnMudXNlKCcvcmVkaXJlY3QnLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXEudXJsLCBgaHR0cDovLyR7cmVxLmhlYWRlcnMuaG9zdH1gKTtcbiAgY29uc3QgdGFyZ2V0VXJsID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3VybCcpO1xuXG4gIGlmICh0YXJnZXRVcmwpIHtcbiAgICAvLyBDcmVhdGUgYSByZWRpcmVjdCBwYWdlIHRoYXQgYXR0ZW1wdHMgdG8gYnJlYWsgb3V0IG9mIGNhcHRpdmUgcG9ydGFsXG4gICAgY29uc3QgaHRtbCA9IGBcbjwhRE9DVFlQRSBodG1sPlxuPGh0bWw+XG48aGVhZD5cbiAgICA8dGl0bGU+UmVkaXJlY3RpbmcuLi48L3RpdGxlPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XG4gICAgPHN0eWxlPlxuICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogIzAwNTZiMzsgfVxuICAgIDwvc3R5bGU+XG48L2hlYWQ+XG48Ym9keT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMj5PcGVuaW5nIEFwcDwvaDI+XG4gICAgICAgIDxwPkF0dGVtcHRpbmcgdG8gb3BlbiB0aGUgYXBwIGluIHlvdXIgbWFpbiBicm93c2VyLi4uPC9wPlxuICAgICAgICA8cD48c3Ryb25nPklmIHRoZSBhcHAgZG9lc24ndCBvcGVuIGF1dG9tYXRpY2FsbHk6PC9zdHJvbmc+PC9wPlxuICAgICAgICA8b2wgc3R5bGU9XCJ0ZXh0LWFsaWduOiBsZWZ0O1wiPlxuICAgICAgICAgICAgPGxpPkNsb3NlIHRoaXMgY2FwdGl2ZSBwb3J0YWwgd2luZG93PC9saT5cbiAgICAgICAgICAgIDxsaT5PcGVuIHlvdXIgcmVndWxhciBicm93c2VyPC9saT5cbiAgICAgICAgICAgIDxsaT5OYXZpZ2F0ZSB0bzogPGNvZGU+JHt0YXJnZXRVcmx9PC9jb2RlPjwvbGk+XG4gICAgICAgIDwvb2w+XG4gICAgICAgIDxhIGhyZWY9XCIke3RhcmdldFVybH1cIiBjbGFzcz1cImJ0blwiIHRhcmdldD1cIl9ibGFua1wiPk9wZW4gQXBwPC9hPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgb25jbGljaz1cIndpbmRvdy5jbG9zZSgpXCI+Q2xvc2UgUG9ydGFsPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8c2NyaXB0PlxuICAgICAgICAvLyBUcnkgbXVsdGlwbGUgbWV0aG9kcyB0byBicmVhayBvdXQgb2YgY2FwdGl2ZSBwb3J0YWxcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIE1ldGhvZCAxOiBUcnkgdG8gb3BlbiBpbiBuZXcgd2luZG93XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdXaW5kb3cgPSB3aW5kb3cub3BlbignJHt0YXJnZXRVcmx9JywgJ19ibGFuaycsICd0b29sYmFyPXllcyxsb2NhdGlvbj15ZXMsZGlyZWN0b3JpZXM9eWVzLHN0YXR1cz15ZXMsbWVudWJhcj15ZXMsc2Nyb2xsYmFycz15ZXMsY29weWhpc3Rvcnk9eWVzLHJlc2l6YWJsZT15ZXMnKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3V2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHdpbmRvdy5jbG9zZSgpOyB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01ldGhvZCAxIGZhaWxlZDonLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgLy8gTWV0aG9kIDI6IERpcmVjdCBuYXZpZ2F0aW9uIGFmdGVyIGRlbGF5XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcke3RhcmdldFVybH0nO1xuICAgICAgICB9LCAzMDAwKTtcblxuICAgICAgICAvLyBNZXRob2QgMzogRm9yIG1vYmlsZSBkZXZpY2VzXG4gICAgICAgIGlmICgvQW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaW50ZW50Oi8vJHt0YXJnZXRVcmwucmVwbGFjZSgvXmh0dHBzPzpcXC9cXC8vLCAnJyl9I0ludGVudDthY3Rpb249YW5kcm9pZC5pbnRlbnQuYWN0aW9uLlZJRVc7Y2F0ZWdvcnk9YW5kcm9pZC5pbnRlbnQuY2F0ZWdvcnkuQlJPV1NBQkxFO2VuZCc7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfVxuICAgIDwvc2NyaXB0PlxuPC9ib2R5PlxuPC9odG1sPmA7XG5cbiAgICByZXMud3JpdGVIZWFkKDIwMCwgeyAnQ29udGVudC1UeXBlJzogJ3RleHQvaHRtbCcgfSk7XG4gICAgcmVzLmVuZChodG1sKTtcbiAgfSBlbHNlIHtcbiAgICByZXMud3JpdGVIZWFkKDQwMCwgeyAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nIH0pO1xuICAgIHJlcy5lbmQoJ01pc3NpbmcgdXJsIHBhcmFtZXRlcicpO1xuICB9XG59KTtcbiJdfQ==
