var require = meteorInstall({"lib":{"i18n":{"en.i18n.json":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// lib/i18n/en.i18n.json                                                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fr.i18n.json":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// lib/i18n/fr.i18n.json                                                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"app_loader.js":function module(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// lib/app_loader.js                                                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"i18n.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// lib/i18n.js                                                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"api":{"apps.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/apps.js                                                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"synchronizations.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/synchronizations.js                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/users.js                                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"fixtures.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// server/fixtures.js                                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// server/methods.js                                                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    exec = Npm.require('child_process').exec;
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
      'changeEmail': function (email) {
        var email = email;
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
        } else return null;
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
        var res = {};
        //res = cmd("df / -h | awk '{print ($3)}' | tail -1") + "/ " + cmd("df / -h | awk '{print ($2)}' | tail -1") + " ("+cmd("df / | awk '{print ($5)}' | tail -1")+"used)";
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
      // 'getWifiBand': function() {
      // 	var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
      // 	var match = data.match(new RegExp('band=(.*)'));

      // 	if (match && match[1]) {
      // 	  return match[1];
      // 	} else {
      // 	  // Return default value if the band setting does not exist
      // 	  return '2.4GHz';
      // 	}
      //   },
      // 'setWifiBand': function(newBand) {
      // 	var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
      // 	var bandRegex = new RegExp('band=(.*)');
      // 	var channelRegex = new RegExp('channel=(.*)');
      // 	var matchBand = data.match(bandRegex);
      // 	var matchChannel = data.match(channelRegex);

      // 	var newData = data;

      // 	if (matchBand) {
      // 		// Replace the existing band setting
      // 		newData = newData.replace(bandRegex, `band=${newBand}`);
      // 	} else {
      // 		// Append the new band setting
      // 		newData = `${newData.trim()}\nband=${newBand}`;
      // 	}

      // 	if (matchChannel && matchChannel[1]) {
      // 		// Convert the channel value to a number
      // 		var currentChannel = parseInt(matchChannel[1], 10);

      // 		// Set channel to a default 2.4GHz channel if current channel is for 5GHz
      // 		if (newBand == "2.4GHz" && currentChannel > 14) {
      // 			newData = newData.replace(channelRegex, `channel=11`);
      // 		} else if (newBand == "5GHz" && currentChannel <= 14) {
      // 			newData = newData.replace(channelRegex, `channel=44`);
      // 		}
      // 	}

      // 	fs.writeFileSync(wifiSettingsPath, newData, 'utf-8');
      // },
      //   'setWifiBand': function(newBand) {
      // 	var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
      // 	var bandRegex = new RegExp('band=(.*)');
      // 	var match = data.match(bandRegex);

      // 	if (match) {
      // 	  // Replace the existing band setting
      // 	  var newData = data.replace(bandRegex, `band=${newBand}`);
      // 	} else {
      // 	  // Append the new band setting
      // 	  var newData = `${data.trim()}\nband=${newBand}`;
      // 	}
      // 	var channelRegex = new RegExp('channel=(.*)');
      // 	var match2 = data.match(channelRegex);
      // 	if (match2 && match2[1]) {
      // 		// Set channel to a default 2.4GHz channel if current channel is for 5GHz
      // 		if (newBand == "2.4GHz" && match2[1] > 14) {
      // 			// Append the new band setting
      // 			var newData2 = data.replace(channelRegex, `channel=11`);
      // 		} else if (newBand == "5GHz" && match2[1] <= 14) {
      // 			var newData2 = data.replace(channelRegex, `channel=44`);
      // 		}
      // 	}
      // 	fs.writeFileSync(wifiSettingsPath, newData, 'utf-8');
      //   },
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
      // 'getSignalStrength': function () {
      // 	var signalStrength;
      // 	signalStrength = cmd("sudo qmicli --device=/dev/cdc-wdm0 --nas-get-signal-strength | grep -m1 Network | awk '{print $3, $2}'");
      // 	return signalStrength;
      // },
      'getSignalStrength': function () {
        var signalStrength;
        // This extracts just the numeric part of the signal strength.
        signalStrength = cmd("sudo qmicli --device=/dev/cdc-wdm0 --nas-get-signal-strength | grep 'Network' | awk '{print $3}' | grep -oE '[-0-9]+'");

        // Convert signal strength to a qualitative value
        var strengthValue = parseInt(signalStrength);
        var quality = 'Unknown';
        if (strengthValue >= -70) {
          quality = 'Excellent';
        } else if (strengthValue >= -85) {
          quality = 'Good';
        } else if (strengthValue >= -100) {
          quality = 'Fair';
        } else if (strengthValue < -100) {
          quality = 'Poor';
        }
        return quality;
      },
      // 'getIsOnline': function () {
      // 	var isOnline;
      // 	isOnline = cmd("sudo qmicli --device=/dev/cdc-wdm0 --nas-get-signal-strength | grep -m1 Network | awk '{print $3, $2}'");
      // 	return isOnline;
      // },
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
      'getSimCardStatus': function () {
        let simStatusResult = 'Unknown'; // Default status

        // Function to execute command and handle errors
        function executeCommand(command) {
          let result;
          try {
            result = cmd(command); // Execute the command
            if (typeof result === 'object' && result !== null) {
              // Check if result is an error object
              return 'Error';
            }
          } catch (error) {
            // Handle exceptions if command execution fails
            return 'Error';
          }
          return result; // Return the result if no errors
        }

        // Execute SIM card status check command
        let simStatus = executeCommand("sudo qmicli --device=/dev/cdc-wdm0 --uim-get-card-status | grep 'Card state:'");
        console.log("SIM card status:", simStatus); // Log the raw output
        // Process the output and determine SIM card status
        if (simStatus.includes('no-atr-received') || simStatus.includes('not-inserted')) {
          simStatusResult = 'No SIM card';
        } else if (simStatus.includes('error')) {
          simStatusResult = simStatus; // Use the error message or no SIM detected message
        } else if (simStatus.includes('present')) {
          simStatusResult = 'OK';
        } else if (simStatus.includes('locked') || simStatus.includes('pin-required')) {
          simStatusResult = 'SIM card locked, PIN required';
        } else {
          simStatusResult = 'Unknown'; // For other statuses
        }
        return simStatusResult;
      },
      'getSimPin': function () {
        var data = fs.readFileSync(configPath, 'utf-8');
        var match = data.match(new RegExp('SIM_PIN=(.*)'));
        var SimPin = match[1];
        return SimPin;
      },
      'setSimPin': function (PIN) {
        var data = fs.readFileSync(configPath, 'utf-8');
        var newData = data.replace(data.match(new RegExp('SIM_PIN=.*')), 'SIM_PIN=' + PIN);
        fs.writeFileSync(configPath, newData, 'utf-8');
      },
      'setAPN': function (APN, user, password) {
        var data = fs.readFileSync(configPath, 'utf-8');
        var newData = data.replace(data.match(new RegExp('APN=.*')), 'APN=' + APN);
        // var newData = data.replace(data.match(new RegExp('APN=(.*)'))[1], APN);
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
      'getShareInternetViaEthernetStatus': function () {
        var isSharing;
        isSharing = cmd("(sudo iptables -t nat -L POSTROUTING -v -n | grep -q 'MASQUERADE  all  --  *      eth0' && ip link show eth0 | grep -q 'state UP') && echo true || echo false");
        return isSharing;
      },
      'getShareInternetViaMobileStatus': function () {
        var isSharing;
        isSharing = cmd("(sudo iptables -t nat -L POSTROUTING -v -n | grep -q 'MASQUERADE  all  --  *      wwan0' && ip link show wwan0 | grep -q 'state UP') && echo true || echo false");
        return isSharing;
      },
      // 'activateInternetSharing': function() {
      // 	var res;
      // 	res = cmd("sudo wifi-ap.config set share.disabled=false");
      // 	return res;
      // },
      // 'disactivateInternetSharing': function() {
      // 	var res;
      // 	res = cmd("sudo wifi-ap.config set share.disabled=true");
      // 	return res;
      // },
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
      'getBatteryStatus': function () {
        var res;
        var scriptsPath = Meteor.settings.scriptsPath;
        res = cmd("python3 " + scriptsPath + "/pijuice_status.py");
        return res;
      },
      // 'getIsOnline': function() {
      // 	var res;
      // 	var scriptsPath = Meteor.settings.scriptsPath;
      // 	// Make sure your script is executable, e.g., chmod +x check_internet.sh
      // 	res = cmd("bash " + scriptsPath + "/check_internet.sh"); // Replace 'bash' with 'sh' if needed
      // 	// The script returns "true" or "false" as a string, so we compare the result directly
      // 	return res.trim() === "true"; // This converts the string to a boolean
      // },
      'getIsOnline': function () {
        let res;
        try {
          res = cmd("ping -c 1 8.8.8.8");
          // Check if the ping command was successful based on the output
          let isOnline = res.includes("1 packets received") || res.includes("1 received");
          console.log("Online status:", isOnline); // Correctly logging the boolean result
          return isOnline; // Directly return the boolean value
        } catch (error) {
          // If an error occurs (which could include being unable to run the ping command), assume offline
          console.log("Error or offline:", error);
          return false; // Assume offline if there's an error
        }
      },
      'getEth0IP': function () {
        // Get IP of box
        var res;
        //console.log("result : "+"ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");
        res = cmd("ip addr show eth0 | grep \"inet\\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");

        //console.log("ip : "+"ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ifconfig "+interface+" 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");
        return res;
      },
      'getWwan0IP': function () {
        // Get IP of box
        var res;
        //console.log("result : "+"ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");
        res = cmd("ip addr show wwan0 | grep \"inet\\b\" | awk '{print $2}' | cut -d/ -f1");

        //res = cmd("ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");

        //console.log("ip : "+"ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ifconfig "+interface+" 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");
        return res;
      },
      'getBeekeeOsVersion': function () {
        var data = fs.readFileSync(configPath, 'utf-8');
        var match = data.match(new RegExp('BEEKEE_OS_VERSION=(.*)'));
        var serial = match[1];
        return serial;
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
      'getInternetInterface': function () {
        let res;
        try {
          res = cmd("ip route get 1.2.3.4 | awk '{print $5; exit}'"); // Execute the command
          if (res.trim()) {
            return res.trim(); // Return the cleaned-up result if not empty
          } else {
            return 'Unknown'; // Return a default message if the result is empty
          }
        } catch (error) {
          // Handle cases where the command fails or is not found
          console.log("Error retrieving internet interface:", error);
          return 'Error'; // Return an error message
        }
      },
      // 'getInternetSharingStatusEthernet': function(callback) {
      // 	// Command to list FORWARD rules
      // 	var listForwardRulesCommand = 'sudo iptables -L FORWARD -n --line-number';

      // 	cmd(listForwardRulesCommand, (error, stdout, stderr) => {
      // 		if (error || stderr) {
      // 			console.error(`Error listing FORWARD rules: ${error || stderr}`);
      // 			if (callback) callback(error || new Error(stderr), null);
      // 			return;
      // 		}

      // 		// Check for general internet sharing rules
      // 		var isGeneralSharingEnabled = stdout.includes('in-interface wlan0 out-interface eth0') && stdout.includes('state RELATED,ESTABLISHED');
      // 		console.log("isGeneralSharingEnabled: "+isGeneralSharingEnabled);
      // 		// Extract MAC address rules
      // 		var macAddressRuleRegex = /MAC ([\da-fA-F:]+) .* in-interface eth0/;
      // 		var match = stdout.match(macAddressRuleRegex);

      // 		// Determine the status based on the rules found
      // 		if (isGeneralSharingEnabled && !match) {
      // 			console.log("step1");
      // 			// Internet sharing is enabled for all
      // 			if (callback) {console.log("step12"); callback(null, { status: 'enabled for all', macAddress: null });}
      // 		} else if (match && match[1]) {
      // 			console.log("step2");

      // 			// Internet sharing is enabled for a specific MAC address
      // 			if (callback) callback(null, { status: 'enabled for specific MAC', macAddress: match[1] });
      // 		} else {
      // 			console.log("step3");

      // 			// Internet sharing is disabled or not configured as expected
      // 			if (callback) callback(null, { status: 'disabled', macAddress: null });
      // 		}
      // 	});
      // },

      //   'getInternetSharingStatusEthernet': function() {
      // 	console.log('Starting to get internet sharing status for Ethernet...');
      // 	var listForwardRulesCommand = 'sudo iptables -L FORWARD -n --line-number';

      // 	// Since cmd is already wrapped by Meteor.wrapAsync(exec),
      // 	// it should return { stdout, stderr } directly.
      // 	try {
      // 	  var { stdout, stderr } = cmd(listForwardRulesCommand);

      // 	  if (stderr) {
      // 		console.error(`Error listing FORWARD rules: ${stderr}`);
      // 		// It's better to return a meaningful error to the client.
      // 		return { error: "Error listing FORWARD rules", details: stderr };
      // 	  }

      // 	  console.log('Analyzing iptables FORWARD rules output...');
      // 	  // Check for general internet sharing rules
      // 	  var isGeneralSharingEnabled = stdout.includes('in-interface wlan0 out-interface eth0') && stdout.includes('state RELATED,ESTABLISHED');
      // 	  console.log(`isGeneralSharingEnabled: ${isGeneralSharingEnabled}`);

      // 	  // Extract MAC address rules
      // 	  var macAddressRuleRegex = /MAC ([\da-fA-F:]+) .* in-interface eth0/;
      // 	  var match = stdout.match(macAddressRuleRegex);
      // 	  console.log(`MAC address found: ${match ? match[1] : 'None'}`);

      // 	  // Determine the status based on the rules found
      // 	  if (isGeneralSharingEnabled && !match) {
      // 		console.log('Internet sharing is enabled for all.');
      // 		return { status: 'enabled for all', macAddress: null };
      // 	  } else if (match && match[1]) {
      // 		console.log(`Internet sharing is enabled for a specific MAC address: ${match[1]}`);
      // 		return { status: 'enabled for specific MAC', macAddress: match[1] };
      // 	  } else {
      // 		console.log('Internet sharing is disabled or not configured as expected.');
      // 		return { status: 'disabled', macAddress: null };
      // 	  }
      // 	} catch (error) {
      // 	  console.error(`Command execution error: ${error}`);
      // 	  // It's better to return a meaningful error to the client.
      // 	  return { error: "Command execution error", details: error.toString() };
      // 	}
      //   },

      //   'getInternetSharingStatusEthernet': function() {
      // 	var listForwardRulesCommand = 'sudo iptables -S FORWARD';
      // 	var commandResult = cmd(listForwardRulesCommand);

      // 	if (!commandResult) {
      // 	  throw new Meteor.Error("command-execution-error", "The command did not return any output.");
      // 	}

      // 	var isGeneralSharingEnabled = commandResult.includes('in-interface wlan0 out-interface eth0') && commandResult.includes('state RELATED,ESTABLISHED');
      // 	var macAddressRuleRegex = /MAC ([\da-fA-F:]+) .* in-interface eth0/;
      // 	var match = commandResult.match(macAddressRuleRegex);

      // 	if (isGeneralSharingEnabled && !match) {
      // 	  return { status: 'enabled for all', macAddress: null };
      // 	} else if (match && match[1]) {
      // 	  return { status: 'enabled for specific MAC', macAddress: match[1] };
      // 	} else {
      // 	  return { status: 'disabled', macAddress: null };
      // 	}
      //   },

      'getInternetSharingStatusEthernet': function () {
        var listForwardRulesCommand = 'sudo iptables -S FORWARD';
        var commandResult = cmd(listForwardRulesCommand);
        if (!commandResult) {
          throw new Meteor.Error("command-execution-error", "The command did not return any output.");
        }
        var sharingFromWlanToEth = null;
        var sharingToWlanFromEthEstablished = null;
        var beekeeOSVersion = Meteor.call('getBeekeeOsVersion');
        console.log("beekeeOSVersion: " + beekeeOSVersion);
        if (beekeeOSVersion >= 20240926) {
          // Check for the specific rule indicating internet sharing from wlan0 to eth0
          sharingFromWlanToEth = commandResult.includes('-A FORWARD -i wlanint -o eth0 -j ACCEPT');
          sharingToWlanFromEthEstablished = commandResult.includes('-A FORWARD -i eth0 -o wlanint -m state --state RELATED,ESTABLISHED -j ACCEPT');
        } else {
          // Check for the specific rule indicating internet sharing from wlan0 to eth0
          sharingFromWlanToEth = commandResult.includes('-A FORWARD -i wlan0 -o eth0 -j ACCEPT');
          sharingToWlanFromEthEstablished = commandResult.includes('-A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT');
        }
        if (sharingFromWlanToEth && sharingToWlanFromEthEstablished) {
          // If at least one pair of rules exists, internet sharing is considered enabled.
          return {
            status: 'enabled for all',
            macAddress: null
          };
        } else {
          return {
            status: 'disabled',
            macAddress: null
          };
        }
      },
      'enableInternetSharingEthernet': function (callback) {
        var iptablesCommands = null;
        var beekeeOSVersion = Meteor.call('getBeekeeOsVersion');
        if (beekeeOSVersion >= 20240926) {
          iptablesCommands = ['sudo iptables --append FORWARD --in-interface wlanint --out-interface eth0 -j ACCEPT', 'sudo iptables --append FORWARD --in-interface wlanusb --out-interface eth0 -j ACCEPT', 'sudo iptables --append FORWARD --in-interface eth0 --out-interface wlanint -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --append FORWARD --in-interface eth0 --out-interface wlanusb -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --table nat --append POSTROUTING --out-interface eth0 -j MASQUERADE', 'sudo netfilter-persistent save'].join(' && ');
        } else {
          iptablesCommands = ['sudo iptables --append FORWARD --in-interface wlan0 --out-interface eth0 -j ACCEPT', 'sudo iptables --append FORWARD --in-interface eth0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --table nat --append POSTROUTING --out-interface eth0 -j MASQUERADE', 'sudo netfilter-persistent save'].join(' && ');
        }
        cmd(iptablesCommands, (error, stdout, stderr) => {
          if (error) {
            console.error("exec error: ".concat(error));
            if (callback) callback(error, null);
            return;
          }
          if (stderr) {
            console.error("stderr: ".concat(stderr));
            if (callback) callback(new Error(stderr), null);
            return;
          }
          console.log('Internet sharing via Ethernet enabled successfully.');
          if (callback) callback(null, stdout);
        });
      },
      'disableInternetSharingEthernet': function (callback) {
        // Define a list of commands to repeatedly attempt deletion.
        var iptablesDeleteCommands = null;
        var beekeeOSVersion = Meteor.call('getBeekeeOsVersion');
        if (beekeeOSVersion >= 20240926) {
          iptablesDeleteCommands = ['sudo iptables --delete FORWARD --in-interface wlanint --out-interface eth0 -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface wlanusb --out-interface eth0 -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface eth0 --out-interface wlanint -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface eth0 --out-interface wlanusb -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --table nat --delete POSTROUTING --out-interface eth0 -j MASQUERADE', 'sudo netfilter-persistent save'];
        } else {
          iptablesDeleteCommands = ['sudo iptables --delete FORWARD --in-interface wlan0 --out-interface eth0 -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface eth0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --table nat --delete POSTROUTING --out-interface eth0 -j MASQUERADE', 'sudo netfilter-persistent save'];
        }

        // Function to execute a command and recursively call itself if the command was successful (rule was found and deleted).
        function executeAndRepeat(command, doneCallback) {
          cmd(command, (error, stdout, stderr) => {
            // If there's no error, the rule was found and deleted, so try again.
            if (!error) {
              executeAndRepeat(command, doneCallback);
            } else {
              // If there's an error, it likely means no more instances of the rule exist, so call the doneCallback.
              doneCallback();
            }
          });
        }

        // Execute deletion for each command and track completion.
        var tasksCompleted = 0;
        iptablesDeleteCommands.forEach(command => {
          executeAndRepeat(command, () => {
            tasksCompleted++;
            // Once all deletion tasks are done, save the iptables configuration.
            if (tasksCompleted === iptablesDeleteCommands.length) {
              cmd('sudo netfilter-persistent save', (error, stdout, stderr) => {
                if (error) {
                  console.error("exec error during saving iptables rules: ".concat(error));
                  if (callback) callback(error);
                  return;
                }
                console.log("iptables rules saved.");
                if (callback) callback(null, 'All specified rules removed and changes saved.');
              });
            }
          });
        });
      },
      // 'disableInternetSharingEthernet': function(callback) {
      // 	var iptablesCommands = [
      // 		'sudo iptables --delete FORWARD --in-interface wlan0 --out-interface eth0 -j ACCEPT',
      // 		'sudo iptables --delete FORWARD --in-interface eth0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT',
      // 		'sudo iptables --table nat --delete POSTROUTING --out-interface eth0 -j MASQUERADE',
      // 		'sudo netfilter-persistent save'
      // 	].join(' && ');

      // 	cmd(iptablesCommands, (error, stdout, stderr) => {
      // 		if (error) {
      // 			console.error(`exec error: ${error}`);
      // 			if (callback) callback(error, null);
      // 			return;
      // 		}
      // 		if (stderr) {
      // 			console.error(`stderr: ${stderr}`);
      // 			if (callback) callback(new Error(stderr), null);
      // 			return;
      // 		}
      // 		console.log('Internet sharing via Ethernet disabled successfully.');
      // 		if (callback) callback(null, stdout);
      // 	});
      // },
      'enableInternetForMacEthernet': function (macAddress, callback) {
        var res;
        // Command to allow internet for the specified MAC address on eth0.
        var allowMacCommand = "sudo iptables -A FORWARD -i eth0 -m mac --mac-source ".concat(macAddress, " -j ACCEPT");
        // Command to drop all other internet traffic on eth0.
        var blockOthersCommand = "sudo iptables -A FORWARD -i eth0 -j DROP";

        // Allow internet for the specified MAC address.
        res = cmd(allowMacCommand, (error, stdout, stderr) => {
          if (error) {
            console.error("exec error during allowing MAC ".concat(macAddress, ": ").concat(error));
            callback(error);
            return;
          }
          console.log("Internet access allowed for MAC ".concat(macAddress, "."));

          // Block all other MAC addresses from accessing the internet.
          res = cmd(blockOthersCommand, (error, stdout, stderr) => {
            if (error) {
              console.error("exec error during blocking other MACs: ".concat(error));
              callback(error);
              return;
            }
            console.log("Internet access blocked for other MAC addresses.");
            // Optionally, save the iptables settings to make them persistent.
            cmd('sudo netfilter-persistent save', (error, stdout, stderr) => {
              if (error) {
                console.error("exec error during saving iptables rules: ".concat(error));
                callback(error);
                return;
              }
              console.log("iptables rules saved.");
              callback(null);
            });
          });
        });
      },
      'removeAllMacFiltersForEthernet': function (callback) {
        // List all FORWARD rules with line numbers
        cmd('sudo iptables -L FORWARD --line-numbers -n', (error, stdout, stderr) => {
          if (error) {
            console.error("Error listing FORWARD rules: ".concat(error));
            if (callback) callback(error, null);
            return;
          }

          // Process stdout to identify rules related to MAC filtering on eth0
          const lines = stdout.split('\n');
          const ruleNumbers = lines.reduce((acc, line, index) => {
            if (line.includes('eth0') && line.toLowerCase().includes('mac')) {
              const ruleNumber = line.split(/\s+/)[0]; // Extract the rule number, assuming it's the first element
              acc.push(ruleNumber);
            }
            return acc;
          }, []);

          // Remove identified rules starting from the highest number to prevent shifting of line numbers
          ruleNumbers.sort((a, b) => b - a).forEach(ruleNumber => {
            cmd("sudo iptables -D FORWARD ".concat(ruleNumber), (removeError, removeStdout, removeStderr) => {
              if (removeError) {
                console.error("Error removing rule ".concat(ruleNumber, ": ").concat(removeError));
                // Decide if you want to continue removing other rules or stop here
                return;
              }
              console.log("Rule ".concat(ruleNumber, " removed successfully."));
            });
          });

          // After attempting to remove all identified rules, save the iptables configuration
          cmd('sudo netfilter-persistent save', (saveError, saveStdout, saveStderr) => {
            if (saveError) {
              console.error("Error saving iptables rules: ".concat(saveError));
              if (callback) callback(saveError, null);
              return;
            }
            console.log('iptables rules updated and saved.');
            if (callback) callback(null, 'All MAC filter rules for Ethernet removed and changes saved.');
          });
        });
      },
      'getInternetSharingStatusMobile': function () {
        var listForwardRulesCommand = 'sudo iptables -S FORWARD';
        var commandResult = cmd(listForwardRulesCommand);
        if (!commandResult) {
          throw new Meteor.Error("command-execution-error", "The command did not return any output.");
        }

        // Adjusted to check for the specific rule indicating internet sharing from wlanint to wwan0
        var sharingFromWlanToWwan = null;
        var sharingToWlanFromWwanEstablished = null;
        var beekeeOSVersion = Meteor.call('getBeekeeOsVersion');
        if (beekeeOSVersion >= 20240926) {
          sharingFromWlanToWwan = commandResult.includes('-A FORWARD -i wlanint -o wwan0 -j ACCEPT');
          sharingToWlanFromWwanEstablished = commandResult.includes('-A FORWARD -i wwan0 -o wlanint -m state --state RELATED,ESTABLISHED -j ACCEPT');
        } else {
          sharingFromWlanToWwan = commandResult.includes('-A FORWARD -i wlan0 -o wwan0 -j ACCEPT');
          sharingToWlanFromWwanEstablished = commandResult.includes('-A FORWARD -i wwan0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT');
        }
        if (sharingFromWlanToWwan && sharingToWlanFromWwanEstablished) {
          // If at least one pair of rules exists, internet sharing to the mobile interface is considered enabled.
          return {
            status: 'enabled for all',
            macAddress: null
          };
        } else {
          return {
            status: 'disabled',
            macAddress: null
          };
        }
      },
      // 'getInternetSharingStatusMobile': function(callback) {
      // 	// Command to list FORWARD rules
      // 	var listForwardRulesCommand = 'sudo iptables -L FORWARD -n --line-number';

      // 	cmd(listForwardRulesCommand, (error, stdout, stderr) => {
      // 		if (error || stderr) {
      // 			console.error(`Error listing FORWARD rules: ${error || stderr}`);
      // 			if (callback) callback(error || new Error(stderr), null);
      // 			return;
      // 		}

      // 		// Check for general internet sharing rules
      // 		var isGeneralSharingEnabled = stdout.includes('in-interface wlan0 out-interface wwan0') && stdout.includes('state RELATED,ESTABLISHED');

      // 		// Extract MAC address rules
      // 		var macAddressRuleRegex = /MAC ([\da-fA-F:]+) .* in-interface wwan0/;
      // 		var match = stdout.match(macAddressRuleRegex);

      // 		// Determine the status based on the rules found
      // 		if (isGeneralSharingEnabled && !match) {
      // 			// Internet sharing is enabled for all
      // 			if (callback) callback(null, { status: 'enabled for all', macAddress: null });
      // 		} else if (match && match[1]) {
      // 			// Internet sharing is enabled for a specific MAC address
      // 			if (callback) callback(null, { status: 'enabled for specific MAC', macAddress: match[1] });
      // 		} else {
      // 			// Internet sharing is disabled or not configured as expected
      // 			if (callback) callback(null, { status: 'disabled', macAddress: null });
      // 		}
      // 	});
      // },

      'enableInternetSharingMobile': function (callback) {
        var iptablesCommands = null;
        var beekeeOSVersion = Meteor.call('getBeekeeOsVersion');
        if (beekeeOSVersion >= 20240926) {
          iptablesCommands = ['sudo iptables --append FORWARD --in-interface wlanint --out-interface wwan0 -j ACCEPT', 'sudo iptables --append FORWARD --in-interface wlanusb --out-interface wwan0 -j ACCEPT', 'sudo iptables --append FORWARD --in-interface wwan0 --out-interface wlanint -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --append FORWARD --in-interface wwan0 --out-interface wlanusb -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --table nat --append POSTROUTING --out-interface wwan0 -j MASQUERADE', 'sudo netfilter-persistent save'].join(' && ');
        } else {
          iptablesCommands = ['sudo iptables --append FORWARD --in-interface wlan0 --out-interface wwan0 -j ACCEPT', 'sudo iptables --append FORWARD --in-interface wwan0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --table nat --append POSTROUTING --out-interface wwan0 -j MASQUERADE', 'sudo netfilter-persistent save'].join(' && ');
        }
        cmd(iptablesCommands, (error, stdout, stderr) => {
          if (error) {
            console.error("exec error: ".concat(error));
            if (callback) callback(error, null);
            return;
          }
          if (stderr) {
            console.error("stderr: ".concat(stderr));
            if (callback) callback(new Error(stderr), null);
            return;
          }
          console.log('Internet sharing via mobile enabled successfully.');
          if (callback) callback(null, stdout);
        });
      },
      'disableInternetSharingMobile': function (callback) {
        // Define commands for deletion without combining them
        var iptablesDeleteCommands = null;
        var beekeeOSVersion = Meteor.call('getBeekeeOsVersion');
        if (beekeeOSVersion >= 20240926) {
          var iptablesDeleteCommands = ['sudo iptables --delete FORWARD --in-interface wlanint --out-interface wwan0 -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface wlanusb --out-interface wwan0 -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface wwan0 --out-interface wlanint -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface wwan0 --out-interface wlanusb -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --table nat --delete POSTROUTING --out-interface wwan0 -j MASQUERADE'];
        } else {
          var iptablesDeleteCommands = ['sudo iptables --delete FORWARD --in-interface wlan0 --out-interface wwan0 -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface wwan0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --table nat --delete POSTROUTING --out-interface wwan0 -j MASQUERADE'];
        }

        // Function to recursively execute a command until it fails (indicating no more instances of the rule)
        function executeAndRepeat(command, doneCallback) {
          cmd(command, (error, stdout, stderr) => {
            // No error means the command succeeded, so there might be more instances
            if (!error) {
              executeAndRepeat(command, doneCallback);
            } else {
              // Error likely means no more instances of the rule, move on
              doneCallback();
            }
          });
        }

        // Execute deletion for each command and track when all are completed
        var tasksCompleted = 0;
        iptablesDeleteCommands.forEach(command => {
          executeAndRepeat(command, () => {
            tasksCompleted++;
            // After all commands have been attempted, save the configuration
            if (tasksCompleted === iptablesDeleteCommands.length) {
              cmd('sudo netfilter-persistent save', (error, saveStdout, saveStderr) => {
                if (error) {
                  console.error("Error saving iptables rules: ".concat(error));
                  if (callback) callback(error, null);
                  return;
                }
                console.log('iptables rules for mobile interface updated and saved.');
                if (callback) callback(null, 'All specified rules for mobile interface removed and changes saved.');
              });
            }
          });
        });
      },
      // 'disableInternetSharingMobile': function(callback) {
      // 	var iptablesCommands = [
      // 		'sudo iptables --delete FORWARD --in-interface wlan0 --out-interface wwan0 -j ACCEPT',
      // 		'sudo iptables --delete FORWARD --in-interface wwan0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT',
      // 		'sudo iptables --table nat --delete POSTROUTING --out-interface wwan0 -j MASQUERADE',
      // 		'sudo netfilter-persistent save'
      // 	].join(' && ');

      // 	cmd(iptablesCommands, (error, stdout, stderr) => {
      // 		if (error) {
      // 			console.error(`exec error: ${error}`);
      // 			if (callback) callback(error, null);
      // 			return;
      // 		}
      // 		if (stderr) {
      // 			console.error(`stderr: ${stderr}`);
      // 			if (callback) callback(new Error(stderr), null);
      // 			return;
      // 		}
      // 		console.log('Internet sharing via mobile disabled successfully.');
      // 		if (callback) callback(null, stdout);
      // 	});
      // },
      'allowInternetForMacMobile': function (macAddress, callback) {
        var res;
        // First, enable general internet sharing from wlan0 to wwan0
        res = cmd('sudo iptables --append FORWARD --in-interface wlan0 --out-interface wwan0 -j ACCEPT && sudo iptables --append FORWARD --in-interface wwan0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT && sudo iptables --table nat --append POSTROUTING --out-interface wwan0 -j MASQUERADE', (error, stdout, stderr) => {
          if (error) {
            console.error("exec error during enabling internet sharing: ".concat(error));
            return callback(error);
          }
          console.log("Internet sharing enabled via wwan0.");
          // Allow internet only for the specified MAC address on wwan0
          var allowMacCommand = "sudo iptables -I FORWARD 1 -i wwan0 -m mac --mac-source ".concat(macAddress, " -j ACCEPT");
          // Block all other MAC addresses from accessing the internet via wwan0.
          var blockOthersCommand = "sudo iptables -A FORWARD -i wwan0 -j DROP";

          // Allow specific MAC
          res = cmd(allowMacCommand, (error, stdout, stderr) => {
            if (error) {
              console.error("exec error during allowing MAC ".concat(macAddress, " on WWAN: ").concat(error));
              return callback(error);
            }
            console.log("Internet access allowed for MAC ".concat(macAddress, " on WWAN."));

            // Block all other MACs
            res = cmd(blockOthersCommand, (error, stdout, stderr) => {
              if (error) {
                console.error("exec error during blocking other MACs on WWAN: ".concat(error));
                return callback(error);
              }
              console.log("Internet access blocked for other MAC addresses on WWAN.");

              // Save iptables rules
              cmd('sudo netfilter-persistent save', (error, stdout, stderr) => {
                if (error) {
                  console.error("exec error during saving iptables rules for WWAN: ".concat(error));
                  return callback(error);
                }
                console.log("iptables rules for WWAN saved.");
                callback(null);
              });
            });
          });
        });
      },
      'removeAllMacFiltersForMobile': function (callback) {
        // List all FORWARD rules
        cmd('sudo iptables -L FORWARD --line-numbers -n', (error, stdout, stderr) => {
          if (error) {
            console.error("Error listing rules: ".concat(error));
            if (callback) callback(error, null);
            return;
          }

          // Process stdout to find rules to delete. This part is pseudo-code and needs adjustment
          const lines = stdout.split('\n');
          const ruleNumbers = [];
          lines.forEach(line => {
            if (line.includes('wwan0') && line.includes('MAC')) {
              // Extract the rule number from the line
              const ruleNumber = line.split(' ')[0]; // This is a simplification
              ruleNumbers.push(ruleNumber);
            }
          });

          // Remove rules by their numbers, starting from the highest number
          ruleNumbers.sort((a, b) => b - a).forEach(ruleNumber => {
            cmd("sudo iptables -D FORWARD ".concat(ruleNumber), (error, stdout, stderr) => {
              if (error) {
                console.error("Error removing rule ".concat(ruleNumber, ": ").concat(error));
                if (callback) callback(error, null);
                // Optionally, stop the process or continue attempting to remove other rules
                return;
              }
              console.log("Rule ".concat(ruleNumber, " removed successfully."));
            });
          });

          // After all rules have been processed, save the iptables rules
          cmd('sudo netfilter-persistent save', (error, stdout, stderr) => {
            if (error) {
              console.error("Error saving iptables rules: ".concat(error));
              if (callback) callback(error, null);
              return;
            }
            console.log('iptables rules updated and saved.');
            if (callback) callback(null, 'All MAC filter rules for WWAN removed and changes saved.');
          });
        });
      },
      'reboot': function () {
        var res;
        res = cmd('sudo reboot', (error, stdout, stderr) => {
          if (error) {
            console.error("exec error: ".concat(error));
            return;
          } else {
            return res;
          }
        });
      },
      'shutdown': function () {
        var res;
        res = cmd('sudo halt', (error, stdout, stderr) => {
          if (error) {
            console.error("exec error: ".concat(error));
            return;
          } else {
            return res;
          }
        });
      },
      'synchronize': function () {
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
          //var result = HTTP.call('POST', url, options);

          var result = HTTP.post(url, options);
          var resultContent = result.content;
          //Synchronizations.insert({date:Date.now()});
          return resultContent;
        } catch (e) {
          console.log("Error while trying to syncronize...", e);
          return "Error while trying to syncronize... " + e;
        }
        //return resultContent;
      }
    });
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publications.js":function module(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// server/publications.js                                                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// server/main.js                                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"project-i18n.js":function module(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// project-i18n.js                                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
TAPi18n._enable({"helper_name":"_","supported_languages":["en","fr"],"i18n_files_route":"/tap-i18n","preloaded_langs":[]});
TAPi18n.languages_names["en"] = ["English","English"];
TAPi18n.languages_names["en"] = ["English","English"];
TAPi18n.languages_names["fr"] = ["French (France)","Français"];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/lib/i18n/en.i18n.json");
require("/lib/i18n/fr.i18n.json");
require("/project-i18n.js");
var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi9pMThuLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9hcHBzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9zeW5jaHJvbml6YXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS91c2Vycy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL2ZpeHR1cmVzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWV0aG9kcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3B1YmxpY2F0aW9ucy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsiTWV0ZW9yIiwiaXNTZXJ2ZXIiLCJJbmplY3QiLCJyYXdIZWFkIiwicmF3Qm9keSIsIkFzc2V0cyIsImdldFRleHQiLCJpc0NsaWVudCIsInN0YXJ0dXAiLCJzZXRUaW1lb3V0IiwiJCIsImFkZENsYXNzIiwiZmFkZU91dCIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwibW9kdWxlIiwiZXhwb3J0IiwiVEFQaTE4biIsImxpbmsiLCJ2Iiwic2V0TGFuZ3VhZ2UiLCJjb25zb2xlIiwibG9nIiwiQXBwcyIsIk1vbmdvIiwiQ29sbGVjdGlvbiIsImFsbG93IiwiaW5zZXJ0IiwidXBkYXRlIiwidXNlcklkIiwic3BhY2UiLCJwdWJsaXNoIiwiYXBwc1B1YmxpY2F0aW9uIiwiZmluZCIsIlN5bmNocm9uaXphdGlvbnMiLCJzeW5jaHJvbml6YXRpb25zUHVibGljYXRpb24iLCJpc0FkbWluIiwiUm9sZXMiLCJ1c2VySXNJblJvbGUiLCJ1c2VyIiwicm9sZUFzc2lnbm1lbnQiLCJyZWFkeSIsImNyZWF0ZVJvbGUiLCJ1bmxlc3NFeGlzdHMiLCJ1c2VycyIsImNvdW50IiwiYWRtaW5QYXNzd29yZCIsInNldHRpbmdzIiwidXNlcm5hbWUiLCJyb2xlcyIsIl8iLCJlYWNoIiwiaWQiLCJBY2NvdW50cyIsImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJvZmlsZSIsIm5hbWUiLCJsZW5ndGgiLCJhZGRVc2Vyc1RvUm9sZXMiLCJkZWZhdWx0QXBwcyIsImN1c3RvbUFwcCIsIm9ubHlUZWFjaGVyIiwib3JkZXIiLCJkb2NfdXNlciIsImRvY19hZG1pbiIsImxhc3RfdmVyc2lvbiIsInVybCIsImljb24iLCJkZXNjcmlwdGlvbiIsImluc3RhbGxlZCIsInZlcnNpb24iLCJoaWRkZW4iLCJIVFRQIiwiZnMiLCJOcG0iLCJyZXF1aXJlIiwiZXhlYyIsImNtZCIsIndyYXBBc3luYyIsIndpZmlTZXR0aW5nc1BhdGgiLCJjb25maWdQYXRoIiwicmVhZGxpbmUiLCJtZXRob2RzIiwiYWRtaW5TZXROZXdQYXNzd29yZCIsImFkbWluSWQiLCJuZXdQYXNzd29yZCIsInNldFBhc3N3b3JkIiwiY3JlYXRlQWNjb3VudCIsImVkaXRBY2NvdW50IiwiX2lkIiwiJHNldCIsImNoYW5nZUVtYWlsIiwiY2hlY2siLCJTdHJpbmciLCJvbGRlbWFpbCIsImVtYWlscyIsImVtYWlsUmVnIiwidGVzdCIsInJlbW92ZUVtYWlsIiwiYWRkcmVzcyIsImFkZEVtYWlsIiwiZGVsZXRlVXNlciIsImVycm9yIiwicmVzdWx0IiwibWVzc2FnZSIsImFkZE1hbmFnZXJSb2xlIiwicmVtb3ZlTWFuYWdlclJvbGUiLCJyZW1vdmVVc2Vyc0Zyb21Sb2xlcyIsImFkZEFkbWluUm9sZSIsInJlbW92ZUFkbWluUm9sZSIsInJ1bkNvbW1hbmQiLCJjb21tYW5kIiwicmVzIiwiZ2V0VXNlZFNwYWNlIiwic3RvcmFnZVVzYWdlIiwidG9GaXhlZCIsInN0b3JhZ2VUb3RhbCIsInBlcmNlbnRhZ2UiLCJnZXRTU0lEIiwiZGF0YSIsInJlYWRGaWxlU3luYyIsIm1hdGNoIiwiUmVnRXhwIiwiU1NJRCIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJzZXRTU0lEIiwibmV3U1NJRCIsImVuY29kZWROZXdTU0lEIiwiQnVmZmVyIiwidG9TdHJpbmciLCJuZXdEYXRhIiwid3JpdGVGaWxlU3luYyIsImdldFdpZmlQYXNzd29yZCIsInNldFdpZmlQYXNzd29yZCIsImdldFdpZmlDaGFubmVsIiwiY2hhbm5lbCIsInNldFdpZmlDaGFubmVsIiwibmV3Q2hhbm5lbCIsImdldFNlcmlhbCIsInNlcmlhbCIsImdldE9wZXJhdG9yTmFtZSIsIm9wZXJhdG9yTmFtZSIsImdldFNpZ25hbFN0cmVuZ3RoIiwic2lnbmFsU3RyZW5ndGgiLCJzdHJlbmd0aFZhbHVlIiwicGFyc2VJbnQiLCJxdWFsaXR5IiwiZ2V0QVBOIiwiQVBOIiwiZ2V0QVBOVXNlciIsIkFQTlVzZXIiLCJnZXRBUE5QYXNzd29yZCIsIkFQTlBhc3N3b3JkIiwiZ2V0U2ltQ2FyZFN0YXR1cyIsInNpbVN0YXR1c1Jlc3VsdCIsImV4ZWN1dGVDb21tYW5kIiwic2ltU3RhdHVzIiwiaW5jbHVkZXMiLCJnZXRTaW1QaW4iLCJTaW1QaW4iLCJzZXRTaW1QaW4iLCJQSU4iLCJzZXRBUE4iLCJzZXRBUE5Vc2VyIiwic2V0QVBOUGFzc3dvcmQiLCJnZXRSZW1vdGVTdGF0dXMiLCJnZXRBdXRvU3luY1N0YXR1cyIsImdldFNoYXJlSW50ZXJuZXRWaWFFdGhlcm5ldFN0YXR1cyIsImlzU2hhcmluZyIsImdldFNoYXJlSW50ZXJuZXRWaWFNb2JpbGVTdGF0dXMiLCJhY3RpdmF0ZVJlbW90ZSIsInJlczIiLCJkaXNhY3RpdmF0ZVJlbW90ZSIsImFjdGl2YXRlQXV0b1N5bmMiLCJkaXNhY3RpdmF0ZUF1dG9TeW5jIiwiZ2V0QmF0dGVyeVN0YXR1cyIsInNjcmlwdHNQYXRoIiwiZ2V0SXNPbmxpbmUiLCJpc09ubGluZSIsImdldEV0aDBJUCIsImdldFd3YW4wSVAiLCJnZXRCZWVrZWVPc1ZlcnNpb24iLCJnZXRCZWVrZWVIb21lVmVyc2lvbiIsImpzb24iLCJKU09OIiwicGFyc2UiLCJyZXN0YXJ0TW9iaWxlQ29ubmVjdCIsImdldEludGVybmV0SW50ZXJmYWNlIiwidHJpbSIsImdldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0IiwibGlzdEZvcndhcmRSdWxlc0NvbW1hbmQiLCJjb21tYW5kUmVzdWx0IiwiRXJyb3IiLCJzaGFyaW5nRnJvbVdsYW5Ub0V0aCIsInNoYXJpbmdUb1dsYW5Gcm9tRXRoRXN0YWJsaXNoZWQiLCJiZWVrZWVPU1ZlcnNpb24iLCJjYWxsIiwic3RhdHVzIiwibWFjQWRkcmVzcyIsImVuYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0IiwiY2FsbGJhY2siLCJpcHRhYmxlc0NvbW1hbmRzIiwiam9pbiIsInN0ZG91dCIsInN0ZGVyciIsImNvbmNhdCIsImRpc2FibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCIsImlwdGFibGVzRGVsZXRlQ29tbWFuZHMiLCJleGVjdXRlQW5kUmVwZWF0IiwiZG9uZUNhbGxiYWNrIiwidGFza3NDb21wbGV0ZWQiLCJmb3JFYWNoIiwiZW5hYmxlSW50ZXJuZXRGb3JNYWNFdGhlcm5ldCIsImFsbG93TWFjQ29tbWFuZCIsImJsb2NrT3RoZXJzQ29tbWFuZCIsInJlbW92ZUFsbE1hY0ZpbHRlcnNGb3JFdGhlcm5ldCIsImxpbmVzIiwic3BsaXQiLCJydWxlTnVtYmVycyIsInJlZHVjZSIsImFjYyIsImxpbmUiLCJpbmRleCIsInRvTG93ZXJDYXNlIiwicnVsZU51bWJlciIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJyZW1vdmVFcnJvciIsInJlbW92ZVN0ZG91dCIsInJlbW92ZVN0ZGVyciIsInNhdmVFcnJvciIsInNhdmVTdGRvdXQiLCJzYXZlU3RkZXJyIiwiZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzTW9iaWxlIiwic2hhcmluZ0Zyb21XbGFuVG9Xd2FuIiwic2hhcmluZ1RvV2xhbkZyb21Xd2FuRXN0YWJsaXNoZWQiLCJlbmFibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUiLCJkaXNhYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlIiwiYWxsb3dJbnRlcm5ldEZvck1hY01vYmlsZSIsInJlbW92ZUFsbE1hY0ZpbHRlcnNGb3JNb2JpbGUiLCJyZWJvb3QiLCJzaHV0ZG93biIsInN5bmNocm9uaXplIiwiZGV2aWNlU2VyaWFsIiwicHVibGljIiwiZGV2aWNlVG9rZW4iLCJtb29kbGVBUElUb2tlbiIsImNsb3VkVVJMIiwib3B0aW9ucyIsImhlYWRlcnMiLCJucG1SZXF1ZXN0T3B0aW9ucyIsInJlamVjdFVuYXV0aG9yaXplZCIsInRpbWVvdXQiLCJwb3N0IiwicmVzdWx0Q29udGVudCIsImNvbnRlbnQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFO0VBQ3BCQyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsMk5BQTJOLENBQUM7RUFFelBELE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLFlBQVksRUFBRUMsTUFBTSxDQUFDQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNoRTtBQUVBLElBQUlOLE1BQU0sQ0FBQ08sUUFBUSxFQUFFO0VBQ3BCUCxNQUFNLENBQUNRLE9BQU8sQ0FBQyxZQUFXO0lBRXpCQyxVQUFVLENBQUMsWUFBVztNQUNqQkMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsZUFBZSxDQUFDO01BRS9DRCxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ0UsT0FBTyxDQUFDLEdBQUcsRUFBRSxZQUFXO1FBQ25ERixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNHLE1BQU0sQ0FBQyxDQUFDO1FBQ2hCSCxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNJLFdBQVcsQ0FBQyxlQUFlLENBQUM7TUFDaEQsQ0FBQyxDQUFDO0lBQ0YsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNSLENBQUMsQ0FBQztBQUNILEM7Ozs7Ozs7Ozs7O0FDbEJBQyxNQUFNLENBQUNDLE1BQU0sQ0FBQztFQUFDQyxPQUFPLEVBQUNB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cikge1xuXHRJbmplY3QucmF3SGVhZChcIm1ldGFMb2FkZXJcIiwgJzxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT0wLCB3aWR0aD1kZXZpY2Utd2lkdGgsIGhlaWdodD1kZXZpY2UtaGVpZ2h0XCIvPjxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiPlx0PG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCI+Jyk7XG5cblx0SW5qZWN0LnJhd0JvZHkoXCJodG1sTG9hZGVyXCIsIEFzc2V0cy5nZXRUZXh0KCdhcHBfbG9hZGVyLmh0bWwnKSk7XG59XG5cbmlmIChNZXRlb3IuaXNDbGllbnQpIHtcblx0TWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24oKSB7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQkKCcuaW5kZXgtLWljb24nKS5hZGRDbGFzcygnYW5pbWF0ZWQtaWNvbicpO1xuXG5cdFx0XHQkKFwiI2luamVjdC1sb2FkZXItd3JhcHBlclwiKS5mYWRlT3V0KDUwMCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdCQoJy5pbmRleC0taWNvbicpLnJlbW92ZUNsYXNzKCdhbmltYXRlZC1pY29uJyk7XG5cdFx0fSk7XG5cdFx0fSwgNTAwKTtcblx0fSk7XG59IiwiaW1wb3J0IHsgVEFQaTE4biB9IGZyb20gJ21ldGVvci90YXA6aTE4bic7XG5cbi8vIEluaXRpYWxpemUgVEFQaTE4biBvbiBjbGllbnQgc3RhcnR1cFxuaWYgKE1ldGVvci5pc0NsaWVudCkge1xuICBNZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IGxhbmd1YWdlXG4gICAgVEFQaTE4bi5zZXRMYW5ndWFnZSgnZW4nKTtcbiAgICBjb25zb2xlLmxvZygnVEFQaTE4biBpbml0aWFsaXplZCB3aXRoIGxhbmd1YWdlOiBlbicpO1xuICB9KTtcbn1cblxuLy8gRXhwb3J0IGZvciB1c2UgaW4gb3RoZXIgZmlsZXMgaWYgbmVlZGVkXG5leHBvcnQgeyBUQVBpMThuIH07XG4iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgQXBwcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdob21lLWFwcHMnKTtcblxuXG5cbkFwcHMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0dXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblx0cmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsQXBwcycsIGZ1bmN0aW9uIGFwcHNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gQXBwcy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBTeW5jaHJvbml6YXRpb25zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtc3luY2hyb25pemF0aW9ucycpO1xuXG5cblxuU3luY2hyb25pemF0aW9ucy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHJlbW92ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsU3luY2hyb25pemF0aW9ucycsIGZ1bmN0aW9uIHN5bmNocm9uaXphdGlvbnNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gU3luY2hyb25pemF0aW9ucy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuLy8gdmFyIHVzZXJzREJcdD0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vIHZhciBjb2xsZWN0aW9uXHQ9IHVzZXJzREIub3BlbigndXNlcnMnKTtcblxuXG4vL2NvbnN0IGRhdGFiYXNlID0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vY29uc3QgY29sbGVjdGlvbiA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy9leHBvcnQgY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vIFNoYXJpbmcgdGhlIHNhbWUgQWNjb3VudCBjb2xsZWN0aW9uIHRoYW4gYmVla2VlLWxpdmVcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHQvLyBjaGVjayB0aGF0IHRoZSB1c2VySWQgc3BlY2lmaWVkIGlzIGFkbWluXG5pc0FkbWluID0gZnVuY3Rpb24odXNlcklkKSB7XG5cdGNvbnNvbGUubG9nKFwiaXNhZG1pblwiKTtcbiAgcmV0dXJuIFJvbGVzLnVzZXJJc0luUm9sZShNZXRlb3IudXNlcigpLCAnYWRtaW4nKTtcbn1cblxuXG4vLyBQdWJsaXNoIFJvbGVzIHRvIGNsaWVudFxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoeyAndXNlci5faWQnOiB0aGlzLnVzZXJJZCB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJlYWR5KClcbiAgfVxufSk7XG5cbk1ldGVvci5wdWJsaXNoKG51bGwsIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCgpO1xuXG59KTtcblxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG5cbi8vIFNlcnZlcjIgPSBERFAuY29ubmVjdChcImh0dHA6Ly9iZWVrZWUuYm94OjgzXCIpO1xuLy8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFNlcnZlcjI7XG5cblxuLy92YXIgZGF0YWJhc2UgPSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy9NZXRlb3IudXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vZXhwb3J0IGNvbnN0IFVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2FwcHMnKTtcblxuXG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG59IiwiaW1wb3J0IHsgQXBwcyB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuXG5cdC8vIENyZWF0ZSB0aGUgcm9sZXNcblx0Um9sZXMuY3JlYXRlUm9sZSgnbWFuYWdlcicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblxuXG4vLyAjIyMgIENyZWF0ZSBhZG1pbiB1c2VyIGF0IGZpcnN0IHN0YXJ0ICAjIyNcblxuXG5pZiAoTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG5cdFxuXHQvLyBDcmVhdGUgdGhlIHJvbGVcblx0Um9sZXMuY3JlYXRlUm9sZSgnbWFuYWdlcicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblx0Um9sZXMuY3JlYXRlUm9sZSgnYWRtaW4nLCB7dW5sZXNzRXhpc3RzOiB0cnVlfSk7XG5cblx0dmFyIGFkbWluUGFzc3dvcmQgPSBNZXRlb3Iuc2V0dGluZ3MuYWRtaW5QYXNzd29yZDtcblxuXHR2YXIgdXNlcnMgPSBbXG5cdFx0e3VzZXJuYW1lOlwiYWRtaW5cIixyb2xlczpbJ2FkbWluJ119LFxuXHRdO1xuXG5cdF8uZWFjaCh1c2VycywgZnVuY3Rpb24gKHVzZXIpIHtcblx0XHR2YXIgaWQ7XG5cdFx0aWQgPSBBY2NvdW50cy5jcmVhdGVVc2VyKHtcblx0XHRcdHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuXHRcdFx0ZW1haWw6IFwiQWRtaW5cIixcblx0XHRcdHBhc3N3b3JkOiBhZG1pblBhc3N3b3JkLFxuXHRcdFx0cHJvZmlsZTp7bmFtZTpcIkFkbWluXCJ9XG5cdFx0fSk7XG5cblx0XHRpZiAodXNlci5yb2xlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRSb2xlcy5hZGRVc2Vyc1RvUm9sZXMoaWQsIHVzZXIucm9sZXMpO1xuXHRcdH1cblx0fSk7XG59XG5cblxuaWYgKEFwcHMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblxuXHR2YXIgZGVmYXVsdEFwcHMgPSBbXG5cdFx0e25hbWU6XCJMaXZlXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjMsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly9saXZlLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1saXZlLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBMaXZlIHByb21vdGUgcmVhbC10aW1lIGludGVyYWN0aW9uIGJ5IGFsbG93aW5nIGxlYXJuZXJzIHRvIGV4cHJlc3MgdGhlbXNlbHZlcyBhc2tpbmcgcXVlc3Rpb25zLCBwb3N0aW5nIHBob3RvcyBvciBzaGFyaW5nIGZpbGVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlJlc291cmNlc1wiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo3LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vcmVzb3VyY2VzLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1yZXNvdXJjZXMucG5nXCIsIGRlc2NyaXB0aW9uOlwiV2l0aCBCZWVrZWUgUmVzb3VyY2VzLCB5b3UgY2FuIGVhc2lseSBzaGFyZSBmaWxlcyB3aXRoIHlvdXIgbGVhcm5lcnMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiV2hlZWxcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjp0cnVlLCBvcmRlcjo5LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIwLjdcIiwgdXJsOlwiaHR0cDovL3doZWVsLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS13aGVlbC5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgV2hlZWwgaXMgYSBzaW1wbGUgcmFuZG9tIHBpY2tlciB3aGVlbCB0aGF0IGFsbG93IHlvdSB0byBwaWNrIHVwIGEgcmFuZG9tIG5hbWUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiVGltZXJcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6OCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL3RpbWVyLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS10aW1lci5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgVGltZXIgaXMgYSBzaW1wbGUgdGltZXIgdGhhdCBsZXRzIHlvdXIgbGVhcm5lcnMga25vdyBob3cgbXVjaCB0aW1lIHRoZXkgaGF2ZSBsZWZ0LlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIk1vb2RsZVwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjEsIGRvY191c2VyOlwibW9vZGxlX3RlYWNoZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL21vb2RsZS5iZWVrZWUuYm94XCIsIGljb246XCJtb29kbGUucG5nXCIsIGRlc2NyaXB0aW9uOlwiTW9vZGxlIGlzIGEgZnJlZSwgb25saW5lIExlYXJuaW5nIE1hbmFnZW1lbnQgc3lzdGVtIGVuYWJsaW5nIGVkdWNhdG9ycyB0byBjcmVhdGUgdGhlaXIgb3duIHByaXZhdGUgd2Vic2l0ZSBmaWxsZWQgd2l0aCBkeW5hbWljIGNvdXJzZXMgdGhhdCBleHRlbmQgbGVhcm5pbmcsIGFueSB0aW1lLCBhbnl3aGVyZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMy4xMS4yXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJLb2xpYnJpXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MiwgZG9jX3VzZXI6XCJrb2xpYnJpX3VzZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2tvbGlicmkuYmVla2VlLmJveFwiLCBpY29uOlwia29saWJyaS5wbmdcIiwgZGVzY3JpcHRpb246XCJLb2xpYnJpIGlzIGFuIG9wZW4tc291cmNlIGVkdWNhdGlvbmFsIHBsYXRmb3JtIHNwZWNpYWxseSBkZXNpZ25lZCB0byBwcm92aWRlIG9mZmxpbmUgYWNjZXNzIHRvIGEgd2lkZSByYW5nZSBvZiBxdWFsaXR5LCBvcGVubHkgbGljZW5zZWQgZWR1Y2F0aW9uYWwgcmVzb3VyY2VzIGluIGxvdy1yZXNvdXJjZSBjb250ZXh0cyBsaWtlIHJ1cmFsIHNjaG9vbHMsIHJlZnVnZWUgY2FtcHMsIG9ycGhhbmFnZXMsIGFuZCBhbHNvIGluIG5vbi1mb3JtYWwgc2Nob29sIHByb2dyYW1zLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjE0LjdcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHQvLyB7bmFtZTpcIkV0aGVycGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2V0aGVycGFkLmJlZWtlZS5ib3hcIiwgaWNvbjpcImV0aGVycGFkLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkV0aGVycGFkIGFsbG93cyB5b3UgdG8gZWRpdCBkb2N1bWVudHMgY29sbGFib3JhdGl2ZWx5IGluIHJlYWwtdGltZSwgbXVjaCBsaWtlIGEgbGl2ZSBtdWx0aS1wbGF5ZXIgZWRpdG9yIHRoYXQgcnVucyBpbiB5b3VyIGJyb3dzZXIuIFdyaXRlIGFydGljbGVzLCBwcmVzcyByZWxlYXNlcywgdG8tZG8gbGlzdHMsIGV0Yy4gdG9nZXRoZXIgd2l0aCB5b3VyIGZyaWVuZHMsIGZlbGxvdyBzdHVkZW50cyBvciBjb2xsZWFndWVzLCBhbGwgd29ya2luZyBvbiB0aGUgc2FtZSBkb2N1bWVudCBhdCB0aGUgc2FtZSB0aW1lLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjguMTRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlN0b3JtXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3N0b3JtLmJlZWtlZS5ib3hcIiwgaWNvbjpcInN0b3JtLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhbmQgYW5pbWF0ZSBsaXZlIHN1cnZleXMsIGJyYWluc3Rvcm1zIGFuZCBxdWl6emVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjQuNVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiUGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3BhZC5iZWVrZWUuYm94XCIsIGljb246XCJwYWQucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGNvbGxhYm9yYXRpdmUgd2FsbHMgdG8gc2hhcmUgYW5kIG9yZ2FuaXplIGNvbnRlbnQuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJCdXp6ZXJcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOnRydWUsIG9yZGVyOjYsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9idXp6ZXIuYmVla2VlLmJveFwiLCBpY29uOlwiYnV6emVyLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhIHZpcnR1YWwgZ2FtaW5nIHJvb20gYXJvdW5kIGEgY29ubmVjdGVkIGJ1enplci5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4yLjRcIiwgaGlkZGVuOmZhbHNlfSxcblxuXHRdO1xuXG5cdF8uZWFjaChkZWZhdWx0QXBwcywgZnVuY3Rpb24gKGRlZmF1bHRBcHBzKSB7XG5cdFx0QXBwcy5pbnNlcnQoZGVmYXVsdEFwcHMpO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBIVFRQIH0gZnJvbSAnbWV0ZW9yL2h0dHAnXG5cbk1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuXG5cdGlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHR2YXIgZnMgPSBOcG0ucmVxdWlyZSgnZnMnKTtcblx0ZXhlYyA9IE5wbS5yZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuZXhlYztcblx0Y21kID0gTWV0ZW9yLndyYXBBc3luYyhleGVjKTtcblxuXHR2YXIgd2lmaVNldHRpbmdzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy53aWZpU2V0dGluZ3NQYXRoO1xuXHR2YXIgY29uZmlnUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5jb25maWdQYXRoO1xuXHRjb25zdCByZWFkbGluZSA9IHJlcXVpcmUoJ3JlYWRsaW5lJyk7XG5cblxuXHRNZXRlb3IubWV0aG9kcyh7XG5cblx0XHQnYWRtaW5TZXROZXdQYXNzd29yZCc6IGZ1bmN0aW9uKGFkbWluSWQsIHVzZXJJZCwgbmV3UGFzc3dvcmQpIHsgLy8gQWRtaW4gY2FuIGZvcmNpYmx5IGNoYW5nZSB0aGUgcGFzc3dvcmQgZm9yIGEgdXNlclxuXHRcdFx0aWYgKFJvbGVzLnVzZXJJc0luUm9sZShhZG1pbklkLCAnYWRtaW4nKSkge1xuXHRcdFx0XHRBY2NvdW50cy5zZXRQYXNzd29yZCh1c2VySWQsIG5ld1Bhc3N3b3JkKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdjcmVhdGVBY2NvdW50JzogZnVuY3Rpb24oZW1haWwsIHBhc3N3b3JkLCBwcm9maWxlKSB7XG5cdFx0XHRyZXR1cm4gQWNjb3VudHMuY3JlYXRlVXNlcih7ZW1haWw6ZW1haWwscGFzc3dvcmQ6cGFzc3dvcmQscHJvZmlsZTpwcm9maWxlfSk7IC8vIENhbGxiYWNrIGlzIG5vdCBzdXBwb3J0ZWQgb24gc2VydmVyLXNpZGVcblx0XHR9LFxuXHRcdCdlZGl0QWNjb3VudCc6IGZ1bmN0aW9uKHVzZXJJZCwgZW1haWwsIHBhc3N3b3JkLCBwcm9maWxlKSB7XG5cdFx0XHRNZXRlb3IudXNlcnMudXBkYXRlKHtfaWQ6IHVzZXJJZH0sIHtcblx0ICBcdFx0XHQkc2V0OiB7XG5cdCAgICBcdFx0XHQnZW1haWxzLjAuYWRkcmVzcyc6IGVtYWlsLFxuXHQgICAgXHRcdFx0cHJvZmlsZTogcHJvZmlsZVxuXHQgIFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0aWYgKHBhc3N3b3JkKSB7XG5cdFx0XHRcdEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgcGFzc3dvcmQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2NoYW5nZUVtYWlsJzogZnVuY3Rpb24oZW1haWwpIHtcblx0XHRcdHZhciBlbWFpbCA9IGVtYWlsO1xuXHRcdFx0Y2hlY2soZW1haWwsIFN0cmluZyk7XG5cdFx0XHR2YXIgdXNlciA9IE1ldGVvci51c2VyKCk7XG5cdFx0XHR2YXIgb2xkZW1haWwgPSB1c2VyLmVtYWlscztcblx0XHRcdHZhciBlbWFpbFJlZyA9IC9eKFtcXHctXFwuXStAKFtcXHctXStcXC4pK1tcXHctXXsyLDR9KT8kLztcblx0XHRcdGlmIChlbWFpbFJlZy50ZXN0KGVtYWlsKSkge1xuXHRcdFx0aWYob2xkZW1haWwgIT0gbnVsbCl7XG5cdFx0XHQgIEFjY291bnRzLnJlbW92ZUVtYWlsKHVzZXIuX2lkLCB1c2VyLmVtYWlsc1swXS5hZGRyZXNzKVxuXHRcdFx0fVxuXHRcdFx0QWNjb3VudHMuYWRkRW1haWwodXNlci5faWQsIGVtYWlsKTtcblx0XHRcdHJldHVybiBlbWFpbDtcblx0XHQgIH0gZWxzZVxuXHRcdCAgcmV0dXJuIG51bGxcblx0XHQgfSxcblx0XHQnZGVsZXRlVXNlcic6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0TWV0ZW9yLnVzZXJzLnJlbW92ZSh1c2VySWQsIGZ1bmN0aW9uIChlcnJvciwgcmVzdWx0KSB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiBkZWxldGluZyB1c2VyIDogXCIrZXJyb3IubWVzc2FnZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2FkZE1hbmFnZXJSb2xlJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklkLCAnbWFuYWdlcicpO1xuXHRcdH0sXG5cdFx0J3JlbW92ZU1hbmFnZXJSb2xlJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRSb2xlcy5yZW1vdmVVc2Vyc0Zyb21Sb2xlcyh1c2VySWQsICdtYW5hZ2VyJyk7XG5cdFx0fSxcblx0XHQnYWRkQWRtaW5Sb2xlJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklkLCAnYWRtaW4nKTtcblx0XHR9LFxuXHRcdCdyZW1vdmVBZG1pblJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLnJlbW92ZVVzZXJzRnJvbVJvbGVzKHVzZXJJZCwgJ2FkbWluJyk7XG5cdFx0fSxcblxuXHRcdC8vICdnZXRVc2VkU3BhY2UnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciByZXM7XG5cdFx0Ly8gXHRyZXMgPSBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKSArIFwiLyBcIiArIGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpICsgXCIgKFwiK2NtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpK1widXNlZClcIjtcblx0XHQvLyBcdHJldHVybiByZXM7XG5cdFx0Ly8gfSxcblx0XHQncnVuQ29tbWFuZCc6IGZ1bmN0aW9uKHBhc3N3b3JkLCBjb21tYW5kKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwiZWNobyBcIitwYXNzd29yZCtcIiB8IHN1ZG8gLVMgXCIrY29tbWFuZCk7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFVzZWRTcGFjZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcyA9IHt9O1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKSArIFwiLyBcIiArIGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpICsgXCIgKFwiK2NtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpK1widXNlZClcIjtcblx0XHRcdHJlcy5zdG9yYWdlVXNhZ2UgPSBjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKVxuXHRcdFx0cmVzLnN0b3JhZ2VVc2FnZSA9IHJlcy5zdG9yYWdlVXNhZ2UvMTAwMDAwMDtcblx0XHRcdHJlcy5zdG9yYWdlVXNhZ2UgPSByZXMuc3RvcmFnZVVzYWdlLnRvRml4ZWQoMik7XG5cdFx0XHRyZXMuc3RvcmFnZVRvdGFsID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIilcblx0XHRcdHJlcy5zdG9yYWdlVG90YWwgPSByZXMuc3RvcmFnZVRvdGFsLzEwMDAwMDA7XG5cdFx0XHRyZXMuc3RvcmFnZVRvdGFsID0gcmVzLnN0b3JhZ2VUb3RhbC50b0ZpeGVkKDIpO1xuXHRcdFx0cmVzLnBlcmNlbnRhZ2UgPSBjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0U1NJRCc6IGZ1bmN0aW9uKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdzc2lkPSguKiknKSk7XG4gIFx0XHRcdHZhciBTU0lEID0gbWF0Y2hbMV07XG4gIFx0XHRcdFNTSUQgPSBkZWNvZGVVUklDb21wb25lbnQoU1NJRC5yZXBsYWNlKC8uLi9nLCAnJSQmJykpXG4gIFx0XHRcdHJldHVybiBTU0lEO1xuXHRcdH0sXG5cdFx0J3NldFNTSUQnOiBmdW5jdGlvbihuZXdTU0lEKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0Y29uc3QgZW5jb2RlZE5ld1NTSUQgPSBuZXcgQnVmZmVyKG5ld1NTSUQpLnRvU3RyaW5nKCdoZXgnKTsgLy8gQ29udmVydCBpbnRvIEhleFxuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3NzaWQ9KC4qKScpKVsxXSwgZW5jb2RlZE5ld1NTSUQpO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRXaWZpUGFzc3dvcmQnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgncGFzc3dvcmQ9KC4qKScpKTtcbiAgXHRcdFx0dmFyIHBhc3N3b3JkID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBwYXNzd29yZDtcblx0XHR9LFxuXHRcdCdzZXRXaWZpUGFzc3dvcmQnOiBmdW5jdGlvbihuZXdQYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgncGFzc3dvcmQ9KC4qKScpKVsxXSwgbmV3UGFzc3dvcmQpO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRXaWZpQ2hhbm5lbCc6IGZ1bmN0aW9uKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdjaGFubmVsPSguKiknKSk7XG4gIFx0XHRcdHZhciBjaGFubmVsID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBjaGFubmVsO1xuXHRcdH0sXG5cdFx0J3NldFdpZmlDaGFubmVsJzogZnVuY3Rpb24obmV3Q2hhbm5lbCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJykpWzFdLCBuZXdDaGFubmVsKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQvLyAnZ2V0V2lmaUJhbmQnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuXHRcdC8vIFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdiYW5kPSguKiknKSk7XG5cblx0XHQvLyBcdGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuXHRcdC8vIFx0ICByZXR1cm4gbWF0Y2hbMV07XG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0ICAvLyBSZXR1cm4gZGVmYXVsdCB2YWx1ZSBpZiB0aGUgYmFuZCBzZXR0aW5nIGRvZXMgbm90IGV4aXN0XG5cdFx0Ly8gXHQgIHJldHVybiAnMi40R0h6Jztcblx0XHQvLyBcdH1cblx0XHQvLyAgIH0sXG5cdFx0Ly8gJ3NldFdpZmlCYW5kJzogZnVuY3Rpb24obmV3QmFuZCkge1xuXHRcdC8vIFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG5cdFx0Ly8gXHR2YXIgYmFuZFJlZ2V4ID0gbmV3IFJlZ0V4cCgnYmFuZD0oLiopJyk7XG5cdFx0Ly8gXHR2YXIgY2hhbm5lbFJlZ2V4ID0gbmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJyk7XG5cdFx0Ly8gXHR2YXIgbWF0Y2hCYW5kID0gZGF0YS5tYXRjaChiYW5kUmVnZXgpO1xuXHRcdC8vIFx0dmFyIG1hdGNoQ2hhbm5lbCA9IGRhdGEubWF0Y2goY2hhbm5lbFJlZ2V4KTtcblxuXHRcdC8vIFx0dmFyIG5ld0RhdGEgPSBkYXRhO1xuXG5cdFx0Ly8gXHRpZiAobWF0Y2hCYW5kKSB7XG5cdFx0Ly8gXHRcdC8vIFJlcGxhY2UgdGhlIGV4aXN0aW5nIGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0XHRuZXdEYXRhID0gbmV3RGF0YS5yZXBsYWNlKGJhbmRSZWdleCwgYGJhbmQ9JHtuZXdCYW5kfWApO1xuXHRcdC8vIFx0fSBlbHNlIHtcblx0XHQvLyBcdFx0Ly8gQXBwZW5kIHRoZSBuZXcgYmFuZCBzZXR0aW5nXG5cdFx0Ly8gXHRcdG5ld0RhdGEgPSBgJHtuZXdEYXRhLnRyaW0oKX1cXG5iYW5kPSR7bmV3QmFuZH1gO1xuXHRcdC8vIFx0fVxuXG5cdFx0Ly8gXHRpZiAobWF0Y2hDaGFubmVsICYmIG1hdGNoQ2hhbm5lbFsxXSkge1xuXHRcdC8vIFx0XHQvLyBDb252ZXJ0IHRoZSBjaGFubmVsIHZhbHVlIHRvIGEgbnVtYmVyXG5cdFx0Ly8gXHRcdHZhciBjdXJyZW50Q2hhbm5lbCA9IHBhcnNlSW50KG1hdGNoQ2hhbm5lbFsxXSwgMTApO1xuXG5cdFx0Ly8gXHRcdC8vIFNldCBjaGFubmVsIHRvIGEgZGVmYXVsdCAyLjRHSHogY2hhbm5lbCBpZiBjdXJyZW50IGNoYW5uZWwgaXMgZm9yIDVHSHpcblx0XHQvLyBcdFx0aWYgKG5ld0JhbmQgPT0gXCIyLjRHSHpcIiAmJiBjdXJyZW50Q2hhbm5lbCA+IDE0KSB7XG5cdFx0Ly8gXHRcdFx0bmV3RGF0YSA9IG5ld0RhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTExYCk7XG5cdFx0Ly8gXHRcdH0gZWxzZSBpZiAobmV3QmFuZCA9PSBcIjVHSHpcIiAmJiBjdXJyZW50Q2hhbm5lbCA8PSAxNCkge1xuXHRcdC8vIFx0XHRcdG5ld0RhdGEgPSBuZXdEYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD00NGApO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9XG5cblx0XHQvLyBcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0Ly8gfSxcblx0XHQvLyAgICdzZXRXaWZpQmFuZCc6IGZ1bmN0aW9uKG5ld0JhbmQpIHtcblx0XHQvLyBcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuXHRcdC8vIFx0dmFyIGJhbmRSZWdleCA9IG5ldyBSZWdFeHAoJ2JhbmQ9KC4qKScpO1xuXHRcdC8vIFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChiYW5kUmVnZXgpO1xuXG5cdFx0Ly8gXHRpZiAobWF0Y2gpIHtcblx0XHQvLyBcdCAgLy8gUmVwbGFjZSB0aGUgZXhpc3RpbmcgYmFuZCBzZXR0aW5nXG5cdFx0Ly8gXHQgIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGJhbmRSZWdleCwgYGJhbmQ9JHtuZXdCYW5kfWApO1xuXHRcdC8vIFx0fSBlbHNlIHtcblx0XHQvLyBcdCAgLy8gQXBwZW5kIHRoZSBuZXcgYmFuZCBzZXR0aW5nXG5cdFx0Ly8gXHQgIHZhciBuZXdEYXRhID0gYCR7ZGF0YS50cmltKCl9XFxuYmFuZD0ke25ld0JhbmR9YDtcblx0XHQvLyBcdH1cblx0XHQvLyBcdHZhciBjaGFubmVsUmVnZXggPSBuZXcgUmVnRXhwKCdjaGFubmVsPSguKiknKTtcblx0XHQvLyBcdHZhciBtYXRjaDIgPSBkYXRhLm1hdGNoKGNoYW5uZWxSZWdleCk7XG5cdFx0Ly8gXHRpZiAobWF0Y2gyICYmIG1hdGNoMlsxXSkge1xuXHRcdC8vIFx0XHQvLyBTZXQgY2hhbm5lbCB0byBhIGRlZmF1bHQgMi40R0h6IGNoYW5uZWwgaWYgY3VycmVudCBjaGFubmVsIGlzIGZvciA1R0h6XG5cdFx0Ly8gXHRcdGlmIChuZXdCYW5kID09IFwiMi40R0h6XCIgJiYgbWF0Y2gyWzFdID4gMTQpIHtcblx0XHQvLyBcdFx0XHQvLyBBcHBlbmQgdGhlIG5ldyBiYW5kIHNldHRpbmdcblx0XHQvLyBcdFx0XHR2YXIgbmV3RGF0YTIgPSBkYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD0xMWApO1xuXHRcdC8vIFx0XHR9IGVsc2UgaWYgKG5ld0JhbmQgPT0gXCI1R0h6XCIgJiYgbWF0Y2gyWzFdIDw9IDE0KSB7XG5cdFx0Ly8gXHRcdFx0dmFyIG5ld0RhdGEyID0gZGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9NDRgKTtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fVxuXHRcdC8vIFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHQvLyAgIH0sXG5cdFx0J2dldFNlcmlhbCc6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnU0VSSUFMPSguKiknKSk7XG4gIFx0XHRcdHZhciBzZXJpYWwgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIHNlcmlhbDtcblx0XHR9LFxuXHRcdCdnZXRPcGVyYXRvck5hbWUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvcGVyYXRvck5hbWU7XG5cdFx0XHRvcGVyYXRvck5hbWUgPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1vcGVyYXRvci1uYW1lIHwgZ3JlcCAtbTIgJ05hbWUgICAgICAgICAgICAgJyB8IGF3ayAne3ByaW50ICQzfSdcIik7XG5cdFx0XHRyZXR1cm4gb3BlcmF0b3JOYW1lO1xuXHRcdH0sXG5cdFx0Ly8gJ2dldFNpZ25hbFN0cmVuZ3RoJzogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0dmFyIHNpZ25hbFN0cmVuZ3RoO1xuXHRcdC8vIFx0c2lnbmFsU3RyZW5ndGggPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrICd7cHJpbnQgJDMsICQyfSdcIik7XG5cdFx0Ly8gXHRyZXR1cm4gc2lnbmFsU3RyZW5ndGg7XG5cdFx0Ly8gfSxcblx0XHQnZ2V0U2lnbmFsU3RyZW5ndGgnOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgc2lnbmFsU3RyZW5ndGg7XG5cdFx0XHQvLyBUaGlzIGV4dHJhY3RzIGp1c3QgdGhlIG51bWVyaWMgcGFydCBvZiB0aGUgc2lnbmFsIHN0cmVuZ3RoLlxuXHRcdFx0c2lnbmFsU3RyZW5ndGggPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwICdOZXR3b3JrJyB8IGF3ayAne3ByaW50ICQzfScgfCBncmVwIC1vRSAnWy0wLTldKydcIik7XG5cblx0XHRcdC8vIENvbnZlcnQgc2lnbmFsIHN0cmVuZ3RoIHRvIGEgcXVhbGl0YXRpdmUgdmFsdWVcblx0XHRcdHZhciBzdHJlbmd0aFZhbHVlID0gcGFyc2VJbnQoc2lnbmFsU3RyZW5ndGgpO1xuXHRcdFx0dmFyIHF1YWxpdHkgPSAnVW5rbm93bic7XG5cdFx0XHRpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtNzApIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdFeGNlbGxlbnQnO1xuXHRcdFx0fSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlID49IC04NSkge1xuXHRcdFx0XHRxdWFsaXR5ID0gJ0dvb2QnO1xuXHRcdFx0fSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlID49IC0xMDApIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdGYWlyJztcblx0XHRcdH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA8IC0xMDApIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdQb29yJztcblx0XHRcdH1cblx0XHRcdHJldHVybiBxdWFsaXR5O1xuXHRcdH0sXG5cdFx0Ly8gJ2dldElzT25saW5lJzogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0dmFyIGlzT25saW5lO1xuXHRcdC8vIFx0aXNPbmxpbmUgPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrICd7cHJpbnQgJDMsICQyfSdcIik7XG5cdFx0Ly8gXHRyZXR1cm4gaXNPbmxpbmU7XG5cdFx0Ly8gfSxcblx0XHQvLyAnZ2V0QmFuZCc6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdHZhciBiYW5kO1xuLy9cdFx0XHRiYW5kID0gY21kKFwic3VkbyBxbWljbGkgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayBcXFwie3ByaW50ICQyfVxcXCIgfCBjdXQgLWRcXFxcJyAtZjJcIik7XG5cdFx0Ly8gXHRyZXR1cm4gYmFuZDtcblx0XHQvLyB9LFxuXHRcdCdnZXRBUE4nOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTj0oLiopJykpO1xuICBcdFx0XHR2YXIgQVBOID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBBUE47XG5cdFx0fSxcblx0XHQnZ2V0QVBOVXNlcic6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1VTRVJOQU1FPSguKiknKSk7XG4gIFx0XHRcdHZhciBBUE5Vc2VyID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBBUE5Vc2VyO1xuXHRcdH0sXG5cdFx0J2dldEFQTlBhc3N3b3JkJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE5fUEFTU1dPUkQ9KC4qKScpKTtcbiAgXHRcdFx0dmFyIEFQTlBhc3N3b3JkID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBBUE5QYXNzd29yZDtcblx0XHR9LFxuXHRcdCdnZXRTaW1DYXJkU3RhdHVzJzogZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHNpbVN0YXR1c1Jlc3VsdCA9ICdVbmtub3duJzsgLy8gRGVmYXVsdCBzdGF0dXNcblxuXHRcdFx0Ly8gRnVuY3Rpb24gdG8gZXhlY3V0ZSBjb21tYW5kIGFuZCBoYW5kbGUgZXJyb3JzXG5cdFx0XHRmdW5jdGlvbiBleGVjdXRlQ29tbWFuZChjb21tYW5kKSB7XG5cdFx0XHRcdGxldCByZXN1bHQ7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gY21kKGNvbW1hbmQpOyAvLyBFeGVjdXRlIHRoZSBjb21tYW5kXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHJlc3VsdCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgcmVzdWx0IGlzIGFuIGVycm9yIG9iamVjdFxuXHRcdFx0XHRcdFx0cmV0dXJuICdFcnJvcic7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdC8vIEhhbmRsZSBleGNlcHRpb25zIGlmIGNvbW1hbmQgZXhlY3V0aW9uIGZhaWxzXG5cdFx0XHRcdFx0cmV0dXJuICdFcnJvcic7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDsgLy8gUmV0dXJuIHRoZSByZXN1bHQgaWYgbm8gZXJyb3JzXG5cdFx0XHR9XG5cblx0XHRcdC8vIEV4ZWN1dGUgU0lNIGNhcmQgc3RhdHVzIGNoZWNrIGNvbW1hbmRcblx0XHRcdGxldCBzaW1TdGF0dXMgPSBleGVjdXRlQ29tbWFuZChcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS11aW0tZ2V0LWNhcmQtc3RhdHVzIHwgZ3JlcCAnQ2FyZCBzdGF0ZTonXCIpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJTSU0gY2FyZCBzdGF0dXM6XCIsIHNpbVN0YXR1cyk7IC8vIExvZyB0aGUgcmF3IG91dHB1dFxuXHRcdFx0Ly8gUHJvY2VzcyB0aGUgb3V0cHV0IGFuZCBkZXRlcm1pbmUgU0lNIGNhcmQgc3RhdHVzXG5cdFx0XHRpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKCduby1hdHItcmVjZWl2ZWQnKSB8fCBzaW1TdGF0dXMuaW5jbHVkZXMoJ25vdC1pbnNlcnRlZCcpKSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9ICdObyBTSU0gY2FyZCc7XG5cdFx0XHR9IGVsc2UgaWYgKHNpbVN0YXR1cy5pbmNsdWRlcygnZXJyb3InKSkge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSBzaW1TdGF0dXM7IC8vIFVzZSB0aGUgZXJyb3IgbWVzc2FnZSBvciBubyBTSU0gZGV0ZWN0ZWQgbWVzc2FnZVxuXHRcdFx0fSBlbHNlIGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoJ3ByZXNlbnQnKSkge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSAnT0snO1xuXHRcdFx0fSBlbHNlIGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoJ2xvY2tlZCcpIHx8IHNpbVN0YXR1cy5pbmNsdWRlcygncGluLXJlcXVpcmVkJykpIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gJ1NJTSBjYXJkIGxvY2tlZCwgUElOIHJlcXVpcmVkJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9ICdVbmtub3duJzsgLy8gRm9yIG90aGVyIHN0YXR1c2VzXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc2ltU3RhdHVzUmVzdWx0O1xuXHRcdH0sXG5cdFx0J2dldFNpbVBpbic6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnU0lNX1BJTj0oLiopJykpO1xuICBcdFx0XHR2YXIgU2ltUGluID0gbWF0Y2hbMV07XG5cdFx0XHRyZXR1cm4gU2ltUGluO1xuXHRcdH0sXG5cdFx0J3NldFNpbVBpbic6IGZ1bmN0aW9uKFBJTikge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnU0lNX1BJTj0uKicpKSwgJ1NJTV9QSU49JytQSU4pO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdzZXRBUE4nOiBmdW5jdGlvbihBUE4sIHVzZXIsIHBhc3N3b3JkKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49LionKSksICdBUE49JytBUE4pO1xuICBcdFx0XHQvLyB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTj0oLiopJykpWzFdLCBBUE4pO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdzZXRBUE5Vc2VyJzogZnVuY3Rpb24oQVBOVXNlcikge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1VTRVJOQU1FPS4qJykpLCAnQVBOX1VTRVJOQU1FPScrQVBOVXNlcik7XG4gIFx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOUGFzc3dvcmQnOiBmdW5jdGlvbihBUE5QYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1BBU1NXT1JEPS4qJykpLCAnQVBOX1BBU1NXT1JEPScrQVBOUGFzc3dvcmQpO1xuICBcdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFJlbW90ZVN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN5c3RlbWN0bCBpcy1hY3RpdmUgcmVtb3RlLWlvdC5zZXJ2aWNlID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIDEgfHwgZWNobyAwXCIpO1xuXHRcdFx0aWYgKHJlc1swXSA9PSBcIjFcIikgeyAvLyBbMF0gaXMgYSBoYWNrIGJlY2F1c2UgdGhlIHJlc3VsdCByZXMgaGFzIG9uZSBleHRyYSBjaGFyYWN0ZXJcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdCdnZXRBdXRvU3luY1N0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN5c3RlbWN0bCBpcy1hY3RpdmUgYXV0b3N5bmMuc2VydmljZSA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyAxIHx8IGVjaG8gMFwiKTtcblx0XHRcdGlmIChyZXNbMF0gPT0gXCIxXCIpIHsgLy8gWzBdIGlzIGEgaGFjayBiZWNhdXNlIHRoZSByZXN1bHQgcmVzIGhhcyBvbmUgZXh0cmEgY2hhcmFjdGVyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQnZ2V0U2hhcmVJbnRlcm5ldFZpYUV0aGVybmV0U3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaXNTaGFyaW5nO1xuXHRcdFx0aXNTaGFyaW5nID0gY21kKFwiKHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1MIFBPU1RST1VUSU5HIC12IC1uIHwgZ3JlcCAtcSAnTUFTUVVFUkFERSAgYWxsICAtLSAgKiAgICAgIGV0aDAnICYmIGlwIGxpbmsgc2hvdyBldGgwIHwgZ3JlcCAtcSAnc3RhdGUgVVAnKSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiKTtcblx0XHRcdHJldHVybiBpc1NoYXJpbmc7XG5cdFx0fSxcblx0XHQnZ2V0U2hhcmVJbnRlcm5ldFZpYU1vYmlsZVN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlzU2hhcmluZztcblx0XHRcdGlzU2hhcmluZyA9IGNtZChcIihzdWRvIGlwdGFibGVzIC10IG5hdCAtTCBQT1NUUk9VVElORyAtdiAtbiB8IGdyZXAgLXEgJ01BU1FVRVJBREUgIGFsbCAgLS0gICogICAgICB3d2FuMCcgJiYgaXAgbGluayBzaG93IHd3YW4wIHwgZ3JlcCAtcSAnc3RhdGUgVVAnKSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiKTtcblx0XHRcdHJldHVybiBpc1NoYXJpbmc7XG5cdFx0fSxcblx0XHQvLyAnYWN0aXZhdGVJbnRlcm5ldFNoYXJpbmcnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciByZXM7XG5cdFx0Ly8gXHRyZXMgPSBjbWQoXCJzdWRvIHdpZmktYXAuY29uZmlnIHNldCBzaGFyZS5kaXNhYmxlZD1mYWxzZVwiKTtcblx0XHQvLyBcdHJldHVybiByZXM7XG5cdFx0Ly8gfSxcblx0XHQvLyAnZGlzYWN0aXZhdGVJbnRlcm5ldFNoYXJpbmcnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciByZXM7XG5cdFx0Ly8gXHRyZXMgPSBjbWQoXCJzdWRvIHdpZmktYXAuY29uZmlnIHNldCBzaGFyZS5kaXNhYmxlZD10cnVlXCIpO1xuXHRcdC8vIFx0cmV0dXJuIHJlcztcblx0XHQvLyB9LFxuXHRcdCdhY3RpdmF0ZVJlbW90ZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0YXJ0IHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdkaXNhY3RpdmF0ZVJlbW90ZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGRpc2FibGUgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdhY3RpdmF0ZUF1dG9TeW5jJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RhcnQgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZGlzYWN0aXZhdGVBdXRvU3luYyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBkaXNhYmxlIGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldEJhdHRlcnlTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHR2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGg7XG5cdFx0XHRyZXMgPSBjbWQoXCJweXRob24zIFwiK3NjcmlwdHNQYXRoK1wiL3BpanVpY2Vfc3RhdHVzLnB5XCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdC8vICdnZXRJc09ubGluZSc6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0dmFyIHJlcztcblx0XHQvLyBcdHZhciBzY3JpcHRzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5zY3JpcHRzUGF0aDtcblx0XHQvLyBcdC8vIE1ha2Ugc3VyZSB5b3VyIHNjcmlwdCBpcyBleGVjdXRhYmxlLCBlLmcuLCBjaG1vZCAreCBjaGVja19pbnRlcm5ldC5zaFxuXHRcdC8vIFx0cmVzID0gY21kKFwiYmFzaCBcIiArIHNjcmlwdHNQYXRoICsgXCIvY2hlY2tfaW50ZXJuZXQuc2hcIik7IC8vIFJlcGxhY2UgJ2Jhc2gnIHdpdGggJ3NoJyBpZiBuZWVkZWRcblx0XHQvLyBcdC8vIFRoZSBzY3JpcHQgcmV0dXJucyBcInRydWVcIiBvciBcImZhbHNlXCIgYXMgYSBzdHJpbmcsIHNvIHdlIGNvbXBhcmUgdGhlIHJlc3VsdCBkaXJlY3RseVxuXHRcdC8vIFx0cmV0dXJuIHJlcy50cmltKCkgPT09IFwidHJ1ZVwiOyAvLyBUaGlzIGNvbnZlcnRzIHRoZSBzdHJpbmcgdG8gYSBib29sZWFuXG5cdFx0Ly8gfSxcblx0XHQnZ2V0SXNPbmxpbmUnOiBmdW5jdGlvbigpIHtcblx0XHRcdGxldCByZXM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXMgPSBjbWQoXCJwaW5nIC1jIDEgOC44LjguOFwiKTtcblx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHBpbmcgY29tbWFuZCB3YXMgc3VjY2Vzc2Z1bCBiYXNlZCBvbiB0aGUgb3V0cHV0XG5cdFx0XHRcdGxldCBpc09ubGluZSA9IHJlcy5pbmNsdWRlcyhcIjEgcGFja2V0cyByZWNlaXZlZFwiKSB8fCByZXMuaW5jbHVkZXMoXCIxIHJlY2VpdmVkXCIpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIk9ubGluZSBzdGF0dXM6XCIsIGlzT25saW5lKTsgLy8gQ29ycmVjdGx5IGxvZ2dpbmcgdGhlIGJvb2xlYW4gcmVzdWx0XG5cdFx0XHRcdHJldHVybiBpc09ubGluZTsgLy8gRGlyZWN0bHkgcmV0dXJuIHRoZSBib29sZWFuIHZhbHVlXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHQvLyBJZiBhbiBlcnJvciBvY2N1cnMgKHdoaWNoIGNvdWxkIGluY2x1ZGUgYmVpbmcgdW5hYmxlIHRvIHJ1biB0aGUgcGluZyBjb21tYW5kKSwgYXNzdW1lIG9mZmxpbmVcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciBvciBvZmZsaW5lOlwiLCBlcnJvcik7XG5cdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gQXNzdW1lIG9mZmxpbmUgaWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2dldEV0aDBJUCc6IGZ1bmN0aW9uKCkgeyAvLyBHZXQgSVAgb2YgYm94XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcInJlc3VsdCA6IFwiK1wiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiaXAgOiBcIitcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIFwiK2ludGVyZmFjZStcIiAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFd3YW4wSVAnOiBmdW5jdGlvbigpIHsgLy8gR2V0IElQIG9mIGJveFxuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vY29uc29sZS5sb2coXCJyZXN1bHQgOiBcIitcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmVzID0gY21kKFwiaXAgYWRkciBzaG93IHd3YW4wIHwgZ3JlcCBcXFwiaW5ldFxcXFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblxuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImlwIDogXCIrXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBcIitpbnRlcmZhY2UrXCIgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXG5cdFx0J2dldEJlZWtlZU9zVmVyc2lvbic6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG5cdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0JFRUtFRV9PU19WRVJTSU9OPSguKiknKSk7XG5cdFx0XHR2YXIgc2VyaWFsID0gbWF0Y2hbMV07XG5cdFx0XHRyZXR1cm4gc2VyaWFsO1xuXHRcdH0sXG5cdFx0J2dldEJlZWtlZUhvbWVWZXJzaW9uJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRqc29uID0gSlNPTi5wYXJzZShBc3NldHMuZ2V0VGV4dChcInZlcnNpb24uanNvblwiKSk7XG5cdFx0XHRyZXR1cm4ganNvbi52ZXJzaW9uO1xuXHRcdH0sXG5cdFx0J3Jlc3RhcnRNb2JpbGVDb25uZWN0JzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgcmVzdGFydCBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlczsnJ1xuXHRcdH0sXG5cdFx0J2dldEludGVybmV0SW50ZXJmYWNlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgcmVzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzID0gY21kKFwiaXAgcm91dGUgZ2V0IDEuMi4zLjQgfCBhd2sgJ3twcmludCAkNTsgZXhpdH0nXCIpOyAvLyBFeGVjdXRlIHRoZSBjb21tYW5kXG5cdFx0XHRcdGlmIChyZXMudHJpbSgpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcy50cmltKCk7IC8vIFJldHVybiB0aGUgY2xlYW5lZC11cCByZXN1bHQgaWYgbm90IGVtcHR5XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuICdVbmtub3duJzsgLy8gUmV0dXJuIGEgZGVmYXVsdCBtZXNzYWdlIGlmIHRoZSByZXN1bHQgaXMgZW1wdHlcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Ly8gSGFuZGxlIGNhc2VzIHdoZXJlIHRoZSBjb21tYW5kIGZhaWxzIG9yIGlzIG5vdCBmb3VuZFxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHJldHJpZXZpbmcgaW50ZXJuZXQgaW50ZXJmYWNlOlwiLCBlcnJvcik7XG5cdFx0XHRcdHJldHVybiAnRXJyb3InOyAvLyBSZXR1cm4gYW4gZXJyb3IgbWVzc2FnZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8gJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdC8vIENvbW1hbmQgdG8gbGlzdCBGT1JXQVJEIHJ1bGVzXG5cdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG5cdFx0Ly8gXHRjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yIHx8IHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvciB8fCBzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciB8fCBuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cblx0XHQvLyBcdFx0Ly8gQ2hlY2sgZm9yIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBydWxlc1xuXHRcdC8vIFx0XHR2YXIgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgPSBzdGRvdXQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIGV0aDAnKSAmJiBzdGRvdXQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coXCJpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZDogXCIraXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQpO1xuXHRcdC8vIFx0XHQvLyBFeHRyYWN0IE1BQyBhZGRyZXNzIHJ1bGVzXG5cdFx0Ly8gXHRcdHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIGV0aDAvO1xuXHRcdC8vIFx0XHR2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cblx0XHQvLyBcdFx0Ly8gRGV0ZXJtaW5lIHRoZSBzdGF0dXMgYmFzZWQgb24gdGhlIHJ1bGVzIGZvdW5kXG5cdFx0Ly8gXHRcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAxXCIpO1xuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSB7Y29uc29sZS5sb2coXCJzdGVwMTJcIik7IGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9KTt9XG5cdFx0Ly8gXHRcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAyXCIpO1xuXG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH0pO1xuXHRcdC8vIFx0XHR9IGVsc2Uge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDNcIik7XG5cblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGRpc2FibGVkIG9yIG5vdCBjb25maWd1cmVkIGFzIGV4cGVjdGVkXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9KTtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fSk7XG5cdFx0Ly8gfSxcblxuXG5cblxuXHRcdFx0Ly8gICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coJ1N0YXJ0aW5nIHRvIGdldCBpbnRlcm5ldCBzaGFyaW5nIHN0YXR1cyBmb3IgRXRoZXJuZXQuLi4nKTtcblx0XHRcdC8vIFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtbiAtLWxpbmUtbnVtYmVyJztcblxuXHRcdFx0Ly8gXHQvLyBTaW5jZSBjbWQgaXMgYWxyZWFkeSB3cmFwcGVkIGJ5IE1ldGVvci53cmFwQXN5bmMoZXhlYyksXG5cdFx0XHQvLyBcdC8vIGl0IHNob3VsZCByZXR1cm4geyBzdGRvdXQsIHN0ZGVyciB9IGRpcmVjdGx5LlxuXHRcdFx0Ly8gXHR0cnkge1xuXHRcdFx0Ly8gXHQgIHZhciB7IHN0ZG91dCwgc3RkZXJyIH0gPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHQvLyBcdCAgaWYgKHN0ZGVycikge1xuXHRcdFx0Ly8gXHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtzdGRlcnJ9YCk7XG5cdFx0XHQvLyBcdFx0Ly8gSXQncyBiZXR0ZXIgdG8gcmV0dXJuIGEgbWVhbmluZ2Z1bCBlcnJvciB0byB0aGUgY2xpZW50LlxuXHRcdFx0Ly8gXHRcdHJldHVybiB7IGVycm9yOiBcIkVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlc1wiLCBkZXRhaWxzOiBzdGRlcnIgfTtcblx0XHRcdC8vIFx0ICB9XG5cblx0XHRcdC8vIFx0ICBjb25zb2xlLmxvZygnQW5hbHl6aW5nIGlwdGFibGVzIEZPUldBUkQgcnVsZXMgb3V0cHV0Li4uJyk7XG5cdFx0XHQvLyBcdCAgLy8gQ2hlY2sgZm9yIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBydWxlc1xuXHRcdFx0Ly8gXHQgIHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IHN0ZG91dC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuXHRcdFx0Ly8gXHQgIGNvbnNvbGUubG9nKGBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZDogJHtpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZH1gKTtcblxuXHRcdFx0Ly8gXHQgIC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcblx0XHRcdC8vIFx0ICB2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSBldGgwLztcblx0XHRcdC8vIFx0ICB2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cdFx0XHQvLyBcdCAgY29uc29sZS5sb2coYE1BQyBhZGRyZXNzIGZvdW5kOiAke21hdGNoID8gbWF0Y2hbMV0gOiAnTm9uZSd9YCk7XG5cblx0XHRcdC8vIFx0ICAvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcblx0XHRcdC8vIFx0ICBpZiAoaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgJiYgIW1hdGNoKSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsLicpO1xuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdC8vIFx0ICB9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coYEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYSBzcGVjaWZpYyBNQUMgYWRkcmVzczogJHttYXRjaFsxXX1gKTtcblx0XHRcdC8vIFx0XHRyZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9O1xuXHRcdFx0Ly8gXHQgIH0gZWxzZSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWQuJyk7XG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHQvLyBcdCAgfVxuXHRcdFx0Ly8gXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Ly8gXHQgIGNvbnNvbGUuZXJyb3IoYENvbW1hbmQgZXhlY3V0aW9uIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0Ly8gXHQgIC8vIEl0J3MgYmV0dGVyIHRvIHJldHVybiBhIG1lYW5pbmdmdWwgZXJyb3IgdG8gdGhlIGNsaWVudC5cblx0XHRcdC8vIFx0ICByZXR1cm4geyBlcnJvcjogXCJDb21tYW5kIGV4ZWN1dGlvbiBlcnJvclwiLCBkZXRhaWxzOiBlcnJvci50b1N0cmluZygpIH07XG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vICAgfSxcblxuXG5cblx0XHRcdFx0Ly8gICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcblx0XHRcdFx0Ly8gXHR2YXIgY29tbWFuZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdFx0Ly8gXHRpZiAoIWNvbW1hbmRSZXN1bHQpIHtcblx0XHRcdFx0Ly8gXHQgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0XHQvLyBcdH1cblxuXHRcdFx0XHQvLyBcdHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIGV0aDAnKSAmJiBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG5cdFx0XHRcdC8vIFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2UgZXRoMC87XG5cdFx0XHRcdC8vIFx0dmFyIG1hdGNoID0gY29tbWFuZFJlc3VsdC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuXHRcdFx0XHQvLyBcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHRcdFx0Ly8gXHQgIHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdFx0Ly8gXHR9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0XHRcdC8vIFx0ICByZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9O1xuXHRcdFx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFx0ICByZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdC8vICAgfSxcblxuXG5cblxuXHRcdFx0XHRcdCAgJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0JzogZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXG5cdFx0XHRcdFx0XHR2YXIgY29tbWFuZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdFx0XHRcdGlmICghY29tbWFuZFJlc3VsdCkge1xuXHRcdFx0XHRcdFx0ICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFwiY29tbWFuZC1leGVjdXRpb24tZXJyb3JcIiwgXCJUaGUgY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhciBzaGFyaW5nRnJvbVdsYW5Ub0V0aCA9IG51bGw7XG5cdFx0XHRcdFx0XHR2YXIgc2hhcmluZ1RvV2xhbkZyb21FdGhFc3RhYmxpc2hlZCA9IG51bGw7XG5cblx0XHRcdFx0XHRcdHZhciBiZWVrZWVPU1ZlcnNpb24gPSBNZXRlb3IuY2FsbCgnZ2V0QmVla2VlT3NWZXJzaW9uJyk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImJlZWtlZU9TVmVyc2lvbjogXCIrYmVla2VlT1NWZXJzaW9uKTtcblx0XHRcdFx0XHRcdGlmIChiZWVrZWVPU1ZlcnNpb24gPj0gMjAyNDA5MjYpIHtcblx0XHRcdFx0XHRcdFx0Ly8gQ2hlY2sgZm9yIHRoZSBzcGVjaWZpYyBydWxlIGluZGljYXRpbmcgaW50ZXJuZXQgc2hhcmluZyBmcm9tIHdsYW4wIHRvIGV0aDBcblx0XHRcdFx0XHRcdFx0c2hhcmluZ0Zyb21XbGFuVG9FdGggPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW5pbnQgLW8gZXRoMCAtaiBBQ0NFUFQnKTtcblx0XHRcdFx0XHRcdFx0c2hhcmluZ1RvV2xhbkZyb21FdGhFc3RhYmxpc2hlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgZXRoMCAtbyB3bGFuaW50IC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIENoZWNrIGZvciB0aGUgc3BlY2lmaWMgcnVsZSBpbmRpY2F0aW5nIGludGVybmV0IHNoYXJpbmcgZnJvbSB3bGFuMCB0byBldGgwXG5cdFx0XHRcdFx0XHRcdHNoYXJpbmdGcm9tV2xhblRvRXRoID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFuMCAtbyBldGgwIC1qIEFDQ0VQVCcpO1xuXHRcdFx0XHRcdFx0XHRzaGFyaW5nVG9XbGFuRnJvbUV0aEVzdGFibGlzaGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKHNoYXJpbmdGcm9tV2xhblRvRXRoICYmIHNoYXJpbmdUb1dsYW5Gcm9tRXRoRXN0YWJsaXNoZWQpIHtcblx0XHRcdFx0XHRcdCAgLy8gSWYgYXQgbGVhc3Qgb25lIHBhaXIgb2YgcnVsZXMgZXhpc3RzLCBpbnRlcm5ldCBzaGFyaW5nIGlzIGNvbnNpZGVyZWQgZW5hYmxlZC5cblx0XHRcdFx0XHRcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ICB9LFxuXG5cblxuXG5cblxuXG5cblx0XHQnZW5hYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXG5cdFx0XHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IG51bGw7XG5cblx0XHRcdHZhciBiZWVrZWVPU1ZlcnNpb24gPSBNZXRlb3IuY2FsbCgnZ2V0QmVla2VlT3NWZXJzaW9uJyk7XG5cdFx0XHRpZiAoYmVla2VlT1NWZXJzaW9uID49IDIwMjQwOTI2KSB7XG5cdFx0XHRcdGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFudXNiIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFuaW50IC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbnVzYiAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XHRdLmpvaW4oJyAmJiAnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1hcHBlbmQgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcblx0XHRcdFx0XS5qb2luKCcgJiYgJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGRlcnIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXQgZW5hYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBEZWZpbmUgYSBsaXN0IG9mIGNvbW1hbmRzIHRvIHJlcGVhdGVkbHkgYXR0ZW1wdCBkZWxldGlvbi5cblx0XHRcdHZhciBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gbnVsbDtcblxuXHRcdFx0dmFyIGJlZWtlZU9TVmVyc2lvbiA9IE1ldGVvci5jYWxsKCdnZXRCZWVrZWVPc1ZlcnNpb24nKTtcblx0XHRcdGlmIChiZWVrZWVPU1ZlcnNpb24gPj0gMjAyNDA5MjYpIHtcblx0XHRcdFx0aXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IFtcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW5pbnQgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW51c2IgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW5pbnQgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFudXNiIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0XHRcdF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gW1xuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYSBjb21tYW5kIGFuZCByZWN1cnNpdmVseSBjYWxsIGl0c2VsZiBpZiB0aGUgY29tbWFuZCB3YXMgc3VjY2Vzc2Z1bCAocnVsZSB3YXMgZm91bmQgYW5kIGRlbGV0ZWQpLlxuXHRcdFx0ZnVuY3Rpb24gZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spIHtcblx0XHRcdFx0Y21kKGNvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIG5vIGVycm9yLCB0aGUgcnVsZSB3YXMgZm91bmQgYW5kIGRlbGV0ZWQsIHNvIHRyeSBhZ2Fpbi5cblx0XHRcdFx0XHRpZiAoIWVycm9yKSB7XG5cdFx0XHRcdFx0XHRleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjayk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3IsIGl0IGxpa2VseSBtZWFucyBubyBtb3JlIGluc3RhbmNlcyBvZiB0aGUgcnVsZSBleGlzdCwgc28gY2FsbCB0aGUgZG9uZUNhbGxiYWNrLlxuXHRcdFx0XHRcdFx0ZG9uZUNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRXhlY3V0ZSBkZWxldGlvbiBmb3IgZWFjaCBjb21tYW5kIGFuZCB0cmFjayBjb21wbGV0aW9uLlxuXHRcdFx0dmFyIHRhc2tzQ29tcGxldGVkID0gMDtcblx0XHRcdGlwdGFibGVzRGVsZXRlQ29tbWFuZHMuZm9yRWFjaCgoY29tbWFuZCkgPT4ge1xuXHRcdFx0XHRleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsICgpID0+IHtcblx0XHRcdFx0XHR0YXNrc0NvbXBsZXRlZCsrO1xuXHRcdFx0XHRcdC8vIE9uY2UgYWxsIGRlbGV0aW9uIHRhc2tzIGFyZSBkb25lLCBzYXZlIHRoZSBpcHRhYmxlcyBjb25maWd1cmF0aW9uLlxuXHRcdFx0XHRcdGlmICh0YXNrc0NvbXBsZXRlZCA9PT0gaXB0YWJsZXNEZWxldGVDb21tYW5kcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBzYXZlZC5gKTtcblx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIHNwZWNpZmllZCBydWxlcyByZW1vdmVkIGFuZCBjaGFuZ2VzIHNhdmVkLicpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHQvLyAnZGlzYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gW1xuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdC8vIFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdC8vIFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHQvLyBcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0Ly8gXHRcdGlmIChlcnJvcikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGlmIChzdGRlcnIpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXQgZGlzYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdC8vIFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXHRcdCdlbmFibGVJbnRlcm5ldEZvck1hY0V0aGVybmV0JzogZnVuY3Rpb24obWFjQWRkcmVzcywgY2FsbGJhY2spIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvLyBDb21tYW5kIHRvIGFsbG93IGludGVybmV0IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzIG9uIGV0aDAuXG5cdFx0XHR2YXIgYWxsb3dNYWNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1tIG1hYyAtLW1hYy1zb3VyY2UgJHttYWNBZGRyZXNzfSAtaiBBQ0NFUFRgO1xuXHRcdFx0Ly8gQ29tbWFuZCB0byBkcm9wIGFsbCBvdGhlciBpbnRlcm5ldCB0cmFmZmljIG9uIGV0aDAuXG5cdFx0XHR2YXIgYmxvY2tPdGhlcnNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1qIERST1BgO1xuXG5cdFx0XHQvLyBBbGxvdyBpbnRlcm5ldCBmb3IgdGhlIHNwZWNpZmllZCBNQUMgYWRkcmVzcy5cblx0XHRcdHJlcyA9IGNtZChhbGxvd01hY0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYWxsb3dpbmcgTUFDICR7bWFjQWRkcmVzc306ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGFsbG93ZWQgZm9yIE1BQyAke21hY0FkZHJlc3N9LmApO1xuXG5cdFx0XHRcdC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldC5cblx0XHRcdFx0cmVzID0gY21kKGJsb2NrT3RoZXJzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBibG9ja2VkIGZvciBvdGhlciBNQUMgYWRkcmVzc2VzLmApO1xuXHRcdFx0XHRcdC8vIE9wdGlvbmFsbHksIHNhdmUgdGhlIGlwdGFibGVzIHNldHRpbmdzIHRvIG1ha2UgdGhlbSBwZXJzaXN0ZW50LlxuXHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayhudWxsKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdyZW1vdmVBbGxNYWNGaWx0ZXJzRm9yRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0Ly8gTGlzdCBhbGwgRk9SV0FSRCBydWxlcyB3aXRoIGxpbmUgbnVtYmVyc1xuXHRcdFx0Y21kKCdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLS1saW5lLW51bWJlcnMgLW4nLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9jZXNzIHN0ZG91dCB0byBpZGVudGlmeSBydWxlcyByZWxhdGVkIHRvIE1BQyBmaWx0ZXJpbmcgb24gZXRoMFxuXHRcdFx0XHRjb25zdCBsaW5lcyA9IHN0ZG91dC5zcGxpdCgnXFxuJyk7XG5cdFx0XHRcdGNvbnN0IHJ1bGVOdW1iZXJzID0gbGluZXMucmVkdWNlKChhY2MsIGxpbmUsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGxpbmUuaW5jbHVkZXMoJ2V0aDAnKSAmJiBsaW5lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ21hYycpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBydWxlTnVtYmVyID0gbGluZS5zcGxpdCgvXFxzKy8pWzBdOyAvLyBFeHRyYWN0IHRoZSBydWxlIG51bWJlciwgYXNzdW1pbmcgaXQncyB0aGUgZmlyc3QgZWxlbWVudFxuXHRcdFx0XHRcdFx0YWNjLnB1c2gocnVsZU51bWJlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHRcdH0sIFtdKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgaWRlbnRpZmllZCBydWxlcyBzdGFydGluZyBmcm9tIHRoZSBoaWdoZXN0IG51bWJlciB0byBwcmV2ZW50IHNoaWZ0aW5nIG9mIGxpbmUgbnVtYmVyc1xuXHRcdFx0XHRydWxlTnVtYmVycy5zb3J0KChhLCBiKSA9PiBiIC0gYSkuZm9yRWFjaChydWxlTnVtYmVyID0+IHtcblx0XHRcdFx0XHRjbWQoYHN1ZG8gaXB0YWJsZXMgLUQgRk9SV0FSRCAke3J1bGVOdW1iZXJ9YCwgKHJlbW92ZUVycm9yLCByZW1vdmVTdGRvdXQsIHJlbW92ZVN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHJlbW92ZUVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHJlbW92aW5nIHJ1bGUgJHtydWxlTnVtYmVyfTogJHtyZW1vdmVFcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0Ly8gRGVjaWRlIGlmIHlvdSB3YW50IHRvIGNvbnRpbnVlIHJlbW92aW5nIG90aGVyIHJ1bGVzIG9yIHN0b3AgaGVyZVxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgUnVsZSAke3J1bGVOdW1iZXJ9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBBZnRlciBhdHRlbXB0aW5nIHRvIHJlbW92ZSBhbGwgaWRlbnRpZmllZCBydWxlcywgc2F2ZSB0aGUgaXB0YWJsZXMgY29uZmlndXJhdGlvblxuXHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChzYXZlRXJyb3IsIHNhdmVTdGRvdXQsIHNhdmVTdGRlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoc2F2ZUVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7c2F2ZUVycm9yfWApO1xuXHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhzYXZlRXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnaXB0YWJsZXMgcnVsZXMgdXBkYXRlZCBhbmQgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIE1BQyBmaWx0ZXIgcnVsZXMgZm9yIEV0aGVybmV0IHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzTW9iaWxlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcblxuXHRcdFx0dmFyIGNvbW1hbmRSZXN1bHQgPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHRpZiAoIWNvbW1hbmRSZXN1bHQpIHtcblx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGp1c3RlZCB0byBjaGVjayBmb3IgdGhlIHNwZWNpZmljIHJ1bGUgaW5kaWNhdGluZyBpbnRlcm5ldCBzaGFyaW5nIGZyb20gd2xhbmludCB0byB3d2FuMFxuXHRcdFx0dmFyIHNoYXJpbmdGcm9tV2xhblRvV3dhbiA9IG51bGw7XG5cdFx0XHR2YXIgc2hhcmluZ1RvV2xhbkZyb21Xd2FuRXN0YWJsaXNoZWQgPSBudWxsO1xuXHRcdFx0dmFyIGJlZWtlZU9TVmVyc2lvbiA9IE1ldGVvci5jYWxsKCdnZXRCZWVrZWVPc1ZlcnNpb24nKTtcblx0XHRcdGlmIChiZWVrZWVPU1ZlcnNpb24gPj0gMjAyNDA5MjYpIHtcblx0XHRcdFx0c2hhcmluZ0Zyb21XbGFuVG9Xd2FuID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFuaW50IC1vIHd3YW4wIC1qIEFDQ0VQVCcpO1xuXHRcdFx0XHRzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbmludCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzaGFyaW5nRnJvbVdsYW5Ub1d3YW4gPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW4wIC1vIHd3YW4wIC1qIEFDQ0VQVCcpO1xuXHRcdFx0XHRzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNoYXJpbmdGcm9tV2xhblRvV3dhbiAmJiBzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCkge1xuXHRcdFx0Ly8gSWYgYXQgbGVhc3Qgb25lIHBhaXIgb2YgcnVsZXMgZXhpc3RzLCBpbnRlcm5ldCBzaGFyaW5nIHRvIHRoZSBtb2JpbGUgaW50ZXJmYWNlIGlzIGNvbnNpZGVyZWQgZW5hYmxlZC5cblx0XHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0Ly8gXHQvLyBDb21tYW5kIHRvIGxpc3QgRk9SV0FSRCBydWxlc1xuXHRcdC8vIFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtbiAtLWxpbmUtbnVtYmVyJztcblxuXHRcdC8vIFx0Y21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0Ly8gXHRcdGlmIChlcnJvciB8fCBzdGRlcnIpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIEZPUldBUkQgcnVsZXM6ICR7ZXJyb3IgfHwgc3RkZXJyfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IgfHwgbmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXG5cdFx0Ly8gXHRcdC8vIENoZWNrIGZvciBnZW5lcmFsIGludGVybmV0IHNoYXJpbmcgcnVsZXNcblx0XHQvLyBcdFx0dmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gc3Rkb3V0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSB3d2FuMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuXG5cdFx0Ly8gXHRcdC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcblx0XHQvLyBcdFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2Ugd3dhbjAvO1xuXHRcdC8vIFx0XHR2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cblx0XHQvLyBcdFx0Ly8gRGV0ZXJtaW5lIHRoZSBzdGF0dXMgYmFzZWQgb24gdGhlIHJ1bGVzIGZvdW5kXG5cdFx0Ly8gXHRcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGFsbFxuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH0pO1xuXHRcdC8vIFx0XHR9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH0pO1xuXHRcdC8vIFx0XHR9IGVsc2Uge1xuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWRcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH0pO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXG5cdFx0J2VuYWJsZUludGVybmV0U2hhcmluZ01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IG51bGw7XG5cdFx0XHR2YXIgYmVla2VlT1NWZXJzaW9uID0gTWV0ZW9yLmNhbGwoJ2dldEJlZWtlZU9zVmVyc2lvbicpO1xuXHRcdFx0aWYgKGJlZWtlZU9TVmVyc2lvbiA+PSAyMDI0MDkyNikge1xuXHRcdFx0XHRpcHRhYmxlc0NvbW1hbmRzID0gW1xuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbmludCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW51c2IgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbmludCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFudXNiIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XHRdLmpvaW4oJyAmJiAnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcblx0XHRcdFx0XS5qb2luKCcgJiYgJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGRlcnIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgbW9iaWxlIGVuYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdC8vIERlZmluZSBjb21tYW5kcyBmb3IgZGVsZXRpb24gd2l0aG91dCBjb21iaW5pbmcgdGhlbVxuXHRcdFx0dmFyIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBudWxsO1xuXHRcdFx0dmFyIGJlZWtlZU9TVmVyc2lvbiA9IE1ldGVvci5jYWxsKCdnZXRCZWVrZWVPc1ZlcnNpb24nKTtcblx0XHRcdGlmIChiZWVrZWVPU1ZlcnNpb24gPj0gMjAyNDA5MjYpIHtcblx0XHRcdFx0dmFyIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBbXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbnVzYiAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuaW50IC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW51c2IgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREUnXG5cdFx0XHRcdF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgaXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IFtcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJ1xuXHRcdFx0XHRdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGdW5jdGlvbiB0byByZWN1cnNpdmVseSBleGVjdXRlIGEgY29tbWFuZCB1bnRpbCBpdCBmYWlscyAoaW5kaWNhdGluZyBubyBtb3JlIGluc3RhbmNlcyBvZiB0aGUgcnVsZSlcblx0XHRcdGZ1bmN0aW9uIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKSB7XG5cdFx0XHRcdGNtZChjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0Ly8gTm8gZXJyb3IgbWVhbnMgdGhlIGNvbW1hbmQgc3VjY2VlZGVkLCBzbyB0aGVyZSBtaWdodCBiZSBtb3JlIGluc3RhbmNlc1xuXHRcdFx0XHRcdGlmICghZXJyb3IpIHtcblx0XHRcdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gRXJyb3IgbGlrZWx5IG1lYW5zIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlLCBtb3ZlIG9uXG5cdFx0XHRcdFx0XHRkb25lQ2FsbGJhY2soKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFeGVjdXRlIGRlbGV0aW9uIGZvciBlYWNoIGNvbW1hbmQgYW5kIHRyYWNrIHdoZW4gYWxsIGFyZSBjb21wbGV0ZWRcblx0XHRcdHZhciB0YXNrc0NvbXBsZXRlZCA9IDA7XG5cdFx0XHRpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcblx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCAoKSA9PiB7XG5cdFx0XHRcdFx0dGFza3NDb21wbGV0ZWQrKztcblx0XHRcdFx0XHQvLyBBZnRlciBhbGwgY29tbWFuZHMgaGF2ZSBiZWVuIGF0dGVtcHRlZCwgc2F2ZSB0aGUgY29uZmlndXJhdGlvblxuXHRcdFx0XHRcdGlmICh0YXNrc0NvbXBsZXRlZCA9PT0gaXB0YWJsZXNEZWxldGVDb21tYW5kcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzYXZlU3Rkb3V0LCBzYXZlU3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2lwdGFibGVzIHJ1bGVzIGZvciBtb2JpbGUgaW50ZXJmYWNlIHVwZGF0ZWQgYW5kIHNhdmVkLicpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsICdBbGwgc3BlY2lmaWVkIHJ1bGVzIGZvciBtb2JpbGUgaW50ZXJmYWNlIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdC8vICdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gW1xuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREUnLFxuXHRcdC8vIFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdC8vIFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHQvLyBcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0Ly8gXHRcdGlmIChlcnJvcikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGlmIChzdGRlcnIpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgbW9iaWxlIGRpc2FibGVkIHN1Y2Nlc3NmdWxseS4nKTtcblx0XHQvLyBcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCBzdGRvdXQpO1xuXHRcdC8vIFx0fSk7XG5cdFx0Ly8gfSxcblx0XHQnYWxsb3dJbnRlcm5ldEZvck1hY01vYmlsZSc6IGZ1bmN0aW9uKG1hY0FkZHJlc3MsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0Ly8gRmlyc3QsIGVuYWJsZSBnZW5lcmFsIGludGVybmV0IHNoYXJpbmcgZnJvbSB3bGFuMCB0byB3d2FuMFxuXHRcdFx0cmVzID0gY21kKCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCAmJiBzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgZW5hYmxpbmcgaW50ZXJuZXQgc2hhcmluZzogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBJbnRlcm5ldCBzaGFyaW5nIGVuYWJsZWQgdmlhIHd3YW4wLmApO1xuXHRcdFx0XHQvLyBBbGxvdyBpbnRlcm5ldCBvbmx5IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzIG9uIHd3YW4wXG5cdFx0XHRcdHZhciBhbGxvd01hY0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtSSBGT1JXQVJEIDEgLWkgd3dhbjAgLW0gbWFjIC0tbWFjLXNvdXJjZSAke21hY0FkZHJlc3N9IC1qIEFDQ0VQVGA7XG5cdFx0XHRcdC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldCB2aWEgd3dhbjAuXG5cdFx0XHRcdHZhciBibG9ja090aGVyc0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIHd3YW4wIC1qIERST1BgO1xuXG5cdFx0XHRcdC8vIEFsbG93IHNwZWNpZmljIE1BQ1xuXHRcdFx0XHRyZXMgPSBjbWQoYWxsb3dNYWNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBhbGxvd2luZyBNQUMgJHttYWNBZGRyZXNzfSBvbiBXV0FOOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBhbGxvd2VkIGZvciBNQUMgJHttYWNBZGRyZXNzfSBvbiBXV0FOLmApO1xuXG5cdFx0XHRcdFx0Ly8gQmxvY2sgYWxsIG90aGVyIE1BQ3Ncblx0XHRcdFx0XHRyZXMgPSBjbWQoYmxvY2tPdGhlcnNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDcyBvbiBXV0FOOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBibG9ja2VkIGZvciBvdGhlciBNQUMgYWRkcmVzc2VzIG9uIFdXQU4uYCk7XG5cblx0XHRcdFx0XHRcdC8vIFNhdmUgaXB0YWJsZXMgcnVsZXNcblx0XHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBzYXZpbmcgaXB0YWJsZXMgcnVsZXMgZm9yIFdXQU46ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgZm9yIFdXQU4gc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKG51bGwpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQncmVtb3ZlQWxsTWFjRmlsdGVyc0Zvck1vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBMaXN0IGFsbCBGT1JXQVJEIHJ1bGVzXG5cdFx0XHRjbWQoJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtLWxpbmUtbnVtYmVycyAtbicsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9jZXNzIHN0ZG91dCB0byBmaW5kIHJ1bGVzIHRvIGRlbGV0ZS4gVGhpcyBwYXJ0IGlzIHBzZXVkby1jb2RlIGFuZCBuZWVkcyBhZGp1c3RtZW50XG5cdFx0XHRcdGNvbnN0IGxpbmVzID0gc3Rkb3V0LnNwbGl0KCdcXG4nKTtcblx0XHRcdFx0Y29uc3QgcnVsZU51bWJlcnMgPSBbXTtcblx0XHRcdFx0bGluZXMuZm9yRWFjaChsaW5lID0+IHtcblx0XHRcdFx0XHRpZiAobGluZS5pbmNsdWRlcygnd3dhbjAnKSAmJiBsaW5lLmluY2x1ZGVzKCdNQUMnKSkge1xuXHRcdFx0XHRcdFx0Ly8gRXh0cmFjdCB0aGUgcnVsZSBudW1iZXIgZnJvbSB0aGUgbGluZVxuXHRcdFx0XHRcdFx0Y29uc3QgcnVsZU51bWJlciA9IGxpbmUuc3BsaXQoJyAnKVswXTsgLy8gVGhpcyBpcyBhIHNpbXBsaWZpY2F0aW9uXG5cdFx0XHRcdFx0XHRydWxlTnVtYmVycy5wdXNoKHJ1bGVOdW1iZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIHJ1bGVzIGJ5IHRoZWlyIG51bWJlcnMsIHN0YXJ0aW5nIGZyb20gdGhlIGhpZ2hlc3QgbnVtYmVyXG5cdFx0XHRcdHJ1bGVOdW1iZXJzLnNvcnQoKGEsIGIpID0+IGIgLSBhKS5mb3JFYWNoKHJ1bGVOdW1iZXIgPT4ge1xuXHRcdFx0XHRcdGNtZChgc3VkbyBpcHRhYmxlcyAtRCBGT1JXQVJEICR7cnVsZU51bWJlcn1gLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgcmVtb3ZpbmcgcnVsZSAke3J1bGVOdW1iZXJ9OiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdFx0Ly8gT3B0aW9uYWxseSwgc3RvcCB0aGUgcHJvY2VzcyBvciBjb250aW51ZSBhdHRlbXB0aW5nIHRvIHJlbW92ZSBvdGhlciBydWxlc1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgUnVsZSAke3J1bGVOdW1iZXJ9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBBZnRlciBhbGwgcnVsZXMgaGF2ZSBiZWVuIHByb2Nlc3NlZCwgc2F2ZSB0aGUgaXB0YWJsZXMgcnVsZXNcblx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2lwdGFibGVzIHJ1bGVzIHVwZGF0ZWQgYW5kIHNhdmVkLicpO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgJ0FsbCBNQUMgZmlsdGVyIHJ1bGVzIGZvciBXV0FOIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQncmVib290JzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKCdzdWRvIHJlYm9vdCcsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHQgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdCAgcmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3NodXRkb3duJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKCdzdWRvIGhhbHQnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0ICBjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0XHQgIHJldHVybjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdzeW5jaHJvbml6ZSc6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIHN5bmMuLi5cIik7XG5cblx0XHRcdHZhciBkZXZpY2VTZXJpYWwgPSBNZXRlb3Iuc2V0dGluZ3MucHVibGljLnNlcmlhbDtcblx0XHRcdHZhciBkZXZpY2VUb2tlbiA9IE1ldGVvci5zZXR0aW5ncy5tb29kbGVBUElUb2tlbjtcblx0XHRcdHZhciB1cmwgPSBNZXRlb3Iuc2V0dGluZ3MuY2xvdWRVUkwgKyBcIi9hcGkvc3RhcnRTeW5jXCI7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQnZGV2aWNlU2VyaWFsJzogZGV2aWNlU2VyaWFsLFxuXHRcdFx0XHRcdCdkZXZpY2VUb2tlbic6IGRldmljZVRva2VuXG5cdFx0XHRcdH0sXG5cdFx0XHQgICAgbnBtUmVxdWVzdE9wdGlvbnM6IHtcblx0XHRcdCAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSwgLy8gVE9ETyByZW1vdmUgd2hlbiBkZXBsb3lcblx0XHRcdCAgICAgICAgdGltZW91dDogMTIwMDAwMFxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgdGltZW91dDogMTIwMDAwMFxuXHRcdFx0fVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly92YXIgcmVzdWx0ID0gSFRUUC5jYWxsKCdQT1NUJywgdXJsLCBvcHRpb25zKTtcblxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gSFRUUC5wb3N0KCB1cmwsIG9wdGlvbnMgKTtcblx0XHRcdFx0dmFyIHJlc3VsdENvbnRlbnQgPSByZXN1bHQuY29udGVudDtcblx0XHRcdFx0Ly9TeW5jaHJvbml6YXRpb25zLmluc2VydCh7ZGF0ZTpEYXRlLm5vdygpfSk7XG5cdFx0XHRcdHJldHVybiByZXN1bHRDb250ZW50O1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCBcIkVycm9yIHdoaWxlIHRyeWluZyB0byBzeW5jcm9uaXplLi4uXCIsIGUgKTtcblx0XHRcdFx0cmV0dXJuIFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi4gXCIrIGU7XG5cdFx0XHR9XG5cdFx0Ly9yZXR1cm4gcmVzdWx0Q29udGVudDtcblx0XHR9LFxuXHR9KTtcbn1cbn0pOyIsIi8vIE1ldGVvci5wdWJsaXNoKCdhbGxBcHBzJywgZnVuY3Rpb24oKSB7XG4vLyBcdHJldHVybiBBcHBzLmZpbmQoe30pO1xuLy8gfSk7XG5cbi8vIE1ldGVvci5wdWJsaXNoKFwidXNlcnNcIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKHt9LCB7ZmllbGRzOntjcmVhdGVkQXQ6IHRydWUsIHByb2ZpbGU6IHRydWUsIGVtYWlsczogdHJ1ZSwgdXNlcm5hbWU6IHRydWV9fSk7XG4vLyB9KTtcblxuXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICB9KTsiLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IFRBUGkxOG4gfSBmcm9tICdtZXRlb3IvdGFwOmkxOG4nO1xuXG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9zeW5jaHJvbml6YXRpb25zLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvdXNlcnMuanMnO1xuXG5pbXBvcnQgJy4uL3NlcnZlci9maXh0dXJlcy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci9tZXRob2RzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL3B1YmxpY2F0aW9ucy5qcyc7XG5pbXBvcnQgJy4uL2xpYi9hcHBfbG9hZGVyLmpzJztcbmltcG9ydCAnLi4vbGliL2kxOG4uanMnOyAvLyBJbXBvcnQgaTE4biBjb25maWd1cmF0aW9uXG5cblxuLy9pbXBvcnQge0REUH0gZnJvbSAnbWV0ZW9yL2RkcCc7XG4vL2ltcG9ydCB7QWNjb3VudHN9IGZyb20gJ21ldGVvci9hY2NvdW50cy1iYXNlJztcblxuXG4vLyBpbXBvcnQgJy4uL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXIvZml4dHVyZXMuanMnO1xuXG4vLyBpbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2ZpeHR1cmVzLmpzJztcblxuXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG5cdGNvbnNvbGUubG9nKFwibWV0ZW9yIHN0YXJ0ZWQuLi5cIik7XG5cblxuXG4gIC8vIGNvZGUgdG8gcnVuIG9uIHNlcnZlciBhdCBzdGFydHVwXG5cbiAvLyAgU2VydmVyMiA9IEREUC5jb25uZWN0KFwiaHR0cDovL2JlZWtlZS5ib3g6ODNcIik7XG5cdC8vIEFjY291bnRzLmNvbm5lY3Rpb24gPSBTZXJ2ZXIyO1xuXHQvLyBjb25zb2xlLmxvZyhcIm9uIGNvbm5lY3RlLi4uXCIpO1xufSk7XG4iXX0=
