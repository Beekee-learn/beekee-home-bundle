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
translations[namespace] = {"error-message":"An error occurred : ","access-denied--page-title":"Access denied !","access-denied--login-needed":"You need to login first.","access-denied--login":"Log in","admin--page-title":"Administration","admin--spaces-list":"List of spaces","admin--spaces-title":"Title","admin--spaces-creation":"Date of creation","admin--spaces-owner":"Owner","admin--spaces-actions":"Actions","admin--spaces-open":"Open","admin--spaces-delete":"Delete","admin--users-list":"List of teacher accounts","admin--users-logins":"Login","admin--users-creation":"Date of creation","admin--users-last-connexion":"Last connection","admin--users-actions":"Actions","admin--users-change-password":"Change password","admin--users-delete":"Delete","admin--user-delete-message":"Delete this user ?","admin--user-delete-confirm-message":"The user has been deleted.","admin--change-password-message":"Enter a new password for the user:","admin--change-password-confirm-message":"The password has been changed.","layout--connection-status":"Disconnected","login--page-title":"Teacher Login","login--mail":"E-mail","login--password":"Password","login--send-mail-forgot-password-link":"Reset my password","login--button-submit":"Log in","login--register":"You need an account ?","login--register-contact-admin":"Please contact your Beekee Box administrator.","login--register-link":"Create an account","login--user-not-found":"Username does not exist.","login--incorrect-password":"Password does not match.","login--send-mail-forgot-password":"An email has been sent to % s with a link to reset your password.","login--send-mail-forgot-password-error":"An error has occurred. Please contact the administrator at : vincent.widmer@beekee.ch","login--send-mail-forgot-password-error-log":"Error sending an email to recover password : %s","logout--page-title":"Sign out","not-found--page-title":"Page not found","not-found--page-description":"Sorry, we can not find a page at this address.","not-found--go-back":"Return to home","privacy--page-title":"Privacy policy","privacy--content":"<h3> Teacher Account Information </h3> <p> When you create a teacher account, you must provide a valid email address and password. These details are not public and can be modified at any time. Beekee Live will not share this information with third parties. </p> <h3> Publications, photos, users </h3> <p> Beekee Live follows a strict data protection policy. The data published on Beekee Live are hosted on servers located in Switzerland. The Beekee Live platform is therefore subject to Swiss data protection law. Publications, photographs, user names and any other data published on the platform are the exclusive property of the user. At any time, a user may choose to permanently delete his/her data. In no event will Beekee Live transmit this data to third parties. </p> <h3> Intervention of a technician </h3> <p> On request of the user, a technician can access a space and consult the data stored on it in order to solve a technical problem. </p> <h3> Cookies </h3> <p> Like many websites, Beekee Live uses cookies to facilitate the use of the platform. The information contained in these cookies is not used by Beekee Live for any other purpose. </p>","register--page-title":"Create an account","register--mail":"E-mail","register--name":"Name","register--password":"Password","register--password-confirm":"Confirm password","register--password-dont-match":"Confirm password doesn't match.","register--terms":"By registering, you accept our <a href=\"{{pathFor 'privacy'}}\" target=\"_blank\">terms and conditions</a>.<br>Your e-mail address will not be disclosed to third parties.","register--button-submit":"Sign up","register--mail-exist":"There already exists a user account with this email address.","register--mail-no-valid-message":"Please enter a valid email address.","register--mail-subject":"Your registration on Beekee Live","register--mail-content":"<h2>Welcome to <a href=\"https://live.beekee.ch\">Beekee Live</a>!</h2><h3>We’re glad you’re here. Start teaching today by creating your first Beekee Live space!</h3><p><b>Tip</b> : Did you know that you can use Beekee Live on computer, smartphone or tablet without the need of installing an app?</p><p>The <a href=\"https://www.beekee.ch\">Beekee Team</a></p>","reset-password--page-title":"Reset your password","reset-password--new-password":"New password","reset-password--button-submit":"Save","register--password-changed-message":"The password has been changed.","space-edit-categories--page-title":"Manage categories","space-edit-categories--page-description":"The categories are used to classify posts.<br />Unlike tags, categories are defined in advance by the teacher.","space-edit-categories--confirm-delete":"Delete category","space-edit--button-submit-add-category":"Add","space-edit-categories--edit-category":"Edit category","space-edit--page-title":"Settings","space-edit--subtitle-general":"General","space-edit--list-title-change-code":"Change the access code","space-edit--description-change-code":"Share this code with your students so they can join this space.","space-edit--list-title-rename-space":"Rename this space","space-edit--list-title-delete-space":"Delete this space","space-edit--list-title-content":"Content","space-edit--list-title-flow":"Continuous Flow","space-edit--description-flow":"By enabling Continuous Flow, new publications are displayed in real time.","space-edit--list-title-categories":"Manage categories","space-edit--list-title-comments":"Allow comments","space-edit--subtitle-users":"Users","space-edit--list-title-users":"Manage authors","space-edit--list-title-free-users":"Free authors","space-edit--description-free-users":"By activating \"Free authors\", users are able to enter their username when they first log in. Otherwise, they will choose from an editable list under \"Manage authors\".","space-edit--subtitle-permissions":"Permissions","space-edit--select-permissions-own":"Authors can edit their own publications","space-edit--select-permissions-all":"Authors can edit all publications","space-edit--select-permissions-none":"Nobody can add or edit publications","space-edit--subtitle-box":"Box","space-edit--list-title-update-box":"Update the Box","space-edit--list-title-ip":"IP address :","space-edit--list-title-sync":"Synchronize with the cloud","space-edit--description-sync":"Connect the beekee box using an ethernet cable to sync its content with the cloud (www.beekee.ch). This may take several minutes.","space-edit--subtitle-account":"Your account","space-edit--description-change-password":"Change your account password.","space-edit--change-code-message":"Change the access code","space-edit--change-code-confirm-message":"The access code has been changed.","space-edit--change-code-already-used-message":"This code is already assigned to another space.","space-edit--rename-space-message":"Rename this space","space-edit--rename-space-confirm-message":"This space is now called","space-edit--delete-space-message":"Permanently delete this space and its contents ?","space-edit--delete-space-confirm-message":"The space has been removed.","space-edit--sync-login-message":"To synchronize this space with the cloud, you must have an account on www.beekee.ch.\nIf this is the case, enter the username linked to your account :","space-edit--sync-error-message":"A problem has occurred. Check that the box is connected to the internet and try again.","space-edit--update-message":"Updating of the box may make the platform inaccessible for several minutes.\nDo you want to continue ?","space-edit--update-waiting-message":"The box will be updated, please wait...","space-edit--no-ip":"No IP address","space-edit--not-connected":"Not connected","space-edit--module-resources":"Distribute files to your learners","space-edit--permissions-public-space":"Allows anyone to access the contents and interact within this Space without needing an Access Code","space-edit--permissions-add-categories":"Users can add categories","space-edit--permissions-add-posts":"Users can add posts","space-edit-authors---page-title":"Manage authors","space-edit-authors---page-description":"Author names are used to identify publications.<br>For example, add the name of your students or the name of a group.","space-edit-authors---submit-button":"Add","space-edit-authors--delete-author-message":"Delete the author %s ?","space-edit-authors--edit-author-message":"Modify the author :","space-edit-authors--add-author-error-message":"There is already an author with this name.","index-student--title":"The platform to promote real-time collaboration","index-student--wrapper-text":"A private space to share photos and messages <br> with your students, colleagues or friends.","index-student--code":"Private space","index-student--code-input-placeholder":"Enter an access code","index-student--visited-title":"Recently visited :","index-student--delete-recent":"(delete)","index-student--public-spaces-title":"Public spaces","index-student--button-code-link":"Validate","index-student--space-doesnt-exist-message":"This space does not exist.\nMake sure to respect the upper and lower case.","index-student--create-your-space-1":"Have you tried","index-student--create-your-space-2":"Beekee Live","index-student--create-your-space-3":" to promote real-time collaboration with your students?","index-student--privacy":"Privacy","index-student--about-us":"About us","index-teacher--spaces-title":"Your wheels","index-teacher--no-space":"You have not created a wheel yet.","index-teacher--button-submit-space":"Create a new wheel","index-teacher--shutdown":"Shutdown","index-teacher--shutdown-message":"Do you really want to shutdown the box ?","index-teacher--shutdown-confirm":"The box will shutdown in a few seconds...","update--reboot-confirm":"The box will reboot in a few seconds...","space-page--hide-panel":"Hide","space-page--code-panel-title":"Space's access code :","space-page--code-panel-description":"Spread this code for others to join you:","space-page--pinned-title":"Pinned","space-page--post-order":"Sort","space-page--post-order-asc":"Newest first","space-page--post-order-desc":"Older first","space-page--no-post":"There are no posts to display yet.","space-submit--page-title":"Create a space","space-submit--space-name":"Name of the space","space-submit--button-submit":"Create","space-submit--button-cancel":"Cancel","space-users--page-title":"Want to change your name ?","space-users-first-connection--page-title":"What is your name ?","space-users--page-description":"It will be used to identify your contributions","space-users--input-choose-author-placeholder":"Type a name...","space-users--submit-author":"Validate","space-users--user-exist":"The user %s already exists. Connect with this name ?","space-sidebar--home":"Home","space-sidebar--live-feed":"Live feed","space-sidebar--categories":"CATEGORIES","space-sidebar--add-category":"Add","space-sidebar--authors":"AUTHORS","space-sidebar--lessons":"Lessons","space-sidebar--resources":"Resources","space-submit--create-space":"Create a new wheel","space-submit--create-space-placeholer":"Wheel name","space-sidebar--create-own-space-1":"Create your own space","space-sidebar--create-own-space-2":"for free!","space-sidebar--privacy":"Privacy","space-sidebar--about-us":"About us","header--back":"Back","header--admin-access":"Teacher Login","header--register":"Create an account","header--login":"Log in","header--exit-message":"Leave this wheel ?","menu--show-all":"Show all","menu--favorites":"My favorites","menu--files":"Files","menu--images":"Images","menu--categories":"Categories","menu--authors":"Authors","menu--tags":"Keywords","menu--code":"Access code","post-edit--submit-button":"Edit","post-item--remove-pin":"Remove pin","post-item--add-pin":"Pin on top","post-item--remove-favorites":"Remove from my favorites","post-item--add-favorites":"Add to my favorites","post-item--delete-post-confirm":"Delete the post ?","post-item--delete-comment-confirm":"Delete the comment ?","post-submit--body-placeholder":"Say something...","post-submit--tags-placeholder":"Add Keywords...","post-submit--select-category":"Select a category","post-submit--no-category":"No category","post-submit--delete-image":"Delete the image","post-submit--confirm-delete-image":"Delete the image ?\nThis action is irreversible.","post-submit--confirm-delete-file":"Delete the file ?\nThis action is irreversible.","post-submit--submit-button":"Send","user-settings--page-title":"User settings","user-settings--confirm-logout":"Are you sure you want to sign out ?","user-settings--change-name":"Change Name","user-settings--change-password":"Change Password","user-settings--logout":"Sign out","user-settings--change-name-message":"New name :","user-settings--change-password-old-message":"Current Password :","user-settings--change-password-new-message":"New Password :","user-settings--change-password-confirm-message":"Your Password has been changed.","user-settings--change-email":"Change E-mail","user-settings--change-email-message":"New e-mail address :","user-settings--change-email-confirm-message":"Your e-mail address has been changed.","user-settings--change-email-incorrect":"Not an e-mail address","space-header--leave":"Leave this wheel","space-header--settings":"Settings","post--edit":"Edit","post--delete":"Delete","home--title":"Home","home--space-code-message":"<strong>Bzz!</strong> Spread this code for others to join you:","home--submit-button":"Add a section","home-post--order-up":"Up","home-post--order-down":"Down","home-post-delete--title":"Delete this section","home-post-delete--confirm":"Delete this section ?","home-post-edit--title":"Edit section","home-post-submit--title":"Add a section","home-post-submit--placeholder":"Title of the section","home-post-submit--confirm-toast":"The new section has been added.","modal--close":"Close","modal--cancel":"Cancel","modal--delete":"Delete","modal--submit":"Submit","modal--save":"Save changes","lessons--title":"Lessons","lessons--subtitle":"Articulate Storyline materials","lessons--submit-button":"Add a lesson","lessons-post--start-lesson":"Start this lesson","lessons-post-submit--title":"Add a lesson","lessons-post-submit--title-placeholder":"Title of the lesson","lessons-post-submit--description-placeholder":"Description of the lesson","lessons-post-submit--help":"Lessons must be exported in HTML5 format within Storyline.<br>The resulting folder must be zipped before being uploaded, and the .zip file must have the same name as the zipped folder it contains.","lessons-post-submit--confirm-toast":"The new lesson has been added.","lessons-post-delete--confirm":"Do you want to delete this lesson ?","lessons-post-delete--title":"Delete this lesson","lessons-post-edit--title":"Edit lesson","lessons-upload--button":"Upload a Storyline lesson","resources--title":"Resources","resources-post-edit--title":"Edit resource","resources-post-submit--title":"Add a resource","resources-post-submit--title-placeholder":"Title of the resource","resources-post-submit--description-placeholder":"Description of the ressource","resources-post-submit--confirm-toast":"The new resource has been added.","resources--submit-button":"Add a resource","resources-category-edit--title":"Edit a category","resources-category-submit--title":"Add a category","resources-category-submit--placeholder":"Category name","live-feed--notification-panel":"new messages","live-feed--load-more":"Load more...","live-feed-category-edit--title":"Edit a category","live-feed-category-submit--title":"Add a category","live-feed-category-submit--placeholder":"Category name","live-feed-post-delete--delete-confirm":"Do you want to delete this post ?","live-feed-post-delete--title":"Delete this post","live-feed-post--add-comment":"Add a comment...","live-feed-post--nb-likes-with-me":"You and %s people","live-feed-post--like":"You like","live-feed-post--nb-likes":"people","live-feed-post-submit--add-category":"+ Add a category...","live-feed-post-edit--title":"Edit post","live-feed-delete-comment--title":"Delete comment","live-feed-delete-comment--subtitle":"Delete this comment?","wheel--click-to-spin":"Click to spin!","wheel--welcome-message-title":"Welcome to your new Wheel!","wheel--welcome-message-body":"Start by adding students.","wheel--add-students":"Add new students","wheel-settings--add-student":"Add a student","wheel-settings--students-list":"Students","wheel-settings--show-all":"Show All","wheel-settings--hide-all":"Hide All","wheel--students":"Student(s)","wheel--hidden":"hidden","wheel--show":"show","wheel--hide-student":"Hide this student","admin--users-edit":"Edit","admin--user-edit-message":"Edit the name :"};
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
      $('.index--icon').addClass('animated-icon');
      $("#inject-loader-wrapper").fadeOut(500, function () {
        $(this).remove();
        $('.index--icon').removeClass('animated-icon');
      });
    }, 500);
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

},"wifiClientModeState.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/wifiClientModeState.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  WifiClientModeState: () => WifiClientModeState
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const WifiClientModeState = new Mongo.Collection('wifiClientModeState');

if (Meteor.isServer) {
  Meteor.publish('wifiClientModeState', function wifiClientModeStatePublication() {
    return WifiClientModeState.find({
      _id: 'wifi-client-mode-state'
    });
  });
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
// Create the roles
Roles.createRole('manager', {
  unlessExists: true
}); // ###  Create admin user at first start  ###

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
let WifiClientModeState;
module.link("../imports/api/wifiClientModeState.js", {
  WifiClientModeState(v) {
    WifiClientModeState = v;
  }

}, 1);
Meteor.startup(function () {
  if (Meteor.isServer) {
    var fs = Npm.require('fs');

    exec = Npm.require('child_process').exec;
    cmd = Meteor.wrapAsync(exec);
    var wifiSettingsPath = Meteor.settings.wifiSettingsPath;
    var configPath = Meteor.settings.configPath;
    var scriptsPath = Meteor.settings.scriptsPath || '/home/beekee/scripts';
    var wifiClientEnableScriptName = 'switch_wifi_to_client.sh';
    var wifiClientDisableScriptName = 'switch_wifi_to_ap.sh';
    var wifiClientModeStatePath = Meteor.settings.wifiClientModeStatePath || `${scriptsPath}/.wifi-client-mode-state`;

    const readline = require('readline');

    function shellEscape(value) {
      return `'${String(value).replace(/'/g, `'\\''`)}'`;
    }

    function resolveScriptPath(scriptName) {
      return `${scriptsPath}/${scriptName}`;
    }

    function readWifiClientModeState() {
      try {
        if (!fs.existsSync(wifiClientModeStatePath)) {
          return null;
        }

        const state = fs.readFileSync(wifiClientModeStatePath, 'utf-8').trim();

        if (state === 'enabled') {
          return true;
        }

        if (state === 'disabled') {
          return false;
        }
      } catch (error) {
        console.log('Error reading Wi-Fi client mode state:', error);
      }

      return null;
    }

    function writeWifiClientModeState(enabled) {
      try {
        fs.writeFileSync(wifiClientModeStatePath, enabled ? 'enabled\n' : 'disabled\n', 'utf-8');
      } catch (error) {
        console.log('Error writing Wi-Fi client mode state:', error);
      }
    }

    function persistWifiClientModeState(enabled) {
      writeWifiClientModeState(enabled);
      WifiClientModeState.upsert({
        _id: 'wifi-client-mode-state'
      }, {
        $set: {
          enabled: enabled === true,
          updatedAt: new Date()
        }
      });
    }

    function detectWifiAccessPointModeFromSystem() {
      try {
        const hasWlanUsb = cmd('ip link show wlanusb >/dev/null 2>&1 && echo true || echo false').toString().trim();

        if (hasWlanUsb !== 'true') {
          return false;
        }

        const hasApAddress = cmd("ip -4 addr show wlanusb | grep -q '10\\.1\\.0\\.1/24' && echo true || echo false").toString().trim();
        return hasApAddress === 'true';
      } catch (error) {
        console.log('Error detecting Wi-Fi access point mode from system:', error);
        return false;
      }
    }

    function detectWifiClientModeFromSystem() {
      try {
        if (detectWifiAccessPointModeFromSystem()) {
          return false;
        }

        const hasWlanUsb = cmd('ip link show wlanusb >/dev/null 2>&1 && echo true || echo false').toString().trim();

        if (hasWlanUsb !== 'true') {
          return false;
        }

        const nmState = cmd("nmcli -t -f DEVICE,STATE device status 2>/dev/null | awk -F: '$1==\"wlanusb\" {print $2; exit}' || true").toString().trim();
        return /^(connected|disconnected|connecting|preparing)/.test(nmState);
      } catch (error) {
        console.log('Error detecting Wi-Fi client mode from system:', error);
        return false;
      }
    }

    function getWifiClientModeState() {
      if (detectWifiAccessPointModeFromSystem()) {
        persistWifiClientModeState(false);
        return false;
      }

      const detectedState = detectWifiClientModeFromSystem();
      persistWifiClientModeState(detectedState);
      return detectedState;
    }

    function ensureWifiClientModeEnabled() {
      if (!getWifiClientModeState()) {
        throw new Meteor.Error('wifi-client-mode-disabled', 'Enable Wi-Fi client mode before scanning or connecting.');
      }
    }

    function runWifiModeScript(scriptName) {
      const scriptPath = resolveScriptPath(scriptName);

      if (!fs.existsSync(scriptPath)) {
        throw new Meteor.Error('wifi-client-mode-script-missing', `Missing Wi-Fi mode script: ${scriptPath}`);
      }

      return cmd(`timeout 45s bash ${shellEscape(scriptPath)}`);
    }

    if (detectWifiAccessPointModeFromSystem()) {
      persistWifiClientModeState(false);
    } else {
      persistWifiClientModeState(detectWifiClientModeFromSystem());
    }

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
        operatorName = cmd("sudo qmicli -p --device=/dev/cdc-wdm0 --nas-get-operator-name | grep -m2 'Name             ' | awk '{print $3}'");
        return operatorName;
      },
      // 'getSignalStrength': function () {
      // 	var signalStrength;
      // 	signalStrength = cmd("sudo qmicli -p --device=/dev/cdc-wdm0 --nas-get-signal-strength | grep -m1 Network | awk '{print $3, $2}'");
      // 	return signalStrength;
      // },
      'getSignalStrength': function () {
        var signalStrength; // This extracts just the numeric part of the signal strength.

        signalStrength = cmd("sudo qmicli -p --device=/dev/cdc-wdm0 --nas-get-signal-strength | grep 'Network' | awk '{print $3}' | grep -oE '[-0-9]+'"); // Convert signal strength to a qualitative value

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
      // 	isOnline = cmd("sudo qmicli -p --device=/dev/cdc-wdm0 --nas-get-signal-strength | grep -m1 Network | awk '{print $3, $2}'");
      // 	return isOnline;
      // },
      // 'getBand': function () {
      // 	var band;
      //			band = cmd("sudo qmicli -p --device=/dev/cdc-wdm0 --nas-get-signal-strength | grep -m1 Network | awk \"{print $2}\" | cut -d\\' -f2");
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
        } // Execute SIM card status check command


        let simStatus = executeCommand("sudo qmicli -p --device=/dev/cdc-wdm0 --uim-get-card-status | grep 'Card state:'");
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
          res = cmd("ping -c 1 8.8.8.8"); // Check if the ping command was successful based on the output

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
      'getMobileConnectEnabled': function () {
        let res;

        try {
          res = cmd("sudo systemctl is-active mobile_connect.service >/dev/null 2>&1 && echo true || echo false");
          return res.toString().trim() === "true";
        } catch (error) {
          return false;
        }
      },
      'enableMobileConnect': function () {
        cmd("sudo systemctl start mobile_connect.service");
        cmd("sudo systemctl enable mobile_connect.service");
        return true;
      },
      'disableMobileConnect': function () {
        cmd("sudo systemctl stop mobile_connect.service");
        cmd("sudo systemctl disable mobile_connect.service");
        return true;
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
      'getWLANUSB': function () {
        let res;

        try {
          res = cmd('ip link show wlanusb');
          return true;
        } catch (error) {
          return false;
        }
      },
      'getWifiClientModeEnabled': function () {
        return getWifiClientModeState();
      },
      'enableWifiClientMode': function () {
        try {
          runWifiModeScript(wifiClientEnableScriptName);
          return getWifiClientModeState();
        } catch (error) {
          console.log('Error enabling Wi-Fi client mode:', error);
          throw new Meteor.Error('wifi-client-mode-enable-failed', error.reason || error.message || 'Failed to enable Wi-Fi client mode.');
        }
      },
      'disableWifiClientMode': function () {
        try {
          runWifiModeScript(wifiClientDisableScriptName);
          return getWifiClientModeState();
        } catch (error) {
          console.log('Error disabling Wi-Fi client mode:', error);
          throw new Meteor.Error('wifi-client-mode-disable-failed', error.reason || error.message || 'Failed to disable Wi-Fi client mode.');
        }
      },
      'getWifiNetworks': function () {
        return Promise.asyncApply(() => {
          ensureWifiClientModeEnabled();

          var wifi = require('node-wifi');

          wifi.init({
            iface: 'wlanusb'
          });
          return new Promise((resolve, reject) => {
            console.log('Starting wifi scan');
            wifi.scan((error, networks) => {
              if (error) {
                console.error('Error scanning networks:', error);
                resolve([]);
              } else {
                console.log('Wifi scan completed successfully');
                const uniqueNetworks = new Map();
                networks.forEach(network => {
                  let strength;

                  if (network.quality > 80) {
                    strength = 'wifi-4';
                  } else if (network.quality > 55) {
                    strength = 'wifi-3';
                  } else if (network.quality > 30) {
                    strength = 'wifi-2';
                  } else {
                    strength = 'wifi-1';
                  }

                  const key = `${network.ssid}:${network.mac.substring(0, 15)}`;

                  if (!uniqueNetworks.has(key) || network.quality > uniqueNetworks.get(key).quality) {
                    uniqueNetworks.set(key, {
                      name: network.ssid,
                      strength: strength,
                      security: network.security,
                      quality: network.quality
                    });
                  }
                });
                const uniqueNetworksArray = Array.from(uniqueNetworks.values());
                uniqueNetworksArray.forEach(network => delete network.quality);
                resolve(uniqueNetworksArray);
              }
            });
          });
        });
      },
      'connectToWifi': function (ssid, password) {
        ensureWifiClientModeEnabled();

        var wifi = require('node-wifi');

        wifi.init({
          iface: 'wlanusb'
        });
        return new Promise((resolve, reject) => {
          wifi.connect({
            ssid: ssid,
            password: password
          }, error => {
            if (error) {
              console.error('Error connecting to wifi:', error);
              resolve(false);
            } else {
              console.log('Connected to wifi:', ssid);
              resolve(true);
            }
          });
        });
      },
      'disconnectWifi': function () {
        ensureWifiClientModeEnabled();

        var wifi = require('node-wifi');

        wifi.init({
          iface: 'wlanusb'
        });
        return new Promise((resolve, reject) => {
          wifi.disconnect(error => {
            if (error) {
              console.error('Error disconnecting from wifi:', error);
              resolve(false);
            } else {
              console.log('Disconnected from wifi');
              resolve(true);
            }
          });
        });
      },
      'forgetWifi': function (ssid) {
        ensureWifiClientModeEnabled();

        var wifi = require('node-wifi');

        wifi.init({
          iface: 'wlanusb'
        });
        return new Promise((resolve, reject) => {
          wifi.deleteConnection({
            ssid: ssid
          }, error => {
            if (error) {
              console.error('Error connecting to wifi:', error);
              resolve(false);
            } else {
              console.log('Connected to wifi:', ssid);
              resolve(true);
            }
          });
        });
      },
      'getClientSSID': function () {
        let ssid;

        try {
          ssid = cmd('iwgetid -r wlanusb 2>/dev/null || true').trim();

          if (!ssid) {
            ssid = cmd('nmcli -g GENERAL.CONNECTION device show wlanusb 2>/dev/null | head -n 1 || true').trim();
          }

          if (ssid === '--') {
            ssid = '';
          }

          if (typeof ssid === 'string' && ssid !== '') {
            return ssid;
          } else {
            return 'Not connected';
          }
        } catch (error) {
          console.log('Error retrieving client SSID:', error);
          return 'Not connected';
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
            console.error(`exec error: ${error}`);
            if (callback) callback(error, null);
            return;
          }

          if (stderr) {
            console.error(`stderr: ${stderr}`);
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
        } // Function to execute a command and recursively call itself if the command was successful (rule was found and deleted).


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
        } // Execute deletion for each command and track completion.


        var tasksCompleted = 0;
        iptablesDeleteCommands.forEach(command => {
          executeAndRepeat(command, () => {
            tasksCompleted++; // Once all deletion tasks are done, save the iptables configuration.

            if (tasksCompleted === iptablesDeleteCommands.length) {
              cmd('sudo netfilter-persistent save', (error, stdout, stderr) => {
                if (error) {
                  console.error(`exec error during saving iptables rules: ${error}`);
                  if (callback) callback(error);
                  return;
                }

                console.log(`iptables rules saved.`);
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
        var res; // Command to allow internet for the specified MAC address on eth0.

        var allowMacCommand = `sudo iptables -A FORWARD -i eth0 -m mac --mac-source ${macAddress} -j ACCEPT`; // Command to drop all other internet traffic on eth0.

        var blockOthersCommand = `sudo iptables -A FORWARD -i eth0 -j DROP`; // Allow internet for the specified MAC address.

        res = cmd(allowMacCommand, (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error during allowing MAC ${macAddress}: ${error}`);
            callback(error);
            return;
          }

          console.log(`Internet access allowed for MAC ${macAddress}.`); // Block all other MAC addresses from accessing the internet.

          res = cmd(blockOthersCommand, (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error during blocking other MACs: ${error}`);
              callback(error);
              return;
            }

            console.log(`Internet access blocked for other MAC addresses.`); // Optionally, save the iptables settings to make them persistent.

            cmd('sudo netfilter-persistent save', (error, stdout, stderr) => {
              if (error) {
                console.error(`exec error during saving iptables rules: ${error}`);
                callback(error);
                return;
              }

              console.log(`iptables rules saved.`);
              callback(null);
            });
          });
        });
      },
      'removeAllMacFiltersForEthernet': function (callback) {
        // List all FORWARD rules with line numbers
        cmd('sudo iptables -L FORWARD --line-numbers -n', (error, stdout, stderr) => {
          if (error) {
            console.error(`Error listing FORWARD rules: ${error}`);
            if (callback) callback(error, null);
            return;
          } // Process stdout to identify rules related to MAC filtering on eth0


          const lines = stdout.split('\n');
          const ruleNumbers = lines.reduce((acc, line, index) => {
            if (line.includes('eth0') && line.toLowerCase().includes('mac')) {
              const ruleNumber = line.split(/\s+/)[0]; // Extract the rule number, assuming it's the first element

              acc.push(ruleNumber);
            }

            return acc;
          }, []); // Remove identified rules starting from the highest number to prevent shifting of line numbers

          ruleNumbers.sort((a, b) => b - a).forEach(ruleNumber => {
            cmd(`sudo iptables -D FORWARD ${ruleNumber}`, (removeError, removeStdout, removeStderr) => {
              if (removeError) {
                console.error(`Error removing rule ${ruleNumber}: ${removeError}`); // Decide if you want to continue removing other rules or stop here

                return;
              }

              console.log(`Rule ${ruleNumber} removed successfully.`);
            });
          }); // After attempting to remove all identified rules, save the iptables configuration

          cmd('sudo netfilter-persistent save', (saveError, saveStdout, saveStderr) => {
            if (saveError) {
              console.error(`Error saving iptables rules: ${saveError}`);
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
        } // Adjusted to check for the specific rule indicating internet sharing from wlanint to wwan0


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
            console.error(`exec error: ${error}`);
            if (callback) callback(error, null);
            return;
          }

          if (stderr) {
            console.error(`stderr: ${stderr}`);
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
        } // Function to recursively execute a command until it fails (indicating no more instances of the rule)


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
        } // Execute deletion for each command and track when all are completed


        var tasksCompleted = 0;
        iptablesDeleteCommands.forEach(command => {
          executeAndRepeat(command, () => {
            tasksCompleted++; // After all commands have been attempted, save the configuration

            if (tasksCompleted === iptablesDeleteCommands.length) {
              cmd('sudo netfilter-persistent save', (error, saveStdout, saveStderr) => {
                if (error) {
                  console.error(`Error saving iptables rules: ${error}`);
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
        var res; // First, enable general internet sharing from wlan0 to wwan0

        res = cmd('sudo iptables --append FORWARD --in-interface wlan0 --out-interface wwan0 -j ACCEPT && sudo iptables --append FORWARD --in-interface wwan0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT && sudo iptables --table nat --append POSTROUTING --out-interface wwan0 -j MASQUERADE', (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error during enabling internet sharing: ${error}`);
            return callback(error);
          }

          console.log(`Internet sharing enabled via wwan0.`); // Allow internet only for the specified MAC address on wwan0

          var allowMacCommand = `sudo iptables -I FORWARD 1 -i wwan0 -m mac --mac-source ${macAddress} -j ACCEPT`; // Block all other MAC addresses from accessing the internet via wwan0.

          var blockOthersCommand = `sudo iptables -A FORWARD -i wwan0 -j DROP`; // Allow specific MAC

          res = cmd(allowMacCommand, (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error during allowing MAC ${macAddress} on WWAN: ${error}`);
              return callback(error);
            }

            console.log(`Internet access allowed for MAC ${macAddress} on WWAN.`); // Block all other MACs

            res = cmd(blockOthersCommand, (error, stdout, stderr) => {
              if (error) {
                console.error(`exec error during blocking other MACs on WWAN: ${error}`);
                return callback(error);
              }

              console.log(`Internet access blocked for other MAC addresses on WWAN.`); // Save iptables rules

              cmd('sudo netfilter-persistent save', (error, stdout, stderr) => {
                if (error) {
                  console.error(`exec error during saving iptables rules for WWAN: ${error}`);
                  return callback(error);
                }

                console.log(`iptables rules for WWAN saved.`);
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
            console.error(`Error listing rules: ${error}`);
            if (callback) callback(error, null);
            return;
          } // Process stdout to find rules to delete. This part is pseudo-code and needs adjustment


          const lines = stdout.split('\n');
          const ruleNumbers = [];
          lines.forEach(line => {
            if (line.includes('wwan0') && line.includes('MAC')) {
              // Extract the rule number from the line
              const ruleNumber = line.split(' ')[0]; // This is a simplification

              ruleNumbers.push(ruleNumber);
            }
          }); // Remove rules by their numbers, starting from the highest number

          ruleNumbers.sort((a, b) => b - a).forEach(ruleNumber => {
            cmd(`sudo iptables -D FORWARD ${ruleNumber}`, (error, stdout, stderr) => {
              if (error) {
                console.error(`Error removing rule ${ruleNumber}: ${error}`);
                if (callback) callback(error, null); // Optionally, stop the process or continue attempting to remove other rules

                return;
              }

              console.log(`Rule ${ruleNumber} removed successfully.`);
            });
          }); // After all rules have been processed, save the iptables rules

          cmd('sudo netfilter-persistent save', (error, stdout, stderr) => {
            if (error) {
              console.error(`Error saving iptables rules: ${error}`);
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
            console.error(`exec error: ${error}`);
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
            console.error(`exec error: ${error}`);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS93aWZpQ2xpZW50TW9kZVN0YXRlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiYWRkQ2xhc3MiLCJmYWRlT3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnQiLCJBcHBzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJhbGxvdyIsImluc2VydCIsInVwZGF0ZSIsInVzZXJJZCIsInNwYWNlIiwicHVibGlzaCIsImFwcHNQdWJsaWNhdGlvbiIsImZpbmQiLCJTeW5jaHJvbml6YXRpb25zIiwic3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uIiwiaXNBZG1pbiIsImNvbnNvbGUiLCJsb2ciLCJSb2xlcyIsInVzZXJJc0luUm9sZSIsInVzZXIiLCJyb2xlQXNzaWdubWVudCIsInJlYWR5IiwiV2lmaUNsaWVudE1vZGVTdGF0ZSIsIndpZmlDbGllbnRNb2RlU3RhdGVQdWJsaWNhdGlvbiIsIl9pZCIsImNyZWF0ZVJvbGUiLCJ1bmxlc3NFeGlzdHMiLCJ1c2VycyIsImNvdW50IiwiYWRtaW5QYXNzd29yZCIsInNldHRpbmdzIiwidXNlcm5hbWUiLCJyb2xlcyIsIl8iLCJlYWNoIiwiaWQiLCJBY2NvdW50cyIsImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJvZmlsZSIsIm5hbWUiLCJsZW5ndGgiLCJhZGRVc2Vyc1RvUm9sZXMiLCJkZWZhdWx0QXBwcyIsImN1c3RvbUFwcCIsIm9ubHlUZWFjaGVyIiwib3JkZXIiLCJkb2NfdXNlciIsImRvY19hZG1pbiIsImxhc3RfdmVyc2lvbiIsInVybCIsImljb24iLCJkZXNjcmlwdGlvbiIsImluc3RhbGxlZCIsInZlcnNpb24iLCJoaWRkZW4iLCJIVFRQIiwiZnMiLCJOcG0iLCJyZXF1aXJlIiwiZXhlYyIsImNtZCIsIndyYXBBc3luYyIsIndpZmlTZXR0aW5nc1BhdGgiLCJjb25maWdQYXRoIiwic2NyaXB0c1BhdGgiLCJ3aWZpQ2xpZW50RW5hYmxlU2NyaXB0TmFtZSIsIndpZmlDbGllbnREaXNhYmxlU2NyaXB0TmFtZSIsIndpZmlDbGllbnRNb2RlU3RhdGVQYXRoIiwicmVhZGxpbmUiLCJzaGVsbEVzY2FwZSIsInZhbHVlIiwiU3RyaW5nIiwicmVwbGFjZSIsInJlc29sdmVTY3JpcHRQYXRoIiwic2NyaXB0TmFtZSIsInJlYWRXaWZpQ2xpZW50TW9kZVN0YXRlIiwiZXhpc3RzU3luYyIsInN0YXRlIiwicmVhZEZpbGVTeW5jIiwidHJpbSIsImVycm9yIiwid3JpdGVXaWZpQ2xpZW50TW9kZVN0YXRlIiwiZW5hYmxlZCIsIndyaXRlRmlsZVN5bmMiLCJwZXJzaXN0V2lmaUNsaWVudE1vZGVTdGF0ZSIsInVwc2VydCIsIiRzZXQiLCJ1cGRhdGVkQXQiLCJEYXRlIiwiZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0iLCJoYXNXbGFuVXNiIiwidG9TdHJpbmciLCJoYXNBcEFkZHJlc3MiLCJkZXRlY3RXaWZpQ2xpZW50TW9kZUZyb21TeXN0ZW0iLCJubVN0YXRlIiwidGVzdCIsImdldFdpZmlDbGllbnRNb2RlU3RhdGUiLCJkZXRlY3RlZFN0YXRlIiwiZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkIiwiRXJyb3IiLCJydW5XaWZpTW9kZVNjcmlwdCIsInNjcmlwdFBhdGgiLCJtZXRob2RzIiwiYWRtaW5JZCIsIm5ld1Bhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjaGVjayIsIm9sZGVtYWlsIiwiZW1haWxzIiwiZW1haWxSZWciLCJyZW1vdmVFbWFpbCIsImFkZHJlc3MiLCJhZGRFbWFpbCIsInJlc3VsdCIsIm1lc3NhZ2UiLCJyZW1vdmVVc2Vyc0Zyb21Sb2xlcyIsImNvbW1hbmQiLCJyZXMiLCJzdG9yYWdlVXNhZ2UiLCJ0b0ZpeGVkIiwic3RvcmFnZVRvdGFsIiwicGVyY2VudGFnZSIsImRhdGEiLCJtYXRjaCIsIlJlZ0V4cCIsIlNTSUQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJuZXdTU0lEIiwiZW5jb2RlZE5ld1NTSUQiLCJCdWZmZXIiLCJuZXdEYXRhIiwiY2hhbm5lbCIsIm5ld0NoYW5uZWwiLCJzZXJpYWwiLCJvcGVyYXRvck5hbWUiLCJzaWduYWxTdHJlbmd0aCIsInN0cmVuZ3RoVmFsdWUiLCJwYXJzZUludCIsInF1YWxpdHkiLCJBUE4iLCJBUE5Vc2VyIiwiQVBOUGFzc3dvcmQiLCJzaW1TdGF0dXNSZXN1bHQiLCJleGVjdXRlQ29tbWFuZCIsInNpbVN0YXR1cyIsImluY2x1ZGVzIiwiU2ltUGluIiwiUElOIiwiaXNTaGFyaW5nIiwicmVzMiIsImlzT25saW5lIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInJlYXNvbiIsIndpZmkiLCJpbml0IiwiaWZhY2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNjYW4iLCJuZXR3b3JrcyIsInVuaXF1ZU5ldHdvcmtzIiwiTWFwIiwiZm9yRWFjaCIsIm5ldHdvcmsiLCJzdHJlbmd0aCIsImtleSIsInNzaWQiLCJtYWMiLCJzdWJzdHJpbmciLCJoYXMiLCJnZXQiLCJzZXQiLCJzZWN1cml0eSIsInVuaXF1ZU5ldHdvcmtzQXJyYXkiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJjb25uZWN0IiwiZGlzY29ubmVjdCIsImRlbGV0ZUNvbm5lY3Rpb24iLCJsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCIsImNvbW1hbmRSZXN1bHQiLCJzaGFyaW5nRnJvbVdsYW5Ub0V0aCIsInNoYXJpbmdUb1dsYW5Gcm9tRXRoRXN0YWJsaXNoZWQiLCJiZWVrZWVPU1ZlcnNpb24iLCJjYWxsIiwic3RhdHVzIiwibWFjQWRkcmVzcyIsImNhbGxiYWNrIiwiaXB0YWJsZXNDb21tYW5kcyIsImpvaW4iLCJzdGRvdXQiLCJzdGRlcnIiLCJpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzIiwiZXhlY3V0ZUFuZFJlcGVhdCIsImRvbmVDYWxsYmFjayIsInRhc2tzQ29tcGxldGVkIiwiYWxsb3dNYWNDb21tYW5kIiwiYmxvY2tPdGhlcnNDb21tYW5kIiwibGluZXMiLCJzcGxpdCIsInJ1bGVOdW1iZXJzIiwicmVkdWNlIiwiYWNjIiwibGluZSIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJydWxlTnVtYmVyIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInJlbW92ZUVycm9yIiwicmVtb3ZlU3Rkb3V0IiwicmVtb3ZlU3RkZXJyIiwic2F2ZUVycm9yIiwic2F2ZVN0ZG91dCIsInNhdmVTdGRlcnIiLCJzaGFyaW5nRnJvbVdsYW5Ub1d3YW4iLCJzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCIsImRldmljZVNlcmlhbCIsInB1YmxpYyIsImRldmljZVRva2VuIiwibW9vZGxlQVBJVG9rZW4iLCJjbG91ZFVSTCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwibnBtUmVxdWVzdE9wdGlvbnMiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJ0aW1lb3V0IiwicG9zdCIsInJlc3VsdENvbnRlbnQiLCJjb250ZW50IiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LHNCQUFaO0FBWWpUO0FBQ0E7QUFHQTtBQUVBO0FBR0FuQixNQUFNLENBQUNRLE9BQVAsQ0FBZSxNQUFNO0FBQ3BCeUIsU0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFEb0IsQ0FLbkI7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQVZELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblx0SW5qZWN0LnJhd0hlYWQoXCJtZXRhTG9hZGVyXCIsICc8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBoZWlnaHQ9ZGV2aWNlLWhlaWdodFwiLz48bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj5cdDxtZXRhIG5hbWU9XCJtb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiPicpO1xuXG5cdEluamVjdC5yYXdCb2R5KFwiaHRtbExvYWRlclwiLCBBc3NldHMuZ2V0VGV4dCgnYXBwX2xvYWRlci5odG1sJykpO1xufVxuXG5pZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XG5cdE1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0JCgnLmluZGV4LS1pY29uJykuYWRkQ2xhc3MoJ2FuaW1hdGVkLWljb24nKTtcblxuXHRcdFx0JChcIiNpbmplY3QtbG9hZGVyLXdyYXBwZXJcIikuZmFkZU91dCg1MDAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHQkKCcuaW5kZXgtLWljb24nKS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQtaWNvbicpO1xuXHRcdH0pO1xuXHRcdH0sIDUwMCk7XG5cdH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBBcHBzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtYXBwcycpO1xuXG5cblxuQXBwcy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXG5cdC8vIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyB1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gcmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9XG59KTtcblxuLy8gUHVibGljYXRpb25zXG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxBcHBzJywgZnVuY3Rpb24gYXBwc1B1YmxpY2F0aW9uKCkge1xuICAgIHJldHVybiBBcHBzLmZpbmQoKTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuIFxuZXhwb3J0IGNvbnN0IFN5bmNocm9uaXphdGlvbnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignaG9tZS1zeW5jaHJvbml6YXRpb25zJyk7XG5cblxuXG5TeW5jaHJvbml6YXRpb25zLmFsbG93KHtcblxuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHVwZGF0ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0cmVtb3ZlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXG5cdC8vIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyB1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gcmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9XG59KTtcblxuLy8gUHVibGljYXRpb25zXG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxTeW5jaHJvbml6YXRpb25zJywgZnVuY3Rpb24gc3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uKCkge1xuICAgIHJldHVybiBTeW5jaHJvbml6YXRpb25zLmZpbmQoKTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG4vLyB2YXIgdXNlcnNEQlx0PSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy8gdmFyIGNvbGxlY3Rpb25cdD0gdXNlcnNEQi5vcGVuKCd1c2VycycpO1xuXG5cbi8vY29uc3QgZGF0YWJhc2UgPSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy9jb25zdCBjb2xsZWN0aW9uID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vL2V4cG9ydCBjb25zdCBVc2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy8gU2hhcmluZyB0aGUgc2FtZSBBY2NvdW50IGNvbGxlY3Rpb24gdGhhbiBiZWVrZWUtbGl2ZVxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXG5cdC8vIGNoZWNrIHRoYXQgdGhlIHVzZXJJZCBzcGVjaWZpZWQgaXMgYWRtaW5cbmlzQWRtaW4gPSBmdW5jdGlvbih1c2VySWQpIHtcblx0Y29uc29sZS5sb2coXCJpc2FkbWluXCIpO1xuICByZXR1cm4gUm9sZXMudXNlcklzSW5Sb2xlKE1ldGVvci51c2VyKCksICdhZG1pbicpO1xufVxuXG5cbi8vIFB1Ymxpc2ggUm9sZXMgdG8gY2xpZW50XG5NZXRlb3IucHVibGlzaChudWxsLCBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnVzZXJJZCkge1xuICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCh7ICd1c2VyLl9pZCc6IHRoaXMudXNlcklkIH0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucmVhZHkoKVxuICB9XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKCk7XG5cbn0pO1xuXG4gIC8vIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgLy8gXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAvLyAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICAvLyB9KTtcblxuLy8gU2VydmVyMiA9IEREUC5jb25uZWN0KFwiaHR0cDovL2JlZWtlZS5ib3g6ODNcIik7XG4vLyBBY2NvdW50cy5jb25uZWN0aW9uID0gU2VydmVyMjtcblxuXG4vL3ZhciBkYXRhYmFzZSA9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vL01ldGVvci51c2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy9leHBvcnQgY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignYXBwcycpO1xuXG5cbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIC8vIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgLy8gXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAvLyAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICAvLyB9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5cbmV4cG9ydCBjb25zdCBXaWZpQ2xpZW50TW9kZVN0YXRlID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ3dpZmlDbGllbnRNb2RlU3RhdGUnKTtcblxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXHRNZXRlb3IucHVibGlzaCgnd2lmaUNsaWVudE1vZGVTdGF0ZScsIGZ1bmN0aW9uIHdpZmlDbGllbnRNb2RlU3RhdGVQdWJsaWNhdGlvbigpIHtcblx0XHRyZXR1cm4gV2lmaUNsaWVudE1vZGVTdGF0ZS5maW5kKHsgX2lkOiAnd2lmaS1jbGllbnQtbW9kZS1zdGF0ZScgfSk7XG5cdH0pO1xufVxuIiwiaW1wb3J0IHsgQXBwcyB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuXG5cdC8vIENyZWF0ZSB0aGUgcm9sZXNcblx0Um9sZXMuY3JlYXRlUm9sZSgnbWFuYWdlcicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblxuXG4vLyAjIyMgIENyZWF0ZSBhZG1pbiB1c2VyIGF0IGZpcnN0IHN0YXJ0ICAjIyNcblxuXG5pZiAoTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG5cdFxuXHQvLyBDcmVhdGUgdGhlIHJvbGVcblx0Um9sZXMuY3JlYXRlUm9sZSgnbWFuYWdlcicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblx0Um9sZXMuY3JlYXRlUm9sZSgnYWRtaW4nLCB7dW5sZXNzRXhpc3RzOiB0cnVlfSk7XG5cblx0dmFyIGFkbWluUGFzc3dvcmQgPSBNZXRlb3Iuc2V0dGluZ3MuYWRtaW5QYXNzd29yZDtcblxuXHR2YXIgdXNlcnMgPSBbXG5cdFx0e3VzZXJuYW1lOlwiYWRtaW5cIixyb2xlczpbJ2FkbWluJ119LFxuXHRdO1xuXG5cdF8uZWFjaCh1c2VycywgZnVuY3Rpb24gKHVzZXIpIHtcblx0XHR2YXIgaWQ7XG5cdFx0aWQgPSBBY2NvdW50cy5jcmVhdGVVc2VyKHtcblx0XHRcdHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuXHRcdFx0ZW1haWw6IFwiQWRtaW5cIixcblx0XHRcdHBhc3N3b3JkOiBhZG1pblBhc3N3b3JkLFxuXHRcdFx0cHJvZmlsZTp7bmFtZTpcIkFkbWluXCJ9XG5cdFx0fSk7XG5cblx0XHRpZiAodXNlci5yb2xlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRSb2xlcy5hZGRVc2Vyc1RvUm9sZXMoaWQsIHVzZXIucm9sZXMpO1xuXHRcdH1cblx0fSk7XG59XG5cblxuaWYgKEFwcHMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblxuXHR2YXIgZGVmYXVsdEFwcHMgPSBbXG5cdFx0e25hbWU6XCJMaXZlXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjMsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly9saXZlLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1saXZlLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBMaXZlIHByb21vdGUgcmVhbC10aW1lIGludGVyYWN0aW9uIGJ5IGFsbG93aW5nIGxlYXJuZXJzIHRvIGV4cHJlc3MgdGhlbXNlbHZlcyBhc2tpbmcgcXVlc3Rpb25zLCBwb3N0aW5nIHBob3RvcyBvciBzaGFyaW5nIGZpbGVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlJlc291cmNlc1wiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo3LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vcmVzb3VyY2VzLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1yZXNvdXJjZXMucG5nXCIsIGRlc2NyaXB0aW9uOlwiV2l0aCBCZWVrZWUgUmVzb3VyY2VzLCB5b3UgY2FuIGVhc2lseSBzaGFyZSBmaWxlcyB3aXRoIHlvdXIgbGVhcm5lcnMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiV2hlZWxcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjp0cnVlLCBvcmRlcjo5LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIwLjdcIiwgdXJsOlwiaHR0cDovL3doZWVsLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS13aGVlbC5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgV2hlZWwgaXMgYSBzaW1wbGUgcmFuZG9tIHBpY2tlciB3aGVlbCB0aGF0IGFsbG93IHlvdSB0byBwaWNrIHVwIGEgcmFuZG9tIG5hbWUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiVGltZXJcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6OCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL3RpbWVyLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS10aW1lci5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgVGltZXIgaXMgYSBzaW1wbGUgdGltZXIgdGhhdCBsZXRzIHlvdXIgbGVhcm5lcnMga25vdyBob3cgbXVjaCB0aW1lIHRoZXkgaGF2ZSBsZWZ0LlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIk1vb2RsZVwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjEsIGRvY191c2VyOlwibW9vZGxlX3RlYWNoZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL21vb2RsZS5iZWVrZWUuYm94XCIsIGljb246XCJtb29kbGUucG5nXCIsIGRlc2NyaXB0aW9uOlwiTW9vZGxlIGlzIGEgZnJlZSwgb25saW5lIExlYXJuaW5nIE1hbmFnZW1lbnQgc3lzdGVtIGVuYWJsaW5nIGVkdWNhdG9ycyB0byBjcmVhdGUgdGhlaXIgb3duIHByaXZhdGUgd2Vic2l0ZSBmaWxsZWQgd2l0aCBkeW5hbWljIGNvdXJzZXMgdGhhdCBleHRlbmQgbGVhcm5pbmcsIGFueSB0aW1lLCBhbnl3aGVyZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMy4xMS4yXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJLb2xpYnJpXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MiwgZG9jX3VzZXI6XCJrb2xpYnJpX3VzZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2tvbGlicmkuYmVla2VlLmJveFwiLCBpY29uOlwia29saWJyaS5wbmdcIiwgZGVzY3JpcHRpb246XCJLb2xpYnJpIGlzIGFuIG9wZW4tc291cmNlIGVkdWNhdGlvbmFsIHBsYXRmb3JtIHNwZWNpYWxseSBkZXNpZ25lZCB0byBwcm92aWRlIG9mZmxpbmUgYWNjZXNzIHRvIGEgd2lkZSByYW5nZSBvZiBxdWFsaXR5LCBvcGVubHkgbGljZW5zZWQgZWR1Y2F0aW9uYWwgcmVzb3VyY2VzIGluIGxvdy1yZXNvdXJjZSBjb250ZXh0cyBsaWtlIHJ1cmFsIHNjaG9vbHMsIHJlZnVnZWUgY2FtcHMsIG9ycGhhbmFnZXMsIGFuZCBhbHNvIGluIG5vbi1mb3JtYWwgc2Nob29sIHByb2dyYW1zLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjE0LjdcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHQvLyB7bmFtZTpcIkV0aGVycGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2V0aGVycGFkLmJlZWtlZS5ib3hcIiwgaWNvbjpcImV0aGVycGFkLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkV0aGVycGFkIGFsbG93cyB5b3UgdG8gZWRpdCBkb2N1bWVudHMgY29sbGFib3JhdGl2ZWx5IGluIHJlYWwtdGltZSwgbXVjaCBsaWtlIGEgbGl2ZSBtdWx0aS1wbGF5ZXIgZWRpdG9yIHRoYXQgcnVucyBpbiB5b3VyIGJyb3dzZXIuIFdyaXRlIGFydGljbGVzLCBwcmVzcyByZWxlYXNlcywgdG8tZG8gbGlzdHMsIGV0Yy4gdG9nZXRoZXIgd2l0aCB5b3VyIGZyaWVuZHMsIGZlbGxvdyBzdHVkZW50cyBvciBjb2xsZWFndWVzLCBhbGwgd29ya2luZyBvbiB0aGUgc2FtZSBkb2N1bWVudCBhdCB0aGUgc2FtZSB0aW1lLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjguMTRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlN0b3JtXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3N0b3JtLmJlZWtlZS5ib3hcIiwgaWNvbjpcInN0b3JtLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhbmQgYW5pbWF0ZSBsaXZlIHN1cnZleXMsIGJyYWluc3Rvcm1zIGFuZCBxdWl6emVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjQuNVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiUGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3BhZC5iZWVrZWUuYm94XCIsIGljb246XCJwYWQucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGNvbGxhYm9yYXRpdmUgd2FsbHMgdG8gc2hhcmUgYW5kIG9yZ2FuaXplIGNvbnRlbnQuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJCdXp6ZXJcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOnRydWUsIG9yZGVyOjYsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9idXp6ZXIuYmVla2VlLmJveFwiLCBpY29uOlwiYnV6emVyLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhIHZpcnR1YWwgZ2FtaW5nIHJvb20gYXJvdW5kIGEgY29ubmVjdGVkIGJ1enplci5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4yLjRcIiwgaGlkZGVuOmZhbHNlfSxcblxuXHRdO1xuXG5cdF8uZWFjaChkZWZhdWx0QXBwcywgZnVuY3Rpb24gKGRlZmF1bHRBcHBzKSB7XG5cdFx0QXBwcy5pbnNlcnQoZGVmYXVsdEFwcHMpO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBIVFRQIH0gZnJvbSAnbWV0ZW9yL2h0dHAnXG5pbXBvcnQgeyBXaWZpQ2xpZW50TW9kZVN0YXRlIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvd2lmaUNsaWVudE1vZGVTdGF0ZS5qcyc7XG5cbk1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuXG5cdGlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHR2YXIgZnMgPSBOcG0ucmVxdWlyZSgnZnMnKTtcblx0ZXhlYyA9IE5wbS5yZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuZXhlYztcblx0Y21kID0gTWV0ZW9yLndyYXBBc3luYyhleGVjKTtcblxuXHR2YXIgd2lmaVNldHRpbmdzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy53aWZpU2V0dGluZ3NQYXRoO1xuXHR2YXIgY29uZmlnUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5jb25maWdQYXRoO1xuXHR2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGggfHwgJy9ob21lL2JlZWtlZS9zY3JpcHRzJztcblx0dmFyIHdpZmlDbGllbnRFbmFibGVTY3JpcHROYW1lID0gJ3N3aXRjaF93aWZpX3RvX2NsaWVudC5zaCc7XG5cdHZhciB3aWZpQ2xpZW50RGlzYWJsZVNjcmlwdE5hbWUgPSAnc3dpdGNoX3dpZmlfdG9fYXAuc2gnO1xuXHR2YXIgd2lmaUNsaWVudE1vZGVTdGF0ZVBhdGggPSBNZXRlb3Iuc2V0dGluZ3Mud2lmaUNsaWVudE1vZGVTdGF0ZVBhdGggfHwgYCR7c2NyaXB0c1BhdGh9Ly53aWZpLWNsaWVudC1tb2RlLXN0YXRlYDtcblx0Y29uc3QgcmVhZGxpbmUgPSByZXF1aXJlKCdyZWFkbGluZScpO1xuXG5cdGZ1bmN0aW9uIHNoZWxsRXNjYXBlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIGAnJHtTdHJpbmcodmFsdWUpLnJlcGxhY2UoLycvZywgYCdcXFxcJydgKX0nYDtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlc29sdmVTY3JpcHRQYXRoKHNjcmlwdE5hbWUpIHtcblx0XHRyZXR1cm4gYCR7c2NyaXB0c1BhdGh9LyR7c2NyaXB0TmFtZX1gO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVhZFdpZmlDbGllbnRNb2RlU3RhdGUoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghZnMuZXhpc3RzU3luYyh3aWZpQ2xpZW50TW9kZVN0YXRlUGF0aCkpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN0YXRlID0gZnMucmVhZEZpbGVTeW5jKHdpZmlDbGllbnRNb2RlU3RhdGVQYXRoLCAndXRmLTgnKS50cmltKCk7XG5cblx0XHRcdGlmIChzdGF0ZSA9PT0gJ2VuYWJsZWQnKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3RhdGUgPT09ICdkaXNhYmxlZCcpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgcmVhZGluZyBXaS1GaSBjbGllbnQgbW9kZSBzdGF0ZTonLCBlcnJvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiB3cml0ZVdpZmlDbGllbnRNb2RlU3RhdGUoZW5hYmxlZCkge1xuXHRcdHRyeSB7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKFxuXHRcdFx0XHR3aWZpQ2xpZW50TW9kZVN0YXRlUGF0aCxcblx0XHRcdFx0ZW5hYmxlZCA/ICdlbmFibGVkXFxuJyA6ICdkaXNhYmxlZFxcbicsXG5cdFx0XHRcdCd1dGYtOCdcblx0XHRcdCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciB3cml0aW5nIFdpLUZpIGNsaWVudCBtb2RlIHN0YXRlOicsIGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBwZXJzaXN0V2lmaUNsaWVudE1vZGVTdGF0ZShlbmFibGVkKSB7XG5cdFx0d3JpdGVXaWZpQ2xpZW50TW9kZVN0YXRlKGVuYWJsZWQpO1xuXHRcdFdpZmlDbGllbnRNb2RlU3RhdGUudXBzZXJ0KFxuXHRcdFx0eyBfaWQ6ICd3aWZpLWNsaWVudC1tb2RlLXN0YXRlJyB9LFxuXHRcdFx0e1xuXHRcdFx0XHQkc2V0OiB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogZW5hYmxlZCA9PT0gdHJ1ZSxcblx0XHRcdFx0XHR1cGRhdGVkQXQ6IG5ldyBEYXRlKClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRmdW5jdGlvbiBkZXRlY3RXaWZpQWNjZXNzUG9pbnRNb2RlRnJvbVN5c3RlbSgpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgaGFzV2xhblVzYiA9IGNtZCgnaXAgbGluayBzaG93IHdsYW51c2IgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlJykudG9TdHJpbmcoKS50cmltKCk7XG5cblx0XHRcdGlmIChoYXNXbGFuVXNiICE9PSAndHJ1ZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBoYXNBcEFkZHJlc3MgPSBjbWQoXCJpcCAtNCBhZGRyIHNob3cgd2xhbnVzYiB8IGdyZXAgLXEgJzEwXFxcXC4xXFxcXC4wXFxcXC4xLzI0JyAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiKS50b1N0cmluZygpLnRyaW0oKTtcblxuXHRcdFx0cmV0dXJuIGhhc0FwQWRkcmVzcyA9PT0gJ3RydWUnO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgZGV0ZWN0aW5nIFdpLUZpIGFjY2VzcyBwb2ludCBtb2RlIGZyb20gc3lzdGVtOicsIGVycm9yKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBkZXRlY3RXaWZpQ2xpZW50TW9kZUZyb21TeXN0ZW0oKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChkZXRlY3RXaWZpQWNjZXNzUG9pbnRNb2RlRnJvbVN5c3RlbSgpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaGFzV2xhblVzYiA9IGNtZCgnaXAgbGluayBzaG93IHdsYW51c2IgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlJykudG9TdHJpbmcoKS50cmltKCk7XG5cblx0XHRcdGlmIChoYXNXbGFuVXNiICE9PSAndHJ1ZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBubVN0YXRlID0gY21kKFwibm1jbGkgLXQgLWYgREVWSUNFLFNUQVRFIGRldmljZSBzdGF0dXMgMj4vZGV2L251bGwgfCBhd2sgLUY6ICckMT09XFxcIndsYW51c2JcXFwiIHtwcmludCAkMjsgZXhpdH0nIHx8IHRydWVcIikudG9TdHJpbmcoKS50cmltKCk7XG5cblx0XHRcdHJldHVybiAvXihjb25uZWN0ZWR8ZGlzY29ubmVjdGVkfGNvbm5lY3Rpbmd8cHJlcGFyaW5nKS8udGVzdChubVN0YXRlKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGRldGVjdGluZyBXaS1GaSBjbGllbnQgbW9kZSBmcm9tIHN5c3RlbTonLCBlcnJvcik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpIHtcblx0XHRpZiAoZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0oKSkge1xuXHRcdFx0cGVyc2lzdFdpZmlDbGllbnRNb2RlU3RhdGUoZmFsc2UpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRldGVjdGVkU3RhdGUgPSBkZXRlY3RXaWZpQ2xpZW50TW9kZUZyb21TeXN0ZW0oKTtcblx0XHRwZXJzaXN0V2lmaUNsaWVudE1vZGVTdGF0ZShkZXRlY3RlZFN0YXRlKTtcblx0XHRyZXR1cm4gZGV0ZWN0ZWRTdGF0ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpIHtcblx0XHRpZiAoIWdldFdpZmlDbGllbnRNb2RlU3RhdGUoKSkge1xuXHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignd2lmaS1jbGllbnQtbW9kZS1kaXNhYmxlZCcsICdFbmFibGUgV2ktRmkgY2xpZW50IG1vZGUgYmVmb3JlIHNjYW5uaW5nIG9yIGNvbm5lY3RpbmcuJyk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gcnVuV2lmaU1vZGVTY3JpcHQoc2NyaXB0TmFtZSkge1xuXHRcdGNvbnN0IHNjcmlwdFBhdGggPSByZXNvbHZlU2NyaXB0UGF0aChzY3JpcHROYW1lKTtcblxuXHRcdGlmICghZnMuZXhpc3RzU3luYyhzY3JpcHRQYXRoKSkge1xuXHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignd2lmaS1jbGllbnQtbW9kZS1zY3JpcHQtbWlzc2luZycsIGBNaXNzaW5nIFdpLUZpIG1vZGUgc2NyaXB0OiAke3NjcmlwdFBhdGh9YCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNtZChgdGltZW91dCA0NXMgYmFzaCAke3NoZWxsRXNjYXBlKHNjcmlwdFBhdGgpfWApO1xuXHR9XG5cblx0aWYgKGRldGVjdFdpZmlBY2Nlc3NQb2ludE1vZGVGcm9tU3lzdGVtKCkpIHtcblx0XHRwZXJzaXN0V2lmaUNsaWVudE1vZGVTdGF0ZShmYWxzZSk7XG5cdH0gZWxzZSB7XG5cdFx0cGVyc2lzdFdpZmlDbGllbnRNb2RlU3RhdGUoZGV0ZWN0V2lmaUNsaWVudE1vZGVGcm9tU3lzdGVtKCkpO1xuXHR9XG5cblxuXHRNZXRlb3IubWV0aG9kcyh7XG5cblx0XHQnYWRtaW5TZXROZXdQYXNzd29yZCc6IGZ1bmN0aW9uKGFkbWluSWQsIHVzZXJJZCwgbmV3UGFzc3dvcmQpIHsgLy8gQWRtaW4gY2FuIGZvcmNpYmx5IGNoYW5nZSB0aGUgcGFzc3dvcmQgZm9yIGEgdXNlclxuXHRcdFx0aWYgKFJvbGVzLnVzZXJJc0luUm9sZShhZG1pbklkLCAnYWRtaW4nKSkge1xuXHRcdFx0XHRBY2NvdW50cy5zZXRQYXNzd29yZCh1c2VySWQsIG5ld1Bhc3N3b3JkKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdjcmVhdGVBY2NvdW50JzogZnVuY3Rpb24oZW1haWwsIHBhc3N3b3JkLCBwcm9maWxlKSB7XG5cdFx0XHRyZXR1cm4gQWNjb3VudHMuY3JlYXRlVXNlcih7ZW1haWw6ZW1haWwscGFzc3dvcmQ6cGFzc3dvcmQscHJvZmlsZTpwcm9maWxlfSk7IC8vIENhbGxiYWNrIGlzIG5vdCBzdXBwb3J0ZWQgb24gc2VydmVyLXNpZGVcblx0XHR9LFxuXHRcdCdlZGl0QWNjb3VudCc6IGZ1bmN0aW9uKHVzZXJJZCwgZW1haWwsIHBhc3N3b3JkLCBwcm9maWxlKSB7XG5cdFx0XHRNZXRlb3IudXNlcnMudXBkYXRlKHtfaWQ6IHVzZXJJZH0sIHtcblx0ICBcdFx0XHQkc2V0OiB7XG5cdCAgICBcdFx0XHQnZW1haWxzLjAuYWRkcmVzcyc6IGVtYWlsLFxuXHQgICAgXHRcdFx0cHJvZmlsZTogcHJvZmlsZVxuXHQgIFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0aWYgKHBhc3N3b3JkKSB7XG5cdFx0XHRcdEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgcGFzc3dvcmQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2NoYW5nZUVtYWlsJzogZnVuY3Rpb24oZW1haWwpIHtcblx0XHRcdHZhciBlbWFpbCA9IGVtYWlsO1xuXHRcdFx0Y2hlY2soZW1haWwsIFN0cmluZyk7XG5cdFx0XHR2YXIgdXNlciA9IE1ldGVvci51c2VyKCk7XG5cdFx0XHR2YXIgb2xkZW1haWwgPSB1c2VyLmVtYWlscztcblx0XHRcdHZhciBlbWFpbFJlZyA9IC9eKFtcXHctXFwuXStAKFtcXHctXStcXC4pK1tcXHctXXsyLDR9KT8kLztcblx0XHRcdGlmIChlbWFpbFJlZy50ZXN0KGVtYWlsKSkge1xuXHRcdFx0aWYob2xkZW1haWwgIT0gbnVsbCl7XG5cdFx0XHQgIEFjY291bnRzLnJlbW92ZUVtYWlsKHVzZXIuX2lkLCB1c2VyLmVtYWlsc1swXS5hZGRyZXNzKVxuXHRcdFx0fVxuXHRcdFx0QWNjb3VudHMuYWRkRW1haWwodXNlci5faWQsIGVtYWlsKTtcblx0XHRcdHJldHVybiBlbWFpbDtcblx0XHQgIH0gZWxzZVxuXHRcdCAgcmV0dXJuIG51bGxcblx0XHQgfSxcblx0XHQnZGVsZXRlVXNlcic6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0TWV0ZW9yLnVzZXJzLnJlbW92ZSh1c2VySWQsIGZ1bmN0aW9uIChlcnJvciwgcmVzdWx0KSB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiBkZWxldGluZyB1c2VyIDogXCIrZXJyb3IubWVzc2FnZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2FkZE1hbmFnZXJSb2xlJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklkLCAnbWFuYWdlcicpO1xuXHRcdH0sXG5cdFx0J3JlbW92ZU1hbmFnZXJSb2xlJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRSb2xlcy5yZW1vdmVVc2Vyc0Zyb21Sb2xlcyh1c2VySWQsICdtYW5hZ2VyJyk7XG5cdFx0fSxcblx0XHQnYWRkQWRtaW5Sb2xlJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklkLCAnYWRtaW4nKTtcblx0XHR9LFxuXHRcdCdyZW1vdmVBZG1pblJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLnJlbW92ZVVzZXJzRnJvbVJvbGVzKHVzZXJJZCwgJ2FkbWluJyk7XG5cdFx0fSxcblxuXHRcdC8vICdnZXRVc2VkU3BhY2UnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciByZXM7XG5cdFx0Ly8gXHRyZXMgPSBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKSArIFwiLyBcIiArIGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpICsgXCIgKFwiK2NtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpK1widXNlZClcIjtcblx0XHQvLyBcdHJldHVybiByZXM7XG5cdFx0Ly8gfSxcblx0XHQncnVuQ29tbWFuZCc6IGZ1bmN0aW9uKHBhc3N3b3JkLCBjb21tYW5kKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwiZWNobyBcIitwYXNzd29yZCtcIiB8IHN1ZG8gLVMgXCIrY29tbWFuZCk7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFVzZWRTcGFjZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcyA9IHt9O1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKSArIFwiLyBcIiArIGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpICsgXCIgKFwiK2NtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpK1widXNlZClcIjtcblx0XHRcdHJlcy5zdG9yYWdlVXNhZ2UgPSBjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKVxuXHRcdFx0cmVzLnN0b3JhZ2VVc2FnZSA9IHJlcy5zdG9yYWdlVXNhZ2UvMTAwMDAwMDtcblx0XHRcdHJlcy5zdG9yYWdlVXNhZ2UgPSByZXMuc3RvcmFnZVVzYWdlLnRvRml4ZWQoMik7XG5cdFx0XHRyZXMuc3RvcmFnZVRvdGFsID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIilcblx0XHRcdHJlcy5zdG9yYWdlVG90YWwgPSByZXMuc3RvcmFnZVRvdGFsLzEwMDAwMDA7XG5cdFx0XHRyZXMuc3RvcmFnZVRvdGFsID0gcmVzLnN0b3JhZ2VUb3RhbC50b0ZpeGVkKDIpO1xuXHRcdFx0cmVzLnBlcmNlbnRhZ2UgPSBjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0U1NJRCc6IGZ1bmN0aW9uKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdzc2lkPSguKiknKSk7XG4gIFx0XHRcdHZhciBTU0lEID0gbWF0Y2hbMV07XG4gIFx0XHRcdFNTSUQgPSBkZWNvZGVVUklDb21wb25lbnQoU1NJRC5yZXBsYWNlKC8uLi9nLCAnJSQmJykpXG4gIFx0XHRcdHJldHVybiBTU0lEO1xuXHRcdH0sXG5cdFx0J3NldFNTSUQnOiBmdW5jdGlvbihuZXdTU0lEKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0Y29uc3QgZW5jb2RlZE5ld1NTSUQgPSBuZXcgQnVmZmVyKG5ld1NTSUQpLnRvU3RyaW5nKCdoZXgnKTsgLy8gQ29udmVydCBpbnRvIEhleFxuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3NzaWQ9KC4qKScpKVsxXSwgZW5jb2RlZE5ld1NTSUQpO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRXaWZpUGFzc3dvcmQnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgncGFzc3dvcmQ9KC4qKScpKTtcbiAgXHRcdFx0dmFyIHBhc3N3b3JkID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBwYXNzd29yZDtcblx0XHR9LFxuXHRcdCdzZXRXaWZpUGFzc3dvcmQnOiBmdW5jdGlvbihuZXdQYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgncGFzc3dvcmQ9KC4qKScpKVsxXSwgbmV3UGFzc3dvcmQpO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRXaWZpQ2hhbm5lbCc6IGZ1bmN0aW9uKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdjaGFubmVsPSguKiknKSk7XG4gIFx0XHRcdHZhciBjaGFubmVsID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBjaGFubmVsO1xuXHRcdH0sXG5cdFx0J3NldFdpZmlDaGFubmVsJzogZnVuY3Rpb24obmV3Q2hhbm5lbCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJykpWzFdLCBuZXdDaGFubmVsKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQvLyAnZ2V0V2lmaUJhbmQnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuXHRcdC8vIFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdiYW5kPSguKiknKSk7XG5cblx0XHQvLyBcdGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuXHRcdC8vIFx0ICByZXR1cm4gbWF0Y2hbMV07XG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0ICAvLyBSZXR1cm4gZGVmYXVsdCB2YWx1ZSBpZiB0aGUgYmFuZCBzZXR0aW5nIGRvZXMgbm90IGV4aXN0XG5cdFx0Ly8gXHQgIHJldHVybiAnMi40R0h6Jztcblx0XHQvLyBcdH1cblx0XHQvLyAgIH0sXG5cdFx0Ly8gJ3NldFdpZmlCYW5kJzogZnVuY3Rpb24obmV3QmFuZCkge1xuXHRcdC8vIFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG5cdFx0Ly8gXHR2YXIgYmFuZFJlZ2V4ID0gbmV3IFJlZ0V4cCgnYmFuZD0oLiopJyk7XG5cdFx0Ly8gXHR2YXIgY2hhbm5lbFJlZ2V4ID0gbmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJyk7XG5cdFx0Ly8gXHR2YXIgbWF0Y2hCYW5kID0gZGF0YS5tYXRjaChiYW5kUmVnZXgpO1xuXHRcdC8vIFx0dmFyIG1hdGNoQ2hhbm5lbCA9IGRhdGEubWF0Y2goY2hhbm5lbFJlZ2V4KTtcblxuXHRcdC8vIFx0dmFyIG5ld0RhdGEgPSBkYXRhO1xuXG5cdFx0Ly8gXHRpZiAobWF0Y2hCYW5kKSB7XG5cdFx0Ly8gXHRcdC8vIFJlcGxhY2UgdGhlIGV4aXN0aW5nIGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0XHRuZXdEYXRhID0gbmV3RGF0YS5yZXBsYWNlKGJhbmRSZWdleCwgYGJhbmQ9JHtuZXdCYW5kfWApO1xuXHRcdC8vIFx0fSBlbHNlIHtcblx0XHQvLyBcdFx0Ly8gQXBwZW5kIHRoZSBuZXcgYmFuZCBzZXR0aW5nXG5cdFx0Ly8gXHRcdG5ld0RhdGEgPSBgJHtuZXdEYXRhLnRyaW0oKX1cXG5iYW5kPSR7bmV3QmFuZH1gO1xuXHRcdC8vIFx0fVxuXG5cdFx0Ly8gXHRpZiAobWF0Y2hDaGFubmVsICYmIG1hdGNoQ2hhbm5lbFsxXSkge1xuXHRcdC8vIFx0XHQvLyBDb252ZXJ0IHRoZSBjaGFubmVsIHZhbHVlIHRvIGEgbnVtYmVyXG5cdFx0Ly8gXHRcdHZhciBjdXJyZW50Q2hhbm5lbCA9IHBhcnNlSW50KG1hdGNoQ2hhbm5lbFsxXSwgMTApO1xuXG5cdFx0Ly8gXHRcdC8vIFNldCBjaGFubmVsIHRvIGEgZGVmYXVsdCAyLjRHSHogY2hhbm5lbCBpZiBjdXJyZW50IGNoYW5uZWwgaXMgZm9yIDVHSHpcblx0XHQvLyBcdFx0aWYgKG5ld0JhbmQgPT0gXCIyLjRHSHpcIiAmJiBjdXJyZW50Q2hhbm5lbCA+IDE0KSB7XG5cdFx0Ly8gXHRcdFx0bmV3RGF0YSA9IG5ld0RhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTExYCk7XG5cdFx0Ly8gXHRcdH0gZWxzZSBpZiAobmV3QmFuZCA9PSBcIjVHSHpcIiAmJiBjdXJyZW50Q2hhbm5lbCA8PSAxNCkge1xuXHRcdC8vIFx0XHRcdG5ld0RhdGEgPSBuZXdEYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD00NGApO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9XG5cblx0XHQvLyBcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0Ly8gfSxcblx0XHQvLyAgICdzZXRXaWZpQmFuZCc6IGZ1bmN0aW9uKG5ld0JhbmQpIHtcblx0XHQvLyBcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuXHRcdC8vIFx0dmFyIGJhbmRSZWdleCA9IG5ldyBSZWdFeHAoJ2JhbmQ9KC4qKScpO1xuXHRcdC8vIFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChiYW5kUmVnZXgpO1xuXG5cdFx0Ly8gXHRpZiAobWF0Y2gpIHtcblx0XHQvLyBcdCAgLy8gUmVwbGFjZSB0aGUgZXhpc3RpbmcgYmFuZCBzZXR0aW5nXG5cdFx0Ly8gXHQgIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGJhbmRSZWdleCwgYGJhbmQ9JHtuZXdCYW5kfWApO1xuXHRcdC8vIFx0fSBlbHNlIHtcblx0XHQvLyBcdCAgLy8gQXBwZW5kIHRoZSBuZXcgYmFuZCBzZXR0aW5nXG5cdFx0Ly8gXHQgIHZhciBuZXdEYXRhID0gYCR7ZGF0YS50cmltKCl9XFxuYmFuZD0ke25ld0JhbmR9YDtcblx0XHQvLyBcdH1cblx0XHQvLyBcdHZhciBjaGFubmVsUmVnZXggPSBuZXcgUmVnRXhwKCdjaGFubmVsPSguKiknKTtcblx0XHQvLyBcdHZhciBtYXRjaDIgPSBkYXRhLm1hdGNoKGNoYW5uZWxSZWdleCk7XG5cdFx0Ly8gXHRpZiAobWF0Y2gyICYmIG1hdGNoMlsxXSkge1xuXHRcdC8vIFx0XHQvLyBTZXQgY2hhbm5lbCB0byBhIGRlZmF1bHQgMi40R0h6IGNoYW5uZWwgaWYgY3VycmVudCBjaGFubmVsIGlzIGZvciA1R0h6XG5cdFx0Ly8gXHRcdGlmIChuZXdCYW5kID09IFwiMi40R0h6XCIgJiYgbWF0Y2gyWzFdID4gMTQpIHtcblx0XHQvLyBcdFx0XHQvLyBBcHBlbmQgdGhlIG5ldyBiYW5kIHNldHRpbmdcblx0XHQvLyBcdFx0XHR2YXIgbmV3RGF0YTIgPSBkYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD0xMWApO1xuXHRcdC8vIFx0XHR9IGVsc2UgaWYgKG5ld0JhbmQgPT0gXCI1R0h6XCIgJiYgbWF0Y2gyWzFdIDw9IDE0KSB7XG5cdFx0Ly8gXHRcdFx0dmFyIG5ld0RhdGEyID0gZGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9NDRgKTtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fVxuXHRcdC8vIFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHQvLyAgIH0sXG5cdFx0J2dldFNlcmlhbCc6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnU0VSSUFMPSguKiknKSk7XG4gIFx0XHRcdHZhciBzZXJpYWwgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIHNlcmlhbDtcblx0XHR9LFxuXHRcdCdnZXRPcGVyYXRvck5hbWUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvcGVyYXRvck5hbWU7XG5cdFx0XHRvcGVyYXRvck5hbWUgPSBjbWQoXCJzdWRvIHFtaWNsaSAtcCAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1vcGVyYXRvci1uYW1lIHwgZ3JlcCAtbTIgJ05hbWUgICAgICAgICAgICAgJyB8IGF3ayAne3ByaW50ICQzfSdcIik7XG5cdFx0XHRyZXR1cm4gb3BlcmF0b3JOYW1lO1xuXHRcdH0sXG5cdFx0Ly8gJ2dldFNpZ25hbFN0cmVuZ3RoJzogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0dmFyIHNpZ25hbFN0cmVuZ3RoO1xuXHRcdC8vIFx0c2lnbmFsU3RyZW5ndGggPSBjbWQoXCJzdWRvIHFtaWNsaSAtcCAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrICd7cHJpbnQgJDMsICQyfSdcIik7XG5cdFx0Ly8gXHRyZXR1cm4gc2lnbmFsU3RyZW5ndGg7XG5cdFx0Ly8gfSxcblx0XHQnZ2V0U2lnbmFsU3RyZW5ndGgnOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgc2lnbmFsU3RyZW5ndGg7XG5cdFx0XHQvLyBUaGlzIGV4dHJhY3RzIGp1c3QgdGhlIG51bWVyaWMgcGFydCBvZiB0aGUgc2lnbmFsIHN0cmVuZ3RoLlxuXHRcdFx0c2lnbmFsU3RyZW5ndGggPSBjbWQoXCJzdWRvIHFtaWNsaSAtcCAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwICdOZXR3b3JrJyB8IGF3ayAne3ByaW50ICQzfScgfCBncmVwIC1vRSAnWy0wLTldKydcIik7XG5cblx0XHRcdC8vIENvbnZlcnQgc2lnbmFsIHN0cmVuZ3RoIHRvIGEgcXVhbGl0YXRpdmUgdmFsdWVcblx0XHRcdHZhciBzdHJlbmd0aFZhbHVlID0gcGFyc2VJbnQoc2lnbmFsU3RyZW5ndGgpO1xuXHRcdFx0dmFyIHF1YWxpdHkgPSAnVW5rbm93bic7XG5cdFx0XHRpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtNzApIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdFeGNlbGxlbnQnO1xuXHRcdFx0fSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlID49IC04NSkge1xuXHRcdFx0XHRxdWFsaXR5ID0gJ0dvb2QnO1xuXHRcdFx0fSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlID49IC0xMDApIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdGYWlyJztcblx0XHRcdH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA8IC0xMDApIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdQb29yJztcblx0XHRcdH1cblx0XHRcdHJldHVybiBxdWFsaXR5O1xuXHRcdH0sXG5cdFx0Ly8gJ2dldElzT25saW5lJzogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0dmFyIGlzT25saW5lO1xuXHRcdC8vIFx0aXNPbmxpbmUgPSBjbWQoXCJzdWRvIHFtaWNsaSAtcCAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrICd7cHJpbnQgJDMsICQyfSdcIik7XG5cdFx0Ly8gXHRyZXR1cm4gaXNPbmxpbmU7XG5cdFx0Ly8gfSxcblx0XHQvLyAnZ2V0QmFuZCc6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdHZhciBiYW5kO1xuLy9cdFx0XHRiYW5kID0gY21kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayBcXFwie3ByaW50ICQyfVxcXCIgfCBjdXQgLWRcXFxcJyAtZjJcIik7XG5cdFx0Ly8gXHRyZXR1cm4gYmFuZDtcblx0XHQvLyB9LFxuXHRcdCdnZXRBUE4nOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTj0oLiopJykpO1xuICBcdFx0XHR2YXIgQVBOID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBBUE47XG5cdFx0fSxcblx0XHQnZ2V0QVBOVXNlcic6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1VTRVJOQU1FPSguKiknKSk7XG4gIFx0XHRcdHZhciBBUE5Vc2VyID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBBUE5Vc2VyO1xuXHRcdH0sXG5cdFx0J2dldEFQTlBhc3N3b3JkJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE5fUEFTU1dPUkQ9KC4qKScpKTtcbiAgXHRcdFx0dmFyIEFQTlBhc3N3b3JkID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBBUE5QYXNzd29yZDtcblx0XHR9LFxuXHRcdCdnZXRTaW1DYXJkU3RhdHVzJzogZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHNpbVN0YXR1c1Jlc3VsdCA9ICdVbmtub3duJzsgLy8gRGVmYXVsdCBzdGF0dXNcblxuXHRcdFx0Ly8gRnVuY3Rpb24gdG8gZXhlY3V0ZSBjb21tYW5kIGFuZCBoYW5kbGUgZXJyb3JzXG5cdFx0XHRmdW5jdGlvbiBleGVjdXRlQ29tbWFuZChjb21tYW5kKSB7XG5cdFx0XHRcdGxldCByZXN1bHQ7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gY21kKGNvbW1hbmQpOyAvLyBFeGVjdXRlIHRoZSBjb21tYW5kXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHJlc3VsdCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgcmVzdWx0IGlzIGFuIGVycm9yIG9iamVjdFxuXHRcdFx0XHRcdFx0cmV0dXJuICdFcnJvcic7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdC8vIEhhbmRsZSBleGNlcHRpb25zIGlmIGNvbW1hbmQgZXhlY3V0aW9uIGZhaWxzXG5cdFx0XHRcdFx0cmV0dXJuICdFcnJvcic7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDsgLy8gUmV0dXJuIHRoZSByZXN1bHQgaWYgbm8gZXJyb3JzXG5cdFx0XHR9XG5cblx0XHRcdC8vIEV4ZWN1dGUgU0lNIGNhcmQgc3RhdHVzIGNoZWNrIGNvbW1hbmRcblx0XHRcdGxldCBzaW1TdGF0dXMgPSBleGVjdXRlQ29tbWFuZChcInN1ZG8gcW1pY2xpIC1wIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS11aW0tZ2V0LWNhcmQtc3RhdHVzIHwgZ3JlcCAnQ2FyZCBzdGF0ZTonXCIpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJTSU0gY2FyZCBzdGF0dXM6XCIsIHNpbVN0YXR1cyk7IC8vIExvZyB0aGUgcmF3IG91dHB1dFxuXHRcdFx0Ly8gUHJvY2VzcyB0aGUgb3V0cHV0IGFuZCBkZXRlcm1pbmUgU0lNIGNhcmQgc3RhdHVzXG5cdFx0XHRpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKCduby1hdHItcmVjZWl2ZWQnKSB8fCBzaW1TdGF0dXMuaW5jbHVkZXMoJ25vdC1pbnNlcnRlZCcpKSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9ICdObyBTSU0gY2FyZCc7XG5cdFx0XHR9IGVsc2UgaWYgKHNpbVN0YXR1cy5pbmNsdWRlcygnZXJyb3InKSkge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSBzaW1TdGF0dXM7IC8vIFVzZSB0aGUgZXJyb3IgbWVzc2FnZSBvciBubyBTSU0gZGV0ZWN0ZWQgbWVzc2FnZVxuXHRcdFx0fSBlbHNlIGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoJ3ByZXNlbnQnKSkge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSAnT0snO1xuXHRcdFx0fSBlbHNlIGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoJ2xvY2tlZCcpIHx8IHNpbVN0YXR1cy5pbmNsdWRlcygncGluLXJlcXVpcmVkJykpIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gJ1NJTSBjYXJkIGxvY2tlZCwgUElOIHJlcXVpcmVkJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9ICdVbmtub3duJzsgLy8gRm9yIG90aGVyIHN0YXR1c2VzXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc2ltU3RhdHVzUmVzdWx0O1xuXHRcdH0sXG5cdFx0J2dldFNpbVBpbic6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnU0lNX1BJTj0oLiopJykpO1xuICBcdFx0XHR2YXIgU2ltUGluID0gbWF0Y2hbMV07XG5cdFx0XHRyZXR1cm4gU2ltUGluO1xuXHRcdH0sXG5cdFx0J3NldFNpbVBpbic6IGZ1bmN0aW9uKFBJTikge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnU0lNX1BJTj0uKicpKSwgJ1NJTV9QSU49JytQSU4pO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdzZXRBUE4nOiBmdW5jdGlvbihBUE4sIHVzZXIsIHBhc3N3b3JkKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49LionKSksICdBUE49JytBUE4pO1xuICBcdFx0XHQvLyB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTj0oLiopJykpWzFdLCBBUE4pO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdzZXRBUE5Vc2VyJzogZnVuY3Rpb24oQVBOVXNlcikge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1VTRVJOQU1FPS4qJykpLCAnQVBOX1VTRVJOQU1FPScrQVBOVXNlcik7XG4gIFx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOUGFzc3dvcmQnOiBmdW5jdGlvbihBUE5QYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1BBU1NXT1JEPS4qJykpLCAnQVBOX1BBU1NXT1JEPScrQVBOUGFzc3dvcmQpO1xuICBcdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFJlbW90ZVN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN5c3RlbWN0bCBpcy1hY3RpdmUgcmVtb3RlLWlvdC5zZXJ2aWNlID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIDEgfHwgZWNobyAwXCIpO1xuXHRcdFx0aWYgKHJlc1swXSA9PSBcIjFcIikgeyAvLyBbMF0gaXMgYSBoYWNrIGJlY2F1c2UgdGhlIHJlc3VsdCByZXMgaGFzIG9uZSBleHRyYSBjaGFyYWN0ZXJcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdCdnZXRBdXRvU3luY1N0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN5c3RlbWN0bCBpcy1hY3RpdmUgYXV0b3N5bmMuc2VydmljZSA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyAxIHx8IGVjaG8gMFwiKTtcblx0XHRcdGlmIChyZXNbMF0gPT0gXCIxXCIpIHsgLy8gWzBdIGlzIGEgaGFjayBiZWNhdXNlIHRoZSByZXN1bHQgcmVzIGhhcyBvbmUgZXh0cmEgY2hhcmFjdGVyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQnZ2V0U2hhcmVJbnRlcm5ldFZpYUV0aGVybmV0U3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaXNTaGFyaW5nO1xuXHRcdFx0aXNTaGFyaW5nID0gY21kKFwiKHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1MIFBPU1RST1VUSU5HIC12IC1uIHwgZ3JlcCAtcSAnTUFTUVVFUkFERSAgYWxsICAtLSAgKiAgICAgIGV0aDAnICYmIGlwIGxpbmsgc2hvdyBldGgwIHwgZ3JlcCAtcSAnc3RhdGUgVVAnKSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiKTtcblx0XHRcdHJldHVybiBpc1NoYXJpbmc7XG5cdFx0fSxcblx0XHQnZ2V0U2hhcmVJbnRlcm5ldFZpYU1vYmlsZVN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlzU2hhcmluZztcblx0XHRcdGlzU2hhcmluZyA9IGNtZChcIihzdWRvIGlwdGFibGVzIC10IG5hdCAtTCBQT1NUUk9VVElORyAtdiAtbiB8IGdyZXAgLXEgJ01BU1FVRVJBREUgIGFsbCAgLS0gICogICAgICB3d2FuMCcgJiYgaXAgbGluayBzaG93IHd3YW4wIHwgZ3JlcCAtcSAnc3RhdGUgVVAnKSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiKTtcblx0XHRcdHJldHVybiBpc1NoYXJpbmc7XG5cdFx0fSxcblx0XHQvLyAnYWN0aXZhdGVJbnRlcm5ldFNoYXJpbmcnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciByZXM7XG5cdFx0Ly8gXHRyZXMgPSBjbWQoXCJzdWRvIHdpZmktYXAuY29uZmlnIHNldCBzaGFyZS5kaXNhYmxlZD1mYWxzZVwiKTtcblx0XHQvLyBcdHJldHVybiByZXM7XG5cdFx0Ly8gfSxcblx0XHQvLyAnZGlzYWN0aXZhdGVJbnRlcm5ldFNoYXJpbmcnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciByZXM7XG5cdFx0Ly8gXHRyZXMgPSBjbWQoXCJzdWRvIHdpZmktYXAuY29uZmlnIHNldCBzaGFyZS5kaXNhYmxlZD10cnVlXCIpO1xuXHRcdC8vIFx0cmV0dXJuIHJlcztcblx0XHQvLyB9LFxuXHRcdCdhY3RpdmF0ZVJlbW90ZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0YXJ0IHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdkaXNhY3RpdmF0ZVJlbW90ZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGRpc2FibGUgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdhY3RpdmF0ZUF1dG9TeW5jJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RhcnQgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZGlzYWN0aXZhdGVBdXRvU3luYyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBkaXNhYmxlIGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldEJhdHRlcnlTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHR2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGg7XG5cdFx0XHRyZXMgPSBjbWQoXCJweXRob24zIFwiK3NjcmlwdHNQYXRoK1wiL3BpanVpY2Vfc3RhdHVzLnB5XCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdC8vICdnZXRJc09ubGluZSc6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0dmFyIHJlcztcblx0XHQvLyBcdHZhciBzY3JpcHRzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5zY3JpcHRzUGF0aDtcblx0XHQvLyBcdC8vIE1ha2Ugc3VyZSB5b3VyIHNjcmlwdCBpcyBleGVjdXRhYmxlLCBlLmcuLCBjaG1vZCAreCBjaGVja19pbnRlcm5ldC5zaFxuXHRcdC8vIFx0cmVzID0gY21kKFwiYmFzaCBcIiArIHNjcmlwdHNQYXRoICsgXCIvY2hlY2tfaW50ZXJuZXQuc2hcIik7IC8vIFJlcGxhY2UgJ2Jhc2gnIHdpdGggJ3NoJyBpZiBuZWVkZWRcblx0XHQvLyBcdC8vIFRoZSBzY3JpcHQgcmV0dXJucyBcInRydWVcIiBvciBcImZhbHNlXCIgYXMgYSBzdHJpbmcsIHNvIHdlIGNvbXBhcmUgdGhlIHJlc3VsdCBkaXJlY3RseVxuXHRcdC8vIFx0cmV0dXJuIHJlcy50cmltKCkgPT09IFwidHJ1ZVwiOyAvLyBUaGlzIGNvbnZlcnRzIHRoZSBzdHJpbmcgdG8gYSBib29sZWFuXG5cdFx0Ly8gfSxcblx0XHQnZ2V0SXNPbmxpbmUnOiBmdW5jdGlvbigpIHtcblx0XHRcdGxldCByZXM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXMgPSBjbWQoXCJwaW5nIC1jIDEgOC44LjguOFwiKTtcblx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHBpbmcgY29tbWFuZCB3YXMgc3VjY2Vzc2Z1bCBiYXNlZCBvbiB0aGUgb3V0cHV0XG5cdFx0XHRcdGxldCBpc09ubGluZSA9IHJlcy5pbmNsdWRlcyhcIjEgcGFja2V0cyByZWNlaXZlZFwiKSB8fCByZXMuaW5jbHVkZXMoXCIxIHJlY2VpdmVkXCIpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIk9ubGluZSBzdGF0dXM6XCIsIGlzT25saW5lKTsgLy8gQ29ycmVjdGx5IGxvZ2dpbmcgdGhlIGJvb2xlYW4gcmVzdWx0XG5cdFx0XHRcdHJldHVybiBpc09ubGluZTsgLy8gRGlyZWN0bHkgcmV0dXJuIHRoZSBib29sZWFuIHZhbHVlXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHQvLyBJZiBhbiBlcnJvciBvY2N1cnMgKHdoaWNoIGNvdWxkIGluY2x1ZGUgYmVpbmcgdW5hYmxlIHRvIHJ1biB0aGUgcGluZyBjb21tYW5kKSwgYXNzdW1lIG9mZmxpbmVcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciBvciBvZmZsaW5lOlwiLCBlcnJvcik7XG5cdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gQXNzdW1lIG9mZmxpbmUgaWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2dldEV0aDBJUCc6IGZ1bmN0aW9uKCkgeyAvLyBHZXQgSVAgb2YgYm94XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcInJlc3VsdCA6IFwiK1wiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiaXAgOiBcIitcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIFwiK2ludGVyZmFjZStcIiAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFd3YW4wSVAnOiBmdW5jdGlvbigpIHsgLy8gR2V0IElQIG9mIGJveFxuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vY29uc29sZS5sb2coXCJyZXN1bHQgOiBcIitcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmVzID0gY21kKFwiaXAgYWRkciBzaG93IHd3YW4wIHwgZ3JlcCBcXFwiaW5ldFxcXFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblxuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImlwIDogXCIrXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBcIitpbnRlcmZhY2UrXCIgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXG5cdFx0J2dldEJlZWtlZU9zVmVyc2lvbic6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG5cdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0JFRUtFRV9PU19WRVJTSU9OPSguKiknKSk7XG5cdFx0XHR2YXIgc2VyaWFsID0gbWF0Y2hbMV07XG5cdFx0XHRyZXR1cm4gc2VyaWFsO1xuXHRcdH0sXG5cdFx0J2dldEJlZWtlZUhvbWVWZXJzaW9uJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRqc29uID0gSlNPTi5wYXJzZShBc3NldHMuZ2V0VGV4dChcInZlcnNpb24uanNvblwiKSk7XG5cdFx0XHRyZXR1cm4ganNvbi52ZXJzaW9uO1xuXHRcdH0sXG5cdFx0J3Jlc3RhcnRNb2JpbGVDb25uZWN0JzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgcmVzdGFydCBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlczsnJ1xuXHRcdH0sXG5cdFx0J2dldE1vYmlsZUNvbm5lY3RFbmFibGVkJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgcmVzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgaXMtYWN0aXZlIG1vYmlsZV9jb25uZWN0LnNlcnZpY2UgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnRvU3RyaW5nKCkudHJpbSgpID09PSBcInRydWVcIjtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdlbmFibGVNb2JpbGVDb25uZWN0JzogZnVuY3Rpb24oKSB7XG5cdFx0XHRjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdGFydCBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlXCIpO1xuXHRcdFx0Y21kKFwic3VkbyBzeXN0ZW1jdGwgZW5hYmxlIG1vYmlsZV9jb25uZWN0LnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXHRcdCdkaXNhYmxlTW9iaWxlQ29ubmVjdCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y21kKFwic3VkbyBzeXN0ZW1jdGwgc3RvcCBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlXCIpO1xuXHRcdFx0Y21kKFwic3VkbyBzeXN0ZW1jdGwgZGlzYWJsZSBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHQnZ2V0SW50ZXJuZXRJbnRlcmZhY2UnOiBmdW5jdGlvbigpIHtcblx0XHRcdGxldCByZXM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXMgPSBjbWQoXCJpcCByb3V0ZSBnZXQgMS4yLjMuNCB8IGF3ayAne3ByaW50ICQ1OyBleGl0fSdcIik7IC8vIEV4ZWN1dGUgdGhlIGNvbW1hbmRcblx0XHRcdFx0aWYgKHJlcy50cmltKCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzLnRyaW0oKTsgLy8gUmV0dXJuIHRoZSBjbGVhbmVkLXVwIHJlc3VsdCBpZiBub3QgZW1wdHlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gJ1Vua25vd24nOyAvLyBSZXR1cm4gYSBkZWZhdWx0IG1lc3NhZ2UgaWYgdGhlIHJlc3VsdCBpcyBlbXB0eVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHQvLyBIYW5kbGUgY2FzZXMgd2hlcmUgdGhlIGNvbW1hbmQgZmFpbHMgb3IgaXMgbm90IGZvdW5kXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBpbnRlcm5ldCBpbnRlcmZhY2U6XCIsIGVycm9yKTtcblx0XHRcdFx0cmV0dXJuICdFcnJvcic7IC8vIFJldHVybiBhbiBlcnJvciBtZXNzYWdlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZ2V0V0xBTlVTQic6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IHJlcztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlcyA9IGNtZCgnaXAgbGluayBzaG93IHdsYW51c2InKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZ2V0V2lmaUNsaWVudE1vZGVFbmFibGVkJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpO1xuXHRcdH0sXG5cdFx0J2VuYWJsZVdpZmlDbGllbnRNb2RlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRydW5XaWZpTW9kZVNjcmlwdCh3aWZpQ2xpZW50RW5hYmxlU2NyaXB0TmFtZSk7XG5cdFx0XHRcdHJldHVybiBnZXRXaWZpQ2xpZW50TW9kZVN0YXRlKCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgZW5hYmxpbmcgV2ktRmkgY2xpZW50IG1vZGU6JywgZXJyb3IpO1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuXHRcdFx0XHRcdCd3aWZpLWNsaWVudC1tb2RlLWVuYWJsZS1mYWlsZWQnLFxuXHRcdFx0XHRcdGVycm9yLnJlYXNvbiB8fCBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZW5hYmxlIFdpLUZpIGNsaWVudCBtb2RlLidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdkaXNhYmxlV2lmaUNsaWVudE1vZGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJ1bldpZmlNb2RlU2NyaXB0KHdpZmlDbGllbnREaXNhYmxlU2NyaXB0TmFtZSk7XG5cdFx0XHRcdHJldHVybiBnZXRXaWZpQ2xpZW50TW9kZVN0YXRlKCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgZGlzYWJsaW5nIFdpLUZpIGNsaWVudCBtb2RlOicsIGVycm9yKTtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcblx0XHRcdFx0XHQnd2lmaS1jbGllbnQtbW9kZS1kaXNhYmxlLWZhaWxlZCcsXG5cdFx0XHRcdFx0ZXJyb3IucmVhc29uIHx8IGVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBkaXNhYmxlIFdpLUZpIGNsaWVudCBtb2RlLidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdnZXRXaWZpTmV0d29ya3MnOiBhc3luYyBmdW5jdGlvbigpIHtcblx0XHRcdGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXG5cdFx0XHR2YXIgd2lmaSA9IHJlcXVpcmUoJ25vZGUtd2lmaScpO1xuXHRcdFx0d2lmaS5pbml0KHtcblx0XHRcdFx0aWZhY2U6ICd3bGFudXNiJyxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1N0YXJ0aW5nIHdpZmkgc2NhbicpO1xuXHRcdFx0XHR3aWZpLnNjYW4oKGVycm9yLCBuZXR3b3JrcykgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3Igc2Nhbm5pbmcgbmV0d29ya3M6JywgZXJyb3IpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShbXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdXaWZpIHNjYW4gY29tcGxldGVkIHN1Y2Nlc3NmdWxseScpO1xuXG5cdFx0XHRcdFx0XHRjb25zdCB1bmlxdWVOZXR3b3JrcyA9IG5ldyBNYXAoKTtcblxuXHRcdFx0XHRcdFx0bmV0d29ya3MuZm9yRWFjaCgobmV0d29yaykgPT4ge1xuXHRcdFx0XHRcdFx0XHRsZXQgc3RyZW5ndGg7XG5cdFx0XHRcdFx0XHRcdGlmIChuZXR3b3JrLnF1YWxpdHkgPiA4MCkge1xuXHRcdFx0XHRcdFx0XHRcdHN0cmVuZ3RoID0gJ3dpZmktNCc7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobmV0d29yay5xdWFsaXR5ID4gNTUpIHtcblx0XHRcdFx0XHRcdFx0XHRzdHJlbmd0aCA9ICd3aWZpLTMnO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG5ldHdvcmsucXVhbGl0eSA+IDMwKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RyZW5ndGggPSAnd2lmaS0yJztcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRzdHJlbmd0aCA9ICd3aWZpLTEnO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gYCR7bmV0d29yay5zc2lkfToke25ldHdvcmsubWFjLnN1YnN0cmluZygwLCAxNSl9YDtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIXVuaXF1ZU5ldHdvcmtzLmhhcyhrZXkpIHx8IG5ldHdvcmsucXVhbGl0eSA+IHVuaXF1ZU5ldHdvcmtzLmdldChrZXkpLnF1YWxpdHkpIHtcblx0XHRcdFx0XHRcdFx0XHR1bmlxdWVOZXR3b3Jrcy5zZXQoa2V5LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiBuZXR3b3JrLnNzaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJlbmd0aDogc3RyZW5ndGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWN1cml0eTogbmV0d29yay5zZWN1cml0eSxcblx0XHRcdFx0XHRcdFx0XHRcdHF1YWxpdHk6IG5ldHdvcmsucXVhbGl0eSxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHVuaXF1ZU5ldHdvcmtzQXJyYXkgPSBBcnJheS5mcm9tKHVuaXF1ZU5ldHdvcmtzLnZhbHVlcygpKTtcblx0XHRcdFx0XHRcdHVuaXF1ZU5ldHdvcmtzQXJyYXkuZm9yRWFjaCgobmV0d29yaykgPT4gZGVsZXRlIG5ldHdvcmsucXVhbGl0eSk7XG5cblx0XHRcdFx0XHRcdHJlc29sdmUodW5pcXVlTmV0d29ya3NBcnJheSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2Nvbm5lY3RUb1dpZmknOiBmdW5jdGlvbihzc2lkLCBwYXNzd29yZCkge1xuXHRcdFx0ZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkKCk7XG5cblx0XHRcdHZhciB3aWZpID0gcmVxdWlyZSgnbm9kZS13aWZpJyk7XG5cdFx0XHR3aWZpLmluaXQoe1xuXHRcdFx0XHRpZmFjZTogJ3dsYW51c2InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHR3aWZpLmNvbm5lY3QoeyBzc2lkOiBzc2lkLCBwYXNzd29yZDogcGFzc3dvcmQgfSwgKGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBjb25uZWN0aW5nIHRvIHdpZmk6JywgZXJyb3IpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShmYWxzZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gd2lmaTonLCBzc2lkKTtcblx0XHRcdFx0XHRcdHJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2Rpc2Nvbm5lY3RXaWZpJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblxuXHRcdFx0dmFyIHdpZmkgPSByZXF1aXJlKCdub2RlLXdpZmknKTtcblx0XHRcdHdpZmkuaW5pdCh7XG5cdFx0XHRcdGlmYWNlOiAnd2xhbnVzYicsXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHdpZmkuZGlzY29ubmVjdCgoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRpc2Nvbm5lY3RpbmcgZnJvbSB3aWZpOicsIGVycm9yKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoZmFsc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRGlzY29ubmVjdGVkIGZyb20gd2lmaScpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZm9yZ2V0V2lmaSc6IGZ1bmN0aW9uKHNzaWQpIHtcblx0XHRcdGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXG5cdFx0XHR2YXIgd2lmaSA9IHJlcXVpcmUoJ25vZGUtd2lmaScpO1xuXHRcdFx0d2lmaS5pbml0KHtcblx0XHRcdFx0aWZhY2U6ICd3bGFudXNiJyxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0d2lmaS5kZWxldGVDb25uZWN0aW9uKHsgc3NpZDogc3NpZCB9LCAoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvbm5lY3RpbmcgdG8gd2lmaTonLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKGZhbHNlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byB3aWZpOicsIHNzaWQpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZ2V0Q2xpZW50U1NJRCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IHNzaWQ7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRzc2lkID0gY21kKCdpd2dldGlkIC1yIHdsYW51c2IgMj4vZGV2L251bGwgfHwgdHJ1ZScpLnRyaW0oKTtcblxuXHRcdFx0XHRpZiAoIXNzaWQpIHtcblx0XHRcdFx0XHRzc2lkID0gY21kKCdubWNsaSAtZyBHRU5FUkFMLkNPTk5FQ1RJT04gZGV2aWNlIHNob3cgd2xhbnVzYiAyPi9kZXYvbnVsbCB8IGhlYWQgLW4gMSB8fCB0cnVlJykudHJpbSgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHNzaWQgPT09ICctLScpIHtcblx0XHRcdFx0XHRzc2lkID0gJyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodHlwZW9mIHNzaWQgPT09ICdzdHJpbmcnICYmIHNzaWQgIT09ICcnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNzaWQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuICdOb3QgY29ubmVjdGVkJztcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIHJldHJpZXZpbmcgY2xpZW50IFNTSUQ6JywgZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gJ05vdCBjb25uZWN0ZWQnO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8gJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdC8vIENvbW1hbmQgdG8gbGlzdCBGT1JXQVJEIHJ1bGVzXG5cdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG5cdFx0Ly8gXHRjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yIHx8IHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvciB8fCBzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciB8fCBuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cblx0XHQvLyBcdFx0Ly8gQ2hlY2sgZm9yIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBydWxlc1xuXHRcdC8vIFx0XHR2YXIgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgPSBzdGRvdXQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIGV0aDAnKSAmJiBzdGRvdXQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coXCJpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZDogXCIraXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQpO1xuXHRcdC8vIFx0XHQvLyBFeHRyYWN0IE1BQyBhZGRyZXNzIHJ1bGVzXG5cdFx0Ly8gXHRcdHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIGV0aDAvO1xuXHRcdC8vIFx0XHR2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cblx0XHQvLyBcdFx0Ly8gRGV0ZXJtaW5lIHRoZSBzdGF0dXMgYmFzZWQgb24gdGhlIHJ1bGVzIGZvdW5kXG5cdFx0Ly8gXHRcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAxXCIpO1xuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSB7Y29uc29sZS5sb2coXCJzdGVwMTJcIik7IGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9KTt9XG5cdFx0Ly8gXHRcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAyXCIpO1xuXG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH0pO1xuXHRcdC8vIFx0XHR9IGVsc2Uge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDNcIik7XG5cblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGRpc2FibGVkIG9yIG5vdCBjb25maWd1cmVkIGFzIGV4cGVjdGVkXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9KTtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fSk7XG5cdFx0Ly8gfSxcblxuXG5cblxuXHRcdFx0Ly8gICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coJ1N0YXJ0aW5nIHRvIGdldCBpbnRlcm5ldCBzaGFyaW5nIHN0YXR1cyBmb3IgRXRoZXJuZXQuLi4nKTtcblx0XHRcdC8vIFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtbiAtLWxpbmUtbnVtYmVyJztcblxuXHRcdFx0Ly8gXHQvLyBTaW5jZSBjbWQgaXMgYWxyZWFkeSB3cmFwcGVkIGJ5IE1ldGVvci53cmFwQXN5bmMoZXhlYyksXG5cdFx0XHQvLyBcdC8vIGl0IHNob3VsZCByZXR1cm4geyBzdGRvdXQsIHN0ZGVyciB9IGRpcmVjdGx5LlxuXHRcdFx0Ly8gXHR0cnkge1xuXHRcdFx0Ly8gXHQgIHZhciB7IHN0ZG91dCwgc3RkZXJyIH0gPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHQvLyBcdCAgaWYgKHN0ZGVycikge1xuXHRcdFx0Ly8gXHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtzdGRlcnJ9YCk7XG5cdFx0XHQvLyBcdFx0Ly8gSXQncyBiZXR0ZXIgdG8gcmV0dXJuIGEgbWVhbmluZ2Z1bCBlcnJvciB0byB0aGUgY2xpZW50LlxuXHRcdFx0Ly8gXHRcdHJldHVybiB7IGVycm9yOiBcIkVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlc1wiLCBkZXRhaWxzOiBzdGRlcnIgfTtcblx0XHRcdC8vIFx0ICB9XG5cblx0XHRcdC8vIFx0ICBjb25zb2xlLmxvZygnQW5hbHl6aW5nIGlwdGFibGVzIEZPUldBUkQgcnVsZXMgb3V0cHV0Li4uJyk7XG5cdFx0XHQvLyBcdCAgLy8gQ2hlY2sgZm9yIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBydWxlc1xuXHRcdFx0Ly8gXHQgIHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IHN0ZG91dC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuXHRcdFx0Ly8gXHQgIGNvbnNvbGUubG9nKGBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZDogJHtpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZH1gKTtcblxuXHRcdFx0Ly8gXHQgIC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcblx0XHRcdC8vIFx0ICB2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSBldGgwLztcblx0XHRcdC8vIFx0ICB2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cdFx0XHQvLyBcdCAgY29uc29sZS5sb2coYE1BQyBhZGRyZXNzIGZvdW5kOiAke21hdGNoID8gbWF0Y2hbMV0gOiAnTm9uZSd9YCk7XG5cblx0XHRcdC8vIFx0ICAvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcblx0XHRcdC8vIFx0ICBpZiAoaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgJiYgIW1hdGNoKSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsLicpO1xuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdC8vIFx0ICB9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coYEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYSBzcGVjaWZpYyBNQUMgYWRkcmVzczogJHttYXRjaFsxXX1gKTtcblx0XHRcdC8vIFx0XHRyZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9O1xuXHRcdFx0Ly8gXHQgIH0gZWxzZSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWQuJyk7XG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHQvLyBcdCAgfVxuXHRcdFx0Ly8gXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Ly8gXHQgIGNvbnNvbGUuZXJyb3IoYENvbW1hbmQgZXhlY3V0aW9uIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0Ly8gXHQgIC8vIEl0J3MgYmV0dGVyIHRvIHJldHVybiBhIG1lYW5pbmdmdWwgZXJyb3IgdG8gdGhlIGNsaWVudC5cblx0XHRcdC8vIFx0ICByZXR1cm4geyBlcnJvcjogXCJDb21tYW5kIGV4ZWN1dGlvbiBlcnJvclwiLCBkZXRhaWxzOiBlcnJvci50b1N0cmluZygpIH07XG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vICAgfSxcblxuXG5cblx0XHRcdFx0Ly8gICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcblx0XHRcdFx0Ly8gXHR2YXIgY29tbWFuZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdFx0Ly8gXHRpZiAoIWNvbW1hbmRSZXN1bHQpIHtcblx0XHRcdFx0Ly8gXHQgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0XHQvLyBcdH1cblxuXHRcdFx0XHQvLyBcdHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIGV0aDAnKSAmJiBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG5cdFx0XHRcdC8vIFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2UgZXRoMC87XG5cdFx0XHRcdC8vIFx0dmFyIG1hdGNoID0gY29tbWFuZFJlc3VsdC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuXHRcdFx0XHQvLyBcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHRcdFx0Ly8gXHQgIHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdFx0Ly8gXHR9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0XHRcdC8vIFx0ICByZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9O1xuXHRcdFx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFx0ICByZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdC8vICAgfSxcblxuXG5cblxuXHRcdFx0XHRcdCAgJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0JzogZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXG5cdFx0XHRcdFx0XHR2YXIgY29tbWFuZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdFx0XHRcdGlmICghY29tbWFuZFJlc3VsdCkge1xuXHRcdFx0XHRcdFx0ICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFwiY29tbWFuZC1leGVjdXRpb24tZXJyb3JcIiwgXCJUaGUgY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhciBzaGFyaW5nRnJvbVdsYW5Ub0V0aCA9IG51bGw7XG5cdFx0XHRcdFx0XHR2YXIgc2hhcmluZ1RvV2xhbkZyb21FdGhFc3RhYmxpc2hlZCA9IG51bGw7XG5cblx0XHRcdFx0XHRcdHZhciBiZWVrZWVPU1ZlcnNpb24gPSBNZXRlb3IuY2FsbCgnZ2V0QmVla2VlT3NWZXJzaW9uJyk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImJlZWtlZU9TVmVyc2lvbjogXCIrYmVla2VlT1NWZXJzaW9uKTtcblx0XHRcdFx0XHRcdGlmIChiZWVrZWVPU1ZlcnNpb24gPj0gMjAyNDA5MjYpIHtcblx0XHRcdFx0XHRcdFx0Ly8gQ2hlY2sgZm9yIHRoZSBzcGVjaWZpYyBydWxlIGluZGljYXRpbmcgaW50ZXJuZXQgc2hhcmluZyBmcm9tIHdsYW4wIHRvIGV0aDBcblx0XHRcdFx0XHRcdFx0c2hhcmluZ0Zyb21XbGFuVG9FdGggPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW5pbnQgLW8gZXRoMCAtaiBBQ0NFUFQnKTtcblx0XHRcdFx0XHRcdFx0c2hhcmluZ1RvV2xhbkZyb21FdGhFc3RhYmxpc2hlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgZXRoMCAtbyB3bGFuaW50IC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIENoZWNrIGZvciB0aGUgc3BlY2lmaWMgcnVsZSBpbmRpY2F0aW5nIGludGVybmV0IHNoYXJpbmcgZnJvbSB3bGFuMCB0byBldGgwXG5cdFx0XHRcdFx0XHRcdHNoYXJpbmdGcm9tV2xhblRvRXRoID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFuMCAtbyBldGgwIC1qIEFDQ0VQVCcpO1xuXHRcdFx0XHRcdFx0XHRzaGFyaW5nVG9XbGFuRnJvbUV0aEVzdGFibGlzaGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKHNoYXJpbmdGcm9tV2xhblRvRXRoICYmIHNoYXJpbmdUb1dsYW5Gcm9tRXRoRXN0YWJsaXNoZWQpIHtcblx0XHRcdFx0XHRcdCAgLy8gSWYgYXQgbGVhc3Qgb25lIHBhaXIgb2YgcnVsZXMgZXhpc3RzLCBpbnRlcm5ldCBzaGFyaW5nIGlzIGNvbnNpZGVyZWQgZW5hYmxlZC5cblx0XHRcdFx0XHRcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ICB9LFxuXG5cblxuXG5cblxuXG5cblx0XHQnZW5hYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXG5cdFx0XHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IG51bGw7XG5cblx0XHRcdHZhciBiZWVrZWVPU1ZlcnNpb24gPSBNZXRlb3IuY2FsbCgnZ2V0QmVla2VlT3NWZXJzaW9uJyk7XG5cdFx0XHRpZiAoYmVla2VlT1NWZXJzaW9uID49IDIwMjQwOTI2KSB7XG5cdFx0XHRcdGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFudXNiIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFuaW50IC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbnVzYiAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XHRdLmpvaW4oJyAmJiAnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1hcHBlbmQgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcblx0XHRcdFx0XS5qb2luKCcgJiYgJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGRlcnIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXQgZW5hYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBEZWZpbmUgYSBsaXN0IG9mIGNvbW1hbmRzIHRvIHJlcGVhdGVkbHkgYXR0ZW1wdCBkZWxldGlvbi5cblx0XHRcdHZhciBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gbnVsbDtcblxuXHRcdFx0dmFyIGJlZWtlZU9TVmVyc2lvbiA9IE1ldGVvci5jYWxsKCdnZXRCZWVrZWVPc1ZlcnNpb24nKTtcblx0XHRcdGlmIChiZWVrZWVPU1ZlcnNpb24gPj0gMjAyNDA5MjYpIHtcblx0XHRcdFx0aXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IFtcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW5pbnQgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW51c2IgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW5pbnQgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFudXNiIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0XHRcdF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gW1xuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYSBjb21tYW5kIGFuZCByZWN1cnNpdmVseSBjYWxsIGl0c2VsZiBpZiB0aGUgY29tbWFuZCB3YXMgc3VjY2Vzc2Z1bCAocnVsZSB3YXMgZm91bmQgYW5kIGRlbGV0ZWQpLlxuXHRcdFx0ZnVuY3Rpb24gZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spIHtcblx0XHRcdFx0Y21kKGNvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIG5vIGVycm9yLCB0aGUgcnVsZSB3YXMgZm91bmQgYW5kIGRlbGV0ZWQsIHNvIHRyeSBhZ2Fpbi5cblx0XHRcdFx0XHRpZiAoIWVycm9yKSB7XG5cdFx0XHRcdFx0XHRleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjayk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3IsIGl0IGxpa2VseSBtZWFucyBubyBtb3JlIGluc3RhbmNlcyBvZiB0aGUgcnVsZSBleGlzdCwgc28gY2FsbCB0aGUgZG9uZUNhbGxiYWNrLlxuXHRcdFx0XHRcdFx0ZG9uZUNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRXhlY3V0ZSBkZWxldGlvbiBmb3IgZWFjaCBjb21tYW5kIGFuZCB0cmFjayBjb21wbGV0aW9uLlxuXHRcdFx0dmFyIHRhc2tzQ29tcGxldGVkID0gMDtcblx0XHRcdGlwdGFibGVzRGVsZXRlQ29tbWFuZHMuZm9yRWFjaCgoY29tbWFuZCkgPT4ge1xuXHRcdFx0XHRleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsICgpID0+IHtcblx0XHRcdFx0XHR0YXNrc0NvbXBsZXRlZCsrO1xuXHRcdFx0XHRcdC8vIE9uY2UgYWxsIGRlbGV0aW9uIHRhc2tzIGFyZSBkb25lLCBzYXZlIHRoZSBpcHRhYmxlcyBjb25maWd1cmF0aW9uLlxuXHRcdFx0XHRcdGlmICh0YXNrc0NvbXBsZXRlZCA9PT0gaXB0YWJsZXNEZWxldGVDb21tYW5kcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBzYXZlZC5gKTtcblx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIHNwZWNpZmllZCBydWxlcyByZW1vdmVkIGFuZCBjaGFuZ2VzIHNhdmVkLicpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHQvLyAnZGlzYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gW1xuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdC8vIFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdC8vIFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHQvLyBcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0Ly8gXHRcdGlmIChlcnJvcikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGlmIChzdGRlcnIpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXQgZGlzYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdC8vIFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXHRcdCdlbmFibGVJbnRlcm5ldEZvck1hY0V0aGVybmV0JzogZnVuY3Rpb24obWFjQWRkcmVzcywgY2FsbGJhY2spIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvLyBDb21tYW5kIHRvIGFsbG93IGludGVybmV0IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzIG9uIGV0aDAuXG5cdFx0XHR2YXIgYWxsb3dNYWNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1tIG1hYyAtLW1hYy1zb3VyY2UgJHttYWNBZGRyZXNzfSAtaiBBQ0NFUFRgO1xuXHRcdFx0Ly8gQ29tbWFuZCB0byBkcm9wIGFsbCBvdGhlciBpbnRlcm5ldCB0cmFmZmljIG9uIGV0aDAuXG5cdFx0XHR2YXIgYmxvY2tPdGhlcnNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1qIERST1BgO1xuXG5cdFx0XHQvLyBBbGxvdyBpbnRlcm5ldCBmb3IgdGhlIHNwZWNpZmllZCBNQUMgYWRkcmVzcy5cblx0XHRcdHJlcyA9IGNtZChhbGxvd01hY0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYWxsb3dpbmcgTUFDICR7bWFjQWRkcmVzc306ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGFsbG93ZWQgZm9yIE1BQyAke21hY0FkZHJlc3N9LmApO1xuXG5cdFx0XHRcdC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldC5cblx0XHRcdFx0cmVzID0gY21kKGJsb2NrT3RoZXJzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBibG9ja2VkIGZvciBvdGhlciBNQUMgYWRkcmVzc2VzLmApO1xuXHRcdFx0XHRcdC8vIE9wdGlvbmFsbHksIHNhdmUgdGhlIGlwdGFibGVzIHNldHRpbmdzIHRvIG1ha2UgdGhlbSBwZXJzaXN0ZW50LlxuXHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayhudWxsKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdyZW1vdmVBbGxNYWNGaWx0ZXJzRm9yRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0Ly8gTGlzdCBhbGwgRk9SV0FSRCBydWxlcyB3aXRoIGxpbmUgbnVtYmVyc1xuXHRcdFx0Y21kKCdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLS1saW5lLW51bWJlcnMgLW4nLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9jZXNzIHN0ZG91dCB0byBpZGVudGlmeSBydWxlcyByZWxhdGVkIHRvIE1BQyBmaWx0ZXJpbmcgb24gZXRoMFxuXHRcdFx0XHRjb25zdCBsaW5lcyA9IHN0ZG91dC5zcGxpdCgnXFxuJyk7XG5cdFx0XHRcdGNvbnN0IHJ1bGVOdW1iZXJzID0gbGluZXMucmVkdWNlKChhY2MsIGxpbmUsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGxpbmUuaW5jbHVkZXMoJ2V0aDAnKSAmJiBsaW5lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ21hYycpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBydWxlTnVtYmVyID0gbGluZS5zcGxpdCgvXFxzKy8pWzBdOyAvLyBFeHRyYWN0IHRoZSBydWxlIG51bWJlciwgYXNzdW1pbmcgaXQncyB0aGUgZmlyc3QgZWxlbWVudFxuXHRcdFx0XHRcdFx0YWNjLnB1c2gocnVsZU51bWJlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHRcdH0sIFtdKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgaWRlbnRpZmllZCBydWxlcyBzdGFydGluZyBmcm9tIHRoZSBoaWdoZXN0IG51bWJlciB0byBwcmV2ZW50IHNoaWZ0aW5nIG9mIGxpbmUgbnVtYmVyc1xuXHRcdFx0XHRydWxlTnVtYmVycy5zb3J0KChhLCBiKSA9PiBiIC0gYSkuZm9yRWFjaChydWxlTnVtYmVyID0+IHtcblx0XHRcdFx0XHRjbWQoYHN1ZG8gaXB0YWJsZXMgLUQgRk9SV0FSRCAke3J1bGVOdW1iZXJ9YCwgKHJlbW92ZUVycm9yLCByZW1vdmVTdGRvdXQsIHJlbW92ZVN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHJlbW92ZUVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHJlbW92aW5nIHJ1bGUgJHtydWxlTnVtYmVyfTogJHtyZW1vdmVFcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0Ly8gRGVjaWRlIGlmIHlvdSB3YW50IHRvIGNvbnRpbnVlIHJlbW92aW5nIG90aGVyIHJ1bGVzIG9yIHN0b3AgaGVyZVxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgUnVsZSAke3J1bGVOdW1iZXJ9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBBZnRlciBhdHRlbXB0aW5nIHRvIHJlbW92ZSBhbGwgaWRlbnRpZmllZCBydWxlcywgc2F2ZSB0aGUgaXB0YWJsZXMgY29uZmlndXJhdGlvblxuXHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChzYXZlRXJyb3IsIHNhdmVTdGRvdXQsIHNhdmVTdGRlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoc2F2ZUVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7c2F2ZUVycm9yfWApO1xuXHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhzYXZlRXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnaXB0YWJsZXMgcnVsZXMgdXBkYXRlZCBhbmQgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIE1BQyBmaWx0ZXIgcnVsZXMgZm9yIEV0aGVybmV0IHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzTW9iaWxlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcblxuXHRcdFx0dmFyIGNvbW1hbmRSZXN1bHQgPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHRpZiAoIWNvbW1hbmRSZXN1bHQpIHtcblx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGp1c3RlZCB0byBjaGVjayBmb3IgdGhlIHNwZWNpZmljIHJ1bGUgaW5kaWNhdGluZyBpbnRlcm5ldCBzaGFyaW5nIGZyb20gd2xhbmludCB0byB3d2FuMFxuXHRcdFx0dmFyIHNoYXJpbmdGcm9tV2xhblRvV3dhbiA9IG51bGw7XG5cdFx0XHR2YXIgc2hhcmluZ1RvV2xhbkZyb21Xd2FuRXN0YWJsaXNoZWQgPSBudWxsO1xuXHRcdFx0dmFyIGJlZWtlZU9TVmVyc2lvbiA9IE1ldGVvci5jYWxsKCdnZXRCZWVrZWVPc1ZlcnNpb24nKTtcblx0XHRcdGlmIChiZWVrZWVPU1ZlcnNpb24gPj0gMjAyNDA5MjYpIHtcblx0XHRcdFx0c2hhcmluZ0Zyb21XbGFuVG9Xd2FuID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFuaW50IC1vIHd3YW4wIC1qIEFDQ0VQVCcpO1xuXHRcdFx0XHRzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbmludCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzaGFyaW5nRnJvbVdsYW5Ub1d3YW4gPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW4wIC1vIHd3YW4wIC1qIEFDQ0VQVCcpO1xuXHRcdFx0XHRzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNoYXJpbmdGcm9tV2xhblRvV3dhbiAmJiBzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCkge1xuXHRcdFx0Ly8gSWYgYXQgbGVhc3Qgb25lIHBhaXIgb2YgcnVsZXMgZXhpc3RzLCBpbnRlcm5ldCBzaGFyaW5nIHRvIHRoZSBtb2JpbGUgaW50ZXJmYWNlIGlzIGNvbnNpZGVyZWQgZW5hYmxlZC5cblx0XHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0Ly8gXHQvLyBDb21tYW5kIHRvIGxpc3QgRk9SV0FSRCBydWxlc1xuXHRcdC8vIFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtbiAtLWxpbmUtbnVtYmVyJztcblxuXHRcdC8vIFx0Y21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0Ly8gXHRcdGlmIChlcnJvciB8fCBzdGRlcnIpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIEZPUldBUkQgcnVsZXM6ICR7ZXJyb3IgfHwgc3RkZXJyfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IgfHwgbmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXG5cdFx0Ly8gXHRcdC8vIENoZWNrIGZvciBnZW5lcmFsIGludGVybmV0IHNoYXJpbmcgcnVsZXNcblx0XHQvLyBcdFx0dmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gc3Rkb3V0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSB3d2FuMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuXG5cdFx0Ly8gXHRcdC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcblx0XHQvLyBcdFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2Ugd3dhbjAvO1xuXHRcdC8vIFx0XHR2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cblx0XHQvLyBcdFx0Ly8gRGV0ZXJtaW5lIHRoZSBzdGF0dXMgYmFzZWQgb24gdGhlIHJ1bGVzIGZvdW5kXG5cdFx0Ly8gXHRcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGFsbFxuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH0pO1xuXHRcdC8vIFx0XHR9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH0pO1xuXHRcdC8vIFx0XHR9IGVsc2Uge1xuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWRcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH0pO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXG5cdFx0J2VuYWJsZUludGVybmV0U2hhcmluZ01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IG51bGw7XG5cdFx0XHR2YXIgYmVla2VlT1NWZXJzaW9uID0gTWV0ZW9yLmNhbGwoJ2dldEJlZWtlZU9zVmVyc2lvbicpO1xuXHRcdFx0aWYgKGJlZWtlZU9TVmVyc2lvbiA+PSAyMDI0MDkyNikge1xuXHRcdFx0XHRpcHRhYmxlc0NvbW1hbmRzID0gW1xuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbmludCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW51c2IgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbmludCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFudXNiIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XHRdLmpvaW4oJyAmJiAnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcblx0XHRcdFx0XS5qb2luKCcgJiYgJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGRlcnIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgbW9iaWxlIGVuYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdC8vIERlZmluZSBjb21tYW5kcyBmb3IgZGVsZXRpb24gd2l0aG91dCBjb21iaW5pbmcgdGhlbVxuXHRcdFx0dmFyIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBudWxsO1xuXHRcdFx0dmFyIGJlZWtlZU9TVmVyc2lvbiA9IE1ldGVvci5jYWxsKCdnZXRCZWVrZWVPc1ZlcnNpb24nKTtcblx0XHRcdGlmIChiZWVrZWVPU1ZlcnNpb24gPj0gMjAyNDA5MjYpIHtcblx0XHRcdFx0dmFyIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBbXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbnVzYiAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuaW50IC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW51c2IgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREUnXG5cdFx0XHRcdF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgaXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IFtcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJ1xuXHRcdFx0XHRdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGdW5jdGlvbiB0byByZWN1cnNpdmVseSBleGVjdXRlIGEgY29tbWFuZCB1bnRpbCBpdCBmYWlscyAoaW5kaWNhdGluZyBubyBtb3JlIGluc3RhbmNlcyBvZiB0aGUgcnVsZSlcblx0XHRcdGZ1bmN0aW9uIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKSB7XG5cdFx0XHRcdGNtZChjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0Ly8gTm8gZXJyb3IgbWVhbnMgdGhlIGNvbW1hbmQgc3VjY2VlZGVkLCBzbyB0aGVyZSBtaWdodCBiZSBtb3JlIGluc3RhbmNlc1xuXHRcdFx0XHRcdGlmICghZXJyb3IpIHtcblx0XHRcdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gRXJyb3IgbGlrZWx5IG1lYW5zIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlLCBtb3ZlIG9uXG5cdFx0XHRcdFx0XHRkb25lQ2FsbGJhY2soKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFeGVjdXRlIGRlbGV0aW9uIGZvciBlYWNoIGNvbW1hbmQgYW5kIHRyYWNrIHdoZW4gYWxsIGFyZSBjb21wbGV0ZWRcblx0XHRcdHZhciB0YXNrc0NvbXBsZXRlZCA9IDA7XG5cdFx0XHRpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcblx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCAoKSA9PiB7XG5cdFx0XHRcdFx0dGFza3NDb21wbGV0ZWQrKztcblx0XHRcdFx0XHQvLyBBZnRlciBhbGwgY29tbWFuZHMgaGF2ZSBiZWVuIGF0dGVtcHRlZCwgc2F2ZSB0aGUgY29uZmlndXJhdGlvblxuXHRcdFx0XHRcdGlmICh0YXNrc0NvbXBsZXRlZCA9PT0gaXB0YWJsZXNEZWxldGVDb21tYW5kcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzYXZlU3Rkb3V0LCBzYXZlU3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2lwdGFibGVzIHJ1bGVzIGZvciBtb2JpbGUgaW50ZXJmYWNlIHVwZGF0ZWQgYW5kIHNhdmVkLicpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsICdBbGwgc3BlY2lmaWVkIHJ1bGVzIGZvciBtb2JpbGUgaW50ZXJmYWNlIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdC8vICdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gW1xuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREUnLFxuXHRcdC8vIFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdC8vIFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHQvLyBcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0Ly8gXHRcdGlmIChlcnJvcikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGlmIChzdGRlcnIpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgbW9iaWxlIGRpc2FibGVkIHN1Y2Nlc3NmdWxseS4nKTtcblx0XHQvLyBcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCBzdGRvdXQpO1xuXHRcdC8vIFx0fSk7XG5cdFx0Ly8gfSxcblx0XHQnYWxsb3dJbnRlcm5ldEZvck1hY01vYmlsZSc6IGZ1bmN0aW9uKG1hY0FkZHJlc3MsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0Ly8gRmlyc3QsIGVuYWJsZSBnZW5lcmFsIGludGVybmV0IHNoYXJpbmcgZnJvbSB3bGFuMCB0byB3d2FuMFxuXHRcdFx0cmVzID0gY21kKCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCAmJiBzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgZW5hYmxpbmcgaW50ZXJuZXQgc2hhcmluZzogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBJbnRlcm5ldCBzaGFyaW5nIGVuYWJsZWQgdmlhIHd3YW4wLmApO1xuXHRcdFx0XHQvLyBBbGxvdyBpbnRlcm5ldCBvbmx5IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzIG9uIHd3YW4wXG5cdFx0XHRcdHZhciBhbGxvd01hY0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtSSBGT1JXQVJEIDEgLWkgd3dhbjAgLW0gbWFjIC0tbWFjLXNvdXJjZSAke21hY0FkZHJlc3N9IC1qIEFDQ0VQVGA7XG5cdFx0XHRcdC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldCB2aWEgd3dhbjAuXG5cdFx0XHRcdHZhciBibG9ja090aGVyc0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIHd3YW4wIC1qIERST1BgO1xuXG5cdFx0XHRcdC8vIEFsbG93IHNwZWNpZmljIE1BQ1xuXHRcdFx0XHRyZXMgPSBjbWQoYWxsb3dNYWNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBhbGxvd2luZyBNQUMgJHttYWNBZGRyZXNzfSBvbiBXV0FOOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBhbGxvd2VkIGZvciBNQUMgJHttYWNBZGRyZXNzfSBvbiBXV0FOLmApO1xuXG5cdFx0XHRcdFx0Ly8gQmxvY2sgYWxsIG90aGVyIE1BQ3Ncblx0XHRcdFx0XHRyZXMgPSBjbWQoYmxvY2tPdGhlcnNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDcyBvbiBXV0FOOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBibG9ja2VkIGZvciBvdGhlciBNQUMgYWRkcmVzc2VzIG9uIFdXQU4uYCk7XG5cblx0XHRcdFx0XHRcdC8vIFNhdmUgaXB0YWJsZXMgcnVsZXNcblx0XHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBzYXZpbmcgaXB0YWJsZXMgcnVsZXMgZm9yIFdXQU46ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgZm9yIFdXQU4gc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKG51bGwpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQncmVtb3ZlQWxsTWFjRmlsdGVyc0Zvck1vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBMaXN0IGFsbCBGT1JXQVJEIHJ1bGVzXG5cdFx0XHRjbWQoJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtLWxpbmUtbnVtYmVycyAtbicsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9jZXNzIHN0ZG91dCB0byBmaW5kIHJ1bGVzIHRvIGRlbGV0ZS4gVGhpcyBwYXJ0IGlzIHBzZXVkby1jb2RlIGFuZCBuZWVkcyBhZGp1c3RtZW50XG5cdFx0XHRcdGNvbnN0IGxpbmVzID0gc3Rkb3V0LnNwbGl0KCdcXG4nKTtcblx0XHRcdFx0Y29uc3QgcnVsZU51bWJlcnMgPSBbXTtcblx0XHRcdFx0bGluZXMuZm9yRWFjaChsaW5lID0+IHtcblx0XHRcdFx0XHRpZiAobGluZS5pbmNsdWRlcygnd3dhbjAnKSAmJiBsaW5lLmluY2x1ZGVzKCdNQUMnKSkge1xuXHRcdFx0XHRcdFx0Ly8gRXh0cmFjdCB0aGUgcnVsZSBudW1iZXIgZnJvbSB0aGUgbGluZVxuXHRcdFx0XHRcdFx0Y29uc3QgcnVsZU51bWJlciA9IGxpbmUuc3BsaXQoJyAnKVswXTsgLy8gVGhpcyBpcyBhIHNpbXBsaWZpY2F0aW9uXG5cdFx0XHRcdFx0XHRydWxlTnVtYmVycy5wdXNoKHJ1bGVOdW1iZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIHJ1bGVzIGJ5IHRoZWlyIG51bWJlcnMsIHN0YXJ0aW5nIGZyb20gdGhlIGhpZ2hlc3QgbnVtYmVyXG5cdFx0XHRcdHJ1bGVOdW1iZXJzLnNvcnQoKGEsIGIpID0+IGIgLSBhKS5mb3JFYWNoKHJ1bGVOdW1iZXIgPT4ge1xuXHRcdFx0XHRcdGNtZChgc3VkbyBpcHRhYmxlcyAtRCBGT1JXQVJEICR7cnVsZU51bWJlcn1gLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgcmVtb3ZpbmcgcnVsZSAke3J1bGVOdW1iZXJ9OiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdFx0Ly8gT3B0aW9uYWxseSwgc3RvcCB0aGUgcHJvY2VzcyBvciBjb250aW51ZSBhdHRlbXB0aW5nIHRvIHJlbW92ZSBvdGhlciBydWxlc1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgUnVsZSAke3J1bGVOdW1iZXJ9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBBZnRlciBhbGwgcnVsZXMgaGF2ZSBiZWVuIHByb2Nlc3NlZCwgc2F2ZSB0aGUgaXB0YWJsZXMgcnVsZXNcblx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2lwdGFibGVzIHJ1bGVzIHVwZGF0ZWQgYW5kIHNhdmVkLicpO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgJ0FsbCBNQUMgZmlsdGVyIHJ1bGVzIGZvciBXV0FOIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQncmVib290JzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKCdzdWRvIHJlYm9vdCcsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHQgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdCAgcmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3NodXRkb3duJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKCdzdWRvIGhhbHQnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0ICBjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0XHQgIHJldHVybjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdzeW5jaHJvbml6ZSc6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIHN5bmMuLi5cIik7XG5cblx0XHRcdHZhciBkZXZpY2VTZXJpYWwgPSBNZXRlb3Iuc2V0dGluZ3MucHVibGljLnNlcmlhbDtcblx0XHRcdHZhciBkZXZpY2VUb2tlbiA9IE1ldGVvci5zZXR0aW5ncy5tb29kbGVBUElUb2tlbjtcblx0XHRcdHZhciB1cmwgPSBNZXRlb3Iuc2V0dGluZ3MuY2xvdWRVUkwgKyBcIi9hcGkvc3RhcnRTeW5jXCI7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQnZGV2aWNlU2VyaWFsJzogZGV2aWNlU2VyaWFsLFxuXHRcdFx0XHRcdCdkZXZpY2VUb2tlbic6IGRldmljZVRva2VuXG5cdFx0XHRcdH0sXG5cdFx0XHQgICAgbnBtUmVxdWVzdE9wdGlvbnM6IHtcblx0XHRcdCAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSwgLy8gVE9ETyByZW1vdmUgd2hlbiBkZXBsb3lcblx0XHRcdCAgICAgICAgdGltZW91dDogMTIwMDAwMFxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgdGltZW91dDogMTIwMDAwMFxuXHRcdFx0fVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly92YXIgcmVzdWx0ID0gSFRUUC5jYWxsKCdQT1NUJywgdXJsLCBvcHRpb25zKTtcblxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gSFRUUC5wb3N0KCB1cmwsIG9wdGlvbnMgKTtcblx0XHRcdFx0dmFyIHJlc3VsdENvbnRlbnQgPSByZXN1bHQuY29udGVudDtcblx0XHRcdFx0Ly9TeW5jaHJvbml6YXRpb25zLmluc2VydCh7ZGF0ZTpEYXRlLm5vdygpfSk7XG5cdFx0XHRcdHJldHVybiByZXN1bHRDb250ZW50O1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCBcIkVycm9yIHdoaWxlIHRyeWluZyB0byBzeW5jcm9uaXplLi4uXCIsIGUgKTtcblx0XHRcdFx0cmV0dXJuIFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi4gXCIrIGU7XG5cdFx0XHR9XG5cdFx0Ly9yZXR1cm4gcmVzdWx0Q29udGVudDtcblx0XHR9LFxuXHR9KTtcbn1cbn0pO1xuIiwiLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbEFwcHMnLCBmdW5jdGlvbigpIHtcbi8vIFx0cmV0dXJuIEFwcHMuZmluZCh7fSk7XG4vLyB9KTtcblxuLy8gTWV0ZW9yLnB1Ymxpc2goXCJ1c2Vyc1wiLCBmdW5jdGlvbigpIHtcbi8vICAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoe30sIHtmaWVsZHM6e2NyZWF0ZWRBdDogdHJ1ZSwgcHJvZmlsZTogdHJ1ZSwgZW1haWxzOiB0cnVlLCB1c2VybmFtZTogdHJ1ZX19KTtcbi8vIH0pO1xuXG5cbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIH0pOyIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuXG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9zeW5jaHJvbml6YXRpb25zLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvdXNlcnMuanMnO1xuXG5pbXBvcnQgJy4uL3NlcnZlci9maXh0dXJlcy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci9tZXRob2RzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL3B1YmxpY2F0aW9ucy5qcyc7XG5pbXBvcnQgJy4uL2xpYi9hcHBfbG9hZGVyLmpzJztcblxuXG4vL2ltcG9ydCB7RERQfSBmcm9tICdtZXRlb3IvZGRwJztcbi8vaW1wb3J0IHtBY2NvdW50c30gZnJvbSAnbWV0ZW9yL2FjY291bnRzLWJhc2UnO1xuXG5cbi8vIGltcG9ydCAnLi4vaW1wb3J0cy9zdGFydHVwL3NlcnZlci9maXh0dXJlcy5qcyc7XG5cbi8vIGltcG9ydCAnLi4vaW1wb3J0cy9hcGkvZml4dHVyZXMuanMnO1xuXG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcblx0Y29uc29sZS5sb2coXCJtZXRlb3Igc3RhcnRlZC4uLlwiKTtcblxuXG5cbiAgLy8gY29kZSB0byBydW4gb24gc2VydmVyIGF0IHN0YXJ0dXBcblxuIC8vICBTZXJ2ZXIyID0gRERQLmNvbm5lY3QoXCJodHRwOi8vYmVla2VlLmJveDo4M1wiKTtcblx0Ly8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFNlcnZlcjI7XG5cdC8vIGNvbnNvbGUubG9nKFwib24gY29ubmVjdGUuLi5cIik7XG59KTtcbiJdfQ==
