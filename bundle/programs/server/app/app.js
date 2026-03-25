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

},"settings.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/settings.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Settings: () => Settings
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Settings = new Mongo.Collection('home-settings');
Settings.allow({
  insert: function () {
    return false;
  },
  update: function () {
    return false;
  },
  remove: function () {
    return false;
  } // insert: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },
  // update: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },
  // remove: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); }

}); // Publications

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('allSettings', function settingsPublication() {
    return Settings.find();
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
let Settings;
module.link("../imports/api/settings.js", {
  Settings(v) {
    Settings = v;
  }

}, 2);
Meteor.startup(function () {
  if (Meteor.isServer) {
    var fs = Npm.require('fs');

    var path = Npm.require('path');

    exec = Npm.require('child_process').exec;
    cmd = Meteor.wrapAsync(exec);
    var wifiSettingsPath = Meteor.settings.wifiSettingsPath;
    var configPath = Meteor.settings.configPath;
    var scriptsPath = Meteor.settings.scriptsPath || '/home/beekee/scripts';
    var wifiClientEnableScriptName = 'switch_wifi_to_client.sh';
    var wifiClientDisableScriptName = 'switch_wifi_to_ap.sh';
    var wifiClientModeStatePath = Meteor.settings.wifiClientModeStatePath || `${scriptsPath}/.wifi-client-mode-state`;
    var networkControlSettingsPath = Meteor.settings.networkControlSettingsPath || `${scriptsPath}/network-control-settings.json`;
    var networkControlApplyScriptName = Meteor.settings.networkControlApplyScriptName || 'apply_network_control.sh';
    var networkControlSettingsId = 'network-control-settings';

    const readline = require('readline');

    function shellEscape(value) {
      return `'${String(value).replace(/'/g, `'\\''`)}'`;
    }

    function resolveScriptPath(scriptName) {
      return `${scriptsPath}/${scriptName}`;
    }

    function normalizeDomainEntry(rawEntry) {
      if (typeof rawEntry !== 'string') {
        return null;
      }

      var normalizedEntry = rawEntry.trim().toLowerCase();

      if (!normalizedEntry) {
        return null;
      }

      normalizedEntry = normalizedEntry.replace(/^[a-z]+:\/\//, '');
      normalizedEntry = normalizedEntry.split('/')[0];
      normalizedEntry = normalizedEntry.split('?')[0];
      normalizedEntry = normalizedEntry.split('#')[0];
      normalizedEntry = normalizedEntry.replace(/:\d+$/, '');
      normalizedEntry = normalizedEntry.replace(/^\*\./, '');
      normalizedEntry = normalizedEntry.replace(/^\.+/, '').replace(/\.+$/, '');

      if (!normalizedEntry || normalizedEntry.includes('..')) {
        return null;
      }

      if (!/^[a-z0-9][a-z0-9.-]*[a-z0-9]$/.test(normalizedEntry)) {
        return null;
      }

      return normalizedEntry;
    }

    function sanitizeDomainList(rawEntries) {
      var entries = Array.isArray(rawEntries) ? rawEntries : [];
      var normalizedEntries = [];
      var seenEntries = new Set();
      entries.forEach(entry => {
        var normalizedEntry = normalizeDomainEntry(entry);

        if (!normalizedEntry || seenEntries.has(normalizedEntry)) {
          return;
        }

        seenEntries.add(normalizedEntry);
        normalizedEntries.push(normalizedEntry);
      });
      return normalizedEntries.slice(0, 200);
    }

    function getDefaultNetworkControlSettings() {
      return {
        _id: networkControlSettingsId,
        sharingControlModeEnabled: false,
        whitelist: [],
        blacklist: []
      };
    }

    function normalizeNetworkControlSettings(rawSettings) {
      var defaultSettings = getDefaultNetworkControlSettings();
      var mergedSettings = Object.assign({}, defaultSettings, rawSettings || {});
      var whitelist = sanitizeDomainList(mergedSettings.whitelist);
      var blacklist = sanitizeDomainList(mergedSettings.blacklist).filter(entry => !whitelist.includes(entry));
      return {
        _id: networkControlSettingsId,
        sharingControlModeEnabled: mergedSettings.sharingControlModeEnabled === true,
        whitelist: whitelist,
        blacklist: blacklist
      };
    }

    function getNetworkControlSystemStatus() {
      var scriptPath = resolveScriptPath(networkControlApplyScriptName);
      var backendReady = fs.existsSync(scriptPath);
      return {
        backendReady: backendReady,
        backendStatus: backendReady ? 'System hook ready' : 'Configuration only'
      };
    }

    function buildNetworkControlSettingsResponse(rawSettings) {
      var settings = normalizeNetworkControlSettings(rawSettings);
      var systemStatus = getNetworkControlSystemStatus();
      var whitelistCount = settings.whitelist.length;
      var blacklistCount = settings.blacklist.length;
      var policyMode = 'unrestricted';

      if (whitelistCount > 0 && blacklistCount > 0) {
        policyMode = 'whitelist + blacklist';
      } else if (whitelistCount > 0) {
        policyMode = 'whitelist';
      } else if (blacklistCount > 0) {
        policyMode = 'blacklist';
      }

      return Object.assign({}, settings, systemStatus, {
        whitelistCount: whitelistCount,
        blacklistCount: blacklistCount,
        totalRules: whitelistCount + blacklistCount,
        policyMode: policyMode
      });
    }

    function getNetworkControlSettingsFromStore() {
      return normalizeNetworkControlSettings(Settings.findOne(networkControlSettingsId));
    }

    function ensureNetworkControlSettingsDocument() {
      var existingSettings = Settings.findOne(networkControlSettingsId);

      if (existingSettings) {
        return normalizeNetworkControlSettings(existingSettings);
      }

      var defaultSettings = getDefaultNetworkControlSettings();
      Settings.insert(Object.assign({}, defaultSettings, {
        updatedAt: new Date()
      }));
      return defaultSettings;
    }

    function persistNetworkControlSettings(rawSettings) {
      var settings = normalizeNetworkControlSettings(rawSettings);
      Settings.upsert({
        _id: networkControlSettingsId
      }, {
        $set: {
          sharingControlModeEnabled: settings.sharingControlModeEnabled,
          whitelist: settings.whitelist,
          blacklist: settings.blacklist,
          updatedAt: new Date()
        }
      });
      return settings;
    }

    function writeNetworkControlSettingsFile(rawSettings) {
      var settings = buildNetworkControlSettingsResponse(rawSettings);
      var networkControlDirectory = path.dirname(networkControlSettingsPath);

      if (!fs.existsSync(networkControlDirectory)) {
        fs.mkdirSync(networkControlDirectory, {
          recursive: true
        });
      }

      fs.writeFileSync(networkControlSettingsPath, JSON.stringify({
        sharingControlModeEnabled: settings.sharingControlModeEnabled,
        whitelist: settings.whitelist,
        blacklist: settings.blacklist,
        policyMode: settings.policyMode,
        updatedAt: new Date().toISOString()
      }, null, 2) + '\n', 'utf-8');
      return settings;
    }

    function syncNetworkControlSettingsToSystem(rawSettings) {
      var settings = writeNetworkControlSettingsFile(rawSettings);
      var scriptPath = resolveScriptPath(networkControlApplyScriptName);

      if (!fs.existsSync(scriptPath)) {
        return settings;
      }

      try {
        cmd(`timeout 20s bash ${shellEscape(scriptPath)} ${shellEscape(networkControlSettingsPath)}`);
      } catch (error) {
        console.log('Error applying network control settings:', error);
        throw new Meteor.Error('network-control-apply-failed', error.reason || error.message || 'Failed to apply network control settings.');
      }

      return settings;
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

    function getInterfaceSubnetFromSystem(interfaceName) {
      try {
        const subnet = cmd(`ip -4 route show dev ${interfaceName} scope link 2>/dev/null | awk '/^[0-9]/ {print $1; exit}' || true`).trim();
        return subnet || null;
      } catch (error) {
        console.log(`Error retrieving subnet for ${interfaceName}:`, error);
      }

      return null;
    }

    function getWifiClientSubnetConflictFromSystem() {
      const accessPointSubnet = getInterfaceSubnetFromSystem('wlanint');
      const clientSubnet = getInterfaceSubnetFromSystem('wlanusb');
      return {
        detected: !!accessPointSubnet && !!clientSubnet && accessPointSubnet === clientSubnet,
        accessPointSubnet: accessPointSubnet,
        clientSubnet: clientSubnet
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
      syncNetworkControlSettingsToSystem(getNetworkControlSettingsFromStore());
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
      syncNetworkControlSettingsToSystem(getNetworkControlSettingsFromStore());
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

    try {
      syncNetworkControlSettingsToSystem(ensureNetworkControlSettingsDocument());
    } catch (error) {
      console.log('Network control settings could not be applied during startup:', error);
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
      'getSharingControlSettings': function () {
        return buildNetworkControlSettingsResponse(ensureNetworkControlSettingsDocument());
      },
      'setSharingControlModeEnabled': function (enabled) {
        check(enabled, Boolean);
        var currentSettings = getNetworkControlSettingsFromStore();
        var nextSettings = persistNetworkControlSettings(Object.assign({}, currentSettings, {
          sharingControlModeEnabled: enabled
        }));
        return syncNetworkControlSettingsToSystem(nextSettings);
      },
      'setSharingControlDomainList': function (listName, domains) {
        check(listName, String);

        if (!Array.isArray(domains)) {
          throw new Meteor.Error('invalid-domain-list', 'Domain lists must be sent as an array.');
        }

        if (listName !== 'whitelist' && listName !== 'blacklist') {
          throw new Meteor.Error('invalid-domain-list-name', 'Unsupported domain list.');
        }

        var currentSettings = getNetworkControlSettingsFromStore();
        var updatedSettings = Object.assign({}, currentSettings, {
          [listName]: domains
        });
        var savedSettings = persistNetworkControlSettings(updatedSettings);
        return syncNetworkControlSettingsToSystem(savedSettings);
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
            const subnetConflict = getWifiClientSubnetConflictFromSystem();

            if (subnetConflict.detected) {
              throw new Meteor.Error('wifi-client-subnet-conflict', `Connected to ${ssid}, but the external Wi-Fi uses the same subnet as the Box local Wi-Fi (${subnetConflict.clientSubnet}).`);
            }

            return true;
          }

          const connectionConfig = {
            ssid: ssid
          };

          if (typeof password === 'string' && password !== '') {
            connectionConfig.password = password;
          }

          try {
            if (currentConnectionInfo.ssid !== 'Not connected') {
              Promise.await(new Promise(resolve => {
                wifi.disconnect(() => {
                  resolve(true);
                });
              }));
              Promise.await(wait(1000));
            }

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

            const isVerified = Promise.await(waitForClientSSID(ssid, 30000));

            if (!isVerified) {
              console.log('Connected callback returned success but SSID verification failed:', ssid);
              return false;
            }

            const subnetConflict = getWifiClientSubnetConflictFromSystem();

            if (subnetConflict.detected) {
              throw new Meteor.Error('wifi-client-subnet-conflict', `Connected to ${ssid}, but the external Wi-Fi uses the same subnet as the Box local Wi-Fi (${subnetConflict.clientSubnet}).`);
            }

            console.log('Connected to wifi:', ssid);
            return true;
          } catch (error) {
            if (error instanceof Meteor.Error) {
              throw error;
            }

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

          try {
            syncNetworkControlSettingsToSystem(getNetworkControlSettingsFromStore());
          } catch (networkControlError) {
            console.log('Network control sync after enabling Ethernet sharing failed:', networkControlError);
          }

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

                try {
                  syncNetworkControlSettingsToSystem(getNetworkControlSettingsFromStore());
                } catch (networkControlError) {
                  console.log('Network control sync after disabling Ethernet sharing failed:', networkControlError);
                }

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

          try {
            syncNetworkControlSettingsToSystem(getNetworkControlSettingsFromStore());
          } catch (networkControlError) {
            console.log('Network control sync after enabling mobile sharing failed:', networkControlError);
          }

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

                try {
                  syncNetworkControlSettingsToSystem(getNetworkControlSettingsFromStore());
                } catch (networkControlError) {
                  console.log('Network control sync after disabling mobile sharing failed:', networkControlError);
                }

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3NldHRpbmdzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9zeW5jaHJvbml6YXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS91c2Vycy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvd2lmaUNsaWVudE1vZGVTdGF0ZS5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL2ZpeHR1cmVzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWV0aG9kcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3B1YmxpY2F0aW9ucy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsiTWV0ZW9yIiwiaXNTZXJ2ZXIiLCJJbmplY3QiLCJyYXdIZWFkIiwicmF3Qm9keSIsIkFzc2V0cyIsImdldFRleHQiLCJpc0NsaWVudCIsInN0YXJ0dXAiLCJzZXRUaW1lb3V0IiwiJCIsImFkZENsYXNzIiwiZmFkZU91dCIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwibW9kdWxlIiwiZXhwb3J0IiwiQXBwcyIsIk1vbmdvIiwibGluayIsInYiLCJDb2xsZWN0aW9uIiwiYWxsb3ciLCJpbnNlcnQiLCJ1cGRhdGUiLCJ1c2VySWQiLCJzcGFjZSIsInB1Ymxpc2giLCJhcHBzUHVibGljYXRpb24iLCJmaW5kIiwiU2V0dGluZ3MiLCJzZXR0aW5nc1B1YmxpY2F0aW9uIiwiU3luY2hyb25pemF0aW9ucyIsInN5bmNocm9uaXphdGlvbnNQdWJsaWNhdGlvbiIsImlzQWRtaW4iLCJjb25zb2xlIiwibG9nIiwiUm9sZXMiLCJ1c2VySXNJblJvbGUiLCJ1c2VyIiwicm9sZUFzc2lnbm1lbnQiLCJyZWFkeSIsIldpZmlDbGllbnRNb2RlU3RhdGUiLCJ3aWZpQ2xpZW50TW9kZVN0YXRlUHVibGljYXRpb24iLCJfaWQiLCJjcmVhdGVSb2xlIiwidW5sZXNzRXhpc3RzIiwidXNlcnMiLCJjb3VudCIsImFkbWluUGFzc3dvcmQiLCJzZXR0aW5ncyIsInVzZXJuYW1lIiwicm9sZXMiLCJfIiwiZWFjaCIsImlkIiwiQWNjb3VudHMiLCJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInByb2ZpbGUiLCJuYW1lIiwibGVuZ3RoIiwiYWRkVXNlcnNUb1JvbGVzIiwiZGVmYXVsdEFwcHMiLCJjdXN0b21BcHAiLCJvbmx5VGVhY2hlciIsIm9yZGVyIiwiZG9jX3VzZXIiLCJkb2NfYWRtaW4iLCJsYXN0X3ZlcnNpb24iLCJ1cmwiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJpbnN0YWxsZWQiLCJ2ZXJzaW9uIiwiaGlkZGVuIiwiSFRUUCIsImZzIiwiTnBtIiwicmVxdWlyZSIsInBhdGgiLCJleGVjIiwiY21kIiwid3JhcEFzeW5jIiwid2lmaVNldHRpbmdzUGF0aCIsImNvbmZpZ1BhdGgiLCJzY3JpcHRzUGF0aCIsIndpZmlDbGllbnRFbmFibGVTY3JpcHROYW1lIiwid2lmaUNsaWVudERpc2FibGVTY3JpcHROYW1lIiwid2lmaUNsaWVudE1vZGVTdGF0ZVBhdGgiLCJuZXR3b3JrQ29udHJvbFNldHRpbmdzUGF0aCIsIm5ldHdvcmtDb250cm9sQXBwbHlTY3JpcHROYW1lIiwibmV0d29ya0NvbnRyb2xTZXR0aW5nc0lkIiwicmVhZGxpbmUiLCJzaGVsbEVzY2FwZSIsInZhbHVlIiwiU3RyaW5nIiwicmVwbGFjZSIsInJlc29sdmVTY3JpcHRQYXRoIiwic2NyaXB0TmFtZSIsIm5vcm1hbGl6ZURvbWFpbkVudHJ5IiwicmF3RW50cnkiLCJub3JtYWxpemVkRW50cnkiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsImluY2x1ZGVzIiwidGVzdCIsInNhbml0aXplRG9tYWluTGlzdCIsInJhd0VudHJpZXMiLCJlbnRyaWVzIiwiQXJyYXkiLCJpc0FycmF5Iiwibm9ybWFsaXplZEVudHJpZXMiLCJzZWVuRW50cmllcyIsIlNldCIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsImFkZCIsInB1c2giLCJzbGljZSIsImdldERlZmF1bHROZXR3b3JrQ29udHJvbFNldHRpbmdzIiwic2hhcmluZ0NvbnRyb2xNb2RlRW5hYmxlZCIsIndoaXRlbGlzdCIsImJsYWNrbGlzdCIsIm5vcm1hbGl6ZU5ldHdvcmtDb250cm9sU2V0dGluZ3MiLCJyYXdTZXR0aW5ncyIsImRlZmF1bHRTZXR0aW5ncyIsIm1lcmdlZFNldHRpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwiZmlsdGVyIiwiZ2V0TmV0d29ya0NvbnRyb2xTeXN0ZW1TdGF0dXMiLCJzY3JpcHRQYXRoIiwiYmFja2VuZFJlYWR5IiwiZXhpc3RzU3luYyIsImJhY2tlbmRTdGF0dXMiLCJidWlsZE5ldHdvcmtDb250cm9sU2V0dGluZ3NSZXNwb25zZSIsInN5c3RlbVN0YXR1cyIsIndoaXRlbGlzdENvdW50IiwiYmxhY2tsaXN0Q291bnQiLCJwb2xpY3lNb2RlIiwidG90YWxSdWxlcyIsImdldE5ldHdvcmtDb250cm9sU2V0dGluZ3NGcm9tU3RvcmUiLCJmaW5kT25lIiwiZW5zdXJlTmV0d29ya0NvbnRyb2xTZXR0aW5nc0RvY3VtZW50IiwiZXhpc3RpbmdTZXR0aW5ncyIsInVwZGF0ZWRBdCIsIkRhdGUiLCJwZXJzaXN0TmV0d29ya0NvbnRyb2xTZXR0aW5ncyIsInVwc2VydCIsIiRzZXQiLCJ3cml0ZU5ldHdvcmtDb250cm9sU2V0dGluZ3NGaWxlIiwibmV0d29ya0NvbnRyb2xEaXJlY3RvcnkiLCJkaXJuYW1lIiwibWtkaXJTeW5jIiwicmVjdXJzaXZlIiwid3JpdGVGaWxlU3luYyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b0lTT1N0cmluZyIsInN5bmNOZXR3b3JrQ29udHJvbFNldHRpbmdzVG9TeXN0ZW0iLCJlcnJvciIsIkVycm9yIiwicmVhc29uIiwibWVzc2FnZSIsInJlYWRXaWZpQ2xpZW50TW9kZVN0YXRlIiwic3RhdGUiLCJyZWFkRmlsZVN5bmMiLCJ3cml0ZVdpZmlDbGllbnRNb2RlU3RhdGUiLCJlbmFibGVkIiwicGVyc2lzdFdpZmlDbGllbnRNb2RlU3RhdGUiLCJkZXRlY3RXaWZpQWNjZXNzUG9pbnRNb2RlRnJvbVN5c3RlbSIsImhhc1dsYW5Vc2IiLCJ0b1N0cmluZyIsImhhc0FwQWRkcmVzcyIsImRldGVjdFdpZmlDbGllbnRNb2RlRnJvbVN5c3RlbSIsIm5tU3RhdGUiLCJnZXRXaWZpQ2xpZW50TW9kZVN0YXRlIiwiZGV0ZWN0ZWRTdGF0ZSIsImVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCIsImdldENsaWVudFNTSURGcm9tU3lzdGVtIiwic3NpZCIsImdldENsaWVudEJTU0lERnJvbVN5c3RlbSIsImJzc2lkIiwidG9VcHBlckNhc2UiLCJnZXRDbGllbnRDb25uZWN0aW9uSW5mb0Zyb21TeXN0ZW0iLCJnZXRJbnRlcmZhY2VTdWJuZXRGcm9tU3lzdGVtIiwiaW50ZXJmYWNlTmFtZSIsInN1Ym5ldCIsImdldFdpZmlDbGllbnRTdWJuZXRDb25mbGljdEZyb21TeXN0ZW0iLCJhY2Nlc3NQb2ludFN1Ym5ldCIsImNsaWVudFN1Ym5ldCIsImRldGVjdGVkIiwid2FpdCIsIm1pbGxpc2Vjb25kcyIsIlByb21pc2UiLCJyZXNvbHZlIiwid2FpdEZvckNsaWVudFNTSUQiLCJleHBlY3RlZFNTSUQiLCJ0aW1lb3V0TWlsbGlzZWNvbmRzIiwiZGVhZGxpbmUiLCJub3ciLCJnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNXaWZpQ2xpZW50RnJvbVN5c3RlbSIsInN0YXR1cyIsIm1hY0FkZHJlc3MiLCJsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCIsImxpc3ROYXRSdWxlc0NvbW1hbmQiLCJmb3J3YXJkUmVzdWx0IiwibmF0UmVzdWx0Iiwic2hhcmluZ0Zyb21XbGFuaW50VG9XbGFudXNiIiwic2hhcmluZ1RvV2xhbmludEZyb21XbGFudXNiRXN0YWJsaXNoZWQiLCJuYXRGb3JXbGFuaW50IiwiZW5hYmxlSW50ZXJuZXRTaGFyaW5nV2lmaUNsaWVudEluU3lzdGVtIiwiaXB0YWJsZXNDb21tYW5kcyIsImpvaW4iLCJkaXNhYmxlSW50ZXJuZXRTaGFyaW5nV2lmaUNsaWVudEluU3lzdGVtIiwiaXB0YWJsZXNEZWxldGVDb21tYW5kcyIsImV4ZWN1dGVBbmRSZXBlYXQiLCJjb21tYW5kIiwiZ2V0Q2FwdGl2ZVBvcnRhbFN0YXR1c0Zyb21TeXN0ZW0iLCJyZXNwb25zZSIsInN0YXR1c01hdGNoIiwibWF0Y2giLCJsb2NhdGlvbk1hdGNoIiwiZWZmZWN0aXZlVXJsTWF0Y2giLCJzdGF0dXNDb2RlIiwicGFyc2VJbnQiLCJlZmZlY3RpdmVVcmwiLCJydW5XaWZpTW9kZVNjcmlwdCIsIm1ldGhvZHMiLCJhZG1pbklkIiwibmV3UGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNoZWNrIiwib2xkZW1haWwiLCJlbWFpbHMiLCJlbWFpbFJlZyIsInJlbW92ZUVtYWlsIiwiYWRkcmVzcyIsImFkZEVtYWlsIiwicmVzdWx0IiwicmVtb3ZlVXNlcnNGcm9tUm9sZXMiLCJCb29sZWFuIiwiY3VycmVudFNldHRpbmdzIiwibmV4dFNldHRpbmdzIiwibGlzdE5hbWUiLCJkb21haW5zIiwidXBkYXRlZFNldHRpbmdzIiwic2F2ZWRTZXR0aW5ncyIsInJlcyIsInN0b3JhZ2VVc2FnZSIsInRvRml4ZWQiLCJzdG9yYWdlVG90YWwiLCJwZXJjZW50YWdlIiwiZGF0YSIsIlJlZ0V4cCIsIlNTSUQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJuZXdTU0lEIiwiZW5jb2RlZE5ld1NTSUQiLCJCdWZmZXIiLCJuZXdEYXRhIiwiY2hhbm5lbCIsIm5ld0NoYW5uZWwiLCJzZXJpYWwiLCJvcGVyYXRvck5hbWUiLCJzaWduYWxTdHJlbmd0aCIsInN0cmVuZ3RoVmFsdWUiLCJxdWFsaXR5IiwiQVBOIiwiQVBOVXNlciIsIkFQTlBhc3N3b3JkIiwic2ltU3RhdHVzUmVzdWx0IiwiZXhlY3V0ZUNvbW1hbmQiLCJzaW1TdGF0dXMiLCJTaW1QaW4iLCJQSU4iLCJpc1NoYXJpbmciLCJyZXMyIiwiaXNPbmxpbmUiLCJqc29uIiwicGFyc2UiLCJ3aWZpIiwiaW5pdCIsImlmYWNlIiwicmVqZWN0Iiwic2NhbiIsIm5ldHdvcmtzIiwidW5pcXVlTmV0d29ya3MiLCJNYXAiLCJuZXR3b3JrIiwic3RyZW5ndGgiLCJtYWMiLCJrZXkiLCJnZXQiLCJzZXQiLCJzZWN1cml0eSIsInVuaXF1ZU5ldHdvcmtzQXJyYXkiLCJmcm9tIiwidmFsdWVzIiwiY3VycmVudENvbm5lY3Rpb25JbmZvIiwic3VibmV0Q29uZmxpY3QiLCJjb25uZWN0aW9uQ29uZmlnIiwiZGlzY29ubmVjdCIsImNvbm5lY3RSZXN1bHQiLCJjb25uZWN0IiwiaXNWZXJpZmllZCIsImRlbGV0ZUNvbm5lY3Rpb24iLCJzaGFyaW5nRnJvbVdsYW5pbnRUb0V0aCIsInNoYXJpbmdGcm9tV2xhbnVzYlRvRXRoIiwic2hhcmluZ1RvV2xhbmludEZyb21FdGhFc3RhYmxpc2hlZCIsInNoYXJpbmdUb1dsYW51c2JGcm9tRXRoRXN0YWJsaXNoZWQiLCJuYXRGb3JXbGFudXNiIiwiY2FsbGJhY2siLCJzdGRvdXQiLCJzdGRlcnIiLCJuZXR3b3JrQ29udHJvbEVycm9yIiwiZG9uZUNhbGxiYWNrIiwidGFza3NDb21wbGV0ZWQiLCJhbGxvd01hY0NvbW1hbmQiLCJibG9ja090aGVyc0NvbW1hbmQiLCJsaW5lcyIsInJ1bGVOdW1iZXJzIiwicmVkdWNlIiwiYWNjIiwibGluZSIsImluZGV4IiwicnVsZU51bWJlciIsInNvcnQiLCJhIiwiYiIsInJlbW92ZUVycm9yIiwicmVtb3ZlU3Rkb3V0IiwicmVtb3ZlU3RkZXJyIiwic2F2ZUVycm9yIiwic2F2ZVN0ZG91dCIsInNhdmVTdGRlcnIiLCJzaGFyaW5nRnJvbVdsYW5pbnRUb1d3YW4iLCJzaGFyaW5nRnJvbVdsYW51c2JUb1d3YW4iLCJzaGFyaW5nVG9XbGFuaW50RnJvbVd3YW5Fc3RhYmxpc2hlZCIsInNoYXJpbmdUb1dsYW51c2JGcm9tV3dhbkVzdGFibGlzaGVkIiwiZGV2aWNlU2VyaWFsIiwicHVibGljIiwiZGV2aWNlVG9rZW4iLCJtb29kbGVBUElUb2tlbiIsImNsb3VkVVJMIiwib3B0aW9ucyIsImhlYWRlcnMiLCJucG1SZXF1ZXN0T3B0aW9ucyIsInJlamVjdFVuYXV0aG9yaXplZCIsInRpbWVvdXQiLCJwb3N0IiwicmVzdWx0Q29udGVudCIsImNvbnRlbnQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sQ0FBQ0MsUUFBWCxFQUFxQjtBQUNwQkMsUUFBTSxDQUFDQyxPQUFQLENBQWUsWUFBZixFQUE2QiwyTkFBN0I7QUFFQUQsUUFBTSxDQUFDRSxPQUFQLENBQWUsWUFBZixFQUE2QkMsTUFBTSxDQUFDQyxPQUFQLENBQWUsaUJBQWYsQ0FBN0I7QUFDQTs7QUFFRCxJQUFJTixNQUFNLENBQUNPLFFBQVgsRUFBcUI7QUFDcEJQLFFBQU0sQ0FBQ1EsT0FBUCxDQUFlLFlBQVc7QUFFekJDLGNBQVUsQ0FBQyxZQUFXO0FBQ2pCQyxPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCQyxRQUFsQixDQUEyQixlQUEzQjtBQUVKRCxPQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QkUsT0FBNUIsQ0FBb0MsR0FBcEMsRUFBeUMsWUFBVztBQUNuREYsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxNQUFSO0FBQ0FILFNBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JJLFdBQWxCLENBQThCLGVBQTlCO0FBQ0QsT0FIQTtBQUlBLEtBUFMsRUFPUCxHQVBPLENBQVY7QUFRQSxHQVZEO0FBV0EsQzs7Ozs7Ozs7Ozs7QUNsQkRDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUNDLE1BQUksRUFBQyxNQUFJQTtBQUFWLENBQWQ7QUFBK0IsSUFBSUMsS0FBSjtBQUFVSCxNQUFNLENBQUNJLElBQVAsQ0FBWSxjQUFaLEVBQTJCO0FBQUNELE9BQUss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QUMyQixPQUFQLENBQWUsVUFBZixFQUEyQixZQUFZO0FBQ3RDUSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFVcEMsTUFBTSxDQUFDK0MsS0FBUCxDQUFhbEIsSUFBYixHQUFvQm1CLEtBQXBCLEVBQXRCO0FBQ0MsU0FBT2hELE1BQU0sQ0FBQytDLEtBQVAsQ0FBYWxCLElBQWIsRUFBUDtBQUNELENBSEQsRTs7Ozs7Ozs7Ozs7QUNURixJQUFJN0IsTUFBSjtBQUFXZSxNQUFNLENBQUNJLElBQVAsQ0FBWSxlQUFaLEVBQTRCO0FBQUNuQixRQUFNLENBQUNvQixDQUFELEVBQUc7QUFBQ3BCLFVBQU0sR0FBQ29CLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcURMLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHdCQUFaO0FBQXNDSixNQUFNLENBQUNJLElBQVAsQ0FBWSxvQ0FBWjtBQUFrREosTUFBTSxDQUFDSSxJQUFQLENBQVkseUJBQVo7QUFBdUNKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHVCQUFaO0FBQXFDSixNQUFNLENBQUNJLElBQVAsQ0FBWSxzQkFBWjtBQUFvQ0osTUFBTSxDQUFDSSxJQUFQLENBQVksMkJBQVo7QUFBeUNKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHNCQUFaO0FBWWpUO0FBQ0E7QUFHQTtBQUVBO0FBR0FuQixNQUFNLENBQUNRLE9BQVAsQ0FBZSxNQUFNO0FBQ3BCMkIsU0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFEb0IsQ0FLbkI7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQVZELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblx0SW5qZWN0LnJhd0hlYWQoXCJtZXRhTG9hZGVyXCIsICc8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBoZWlnaHQ9ZGV2aWNlLWhlaWdodFwiLz48bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj5cdDxtZXRhIG5hbWU9XCJtb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiPicpO1xuXG5cdEluamVjdC5yYXdCb2R5KFwiaHRtbExvYWRlclwiLCBBc3NldHMuZ2V0VGV4dCgnYXBwX2xvYWRlci5odG1sJykpO1xufVxuXG5pZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XG5cdE1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0JCgnLmluZGV4LS1pY29uJykuYWRkQ2xhc3MoJ2FuaW1hdGVkLWljb24nKTtcblxuXHRcdFx0JChcIiNpbmplY3QtbG9hZGVyLXdyYXBwZXJcIikuZmFkZU91dCg1MDAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHQkKCcuaW5kZXgtLWljb24nKS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQtaWNvbicpO1xuXHRcdH0pO1xuXHRcdH0sIDUwMCk7XG5cdH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBBcHBzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtYXBwcycpO1xuXG5cblxuQXBwcy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXG5cdC8vIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyB1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gcmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9XG59KTtcblxuLy8gUHVibGljYXRpb25zXG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxBcHBzJywgZnVuY3Rpb24gYXBwc1B1YmxpY2F0aW9uKCkge1xuICAgIHJldHVybiBBcHBzLmZpbmQoKTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuIFxuZXhwb3J0IGNvbnN0IFNldHRpbmdzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtc2V0dGluZ3MnKTtcblxuXG5cblNldHRpbmdzLmFsbG93KHtcblxuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2V9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2V9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2V9LFxuXG5cdC8vIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyB1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gcmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9XG59KTtcblxuLy8gUHVibGljYXRpb25zXG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxTZXR0aW5ncycsIGZ1bmN0aW9uIHNldHRpbmdzUHVibGljYXRpb24oKSB7XG4gICAgcmV0dXJuIFNldHRpbmdzLmZpbmQoKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgU3luY2hyb25pemF0aW9ucyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdob21lLXN5bmNocm9uaXphdGlvbnMnKTtcblxuXG5cblN5bmNocm9uaXphdGlvbnMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0dXBkYXRlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cblx0Ly8gaW5zZXJ0OiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHVwZGF0ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyByZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH1cbn0pO1xuXG4vLyBQdWJsaWNhdGlvbnNcblxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbFN5bmNocm9uaXphdGlvbnMnLCBmdW5jdGlvbiBzeW5jaHJvbml6YXRpb25zUHVibGljYXRpb24oKSB7XG4gICAgcmV0dXJuIFN5bmNocm9uaXphdGlvbnMuZmluZCgpO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5cbi8vIHZhciB1c2Vyc0RCXHQ9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vLyB2YXIgY29sbGVjdGlvblx0PSB1c2Vyc0RCLm9wZW4oJ3VzZXJzJyk7XG5cblxuLy9jb25zdCBkYXRhYmFzZSA9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vL2NvbnN0IGNvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vZXhwb3J0IGNvbnN0IFVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vLyBTaGFyaW5nIHRoZSBzYW1lIEFjY291bnQgY29sbGVjdGlvbiB0aGFuIGJlZWtlZS1saXZlXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0Ly8gY2hlY2sgdGhhdCB0aGUgdXNlcklkIHNwZWNpZmllZCBpcyBhZG1pblxuaXNBZG1pbiA9IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRjb25zb2xlLmxvZyhcImlzYWRtaW5cIik7XG4gIHJldHVybiBSb2xlcy51c2VySXNJblJvbGUoTWV0ZW9yLnVzZXIoKSwgJ2FkbWluJyk7XG59XG5cblxuLy8gUHVibGlzaCBSb2xlcyB0byBjbGllbnRcbk1ldGVvci5wdWJsaXNoKG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgcmV0dXJuIE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKHsgJ3VzZXIuX2lkJzogdGhpcy51c2VySWQgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5yZWFkeSgpXG4gIH1cbn0pO1xuXG5NZXRlb3IucHVibGlzaChudWxsLCBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoKTtcblxufSk7XG5cbiAgLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICAvLyBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gIC8vICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIC8vIH0pO1xuXG4vLyBTZXJ2ZXIyID0gRERQLmNvbm5lY3QoXCJodHRwOi8vYmVla2VlLmJveDo4M1wiKTtcbi8vIEFjY291bnRzLmNvbm5lY3Rpb24gPSBTZXJ2ZXIyO1xuXG5cbi8vdmFyIGRhdGFiYXNlID0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vTWV0ZW9yLnVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vL2V4cG9ydCBjb25zdCBVc2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdhcHBzJyk7XG5cblxuICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcbiAgLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICAvLyBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gIC8vICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIC8vIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuZXhwb3J0IGNvbnN0IFdpZmlDbGllbnRNb2RlU3RhdGUgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignd2lmaUNsaWVudE1vZGVTdGF0ZScpO1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cdE1ldGVvci5wdWJsaXNoKCd3aWZpQ2xpZW50TW9kZVN0YXRlJywgZnVuY3Rpb24gd2lmaUNsaWVudE1vZGVTdGF0ZVB1YmxpY2F0aW9uKCkge1xuXHRcdHJldHVybiBXaWZpQ2xpZW50TW9kZVN0YXRlLmZpbmQoeyBfaWQ6ICd3aWZpLWNsaWVudC1tb2RlLXN0YXRlJyB9KTtcblx0fSk7XG59XG4iLCJpbXBvcnQgeyBBcHBzIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvYXBwcy5qcyc7XG5cblx0Ly8gQ3JlYXRlIHRoZSByb2xlc1xuXHRSb2xlcy5jcmVhdGVSb2xlKCdtYW5hZ2VyJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXG5cbi8vICMjIyAgQ3JlYXRlIGFkbWluIHVzZXIgYXQgZmlyc3Qgc3RhcnQgICMjI1xuXG5cbmlmIChNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblx0XG5cdC8vIENyZWF0ZSB0aGUgcm9sZVxuXHRSb2xlcy5jcmVhdGVSb2xlKCdtYW5hZ2VyJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXHRSb2xlcy5jcmVhdGVSb2xlKCdhZG1pbicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblxuXHR2YXIgYWRtaW5QYXNzd29yZCA9IE1ldGVvci5zZXR0aW5ncy5hZG1pblBhc3N3b3JkO1xuXG5cdHZhciB1c2VycyA9IFtcblx0XHR7dXNlcm5hbWU6XCJhZG1pblwiLHJvbGVzOlsnYWRtaW4nXX0sXG5cdF07XG5cblx0Xy5lYWNoKHVzZXJzLCBmdW5jdGlvbiAodXNlcikge1xuXHRcdHZhciBpZDtcblx0XHRpZCA9IEFjY291bnRzLmNyZWF0ZVVzZXIoe1xuXHRcdFx0dXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG5cdFx0XHRlbWFpbDogXCJBZG1pblwiLFxuXHRcdFx0cGFzc3dvcmQ6IGFkbWluUGFzc3dvcmQsXG5cdFx0XHRwcm9maWxlOntuYW1lOlwiQWRtaW5cIn1cblx0XHR9KTtcblxuXHRcdGlmICh1c2VyLnJvbGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyhpZCwgdXNlci5yb2xlcyk7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG5pZiAoQXBwcy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuXG5cdHZhciBkZWZhdWx0QXBwcyA9IFtcblx0XHR7bmFtZTpcIkxpdmVcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MywgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL2xpdmUuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLWxpdmUucG5nXCIsIGRlc2NyaXB0aW9uOlwiQmVla2VlIExpdmUgcHJvbW90ZSByZWFsLXRpbWUgaW50ZXJhY3Rpb24gYnkgYWxsb3dpbmcgbGVhcm5lcnMgdG8gZXhwcmVzcyB0aGVtc2VsdmVzIGFza2luZyBxdWVzdGlvbnMsIHBvc3RpbmcgcGhvdG9zIG9yIHNoYXJpbmcgZmlsZXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjEuNFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiUmVzb3VyY2VzXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjcsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly9yZXNvdXJjZXMuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXJlc291cmNlcy5wbmdcIiwgZGVzY3JpcHRpb246XCJXaXRoIEJlZWtlZSBSZXNvdXJjZXMsIHlvdSBjYW4gZWFzaWx5IHNoYXJlIGZpbGVzIHdpdGggeW91ciBsZWFybmVycy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJXaGVlbFwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOnRydWUsIG9yZGVyOjksIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjAuN1wiLCB1cmw6XCJodHRwOi8vd2hlZWwuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXdoZWVsLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBXaGVlbCBpcyBhIHNpbXBsZSByYW5kb20gcGlja2VyIHdoZWVsIHRoYXQgYWxsb3cgeW91IHRvIHBpY2sgdXAgYSByYW5kb20gbmFtZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC44XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJUaW1lclwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo4LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vdGltZXIuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXRpbWVyLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBUaW1lciBpcyBhIHNpbXBsZSB0aW1lciB0aGF0IGxldHMgeW91ciBsZWFybmVycyBrbm93IGhvdyBtdWNoIHRpbWUgdGhleSBoYXZlIGxlZnQuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiTW9vZGxlXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MSwgZG9jX3VzZXI6XCJtb29kbGVfdGVhY2hlcmRvYy5wZGZcIiwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vbW9vZGxlLmJlZWtlZS5ib3hcIiwgaWNvbjpcIm1vb2RsZS5wbmdcIiwgZGVzY3JpcHRpb246XCJNb29kbGUgaXMgYSBmcmVlLCBvbmxpbmUgTGVhcm5pbmcgTWFuYWdlbWVudCBzeXN0ZW0gZW5hYmxpbmcgZWR1Y2F0b3JzIHRvIGNyZWF0ZSB0aGVpciBvd24gcHJpdmF0ZSB3ZWJzaXRlIGZpbGxlZCB3aXRoIGR5bmFtaWMgY291cnNlcyB0aGF0IGV4dGVuZCBsZWFybmluZywgYW55IHRpbWUsIGFueXdoZXJlLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIzLjExLjJcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIktvbGlicmlcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjoyLCBkb2NfdXNlcjpcImtvbGlicmlfdXNlcmRvYy5wZGZcIiwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8va29saWJyaS5iZWVrZWUuYm94XCIsIGljb246XCJrb2xpYnJpLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIktvbGlicmkgaXMgYW4gb3Blbi1zb3VyY2UgZWR1Y2F0aW9uYWwgcGxhdGZvcm0gc3BlY2lhbGx5IGRlc2lnbmVkIHRvIHByb3ZpZGUgb2ZmbGluZSBhY2Nlc3MgdG8gYSB3aWRlIHJhbmdlIG9mIHF1YWxpdHksIG9wZW5seSBsaWNlbnNlZCBlZHVjYXRpb25hbCByZXNvdXJjZXMgaW4gbG93LXJlc291cmNlIGNvbnRleHRzIGxpa2UgcnVyYWwgc2Nob29scywgcmVmdWdlZSBjYW1wcywgb3JwaGFuYWdlcywgYW5kIGFsc28gaW4gbm9uLWZvcm1hbCBzY2hvb2wgcHJvZ3JhbXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMTQuN1wiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdC8vIHtuYW1lOlwiRXRoZXJwYWRcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo1LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vZXRoZXJwYWQuYmVla2VlLmJveFwiLCBpY29uOlwiZXRoZXJwYWQucG5nXCIsIGRlc2NyaXB0aW9uOlwiRXRoZXJwYWQgYWxsb3dzIHlvdSB0byBlZGl0IGRvY3VtZW50cyBjb2xsYWJvcmF0aXZlbHkgaW4gcmVhbC10aW1lLCBtdWNoIGxpa2UgYSBsaXZlIG11bHRpLXBsYXllciBlZGl0b3IgdGhhdCBydW5zIGluIHlvdXIgYnJvd3Nlci4gV3JpdGUgYXJ0aWNsZXMsIHByZXNzIHJlbGVhc2VzLCB0by1kbyBsaXN0cywgZXRjLiB0b2dldGhlciB3aXRoIHlvdXIgZnJpZW5kcywgZmVsbG93IHN0dWRlbnRzIG9yIGNvbGxlYWd1ZXMsIGFsbCB3b3JraW5nIG9uIHRoZSBzYW1lIGRvY3VtZW50IGF0IHRoZSBzYW1lIHRpbWUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjEuOC4xNFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiU3Rvcm1cIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo0LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vc3Rvcm0uYmVla2VlLmJveFwiLCBpY29uOlwic3Rvcm0ucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGFuZCBhbmltYXRlIGxpdmUgc3VydmV5cywgYnJhaW5zdG9ybXMgYW5kIHF1aXp6ZXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuNC41XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJQYWRcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo1LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vcGFkLmJlZWtlZS5ib3hcIiwgaWNvbjpcInBhZC5wbmdcIiwgZGVzY3JpcHRpb246XCJDcmVhdGUgY29sbGFib3JhdGl2ZSB3YWxscyB0byBzaGFyZSBhbmQgb3JnYW5pemUgY29udGVudC5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC44LjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIkJ1enplclwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6dHJ1ZSwgb3JkZXI6NiwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2J1enplci5iZWVrZWUuYm94XCIsIGljb246XCJidXp6ZXIucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGEgdmlydHVhbCBnYW1pbmcgcm9vbSBhcm91bmQgYSBjb25uZWN0ZWQgYnV6emVyLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjIuNFwiLCBoaWRkZW46ZmFsc2V9LFxuXG5cdF07XG5cblx0Xy5lYWNoKGRlZmF1bHRBcHBzLCBmdW5jdGlvbiAoZGVmYXVsdEFwcHMpIHtcblx0XHRBcHBzLmluc2VydChkZWZhdWx0QXBwcyk7XG5cdH0pO1xufSIsImltcG9ydCB7IEhUVFAgfSBmcm9tICdtZXRlb3IvaHR0cCdcbmltcG9ydCB7IFdpZmlDbGllbnRNb2RlU3RhdGUgfSBmcm9tICcuLi9pbXBvcnRzL2FwaS93aWZpQ2xpZW50TW9kZVN0YXRlLmpzJztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvc2V0dGluZ3MuanMnO1xuXG5NZXRlb3Iuc3RhcnR1cChmdW5jdGlvbigpIHtcblxuXHRpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0dmFyIGZzID0gTnBtLnJlcXVpcmUoJ2ZzJyk7XG5cdHZhciBwYXRoID0gTnBtLnJlcXVpcmUoJ3BhdGgnKTtcblx0ZXhlYyA9IE5wbS5yZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuZXhlYztcblx0Y21kID0gTWV0ZW9yLndyYXBBc3luYyhleGVjKTtcblxuXHR2YXIgd2lmaVNldHRpbmdzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy53aWZpU2V0dGluZ3NQYXRoO1xuXHR2YXIgY29uZmlnUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5jb25maWdQYXRoO1xuXHR2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGggfHwgJy9ob21lL2JlZWtlZS9zY3JpcHRzJztcblx0dmFyIHdpZmlDbGllbnRFbmFibGVTY3JpcHROYW1lID0gJ3N3aXRjaF93aWZpX3RvX2NsaWVudC5zaCc7XG5cdHZhciB3aWZpQ2xpZW50RGlzYWJsZVNjcmlwdE5hbWUgPSAnc3dpdGNoX3dpZmlfdG9fYXAuc2gnO1xuXHR2YXIgd2lmaUNsaWVudE1vZGVTdGF0ZVBhdGggPSBNZXRlb3Iuc2V0dGluZ3Mud2lmaUNsaWVudE1vZGVTdGF0ZVBhdGggfHwgYCR7c2NyaXB0c1BhdGh9Ly53aWZpLWNsaWVudC1tb2RlLXN0YXRlYDtcblx0dmFyIG5ldHdvcmtDb250cm9sU2V0dGluZ3NQYXRoID0gTWV0ZW9yLnNldHRpbmdzLm5ldHdvcmtDb250cm9sU2V0dGluZ3NQYXRoIHx8IGAke3NjcmlwdHNQYXRofS9uZXR3b3JrLWNvbnRyb2wtc2V0dGluZ3MuanNvbmA7XG5cdHZhciBuZXR3b3JrQ29udHJvbEFwcGx5U2NyaXB0TmFtZSA9IE1ldGVvci5zZXR0aW5ncy5uZXR3b3JrQ29udHJvbEFwcGx5U2NyaXB0TmFtZSB8fCAnYXBwbHlfbmV0d29ya19jb250cm9sLnNoJztcblx0dmFyIG5ldHdvcmtDb250cm9sU2V0dGluZ3NJZCA9ICduZXR3b3JrLWNvbnRyb2wtc2V0dGluZ3MnO1xuXHRjb25zdCByZWFkbGluZSA9IHJlcXVpcmUoJ3JlYWRsaW5lJyk7XG5cblx0ZnVuY3Rpb24gc2hlbGxFc2NhcGUodmFsdWUpIHtcblx0XHRyZXR1cm4gYCcke1N0cmluZyh2YWx1ZSkucmVwbGFjZSgvJy9nLCBgJ1xcXFwnJ2ApfSdgO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzb2x2ZVNjcmlwdFBhdGgoc2NyaXB0TmFtZSkge1xuXHRcdHJldHVybiBgJHtzY3JpcHRzUGF0aH0vJHtzY3JpcHROYW1lfWA7XG5cdH1cblxuXHRmdW5jdGlvbiBub3JtYWxpemVEb21haW5FbnRyeShyYXdFbnRyeSkge1xuXHRcdGlmICh0eXBlb2YgcmF3RW50cnkgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHR2YXIgbm9ybWFsaXplZEVudHJ5ID0gcmF3RW50cnkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRpZiAoIW5vcm1hbGl6ZWRFbnRyeSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bm9ybWFsaXplZEVudHJ5ID0gbm9ybWFsaXplZEVudHJ5LnJlcGxhY2UoL15bYS16XSs6XFwvXFwvLywgJycpO1xuXHRcdG5vcm1hbGl6ZWRFbnRyeSA9IG5vcm1hbGl6ZWRFbnRyeS5zcGxpdCgnLycpWzBdO1xuXHRcdG5vcm1hbGl6ZWRFbnRyeSA9IG5vcm1hbGl6ZWRFbnRyeS5zcGxpdCgnPycpWzBdO1xuXHRcdG5vcm1hbGl6ZWRFbnRyeSA9IG5vcm1hbGl6ZWRFbnRyeS5zcGxpdCgnIycpWzBdO1xuXHRcdG5vcm1hbGl6ZWRFbnRyeSA9IG5vcm1hbGl6ZWRFbnRyeS5yZXBsYWNlKC86XFxkKyQvLCAnJyk7XG5cdFx0bm9ybWFsaXplZEVudHJ5ID0gbm9ybWFsaXplZEVudHJ5LnJlcGxhY2UoL15cXCpcXC4vLCAnJyk7XG5cdFx0bm9ybWFsaXplZEVudHJ5ID0gbm9ybWFsaXplZEVudHJ5LnJlcGxhY2UoL15cXC4rLywgJycpLnJlcGxhY2UoL1xcLiskLywgJycpO1xuXG5cdFx0aWYgKCFub3JtYWxpemVkRW50cnkgfHwgbm9ybWFsaXplZEVudHJ5LmluY2x1ZGVzKCcuLicpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAoIS9eW2EtejAtOV1bYS16MC05Li1dKlthLXowLTldJC8udGVzdChub3JtYWxpemVkRW50cnkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbm9ybWFsaXplZEVudHJ5O1xuXHR9XG5cblx0ZnVuY3Rpb24gc2FuaXRpemVEb21haW5MaXN0KHJhd0VudHJpZXMpIHtcblx0XHR2YXIgZW50cmllcyA9IEFycmF5LmlzQXJyYXkocmF3RW50cmllcykgPyByYXdFbnRyaWVzIDogW107XG5cdFx0dmFyIG5vcm1hbGl6ZWRFbnRyaWVzID0gW107XG5cdFx0dmFyIHNlZW5FbnRyaWVzID0gbmV3IFNldCgpO1xuXG5cdFx0ZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuXHRcdFx0dmFyIG5vcm1hbGl6ZWRFbnRyeSA9IG5vcm1hbGl6ZURvbWFpbkVudHJ5KGVudHJ5KTtcblxuXHRcdFx0aWYgKCFub3JtYWxpemVkRW50cnkgfHwgc2VlbkVudHJpZXMuaGFzKG5vcm1hbGl6ZWRFbnRyeSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWVuRW50cmllcy5hZGQobm9ybWFsaXplZEVudHJ5KTtcblx0XHRcdG5vcm1hbGl6ZWRFbnRyaWVzLnB1c2gobm9ybWFsaXplZEVudHJ5KTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBub3JtYWxpemVkRW50cmllcy5zbGljZSgwLCAyMDApO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0RGVmYXVsdE5ldHdvcmtDb250cm9sU2V0dGluZ3MoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdF9pZDogbmV0d29ya0NvbnRyb2xTZXR0aW5nc0lkLFxuXHRcdFx0c2hhcmluZ0NvbnRyb2xNb2RlRW5hYmxlZDogZmFsc2UsXG5cdFx0XHR3aGl0ZWxpc3Q6IFtdLFxuXHRcdFx0YmxhY2tsaXN0OiBbXVxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBub3JtYWxpemVOZXR3b3JrQ29udHJvbFNldHRpbmdzKHJhd1NldHRpbmdzKSB7XG5cdFx0dmFyIGRlZmF1bHRTZXR0aW5ncyA9IGdldERlZmF1bHROZXR3b3JrQ29udHJvbFNldHRpbmdzKCk7XG5cdFx0dmFyIG1lcmdlZFNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNldHRpbmdzLCByYXdTZXR0aW5ncyB8fCB7fSk7XG5cdFx0dmFyIHdoaXRlbGlzdCA9IHNhbml0aXplRG9tYWluTGlzdChtZXJnZWRTZXR0aW5ncy53aGl0ZWxpc3QpO1xuXHRcdHZhciBibGFja2xpc3QgPSBzYW5pdGl6ZURvbWFpbkxpc3QobWVyZ2VkU2V0dGluZ3MuYmxhY2tsaXN0KS5maWx0ZXIoKGVudHJ5KSA9PiAhd2hpdGVsaXN0LmluY2x1ZGVzKGVudHJ5KSk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0X2lkOiBuZXR3b3JrQ29udHJvbFNldHRpbmdzSWQsXG5cdFx0XHRzaGFyaW5nQ29udHJvbE1vZGVFbmFibGVkOiBtZXJnZWRTZXR0aW5ncy5zaGFyaW5nQ29udHJvbE1vZGVFbmFibGVkID09PSB0cnVlLFxuXHRcdFx0d2hpdGVsaXN0OiB3aGl0ZWxpc3QsXG5cdFx0XHRibGFja2xpc3Q6IGJsYWNrbGlzdFxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBnZXROZXR3b3JrQ29udHJvbFN5c3RlbVN0YXR1cygpIHtcblx0XHR2YXIgc2NyaXB0UGF0aCA9IHJlc29sdmVTY3JpcHRQYXRoKG5ldHdvcmtDb250cm9sQXBwbHlTY3JpcHROYW1lKTtcblx0XHR2YXIgYmFja2VuZFJlYWR5ID0gZnMuZXhpc3RzU3luYyhzY3JpcHRQYXRoKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRiYWNrZW5kUmVhZHk6IGJhY2tlbmRSZWFkeSxcblx0XHRcdGJhY2tlbmRTdGF0dXM6IGJhY2tlbmRSZWFkeSA/ICdTeXN0ZW0gaG9vayByZWFkeScgOiAnQ29uZmlndXJhdGlvbiBvbmx5J1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBidWlsZE5ldHdvcmtDb250cm9sU2V0dGluZ3NSZXNwb25zZShyYXdTZXR0aW5ncykge1xuXHRcdHZhciBzZXR0aW5ncyA9IG5vcm1hbGl6ZU5ldHdvcmtDb250cm9sU2V0dGluZ3MocmF3U2V0dGluZ3MpO1xuXHRcdHZhciBzeXN0ZW1TdGF0dXMgPSBnZXROZXR3b3JrQ29udHJvbFN5c3RlbVN0YXR1cygpO1xuXHRcdHZhciB3aGl0ZWxpc3RDb3VudCA9IHNldHRpbmdzLndoaXRlbGlzdC5sZW5ndGg7XG5cdFx0dmFyIGJsYWNrbGlzdENvdW50ID0gc2V0dGluZ3MuYmxhY2tsaXN0Lmxlbmd0aDtcblx0XHR2YXIgcG9saWN5TW9kZSA9ICd1bnJlc3RyaWN0ZWQnO1xuXG5cdFx0aWYgKHdoaXRlbGlzdENvdW50ID4gMCAmJiBibGFja2xpc3RDb3VudCA+IDApIHtcblx0XHRcdHBvbGljeU1vZGUgPSAnd2hpdGVsaXN0ICsgYmxhY2tsaXN0Jztcblx0XHR9IGVsc2UgaWYgKHdoaXRlbGlzdENvdW50ID4gMCkge1xuXHRcdFx0cG9saWN5TW9kZSA9ICd3aGl0ZWxpc3QnO1xuXHRcdH0gZWxzZSBpZiAoYmxhY2tsaXN0Q291bnQgPiAwKSB7XG5cdFx0XHRwb2xpY3lNb2RlID0gJ2JsYWNrbGlzdCc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdzLCBzeXN0ZW1TdGF0dXMsIHtcblx0XHRcdHdoaXRlbGlzdENvdW50OiB3aGl0ZWxpc3RDb3VudCxcblx0XHRcdGJsYWNrbGlzdENvdW50OiBibGFja2xpc3RDb3VudCxcblx0XHRcdHRvdGFsUnVsZXM6IHdoaXRlbGlzdENvdW50ICsgYmxhY2tsaXN0Q291bnQsXG5cdFx0XHRwb2xpY3lNb2RlOiBwb2xpY3lNb2RlXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXROZXR3b3JrQ29udHJvbFNldHRpbmdzRnJvbVN0b3JlKCkge1xuXHRcdHJldHVybiBub3JtYWxpemVOZXR3b3JrQ29udHJvbFNldHRpbmdzKFNldHRpbmdzLmZpbmRPbmUobmV0d29ya0NvbnRyb2xTZXR0aW5nc0lkKSk7XG5cdH1cblxuXHRmdW5jdGlvbiBlbnN1cmVOZXR3b3JrQ29udHJvbFNldHRpbmdzRG9jdW1lbnQoKSB7XG5cdFx0dmFyIGV4aXN0aW5nU2V0dGluZ3MgPSBTZXR0aW5ncy5maW5kT25lKG5ldHdvcmtDb250cm9sU2V0dGluZ3NJZCk7XG5cblx0XHRpZiAoZXhpc3RpbmdTZXR0aW5ncykge1xuXHRcdFx0cmV0dXJuIG5vcm1hbGl6ZU5ldHdvcmtDb250cm9sU2V0dGluZ3MoZXhpc3RpbmdTZXR0aW5ncyk7XG5cdFx0fVxuXG5cdFx0dmFyIGRlZmF1bHRTZXR0aW5ncyA9IGdldERlZmF1bHROZXR3b3JrQ29udHJvbFNldHRpbmdzKCk7XG5cblx0XHRTZXR0aW5ncy5pbnNlcnQoT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNldHRpbmdzLCB7XG5cdFx0XHR1cGRhdGVkQXQ6IG5ldyBEYXRlKClcblx0XHR9KSk7XG5cblx0XHRyZXR1cm4gZGVmYXVsdFNldHRpbmdzO1xuXHR9XG5cblx0ZnVuY3Rpb24gcGVyc2lzdE5ldHdvcmtDb250cm9sU2V0dGluZ3MocmF3U2V0dGluZ3MpIHtcblx0XHR2YXIgc2V0dGluZ3MgPSBub3JtYWxpemVOZXR3b3JrQ29udHJvbFNldHRpbmdzKHJhd1NldHRpbmdzKTtcblxuXHRcdFNldHRpbmdzLnVwc2VydChcblx0XHRcdHsgX2lkOiBuZXR3b3JrQ29udHJvbFNldHRpbmdzSWQgfSxcblx0XHRcdHtcblx0XHRcdFx0JHNldDoge1xuXHRcdFx0XHRcdHNoYXJpbmdDb250cm9sTW9kZUVuYWJsZWQ6IHNldHRpbmdzLnNoYXJpbmdDb250cm9sTW9kZUVuYWJsZWQsXG5cdFx0XHRcdFx0d2hpdGVsaXN0OiBzZXR0aW5ncy53aGl0ZWxpc3QsXG5cdFx0XHRcdFx0YmxhY2tsaXN0OiBzZXR0aW5ncy5ibGFja2xpc3QsXG5cdFx0XHRcdFx0dXBkYXRlZEF0OiBuZXcgRGF0ZSgpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0cmV0dXJuIHNldHRpbmdzO1xuXHR9XG5cblx0ZnVuY3Rpb24gd3JpdGVOZXR3b3JrQ29udHJvbFNldHRpbmdzRmlsZShyYXdTZXR0aW5ncykge1xuXHRcdHZhciBzZXR0aW5ncyA9IGJ1aWxkTmV0d29ya0NvbnRyb2xTZXR0aW5nc1Jlc3BvbnNlKHJhd1NldHRpbmdzKTtcblx0XHR2YXIgbmV0d29ya0NvbnRyb2xEaXJlY3RvcnkgPSBwYXRoLmRpcm5hbWUobmV0d29ya0NvbnRyb2xTZXR0aW5nc1BhdGgpO1xuXG5cdFx0aWYgKCFmcy5leGlzdHNTeW5jKG5ldHdvcmtDb250cm9sRGlyZWN0b3J5KSkge1xuXHRcdFx0ZnMubWtkaXJTeW5jKG5ldHdvcmtDb250cm9sRGlyZWN0b3J5LCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcblx0XHR9XG5cblx0XHRmcy53cml0ZUZpbGVTeW5jKFxuXHRcdFx0bmV0d29ya0NvbnRyb2xTZXR0aW5nc1BhdGgsXG5cdFx0XHRKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdHNoYXJpbmdDb250cm9sTW9kZUVuYWJsZWQ6IHNldHRpbmdzLnNoYXJpbmdDb250cm9sTW9kZUVuYWJsZWQsXG5cdFx0XHRcdHdoaXRlbGlzdDogc2V0dGluZ3Mud2hpdGVsaXN0LFxuXHRcdFx0XHRibGFja2xpc3Q6IHNldHRpbmdzLmJsYWNrbGlzdCxcblx0XHRcdFx0cG9saWN5TW9kZTogc2V0dGluZ3MucG9saWN5TW9kZSxcblx0XHRcdFx0dXBkYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcblx0XHRcdH0sIG51bGwsIDIpICsgJ1xcbicsXG5cdFx0XHQndXRmLTgnXG5cdFx0KTtcblxuXHRcdHJldHVybiBzZXR0aW5ncztcblx0fVxuXG5cdGZ1bmN0aW9uIHN5bmNOZXR3b3JrQ29udHJvbFNldHRpbmdzVG9TeXN0ZW0ocmF3U2V0dGluZ3MpIHtcblx0XHR2YXIgc2V0dGluZ3MgPSB3cml0ZU5ldHdvcmtDb250cm9sU2V0dGluZ3NGaWxlKHJhd1NldHRpbmdzKTtcblx0XHR2YXIgc2NyaXB0UGF0aCA9IHJlc29sdmVTY3JpcHRQYXRoKG5ldHdvcmtDb250cm9sQXBwbHlTY3JpcHROYW1lKTtcblxuXHRcdGlmICghZnMuZXhpc3RzU3luYyhzY3JpcHRQYXRoKSkge1xuXHRcdFx0cmV0dXJuIHNldHRpbmdzO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjbWQoYHRpbWVvdXQgMjBzIGJhc2ggJHtzaGVsbEVzY2FwZShzY3JpcHRQYXRoKX0gJHtzaGVsbEVzY2FwZShuZXR3b3JrQ29udHJvbFNldHRpbmdzUGF0aCl9YCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBhcHBseWluZyBuZXR3b3JrIGNvbnRyb2wgc2V0dGluZ3M6JywgZXJyb3IpO1xuXHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcblx0XHRcdFx0J25ldHdvcmstY29udHJvbC1hcHBseS1mYWlsZWQnLFxuXHRcdFx0XHRlcnJvci5yZWFzb24gfHwgZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGFwcGx5IG5ldHdvcmsgY29udHJvbCBzZXR0aW5ncy4nXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZXR0aW5ncztcblx0fVxuXG5cdGZ1bmN0aW9uIHJlYWRXaWZpQ2xpZW50TW9kZVN0YXRlKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoIWZzLmV4aXN0c1N5bmMod2lmaUNsaWVudE1vZGVTdGF0ZVBhdGgpKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdGF0ZSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpQ2xpZW50TW9kZVN0YXRlUGF0aCwgJ3V0Zi04JykudHJpbSgpO1xuXG5cdFx0XHRpZiAoc3RhdGUgPT09ICdlbmFibGVkJykge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHN0YXRlID09PSAnZGlzYWJsZWQnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIHJlYWRpbmcgV2ktRmkgY2xpZW50IG1vZGUgc3RhdGU6JywgZXJyb3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gd3JpdGVXaWZpQ2xpZW50TW9kZVN0YXRlKGVuYWJsZWQpIHtcblx0XHR0cnkge1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhcblx0XHRcdFx0d2lmaUNsaWVudE1vZGVTdGF0ZVBhdGgsXG5cdFx0XHRcdGVuYWJsZWQgPyAnZW5hYmxlZFxcbicgOiAnZGlzYWJsZWRcXG4nLFxuXHRcdFx0XHQndXRmLTgnXG5cdFx0XHQpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3Igd3JpdGluZyBXaS1GaSBjbGllbnQgbW9kZSBzdGF0ZTonLCBlcnJvcik7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gcGVyc2lzdFdpZmlDbGllbnRNb2RlU3RhdGUoZW5hYmxlZCkge1xuXHRcdHdyaXRlV2lmaUNsaWVudE1vZGVTdGF0ZShlbmFibGVkKTtcblx0XHRXaWZpQ2xpZW50TW9kZVN0YXRlLnVwc2VydChcblx0XHRcdHsgX2lkOiAnd2lmaS1jbGllbnQtbW9kZS1zdGF0ZScgfSxcblx0XHRcdHtcblx0XHRcdFx0JHNldDoge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IGVuYWJsZWQgPT09IHRydWUsXG5cdFx0XHRcdFx0dXBkYXRlZEF0OiBuZXcgRGF0ZSgpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0oKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGhhc1dsYW5Vc2IgPSBjbWQoJ2lwIGxpbmsgc2hvdyB3bGFudXNiID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZScpLnRvU3RyaW5nKCkudHJpbSgpO1xuXG5cdFx0XHRpZiAoaGFzV2xhblVzYiAhPT0gJ3RydWUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaGFzQXBBZGRyZXNzID0gY21kKFwiaXAgLTQgYWRkciBzaG93IHdsYW51c2IgfCBncmVwIC1xICcxMFxcXFwuMVxcXFwuMFxcXFwuMS8yNCcgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIikudG9TdHJpbmcoKS50cmltKCk7XG5cblx0XHRcdHJldHVybiBoYXNBcEFkZHJlc3MgPT09ICd0cnVlJztcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGRldGVjdGluZyBXaS1GaSBhY2Nlc3MgcG9pbnQgbW9kZSBmcm9tIHN5c3RlbTonLCBlcnJvcik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZGV0ZWN0V2lmaUNsaWVudE1vZGVGcm9tU3lzdGVtKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0oKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGhhc1dsYW5Vc2IgPSBjbWQoJ2lwIGxpbmsgc2hvdyB3bGFudXNiID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZScpLnRvU3RyaW5nKCkudHJpbSgpO1xuXG5cdFx0XHRpZiAoaGFzV2xhblVzYiAhPT0gJ3RydWUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgbm1TdGF0ZSA9IGNtZChcIm5tY2xpIC10IC1mIERFVklDRSxTVEFURSBkZXZpY2Ugc3RhdHVzIDI+L2Rldi9udWxsIHwgYXdrIC1GOiAnJDE9PVxcXCJ3bGFudXNiXFxcIiB7cHJpbnQgJDI7IGV4aXR9JyB8fCB0cnVlXCIpLnRvU3RyaW5nKCkudHJpbSgpO1xuXG5cdFx0XHRyZXR1cm4gL14oY29ubmVjdGVkfGRpc2Nvbm5lY3RlZHxjb25uZWN0aW5nfHByZXBhcmluZykvLnRlc3Qobm1TdGF0ZSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBkZXRlY3RpbmcgV2ktRmkgY2xpZW50IG1vZGUgZnJvbSBzeXN0ZW06JywgZXJyb3IpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGdldFdpZmlDbGllbnRNb2RlU3RhdGUoKSB7XG5cdFx0aWYgKGRldGVjdFdpZmlBY2Nlc3NQb2ludE1vZGVGcm9tU3lzdGVtKCkpIHtcblx0XHRcdHBlcnNpc3RXaWZpQ2xpZW50TW9kZVN0YXRlKGZhbHNlKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBkZXRlY3RlZFN0YXRlID0gZGV0ZWN0V2lmaUNsaWVudE1vZGVGcm9tU3lzdGVtKCk7XG5cdFx0cGVyc2lzdFdpZmlDbGllbnRNb2RlU3RhdGUoZGV0ZWN0ZWRTdGF0ZSk7XG5cdFx0cmV0dXJuIGRldGVjdGVkU3RhdGU7XG5cdH1cblxuXHRmdW5jdGlvbiBlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKSB7XG5cdFx0aWYgKCFnZXRXaWZpQ2xpZW50TW9kZVN0YXRlKCkpIHtcblx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ3dpZmktY2xpZW50LW1vZGUtZGlzYWJsZWQnLCAnRW5hYmxlIFdpLUZpIGNsaWVudCBtb2RlIGJlZm9yZSBzY2FubmluZyBvciBjb25uZWN0aW5nLicpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGdldENsaWVudFNTSURGcm9tU3lzdGVtKCkge1xuXHRcdGxldCBzc2lkO1xuXHRcdHRyeSB7XG5cdFx0XHRzc2lkID0gY21kKCdpd2dldGlkIC1yIHdsYW51c2IgMj4vZGV2L251bGwgfHwgdHJ1ZScpLnRyaW0oKTtcblxuXHRcdFx0aWYgKCFzc2lkKSB7XG5cdFx0XHRcdHNzaWQgPSBjbWQoJ25tY2xpIC1nIEdFTkVSQUwuQ09OTkVDVElPTiBkZXZpY2Ugc2hvdyB3bGFudXNiIDI+L2Rldi9udWxsIHwgaGVhZCAtbiAxIHx8IHRydWUnKS50cmltKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzc2lkID09PSAnLS0nKSB7XG5cdFx0XHRcdHNzaWQgPSAnJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBzc2lkID09PSAnc3RyaW5nJyAmJiBzc2lkICE9PSAnJykge1xuXHRcdFx0XHRyZXR1cm4gc3NpZDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIHJldHJpZXZpbmcgY2xpZW50IFNTSUQ6JywgZXJyb3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiAnTm90IGNvbm5lY3RlZCc7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDbGllbnRCU1NJREZyb21TeXN0ZW0oKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGJzc2lkID0gY21kKFwiaXcgZGV2IHdsYW51c2IgbGluayAyPi9kZXYvbnVsbCB8IGF3ayAnL0Nvbm5lY3RlZCB0by8ge3ByaW50ICQzOyBleGl0fScgfHwgdHJ1ZVwiKS50cmltKCk7XG5cblx0XHRcdGlmIChic3NpZCAmJiBic3NpZCAhPT0gJ05vdCBjb25uZWN0ZWQnKSB7XG5cdFx0XHRcdHJldHVybiBic3NpZC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgcmV0cmlldmluZyBjbGllbnQgQlNTSUQ6JywgZXJyb3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q2xpZW50Q29ubmVjdGlvbkluZm9Gcm9tU3lzdGVtKCkge1xuXHRcdGNvbnN0IHNzaWQgPSBnZXRDbGllbnRTU0lERnJvbVN5c3RlbSgpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNzaWQ6IHNzaWQsXG5cdFx0XHRic3NpZDogc3NpZCA9PT0gJ05vdCBjb25uZWN0ZWQnID8gbnVsbCA6IGdldENsaWVudEJTU0lERnJvbVN5c3RlbSgpXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEludGVyZmFjZVN1Ym5ldEZyb21TeXN0ZW0oaW50ZXJmYWNlTmFtZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBzdWJuZXQgPSBjbWQoYGlwIC00IHJvdXRlIHNob3cgZGV2ICR7aW50ZXJmYWNlTmFtZX0gc2NvcGUgbGluayAyPi9kZXYvbnVsbCB8IGF3ayAnL15bMC05XS8ge3ByaW50ICQxOyBleGl0fScgfHwgdHJ1ZWApLnRyaW0oKTtcblxuXHRcdFx0cmV0dXJuIHN1Ym5ldCB8fCBudWxsO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhgRXJyb3IgcmV0cmlldmluZyBzdWJuZXQgZm9yICR7aW50ZXJmYWNlTmFtZX06YCwgZXJyb3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0V2lmaUNsaWVudFN1Ym5ldENvbmZsaWN0RnJvbVN5c3RlbSgpIHtcblx0XHRjb25zdCBhY2Nlc3NQb2ludFN1Ym5ldCA9IGdldEludGVyZmFjZVN1Ym5ldEZyb21TeXN0ZW0oJ3dsYW5pbnQnKTtcblx0XHRjb25zdCBjbGllbnRTdWJuZXQgPSBnZXRJbnRlcmZhY2VTdWJuZXRGcm9tU3lzdGVtKCd3bGFudXNiJyk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGV0ZWN0ZWQ6ICEhYWNjZXNzUG9pbnRTdWJuZXQgJiYgISFjbGllbnRTdWJuZXQgJiYgYWNjZXNzUG9pbnRTdWJuZXQgPT09IGNsaWVudFN1Ym5ldCxcblx0XHRcdGFjY2Vzc1BvaW50U3VibmV0OiBhY2Nlc3NQb2ludFN1Ym5ldCxcblx0XHRcdGNsaWVudFN1Ym5ldDogY2xpZW50U3VibmV0XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHdhaXQobWlsbGlzZWNvbmRzKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRzZXRUaW1lb3V0KHJlc29sdmUsIG1pbGxpc2Vjb25kcyk7XG5cdFx0fSk7XG5cdH1cblxuXHRcdGFzeW5jIGZ1bmN0aW9uIHdhaXRGb3JDbGllbnRTU0lEKGV4cGVjdGVkU1NJRCwgdGltZW91dE1pbGxpc2Vjb25kcykge1xuXHRcdFx0Y29uc3QgZGVhZGxpbmUgPSBEYXRlLm5vdygpICsgdGltZW91dE1pbGxpc2Vjb25kcztcblxuXHRcdFx0d2hpbGUgKERhdGUubm93KCkgPCBkZWFkbGluZSkge1xuXHRcdFx0XHRpZiAoZ2V0Q2xpZW50U1NJREZyb21TeXN0ZW0oKSA9PT0gZXhwZWN0ZWRTU0lEKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRhd2FpdCB3YWl0KDEwMDApO1xuXHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldEludGVybmV0U2hhcmluZ1N0YXR1c1dpZmlDbGllbnRGcm9tU3lzdGVtKCkge1xuXHRcdFx0aWYgKCFnZXRXaWZpQ2xpZW50TW9kZVN0YXRlKCkpIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXHRcdFx0dmFyIGxpc3ROYXRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtdCBuYXQgLVMgUE9TVFJPVVRJTkcnO1xuXG5cdFx0XHR2YXIgZm9yd2FyZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cdFx0XHR2YXIgbmF0UmVzdWx0ID0gY21kKGxpc3ROYXRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHRpZiAoIWZvcndhcmRSZXN1bHQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignY29tbWFuZC1leGVjdXRpb24tZXJyb3InLCAnVGhlIEZPUldBUkQgY2hhaW4gY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LicpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIW5hdFJlc3VsdCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdjb21tYW5kLWV4ZWN1dGlvbi1lcnJvcicsICdUaGUgUE9TVFJPVVRJTkcgY2hhaW4gY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LicpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc2hhcmluZ0Zyb21XbGFuaW50VG9XbGFudXNiID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFuaW50IC1vIHdsYW51c2IgLWogQUNDRVBUJyk7XG5cdFx0XHR2YXIgc2hhcmluZ1RvV2xhbmludEZyb21XbGFudXNiRXN0YWJsaXNoZWQgPSBmb3J3YXJkUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW51c2IgLW8gd2xhbmludCAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyk7XG5cdFx0XHR2YXIgbmF0Rm9yV2xhbmludCA9IG5hdFJlc3VsdC5pbmNsdWRlcygnLUEgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gd2xhbnVzYiAtaiBNQVNRVUVSQURFJyk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0c2hhcmluZ0Zyb21XbGFuaW50VG9XbGFudXNiICYmXG5cdFx0XHRcdHNoYXJpbmdUb1dsYW5pbnRGcm9tV2xhbnVzYkVzdGFibGlzaGVkICYmXG5cdFx0XHRcdG5hdEZvcldsYW5pbnRcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGVuYWJsZUludGVybmV0U2hhcmluZ1dpZmlDbGllbnRJblN5c3RlbSgpIHtcblx0XHRcdGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXG5cdFx0XHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSB3bGFuaW50IC1vIHdsYW51c2IgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3bGFuaW50IC1vIHdsYW51c2IgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSB3bGFudXNiIC1vIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd2xhbnVzYiAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUMgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gd2xhbnVzYiAtaiBNQVNRVUVSQURFIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1BIFBPU1RST1VUSU5HIC1zIDEwLjAuMC4wLzI0IC1vIHdsYW51c2IgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0XHRdLmpvaW4oJyAmJiAnKTtcblxuXHRcdFx0Y21kKGlwdGFibGVzQ29tbWFuZHMpO1xuXHRcdFx0c3luY05ldHdvcmtDb250cm9sU2V0dGluZ3NUb1N5c3RlbShnZXROZXR3b3JrQ29udHJvbFNldHRpbmdzRnJvbVN0b3JlKCkpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZGlzYWJsZUludGVybmV0U2hhcmluZ1dpZmlDbGllbnRJblN5c3RlbSgpIHtcblx0XHRcdHZhciBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gW1xuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW5pbnQgLS1vdXQtaW50ZXJmYWNlIHdsYW51c2IgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFudXNiIC0tb3V0LWludGVyZmFjZSB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLXNvdXJjZSAxMC4wLjAuMC8yNCAtLW91dC1pbnRlcmZhY2Ugd2xhbnVzYiAtaiBNQVNRVUVSQURFJ1xuXHRcdFx0XTtcblxuXHRcdFx0ZnVuY3Rpb24gZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kKSB7XG5cdFx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGNtZChjb21tYW5kKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcblx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScpO1xuXHRcdFx0c3luY05ldHdvcmtDb250cm9sU2V0dGluZ3NUb1N5c3RlbShnZXROZXR3b3JrQ29udHJvbFNldHRpbmdzRnJvbVN0b3JlKCkpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0Q2FwdGl2ZVBvcnRhbFN0YXR1c0Zyb21TeXN0ZW0oKSB7XG5cdFx0XHRjb25zdCBzc2lkID0gZ2V0Q2xpZW50U1NJREZyb21TeXN0ZW0oKTtcblxuXHRcdGlmIChzc2lkID09PSAnTm90IGNvbm5lY3RlZCcpIHtcblx0XHRcdHJldHVybiB7IGRldGVjdGVkOiBmYWxzZSwgdXJsOiBudWxsLCBzc2lkOiBzc2lkIH07XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY21kKFxuXHRcdFx0XHQnY3VybCAtLWludGVyZmFjZSB3bGFudXNiIC1zIC1tIDggLUwgLUQgLSAtbyAvZGV2L251bGwgLXcgXCJcXFxcbkNVUkxfRUZGRUNUSVZFX1VSTDole3VybF9lZmZlY3RpdmV9XFxcXG5cIiBodHRwOi8vY29ubmVjdGl2aXR5Y2hlY2suZ3N0YXRpYy5jb20vZ2VuZXJhdGVfMjA0IHx8IHRydWUnXG5cdFx0XHQpLnRvU3RyaW5nKCk7XG5cdFx0XHRjb25zdCBzdGF0dXNNYXRjaCA9IHJlc3BvbnNlLm1hdGNoKC9IVFRQXFwvWzAtOS5dK1xccysoXFxkezN9KS8pO1xuXHRcdFx0Y29uc3QgbG9jYXRpb25NYXRjaCA9IHJlc3BvbnNlLm1hdGNoKC9eW0xsXW9jYXRpb246XFxzKiguKykkL20pO1xuXHRcdFx0Y29uc3QgZWZmZWN0aXZlVXJsTWF0Y2ggPSByZXNwb25zZS5tYXRjaCgvQ1VSTF9FRkZFQ1RJVkVfVVJMOiguKykkL20pO1xuXHRcdFx0Y29uc3Qgc3RhdHVzQ29kZSA9IHN0YXR1c01hdGNoID8gcGFyc2VJbnQoc3RhdHVzTWF0Y2hbMV0sIDEwKSA6IG51bGw7XG5cdFx0XHRsZXQgdXJsID0gbG9jYXRpb25NYXRjaCA/IGxvY2F0aW9uTWF0Y2hbMV0udHJpbSgpIDogbnVsbDtcblx0XHRcdGNvbnN0IGVmZmVjdGl2ZVVybCA9IGVmZmVjdGl2ZVVybE1hdGNoID8gZWZmZWN0aXZlVXJsTWF0Y2hbMV0udHJpbSgpIDogbnVsbDtcblxuXHRcdFx0aWYgKHVybCAmJiAvXlxcL1xcLy8udGVzdCh1cmwpKSB7XG5cdFx0XHRcdHVybCA9IGBodHRwOiR7dXJsfWA7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh1cmwgJiYgIS9eaHR0cHM/OlxcL1xcLy9pLnRlc3QodXJsKSkge1xuXHRcdFx0XHR1cmwgPSAnaHR0cDovL25ldmVyc3NsLmNvbSc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh1cmwgJiYgIS9uZXZlcnNzbFxcLmNvbS9pLnRlc3QodXJsKSAmJiAhL2Nvbm5lY3Rpdml0eWNoZWNrXFwuZ3N0YXRpY1xcLmNvbS9pLnRlc3QodXJsKSkge1xuXHRcdFx0XHRyZXR1cm4geyBkZXRlY3RlZDogdHJ1ZSwgdXJsOiB1cmwsIHNzaWQ6IHNzaWQsIHN0YXR1c0NvZGU6IHN0YXR1c0NvZGUgfTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRlZmZlY3RpdmVVcmwgJiZcblx0XHRcdFx0IS9eaHR0cDpcXC9cXC9jb25uZWN0aXZpdHljaGVja1xcLmdzdGF0aWNcXC5jb21cXC9nZW5lcmF0ZV8yMDRcXC8/JC9pLnRlc3QoZWZmZWN0aXZlVXJsKSAmJlxuXHRcdFx0XHQhL15odHRwOlxcL1xcLyhbXi9dK1xcLik/bmV2ZXJzc2xcXC5jb20oXFwvfCQpL2kudGVzdChlZmZlY3RpdmVVcmwpXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIHsgZGV0ZWN0ZWQ6IHRydWUsIHVybDogZWZmZWN0aXZlVXJsLCBzc2lkOiBzc2lkLCBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlIH07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdGF0dXNDb2RlID09PSAyMDQpIHtcblx0XHRcdFx0cmV0dXJuIHsgZGV0ZWN0ZWQ6IGZhbHNlLCB1cmw6IG51bGwsIHNzaWQ6IHNzaWQsIHN0YXR1c0NvZGU6IHN0YXR1c0NvZGUgfTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGRldGVjdGluZyBjYXB0aXZlIHBvcnRhbDonLCBlcnJvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHsgZGV0ZWN0ZWQ6IGZhbHNlLCB1cmw6IG51bGwsIHNzaWQ6IHNzaWQgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJ1bldpZmlNb2RlU2NyaXB0KHNjcmlwdE5hbWUpIHtcblx0XHRjb25zdCBzY3JpcHRQYXRoID0gcmVzb2x2ZVNjcmlwdFBhdGgoc2NyaXB0TmFtZSk7XG5cblx0XHRpZiAoIWZzLmV4aXN0c1N5bmMoc2NyaXB0UGF0aCkpIHtcblx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ3dpZmktY2xpZW50LW1vZGUtc2NyaXB0LW1pc3NpbmcnLCBgTWlzc2luZyBXaS1GaSBtb2RlIHNjcmlwdDogJHtzY3JpcHRQYXRofWApO1xuXHRcdH1cblxuXHRcdHJldHVybiBjbWQoYHRpbWVvdXQgNDVzIGJhc2ggJHtzaGVsbEVzY2FwZShzY3JpcHRQYXRoKX1gKTtcblx0fVxuXG5cdGlmIChkZXRlY3RXaWZpQWNjZXNzUG9pbnRNb2RlRnJvbVN5c3RlbSgpKSB7XG5cdFx0cGVyc2lzdFdpZmlDbGllbnRNb2RlU3RhdGUoZmFsc2UpO1xuXHR9IGVsc2Uge1xuXHRcdHBlcnNpc3RXaWZpQ2xpZW50TW9kZVN0YXRlKGRldGVjdFdpZmlDbGllbnRNb2RlRnJvbVN5c3RlbSgpKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0c3luY05ldHdvcmtDb250cm9sU2V0dGluZ3NUb1N5c3RlbShlbnN1cmVOZXR3b3JrQ29udHJvbFNldHRpbmdzRG9jdW1lbnQoKSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coJ05ldHdvcmsgY29udHJvbCBzZXR0aW5ncyBjb3VsZCBub3QgYmUgYXBwbGllZCBkdXJpbmcgc3RhcnR1cDonLCBlcnJvcik7XG5cdH1cblxuXG5cdE1ldGVvci5tZXRob2RzKHtcblxuXHRcdCdhZG1pblNldE5ld1Bhc3N3b3JkJzogZnVuY3Rpb24oYWRtaW5JZCwgdXNlcklkLCBuZXdQYXNzd29yZCkgeyAvLyBBZG1pbiBjYW4gZm9yY2libHkgY2hhbmdlIHRoZSBwYXNzd29yZCBmb3IgYSB1c2VyXG5cdFx0XHRpZiAoUm9sZXMudXNlcklzSW5Sb2xlKGFkbWluSWQsICdhZG1pbicpKSB7XG5cdFx0XHRcdEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgbmV3UGFzc3dvcmQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2NyZWF0ZUFjY291bnQnOiBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQsIHByb2ZpbGUpIHtcblx0XHRcdHJldHVybiBBY2NvdW50cy5jcmVhdGVVc2VyKHtlbWFpbDplbWFpbCxwYXNzd29yZDpwYXNzd29yZCxwcm9maWxlOnByb2ZpbGV9KTsgLy8gQ2FsbGJhY2sgaXMgbm90IHN1cHBvcnRlZCBvbiBzZXJ2ZXItc2lkZVxuXHRcdH0sXG5cdFx0J2VkaXRBY2NvdW50JzogZnVuY3Rpb24odXNlcklkLCBlbWFpbCwgcGFzc3dvcmQsIHByb2ZpbGUpIHtcblx0XHRcdE1ldGVvci51c2Vycy51cGRhdGUoe19pZDogdXNlcklkfSwge1xuXHQgIFx0XHRcdCRzZXQ6IHtcblx0ICAgIFx0XHRcdCdlbWFpbHMuMC5hZGRyZXNzJzogZW1haWwsXG5cdCAgICBcdFx0XHRwcm9maWxlOiBwcm9maWxlXG5cdCAgXHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRpZiAocGFzc3dvcmQpIHtcblx0XHRcdFx0QWNjb3VudHMuc2V0UGFzc3dvcmQodXNlcklkLCBwYXNzd29yZCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnY2hhbmdlRW1haWwnOiBmdW5jdGlvbihlbWFpbCkge1xuXHRcdFx0dmFyIGVtYWlsID0gZW1haWw7XG5cdFx0XHRjaGVjayhlbWFpbCwgU3RyaW5nKTtcblx0XHRcdHZhciB1c2VyID0gTWV0ZW9yLnVzZXIoKTtcblx0XHRcdHZhciBvbGRlbWFpbCA9IHVzZXIuZW1haWxzO1xuXHRcdFx0dmFyIGVtYWlsUmVnID0gL14oW1xcdy1cXC5dK0AoW1xcdy1dK1xcLikrW1xcdy1dezIsNH0pPyQvO1xuXHRcdFx0aWYgKGVtYWlsUmVnLnRlc3QoZW1haWwpKSB7XG5cdFx0XHRpZihvbGRlbWFpbCAhPSBudWxsKXtcblx0XHRcdCAgQWNjb3VudHMucmVtb3ZlRW1haWwodXNlci5faWQsIHVzZXIuZW1haWxzWzBdLmFkZHJlc3MpXG5cdFx0XHR9XG5cdFx0XHRBY2NvdW50cy5hZGRFbWFpbCh1c2VyLl9pZCwgZW1haWwpO1xuXHRcdFx0cmV0dXJuIGVtYWlsO1xuXHRcdCAgfSBlbHNlXG5cdFx0ICByZXR1cm4gbnVsbFxuXHRcdCB9LFxuXHRcdCdkZWxldGVVc2VyJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRNZXRlb3IudXNlcnMucmVtb3ZlKHVzZXJJZCwgZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGVuIGRlbGV0aW5nIHVzZXIgOiBcIitlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnYWRkTWFuYWdlclJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsICdtYW5hZ2VyJyk7XG5cdFx0fSxcblx0XHQncmVtb3ZlTWFuYWdlclJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLnJlbW92ZVVzZXJzRnJvbVJvbGVzKHVzZXJJZCwgJ21hbmFnZXInKTtcblx0XHR9LFxuXHRcdCdhZGRBZG1pblJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsICdhZG1pbicpO1xuXHRcdH0sXG5cdFx0J3JlbW92ZUFkbWluUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMucmVtb3ZlVXNlcnNGcm9tUm9sZXModXNlcklkLCAnYWRtaW4nKTtcblx0XHR9LFxuXHRcdCdnZXRTaGFyaW5nQ29udHJvbFNldHRpbmdzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gYnVpbGROZXR3b3JrQ29udHJvbFNldHRpbmdzUmVzcG9uc2UoZW5zdXJlTmV0d29ya0NvbnRyb2xTZXR0aW5nc0RvY3VtZW50KCkpO1xuXHRcdH0sXG5cdFx0J3NldFNoYXJpbmdDb250cm9sTW9kZUVuYWJsZWQnOiBmdW5jdGlvbihlbmFibGVkKSB7XG5cdFx0XHRjaGVjayhlbmFibGVkLCBCb29sZWFuKTtcblxuXHRcdFx0dmFyIGN1cnJlbnRTZXR0aW5ncyA9IGdldE5ldHdvcmtDb250cm9sU2V0dGluZ3NGcm9tU3RvcmUoKTtcblx0XHRcdHZhciBuZXh0U2V0dGluZ3MgPSBwZXJzaXN0TmV0d29ya0NvbnRyb2xTZXR0aW5ncyhPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50U2V0dGluZ3MsIHtcblx0XHRcdFx0c2hhcmluZ0NvbnRyb2xNb2RlRW5hYmxlZDogZW5hYmxlZFxuXHRcdFx0fSkpO1xuXG5cdFx0XHRyZXR1cm4gc3luY05ldHdvcmtDb250cm9sU2V0dGluZ3NUb1N5c3RlbShuZXh0U2V0dGluZ3MpO1xuXHRcdH0sXG5cdFx0J3NldFNoYXJpbmdDb250cm9sRG9tYWluTGlzdCc6IGZ1bmN0aW9uKGxpc3ROYW1lLCBkb21haW5zKSB7XG5cdFx0XHRjaGVjayhsaXN0TmFtZSwgU3RyaW5nKTtcblxuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KGRvbWFpbnMpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2ludmFsaWQtZG9tYWluLWxpc3QnLCAnRG9tYWluIGxpc3RzIG11c3QgYmUgc2VudCBhcyBhbiBhcnJheS4nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGxpc3ROYW1lICE9PSAnd2hpdGVsaXN0JyAmJiBsaXN0TmFtZSAhPT0gJ2JsYWNrbGlzdCcpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignaW52YWxpZC1kb21haW4tbGlzdC1uYW1lJywgJ1Vuc3VwcG9ydGVkIGRvbWFpbiBsaXN0LicpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY3VycmVudFNldHRpbmdzID0gZ2V0TmV0d29ya0NvbnRyb2xTZXR0aW5nc0Zyb21TdG9yZSgpO1xuXHRcdFx0dmFyIHVwZGF0ZWRTZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRTZXR0aW5ncywge1xuXHRcdFx0XHRbbGlzdE5hbWVdOiBkb21haW5zXG5cdFx0XHR9KTtcblx0XHRcdHZhciBzYXZlZFNldHRpbmdzID0gcGVyc2lzdE5ldHdvcmtDb250cm9sU2V0dGluZ3ModXBkYXRlZFNldHRpbmdzKTtcblxuXHRcdFx0cmV0dXJuIHN5bmNOZXR3b3JrQ29udHJvbFNldHRpbmdzVG9TeXN0ZW0oc2F2ZWRTZXR0aW5ncyk7XG5cdFx0fSxcblxuXHRcdC8vICdnZXRVc2VkU3BhY2UnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciByZXM7XG5cdFx0Ly8gXHRyZXMgPSBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKSArIFwiLyBcIiArIGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpICsgXCIgKFwiK2NtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpK1widXNlZClcIjtcblx0XHQvLyBcdHJldHVybiByZXM7XG5cdFx0Ly8gfSxcblx0XHQncnVuQ29tbWFuZCc6IGZ1bmN0aW9uKHBhc3N3b3JkLCBjb21tYW5kKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwiZWNobyBcIitwYXNzd29yZCtcIiB8IHN1ZG8gLVMgXCIrY29tbWFuZCk7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFVzZWRTcGFjZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcyA9IHt9O1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKSArIFwiLyBcIiArIGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpICsgXCIgKFwiK2NtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpK1widXNlZClcIjtcblx0XHRcdHJlcy5zdG9yYWdlVXNhZ2UgPSBjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKVxuXHRcdFx0cmVzLnN0b3JhZ2VVc2FnZSA9IHJlcy5zdG9yYWdlVXNhZ2UvMTAwMDAwMDtcblx0XHRcdHJlcy5zdG9yYWdlVXNhZ2UgPSByZXMuc3RvcmFnZVVzYWdlLnRvRml4ZWQoMik7XG5cdFx0XHRyZXMuc3RvcmFnZVRvdGFsID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIilcblx0XHRcdHJlcy5zdG9yYWdlVG90YWwgPSByZXMuc3RvcmFnZVRvdGFsLzEwMDAwMDA7XG5cdFx0XHRyZXMuc3RvcmFnZVRvdGFsID0gcmVzLnN0b3JhZ2VUb3RhbC50b0ZpeGVkKDIpO1xuXHRcdFx0cmVzLnBlcmNlbnRhZ2UgPSBjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0U1NJRCc6IGZ1bmN0aW9uKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdzc2lkPSguKiknKSk7XG4gIFx0XHRcdHZhciBTU0lEID0gbWF0Y2hbMV07XG4gIFx0XHRcdFNTSUQgPSBkZWNvZGVVUklDb21wb25lbnQoU1NJRC5yZXBsYWNlKC8uLi9nLCAnJSQmJykpXG4gIFx0XHRcdHJldHVybiBTU0lEO1xuXHRcdH0sXG5cdFx0J3NldFNTSUQnOiBmdW5jdGlvbihuZXdTU0lEKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0Y29uc3QgZW5jb2RlZE5ld1NTSUQgPSBuZXcgQnVmZmVyKG5ld1NTSUQpLnRvU3RyaW5nKCdoZXgnKTsgLy8gQ29udmVydCBpbnRvIEhleFxuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3NzaWQ9KC4qKScpKVsxXSwgZW5jb2RlZE5ld1NTSUQpO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRXaWZpUGFzc3dvcmQnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgncGFzc3dvcmQ9KC4qKScpKTtcbiAgXHRcdFx0dmFyIHBhc3N3b3JkID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBwYXNzd29yZDtcblx0XHR9LFxuXHRcdCdzZXRXaWZpUGFzc3dvcmQnOiBmdW5jdGlvbihuZXdQYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgncGFzc3dvcmQ9KC4qKScpKVsxXSwgbmV3UGFzc3dvcmQpO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRXaWZpQ2hhbm5lbCc6IGZ1bmN0aW9uKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdjaGFubmVsPSguKiknKSk7XG4gIFx0XHRcdHZhciBjaGFubmVsID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBjaGFubmVsO1xuXHRcdH0sXG5cdFx0J3NldFdpZmlDaGFubmVsJzogZnVuY3Rpb24obmV3Q2hhbm5lbCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJykpWzFdLCBuZXdDaGFubmVsKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQvLyAnZ2V0V2lmaUJhbmQnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuXHRcdC8vIFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdiYW5kPSguKiknKSk7XG5cblx0XHQvLyBcdGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuXHRcdC8vIFx0ICByZXR1cm4gbWF0Y2hbMV07XG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0ICAvLyBSZXR1cm4gZGVmYXVsdCB2YWx1ZSBpZiB0aGUgYmFuZCBzZXR0aW5nIGRvZXMgbm90IGV4aXN0XG5cdFx0Ly8gXHQgIHJldHVybiAnMi40R0h6Jztcblx0XHQvLyBcdH1cblx0XHQvLyAgIH0sXG5cdFx0Ly8gJ3NldFdpZmlCYW5kJzogZnVuY3Rpb24obmV3QmFuZCkge1xuXHRcdC8vIFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG5cdFx0Ly8gXHR2YXIgYmFuZFJlZ2V4ID0gbmV3IFJlZ0V4cCgnYmFuZD0oLiopJyk7XG5cdFx0Ly8gXHR2YXIgY2hhbm5lbFJlZ2V4ID0gbmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJyk7XG5cdFx0Ly8gXHR2YXIgbWF0Y2hCYW5kID0gZGF0YS5tYXRjaChiYW5kUmVnZXgpO1xuXHRcdC8vIFx0dmFyIG1hdGNoQ2hhbm5lbCA9IGRhdGEubWF0Y2goY2hhbm5lbFJlZ2V4KTtcblxuXHRcdC8vIFx0dmFyIG5ld0RhdGEgPSBkYXRhO1xuXG5cdFx0Ly8gXHRpZiAobWF0Y2hCYW5kKSB7XG5cdFx0Ly8gXHRcdC8vIFJlcGxhY2UgdGhlIGV4aXN0aW5nIGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0XHRuZXdEYXRhID0gbmV3RGF0YS5yZXBsYWNlKGJhbmRSZWdleCwgYGJhbmQ9JHtuZXdCYW5kfWApO1xuXHRcdC8vIFx0fSBlbHNlIHtcblx0XHQvLyBcdFx0Ly8gQXBwZW5kIHRoZSBuZXcgYmFuZCBzZXR0aW5nXG5cdFx0Ly8gXHRcdG5ld0RhdGEgPSBgJHtuZXdEYXRhLnRyaW0oKX1cXG5iYW5kPSR7bmV3QmFuZH1gO1xuXHRcdC8vIFx0fVxuXG5cdFx0Ly8gXHRpZiAobWF0Y2hDaGFubmVsICYmIG1hdGNoQ2hhbm5lbFsxXSkge1xuXHRcdC8vIFx0XHQvLyBDb252ZXJ0IHRoZSBjaGFubmVsIHZhbHVlIHRvIGEgbnVtYmVyXG5cdFx0Ly8gXHRcdHZhciBjdXJyZW50Q2hhbm5lbCA9IHBhcnNlSW50KG1hdGNoQ2hhbm5lbFsxXSwgMTApO1xuXG5cdFx0Ly8gXHRcdC8vIFNldCBjaGFubmVsIHRvIGEgZGVmYXVsdCAyLjRHSHogY2hhbm5lbCBpZiBjdXJyZW50IGNoYW5uZWwgaXMgZm9yIDVHSHpcblx0XHQvLyBcdFx0aWYgKG5ld0JhbmQgPT0gXCIyLjRHSHpcIiAmJiBjdXJyZW50Q2hhbm5lbCA+IDE0KSB7XG5cdFx0Ly8gXHRcdFx0bmV3RGF0YSA9IG5ld0RhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTExYCk7XG5cdFx0Ly8gXHRcdH0gZWxzZSBpZiAobmV3QmFuZCA9PSBcIjVHSHpcIiAmJiBjdXJyZW50Q2hhbm5lbCA8PSAxNCkge1xuXHRcdC8vIFx0XHRcdG5ld0RhdGEgPSBuZXdEYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD00NGApO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9XG5cblx0XHQvLyBcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0Ly8gfSxcblx0XHQvLyAgICdzZXRXaWZpQmFuZCc6IGZ1bmN0aW9uKG5ld0JhbmQpIHtcblx0XHQvLyBcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuXHRcdC8vIFx0dmFyIGJhbmRSZWdleCA9IG5ldyBSZWdFeHAoJ2JhbmQ9KC4qKScpO1xuXHRcdC8vIFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChiYW5kUmVnZXgpO1xuXG5cdFx0Ly8gXHRpZiAobWF0Y2gpIHtcblx0XHQvLyBcdCAgLy8gUmVwbGFjZSB0aGUgZXhpc3RpbmcgYmFuZCBzZXR0aW5nXG5cdFx0Ly8gXHQgIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGJhbmRSZWdleCwgYGJhbmQ9JHtuZXdCYW5kfWApO1xuXHRcdC8vIFx0fSBlbHNlIHtcblx0XHQvLyBcdCAgLy8gQXBwZW5kIHRoZSBuZXcgYmFuZCBzZXR0aW5nXG5cdFx0Ly8gXHQgIHZhciBuZXdEYXRhID0gYCR7ZGF0YS50cmltKCl9XFxuYmFuZD0ke25ld0JhbmR9YDtcblx0XHQvLyBcdH1cblx0XHQvLyBcdHZhciBjaGFubmVsUmVnZXggPSBuZXcgUmVnRXhwKCdjaGFubmVsPSguKiknKTtcblx0XHQvLyBcdHZhciBtYXRjaDIgPSBkYXRhLm1hdGNoKGNoYW5uZWxSZWdleCk7XG5cdFx0Ly8gXHRpZiAobWF0Y2gyICYmIG1hdGNoMlsxXSkge1xuXHRcdC8vIFx0XHQvLyBTZXQgY2hhbm5lbCB0byBhIGRlZmF1bHQgMi40R0h6IGNoYW5uZWwgaWYgY3VycmVudCBjaGFubmVsIGlzIGZvciA1R0h6XG5cdFx0Ly8gXHRcdGlmIChuZXdCYW5kID09IFwiMi40R0h6XCIgJiYgbWF0Y2gyWzFdID4gMTQpIHtcblx0XHQvLyBcdFx0XHQvLyBBcHBlbmQgdGhlIG5ldyBiYW5kIHNldHRpbmdcblx0XHQvLyBcdFx0XHR2YXIgbmV3RGF0YTIgPSBkYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD0xMWApO1xuXHRcdC8vIFx0XHR9IGVsc2UgaWYgKG5ld0JhbmQgPT0gXCI1R0h6XCIgJiYgbWF0Y2gyWzFdIDw9IDE0KSB7XG5cdFx0Ly8gXHRcdFx0dmFyIG5ld0RhdGEyID0gZGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9NDRgKTtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fVxuXHRcdC8vIFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHQvLyAgIH0sXG5cdFx0J2dldFNlcmlhbCc6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnU0VSSUFMPSguKiknKSk7XG4gIFx0XHRcdHZhciBzZXJpYWwgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIHNlcmlhbDtcblx0XHR9LFxuXHRcdCdnZXRPcGVyYXRvck5hbWUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvcGVyYXRvck5hbWU7XG5cdFx0XHRvcGVyYXRvck5hbWUgPSBjbWQoXCJzdWRvIHFtaWNsaSAtcCAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1vcGVyYXRvci1uYW1lIHwgZ3JlcCAtbTIgJ05hbWUgICAgICAgICAgICAgJyB8IGF3ayAne3ByaW50ICQzfSdcIik7XG5cdFx0XHRyZXR1cm4gb3BlcmF0b3JOYW1lO1xuXHRcdH0sXG5cdFx0Ly8gJ2dldFNpZ25hbFN0cmVuZ3RoJzogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0dmFyIHNpZ25hbFN0cmVuZ3RoO1xuXHRcdC8vIFx0c2lnbmFsU3RyZW5ndGggPSBjbWQoXCJzdWRvIHFtaWNsaSAtcCAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrICd7cHJpbnQgJDMsICQyfSdcIik7XG5cdFx0Ly8gXHRyZXR1cm4gc2lnbmFsU3RyZW5ndGg7XG5cdFx0Ly8gfSxcblx0XHQnZ2V0U2lnbmFsU3RyZW5ndGgnOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgc2lnbmFsU3RyZW5ndGg7XG5cdFx0XHQvLyBUaGlzIGV4dHJhY3RzIGp1c3QgdGhlIG51bWVyaWMgcGFydCBvZiB0aGUgc2lnbmFsIHN0cmVuZ3RoLlxuXHRcdFx0c2lnbmFsU3RyZW5ndGggPSBjbWQoXCJzdWRvIHFtaWNsaSAtcCAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwICdOZXR3b3JrJyB8IGF3ayAne3ByaW50ICQzfScgfCBncmVwIC1vRSAnWy0wLTldKydcIik7XG5cblx0XHRcdC8vIENvbnZlcnQgc2lnbmFsIHN0cmVuZ3RoIHRvIGEgcXVhbGl0YXRpdmUgdmFsdWVcblx0XHRcdHZhciBzdHJlbmd0aFZhbHVlID0gcGFyc2VJbnQoc2lnbmFsU3RyZW5ndGgpO1xuXHRcdFx0dmFyIHF1YWxpdHkgPSAnVW5rbm93bic7XG5cdFx0XHRpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtNzApIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdFeGNlbGxlbnQnO1xuXHRcdFx0fSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlID49IC04NSkge1xuXHRcdFx0XHRxdWFsaXR5ID0gJ0dvb2QnO1xuXHRcdFx0fSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlID49IC0xMDApIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdGYWlyJztcblx0XHRcdH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA8IC0xMDApIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdQb29yJztcblx0XHRcdH1cblx0XHRcdHJldHVybiBxdWFsaXR5O1xuXHRcdH0sXG5cdFx0Ly8gJ2dldElzT25saW5lJzogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0dmFyIGlzT25saW5lO1xuXHRcdC8vIFx0aXNPbmxpbmUgPSBjbWQoXCJzdWRvIHFtaWNsaSAtcCAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrICd7cHJpbnQgJDMsICQyfSdcIik7XG5cdFx0Ly8gXHRyZXR1cm4gaXNPbmxpbmU7XG5cdFx0Ly8gfSxcblx0XHQvLyAnZ2V0QmFuZCc6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdHZhciBiYW5kO1xuLy9cdFx0XHRiYW5kID0gY21kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayBcXFwie3ByaW50ICQyfVxcXCIgfCBjdXQgLWRcXFxcJyAtZjJcIik7XG5cdFx0Ly8gXHRyZXR1cm4gYmFuZDtcblx0XHQvLyB9LFxuXHRcdCdnZXRBUE4nOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTj0oLiopJykpO1xuICBcdFx0XHR2YXIgQVBOID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBBUE47XG5cdFx0fSxcblx0XHQnZ2V0QVBOVXNlcic6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1VTRVJOQU1FPSguKiknKSk7XG4gIFx0XHRcdHZhciBBUE5Vc2VyID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBBUE5Vc2VyO1xuXHRcdH0sXG5cdFx0J2dldEFQTlBhc3N3b3JkJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE5fUEFTU1dPUkQ9KC4qKScpKTtcbiAgXHRcdFx0dmFyIEFQTlBhc3N3b3JkID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBBUE5QYXNzd29yZDtcblx0XHR9LFxuXHRcdCdnZXRTaW1DYXJkU3RhdHVzJzogZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHNpbVN0YXR1c1Jlc3VsdCA9ICdVbmtub3duJzsgLy8gRGVmYXVsdCBzdGF0dXNcblxuXHRcdFx0Ly8gRnVuY3Rpb24gdG8gZXhlY3V0ZSBjb21tYW5kIGFuZCBoYW5kbGUgZXJyb3JzXG5cdFx0XHRmdW5jdGlvbiBleGVjdXRlQ29tbWFuZChjb21tYW5kKSB7XG5cdFx0XHRcdGxldCByZXN1bHQ7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gY21kKGNvbW1hbmQpOyAvLyBFeGVjdXRlIHRoZSBjb21tYW5kXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHJlc3VsdCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgcmVzdWx0IGlzIGFuIGVycm9yIG9iamVjdFxuXHRcdFx0XHRcdFx0cmV0dXJuICdFcnJvcic7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdC8vIEhhbmRsZSBleGNlcHRpb25zIGlmIGNvbW1hbmQgZXhlY3V0aW9uIGZhaWxzXG5cdFx0XHRcdFx0cmV0dXJuICdFcnJvcic7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDsgLy8gUmV0dXJuIHRoZSByZXN1bHQgaWYgbm8gZXJyb3JzXG5cdFx0XHR9XG5cblx0XHRcdC8vIEV4ZWN1dGUgU0lNIGNhcmQgc3RhdHVzIGNoZWNrIGNvbW1hbmRcblx0XHRcdGxldCBzaW1TdGF0dXMgPSBleGVjdXRlQ29tbWFuZChcInN1ZG8gcW1pY2xpIC1wIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS11aW0tZ2V0LWNhcmQtc3RhdHVzIHwgZ3JlcCAnQ2FyZCBzdGF0ZTonXCIpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJTSU0gY2FyZCBzdGF0dXM6XCIsIHNpbVN0YXR1cyk7IC8vIExvZyB0aGUgcmF3IG91dHB1dFxuXHRcdFx0Ly8gUHJvY2VzcyB0aGUgb3V0cHV0IGFuZCBkZXRlcm1pbmUgU0lNIGNhcmQgc3RhdHVzXG5cdFx0XHRpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKCduby1hdHItcmVjZWl2ZWQnKSB8fCBzaW1TdGF0dXMuaW5jbHVkZXMoJ25vdC1pbnNlcnRlZCcpKSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9ICdObyBTSU0gY2FyZCc7XG5cdFx0XHR9IGVsc2UgaWYgKHNpbVN0YXR1cy5pbmNsdWRlcygnZXJyb3InKSkge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSBzaW1TdGF0dXM7IC8vIFVzZSB0aGUgZXJyb3IgbWVzc2FnZSBvciBubyBTSU0gZGV0ZWN0ZWQgbWVzc2FnZVxuXHRcdFx0fSBlbHNlIGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoJ3ByZXNlbnQnKSkge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSAnT0snO1xuXHRcdFx0fSBlbHNlIGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoJ2xvY2tlZCcpIHx8IHNpbVN0YXR1cy5pbmNsdWRlcygncGluLXJlcXVpcmVkJykpIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gJ1NJTSBjYXJkIGxvY2tlZCwgUElOIHJlcXVpcmVkJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9ICdVbmtub3duJzsgLy8gRm9yIG90aGVyIHN0YXR1c2VzXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc2ltU3RhdHVzUmVzdWx0O1xuXHRcdH0sXG5cdFx0J2dldFNpbVBpbic6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnU0lNX1BJTj0oLiopJykpO1xuICBcdFx0XHR2YXIgU2ltUGluID0gbWF0Y2hbMV07XG5cdFx0XHRyZXR1cm4gU2ltUGluO1xuXHRcdH0sXG5cdFx0J3NldFNpbVBpbic6IGZ1bmN0aW9uKFBJTikge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnU0lNX1BJTj0uKicpKSwgJ1NJTV9QSU49JytQSU4pO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdzZXRBUE4nOiBmdW5jdGlvbihBUE4sIHVzZXIsIHBhc3N3b3JkKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49LionKSksICdBUE49JytBUE4pO1xuICBcdFx0XHQvLyB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTj0oLiopJykpWzFdLCBBUE4pO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdzZXRBUE5Vc2VyJzogZnVuY3Rpb24oQVBOVXNlcikge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1VTRVJOQU1FPS4qJykpLCAnQVBOX1VTRVJOQU1FPScrQVBOVXNlcik7XG4gIFx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOUGFzc3dvcmQnOiBmdW5jdGlvbihBUE5QYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1BBU1NXT1JEPS4qJykpLCAnQVBOX1BBU1NXT1JEPScrQVBOUGFzc3dvcmQpO1xuICBcdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFJlbW90ZVN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN5c3RlbWN0bCBpcy1hY3RpdmUgcmVtb3RlLWlvdC5zZXJ2aWNlID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIDEgfHwgZWNobyAwXCIpO1xuXHRcdFx0aWYgKHJlc1swXSA9PSBcIjFcIikgeyAvLyBbMF0gaXMgYSBoYWNrIGJlY2F1c2UgdGhlIHJlc3VsdCByZXMgaGFzIG9uZSBleHRyYSBjaGFyYWN0ZXJcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdCdnZXRBdXRvU3luY1N0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN5c3RlbWN0bCBpcy1hY3RpdmUgYXV0b3N5bmMuc2VydmljZSA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyAxIHx8IGVjaG8gMFwiKTtcblx0XHRcdGlmIChyZXNbMF0gPT0gXCIxXCIpIHsgLy8gWzBdIGlzIGEgaGFjayBiZWNhdXNlIHRoZSByZXN1bHQgcmVzIGhhcyBvbmUgZXh0cmEgY2hhcmFjdGVyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQnZ2V0U2hhcmVJbnRlcm5ldFZpYUV0aGVybmV0U3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaXNTaGFyaW5nO1xuXHRcdFx0aXNTaGFyaW5nID0gY21kKFwiKHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1MIFBPU1RST1VUSU5HIC12IC1uIHwgZ3JlcCAtcSAnTUFTUVVFUkFERSAgYWxsICAtLSAgKiAgICAgIGV0aDAnICYmIGlwIGxpbmsgc2hvdyBldGgwIHwgZ3JlcCAtcSAnc3RhdGUgVVAnKSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiKTtcblx0XHRcdHJldHVybiBpc1NoYXJpbmc7XG5cdFx0fSxcblx0XHQnZ2V0U2hhcmVJbnRlcm5ldFZpYU1vYmlsZVN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlzU2hhcmluZztcblx0XHRcdGlzU2hhcmluZyA9IGNtZChcIihzdWRvIGlwdGFibGVzIC10IG5hdCAtTCBQT1NUUk9VVElORyAtdiAtbiB8IGdyZXAgLXEgJ01BU1FVRVJBREUgIGFsbCAgLS0gICogICAgICB3d2FuMCcgJiYgaXAgbGluayBzaG93IHd3YW4wIHwgZ3JlcCAtcSAnc3RhdGUgVVAnKSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiKTtcblx0XHRcdHJldHVybiBpc1NoYXJpbmc7XG5cdFx0fSxcblx0XHQvLyAnYWN0aXZhdGVJbnRlcm5ldFNoYXJpbmcnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciByZXM7XG5cdFx0Ly8gXHRyZXMgPSBjbWQoXCJzdWRvIHdpZmktYXAuY29uZmlnIHNldCBzaGFyZS5kaXNhYmxlZD1mYWxzZVwiKTtcblx0XHQvLyBcdHJldHVybiByZXM7XG5cdFx0Ly8gfSxcblx0XHQvLyAnZGlzYWN0aXZhdGVJbnRlcm5ldFNoYXJpbmcnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciByZXM7XG5cdFx0Ly8gXHRyZXMgPSBjbWQoXCJzdWRvIHdpZmktYXAuY29uZmlnIHNldCBzaGFyZS5kaXNhYmxlZD10cnVlXCIpO1xuXHRcdC8vIFx0cmV0dXJuIHJlcztcblx0XHQvLyB9LFxuXHRcdCdhY3RpdmF0ZVJlbW90ZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0YXJ0IHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdkaXNhY3RpdmF0ZVJlbW90ZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGRpc2FibGUgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdhY3RpdmF0ZUF1dG9TeW5jJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RhcnQgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZGlzYWN0aXZhdGVBdXRvU3luYyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBkaXNhYmxlIGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldEJhdHRlcnlTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHR2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGg7XG5cdFx0XHRyZXMgPSBjbWQoXCJweXRob24zIFwiK3NjcmlwdHNQYXRoK1wiL3BpanVpY2Vfc3RhdHVzLnB5XCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdC8vICdnZXRJc09ubGluZSc6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0dmFyIHJlcztcblx0XHQvLyBcdHZhciBzY3JpcHRzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5zY3JpcHRzUGF0aDtcblx0XHQvLyBcdC8vIE1ha2Ugc3VyZSB5b3VyIHNjcmlwdCBpcyBleGVjdXRhYmxlLCBlLmcuLCBjaG1vZCAreCBjaGVja19pbnRlcm5ldC5zaFxuXHRcdC8vIFx0cmVzID0gY21kKFwiYmFzaCBcIiArIHNjcmlwdHNQYXRoICsgXCIvY2hlY2tfaW50ZXJuZXQuc2hcIik7IC8vIFJlcGxhY2UgJ2Jhc2gnIHdpdGggJ3NoJyBpZiBuZWVkZWRcblx0XHQvLyBcdC8vIFRoZSBzY3JpcHQgcmV0dXJucyBcInRydWVcIiBvciBcImZhbHNlXCIgYXMgYSBzdHJpbmcsIHNvIHdlIGNvbXBhcmUgdGhlIHJlc3VsdCBkaXJlY3RseVxuXHRcdC8vIFx0cmV0dXJuIHJlcy50cmltKCkgPT09IFwidHJ1ZVwiOyAvLyBUaGlzIGNvbnZlcnRzIHRoZSBzdHJpbmcgdG8gYSBib29sZWFuXG5cdFx0Ly8gfSxcblx0XHQnZ2V0SXNPbmxpbmUnOiBmdW5jdGlvbigpIHtcblx0XHRcdGxldCByZXM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXMgPSBjbWQoXCJwaW5nIC1jIDEgOC44LjguOFwiKTtcblx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHBpbmcgY29tbWFuZCB3YXMgc3VjY2Vzc2Z1bCBiYXNlZCBvbiB0aGUgb3V0cHV0XG5cdFx0XHRcdGxldCBpc09ubGluZSA9IHJlcy5pbmNsdWRlcyhcIjEgcGFja2V0cyByZWNlaXZlZFwiKSB8fCByZXMuaW5jbHVkZXMoXCIxIHJlY2VpdmVkXCIpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIk9ubGluZSBzdGF0dXM6XCIsIGlzT25saW5lKTsgLy8gQ29ycmVjdGx5IGxvZ2dpbmcgdGhlIGJvb2xlYW4gcmVzdWx0XG5cdFx0XHRcdHJldHVybiBpc09ubGluZTsgLy8gRGlyZWN0bHkgcmV0dXJuIHRoZSBib29sZWFuIHZhbHVlXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHQvLyBJZiBhbiBlcnJvciBvY2N1cnMgKHdoaWNoIGNvdWxkIGluY2x1ZGUgYmVpbmcgdW5hYmxlIHRvIHJ1biB0aGUgcGluZyBjb21tYW5kKSwgYXNzdW1lIG9mZmxpbmVcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciBvciBvZmZsaW5lOlwiLCBlcnJvcik7XG5cdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gQXNzdW1lIG9mZmxpbmUgaWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2dldEV0aDBJUCc6IGZ1bmN0aW9uKCkgeyAvLyBHZXQgSVAgb2YgYm94XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcInJlc3VsdCA6IFwiK1wiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiaXAgOiBcIitcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIFwiK2ludGVyZmFjZStcIiAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFd3YW4wSVAnOiBmdW5jdGlvbigpIHsgLy8gR2V0IElQIG9mIGJveFxuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vY29uc29sZS5sb2coXCJyZXN1bHQgOiBcIitcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmVzID0gY21kKFwiaXAgYWRkciBzaG93IHd3YW4wIHwgZ3JlcCBcXFwiaW5ldFxcXFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblxuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImlwIDogXCIrXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBcIitpbnRlcmZhY2UrXCIgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXG5cdFx0J2dldEJlZWtlZU9zVmVyc2lvbic6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG5cdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0JFRUtFRV9PU19WRVJTSU9OPSguKiknKSk7XG5cdFx0XHR2YXIgc2VyaWFsID0gbWF0Y2hbMV07XG5cdFx0XHRyZXR1cm4gc2VyaWFsO1xuXHRcdH0sXG5cdFx0J2dldEJlZWtlZUhvbWVWZXJzaW9uJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRqc29uID0gSlNPTi5wYXJzZShBc3NldHMuZ2V0VGV4dChcInZlcnNpb24uanNvblwiKSk7XG5cdFx0XHRyZXR1cm4ganNvbi52ZXJzaW9uO1xuXHRcdH0sXG5cdFx0J3Jlc3RhcnRNb2JpbGVDb25uZWN0JzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgcmVzdGFydCBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlczsnJ1xuXHRcdH0sXG5cdFx0J2dldE1vYmlsZUNvbm5lY3RFbmFibGVkJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgcmVzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgaXMtYWN0aXZlIG1vYmlsZV9jb25uZWN0LnNlcnZpY2UgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnRvU3RyaW5nKCkudHJpbSgpID09PSBcInRydWVcIjtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdlbmFibGVNb2JpbGVDb25uZWN0JzogZnVuY3Rpb24oKSB7XG5cdFx0XHRjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdGFydCBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlXCIpO1xuXHRcdFx0Y21kKFwic3VkbyBzeXN0ZW1jdGwgZW5hYmxlIG1vYmlsZV9jb25uZWN0LnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXHRcdCdkaXNhYmxlTW9iaWxlQ29ubmVjdCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y21kKFwic3VkbyBzeXN0ZW1jdGwgc3RvcCBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlXCIpO1xuXHRcdFx0Y21kKFwic3VkbyBzeXN0ZW1jdGwgZGlzYWJsZSBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHQnZ2V0SW50ZXJuZXRJbnRlcmZhY2UnOiBmdW5jdGlvbigpIHtcblx0XHRcdGxldCByZXM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXMgPSBjbWQoXCJpcCByb3V0ZSBnZXQgMS4yLjMuNCB8IGF3ayAne3ByaW50ICQ1OyBleGl0fSdcIik7IC8vIEV4ZWN1dGUgdGhlIGNvbW1hbmRcblx0XHRcdFx0aWYgKHJlcy50cmltKCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzLnRyaW0oKTsgLy8gUmV0dXJuIHRoZSBjbGVhbmVkLXVwIHJlc3VsdCBpZiBub3QgZW1wdHlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gJ1Vua25vd24nOyAvLyBSZXR1cm4gYSBkZWZhdWx0IG1lc3NhZ2UgaWYgdGhlIHJlc3VsdCBpcyBlbXB0eVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHQvLyBIYW5kbGUgY2FzZXMgd2hlcmUgdGhlIGNvbW1hbmQgZmFpbHMgb3IgaXMgbm90IGZvdW5kXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBpbnRlcm5ldCBpbnRlcmZhY2U6XCIsIGVycm9yKTtcblx0XHRcdFx0cmV0dXJuICdFcnJvcic7IC8vIFJldHVybiBhbiBlcnJvciBtZXNzYWdlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZ2V0V0xBTlVTQic6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IHJlcztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlcyA9IGNtZCgnaXAgbGluayBzaG93IHdsYW51c2InKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZ2V0V2lmaUNsaWVudE1vZGVFbmFibGVkJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpO1xuXHRcdH0sXG5cdFx0J2VuYWJsZVdpZmlDbGllbnRNb2RlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRydW5XaWZpTW9kZVNjcmlwdCh3aWZpQ2xpZW50RW5hYmxlU2NyaXB0TmFtZSk7XG5cdFx0XHRcdHJldHVybiBnZXRXaWZpQ2xpZW50TW9kZVN0YXRlKCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgZW5hYmxpbmcgV2ktRmkgY2xpZW50IG1vZGU6JywgZXJyb3IpO1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuXHRcdFx0XHRcdCd3aWZpLWNsaWVudC1tb2RlLWVuYWJsZS1mYWlsZWQnLFxuXHRcdFx0XHRcdGVycm9yLnJlYXNvbiB8fCBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZW5hYmxlIFdpLUZpIGNsaWVudCBtb2RlLidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdkaXNhYmxlV2lmaUNsaWVudE1vZGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJ1bldpZmlNb2RlU2NyaXB0KHdpZmlDbGllbnREaXNhYmxlU2NyaXB0TmFtZSk7XG5cdFx0XHRcdGRpc2FibGVJbnRlcm5ldFNoYXJpbmdXaWZpQ2xpZW50SW5TeXN0ZW0oKTtcblx0XHRcdFx0cmV0dXJuIGdldFdpZmlDbGllbnRNb2RlU3RhdGUoKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBkaXNhYmxpbmcgV2ktRmkgY2xpZW50IG1vZGU6JywgZXJyb3IpO1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuXHRcdFx0XHRcdCd3aWZpLWNsaWVudC1tb2RlLWRpc2FibGUtZmFpbGVkJyxcblx0XHRcdFx0XHRlcnJvci5yZWFzb24gfHwgZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGRpc2FibGUgV2ktRmkgY2xpZW50IG1vZGUuJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2dldFdpZmlOZXR3b3Jrcyc6IGFzeW5jIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkKCk7XG5cblx0XHRcdHZhciB3aWZpID0gcmVxdWlyZSgnbm9kZS13aWZpJyk7XG5cdFx0XHR3aWZpLmluaXQoe1xuXHRcdFx0XHRpZmFjZTogJ3dsYW51c2InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnU3RhcnRpbmcgd2lmaSBzY2FuJyk7XG5cdFx0XHRcdHdpZmkuc2NhbigoZXJyb3IsIG5ldHdvcmtzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBzY2FubmluZyBuZXR3b3JrczonLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKFtdKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ1dpZmkgc2NhbiBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHVuaXF1ZU5ldHdvcmtzID0gbmV3IE1hcCgpO1xuXG5cdFx0XHRcdFx0XHRuZXR3b3Jrcy5mb3JFYWNoKChuZXR3b3JrKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGxldCBzdHJlbmd0aDtcblx0XHRcdFx0XHRcdFx0aWYgKG5ldHdvcmsucXVhbGl0eSA+IDgwKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RyZW5ndGggPSAnd2lmaS00Jztcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChuZXR3b3JrLnF1YWxpdHkgPiA1NSkge1xuXHRcdFx0XHRcdFx0XHRcdHN0cmVuZ3RoID0gJ3dpZmktMyc7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobmV0d29yay5xdWFsaXR5ID4gMzApIHtcblx0XHRcdFx0XHRcdFx0XHRzdHJlbmd0aCA9ICd3aWZpLTInO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHN0cmVuZ3RoID0gJ3dpZmktMSc7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBic3NpZCA9IG5ldHdvcmsubWFjID8gbmV0d29yay5tYWMudG9VcHBlckNhc2UoKSA6IG51bGw7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9IGAke25ldHdvcmsuc3NpZH06JHtic3NpZCB8fCAndW5rbm93bid9YDtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIXVuaXF1ZU5ldHdvcmtzLmhhcyhrZXkpIHx8IG5ldHdvcmsucXVhbGl0eSA+IHVuaXF1ZU5ldHdvcmtzLmdldChrZXkpLnF1YWxpdHkpIHtcblx0XHRcdFx0XHRcdFx0XHR1bmlxdWVOZXR3b3Jrcy5zZXQoa2V5LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiBuZXR3b3JrLnNzaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRic3NpZDogYnNzaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJlbmd0aDogc3RyZW5ndGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWN1cml0eTogbmV0d29yay5zZWN1cml0eSxcblx0XHRcdFx0XHRcdFx0XHRcdHF1YWxpdHk6IG5ldHdvcmsucXVhbGl0eSxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHVuaXF1ZU5ldHdvcmtzQXJyYXkgPSBBcnJheS5mcm9tKHVuaXF1ZU5ldHdvcmtzLnZhbHVlcygpKTtcblx0XHRcdFx0XHRcdHVuaXF1ZU5ldHdvcmtzQXJyYXkuZm9yRWFjaCgobmV0d29yaykgPT4gZGVsZXRlIG5ldHdvcmsucXVhbGl0eSk7XG5cblx0XHRcdFx0XHRcdHJlc29sdmUodW5pcXVlTmV0d29ya3NBcnJheSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2Nvbm5lY3RUb1dpZmknOiBhc3luYyBmdW5jdGlvbihzc2lkLCBwYXNzd29yZCkge1xuXHRcdFx0ZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkKCk7XG5cblx0XHRcdHZhciB3aWZpID0gcmVxdWlyZSgnbm9kZS13aWZpJyk7XG5cdFx0XHR3aWZpLmluaXQoe1xuXHRcdFx0XHRpZmFjZTogJ3dsYW51c2InLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBjdXJyZW50Q29ubmVjdGlvbkluZm8gPSBnZXRDbGllbnRDb25uZWN0aW9uSW5mb0Zyb21TeXN0ZW0oKTtcblx0XHRcdGlmIChjdXJyZW50Q29ubmVjdGlvbkluZm8uc3NpZCA9PT0gc3NpZCkge1xuXHRcdFx0XHRjb25zdCBzdWJuZXRDb25mbGljdCA9IGdldFdpZmlDbGllbnRTdWJuZXRDb25mbGljdEZyb21TeXN0ZW0oKTtcblx0XHRcdFx0aWYgKHN1Ym5ldENvbmZsaWN0LmRldGVjdGVkKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcblx0XHRcdFx0XHRcdCd3aWZpLWNsaWVudC1zdWJuZXQtY29uZmxpY3QnLFxuXHRcdFx0XHRcdFx0YENvbm5lY3RlZCB0byAke3NzaWR9LCBidXQgdGhlIGV4dGVybmFsIFdpLUZpIHVzZXMgdGhlIHNhbWUgc3VibmV0IGFzIHRoZSBCb3ggbG9jYWwgV2ktRmkgKCR7c3VibmV0Q29uZmxpY3QuY2xpZW50U3VibmV0fSkuYFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNvbm5lY3Rpb25Db25maWcgPSB7IHNzaWQ6IHNzaWQgfTtcblxuXHRcdFx0aWYgKHR5cGVvZiBwYXNzd29yZCA9PT0gJ3N0cmluZycgJiYgcGFzc3dvcmQgIT09ICcnKSB7XG5cdFx0XHRcdGNvbm5lY3Rpb25Db25maWcucGFzc3dvcmQgPSBwYXNzd29yZDtcblx0XHRcdH1cblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKGN1cnJlbnRDb25uZWN0aW9uSW5mby5zc2lkICE9PSAnTm90IGNvbm5lY3RlZCcpIHtcblx0XHRcdFx0XHRhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XHRcdFx0d2lmaS5kaXNjb25uZWN0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0YXdhaXQgd2FpdCgxMDAwKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGNvbm5lY3RSZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XHRcdHdpZmkuY29ubmVjdChjb25uZWN0aW9uQ29uZmlnLCAoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBjb25uZWN0aW5nIHRvIHdpZmk6JywgZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKGZhbHNlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmICghY29ubmVjdFJlc3VsdCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGlzVmVyaWZpZWQgPSBhd2FpdCB3YWl0Rm9yQ2xpZW50U1NJRChzc2lkLCAzMDAwMCk7XG5cblx0XHRcdFx0aWYgKCFpc1ZlcmlmaWVkKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCBjYWxsYmFjayByZXR1cm5lZCBzdWNjZXNzIGJ1dCBTU0lEIHZlcmlmaWNhdGlvbiBmYWlsZWQ6Jywgc3NpZCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgc3VibmV0Q29uZmxpY3QgPSBnZXRXaWZpQ2xpZW50U3VibmV0Q29uZmxpY3RGcm9tU3lzdGVtKCk7XG5cdFx0XHRcdGlmIChzdWJuZXRDb25mbGljdC5kZXRlY3RlZCkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG5cdFx0XHRcdFx0XHQnd2lmaS1jbGllbnQtc3VibmV0LWNvbmZsaWN0Jyxcblx0XHRcdFx0XHRcdGBDb25uZWN0ZWQgdG8gJHtzc2lkfSwgYnV0IHRoZSBleHRlcm5hbCBXaS1GaSB1c2VzIHRoZSBzYW1lIHN1Ym5ldCBhcyB0aGUgQm94IGxvY2FsIFdpLUZpICgke3N1Ym5ldENvbmZsaWN0LmNsaWVudFN1Ym5ldH0pLmBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byB3aWZpOicsIHNzaWQpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIE1ldGVvci5FcnJvcikge1xuXHRcdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciB3aGlsZSBjb25uZWN0aW5nIHRvIHdpZmk6JywgZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZGlzY29ubmVjdFdpZmknOiBmdW5jdGlvbigpIHtcblx0XHRcdGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXG5cdFx0XHR2YXIgd2lmaSA9IHJlcXVpcmUoJ25vZGUtd2lmaScpO1xuXHRcdFx0d2lmaS5pbml0KHtcblx0XHRcdFx0aWZhY2U6ICd3bGFudXNiJyxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0d2lmaS5kaXNjb25uZWN0KChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgZGlzY29ubmVjdGluZyBmcm9tIHdpZmk6JywgZXJyb3IpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShmYWxzZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdEaXNjb25uZWN0ZWQgZnJvbSB3aWZpJyk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdmb3JnZXRXaWZpJzogZnVuY3Rpb24oc3NpZCkge1xuXHRcdFx0ZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkKCk7XG5cblx0XHRcdHZhciB3aWZpID0gcmVxdWlyZSgnbm9kZS13aWZpJyk7XG5cdFx0XHR3aWZpLmluaXQoe1xuXHRcdFx0XHRpZmFjZTogJ3dsYW51c2InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHR3aWZpLmRlbGV0ZUNvbm5lY3Rpb24oeyBzc2lkOiBzc2lkIH0sIChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgY29ubmVjdGluZyB0byB3aWZpOicsIGVycm9yKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoZmFsc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIHdpZmk6Jywgc3NpZCk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdnZXRDbGllbnRTU0lEJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gZ2V0Q2xpZW50U1NJREZyb21TeXN0ZW0oKTtcblx0XHR9LFxuXHRcdCdnZXRDbGllbnRDb25uZWN0aW9uSW5mbyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGdldENsaWVudENvbm5lY3Rpb25JbmZvRnJvbVN5c3RlbSgpO1xuXHRcdH0sXG5cdFx0J2dldENhcHRpdmVQb3J0YWxTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXHRcdFx0cmV0dXJuIGdldENhcHRpdmVQb3J0YWxTdGF0dXNGcm9tU3lzdGVtKCk7XG5cdFx0fSxcblx0XHQnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzV2lmaUNsaWVudCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGdldEludGVybmV0U2hhcmluZ1N0YXR1c1dpZmlDbGllbnRGcm9tU3lzdGVtKCk7XG5cdFx0fSxcblx0XHQnZW5hYmxlSW50ZXJuZXRTaGFyaW5nV2lmaUNsaWVudCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZW5hYmxlSW50ZXJuZXRTaGFyaW5nV2lmaUNsaWVudEluU3lzdGVtKCk7XG5cdFx0XHRcdHJldHVybiBnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNXaWZpQ2xpZW50RnJvbVN5c3RlbSgpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGVuYWJsaW5nIGludGVybmV0IHNoYXJpbmcgdmlhIFdpLUZpIGNsaWVudDonLCBlcnJvcik7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG5cdFx0XHRcdFx0J3dpZmktY2xpZW50LXNoYXJpbmctZW5hYmxlLWZhaWxlZCcsXG5cdFx0XHRcdFx0ZXJyb3IucmVhc29uIHx8IGVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBlbmFibGUgaW50ZXJuZXQgc2hhcmluZyB2aWEgV2ktRmkgY2xpZW50Lidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nV2lmaUNsaWVudCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZGlzYWJsZUludGVybmV0U2hhcmluZ1dpZmlDbGllbnRJblN5c3RlbSgpO1xuXHRcdFx0XHRyZXR1cm4gZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzV2lmaUNsaWVudEZyb21TeXN0ZW0oKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBkaXNhYmxpbmcgaW50ZXJuZXQgc2hhcmluZyB2aWEgV2ktRmkgY2xpZW50OicsIGVycm9yKTtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcblx0XHRcdFx0XHQnd2lmaS1jbGllbnQtc2hhcmluZy1kaXNhYmxlLWZhaWxlZCcsXG5cdFx0XHRcdFx0ZXJyb3IucmVhc29uIHx8IGVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBkaXNhYmxlIGludGVybmV0IHNoYXJpbmcgdmlhIFdpLUZpIGNsaWVudC4nXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdC8vIFx0Ly8gQ29tbWFuZCB0byBsaXN0IEZPUldBUkQgcnVsZXNcblx0XHQvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLW4gLS1saW5lLW51bWJlcic7XG5cblx0XHQvLyBcdGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdC8vIFx0XHRpZiAoZXJyb3IgfHwgc3RkZXJyKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke2Vycm9yIHx8IHN0ZGVycn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yIHx8IG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblxuXHRcdC8vIFx0XHQvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG5cdFx0Ly8gXHRcdHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IHN0ZG91dC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyhcImlzR2VuZXJhbFNoYXJpbmdFbmFibGVkOiBcIitpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCk7XG5cdFx0Ly8gXHRcdC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcblx0XHQvLyBcdFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2UgZXRoMC87XG5cdFx0Ly8gXHRcdHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuXHRcdC8vIFx0XHQvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcblx0XHQvLyBcdFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDFcIik7XG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGxcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIHtjb25zb2xlLmxvZyhcInN0ZXAxMlwiKTsgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH0pO31cblx0XHQvLyBcdFx0fSBlbHNlIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDJcIik7XG5cblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGEgc3BlY2lmaWMgTUFDIGFkZHJlc3Ncblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3Igc3BlY2lmaWMgTUFDJywgbWFjQWRkcmVzczogbWF0Y2hbMV0gfSk7XG5cdFx0Ly8gXHRcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2coXCJzdGVwM1wiKTtcblxuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWRcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH0pO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXG5cblxuXG5cdFx0XHQvLyAgICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZygnU3RhcnRpbmcgdG8gZ2V0IGludGVybmV0IHNoYXJpbmcgc3RhdHVzIGZvciBFdGhlcm5ldC4uLicpO1xuXHRcdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG5cdFx0XHQvLyBcdC8vIFNpbmNlIGNtZCBpcyBhbHJlYWR5IHdyYXBwZWQgYnkgTWV0ZW9yLndyYXBBc3luYyhleGVjKSxcblx0XHRcdC8vIFx0Ly8gaXQgc2hvdWxkIHJldHVybiB7IHN0ZG91dCwgc3RkZXJyIH0gZGlyZWN0bHkuXG5cdFx0XHQvLyBcdHRyeSB7XG5cdFx0XHQvLyBcdCAgdmFyIHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdC8vIFx0ICBpZiAoc3RkZXJyKSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke3N0ZGVycn1gKTtcblx0XHRcdC8vIFx0XHQvLyBJdCdzIGJldHRlciB0byByZXR1cm4gYSBtZWFuaW5nZnVsIGVycm9yIHRvIHRoZSBjbGllbnQuXG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgZXJyb3I6IFwiRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzXCIsIGRldGFpbHM6IHN0ZGVyciB9O1xuXHRcdFx0Ly8gXHQgIH1cblxuXHRcdFx0Ly8gXHQgIGNvbnNvbGUubG9nKCdBbmFseXppbmcgaXB0YWJsZXMgRk9SV0FSRCBydWxlcyBvdXRwdXQuLi4nKTtcblx0XHRcdC8vIFx0ICAvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG5cdFx0XHQvLyBcdCAgdmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gc3Rkb3V0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSBldGgwJykgJiYgc3Rkb3V0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG5cdFx0XHQvLyBcdCAgY29uc29sZS5sb2coYGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkOiAke2lzR2VuZXJhbFNoYXJpbmdFbmFibGVkfWApO1xuXG5cdFx0XHQvLyBcdCAgLy8gRXh0cmFjdCBNQUMgYWRkcmVzcyBydWxlc1xuXHRcdFx0Ly8gXHQgIHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIGV0aDAvO1xuXHRcdFx0Ly8gXHQgIHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblx0XHRcdC8vIFx0ICBjb25zb2xlLmxvZyhgTUFDIGFkZHJlc3MgZm91bmQ6ICR7bWF0Y2ggPyBtYXRjaFsxXSA6ICdOb25lJ31gKTtcblxuXHRcdFx0Ly8gXHQgIC8vIERldGVybWluZSB0aGUgc3RhdHVzIGJhc2VkIG9uIHRoZSBydWxlcyBmb3VuZFxuXHRcdFx0Ly8gXHQgIGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGwuJyk7XG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0Ly8gXHQgIH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzOiAke21hdGNoWzFdfWApO1xuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH07XG5cdFx0XHQvLyBcdCAgfSBlbHNlIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyBpcyBkaXNhYmxlZCBvciBub3QgY29uZmlndXJlZCBhcyBleHBlY3RlZC4nKTtcblx0XHRcdC8vIFx0XHRyZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdC8vIFx0ICB9XG5cdFx0XHQvLyBcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHQvLyBcdCAgY29uc29sZS5lcnJvcihgQ29tbWFuZCBleGVjdXRpb24gZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHQvLyBcdCAgLy8gSXQncyBiZXR0ZXIgdG8gcmV0dXJuIGEgbWVhbmluZ2Z1bCBlcnJvciB0byB0aGUgY2xpZW50LlxuXHRcdFx0Ly8gXHQgIHJldHVybiB7IGVycm9yOiBcIkNvbW1hbmQgZXhlY3V0aW9uIGVycm9yXCIsIGRldGFpbHM6IGVycm9yLnRvU3RyaW5nKCkgfTtcblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gICB9LFxuXG5cblxuXHRcdFx0XHQvLyAgICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXHRcdFx0XHQvLyBcdHZhciBjb21tYW5kUmVzdWx0ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblxuXHRcdFx0XHQvLyBcdGlmICghY29tbWFuZFJlc3VsdCkge1xuXHRcdFx0XHQvLyBcdCAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG5cdFx0XHRcdC8vIFx0fVxuXG5cdFx0XHRcdC8vIFx0dmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcblx0XHRcdFx0Ly8gXHR2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSBldGgwLztcblx0XHRcdFx0Ly8gXHR2YXIgbWF0Y2ggPSBjb21tYW5kUmVzdWx0Lm1hdGNoKG1hY0FkZHJlc3NSdWxlUmVnZXgpO1xuXG5cdFx0XHRcdC8vIFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuXHRcdFx0XHQvLyBcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0XHQvLyBcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHRcdFx0Ly8gXHQgIHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH07XG5cdFx0XHRcdC8vIFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gXHQgIHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0XHQvLyBcdH1cblx0XHRcdFx0Ly8gICB9LFxuXG5cblxuXG5cdFx0XHRcdFx0ICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLVMgRk9SV0FSRCc7XG5cdFx0XHR2YXIgbGlzdE5hdFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC10IG5hdCAtUyBQT1NUUk9VVElORyc7XG5cblx0XHRcdHZhciBmb3J3YXJkUmVzdWx0ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblx0XHRcdHZhciBuYXRSZXN1bHQgPSBjbWQobGlzdE5hdFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdGlmICghZm9yd2FyZFJlc3VsdCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFwiY29tbWFuZC1leGVjdXRpb24tZXJyb3JcIiwgXCJUaGUgRk9SV0FSRCBjaGFpbiBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIW5hdFJlc3VsdCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFwiY29tbWFuZC1leGVjdXRpb24tZXJyb3JcIiwgXCJUaGUgUE9TVFJPVVRJTkcgY2hhaW4gY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHNoYXJpbmdGcm9tV2xhbmludFRvRXRoID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFuaW50IC1vIGV0aDAgLWogQUNDRVBUJyk7XG5cdFx0XHR2YXIgc2hhcmluZ0Zyb21XbGFudXNiVG9FdGggPSBmb3J3YXJkUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW51c2IgLW8gZXRoMCAtaiBBQ0NFUFQnKTtcblx0XHRcdHZhciBzaGFyaW5nVG9XbGFuaW50RnJvbUV0aEVzdGFibGlzaGVkID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcpO1xuXHRcdFx0dmFyIHNoYXJpbmdUb1dsYW51c2JGcm9tRXRoRXN0YWJsaXNoZWQgPSBmb3J3YXJkUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIGV0aDAgLW8gd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyk7XG5cblx0XHRcdHZhciBuYXRGb3JXbGFuaW50ID0gbmF0UmVzdWx0LmluY2x1ZGVzKCctQSBQT1NUUk9VVElORyAtcyAxMC4wLjAuMC8yNCAtbyBldGgwIC1qIE1BU1FVRVJBREUnKTtcblx0XHRcdHZhciBuYXRGb3JXbGFudXNiID0gbmF0UmVzdWx0LmluY2x1ZGVzKCctQSBQT1NUUk9VVElORyAtcyAxMC4xLjAuMC8yNCAtbyBldGgwIC1qIE1BU1FVRVJBREUnKTtcblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRzaGFyaW5nRnJvbVdsYW5pbnRUb0V0aCAmJlxuXHRcdFx0XHRzaGFyaW5nRnJvbVdsYW51c2JUb0V0aCAmJlxuXHRcdFx0XHRzaGFyaW5nVG9XbGFuaW50RnJvbUV0aEVzdGFibGlzaGVkICYmXG5cdFx0XHRcdHNoYXJpbmdUb1dsYW51c2JGcm9tRXRoRXN0YWJsaXNoZWQgJiZcblx0XHRcdFx0bmF0Rm9yV2xhbmludCAmJlxuXHRcdFx0XHRuYXRGb3JXbGFudXNiXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdCdlbmFibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cblx0XHRcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gbnVsbDtcblxuXHRcdFx0aXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSB3bGFuaW50IC1vIGV0aDAgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3bGFuaW50IC1vIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSB3bGFudXNiIC1vIGV0aDAgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3bGFudXNiIC1vIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgZXRoMCAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtQyBGT1JXQVJEIC1pIGV0aDAgLW8gd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW51c2IgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC10IG5hdCAtQyBQT1NUUk9VVElORyAtcyAxMC4wLjAuMC8yNCAtbyBldGgwIC1qIE1BU1FVRVJBREUgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUEgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gZXRoMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLXQgbmF0IC1DIFBPU1RST1VUSU5HIC1zIDEwLjEuMC4wLzI0IC1vIGV0aDAgLWogTUFTUVVFUkFERSAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC10IG5hdCAtQSBQT1NUUk9VVElORyAtcyAxMC4xLjAuMC8yNCAtbyBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHRcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGRlcnIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXQgZW5hYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0c3luY05ldHdvcmtDb250cm9sU2V0dGluZ3NUb1N5c3RlbShnZXROZXR3b3JrQ29udHJvbFNldHRpbmdzRnJvbVN0b3JlKCkpO1xuXHRcdFx0XHR9IGNhdGNoIChuZXR3b3JrQ29udHJvbEVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ05ldHdvcmsgY29udHJvbCBzeW5jIGFmdGVyIGVuYWJsaW5nIEV0aGVybmV0IHNoYXJpbmcgZmFpbGVkOicsIG5ldHdvcmtDb250cm9sRXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBEZWZpbmUgYSBsaXN0IG9mIGNvbW1hbmRzIHRvIHJlcGVhdGVkbHkgYXR0ZW1wdCBkZWxldGlvbi5cblx0XHRcdHZhciBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gbnVsbDtcblxuXHRcdFx0aXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbnVzYiAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1zb3VyY2UgMTAuMC4wLjAvMjQgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tc291cmNlIDEwLjEuMC4wLzI0IC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnXG5cdFx0XHRdO1xuXG5cdFx0XHQvLyBGdW5jdGlvbiB0byBleGVjdXRlIGEgY29tbWFuZCBhbmQgcmVjdXJzaXZlbHkgY2FsbCBpdHNlbGYgaWYgdGhlIGNvbW1hbmQgd2FzIHN1Y2Nlc3NmdWwgKHJ1bGUgd2FzIGZvdW5kIGFuZCBkZWxldGVkKS5cblx0XHRcdGZ1bmN0aW9uIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKSB7XG5cdFx0XHRcdGNtZChjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBubyBlcnJvciwgdGhlIHJ1bGUgd2FzIGZvdW5kIGFuZCBkZWxldGVkLCBzbyB0cnkgYWdhaW4uXG5cdFx0XHRcdFx0aWYgKCFlcnJvcikge1xuXHRcdFx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yLCBpdCBsaWtlbHkgbWVhbnMgbm8gbW9yZSBpbnN0YW5jZXMgb2YgdGhlIHJ1bGUgZXhpc3QsIHNvIGNhbGwgdGhlIGRvbmVDYWxsYmFjay5cblx0XHRcdFx0XHRcdGRvbmVDYWxsYmFjaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEV4ZWN1dGUgZGVsZXRpb24gZm9yIGVhY2ggY29tbWFuZCBhbmQgdHJhY2sgY29tcGxldGlvbi5cblx0XHRcdHZhciB0YXNrc0NvbXBsZXRlZCA9IDA7XG5cdFx0XHRpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcblx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCAoKSA9PiB7XG5cdFx0XHRcdFx0dGFza3NDb21wbGV0ZWQrKztcblx0XHRcdFx0XHQvLyBPbmNlIGFsbCBkZWxldGlvbiB0YXNrcyBhcmUgZG9uZSwgc2F2ZSB0aGUgaXB0YWJsZXMgY29uZmlndXJhdGlvbi5cblx0XHRcdFx0XHRpZiAodGFza3NDb21wbGV0ZWQgPT09IGlwdGFibGVzRGVsZXRlQ29tbWFuZHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0c3luY05ldHdvcmtDb250cm9sU2V0dGluZ3NUb1N5c3RlbShnZXROZXR3b3JrQ29udHJvbFNldHRpbmdzRnJvbVN0b3JlKCkpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChuZXR3b3JrQ29udHJvbEVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ05ldHdvcmsgY29udHJvbCBzeW5jIGFmdGVyIGRpc2FibGluZyBFdGhlcm5ldCBzaGFyaW5nIGZhaWxlZDonLCBuZXR3b3JrQ29udHJvbEVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsICdBbGwgc3BlY2lmaWVkIHJ1bGVzIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvLyAnZGlzYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gW1xuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdC8vIFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdC8vIFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHQvLyBcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0Ly8gXHRcdGlmIChlcnJvcikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGlmIChzdGRlcnIpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXQgZGlzYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdC8vIFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXHRcdCdlbmFibGVJbnRlcm5ldEZvck1hY0V0aGVybmV0JzogZnVuY3Rpb24obWFjQWRkcmVzcywgY2FsbGJhY2spIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvLyBDb21tYW5kIHRvIGFsbG93IGludGVybmV0IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzIG9uIGV0aDAuXG5cdFx0XHR2YXIgYWxsb3dNYWNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1tIG1hYyAtLW1hYy1zb3VyY2UgJHttYWNBZGRyZXNzfSAtaiBBQ0NFUFRgO1xuXHRcdFx0Ly8gQ29tbWFuZCB0byBkcm9wIGFsbCBvdGhlciBpbnRlcm5ldCB0cmFmZmljIG9uIGV0aDAuXG5cdFx0XHR2YXIgYmxvY2tPdGhlcnNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1qIERST1BgO1xuXG5cdFx0XHQvLyBBbGxvdyBpbnRlcm5ldCBmb3IgdGhlIHNwZWNpZmllZCBNQUMgYWRkcmVzcy5cblx0XHRcdHJlcyA9IGNtZChhbGxvd01hY0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYWxsb3dpbmcgTUFDICR7bWFjQWRkcmVzc306ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGFsbG93ZWQgZm9yIE1BQyAke21hY0FkZHJlc3N9LmApO1xuXG5cdFx0XHRcdC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldC5cblx0XHRcdFx0cmVzID0gY21kKGJsb2NrT3RoZXJzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBibG9ja2VkIGZvciBvdGhlciBNQUMgYWRkcmVzc2VzLmApO1xuXHRcdFx0XHRcdC8vIE9wdGlvbmFsbHksIHNhdmUgdGhlIGlwdGFibGVzIHNldHRpbmdzIHRvIG1ha2UgdGhlbSBwZXJzaXN0ZW50LlxuXHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayhudWxsKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdyZW1vdmVBbGxNYWNGaWx0ZXJzRm9yRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0Ly8gTGlzdCBhbGwgRk9SV0FSRCBydWxlcyB3aXRoIGxpbmUgbnVtYmVyc1xuXHRcdFx0Y21kKCdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLS1saW5lLW51bWJlcnMgLW4nLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9jZXNzIHN0ZG91dCB0byBpZGVudGlmeSBydWxlcyByZWxhdGVkIHRvIE1BQyBmaWx0ZXJpbmcgb24gZXRoMFxuXHRcdFx0XHRjb25zdCBsaW5lcyA9IHN0ZG91dC5zcGxpdCgnXFxuJyk7XG5cdFx0XHRcdGNvbnN0IHJ1bGVOdW1iZXJzID0gbGluZXMucmVkdWNlKChhY2MsIGxpbmUsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGxpbmUuaW5jbHVkZXMoJ2V0aDAnKSAmJiBsaW5lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ21hYycpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBydWxlTnVtYmVyID0gbGluZS5zcGxpdCgvXFxzKy8pWzBdOyAvLyBFeHRyYWN0IHRoZSBydWxlIG51bWJlciwgYXNzdW1pbmcgaXQncyB0aGUgZmlyc3QgZWxlbWVudFxuXHRcdFx0XHRcdFx0YWNjLnB1c2gocnVsZU51bWJlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHRcdH0sIFtdKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgaWRlbnRpZmllZCBydWxlcyBzdGFydGluZyBmcm9tIHRoZSBoaWdoZXN0IG51bWJlciB0byBwcmV2ZW50IHNoaWZ0aW5nIG9mIGxpbmUgbnVtYmVyc1xuXHRcdFx0XHRydWxlTnVtYmVycy5zb3J0KChhLCBiKSA9PiBiIC0gYSkuZm9yRWFjaChydWxlTnVtYmVyID0+IHtcblx0XHRcdFx0XHRjbWQoYHN1ZG8gaXB0YWJsZXMgLUQgRk9SV0FSRCAke3J1bGVOdW1iZXJ9YCwgKHJlbW92ZUVycm9yLCByZW1vdmVTdGRvdXQsIHJlbW92ZVN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHJlbW92ZUVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHJlbW92aW5nIHJ1bGUgJHtydWxlTnVtYmVyfTogJHtyZW1vdmVFcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0Ly8gRGVjaWRlIGlmIHlvdSB3YW50IHRvIGNvbnRpbnVlIHJlbW92aW5nIG90aGVyIHJ1bGVzIG9yIHN0b3AgaGVyZVxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgUnVsZSAke3J1bGVOdW1iZXJ9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBBZnRlciBhdHRlbXB0aW5nIHRvIHJlbW92ZSBhbGwgaWRlbnRpZmllZCBydWxlcywgc2F2ZSB0aGUgaXB0YWJsZXMgY29uZmlndXJhdGlvblxuXHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChzYXZlRXJyb3IsIHNhdmVTdGRvdXQsIHNhdmVTdGRlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoc2F2ZUVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7c2F2ZUVycm9yfWApO1xuXHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhzYXZlRXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnaXB0YWJsZXMgcnVsZXMgdXBkYXRlZCBhbmQgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIE1BQyBmaWx0ZXIgcnVsZXMgZm9yIEV0aGVybmV0IHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzTW9iaWxlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcblx0XHRcdHZhciBsaXN0TmF0UnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLXQgbmF0IC1TIFBPU1RST1VUSU5HJztcblxuXHRcdFx0dmFyIGZvcndhcmRSZXN1bHQgPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXHRcdFx0dmFyIG5hdFJlc3VsdCA9IGNtZChsaXN0TmF0UnVsZXNDb21tYW5kKTtcblxuXHRcdFx0aWYgKCFmb3J3YXJkUmVzdWx0KSB7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBGT1JXQVJEIGNoYWluIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghbmF0UmVzdWx0KSB7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBQT1NUUk9VVElORyBjaGFpbiBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0fVxuXG5cblx0XHRcdHZhciBzaGFyaW5nRnJvbVdsYW5pbnRUb1d3YW4gPSBmb3J3YXJkUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW5pbnQgLW8gd3dhbjAgLWogQUNDRVBUJyk7XG5cdFx0XHR2YXIgc2hhcmluZ0Zyb21XbGFudXNiVG9Xd2FuID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFudXNiIC1vIHd3YW4wIC1qIEFDQ0VQVCcpO1xuXHRcdFx0dmFyIHNoYXJpbmdUb1dsYW5pbnRGcm9tV3dhbkVzdGFibGlzaGVkID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnKTtcblx0XHRcdHZhciBzaGFyaW5nVG9XbGFudXNiRnJvbVd3YW5Fc3RhYmxpc2hlZCA9IGZvcndhcmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyk7XG5cblx0XHRcdHZhciBuYXRGb3JXbGFuaW50ID0gbmF0UmVzdWx0LmluY2x1ZGVzKCctQSBQT1NUUk9VVElORyAtcyAxMC4wLjAuMC8yNCAtbyB3d2FuMCAtaiBNQVNRVUVSQURFJyk7XG5cdFx0XHR2YXIgbmF0Rm9yV2xhbnVzYiA9IG5hdFJlc3VsdC5pbmNsdWRlcygnLUEgUE9TVFJPVVRJTkcgLXMgMTAuMS4wLjAvMjQgLW8gd3dhbjAgLWogTUFTUVVFUkFERScpO1xuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdHNoYXJpbmdGcm9tV2xhbmludFRvV3dhbiAmJlxuXHRcdFx0XHRzaGFyaW5nRnJvbVdsYW51c2JUb1d3YW4gJiZcblx0XHRcdFx0c2hhcmluZ1RvV2xhbmludEZyb21Xd2FuRXN0YWJsaXNoZWQgJiZcblx0XHRcdFx0c2hhcmluZ1RvV2xhbnVzYkZyb21Xd2FuRXN0YWJsaXNoZWQgJiZcblx0XHRcdFx0bmF0Rm9yV2xhbmludCAmJlxuXHRcdFx0XHRuYXRGb3JXbGFudXNiXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdCdlbmFibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBudWxsO1xuXHRcdFx0aXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtQyBGT1JXQVJEIC1pIHdsYW51c2IgLW8gd3dhbjAgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3bGFudXNiIC1vIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbmludCAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtQyBGT1JXQVJEIC1pIHd3YW4wIC1vIHdsYW51c2IgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLXQgbmF0IC1DIFBPU1RST1VUSU5HIC1zIDEwLjAuMC4wLzI0IC1vIHd3YW4wIC1qIE1BU1FVRVJBREUgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUEgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gd3dhbjAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC10IG5hdCAtQyBQT1NUUk9VVElORyAtcyAxMC4xLjAuMC8yNCAtbyB3d2FuMCAtaiBNQVNRVUVSQURFIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1BIFBPU1RST1VUSU5HIC1zIDEwLjEuMC4wLzI0IC1vIHd3YW4wIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHRcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGRlcnIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgbW9iaWxlIGVuYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHN5bmNOZXR3b3JrQ29udHJvbFNldHRpbmdzVG9TeXN0ZW0oZ2V0TmV0d29ya0NvbnRyb2xTZXR0aW5nc0Zyb21TdG9yZSgpKTtcblx0XHRcdFx0fSBjYXRjaCAobmV0d29ya0NvbnRyb2xFcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdOZXR3b3JrIGNvbnRyb2wgc3luYyBhZnRlciBlbmFibGluZyBtb2JpbGUgc2hhcmluZyBmYWlsZWQ6JywgbmV0d29ya0NvbnRyb2xFcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCBzdGRvdXQpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZGlzYWJsZUludGVybmV0U2hhcmluZ01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBEZWZpbmUgY29tbWFuZHMgZm9yIGRlbGV0aW9uIHdpdGhvdXQgY29tYmluaW5nIHRoZW1cblx0XHRcdHZhciBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gbnVsbDtcblxuXHRcdFx0aXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW51c2IgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW51c2IgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tc291cmNlIDEwLjAuMC4wLzI0IC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1zb3VyY2UgMTAuMS4wLjAvMjQgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREUnXG5cdFx0XHRdO1xuXG5cdFx0XHQvLyBGdW5jdGlvbiB0byByZWN1cnNpdmVseSBleGVjdXRlIGEgY29tbWFuZCB1bnRpbCBpdCBmYWlscyAoaW5kaWNhdGluZyBubyBtb3JlIGluc3RhbmNlcyBvZiB0aGUgcnVsZSlcblx0XHRcdGZ1bmN0aW9uIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKSB7XG5cdFx0XHRcdGNtZChjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0Ly8gTm8gZXJyb3IgbWVhbnMgdGhlIGNvbW1hbmQgc3VjY2VlZGVkLCBzbyB0aGVyZSBtaWdodCBiZSBtb3JlIGluc3RhbmNlc1xuXHRcdFx0XHRcdGlmICghZXJyb3IpIHtcblx0XHRcdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gRXJyb3IgbGlrZWx5IG1lYW5zIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlLCBtb3ZlIG9uXG5cdFx0XHRcdFx0XHRkb25lQ2FsbGJhY2soKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFeGVjdXRlIGRlbGV0aW9uIGZvciBlYWNoIGNvbW1hbmQgYW5kIHRyYWNrIHdoZW4gYWxsIGFyZSBjb21wbGV0ZWRcblx0XHRcdHZhciB0YXNrc0NvbXBsZXRlZCA9IDA7XG5cdFx0XHRpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcblx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCAoKSA9PiB7XG5cdFx0XHRcdFx0dGFza3NDb21wbGV0ZWQrKztcblx0XHRcdFx0XHQvLyBBZnRlciBhbGwgY29tbWFuZHMgaGF2ZSBiZWVuIGF0dGVtcHRlZCwgc2F2ZSB0aGUgY29uZmlndXJhdGlvblxuXHRcdFx0XHRcdGlmICh0YXNrc0NvbXBsZXRlZCA9PT0gaXB0YWJsZXNEZWxldGVDb21tYW5kcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzYXZlU3Rkb3V0LCBzYXZlU3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2lwdGFibGVzIHJ1bGVzIGZvciBtb2JpbGUgaW50ZXJmYWNlIHVwZGF0ZWQgYW5kIHNhdmVkLicpO1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdHN5bmNOZXR3b3JrQ29udHJvbFNldHRpbmdzVG9TeXN0ZW0oZ2V0TmV0d29ya0NvbnRyb2xTZXR0aW5nc0Zyb21TdG9yZSgpKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAobmV0d29ya0NvbnRyb2xFcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdOZXR3b3JrIGNvbnRyb2wgc3luYyBhZnRlciBkaXNhYmxpbmcgbW9iaWxlIHNoYXJpbmcgZmFpbGVkOicsIG5ldHdvcmtDb250cm9sRXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgJ0FsbCBzcGVjaWZpZWQgcnVsZXMgZm9yIG1vYmlsZSBpbnRlcmZhY2UgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0Ly8gJ2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdC8vIFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsXG5cdFx0Ly8gXHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0Ly8gXHRdLmpvaW4oJyAmJiAnKTtcblxuXHRcdC8vIFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdFx0aWYgKHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBtb2JpbGUgZGlzYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdC8vIFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXHRcdCdhbGxvd0ludGVybmV0Rm9yTWFjTW9iaWxlJzogZnVuY3Rpb24obWFjQWRkcmVzcywgY2FsbGJhY2spIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvLyBGaXJzdCwgZW5hYmxlIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyB0byB3d2FuMFxuXHRcdFx0cmVzID0gY21kKCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbmludCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUICYmIHN1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFudXNiIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuaW50IC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFudXNiIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgZW5hYmxpbmcgaW50ZXJuZXQgc2hhcmluZzogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBJbnRlcm5ldCBzaGFyaW5nIGVuYWJsZWQgdmlhIHd3YW4wLmApO1xuXHRcdFx0XHQvLyBBbGxvdyBpbnRlcm5ldCBvbmx5IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzIG9uIHd3YW4wXG5cdFx0XHRcdHZhciBhbGxvd01hY0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtSSBGT1JXQVJEIDEgLWkgd3dhbjAgLW0gbWFjIC0tbWFjLXNvdXJjZSAke21hY0FkZHJlc3N9IC1qIEFDQ0VQVGA7XG5cdFx0XHRcdC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldCB2aWEgd3dhbjAuXG5cdFx0XHRcdHZhciBibG9ja090aGVyc0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIHd3YW4wIC1qIERST1BgO1xuXG5cdFx0XHRcdC8vIEFsbG93IHNwZWNpZmljIE1BQ1xuXHRcdFx0XHRyZXMgPSBjbWQoYWxsb3dNYWNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBhbGxvd2luZyBNQUMgJHttYWNBZGRyZXNzfSBvbiBXV0FOOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBhbGxvd2VkIGZvciBNQUMgJHttYWNBZGRyZXNzfSBvbiBXV0FOLmApO1xuXG5cdFx0XHRcdFx0Ly8gQmxvY2sgYWxsIG90aGVyIE1BQ3Ncblx0XHRcdFx0XHRyZXMgPSBjbWQoYmxvY2tPdGhlcnNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDcyBvbiBXV0FOOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBibG9ja2VkIGZvciBvdGhlciBNQUMgYWRkcmVzc2VzIG9uIFdXQU4uYCk7XG5cblx0XHRcdFx0XHRcdC8vIFNhdmUgaXB0YWJsZXMgcnVsZXNcblx0XHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBzYXZpbmcgaXB0YWJsZXMgcnVsZXMgZm9yIFdXQU46ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgZm9yIFdXQU4gc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKG51bGwpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQncmVtb3ZlQWxsTWFjRmlsdGVyc0Zvck1vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBMaXN0IGFsbCBGT1JXQVJEIHJ1bGVzXG5cdFx0XHRjbWQoJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtLWxpbmUtbnVtYmVycyAtbicsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9jZXNzIHN0ZG91dCB0byBmaW5kIHJ1bGVzIHRvIGRlbGV0ZS4gVGhpcyBwYXJ0IGlzIHBzZXVkby1jb2RlIGFuZCBuZWVkcyBhZGp1c3RtZW50XG5cdFx0XHRcdGNvbnN0IGxpbmVzID0gc3Rkb3V0LnNwbGl0KCdcXG4nKTtcblx0XHRcdFx0Y29uc3QgcnVsZU51bWJlcnMgPSBbXTtcblx0XHRcdFx0bGluZXMuZm9yRWFjaChsaW5lID0+IHtcblx0XHRcdFx0XHRpZiAobGluZS5pbmNsdWRlcygnd3dhbjAnKSAmJiBsaW5lLmluY2x1ZGVzKCdNQUMnKSkge1xuXHRcdFx0XHRcdFx0Ly8gRXh0cmFjdCB0aGUgcnVsZSBudW1iZXIgZnJvbSB0aGUgbGluZVxuXHRcdFx0XHRcdFx0Y29uc3QgcnVsZU51bWJlciA9IGxpbmUuc3BsaXQoJyAnKVswXTsgLy8gVGhpcyBpcyBhIHNpbXBsaWZpY2F0aW9uXG5cdFx0XHRcdFx0XHRydWxlTnVtYmVycy5wdXNoKHJ1bGVOdW1iZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIHJ1bGVzIGJ5IHRoZWlyIG51bWJlcnMsIHN0YXJ0aW5nIGZyb20gdGhlIGhpZ2hlc3QgbnVtYmVyXG5cdFx0XHRcdHJ1bGVOdW1iZXJzLnNvcnQoKGEsIGIpID0+IGIgLSBhKS5mb3JFYWNoKHJ1bGVOdW1iZXIgPT4ge1xuXHRcdFx0XHRcdGNtZChgc3VkbyBpcHRhYmxlcyAtRCBGT1JXQVJEICR7cnVsZU51bWJlcn1gLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgcmVtb3ZpbmcgcnVsZSAke3J1bGVOdW1iZXJ9OiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdFx0Ly8gT3B0aW9uYWxseSwgc3RvcCB0aGUgcHJvY2VzcyBvciBjb250aW51ZSBhdHRlbXB0aW5nIHRvIHJlbW92ZSBvdGhlciBydWxlc1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgUnVsZSAke3J1bGVOdW1iZXJ9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBBZnRlciBhbGwgcnVsZXMgaGF2ZSBiZWVuIHByb2Nlc3NlZCwgc2F2ZSB0aGUgaXB0YWJsZXMgcnVsZXNcblx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2lwdGFibGVzIHJ1bGVzIHVwZGF0ZWQgYW5kIHNhdmVkLicpO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgJ0FsbCBNQUMgZmlsdGVyIHJ1bGVzIGZvciBXV0FOIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQncmVib290JzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKCdzdWRvIHJlYm9vdCcsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHQgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdCAgcmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3NodXRkb3duJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKCdzdWRvIGhhbHQnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0ICBjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0XHQgIHJldHVybjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdzeW5jaHJvbml6ZSc6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIHN5bmMuLi5cIik7XG5cblx0XHRcdHZhciBkZXZpY2VTZXJpYWwgPSBNZXRlb3Iuc2V0dGluZ3MucHVibGljLnNlcmlhbDtcblx0XHRcdHZhciBkZXZpY2VUb2tlbiA9IE1ldGVvci5zZXR0aW5ncy5tb29kbGVBUElUb2tlbjtcblx0XHRcdHZhciB1cmwgPSBNZXRlb3Iuc2V0dGluZ3MuY2xvdWRVUkwgKyBcIi9hcGkvc3RhcnRTeW5jXCI7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQnZGV2aWNlU2VyaWFsJzogZGV2aWNlU2VyaWFsLFxuXHRcdFx0XHRcdCdkZXZpY2VUb2tlbic6IGRldmljZVRva2VuXG5cdFx0XHRcdH0sXG5cdFx0XHQgICAgbnBtUmVxdWVzdE9wdGlvbnM6IHtcblx0XHRcdCAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSwgLy8gVE9ETyByZW1vdmUgd2hlbiBkZXBsb3lcblx0XHRcdCAgICAgICAgdGltZW91dDogMTIwMDAwMFxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgdGltZW91dDogMTIwMDAwMFxuXHRcdFx0fVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly92YXIgcmVzdWx0ID0gSFRUUC5jYWxsKCdQT1NUJywgdXJsLCBvcHRpb25zKTtcblxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gSFRUUC5wb3N0KCB1cmwsIG9wdGlvbnMgKTtcblx0XHRcdFx0dmFyIHJlc3VsdENvbnRlbnQgPSByZXN1bHQuY29udGVudDtcblx0XHRcdFx0Ly9TeW5jaHJvbml6YXRpb25zLmluc2VydCh7ZGF0ZTpEYXRlLm5vdygpfSk7XG5cdFx0XHRcdHJldHVybiByZXN1bHRDb250ZW50O1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCBcIkVycm9yIHdoaWxlIHRyeWluZyB0byBzeW5jcm9uaXplLi4uXCIsIGUgKTtcblx0XHRcdFx0cmV0dXJuIFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi4gXCIrIGU7XG5cdFx0XHR9XG5cdFx0Ly9yZXR1cm4gcmVzdWx0Q29udGVudDtcblx0XHR9LFxuXHR9KTtcbn1cbn0pO1xuIiwiLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbEFwcHMnLCBmdW5jdGlvbigpIHtcbi8vIFx0cmV0dXJuIEFwcHMuZmluZCh7fSk7XG4vLyB9KTtcblxuLy8gTWV0ZW9yLnB1Ymxpc2goXCJ1c2Vyc1wiLCBmdW5jdGlvbigpIHtcbi8vICAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoe30sIHtmaWVsZHM6e2NyZWF0ZWRBdDogdHJ1ZSwgcHJvZmlsZTogdHJ1ZSwgZW1haWxzOiB0cnVlLCB1c2VybmFtZTogdHJ1ZX19KTtcbi8vIH0pO1xuXG5cbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIH0pOyIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuXG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9zeW5jaHJvbml6YXRpb25zLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvdXNlcnMuanMnO1xuXG5pbXBvcnQgJy4uL3NlcnZlci9maXh0dXJlcy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci9tZXRob2RzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL3B1YmxpY2F0aW9ucy5qcyc7XG5pbXBvcnQgJy4uL2xpYi9hcHBfbG9hZGVyLmpzJztcblxuXG4vL2ltcG9ydCB7RERQfSBmcm9tICdtZXRlb3IvZGRwJztcbi8vaW1wb3J0IHtBY2NvdW50c30gZnJvbSAnbWV0ZW9yL2FjY291bnRzLWJhc2UnO1xuXG5cbi8vIGltcG9ydCAnLi4vaW1wb3J0cy9zdGFydHVwL3NlcnZlci9maXh0dXJlcy5qcyc7XG5cbi8vIGltcG9ydCAnLi4vaW1wb3J0cy9hcGkvZml4dHVyZXMuanMnO1xuXG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcblx0Y29uc29sZS5sb2coXCJtZXRlb3Igc3RhcnRlZC4uLlwiKTtcblxuXG5cbiAgLy8gY29kZSB0byBydW4gb24gc2VydmVyIGF0IHN0YXJ0dXBcblxuIC8vICBTZXJ2ZXIyID0gRERQLmNvbm5lY3QoXCJodHRwOi8vYmVla2VlLmJveDo4M1wiKTtcblx0Ly8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFNlcnZlcjI7XG5cdC8vIGNvbnNvbGUubG9nKFwib24gY29ubmVjdGUuLi5cIik7XG59KTtcbiJdfQ==
