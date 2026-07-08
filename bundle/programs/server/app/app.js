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

    function getInternetInterfaceFromSystem() {
      try {
        const res = cmd("ip route get 1.2.3.4 | awk '{print $5; exit}'").toString().trim();
        return res || 'Unknown';
      } catch (error) {
        console.log("Error retrieving internet interface:", error);
        return 'Error';
      }
    }

    function getInterfaceIPAddressFromSystem(interfaceName) {
      if (!/^[a-zA-Z0-9_.:-]+$/.test(interfaceName || '')) {
        return 'Unavailable';
      }

      try {
        const res = cmd(`ip -4 addr show ${shellEscape(interfaceName)} | awk '/inet / {print $2; exit}' | cut -d/ -f1 || true`).toString().trim();
        return res || 'Unavailable';
      } catch (error) {
        console.log(`Error retrieving IP address for ${interfaceName}:`, error);
        return 'Unavailable';
      }
    }

    function getInterfaceMACAddressFromSystem(interfaceName) {
      if (!/^[a-zA-Z0-9_.:-]+$/.test(interfaceName || '')) {
        return 'Unavailable';
      }

      try {
        const res = cmd(`cat /sys/class/net/${shellEscape(interfaceName)}/address 2>/dev/null || true`).toString().trim();
        return res ? res.toUpperCase() : 'Unavailable';
      } catch (error) {
        console.log(`Error retrieving MAC address for ${interfaceName}:`, error);
        return 'Unavailable';
      }
    }

    function isCellularInternetInterface(interfaceName) {
      return interfaceName === 'wwan0' || interfaceName === 'Mobile';
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
        return getInternetInterfaceFromSystem();
      },
      'getInternetStatusDetails': function () {
        const interfaceName = getInternetInterfaceFromSystem();
        const validInternetInterface = interfaceName !== 'Unknown' && interfaceName !== 'Error';
        const isCellularInterface = isCellularInternetInterface(interfaceName);
        return {
          interfaceName: interfaceName,
          ipAddress: validInternetInterface ? getInterfaceIPAddressFromSystem(interfaceName) : 'Unavailable',
          macAddress: validInternetInterface && !isCellularInterface ? getInterfaceMACAddressFromSystem(interfaceName) : '',
          ethernetMacAddress: getInterfaceMACAddressFromSystem('eth0'),
          wifiClientMacAddress: !isCellularInterface ? getInterfaceMACAddressFromSystem('wlanusb') : ''
        };
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS93aWZpQ2xpZW50TW9kZVN0YXRlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiYWRkQ2xhc3MiLCJmYWRlT3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnQiLCJBcHBzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJhbGxvdyIsImluc2VydCIsInVwZGF0ZSIsInVzZXJJZCIsInNwYWNlIiwicHVibGlzaCIsImFwcHNQdWJsaWNhdGlvbiIsImZpbmQiLCJTeW5jaHJvbml6YXRpb25zIiwic3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uIiwiaXNBZG1pbiIsImNvbnNvbGUiLCJsb2ciLCJSb2xlcyIsInVzZXJJc0luUm9sZSIsInVzZXIiLCJyb2xlQXNzaWdubWVudCIsInJlYWR5IiwiV2lmaUNsaWVudE1vZGVTdGF0ZSIsIndpZmlDbGllbnRNb2RlU3RhdGVQdWJsaWNhdGlvbiIsIl9pZCIsImNyZWF0ZVJvbGUiLCJ1bmxlc3NFeGlzdHMiLCJ1c2VycyIsImNvdW50IiwiYWRtaW5QYXNzd29yZCIsInNldHRpbmdzIiwidXNlcm5hbWUiLCJyb2xlcyIsIl8iLCJlYWNoIiwiaWQiLCJBY2NvdW50cyIsImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJvZmlsZSIsIm5hbWUiLCJsZW5ndGgiLCJhZGRVc2Vyc1RvUm9sZXMiLCJkZWZhdWx0QXBwcyIsImN1c3RvbUFwcCIsIm9ubHlUZWFjaGVyIiwib3JkZXIiLCJkb2NfdXNlciIsImRvY19hZG1pbiIsImxhc3RfdmVyc2lvbiIsInVybCIsImljb24iLCJkZXNjcmlwdGlvbiIsImluc3RhbGxlZCIsInZlcnNpb24iLCJoaWRkZW4iLCJIVFRQIiwiZnMiLCJOcG0iLCJyZXF1aXJlIiwiZXhlYyIsImNtZCIsIndyYXBBc3luYyIsIndpZmlTZXR0aW5nc1BhdGgiLCJjb25maWdQYXRoIiwic2NyaXB0c1BhdGgiLCJ3aWZpQ2xpZW50RW5hYmxlU2NyaXB0TmFtZSIsIndpZmlDbGllbnREaXNhYmxlU2NyaXB0TmFtZSIsIndpZmlDbGllbnRNb2RlU3RhdGVQYXRoIiwicmVhZGxpbmUiLCJzaGVsbEVzY2FwZSIsInZhbHVlIiwiU3RyaW5nIiwicmVwbGFjZSIsInJlc29sdmVTY3JpcHRQYXRoIiwic2NyaXB0TmFtZSIsInJlYWRXaWZpQ2xpZW50TW9kZVN0YXRlIiwiZXhpc3RzU3luYyIsInN0YXRlIiwicmVhZEZpbGVTeW5jIiwidHJpbSIsImVycm9yIiwid3JpdGVXaWZpQ2xpZW50TW9kZVN0YXRlIiwiZW5hYmxlZCIsIndyaXRlRmlsZVN5bmMiLCJwZXJzaXN0V2lmaUNsaWVudE1vZGVTdGF0ZSIsInVwc2VydCIsIiRzZXQiLCJ1cGRhdGVkQXQiLCJEYXRlIiwiZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0iLCJoYXNXbGFuVXNiIiwidG9TdHJpbmciLCJoYXNBcEFkZHJlc3MiLCJkZXRlY3RXaWZpQ2xpZW50TW9kZUZyb21TeXN0ZW0iLCJubVN0YXRlIiwidGVzdCIsImdldFdpZmlDbGllbnRNb2RlU3RhdGUiLCJkZXRlY3RlZFN0YXRlIiwiZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkIiwiRXJyb3IiLCJnZXRDbGllbnRTU0lERnJvbVN5c3RlbSIsInNzaWQiLCJnZXRDbGllbnRCU1NJREZyb21TeXN0ZW0iLCJic3NpZCIsInRvVXBwZXJDYXNlIiwiZ2V0Q2xpZW50Q29ubmVjdGlvbkluZm9Gcm9tU3lzdGVtIiwid2FpdCIsIm1pbGxpc2Vjb25kcyIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2V0SW50ZXJuZXRJbnRlcmZhY2VGcm9tU3lzdGVtIiwicmVzIiwiZ2V0SW50ZXJmYWNlSVBBZGRyZXNzRnJvbVN5c3RlbSIsImludGVyZmFjZU5hbWUiLCJnZXRJbnRlcmZhY2VNQUNBZGRyZXNzRnJvbVN5c3RlbSIsImlzQ2VsbHVsYXJJbnRlcm5ldEludGVyZmFjZSIsIndhaXRGb3JDbGllbnRTU0lEIiwiZXhwZWN0ZWRTU0lEIiwidGltZW91dE1pbGxpc2Vjb25kcyIsImRlYWRsaW5lIiwibm93IiwiZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzV2lmaUNsaWVudEZyb21TeXN0ZW0iLCJzdGF0dXMiLCJtYWNBZGRyZXNzIiwibGlzdEZvcndhcmRSdWxlc0NvbW1hbmQiLCJsaXN0TmF0UnVsZXNDb21tYW5kIiwiZm9yd2FyZFJlc3VsdCIsIm5hdFJlc3VsdCIsInNoYXJpbmdGcm9tV2xhbmludFRvV2xhbnVzYiIsImluY2x1ZGVzIiwic2hhcmluZ1RvV2xhbmludEZyb21XbGFudXNiRXN0YWJsaXNoZWQiLCJuYXRGb3JXbGFuaW50IiwiZW5hYmxlSW50ZXJuZXRTaGFyaW5nV2lmaUNsaWVudEluU3lzdGVtIiwiaXB0YWJsZXNDb21tYW5kcyIsImpvaW4iLCJkaXNhYmxlSW50ZXJuZXRTaGFyaW5nV2lmaUNsaWVudEluU3lzdGVtIiwiaXB0YWJsZXNEZWxldGVDb21tYW5kcyIsImV4ZWN1dGVBbmRSZXBlYXQiLCJjb21tYW5kIiwiZm9yRWFjaCIsImdldENhcHRpdmVQb3J0YWxTdGF0dXNGcm9tU3lzdGVtIiwiZGV0ZWN0ZWQiLCJyZXNwb25zZSIsInN0YXR1c01hdGNoIiwibWF0Y2giLCJsb2NhdGlvbk1hdGNoIiwiZWZmZWN0aXZlVXJsTWF0Y2giLCJzdGF0dXNDb2RlIiwicGFyc2VJbnQiLCJlZmZlY3RpdmVVcmwiLCJydW5XaWZpTW9kZVNjcmlwdCIsInNjcmlwdFBhdGgiLCJtZXRob2RzIiwiYWRtaW5JZCIsIm5ld1Bhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjaGVjayIsIm9sZGVtYWlsIiwiZW1haWxzIiwiZW1haWxSZWciLCJyZW1vdmVFbWFpbCIsImFkZHJlc3MiLCJhZGRFbWFpbCIsInJlc3VsdCIsIm1lc3NhZ2UiLCJyZW1vdmVVc2Vyc0Zyb21Sb2xlcyIsInN0b3JhZ2VVc2FnZSIsInRvRml4ZWQiLCJzdG9yYWdlVG90YWwiLCJwZXJjZW50YWdlIiwiZGF0YSIsIlJlZ0V4cCIsIlNTSUQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJuZXdTU0lEIiwiZW5jb2RlZE5ld1NTSUQiLCJCdWZmZXIiLCJuZXdEYXRhIiwiY2hhbm5lbCIsIm5ld0NoYW5uZWwiLCJzZXJpYWwiLCJvcGVyYXRvck5hbWUiLCJzaWduYWxTdHJlbmd0aCIsInN0cmVuZ3RoVmFsdWUiLCJxdWFsaXR5IiwiQVBOIiwiQVBOVXNlciIsIkFQTlBhc3N3b3JkIiwic2ltU3RhdHVzUmVzdWx0IiwiZXhlY3V0ZUNvbW1hbmQiLCJzaW1TdGF0dXMiLCJTaW1QaW4iLCJQSU4iLCJpc1NoYXJpbmciLCJyZXMyIiwiaXNPbmxpbmUiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwidmFsaWRJbnRlcm5ldEludGVyZmFjZSIsImlzQ2VsbHVsYXJJbnRlcmZhY2UiLCJpcEFkZHJlc3MiLCJldGhlcm5ldE1hY0FkZHJlc3MiLCJ3aWZpQ2xpZW50TWFjQWRkcmVzcyIsInJlYXNvbiIsIndpZmkiLCJpbml0IiwiaWZhY2UiLCJyZWplY3QiLCJzY2FuIiwibmV0d29ya3MiLCJ1bmlxdWVOZXR3b3JrcyIsIk1hcCIsIm5ldHdvcmsiLCJzdHJlbmd0aCIsIm1hYyIsImtleSIsImhhcyIsImdldCIsInNldCIsInNlY3VyaXR5IiwidW5pcXVlTmV0d29ya3NBcnJheSIsIkFycmF5IiwiZnJvbSIsInZhbHVlcyIsImN1cnJlbnRDb25uZWN0aW9uSW5mbyIsImNvbm5lY3Rpb25Db25maWciLCJkaXNjb25uZWN0IiwiY29ubmVjdFJlc3VsdCIsImNvbm5lY3QiLCJpc1ZlcmlmaWVkIiwiZGVsZXRlQ29ubmVjdGlvbiIsInNoYXJpbmdGcm9tV2xhbmludFRvRXRoIiwic2hhcmluZ0Zyb21XbGFudXNiVG9FdGgiLCJzaGFyaW5nVG9XbGFuaW50RnJvbUV0aEVzdGFibGlzaGVkIiwic2hhcmluZ1RvV2xhbnVzYkZyb21FdGhFc3RhYmxpc2hlZCIsIm5hdEZvcldsYW51c2IiLCJjYWxsYmFjayIsInN0ZG91dCIsInN0ZGVyciIsImRvbmVDYWxsYmFjayIsInRhc2tzQ29tcGxldGVkIiwiYWxsb3dNYWNDb21tYW5kIiwiYmxvY2tPdGhlcnNDb21tYW5kIiwibGluZXMiLCJzcGxpdCIsInJ1bGVOdW1iZXJzIiwicmVkdWNlIiwiYWNjIiwibGluZSIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJydWxlTnVtYmVyIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInJlbW92ZUVycm9yIiwicmVtb3ZlU3Rkb3V0IiwicmVtb3ZlU3RkZXJyIiwic2F2ZUVycm9yIiwic2F2ZVN0ZG91dCIsInNhdmVTdGRlcnIiLCJzaGFyaW5nRnJvbVdsYW5pbnRUb1d3YW4iLCJzaGFyaW5nRnJvbVdsYW51c2JUb1d3YW4iLCJzaGFyaW5nVG9XbGFuaW50RnJvbVd3YW5Fc3RhYmxpc2hlZCIsInNoYXJpbmdUb1dsYW51c2JGcm9tV3dhbkVzdGFibGlzaGVkIiwiZGV2aWNlU2VyaWFsIiwicHVibGljIiwiZGV2aWNlVG9rZW4iLCJtb29kbGVBUElUb2tlbiIsImNsb3VkVVJMIiwib3B0aW9ucyIsImhlYWRlcnMiLCJucG1SZXF1ZXN0T3B0aW9ucyIsInJlamVjdFVuYXV0aG9yaXplZCIsInRpbWVvdXQiLCJwb3N0IiwicmVzdWx0Q29udGVudCIsImNvbnRlbnQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sQ0FBQ0MsUUFBWCxFQUFxQjtBQUNwQkMsUUFBTSxDQUFDQyxPQUFQLENBQWUsWUFBZixFQUE2QiwyTkFBN0I7QUFFQUQsUUFBTSxDQUFDRSxPQUFQLENBQWUsWUFBZixFQUE2QkMsTUFBTSxDQUFDQyxPQUFQLENBQWUsaUJBQWYsQ0FBN0I7QUFDQTs7QUFFRCxJQUFJTixNQUFNLENBQUNPLFFBQVgsRUFBcUI7QUFDcEJQLFFBQU0sQ0FBQ1EsT0FBUCxDQUFlLFlBQVc7QUFFekJDLGNBQVUsQ0FBQyxZQUFXO0FBQ2pCQyxPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCQyxRQUFsQixDQUEyQixlQUEzQjtBQUVKRCxPQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QkUsT0FBNUIsQ0FBb0MsR0FBcEMsRUFBeUMsWUFBVztBQUNuREYsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxNQUFSO0FBQ0FILFNBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JJLFdBQWxCLENBQThCLGVBQTlCO0FBQ0QsT0FIQTtBQUlBLEtBUFMsRUFPUCxHQVBPLENBQVY7QUFRQSxHQVZEO0FBV0EsQzs7Ozs7Ozs7Ozs7QUNsQkRDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUNDLE1BQUksRUFBQyxNQUFJQTtBQUFWLENBQWQ7QUFBK0IsSUFBSUMsS0FBSjtBQUFVSCxNQUFNLENBQUNJLElBQVAsQ0FBWSxjQUFaLEVBQTJCO0FBQUNELE9BQUssQ0FBQ0UsQ0FBRCxFQUFHO0FBQUNGLFNBQUssR0FBQ0UsQ0FBTjtBQUFROztBQUFsQixDQUEzQixFQUErQyxDQUEvQztBQUVsQyxNQUFNSCxJQUFJLEdBQUcsSUFBSUMsS0FBSyxDQUFDRyxVQUFWLENBQXFCLFdBQXJC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U0FBTzlDLE1BQU0sQ0FBQzZDLEtBQVAsQ0FBYWhCLElBQWIsRUFBUDtBQUNELENBSEQsRTs7Ozs7Ozs7Ozs7QUNURixJQUFJN0IsTUFBSjtBQUFXZSxNQUFNLENBQUNJLElBQVAsQ0FBWSxlQUFaLEVBQTRCO0FBQUNuQixRQUFNLENBQUNvQixDQUFELEVBQUc7QUFBQ3BCLFVBQU0sR0FBQ29CLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcURMLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHdCQUFaO0FBQXNDSixNQUFNLENBQUNJLElBQVAsQ0FBWSxvQ0FBWjtBQUFrREosTUFBTSxDQUFDSSxJQUFQLENBQVkseUJBQVo7QUFBdUNKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHVCQUFaO0FBQXFDSixNQUFNLENBQUNJLElBQVAsQ0FBWSxzQkFBWjtBQUFvQ0osTUFBTSxDQUFDSSxJQUFQLENBQVksMkJBQVo7QUFBeUNKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHNCQUFaO0FBWWpUO0FBQ0E7QUFHQTtBQUVBO0FBR0FuQixNQUFNLENBQUNRLE9BQVAsQ0FBZSxNQUFNO0FBQ3BCeUIsU0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFEb0IsQ0FLbkI7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQVZELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblx0SW5qZWN0LnJhd0hlYWQoXCJtZXRhTG9hZGVyXCIsICc8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBoZWlnaHQ9ZGV2aWNlLWhlaWdodFwiLz48bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj5cdDxtZXRhIG5hbWU9XCJtb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiPicpO1xuXG5cdEluamVjdC5yYXdCb2R5KFwiaHRtbExvYWRlclwiLCBBc3NldHMuZ2V0VGV4dCgnYXBwX2xvYWRlci5odG1sJykpO1xufVxuXG5pZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XG5cdE1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0JCgnLmluZGV4LS1pY29uJykuYWRkQ2xhc3MoJ2FuaW1hdGVkLWljb24nKTtcblxuXHRcdFx0JChcIiNpbmplY3QtbG9hZGVyLXdyYXBwZXJcIikuZmFkZU91dCg1MDAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHQkKCcuaW5kZXgtLWljb24nKS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQtaWNvbicpO1xuXHRcdH0pO1xuXHRcdH0sIDUwMCk7XG5cdH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBBcHBzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtYXBwcycpO1xuXG5cblxuQXBwcy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXG5cdC8vIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyB1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gcmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9XG59KTtcblxuLy8gUHVibGljYXRpb25zXG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxBcHBzJywgZnVuY3Rpb24gYXBwc1B1YmxpY2F0aW9uKCkge1xuICAgIHJldHVybiBBcHBzLmZpbmQoKTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuIFxuZXhwb3J0IGNvbnN0IFN5bmNocm9uaXphdGlvbnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignaG9tZS1zeW5jaHJvbml6YXRpb25zJyk7XG5cblxuXG5TeW5jaHJvbml6YXRpb25zLmFsbG93KHtcblxuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHVwZGF0ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0cmVtb3ZlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXG5cdC8vIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyB1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gcmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9XG59KTtcblxuLy8gUHVibGljYXRpb25zXG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxTeW5jaHJvbml6YXRpb25zJywgZnVuY3Rpb24gc3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uKCkge1xuICAgIHJldHVybiBTeW5jaHJvbml6YXRpb25zLmZpbmQoKTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG4vLyB2YXIgdXNlcnNEQlx0PSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy8gdmFyIGNvbGxlY3Rpb25cdD0gdXNlcnNEQi5vcGVuKCd1c2VycycpO1xuXG5cbi8vY29uc3QgZGF0YWJhc2UgPSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy9jb25zdCBjb2xsZWN0aW9uID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vL2V4cG9ydCBjb25zdCBVc2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy8gU2hhcmluZyB0aGUgc2FtZSBBY2NvdW50IGNvbGxlY3Rpb24gdGhhbiBiZWVrZWUtbGl2ZVxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXG5cdC8vIGNoZWNrIHRoYXQgdGhlIHVzZXJJZCBzcGVjaWZpZWQgaXMgYWRtaW5cbmlzQWRtaW4gPSBmdW5jdGlvbih1c2VySWQpIHtcblx0Y29uc29sZS5sb2coXCJpc2FkbWluXCIpO1xuICByZXR1cm4gUm9sZXMudXNlcklzSW5Sb2xlKE1ldGVvci51c2VyKCksICdhZG1pbicpO1xufVxuXG5cbi8vIFB1Ymxpc2ggUm9sZXMgdG8gY2xpZW50XG5NZXRlb3IucHVibGlzaChudWxsLCBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnVzZXJJZCkge1xuICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCh7ICd1c2VyLl9pZCc6IHRoaXMudXNlcklkIH0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucmVhZHkoKVxuICB9XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKCk7XG5cbn0pO1xuXG4gIC8vIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgLy8gXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAvLyAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICAvLyB9KTtcblxuLy8gU2VydmVyMiA9IEREUC5jb25uZWN0KFwiaHR0cDovL2JlZWtlZS5ib3g6ODNcIik7XG4vLyBBY2NvdW50cy5jb25uZWN0aW9uID0gU2VydmVyMjtcblxuXG4vL3ZhciBkYXRhYmFzZSA9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vL01ldGVvci51c2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy9leHBvcnQgY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignYXBwcycpO1xuXG5cbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIC8vIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgLy8gXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAvLyAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICAvLyB9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5cbmV4cG9ydCBjb25zdCBXaWZpQ2xpZW50TW9kZVN0YXRlID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ3dpZmlDbGllbnRNb2RlU3RhdGUnKTtcblxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXHRNZXRlb3IucHVibGlzaCgnd2lmaUNsaWVudE1vZGVTdGF0ZScsIGZ1bmN0aW9uIHdpZmlDbGllbnRNb2RlU3RhdGVQdWJsaWNhdGlvbigpIHtcblx0XHRyZXR1cm4gV2lmaUNsaWVudE1vZGVTdGF0ZS5maW5kKHsgX2lkOiAnd2lmaS1jbGllbnQtbW9kZS1zdGF0ZScgfSk7XG5cdH0pO1xufVxuIiwiaW1wb3J0IHsgQXBwcyB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuXG5cdC8vIENyZWF0ZSB0aGUgcm9sZXNcblx0Um9sZXMuY3JlYXRlUm9sZSgnbWFuYWdlcicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblxuXG4vLyAjIyMgIENyZWF0ZSBhZG1pbiB1c2VyIGF0IGZpcnN0IHN0YXJ0ICAjIyNcblxuXG5pZiAoTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG5cdFxuXHQvLyBDcmVhdGUgdGhlIHJvbGVcblx0Um9sZXMuY3JlYXRlUm9sZSgnbWFuYWdlcicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblx0Um9sZXMuY3JlYXRlUm9sZSgnYWRtaW4nLCB7dW5sZXNzRXhpc3RzOiB0cnVlfSk7XG5cblx0dmFyIGFkbWluUGFzc3dvcmQgPSBNZXRlb3Iuc2V0dGluZ3MuYWRtaW5QYXNzd29yZDtcblxuXHR2YXIgdXNlcnMgPSBbXG5cdFx0e3VzZXJuYW1lOlwiYWRtaW5cIixyb2xlczpbJ2FkbWluJ119LFxuXHRdO1xuXG5cdF8uZWFjaCh1c2VycywgZnVuY3Rpb24gKHVzZXIpIHtcblx0XHR2YXIgaWQ7XG5cdFx0aWQgPSBBY2NvdW50cy5jcmVhdGVVc2VyKHtcblx0XHRcdHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuXHRcdFx0ZW1haWw6IFwiQWRtaW5cIixcblx0XHRcdHBhc3N3b3JkOiBhZG1pblBhc3N3b3JkLFxuXHRcdFx0cHJvZmlsZTp7bmFtZTpcIkFkbWluXCJ9XG5cdFx0fSk7XG5cblx0XHRpZiAodXNlci5yb2xlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRSb2xlcy5hZGRVc2Vyc1RvUm9sZXMoaWQsIHVzZXIucm9sZXMpO1xuXHRcdH1cblx0fSk7XG59XG5cblxuaWYgKEFwcHMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblxuXHR2YXIgZGVmYXVsdEFwcHMgPSBbXG5cdFx0e25hbWU6XCJMaXZlXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjMsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly9saXZlLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1saXZlLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBMaXZlIHByb21vdGUgcmVhbC10aW1lIGludGVyYWN0aW9uIGJ5IGFsbG93aW5nIGxlYXJuZXJzIHRvIGV4cHJlc3MgdGhlbXNlbHZlcyBhc2tpbmcgcXVlc3Rpb25zLCBwb3N0aW5nIHBob3RvcyBvciBzaGFyaW5nIGZpbGVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlJlc291cmNlc1wiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo3LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vcmVzb3VyY2VzLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1yZXNvdXJjZXMucG5nXCIsIGRlc2NyaXB0aW9uOlwiV2l0aCBCZWVrZWUgUmVzb3VyY2VzLCB5b3UgY2FuIGVhc2lseSBzaGFyZSBmaWxlcyB3aXRoIHlvdXIgbGVhcm5lcnMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiV2hlZWxcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjp0cnVlLCBvcmRlcjo5LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIwLjdcIiwgdXJsOlwiaHR0cDovL3doZWVsLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS13aGVlbC5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgV2hlZWwgaXMgYSBzaW1wbGUgcmFuZG9tIHBpY2tlciB3aGVlbCB0aGF0IGFsbG93IHlvdSB0byBwaWNrIHVwIGEgcmFuZG9tIG5hbWUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiVGltZXJcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6OCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL3RpbWVyLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS10aW1lci5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgVGltZXIgaXMgYSBzaW1wbGUgdGltZXIgdGhhdCBsZXRzIHlvdXIgbGVhcm5lcnMga25vdyBob3cgbXVjaCB0aW1lIHRoZXkgaGF2ZSBsZWZ0LlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIk1vb2RsZVwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjEsIGRvY191c2VyOlwibW9vZGxlX3RlYWNoZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL21vb2RsZS5iZWVrZWUuYm94XCIsIGljb246XCJtb29kbGUucG5nXCIsIGRlc2NyaXB0aW9uOlwiTW9vZGxlIGlzIGEgZnJlZSwgb25saW5lIExlYXJuaW5nIE1hbmFnZW1lbnQgc3lzdGVtIGVuYWJsaW5nIGVkdWNhdG9ycyB0byBjcmVhdGUgdGhlaXIgb3duIHByaXZhdGUgd2Vic2l0ZSBmaWxsZWQgd2l0aCBkeW5hbWljIGNvdXJzZXMgdGhhdCBleHRlbmQgbGVhcm5pbmcsIGFueSB0aW1lLCBhbnl3aGVyZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMy4xMS4yXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJLb2xpYnJpXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MiwgZG9jX3VzZXI6XCJrb2xpYnJpX3VzZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2tvbGlicmkuYmVla2VlLmJveFwiLCBpY29uOlwia29saWJyaS5wbmdcIiwgZGVzY3JpcHRpb246XCJLb2xpYnJpIGlzIGFuIG9wZW4tc291cmNlIGVkdWNhdGlvbmFsIHBsYXRmb3JtIHNwZWNpYWxseSBkZXNpZ25lZCB0byBwcm92aWRlIG9mZmxpbmUgYWNjZXNzIHRvIGEgd2lkZSByYW5nZSBvZiBxdWFsaXR5LCBvcGVubHkgbGljZW5zZWQgZWR1Y2F0aW9uYWwgcmVzb3VyY2VzIGluIGxvdy1yZXNvdXJjZSBjb250ZXh0cyBsaWtlIHJ1cmFsIHNjaG9vbHMsIHJlZnVnZWUgY2FtcHMsIG9ycGhhbmFnZXMsIGFuZCBhbHNvIGluIG5vbi1mb3JtYWwgc2Nob29sIHByb2dyYW1zLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjE0LjdcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHQvLyB7bmFtZTpcIkV0aGVycGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2V0aGVycGFkLmJlZWtlZS5ib3hcIiwgaWNvbjpcImV0aGVycGFkLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkV0aGVycGFkIGFsbG93cyB5b3UgdG8gZWRpdCBkb2N1bWVudHMgY29sbGFib3JhdGl2ZWx5IGluIHJlYWwtdGltZSwgbXVjaCBsaWtlIGEgbGl2ZSBtdWx0aS1wbGF5ZXIgZWRpdG9yIHRoYXQgcnVucyBpbiB5b3VyIGJyb3dzZXIuIFdyaXRlIGFydGljbGVzLCBwcmVzcyByZWxlYXNlcywgdG8tZG8gbGlzdHMsIGV0Yy4gdG9nZXRoZXIgd2l0aCB5b3VyIGZyaWVuZHMsIGZlbGxvdyBzdHVkZW50cyBvciBjb2xsZWFndWVzLCBhbGwgd29ya2luZyBvbiB0aGUgc2FtZSBkb2N1bWVudCBhdCB0aGUgc2FtZSB0aW1lLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjguMTRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlN0b3JtXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3N0b3JtLmJlZWtlZS5ib3hcIiwgaWNvbjpcInN0b3JtLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhbmQgYW5pbWF0ZSBsaXZlIHN1cnZleXMsIGJyYWluc3Rvcm1zIGFuZCBxdWl6emVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjQuNVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiUGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3BhZC5iZWVrZWUuYm94XCIsIGljb246XCJwYWQucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGNvbGxhYm9yYXRpdmUgd2FsbHMgdG8gc2hhcmUgYW5kIG9yZ2FuaXplIGNvbnRlbnQuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJCdXp6ZXJcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOnRydWUsIG9yZGVyOjYsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9idXp6ZXIuYmVla2VlLmJveFwiLCBpY29uOlwiYnV6emVyLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhIHZpcnR1YWwgZ2FtaW5nIHJvb20gYXJvdW5kIGEgY29ubmVjdGVkIGJ1enplci5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4yLjRcIiwgaGlkZGVuOmZhbHNlfSxcblxuXHRdO1xuXG5cdF8uZWFjaChkZWZhdWx0QXBwcywgZnVuY3Rpb24gKGRlZmF1bHRBcHBzKSB7XG5cdFx0QXBwcy5pbnNlcnQoZGVmYXVsdEFwcHMpO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBIVFRQIH0gZnJvbSAnbWV0ZW9yL2h0dHAnXG5pbXBvcnQgeyBXaWZpQ2xpZW50TW9kZVN0YXRlIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvd2lmaUNsaWVudE1vZGVTdGF0ZS5qcyc7XG5cbk1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuXG5cdGlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHR2YXIgZnMgPSBOcG0ucmVxdWlyZSgnZnMnKTtcblx0ZXhlYyA9IE5wbS5yZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuZXhlYztcblx0Y21kID0gTWV0ZW9yLndyYXBBc3luYyhleGVjKTtcblxuXHR2YXIgd2lmaVNldHRpbmdzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy53aWZpU2V0dGluZ3NQYXRoO1xuXHR2YXIgY29uZmlnUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5jb25maWdQYXRoO1xuXHR2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGggfHwgJy9ob21lL2JlZWtlZS9zY3JpcHRzJztcblx0dmFyIHdpZmlDbGllbnRFbmFibGVTY3JpcHROYW1lID0gJ3N3aXRjaF93aWZpX3RvX2NsaWVudC5zaCc7XG5cdHZhciB3aWZpQ2xpZW50RGlzYWJsZVNjcmlwdE5hbWUgPSAnc3dpdGNoX3dpZmlfdG9fYXAuc2gnO1xuXHR2YXIgd2lmaUNsaWVudE1vZGVTdGF0ZVBhdGggPSBNZXRlb3Iuc2V0dGluZ3Mud2lmaUNsaWVudE1vZGVTdGF0ZVBhdGggfHwgYCR7c2NyaXB0c1BhdGh9Ly53aWZpLWNsaWVudC1tb2RlLXN0YXRlYDtcblx0Y29uc3QgcmVhZGxpbmUgPSByZXF1aXJlKCdyZWFkbGluZScpO1xuXG5cdGZ1bmN0aW9uIHNoZWxsRXNjYXBlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIGAnJHtTdHJpbmcodmFsdWUpLnJlcGxhY2UoLycvZywgYCdcXFxcJydgKX0nYDtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlc29sdmVTY3JpcHRQYXRoKHNjcmlwdE5hbWUpIHtcblx0XHRyZXR1cm4gYCR7c2NyaXB0c1BhdGh9LyR7c2NyaXB0TmFtZX1gO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVhZFdpZmlDbGllbnRNb2RlU3RhdGUoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghZnMuZXhpc3RzU3luYyh3aWZpQ2xpZW50TW9kZVN0YXRlUGF0aCkpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN0YXRlID0gZnMucmVhZEZpbGVTeW5jKHdpZmlDbGllbnRNb2RlU3RhdGVQYXRoLCAndXRmLTgnKS50cmltKCk7XG5cblx0XHRcdGlmIChzdGF0ZSA9PT0gJ2VuYWJsZWQnKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3RhdGUgPT09ICdkaXNhYmxlZCcpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgcmVhZGluZyBXaS1GaSBjbGllbnQgbW9kZSBzdGF0ZTonLCBlcnJvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiB3cml0ZVdpZmlDbGllbnRNb2RlU3RhdGUoZW5hYmxlZCkge1xuXHRcdHRyeSB7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKFxuXHRcdFx0XHR3aWZpQ2xpZW50TW9kZVN0YXRlUGF0aCxcblx0XHRcdFx0ZW5hYmxlZCA/ICdlbmFibGVkXFxuJyA6ICdkaXNhYmxlZFxcbicsXG5cdFx0XHRcdCd1dGYtOCdcblx0XHRcdCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciB3cml0aW5nIFdpLUZpIGNsaWVudCBtb2RlIHN0YXRlOicsIGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBwZXJzaXN0V2lmaUNsaWVudE1vZGVTdGF0ZShlbmFibGVkKSB7XG5cdFx0d3JpdGVXaWZpQ2xpZW50TW9kZVN0YXRlKGVuYWJsZWQpO1xuXHRcdFdpZmlDbGllbnRNb2RlU3RhdGUudXBzZXJ0KFxuXHRcdFx0eyBfaWQ6ICd3aWZpLWNsaWVudC1tb2RlLXN0YXRlJyB9LFxuXHRcdFx0e1xuXHRcdFx0XHQkc2V0OiB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogZW5hYmxlZCA9PT0gdHJ1ZSxcblx0XHRcdFx0XHR1cGRhdGVkQXQ6IG5ldyBEYXRlKClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRmdW5jdGlvbiBkZXRlY3RXaWZpQWNjZXNzUG9pbnRNb2RlRnJvbVN5c3RlbSgpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgaGFzV2xhblVzYiA9IGNtZCgnaXAgbGluayBzaG93IHdsYW51c2IgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlJykudG9TdHJpbmcoKS50cmltKCk7XG5cblx0XHRcdGlmIChoYXNXbGFuVXNiICE9PSAndHJ1ZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBoYXNBcEFkZHJlc3MgPSBjbWQoXCJpcCAtNCBhZGRyIHNob3cgd2xhbnVzYiB8IGdyZXAgLXEgJzEwXFxcXC4xXFxcXC4wXFxcXC4xLzI0JyAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiKS50b1N0cmluZygpLnRyaW0oKTtcblxuXHRcdFx0cmV0dXJuIGhhc0FwQWRkcmVzcyA9PT0gJ3RydWUnO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgZGV0ZWN0aW5nIFdpLUZpIGFjY2VzcyBwb2ludCBtb2RlIGZyb20gc3lzdGVtOicsIGVycm9yKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBkZXRlY3RXaWZpQ2xpZW50TW9kZUZyb21TeXN0ZW0oKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChkZXRlY3RXaWZpQWNjZXNzUG9pbnRNb2RlRnJvbVN5c3RlbSgpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaGFzV2xhblVzYiA9IGNtZCgnaXAgbGluayBzaG93IHdsYW51c2IgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlJykudG9TdHJpbmcoKS50cmltKCk7XG5cblx0XHRcdGlmIChoYXNXbGFuVXNiICE9PSAndHJ1ZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBubVN0YXRlID0gY21kKFwibm1jbGkgLXQgLWYgREVWSUNFLFNUQVRFIGRldmljZSBzdGF0dXMgMj4vZGV2L251bGwgfCBhd2sgLUY6ICckMT09XFxcIndsYW51c2JcXFwiIHtwcmludCAkMjsgZXhpdH0nIHx8IHRydWVcIikudG9TdHJpbmcoKS50cmltKCk7XG5cblx0XHRcdHJldHVybiAvXihjb25uZWN0ZWR8ZGlzY29ubmVjdGVkfGNvbm5lY3Rpbmd8cHJlcGFyaW5nKS8udGVzdChubVN0YXRlKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGRldGVjdGluZyBXaS1GaSBjbGllbnQgbW9kZSBmcm9tIHN5c3RlbTonLCBlcnJvcik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpIHtcblx0XHRpZiAoZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0oKSkge1xuXHRcdFx0cGVyc2lzdFdpZmlDbGllbnRNb2RlU3RhdGUoZmFsc2UpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRldGVjdGVkU3RhdGUgPSBkZXRlY3RXaWZpQ2xpZW50TW9kZUZyb21TeXN0ZW0oKTtcblx0XHRwZXJzaXN0V2lmaUNsaWVudE1vZGVTdGF0ZShkZXRlY3RlZFN0YXRlKTtcblx0XHRyZXR1cm4gZGV0ZWN0ZWRTdGF0ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpIHtcblx0XHRpZiAoIWdldFdpZmlDbGllbnRNb2RlU3RhdGUoKSkge1xuXHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignd2lmaS1jbGllbnQtbW9kZS1kaXNhYmxlZCcsICdFbmFibGUgV2ktRmkgY2xpZW50IG1vZGUgYmVmb3JlIHNjYW5uaW5nIG9yIGNvbm5lY3RpbmcuJyk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q2xpZW50U1NJREZyb21TeXN0ZW0oKSB7XG5cdFx0bGV0IHNzaWQ7XG5cdFx0dHJ5IHtcblx0XHRcdHNzaWQgPSBjbWQoJ2l3Z2V0aWQgLXIgd2xhbnVzYiAyPi9kZXYvbnVsbCB8fCB0cnVlJykudHJpbSgpO1xuXG5cdFx0XHRpZiAoIXNzaWQpIHtcblx0XHRcdFx0c3NpZCA9IGNtZCgnbm1jbGkgLWcgR0VORVJBTC5DT05ORUNUSU9OIGRldmljZSBzaG93IHdsYW51c2IgMj4vZGV2L251bGwgfCBoZWFkIC1uIDEgfHwgdHJ1ZScpLnRyaW0oKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNzaWQgPT09ICctLScpIHtcblx0XHRcdFx0c3NpZCA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIHNzaWQgPT09ICdzdHJpbmcnICYmIHNzaWQgIT09ICcnKSB7XG5cdFx0XHRcdHJldHVybiBzc2lkO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgcmV0cmlldmluZyBjbGllbnQgU1NJRDonLCBlcnJvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICdOb3QgY29ubmVjdGVkJztcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENsaWVudEJTU0lERnJvbVN5c3RlbSgpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgYnNzaWQgPSBjbWQoXCJpdyBkZXYgd2xhbnVzYiBsaW5rIDI+L2Rldi9udWxsIHwgYXdrICcvQ29ubmVjdGVkIHRvLyB7cHJpbnQgJDM7IGV4aXR9JyB8fCB0cnVlXCIpLnRyaW0oKTtcblxuXHRcdFx0aWYgKGJzc2lkICYmIGJzc2lkICE9PSAnTm90IGNvbm5lY3RlZCcpIHtcblx0XHRcdFx0cmV0dXJuIGJzc2lkLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciByZXRyaWV2aW5nIGNsaWVudCBCU1NJRDonLCBlcnJvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDbGllbnRDb25uZWN0aW9uSW5mb0Zyb21TeXN0ZW0oKSB7XG5cdFx0Y29uc3Qgc3NpZCA9IGdldENsaWVudFNTSURGcm9tU3lzdGVtKCk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c3NpZDogc3NpZCxcblx0XHRcdGJzc2lkOiBzc2lkID09PSAnTm90IGNvbm5lY3RlZCcgPyBudWxsIDogZ2V0Q2xpZW50QlNTSURGcm9tU3lzdGVtKClcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gd2FpdChtaWxsaXNlY29uZHMpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdHNldFRpbWVvdXQocmVzb2x2ZSwgbWlsbGlzZWNvbmRzKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEludGVybmV0SW50ZXJmYWNlRnJvbVN5c3RlbSgpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzID0gY21kKFwiaXAgcm91dGUgZ2V0IDEuMi4zLjQgfCBhd2sgJ3twcmludCAkNTsgZXhpdH0nXCIpLnRvU3RyaW5nKCkudHJpbSgpO1xuXHRcdFx0cmV0dXJuIHJlcyB8fCAnVW5rbm93bic7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBpbnRlcm5ldCBpbnRlcmZhY2U6XCIsIGVycm9yKTtcblx0XHRcdHJldHVybiAnRXJyb3InO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGdldEludGVyZmFjZUlQQWRkcmVzc0Zyb21TeXN0ZW0oaW50ZXJmYWNlTmFtZSkge1xuXHRcdGlmICghL15bYS16QS1aMC05Xy46LV0rJC8udGVzdChpbnRlcmZhY2VOYW1lIHx8ICcnKSkge1xuXHRcdFx0cmV0dXJuICdVbmF2YWlsYWJsZSc7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlcyA9IGNtZChgaXAgLTQgYWRkciBzaG93ICR7c2hlbGxFc2NhcGUoaW50ZXJmYWNlTmFtZSl9IHwgYXdrICcvaW5ldCAvIHtwcmludCAkMjsgZXhpdH0nIHwgY3V0IC1kLyAtZjEgfHwgdHJ1ZWApLnRvU3RyaW5nKCkudHJpbSgpO1xuXHRcdFx0cmV0dXJuIHJlcyB8fCAnVW5hdmFpbGFibGUnO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhgRXJyb3IgcmV0cmlldmluZyBJUCBhZGRyZXNzIGZvciAke2ludGVyZmFjZU5hbWV9OmAsIGVycm9yKTtcblx0XHRcdHJldHVybiAnVW5hdmFpbGFibGUnO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGdldEludGVyZmFjZU1BQ0FkZHJlc3NGcm9tU3lzdGVtKGludGVyZmFjZU5hbWUpIHtcblx0XHRpZiAoIS9eW2EtekEtWjAtOV8uOi1dKyQvLnRlc3QoaW50ZXJmYWNlTmFtZSB8fCAnJykpIHtcblx0XHRcdHJldHVybiAnVW5hdmFpbGFibGUnO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXMgPSBjbWQoYGNhdCAvc3lzL2NsYXNzL25ldC8ke3NoZWxsRXNjYXBlKGludGVyZmFjZU5hbWUpfS9hZGRyZXNzIDI+L2Rldi9udWxsIHx8IHRydWVgKS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdHJldHVybiByZXMgPyByZXMudG9VcHBlckNhc2UoKSA6ICdVbmF2YWlsYWJsZSc7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGBFcnJvciByZXRyaWV2aW5nIE1BQyBhZGRyZXNzIGZvciAke2ludGVyZmFjZU5hbWV9OmAsIGVycm9yKTtcblx0XHRcdHJldHVybiAnVW5hdmFpbGFibGUnO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGlzQ2VsbHVsYXJJbnRlcm5ldEludGVyZmFjZShpbnRlcmZhY2VOYW1lKSB7XG5cdFx0cmV0dXJuIGludGVyZmFjZU5hbWUgPT09ICd3d2FuMCcgfHwgaW50ZXJmYWNlTmFtZSA9PT0gJ01vYmlsZSc7XG5cdH1cblxuXHRcdGFzeW5jIGZ1bmN0aW9uIHdhaXRGb3JDbGllbnRTU0lEKGV4cGVjdGVkU1NJRCwgdGltZW91dE1pbGxpc2Vjb25kcykge1xuXHRcdFx0Y29uc3QgZGVhZGxpbmUgPSBEYXRlLm5vdygpICsgdGltZW91dE1pbGxpc2Vjb25kcztcblxuXHRcdFx0d2hpbGUgKERhdGUubm93KCkgPCBkZWFkbGluZSkge1xuXHRcdFx0XHRpZiAoZ2V0Q2xpZW50U1NJREZyb21TeXN0ZW0oKSA9PT0gZXhwZWN0ZWRTU0lEKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRhd2FpdCB3YWl0KDEwMDApO1xuXHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldEludGVybmV0U2hhcmluZ1N0YXR1c1dpZmlDbGllbnRGcm9tU3lzdGVtKCkge1xuXHRcdFx0aWYgKCFnZXRXaWZpQ2xpZW50TW9kZVN0YXRlKCkpIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXHRcdFx0dmFyIGxpc3ROYXRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtdCBuYXQgLVMgUE9TVFJPVVRJTkcnO1xuXG5cdFx0XHR2YXIgZm9yd2FyZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cdFx0XHR2YXIgbmF0UmVzdWx0ID0gY21kKGxpc3ROYXRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHRpZiAoIWZvcndhcmRSZXN1bHQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignY29tbWFuZC1leGVjdXRpb24tZXJyb3InLCAnVGhlIEZPUldBUkQgY2hhaW4gY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LicpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIW5hdFJlc3VsdCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdjb21tYW5kLWV4ZWN1dGlvbi1lcnJvcicsICdUaGUgUE9TVFJPVVRJTkcgY2hhaW4gY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LicpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc2hhcmluZ0Zyb21XbGFuaW50VG9XbGFudXNiID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFuaW50IC1vIHdsYW51c2IgLWogQUNDRVBUJyk7XG5cdFx0XHR2YXIgc2hhcmluZ1RvV2xhbmludEZyb21XbGFudXNiRXN0YWJsaXNoZWQgPSBmb3J3YXJkUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW51c2IgLW8gd2xhbmludCAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyk7XG5cdFx0XHR2YXIgbmF0Rm9yV2xhbmludCA9IG5hdFJlc3VsdC5pbmNsdWRlcygnLUEgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gd2xhbnVzYiAtaiBNQVNRVUVSQURFJyk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0c2hhcmluZ0Zyb21XbGFuaW50VG9XbGFudXNiICYmXG5cdFx0XHRcdHNoYXJpbmdUb1dsYW5pbnRGcm9tV2xhbnVzYkVzdGFibGlzaGVkICYmXG5cdFx0XHRcdG5hdEZvcldsYW5pbnRcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGVuYWJsZUludGVybmV0U2hhcmluZ1dpZmlDbGllbnRJblN5c3RlbSgpIHtcblx0XHRcdGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXG5cdFx0XHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSB3bGFuaW50IC1vIHdsYW51c2IgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3bGFuaW50IC1vIHdsYW51c2IgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSB3bGFudXNiIC1vIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd2xhbnVzYiAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUMgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gd2xhbnVzYiAtaiBNQVNRVUVSQURFIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1BIFBPU1RST1VUSU5HIC1zIDEwLjAuMC4wLzI0IC1vIHdsYW51c2IgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0XHRdLmpvaW4oJyAmJiAnKTtcblxuXHRcdFx0Y21kKGlwdGFibGVzQ29tbWFuZHMpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZGlzYWJsZUludGVybmV0U2hhcmluZ1dpZmlDbGllbnRJblN5c3RlbSgpIHtcblx0XHRcdHZhciBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gW1xuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW5pbnQgLS1vdXQtaW50ZXJmYWNlIHdsYW51c2IgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFudXNiIC0tb3V0LWludGVyZmFjZSB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLXNvdXJjZSAxMC4wLjAuMC8yNCAtLW91dC1pbnRlcmZhY2Ugd2xhbnVzYiAtaiBNQVNRVUVSQURFJ1xuXHRcdFx0XTtcblxuXHRcdFx0ZnVuY3Rpb24gZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kKSB7XG5cdFx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGNtZChjb21tYW5kKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcblx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0Q2FwdGl2ZVBvcnRhbFN0YXR1c0Zyb21TeXN0ZW0oKSB7XG5cdFx0XHRjb25zdCBzc2lkID0gZ2V0Q2xpZW50U1NJREZyb21TeXN0ZW0oKTtcblxuXHRcdGlmIChzc2lkID09PSAnTm90IGNvbm5lY3RlZCcpIHtcblx0XHRcdHJldHVybiB7IGRldGVjdGVkOiBmYWxzZSwgdXJsOiBudWxsLCBzc2lkOiBzc2lkIH07XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY21kKFxuXHRcdFx0XHQnY3VybCAtLWludGVyZmFjZSB3bGFudXNiIC1zIC1tIDggLUwgLUQgLSAtbyAvZGV2L251bGwgLXcgXCJcXFxcbkNVUkxfRUZGRUNUSVZFX1VSTDole3VybF9lZmZlY3RpdmV9XFxcXG5cIiBodHRwOi8vY29ubmVjdGl2aXR5Y2hlY2suZ3N0YXRpYy5jb20vZ2VuZXJhdGVfMjA0IHx8IHRydWUnXG5cdFx0XHQpLnRvU3RyaW5nKCk7XG5cdFx0XHRjb25zdCBzdGF0dXNNYXRjaCA9IHJlc3BvbnNlLm1hdGNoKC9IVFRQXFwvWzAtOS5dK1xccysoXFxkezN9KS8pO1xuXHRcdFx0Y29uc3QgbG9jYXRpb25NYXRjaCA9IHJlc3BvbnNlLm1hdGNoKC9eW0xsXW9jYXRpb246XFxzKiguKykkL20pO1xuXHRcdFx0Y29uc3QgZWZmZWN0aXZlVXJsTWF0Y2ggPSByZXNwb25zZS5tYXRjaCgvQ1VSTF9FRkZFQ1RJVkVfVVJMOiguKykkL20pO1xuXHRcdFx0Y29uc3Qgc3RhdHVzQ29kZSA9IHN0YXR1c01hdGNoID8gcGFyc2VJbnQoc3RhdHVzTWF0Y2hbMV0sIDEwKSA6IG51bGw7XG5cdFx0XHRsZXQgdXJsID0gbG9jYXRpb25NYXRjaCA/IGxvY2F0aW9uTWF0Y2hbMV0udHJpbSgpIDogbnVsbDtcblx0XHRcdGNvbnN0IGVmZmVjdGl2ZVVybCA9IGVmZmVjdGl2ZVVybE1hdGNoID8gZWZmZWN0aXZlVXJsTWF0Y2hbMV0udHJpbSgpIDogbnVsbDtcblxuXHRcdFx0aWYgKHVybCAmJiAvXlxcL1xcLy8udGVzdCh1cmwpKSB7XG5cdFx0XHRcdHVybCA9IGBodHRwOiR7dXJsfWA7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh1cmwgJiYgIS9eaHR0cHM/OlxcL1xcLy9pLnRlc3QodXJsKSkge1xuXHRcdFx0XHR1cmwgPSAnaHR0cDovL25ldmVyc3NsLmNvbSc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh1cmwgJiYgIS9uZXZlcnNzbFxcLmNvbS9pLnRlc3QodXJsKSAmJiAhL2Nvbm5lY3Rpdml0eWNoZWNrXFwuZ3N0YXRpY1xcLmNvbS9pLnRlc3QodXJsKSkge1xuXHRcdFx0XHRyZXR1cm4geyBkZXRlY3RlZDogdHJ1ZSwgdXJsOiB1cmwsIHNzaWQ6IHNzaWQsIHN0YXR1c0NvZGU6IHN0YXR1c0NvZGUgfTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRlZmZlY3RpdmVVcmwgJiZcblx0XHRcdFx0IS9eaHR0cDpcXC9cXC9jb25uZWN0aXZpdHljaGVja1xcLmdzdGF0aWNcXC5jb21cXC9nZW5lcmF0ZV8yMDRcXC8/JC9pLnRlc3QoZWZmZWN0aXZlVXJsKSAmJlxuXHRcdFx0XHQhL15odHRwOlxcL1xcLyhbXi9dK1xcLik/bmV2ZXJzc2xcXC5jb20oXFwvfCQpL2kudGVzdChlZmZlY3RpdmVVcmwpXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIHsgZGV0ZWN0ZWQ6IHRydWUsIHVybDogZWZmZWN0aXZlVXJsLCBzc2lkOiBzc2lkLCBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlIH07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdGF0dXNDb2RlID09PSAyMDQpIHtcblx0XHRcdFx0cmV0dXJuIHsgZGV0ZWN0ZWQ6IGZhbHNlLCB1cmw6IG51bGwsIHNzaWQ6IHNzaWQsIHN0YXR1c0NvZGU6IHN0YXR1c0NvZGUgfTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGRldGVjdGluZyBjYXB0aXZlIHBvcnRhbDonLCBlcnJvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHsgZGV0ZWN0ZWQ6IGZhbHNlLCB1cmw6IG51bGwsIHNzaWQ6IHNzaWQgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJ1bldpZmlNb2RlU2NyaXB0KHNjcmlwdE5hbWUpIHtcblx0XHRjb25zdCBzY3JpcHRQYXRoID0gcmVzb2x2ZVNjcmlwdFBhdGgoc2NyaXB0TmFtZSk7XG5cblx0XHRpZiAoIWZzLmV4aXN0c1N5bmMoc2NyaXB0UGF0aCkpIHtcblx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ3dpZmktY2xpZW50LW1vZGUtc2NyaXB0LW1pc3NpbmcnLCBgTWlzc2luZyBXaS1GaSBtb2RlIHNjcmlwdDogJHtzY3JpcHRQYXRofWApO1xuXHRcdH1cblxuXHRcdHJldHVybiBjbWQoYHRpbWVvdXQgNDVzIGJhc2ggJHtzaGVsbEVzY2FwZShzY3JpcHRQYXRoKX1gKTtcblx0fVxuXG5cdGlmIChkZXRlY3RXaWZpQWNjZXNzUG9pbnRNb2RlRnJvbVN5c3RlbSgpKSB7XG5cdFx0cGVyc2lzdFdpZmlDbGllbnRNb2RlU3RhdGUoZmFsc2UpO1xuXHR9IGVsc2Uge1xuXHRcdHBlcnNpc3RXaWZpQ2xpZW50TW9kZVN0YXRlKGRldGVjdFdpZmlDbGllbnRNb2RlRnJvbVN5c3RlbSgpKTtcblx0fVxuXG5cblx0TWV0ZW9yLm1ldGhvZHMoe1xuXG5cdFx0J2FkbWluU2V0TmV3UGFzc3dvcmQnOiBmdW5jdGlvbihhZG1pbklkLCB1c2VySWQsIG5ld1Bhc3N3b3JkKSB7IC8vIEFkbWluIGNhbiBmb3JjaWJseSBjaGFuZ2UgdGhlIHBhc3N3b3JkIGZvciBhIHVzZXJcblx0XHRcdGlmIChSb2xlcy51c2VySXNJblJvbGUoYWRtaW5JZCwgJ2FkbWluJykpIHtcblx0XHRcdFx0QWNjb3VudHMuc2V0UGFzc3dvcmQodXNlcklkLCBuZXdQYXNzd29yZCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnY3JlYXRlQWNjb3VudCc6IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCwgcHJvZmlsZSkge1xuXHRcdFx0cmV0dXJuIEFjY291bnRzLmNyZWF0ZVVzZXIoe2VtYWlsOmVtYWlsLHBhc3N3b3JkOnBhc3N3b3JkLHByb2ZpbGU6cHJvZmlsZX0pOyAvLyBDYWxsYmFjayBpcyBub3Qgc3VwcG9ydGVkIG9uIHNlcnZlci1zaWRlXG5cdFx0fSxcblx0XHQnZWRpdEFjY291bnQnOiBmdW5jdGlvbih1c2VySWQsIGVtYWlsLCBwYXNzd29yZCwgcHJvZmlsZSkge1xuXHRcdFx0TWV0ZW9yLnVzZXJzLnVwZGF0ZSh7X2lkOiB1c2VySWR9LCB7XG5cdCAgXHRcdFx0JHNldDoge1xuXHQgICAgXHRcdFx0J2VtYWlscy4wLmFkZHJlc3MnOiBlbWFpbCxcblx0ICAgIFx0XHRcdHByb2ZpbGU6IHByb2ZpbGVcblx0ICBcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGlmIChwYXNzd29yZCkge1xuXHRcdFx0XHRBY2NvdW50cy5zZXRQYXNzd29yZCh1c2VySWQsIHBhc3N3b3JkKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdjaGFuZ2VFbWFpbCc6IGZ1bmN0aW9uKGVtYWlsKSB7XG5cdFx0XHR2YXIgZW1haWwgPSBlbWFpbDtcblx0XHRcdGNoZWNrKGVtYWlsLCBTdHJpbmcpO1xuXHRcdFx0dmFyIHVzZXIgPSBNZXRlb3IudXNlcigpO1xuXHRcdFx0dmFyIG9sZGVtYWlsID0gdXNlci5lbWFpbHM7XG5cdFx0XHR2YXIgZW1haWxSZWcgPSAvXihbXFx3LVxcLl0rQChbXFx3LV0rXFwuKStbXFx3LV17Miw0fSk/JC87XG5cdFx0XHRpZiAoZW1haWxSZWcudGVzdChlbWFpbCkpIHtcblx0XHRcdGlmKG9sZGVtYWlsICE9IG51bGwpe1xuXHRcdFx0ICBBY2NvdW50cy5yZW1vdmVFbWFpbCh1c2VyLl9pZCwgdXNlci5lbWFpbHNbMF0uYWRkcmVzcylcblx0XHRcdH1cblx0XHRcdEFjY291bnRzLmFkZEVtYWlsKHVzZXIuX2lkLCBlbWFpbCk7XG5cdFx0XHRyZXR1cm4gZW1haWw7XG5cdFx0ICB9IGVsc2Vcblx0XHQgIHJldHVybiBudWxsXG5cdFx0IH0sXG5cdFx0J2RlbGV0ZVVzZXInOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdE1ldGVvci51c2Vycy5yZW1vdmUodXNlcklkLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHdoZW4gZGVsZXRpbmcgdXNlciA6IFwiK2Vycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdhZGRNYW5hZ2VyUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJZCwgJ21hbmFnZXInKTtcblx0XHR9LFxuXHRcdCdyZW1vdmVNYW5hZ2VyUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMucmVtb3ZlVXNlcnNGcm9tUm9sZXModXNlcklkLCAnbWFuYWdlcicpO1xuXHRcdH0sXG5cdFx0J2FkZEFkbWluUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJZCwgJ2FkbWluJyk7XG5cdFx0fSxcblx0XHQncmVtb3ZlQWRtaW5Sb2xlJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRSb2xlcy5yZW1vdmVVc2Vyc0Zyb21Sb2xlcyh1c2VySWQsICdhZG1pbicpO1xuXHRcdH0sXG5cblx0XHQvLyAnZ2V0VXNlZFNwYWNlJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0cmVzID0gY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIikgKyBcIi8gXCIgKyBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKSArIFwiIChcIitjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKStcInVzZWQpXCI7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzO1xuXHRcdC8vIH0sXG5cdFx0J3J1bkNvbW1hbmQnOiBmdW5jdGlvbihwYXNzd29yZCwgY29tbWFuZCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcImVjaG8gXCIrcGFzc3dvcmQrXCIgfCBzdWRvIC1TIFwiK2NvbW1hbmQpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRVc2VkU3BhY2UnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXMgPSB7fTtcblx0XHRcdC8vcmVzID0gY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIikgKyBcIi8gXCIgKyBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKSArIFwiIChcIitjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKStcInVzZWQpXCI7XG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIilcblx0XHRcdHJlcy5zdG9yYWdlVXNhZ2UgPSByZXMuc3RvcmFnZVVzYWdlLzEwMDAwMDA7XG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gcmVzLnN0b3JhZ2VVc2FnZS50b0ZpeGVkKDIpO1xuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpXG5cdFx0XHRyZXMuc3RvcmFnZVRvdGFsID0gcmVzLnN0b3JhZ2VUb3RhbC8xMDAwMDAwO1xuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IHJlcy5zdG9yYWdlVG90YWwudG9GaXhlZCgyKTtcblx0XHRcdHJlcy5wZXJjZW50YWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFNTSUQnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnc3NpZD0oLiopJykpO1xuICBcdFx0XHR2YXIgU1NJRCA9IG1hdGNoWzFdO1xuICBcdFx0XHRTU0lEID0gZGVjb2RlVVJJQ29tcG9uZW50KFNTSUQucmVwbGFjZSgvLi4vZywgJyUkJicpKVxuICBcdFx0XHRyZXR1cm4gU1NJRDtcblx0XHR9LFxuXHRcdCdzZXRTU0lEJzogZnVuY3Rpb24obmV3U1NJRCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdGNvbnN0IGVuY29kZWROZXdTU0lEID0gbmV3IEJ1ZmZlcihuZXdTU0lEKS50b1N0cmluZygnaGV4Jyk7IC8vIENvbnZlcnQgaW50byBIZXhcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdzc2lkPSguKiknKSlbMV0sIGVuY29kZWROZXdTU0lEKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0V2lmaVBhc3N3b3JkJzogZnVuY3Rpb24oKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3Bhc3N3b3JkPSguKiknKSk7XG4gIFx0XHRcdHZhciBwYXNzd29yZCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gcGFzc3dvcmQ7XG5cdFx0fSxcblx0XHQnc2V0V2lmaVBhc3N3b3JkJzogZnVuY3Rpb24obmV3UGFzc3dvcmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3Bhc3N3b3JkPSguKiknKSlbMV0sIG5ld1Bhc3N3b3JkKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0V2lmaUNoYW5uZWwnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJykpO1xuICBcdFx0XHR2YXIgY2hhbm5lbCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gY2hhbm5lbDtcblx0XHR9LFxuXHRcdCdzZXRXaWZpQ2hhbm5lbCc6IGZ1bmN0aW9uKG5ld0NoYW5uZWwpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpKVsxXSwgbmV3Q2hhbm5lbCk7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0Ly8gJ2dldFdpZmlCYW5kJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcblx0XHQvLyBcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnYmFuZD0oLiopJykpO1xuXG5cdFx0Ly8gXHRpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHQvLyBcdCAgcmV0dXJuIG1hdGNoWzFdO1xuXHRcdC8vIFx0fSBlbHNlIHtcblx0XHQvLyBcdCAgLy8gUmV0dXJuIGRlZmF1bHQgdmFsdWUgaWYgdGhlIGJhbmQgc2V0dGluZyBkb2VzIG5vdCBleGlzdFxuXHRcdC8vIFx0ICByZXR1cm4gJzIuNEdIeic7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gICB9LFxuXHRcdC8vICdzZXRXaWZpQmFuZCc6IGZ1bmN0aW9uKG5ld0JhbmQpIHtcblx0XHQvLyBcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuXHRcdC8vIFx0dmFyIGJhbmRSZWdleCA9IG5ldyBSZWdFeHAoJ2JhbmQ9KC4qKScpO1xuXHRcdC8vIFx0dmFyIGNoYW5uZWxSZWdleCA9IG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpO1xuXHRcdC8vIFx0dmFyIG1hdGNoQmFuZCA9IGRhdGEubWF0Y2goYmFuZFJlZ2V4KTtcblx0XHQvLyBcdHZhciBtYXRjaENoYW5uZWwgPSBkYXRhLm1hdGNoKGNoYW5uZWxSZWdleCk7XG5cblx0XHQvLyBcdHZhciBuZXdEYXRhID0gZGF0YTtcblxuXHRcdC8vIFx0aWYgKG1hdGNoQmFuZCkge1xuXHRcdC8vIFx0XHQvLyBSZXBsYWNlIHRoZSBleGlzdGluZyBiYW5kIHNldHRpbmdcblx0XHQvLyBcdFx0bmV3RGF0YSA9IG5ld0RhdGEucmVwbGFjZShiYW5kUmVnZXgsIGBiYW5kPSR7bmV3QmFuZH1gKTtcblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0XHRuZXdEYXRhID0gYCR7bmV3RGF0YS50cmltKCl9XFxuYmFuZD0ke25ld0JhbmR9YDtcblx0XHQvLyBcdH1cblxuXHRcdC8vIFx0aWYgKG1hdGNoQ2hhbm5lbCAmJiBtYXRjaENoYW5uZWxbMV0pIHtcblx0XHQvLyBcdFx0Ly8gQ29udmVydCB0aGUgY2hhbm5lbCB2YWx1ZSB0byBhIG51bWJlclxuXHRcdC8vIFx0XHR2YXIgY3VycmVudENoYW5uZWwgPSBwYXJzZUludChtYXRjaENoYW5uZWxbMV0sIDEwKTtcblxuXHRcdC8vIFx0XHQvLyBTZXQgY2hhbm5lbCB0byBhIGRlZmF1bHQgMi40R0h6IGNoYW5uZWwgaWYgY3VycmVudCBjaGFubmVsIGlzIGZvciA1R0h6XG5cdFx0Ly8gXHRcdGlmIChuZXdCYW5kID09IFwiMi40R0h6XCIgJiYgY3VycmVudENoYW5uZWwgPiAxNCkge1xuXHRcdC8vIFx0XHRcdG5ld0RhdGEgPSBuZXdEYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD0xMWApO1xuXHRcdC8vIFx0XHR9IGVsc2UgaWYgKG5ld0JhbmQgPT0gXCI1R0h6XCIgJiYgY3VycmVudENoYW5uZWwgPD0gMTQpIHtcblx0XHQvLyBcdFx0XHRuZXdEYXRhID0gbmV3RGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9NDRgKTtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fVxuXG5cdFx0Ly8gXHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdC8vIH0sXG5cdFx0Ly8gICAnc2V0V2lmaUJhbmQnOiBmdW5jdGlvbihuZXdCYW5kKSB7XG5cdFx0Ly8gXHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcblx0XHQvLyBcdHZhciBiYW5kUmVnZXggPSBuZXcgUmVnRXhwKCdiYW5kPSguKiknKTtcblx0XHQvLyBcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2goYmFuZFJlZ2V4KTtcblxuXHRcdC8vIFx0aWYgKG1hdGNoKSB7XG5cdFx0Ly8gXHQgIC8vIFJlcGxhY2UgdGhlIGV4aXN0aW5nIGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0ICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShiYW5kUmVnZXgsIGBiYW5kPSR7bmV3QmFuZH1gKTtcblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHQgIC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0ICB2YXIgbmV3RGF0YSA9IGAke2RhdGEudHJpbSgpfVxcbmJhbmQ9JHtuZXdCYW5kfWA7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHR2YXIgY2hhbm5lbFJlZ2V4ID0gbmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJyk7XG5cdFx0Ly8gXHR2YXIgbWF0Y2gyID0gZGF0YS5tYXRjaChjaGFubmVsUmVnZXgpO1xuXHRcdC8vIFx0aWYgKG1hdGNoMiAmJiBtYXRjaDJbMV0pIHtcblx0XHQvLyBcdFx0Ly8gU2V0IGNoYW5uZWwgdG8gYSBkZWZhdWx0IDIuNEdIeiBjaGFubmVsIGlmIGN1cnJlbnQgY2hhbm5lbCBpcyBmb3IgNUdIelxuXHRcdC8vIFx0XHRpZiAobmV3QmFuZCA9PSBcIjIuNEdIelwiICYmIG1hdGNoMlsxXSA+IDE0KSB7XG5cdFx0Ly8gXHRcdFx0Ly8gQXBwZW5kIHRoZSBuZXcgYmFuZCBzZXR0aW5nXG5cdFx0Ly8gXHRcdFx0dmFyIG5ld0RhdGEyID0gZGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9MTFgKTtcblx0XHQvLyBcdFx0fSBlbHNlIGlmIChuZXdCYW5kID09IFwiNUdIelwiICYmIG1hdGNoMlsxXSA8PSAxNCkge1xuXHRcdC8vIFx0XHRcdHZhciBuZXdEYXRhMiA9IGRhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTQ0YCk7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH1cblx0XHQvLyBcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0Ly8gICB9LFxuXHRcdCdnZXRTZXJpYWwnOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ1NFUklBTD0oLiopJykpO1xuICBcdFx0XHR2YXIgc2VyaWFsID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBzZXJpYWw7XG5cdFx0fSxcblx0XHQnZ2V0T3BlcmF0b3JOYW1lJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgb3BlcmF0b3JOYW1lO1xuXHRcdFx0b3BlcmF0b3JOYW1lID0gY21kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtb3BlcmF0b3ItbmFtZSB8IGdyZXAgLW0yICdOYW1lICAgICAgICAgICAgICcgfCBhd2sgJ3twcmludCAkM30nXCIpO1xuXHRcdFx0cmV0dXJuIG9wZXJhdG9yTmFtZTtcblx0XHR9LFxuXHRcdC8vICdnZXRTaWduYWxTdHJlbmd0aCc6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdHZhciBzaWduYWxTdHJlbmd0aDtcblx0XHQvLyBcdHNpZ25hbFN0cmVuZ3RoID0gY21kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayAne3ByaW50ICQzLCAkMn0nXCIpO1xuXHRcdC8vIFx0cmV0dXJuIHNpZ25hbFN0cmVuZ3RoO1xuXHRcdC8vIH0sXG5cdFx0J2dldFNpZ25hbFN0cmVuZ3RoJzogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHNpZ25hbFN0cmVuZ3RoO1xuXHRcdFx0Ly8gVGhpcyBleHRyYWN0cyBqdXN0IHRoZSBudW1lcmljIHBhcnQgb2YgdGhlIHNpZ25hbCBzdHJlbmd0aC5cblx0XHRcdHNpZ25hbFN0cmVuZ3RoID0gY21kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAnTmV0d29yaycgfCBhd2sgJ3twcmludCAkM30nIHwgZ3JlcCAtb0UgJ1stMC05XSsnXCIpO1xuXG5cdFx0XHQvLyBDb252ZXJ0IHNpZ25hbCBzdHJlbmd0aCB0byBhIHF1YWxpdGF0aXZlIHZhbHVlXG5cdFx0XHR2YXIgc3RyZW5ndGhWYWx1ZSA9IHBhcnNlSW50KHNpZ25hbFN0cmVuZ3RoKTtcblx0XHRcdHZhciBxdWFsaXR5ID0gJ1Vua25vd24nO1xuXHRcdFx0aWYgKHN0cmVuZ3RoVmFsdWUgPj0gLTcwKSB7XG5cdFx0XHRcdHF1YWxpdHkgPSAnRXhjZWxsZW50Jztcblx0XHRcdH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtODUpIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdHb29kJztcblx0XHRcdH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtMTAwKSB7XG5cdFx0XHRcdHF1YWxpdHkgPSAnRmFpcic7XG5cdFx0XHR9IGVsc2UgaWYgKHN0cmVuZ3RoVmFsdWUgPCAtMTAwKSB7XG5cdFx0XHRcdHF1YWxpdHkgPSAnUG9vcic7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcXVhbGl0eTtcblx0XHR9LFxuXHRcdC8vICdnZXRJc09ubGluZSc6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdHZhciBpc09ubGluZTtcblx0XHQvLyBcdGlzT25saW5lID0gY21kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayAne3ByaW50ICQzLCAkMn0nXCIpO1xuXHRcdC8vIFx0cmV0dXJuIGlzT25saW5lO1xuXHRcdC8vIH0sXG5cdFx0Ly8gJ2dldEJhbmQnOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHR2YXIgYmFuZDtcbi8vXHRcdFx0YmFuZCA9IGNtZChcInN1ZG8gcW1pY2xpIC1wIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgLW0xIE5ldHdvcmsgfCBhd2sgXFxcIntwcmludCAkMn1cXFwiIHwgY3V0IC1kXFxcXCcgLWYyXCIpO1xuXHRcdC8vIFx0cmV0dXJuIGJhbmQ7XG5cdFx0Ly8gfSxcblx0XHQnZ2V0QVBOJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49KC4qKScpKTtcbiAgXHRcdFx0dmFyIEFQTiA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gQVBOO1xuXHRcdH0sXG5cdFx0J2dldEFQTlVzZXInOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9VU0VSTkFNRT0oLiopJykpO1xuICBcdFx0XHR2YXIgQVBOVXNlciA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gQVBOVXNlcjtcblx0XHR9LFxuXHRcdCdnZXRBUE5QYXNzd29yZCc6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1BBU1NXT1JEPSguKiknKSk7XG4gIFx0XHRcdHZhciBBUE5QYXNzd29yZCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gQVBOUGFzc3dvcmQ7XG5cdFx0fSxcblx0XHQnZ2V0U2ltQ2FyZFN0YXR1cyc6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBzaW1TdGF0dXNSZXN1bHQgPSAnVW5rbm93bic7IC8vIERlZmF1bHQgc3RhdHVzXG5cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgY29tbWFuZCBhbmQgaGFuZGxlIGVycm9yc1xuXHRcdFx0ZnVuY3Rpb24gZXhlY3V0ZUNvbW1hbmQoY29tbWFuZCkge1xuXHRcdFx0XHRsZXQgcmVzdWx0O1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IGNtZChjb21tYW5kKTsgLy8gRXhlY3V0ZSB0aGUgY29tbWFuZFxuXHRcdFx0XHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJiByZXN1bHQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdC8vIENoZWNrIGlmIHJlc3VsdCBpcyBhbiBlcnJvciBvYmplY3Rcblx0XHRcdFx0XHRcdHJldHVybiAnRXJyb3InO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHQvLyBIYW5kbGUgZXhjZXB0aW9ucyBpZiBjb21tYW5kIGV4ZWN1dGlvbiBmYWlsc1xuXHRcdFx0XHRcdHJldHVybiAnRXJyb3InO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7IC8vIFJldHVybiB0aGUgcmVzdWx0IGlmIG5vIGVycm9yc1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFeGVjdXRlIFNJTSBjYXJkIHN0YXR1cyBjaGVjayBjb21tYW5kXG5cdFx0XHRsZXQgc2ltU3RhdHVzID0gZXhlY3V0ZUNvbW1hbmQoXCJzdWRvIHFtaWNsaSAtcCAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tdWltLWdldC1jYXJkLXN0YXR1cyB8IGdyZXAgJ0NhcmQgc3RhdGU6J1wiKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiU0lNIGNhcmQgc3RhdHVzOlwiLCBzaW1TdGF0dXMpOyAvLyBMb2cgdGhlIHJhdyBvdXRwdXRcblx0XHRcdC8vIFByb2Nlc3MgdGhlIG91dHB1dCBhbmQgZGV0ZXJtaW5lIFNJTSBjYXJkIHN0YXR1c1xuXHRcdFx0aWYgKHNpbVN0YXR1cy5pbmNsdWRlcygnbm8tYXRyLXJlY2VpdmVkJykgfHwgc2ltU3RhdHVzLmluY2x1ZGVzKCdub3QtaW5zZXJ0ZWQnKSkge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSAnTm8gU0lNIGNhcmQnO1xuXHRcdFx0fSBlbHNlIGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoJ2Vycm9yJykpIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gc2ltU3RhdHVzOyAvLyBVc2UgdGhlIGVycm9yIG1lc3NhZ2Ugb3Igbm8gU0lNIGRldGVjdGVkIG1lc3NhZ2Vcblx0XHRcdH0gZWxzZSBpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKCdwcmVzZW50JykpIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gJ09LJztcblx0XHRcdH0gZWxzZSBpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKCdsb2NrZWQnKSB8fCBzaW1TdGF0dXMuaW5jbHVkZXMoJ3Bpbi1yZXF1aXJlZCcpKSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9ICdTSU0gY2FyZCBsb2NrZWQsIFBJTiByZXF1aXJlZCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSAnVW5rbm93bic7IC8vIEZvciBvdGhlciBzdGF0dXNlc1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNpbVN0YXR1c1Jlc3VsdDtcblx0XHR9LFxuXHRcdCdnZXRTaW1QaW4nOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ1NJTV9QSU49KC4qKScpKTtcbiAgXHRcdFx0dmFyIFNpbVBpbiA9IG1hdGNoWzFdO1xuXHRcdFx0cmV0dXJuIFNpbVBpbjtcblx0XHR9LFxuXHRcdCdzZXRTaW1QaW4nOiBmdW5jdGlvbihQSU4pIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ1NJTV9QSU49LionKSksICdTSU1fUElOPScrUElOKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOJzogZnVuY3Rpb24oQVBOLCB1c2VyLCBwYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOPS4qJykpLCAnQVBOPScrQVBOKTtcbiAgXHRcdFx0Ly8gdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49KC4qKScpKVsxXSwgQVBOKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOVXNlcic6IGZ1bmN0aW9uKEFQTlVzZXIpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9VU0VSTkFNRT0uKicpKSwgJ0FQTl9VU0VSTkFNRT0nK0FQTlVzZXIpO1xuICBcdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J3NldEFQTlBhc3N3b3JkJzogZnVuY3Rpb24oQVBOUGFzc3dvcmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9QQVNTV09SRD0uKicpKSwgJ0FQTl9QQVNTV09SRD0nK0FQTlBhc3N3b3JkKTtcbiAgXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRSZW1vdGVTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzeXN0ZW1jdGwgaXMtYWN0aXZlIHJlbW90ZS1pb3Quc2VydmljZSA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyAxIHx8IGVjaG8gMFwiKTtcblx0XHRcdGlmIChyZXNbMF0gPT0gXCIxXCIpIHsgLy8gWzBdIGlzIGEgaGFjayBiZWNhdXNlIHRoZSByZXN1bHQgcmVzIGhhcyBvbmUgZXh0cmEgY2hhcmFjdGVyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQnZ2V0QXV0b1N5bmNTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzeXN0ZW1jdGwgaXMtYWN0aXZlIGF1dG9zeW5jLnNlcnZpY2UgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gMSB8fCBlY2hvIDBcIik7XG5cdFx0XHRpZiAocmVzWzBdID09IFwiMVwiKSB7IC8vIFswXSBpcyBhIGhhY2sgYmVjYXVzZSB0aGUgcmVzdWx0IHJlcyBoYXMgb25lIGV4dHJhIGNoYXJhY3RlclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0J2dldFNoYXJlSW50ZXJuZXRWaWFFdGhlcm5ldFN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlzU2hhcmluZztcblx0XHRcdGlzU2hhcmluZyA9IGNtZChcIihzdWRvIGlwdGFibGVzIC10IG5hdCAtTCBQT1NUUk9VVElORyAtdiAtbiB8IGdyZXAgLXEgJ01BU1FVRVJBREUgIGFsbCAgLS0gICogICAgICBldGgwJyAmJiBpcCBsaW5rIHNob3cgZXRoMCB8IGdyZXAgLXEgJ3N0YXRlIFVQJykgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIik7XG5cdFx0XHRyZXR1cm4gaXNTaGFyaW5nO1xuXHRcdH0sXG5cdFx0J2dldFNoYXJlSW50ZXJuZXRWaWFNb2JpbGVTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpc1NoYXJpbmc7XG5cdFx0XHRpc1NoYXJpbmcgPSBjbWQoXCIoc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUwgUE9TVFJPVVRJTkcgLXYgLW4gfCBncmVwIC1xICdNQVNRVUVSQURFICBhbGwgIC0tICAqICAgICAgd3dhbjAnICYmIGlwIGxpbmsgc2hvdyB3d2FuMCB8IGdyZXAgLXEgJ3N0YXRlIFVQJykgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIik7XG5cdFx0XHRyZXR1cm4gaXNTaGFyaW5nO1xuXHRcdH0sXG5cdFx0Ly8gJ2FjdGl2YXRlSW50ZXJuZXRTaGFyaW5nJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0cmVzID0gY21kKFwic3VkbyB3aWZpLWFwLmNvbmZpZyBzZXQgc2hhcmUuZGlzYWJsZWQ9ZmFsc2VcIik7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzO1xuXHRcdC8vIH0sXG5cdFx0Ly8gJ2Rpc2FjdGl2YXRlSW50ZXJuZXRTaGFyaW5nJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0cmVzID0gY21kKFwic3VkbyB3aWZpLWFwLmNvbmZpZyBzZXQgc2hhcmUuZGlzYWJsZWQ9dHJ1ZVwiKTtcblx0XHQvLyBcdHJldHVybiByZXM7XG5cdFx0Ly8gfSxcblx0XHQnYWN0aXZhdGVSZW1vdGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdGFydCByZW1vdGUtaW90LnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZW5hYmxlIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZGlzYWN0aXZhdGVSZW1vdGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdG9wIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBkaXNhYmxlIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnYWN0aXZhdGVBdXRvU3luYyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0YXJ0IGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZW5hYmxlIGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2Rpc2FjdGl2YXRlQXV0b1N5bmMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdG9wIGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZGlzYWJsZSBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRCYXR0ZXJ5U3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0dmFyIHNjcmlwdHNQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnNjcmlwdHNQYXRoO1xuXHRcdFx0cmVzID0gY21kKFwicHl0aG9uMyBcIitzY3JpcHRzUGF0aCtcIi9waWp1aWNlX3N0YXR1cy5weVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQvLyAnZ2V0SXNPbmxpbmUnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciByZXM7XG5cdFx0Ly8gXHR2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGg7XG5cdFx0Ly8gXHQvLyBNYWtlIHN1cmUgeW91ciBzY3JpcHQgaXMgZXhlY3V0YWJsZSwgZS5nLiwgY2htb2QgK3ggY2hlY2tfaW50ZXJuZXQuc2hcblx0XHQvLyBcdHJlcyA9IGNtZChcImJhc2ggXCIgKyBzY3JpcHRzUGF0aCArIFwiL2NoZWNrX2ludGVybmV0LnNoXCIpOyAvLyBSZXBsYWNlICdiYXNoJyB3aXRoICdzaCcgaWYgbmVlZGVkXG5cdFx0Ly8gXHQvLyBUaGUgc2NyaXB0IHJldHVybnMgXCJ0cnVlXCIgb3IgXCJmYWxzZVwiIGFzIGEgc3RyaW5nLCBzbyB3ZSBjb21wYXJlIHRoZSByZXN1bHQgZGlyZWN0bHlcblx0XHQvLyBcdHJldHVybiByZXMudHJpbSgpID09PSBcInRydWVcIjsgLy8gVGhpcyBjb252ZXJ0cyB0aGUgc3RyaW5nIHRvIGEgYm9vbGVhblxuXHRcdC8vIH0sXG5cdFx0J2dldElzT25saW5lJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgcmVzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzID0gY21kKFwicGluZyAtYyAxIDguOC44LjhcIik7XG5cdFx0XHRcdC8vIENoZWNrIGlmIHRoZSBwaW5nIGNvbW1hbmQgd2FzIHN1Y2Nlc3NmdWwgYmFzZWQgb24gdGhlIG91dHB1dFxuXHRcdFx0XHRsZXQgaXNPbmxpbmUgPSByZXMuaW5jbHVkZXMoXCIxIHBhY2tldHMgcmVjZWl2ZWRcIikgfHwgcmVzLmluY2x1ZGVzKFwiMSByZWNlaXZlZFwiKTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJPbmxpbmUgc3RhdHVzOlwiLCBpc09ubGluZSk7IC8vIENvcnJlY3RseSBsb2dnaW5nIHRoZSBib29sZWFuIHJlc3VsdFxuXHRcdFx0XHRyZXR1cm4gaXNPbmxpbmU7IC8vIERpcmVjdGx5IHJldHVybiB0aGUgYm9vbGVhbiB2YWx1ZVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Ly8gSWYgYW4gZXJyb3Igb2NjdXJzICh3aGljaCBjb3VsZCBpbmNsdWRlIGJlaW5nIHVuYWJsZSB0byBydW4gdGhlIHBpbmcgY29tbWFuZCksIGFzc3VtZSBvZmZsaW5lXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igb3Igb2ZmbGluZTpcIiwgZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIEFzc3VtZSBvZmZsaW5lIGlmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdnZXRFdGgwSVAnOiBmdW5jdGlvbigpIHsgLy8gR2V0IElQIG9mIGJveFxuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vY29uc29sZS5sb2coXCJyZXN1bHQgOiBcIitcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImlwIDogXCIrXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBcIitpbnRlcmZhY2UrXCIgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRXd2FuMElQJzogZnVuY3Rpb24oKSB7IC8vIEdldCBJUCBvZiBib3hcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwicmVzdWx0IDogXCIrXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJlcyA9IGNtZChcImlwIGFkZHIgc2hvdyB3d2FuMCB8IGdyZXAgXFxcImluZXRcXFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cblx0XHRcdC8vY29uc29sZS5sb2coXCJpcCA6IFwiK1wiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgXCIraW50ZXJmYWNlK1wiIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblxuXHRcdCdnZXRCZWVrZWVPc1ZlcnNpb24nOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdCRUVLRUVfT1NfVkVSU0lPTj0oLiopJykpO1xuXHRcdFx0dmFyIHNlcmlhbCA9IG1hdGNoWzFdO1xuXHRcdFx0cmV0dXJuIHNlcmlhbDtcblx0XHR9LFxuXHRcdCdnZXRCZWVrZWVIb21lVmVyc2lvbic6IGZ1bmN0aW9uKCkge1xuXHRcdFx0anNvbiA9IEpTT04ucGFyc2UoQXNzZXRzLmdldFRleHQoXCJ2ZXJzaW9uLmpzb25cIikpO1xuXHRcdFx0cmV0dXJuIGpzb24udmVyc2lvbjtcblx0XHR9LFxuXHRcdCdyZXN0YXJ0TW9iaWxlQ29ubmVjdCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHJlc3RhcnQgbW9iaWxlX2Nvbm5lY3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7Jydcblx0XHR9LFxuXHRcdCdnZXRNb2JpbGVDb25uZWN0RW5hYmxlZCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IHJlcztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGlzLWFjdGl2ZSBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiKTtcblx0XHRcdFx0cmV0dXJuIHJlcy50b1N0cmluZygpLnRyaW0oKSA9PT0gXCJ0cnVlXCI7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZW5hYmxlTW9iaWxlQ29ubmVjdCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y21kKFwic3VkbyBzeXN0ZW1jdGwgc3RhcnQgbW9iaWxlX2Nvbm5lY3Quc2VydmljZVwiKTtcblx0XHRcdGNtZChcInN1ZG8gc3lzdGVtY3RsIGVuYWJsZSBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHQnZGlzYWJsZU1vYmlsZUNvbm5lY3QnOiBmdW5jdGlvbigpIHtcblx0XHRcdGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgbW9iaWxlX2Nvbm5lY3Quc2VydmljZVwiKTtcblx0XHRcdGNtZChcInN1ZG8gc3lzdGVtY3RsIGRpc2FibGUgbW9iaWxlX2Nvbm5lY3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0J2dldEludGVybmV0SW50ZXJmYWNlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gZ2V0SW50ZXJuZXRJbnRlcmZhY2VGcm9tU3lzdGVtKCk7XG5cdFx0fSxcblx0XHQnZ2V0SW50ZXJuZXRTdGF0dXNEZXRhaWxzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VOYW1lID0gZ2V0SW50ZXJuZXRJbnRlcmZhY2VGcm9tU3lzdGVtKCk7XG5cdFx0XHRjb25zdCB2YWxpZEludGVybmV0SW50ZXJmYWNlID0gaW50ZXJmYWNlTmFtZSAhPT0gJ1Vua25vd24nICYmIGludGVyZmFjZU5hbWUgIT09ICdFcnJvcic7XG5cdFx0XHRjb25zdCBpc0NlbGx1bGFySW50ZXJmYWNlID0gaXNDZWxsdWxhckludGVybmV0SW50ZXJmYWNlKGludGVyZmFjZU5hbWUpO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpbnRlcmZhY2VOYW1lOiBpbnRlcmZhY2VOYW1lLFxuXHRcdFx0XHRpcEFkZHJlc3M6IHZhbGlkSW50ZXJuZXRJbnRlcmZhY2UgPyBnZXRJbnRlcmZhY2VJUEFkZHJlc3NGcm9tU3lzdGVtKGludGVyZmFjZU5hbWUpIDogJ1VuYXZhaWxhYmxlJyxcblx0XHRcdFx0bWFjQWRkcmVzczogdmFsaWRJbnRlcm5ldEludGVyZmFjZSAmJiAhaXNDZWxsdWxhckludGVyZmFjZSA/IGdldEludGVyZmFjZU1BQ0FkZHJlc3NGcm9tU3lzdGVtKGludGVyZmFjZU5hbWUpIDogJycsXG5cdFx0XHRcdGV0aGVybmV0TWFjQWRkcmVzczogZ2V0SW50ZXJmYWNlTUFDQWRkcmVzc0Zyb21TeXN0ZW0oJ2V0aDAnKSxcblx0XHRcdFx0d2lmaUNsaWVudE1hY0FkZHJlc3M6ICFpc0NlbGx1bGFySW50ZXJmYWNlID8gZ2V0SW50ZXJmYWNlTUFDQWRkcmVzc0Zyb21TeXN0ZW0oJ3dsYW51c2InKSA6ICcnLFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdCdnZXRXTEFOVVNCJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgcmVzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzID0gY21kKCdpcCBsaW5rIHNob3cgd2xhbnVzYicpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdnZXRXaWZpQ2xpZW50TW9kZUVuYWJsZWQnOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBnZXRXaWZpQ2xpZW50TW9kZVN0YXRlKCk7XG5cdFx0fSxcblx0XHQnZW5hYmxlV2lmaUNsaWVudE1vZGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJ1bldpZmlNb2RlU2NyaXB0KHdpZmlDbGllbnRFbmFibGVTY3JpcHROYW1lKTtcblx0XHRcdFx0cmV0dXJuIGdldFdpZmlDbGllbnRNb2RlU3RhdGUoKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBlbmFibGluZyBXaS1GaSBjbGllbnQgbW9kZTonLCBlcnJvcik7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG5cdFx0XHRcdFx0J3dpZmktY2xpZW50LW1vZGUtZW5hYmxlLWZhaWxlZCcsXG5cdFx0XHRcdFx0ZXJyb3IucmVhc29uIHx8IGVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBlbmFibGUgV2ktRmkgY2xpZW50IG1vZGUuJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2Rpc2FibGVXaWZpQ2xpZW50TW9kZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cnVuV2lmaU1vZGVTY3JpcHQod2lmaUNsaWVudERpc2FibGVTY3JpcHROYW1lKTtcblx0XHRcdFx0ZGlzYWJsZUludGVybmV0U2hhcmluZ1dpZmlDbGllbnRJblN5c3RlbSgpO1xuXHRcdFx0XHRyZXR1cm4gZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGRpc2FibGluZyBXaS1GaSBjbGllbnQgbW9kZTonLCBlcnJvcik7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG5cdFx0XHRcdFx0J3dpZmktY2xpZW50LW1vZGUtZGlzYWJsZS1mYWlsZWQnLFxuXHRcdFx0XHRcdGVycm9yLnJlYXNvbiB8fCBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZGlzYWJsZSBXaS1GaSBjbGllbnQgbW9kZS4nXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZ2V0V2lmaU5ldHdvcmtzJzogYXN5bmMgZnVuY3Rpb24oKSB7XG5cdFx0XHRlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblxuXHRcdFx0dmFyIHdpZmkgPSByZXF1aXJlKCdub2RlLXdpZmknKTtcblx0XHRcdHdpZmkuaW5pdCh7XG5cdFx0XHRcdGlmYWNlOiAnd2xhbnVzYicsXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTdGFydGluZyB3aWZpIHNjYW4nKTtcblx0XHRcdFx0d2lmaS5zY2FuKChlcnJvciwgbmV0d29ya3MpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNjYW5uaW5nIG5ldHdvcmtzOicsIGVycm9yKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoW10pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnV2lmaSBzY2FuIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHknKTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgdW5pcXVlTmV0d29ya3MgPSBuZXcgTWFwKCk7XG5cblx0XHRcdFx0XHRcdG5ldHdvcmtzLmZvckVhY2goKG5ldHdvcmspID0+IHtcblx0XHRcdFx0XHRcdFx0bGV0IHN0cmVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRpZiAobmV0d29yay5xdWFsaXR5ID4gODApIHtcblx0XHRcdFx0XHRcdFx0XHRzdHJlbmd0aCA9ICd3aWZpLTQnO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG5ldHdvcmsucXVhbGl0eSA+IDU1KSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RyZW5ndGggPSAnd2lmaS0zJztcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChuZXR3b3JrLnF1YWxpdHkgPiAzMCkge1xuXHRcdFx0XHRcdFx0XHRcdHN0cmVuZ3RoID0gJ3dpZmktMic7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RyZW5ndGggPSAnd2lmaS0xJztcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGJzc2lkID0gbmV0d29yay5tYWMgPyBuZXR3b3JrLm1hYy50b1VwcGVyQ2FzZSgpIDogbnVsbDtcblx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gYCR7bmV0d29yay5zc2lkfToke2Jzc2lkIHx8ICd1bmtub3duJ31gO1xuXG5cdFx0XHRcdFx0XHRcdGlmICghdW5pcXVlTmV0d29ya3MuaGFzKGtleSkgfHwgbmV0d29yay5xdWFsaXR5ID4gdW5pcXVlTmV0d29ya3MuZ2V0KGtleSkucXVhbGl0eSkge1xuXHRcdFx0XHRcdFx0XHRcdHVuaXF1ZU5ldHdvcmtzLnNldChrZXksIHtcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6IG5ldHdvcmsuc3NpZCxcblx0XHRcdFx0XHRcdFx0XHRcdGJzc2lkOiBic3NpZCxcblx0XHRcdFx0XHRcdFx0XHRcdHN0cmVuZ3RoOiBzdHJlbmd0aCxcblx0XHRcdFx0XHRcdFx0XHRcdHNlY3VyaXR5OiBuZXR3b3JrLnNlY3VyaXR5LFxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhbGl0eTogbmV0d29yay5xdWFsaXR5LFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgdW5pcXVlTmV0d29ya3NBcnJheSA9IEFycmF5LmZyb20odW5pcXVlTmV0d29ya3MudmFsdWVzKCkpO1xuXHRcdFx0XHRcdFx0dW5pcXVlTmV0d29ya3NBcnJheS5mb3JFYWNoKChuZXR3b3JrKSA9PiBkZWxldGUgbmV0d29yay5xdWFsaXR5KTtcblxuXHRcdFx0XHRcdFx0cmVzb2x2ZSh1bmlxdWVOZXR3b3Jrc0FycmF5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnY29ubmVjdFRvV2lmaSc6IGFzeW5jIGZ1bmN0aW9uKHNzaWQsIHBhc3N3b3JkKSB7XG5cdFx0XHRlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblxuXHRcdFx0dmFyIHdpZmkgPSByZXF1aXJlKCdub2RlLXdpZmknKTtcblx0XHRcdHdpZmkuaW5pdCh7XG5cdFx0XHRcdGlmYWNlOiAnd2xhbnVzYicsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGN1cnJlbnRDb25uZWN0aW9uSW5mbyA9IGdldENsaWVudENvbm5lY3Rpb25JbmZvRnJvbVN5c3RlbSgpO1xuXHRcdFx0aWYgKGN1cnJlbnRDb25uZWN0aW9uSW5mby5zc2lkID09PSBzc2lkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBjb25uZWN0aW9uQ29uZmlnID0geyBzc2lkOiBzc2lkIH07XG5cblx0XHRcdGlmICh0eXBlb2YgcGFzc3dvcmQgPT09ICdzdHJpbmcnICYmIHBhc3N3b3JkICE9PSAnJykge1xuXHRcdFx0XHRjb25uZWN0aW9uQ29uZmlnLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG5cdFx0XHR9XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdFx0d2lmaS5kaXNjb25uZWN0KCgpID0+IHtcblx0XHRcdFx0XHRcdHJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y21kKCdubWNsaSBkZXZpY2UgZGlzY29ubmVjdCB3bGFudXNiID4vZGV2L251bGwgMj4mMSB8fCB0cnVlJyk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGRpc2Nvbm5lY3Rpbmcgd2xhbnVzYiBiZWZvcmUgcmVjb25uZWN0OicsIGVycm9yKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGF3YWl0IHdhaXQoMTUwMCk7XG5cblx0XHRcdFx0Y29uc3QgY29ubmVjdFJlc3VsdCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdFx0d2lmaS5jb25uZWN0KGNvbm5lY3Rpb25Db25maWcsIChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvbm5lY3RpbmcgdG8gd2lmaTonLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoZmFsc2UpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKCFjb25uZWN0UmVzdWx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaXNWZXJpZmllZCA9IGF3YWl0IHdhaXRGb3JDbGllbnRTU0lEKHNzaWQsIDE1MDAwKTtcblxuXHRcdFx0XHRpZiAoIWlzVmVyaWZpZWQpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIGNhbGxiYWNrIHJldHVybmVkIHN1Y2Nlc3MgYnV0IFNTSUQgdmVyaWZpY2F0aW9uIGZhaWxlZDonLCBzc2lkKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIHdpZmk6Jywgc3NpZCk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciB3aGlsZSBjb25uZWN0aW5nIHRvIHdpZmk6JywgZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZGlzY29ubmVjdFdpZmknOiBmdW5jdGlvbigpIHtcblx0XHRcdGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXG5cdFx0XHR2YXIgd2lmaSA9IHJlcXVpcmUoJ25vZGUtd2lmaScpO1xuXHRcdFx0d2lmaS5pbml0KHtcblx0XHRcdFx0aWZhY2U6ICd3bGFudXNiJyxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0d2lmaS5kaXNjb25uZWN0KChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgZGlzY29ubmVjdGluZyBmcm9tIHdpZmk6JywgZXJyb3IpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShmYWxzZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdEaXNjb25uZWN0ZWQgZnJvbSB3aWZpJyk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdmb3JnZXRXaWZpJzogZnVuY3Rpb24oc3NpZCkge1xuXHRcdFx0ZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkKCk7XG5cblx0XHRcdHZhciB3aWZpID0gcmVxdWlyZSgnbm9kZS13aWZpJyk7XG5cdFx0XHR3aWZpLmluaXQoe1xuXHRcdFx0XHRpZmFjZTogJ3dsYW51c2InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHR3aWZpLmRlbGV0ZUNvbm5lY3Rpb24oeyBzc2lkOiBzc2lkIH0sIChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgY29ubmVjdGluZyB0byB3aWZpOicsIGVycm9yKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoZmFsc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIHdpZmk6Jywgc3NpZCk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdnZXRDbGllbnRTU0lEJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gZ2V0Q2xpZW50U1NJREZyb21TeXN0ZW0oKTtcblx0XHR9LFxuXHRcdCdnZXRDbGllbnRDb25uZWN0aW9uSW5mbyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGdldENsaWVudENvbm5lY3Rpb25JbmZvRnJvbVN5c3RlbSgpO1xuXHRcdH0sXG5cdFx0J2dldENhcHRpdmVQb3J0YWxTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXHRcdFx0cmV0dXJuIGdldENhcHRpdmVQb3J0YWxTdGF0dXNGcm9tU3lzdGVtKCk7XG5cdFx0fSxcblx0XHQnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzV2lmaUNsaWVudCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGdldEludGVybmV0U2hhcmluZ1N0YXR1c1dpZmlDbGllbnRGcm9tU3lzdGVtKCk7XG5cdFx0fSxcblx0XHQnZW5hYmxlSW50ZXJuZXRTaGFyaW5nV2lmaUNsaWVudCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZW5hYmxlSW50ZXJuZXRTaGFyaW5nV2lmaUNsaWVudEluU3lzdGVtKCk7XG5cdFx0XHRcdHJldHVybiBnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNXaWZpQ2xpZW50RnJvbVN5c3RlbSgpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGVuYWJsaW5nIGludGVybmV0IHNoYXJpbmcgdmlhIFdpLUZpIGNsaWVudDonLCBlcnJvcik7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG5cdFx0XHRcdFx0J3dpZmktY2xpZW50LXNoYXJpbmctZW5hYmxlLWZhaWxlZCcsXG5cdFx0XHRcdFx0ZXJyb3IucmVhc29uIHx8IGVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBlbmFibGUgaW50ZXJuZXQgc2hhcmluZyB2aWEgV2ktRmkgY2xpZW50Lidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nV2lmaUNsaWVudCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZGlzYWJsZUludGVybmV0U2hhcmluZ1dpZmlDbGllbnRJblN5c3RlbSgpO1xuXHRcdFx0XHRyZXR1cm4gZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzV2lmaUNsaWVudEZyb21TeXN0ZW0oKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBkaXNhYmxpbmcgaW50ZXJuZXQgc2hhcmluZyB2aWEgV2ktRmkgY2xpZW50OicsIGVycm9yKTtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcblx0XHRcdFx0XHQnd2lmaS1jbGllbnQtc2hhcmluZy1kaXNhYmxlLWZhaWxlZCcsXG5cdFx0XHRcdFx0ZXJyb3IucmVhc29uIHx8IGVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBkaXNhYmxlIGludGVybmV0IHNoYXJpbmcgdmlhIFdpLUZpIGNsaWVudC4nXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdC8vIFx0Ly8gQ29tbWFuZCB0byBsaXN0IEZPUldBUkQgcnVsZXNcblx0XHQvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLW4gLS1saW5lLW51bWJlcic7XG5cblx0XHQvLyBcdGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdC8vIFx0XHRpZiAoZXJyb3IgfHwgc3RkZXJyKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke2Vycm9yIHx8IHN0ZGVycn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yIHx8IG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblxuXHRcdC8vIFx0XHQvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG5cdFx0Ly8gXHRcdHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IHN0ZG91dC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyhcImlzR2VuZXJhbFNoYXJpbmdFbmFibGVkOiBcIitpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCk7XG5cdFx0Ly8gXHRcdC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcblx0XHQvLyBcdFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2UgZXRoMC87XG5cdFx0Ly8gXHRcdHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuXHRcdC8vIFx0XHQvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcblx0XHQvLyBcdFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDFcIik7XG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGxcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIHtjb25zb2xlLmxvZyhcInN0ZXAxMlwiKTsgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH0pO31cblx0XHQvLyBcdFx0fSBlbHNlIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDJcIik7XG5cblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGEgc3BlY2lmaWMgTUFDIGFkZHJlc3Ncblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3Igc3BlY2lmaWMgTUFDJywgbWFjQWRkcmVzczogbWF0Y2hbMV0gfSk7XG5cdFx0Ly8gXHRcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2coXCJzdGVwM1wiKTtcblxuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWRcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH0pO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXG5cblxuXG5cdFx0XHQvLyAgICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZygnU3RhcnRpbmcgdG8gZ2V0IGludGVybmV0IHNoYXJpbmcgc3RhdHVzIGZvciBFdGhlcm5ldC4uLicpO1xuXHRcdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG5cdFx0XHQvLyBcdC8vIFNpbmNlIGNtZCBpcyBhbHJlYWR5IHdyYXBwZWQgYnkgTWV0ZW9yLndyYXBBc3luYyhleGVjKSxcblx0XHRcdC8vIFx0Ly8gaXQgc2hvdWxkIHJldHVybiB7IHN0ZG91dCwgc3RkZXJyIH0gZGlyZWN0bHkuXG5cdFx0XHQvLyBcdHRyeSB7XG5cdFx0XHQvLyBcdCAgdmFyIHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdC8vIFx0ICBpZiAoc3RkZXJyKSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke3N0ZGVycn1gKTtcblx0XHRcdC8vIFx0XHQvLyBJdCdzIGJldHRlciB0byByZXR1cm4gYSBtZWFuaW5nZnVsIGVycm9yIHRvIHRoZSBjbGllbnQuXG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgZXJyb3I6IFwiRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzXCIsIGRldGFpbHM6IHN0ZGVyciB9O1xuXHRcdFx0Ly8gXHQgIH1cblxuXHRcdFx0Ly8gXHQgIGNvbnNvbGUubG9nKCdBbmFseXppbmcgaXB0YWJsZXMgRk9SV0FSRCBydWxlcyBvdXRwdXQuLi4nKTtcblx0XHRcdC8vIFx0ICAvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG5cdFx0XHQvLyBcdCAgdmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gc3Rkb3V0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSBldGgwJykgJiYgc3Rkb3V0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG5cdFx0XHQvLyBcdCAgY29uc29sZS5sb2coYGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkOiAke2lzR2VuZXJhbFNoYXJpbmdFbmFibGVkfWApO1xuXG5cdFx0XHQvLyBcdCAgLy8gRXh0cmFjdCBNQUMgYWRkcmVzcyBydWxlc1xuXHRcdFx0Ly8gXHQgIHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIGV0aDAvO1xuXHRcdFx0Ly8gXHQgIHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblx0XHRcdC8vIFx0ICBjb25zb2xlLmxvZyhgTUFDIGFkZHJlc3MgZm91bmQ6ICR7bWF0Y2ggPyBtYXRjaFsxXSA6ICdOb25lJ31gKTtcblxuXHRcdFx0Ly8gXHQgIC8vIERldGVybWluZSB0aGUgc3RhdHVzIGJhc2VkIG9uIHRoZSBydWxlcyBmb3VuZFxuXHRcdFx0Ly8gXHQgIGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGwuJyk7XG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0Ly8gXHQgIH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzOiAke21hdGNoWzFdfWApO1xuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH07XG5cdFx0XHQvLyBcdCAgfSBlbHNlIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyBpcyBkaXNhYmxlZCBvciBub3QgY29uZmlndXJlZCBhcyBleHBlY3RlZC4nKTtcblx0XHRcdC8vIFx0XHRyZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdC8vIFx0ICB9XG5cdFx0XHQvLyBcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHQvLyBcdCAgY29uc29sZS5lcnJvcihgQ29tbWFuZCBleGVjdXRpb24gZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHQvLyBcdCAgLy8gSXQncyBiZXR0ZXIgdG8gcmV0dXJuIGEgbWVhbmluZ2Z1bCBlcnJvciB0byB0aGUgY2xpZW50LlxuXHRcdFx0Ly8gXHQgIHJldHVybiB7IGVycm9yOiBcIkNvbW1hbmQgZXhlY3V0aW9uIGVycm9yXCIsIGRldGFpbHM6IGVycm9yLnRvU3RyaW5nKCkgfTtcblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gICB9LFxuXG5cblxuXHRcdFx0XHQvLyAgICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXHRcdFx0XHQvLyBcdHZhciBjb21tYW5kUmVzdWx0ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblxuXHRcdFx0XHQvLyBcdGlmICghY29tbWFuZFJlc3VsdCkge1xuXHRcdFx0XHQvLyBcdCAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG5cdFx0XHRcdC8vIFx0fVxuXG5cdFx0XHRcdC8vIFx0dmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcblx0XHRcdFx0Ly8gXHR2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSBldGgwLztcblx0XHRcdFx0Ly8gXHR2YXIgbWF0Y2ggPSBjb21tYW5kUmVzdWx0Lm1hdGNoKG1hY0FkZHJlc3NSdWxlUmVnZXgpO1xuXG5cdFx0XHRcdC8vIFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuXHRcdFx0XHQvLyBcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0XHQvLyBcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHRcdFx0Ly8gXHQgIHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH07XG5cdFx0XHRcdC8vIFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gXHQgIHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0XHQvLyBcdH1cblx0XHRcdFx0Ly8gICB9LFxuXG5cblxuXG5cdFx0XHRcdFx0ICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLVMgRk9SV0FSRCc7XG5cdFx0XHR2YXIgbGlzdE5hdFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC10IG5hdCAtUyBQT1NUUk9VVElORyc7XG5cblx0XHRcdHZhciBmb3J3YXJkUmVzdWx0ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblx0XHRcdHZhciBuYXRSZXN1bHQgPSBjbWQobGlzdE5hdFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdGlmICghZm9yd2FyZFJlc3VsdCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFwiY29tbWFuZC1leGVjdXRpb24tZXJyb3JcIiwgXCJUaGUgRk9SV0FSRCBjaGFpbiBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIW5hdFJlc3VsdCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFwiY29tbWFuZC1leGVjdXRpb24tZXJyb3JcIiwgXCJUaGUgUE9TVFJPVVRJTkcgY2hhaW4gY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHNoYXJpbmdGcm9tV2xhbmludFRvRXRoID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFuaW50IC1vIGV0aDAgLWogQUNDRVBUJyk7XG5cdFx0XHR2YXIgc2hhcmluZ0Zyb21XbGFudXNiVG9FdGggPSBmb3J3YXJkUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW51c2IgLW8gZXRoMCAtaiBBQ0NFUFQnKTtcblx0XHRcdHZhciBzaGFyaW5nVG9XbGFuaW50RnJvbUV0aEVzdGFibGlzaGVkID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcpO1xuXHRcdFx0dmFyIHNoYXJpbmdUb1dsYW51c2JGcm9tRXRoRXN0YWJsaXNoZWQgPSBmb3J3YXJkUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIGV0aDAgLW8gd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyk7XG5cblx0XHRcdHZhciBuYXRGb3JXbGFuaW50ID0gbmF0UmVzdWx0LmluY2x1ZGVzKCctQSBQT1NUUk9VVElORyAtcyAxMC4wLjAuMC8yNCAtbyBldGgwIC1qIE1BU1FVRVJBREUnKTtcblx0XHRcdHZhciBuYXRGb3JXbGFudXNiID0gbmF0UmVzdWx0LmluY2x1ZGVzKCctQSBQT1NUUk9VVElORyAtcyAxMC4xLjAuMC8yNCAtbyBldGgwIC1qIE1BU1FVRVJBREUnKTtcblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRzaGFyaW5nRnJvbVdsYW5pbnRUb0V0aCAmJlxuXHRcdFx0XHRzaGFyaW5nRnJvbVdsYW51c2JUb0V0aCAmJlxuXHRcdFx0XHRzaGFyaW5nVG9XbGFuaW50RnJvbUV0aEVzdGFibGlzaGVkICYmXG5cdFx0XHRcdHNoYXJpbmdUb1dsYW51c2JGcm9tRXRoRXN0YWJsaXNoZWQgJiZcblx0XHRcdFx0bmF0Rm9yV2xhbmludCAmJlxuXHRcdFx0XHRuYXRGb3JXbGFudXNiXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdCdlbmFibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cblx0XHRcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gbnVsbDtcblxuXHRcdFx0aXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSB3bGFuaW50IC1vIGV0aDAgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3bGFuaW50IC1vIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSB3bGFudXNiIC1vIGV0aDAgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3bGFudXNiIC1vIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgZXRoMCAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtQyBGT1JXQVJEIC1pIGV0aDAgLW8gd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW51c2IgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC10IG5hdCAtQyBQT1NUUk9VVElORyAtcyAxMC4wLjAuMC8yNCAtbyBldGgwIC1qIE1BU1FVRVJBREUgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUEgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gZXRoMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLXQgbmF0IC1DIFBPU1RST1VUSU5HIC1zIDEwLjEuMC4wLzI0IC1vIGV0aDAgLWogTUFTUVVFUkFERSAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC10IG5hdCAtQSBQT1NUUk9VVElORyAtcyAxMC4xLjAuMC8yNCAtbyBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHRcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGRlcnIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXQgZW5hYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBEZWZpbmUgYSBsaXN0IG9mIGNvbW1hbmRzIHRvIHJlcGVhdGVkbHkgYXR0ZW1wdCBkZWxldGlvbi5cblx0XHRcdHZhciBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gbnVsbDtcblxuXHRcdFx0aXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbnVzYiAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1zb3VyY2UgMTAuMC4wLjAvMjQgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tc291cmNlIDEwLjEuMC4wLzI0IC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnXG5cdFx0XHRdO1xuXG5cdFx0XHQvLyBGdW5jdGlvbiB0byBleGVjdXRlIGEgY29tbWFuZCBhbmQgcmVjdXJzaXZlbHkgY2FsbCBpdHNlbGYgaWYgdGhlIGNvbW1hbmQgd2FzIHN1Y2Nlc3NmdWwgKHJ1bGUgd2FzIGZvdW5kIGFuZCBkZWxldGVkKS5cblx0XHRcdGZ1bmN0aW9uIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKSB7XG5cdFx0XHRcdGNtZChjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBubyBlcnJvciwgdGhlIHJ1bGUgd2FzIGZvdW5kIGFuZCBkZWxldGVkLCBzbyB0cnkgYWdhaW4uXG5cdFx0XHRcdFx0aWYgKCFlcnJvcikge1xuXHRcdFx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yLCBpdCBsaWtlbHkgbWVhbnMgbm8gbW9yZSBpbnN0YW5jZXMgb2YgdGhlIHJ1bGUgZXhpc3QsIHNvIGNhbGwgdGhlIGRvbmVDYWxsYmFjay5cblx0XHRcdFx0XHRcdGRvbmVDYWxsYmFjaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEV4ZWN1dGUgZGVsZXRpb24gZm9yIGVhY2ggY29tbWFuZCBhbmQgdHJhY2sgY29tcGxldGlvbi5cblx0XHRcdHZhciB0YXNrc0NvbXBsZXRlZCA9IDA7XG5cdFx0XHRpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcblx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCAoKSA9PiB7XG5cdFx0XHRcdFx0dGFza3NDb21wbGV0ZWQrKztcblx0XHRcdFx0XHQvLyBPbmNlIGFsbCBkZWxldGlvbiB0YXNrcyBhcmUgZG9uZSwgc2F2ZSB0aGUgaXB0YWJsZXMgY29uZmlndXJhdGlvbi5cblx0XHRcdFx0XHRpZiAodGFza3NDb21wbGV0ZWQgPT09IGlwdGFibGVzRGVsZXRlQ29tbWFuZHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgJ0FsbCBzcGVjaWZpZWQgcnVsZXMgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8vICdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdC8vIFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERScsXG5cdFx0Ly8gXHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0Ly8gXHRdLmpvaW4oJyAmJiAnKTtcblxuXHRcdC8vIFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdFx0aWYgKHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBFdGhlcm5ldCBkaXNhYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0Ly8gXHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHQvLyBcdH0pO1xuXHRcdC8vIH0sXG5cdFx0J2VuYWJsZUludGVybmV0Rm9yTWFjRXRoZXJuZXQnOiBmdW5jdGlvbihtYWNBZGRyZXNzLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vIENvbW1hbmQgdG8gYWxsb3cgaW50ZXJuZXQgZm9yIHRoZSBzcGVjaWZpZWQgTUFDIGFkZHJlc3Mgb24gZXRoMC5cblx0XHRcdHZhciBhbGxvd01hY0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIGV0aDAgLW0gbWFjIC0tbWFjLXNvdXJjZSAke21hY0FkZHJlc3N9IC1qIEFDQ0VQVGA7XG5cdFx0XHQvLyBDb21tYW5kIHRvIGRyb3AgYWxsIG90aGVyIGludGVybmV0IHRyYWZmaWMgb24gZXRoMC5cblx0XHRcdHZhciBibG9ja090aGVyc0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIGV0aDAgLWogRFJPUGA7XG5cblx0XHRcdC8vIEFsbG93IGludGVybmV0IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzLlxuXHRcdFx0cmVzID0gY21kKGFsbG93TWFjQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBhbGxvd2luZyBNQUMgJHttYWNBZGRyZXNzfTogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBJbnRlcm5ldCBhY2Nlc3MgYWxsb3dlZCBmb3IgTUFDICR7bWFjQWRkcmVzc30uYCk7XG5cblx0XHRcdFx0Ly8gQmxvY2sgYWxsIG90aGVyIE1BQyBhZGRyZXNzZXMgZnJvbSBhY2Nlc3NpbmcgdGhlIGludGVybmV0LlxuXHRcdFx0XHRyZXMgPSBjbWQoYmxvY2tPdGhlcnNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBibG9ja2luZyBvdGhlciBNQUNzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGJsb2NrZWQgZm9yIG90aGVyIE1BQyBhZGRyZXNzZXMuYCk7XG5cdFx0XHRcdFx0Ly8gT3B0aW9uYWxseSwgc2F2ZSB0aGUgaXB0YWJsZXMgc2V0dGluZ3MgdG8gbWFrZSB0aGVtIHBlcnNpc3RlbnQuXG5cdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBzYXZlZC5gKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKG51bGwpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3JlbW92ZUFsbE1hY0ZpbHRlcnNGb3JFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBMaXN0IGFsbCBGT1JXQVJEIHJ1bGVzIHdpdGggbGluZSBudW1iZXJzXG5cdFx0XHRjbWQoJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtLWxpbmUtbnVtYmVycyAtbicsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByb2Nlc3Mgc3Rkb3V0IHRvIGlkZW50aWZ5IHJ1bGVzIHJlbGF0ZWQgdG8gTUFDIGZpbHRlcmluZyBvbiBldGgwXG5cdFx0XHRcdGNvbnN0IGxpbmVzID0gc3Rkb3V0LnNwbGl0KCdcXG4nKTtcblx0XHRcdFx0Y29uc3QgcnVsZU51bWJlcnMgPSBsaW5lcy5yZWR1Y2UoKGFjYywgbGluZSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRpZiAobGluZS5pbmNsdWRlcygnZXRoMCcpICYmIGxpbmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnbWFjJykpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHJ1bGVOdW1iZXIgPSBsaW5lLnNwbGl0KC9cXHMrLylbMF07IC8vIEV4dHJhY3QgdGhlIHJ1bGUgbnVtYmVyLCBhc3N1bWluZyBpdCdzIHRoZSBmaXJzdCBlbGVtZW50XG5cdFx0XHRcdFx0XHRhY2MucHVzaChydWxlTnVtYmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdFx0fSwgW10pO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBpZGVudGlmaWVkIHJ1bGVzIHN0YXJ0aW5nIGZyb20gdGhlIGhpZ2hlc3QgbnVtYmVyIHRvIHByZXZlbnQgc2hpZnRpbmcgb2YgbGluZSBudW1iZXJzXG5cdFx0XHRcdHJ1bGVOdW1iZXJzLnNvcnQoKGEsIGIpID0+IGIgLSBhKS5mb3JFYWNoKHJ1bGVOdW1iZXIgPT4ge1xuXHRcdFx0XHRcdGNtZChgc3VkbyBpcHRhYmxlcyAtRCBGT1JXQVJEICR7cnVsZU51bWJlcn1gLCAocmVtb3ZlRXJyb3IsIHJlbW92ZVN0ZG91dCwgcmVtb3ZlU3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAocmVtb3ZlRXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgcmVtb3ZpbmcgcnVsZSAke3J1bGVOdW1iZXJ9OiAke3JlbW92ZUVycm9yfWApO1xuXHRcdFx0XHRcdFx0XHQvLyBEZWNpZGUgaWYgeW91IHdhbnQgdG8gY29udGludWUgcmVtb3Zpbmcgb3RoZXIgcnVsZXMgb3Igc3RvcCBoZXJlXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBSdWxlICR7cnVsZU51bWJlcn0gcmVtb3ZlZCBzdWNjZXNzZnVsbHkuYCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIEFmdGVyIGF0dGVtcHRpbmcgdG8gcmVtb3ZlIGFsbCBpZGVudGlmaWVkIHJ1bGVzLCBzYXZlIHRoZSBpcHRhYmxlcyBjb25maWd1cmF0aW9uXG5cdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKHNhdmVFcnJvciwgc2F2ZVN0ZG91dCwgc2F2ZVN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdGlmIChzYXZlRXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtzYXZlRXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHNhdmVFcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdpcHRhYmxlcyBydWxlcyB1cGRhdGVkIGFuZCBzYXZlZC4nKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsICdBbGwgTUFDIGZpbHRlciBydWxlcyBmb3IgRXRoZXJuZXQgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNNb2JpbGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXHRcdFx0dmFyIGxpc3ROYXRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtdCBuYXQgLVMgUE9TVFJPVVRJTkcnO1xuXG5cdFx0XHR2YXIgZm9yd2FyZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cdFx0XHR2YXIgbmF0UmVzdWx0ID0gY21kKGxpc3ROYXRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHRpZiAoIWZvcndhcmRSZXN1bHQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIEZPUldBUkQgY2hhaW4gY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFuYXRSZXN1bHQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIFBPU1RST1VUSU5HIGNoYWluIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG5cdFx0XHR9XG5cblxuXHRcdFx0dmFyIHNoYXJpbmdGcm9tV2xhbmludFRvV3dhbiA9IGZvcndhcmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd2xhbmludCAtbyB3d2FuMCAtaiBBQ0NFUFQnKTtcblx0XHRcdHZhciBzaGFyaW5nRnJvbVdsYW51c2JUb1d3YW4gPSBmb3J3YXJkUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW51c2IgLW8gd3dhbjAgLWogQUNDRVBUJyk7XG5cdFx0XHR2YXIgc2hhcmluZ1RvV2xhbmludEZyb21Xd2FuRXN0YWJsaXNoZWQgPSBmb3J3YXJkUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHd3YW4wIC1vIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcpO1xuXHRcdFx0dmFyIHNoYXJpbmdUb1dsYW51c2JGcm9tV3dhbkVzdGFibGlzaGVkID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFudXNiIC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnKTtcblxuXHRcdFx0dmFyIG5hdEZvcldsYW5pbnQgPSBuYXRSZXN1bHQuaW5jbHVkZXMoJy1BIFBPU1RST1VUSU5HIC1zIDEwLjAuMC4wLzI0IC1vIHd3YW4wIC1qIE1BU1FVRVJBREUnKTtcblx0XHRcdHZhciBuYXRGb3JXbGFudXNiID0gbmF0UmVzdWx0LmluY2x1ZGVzKCctQSBQT1NUUk9VVElORyAtcyAxMC4xLjAuMC8yNCAtbyB3d2FuMCAtaiBNQVNRVUVSQURFJyk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0c2hhcmluZ0Zyb21XbGFuaW50VG9Xd2FuICYmXG5cdFx0XHRcdHNoYXJpbmdGcm9tV2xhbnVzYlRvV3dhbiAmJlxuXHRcdFx0XHRzaGFyaW5nVG9XbGFuaW50RnJvbVd3YW5Fc3RhYmxpc2hlZCAmJlxuXHRcdFx0XHRzaGFyaW5nVG9XbGFudXNiRnJvbVd3YW5Fc3RhYmxpc2hlZCAmJlxuXHRcdFx0XHRuYXRGb3JXbGFuaW50ICYmXG5cdFx0XHRcdG5hdEZvcldsYW51c2Jcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0J2VuYWJsZUludGVybmV0U2hhcmluZ01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IG51bGw7XG5cdFx0XHRpcHRhYmxlc0NvbW1hbmRzID0gW1xuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW5pbnQgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgd2xhbnVzYiAtbyB3d2FuMCAtaiBBQ0NFUFQgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIHdsYW51c2IgLW8gd3dhbjAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIHd3YW4wIC1vIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFudXNiIC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUMgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gd3dhbjAgLWogTUFTUVVFUkFERSAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC10IG5hdCAtQSBQT1NUUk9VVElORyAtcyAxMC4wLjAuMC8yNCAtbyB3d2FuMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLXQgbmF0IC1DIFBPU1RST1VUSU5HIC1zIDEwLjEuMC4wLzI0IC1vIHd3YW4wIC1qIE1BU1FVRVJBREUgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUEgUE9TVFJPVVRJTkcgLXMgMTAuMS4wLjAvMjQgLW8gd3dhbjAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0XHRdLmpvaW4oJyAmJiAnKTtcblxuXHRcdFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0ZGVycikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBtb2JpbGUgZW5hYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0Ly8gRGVmaW5lIGNvbW1hbmRzIGZvciBkZWxldGlvbiB3aXRob3V0IGNvbWJpbmluZyB0aGVtXG5cdFx0XHR2YXIgaXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IG51bGw7XG5cblx0XHRcdGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBbXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbmludCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFudXNiIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFudXNiIC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLXNvdXJjZSAxMC4wLjAuMC8yNCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tc291cmNlIDEwLjEuMC4wLzI0IC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJ1xuXHRcdFx0XTtcblxuXHRcdFx0Ly8gRnVuY3Rpb24gdG8gcmVjdXJzaXZlbHkgZXhlY3V0ZSBhIGNvbW1hbmQgdW50aWwgaXQgZmFpbHMgKGluZGljYXRpbmcgbm8gbW9yZSBpbnN0YW5jZXMgb2YgdGhlIHJ1bGUpXG5cdFx0XHRmdW5jdGlvbiBleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjaykge1xuXHRcdFx0XHRjbWQoY29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdC8vIE5vIGVycm9yIG1lYW5zIHRoZSBjb21tYW5kIHN1Y2NlZWRlZCwgc28gdGhlcmUgbWlnaHQgYmUgbW9yZSBpbnN0YW5jZXNcblx0XHRcdFx0XHRpZiAoIWVycm9yKSB7XG5cdFx0XHRcdFx0XHRleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjayk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIEVycm9yIGxpa2VseSBtZWFucyBubyBtb3JlIGluc3RhbmNlcyBvZiB0aGUgcnVsZSwgbW92ZSBvblxuXHRcdFx0XHRcdFx0ZG9uZUNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRXhlY3V0ZSBkZWxldGlvbiBmb3IgZWFjaCBjb21tYW5kIGFuZCB0cmFjayB3aGVuIGFsbCBhcmUgY29tcGxldGVkXG5cdFx0XHR2YXIgdGFza3NDb21wbGV0ZWQgPSAwO1xuXHRcdFx0aXB0YWJsZXNEZWxldGVDb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG5cdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgKCkgPT4ge1xuXHRcdFx0XHRcdHRhc2tzQ29tcGxldGVkKys7XG5cdFx0XHRcdFx0Ly8gQWZ0ZXIgYWxsIGNvbW1hbmRzIGhhdmUgYmVlbiBhdHRlbXB0ZWQsIHNhdmUgdGhlIGNvbmZpZ3VyYXRpb25cblx0XHRcdFx0XHRpZiAodGFza3NDb21wbGV0ZWQgPT09IGlwdGFibGVzRGVsZXRlQ29tbWFuZHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChlcnJvciwgc2F2ZVN0ZG91dCwgc2F2ZVN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdpcHRhYmxlcyBydWxlcyBmb3IgbW9iaWxlIGludGVyZmFjZSB1cGRhdGVkIGFuZCBzYXZlZC4nKTtcblx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIHNwZWNpZmllZCBydWxlcyBmb3IgbW9iaWxlIGludGVyZmFjZSByZW1vdmVkIGFuZCBjaGFuZ2VzIHNhdmVkLicpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHQvLyAnZGlzYWJsZUludGVybmV0U2hhcmluZ01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0Ly8gXHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJyxcblx0XHQvLyBcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcblx0XHQvLyBcdF0uam9pbignICYmICcpO1xuXG5cdFx0Ly8gXHRjbWQoaXB0YWJsZXNDb21tYW5kcywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdC8vIFx0XHRpZiAoZXJyb3IpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0XHRpZiAoc3RkZXJyKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgdmlhIG1vYmlsZSBkaXNhYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0Ly8gXHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHQvLyBcdH0pO1xuXHRcdC8vIH0sXG5cdFx0J2FsbG93SW50ZXJuZXRGb3JNYWNNb2JpbGUnOiBmdW5jdGlvbihtYWNBZGRyZXNzLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vIEZpcnN0LCBlbmFibGUgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHRvIHd3YW4wXG5cdFx0XHRyZXMgPSBjbWQoJ3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW51c2IgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCAmJiBzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW5pbnQgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAmJiBzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW51c2IgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAmJiBzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBlbmFibGluZyBpbnRlcm5ldCBzaGFyaW5nOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IHNoYXJpbmcgZW5hYmxlZCB2aWEgd3dhbjAuYCk7XG5cdFx0XHRcdC8vIEFsbG93IGludGVybmV0IG9ubHkgZm9yIHRoZSBzcGVjaWZpZWQgTUFDIGFkZHJlc3Mgb24gd3dhbjBcblx0XHRcdFx0dmFyIGFsbG93TWFjQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1JIEZPUldBUkQgMSAtaSB3d2FuMCAtbSBtYWMgLS1tYWMtc291cmNlICR7bWFjQWRkcmVzc30gLWogQUNDRVBUYDtcblx0XHRcdFx0Ly8gQmxvY2sgYWxsIG90aGVyIE1BQyBhZGRyZXNzZXMgZnJvbSBhY2Nlc3NpbmcgdGhlIGludGVybmV0IHZpYSB3d2FuMC5cblx0XHRcdFx0dmFyIGJsb2NrT3RoZXJzQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd3dhbjAgLWogRFJPUGA7XG5cblx0XHRcdFx0Ly8gQWxsb3cgc3BlY2lmaWMgTUFDXG5cdFx0XHRcdHJlcyA9IGNtZChhbGxvd01hY0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIGFsbG93aW5nIE1BQyAke21hY0FkZHJlc3N9IG9uIFdXQU46ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGFsbG93ZWQgZm9yIE1BQyAke21hY0FkZHJlc3N9IG9uIFdXQU4uYCk7XG5cblx0XHRcdFx0XHQvLyBCbG9jayBhbGwgb3RoZXIgTUFDc1xuXHRcdFx0XHRcdHJlcyA9IGNtZChibG9ja090aGVyc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBibG9ja2luZyBvdGhlciBNQUNzIG9uIFdXQU46ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGJsb2NrZWQgZm9yIG90aGVyIE1BQyBhZGRyZXNzZXMgb24gV1dBTi5gKTtcblxuXHRcdFx0XHRcdFx0Ly8gU2F2ZSBpcHRhYmxlcyBydWxlc1xuXHRcdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlcyBmb3IgV1dBTjogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBmb3IgV1dBTiBzYXZlZC5gKTtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sobnVsbCk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdyZW1vdmVBbGxNYWNGaWx0ZXJzRm9yTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdC8vIExpc3QgYWxsIEZPUldBUkQgcnVsZXNcblx0XHRcdGNtZCgnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC0tbGluZS1udW1iZXJzIC1uJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByb2Nlc3Mgc3Rkb3V0IHRvIGZpbmQgcnVsZXMgdG8gZGVsZXRlLiBUaGlzIHBhcnQgaXMgcHNldWRvLWNvZGUgYW5kIG5lZWRzIGFkanVzdG1lbnRcblx0XHRcdFx0Y29uc3QgbGluZXMgPSBzdGRvdXQuc3BsaXQoJ1xcbicpO1xuXHRcdFx0XHRjb25zdCBydWxlTnVtYmVycyA9IFtdO1xuXHRcdFx0XHRsaW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xuXHRcdFx0XHRcdGlmIChsaW5lLmluY2x1ZGVzKCd3d2FuMCcpICYmIGxpbmUuaW5jbHVkZXMoJ01BQycpKSB7XG5cdFx0XHRcdFx0XHQvLyBFeHRyYWN0IHRoZSBydWxlIG51bWJlciBmcm9tIHRoZSBsaW5lXG5cdFx0XHRcdFx0XHRjb25zdCBydWxlTnVtYmVyID0gbGluZS5zcGxpdCgnICcpWzBdOyAvLyBUaGlzIGlzIGEgc2ltcGxpZmljYXRpb25cblx0XHRcdFx0XHRcdHJ1bGVOdW1iZXJzLnB1c2gocnVsZU51bWJlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgcnVsZXMgYnkgdGhlaXIgbnVtYmVycywgc3RhcnRpbmcgZnJvbSB0aGUgaGlnaGVzdCBudW1iZXJcblx0XHRcdFx0cnVsZU51bWJlcnMuc29ydCgoYSwgYikgPT4gYiAtIGEpLmZvckVhY2gocnVsZU51bWJlciA9PiB7XG5cdFx0XHRcdFx0Y21kKGBzdWRvIGlwdGFibGVzIC1EIEZPUldBUkQgJHtydWxlTnVtYmVyfWAsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciByZW1vdmluZyBydWxlICR7cnVsZU51bWJlcn06ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0XHQvLyBPcHRpb25hbGx5LCBzdG9wIHRoZSBwcm9jZXNzIG9yIGNvbnRpbnVlIGF0dGVtcHRpbmcgdG8gcmVtb3ZlIG90aGVyIHJ1bGVzXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBSdWxlICR7cnVsZU51bWJlcn0gcmVtb3ZlZCBzdWNjZXNzZnVsbHkuYCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIEFmdGVyIGFsbCBydWxlcyBoYXZlIGJlZW4gcHJvY2Vzc2VkLCBzYXZlIHRoZSBpcHRhYmxlcyBydWxlc1xuXHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnaXB0YWJsZXMgcnVsZXMgdXBkYXRlZCBhbmQgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIE1BQyBmaWx0ZXIgcnVsZXMgZm9yIFdXQU4gcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdyZWJvb3QnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoJ3N1ZG8gcmVib290JywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdCAgY29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHRcdFx0ICByZXR1cm47XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnc2h1dGRvd24nOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoJ3N1ZG8gaGFsdCcsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHQgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdCAgcmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3N5bmNocm9uaXplJzogZnVuY3Rpb24oKSB7XG5cblx0XHRcdGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgc3luYy4uLlwiKTtcblxuXHRcdFx0dmFyIGRldmljZVNlcmlhbCA9IE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuc2VyaWFsO1xuXHRcdFx0dmFyIGRldmljZVRva2VuID0gTWV0ZW9yLnNldHRpbmdzLm1vb2RsZUFQSVRva2VuO1xuXHRcdFx0dmFyIHVybCA9IE1ldGVvci5zZXR0aW5ncy5jbG91ZFVSTCArIFwiL2FwaS9zdGFydFN5bmNcIjtcblx0XHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdCdkZXZpY2VTZXJpYWwnOiBkZXZpY2VTZXJpYWwsXG5cdFx0XHRcdFx0J2RldmljZVRva2VuJzogZGV2aWNlVG9rZW5cblx0XHRcdFx0fSxcblx0XHRcdCAgICBucG1SZXF1ZXN0T3B0aW9uczoge1xuXHRcdFx0ICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLCAvLyBUT0RPIHJlbW92ZSB3aGVuIGRlcGxveVxuXHRcdFx0ICAgICAgICB0aW1lb3V0OiAxMjAwMDAwXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICB0aW1lb3V0OiAxMjAwMDAwXG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvL3ZhciByZXN1bHQgPSBIVFRQLmNhbGwoJ1BPU1QnLCB1cmwsIG9wdGlvbnMpO1xuXG5cdFx0XHRcdHZhciByZXN1bHQgPSBIVFRQLnBvc3QoIHVybCwgb3B0aW9ucyApO1xuXHRcdFx0XHR2YXIgcmVzdWx0Q29udGVudCA9IHJlc3VsdC5jb250ZW50O1xuXHRcdFx0XHQvL1N5bmNocm9uaXphdGlvbnMuaW5zZXJ0KHtkYXRlOkRhdGUubm93KCl9KTtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdENvbnRlbnQ7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coIFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi5cIiwgZSApO1xuXHRcdFx0XHRyZXR1cm4gXCJFcnJvciB3aGlsZSB0cnlpbmcgdG8gc3luY3Jvbml6ZS4uLiBcIisgZTtcblx0XHRcdH1cblx0XHQvL3JldHVybiByZXN1bHRDb250ZW50O1xuXHRcdH0sXG5cdH0pO1xufVxufSk7XG4iLCIvLyBNZXRlb3IucHVibGlzaCgnYWxsQXBwcycsIGZ1bmN0aW9uKCkge1xuLy8gXHRyZXR1cm4gQXBwcy5maW5kKHt9KTtcbi8vIH0pO1xuXG4vLyBNZXRlb3IucHVibGlzaChcInVzZXJzXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCh7fSwge2ZpZWxkczp7Y3JlYXRlZEF0OiB0cnVlLCBwcm9maWxlOiB0cnVlLCBlbWFpbHM6IHRydWUsIHVzZXJuYW1lOiB0cnVlfX0pO1xuLy8gfSk7XG5cblxuICBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgfSk7IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5cbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvYXBwcy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS91c2Vycy5qcyc7XG5cbmltcG9ydCAnLi4vc2VydmVyL2ZpeHR1cmVzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL21ldGhvZHMuanMnO1xuaW1wb3J0ICcuLi9zZXJ2ZXIvcHVibGljYXRpb25zLmpzJztcbmltcG9ydCAnLi4vbGliL2FwcF9sb2FkZXIuanMnO1xuXG5cbi8vaW1wb3J0IHtERFB9IGZyb20gJ21ldGVvci9kZHAnO1xuLy9pbXBvcnQge0FjY291bnRzfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSc7XG5cblxuLy8gaW1wb3J0ICcuLi9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2ZpeHR1cmVzLmpzJztcblxuLy8gaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9maXh0dXJlcy5qcyc7XG5cblxuTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuXHRjb25zb2xlLmxvZyhcIm1ldGVvciBzdGFydGVkLi4uXCIpO1xuXG5cblxuICAvLyBjb2RlIHRvIHJ1biBvbiBzZXJ2ZXIgYXQgc3RhcnR1cFxuXG4gLy8gIFNlcnZlcjIgPSBERFAuY29ubmVjdChcImh0dHA6Ly9iZWVrZWUuYm94OjgzXCIpO1xuXHQvLyBBY2NvdW50cy5jb25uZWN0aW9uID0gU2VydmVyMjtcblx0Ly8gY29uc29sZS5sb2coXCJvbiBjb25uZWN0ZS4uLlwiKTtcbn0pO1xuIl19
