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
Meteor.startup(function () {
  if (Meteor.isServer) {
    var fs = Npm.require("fs");

    exec = Npm.require("child_process").exec;
    cmd = Meteor.wrapAsync(exec);
    var wifiSettingsPath = Meteor.settings.wifiSettingsPath;
    var configPath = Meteor.settings.configPath;

    const readline = require("readline");

    Meteor.methods({
      adminSetNewPassword: function (adminId, userId, newPassword) {
        // Admin can forcibly change the password for a user
        if (Roles.userIsInRole(adminId, "admin")) {
          Accounts.setPassword(userId, newPassword);
        }
      },
      createAccount: function (email, password, profile) {
        return Accounts.createUser({
          email: email,
          password: password,
          profile: profile
        }); // Callback is not supported on server-side
      },
      editAccount: function (userId, email, password, profile) {
        Meteor.users.update({
          _id: userId
        }, {
          $set: {
            "emails.0.address": email,
            profile: profile
          }
        });

        if (password) {
          Accounts.setPassword(userId, password);
        }
      },
      changeEmail: function (email) {
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
      deleteUser: function (userId) {
        Meteor.users.remove(userId, function (error, result) {
          if (error) {
            console.log("Error when deleting user : " + error.message);
          }
        });
      },
      addManagerRole: function (userId) {
        Roles.addUsersToRoles(userId, "manager");
      },
      removeManagerRole: function (userId) {
        Roles.removeUsersFromRoles(userId, "manager");
      },
      addAdminRole: function (userId) {
        Roles.addUsersToRoles(userId, "admin");
      },
      removeAdminRole: function (userId) {
        Roles.removeUsersFromRoles(userId, "admin");
      },
      // 'getUsedSpace': function() {
      // 	var res;
      // 	res = cmd("df / -h | awk '{print ($3)}' | tail -1") + "/ " + cmd("df / -h | awk '{print ($2)}' | tail -1") + " ("+cmd("df / | awk '{print ($5)}' | tail -1")+"used)";
      // 	return res;
      // },
      runCommand: function (password, command) {
        var res;
        res = cmd("echo " + password + " | sudo -S " + command);
        return res;
      },
      getUsedSpace: function () {
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
      getSSID: function () {
        var data = fs.readFileSync(wifiSettingsPath, "utf-8");
        var match = data.match(new RegExp("ssid=(.*)"));
        var SSID = match[1];
        SSID = decodeURIComponent(SSID.replace(/../g, "%$&"));
        return SSID;
      },
      setSSID: function (newSSID) {
        var data = fs.readFileSync(wifiSettingsPath, "utf-8");
        const encodedNewSSID = new Buffer(newSSID).toString("hex"); // Convert into Hex

        var newData = data.replace(data.match(new RegExp("ssid=(.*)"))[1], encodedNewSSID);
        fs.writeFileSync(wifiSettingsPath, newData, "utf-8");
      },
      getWifiPassword: function () {
        var data = fs.readFileSync(wifiSettingsPath, "utf-8");
        var match = data.match(new RegExp("password=(.*)"));
        var password = match[1];
        return password;
      },
      setWifiPassword: function (newPassword) {
        var data = fs.readFileSync(wifiSettingsPath, "utf-8");
        var newData = data.replace(data.match(new RegExp("password=(.*)"))[1], newPassword);
        fs.writeFileSync(wifiSettingsPath, newData, "utf-8");
      },
      getWifiChannel: function () {
        var data = fs.readFileSync(wifiSettingsPath, "utf-8");
        var match = data.match(new RegExp("channel=(.*)"));
        var channel = match[1];
        return channel;
      },
      setWifiChannel: function (newChannel) {
        var data = fs.readFileSync(wifiSettingsPath, "utf-8");
        var newData = data.replace(data.match(new RegExp("channel=(.*)"))[1], newChannel);
        fs.writeFileSync(wifiSettingsPath, newData, "utf-8");
      },
      getWifiBand: function () {
        var data = fs.readFileSync(wifiSettingsPath, "utf-8");
        var match = data.match(new RegExp("band=(.*)"));

        if (match && match[1]) {
          return match[1];
        } else {
          // Return default value if the band setting does not exist
          return "2.4GHz";
        }
      },
      setWifiBand: function (newBand) {
        var data = fs.readFileSync(wifiSettingsPath, "utf-8");
        var bandRegex = new RegExp("band=(.*)");
        var channelRegex = new RegExp("channel=(.*)");
        var matchBand = data.match(bandRegex);
        var matchChannel = data.match(channelRegex);
        var newData = data;

        if (matchBand) {
          // Replace the existing band setting
          newData = newData.replace(bandRegex, `band=${newBand}`);
        } else {
          // Append the new band setting
          newData = `${newData.trim()}\nband=${newBand}`;
        }

        if (matchChannel && matchChannel[1]) {
          // Convert the channel value to a number
          var currentChannel = parseInt(matchChannel[1], 10); // Set channel to a default 2.4GHz channel if current channel is for 5GHz

          if (newBand == "2.4GHz" && currentChannel > 14) {
            newData = newData.replace(channelRegex, `channel=11`);
          } else if (newBand == "5GHz" && currentChannel <= 14) {
            newData = newData.replace(channelRegex, `channel=44`);
          }
        }

        fs.writeFileSync(wifiSettingsPath, newData, "utf-8");
      },
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
      getSerial: function () {
        var data = fs.readFileSync(configPath, "utf-8");
        var match = data.match(new RegExp("SERIAL=(.*)"));
        var serial = match[1];
        return serial;
      },
      getOperatorName: function () {
        var operatorName;
        operatorName = cmd("sudo qmicli --device=/dev/cdc-wdm0 --nas-get-operator-name | grep -m2 'Name             ' | awk '{print $3}'");
        return operatorName;
      },
      // 'getSignalStrength': function () {
      // 	var signalStrength;
      // 	signalStrength = cmd("sudo qmicli --device=/dev/cdc-wdm0 --nas-get-signal-strength | grep -m1 Network | awk '{print $3, $2}'");
      // 	return signalStrength;
      // },
      getSignalStrength: function () {
        var signalStrength; // This extracts just the numeric part of the signal strength.

        signalStrength = cmd("sudo qmicli --device=/dev/cdc-wdm0 --nas-get-signal-strength | grep 'Network' | awk '{print $3}' | grep -oE '[-0-9]+'"); // Convert signal strength to a qualitative value

        var strengthValue = parseInt(signalStrength);
        var quality = "Unknown";

        if (strengthValue >= -70) {
          quality = "Excellent";
        } else if (strengthValue >= -85) {
          quality = "Good";
        } else if (strengthValue >= -100) {
          quality = "Fair";
        } else if (strengthValue < -100) {
          quality = "Poor";
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
      getAPN: function () {
        var data = fs.readFileSync(configPath, "utf-8");
        var match = data.match(new RegExp("APN=(.*)"));
        var APN = match[1];
        return APN;
      },
      getAPNUser: function () {
        var data = fs.readFileSync(configPath, "utf-8");
        var match = data.match(new RegExp("APN_USERNAME=(.*)"));
        var APNUser = match[1];
        return APNUser;
      },
      getAPNPassword: function () {
        var data = fs.readFileSync(configPath, "utf-8");
        var match = data.match(new RegExp("APN_PASSWORD=(.*)"));
        var APNPassword = match[1];
        return APNPassword;
      },
      getSimCardStatus: function () {
        let simStatusResult = "Unknown"; // Default status
        // Function to execute command and handle errors

        function executeCommand(command) {
          let result;

          try {
            result = cmd(command); // Execute the command

            if (typeof result === "object" && result !== null) {
              // Check if result is an error object
              return "Error";
            }
          } catch (error) {
            // Handle exceptions if command execution fails
            return "Error";
          }

          return result; // Return the result if no errors
        } // Execute SIM card status check command


        let simStatus = executeCommand("sudo qmicli --device=/dev/cdc-wdm0 --uim-get-card-status | grep 'Card state:'");
        console.log("SIM card status:", simStatus); // Log the raw output
        // Process the output and determine SIM card status

        if (simStatus.includes("no-atr-received") || simStatus.includes("not-inserted")) {
          simStatusResult = "No SIM card";
        } else if (simStatus.includes("error")) {
          simStatusResult = simStatus; // Use the error message or no SIM detected message
        } else if (simStatus.includes("present")) {
          simStatusResult = "OK";
        } else if (simStatus.includes("locked") || simStatus.includes("pin-required")) {
          simStatusResult = "SIM card locked, PIN required";
        } else {
          simStatusResult = "Unknown"; // For other statuses
        }

        return simStatusResult;
      },
      getSimPin: function () {
        var data = fs.readFileSync(configPath, "utf-8");
        var match = data.match(new RegExp("SIM_PIN=(.*)"));
        var SimPin = match[1];
        return SimPin;
      },
      setSimPin: function (PIN) {
        var data = fs.readFileSync(configPath, "utf-8");
        var newData = data.replace(data.match(new RegExp("SIM_PIN=.*")), "SIM_PIN=" + PIN);
        fs.writeFileSync(configPath, newData, "utf-8");
      },
      setAPN: function (APN, user, password) {
        var data = fs.readFileSync(configPath, "utf-8");
        var newData = data.replace(data.match(new RegExp("APN=.*")), "APN=" + APN); // var newData = data.replace(data.match(new RegExp('APN=(.*)'))[1], APN);

        fs.writeFileSync(configPath, newData, "utf-8");
      },
      setAPNUser: function (APNUser) {
        var data = fs.readFileSync(configPath, "utf-8");
        var newData = data.replace(data.match(new RegExp("APN_USERNAME=.*")), "APN_USERNAME=" + APNUser);
        fs.writeFileSync(configPath, newData, "utf-8");
      },
      setAPNPassword: function (APNPassword) {
        var data = fs.readFileSync(configPath, "utf-8");
        var newData = data.replace(data.match(new RegExp("APN_PASSWORD=.*")), "APN_PASSWORD=" + APNPassword);
        fs.writeFileSync(configPath, newData, "utf-8");
      },
      getRemoteStatus: function () {
        var res;
        res = cmd("systemctl is-active remote-iot.service >/dev/null 2>&1 && echo 1 || echo 0");

        if (res[0] == "1") {
          // [0] is a hack because the result res has one extra character
          return true;
        } else return false;
      },
      getAutoSyncStatus: function () {
        var res;
        res = cmd("systemctl is-active autosync.service >/dev/null 2>&1 && echo 1 || echo 0");

        if (res[0] == "1") {
          // [0] is a hack because the result res has one extra character
          return true;
        } else return false;
      },
      getShareInternetViaEthernetStatus: function () {
        var isSharing;
        isSharing = cmd("(sudo iptables -t nat -L POSTROUTING -v -n | grep -q 'MASQUERADE  all  --  *      eth0' && ip link show eth0 | grep -q 'state UP') && echo true || echo false");
        return isSharing;
      },
      getShareInternetViaMobileStatus: function () {
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
      activateRemote: function () {
        var res;
        res = cmd("sudo systemctl start remote-iot.service");
        res2 = cmd("sudo systemctl enable remote-iot.service");
        return res;
      },
      disactivateRemote: function () {
        var res;
        res = cmd("sudo systemctl stop remote-iot.service");
        res2 = cmd("sudo systemctl disable remote-iot.service");
        return res;
      },
      activateAutoSync: function () {
        var res;
        res = cmd("sudo systemctl start autosync.service");
        res2 = cmd("sudo systemctl enable autosync.service");
        return res;
      },
      disactivateAutoSync: function () {
        var res;
        res = cmd("sudo systemctl stop autosync.service");
        res2 = cmd("sudo systemctl disable autosync.service");
        return res;
      },
      getBatteryStatus: function () {
        var res;
        var scriptsPath = Meteor.settings.scriptsPath;
        var data = fs.readFileSync(configPath, "utf-8");
        var match = data.match(new RegExp("BATTERY_MODULE=(.*)"));

        if (match) {
          var batteryModule = match[1];
        }

        if (batteryModule && batteryModule == "PiSugar") {
          res = cmd("python3 " + scriptsPath + "/pisugar_status.py");
        } else {
          res = cmd("python3 " + scriptsPath + "/pijuice_status.py"); //res = cmd("python3 /home/ubuntu/scripts/pijuice_status.py");
        }

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
      getIsOnline: function () {
        let res;

        try {
          res = cmd("ping -c 1 google.com"); // Check if the ping command was successful based on the output

          let isOnline = res.includes("1 packets received") || res.includes("1 received");
          console.log("Online status:", isOnline); // Correctly logging the boolean result

          return isOnline; // Directly return the boolean value
        } catch (error) {
          // If an error occurs (which could include being unable to run the ping command), assume offline
          console.log("Error or offline:", error);
          return false; // Assume offline if there's an error
        }
      },
      getEth0IP: function () {
        // Get IP of box
        var res; //console.log("result : "+"ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");

        res = cmd("ip addr show eth0 | grep \"inet\\b\" | awk '{print $2}' | cut -d/ -f1"); //res = cmd("ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");
        //console.log("ip : "+"ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ifconfig "+interface+" 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");

        return res;
      },
      getWwan0IP: function () {
        // Get IP of box
        var res; //console.log("result : "+"ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");

        res = cmd("ip addr show wwan0 | grep \"inet\\b\" | awk '{print $2}' | cut -d/ -f1"); //res = cmd("ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");
        //console.log("ip : "+"ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ifconfig "+interface+" 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");

        return res;
      },
      getBeekeeOsVersion: function () {
        var data = fs.readFileSync(configPath, "utf-8");
        var match = data.match(new RegExp("BEEKEE_OS_VERSION=(.*)"));
        var serial = match[1];
        return serial;
      },
      getBeekeeHomeVersion: function () {
        json = JSON.parse(Assets.getText("version.json"));
        return json.version;
      },
      restartMobileConnect: function () {
        var res;
        res = cmd("sudo systemctl restart mobile_connect.service");
        return res;
        "";
      },
      getInternetInterface: function () {
        let res;

        try {
          res = cmd("ip route get 1.2.3.4 | awk '{print $5; exit}'"); // Execute the command

          if (res.trim()) {
            return res.trim(); // Return the cleaned-up result if not empty
          } else {
            return "Unknown"; // Return a default message if the result is empty
          }
        } catch (error) {
          // Handle cases where the command fails or is not found
          console.log("Error retrieving internet interface:", error);
          return "Error"; // Return an error message
        }
      },
      getwlanint: function () {
        // Return true if the wlanint interface exists on the machine. Make sure to return a boolean value.
        let res;

        try {
          res = cmd("ip link show wlanint");
          return true;
        } catch (error) {
          return false;
        }
      },
      getWifiNetworks: function () {
        return Promise.asyncApply(() => {
          var wifi = require("node-wifi");

          wifi.init({
            iface: "wlanint"
          });
          return new Promise((resolve, reject) => {
            console.log("Starting wifi scan");
            wifi.scan((error, networks) => {
              if (error) {
                console.error("Error scanning networks:", error);
                resolve([]);
              } else {
                console.log("Wifi scan completed successfully"); // Create a Map to store unique networks

                const uniqueNetworks = new Map();
                networks.forEach(network => {
                  let strength;

                  if (network.quality > 80) {
                    strength = "wifi-4";
                  } else if (network.quality > 55) {
                    strength = "wifi-3";
                  } else if (network.quality > 30) {
                    strength = "wifi-2";
                  } else {
                    strength = "wifi-1";
                  } // Create a unique key using SSID and first 15 chars of MAC


                  const key = `${network.ssid}:${network.mac.substring(0, 15)}`; // If this key doesn't exist or the quality is higher, add/update the network

                  if (!uniqueNetworks.has(key) || network.quality > uniqueNetworks.get(key).quality) {
                    uniqueNetworks.set(key, {
                      name: network.ssid,
                      strength: strength,
                      security: network.security,
                      quality: network.quality // Keep this for comparison

                    });
                  }
                }); // Convert Map values to array

                const uniqueNetworksArray = Array.from(uniqueNetworks.values()); // Remove the quality property as it's no longer needed in the final output

                uniqueNetworksArray.forEach(network => delete network.quality);
                resolve(uniqueNetworksArray);
              }
            });
          });
        });
      },
      connectToWifi: function (ssid, password) {
        var wifi = require("node-wifi");

        wifi.init({
          iface: "wlanint"
        }); // Return booleans, True if the connection is successful, otherwise return False

        return new Promise((resolve, reject) => {
          wifi.connect({
            ssid: ssid,
            password: password
          }, error => {
            if (error) {
              console.error("Error connecting to wifi:", error);
              resolve(false);
            } else {
              console.log("Connected to wifi:", ssid);
              resolve(true);
            }
          });
        });
      },
      disconnectWifi: function () {
        var wifi = require("node-wifi");

        wifi.init({
          iface: "wlanint"
        });
        return new Promise((resolve, reject) => {
          wifi.disconnect(error => {
            if (error) {
              console.error("Error disconnecting from wifi:", error);
              resolve(false);
            } else {
              console.log("Disconnected from wifi");
              resolve(true);
            }
          });
        });
      },
      forgetWifi: function (ssid) {
        var wifi = require("node-wifi");

        wifi.init({
          iface: "wlanint"
        }); // Return booleans, True if the connection is successful, otherwise return False

        return new Promise((resolve, reject) => {
          wifi.deleteConnection({
            ssid: ssid
          }, error => {
            if (error) {
              console.error("Error connecting to wifi:", error);
              resolve(false);
            } else {
              console.log("Connected to wifi:", ssid);
              resolve(true);
            }
          });
        });
      },
      getClientSSID: function () {
        let ssid;

        try {
          ssid = cmd("iwgetid -r").trim(); // Check if ssid is not empty and is a string

          if (typeof ssid === "string" && ssid !== "") {
            return ssid;
          } else {
            // Return "Not connected" if ssid is empty or not a string
            return "Not connected";
          }
        } catch (error) {
          // Return "Not connected" in case of any error
          return "Not connected";
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
      getInternetSharingStatusEthernet: function () {
        var listForwardRulesCommand = "sudo iptables -S FORWARD";
        var commandResult = cmd(listForwardRulesCommand);

        if (!commandResult) {
          throw new Meteor.Error("command-execution-error", "The command did not return any output.");
        } // Check for the specific rule indicating internet sharing from wlan0 to eth0


        var sharingFromWlanToEth = commandResult.includes("-A FORWARD -i wlan0 -o eth0 -j ACCEPT");
        var sharingToWlanFromEthEstablished = commandResult.includes("-A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT");

        if (sharingFromWlanToEth && sharingToWlanFromEthEstablished) {
          // If at least one pair of rules exists, internet sharing is considered enabled.
          return {
            status: "enabled for all",
            macAddress: null
          };
        } else {
          return {
            status: "disabled",
            macAddress: null
          };
        }
      },
      enableInternetSharingEthernet: function (callback) {
        var iptablesCommands = ["sudo iptables --append FORWARD --in-interface wlan0 --out-interface eth0 -j ACCEPT", "sudo iptables --append FORWARD --in-interface eth0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT", "sudo iptables --table nat --append POSTROUTING --out-interface eth0 -j MASQUERADE", "sudo netfilter-persistent save"].join(" && ");
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

          console.log("Internet sharing via Ethernet enabled successfully.");
          if (callback) callback(null, stdout);
        });
      },
      disableInternetSharingEthernet: function (callback) {
        // Define a list of commands to repeatedly attempt deletion.
        var iptablesDeleteCommands = ["sudo iptables --delete FORWARD --in-interface wlan0 --out-interface eth0 -j ACCEPT", "sudo iptables --delete FORWARD --in-interface eth0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT", "sudo iptables --table nat --delete POSTROUTING --out-interface eth0 -j MASQUERADE", "sudo netfilter-persistent save"]; // Function to execute a command and recursively call itself if the command was successful (rule was found and deleted).

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
              cmd("sudo netfilter-persistent save", (error, stdout, stderr) => {
                if (error) {
                  console.error(`exec error during saving iptables rules: ${error}`);
                  if (callback) callback(error);
                  return;
                }

                console.log(`iptables rules saved.`);
                if (callback) callback(null, "All specified rules removed and changes saved.");
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
      enableInternetForMacEthernet: function (macAddress, callback) {
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

            cmd("sudo netfilter-persistent save", (error, stdout, stderr) => {
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
      removeAllMacFiltersForEthernet: function (callback) {
        // List all FORWARD rules with line numbers
        cmd("sudo iptables -L FORWARD --line-numbers -n", (error, stdout, stderr) => {
          if (error) {
            console.error(`Error listing FORWARD rules: ${error}`);
            if (callback) callback(error, null);
            return;
          } // Process stdout to identify rules related to MAC filtering on eth0


          const lines = stdout.split("\n");
          const ruleNumbers = lines.reduce((acc, line, index) => {
            if (line.includes("eth0") && line.toLowerCase().includes("mac")) {
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

          cmd("sudo netfilter-persistent save", (saveError, saveStdout, saveStderr) => {
            if (saveError) {
              console.error(`Error saving iptables rules: ${saveError}`);
              if (callback) callback(saveError, null);
              return;
            }

            console.log("iptables rules updated and saved.");
            if (callback) callback(null, "All MAC filter rules for Ethernet removed and changes saved.");
          });
        });
      },
      getInternetSharingStatusMobile: function () {
        var listForwardRulesCommand = "sudo iptables -S FORWARD";
        var commandResult = cmd(listForwardRulesCommand);

        if (!commandResult) {
          throw new Meteor.Error("command-execution-error", "The command did not return any output.");
        } // Adjusted to check for the specific rule indicating internet sharing from wlan0 to wwan0


        var sharingFromWlanToWwan = commandResult.includes("-A FORWARD -i wlan0 -o wwan0 -j ACCEPT");
        var sharingToWlanFromWwanEstablished = commandResult.includes("-A FORWARD -i wwan0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT");

        if (sharingFromWlanToWwan && sharingToWlanFromWwanEstablished) {
          // If at least one pair of rules exists, internet sharing to the mobile interface is considered enabled.
          return {
            status: "enabled for all",
            macAddress: null
          };
        } else {
          return {
            status: "disabled",
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
      enableInternetSharingMobile: function (callback) {
        var iptablesCommands = ["sudo iptables --append FORWARD --in-interface wlan0 --out-interface wwan0 -j ACCEPT", "sudo iptables --append FORWARD --in-interface wwan0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT", "sudo iptables --table nat --append POSTROUTING --out-interface wwan0 -j MASQUERADE", "sudo netfilter-persistent save"].join(" && ");
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

          console.log("Internet sharing via mobile enabled successfully.");
          if (callback) callback(null, stdout);
        });
      },
      disableInternetSharingMobile: function (callback) {
        // Define commands for deletion without combining them
        var iptablesDeleteCommands = ["sudo iptables --delete FORWARD --in-interface wlan0 --out-interface wwan0 -j ACCEPT", "sudo iptables --delete FORWARD --in-interface wwan0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT", "sudo iptables --table nat --delete POSTROUTING --out-interface wwan0 -j MASQUERADE"]; // Function to recursively execute a command until it fails (indicating no more instances of the rule)

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
              cmd("sudo netfilter-persistent save", (error, saveStdout, saveStderr) => {
                if (error) {
                  console.error(`Error saving iptables rules: ${error}`);
                  if (callback) callback(error, null);
                  return;
                }

                console.log("iptables rules for mobile interface updated and saved.");
                if (callback) callback(null, "All specified rules for mobile interface removed and changes saved.");
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
      allowInternetForMacMobile: function (macAddress, callback) {
        var res; // First, enable general internet sharing from wlan0 to wwan0

        res = cmd("sudo iptables --append FORWARD --in-interface wlan0 --out-interface wwan0 -j ACCEPT && sudo iptables --append FORWARD --in-interface wwan0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT && sudo iptables --table nat --append POSTROUTING --out-interface wwan0 -j MASQUERADE", (error, stdout, stderr) => {
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

              cmd("sudo netfilter-persistent save", (error, stdout, stderr) => {
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
      removeAllMacFiltersForMobile: function (callback) {
        // List all FORWARD rules
        cmd("sudo iptables -L FORWARD --line-numbers -n", (error, stdout, stderr) => {
          if (error) {
            console.error(`Error listing rules: ${error}`);
            if (callback) callback(error, null);
            return;
          } // Process stdout to find rules to delete. This part is pseudo-code and needs adjustment


          const lines = stdout.split("\n");
          const ruleNumbers = [];
          lines.forEach(line => {
            if (line.includes("wwan0") && line.includes("MAC")) {
              // Extract the rule number from the line
              const ruleNumber = line.split(" ")[0]; // This is a simplification

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

          cmd("sudo netfilter-persistent save", (error, stdout, stderr) => {
            if (error) {
              console.error(`Error saving iptables rules: ${error}`);
              if (callback) callback(error, null);
              return;
            }

            console.log("iptables rules updated and saved.");
            if (callback) callback(null, "All MAC filter rules for WWAN removed and changes saved.");
          });
        });
      },
      reboot: function () {
        var res;
        res = cmd("sudo reboot", (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
          } else {
            return res;
          }
        });
      },
      shutdown: function () {
        var res;
        res = cmd("sudo halt", (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
          } else {
            return res;
          }
        });
      },
      synchronize: function () {
        console.log("Starting sync...");
        var deviceSerial = Meteor.settings.public.serial;
        var deviceToken = Meteor.settings.moodleAPIToken;
        var url = Meteor.settings.cloudURL + "/api/startSync";
        var options = {
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            deviceSerial: deviceSerial,
            deviceToken: deviceToken
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiYWRkQ2xhc3MiLCJmYWRlT3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnQiLCJBcHBzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJhbGxvdyIsImluc2VydCIsInVwZGF0ZSIsInVzZXJJZCIsInNwYWNlIiwicHVibGlzaCIsImFwcHNQdWJsaWNhdGlvbiIsImZpbmQiLCJTeW5jaHJvbml6YXRpb25zIiwic3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uIiwiaXNBZG1pbiIsImNvbnNvbGUiLCJsb2ciLCJSb2xlcyIsInVzZXJJc0luUm9sZSIsInVzZXIiLCJyb2xlQXNzaWdubWVudCIsInJlYWR5IiwiY3JlYXRlUm9sZSIsInVubGVzc0V4aXN0cyIsInVzZXJzIiwiY291bnQiLCJhZG1pblBhc3N3b3JkIiwic2V0dGluZ3MiLCJ1c2VybmFtZSIsInJvbGVzIiwiXyIsImVhY2giLCJpZCIsIkFjY291bnRzIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJwcm9maWxlIiwibmFtZSIsImxlbmd0aCIsImFkZFVzZXJzVG9Sb2xlcyIsImRlZmF1bHRBcHBzIiwiY3VzdG9tQXBwIiwib25seVRlYWNoZXIiLCJvcmRlciIsImRvY191c2VyIiwiZG9jX2FkbWluIiwibGFzdF92ZXJzaW9uIiwidXJsIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiaW5zdGFsbGVkIiwidmVyc2lvbiIsImhpZGRlbiIsIkhUVFAiLCJmcyIsIk5wbSIsInJlcXVpcmUiLCJleGVjIiwiY21kIiwid3JhcEFzeW5jIiwid2lmaVNldHRpbmdzUGF0aCIsImNvbmZpZ1BhdGgiLCJyZWFkbGluZSIsIm1ldGhvZHMiLCJhZG1pblNldE5ld1Bhc3N3b3JkIiwiYWRtaW5JZCIsIm5ld1Bhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjcmVhdGVBY2NvdW50IiwiZWRpdEFjY291bnQiLCJfaWQiLCIkc2V0IiwiY2hhbmdlRW1haWwiLCJjaGVjayIsIlN0cmluZyIsIm9sZGVtYWlsIiwiZW1haWxzIiwiZW1haWxSZWciLCJ0ZXN0IiwicmVtb3ZlRW1haWwiLCJhZGRyZXNzIiwiYWRkRW1haWwiLCJkZWxldGVVc2VyIiwiZXJyb3IiLCJyZXN1bHQiLCJtZXNzYWdlIiwiYWRkTWFuYWdlclJvbGUiLCJyZW1vdmVNYW5hZ2VyUm9sZSIsInJlbW92ZVVzZXJzRnJvbVJvbGVzIiwiYWRkQWRtaW5Sb2xlIiwicmVtb3ZlQWRtaW5Sb2xlIiwicnVuQ29tbWFuZCIsImNvbW1hbmQiLCJyZXMiLCJnZXRVc2VkU3BhY2UiLCJzdG9yYWdlVXNhZ2UiLCJ0b0ZpeGVkIiwic3RvcmFnZVRvdGFsIiwicGVyY2VudGFnZSIsImdldFNTSUQiLCJkYXRhIiwicmVhZEZpbGVTeW5jIiwibWF0Y2giLCJSZWdFeHAiLCJTU0lEIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsInNldFNTSUQiLCJuZXdTU0lEIiwiZW5jb2RlZE5ld1NTSUQiLCJCdWZmZXIiLCJ0b1N0cmluZyIsIm5ld0RhdGEiLCJ3cml0ZUZpbGVTeW5jIiwiZ2V0V2lmaVBhc3N3b3JkIiwic2V0V2lmaVBhc3N3b3JkIiwiZ2V0V2lmaUNoYW5uZWwiLCJjaGFubmVsIiwic2V0V2lmaUNoYW5uZWwiLCJuZXdDaGFubmVsIiwiZ2V0V2lmaUJhbmQiLCJzZXRXaWZpQmFuZCIsIm5ld0JhbmQiLCJiYW5kUmVnZXgiLCJjaGFubmVsUmVnZXgiLCJtYXRjaEJhbmQiLCJtYXRjaENoYW5uZWwiLCJ0cmltIiwiY3VycmVudENoYW5uZWwiLCJwYXJzZUludCIsImdldFNlcmlhbCIsInNlcmlhbCIsImdldE9wZXJhdG9yTmFtZSIsIm9wZXJhdG9yTmFtZSIsImdldFNpZ25hbFN0cmVuZ3RoIiwic2lnbmFsU3RyZW5ndGgiLCJzdHJlbmd0aFZhbHVlIiwicXVhbGl0eSIsImdldEFQTiIsIkFQTiIsImdldEFQTlVzZXIiLCJBUE5Vc2VyIiwiZ2V0QVBOUGFzc3dvcmQiLCJBUE5QYXNzd29yZCIsImdldFNpbUNhcmRTdGF0dXMiLCJzaW1TdGF0dXNSZXN1bHQiLCJleGVjdXRlQ29tbWFuZCIsInNpbVN0YXR1cyIsImluY2x1ZGVzIiwiZ2V0U2ltUGluIiwiU2ltUGluIiwic2V0U2ltUGluIiwiUElOIiwic2V0QVBOIiwic2V0QVBOVXNlciIsInNldEFQTlBhc3N3b3JkIiwiZ2V0UmVtb3RlU3RhdHVzIiwiZ2V0QXV0b1N5bmNTdGF0dXMiLCJnZXRTaGFyZUludGVybmV0VmlhRXRoZXJuZXRTdGF0dXMiLCJpc1NoYXJpbmciLCJnZXRTaGFyZUludGVybmV0VmlhTW9iaWxlU3RhdHVzIiwiYWN0aXZhdGVSZW1vdGUiLCJyZXMyIiwiZGlzYWN0aXZhdGVSZW1vdGUiLCJhY3RpdmF0ZUF1dG9TeW5jIiwiZGlzYWN0aXZhdGVBdXRvU3luYyIsImdldEJhdHRlcnlTdGF0dXMiLCJzY3JpcHRzUGF0aCIsImJhdHRlcnlNb2R1bGUiLCJnZXRJc09ubGluZSIsImlzT25saW5lIiwiZ2V0RXRoMElQIiwiZ2V0V3dhbjBJUCIsImdldEJlZWtlZU9zVmVyc2lvbiIsImdldEJlZWtlZUhvbWVWZXJzaW9uIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInJlc3RhcnRNb2JpbGVDb25uZWN0IiwiZ2V0SW50ZXJuZXRJbnRlcmZhY2UiLCJnZXR3bGFuaW50IiwiZ2V0V2lmaU5ldHdvcmtzIiwid2lmaSIsImluaXQiLCJpZmFjZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2NhbiIsIm5ldHdvcmtzIiwidW5pcXVlTmV0d29ya3MiLCJNYXAiLCJmb3JFYWNoIiwibmV0d29yayIsInN0cmVuZ3RoIiwia2V5Iiwic3NpZCIsIm1hYyIsInN1YnN0cmluZyIsImhhcyIsImdldCIsInNldCIsInNlY3VyaXR5IiwidW5pcXVlTmV0d29ya3NBcnJheSIsIkFycmF5IiwiZnJvbSIsInZhbHVlcyIsImNvbm5lY3RUb1dpZmkiLCJjb25uZWN0IiwiZGlzY29ubmVjdFdpZmkiLCJkaXNjb25uZWN0IiwiZm9yZ2V0V2lmaSIsImRlbGV0ZUNvbm5lY3Rpb24iLCJnZXRDbGllbnRTU0lEIiwiZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQiLCJsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCIsImNvbW1hbmRSZXN1bHQiLCJFcnJvciIsInNoYXJpbmdGcm9tV2xhblRvRXRoIiwic2hhcmluZ1RvV2xhbkZyb21FdGhFc3RhYmxpc2hlZCIsInN0YXR1cyIsIm1hY0FkZHJlc3MiLCJlbmFibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCIsImNhbGxiYWNrIiwiaXB0YWJsZXNDb21tYW5kcyIsImpvaW4iLCJzdGRvdXQiLCJzdGRlcnIiLCJkaXNhYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQiLCJpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzIiwiZXhlY3V0ZUFuZFJlcGVhdCIsImRvbmVDYWxsYmFjayIsInRhc2tzQ29tcGxldGVkIiwiZW5hYmxlSW50ZXJuZXRGb3JNYWNFdGhlcm5ldCIsImFsbG93TWFjQ29tbWFuZCIsImJsb2NrT3RoZXJzQ29tbWFuZCIsInJlbW92ZUFsbE1hY0ZpbHRlcnNGb3JFdGhlcm5ldCIsImxpbmVzIiwic3BsaXQiLCJydWxlTnVtYmVycyIsInJlZHVjZSIsImFjYyIsImxpbmUiLCJpbmRleCIsInRvTG93ZXJDYXNlIiwicnVsZU51bWJlciIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJyZW1vdmVFcnJvciIsInJlbW92ZVN0ZG91dCIsInJlbW92ZVN0ZGVyciIsInNhdmVFcnJvciIsInNhdmVTdGRvdXQiLCJzYXZlU3RkZXJyIiwiZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzTW9iaWxlIiwic2hhcmluZ0Zyb21XbGFuVG9Xd2FuIiwic2hhcmluZ1RvV2xhbkZyb21Xd2FuRXN0YWJsaXNoZWQiLCJlbmFibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUiLCJkaXNhYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlIiwiYWxsb3dJbnRlcm5ldEZvck1hY01vYmlsZSIsInJlbW92ZUFsbE1hY0ZpbHRlcnNGb3JNb2JpbGUiLCJyZWJvb3QiLCJzaHV0ZG93biIsInN5bmNocm9uaXplIiwiZGV2aWNlU2VyaWFsIiwicHVibGljIiwiZGV2aWNlVG9rZW4iLCJtb29kbGVBUElUb2tlbiIsImNsb3VkVVJMIiwib3B0aW9ucyIsImhlYWRlcnMiLCJucG1SZXF1ZXN0T3B0aW9ucyIsInJlamVjdFVuYXV0aG9yaXplZCIsInRpbWVvdXQiLCJwb3N0IiwicmVzdWx0Q29udGVudCIsImNvbnRlbnQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sQ0FBQ0MsUUFBWCxFQUFxQjtBQUNwQkMsUUFBTSxDQUFDQyxPQUFQLENBQWUsWUFBZixFQUE2QiwyTkFBN0I7QUFFQUQsUUFBTSxDQUFDRSxPQUFQLENBQWUsWUFBZixFQUE2QkMsTUFBTSxDQUFDQyxPQUFQLENBQWUsaUJBQWYsQ0FBN0I7QUFDQTs7QUFFRCxJQUFJTixNQUFNLENBQUNPLFFBQVgsRUFBcUI7QUFD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Q0FBZSxNQUFNO0FBQ3BCeUIsU0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFEb0IsQ0FLbkI7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQVZELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblx0SW5qZWN0LnJhd0hlYWQoXCJtZXRhTG9hZGVyXCIsICc8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBoZWlnaHQ9ZGV2aWNlLWhlaWdodFwiLz48bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj5cdDxtZXRhIG5hbWU9XCJtb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiPicpO1xuXG5cdEluamVjdC5yYXdCb2R5KFwiaHRtbExvYWRlclwiLCBBc3NldHMuZ2V0VGV4dCgnYXBwX2xvYWRlci5odG1sJykpO1xufVxuXG5pZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XG5cdE1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0JCgnLmluZGV4LS1pY29uJykuYWRkQ2xhc3MoJ2FuaW1hdGVkLWljb24nKTtcblxuXHRcdFx0JChcIiNpbmplY3QtbG9hZGVyLXdyYXBwZXJcIikuZmFkZU91dCg1MDAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHQkKCcuaW5kZXgtLWljb24nKS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQtaWNvbicpO1xuXHRcdH0pO1xuXHRcdH0sIDUwMCk7XG5cdH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBBcHBzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtYXBwcycpO1xuXG5cblxuQXBwcy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXG5cdC8vIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyB1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gcmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9XG59KTtcblxuLy8gUHVibGljYXRpb25zXG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxBcHBzJywgZnVuY3Rpb24gYXBwc1B1YmxpY2F0aW9uKCkge1xuICAgIHJldHVybiBBcHBzLmZpbmQoKTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuIFxuZXhwb3J0IGNvbnN0IFN5bmNocm9uaXphdGlvbnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignaG9tZS1zeW5jaHJvbml6YXRpb25zJyk7XG5cblxuXG5TeW5jaHJvbml6YXRpb25zLmFsbG93KHtcblxuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHVwZGF0ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0cmVtb3ZlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXG5cdC8vIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyB1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gcmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9XG59KTtcblxuLy8gUHVibGljYXRpb25zXG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxTeW5jaHJvbml6YXRpb25zJywgZnVuY3Rpb24gc3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uKCkge1xuICAgIHJldHVybiBTeW5jaHJvbml6YXRpb25zLmZpbmQoKTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG4vLyB2YXIgdXNlcnNEQlx0PSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy8gdmFyIGNvbGxlY3Rpb25cdD0gdXNlcnNEQi5vcGVuKCd1c2VycycpO1xuXG5cbi8vY29uc3QgZGF0YWJhc2UgPSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy9jb25zdCBjb2xsZWN0aW9uID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vL2V4cG9ydCBjb25zdCBVc2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy8gU2hhcmluZyB0aGUgc2FtZSBBY2NvdW50IGNvbGxlY3Rpb24gdGhhbiBiZWVrZWUtbGl2ZVxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXG5cdC8vIGNoZWNrIHRoYXQgdGhlIHVzZXJJZCBzcGVjaWZpZWQgaXMgYWRtaW5cbmlzQWRtaW4gPSBmdW5jdGlvbih1c2VySWQpIHtcblx0Y29uc29sZS5sb2coXCJpc2FkbWluXCIpO1xuICByZXR1cm4gUm9sZXMudXNlcklzSW5Sb2xlKE1ldGVvci51c2VyKCksICdhZG1pbicpO1xufVxuXG5cbi8vIFB1Ymxpc2ggUm9sZXMgdG8gY2xpZW50XG5NZXRlb3IucHVibGlzaChudWxsLCBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnVzZXJJZCkge1xuICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCh7ICd1c2VyLl9pZCc6IHRoaXMudXNlcklkIH0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucmVhZHkoKVxuICB9XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKCk7XG5cbn0pO1xuXG4gIC8vIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgLy8gXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAvLyAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICAvLyB9KTtcblxuLy8gU2VydmVyMiA9IEREUC5jb25uZWN0KFwiaHR0cDovL2JlZWtlZS5ib3g6ODNcIik7XG4vLyBBY2NvdW50cy5jb25uZWN0aW9uID0gU2VydmVyMjtcblxuXG4vL3ZhciBkYXRhYmFzZSA9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vL01ldGVvci51c2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy9leHBvcnQgY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignYXBwcycpO1xuXG5cbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIC8vIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgLy8gXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAvLyAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICAvLyB9KTtcbn0iLCJpbXBvcnQgeyBBcHBzIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvYXBwcy5qcyc7XG5cblx0Ly8gQ3JlYXRlIHRoZSByb2xlc1xuXHRSb2xlcy5jcmVhdGVSb2xlKCdtYW5hZ2VyJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXG5cbi8vICMjIyAgQ3JlYXRlIGFkbWluIHVzZXIgYXQgZmlyc3Qgc3RhcnQgICMjI1xuXG5cbmlmIChNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblx0XG5cdC8vIENyZWF0ZSB0aGUgcm9sZVxuXHRSb2xlcy5jcmVhdGVSb2xlKCdtYW5hZ2VyJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXHRSb2xlcy5jcmVhdGVSb2xlKCdhZG1pbicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblxuXHR2YXIgYWRtaW5QYXNzd29yZCA9IE1ldGVvci5zZXR0aW5ncy5hZG1pblBhc3N3b3JkO1xuXG5cdHZhciB1c2VycyA9IFtcblx0XHR7dXNlcm5hbWU6XCJhZG1pblwiLHJvbGVzOlsnYWRtaW4nXX0sXG5cdF07XG5cblx0Xy5lYWNoKHVzZXJzLCBmdW5jdGlvbiAodXNlcikge1xuXHRcdHZhciBpZDtcblx0XHRpZCA9IEFjY291bnRzLmNyZWF0ZVVzZXIoe1xuXHRcdFx0dXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG5cdFx0XHRlbWFpbDogXCJBZG1pblwiLFxuXHRcdFx0cGFzc3dvcmQ6IGFkbWluUGFzc3dvcmQsXG5cdFx0XHRwcm9maWxlOntuYW1lOlwiQWRtaW5cIn1cblx0XHR9KTtcblxuXHRcdGlmICh1c2VyLnJvbGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyhpZCwgdXNlci5yb2xlcyk7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG5pZiAoQXBwcy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuXG5cdHZhciBkZWZhdWx0QXBwcyA9IFtcblx0XHR7bmFtZTpcIkxpdmVcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MywgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL2xpdmUuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLWxpdmUucG5nXCIsIGRlc2NyaXB0aW9uOlwiQmVla2VlIExpdmUgcHJvbW90ZSByZWFsLXRpbWUgaW50ZXJhY3Rpb24gYnkgYWxsb3dpbmcgbGVhcm5lcnMgdG8gZXhwcmVzcyB0aGVtc2VsdmVzIGFza2luZyBxdWVzdGlvbnMsIHBvc3RpbmcgcGhvdG9zIG9yIHNoYXJpbmcgZmlsZXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjEuNFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiUmVzb3VyY2VzXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjcsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly9yZXNvdXJjZXMuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXJlc291cmNlcy5wbmdcIiwgZGVzY3JpcHRpb246XCJXaXRoIEJlZWtlZSBSZXNvdXJjZXMsIHlvdSBjYW4gZWFzaWx5IHNoYXJlIGZpbGVzIHdpdGggeW91ciBsZWFybmVycy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJXaGVlbFwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOnRydWUsIG9yZGVyOjksIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjAuN1wiLCB1cmw6XCJodHRwOi8vd2hlZWwuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXdoZWVsLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBXaGVlbCBpcyBhIHNpbXBsZSByYW5kb20gcGlja2VyIHdoZWVsIHRoYXQgYWxsb3cgeW91IHRvIHBpY2sgdXAgYSByYW5kb20gbmFtZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC44XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJUaW1lclwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo4LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vdGltZXIuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXRpbWVyLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBUaW1lciBpcyBhIHNpbXBsZSB0aW1lciB0aGF0IGxldHMgeW91ciBsZWFybmVycyBrbm93IGhvdyBtdWNoIHRpbWUgdGhleSBoYXZlIGxlZnQuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiTW9vZGxlXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MSwgZG9jX3VzZXI6XCJtb29kbGVfdGVhY2hlcmRvYy5wZGZcIiwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vbW9vZGxlLmJlZWtlZS5ib3hcIiwgaWNvbjpcIm1vb2RsZS5wbmdcIiwgZGVzY3JpcHRpb246XCJNb29kbGUgaXMgYSBmcmVlLCBvbmxpbmUgTGVhcm5pbmcgTWFuYWdlbWVudCBzeXN0ZW0gZW5hYmxpbmcgZWR1Y2F0b3JzIHRvIGNyZWF0ZSB0aGVpciBvd24gcHJpdmF0ZSB3ZWJzaXRlIGZpbGxlZCB3aXRoIGR5bmFtaWMgY291cnNlcyB0aGF0IGV4dGVuZCBsZWFybmluZywgYW55IHRpbWUsIGFueXdoZXJlLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIzLjExLjJcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIktvbGlicmlcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjoyLCBkb2NfdXNlcjpcImtvbGlicmlfdXNlcmRvYy5wZGZcIiwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8va29saWJyaS5iZWVrZWUuYm94XCIsIGljb246XCJrb2xpYnJpLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIktvbGlicmkgaXMgYW4gb3Blbi1zb3VyY2UgZWR1Y2F0aW9uYWwgcGxhdGZvcm0gc3BlY2lhbGx5IGRlc2lnbmVkIHRvIHByb3ZpZGUgb2ZmbGluZSBhY2Nlc3MgdG8gYSB3aWRlIHJhbmdlIG9mIHF1YWxpdHksIG9wZW5seSBsaWNlbnNlZCBlZHVjYXRpb25hbCByZXNvdXJjZXMgaW4gbG93LXJlc291cmNlIGNvbnRleHRzIGxpa2UgcnVyYWwgc2Nob29scywgcmVmdWdlZSBjYW1wcywgb3JwaGFuYWdlcywgYW5kIGFsc28gaW4gbm9uLWZvcm1hbCBzY2hvb2wgcHJvZ3JhbXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMTQuN1wiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdC8vIHtuYW1lOlwiRXRoZXJwYWRcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo1LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vZXRoZXJwYWQuYmVla2VlLmJveFwiLCBpY29uOlwiZXRoZXJwYWQucG5nXCIsIGRlc2NyaXB0aW9uOlwiRXRoZXJwYWQgYWxsb3dzIHlvdSB0byBlZGl0IGRvY3VtZW50cyBjb2xsYWJvcmF0aXZlbHkgaW4gcmVhbC10aW1lLCBtdWNoIGxpa2UgYSBsaXZlIG11bHRpLXBsYXllciBlZGl0b3IgdGhhdCBydW5zIGluIHlvdXIgYnJvd3Nlci4gV3JpdGUgYXJ0aWNsZXMsIHByZXNzIHJlbGVhc2VzLCB0by1kbyBsaXN0cywgZXRjLiB0b2dldGhlciB3aXRoIHlvdXIgZnJpZW5kcywgZmVsbG93IHN0dWRlbnRzIG9yIGNvbGxlYWd1ZXMsIGFsbCB3b3JraW5nIG9uIHRoZSBzYW1lIGRvY3VtZW50IGF0IHRoZSBzYW1lIHRpbWUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjEuOC4xNFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiU3Rvcm1cIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo0LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vc3Rvcm0uYmVla2VlLmJveFwiLCBpY29uOlwic3Rvcm0ucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGFuZCBhbmltYXRlIGxpdmUgc3VydmV5cywgYnJhaW5zdG9ybXMgYW5kIHF1aXp6ZXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuNC41XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJQYWRcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo1LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vcGFkLmJlZWtlZS5ib3hcIiwgaWNvbjpcInBhZC5wbmdcIiwgZGVzY3JpcHRpb246XCJDcmVhdGUgY29sbGFib3JhdGl2ZSB3YWxscyB0byBzaGFyZSBhbmQgb3JnYW5pemUgY29udGVudC5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC44LjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIkJ1enplclwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6dHJ1ZSwgb3JkZXI6NiwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2J1enplci5iZWVrZWUuYm94XCIsIGljb246XCJidXp6ZXIucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGEgdmlydHVhbCBnYW1pbmcgcm9vbSBhcm91bmQgYSBjb25uZWN0ZWQgYnV6emVyLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjIuNFwiLCBoaWRkZW46ZmFsc2V9LFxuXG5cdF07XG5cblx0Xy5lYWNoKGRlZmF1bHRBcHBzLCBmdW5jdGlvbiAoZGVmYXVsdEFwcHMpIHtcblx0XHRBcHBzLmluc2VydChkZWZhdWx0QXBwcyk7XG5cdH0pO1xufSIsImltcG9ydCB7IEhUVFAgfSBmcm9tIFwibWV0ZW9yL2h0dHBcIjtcblxuTWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24gKCkge1xuICBpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gICAgdmFyIGZzID0gTnBtLnJlcXVpcmUoXCJmc1wiKTtcbiAgICBleGVjID0gTnBtLnJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLmV4ZWM7XG4gICAgY21kID0gTWV0ZW9yLndyYXBBc3luYyhleGVjKTtcblxuICAgIHZhciB3aWZpU2V0dGluZ3NQYXRoID0gTWV0ZW9yLnNldHRpbmdzLndpZmlTZXR0aW5nc1BhdGg7XG4gICAgdmFyIGNvbmZpZ1BhdGggPSBNZXRlb3Iuc2V0dGluZ3MuY29uZmlnUGF0aDtcbiAgICBjb25zdCByZWFkbGluZSA9IHJlcXVpcmUoXCJyZWFkbGluZVwiKTtcblxuICAgIE1ldGVvci5tZXRob2RzKHtcbiAgICAgIGFkbWluU2V0TmV3UGFzc3dvcmQ6IGZ1bmN0aW9uIChhZG1pbklkLCB1c2VySWQsIG5ld1Bhc3N3b3JkKSB7XG4gICAgICAgIC8vIEFkbWluIGNhbiBmb3JjaWJseSBjaGFuZ2UgdGhlIHBhc3N3b3JkIGZvciBhIHVzZXJcbiAgICAgICAgaWYgKFJvbGVzLnVzZXJJc0luUm9sZShhZG1pbklkLCBcImFkbWluXCIpKSB7XG4gICAgICAgICAgQWNjb3VudHMuc2V0UGFzc3dvcmQodXNlcklkLCBuZXdQYXNzd29yZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjcmVhdGVBY2NvdW50OiBmdW5jdGlvbiAoZW1haWwsIHBhc3N3b3JkLCBwcm9maWxlKSB7XG4gICAgICAgIHJldHVybiBBY2NvdW50cy5jcmVhdGVVc2VyKHtcbiAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgIHByb2ZpbGU6IHByb2ZpbGUsXG4gICAgICAgIH0pOyAvLyBDYWxsYmFjayBpcyBub3Qgc3VwcG9ydGVkIG9uIHNlcnZlci1zaWRlXG4gICAgICB9LFxuICAgICAgZWRpdEFjY291bnQ6IGZ1bmN0aW9uICh1c2VySWQsIGVtYWlsLCBwYXNzd29yZCwgcHJvZmlsZSkge1xuICAgICAgICBNZXRlb3IudXNlcnMudXBkYXRlKFxuICAgICAgICAgIHsgX2lkOiB1c2VySWQgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgICAgIFwiZW1haWxzLjAuYWRkcmVzc1wiOiBlbWFpbCxcbiAgICAgICAgICAgICAgcHJvZmlsZTogcHJvZmlsZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkKSB7XG4gICAgICAgICAgQWNjb3VudHMuc2V0UGFzc3dvcmQodXNlcklkLCBwYXNzd29yZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjaGFuZ2VFbWFpbDogZnVuY3Rpb24gKGVtYWlsKSB7XG4gICAgICAgIHZhciBlbWFpbCA9IGVtYWlsO1xuICAgICAgICBjaGVjayhlbWFpbCwgU3RyaW5nKTtcbiAgICAgICAgdmFyIHVzZXIgPSBNZXRlb3IudXNlcigpO1xuICAgICAgICB2YXIgb2xkZW1haWwgPSB1c2VyLmVtYWlscztcbiAgICAgICAgdmFyIGVtYWlsUmVnID0gL14oW1xcdy1cXC5dK0AoW1xcdy1dK1xcLikrW1xcdy1dezIsNH0pPyQvO1xuICAgICAgICBpZiAoZW1haWxSZWcudGVzdChlbWFpbCkpIHtcbiAgICAgICAgICBpZiAob2xkZW1haWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgQWNjb3VudHMucmVtb3ZlRW1haWwodXNlci5faWQsIHVzZXIuZW1haWxzWzBdLmFkZHJlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBBY2NvdW50cy5hZGRFbWFpbCh1c2VyLl9pZCwgZW1haWwpO1xuICAgICAgICAgIHJldHVybiBlbWFpbDtcbiAgICAgICAgfSBlbHNlIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVVzZXI6IGZ1bmN0aW9uICh1c2VySWQpIHtcbiAgICAgICAgTWV0ZW9yLnVzZXJzLnJlbW92ZSh1c2VySWQsIGZ1bmN0aW9uIChlcnJvciwgcmVzdWx0KSB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoZW4gZGVsZXRpbmcgdXNlciA6IFwiICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGRNYW5hZ2VyUm9sZTogZnVuY3Rpb24gKHVzZXJJZCkge1xuICAgICAgICBSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklkLCBcIm1hbmFnZXJcIik7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlTWFuYWdlclJvbGU6IGZ1bmN0aW9uICh1c2VySWQpIHtcbiAgICAgICAgUm9sZXMucmVtb3ZlVXNlcnNGcm9tUm9sZXModXNlcklkLCBcIm1hbmFnZXJcIik7XG4gICAgICB9LFxuICAgICAgYWRkQWRtaW5Sb2xlOiBmdW5jdGlvbiAodXNlcklkKSB7XG4gICAgICAgIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsIFwiYWRtaW5cIik7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlQWRtaW5Sb2xlOiBmdW5jdGlvbiAodXNlcklkKSB7XG4gICAgICAgIFJvbGVzLnJlbW92ZVVzZXJzRnJvbVJvbGVzKHVzZXJJZCwgXCJhZG1pblwiKTtcbiAgICAgIH0sXG5cbiAgICAgIC8vICdnZXRVc2VkU3BhY2UnOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFx0dmFyIHJlcztcbiAgICAgIC8vIFx0cmVzID0gY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIikgKyBcIi8gXCIgKyBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKSArIFwiIChcIitjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKStcInVzZWQpXCI7XG4gICAgICAvLyBcdHJldHVybiByZXM7XG4gICAgICAvLyB9LFxuICAgICAgcnVuQ29tbWFuZDogZnVuY3Rpb24gKHBhc3N3b3JkLCBjb21tYW5kKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHJlcyA9IGNtZChcImVjaG8gXCIgKyBwYXNzd29yZCArIFwiIHwgc3VkbyAtUyBcIiArIGNvbW1hbmQpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSxcbiAgICAgIGdldFVzZWRTcGFjZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzID0ge307XG4gICAgICAgIC8vcmVzID0gY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIikgKyBcIi8gXCIgKyBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKSArIFwiIChcIitjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKStcInVzZWQpXCI7XG4gICAgICAgIHJlcy5zdG9yYWdlVXNhZ2UgPSBjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKTtcbiAgICAgICAgcmVzLnN0b3JhZ2VVc2FnZSA9IHJlcy5zdG9yYWdlVXNhZ2UgLyAxMDAwMDAwO1xuICAgICAgICByZXMuc3RvcmFnZVVzYWdlID0gcmVzLnN0b3JhZ2VVc2FnZS50b0ZpeGVkKDIpO1xuICAgICAgICByZXMuc3RvcmFnZVRvdGFsID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIik7XG4gICAgICAgIHJlcy5zdG9yYWdlVG90YWwgPSByZXMuc3RvcmFnZVRvdGFsIC8gMTAwMDAwMDtcbiAgICAgICAgcmVzLnN0b3JhZ2VUb3RhbCA9IHJlcy5zdG9yYWdlVG90YWwudG9GaXhlZCgyKTtcbiAgICAgICAgcmVzLnBlcmNlbnRhZ2UgPSBjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0sXG4gICAgICBnZXRTU0lEOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcInNzaWQ9KC4qKVwiKSk7XG4gICAgICAgIHZhciBTU0lEID0gbWF0Y2hbMV07XG4gICAgICAgIFNTSUQgPSBkZWNvZGVVUklDb21wb25lbnQoU1NJRC5yZXBsYWNlKC8uLi9nLCBcIiUkJlwiKSk7XG4gICAgICAgIHJldHVybiBTU0lEO1xuICAgICAgfSxcbiAgICAgIHNldFNTSUQ6IGZ1bmN0aW9uIChuZXdTU0lEKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIGNvbnN0IGVuY29kZWROZXdTU0lEID0gbmV3IEJ1ZmZlcihuZXdTU0lEKS50b1N0cmluZyhcImhleFwiKTsgLy8gQ29udmVydCBpbnRvIEhleFxuICAgICAgICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJzc2lkPSguKilcIikpWzFdLFxuICAgICAgICAgIGVuY29kZWROZXdTU0lELFxuICAgICAgICApO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsIFwidXRmLThcIik7XG4gICAgICB9LFxuICAgICAgZ2V0V2lmaVBhc3N3b3JkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcInBhc3N3b3JkPSguKilcIikpO1xuICAgICAgICB2YXIgcGFzc3dvcmQgPSBtYXRjaFsxXTtcbiAgICAgICAgcmV0dXJuIHBhc3N3b3JkO1xuICAgICAgfSxcbiAgICAgIHNldFdpZmlQYXNzd29yZDogZnVuY3Rpb24gKG5ld1Bhc3N3b3JkKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgIGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcInBhc3N3b3JkPSguKilcIikpWzFdLFxuICAgICAgICAgIG5ld1Bhc3N3b3JkLFxuICAgICAgICApO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsIFwidXRmLThcIik7XG4gICAgICB9LFxuICAgICAgZ2V0V2lmaUNoYW5uZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiY2hhbm5lbD0oLiopXCIpKTtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBtYXRjaFsxXTtcbiAgICAgICAgcmV0dXJuIGNoYW5uZWw7XG4gICAgICB9LFxuICAgICAgc2V0V2lmaUNoYW5uZWw6IGZ1bmN0aW9uIChuZXdDaGFubmVsKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgIGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcImNoYW5uZWw9KC4qKVwiKSlbMV0sXG4gICAgICAgICAgbmV3Q2hhbm5lbCxcbiAgICAgICAgKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCBcInV0Zi04XCIpO1xuICAgICAgfSxcbiAgICAgIGdldFdpZmlCYW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcImJhbmQ9KC4qKVwiKSk7XG5cbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJldHVybiBkZWZhdWx0IHZhbHVlIGlmIHRoZSBiYW5kIHNldHRpbmcgZG9lcyBub3QgZXhpc3RcbiAgICAgICAgICByZXR1cm4gXCIyLjRHSHpcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldFdpZmlCYW5kOiBmdW5jdGlvbiAobmV3QmFuZCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgYmFuZFJlZ2V4ID0gbmV3IFJlZ0V4cChcImJhbmQ9KC4qKVwiKTtcbiAgICAgICAgdmFyIGNoYW5uZWxSZWdleCA9IG5ldyBSZWdFeHAoXCJjaGFubmVsPSguKilcIik7XG4gICAgICAgIHZhciBtYXRjaEJhbmQgPSBkYXRhLm1hdGNoKGJhbmRSZWdleCk7XG4gICAgICAgIHZhciBtYXRjaENoYW5uZWwgPSBkYXRhLm1hdGNoKGNoYW5uZWxSZWdleCk7XG5cbiAgICAgICAgdmFyIG5ld0RhdGEgPSBkYXRhO1xuXG4gICAgICAgIGlmIChtYXRjaEJhbmQpIHtcbiAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBleGlzdGluZyBiYW5kIHNldHRpbmdcbiAgICAgICAgICBuZXdEYXRhID0gbmV3RGF0YS5yZXBsYWNlKGJhbmRSZWdleCwgYGJhbmQ9JHtuZXdCYW5kfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuICAgICAgICAgIG5ld0RhdGEgPSBgJHtuZXdEYXRhLnRyaW0oKX1cXG5iYW5kPSR7bmV3QmFuZH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoQ2hhbm5lbCAmJiBtYXRjaENoYW5uZWxbMV0pIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBjaGFubmVsIHZhbHVlIHRvIGEgbnVtYmVyXG4gICAgICAgICAgdmFyIGN1cnJlbnRDaGFubmVsID0gcGFyc2VJbnQobWF0Y2hDaGFubmVsWzFdLCAxMCk7XG5cbiAgICAgICAgICAvLyBTZXQgY2hhbm5lbCB0byBhIGRlZmF1bHQgMi40R0h6IGNoYW5uZWwgaWYgY3VycmVudCBjaGFubmVsIGlzIGZvciA1R0h6XG4gICAgICAgICAgaWYgKG5ld0JhbmQgPT0gXCIyLjRHSHpcIiAmJiBjdXJyZW50Q2hhbm5lbCA+IDE0KSB7XG4gICAgICAgICAgICBuZXdEYXRhID0gbmV3RGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9MTFgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5ld0JhbmQgPT0gXCI1R0h6XCIgJiYgY3VycmVudENoYW5uZWwgPD0gMTQpIHtcbiAgICAgICAgICAgIG5ld0RhdGEgPSBuZXdEYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD00NGApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgXCJ1dGYtOFwiKTtcbiAgICAgIH0sIC8vICAgJ3NldFdpZmlCYW5kJzogZnVuY3Rpb24obmV3QmFuZCkge1xuICAgICAgLy8gXHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgICAgIC8vIFx0dmFyIGJhbmRSZWdleCA9IG5ldyBSZWdFeHAoJ2JhbmQ9KC4qKScpO1xuICAgICAgLy8gXHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKGJhbmRSZWdleCk7XG5cbiAgICAgIC8vIFx0aWYgKG1hdGNoKSB7XG4gICAgICAvLyBcdCAgLy8gUmVwbGFjZSB0aGUgZXhpc3RpbmcgYmFuZCBzZXR0aW5nXG4gICAgICAvLyBcdCAgdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoYmFuZFJlZ2V4LCBgYmFuZD0ke25ld0JhbmR9YCk7XG4gICAgICAvLyBcdH0gZWxzZSB7XG4gICAgICAvLyBcdCAgLy8gQXBwZW5kIHRoZSBuZXcgYmFuZCBzZXR0aW5nXG4gICAgICAvLyBcdCAgdmFyIG5ld0RhdGEgPSBgJHtkYXRhLnRyaW0oKX1cXG5iYW5kPSR7bmV3QmFuZH1gO1xuICAgICAgLy8gXHR9XG4gICAgICAvLyBcdHZhciBjaGFubmVsUmVnZXggPSBuZXcgUmVnRXhwKCdjaGFubmVsPSguKiknKTtcbiAgICAgIC8vIFx0dmFyIG1hdGNoMiA9IGRhdGEubWF0Y2goY2hhbm5lbFJlZ2V4KTtcbiAgICAgIC8vIFx0aWYgKG1hdGNoMiAmJiBtYXRjaDJbMV0pIHtcbiAgICAgIC8vIFx0XHQvLyBTZXQgY2hhbm5lbCB0byBhIGRlZmF1bHQgMi40R0h6IGNoYW5uZWwgaWYgY3VycmVudCBjaGFubmVsIGlzIGZvciA1R0h6XG4gICAgICAvLyBcdFx0aWYgKG5ld0JhbmQgPT0gXCIyLjRHSHpcIiAmJiBtYXRjaDJbMV0gPiAxNCkge1xuICAgICAgLy8gXHRcdFx0Ly8gQXBwZW5kIHRoZSBuZXcgYmFuZCBzZXR0aW5nXG4gICAgICAvLyBcdFx0XHR2YXIgbmV3RGF0YTIgPSBkYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD0xMWApO1xuICAgICAgLy8gXHRcdH0gZWxzZSBpZiAobmV3QmFuZCA9PSBcIjVHSHpcIiAmJiBtYXRjaDJbMV0gPD0gMTQpIHtcbiAgICAgIC8vIFx0XHRcdHZhciBuZXdEYXRhMiA9IGRhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTQ0YCk7XG4gICAgICAvLyBcdFx0fVxuICAgICAgLy8gXHR9XG4gICAgICAvLyBcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG4gICAgICAvLyAgIH0sXG4gICAgICBnZXRTZXJpYWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiU0VSSUFMPSguKilcIikpO1xuICAgICAgICB2YXIgc2VyaWFsID0gbWF0Y2hbMV07XG4gICAgICAgIHJldHVybiBzZXJpYWw7XG4gICAgICB9LFxuICAgICAgZ2V0T3BlcmF0b3JOYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcGVyYXRvck5hbWU7XG4gICAgICAgIG9wZXJhdG9yTmFtZSA9IGNtZChcbiAgICAgICAgICBcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LW9wZXJhdG9yLW5hbWUgfCBncmVwIC1tMiAnTmFtZSAgICAgICAgICAgICAnIHwgYXdrICd7cHJpbnQgJDN9J1wiLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gb3BlcmF0b3JOYW1lO1xuICAgICAgfSwgLy8gJ2dldFNpZ25hbFN0cmVuZ3RoJzogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gXHR2YXIgc2lnbmFsU3RyZW5ndGg7XG4gICAgICAvLyBcdHNpZ25hbFN0cmVuZ3RoID0gY21kKFwic3VkbyBxbWljbGkgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayAne3ByaW50ICQzLCAkMn0nXCIpO1xuICAgICAgLy8gXHRyZXR1cm4gc2lnbmFsU3RyZW5ndGg7XG4gICAgICAvLyB9LFxuICAgICAgZ2V0U2lnbmFsU3RyZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNpZ25hbFN0cmVuZ3RoO1xuICAgICAgICAvLyBUaGlzIGV4dHJhY3RzIGp1c3QgdGhlIG51bWVyaWMgcGFydCBvZiB0aGUgc2lnbmFsIHN0cmVuZ3RoLlxuICAgICAgICBzaWduYWxTdHJlbmd0aCA9IGNtZChcbiAgICAgICAgICBcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgJ05ldHdvcmsnIHwgYXdrICd7cHJpbnQgJDN9JyB8IGdyZXAgLW9FICdbLTAtOV0rJ1wiLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIENvbnZlcnQgc2lnbmFsIHN0cmVuZ3RoIHRvIGEgcXVhbGl0YXRpdmUgdmFsdWVcbiAgICAgICAgdmFyIHN0cmVuZ3RoVmFsdWUgPSBwYXJzZUludChzaWduYWxTdHJlbmd0aCk7XG4gICAgICAgIHZhciBxdWFsaXR5ID0gXCJVbmtub3duXCI7XG4gICAgICAgIGlmIChzdHJlbmd0aFZhbHVlID49IC03MCkge1xuICAgICAgICAgIHF1YWxpdHkgPSBcIkV4Y2VsbGVudFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmVuZ3RoVmFsdWUgPj0gLTg1KSB7XG4gICAgICAgICAgcXVhbGl0eSA9IFwiR29vZFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmVuZ3RoVmFsdWUgPj0gLTEwMCkge1xuICAgICAgICAgIHF1YWxpdHkgPSBcIkZhaXJcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlIDwgLTEwMCkge1xuICAgICAgICAgIHF1YWxpdHkgPSBcIlBvb3JcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVhbGl0eTtcbiAgICAgIH0sIC8vICdnZXRJc09ubGluZSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFx0dmFyIGlzT25saW5lO1xuICAgICAgLy8gXHRpc09ubGluZSA9IGNtZChcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgLW0xIE5ldHdvcmsgfCBhd2sgJ3twcmludCAkMywgJDJ9J1wiKTtcbiAgICAgIC8vIFx0cmV0dXJuIGlzT25saW5lO1xuICAgICAgLy8gfSxcbiAgICAgIC8vICdnZXRCYW5kJzogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gXHR2YXIgYmFuZDtcbiAgICAgIC8vXHRcdFx0YmFuZCA9IGNtZChcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgLW0xIE5ldHdvcmsgfCBhd2sgXFxcIntwcmludCAkMn1cXFwiIHwgY3V0IC1kXFxcXCcgLWYyXCIpO1xuICAgICAgLy8gXHRyZXR1cm4gYmFuZDtcbiAgICAgIC8vIH0sXG4gICAgICBnZXRBUE46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiQVBOPSguKilcIikpO1xuICAgICAgICB2YXIgQVBOID0gbWF0Y2hbMV07XG4gICAgICAgIHJldHVybiBBUE47XG4gICAgICB9LFxuICAgICAgZ2V0QVBOVXNlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJBUE5fVVNFUk5BTUU9KC4qKVwiKSk7XG4gICAgICAgIHZhciBBUE5Vc2VyID0gbWF0Y2hbMV07XG4gICAgICAgIHJldHVybiBBUE5Vc2VyO1xuICAgICAgfSxcbiAgICAgIGdldEFQTlBhc3N3b3JkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcIkFQTl9QQVNTV09SRD0oLiopXCIpKTtcbiAgICAgICAgdmFyIEFQTlBhc3N3b3JkID0gbWF0Y2hbMV07XG4gICAgICAgIHJldHVybiBBUE5QYXNzd29yZDtcbiAgICAgIH0sXG4gICAgICBnZXRTaW1DYXJkU3RhdHVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzaW1TdGF0dXNSZXN1bHQgPSBcIlVua25vd25cIjsgLy8gRGVmYXVsdCBzdGF0dXNcblxuICAgICAgICAvLyBGdW5jdGlvbiB0byBleGVjdXRlIGNvbW1hbmQgYW5kIGhhbmRsZSBlcnJvcnNcbiAgICAgICAgZnVuY3Rpb24gZXhlY3V0ZUNvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNtZChjb21tYW5kKTsgLy8gRXhlY3V0ZSB0aGUgY29tbWFuZFxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwib2JqZWN0XCIgJiYgcmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIC8vIENoZWNrIGlmIHJlc3VsdCBpcyBhbiBlcnJvciBvYmplY3RcbiAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3JcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gSGFuZGxlIGV4Y2VwdGlvbnMgaWYgY29tbWFuZCBleGVjdXRpb24gZmFpbHNcbiAgICAgICAgICAgIHJldHVybiBcIkVycm9yXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7IC8vIFJldHVybiB0aGUgcmVzdWx0IGlmIG5vIGVycm9yc1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXhlY3V0ZSBTSU0gY2FyZCBzdGF0dXMgY2hlY2sgY29tbWFuZFxuICAgICAgICBsZXQgc2ltU3RhdHVzID0gZXhlY3V0ZUNvbW1hbmQoXG4gICAgICAgICAgXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tdWltLWdldC1jYXJkLXN0YXR1cyB8IGdyZXAgJ0NhcmQgc3RhdGU6J1wiLFxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNJTSBjYXJkIHN0YXR1czpcIiwgc2ltU3RhdHVzKTsgLy8gTG9nIHRoZSByYXcgb3V0cHV0XG4gICAgICAgIC8vIFByb2Nlc3MgdGhlIG91dHB1dCBhbmQgZGV0ZXJtaW5lIFNJTSBjYXJkIHN0YXR1c1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc2ltU3RhdHVzLmluY2x1ZGVzKFwibm8tYXRyLXJlY2VpdmVkXCIpIHx8XG4gICAgICAgICAgc2ltU3RhdHVzLmluY2x1ZGVzKFwibm90LWluc2VydGVkXCIpXG4gICAgICAgICkge1xuICAgICAgICAgIHNpbVN0YXR1c1Jlc3VsdCA9IFwiTm8gU0lNIGNhcmRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoXCJlcnJvclwiKSkge1xuICAgICAgICAgIHNpbVN0YXR1c1Jlc3VsdCA9IHNpbVN0YXR1czsgLy8gVXNlIHRoZSBlcnJvciBtZXNzYWdlIG9yIG5vIFNJTSBkZXRlY3RlZCBtZXNzYWdlXG4gICAgICAgIH0gZWxzZSBpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKFwicHJlc2VudFwiKSkge1xuICAgICAgICAgIHNpbVN0YXR1c1Jlc3VsdCA9IFwiT0tcIjtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBzaW1TdGF0dXMuaW5jbHVkZXMoXCJsb2NrZWRcIikgfHxcbiAgICAgICAgICBzaW1TdGF0dXMuaW5jbHVkZXMoXCJwaW4tcmVxdWlyZWRcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2ltU3RhdHVzUmVzdWx0ID0gXCJTSU0gY2FyZCBsb2NrZWQsIFBJTiByZXF1aXJlZFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNpbVN0YXR1c1Jlc3VsdCA9IFwiVW5rbm93blwiOyAvLyBGb3Igb3RoZXIgc3RhdHVzZXNcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2ltU3RhdHVzUmVzdWx0O1xuICAgICAgfSxcbiAgICAgIGdldFNpbVBpbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJTSU1fUElOPSguKilcIikpO1xuICAgICAgICB2YXIgU2ltUGluID0gbWF0Y2hbMV07XG4gICAgICAgIHJldHVybiBTaW1QaW47XG4gICAgICB9LFxuICAgICAgc2V0U2ltUGluOiBmdW5jdGlvbiAoUElOKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgIGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcIlNJTV9QSU49LipcIikpLFxuICAgICAgICAgIFwiU0lNX1BJTj1cIiArIFBJTixcbiAgICAgICAgKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCBcInV0Zi04XCIpO1xuICAgICAgfSxcbiAgICAgIHNldEFQTjogZnVuY3Rpb24gKEFQTiwgdXNlciwgcGFzc3dvcmQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiQVBOPS4qXCIpKSxcbiAgICAgICAgICBcIkFQTj1cIiArIEFQTixcbiAgICAgICAgKTtcbiAgICAgICAgLy8gdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49KC4qKScpKVsxXSwgQVBOKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCBcInV0Zi04XCIpO1xuICAgICAgfSxcbiAgICAgIHNldEFQTlVzZXI6IGZ1bmN0aW9uIChBUE5Vc2VyKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgIGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcIkFQTl9VU0VSTkFNRT0uKlwiKSksXG4gICAgICAgICAgXCJBUE5fVVNFUk5BTUU9XCIgKyBBUE5Vc2VyLFxuICAgICAgICApO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsIFwidXRmLThcIik7XG4gICAgICB9LFxuICAgICAgc2V0QVBOUGFzc3dvcmQ6IGZ1bmN0aW9uIChBUE5QYXNzd29yZCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJBUE5fUEFTU1dPUkQ9LipcIikpLFxuICAgICAgICAgIFwiQVBOX1BBU1NXT1JEPVwiICsgQVBOUGFzc3dvcmQsXG4gICAgICAgICk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgXCJ1dGYtOFwiKTtcbiAgICAgIH0sXG4gICAgICBnZXRSZW1vdGVTdGF0dXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgcmVzID0gY21kKFxuICAgICAgICAgIFwic3lzdGVtY3RsIGlzLWFjdGl2ZSByZW1vdGUtaW90LnNlcnZpY2UgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gMSB8fCBlY2hvIDBcIixcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJlc1swXSA9PSBcIjFcIikge1xuICAgICAgICAgIC8vIFswXSBpcyBhIGhhY2sgYmVjYXVzZSB0aGUgcmVzdWx0IHJlcyBoYXMgb25lIGV4dHJhIGNoYXJhY3RlclxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGdldEF1dG9TeW5jU3RhdHVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHJlcyA9IGNtZChcbiAgICAgICAgICBcInN5c3RlbWN0bCBpcy1hY3RpdmUgYXV0b3N5bmMuc2VydmljZSA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyAxIHx8IGVjaG8gMFwiLFxuICAgICAgICApO1xuICAgICAgICBpZiAocmVzWzBdID09IFwiMVwiKSB7XG4gICAgICAgICAgLy8gWzBdIGlzIGEgaGFjayBiZWNhdXNlIHRoZSByZXN1bHQgcmVzIGhhcyBvbmUgZXh0cmEgY2hhcmFjdGVyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgZ2V0U2hhcmVJbnRlcm5ldFZpYUV0aGVybmV0U3RhdHVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpc1NoYXJpbmc7XG4gICAgICAgIGlzU2hhcmluZyA9IGNtZChcbiAgICAgICAgICBcIihzdWRvIGlwdGFibGVzIC10IG5hdCAtTCBQT1NUUk9VVElORyAtdiAtbiB8IGdyZXAgLXEgJ01BU1FVRVJBREUgIGFsbCAgLS0gICogICAgICBldGgwJyAmJiBpcCBsaW5rIHNob3cgZXRoMCB8IGdyZXAgLXEgJ3N0YXRlIFVQJykgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIixcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGlzU2hhcmluZztcbiAgICAgIH0sXG4gICAgICBnZXRTaGFyZUludGVybmV0VmlhTW9iaWxlU3RhdHVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpc1NoYXJpbmc7XG4gICAgICAgIGlzU2hhcmluZyA9IGNtZChcbiAgICAgICAgICBcIihzdWRvIGlwdGFibGVzIC10IG5hdCAtTCBQT1NUUk9VVElORyAtdiAtbiB8IGdyZXAgLXEgJ01BU1FVRVJBREUgIGFsbCAgLS0gICogICAgICB3d2FuMCcgJiYgaXAgbGluayBzaG93IHd3YW4wIHwgZ3JlcCAtcSAnc3RhdGUgVVAnKSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gaXNTaGFyaW5nO1xuICAgICAgfSwgLy8gJ2FjdGl2YXRlSW50ZXJuZXRTaGFyaW5nJzogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBcdHZhciByZXM7XG4gICAgICAvLyBcdHJlcyA9IGNtZChcInN1ZG8gd2lmaS1hcC5jb25maWcgc2V0IHNoYXJlLmRpc2FibGVkPWZhbHNlXCIpO1xuICAgICAgLy8gXHRyZXR1cm4gcmVzO1xuICAgICAgLy8gfSxcbiAgICAgIC8vICdkaXNhY3RpdmF0ZUludGVybmV0U2hhcmluZyc6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gXHR2YXIgcmVzO1xuICAgICAgLy8gXHRyZXMgPSBjbWQoXCJzdWRvIHdpZmktYXAuY29uZmlnIHNldCBzaGFyZS5kaXNhYmxlZD10cnVlXCIpO1xuICAgICAgLy8gXHRyZXR1cm4gcmVzO1xuICAgICAgLy8gfSxcbiAgICAgIGFjdGl2YXRlUmVtb3RlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0YXJ0IHJlbW90ZS1pb3Quc2VydmljZVwiKTtcbiAgICAgICAgcmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGVuYWJsZSByZW1vdGUtaW90LnNlcnZpY2VcIik7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LFxuICAgICAgZGlzYWN0aXZhdGVSZW1vdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgcmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RvcCByZW1vdGUtaW90LnNlcnZpY2VcIik7XG4gICAgICAgIHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBkaXNhYmxlIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0sXG4gICAgICBhY3RpdmF0ZUF1dG9TeW5jOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0YXJ0IGF1dG9zeW5jLnNlcnZpY2VcIik7XG4gICAgICAgIHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgYXV0b3N5bmMuc2VydmljZVwiKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0sXG4gICAgICBkaXNhY3RpdmF0ZUF1dG9TeW5jOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgYXV0b3N5bmMuc2VydmljZVwiKTtcbiAgICAgICAgcmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGRpc2FibGUgYXV0b3N5bmMuc2VydmljZVwiKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0sXG4gICAgICBnZXRCYXR0ZXJ5U3RhdHVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHZhciBzY3JpcHRzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5zY3JpcHRzUGF0aDtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiQkFUVEVSWV9NT0RVTEU9KC4qKVwiKSk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHZhciBiYXR0ZXJ5TW9kdWxlID0gbWF0Y2hbMV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhdHRlcnlNb2R1bGUgJiYgYmF0dGVyeU1vZHVsZSA9PSBcIlBpU3VnYXJcIikge1xuICAgICAgICAgIHJlcyA9IGNtZChcInB5dGhvbjMgXCIgKyBzY3JpcHRzUGF0aCArIFwiL3Bpc3VnYXJfc3RhdHVzLnB5XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcyA9IGNtZChcInB5dGhvbjMgXCIgKyBzY3JpcHRzUGF0aCArIFwiL3BpanVpY2Vfc3RhdHVzLnB5XCIpO1xuICAgICAgICAgIC8vcmVzID0gY21kKFwicHl0aG9uMyAvaG9tZS91YnVudHUvc2NyaXB0cy9waWp1aWNlX3N0YXR1cy5weVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSwgLy8gJ2dldElzT25saW5lJzogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBcdHZhciByZXM7XG4gICAgICAvLyBcdHZhciBzY3JpcHRzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5zY3JpcHRzUGF0aDtcbiAgICAgIC8vIFx0Ly8gTWFrZSBzdXJlIHlvdXIgc2NyaXB0IGlzIGV4ZWN1dGFibGUsIGUuZy4sIGNobW9kICt4IGNoZWNrX2ludGVybmV0LnNoXG4gICAgICAvLyBcdHJlcyA9IGNtZChcImJhc2ggXCIgKyBzY3JpcHRzUGF0aCArIFwiL2NoZWNrX2ludGVybmV0LnNoXCIpOyAvLyBSZXBsYWNlICdiYXNoJyB3aXRoICdzaCcgaWYgbmVlZGVkXG4gICAgICAvLyBcdC8vIFRoZSBzY3JpcHQgcmV0dXJucyBcInRydWVcIiBvciBcImZhbHNlXCIgYXMgYSBzdHJpbmcsIHNvIHdlIGNvbXBhcmUgdGhlIHJlc3VsdCBkaXJlY3RseVxuICAgICAgLy8gXHRyZXR1cm4gcmVzLnRyaW0oKSA9PT0gXCJ0cnVlXCI7IC8vIFRoaXMgY29udmVydHMgdGhlIHN0cmluZyB0byBhIGJvb2xlYW5cbiAgICAgIC8vIH0sXG4gICAgICBnZXRJc09ubGluZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcmVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IGNtZChcInBpbmcgLWMgMSBnb29nbGUuY29tXCIpO1xuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBwaW5nIGNvbW1hbmQgd2FzIHN1Y2Nlc3NmdWwgYmFzZWQgb24gdGhlIG91dHB1dFxuICAgICAgICAgIGxldCBpc09ubGluZSA9XG4gICAgICAgICAgICByZXMuaW5jbHVkZXMoXCIxIHBhY2tldHMgcmVjZWl2ZWRcIikgfHwgcmVzLmluY2x1ZGVzKFwiMSByZWNlaXZlZFwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk9ubGluZSBzdGF0dXM6XCIsIGlzT25saW5lKTsgLy8gQ29ycmVjdGx5IGxvZ2dpbmcgdGhlIGJvb2xlYW4gcmVzdWx0XG4gICAgICAgICAgcmV0dXJuIGlzT25saW5lOyAvLyBEaXJlY3RseSByZXR1cm4gdGhlIGJvb2xlYW4gdmFsdWVcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhbiBlcnJvciBvY2N1cnMgKHdoaWNoIGNvdWxkIGluY2x1ZGUgYmVpbmcgdW5hYmxlIHRvIHJ1biB0aGUgcGluZyBjb21tYW5kKSwgYXNzdW1lIG9mZmxpbmVcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9yIG9mZmxpbmU6XCIsIGVycm9yKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIEFzc3VtZSBvZmZsaW5lIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldEV0aDBJUDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBHZXQgSVAgb2YgYm94XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZXN1bHQgOiBcIitcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuICAgICAgICByZXMgPSBjbWQoXG4gICAgICAgICAgXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIixcbiAgICAgICAgKTtcbiAgICAgICAgLy9yZXMgPSBjbWQoXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXAgOiBcIitcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG4gICAgICAgIC8vcmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcbiAgICAgICAgLy9yZXMgPSBjbWQoXCJpZmNvbmZpZyBcIitpbnRlcmZhY2UrXCIgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSxcbiAgICAgIGdldFd3YW4wSVA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gR2V0IElQIG9mIGJveFxuICAgICAgICB2YXIgcmVzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVzdWx0IDogXCIrXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcbiAgICAgICAgcmVzID0gY21kKFxuICAgICAgICAgIFwiaXAgYWRkciBzaG93IHd3YW4wIHwgZ3JlcCBcXFwiaW5ldFxcXFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vcmVzID0gY21kKFwiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImlwIDogXCIrXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuICAgICAgICAvL3JlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG4gICAgICAgIC8vcmVzID0gY21kKFwiaWZjb25maWcgXCIraW50ZXJmYWNlK1wiIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0sXG5cbiAgICAgIGdldEJlZWtlZU9zVmVyc2lvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJCRUVLRUVfT1NfVkVSU0lPTj0oLiopXCIpKTtcbiAgICAgICAgdmFyIHNlcmlhbCA9IG1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gc2VyaWFsO1xuICAgICAgfSxcbiAgICAgIGdldEJlZWtlZUhvbWVWZXJzaW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpzb24gPSBKU09OLnBhcnNlKEFzc2V0cy5nZXRUZXh0KFwidmVyc2lvbi5qc29uXCIpKTtcbiAgICAgICAgcmV0dXJuIGpzb24udmVyc2lvbjtcbiAgICAgIH0sXG4gICAgICByZXN0YXJ0TW9iaWxlQ29ubmVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCByZXN0YXJ0IG1vYmlsZV9jb25uZWN0LnNlcnZpY2VcIik7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIChcIlwiKTtcbiAgICAgIH0sXG4gICAgICBnZXRJbnRlcm5ldEludGVyZmFjZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcmVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IGNtZChcImlwIHJvdXRlIGdldCAxLjIuMy40IHwgYXdrICd7cHJpbnQgJDU7IGV4aXR9J1wiKTsgLy8gRXhlY3V0ZSB0aGUgY29tbWFuZFxuICAgICAgICAgIGlmIChyZXMudHJpbSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRyaW0oKTsgLy8gUmV0dXJuIHRoZSBjbGVhbmVkLXVwIHJlc3VsdCBpZiBub3QgZW1wdHlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiVW5rbm93blwiOyAvLyBSZXR1cm4gYSBkZWZhdWx0IG1lc3NhZ2UgaWYgdGhlIHJlc3VsdCBpcyBlbXB0eVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBIYW5kbGUgY2FzZXMgd2hlcmUgdGhlIGNvbW1hbmQgZmFpbHMgb3IgaXMgbm90IGZvdW5kXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIGludGVybmV0IGludGVyZmFjZTpcIiwgZXJyb3IpO1xuICAgICAgICAgIHJldHVybiBcIkVycm9yXCI7IC8vIFJldHVybiBhbiBlcnJvciBtZXNzYWdlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXR3bGFuaW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFJldHVybiB0cnVlIGlmIHRoZSB3bGFuaW50IGludGVyZmFjZSBleGlzdHMgb24gdGhlIG1hY2hpbmUuIE1ha2Ugc3VyZSB0byByZXR1cm4gYSBib29sZWFuIHZhbHVlLlxuICAgICAgICBsZXQgcmVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IGNtZChcImlwIGxpbmsgc2hvdyB3bGFuaW50XCIpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldFdpZmlOZXR3b3JrczogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2lmaSA9IHJlcXVpcmUoXCJub2RlLXdpZmlcIik7XG4gICAgICAgIHdpZmkuaW5pdCh7XG4gICAgICAgICAgaWZhY2U6IFwid2xhbmludFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIHdpZmkgc2NhblwiKTtcbiAgICAgICAgICB3aWZpLnNjYW4oKGVycm9yLCBuZXR3b3JrcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzY2FubmluZyBuZXR3b3JrczpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2lmaSBzY2FuIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHlcIik7XG5cbiAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgTWFwIHRvIHN0b3JlIHVuaXF1ZSBuZXR3b3Jrc1xuICAgICAgICAgICAgICBjb25zdCB1bmlxdWVOZXR3b3JrcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAgICAgICBuZXR3b3Jrcy5mb3JFYWNoKChuZXR3b3JrKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHN0cmVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChuZXR3b3JrLnF1YWxpdHkgPiA4MCkge1xuICAgICAgICAgICAgICAgICAgc3RyZW5ndGggPSBcIndpZmktNFwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV0d29yay5xdWFsaXR5ID4gNTUpIHtcbiAgICAgICAgICAgICAgICAgIHN0cmVuZ3RoID0gXCJ3aWZpLTNcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ldHdvcmsucXVhbGl0eSA+IDMwKSB7XG4gICAgICAgICAgICAgICAgICBzdHJlbmd0aCA9IFwid2lmaS0yXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHN0cmVuZ3RoID0gXCJ3aWZpLTFcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSB1bmlxdWUga2V5IHVzaW5nIFNTSUQgYW5kIGZpcnN0IDE1IGNoYXJzIG9mIE1BQ1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGAke25ldHdvcmsuc3NpZH06JHtuZXR3b3JrLm1hYy5zdWJzdHJpbmcoMCwgMTUpfWA7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGtleSBkb2Vzbid0IGV4aXN0IG9yIHRoZSBxdWFsaXR5IGlzIGhpZ2hlciwgYWRkL3VwZGF0ZSB0aGUgbmV0d29ya1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICF1bmlxdWVOZXR3b3Jrcy5oYXMoa2V5KSB8fFxuICAgICAgICAgICAgICAgICAgbmV0d29yay5xdWFsaXR5ID4gdW5pcXVlTmV0d29ya3MuZ2V0KGtleSkucXVhbGl0eVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgdW5pcXVlTmV0d29ya3Muc2V0KGtleSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuZXR3b3JrLnNzaWQsXG4gICAgICAgICAgICAgICAgICAgIHN0cmVuZ3RoOiBzdHJlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHk6IG5ldHdvcmsuc2VjdXJpdHksXG4gICAgICAgICAgICAgICAgICAgIHF1YWxpdHk6IG5ldHdvcmsucXVhbGl0eSwgLy8gS2VlcCB0aGlzIGZvciBjb21wYXJpc29uXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIC8vIENvbnZlcnQgTWFwIHZhbHVlcyB0byBhcnJheVxuICAgICAgICAgICAgICBjb25zdCB1bmlxdWVOZXR3b3Jrc0FycmF5ID0gQXJyYXkuZnJvbSh1bmlxdWVOZXR3b3Jrcy52YWx1ZXMoKSk7XG5cbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBxdWFsaXR5IHByb3BlcnR5IGFzIGl0J3Mgbm8gbG9uZ2VyIG5lZWRlZCBpbiB0aGUgZmluYWwgb3V0cHV0XG4gICAgICAgICAgICAgIHVuaXF1ZU5ldHdvcmtzQXJyYXkuZm9yRWFjaCgobmV0d29yaykgPT4gZGVsZXRlIG5ldHdvcmsucXVhbGl0eSk7XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZSh1bmlxdWVOZXR3b3Jrc0FycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgY29ubmVjdFRvV2lmaTogZnVuY3Rpb24gKHNzaWQsIHBhc3N3b3JkKSB7XG4gICAgICAgIHZhciB3aWZpID0gcmVxdWlyZShcIm5vZGUtd2lmaVwiKTtcbiAgICAgICAgd2lmaS5pbml0KHtcbiAgICAgICAgICBpZmFjZTogXCJ3bGFuaW50XCIsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBSZXR1cm4gYm9vbGVhbnMsIFRydWUgaWYgdGhlIGNvbm5lY3Rpb24gaXMgc3VjY2Vzc2Z1bCwgb3RoZXJ3aXNlIHJldHVybiBGYWxzZVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHdpZmkuY29ubmVjdCh7IHNzaWQ6IHNzaWQsIHBhc3N3b3JkOiBwYXNzd29yZCB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byB3aWZpOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gd2lmaTpcIiwgc3NpZCk7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGRpc2Nvbm5lY3RXaWZpOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3aWZpID0gcmVxdWlyZShcIm5vZGUtd2lmaVwiKTtcbiAgICAgICAgd2lmaS5pbml0KHtcbiAgICAgICAgICBpZmFjZTogXCJ3bGFuaW50XCIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHdpZmkuZGlzY29ubmVjdCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGlzY29ubmVjdGluZyBmcm9tIHdpZmk6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpc2Nvbm5lY3RlZCBmcm9tIHdpZmlcIik7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGZvcmdldFdpZmk6IGZ1bmN0aW9uIChzc2lkKSB7XG4gICAgICAgIHZhciB3aWZpID0gcmVxdWlyZShcIm5vZGUtd2lmaVwiKTtcbiAgICAgICAgd2lmaS5pbml0KHtcbiAgICAgICAgICBpZmFjZTogXCJ3bGFuaW50XCIsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBSZXR1cm4gYm9vbGVhbnMsIFRydWUgaWYgdGhlIGNvbm5lY3Rpb24gaXMgc3VjY2Vzc2Z1bCwgb3RoZXJ3aXNlIHJldHVybiBGYWxzZVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHdpZmkuZGVsZXRlQ29ubmVjdGlvbih7IHNzaWQ6IHNzaWQgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gd2lmaTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIHdpZmk6XCIsIHNzaWQpO1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBnZXRDbGllbnRTU0lEOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzc2lkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHNzaWQgPSBjbWQoXCJpd2dldGlkIC1yXCIpLnRyaW0oKTtcbiAgICAgICAgICAvLyBDaGVjayBpZiBzc2lkIGlzIG5vdCBlbXB0eSBhbmQgaXMgYSBzdHJpbmdcbiAgICAgICAgICBpZiAodHlwZW9mIHNzaWQgPT09IFwic3RyaW5nXCIgJiYgc3NpZCAhPT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuIHNzaWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJldHVybiBcIk5vdCBjb25uZWN0ZWRcIiBpZiBzc2lkIGlzIGVtcHR5IG9yIG5vdCBhIHN0cmluZ1xuICAgICAgICAgICAgcmV0dXJuIFwiTm90IGNvbm5lY3RlZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBSZXR1cm4gXCJOb3QgY29ubmVjdGVkXCIgaW4gY2FzZSBvZiBhbnkgZXJyb3JcbiAgICAgICAgICByZXR1cm4gXCJOb3QgY29ubmVjdGVkXCI7XG4gICAgICAgIH1cbiAgICAgIH0sIC8vICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAvLyBcdC8vIENvbW1hbmQgdG8gbGlzdCBGT1JXQVJEIHJ1bGVzXG4gICAgICAvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLW4gLS1saW5lLW51bWJlcic7XG5cbiAgICAgIC8vIFx0Y21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAvLyBcdFx0aWYgKGVycm9yIHx8IHN0ZGVycikge1xuICAgICAgLy8gXHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke2Vycm9yIHx8IHN0ZGVycn1gKTtcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IgfHwgbmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuICAgICAgLy8gXHRcdFx0cmV0dXJuO1xuICAgICAgLy8gXHRcdH1cblxuICAgICAgLy8gXHRcdC8vIENoZWNrIGZvciBnZW5lcmFsIGludGVybmV0IHNoYXJpbmcgcnVsZXNcbiAgICAgIC8vIFx0XHR2YXIgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgPSBzdGRvdXQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIGV0aDAnKSAmJiBzdGRvdXQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcbiAgICAgIC8vIFx0XHRjb25zb2xlLmxvZyhcImlzR2VuZXJhbFNoYXJpbmdFbmFibGVkOiBcIitpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCk7XG4gICAgICAvLyBcdFx0Ly8gRXh0cmFjdCBNQUMgYWRkcmVzcyBydWxlc1xuICAgICAgLy8gXHRcdHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIGV0aDAvO1xuICAgICAgLy8gXHRcdHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuICAgICAgLy8gXHRcdC8vIERldGVybWluZSB0aGUgc3RhdHVzIGJhc2VkIG9uIHRoZSBydWxlcyBmb3VuZFxuICAgICAgLy8gXHRcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcbiAgICAgIC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDFcIik7XG4gICAgICAvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGFsbFxuICAgICAgLy8gXHRcdFx0aWYgKGNhbGxiYWNrKSB7Y29uc29sZS5sb2coXCJzdGVwMTJcIik7IGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9KTt9XG4gICAgICAvLyBcdFx0fSBlbHNlIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgLy8gXHRcdFx0Y29uc29sZS5sb2coXCJzdGVwMlwiKTtcblxuICAgICAgLy8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzXG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3Igc3BlY2lmaWMgTUFDJywgbWFjQWRkcmVzczogbWF0Y2hbMV0gfSk7XG4gICAgICAvLyBcdFx0fSBlbHNlIHtcbiAgICAgIC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDNcIik7XG5cbiAgICAgIC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWRcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfSk7XG4gICAgICAvLyBcdFx0fVxuICAgICAgLy8gXHR9KTtcbiAgICAgIC8vIH0sXG5cbiAgICAgIC8vICAgJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0JzogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBcdGNvbnNvbGUubG9nKCdTdGFydGluZyB0byBnZXQgaW50ZXJuZXQgc2hhcmluZyBzdGF0dXMgZm9yIEV0aGVybmV0Li4uJyk7XG4gICAgICAvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLW4gLS1saW5lLW51bWJlcic7XG5cbiAgICAgIC8vIFx0Ly8gU2luY2UgY21kIGlzIGFscmVhZHkgd3JhcHBlZCBieSBNZXRlb3Iud3JhcEFzeW5jKGV4ZWMpLFxuICAgICAgLy8gXHQvLyBpdCBzaG91bGQgcmV0dXJuIHsgc3Rkb3V0LCBzdGRlcnIgfSBkaXJlY3RseS5cbiAgICAgIC8vIFx0dHJ5IHtcbiAgICAgIC8vIFx0ICB2YXIgeyBzdGRvdXQsIHN0ZGVyciB9ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblxuICAgICAgLy8gXHQgIGlmIChzdGRlcnIpIHtcbiAgICAgIC8vIFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIEZPUldBUkQgcnVsZXM6ICR7c3RkZXJyfWApO1xuICAgICAgLy8gXHRcdC8vIEl0J3MgYmV0dGVyIHRvIHJldHVybiBhIG1lYW5pbmdmdWwgZXJyb3IgdG8gdGhlIGNsaWVudC5cbiAgICAgIC8vIFx0XHRyZXR1cm4geyBlcnJvcjogXCJFcnJvciBsaXN0aW5nIEZPUldBUkQgcnVsZXNcIiwgZGV0YWlsczogc3RkZXJyIH07XG4gICAgICAvLyBcdCAgfVxuXG4gICAgICAvLyBcdCAgY29uc29sZS5sb2coJ0FuYWx5emluZyBpcHRhYmxlcyBGT1JXQVJEIHJ1bGVzIG91dHB1dC4uLicpO1xuICAgICAgLy8gXHQgIC8vIENoZWNrIGZvciBnZW5lcmFsIGludGVybmV0IHNoYXJpbmcgcnVsZXNcbiAgICAgIC8vIFx0ICB2YXIgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgPSBzdGRvdXQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIGV0aDAnKSAmJiBzdGRvdXQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcbiAgICAgIC8vIFx0ICBjb25zb2xlLmxvZyhgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQ6ICR7aXNHZW5lcmFsU2hhcmluZ0VuYWJsZWR9YCk7XG5cbiAgICAgIC8vIFx0ICAvLyBFeHRyYWN0IE1BQyBhZGRyZXNzIHJ1bGVzXG4gICAgICAvLyBcdCAgdmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2UgZXRoMC87XG4gICAgICAvLyBcdCAgdmFyIG1hdGNoID0gc3Rkb3V0Lm1hdGNoKG1hY0FkZHJlc3NSdWxlUmVnZXgpO1xuICAgICAgLy8gXHQgIGNvbnNvbGUubG9nKGBNQUMgYWRkcmVzcyBmb3VuZDogJHttYXRjaCA/IG1hdGNoWzFdIDogJ05vbmUnfWApO1xuXG4gICAgICAvLyBcdCAgLy8gRGV0ZXJtaW5lIHRoZSBzdGF0dXMgYmFzZWQgb24gdGhlIHJ1bGVzIGZvdW5kXG4gICAgICAvLyBcdCAgaWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuICAgICAgLy8gXHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGFsbC4nKTtcbiAgICAgIC8vIFx0XHRyZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH07XG4gICAgICAvLyBcdCAgfSBlbHNlIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgLy8gXHRcdGNvbnNvbGUubG9nKGBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGEgc3BlY2lmaWMgTUFDIGFkZHJlc3M6ICR7bWF0Y2hbMV19YCk7XG4gICAgICAvLyBcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3Igc3BlY2lmaWMgTUFDJywgbWFjQWRkcmVzczogbWF0Y2hbMV0gfTtcbiAgICAgIC8vIFx0ICB9IGVsc2Uge1xuICAgICAgLy8gXHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIGlzIGRpc2FibGVkIG9yIG5vdCBjb25maWd1cmVkIGFzIGV4cGVjdGVkLicpO1xuICAgICAgLy8gXHRcdHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuICAgICAgLy8gXHQgIH1cbiAgICAgIC8vIFx0fSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFx0ICBjb25zb2xlLmVycm9yKGBDb21tYW5kIGV4ZWN1dGlvbiBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgIC8vIFx0ICAvLyBJdCdzIGJldHRlciB0byByZXR1cm4gYSBtZWFuaW5nZnVsIGVycm9yIHRvIHRoZSBjbGllbnQuXG4gICAgICAvLyBcdCAgcmV0dXJuIHsgZXJyb3I6IFwiQ29tbWFuZCBleGVjdXRpb24gZXJyb3JcIiwgZGV0YWlsczogZXJyb3IudG9TdHJpbmcoKSB9O1xuICAgICAgLy8gXHR9XG4gICAgICAvLyAgIH0sXG5cbiAgICAgIC8vICAgJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0JzogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuICAgICAgLy8gXHR2YXIgY29tbWFuZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cbiAgICAgIC8vIFx0aWYgKCFjb21tYW5kUmVzdWx0KSB7XG4gICAgICAvLyBcdCAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG4gICAgICAvLyBcdH1cblxuICAgICAgLy8gXHR2YXIgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSBldGgwJykgJiYgY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuICAgICAgLy8gXHR2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSBldGgwLztcbiAgICAgIC8vIFx0dmFyIG1hdGNoID0gY29tbWFuZFJlc3VsdC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuICAgICAgLy8gXHRpZiAoaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgJiYgIW1hdGNoKSB7XG4gICAgICAvLyBcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuICAgICAgLy8gXHR9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgICAvLyBcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3Igc3BlY2lmaWMgTUFDJywgbWFjQWRkcmVzczogbWF0Y2hbMV0gfTtcbiAgICAgIC8vIFx0fSBlbHNlIHtcbiAgICAgIC8vIFx0ICByZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcbiAgICAgIC8vIFx0fVxuICAgICAgLy8gICB9LFxuXG4gICAgICBnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSBcInN1ZG8gaXB0YWJsZXMgLVMgRk9SV0FSRFwiO1xuXG4gICAgICAgIHZhciBjb21tYW5kUmVzdWx0ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblxuICAgICAgICBpZiAoIWNvbW1hbmRSZXN1bHQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuICAgICAgICAgICAgXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLFxuICAgICAgICAgICAgXCJUaGUgY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBmb3IgdGhlIHNwZWNpZmljIHJ1bGUgaW5kaWNhdGluZyBpbnRlcm5ldCBzaGFyaW5nIGZyb20gd2xhbjAgdG8gZXRoMFxuICAgICAgICB2YXIgc2hhcmluZ0Zyb21XbGFuVG9FdGggPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKFxuICAgICAgICAgIFwiLUEgRk9SV0FSRCAtaSB3bGFuMCAtbyBldGgwIC1qIEFDQ0VQVFwiLFxuICAgICAgICApO1xuICAgICAgICB2YXIgc2hhcmluZ1RvV2xhbkZyb21FdGhFc3RhYmxpc2hlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoXG4gICAgICAgICAgXCItQSBGT1JXQVJEIC1pIGV0aDAgLW8gd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVFwiLFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChzaGFyaW5nRnJvbVdsYW5Ub0V0aCAmJiBzaGFyaW5nVG9XbGFuRnJvbUV0aEVzdGFibGlzaGVkKSB7XG4gICAgICAgICAgLy8gSWYgYXQgbGVhc3Qgb25lIHBhaXIgb2YgcnVsZXMgZXhpc3RzLCBpbnRlcm5ldCBzaGFyaW5nIGlzIGNvbnNpZGVyZWQgZW5hYmxlZC5cbiAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IFwiZW5hYmxlZCBmb3IgYWxsXCIsIG1hY0FkZHJlc3M6IG51bGwgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IFwiZGlzYWJsZWRcIiwgbWFjQWRkcmVzczogbnVsbCB9O1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBlbmFibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBpcHRhYmxlc0NvbW1hbmRzID0gW1xuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVFwiLFxuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFRcIixcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1hcHBlbmQgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERVwiLFxuICAgICAgICAgIFwic3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlXCIsXG4gICAgICAgIF0uam9pbihcIiAmJiBcIik7XG5cbiAgICAgICAgY21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0ZGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkludGVybmV0IHNoYXJpbmcgdmlhIEV0aGVybmV0IGVuYWJsZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGRpc2FibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIC8vIERlZmluZSBhIGxpc3Qgb2YgY29tbWFuZHMgdG8gcmVwZWF0ZWRseSBhdHRlbXB0IGRlbGV0aW9uLlxuICAgICAgICB2YXIgaXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IFtcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFRcIixcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUXCIsXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREVcIixcbiAgICAgICAgICBcInN1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZVwiLFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYSBjb21tYW5kIGFuZCByZWN1cnNpdmVseSBjYWxsIGl0c2VsZiBpZiB0aGUgY29tbWFuZCB3YXMgc3VjY2Vzc2Z1bCAocnVsZSB3YXMgZm91bmQgYW5kIGRlbGV0ZWQpLlxuICAgICAgICBmdW5jdGlvbiBleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGNtZChjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVycm9yLCB0aGUgcnVsZSB3YXMgZm91bmQgYW5kIGRlbGV0ZWQsIHNvIHRyeSBhZ2Fpbi5cbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhbiBlcnJvciwgaXQgbGlrZWx5IG1lYW5zIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlIGV4aXN0LCBzbyBjYWxsIHRoZSBkb25lQ2FsbGJhY2suXG4gICAgICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXhlY3V0ZSBkZWxldGlvbiBmb3IgZWFjaCBjb21tYW5kIGFuZCB0cmFjayBjb21wbGV0aW9uLlxuICAgICAgICB2YXIgdGFza3NDb21wbGV0ZWQgPSAwO1xuICAgICAgICBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcbiAgICAgICAgICBleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tzQ29tcGxldGVkKys7XG4gICAgICAgICAgICAvLyBPbmNlIGFsbCBkZWxldGlvbiB0YXNrcyBhcmUgZG9uZSwgc2F2ZSB0aGUgaXB0YWJsZXMgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICAgIGlmICh0YXNrc0NvbXBsZXRlZCA9PT0gaXB0YWJsZXNEZWxldGVDb21tYW5kcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgY21kKFwic3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlXCIsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGBleGVjIGVycm9yIGR1cmluZyBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCxcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGlwdGFibGVzIHJ1bGVzIHNhdmVkLmApO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIkFsbCBzcGVjaWZpZWQgcnVsZXMgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC5cIixcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIC8vICdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgLy8gXHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IFtcbiAgICAgIC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG4gICAgICAvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcbiAgICAgIC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBNQVNRVUVSQURFJyxcbiAgICAgIC8vIFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuICAgICAgLy8gXHRdLmpvaW4oJyAmJiAnKTtcblxuICAgICAgLy8gXHRjbWQoaXB0YWJsZXNDb21tYW5kcywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgLy8gXHRcdGlmIChlcnJvcikge1xuICAgICAgLy8gXHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuICAgICAgLy8gXHRcdFx0cmV0dXJuO1xuICAgICAgLy8gXHRcdH1cbiAgICAgIC8vIFx0XHRpZiAoc3RkZXJyKSB7XG4gICAgICAvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuICAgICAgLy8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG4gICAgICAvLyBcdFx0XHRyZXR1cm47XG4gICAgICAvLyBcdFx0fVxuICAgICAgLy8gXHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBFdGhlcm5ldCBkaXNhYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG4gICAgICAvLyBcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCBzdGRvdXQpO1xuICAgICAgLy8gXHR9KTtcbiAgICAgIC8vIH0sXG4gICAgICBlbmFibGVJbnRlcm5ldEZvck1hY0V0aGVybmV0OiBmdW5jdGlvbiAobWFjQWRkcmVzcywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgLy8gQ29tbWFuZCB0byBhbGxvdyBpbnRlcm5ldCBmb3IgdGhlIHNwZWNpZmllZCBNQUMgYWRkcmVzcyBvbiBldGgwLlxuICAgICAgICB2YXIgYWxsb3dNYWNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1tIG1hYyAtLW1hYy1zb3VyY2UgJHttYWNBZGRyZXNzfSAtaiBBQ0NFUFRgO1xuICAgICAgICAvLyBDb21tYW5kIHRvIGRyb3AgYWxsIG90aGVyIGludGVybmV0IHRyYWZmaWMgb24gZXRoMC5cbiAgICAgICAgdmFyIGJsb2NrT3RoZXJzQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgZXRoMCAtaiBEUk9QYDtcblxuICAgICAgICAvLyBBbGxvdyBpbnRlcm5ldCBmb3IgdGhlIHNwZWNpZmllZCBNQUMgYWRkcmVzcy5cbiAgICAgICAgcmVzID0gY21kKGFsbG93TWFjQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgYGV4ZWMgZXJyb3IgZHVyaW5nIGFsbG93aW5nIE1BQyAke21hY0FkZHJlc3N9OiAke2Vycm9yfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGFsbG93ZWQgZm9yIE1BQyAke21hY0FkZHJlc3N9LmApO1xuXG4gICAgICAgICAgLy8gQmxvY2sgYWxsIG90aGVyIE1BQyBhZGRyZXNzZXMgZnJvbSBhY2Nlc3NpbmcgdGhlIGludGVybmV0LlxuICAgICAgICAgIHJlcyA9IGNtZChibG9ja090aGVyc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBibG9ja2luZyBvdGhlciBNQUNzOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5ldCBhY2Nlc3MgYmxvY2tlZCBmb3Igb3RoZXIgTUFDIGFkZHJlc3Nlcy5gKTtcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsbHksIHNhdmUgdGhlIGlwdGFibGVzIHNldHRpbmdzIHRvIG1ha2UgdGhlbSBwZXJzaXN0ZW50LlxuICAgICAgICAgICAgY21kKFwic3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlXCIsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgIGBleGVjIGVycm9yIGR1cmluZyBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYGlwdGFibGVzIHJ1bGVzIHNhdmVkLmApO1xuICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVBbGxNYWNGaWx0ZXJzRm9yRXRoZXJuZXQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAvLyBMaXN0IGFsbCBGT1JXQVJEIHJ1bGVzIHdpdGggbGluZSBudW1iZXJzXG4gICAgICAgIGNtZChcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtLWxpbmUtbnVtYmVycyAtblwiLFxuICAgICAgICAgIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIEZPUldBUkQgcnVsZXM6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFByb2Nlc3Mgc3Rkb3V0IHRvIGlkZW50aWZ5IHJ1bGVzIHJlbGF0ZWQgdG8gTUFDIGZpbHRlcmluZyBvbiBldGgwXG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IHN0ZG91dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOdW1iZXJzID0gbGluZXMucmVkdWNlKChhY2MsIGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChsaW5lLmluY2x1ZGVzKFwiZXRoMFwiKSAmJiBsaW5lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJtYWNcIikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlTnVtYmVyID0gbGluZS5zcGxpdCgvXFxzKy8pWzBdOyAvLyBFeHRyYWN0IHRoZSBydWxlIG51bWJlciwgYXNzdW1pbmcgaXQncyB0aGUgZmlyc3QgZWxlbWVudFxuICAgICAgICAgICAgICAgIGFjYy5wdXNoKHJ1bGVOdW1iZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBpZGVudGlmaWVkIHJ1bGVzIHN0YXJ0aW5nIGZyb20gdGhlIGhpZ2hlc3QgbnVtYmVyIHRvIHByZXZlbnQgc2hpZnRpbmcgb2YgbGluZSBudW1iZXJzXG4gICAgICAgICAgICBydWxlTnVtYmVyc1xuICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYiAtIGEpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKChydWxlTnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY21kKFxuICAgICAgICAgICAgICAgICAgYHN1ZG8gaXB0YWJsZXMgLUQgRk9SV0FSRCAke3J1bGVOdW1iZXJ9YCxcbiAgICAgICAgICAgICAgICAgIChyZW1vdmVFcnJvciwgcmVtb3ZlU3Rkb3V0LCByZW1vdmVTdGRlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciByZW1vdmluZyBydWxlICR7cnVsZU51bWJlcn06ICR7cmVtb3ZlRXJyb3J9YCxcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIERlY2lkZSBpZiB5b3Ugd2FudCB0byBjb250aW51ZSByZW1vdmluZyBvdGhlciBydWxlcyBvciBzdG9wIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJ1bGUgJHtydWxlTnVtYmVyfSByZW1vdmVkIHN1Y2Nlc3NmdWxseS5gKTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEFmdGVyIGF0dGVtcHRpbmcgdG8gcmVtb3ZlIGFsbCBpZGVudGlmaWVkIHJ1bGVzLCBzYXZlIHRoZSBpcHRhYmxlcyBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICBjbWQoXG4gICAgICAgICAgICAgIFwic3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlXCIsXG4gICAgICAgICAgICAgIChzYXZlRXJyb3IsIHNhdmVTdGRvdXQsIHNhdmVTdGRlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2F2ZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7c2F2ZUVycm9yfWApO1xuICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhzYXZlRXJyb3IsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlwdGFibGVzIHJ1bGVzIHVwZGF0ZWQgYW5kIHNhdmVkLlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjayhcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJBbGwgTUFDIGZpbHRlciBydWxlcyBmb3IgRXRoZXJuZXQgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC5cIixcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzTW9iaWxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9IFwic3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEXCI7XG5cbiAgICAgICAgdmFyIGNvbW1hbmRSZXN1bHQgPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXG4gICAgICAgIGlmICghY29tbWFuZFJlc3VsdCkge1xuICAgICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG4gICAgICAgICAgICBcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsXG4gICAgICAgICAgICBcIlRoZSBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkanVzdGVkIHRvIGNoZWNrIGZvciB0aGUgc3BlY2lmaWMgcnVsZSBpbmRpY2F0aW5nIGludGVybmV0IHNoYXJpbmcgZnJvbSB3bGFuMCB0byB3d2FuMFxuICAgICAgICB2YXIgc2hhcmluZ0Zyb21XbGFuVG9Xd2FuID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcyhcbiAgICAgICAgICBcIi1BIEZPUldBUkQgLWkgd2xhbjAgLW8gd3dhbjAgLWogQUNDRVBUXCIsXG4gICAgICAgICk7XG4gICAgICAgIHZhciBzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoXG4gICAgICAgICAgXCItQSBGT1JXQVJEIC1pIHd3YW4wIC1vIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFRcIixcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoc2hhcmluZ0Zyb21XbGFuVG9Xd2FuICYmIHNoYXJpbmdUb1dsYW5Gcm9tV3dhbkVzdGFibGlzaGVkKSB7XG4gICAgICAgICAgLy8gSWYgYXQgbGVhc3Qgb25lIHBhaXIgb2YgcnVsZXMgZXhpc3RzLCBpbnRlcm5ldCBzaGFyaW5nIHRvIHRoZSBtb2JpbGUgaW50ZXJmYWNlIGlzIGNvbnNpZGVyZWQgZW5hYmxlZC5cbiAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IFwiZW5hYmxlZCBmb3IgYWxsXCIsIG1hY0FkZHJlc3M6IG51bGwgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IFwiZGlzYWJsZWRcIiwgbWFjQWRkcmVzczogbnVsbCB9O1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvLyAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIC8vIFx0Ly8gQ29tbWFuZCB0byBsaXN0IEZPUldBUkQgcnVsZXNcbiAgICAgIC8vIFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtbiAtLWxpbmUtbnVtYmVyJztcblxuICAgICAgLy8gXHRjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgIC8vIFx0XHRpZiAoZXJyb3IgfHwgc3RkZXJyKSB7XG4gICAgICAvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIEZPUldBUkQgcnVsZXM6ICR7ZXJyb3IgfHwgc3RkZXJyfWApO1xuICAgICAgLy8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciB8fCBuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG4gICAgICAvLyBcdFx0XHRyZXR1cm47XG4gICAgICAvLyBcdFx0fVxuXG4gICAgICAvLyBcdFx0Ly8gQ2hlY2sgZm9yIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBydWxlc1xuICAgICAgLy8gXHRcdHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IHN0ZG91dC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2Ugd3dhbjAnKSAmJiBzdGRvdXQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcblxuICAgICAgLy8gXHRcdC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcbiAgICAgIC8vIFx0XHR2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSB3d2FuMC87XG4gICAgICAvLyBcdFx0dmFyIG1hdGNoID0gc3Rkb3V0Lm1hdGNoKG1hY0FkZHJlc3NSdWxlUmVnZXgpO1xuXG4gICAgICAvLyBcdFx0Ly8gRGV0ZXJtaW5lIHRoZSBzdGF0dXMgYmFzZWQgb24gdGhlIHJ1bGVzIGZvdW5kXG4gICAgICAvLyBcdFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuICAgICAgLy8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGxcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH0pO1xuICAgICAgLy8gXHRcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgIC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYSBzcGVjaWZpYyBNQUMgYWRkcmVzc1xuICAgICAgLy8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH0pO1xuICAgICAgLy8gXHRcdH0gZWxzZSB7XG4gICAgICAvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGRpc2FibGVkIG9yIG5vdCBjb25maWd1cmVkIGFzIGV4cGVjdGVkXG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH0pO1xuICAgICAgLy8gXHRcdH1cbiAgICAgIC8vIFx0fSk7XG4gICAgICAvLyB9LFxuXG4gICAgICBlbmFibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgaXB0YWJsZXNDb21tYW5kcyA9IFtcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUXCIsXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFRcIixcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1hcHBlbmQgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREVcIixcbiAgICAgICAgICBcInN1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZVwiLFxuICAgICAgICBdLmpvaW4oXCIgJiYgXCIpO1xuXG4gICAgICAgIGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGRlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coXCJJbnRlcm5ldCBzaGFyaW5nIHZpYSBtb2JpbGUgZW5hYmxlZCBzdWNjZXNzZnVsbHkuXCIpO1xuICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZGlzYWJsZUludGVybmV0U2hhcmluZ01vYmlsZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIC8vIERlZmluZSBjb21tYW5kcyBmb3IgZGVsZXRpb24gd2l0aG91dCBjb21iaW5pbmcgdGhlbVxuICAgICAgICB2YXIgaXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IFtcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUXCIsXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFRcIixcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREVcIixcbiAgICAgICAgXTtcblxuICAgICAgICAvLyBGdW5jdGlvbiB0byByZWN1cnNpdmVseSBleGVjdXRlIGEgY29tbWFuZCB1bnRpbCBpdCBmYWlscyAoaW5kaWNhdGluZyBubyBtb3JlIGluc3RhbmNlcyBvZiB0aGUgcnVsZSlcbiAgICAgICAgZnVuY3Rpb24gZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICBjbWQoY29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgLy8gTm8gZXJyb3IgbWVhbnMgdGhlIGNvbW1hbmQgc3VjY2VlZGVkLCBzbyB0aGVyZSBtaWdodCBiZSBtb3JlIGluc3RhbmNlc1xuICAgICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgICBleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBFcnJvciBsaWtlbHkgbWVhbnMgbm8gbW9yZSBpbnN0YW5jZXMgb2YgdGhlIHJ1bGUsIG1vdmUgb25cbiAgICAgICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFeGVjdXRlIGRlbGV0aW9uIGZvciBlYWNoIGNvbW1hbmQgYW5kIHRyYWNrIHdoZW4gYWxsIGFyZSBjb21wbGV0ZWRcbiAgICAgICAgdmFyIHRhc2tzQ29tcGxldGVkID0gMDtcbiAgICAgICAgaXB0YWJsZXNEZWxldGVDb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG4gICAgICAgICAgZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrc0NvbXBsZXRlZCsrO1xuICAgICAgICAgICAgLy8gQWZ0ZXIgYWxsIGNvbW1hbmRzIGhhdmUgYmVlbiBhdHRlbXB0ZWQsIHNhdmUgdGhlIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICAgIGlmICh0YXNrc0NvbXBsZXRlZCA9PT0gaXB0YWJsZXNEZWxldGVDb21tYW5kcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgY21kKFxuICAgICAgICAgICAgICAgIFwic3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlXCIsXG4gICAgICAgICAgICAgICAgKGVycm9yLCBzYXZlU3Rkb3V0LCBzYXZlU3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgIFwiaXB0YWJsZXMgcnVsZXMgZm9yIG1vYmlsZSBpbnRlcmZhY2UgdXBkYXRlZCBhbmQgc2F2ZWQuXCIsXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhcbiAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIFwiQWxsIHNwZWNpZmllZCBydWxlcyBmb3IgbW9iaWxlIGludGVyZmFjZSByZW1vdmVkIGFuZCBjaGFuZ2VzIHNhdmVkLlwiLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLy8gJ2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgLy8gXHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IFtcbiAgICAgIC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuICAgICAgLy8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuICAgICAgLy8gXHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJyxcbiAgICAgIC8vIFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuICAgICAgLy8gXHRdLmpvaW4oJyAmJiAnKTtcblxuICAgICAgLy8gXHRjbWQoaXB0YWJsZXNDb21tYW5kcywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgLy8gXHRcdGlmIChlcnJvcikge1xuICAgICAgLy8gXHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuICAgICAgLy8gXHRcdFx0cmV0dXJuO1xuICAgICAgLy8gXHRcdH1cbiAgICAgIC8vIFx0XHRpZiAoc3RkZXJyKSB7XG4gICAgICAvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuICAgICAgLy8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG4gICAgICAvLyBcdFx0XHRyZXR1cm47XG4gICAgICAvLyBcdFx0fVxuICAgICAgLy8gXHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBtb2JpbGUgZGlzYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICAgICAgLy8gXHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcbiAgICAgIC8vIFx0fSk7XG4gICAgICAvLyB9LFxuICAgICAgYWxsb3dJbnRlcm5ldEZvck1hY01vYmlsZTogZnVuY3Rpb24gKG1hY0FkZHJlc3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIC8vIEZpcnN0LCBlbmFibGUgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIGZyb20gd2xhbjAgdG8gd3dhbjBcbiAgICAgICAgcmVzID0gY21kKFxuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUICYmIHN1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1hcHBlbmQgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREVcIixcbiAgICAgICAgICAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICBgZXhlYyBlcnJvciBkdXJpbmcgZW5hYmxpbmcgaW50ZXJuZXQgc2hhcmluZzogJHtlcnJvcn1gLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coYEludGVybmV0IHNoYXJpbmcgZW5hYmxlZCB2aWEgd3dhbjAuYCk7XG4gICAgICAgICAgICAvLyBBbGxvdyBpbnRlcm5ldCBvbmx5IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzIG9uIHd3YW4wXG4gICAgICAgICAgICB2YXIgYWxsb3dNYWNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUkgRk9SV0FSRCAxIC1pIHd3YW4wIC1tIG1hYyAtLW1hYy1zb3VyY2UgJHttYWNBZGRyZXNzfSAtaiBBQ0NFUFRgO1xuICAgICAgICAgICAgLy8gQmxvY2sgYWxsIG90aGVyIE1BQyBhZGRyZXNzZXMgZnJvbSBhY2Nlc3NpbmcgdGhlIGludGVybmV0IHZpYSB3d2FuMC5cbiAgICAgICAgICAgIHZhciBibG9ja090aGVyc0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIHd3YW4wIC1qIERST1BgO1xuXG4gICAgICAgICAgICAvLyBBbGxvdyBzcGVjaWZpYyBNQUNcbiAgICAgICAgICAgIHJlcyA9IGNtZChhbGxvd01hY0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgIGBleGVjIGVycm9yIGR1cmluZyBhbGxvd2luZyBNQUMgJHttYWNBZGRyZXNzfSBvbiBXV0FOOiAke2Vycm9yfWAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGBJbnRlcm5ldCBhY2Nlc3MgYWxsb3dlZCBmb3IgTUFDICR7bWFjQWRkcmVzc30gb24gV1dBTi5gLFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIEJsb2NrIGFsbCBvdGhlciBNQUNzXG4gICAgICAgICAgICAgIHJlcyA9IGNtZChibG9ja090aGVyc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGBleGVjIGVycm9yIGR1cmluZyBibG9ja2luZyBvdGhlciBNQUNzIG9uIFdXQU46ICR7ZXJyb3J9YCxcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgIGBJbnRlcm5ldCBhY2Nlc3MgYmxvY2tlZCBmb3Igb3RoZXIgTUFDIGFkZHJlc3NlcyBvbiBXV0FOLmAsXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIC8vIFNhdmUgaXB0YWJsZXMgcnVsZXNcbiAgICAgICAgICAgICAgICBjbWQoXG4gICAgICAgICAgICAgICAgICBcInN1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZVwiLFxuICAgICAgICAgICAgICAgICAgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlcyBmb3IgV1dBTjogJHtlcnJvcn1gLFxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgZm9yIFdXQU4gc2F2ZWQuYCk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlQWxsTWFjRmlsdGVyc0Zvck1vYmlsZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIC8vIExpc3QgYWxsIEZPUldBUkQgcnVsZXNcbiAgICAgICAgY21kKFxuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC0tbGluZS1udW1iZXJzIC1uXCIsXG4gICAgICAgICAgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgcnVsZXM6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFByb2Nlc3Mgc3Rkb3V0IHRvIGZpbmQgcnVsZXMgdG8gZGVsZXRlLiBUaGlzIHBhcnQgaXMgcHNldWRvLWNvZGUgYW5kIG5lZWRzIGFkanVzdG1lbnRcbiAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gc3Rkb3V0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICAgICAgY29uc3QgcnVsZU51bWJlcnMgPSBbXTtcbiAgICAgICAgICAgIGxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoXCJ3d2FuMFwiKSAmJiBsaW5lLmluY2x1ZGVzKFwiTUFDXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gRXh0cmFjdCB0aGUgcnVsZSBudW1iZXIgZnJvbSB0aGUgbGluZVxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGVOdW1iZXIgPSBsaW5lLnNwbGl0KFwiIFwiKVswXTsgLy8gVGhpcyBpcyBhIHNpbXBsaWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgcnVsZU51bWJlcnMucHVzaChydWxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBydWxlcyBieSB0aGVpciBudW1iZXJzLCBzdGFydGluZyBmcm9tIHRoZSBoaWdoZXN0IG51bWJlclxuICAgICAgICAgICAgcnVsZU51bWJlcnNcbiAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIgLSBhKVxuICAgICAgICAgICAgICAuZm9yRWFjaCgocnVsZU51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNtZChcbiAgICAgICAgICAgICAgICAgIGBzdWRvIGlwdGFibGVzIC1EIEZPUldBUkQgJHtydWxlTnVtYmVyfWAsXG4gICAgICAgICAgICAgICAgICAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgcmVtb3ZpbmcgcnVsZSAke3J1bGVOdW1iZXJ9OiAke2Vycm9yfWAsXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBPcHRpb25hbGx5LCBzdG9wIHRoZSBwcm9jZXNzIG9yIGNvbnRpbnVlIGF0dGVtcHRpbmcgdG8gcmVtb3ZlIG90aGVyIHJ1bGVzXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSdWxlICR7cnVsZU51bWJlcn0gcmVtb3ZlZCBzdWNjZXNzZnVsbHkuYCk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBZnRlciBhbGwgcnVsZXMgaGF2ZSBiZWVuIHByb2Nlc3NlZCwgc2F2ZSB0aGUgaXB0YWJsZXMgcnVsZXNcbiAgICAgICAgICAgIGNtZChcInN1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZVwiLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpcHRhYmxlcyBydWxlcyB1cGRhdGVkIGFuZCBzYXZlZC5cIik7XG4gICAgICAgICAgICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICBcIkFsbCBNQUMgZmlsdGVyIHJ1bGVzIGZvciBXV0FOIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuXCIsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgcmVib290OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHJlcyA9IGNtZChcInN1ZG8gcmVib290XCIsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBzaHV0ZG93bjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXCJzdWRvIGhhbHRcIiwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHN5bmNocm9uaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgc3luYy4uLlwiKTtcblxuICAgICAgICB2YXIgZGV2aWNlU2VyaWFsID0gTWV0ZW9yLnNldHRpbmdzLnB1YmxpYy5zZXJpYWw7XG4gICAgICAgIHZhciBkZXZpY2VUb2tlbiA9IE1ldGVvci5zZXR0aW5ncy5tb29kbGVBUElUb2tlbjtcbiAgICAgICAgdmFyIHVybCA9IE1ldGVvci5zZXR0aW5ncy5jbG91ZFVSTCArIFwiL2FwaS9zdGFydFN5bmNcIjtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkZXZpY2VTZXJpYWw6IGRldmljZVNlcmlhbCxcbiAgICAgICAgICAgIGRldmljZVRva2VuOiBkZXZpY2VUb2tlbixcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5wbVJlcXVlc3RPcHRpb25zOiB7XG4gICAgICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLCAvLyBUT0RPIHJlbW92ZSB3aGVuIGRlcGxveVxuICAgICAgICAgICAgdGltZW91dDogMTIwMDAwMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpbWVvdXQ6IDEyMDAwMDAsXG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy92YXIgcmVzdWx0ID0gSFRUUC5jYWxsKCdQT1NUJywgdXJsLCBvcHRpb25zKTtcblxuICAgICAgICAgIHZhciByZXN1bHQgPSBIVFRQLnBvc3QodXJsLCBvcHRpb25zKTtcbiAgICAgICAgICB2YXIgcmVzdWx0Q29udGVudCA9IHJlc3VsdC5jb250ZW50O1xuICAgICAgICAgIC8vU3luY2hyb25pemF0aW9ucy5pbnNlcnQoe2RhdGU6RGF0ZS5ub3coKX0pO1xuICAgICAgICAgIHJldHVybiByZXN1bHRDb250ZW50O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSB0cnlpbmcgdG8gc3luY3Jvbml6ZS4uLlwiLCBlKTtcbiAgICAgICAgICByZXR1cm4gXCJFcnJvciB3aGlsZSB0cnlpbmcgdG8gc3luY3Jvbml6ZS4uLiBcIiArIGU7XG4gICAgICAgIH1cbiAgICAgICAgLy9yZXR1cm4gcmVzdWx0Q29udGVudDtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbEFwcHMnLCBmdW5jdGlvbigpIHtcbi8vIFx0cmV0dXJuIEFwcHMuZmluZCh7fSk7XG4vLyB9KTtcblxuLy8gTWV0ZW9yLnB1Ymxpc2goXCJ1c2Vyc1wiLCBmdW5jdGlvbigpIHtcbi8vICAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoe30sIHtmaWVsZHM6e2NyZWF0ZWRBdDogdHJ1ZSwgcHJvZmlsZTogdHJ1ZSwgZW1haWxzOiB0cnVlLCB1c2VybmFtZTogdHJ1ZX19KTtcbi8vIH0pO1xuXG5cbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIH0pOyIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuXG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9zeW5jaHJvbml6YXRpb25zLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvdXNlcnMuanMnO1xuXG5pbXBvcnQgJy4uL3NlcnZlci9maXh0dXJlcy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci9tZXRob2RzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL3B1YmxpY2F0aW9ucy5qcyc7XG5pbXBvcnQgJy4uL2xpYi9hcHBfbG9hZGVyLmpzJztcblxuXG4vL2ltcG9ydCB7RERQfSBmcm9tICdtZXRlb3IvZGRwJztcbi8vaW1wb3J0IHtBY2NvdW50c30gZnJvbSAnbWV0ZW9yL2FjY291bnRzLWJhc2UnO1xuXG5cbi8vIGltcG9ydCAnLi4vaW1wb3J0cy9zdGFydHVwL3NlcnZlci9maXh0dXJlcy5qcyc7XG5cbi8vIGltcG9ydCAnLi4vaW1wb3J0cy9hcGkvZml4dHVyZXMuanMnO1xuXG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcblx0Y29uc29sZS5sb2coXCJtZXRlb3Igc3RhcnRlZC4uLlwiKTtcblxuXG5cbiAgLy8gY29kZSB0byBydW4gb24gc2VydmVyIGF0IHN0YXJ0dXBcblxuIC8vICBTZXJ2ZXIyID0gRERQLmNvbm5lY3QoXCJodHRwOi8vYmVla2VlLmJveDo4M1wiKTtcblx0Ly8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFNlcnZlcjI7XG5cdC8vIGNvbnNvbGUubG9nKFwib24gY29ubmVjdGUuLi5cIik7XG59KTtcbiJdfQ==
