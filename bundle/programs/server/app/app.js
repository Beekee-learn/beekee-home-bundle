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

    function getClientSSIDFromSystem() {
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
        }
      } catch (error) {
        console.log('Error retrieving client SSID:', error);
      }

      return 'Not connected';
    }

    function getClientBSSIDFromSystem() {
      try {
        const bssid = cmd("iw dev wlanusb link 2>/dev/null | awk '/Connected to/ {print $3; exit}' || true").trim();

        if (bssid && bssid !== 'Not connected') {
          return bssid.toUpperCase();
        }
      } catch (error) {
        console.log('Error retrieving client BSSID:', error);
      }

      return null;
    }

    function getClientConnectionInfoFromSystem() {
      const ssid = getClientSSIDFromSystem();
      return {
        ssid: ssid,
        bssid: ssid === 'Not connected' ? null : getClientBSSIDFromSystem()
      };
    }

    function wait(milliseconds) {
      return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
      });
    }

    function waitForClientSSID(expectedSSID, timeoutMilliseconds) {
      return Promise.asyncApply(() => {
        const deadline = Date.now() + timeoutMilliseconds;

        while (Date.now() < deadline) {
          if (getClientSSIDFromSystem() === expectedSSID) {
            return true;
          }

          Promise.await(wait(1000));
        }

        return false;
      });
    }

    function getInternetSharingStatusWifiClientFromSystem() {
      if (!getWifiClientModeState()) {
        return {
          status: 'disabled',
          macAddress: null
        };
      }

      var listForwardRulesCommand = 'sudo iptables -S FORWARD';
      var listNatRulesCommand = 'sudo iptables -t nat -S POSTROUTING';
      var forwardResult = cmd(listForwardRulesCommand);
      var natResult = cmd(listNatRulesCommand);

      if (!forwardResult) {
        throw new Meteor.Error('command-execution-error', 'The FORWARD chain command did not return any output.');
      }

      if (!natResult) {
        throw new Meteor.Error('command-execution-error', 'The POSTROUTING chain command did not return any output.');
      }

      var sharingFromWlanintToWlanusb = forwardResult.includes('-A FORWARD -i wlanint -o wlanusb -j ACCEPT');
      var sharingToWlanintFromWlanusbEstablished = forwardResult.includes('-A FORWARD -i wlanusb -o wlanint -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT');
      var natForWlanint = natResult.includes('-A POSTROUTING -s 10.0.0.0/24 -o wlanusb -j MASQUERADE');

      if (sharingFromWlanintToWlanusb && sharingToWlanintFromWlanusbEstablished && natForWlanint) {
        return {
          status: 'enabled for all',
          macAddress: null
        };
      }

      return {
        status: 'disabled',
        macAddress: null
      };
    }

    function enableInternetSharingWifiClientInSystem() {
      ensureWifiClientModeEnabled();
      var iptablesCommands = ['sudo iptables -C FORWARD -i wlanint -o wlanusb -j ACCEPT 2>/dev/null || sudo iptables -A FORWARD -i wlanint -o wlanusb -j ACCEPT', 'sudo iptables -C FORWARD -i wlanusb -o wlanint -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT 2>/dev/null || sudo iptables -A FORWARD -i wlanusb -o wlanint -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables -t nat -C POSTROUTING -s 10.0.0.0/24 -o wlanusb -j MASQUERADE 2>/dev/null || sudo iptables -t nat -A POSTROUTING -s 10.0.0.0/24 -o wlanusb -j MASQUERADE', 'sudo netfilter-persistent save'].join(' && ');
      cmd(iptablesCommands);
      return true;
    }

    function disableInternetSharingWifiClientInSystem() {
      var iptablesDeleteCommands = ['sudo iptables --delete FORWARD --in-interface wlanint --out-interface wlanusb -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface wlanusb --out-interface wlanint -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --table nat --delete POSTROUTING --source 10.0.0.0/24 --out-interface wlanusb -j MASQUERADE'];

      function executeAndRepeat(command) {
        while (true) {
          try {
            cmd(command);
          } catch (error) {
            return;
          }
        }
      }

      iptablesDeleteCommands.forEach(command => {
        executeAndRepeat(command);
      });
      cmd('sudo netfilter-persistent save');
      return true;
    }

    function getCaptivePortalStatusFromSystem() {
      const ssid = getClientSSIDFromSystem();

      if (ssid === 'Not connected') {
        return {
          detected: false,
          url: null,
          ssid: ssid
        };
      }

      try {
        const response = cmd('curl --interface wlanusb -s -m 8 -L -D - -o /dev/null -w "\\nCURL_EFFECTIVE_URL:%{url_effective}\\n" http://connectivitycheck.gstatic.com/generate_204 || true').toString();
        const statusMatch = response.match(/HTTP\/[0-9.]+\s+(\d{3})/);
        const locationMatch = response.match(/^[Ll]ocation:\s*(.+)$/m);
        const effectiveUrlMatch = response.match(/CURL_EFFECTIVE_URL:(.+)$/m);
        const statusCode = statusMatch ? parseInt(statusMatch[1], 10) : null;
        let url = locationMatch ? locationMatch[1].trim() : null;
        const effectiveUrl = effectiveUrlMatch ? effectiveUrlMatch[1].trim() : null;

        if (url && /^\/\//.test(url)) {
          url = `http:${url}`;
        }

        if (url && !/^https?:\/\//i.test(url)) {
          url = 'http://neverssl.com';
        }

        if (url && !/neverssl\.com/i.test(url) && !/connectivitycheck\.gstatic\.com/i.test(url)) {
          return {
            detected: true,
            url: url,
            ssid: ssid,
            statusCode: statusCode
          };
        }

        if (effectiveUrl && !/^http:\/\/connectivitycheck\.gstatic\.com\/generate_204\/?$/i.test(effectiveUrl) && !/^http:\/\/([^/]+\.)?neverssl\.com(\/|$)/i.test(effectiveUrl)) {
          return {
            detected: true,
            url: effectiveUrl,
            ssid: ssid,
            statusCode: statusCode
          };
        }

        if (statusCode === 204) {
          return {
            detected: false,
            url: null,
            ssid: ssid,
            statusCode: statusCode
          };
        }
      } catch (error) {
        console.log('Error detecting captive portal:', error);
      }

      return {
        detected: false,
        url: null,
        ssid: ssid
      };
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
          disableInternetSharingWifiClientInSystem();
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

                  const bssid = network.mac ? network.mac.toUpperCase() : null;
                  const key = `${network.ssid}:${bssid || 'unknown'}`;

                  if (!uniqueNetworks.has(key) || network.quality > uniqueNetworks.get(key).quality) {
                    uniqueNetworks.set(key, {
                      name: network.ssid,
                      bssid: bssid,
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
        return Promise.asyncApply(() => {
          ensureWifiClientModeEnabled();

          var wifi = require('node-wifi');

          wifi.init({
            iface: 'wlanusb'
          });
          const currentConnectionInfo = getClientConnectionInfoFromSystem();

          if (currentConnectionInfo.ssid === ssid) {
            return true;
          }

          const connectionConfig = {
            ssid: ssid
          };

          if (typeof password === 'string' && password !== '') {
            connectionConfig.password = password;
          }

          try {
            Promise.await(new Promise(resolve => {
              wifi.disconnect(() => {
                resolve(true);
              });
            }));

            try {
              cmd('nmcli device disconnect wlanusb >/dev/null 2>&1 || true');
            } catch (error) {
              console.log('Error disconnecting wlanusb before reconnect:', error);
            }

            Promise.await(wait(1500));
            const connectResult = Promise.await(new Promise(resolve => {
              wifi.connect(connectionConfig, error => {
                if (error) {
                  console.error('Error connecting to wifi:', error);
                  resolve(false);
                } else {
                  resolve(true);
                }
              });
            }));

            if (!connectResult) {
              return false;
            }

            const isVerified = Promise.await(waitForClientSSID(ssid, 15000));

            if (!isVerified) {
              console.log('Connected callback returned success but SSID verification failed:', ssid);
              return false;
            }

            console.log('Connected to wifi:', ssid);
            return true;
          } catch (error) {
            console.error('Unexpected error while connecting to wifi:', error);
            return false;
          }
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
        return getClientSSIDFromSystem();
      },
      'getClientConnectionInfo': function () {
        return getClientConnectionInfoFromSystem();
      },
      'getCaptivePortalStatus': function () {
        ensureWifiClientModeEnabled();
        return getCaptivePortalStatusFromSystem();
      },
      'getInternetSharingStatusWifiClient': function () {
        return getInternetSharingStatusWifiClientFromSystem();
      },
      'enableInternetSharingWifiClient': function () {
        try {
          enableInternetSharingWifiClientInSystem();
          return getInternetSharingStatusWifiClientFromSystem();
        } catch (error) {
          console.log('Error enabling internet sharing via Wi-Fi client:', error);
          throw new Meteor.Error('wifi-client-sharing-enable-failed', error.reason || error.message || 'Failed to enable internet sharing via Wi-Fi client.');
        }
      },
      'disableInternetSharingWifiClient': function () {
        try {
          disableInternetSharingWifiClientInSystem();
          return getInternetSharingStatusWifiClientFromSystem();
        } catch (error) {
          console.log('Error disabling internet sharing via Wi-Fi client:', error);
          throw new Meteor.Error('wifi-client-sharing-disable-failed', error.reason || error.message || 'Failed to disable internet sharing via Wi-Fi client.');
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
        var listNatRulesCommand = 'sudo iptables -t nat -S POSTROUTING';
        var forwardResult = cmd(listForwardRulesCommand);
        var natResult = cmd(listNatRulesCommand);

        if (!forwardResult) {
          throw new Meteor.Error("command-execution-error", "The FORWARD chain command did not return any output.");
        }

        if (!natResult) {
          throw new Meteor.Error("command-execution-error", "The POSTROUTING chain command did not return any output.");
        }

        var sharingFromWlanintToEth = forwardResult.includes('-A FORWARD -i wlanint -o eth0 -j ACCEPT');
        var sharingFromWlanusbToEth = forwardResult.includes('-A FORWARD -i wlanusb -o eth0 -j ACCEPT');
        var sharingToWlanintFromEthEstablished = forwardResult.includes('-A FORWARD -i eth0 -o wlanint -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT');
        var sharingToWlanusbFromEthEstablished = forwardResult.includes('-A FORWARD -i eth0 -o wlanusb -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT');
        var natForWlanint = natResult.includes('-A POSTROUTING -s 10.0.0.0/24 -o eth0 -j MASQUERADE');
        var natForWlanusb = natResult.includes('-A POSTROUTING -s 10.1.0.0/24 -o eth0 -j MASQUERADE');

        if (sharingFromWlanintToEth && sharingFromWlanusbToEth && sharingToWlanintFromEthEstablished && sharingToWlanusbFromEthEstablished && natForWlanint && natForWlanusb) {
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
        iptablesCommands = ['sudo iptables -C FORWARD -i wlanint -o eth0 -j ACCEPT 2>/dev/null || sudo iptables -A FORWARD -i wlanint -o eth0 -j ACCEPT', 'sudo iptables -C FORWARD -i wlanusb -o eth0 -j ACCEPT 2>/dev/null || sudo iptables -A FORWARD -i wlanusb -o eth0 -j ACCEPT', 'sudo iptables -C FORWARD -i eth0 -o wlanint -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT 2>/dev/null || sudo iptables -A FORWARD -i eth0 -o wlanint -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables -C FORWARD -i eth0 -o wlanusb -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT 2>/dev/null || sudo iptables -A FORWARD -i eth0 -o wlanusb -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables -t nat -C POSTROUTING -s 10.0.0.0/24 -o eth0 -j MASQUERADE 2>/dev/null || sudo iptables -t nat -A POSTROUTING -s 10.0.0.0/24 -o eth0 -j MASQUERADE', 'sudo iptables -t nat -C POSTROUTING -s 10.1.0.0/24 -o eth0 -j MASQUERADE 2>/dev/null || sudo iptables -t nat -A POSTROUTING -s 10.1.0.0/24 -o eth0 -j MASQUERADE', 'sudo netfilter-persistent save'].join(' && ');
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
        iptablesDeleteCommands = ['sudo iptables --delete FORWARD --in-interface wlanint --out-interface eth0 -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface wlanusb --out-interface eth0 -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface eth0 --out-interface wlanint -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface eth0 --out-interface wlanusb -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --table nat --delete POSTROUTING --source 10.0.0.0/24 --out-interface eth0 -j MASQUERADE', 'sudo iptables --table nat --delete POSTROUTING --source 10.1.0.0/24 --out-interface eth0 -j MASQUERADE']; // Function to execute a command and recursively call itself if the command was successful (rule was found and deleted).

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
        var listNatRulesCommand = 'sudo iptables -t nat -S POSTROUTING';
        var forwardResult = cmd(listForwardRulesCommand);
        var natResult = cmd(listNatRulesCommand);

        if (!forwardResult) {
          throw new Meteor.Error("command-execution-error", "The FORWARD chain command did not return any output.");
        }

        if (!natResult) {
          throw new Meteor.Error("command-execution-error", "The POSTROUTING chain command did not return any output.");
        }

        var sharingFromWlanintToWwan = forwardResult.includes('-A FORWARD -i wlanint -o wwan0 -j ACCEPT');
        var sharingFromWlanusbToWwan = forwardResult.includes('-A FORWARD -i wlanusb -o wwan0 -j ACCEPT');
        var sharingToWlanintFromWwanEstablished = forwardResult.includes('-A FORWARD -i wwan0 -o wlanint -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT');
        var sharingToWlanusbFromWwanEstablished = forwardResult.includes('-A FORWARD -i wwan0 -o wlanusb -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT');
        var natForWlanint = natResult.includes('-A POSTROUTING -s 10.0.0.0/24 -o wwan0 -j MASQUERADE');
        var natForWlanusb = natResult.includes('-A POSTROUTING -s 10.1.0.0/24 -o wwan0 -j MASQUERADE');

        if (sharingFromWlanintToWwan && sharingFromWlanusbToWwan && sharingToWlanintFromWwanEstablished && sharingToWlanusbFromWwanEstablished && natForWlanint && natForWlanusb) {
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
      'enableInternetSharingMobile': function (callback) {
        var iptablesCommands = null;
        iptablesCommands = ['sudo iptables --append FORWARD --in-interface wlanint --out-interface wwan0 -j ACCEPT', 'sudo iptables -C FORWARD -i wlanusb -o wwan0 -j ACCEPT 2>/dev/null || sudo iptables -A FORWARD -i wlanusb -o wwan0 -j ACCEPT', 'sudo iptables -C FORWARD -i wwan0 -o wlanint -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT 2>/dev/null || sudo iptables -A FORWARD -i wwan0 -o wlanint -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables -C FORWARD -i wwan0 -o wlanusb -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT 2>/dev/null || sudo iptables -A FORWARD -i wwan0 -o wlanusb -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables -t nat -C POSTROUTING -s 10.0.0.0/24 -o wwan0 -j MASQUERADE 2>/dev/null || sudo iptables -t nat -A POSTROUTING -s 10.0.0.0/24 -o wwan0 -j MASQUERADE', 'sudo iptables -t nat -C POSTROUTING -s 10.1.0.0/24 -o wwan0 -j MASQUERADE 2>/dev/null || sudo iptables -t nat -A POSTROUTING -s 10.1.0.0/24 -o wwan0 -j MASQUERADE', 'sudo netfilter-persistent save'].join(' && ');
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
        iptablesDeleteCommands = ['sudo iptables --delete FORWARD --in-interface wlanint --out-interface wwan0 -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface wlanusb --out-interface wwan0 -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface wwan0 --out-interface wlanint -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface wwan0 --out-interface wlanusb -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --table nat --delete POSTROUTING --source 10.0.0.0/24 --out-interface wwan0 -j MASQUERADE', 'sudo iptables --table nat --delete POSTROUTING --source 10.1.0.0/24 --out-interface wwan0 -j MASQUERADE']; // Function to recursively execute a command until it fails (indicating no more instances of the rule)

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
        var res; // First, enable general internet sharing to wwan0

        res = cmd('sudo iptables --append FORWARD --in-interface wlanint --out-interface wwan0 -j ACCEPT && sudo iptables --append FORWARD --in-interface wlanusb --out-interface wwan0 -j ACCEPT && sudo iptables --append FORWARD --in-interface wwan0 --out-interface wlanint -m state --state RELATED,ESTABLISHED -j ACCEPT && sudo iptables --append FORWARD --in-interface wwan0 --out-interface wlanusb -m state --state RELATED,ESTABLISHED -j ACCEPT && sudo iptables --table nat --append POSTROUTING --out-interface wwan0 -j MASQUERADE', (error, stdout, stderr) => {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS93aWZpQ2xpZW50TW9kZVN0YXRlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiYWRkQ2xhc3MiLCJmYWRlT3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnQiLCJBcHBzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJhbGxvdyIsImluc2VydCIsInVwZGF0ZSIsInVzZXJJZCIsInNwYWNlIiwicHVibGlzaCIsImFwcHNQdWJsaWNhdGlvbiIsImZpbmQiLCJTeW5jaHJvbml6YXRpb25zIiwic3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uIiwiaXNBZG1pbiIsImNvbnNvbGUiLCJsb2ciLCJSb2xlcyIsInVzZXJJc0luUm9sZSIsInVzZXIiLCJyb2xlQXNzaWdubWVudCIsInJlYWR5IiwiV2lmaUNsaWVudE1vZGVTdGF0ZSIsIndpZmlDbGllbnRNb2RlU3RhdGVQdWJsaWNhdGlvbiIsIl9pZCIsImNyZWF0ZVJvbGUiLCJ1bmxlc3NFeGlzdHMiLCJ1c2VycyIsImNvdW50IiwiYWRtaW5QYXNzd29yZCIsInNldHRpbmdzIiwidXNlcm5hbWUiLCJyb2xlcyIsIl8iLCJlYWNoIiwiaWQiLCJBY2NvdW50cyIsImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJvZmlsZSIsIm5hbWUiLCJsZW5ndGgiLCJhZGRVc2Vyc1RvUm9sZXMiLCJkZWZhdWx0QXBwcyIsImN1c3RvbUFwcCIsIm9ubHlUZWFjaGVyIiwib3JkZXIiLCJkb2NfdXNlciIsImRvY19hZG1pbiIsImxhc3RfdmVyc2lvbiIsInVybCIsImljb24iLCJkZXNjcmlwdGlvbiIsImluc3RhbGxlZCIsInZlcnNpb24iLCJoaWRkZW4iLCJIVFRQIiwiZnMiLCJOcG0iLCJyZXF1aXJlIiwiZXhlYyIsImNtZCIsIndyYXBBc3luYyIsIndpZmlTZXR0aW5nc1BhdGgiLCJjb25maWdQYXRoIiwic2NyaXB0c1BhdGgiLCJ3aWZpQ2xpZW50RW5hYmxlU2NyaXB0TmFtZSIsIndpZmlDbGllbnREaXNhYmxlU2NyaXB0TmFtZSIsIndpZmlDbGllbnRNb2RlU3RhdGVQYXRoIiwicmVhZGxpbmUiLCJzaGVsbEVzY2FwZSIsInZhbHVlIiwiU3RyaW5nIiwicmVwbGFjZSIsInJlc29sdmVTY3JpcHRQYXRoIiwic2NyaXB0TmFtZSIsInJlYWRXaWZpQ2xpZW50TW9kZVN0YXRlIiwiZXhpc3RzU3luYyIsInN0YXRlIiwicmVhZEZpbGVTeW5jIiwidHJpbSIsImVycm9yIiwid3JpdGVXaWZpQ2xpZW50TW9kZVN0YXRlIiwiZW5hYmxlZCIsIndyaXRlRmlsZVN5bmMiLCJwZXJzaXN0V2lmaUNsaWVudE1vZGVTdGF0ZSIsInVwc2VydCIsIiRzZXQiLCJ1cGRhdGVkQXQiLCJEYXRlIiwiZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0iLCJoYXNXbGFuVXNiIiwidG9TdHJpbmciLCJoYXNBcEFkZHJlc3MiLCJkZXRlY3RXaWZpQ2xpZW50TW9kZUZyb21TeXN0ZW0iLCJubVN0YXRlIiwidGVzdCIsImdldFdpZmlDbGllbnRNb2RlU3RhdGUiLCJkZXRlY3RlZFN0YXRlIiwiZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkIiwiRXJyb3IiLCJnZXRDbGllbnRTU0lERnJvbVN5c3RlbSIsInNzaWQiLCJnZXRDbGllbnRCU1NJREZyb21TeXN0ZW0iLCJic3NpZCIsInRvVXBwZXJDYXNlIiwiZ2V0Q2xpZW50Q29ubmVjdGlvbkluZm9Gcm9tU3lzdGVtIiwid2FpdCIsIm1pbGxpc2Vjb25kcyIsIlByb21pc2UiLCJyZXNvbHZlIiwid2FpdEZvckNsaWVudFNTSUQiLCJleHBlY3RlZFNTSUQiLCJ0aW1lb3V0TWlsbGlzZWNvbmRzIiwiZGVhZGxpbmUiLCJub3ciLCJnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNXaWZpQ2xpZW50RnJvbVN5c3RlbSIsInN0YXR1cyIsIm1hY0FkZHJlc3MiLCJsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCIsImxpc3ROYXRSdWxlc0NvbW1hbmQiLCJmb3J3YXJkUmVzdWx0IiwibmF0UmVzdWx0Iiwic2hhcmluZ0Zyb21XbGFuaW50VG9XbGFudXNiIiwiaW5jbHVkZXMiLCJzaGFyaW5nVG9XbGFuaW50RnJvbVdsYW51c2JFc3RhYmxpc2hlZCIsIm5hdEZvcldsYW5pbnQiLCJlbmFibGVJbnRlcm5ldFNoYXJpbmdXaWZpQ2xpZW50SW5TeXN0ZW0iLCJpcHRhYmxlc0NvbW1hbmRzIiwiam9pbiIsImRpc2FibGVJbnRlcm5ldFNoYXJpbmdXaWZpQ2xpZW50SW5TeXN0ZW0iLCJpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzIiwiZXhlY3V0ZUFuZFJlcGVhdCIsImNvbW1hbmQiLCJmb3JFYWNoIiwiZ2V0Q2FwdGl2ZVBvcnRhbFN0YXR1c0Zyb21TeXN0ZW0iLCJkZXRlY3RlZCIsInJlc3BvbnNlIiwic3RhdHVzTWF0Y2giLCJtYXRjaCIsImxvY2F0aW9uTWF0Y2giLCJlZmZlY3RpdmVVcmxNYXRjaCIsInN0YXR1c0NvZGUiLCJwYXJzZUludCIsImVmZmVjdGl2ZVVybCIsInJ1bldpZmlNb2RlU2NyaXB0Iiwic2NyaXB0UGF0aCIsIm1ldGhvZHMiLCJhZG1pbklkIiwibmV3UGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNoZWNrIiwib2xkZW1haWwiLCJlbWFpbHMiLCJlbWFpbFJlZyIsInJlbW92ZUVtYWlsIiwiYWRkcmVzcyIsImFkZEVtYWlsIiwicmVzdWx0IiwibWVzc2FnZSIsInJlbW92ZVVzZXJzRnJvbVJvbGVzIiwicmVzIiwic3RvcmFnZVVzYWdlIiwidG9GaXhlZCIsInN0b3JhZ2VUb3RhbCIsInBlcmNlbnRhZ2UiLCJkYXRhIiwiUmVnRXhwIiwiU1NJRCIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5ld1NTSUQiLCJlbmNvZGVkTmV3U1NJRCIsIkJ1ZmZlciIsIm5ld0RhdGEiLCJjaGFubmVsIiwibmV3Q2hhbm5lbCIsInNlcmlhbCIsIm9wZXJhdG9yTmFtZSIsInNpZ25hbFN0cmVuZ3RoIiwic3RyZW5ndGhWYWx1ZSIsInF1YWxpdHkiLCJBUE4iLCJBUE5Vc2VyIiwiQVBOUGFzc3dvcmQiLCJzaW1TdGF0dXNSZXN1bHQiLCJleGVjdXRlQ29tbWFuZCIsInNpbVN0YXR1cyIsIlNpbVBpbiIsIlBJTiIsImlzU2hhcmluZyIsInJlczIiLCJpc09ubGluZSIsImpzb24iLCJKU09OIiwicGFyc2UiLCJyZWFzb24iLCJ3aWZpIiwiaW5pdCIsImlmYWNlIiwicmVqZWN0Iiwic2NhbiIsIm5ldHdvcmtzIiwidW5pcXVlTmV0d29ya3MiLCJNYXAiLCJuZXR3b3JrIiwic3RyZW5ndGgiLCJtYWMiLCJrZXkiLCJoYXMiLCJnZXQiLCJzZXQiLCJzZWN1cml0eSIsInVuaXF1ZU5ldHdvcmtzQXJyYXkiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJjdXJyZW50Q29ubmVjdGlvbkluZm8iLCJjb25uZWN0aW9uQ29uZmlnIiwiZGlzY29ubmVjdCIsImNvbm5lY3RSZXN1bHQiLCJjb25uZWN0IiwiaXNWZXJpZmllZCIsImRlbGV0ZUNvbm5lY3Rpb24iLCJzaGFyaW5nRnJvbVdsYW5pbnRUb0V0aCIsInNoYXJpbmdGcm9tV2xhbnVzYlRvRXRoIiwic2hhcmluZ1RvV2xhbmludEZyb21FdGhFc3RhYmxpc2hlZCIsInNoYXJpbmdUb1dsYW51c2JGcm9tRXRoRXN0YWJsaXNoZWQiLCJuYXRGb3JXbGFudXNiIiwiY2FsbGJhY2siLCJzdGRvdXQiLCJzdGRlcnIiLCJkb25lQ2FsbGJhY2siLCJ0YXNrc0NvbXBsZXRlZCIsImFsbG93TWFjQ29tbWFuZCIsImJsb2NrT3RoZXJzQ29tbWFuZCIsImxpbmVzIiwic3BsaXQiLCJydWxlTnVtYmVycyIsInJlZHVjZSIsImFjYyIsImxpbmUiLCJpbmRleCIsInRvTG93ZXJDYXNlIiwicnVsZU51bWJlciIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJyZW1vdmVFcnJvciIsInJlbW92ZVN0ZG91dCIsInJlbW92ZVN0ZGVyciIsInNhdmVFcnJvciIsInNhdmVTdGRvdXQiLCJzYXZlU3RkZXJyIiwic2hhcmluZ0Zyb21XbGFuaW50VG9Xd2FuIiwic2hhcmluZ0Zyb21XbGFudXNiVG9Xd2FuIiwic2hhcmluZ1RvV2xhbmludEZyb21Xd2FuRXN0YWJsaXNoZWQiLCJzaGFyaW5nVG9XbGFudXNiRnJvbVd3YW5Fc3RhYmxpc2hlZCIsImRldmljZVNlcmlhbCIsInB1YmxpYyIsImRldmljZVRva2VuIiwibW9vZGxlQVBJVG9rZW4iLCJjbG91ZFVSTCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwibnBtUmVxdWVzdE9wdGlvbnMiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJ0aW1lb3V0IiwicG9zdCIsInJlc3VsdENvbnRlbnQiLCJjb250ZW50IiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLENBQUNDLFFBQVgsRUFBcUI7QUFDcEJDLFFBQU0sQ0FBQ0MsT0FBUCxDQUFlLFlBQWYsRUFBNkIsMk5BQTdCO0FBRUFELFFBQU0sQ0FBQ0UsT0FBUCxDQUFlLFlBQWYs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QW94Q0E7QUFDQSxDQS9sREQsRTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHRWxTLE1BQU0sQ0FBQzJCLE9BQVAsQ0FBZSxVQUFmLEVBQTJCLFlBQVk7QUFDdENNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVVsQyxNQUFNLENBQUM2QyxLQUFQLENBQWFoQixJQUFiLEdBQW9CaUIsS0FBcEIsRUFBdEI7QUFDQyxTQUFPOUMsTUFBTSxDQUFDNkMsS0FBUCxDQUFhaEIsSUFBYixFQUFQO0FBQ0QsQ0FIRCxFOzs7Ozs7Ozs7OztBQ1RGLElBQUk3QixNQUFKO0FBQVdlLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ25CLFFBQU0sQ0FBQ29CLENBQUQsRUFBRztBQUFDcEIsVUFBTSxHQUFDb0IsQ0FBUDtBQUFTOztBQUFwQixDQUE1QixFQUFrRCxDQUFsRDtBQUFxREwsTUFBTSxDQUFDSSxJQUFQLENBQVksd0JBQVo7QUFBc0NKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLG9DQUFaO0FBQWtESixNQUFNLENBQUNJLElBQVAsQ0FBWSx5QkFBWjtBQUF1Q0osTUFBTSxDQUFDSSxJQUFQLENBQVksdUJBQVo7QUFBcUNKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHNCQUFaO0FBQW9DSixNQUFNLENBQUNJLElBQVAsQ0FBWSwyQkFBWjtBQUF5Q0osTUFBTSxDQUFDSSxJQUFQLENBQVksc0JBQVo7QUFZalQ7QUFDQTtBQUdBO0FBRUE7QUFHQW5CLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlLE1BQU07QUFDcEJ5QixTQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQURvQixDQUtuQjtBQUVEO0FBQ0E7QUFDQTtBQUNBLENBVkQsRSIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXHRJbmplY3QucmF3SGVhZChcIm1ldGFMb2FkZXJcIiwgJzxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT0wLCB3aWR0aD1kZXZpY2Utd2lkdGgsIGhlaWdodD1kZXZpY2UtaGVpZ2h0XCIvPjxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiPlx0PG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCI+Jyk7XG5cblx0SW5qZWN0LnJhd0JvZHkoXCJodG1sTG9hZGVyXCIsIEFzc2V0cy5nZXRUZXh0KCdhcHBfbG9hZGVyLmh0bWwnKSk7XG59XG5cbmlmIChNZXRlb3IuaXNDbGllbnQpIHtcblx0TWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24oKSB7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQkKCcuaW5kZXgtLWljb24nKS5hZGRDbGFzcygnYW5pbWF0ZWQtaWNvbicpO1xuXG5cdFx0XHQkKFwiI2luamVjdC1sb2FkZXItd3JhcHBlclwiKS5mYWRlT3V0KDUwMCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdCQoJy5pbmRleC0taWNvbicpLnJlbW92ZUNsYXNzKCdhbmltYXRlZC1pY29uJyk7XG5cdFx0fSk7XG5cdFx0fSwgNTAwKTtcblx0fSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuIFxuZXhwb3J0IGNvbnN0IEFwcHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignaG9tZS1hcHBzJyk7XG5cblxuXG5BcHBzLmFsbG93KHtcblxuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHVwZGF0ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gdHJ1ZX0sXG5cdHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gdHJ1ZX0sXG5cblx0Ly8gaW5zZXJ0OiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHVwZGF0ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyByZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH1cbn0pO1xuXG4vLyBQdWJsaWNhdGlvbnNcblxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbEFwcHMnLCBmdW5jdGlvbiBhcHBzUHVibGljYXRpb24oKSB7XG4gICAgcmV0dXJuIEFwcHMuZmluZCgpO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgU3luY2hyb25pemF0aW9ucyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdob21lLXN5bmNocm9uaXphdGlvbnMnKTtcblxuXG5cblN5bmNocm9uaXphdGlvbnMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0dXBkYXRlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cblx0Ly8gaW5zZXJ0OiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHVwZGF0ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyByZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH1cbn0pO1xuXG4vLyBQdWJsaWNhdGlvbnNcblxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbFN5bmNocm9uaXphdGlvbnMnLCBmdW5jdGlvbiBzeW5jaHJvbml6YXRpb25zUHVibGljYXRpb24oKSB7XG4gICAgcmV0dXJuIFN5bmNocm9uaXphdGlvbnMuZmluZCgpO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5cbi8vIHZhciB1c2Vyc0RCXHQ9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vLyB2YXIgY29sbGVjdGlvblx0PSB1c2Vyc0RCLm9wZW4oJ3VzZXJzJyk7XG5cblxuLy9jb25zdCBkYXRhYmFzZSA9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vL2NvbnN0IGNvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vZXhwb3J0IGNvbnN0IFVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vLyBTaGFyaW5nIHRoZSBzYW1lIEFjY291bnQgY29sbGVjdGlvbiB0aGFuIGJlZWtlZS1saXZlXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0Ly8gY2hlY2sgdGhhdCB0aGUgdXNlcklkIHNwZWNpZmllZCBpcyBhZG1pblxuaXNBZG1pbiA9IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRjb25zb2xlLmxvZyhcImlzYWRtaW5cIik7XG4gIHJldHVybiBSb2xlcy51c2VySXNJblJvbGUoTWV0ZW9yLnVzZXIoKSwgJ2FkbWluJyk7XG59XG5cblxuLy8gUHVibGlzaCBSb2xlcyB0byBjbGllbnRcbk1ldGVvci5wdWJsaXNoKG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgcmV0dXJuIE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKHsgJ3VzZXIuX2lkJzogdGhpcy51c2VySWQgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5yZWFkeSgpXG4gIH1cbn0pO1xuXG5NZXRlb3IucHVibGlzaChudWxsLCBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoKTtcblxufSk7XG5cbiAgLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICAvLyBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gIC8vICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIC8vIH0pO1xuXG4vLyBTZXJ2ZXIyID0gRERQLmNvbm5lY3QoXCJodHRwOi8vYmVla2VlLmJveDo4M1wiKTtcbi8vIEFjY291bnRzLmNvbm5lY3Rpb24gPSBTZXJ2ZXIyO1xuXG5cbi8vdmFyIGRhdGFiYXNlID0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vTWV0ZW9yLnVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vL2V4cG9ydCBjb25zdCBVc2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdhcHBzJyk7XG5cblxuICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcbiAgLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICAvLyBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gIC8vICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIC8vIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuZXhwb3J0IGNvbnN0IFdpZmlDbGllbnRNb2RlU3RhdGUgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignd2lmaUNsaWVudE1vZGVTdGF0ZScpO1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cdE1ldGVvci5wdWJsaXNoKCd3aWZpQ2xpZW50TW9kZVN0YXRlJywgZnVuY3Rpb24gd2lmaUNsaWVudE1vZGVTdGF0ZVB1YmxpY2F0aW9uKCkge1xuXHRcdHJldHVybiBXaWZpQ2xpZW50TW9kZVN0YXRlLmZpbmQoeyBfaWQ6ICd3aWZpLWNsaWVudC1tb2RlLXN0YXRlJyB9KTtcblx0fSk7XG59XG4iLCJpbXBvcnQgeyBBcHBzIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvYXBwcy5qcyc7XG5cblx0Ly8gQ3JlYXRlIHRoZSByb2xlc1xuXHRSb2xlcy5jcmVhdGVSb2xlKCdtYW5hZ2VyJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXG5cbi8vICMjIyAgQ3JlYXRlIGFkbWluIHVzZXIgYXQgZmlyc3Qgc3RhcnQgICMjI1xuXG5cbmlmIChNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblx0XG5cdC8vIENyZWF0ZSB0aGUgcm9sZVxuXHRSb2xlcy5jcmVhdGVSb2xlKCdtYW5hZ2VyJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXHRSb2xlcy5jcmVhdGVSb2xlKCdhZG1pbicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblxuXHR2YXIgYWRtaW5QYXNzd29yZCA9IE1ldGVvci5zZXR0aW5ncy5hZG1pblBhc3N3b3JkO1xuXG5cdHZhciB1c2VycyA9IFtcblx0XHR7dXNlcm5hbWU6XCJhZG1pblwiLHJvbGVzOlsnYWRtaW4nXX0sXG5cdF07XG5cblx0Xy5lYWNoKHVzZXJzLCBmdW5jdGlvbiAodXNlcikge1xuXHRcdHZhciBpZDtcblx0XHRpZCA9IEFjY291bnRzLmNyZWF0ZVVzZXIoe1xuXHRcdFx0dXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG5cdFx0XHRlbWFpbDogXCJBZG1pblwiLFxuXHRcdFx0cGFzc3dvcmQ6IGFkbWluUGFzc3dvcmQsXG5cdFx0XHRwcm9maWxlOntuYW1lOlwiQWRtaW5cIn1cblx0XHR9KTtcblxuXHRcdGlmICh1c2VyLnJvbGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyhpZCwgdXNlci5yb2xlcyk7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG5pZiAoQXBwcy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuXG5cdHZhciBkZWZhdWx0QXBwcyA9IFtcblx0XHR7bmFtZTpcIkxpdmVcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MywgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL2xpdmUuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLWxpdmUucG5nXCIsIGRlc2NyaXB0aW9uOlwiQmVla2VlIExpdmUgcHJvbW90ZSByZWFsLXRpbWUgaW50ZXJhY3Rpb24gYnkgYWxsb3dpbmcgbGVhcm5lcnMgdG8gZXhwcmVzcyB0aGVtc2VsdmVzIGFza2luZyBxdWVzdGlvbnMsIHBvc3RpbmcgcGhvdG9zIG9yIHNoYXJpbmcgZmlsZXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjEuNFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiUmVzb3VyY2VzXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjcsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly9yZXNvdXJjZXMuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXJlc291cmNlcy5wbmdcIiwgZGVzY3JpcHRpb246XCJXaXRoIEJlZWtlZSBSZXNvdXJjZXMsIHlvdSBjYW4gZWFzaWx5IHNoYXJlIGZpbGVzIHdpdGggeW91ciBsZWFybmVycy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJXaGVlbFwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOnRydWUsIG9yZGVyOjksIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjAuN1wiLCB1cmw6XCJodHRwOi8vd2hlZWwuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXdoZWVsLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBXaGVlbCBpcyBhIHNpbXBsZSByYW5kb20gcGlja2VyIHdoZWVsIHRoYXQgYWxsb3cgeW91IHRvIHBpY2sgdXAgYSByYW5kb20gbmFtZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC44XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJUaW1lclwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo4LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vdGltZXIuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXRpbWVyLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBUaW1lciBpcyBhIHNpbXBsZSB0aW1lciB0aGF0IGxldHMgeW91ciBsZWFybmVycyBrbm93IGhvdyBtdWNoIHRpbWUgdGhleSBoYXZlIGxlZnQuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiTW9vZGxlXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MSwgZG9jX3VzZXI6XCJtb29kbGVfdGVhY2hlcmRvYy5wZGZcIiwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vbW9vZGxlLmJlZWtlZS5ib3hcIiwgaWNvbjpcIm1vb2RsZS5wbmdcIiwgZGVzY3JpcHRpb246XCJNb29kbGUgaXMgYSBmcmVlLCBvbmxpbmUgTGVhcm5pbmcgTWFuYWdlbWVudCBzeXN0ZW0gZW5hYmxpbmcgZWR1Y2F0b3JzIHRvIGNyZWF0ZSB0aGVpciBvd24gcHJpdmF0ZSB3ZWJzaXRlIGZpbGxlZCB3aXRoIGR5bmFtaWMgY291cnNlcyB0aGF0IGV4dGVuZCBsZWFybmluZywgYW55IHRpbWUsIGFueXdoZXJlLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIzLjExLjJcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIktvbGlicmlcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjoyLCBkb2NfdXNlcjpcImtvbGlicmlfdXNlcmRvYy5wZGZcIiwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8va29saWJyaS5iZWVrZWUuYm94XCIsIGljb246XCJrb2xpYnJpLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIktvbGlicmkgaXMgYW4gb3Blbi1zb3VyY2UgZWR1Y2F0aW9uYWwgcGxhdGZvcm0gc3BlY2lhbGx5IGRlc2lnbmVkIHRvIHByb3ZpZGUgb2ZmbGluZSBhY2Nlc3MgdG8gYSB3aWRlIHJhbmdlIG9mIHF1YWxpdHksIG9wZW5seSBsaWNlbnNlZCBlZHVjYXRpb25hbCByZXNvdXJjZXMgaW4gbG93LXJlc291cmNlIGNvbnRleHRzIGxpa2UgcnVyYWwgc2Nob29scywgcmVmdWdlZSBjYW1wcywgb3JwaGFuYWdlcywgYW5kIGFsc28gaW4gbm9uLWZvcm1hbCBzY2hvb2wgcHJvZ3JhbXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMTQuN1wiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdC8vIHtuYW1lOlwiRXRoZXJwYWRcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo1LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vZXRoZXJwYWQuYmVla2VlLmJveFwiLCBpY29uOlwiZXRoZXJwYWQucG5nXCIsIGRlc2NyaXB0aW9uOlwiRXRoZXJwYWQgYWxsb3dzIHlvdSB0byBlZGl0IGRvY3VtZW50cyBjb2xsYWJvcmF0aXZlbHkgaW4gcmVhbC10aW1lLCBtdWNoIGxpa2UgYSBsaXZlIG11bHRpLXBsYXllciBlZGl0b3IgdGhhdCBydW5zIGluIHlvdXIgYnJvd3Nlci4gV3JpdGUgYXJ0aWNsZXMsIHByZXNzIHJlbGVhc2VzLCB0by1kbyBsaXN0cywgZXRjLiB0b2dldGhlciB3aXRoIHlvdXIgZnJpZW5kcywgZmVsbG93IHN0dWRlbnRzIG9yIGNvbGxlYWd1ZXMsIGFsbCB3b3JraW5nIG9uIHRoZSBzYW1lIGRvY3VtZW50IGF0IHRoZSBzYW1lIHRpbWUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjEuOC4xNFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiU3Rvcm1cIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo0LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vc3Rvcm0uYmVla2VlLmJveFwiLCBpY29uOlwic3Rvcm0ucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGFuZCBhbmltYXRlIGxpdmUgc3VydmV5cywgYnJhaW5zdG9ybXMgYW5kIHF1aXp6ZXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuNC41XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJQYWRcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo1LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vcGFkLmJlZWtlZS5ib3hcIiwgaWNvbjpcInBhZC5wbmdcIiwgZGVzY3JpcHRpb246XCJDcmVhdGUgY29sbGFib3JhdGl2ZSB3YWxscyB0byBzaGFyZSBhbmQgb3JnYW5pemUgY29udGVudC5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC44LjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIkJ1enplclwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6dHJ1ZSwgb3JkZXI6NiwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2J1enplci5iZWVrZWUuYm94XCIsIGljb246XCJidXp6ZXIucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGEgdmlydHVhbCBnYW1pbmcgcm9vbSBhcm91bmQgYSBjb25uZWN0ZWQgYnV6emVyLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjIuNFwiLCBoaWRkZW46ZmFsc2V9LFxuXG5cdF07XG5cblx0Xy5lYWNoKGRlZmF1bHRBcHBzLCBmdW5jdGlvbiAoZGVmYXVsdEFwcHMpIHtcblx0XHRBcHBzLmluc2VydChkZWZhdWx0QXBwcyk7XG5cdH0pO1xufSIsImltcG9ydCB7IEhUVFAgfSBmcm9tICdtZXRlb3IvaHR0cCdcbmltcG9ydCB7IFdpZmlDbGllbnRNb2RlU3RhdGUgfSBmcm9tICcuLi9pbXBvcnRzL2FwaS93aWZpQ2xpZW50TW9kZVN0YXRlLmpzJztcblxuTWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24oKSB7XG5cblx0aWYgKE1ldGVvci5pc1NlcnZlcikge1xuXG5cdHZhciBmcyA9IE5wbS5yZXF1aXJlKCdmcycpO1xuXHRleGVjID0gTnBtLnJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5leGVjO1xuXHRjbWQgPSBNZXRlb3Iud3JhcEFzeW5jKGV4ZWMpO1xuXG5cdHZhciB3aWZpU2V0dGluZ3NQYXRoID0gTWV0ZW9yLnNldHRpbmdzLndpZmlTZXR0aW5nc1BhdGg7XG5cdHZhciBjb25maWdQYXRoID0gTWV0ZW9yLnNldHRpbmdzLmNvbmZpZ1BhdGg7XG5cdHZhciBzY3JpcHRzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5zY3JpcHRzUGF0aCB8fCAnL2hvbWUvYmVla2VlL3NjcmlwdHMnO1xuXHR2YXIgd2lmaUNsaWVudEVuYWJsZVNjcmlwdE5hbWUgPSAnc3dpdGNoX3dpZmlfdG9fY2xpZW50LnNoJztcblx0dmFyIHdpZmlDbGllbnREaXNhYmxlU2NyaXB0TmFtZSA9ICdzd2l0Y2hfd2lmaV90b19hcC5zaCc7XG5cdHZhciB3aWZpQ2xpZW50TW9kZVN0YXRlUGF0aCA9IE1ldGVvci5zZXR0aW5ncy53aWZpQ2xpZW50TW9kZVN0YXRlUGF0aCB8fCBgJHtzY3JpcHRzUGF0aH0vLndpZmktY2xpZW50LW1vZGUtc3RhdGVgO1xuXHRjb25zdCByZWFkbGluZSA9IHJlcXVpcmUoJ3JlYWRsaW5lJyk7XG5cblx0ZnVuY3Rpb24gc2hlbGxFc2NhcGUodmFsdWUpIHtcblx0XHRyZXR1cm4gYCcke1N0cmluZyh2YWx1ZSkucmVwbGFjZSgvJy9nLCBgJ1xcXFwnJ2ApfSdgO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzb2x2ZVNjcmlwdFBhdGgoc2NyaXB0TmFtZSkge1xuXHRcdHJldHVybiBgJHtzY3JpcHRzUGF0aH0vJHtzY3JpcHROYW1lfWA7XG5cdH1cblxuXHRmdW5jdGlvbiByZWFkV2lmaUNsaWVudE1vZGVTdGF0ZSgpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKCFmcy5leGlzdHNTeW5jKHdpZmlDbGllbnRNb2RlU3RhdGVQYXRoKSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3RhdGUgPSBmcy5yZWFkRmlsZVN5bmMod2lmaUNsaWVudE1vZGVTdGF0ZVBhdGgsICd1dGYtOCcpLnRyaW0oKTtcblxuXHRcdFx0aWYgKHN0YXRlID09PSAnZW5hYmxlZCcpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdGF0ZSA9PT0gJ2Rpc2FibGVkJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciByZWFkaW5nIFdpLUZpIGNsaWVudCBtb2RlIHN0YXRlOicsIGVycm9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGZ1bmN0aW9uIHdyaXRlV2lmaUNsaWVudE1vZGVTdGF0ZShlbmFibGVkKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMoXG5cdFx0XHRcdHdpZmlDbGllbnRNb2RlU3RhdGVQYXRoLFxuXHRcdFx0XHRlbmFibGVkID8gJ2VuYWJsZWRcXG4nIDogJ2Rpc2FibGVkXFxuJyxcblx0XHRcdFx0J3V0Zi04J1xuXHRcdFx0KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIHdyaXRpbmcgV2ktRmkgY2xpZW50IG1vZGUgc3RhdGU6JywgZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHBlcnNpc3RXaWZpQ2xpZW50TW9kZVN0YXRlKGVuYWJsZWQpIHtcblx0XHR3cml0ZVdpZmlDbGllbnRNb2RlU3RhdGUoZW5hYmxlZCk7XG5cdFx0V2lmaUNsaWVudE1vZGVTdGF0ZS51cHNlcnQoXG5cdFx0XHR7IF9pZDogJ3dpZmktY2xpZW50LW1vZGUtc3RhdGUnIH0sXG5cdFx0XHR7XG5cdFx0XHRcdCRzZXQ6IHtcblx0XHRcdFx0XHRlbmFibGVkOiBlbmFibGVkID09PSB0cnVlLFxuXHRcdFx0XHRcdHVwZGF0ZWRBdDogbmV3IERhdGUoKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRldGVjdFdpZmlBY2Nlc3NQb2ludE1vZGVGcm9tU3lzdGVtKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBoYXNXbGFuVXNiID0gY21kKCdpcCBsaW5rIHNob3cgd2xhbnVzYiA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2UnKS50b1N0cmluZygpLnRyaW0oKTtcblxuXHRcdFx0aWYgKGhhc1dsYW5Vc2IgIT09ICd0cnVlJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGhhc0FwQWRkcmVzcyA9IGNtZChcImlwIC00IGFkZHIgc2hvdyB3bGFudXNiIHwgZ3JlcCAtcSAnMTBcXFxcLjFcXFxcLjBcXFxcLjEvMjQnICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIpLnRvU3RyaW5nKCkudHJpbSgpO1xuXG5cdFx0XHRyZXR1cm4gaGFzQXBBZGRyZXNzID09PSAndHJ1ZSc7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBkZXRlY3RpbmcgV2ktRmkgYWNjZXNzIHBvaW50IG1vZGUgZnJvbSBzeXN0ZW06JywgZXJyb3IpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGRldGVjdFdpZmlDbGllbnRNb2RlRnJvbVN5c3RlbSgpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGRldGVjdFdpZmlBY2Nlc3NQb2ludE1vZGVGcm9tU3lzdGVtKCkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBoYXNXbGFuVXNiID0gY21kKCdpcCBsaW5rIHNob3cgd2xhbnVzYiA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2UnKS50b1N0cmluZygpLnRyaW0oKTtcblxuXHRcdFx0aWYgKGhhc1dsYW5Vc2IgIT09ICd0cnVlJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG5tU3RhdGUgPSBjbWQoXCJubWNsaSAtdCAtZiBERVZJQ0UsU1RBVEUgZGV2aWNlIHN0YXR1cyAyPi9kZXYvbnVsbCB8IGF3ayAtRjogJyQxPT1cXFwid2xhbnVzYlxcXCIge3ByaW50ICQyOyBleGl0fScgfHwgdHJ1ZVwiKS50b1N0cmluZygpLnRyaW0oKTtcblxuXHRcdFx0cmV0dXJuIC9eKGNvbm5lY3RlZHxkaXNjb25uZWN0ZWR8Y29ubmVjdGluZ3xwcmVwYXJpbmcpLy50ZXN0KG5tU3RhdGUpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgZGV0ZWN0aW5nIFdpLUZpIGNsaWVudCBtb2RlIGZyb20gc3lzdGVtOicsIGVycm9yKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRXaWZpQ2xpZW50TW9kZVN0YXRlKCkge1xuXHRcdGlmIChkZXRlY3RXaWZpQWNjZXNzUG9pbnRNb2RlRnJvbVN5c3RlbSgpKSB7XG5cdFx0XHRwZXJzaXN0V2lmaUNsaWVudE1vZGVTdGF0ZShmYWxzZSk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGV0ZWN0ZWRTdGF0ZSA9IGRldGVjdFdpZmlDbGllbnRNb2RlRnJvbVN5c3RlbSgpO1xuXHRcdHBlcnNpc3RXaWZpQ2xpZW50TW9kZVN0YXRlKGRldGVjdGVkU3RhdGUpO1xuXHRcdHJldHVybiBkZXRlY3RlZFN0YXRlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkKCkge1xuXHRcdGlmICghZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpKSB7XG5cdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCd3aWZpLWNsaWVudC1tb2RlLWRpc2FibGVkJywgJ0VuYWJsZSBXaS1GaSBjbGllbnQgbW9kZSBiZWZvcmUgc2Nhbm5pbmcgb3IgY29ubmVjdGluZy4nKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDbGllbnRTU0lERnJvbVN5c3RlbSgpIHtcblx0XHRsZXQgc3NpZDtcblx0XHR0cnkge1xuXHRcdFx0c3NpZCA9IGNtZCgnaXdnZXRpZCAtciB3bGFudXNiIDI+L2Rldi9udWxsIHx8IHRydWUnKS50cmltKCk7XG5cblx0XHRcdGlmICghc3NpZCkge1xuXHRcdFx0XHRzc2lkID0gY21kKCdubWNsaSAtZyBHRU5FUkFMLkNPTk5FQ1RJT04gZGV2aWNlIHNob3cgd2xhbnVzYiAyPi9kZXYvbnVsbCB8IGhlYWQgLW4gMSB8fCB0cnVlJykudHJpbSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3NpZCA9PT0gJy0tJykge1xuXHRcdFx0XHRzc2lkID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2Ygc3NpZCA9PT0gJ3N0cmluZycgJiYgc3NpZCAhPT0gJycpIHtcblx0XHRcdFx0cmV0dXJuIHNzaWQ7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciByZXRyaWV2aW5nIGNsaWVudCBTU0lEOicsIGVycm9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJ05vdCBjb25uZWN0ZWQnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q2xpZW50QlNTSURGcm9tU3lzdGVtKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBic3NpZCA9IGNtZChcIml3IGRldiB3bGFudXNiIGxpbmsgMj4vZGV2L251bGwgfCBhd2sgJy9Db25uZWN0ZWQgdG8vIHtwcmludCAkMzsgZXhpdH0nIHx8IHRydWVcIikudHJpbSgpO1xuXG5cdFx0XHRpZiAoYnNzaWQgJiYgYnNzaWQgIT09ICdOb3QgY29ubmVjdGVkJykge1xuXHRcdFx0XHRyZXR1cm4gYnNzaWQudG9VcHBlckNhc2UoKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIHJldHJpZXZpbmcgY2xpZW50IEJTU0lEOicsIGVycm9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENsaWVudENvbm5lY3Rpb25JbmZvRnJvbVN5c3RlbSgpIHtcblx0XHRjb25zdCBzc2lkID0gZ2V0Q2xpZW50U1NJREZyb21TeXN0ZW0oKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRzc2lkOiBzc2lkLFxuXHRcdFx0YnNzaWQ6IHNzaWQgPT09ICdOb3QgY29ubmVjdGVkJyA/IG51bGwgOiBnZXRDbGllbnRCU1NJREZyb21TeXN0ZW0oKVxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiB3YWl0KG1pbGxpc2Vjb25kcykge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0c2V0VGltZW91dChyZXNvbHZlLCBtaWxsaXNlY29uZHMpO1xuXHRcdH0pO1xuXHR9XG5cblx0XHRhc3luYyBmdW5jdGlvbiB3YWl0Rm9yQ2xpZW50U1NJRChleHBlY3RlZFNTSUQsIHRpbWVvdXRNaWxsaXNlY29uZHMpIHtcblx0XHRcdGNvbnN0IGRlYWRsaW5lID0gRGF0ZS5ub3coKSArIHRpbWVvdXRNaWxsaXNlY29uZHM7XG5cblx0XHRcdHdoaWxlIChEYXRlLm5vdygpIDwgZGVhZGxpbmUpIHtcblx0XHRcdFx0aWYgKGdldENsaWVudFNTSURGcm9tU3lzdGVtKCkgPT09IGV4cGVjdGVkU1NJRCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0YXdhaXQgd2FpdCgxMDAwKTtcblx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNXaWZpQ2xpZW50RnJvbVN5c3RlbSgpIHtcblx0XHRcdGlmICghZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpKSB7XG5cdFx0XHRcdHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcblx0XHRcdHZhciBsaXN0TmF0UnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLXQgbmF0IC1TIFBPU1RST1VUSU5HJztcblxuXHRcdFx0dmFyIGZvcndhcmRSZXN1bHQgPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXHRcdFx0dmFyIG5hdFJlc3VsdCA9IGNtZChsaXN0TmF0UnVsZXNDb21tYW5kKTtcblxuXHRcdFx0aWYgKCFmb3J3YXJkUmVzdWx0KSB7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2NvbW1hbmQtZXhlY3V0aW9uLWVycm9yJywgJ1RoZSBGT1JXQVJEIGNoYWluIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC4nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFuYXRSZXN1bHQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignY29tbWFuZC1leGVjdXRpb24tZXJyb3InLCAnVGhlIFBPU1RST1VUSU5HIGNoYWluIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC4nKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHNoYXJpbmdGcm9tV2xhbmludFRvV2xhbnVzYiA9IGZvcndhcmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd2xhbmludCAtbyB3bGFudXNiIC1qIEFDQ0VQVCcpO1xuXHRcdFx0dmFyIHNoYXJpbmdUb1dsYW5pbnRGcm9tV2xhbnVzYkVzdGFibGlzaGVkID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFudXNiIC1vIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcpO1xuXHRcdFx0dmFyIG5hdEZvcldsYW5pbnQgPSBuYXRSZXN1bHQuaW5jbHVkZXMoJy1BIFBPU1RST1VUSU5HIC1zIDEwLjAuMC4wLzI0IC1vIHdsYW51c2IgLWogTUFTUVVFUkFERScpO1xuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdHNoYXJpbmdGcm9tV2xhbmludFRvV2xhbnVzYiAmJlxuXHRcdFx0XHRzaGFyaW5nVG9XbGFuaW50RnJvbVdsYW51c2JFc3RhYmxpc2hlZCAmJlxuXHRcdFx0XHRuYXRGb3JXbGFuaW50XG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBlbmFibGVJbnRlcm5ldFNoYXJpbmdXaWZpQ2xpZW50SW5TeXN0ZW0oKSB7XG5cdFx0XHRlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblxuXHRcdFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgd2xhbmludCAtbyB3bGFudXNiIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd2xhbmludCAtbyB3bGFudXNiIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgd2xhbnVzYiAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIHdsYW51c2IgLW8gd2xhbmludCAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLXQgbmF0IC1DIFBPU1RST1VUSU5HIC1zIDEwLjAuMC4wLzI0IC1vIHdsYW51c2IgLWogTUFTUVVFUkFERSAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC10IG5hdCAtQSBQT1NUUk9VVElORyAtcyAxMC4wLjAuMC8yNCAtbyB3bGFudXNiIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHRcdGNtZChpcHRhYmxlc0NvbW1hbmRzKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGRpc2FibGVJbnRlcm5ldFNoYXJpbmdXaWZpQ2xpZW50SW5TeXN0ZW0oKSB7XG5cdFx0XHR2YXIgaXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSB3bGFudXNiIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbnVzYiAtLW91dC1pbnRlcmZhY2Ugd2xhbmludCAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1zb3VyY2UgMTAuMC4wLjAvMjQgLS1vdXQtaW50ZXJmYWNlIHdsYW51c2IgLWogTUFTUVVFUkFERSdcblx0XHRcdF07XG5cblx0XHRcdGZ1bmN0aW9uIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCkge1xuXHRcdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRjbWQoY29tbWFuZCk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aXB0YWJsZXNEZWxldGVDb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG5cdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldENhcHRpdmVQb3J0YWxTdGF0dXNGcm9tU3lzdGVtKCkge1xuXHRcdFx0Y29uc3Qgc3NpZCA9IGdldENsaWVudFNTSURGcm9tU3lzdGVtKCk7XG5cblx0XHRpZiAoc3NpZCA9PT0gJ05vdCBjb25uZWN0ZWQnKSB7XG5cdFx0XHRyZXR1cm4geyBkZXRlY3RlZDogZmFsc2UsIHVybDogbnVsbCwgc3NpZDogc3NpZCB9O1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGNtZChcblx0XHRcdFx0J2N1cmwgLS1pbnRlcmZhY2Ugd2xhbnVzYiAtcyAtbSA4IC1MIC1EIC0gLW8gL2Rldi9udWxsIC13IFwiXFxcXG5DVVJMX0VGRkVDVElWRV9VUkw6JXt1cmxfZWZmZWN0aXZlfVxcXFxuXCIgaHR0cDovL2Nvbm5lY3Rpdml0eWNoZWNrLmdzdGF0aWMuY29tL2dlbmVyYXRlXzIwNCB8fCB0cnVlJ1xuXHRcdFx0KS50b1N0cmluZygpO1xuXHRcdFx0Y29uc3Qgc3RhdHVzTWF0Y2ggPSByZXNwb25zZS5tYXRjaCgvSFRUUFxcL1swLTkuXStcXHMrKFxcZHszfSkvKTtcblx0XHRcdGNvbnN0IGxvY2F0aW9uTWF0Y2ggPSByZXNwb25zZS5tYXRjaCgvXltMbF1vY2F0aW9uOlxccyooLispJC9tKTtcblx0XHRcdGNvbnN0IGVmZmVjdGl2ZVVybE1hdGNoID0gcmVzcG9uc2UubWF0Y2goL0NVUkxfRUZGRUNUSVZFX1VSTDooLispJC9tKTtcblx0XHRcdGNvbnN0IHN0YXR1c0NvZGUgPSBzdGF0dXNNYXRjaCA/IHBhcnNlSW50KHN0YXR1c01hdGNoWzFdLCAxMCkgOiBudWxsO1xuXHRcdFx0bGV0IHVybCA9IGxvY2F0aW9uTWF0Y2ggPyBsb2NhdGlvbk1hdGNoWzFdLnRyaW0oKSA6IG51bGw7XG5cdFx0XHRjb25zdCBlZmZlY3RpdmVVcmwgPSBlZmZlY3RpdmVVcmxNYXRjaCA/IGVmZmVjdGl2ZVVybE1hdGNoWzFdLnRyaW0oKSA6IG51bGw7XG5cblx0XHRcdGlmICh1cmwgJiYgL15cXC9cXC8vLnRlc3QodXJsKSkge1xuXHRcdFx0XHR1cmwgPSBgaHR0cDoke3VybH1gO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodXJsICYmICEvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KHVybCkpIHtcblx0XHRcdFx0dXJsID0gJ2h0dHA6Ly9uZXZlcnNzbC5jb20nO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodXJsICYmICEvbmV2ZXJzc2xcXC5jb20vaS50ZXN0KHVybCkgJiYgIS9jb25uZWN0aXZpdHljaGVja1xcLmdzdGF0aWNcXC5jb20vaS50ZXN0KHVybCkpIHtcblx0XHRcdFx0cmV0dXJuIHsgZGV0ZWN0ZWQ6IHRydWUsIHVybDogdXJsLCBzc2lkOiBzc2lkLCBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlIH07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChcblx0XHRcdFx0ZWZmZWN0aXZlVXJsICYmXG5cdFx0XHRcdCEvXmh0dHA6XFwvXFwvY29ubmVjdGl2aXR5Y2hlY2tcXC5nc3RhdGljXFwuY29tXFwvZ2VuZXJhdGVfMjA0XFwvPyQvaS50ZXN0KGVmZmVjdGl2ZVVybCkgJiZcblx0XHRcdFx0IS9eaHR0cDpcXC9cXC8oW14vXStcXC4pP25ldmVyc3NsXFwuY29tKFxcL3wkKS9pLnRlc3QoZWZmZWN0aXZlVXJsKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybiB7IGRldGVjdGVkOiB0cnVlLCB1cmw6IGVmZmVjdGl2ZVVybCwgc3NpZDogc3NpZCwgc3RhdHVzQ29kZTogc3RhdHVzQ29kZSB9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3RhdHVzQ29kZSA9PT0gMjA0KSB7XG5cdFx0XHRcdHJldHVybiB7IGRldGVjdGVkOiBmYWxzZSwgdXJsOiBudWxsLCBzc2lkOiBzc2lkLCBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlIH07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBkZXRlY3RpbmcgY2FwdGl2ZSBwb3J0YWw6JywgZXJyb3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiB7IGRldGVjdGVkOiBmYWxzZSwgdXJsOiBudWxsLCBzc2lkOiBzc2lkIH07XG5cdH1cblxuXHRmdW5jdGlvbiBydW5XaWZpTW9kZVNjcmlwdChzY3JpcHROYW1lKSB7XG5cdFx0Y29uc3Qgc2NyaXB0UGF0aCA9IHJlc29sdmVTY3JpcHRQYXRoKHNjcmlwdE5hbWUpO1xuXG5cdFx0aWYgKCFmcy5leGlzdHNTeW5jKHNjcmlwdFBhdGgpKSB7XG5cdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCd3aWZpLWNsaWVudC1tb2RlLXNjcmlwdC1taXNzaW5nJywgYE1pc3NpbmcgV2ktRmkgbW9kZSBzY3JpcHQ6ICR7c2NyaXB0UGF0aH1gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY21kKGB0aW1lb3V0IDQ1cyBiYXNoICR7c2hlbGxFc2NhcGUoc2NyaXB0UGF0aCl9YCk7XG5cdH1cblxuXHRpZiAoZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0oKSkge1xuXHRcdHBlcnNpc3RXaWZpQ2xpZW50TW9kZVN0YXRlKGZhbHNlKTtcblx0fSBlbHNlIHtcblx0XHRwZXJzaXN0V2lmaUNsaWVudE1vZGVTdGF0ZShkZXRlY3RXaWZpQ2xpZW50TW9kZUZyb21TeXN0ZW0oKSk7XG5cdH1cblxuXG5cdE1ldGVvci5tZXRob2RzKHtcblxuXHRcdCdhZG1pblNldE5ld1Bhc3N3b3JkJzogZnVuY3Rpb24oYWRtaW5JZCwgdXNlcklkLCBuZXdQYXNzd29yZCkgeyAvLyBBZG1pbiBjYW4gZm9yY2libHkgY2hhbmdlIHRoZSBwYXNzd29yZCBmb3IgYSB1c2VyXG5cdFx0XHRpZiAoUm9sZXMudXNlcklzSW5Sb2xlKGFkbWluSWQsICdhZG1pbicpKSB7XG5cdFx0XHRcdEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgbmV3UGFzc3dvcmQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2NyZWF0ZUFjY291bnQnOiBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQsIHByb2ZpbGUpIHtcblx0XHRcdHJldHVybiBBY2NvdW50cy5jcmVhdGVVc2VyKHtlbWFpbDplbWFpbCxwYXNzd29yZDpwYXNzd29yZCxwcm9maWxlOnByb2ZpbGV9KTsgLy8gQ2FsbGJhY2sgaXMgbm90IHN1cHBvcnRlZCBvbiBzZXJ2ZXItc2lkZVxuXHRcdH0sXG5cdFx0J2VkaXRBY2NvdW50JzogZnVuY3Rpb24odXNlcklkLCBlbWFpbCwgcGFzc3dvcmQsIHByb2ZpbGUpIHtcblx0XHRcdE1ldGVvci51c2Vycy51cGRhdGUoe19pZDogdXNlcklkfSwge1xuXHQgIFx0XHRcdCRzZXQ6IHtcblx0ICAgIFx0XHRcdCdlbWFpbHMuMC5hZGRyZXNzJzogZW1haWwsXG5cdCAgICBcdFx0XHRwcm9maWxlOiBwcm9maWxlXG5cdCAgXHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRpZiAocGFzc3dvcmQpIHtcblx0XHRcdFx0QWNjb3VudHMuc2V0UGFzc3dvcmQodXNlcklkLCBwYXNzd29yZCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnY2hhbmdlRW1haWwnOiBmdW5jdGlvbihlbWFpbCkge1xuXHRcdFx0dmFyIGVtYWlsID0gZW1haWw7XG5cdFx0XHRjaGVjayhlbWFpbCwgU3RyaW5nKTtcblx0XHRcdHZhciB1c2VyID0gTWV0ZW9yLnVzZXIoKTtcblx0XHRcdHZhciBvbGRlbWFpbCA9IHVzZXIuZW1haWxzO1xuXHRcdFx0dmFyIGVtYWlsUmVnID0gL14oW1xcdy1cXC5dK0AoW1xcdy1dK1xcLikrW1xcdy1dezIsNH0pPyQvO1xuXHRcdFx0aWYgKGVtYWlsUmVnLnRlc3QoZW1haWwpKSB7XG5cdFx0XHRpZihvbGRlbWFpbCAhPSBudWxsKXtcblx0XHRcdCAgQWNjb3VudHMucmVtb3ZlRW1haWwodXNlci5faWQsIHVzZXIuZW1haWxzWzBdLmFkZHJlc3MpXG5cdFx0XHR9XG5cdFx0XHRBY2NvdW50cy5hZGRFbWFpbCh1c2VyLl9pZCwgZW1haWwpO1xuXHRcdFx0cmV0dXJuIGVtYWlsO1xuXHRcdCAgfSBlbHNlXG5cdFx0ICByZXR1cm4gbnVsbFxuXHRcdCB9LFxuXHRcdCdkZWxldGVVc2VyJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRNZXRlb3IudXNlcnMucmVtb3ZlKHVzZXJJZCwgZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGVuIGRlbGV0aW5nIHVzZXIgOiBcIitlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnYWRkTWFuYWdlclJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsICdtYW5hZ2VyJyk7XG5cdFx0fSxcblx0XHQncmVtb3ZlTWFuYWdlclJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLnJlbW92ZVVzZXJzRnJvbVJvbGVzKHVzZXJJZCwgJ21hbmFnZXInKTtcblx0XHR9LFxuXHRcdCdhZGRBZG1pblJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsICdhZG1pbicpO1xuXHRcdH0sXG5cdFx0J3JlbW92ZUFkbWluUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMucmVtb3ZlVXNlcnNGcm9tUm9sZXModXNlcklkLCAnYWRtaW4nKTtcblx0XHR9LFxuXG5cdFx0Ly8gJ2dldFVzZWRTcGFjZSc6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0dmFyIHJlcztcblx0XHQvLyBcdHJlcyA9IGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpICsgXCIvIFwiICsgY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIikgKyBcIiAoXCIrY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIikrXCJ1c2VkKVwiO1xuXHRcdC8vIFx0cmV0dXJuIHJlcztcblx0XHQvLyB9LFxuXHRcdCdydW5Db21tYW5kJzogZnVuY3Rpb24ocGFzc3dvcmQsIGNvbW1hbmQpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJlY2hvIFwiK3Bhc3N3b3JkK1wiIHwgc3VkbyAtUyBcIitjb21tYW5kKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0VXNlZFNwYWNlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzID0ge307XG5cdFx0XHQvL3JlcyA9IGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpICsgXCIvIFwiICsgY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIikgKyBcIiAoXCIrY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIikrXCJ1c2VkKVwiO1xuXHRcdFx0cmVzLnN0b3JhZ2VVc2FnZSA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpXG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gcmVzLnN0b3JhZ2VVc2FnZS8xMDAwMDAwO1xuXHRcdFx0cmVzLnN0b3JhZ2VVc2FnZSA9IHJlcy5zdG9yYWdlVXNhZ2UudG9GaXhlZCgyKTtcblx0XHRcdHJlcy5zdG9yYWdlVG90YWwgPSBjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKVxuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IHJlcy5zdG9yYWdlVG90YWwvMTAwMDAwMDtcblx0XHRcdHJlcy5zdG9yYWdlVG90YWwgPSByZXMuc3RvcmFnZVRvdGFsLnRvRml4ZWQoMik7XG5cdFx0XHRyZXMucGVyY2VudGFnZSA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRTU0lEJzogZnVuY3Rpb24oKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3NzaWQ9KC4qKScpKTtcbiAgXHRcdFx0dmFyIFNTSUQgPSBtYXRjaFsxXTtcbiAgXHRcdFx0U1NJRCA9IGRlY29kZVVSSUNvbXBvbmVudChTU0lELnJlcGxhY2UoLy4uL2csICclJCYnKSlcbiAgXHRcdFx0cmV0dXJuIFNTSUQ7XG5cdFx0fSxcblx0XHQnc2V0U1NJRCc6IGZ1bmN0aW9uKG5ld1NTSUQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHRjb25zdCBlbmNvZGVkTmV3U1NJRCA9IG5ldyBCdWZmZXIobmV3U1NJRCkudG9TdHJpbmcoJ2hleCcpOyAvLyBDb252ZXJ0IGludG8gSGV4XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnc3NpZD0oLiopJykpWzFdLCBlbmNvZGVkTmV3U1NJRCk7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFdpZmlQYXNzd29yZCc6IGZ1bmN0aW9uKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdwYXNzd29yZD0oLiopJykpO1xuICBcdFx0XHR2YXIgcGFzc3dvcmQgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIHBhc3N3b3JkO1xuXHRcdH0sXG5cdFx0J3NldFdpZmlQYXNzd29yZCc6IGZ1bmN0aW9uKG5ld1Bhc3N3b3JkKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdwYXNzd29yZD0oLiopJykpWzFdLCBuZXdQYXNzd29yZCk7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFdpZmlDaGFubmVsJzogZnVuY3Rpb24oKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpKTtcbiAgXHRcdFx0dmFyIGNoYW5uZWwgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIGNoYW5uZWw7XG5cdFx0fSxcblx0XHQnc2V0V2lmaUNoYW5uZWwnOiBmdW5jdGlvbihuZXdDaGFubmVsKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdjaGFubmVsPSguKiknKSlbMV0sIG5ld0NoYW5uZWwpO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdC8vICdnZXRXaWZpQmFuZCc6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG5cdFx0Ly8gXHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ2JhbmQ9KC4qKScpKTtcblxuXHRcdC8vIFx0aWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0Ly8gXHQgIHJldHVybiBtYXRjaFsxXTtcblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHQgIC8vIFJldHVybiBkZWZhdWx0IHZhbHVlIGlmIHRoZSBiYW5kIHNldHRpbmcgZG9lcyBub3QgZXhpc3Rcblx0XHQvLyBcdCAgcmV0dXJuICcyLjRHSHonO1xuXHRcdC8vIFx0fVxuXHRcdC8vICAgfSxcblx0XHQvLyAnc2V0V2lmaUJhbmQnOiBmdW5jdGlvbihuZXdCYW5kKSB7XG5cdFx0Ly8gXHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcblx0XHQvLyBcdHZhciBiYW5kUmVnZXggPSBuZXcgUmVnRXhwKCdiYW5kPSguKiknKTtcblx0XHQvLyBcdHZhciBjaGFubmVsUmVnZXggPSBuZXcgUmVnRXhwKCdjaGFubmVsPSguKiknKTtcblx0XHQvLyBcdHZhciBtYXRjaEJhbmQgPSBkYXRhLm1hdGNoKGJhbmRSZWdleCk7XG5cdFx0Ly8gXHR2YXIgbWF0Y2hDaGFubmVsID0gZGF0YS5tYXRjaChjaGFubmVsUmVnZXgpO1xuXG5cdFx0Ly8gXHR2YXIgbmV3RGF0YSA9IGRhdGE7XG5cblx0XHQvLyBcdGlmIChtYXRjaEJhbmQpIHtcblx0XHQvLyBcdFx0Ly8gUmVwbGFjZSB0aGUgZXhpc3RpbmcgYmFuZCBzZXR0aW5nXG5cdFx0Ly8gXHRcdG5ld0RhdGEgPSBuZXdEYXRhLnJlcGxhY2UoYmFuZFJlZ2V4LCBgYmFuZD0ke25ld0JhbmR9YCk7XG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0XHQvLyBBcHBlbmQgdGhlIG5ldyBiYW5kIHNldHRpbmdcblx0XHQvLyBcdFx0bmV3RGF0YSA9IGAke25ld0RhdGEudHJpbSgpfVxcbmJhbmQ9JHtuZXdCYW5kfWA7XG5cdFx0Ly8gXHR9XG5cblx0XHQvLyBcdGlmIChtYXRjaENoYW5uZWwgJiYgbWF0Y2hDaGFubmVsWzFdKSB7XG5cdFx0Ly8gXHRcdC8vIENvbnZlcnQgdGhlIGNoYW5uZWwgdmFsdWUgdG8gYSBudW1iZXJcblx0XHQvLyBcdFx0dmFyIGN1cnJlbnRDaGFubmVsID0gcGFyc2VJbnQobWF0Y2hDaGFubmVsWzFdLCAxMCk7XG5cblx0XHQvLyBcdFx0Ly8gU2V0IGNoYW5uZWwgdG8gYSBkZWZhdWx0IDIuNEdIeiBjaGFubmVsIGlmIGN1cnJlbnQgY2hhbm5lbCBpcyBmb3IgNUdIelxuXHRcdC8vIFx0XHRpZiAobmV3QmFuZCA9PSBcIjIuNEdIelwiICYmIGN1cnJlbnRDaGFubmVsID4gMTQpIHtcblx0XHQvLyBcdFx0XHRuZXdEYXRhID0gbmV3RGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9MTFgKTtcblx0XHQvLyBcdFx0fSBlbHNlIGlmIChuZXdCYW5kID09IFwiNUdIelwiICYmIGN1cnJlbnRDaGFubmVsIDw9IDE0KSB7XG5cdFx0Ly8gXHRcdFx0bmV3RGF0YSA9IG5ld0RhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTQ0YCk7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH1cblxuXHRcdC8vIFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHQvLyB9LFxuXHRcdC8vICAgJ3NldFdpZmlCYW5kJzogZnVuY3Rpb24obmV3QmFuZCkge1xuXHRcdC8vIFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG5cdFx0Ly8gXHR2YXIgYmFuZFJlZ2V4ID0gbmV3IFJlZ0V4cCgnYmFuZD0oLiopJyk7XG5cdFx0Ly8gXHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKGJhbmRSZWdleCk7XG5cblx0XHQvLyBcdGlmIChtYXRjaCkge1xuXHRcdC8vIFx0ICAvLyBSZXBsYWNlIHRoZSBleGlzdGluZyBiYW5kIHNldHRpbmdcblx0XHQvLyBcdCAgdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoYmFuZFJlZ2V4LCBgYmFuZD0ke25ld0JhbmR9YCk7XG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0ICAvLyBBcHBlbmQgdGhlIG5ldyBiYW5kIHNldHRpbmdcblx0XHQvLyBcdCAgdmFyIG5ld0RhdGEgPSBgJHtkYXRhLnRyaW0oKX1cXG5iYW5kPSR7bmV3QmFuZH1gO1xuXHRcdC8vIFx0fVxuXHRcdC8vIFx0dmFyIGNoYW5uZWxSZWdleCA9IG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpO1xuXHRcdC8vIFx0dmFyIG1hdGNoMiA9IGRhdGEubWF0Y2goY2hhbm5lbFJlZ2V4KTtcblx0XHQvLyBcdGlmIChtYXRjaDIgJiYgbWF0Y2gyWzFdKSB7XG5cdFx0Ly8gXHRcdC8vIFNldCBjaGFubmVsIHRvIGEgZGVmYXVsdCAyLjRHSHogY2hhbm5lbCBpZiBjdXJyZW50IGNoYW5uZWwgaXMgZm9yIDVHSHpcblx0XHQvLyBcdFx0aWYgKG5ld0JhbmQgPT0gXCIyLjRHSHpcIiAmJiBtYXRjaDJbMV0gPiAxNCkge1xuXHRcdC8vIFx0XHRcdC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0XHRcdHZhciBuZXdEYXRhMiA9IGRhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTExYCk7XG5cdFx0Ly8gXHRcdH0gZWxzZSBpZiAobmV3QmFuZCA9PSBcIjVHSHpcIiAmJiBtYXRjaDJbMV0gPD0gMTQpIHtcblx0XHQvLyBcdFx0XHR2YXIgbmV3RGF0YTIgPSBkYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD00NGApO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdC8vICAgfSxcblx0XHQnZ2V0U2VyaWFsJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdTRVJJQUw9KC4qKScpKTtcbiAgXHRcdFx0dmFyIHNlcmlhbCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gc2VyaWFsO1xuXHRcdH0sXG5cdFx0J2dldE9wZXJhdG9yTmFtZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG9wZXJhdG9yTmFtZTtcblx0XHRcdG9wZXJhdG9yTmFtZSA9IGNtZChcInN1ZG8gcW1pY2xpIC1wIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LW9wZXJhdG9yLW5hbWUgfCBncmVwIC1tMiAnTmFtZSAgICAgICAgICAgICAnIHwgYXdrICd7cHJpbnQgJDN9J1wiKTtcblx0XHRcdHJldHVybiBvcGVyYXRvck5hbWU7XG5cdFx0fSxcblx0XHQvLyAnZ2V0U2lnbmFsU3RyZW5ndGgnOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHR2YXIgc2lnbmFsU3RyZW5ndGg7XG5cdFx0Ly8gXHRzaWduYWxTdHJlbmd0aCA9IGNtZChcInN1ZG8gcW1pY2xpIC1wIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgLW0xIE5ldHdvcmsgfCBhd2sgJ3twcmludCAkMywgJDJ9J1wiKTtcblx0XHQvLyBcdHJldHVybiBzaWduYWxTdHJlbmd0aDtcblx0XHQvLyB9LFxuXHRcdCdnZXRTaWduYWxTdHJlbmd0aCc6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBzaWduYWxTdHJlbmd0aDtcblx0XHRcdC8vIFRoaXMgZXh0cmFjdHMganVzdCB0aGUgbnVtZXJpYyBwYXJ0IG9mIHRoZSBzaWduYWwgc3RyZW5ndGguXG5cdFx0XHRzaWduYWxTdHJlbmd0aCA9IGNtZChcInN1ZG8gcW1pY2xpIC1wIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgJ05ldHdvcmsnIHwgYXdrICd7cHJpbnQgJDN9JyB8IGdyZXAgLW9FICdbLTAtOV0rJ1wiKTtcblxuXHRcdFx0Ly8gQ29udmVydCBzaWduYWwgc3RyZW5ndGggdG8gYSBxdWFsaXRhdGl2ZSB2YWx1ZVxuXHRcdFx0dmFyIHN0cmVuZ3RoVmFsdWUgPSBwYXJzZUludChzaWduYWxTdHJlbmd0aCk7XG5cdFx0XHR2YXIgcXVhbGl0eSA9ICdVbmtub3duJztcblx0XHRcdGlmIChzdHJlbmd0aFZhbHVlID49IC03MCkge1xuXHRcdFx0XHRxdWFsaXR5ID0gJ0V4Y2VsbGVudCc7XG5cdFx0XHR9IGVsc2UgaWYgKHN0cmVuZ3RoVmFsdWUgPj0gLTg1KSB7XG5cdFx0XHRcdHF1YWxpdHkgPSAnR29vZCc7XG5cdFx0XHR9IGVsc2UgaWYgKHN0cmVuZ3RoVmFsdWUgPj0gLTEwMCkge1xuXHRcdFx0XHRxdWFsaXR5ID0gJ0ZhaXInO1xuXHRcdFx0fSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlIDwgLTEwMCkge1xuXHRcdFx0XHRxdWFsaXR5ID0gJ1Bvb3InO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHF1YWxpdHk7XG5cdFx0fSxcblx0XHQvLyAnZ2V0SXNPbmxpbmUnOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHR2YXIgaXNPbmxpbmU7XG5cdFx0Ly8gXHRpc09ubGluZSA9IGNtZChcInN1ZG8gcW1pY2xpIC1wIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgLW0xIE5ldHdvcmsgfCBhd2sgJ3twcmludCAkMywgJDJ9J1wiKTtcblx0XHQvLyBcdHJldHVybiBpc09ubGluZTtcblx0XHQvLyB9LFxuXHRcdC8vICdnZXRCYW5kJzogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0dmFyIGJhbmQ7XG4vL1x0XHRcdGJhbmQgPSBjbWQoXCJzdWRvIHFtaWNsaSAtcCAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrIFxcXCJ7cHJpbnQgJDJ9XFxcIiB8IGN1dCAtZFxcXFwnIC1mMlwiKTtcblx0XHQvLyBcdHJldHVybiBiYW5kO1xuXHRcdC8vIH0sXG5cdFx0J2dldEFQTic6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOPSguKiknKSk7XG4gIFx0XHRcdHZhciBBUE4gPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIEFQTjtcblx0XHR9LFxuXHRcdCdnZXRBUE5Vc2VyJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE5fVVNFUk5BTUU9KC4qKScpKTtcbiAgXHRcdFx0dmFyIEFQTlVzZXIgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIEFQTlVzZXI7XG5cdFx0fSxcblx0XHQnZ2V0QVBOUGFzc3dvcmQnOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9QQVNTV09SRD0oLiopJykpO1xuICBcdFx0XHR2YXIgQVBOUGFzc3dvcmQgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIEFQTlBhc3N3b3JkO1xuXHRcdH0sXG5cdFx0J2dldFNpbUNhcmRTdGF0dXMnOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgc2ltU3RhdHVzUmVzdWx0ID0gJ1Vua25vd24nOyAvLyBEZWZhdWx0IHN0YXR1c1xuXG5cdFx0XHQvLyBGdW5jdGlvbiB0byBleGVjdXRlIGNvbW1hbmQgYW5kIGhhbmRsZSBlcnJvcnNcblx0XHRcdGZ1bmN0aW9uIGV4ZWN1dGVDb21tYW5kKGNvbW1hbmQpIHtcblx0XHRcdFx0bGV0IHJlc3VsdDtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXN1bHQgPSBjbWQoY29tbWFuZCk7IC8vIEV4ZWN1dGUgdGhlIGNvbW1hbmRcblx0XHRcdFx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgJiYgcmVzdWx0ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHQvLyBDaGVjayBpZiByZXN1bHQgaXMgYW4gZXJyb3Igb2JqZWN0XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ0Vycm9yJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0Ly8gSGFuZGxlIGV4Y2VwdGlvbnMgaWYgY29tbWFuZCBleGVjdXRpb24gZmFpbHNcblx0XHRcdFx0XHRyZXR1cm4gJ0Vycm9yJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0OyAvLyBSZXR1cm4gdGhlIHJlc3VsdCBpZiBubyBlcnJvcnNcblx0XHRcdH1cblxuXHRcdFx0Ly8gRXhlY3V0ZSBTSU0gY2FyZCBzdGF0dXMgY2hlY2sgY29tbWFuZFxuXHRcdFx0bGV0IHNpbVN0YXR1cyA9IGV4ZWN1dGVDb21tYW5kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLXVpbS1nZXQtY2FyZC1zdGF0dXMgfCBncmVwICdDYXJkIHN0YXRlOidcIik7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlNJTSBjYXJkIHN0YXR1czpcIiwgc2ltU3RhdHVzKTsgLy8gTG9nIHRoZSByYXcgb3V0cHV0XG5cdFx0XHQvLyBQcm9jZXNzIHRoZSBvdXRwdXQgYW5kIGRldGVybWluZSBTSU0gY2FyZCBzdGF0dXNcblx0XHRcdGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoJ25vLWF0ci1yZWNlaXZlZCcpIHx8IHNpbVN0YXR1cy5pbmNsdWRlcygnbm90LWluc2VydGVkJykpIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gJ05vIFNJTSBjYXJkJztcblx0XHRcdH0gZWxzZSBpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKCdlcnJvcicpKSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9IHNpbVN0YXR1czsgLy8gVXNlIHRoZSBlcnJvciBtZXNzYWdlIG9yIG5vIFNJTSBkZXRlY3RlZCBtZXNzYWdlXG5cdFx0XHR9IGVsc2UgaWYgKHNpbVN0YXR1cy5pbmNsdWRlcygncHJlc2VudCcpKSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9ICdPSyc7XG5cdFx0XHR9IGVsc2UgaWYgKHNpbVN0YXR1cy5pbmNsdWRlcygnbG9ja2VkJykgfHwgc2ltU3RhdHVzLmluY2x1ZGVzKCdwaW4tcmVxdWlyZWQnKSkge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSAnU0lNIGNhcmQgbG9ja2VkLCBQSU4gcmVxdWlyZWQnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gJ1Vua25vd24nOyAvLyBGb3Igb3RoZXIgc3RhdHVzZXNcblx0XHRcdH1cblx0XHRcdHJldHVybiBzaW1TdGF0dXNSZXN1bHQ7XG5cdFx0fSxcblx0XHQnZ2V0U2ltUGluJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdTSU1fUElOPSguKiknKSk7XG4gIFx0XHRcdHZhciBTaW1QaW4gPSBtYXRjaFsxXTtcblx0XHRcdHJldHVybiBTaW1QaW47XG5cdFx0fSxcblx0XHQnc2V0U2ltUGluJzogZnVuY3Rpb24oUElOKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdTSU1fUElOPS4qJykpLCAnU0lNX1BJTj0nK1BJTik7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J3NldEFQTic6IGZ1bmN0aW9uKEFQTiwgdXNlciwgcGFzc3dvcmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTj0uKicpKSwgJ0FQTj0nK0FQTik7XG4gIFx0XHRcdC8vIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOPSguKiknKSlbMV0sIEFQTik7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J3NldEFQTlVzZXInOiBmdW5jdGlvbihBUE5Vc2VyKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE5fVVNFUk5BTUU9LionKSksICdBUE5fVVNFUk5BTUU9JytBUE5Vc2VyKTtcbiAgXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdzZXRBUE5QYXNzd29yZCc6IGZ1bmN0aW9uKEFQTlBhc3N3b3JkKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE5fUEFTU1dPUkQ9LionKSksICdBUE5fUEFTU1dPUkQ9JytBUE5QYXNzd29yZCk7XG4gIFx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0UmVtb3RlU3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3lzdGVtY3RsIGlzLWFjdGl2ZSByZW1vdGUtaW90LnNlcnZpY2UgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gMSB8fCBlY2hvIDBcIik7XG5cdFx0XHRpZiAocmVzWzBdID09IFwiMVwiKSB7IC8vIFswXSBpcyBhIGhhY2sgYmVjYXVzZSB0aGUgcmVzdWx0IHJlcyBoYXMgb25lIGV4dHJhIGNoYXJhY3RlclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0J2dldEF1dG9TeW5jU3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3lzdGVtY3RsIGlzLWFjdGl2ZSBhdXRvc3luYy5zZXJ2aWNlID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIDEgfHwgZWNobyAwXCIpO1xuXHRcdFx0aWYgKHJlc1swXSA9PSBcIjFcIikgeyAvLyBbMF0gaXMgYSBoYWNrIGJlY2F1c2UgdGhlIHJlc3VsdCByZXMgaGFzIG9uZSBleHRyYSBjaGFyYWN0ZXJcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdCdnZXRTaGFyZUludGVybmV0VmlhRXRoZXJuZXRTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpc1NoYXJpbmc7XG5cdFx0XHRpc1NoYXJpbmcgPSBjbWQoXCIoc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUwgUE9TVFJPVVRJTkcgLXYgLW4gfCBncmVwIC1xICdNQVNRVUVSQURFICBhbGwgIC0tICAqICAgICAgZXRoMCcgJiYgaXAgbGluayBzaG93IGV0aDAgfCBncmVwIC1xICdzdGF0ZSBVUCcpICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIpO1xuXHRcdFx0cmV0dXJuIGlzU2hhcmluZztcblx0XHR9LFxuXHRcdCdnZXRTaGFyZUludGVybmV0VmlhTW9iaWxlU3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaXNTaGFyaW5nO1xuXHRcdFx0aXNTaGFyaW5nID0gY21kKFwiKHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1MIFBPU1RST1VUSU5HIC12IC1uIHwgZ3JlcCAtcSAnTUFTUVVFUkFERSAgYWxsICAtLSAgKiAgICAgIHd3YW4wJyAmJiBpcCBsaW5rIHNob3cgd3dhbjAgfCBncmVwIC1xICdzdGF0ZSBVUCcpICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIpO1xuXHRcdFx0cmV0dXJuIGlzU2hhcmluZztcblx0XHR9LFxuXHRcdC8vICdhY3RpdmF0ZUludGVybmV0U2hhcmluZyc6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0dmFyIHJlcztcblx0XHQvLyBcdHJlcyA9IGNtZChcInN1ZG8gd2lmaS1hcC5jb25maWcgc2V0IHNoYXJlLmRpc2FibGVkPWZhbHNlXCIpO1xuXHRcdC8vIFx0cmV0dXJuIHJlcztcblx0XHQvLyB9LFxuXHRcdC8vICdkaXNhY3RpdmF0ZUludGVybmV0U2hhcmluZyc6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0dmFyIHJlcztcblx0XHQvLyBcdHJlcyA9IGNtZChcInN1ZG8gd2lmaS1hcC5jb25maWcgc2V0IHNoYXJlLmRpc2FibGVkPXRydWVcIik7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzO1xuXHRcdC8vIH0sXG5cdFx0J2FjdGl2YXRlUmVtb3RlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RhcnQgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGVuYWJsZSByZW1vdGUtaW90LnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2Rpc2FjdGl2YXRlUmVtb3RlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RvcCByZW1vdGUtaW90LnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZGlzYWJsZSByZW1vdGUtaW90LnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2FjdGl2YXRlQXV0b1N5bmMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdGFydCBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuXHRcdFx0cmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGVuYWJsZSBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdkaXNhY3RpdmF0ZUF1dG9TeW5jJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RvcCBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuXHRcdFx0cmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGRpc2FibGUgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0QmF0dGVyeVN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHZhciBzY3JpcHRzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5zY3JpcHRzUGF0aDtcblx0XHRcdHJlcyA9IGNtZChcInB5dGhvbjMgXCIrc2NyaXB0c1BhdGgrXCIvcGlqdWljZV9zdGF0dXMucHlcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0Ly8gJ2dldElzT25saW5lJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0dmFyIHNjcmlwdHNQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnNjcmlwdHNQYXRoO1xuXHRcdC8vIFx0Ly8gTWFrZSBzdXJlIHlvdXIgc2NyaXB0IGlzIGV4ZWN1dGFibGUsIGUuZy4sIGNobW9kICt4IGNoZWNrX2ludGVybmV0LnNoXG5cdFx0Ly8gXHRyZXMgPSBjbWQoXCJiYXNoIFwiICsgc2NyaXB0c1BhdGggKyBcIi9jaGVja19pbnRlcm5ldC5zaFwiKTsgLy8gUmVwbGFjZSAnYmFzaCcgd2l0aCAnc2gnIGlmIG5lZWRlZFxuXHRcdC8vIFx0Ly8gVGhlIHNjcmlwdCByZXR1cm5zIFwidHJ1ZVwiIG9yIFwiZmFsc2VcIiBhcyBhIHN0cmluZywgc28gd2UgY29tcGFyZSB0aGUgcmVzdWx0IGRpcmVjdGx5XG5cdFx0Ly8gXHRyZXR1cm4gcmVzLnRyaW0oKSA9PT0gXCJ0cnVlXCI7IC8vIFRoaXMgY29udmVydHMgdGhlIHN0cmluZyB0byBhIGJvb2xlYW5cblx0XHQvLyB9LFxuXHRcdCdnZXRJc09ubGluZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IHJlcztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlcyA9IGNtZChcInBpbmcgLWMgMSA4LjguOC44XCIpO1xuXHRcdFx0XHQvLyBDaGVjayBpZiB0aGUgcGluZyBjb21tYW5kIHdhcyBzdWNjZXNzZnVsIGJhc2VkIG9uIHRoZSBvdXRwdXRcblx0XHRcdFx0bGV0IGlzT25saW5lID0gcmVzLmluY2x1ZGVzKFwiMSBwYWNrZXRzIHJlY2VpdmVkXCIpIHx8IHJlcy5pbmNsdWRlcyhcIjEgcmVjZWl2ZWRcIik7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiT25saW5lIHN0YXR1czpcIiwgaXNPbmxpbmUpOyAvLyBDb3JyZWN0bHkgbG9nZ2luZyB0aGUgYm9vbGVhbiByZXN1bHRcblx0XHRcdFx0cmV0dXJuIGlzT25saW5lOyAvLyBEaXJlY3RseSByZXR1cm4gdGhlIGJvb2xlYW4gdmFsdWVcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdC8vIElmIGFuIGVycm9yIG9jY3VycyAod2hpY2ggY291bGQgaW5jbHVkZSBiZWluZyB1bmFibGUgdG8gcnVuIHRoZSBwaW5nIGNvbW1hbmQpLCBhc3N1bWUgb2ZmbGluZVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIG9yIG9mZmxpbmU6XCIsIGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBBc3N1bWUgb2ZmbGluZSBpZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZ2V0RXRoMElQJzogZnVuY3Rpb24oKSB7IC8vIEdldCBJUCBvZiBib3hcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwicmVzdWx0IDogXCIrXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcXFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cblx0XHRcdC8vY29uc29sZS5sb2coXCJpcCA6IFwiK1wiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgXCIraW50ZXJmYWNlK1wiIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0V3dhbjBJUCc6IGZ1bmN0aW9uKCkgeyAvLyBHZXQgSVAgb2YgYm94XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcInJlc3VsdCA6IFwiK1wiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgd3dhbjAgfCBncmVwIFxcXCJpbmV0XFxcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiaXAgOiBcIitcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIFwiK2ludGVyZmFjZStcIiAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cblx0XHQnZ2V0QmVla2VlT3NWZXJzaW9uJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcblx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQkVFS0VFX09TX1ZFUlNJT049KC4qKScpKTtcblx0XHRcdHZhciBzZXJpYWwgPSBtYXRjaFsxXTtcblx0XHRcdHJldHVybiBzZXJpYWw7XG5cdFx0fSxcblx0XHQnZ2V0QmVla2VlSG9tZVZlcnNpb24nOiBmdW5jdGlvbigpIHtcblx0XHRcdGpzb24gPSBKU09OLnBhcnNlKEFzc2V0cy5nZXRUZXh0KFwidmVyc2lvbi5qc29uXCIpKTtcblx0XHRcdHJldHVybiBqc29uLnZlcnNpb247XG5cdFx0fSxcblx0XHQncmVzdGFydE1vYmlsZUNvbm5lY3QnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCByZXN0YXJ0IG1vYmlsZV9jb25uZWN0LnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzOycnXG5cdFx0fSxcblx0XHQnZ2V0TW9iaWxlQ29ubmVjdEVuYWJsZWQnOiBmdW5jdGlvbigpIHtcblx0XHRcdGxldCByZXM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBpcy1hY3RpdmUgbW9iaWxlX2Nvbm5lY3Quc2VydmljZSA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIik7XG5cdFx0XHRcdHJldHVybiByZXMudG9TdHJpbmcoKS50cmltKCkgPT09IFwidHJ1ZVwiO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2VuYWJsZU1vYmlsZUNvbm5lY3QnOiBmdW5jdGlvbigpIHtcblx0XHRcdGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0YXJ0IG1vYmlsZV9jb25uZWN0LnNlcnZpY2VcIik7XG5cdFx0XHRjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgbW9iaWxlX2Nvbm5lY3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0J2Rpc2FibGVNb2JpbGVDb25uZWN0JzogZnVuY3Rpb24oKSB7XG5cdFx0XHRjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdG9wIG1vYmlsZV9jb25uZWN0LnNlcnZpY2VcIik7XG5cdFx0XHRjbWQoXCJzdWRvIHN5c3RlbWN0bCBkaXNhYmxlIG1vYmlsZV9jb25uZWN0LnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXHRcdCdnZXRJbnRlcm5ldEludGVyZmFjZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IHJlcztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlcyA9IGNtZChcImlwIHJvdXRlIGdldCAxLjIuMy40IHwgYXdrICd7cHJpbnQgJDU7IGV4aXR9J1wiKTsgLy8gRXhlY3V0ZSB0aGUgY29tbWFuZFxuXHRcdFx0XHRpZiAocmVzLnRyaW0oKSkge1xuXHRcdFx0XHRcdHJldHVybiByZXMudHJpbSgpOyAvLyBSZXR1cm4gdGhlIGNsZWFuZWQtdXAgcmVzdWx0IGlmIG5vdCBlbXB0eVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiAnVW5rbm93bic7IC8vIFJldHVybiBhIGRlZmF1bHQgbWVzc2FnZSBpZiB0aGUgcmVzdWx0IGlzIGVtcHR5XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB0aGUgY29tbWFuZCBmYWlscyBvciBpcyBub3QgZm91bmRcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIGludGVybmV0IGludGVyZmFjZTpcIiwgZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gJ0Vycm9yJzsgLy8gUmV0dXJuIGFuIGVycm9yIG1lc3NhZ2Vcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdnZXRXTEFOVVNCJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgcmVzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzID0gY21kKCdpcCBsaW5rIHNob3cgd2xhbnVzYicpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdnZXRXaWZpQ2xpZW50TW9kZUVuYWJsZWQnOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBnZXRXaWZpQ2xpZW50TW9kZVN0YXRlKCk7XG5cdFx0fSxcblx0XHQnZW5hYmxlV2lmaUNsaWVudE1vZGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJ1bldpZmlNb2RlU2NyaXB0KHdpZmlDbGllbnRFbmFibGVTY3JpcHROYW1lKTtcblx0XHRcdFx0cmV0dXJuIGdldFdpZmlDbGllbnRNb2RlU3RhdGUoKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBlbmFibGluZyBXaS1GaSBjbGllbnQgbW9kZTonLCBlcnJvcik7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG5cdFx0XHRcdFx0J3dpZmktY2xpZW50LW1vZGUtZW5hYmxlLWZhaWxlZCcsXG5cdFx0XHRcdFx0ZXJyb3IucmVhc29uIHx8IGVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBlbmFibGUgV2ktRmkgY2xpZW50IG1vZGUuJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2Rpc2FibGVXaWZpQ2xpZW50TW9kZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cnVuV2lmaU1vZGVTY3JpcHQod2lmaUNsaWVudERpc2FibGVTY3JpcHROYW1lKTtcblx0XHRcdFx0ZGlzYWJsZUludGVybmV0U2hhcmluZ1dpZmlDbGllbnRJblN5c3RlbSgpO1xuXHRcdFx0XHRyZXR1cm4gZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGRpc2FibGluZyBXaS1GaSBjbGllbnQgbW9kZTonLCBlcnJvcik7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG5cdFx0XHRcdFx0J3dpZmktY2xpZW50LW1vZGUtZGlzYWJsZS1mYWlsZWQnLFxuXHRcdFx0XHRcdGVycm9yLnJlYXNvbiB8fCBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZGlzYWJsZSBXaS1GaSBjbGllbnQgbW9kZS4nXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZ2V0V2lmaU5ldHdvcmtzJzogYXN5bmMgZnVuY3Rpb24oKSB7XG5cdFx0XHRlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblxuXHRcdFx0dmFyIHdpZmkgPSByZXF1aXJlKCdub2RlLXdpZmknKTtcblx0XHRcdHdpZmkuaW5pdCh7XG5cdFx0XHRcdGlmYWNlOiAnd2xhbnVzYicsXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTdGFydGluZyB3aWZpIHNjYW4nKTtcblx0XHRcdFx0d2lmaS5zY2FuKChlcnJvciwgbmV0d29ya3MpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNjYW5uaW5nIG5ldHdvcmtzOicsIGVycm9yKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoW10pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnV2lmaSBzY2FuIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHknKTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgdW5pcXVlTmV0d29ya3MgPSBuZXcgTWFwKCk7XG5cblx0XHRcdFx0XHRcdG5ldHdvcmtzLmZvckVhY2goKG5ldHdvcmspID0+IHtcblx0XHRcdFx0XHRcdFx0bGV0IHN0cmVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRpZiAobmV0d29yay5xdWFsaXR5ID4gODApIHtcblx0XHRcdFx0XHRcdFx0XHRzdHJlbmd0aCA9ICd3aWZpLTQnO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG5ldHdvcmsucXVhbGl0eSA+IDU1KSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RyZW5ndGggPSAnd2lmaS0zJztcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChuZXR3b3JrLnF1YWxpdHkgPiAzMCkge1xuXHRcdFx0XHRcdFx0XHRcdHN0cmVuZ3RoID0gJ3dpZmktMic7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RyZW5ndGggPSAnd2lmaS0xJztcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGJzc2lkID0gbmV0d29yay5tYWMgPyBuZXR3b3JrLm1hYy50b1VwcGVyQ2FzZSgpIDogbnVsbDtcblx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gYCR7bmV0d29yay5zc2lkfToke2Jzc2lkIHx8ICd1bmtub3duJ31gO1xuXG5cdFx0XHRcdFx0XHRcdGlmICghdW5pcXVlTmV0d29ya3MuaGFzKGtleSkgfHwgbmV0d29yay5xdWFsaXR5ID4gdW5pcXVlTmV0d29ya3MuZ2V0KGtleSkucXVhbGl0eSkge1xuXHRcdFx0XHRcdFx0XHRcdHVuaXF1ZU5ldHdvcmtzLnNldChrZXksIHtcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6IG5ldHdvcmsuc3NpZCxcblx0XHRcdFx0XHRcdFx0XHRcdGJzc2lkOiBic3NpZCxcblx0XHRcdFx0XHRcdFx0XHRcdHN0cmVuZ3RoOiBzdHJlbmd0aCxcblx0XHRcdFx0XHRcdFx0XHRcdHNlY3VyaXR5OiBuZXR3b3JrLnNlY3VyaXR5LFxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhbGl0eTogbmV0d29yay5xdWFsaXR5LFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgdW5pcXVlTmV0d29ya3NBcnJheSA9IEFycmF5LmZyb20odW5pcXVlTmV0d29ya3MudmFsdWVzKCkpO1xuXHRcdFx0XHRcdFx0dW5pcXVlTmV0d29ya3NBcnJheS5mb3JFYWNoKChuZXR3b3JrKSA9PiBkZWxldGUgbmV0d29yay5xdWFsaXR5KTtcblxuXHRcdFx0XHRcdFx0cmVzb2x2ZSh1bmlxdWVOZXR3b3Jrc0FycmF5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnY29ubmVjdFRvV2lmaSc6IGFzeW5jIGZ1bmN0aW9uKHNzaWQsIHBhc3N3b3JkKSB7XG5cdFx0XHRlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblxuXHRcdFx0dmFyIHdpZmkgPSByZXF1aXJlKCdub2RlLXdpZmknKTtcblx0XHRcdHdpZmkuaW5pdCh7XG5cdFx0XHRcdGlmYWNlOiAnd2xhbnVzYicsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGN1cnJlbnRDb25uZWN0aW9uSW5mbyA9IGdldENsaWVudENvbm5lY3Rpb25JbmZvRnJvbVN5c3RlbSgpO1xuXHRcdFx0aWYgKGN1cnJlbnRDb25uZWN0aW9uSW5mby5zc2lkID09PSBzc2lkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBjb25uZWN0aW9uQ29uZmlnID0geyBzc2lkOiBzc2lkIH07XG5cblx0XHRcdGlmICh0eXBlb2YgcGFzc3dvcmQgPT09ICdzdHJpbmcnICYmIHBhc3N3b3JkICE9PSAnJykge1xuXHRcdFx0XHRjb25uZWN0aW9uQ29uZmlnLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG5cdFx0XHR9XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdFx0d2lmaS5kaXNjb25uZWN0KCgpID0+IHtcblx0XHRcdFx0XHRcdHJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y21kKCdubWNsaSBkZXZpY2UgZGlzY29ubmVjdCB3bGFudXNiID4vZGV2L251bGwgMj4mMSB8fCB0cnVlJyk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGRpc2Nvbm5lY3Rpbmcgd2xhbnVzYiBiZWZvcmUgcmVjb25uZWN0OicsIGVycm9yKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGF3YWl0IHdhaXQoMTUwMCk7XG5cblx0XHRcdFx0Y29uc3QgY29ubmVjdFJlc3VsdCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdFx0d2lmaS5jb25uZWN0KGNvbm5lY3Rpb25Db25maWcsIChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvbm5lY3RpbmcgdG8gd2lmaTonLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoZmFsc2UpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKCFjb25uZWN0UmVzdWx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaXNWZXJpZmllZCA9IGF3YWl0IHdhaXRGb3JDbGllbnRTU0lEKHNzaWQsIDE1MDAwKTtcblxuXHRcdFx0XHRpZiAoIWlzVmVyaWZpZWQpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIGNhbGxiYWNrIHJldHVybmVkIHN1Y2Nlc3MgYnV0IFNTSUQgdmVyaWZpY2F0aW9uIGZhaWxlZDonLCBzc2lkKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIHdpZmk6Jywgc3NpZCk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciB3aGlsZSBjb25uZWN0aW5nIHRvIHdpZmk6JywgZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZGlzY29ubmVjdFdpZmknOiBmdW5jdGlvbigpIHtcblx0XHRcdGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXG5cdFx0XHR2YXIgd2lmaSA9IHJlcXVpcmUoJ25vZGUtd2lmaScpO1xuXHRcdFx0d2lmaS5pbml0KHtcblx0XHRcdFx0aWZhY2U6ICd3bGFudXNiJyxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0d2lmaS5kaXNjb25uZWN0KChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgZGlzY29ubmVjdGluZyBmcm9tIHdpZmk6JywgZXJyb3IpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShmYWxzZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdEaXNjb25uZWN0ZWQgZnJvbSB3aWZpJyk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdmb3JnZXRXaWZpJzogZnVuY3Rpb24oc3NpZCkge1xuXHRcdFx0ZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkKCk7XG5cblx0XHRcdHZhciB3aWZpID0gcmVxdWlyZSgnbm9kZS13aWZpJyk7XG5cdFx0XHR3aWZpLmluaXQoe1xuXHRcdFx0XHRpZmFjZTogJ3dsYW51c2InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHR3aWZpLmRlbGV0ZUNvbm5lY3Rpb24oeyBzc2lkOiBzc2lkIH0sIChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgY29ubmVjdGluZyB0byB3aWZpOicsIGVycm9yKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoZmFsc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIHdpZmk6Jywgc3NpZCk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdnZXRDbGllbnRTU0lEJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gZ2V0Q2xpZW50U1NJREZyb21TeXN0ZW0oKTtcblx0XHR9LFxuXHRcdCdnZXRDbGllbnRDb25uZWN0aW9uSW5mbyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGdldENsaWVudENvbm5lY3Rpb25JbmZvRnJvbVN5c3RlbSgpO1xuXHRcdH0sXG5cdFx0J2dldENhcHRpdmVQb3J0YWxTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXHRcdFx0cmV0dXJuIGdldENhcHRpdmVQb3J0YWxTdGF0dXNGcm9tU3lzdGVtKCk7XG5cdFx0fSxcblx0XHQnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzV2lmaUNsaWVudCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGdldEludGVybmV0U2hhcmluZ1N0YXR1c1dpZmlDbGllbnRGcm9tU3lzdGVtKCk7XG5cdFx0fSxcblx0XHQnZW5hYmxlSW50ZXJuZXRTaGFyaW5nV2lmaUNsaWVudCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZW5hYmxlSW50ZXJuZXRTaGFyaW5nV2lmaUNsaWVudEluU3lzdGVtKCk7XG5cdFx0XHRcdHJldHVybiBnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNXaWZpQ2xpZW50RnJvbVN5c3RlbSgpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGVuYWJsaW5nIGludGVybmV0IHNoYXJpbmcgdmlhIFdpLUZpIGNsaWVudDonLCBlcnJvcik7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG5cdFx0XHRcdFx0J3dpZmktY2xpZW50LXNoYXJpbmctZW5hYmxlLWZhaWxlZCcsXG5cdFx0XHRcdFx0ZXJyb3IucmVhc29uIHx8IGVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBlbmFibGUgaW50ZXJuZXQgc2hhcmluZyB2aWEgV2ktRmkgY2xpZW50Lidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nV2lmaUNsaWVudCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZGlzYWJsZUludGVybmV0U2hhcmluZ1dpZmlDbGllbnRJblN5c3RlbSgpO1xuXHRcdFx0XHRyZXR1cm4gZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzV2lmaUNsaWVudEZyb21TeXN0ZW0oKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBkaXNhYmxpbmcgaW50ZXJuZXQgc2hhcmluZyB2aWEgV2ktRmkgY2xpZW50OicsIGVycm9yKTtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcblx0XHRcdFx0XHQnd2lmaS1jbGllbnQtc2hhcmluZy1kaXNhYmxlLWZhaWxlZCcsXG5cdFx0XHRcdFx0ZXJyb3IucmVhc29uIHx8IGVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBkaXNhYmxlIGludGVybmV0IHNoYXJpbmcgdmlhIFdpLUZpIGNsaWVudC4nXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdC8vIFx0Ly8gQ29tbWFuZCB0byBsaXN0IEZPUldBUkQgcnVsZXNcblx0XHQvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLW4gLS1saW5lLW51bWJlcic7XG5cblx0XHQvLyBcdGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdC8vIFx0XHRpZiAoZXJyb3IgfHwgc3RkZXJyKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke2Vycm9yIHx8IHN0ZGVycn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yIHx8IG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblxuXHRcdC8vIFx0XHQvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG5cdFx0Ly8gXHRcdHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IHN0ZG91dC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyhcImlzR2VuZXJhbFNoYXJpbmdFbmFibGVkOiBcIitpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCk7XG5cdFx0Ly8gXHRcdC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcblx0XHQvLyBcdFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2UgZXRoMC87XG5cdFx0Ly8gXHRcdHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuXHRcdC8vIFx0XHQvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcblx0XHQvLyBcdFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDFcIik7XG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGxcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIHtjb25zb2xlLmxvZyhcInN0ZXAxMlwiKTsgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH0pO31cblx0XHQvLyBcdFx0fSBlbHNlIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDJcIik7XG5cblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGEgc3BlY2lmaWMgTUFDIGFkZHJlc3Ncblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3Igc3BlY2lmaWMgTUFDJywgbWFjQWRkcmVzczogbWF0Y2hbMV0gfSk7XG5cdFx0Ly8gXHRcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2coXCJzdGVwM1wiKTtcblxuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWRcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH0pO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXG5cblxuXG5cdFx0XHQvLyAgICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZygnU3RhcnRpbmcgdG8gZ2V0IGludGVybmV0IHNoYXJpbmcgc3RhdHVzIGZvciBFdGhlcm5ldC4uLicpO1xuXHRcdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG5cdFx0XHQvLyBcdC8vIFNpbmNlIGNtZCBpcyBhbHJlYWR5IHdyYXBwZWQgYnkgTWV0ZW9yLndyYXBBc3luYyhleGVjKSxcblx0XHRcdC8vIFx0Ly8gaXQgc2hvdWxkIHJldHVybiB7IHN0ZG91dCwgc3RkZXJyIH0gZGlyZWN0bHkuXG5cdFx0XHQvLyBcdHRyeSB7XG5cdFx0XHQvLyBcdCAgdmFyIHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdC8vIFx0ICBpZiAoc3RkZXJyKSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke3N0ZGVycn1gKTtcblx0XHRcdC8vIFx0XHQvLyBJdCdzIGJldHRlciB0byByZXR1cm4gYSBtZWFuaW5nZnVsIGVycm9yIHRvIHRoZSBjbGllbnQuXG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgZXJyb3I6IFwiRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzXCIsIGRldGFpbHM6IHN0ZGVyciB9O1xuXHRcdFx0Ly8gXHQgIH1cblxuXHRcdFx0Ly8gXHQgIGNvbnNvbGUubG9nKCdBbmFseXppbmcgaXB0YWJsZXMgRk9SV0FSRCBydWxlcyBvdXRwdXQuLi4nKTtcblx0XHRcdC8vIFx0ICAvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG5cdFx0XHQvLyBcdCAgdmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gc3Rkb3V0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSBldGgwJykgJiYgc3Rkb3V0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG5cdFx0XHQvLyBcdCAgY29uc29sZS5sb2coYGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkOiAke2lzR2VuZXJhbFNoYXJpbmdFbmFibGVkfWApO1xuXG5cdFx0XHQvLyBcdCAgLy8gRXh0cmFjdCBNQUMgYWRkcmVzcyBydWxlc1xuXHRcdFx0Ly8gXHQgIHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIGV0aDAvO1xuXHRcdFx0Ly8gXHQgIHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblx0XHRcdC8vIFx0ICBjb25zb2xlLmxvZyhgTUFDIGFkZHJlc3MgZm91bmQ6ICR7bWF0Y2ggPyBtYXRjaFsxXSA6ICdOb25lJ31gKTtcblxuXHRcdFx0Ly8gXHQgIC8vIERldGVybWluZSB0aGUgc3RhdHVzIGJhc2VkIG9uIHRoZSBydWxlcyBmb3VuZFxuXHRcdFx0Ly8gXHQgIGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGwuJyk7XG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0Ly8gXHQgIH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzOiAke21hdGNoWzFdfWApO1xuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH07XG5cdFx0XHQvLyBcdCAgfSBlbHNlIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyBpcyBkaXNhYmxlZCBvciBub3QgY29uZmlndXJlZCBhcyBleHBlY3RlZC4nKTtcblx0XHRcdC8vIFx0XHRyZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdC8vIFx0ICB9XG5cdFx0XHQvLyBcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHQvLyBcdCAgY29uc29sZS5lcnJvcihgQ29tbWFuZCBleGVjdXRpb24gZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHQvLyBcdCAgLy8gSXQncyBiZXR0ZXIgdG8gcmV0dXJuIGEgbWVhbmluZ2Z1bCBlcnJvciB0byB0aGUgY2xpZW50LlxuXHRcdFx0Ly8gXHQgIHJldHVybiB7IGVycm9yOiBcIkNvbW1hbmQgZXhlY3V0aW9uIGVycm9yXCIsIGRldGFpbHM6IGVycm9yLnRvU3RyaW5nKCkgfTtcblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gICB9LFxuXG5cblxuXHRcdFx0XHQvLyAgICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXHRcdFx0XHQvLyBcdHZhciBjb21tYW5kUmVzdWx0ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblxuXHRcdFx0XHQvLyBcdGlmICghY29tbWFuZFJlc3VsdCkge1xuXHRcdFx0XHQvLyBcdCAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG5cdFx0XHRcdC8vIFx0fVxuXG5cdFx0XHRcdC8vIFx0dmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcblx0XHRcdFx0Ly8gXHR2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSBldGgwLztcblx0XHRcdFx0Ly8gXHR2YXIgbWF0Y2ggPSBjb21tYW5kUmVzdWx0Lm1hdGNoKG1hY0FkZHJlc3NSdWxlUmVnZXgpO1xuXG5cdFx0XHRcdC8vIFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuXHRcdFx0XHQvLyBcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0XHQvLyBcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHRcdFx0Ly8gXHQgIHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH07XG5cdFx0XHRcdC8vIFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gXHQgIHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0XHQvLyBcdH1cblx0XHRcdFx0Ly8gICB9LFxuXG5cblxuXG5cdFx0XHRcdFx0ICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLVMgRk9SV0FSRCc7XG5cdFx0XHR2YXIgbGlzdE5hdFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC10IG5hdCAtUyBQT1NUUk9VVElORyc7XG5cblx0XHRcdHZhciBmb3J3YXJkUmVzdWx0ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblx0XHRcdHZhciBuYXRSZXN1bHQgPSBjbWQobGlzdE5hdFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdGlmICghZm9yd2FyZFJlc3VsdCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFwiY29tbWFuZC1leGVjdXRpb24tZXJyb3JcIiwgXCJUaGUgRk9SV0FSRCBjaGFpbiBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIW5hdFJlc3VsdCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFwiY29tbWFuZC1leGVjdXRpb24tZXJyb3JcIiwgXCJUaGUgUE9TVFJPVVRJTkcgY2hhaW4gY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHNoYXJpbmdGcm9tV2xhbmludFRvRXRoID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFuaW50IC1vIGV0aDAgLWogQUNDRVBUJyk7XG5cdFx0XHR2YXIgc2hhcmluZ0Zyb21XbGFudXNiVG9FdGggPSBmb3J3YXJkUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW51c2IgLW8gZXRoMCAtaiBBQ0NFUFQnKTtcblx0XHRcdHZhciBzaGFyaW5nVG9XbGFuaW50RnJvbUV0aEVzdGFibGlzaGVkID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcpO1xuXHRcdFx0dmFyIHNoYXJpbmdUb1dsYW51c2JGcm9tRXRoRXN0YWJsaXNoZWQgPSBmb3J3YXJkUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIGV0aDAgLW8gd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyk7XG5cblx0XHRcdHZhciBuYXRGb3JXbGFuaW50ID0gbmF0UmVzdWx0LmluY2x1ZGVzKCctQSBQT1NUUk9VVElORyAtcyAxMC4wLjAuMC8yNCAtbyBldGgwIC1qIE1BU1FVRVJBREUnKTtcblx0XHRcdHZhciBuYXRGb3JXbGFudXNiID0gbmF0UmVzdWx0LmluY2x1ZGVzKCctQSBQT1NUUk9VVElORyAtcyAxMC4xLjAuMC8yNCAtbyBldGgwIC1qIE1BU1FVRVJBREUnKTtcblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRzaGFyaW5nRnJvbVdsYW5pbnRUb0V0aCAmJlxuXHRcdFx0XHRzaGFyaW5nRnJvbVdsYW51c2JUb0V0aCAmJlxuXHRcdFx0XHRzaGFyaW5nVG9XbGFuaW50RnJvbUV0aEVzdGFibGlzaGVkICYmXG5cdFx0XHRcdHNoYXJpbmdUb1dsYW51c2JGcm9tRXRoRXN0YWJsaXNoZWQgJiZcblx0XHRcdFx0bmF0Rm9yV2xhbmludCAmJlxuXHRcdFx0XHRuYXRGb3JXbGFudXNiXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdCdlbmFibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cblx0XHRcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gbnVsbDtcblxuXHRcdFx0aXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSB3bGFuaW50IC1vIGV0aDAgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3bGFuaW50IC1vIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSB3bGFudXNiIC1vIGV0aDAgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3bGFudXNiIC1vIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgZXRoMCAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtQyBGT1JXQVJEIC1pIGV0aDAgLW8gd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW51c2IgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC10IG5hdCAtQyBQT1NUUk9VVElORyAtcyAxMC4wLjAuMC8yNCAtbyBldGgwIC1qIE1BU1FVRVJBREUgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUEgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gZXRoMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLXQgbmF0IC1DIFBPU1RST1VUSU5HIC1zIDEwLjEuMC4wLzI0IC1vIGV0aDAgLWogTUFTUVVFUkFERSAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC10IG5hdCAtQSBQT1NUUk9VVElORyAtcyAxMC4xLjAuMC8yNCAtbyBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHRcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGRlcnIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXQgZW5hYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBEZWZpbmUgYSBsaXN0IG9mIGNvbW1hbmRzIHRvIHJlcGVhdGVkbHkgYXR0ZW1wdCBkZWxldGlvbi5cblx0XHRcdHZhciBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gbnVsbDtcblxuXHRcdFx0aXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbnVzYiAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1zb3VyY2UgMTAuMC4wLjAvMjQgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tc291cmNlIDEwLjEuMC4wLzI0IC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnXG5cdFx0XHRdO1xuXG5cdFx0XHQvLyBGdW5jdGlvbiB0byBleGVjdXRlIGEgY29tbWFuZCBhbmQgcmVjdXJzaXZlbHkgY2FsbCBpdHNlbGYgaWYgdGhlIGNvbW1hbmQgd2FzIHN1Y2Nlc3NmdWwgKHJ1bGUgd2FzIGZvdW5kIGFuZCBkZWxldGVkKS5cblx0XHRcdGZ1bmN0aW9uIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKSB7XG5cdFx0XHRcdGNtZChjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBubyBlcnJvciwgdGhlIHJ1bGUgd2FzIGZvdW5kIGFuZCBkZWxldGVkLCBzbyB0cnkgYWdhaW4uXG5cdFx0XHRcdFx0aWYgKCFlcnJvcikge1xuXHRcdFx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yLCBpdCBsaWtlbHkgbWVhbnMgbm8gbW9yZSBpbnN0YW5jZXMgb2YgdGhlIHJ1bGUgZXhpc3QsIHNvIGNhbGwgdGhlIGRvbmVDYWxsYmFjay5cblx0XHRcdFx0XHRcdGRvbmVDYWxsYmFjaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEV4ZWN1dGUgZGVsZXRpb24gZm9yIGVhY2ggY29tbWFuZCBhbmQgdHJhY2sgY29tcGxldGlvbi5cblx0XHRcdHZhciB0YXNrc0NvbXBsZXRlZCA9IDA7XG5cdFx0XHRpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcblx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCAoKSA9PiB7XG5cdFx0XHRcdFx0dGFza3NDb21wbGV0ZWQrKztcblx0XHRcdFx0XHQvLyBPbmNlIGFsbCBkZWxldGlvbiB0YXNrcyBhcmUgZG9uZSwgc2F2ZSB0aGUgaXB0YWJsZXMgY29uZmlndXJhdGlvbi5cblx0XHRcdFx0XHRpZiAodGFza3NDb21wbGV0ZWQgPT09IGlwdGFibGVzRGVsZXRlQ29tbWFuZHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgJ0FsbCBzcGVjaWZpZWQgcnVsZXMgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8vICdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdC8vIFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERScsXG5cdFx0Ly8gXHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0Ly8gXHRdLmpvaW4oJyAmJiAnKTtcblxuXHRcdC8vIFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdFx0aWYgKHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBFdGhlcm5ldCBkaXNhYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0Ly8gXHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHQvLyBcdH0pO1xuXHRcdC8vIH0sXG5cdFx0J2VuYWJsZUludGVybmV0Rm9yTWFjRXRoZXJuZXQnOiBmdW5jdGlvbihtYWNBZGRyZXNzLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vIENvbW1hbmQgdG8gYWxsb3cgaW50ZXJuZXQgZm9yIHRoZSBzcGVjaWZpZWQgTUFDIGFkZHJlc3Mgb24gZXRoMC5cblx0XHRcdHZhciBhbGxvd01hY0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIGV0aDAgLW0gbWFjIC0tbWFjLXNvdXJjZSAke21hY0FkZHJlc3N9IC1qIEFDQ0VQVGA7XG5cdFx0XHQvLyBDb21tYW5kIHRvIGRyb3AgYWxsIG90aGVyIGludGVybmV0IHRyYWZmaWMgb24gZXRoMC5cblx0XHRcdHZhciBibG9ja090aGVyc0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIGV0aDAgLWogRFJPUGA7XG5cblx0XHRcdC8vIEFsbG93IGludGVybmV0IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzLlxuXHRcdFx0cmVzID0gY21kKGFsbG93TWFjQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBhbGxvd2luZyBNQUMgJHttYWNBZGRyZXNzfTogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBJbnRlcm5ldCBhY2Nlc3MgYWxsb3dlZCBmb3IgTUFDICR7bWFjQWRkcmVzc30uYCk7XG5cblx0XHRcdFx0Ly8gQmxvY2sgYWxsIG90aGVyIE1BQyBhZGRyZXNzZXMgZnJvbSBhY2Nlc3NpbmcgdGhlIGludGVybmV0LlxuXHRcdFx0XHRyZXMgPSBjbWQoYmxvY2tPdGhlcnNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBibG9ja2luZyBvdGhlciBNQUNzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGJsb2NrZWQgZm9yIG90aGVyIE1BQyBhZGRyZXNzZXMuYCk7XG5cdFx0XHRcdFx0Ly8gT3B0aW9uYWxseSwgc2F2ZSB0aGUgaXB0YWJsZXMgc2V0dGluZ3MgdG8gbWFrZSB0aGVtIHBlcnNpc3RlbnQuXG5cdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBzYXZlZC5gKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKG51bGwpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3JlbW92ZUFsbE1hY0ZpbHRlcnNGb3JFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBMaXN0IGFsbCBGT1JXQVJEIHJ1bGVzIHdpdGggbGluZSBudW1iZXJzXG5cdFx0XHRjbWQoJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtLWxpbmUtbnVtYmVycyAtbicsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByb2Nlc3Mgc3Rkb3V0IHRvIGlkZW50aWZ5IHJ1bGVzIHJlbGF0ZWQgdG8gTUFDIGZpbHRlcmluZyBvbiBldGgwXG5cdFx0XHRcdGNvbnN0IGxpbmVzID0gc3Rkb3V0LnNwbGl0KCdcXG4nKTtcblx0XHRcdFx0Y29uc3QgcnVsZU51bWJlcnMgPSBsaW5lcy5yZWR1Y2UoKGFjYywgbGluZSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRpZiAobGluZS5pbmNsdWRlcygnZXRoMCcpICYmIGxpbmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnbWFjJykpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHJ1bGVOdW1iZXIgPSBsaW5lLnNwbGl0KC9cXHMrLylbMF07IC8vIEV4dHJhY3QgdGhlIHJ1bGUgbnVtYmVyLCBhc3N1bWluZyBpdCdzIHRoZSBmaXJzdCBlbGVtZW50XG5cdFx0XHRcdFx0XHRhY2MucHVzaChydWxlTnVtYmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdFx0fSwgW10pO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBpZGVudGlmaWVkIHJ1bGVzIHN0YXJ0aW5nIGZyb20gdGhlIGhpZ2hlc3QgbnVtYmVyIHRvIHByZXZlbnQgc2hpZnRpbmcgb2YgbGluZSBudW1iZXJzXG5cdFx0XHRcdHJ1bGVOdW1iZXJzLnNvcnQoKGEsIGIpID0+IGIgLSBhKS5mb3JFYWNoKHJ1bGVOdW1iZXIgPT4ge1xuXHRcdFx0XHRcdGNtZChgc3VkbyBpcHRhYmxlcyAtRCBGT1JXQVJEICR7cnVsZU51bWJlcn1gLCAocmVtb3ZlRXJyb3IsIHJlbW92ZVN0ZG91dCwgcmVtb3ZlU3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAocmVtb3ZlRXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgcmVtb3ZpbmcgcnVsZSAke3J1bGVOdW1iZXJ9OiAke3JlbW92ZUVycm9yfWApO1xuXHRcdFx0XHRcdFx0XHQvLyBEZWNpZGUgaWYgeW91IHdhbnQgdG8gY29udGludWUgcmVtb3Zpbmcgb3RoZXIgcnVsZXMgb3Igc3RvcCBoZXJlXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBSdWxlICR7cnVsZU51bWJlcn0gcmVtb3ZlZCBzdWNjZXNzZnVsbHkuYCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIEFmdGVyIGF0dGVtcHRpbmcgdG8gcmVtb3ZlIGFsbCBpZGVudGlmaWVkIHJ1bGVzLCBzYXZlIHRoZSBpcHRhYmxlcyBjb25maWd1cmF0aW9uXG5cdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKHNhdmVFcnJvciwgc2F2ZVN0ZG91dCwgc2F2ZVN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdGlmIChzYXZlRXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtzYXZlRXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHNhdmVFcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdpcHRhYmxlcyBydWxlcyB1cGRhdGVkIGFuZCBzYXZlZC4nKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsICdBbGwgTUFDIGZpbHRlciBydWxlcyBmb3IgRXRoZXJuZXQgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNNb2JpbGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXHRcdFx0dmFyIGxpc3ROYXRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtdCBuYXQgLVMgUE9TVFJPVVRJTkcnO1xuXG5cdFx0XHR2YXIgZm9yd2FyZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cdFx0XHR2YXIgbmF0UmVzdWx0ID0gY21kKGxpc3ROYXRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHRpZiAoIWZvcndhcmRSZXN1bHQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIEZPUldBUkQgY2hhaW4gY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFuYXRSZXN1bHQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIFBPU1RST1VUSU5HIGNoYWluIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG5cdFx0XHR9XG5cblxuXHRcdFx0dmFyIHNoYXJpbmdGcm9tV2xhbmludFRvV3dhbiA9IGZvcndhcmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd2xhbmludCAtbyB3d2FuMCAtaiBBQ0NFUFQnKTtcblx0XHRcdHZhciBzaGFyaW5nRnJvbVdsYW51c2JUb1d3YW4gPSBmb3J3YXJkUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW51c2IgLW8gd3dhbjAgLWogQUNDRVBUJyk7XG5cdFx0XHR2YXIgc2hhcmluZ1RvV2xhbmludEZyb21Xd2FuRXN0YWJsaXNoZWQgPSBmb3J3YXJkUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHd3YW4wIC1vIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcpO1xuXHRcdFx0dmFyIHNoYXJpbmdUb1dsYW51c2JGcm9tV3dhbkVzdGFibGlzaGVkID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFudXNiIC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnKTtcblxuXHRcdFx0dmFyIG5hdEZvcldsYW5pbnQgPSBuYXRSZXN1bHQuaW5jbHVkZXMoJy1BIFBPU1RST1VUSU5HIC1zIDEwLjAuMC4wLzI0IC1vIHd3YW4wIC1qIE1BU1FVRVJBREUnKTtcblx0XHRcdHZhciBuYXRGb3JXbGFudXNiID0gbmF0UmVzdWx0LmluY2x1ZGVzKCctQSBQT1NUUk9VVElORyAtcyAxMC4xLjAuMC8yNCAtbyB3d2FuMCAtaiBNQVNRVUVSQURFJyk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0c2hhcmluZ0Zyb21XbGFuaW50VG9Xd2FuICYmXG5cdFx0XHRcdHNoYXJpbmdGcm9tV2xhbnVzYlRvV3dhbiAmJlxuXHRcdFx0XHRzaGFyaW5nVG9XbGFuaW50RnJvbVd3YW5Fc3RhYmxpc2hlZCAmJlxuXHRcdFx0XHRzaGFyaW5nVG9XbGFudXNiRnJvbVd3YW5Fc3RhYmxpc2hlZCAmJlxuXHRcdFx0XHRuYXRGb3JXbGFuaW50ICYmXG5cdFx0XHRcdG5hdEZvcldsYW51c2Jcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0J2VuYWJsZUludGVybmV0U2hhcmluZ01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IG51bGw7XG5cdFx0XHRpcHRhYmxlc0NvbW1hbmRzID0gW1xuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW5pbnQgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgd2xhbnVzYiAtbyB3d2FuMCAtaiBBQ0NFUFQgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIHdsYW51c2IgLW8gd3dhbjAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIHd3YW4wIC1vIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFudXNiIC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUMgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gd3dhbjAgLWogTUFTUVVFUkFERSAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC10IG5hdCAtQSBQT1NUUk9VVElORyAtcyAxMC4wLjAuMC8yNCAtbyB3d2FuMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLXQgbmF0IC1DIFBPU1RST1VUSU5HIC1zIDEwLjEuMC4wLzI0IC1vIHd3YW4wIC1qIE1BU1FVRVJBREUgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUEgUE9TVFJPVVRJTkcgLXMgMTAuMS4wLjAvMjQgLW8gd3dhbjAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0XHRdLmpvaW4oJyAmJiAnKTtcblxuXHRcdFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0ZGVycikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBtb2JpbGUgZW5hYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0Ly8gRGVmaW5lIGNvbW1hbmRzIGZvciBkZWxldGlvbiB3aXRob3V0IGNvbWJpbmluZyB0aGVtXG5cdFx0XHR2YXIgaXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IG51bGw7XG5cblx0XHRcdGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBbXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbmludCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFudXNiIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFudXNiIC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLXNvdXJjZSAxMC4wLjAuMC8yNCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tc291cmNlIDEwLjEuMC4wLzI0IC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJ1xuXHRcdFx0XTtcblxuXHRcdFx0Ly8gRnVuY3Rpb24gdG8gcmVjdXJzaXZlbHkgZXhlY3V0ZSBhIGNvbW1hbmQgdW50aWwgaXQgZmFpbHMgKGluZGljYXRpbmcgbm8gbW9yZSBpbnN0YW5jZXMgb2YgdGhlIHJ1bGUpXG5cdFx0XHRmdW5jdGlvbiBleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjaykge1xuXHRcdFx0XHRjbWQoY29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdC8vIE5vIGVycm9yIG1lYW5zIHRoZSBjb21tYW5kIHN1Y2NlZWRlZCwgc28gdGhlcmUgbWlnaHQgYmUgbW9yZSBpbnN0YW5jZXNcblx0XHRcdFx0XHRpZiAoIWVycm9yKSB7XG5cdFx0XHRcdFx0XHRleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjayk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIEVycm9yIGxpa2VseSBtZWFucyBubyBtb3JlIGluc3RhbmNlcyBvZiB0aGUgcnVsZSwgbW92ZSBvblxuXHRcdFx0XHRcdFx0ZG9uZUNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRXhlY3V0ZSBkZWxldGlvbiBmb3IgZWFjaCBjb21tYW5kIGFuZCB0cmFjayB3aGVuIGFsbCBhcmUgY29tcGxldGVkXG5cdFx0XHR2YXIgdGFza3NDb21wbGV0ZWQgPSAwO1xuXHRcdFx0aXB0YWJsZXNEZWxldGVDb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG5cdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgKCkgPT4ge1xuXHRcdFx0XHRcdHRhc2tzQ29tcGxldGVkKys7XG5cdFx0XHRcdFx0Ly8gQWZ0ZXIgYWxsIGNvbW1hbmRzIGhhdmUgYmVlbiBhdHRlbXB0ZWQsIHNhdmUgdGhlIGNvbmZpZ3VyYXRpb25cblx0XHRcdFx0XHRpZiAodGFza3NDb21wbGV0ZWQgPT09IGlwdGFibGVzRGVsZXRlQ29tbWFuZHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChlcnJvciwgc2F2ZVN0ZG91dCwgc2F2ZVN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdpcHRhYmxlcyBydWxlcyBmb3IgbW9iaWxlIGludGVyZmFjZSB1cGRhdGVkIGFuZCBzYXZlZC4nKTtcblx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIHNwZWNpZmllZCBydWxlcyBmb3IgbW9iaWxlIGludGVyZmFjZSByZW1vdmVkIGFuZCBjaGFuZ2VzIHNhdmVkLicpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHQvLyAnZGlzYWJsZUludGVybmV0U2hhcmluZ01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0Ly8gXHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJyxcblx0XHQvLyBcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcblx0XHQvLyBcdF0uam9pbignICYmICcpO1xuXG5cdFx0Ly8gXHRjbWQoaXB0YWJsZXNDb21tYW5kcywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdC8vIFx0XHRpZiAoZXJyb3IpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0XHRpZiAoc3RkZXJyKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgdmlhIG1vYmlsZSBkaXNhYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0Ly8gXHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHQvLyBcdH0pO1xuXHRcdC8vIH0sXG5cdFx0J2FsbG93SW50ZXJuZXRGb3JNYWNNb2JpbGUnOiBmdW5jdGlvbihtYWNBZGRyZXNzLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vIEZpcnN0LCBlbmFibGUgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHRvIHd3YW4wXG5cdFx0XHRyZXMgPSBjbWQoJ3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW51c2IgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCAmJiBzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW5pbnQgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAmJiBzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW51c2IgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAmJiBzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBlbmFibGluZyBpbnRlcm5ldCBzaGFyaW5nOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IHNoYXJpbmcgZW5hYmxlZCB2aWEgd3dhbjAuYCk7XG5cdFx0XHRcdC8vIEFsbG93IGludGVybmV0IG9ubHkgZm9yIHRoZSBzcGVjaWZpZWQgTUFDIGFkZHJlc3Mgb24gd3dhbjBcblx0XHRcdFx0dmFyIGFsbG93TWFjQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1JIEZPUldBUkQgMSAtaSB3d2FuMCAtbSBtYWMgLS1tYWMtc291cmNlICR7bWFjQWRkcmVzc30gLWogQUNDRVBUYDtcblx0XHRcdFx0Ly8gQmxvY2sgYWxsIG90aGVyIE1BQyBhZGRyZXNzZXMgZnJvbSBhY2Nlc3NpbmcgdGhlIGludGVybmV0IHZpYSB3d2FuMC5cblx0XHRcdFx0dmFyIGJsb2NrT3RoZXJzQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd3dhbjAgLWogRFJPUGA7XG5cblx0XHRcdFx0Ly8gQWxsb3cgc3BlY2lmaWMgTUFDXG5cdFx0XHRcdHJlcyA9IGNtZChhbGxvd01hY0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIGFsbG93aW5nIE1BQyAke21hY0FkZHJlc3N9IG9uIFdXQU46ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGFsbG93ZWQgZm9yIE1BQyAke21hY0FkZHJlc3N9IG9uIFdXQU4uYCk7XG5cblx0XHRcdFx0XHQvLyBCbG9jayBhbGwgb3RoZXIgTUFDc1xuXHRcdFx0XHRcdHJlcyA9IGNtZChibG9ja090aGVyc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBibG9ja2luZyBvdGhlciBNQUNzIG9uIFdXQU46ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGJsb2NrZWQgZm9yIG90aGVyIE1BQyBhZGRyZXNzZXMgb24gV1dBTi5gKTtcblxuXHRcdFx0XHRcdFx0Ly8gU2F2ZSBpcHRhYmxlcyBydWxlc1xuXHRcdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlcyBmb3IgV1dBTjogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBmb3IgV1dBTiBzYXZlZC5gKTtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sobnVsbCk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdyZW1vdmVBbGxNYWNGaWx0ZXJzRm9yTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdC8vIExpc3QgYWxsIEZPUldBUkQgcnVsZXNcblx0XHRcdGNtZCgnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC0tbGluZS1udW1iZXJzIC1uJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByb2Nlc3Mgc3Rkb3V0IHRvIGZpbmQgcnVsZXMgdG8gZGVsZXRlLiBUaGlzIHBhcnQgaXMgcHNldWRvLWNvZGUgYW5kIG5lZWRzIGFkanVzdG1lbnRcblx0XHRcdFx0Y29uc3QgbGluZXMgPSBzdGRvdXQuc3BsaXQoJ1xcbicpO1xuXHRcdFx0XHRjb25zdCBydWxlTnVtYmVycyA9IFtdO1xuXHRcdFx0XHRsaW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xuXHRcdFx0XHRcdGlmIChsaW5lLmluY2x1ZGVzKCd3d2FuMCcpICYmIGxpbmUuaW5jbHVkZXMoJ01BQycpKSB7XG5cdFx0XHRcdFx0XHQvLyBFeHRyYWN0IHRoZSBydWxlIG51bWJlciBmcm9tIHRoZSBsaW5lXG5cdFx0XHRcdFx0XHRjb25zdCBydWxlTnVtYmVyID0gbGluZS5zcGxpdCgnICcpWzBdOyAvLyBUaGlzIGlzIGEgc2ltcGxpZmljYXRpb25cblx0XHRcdFx0XHRcdHJ1bGVOdW1iZXJzLnB1c2gocnVsZU51bWJlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgcnVsZXMgYnkgdGhlaXIgbnVtYmVycywgc3RhcnRpbmcgZnJvbSB0aGUgaGlnaGVzdCBudW1iZXJcblx0XHRcdFx0cnVsZU51bWJlcnMuc29ydCgoYSwgYikgPT4gYiAtIGEpLmZvckVhY2gocnVsZU51bWJlciA9PiB7XG5cdFx0XHRcdFx0Y21kKGBzdWRvIGlwdGFibGVzIC1EIEZPUldBUkQgJHtydWxlTnVtYmVyfWAsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciByZW1vdmluZyBydWxlICR7cnVsZU51bWJlcn06ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0XHQvLyBPcHRpb25hbGx5LCBzdG9wIHRoZSBwcm9jZXNzIG9yIGNvbnRpbnVlIGF0dGVtcHRpbmcgdG8gcmVtb3ZlIG90aGVyIHJ1bGVzXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBSdWxlICR7cnVsZU51bWJlcn0gcmVtb3ZlZCBzdWNjZXNzZnVsbHkuYCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIEFmdGVyIGFsbCBydWxlcyBoYXZlIGJlZW4gcHJvY2Vzc2VkLCBzYXZlIHRoZSBpcHRhYmxlcyBydWxlc1xuXHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnaXB0YWJsZXMgcnVsZXMgdXBkYXRlZCBhbmQgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIE1BQyBmaWx0ZXIgcnVsZXMgZm9yIFdXQU4gcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdyZWJvb3QnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoJ3N1ZG8gcmVib290JywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdCAgY29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHRcdFx0ICByZXR1cm47XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnc2h1dGRvd24nOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoJ3N1ZG8gaGFsdCcsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHQgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdCAgcmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3N5bmNocm9uaXplJzogZnVuY3Rpb24oKSB7XG5cblx0XHRcdGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgc3luYy4uLlwiKTtcblxuXHRcdFx0dmFyIGRldmljZVNlcmlhbCA9IE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuc2VyaWFsO1xuXHRcdFx0dmFyIGRldmljZVRva2VuID0gTWV0ZW9yLnNldHRpbmdzLm1vb2RsZUFQSVRva2VuO1xuXHRcdFx0dmFyIHVybCA9IE1ldGVvci5zZXR0aW5ncy5jbG91ZFVSTCArIFwiL2FwaS9zdGFydFN5bmNcIjtcblx0XHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdCdkZXZpY2VTZXJpYWwnOiBkZXZpY2VTZXJpYWwsXG5cdFx0XHRcdFx0J2RldmljZVRva2VuJzogZGV2aWNlVG9rZW5cblx0XHRcdFx0fSxcblx0XHRcdCAgICBucG1SZXF1ZXN0T3B0aW9uczoge1xuXHRcdFx0ICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLCAvLyBUT0RPIHJlbW92ZSB3aGVuIGRlcGxveVxuXHRcdFx0ICAgICAgICB0aW1lb3V0OiAxMjAwMDAwXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICB0aW1lb3V0OiAxMjAwMDAwXG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvL3ZhciByZXN1bHQgPSBIVFRQLmNhbGwoJ1BPU1QnLCB1cmwsIG9wdGlvbnMpO1xuXG5cdFx0XHRcdHZhciByZXN1bHQgPSBIVFRQLnBvc3QoIHVybCwgb3B0aW9ucyApO1xuXHRcdFx0XHR2YXIgcmVzdWx0Q29udGVudCA9IHJlc3VsdC5jb250ZW50O1xuXHRcdFx0XHQvL1N5bmNocm9uaXphdGlvbnMuaW5zZXJ0KHtkYXRlOkRhdGUubm93KCl9KTtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdENvbnRlbnQ7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coIFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi5cIiwgZSApO1xuXHRcdFx0XHRyZXR1cm4gXCJFcnJvciB3aGlsZSB0cnlpbmcgdG8gc3luY3Jvbml6ZS4uLiBcIisgZTtcblx0XHRcdH1cblx0XHQvL3JldHVybiByZXN1bHRDb250ZW50O1xuXHRcdH0sXG5cdH0pO1xufVxufSk7XG4iLCIvLyBNZXRlb3IucHVibGlzaCgnYWxsQXBwcycsIGZ1bmN0aW9uKCkge1xuLy8gXHRyZXR1cm4gQXBwcy5maW5kKHt9KTtcbi8vIH0pO1xuXG4vLyBNZXRlb3IucHVibGlzaChcInVzZXJzXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCh7fSwge2ZpZWxkczp7Y3JlYXRlZEF0OiB0cnVlLCBwcm9maWxlOiB0cnVlLCBlbWFpbHM6IHRydWUsIHVzZXJuYW1lOiB0cnVlfX0pO1xuLy8gfSk7XG5cblxuICBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgfSk7IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5cbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvYXBwcy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS91c2Vycy5qcyc7XG5cbmltcG9ydCAnLi4vc2VydmVyL2ZpeHR1cmVzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL21ldGhvZHMuanMnO1xuaW1wb3J0ICcuLi9zZXJ2ZXIvcHVibGljYXRpb25zLmpzJztcbmltcG9ydCAnLi4vbGliL2FwcF9sb2FkZXIuanMnO1xuXG5cbi8vaW1wb3J0IHtERFB9IGZyb20gJ21ldGVvci9kZHAnO1xuLy9pbXBvcnQge0FjY291bnRzfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSc7XG5cblxuLy8gaW1wb3J0ICcuLi9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2ZpeHR1cmVzLmpzJztcblxuLy8gaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9maXh0dXJlcy5qcyc7XG5cblxuTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuXHRjb25zb2xlLmxvZyhcIm1ldGVvciBzdGFydGVkLi4uXCIpO1xuXG5cblxuICAvLyBjb2RlIHRvIHJ1biBvbiBzZXJ2ZXIgYXQgc3RhcnR1cFxuXG4gLy8gIFNlcnZlcjIgPSBERFAuY29ubmVjdChcImh0dHA6Ly9iZWVrZWUuYm94OjgzXCIpO1xuXHQvLyBBY2NvdW50cy5jb25uZWN0aW9uID0gU2VydmVyMjtcblx0Ly8gY29uc29sZS5sb2coXCJvbiBjb25uZWN0ZS4uLlwiKTtcbn0pO1xuIl19
