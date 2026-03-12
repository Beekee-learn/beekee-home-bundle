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
    var scriptsPath = Meteor.settings.scriptsPath || "/home/beekee/scripts";

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
      getwlanusb: function () {
        // Return true if the wlanusb interface exists on the machine. Make sure to return a boolean value.
        let res;

        try {
          res = cmd("ip link show wlanusb");
          return true;
        } catch (error) {
          return false;
        }
      },
      getWLANUSB: function () {
        let res;

        try {
          res = cmd("ip link show wlanusb");
          return true;
        } catch (error) {
          return false;
        }
      },
      getWifiClientModeEnabled: function () {
        try {
          const nmManaged = cmd("nmcli -t -f GENERAL.STATE device show wlanusb 2>/dev/null | grep -q ':100 (connected)\|:30 (disconnected)\|:50 (connecting)' && echo true || echo false").toString().trim();
          const wlanusbApActive = cmd("systemctl is-active hostapd@wlanusb.service >/dev/null 2>&1 && echo true || echo false").toString().trim();

          if (nmManaged === "true" && wlanusbApActive !== "true") {
            return true;
          }

          return false;
        } catch (error) {
          console.log("Error detecting Wi-Fi client mode:", error);
          return false;
        }
      },
      enableWifiClientMode: function () {
        try {
          return cmd(`bash ${scriptsPath}/normal_to_client.sh`);
        } catch (error) {
          console.log("Error enabling Wi-Fi client mode:", error);
          throw new Meteor.Error("wifi-client-mode-enable-failed", "Failed to enable Wi-Fi client mode.");
        }
      },
      disableWifiClientMode: function () {
        try {
          return cmd(`bash ${scriptsPath}/client_to_normal.sh`);
        } catch (error) {
          console.log("Error disabling Wi-Fi client mode:", error);
          throw new Meteor.Error("wifi-client-mode-disable-failed", "Failed to disable Wi-Fi client mode.");
        }
      },
      getWifiNetworks: function () {
        return Promise.asyncApply(() => {
          var wifi = require("node-wifi");

          wifi.init({
            iface: "wlanusb"
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
          iface: "wlanusb"
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
          iface: "wlanusb"
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
          iface: "wlanusb"
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiYWRkQ2xhc3MiLCJmYWRlT3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnQiLCJBcHBzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJhbGxvdyIsImluc2VydCIsInVwZGF0ZSIsInVzZXJJZCIsInNwYWNlIiwicHVibGlzaCIsImFwcHNQdWJsaWNhdGlvbiIsImZpbmQiLCJTeW5jaHJvbml6YXRpb25zIiwic3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uIiwiaXNBZG1pbiIsImNvbnNvbGUiLCJsb2ciLCJSb2xlcyIsInVzZXJJc0luUm9sZSIsInVzZXIiLCJyb2xlQXNzaWdubWVudCIsInJlYWR5IiwiY3JlYXRlUm9sZSIsInVubGVzc0V4aXN0cyIsInVzZXJzIiwiY291bnQiLCJhZG1pblBhc3N3b3JkIiwic2V0dGluZ3MiLCJ1c2VybmFtZSIsInJvbGVzIiwiXyIsImVhY2giLCJpZCIsIkFjY291bnRzIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJwcm9maWxlIiwibmFtZSIsImxlbmd0aCIsImFkZFVzZXJzVG9Sb2xlcyIsImRlZmF1bHRBcHBzIiwiY3VzdG9tQXBwIiwib25seVRlYWNoZXIiLCJvcmRlciIsImRvY191c2VyIiwiZG9jX2FkbWluIiwibGFzdF92ZXJzaW9uIiwidXJsIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiaW5zdGFsbGVkIiwidmVyc2lvbiIsImhpZGRlbiIsIkhUVFAiLCJmcyIsIk5wbSIsInJlcXVpcmUiLCJleGVjIiwiY21kIiwid3JhcEFzeW5jIiwid2lmaVNldHRpbmdzUGF0aCIsImNvbmZpZ1BhdGgiLCJzY3JpcHRzUGF0aCIsInJlYWRsaW5lIiwibWV0aG9kcyIsImFkbWluU2V0TmV3UGFzc3dvcmQiLCJhZG1pbklkIiwibmV3UGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNyZWF0ZUFjY291bnQiLCJlZGl0QWNjb3VudCIsIl9pZCIsIiRzZXQiLCJjaGFuZ2VFbWFpbCIsImNoZWNrIiwiU3RyaW5nIiwib2xkZW1haWwiLCJlbWFpbHMiLCJlbWFpbFJlZyIsInRlc3QiLCJyZW1vdmVFbWFpbCIsImFkZHJlc3MiLCJhZGRFbWFpbCIsImRlbGV0ZVVzZXIiLCJlcnJvciIsInJlc3VsdCIsIm1lc3NhZ2UiLCJhZGRNYW5hZ2VyUm9sZSIsInJlbW92ZU1hbmFnZXJSb2xlIiwicmVtb3ZlVXNlcnNGcm9tUm9sZXMiLCJhZGRBZG1pblJvbGUiLCJyZW1vdmVBZG1pblJvbGUiLCJydW5Db21tYW5kIiwiY29tbWFuZCIsInJlcyIsImdldFVzZWRTcGFjZSIsInN0b3JhZ2VVc2FnZSIsInRvRml4ZWQiLCJzdG9yYWdlVG90YWwiLCJwZXJjZW50YWdlIiwiZ2V0U1NJRCIsImRhdGEiLCJyZWFkRmlsZVN5bmMiLCJtYXRjaCIsIlJlZ0V4cCIsIlNTSUQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwic2V0U1NJRCIsIm5ld1NTSUQiLCJlbmNvZGVkTmV3U1NJRCIsIkJ1ZmZlciIsInRvU3RyaW5nIiwibmV3RGF0YSIsIndyaXRlRmlsZVN5bmMiLCJnZXRXaWZpUGFzc3dvcmQiLCJzZXRXaWZpUGFzc3dvcmQiLCJnZXRXaWZpQ2hhbm5lbCIsImNoYW5uZWwiLCJzZXRXaWZpQ2hhbm5lbCIsIm5ld0NoYW5uZWwiLCJnZXRXaWZpQmFuZCIsInNldFdpZmlCYW5kIiwibmV3QmFuZCIsImJhbmRSZWdleCIsImNoYW5uZWxSZWdleCIsIm1hdGNoQmFuZCIsIm1hdGNoQ2hhbm5lbCIsInRyaW0iLCJjdXJyZW50Q2hhbm5lbCIsInBhcnNlSW50IiwiZ2V0U2VyaWFsIiwic2VyaWFsIiwiZ2V0T3BlcmF0b3JOYW1lIiwib3BlcmF0b3JOYW1lIiwiZ2V0U2lnbmFsU3RyZW5ndGgiLCJzaWduYWxTdHJlbmd0aCIsInN0cmVuZ3RoVmFsdWUiLCJxdWFsaXR5IiwiZ2V0QVBOIiwiQVBOIiwiZ2V0QVBOVXNlciIsIkFQTlVzZXIiLCJnZXRBUE5QYXNzd29yZCIsIkFQTlBhc3N3b3JkIiwiZ2V0U2ltQ2FyZFN0YXR1cyIsInNpbVN0YXR1c1Jlc3VsdCIsImV4ZWN1dGVDb21tYW5kIiwic2ltU3RhdHVzIiwiaW5jbHVkZXMiLCJnZXRTaW1QaW4iLCJTaW1QaW4iLCJzZXRTaW1QaW4iLCJQSU4iLCJzZXRBUE4iLCJzZXRBUE5Vc2VyIiwic2V0QVBOUGFzc3dvcmQiLCJnZXRSZW1vdGVTdGF0dXMiLCJnZXRBdXRvU3luY1N0YXR1cyIsImdldFNoYXJlSW50ZXJuZXRWaWFFdGhlcm5ldFN0YXR1cyIsImlzU2hhcmluZyIsImdldFNoYXJlSW50ZXJuZXRWaWFNb2JpbGVTdGF0dXMiLCJhY3RpdmF0ZVJlbW90ZSIsInJlczIiLCJkaXNhY3RpdmF0ZVJlbW90ZSIsImFjdGl2YXRlQXV0b1N5bmMiLCJkaXNhY3RpdmF0ZUF1dG9TeW5jIiwiZ2V0QmF0dGVyeVN0YXR1cyIsImJhdHRlcnlNb2R1bGUiLCJnZXRJc09ubGluZSIsImlzT25saW5lIiwiZ2V0RXRoMElQIiwiZ2V0V3dhbjBJUCIsImdldEJlZWtlZU9zVmVyc2lvbiIsImdldEJlZWtlZUhvbWVWZXJzaW9uIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInJlc3RhcnRNb2JpbGVDb25uZWN0IiwiZ2V0SW50ZXJuZXRJbnRlcmZhY2UiLCJnZXR3bGFudXNiIiwiZ2V0V0xBTlVTQiIsImdldFdpZmlDbGllbnRNb2RlRW5hYmxlZCIsIm5tTWFuYWdlZCIsIndsYW51c2JBcEFjdGl2ZSIsImVuYWJsZVdpZmlDbGllbnRNb2RlIiwiRXJyb3IiLCJkaXNhYmxlV2lmaUNsaWVudE1vZGUiLCJnZXRXaWZpTmV0d29ya3MiLCJ3aWZpIiwiaW5pdCIsImlmYWNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzY2FuIiwibmV0d29ya3MiLCJ1bmlxdWVOZXR3b3JrcyIsIk1hcCIsImZvckVhY2giLCJuZXR3b3JrIiwic3RyZW5ndGgiLCJrZXkiLCJzc2lkIiwibWFjIiwic3Vic3RyaW5nIiwiaGFzIiwiZ2V0Iiwic2V0Iiwic2VjdXJpdHkiLCJ1bmlxdWVOZXR3b3Jrc0FycmF5IiwiQXJyYXkiLCJmcm9tIiwidmFsdWVzIiwiY29ubmVjdFRvV2lmaSIsImNvbm5lY3QiLCJkaXNjb25uZWN0V2lmaSIsImRpc2Nvbm5lY3QiLCJmb3JnZXRXaWZpIiwiZGVsZXRlQ29ubmVjdGlvbiIsImdldENsaWVudFNTSUQiLCJnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCIsImxpc3RGb3J3YXJkUnVsZXNDb21tYW5kIiwiY29tbWFuZFJlc3VsdCIsInNoYXJpbmdGcm9tV2xhblRvRXRoIiwic2hhcmluZ1RvV2xhbkZyb21FdGhFc3RhYmxpc2hlZCIsInN0YXR1cyIsIm1hY0FkZHJlc3MiLCJlbmFibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCIsImNhbGxiYWNrIiwiaXB0YWJsZXNDb21tYW5kcyIsImpvaW4iLCJzdGRvdXQiLCJzdGRlcnIiLCJkaXNhYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQiLCJpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzIiwiZXhlY3V0ZUFuZFJlcGVhdCIsImRvbmVDYWxsYmFjayIsInRhc2tzQ29tcGxldGVkIiwiZW5hYmxlSW50ZXJuZXRGb3JNYWNFdGhlcm5ldCIsImFsbG93TWFjQ29tbWFuZCIsImJsb2NrT3RoZXJzQ29tbWFuZCIsInJlbW92ZUFsbE1hY0ZpbHRlcnNGb3JFdGhlcm5ldCIsImxpbmVzIiwic3BsaXQiLCJydWxlTnVtYmVycyIsInJlZHVjZSIsImFjYyIsImxpbmUiLCJpbmRleCIsInRvTG93ZXJDYXNlIiwicnVsZU51bWJlciIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJyZW1vdmVFcnJvciIsInJlbW92ZVN0ZG91dCIsInJlbW92ZVN0ZGVyciIsInNhdmVFcnJvciIsInNhdmVTdGRvdXQiLCJzYXZlU3RkZXJyIiwiZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzTW9iaWxlIiwic2hhcmluZ0Zyb21XbGFuVG9Xd2FuIiwic2hhcmluZ1RvV2xhbkZyb21Xd2FuRXN0YWJsaXNoZWQiLCJlbmFibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUiLCJkaXNhYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlIiwiYWxsb3dJbnRlcm5ldEZvck1hY01vYmlsZSIsInJlbW92ZUFsbE1hY0ZpbHRlcnNGb3JNb2JpbGUiLCJyZWJvb3QiLCJzaHV0ZG93biIsInN5bmNocm9uaXplIiwiZGV2aWNlU2VyaWFsIiwicHVibGljIiwiZGV2aWNlVG9rZW4iLCJtb29kbGVBUElUb2tlbiIsImNsb3VkVVJMIiwib3B0aW9ucyIsImhlYWRlcnMiLCJucG1SZXF1ZXN0T3B0aW9ucyIsInJlamVjdFVuYXV0aG9yaXplZCIsInRpbWVvdXQiLCJwb3N0IiwicmVzdWx0Q29udGVudCIsImNvbnRlbnQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sQ0FBQ0MsUUFBWCxFQUFxQjtBQUNwQkMsUUFBTSxDQUFDQyxPQUFQLENBQWUsWUFBZixFQUE2QiwyTkFB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Q0FBQ29CLENBQUQsRUFBRztBQUFDcEIsVUFBTSxHQUFDb0IsQ0FBUDtBQUFTOztBQUFwQixDQUE1QixFQUFrRCxDQUFsRDtBQUFxREwsTUFBTSxDQUFDSSxJQUFQLENBQVksd0JBQVo7QUFBc0NKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLG9DQUFaO0FBQWtESixNQUFNLENBQUNJLElBQVAsQ0FBWSx5QkFBWjtBQUF1Q0osTUFBTSxDQUFDSSxJQUFQLENBQVksdUJBQVo7QUFBcUNKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHNCQUFaO0FBQW9DSixNQUFNLENBQUNJLElBQVAsQ0FBWSwyQkFBWjtBQUF5Q0osTUFBTSxDQUFDSSxJQUFQLENBQVksc0JBQVo7QUFZalQ7QUFDQTtBQUdBO0FBRUE7QUFHQW5CLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlLE1BQU07QUFDcEJ5QixTQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQURvQixDQUtuQjtBQUVEO0FBQ0E7QUFDQTtBQUNBLENBVkQsRSIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXHRJbmplY3QucmF3SGVhZChcIm1ldGFMb2FkZXJcIiwgJzxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT0wLCB3aWR0aD1kZXZpY2Utd2lkdGgsIGhlaWdodD1kZXZpY2UtaGVpZ2h0XCIvPjxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiPlx0PG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCI+Jyk7XG5cblx0SW5qZWN0LnJhd0JvZHkoXCJodG1sTG9hZGVyXCIsIEFzc2V0cy5nZXRUZXh0KCdhcHBfbG9hZGVyLmh0bWwnKSk7XG59XG5cbmlmIChNZXRlb3IuaXNDbGllbnQpIHtcblx0TWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24oKSB7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQkKCcuaW5kZXgtLWljb24nKS5hZGRDbGFzcygnYW5pbWF0ZWQtaWNvbicpO1xuXG5cdFx0XHQkKFwiI2luamVjdC1sb2FkZXItd3JhcHBlclwiKS5mYWRlT3V0KDUwMCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdCQoJy5pbmRleC0taWNvbicpLnJlbW92ZUNsYXNzKCdhbmltYXRlZC1pY29uJyk7XG5cdFx0fSk7XG5cdFx0fSwgNTAwKTtcblx0fSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuIFxuZXhwb3J0IGNvbnN0IEFwcHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignaG9tZS1hcHBzJyk7XG5cblxuXG5BcHBzLmFsbG93KHtcblxuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHVwZGF0ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gdHJ1ZX0sXG5cdHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gdHJ1ZX0sXG5cblx0Ly8gaW5zZXJ0OiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHVwZGF0ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyByZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH1cbn0pO1xuXG4vLyBQdWJsaWNhdGlvbnNcblxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbEFwcHMnLCBmdW5jdGlvbiBhcHBzUHVibGljYXRpb24oKSB7XG4gICAgcmV0dXJuIEFwcHMuZmluZCgpO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgU3luY2hyb25pemF0aW9ucyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdob21lLXN5bmNocm9uaXphdGlvbnMnKTtcblxuXG5cblN5bmNocm9uaXphdGlvbnMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0dXBkYXRlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cblx0Ly8gaW5zZXJ0OiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHVwZGF0ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyByZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH1cbn0pO1xuXG4vLyBQdWJsaWNhdGlvbnNcblxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbFN5bmNocm9uaXphdGlvbnMnLCBmdW5jdGlvbiBzeW5jaHJvbml6YXRpb25zUHVibGljYXRpb24oKSB7XG4gICAgcmV0dXJuIFN5bmNocm9uaXphdGlvbnMuZmluZCgpO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5cbi8vIHZhciB1c2Vyc0RCXHQ9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vLyB2YXIgY29sbGVjdGlvblx0PSB1c2Vyc0RCLm9wZW4oJ3VzZXJzJyk7XG5cblxuLy9jb25zdCBkYXRhYmFzZSA9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vL2NvbnN0IGNvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vZXhwb3J0IGNvbnN0IFVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vLyBTaGFyaW5nIHRoZSBzYW1lIEFjY291bnQgY29sbGVjdGlvbiB0aGFuIGJlZWtlZS1saXZlXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0Ly8gY2hlY2sgdGhhdCB0aGUgdXNlcklkIHNwZWNpZmllZCBpcyBhZG1pblxuaXNBZG1pbiA9IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRjb25zb2xlLmxvZyhcImlzYWRtaW5cIik7XG4gIHJldHVybiBSb2xlcy51c2VySXNJblJvbGUoTWV0ZW9yLnVzZXIoKSwgJ2FkbWluJyk7XG59XG5cblxuLy8gUHVibGlzaCBSb2xlcyB0byBjbGllbnRcbk1ldGVvci5wdWJsaXNoKG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgcmV0dXJuIE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKHsgJ3VzZXIuX2lkJzogdGhpcy51c2VySWQgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5yZWFkeSgpXG4gIH1cbn0pO1xuXG5NZXRlb3IucHVibGlzaChudWxsLCBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoKTtcblxufSk7XG5cbiAgLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICAvLyBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gIC8vICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIC8vIH0pO1xuXG4vLyBTZXJ2ZXIyID0gRERQLmNvbm5lY3QoXCJodHRwOi8vYmVla2VlLmJveDo4M1wiKTtcbi8vIEFjY291bnRzLmNvbm5lY3Rpb24gPSBTZXJ2ZXIyO1xuXG5cbi8vdmFyIGRhdGFiYXNlID0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vTWV0ZW9yLnVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vL2V4cG9ydCBjb25zdCBVc2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdhcHBzJyk7XG5cblxuICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcbiAgLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICAvLyBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gIC8vICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIC8vIH0pO1xufSIsImltcG9ydCB7IEFwcHMgfSBmcm9tICcuLi9pbXBvcnRzL2FwaS9hcHBzLmpzJztcblxuXHQvLyBDcmVhdGUgdGhlIHJvbGVzXG5cdFJvbGVzLmNyZWF0ZVJvbGUoJ21hbmFnZXInLCB7dW5sZXNzRXhpc3RzOiB0cnVlfSk7XG5cblxuLy8gIyMjICBDcmVhdGUgYWRtaW4gdXNlciBhdCBmaXJzdCBzdGFydCAgIyMjXG5cblxuaWYgKE1ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuXHRcblx0Ly8gQ3JlYXRlIHRoZSByb2xlXG5cdFJvbGVzLmNyZWF0ZVJvbGUoJ21hbmFnZXInLCB7dW5sZXNzRXhpc3RzOiB0cnVlfSk7XG5cdFJvbGVzLmNyZWF0ZVJvbGUoJ2FkbWluJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXG5cdHZhciBhZG1pblBhc3N3b3JkID0gTWV0ZW9yLnNldHRpbmdzLmFkbWluUGFzc3dvcmQ7XG5cblx0dmFyIHVzZXJzID0gW1xuXHRcdHt1c2VybmFtZTpcImFkbWluXCIscm9sZXM6WydhZG1pbiddfSxcblx0XTtcblxuXHRfLmVhY2godXNlcnMsIGZ1bmN0aW9uICh1c2VyKSB7XG5cdFx0dmFyIGlkO1xuXHRcdGlkID0gQWNjb3VudHMuY3JlYXRlVXNlcih7XG5cdFx0XHR1c2VybmFtZTogdXNlci51c2VybmFtZSxcblx0XHRcdGVtYWlsOiBcIkFkbWluXCIsXG5cdFx0XHRwYXNzd29yZDogYWRtaW5QYXNzd29yZCxcblx0XHRcdHByb2ZpbGU6e25hbWU6XCJBZG1pblwifVxuXHRcdH0pO1xuXG5cdFx0aWYgKHVzZXIucm9sZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Um9sZXMuYWRkVXNlcnNUb1JvbGVzKGlkLCB1c2VyLnJvbGVzKTtcblx0XHR9XG5cdH0pO1xufVxuXG5cbmlmIChBcHBzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG5cblx0dmFyIGRlZmF1bHRBcHBzID0gW1xuXHRcdHtuYW1lOlwiTGl2ZVwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjozLCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vbGl2ZS5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtbGl2ZS5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgTGl2ZSBwcm9tb3RlIHJlYWwtdGltZSBpbnRlcmFjdGlvbiBieSBhbGxvd2luZyBsZWFybmVycyB0byBleHByZXNzIHRoZW1zZWx2ZXMgYXNraW5nIHF1ZXN0aW9ucywgcG9zdGluZyBwaG90b3Mgb3Igc2hhcmluZyBmaWxlcy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMS40XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJSZXNvdXJjZXNcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NywgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL3Jlc291cmNlcy5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtcmVzb3VyY2VzLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIldpdGggQmVla2VlIFJlc291cmNlcywgeW91IGNhbiBlYXNpbHkgc2hhcmUgZmlsZXMgd2l0aCB5b3VyIGxlYXJuZXJzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIldoZWVsXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6dHJ1ZSwgb3JkZXI6OSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMC43XCIsIHVybDpcImh0dHA6Ly93aGVlbC5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtd2hlZWwucG5nXCIsIGRlc2NyaXB0aW9uOlwiQmVla2VlIFdoZWVsIGlzIGEgc2ltcGxlIHJhbmRvbSBwaWNrZXIgd2hlZWwgdGhhdCBhbGxvdyB5b3UgdG8gcGljayB1cCBhIHJhbmRvbSBuYW1lLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjhcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlRpbWVyXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjgsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly90aW1lci5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtdGltZXIucG5nXCIsIGRlc2NyaXB0aW9uOlwiQmVla2VlIFRpbWVyIGlzIGEgc2ltcGxlIHRpbWVyIHRoYXQgbGV0cyB5b3VyIGxlYXJuZXJzIGtub3cgaG93IG11Y2ggdGltZSB0aGV5IGhhdmUgbGVmdC5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJNb29kbGVcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjoxLCBkb2NfdXNlcjpcIm1vb2RsZV90ZWFjaGVyZG9jLnBkZlwiLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9tb29kbGUuYmVla2VlLmJveFwiLCBpY29uOlwibW9vZGxlLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIk1vb2RsZSBpcyBhIGZyZWUsIG9ubGluZSBMZWFybmluZyBNYW5hZ2VtZW50IHN5c3RlbSBlbmFibGluZyBlZHVjYXRvcnMgdG8gY3JlYXRlIHRoZWlyIG93biBwcml2YXRlIHdlYnNpdGUgZmlsbGVkIHdpdGggZHluYW1pYyBjb3Vyc2VzIHRoYXQgZXh0ZW5kIGxlYXJuaW5nLCBhbnkgdGltZSwgYW55d2hlcmUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjMuMTEuMlwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiS29saWJyaVwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjIsIGRvY191c2VyOlwia29saWJyaV91c2VyZG9jLnBkZlwiLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9rb2xpYnJpLmJlZWtlZS5ib3hcIiwgaWNvbjpcImtvbGlicmkucG5nXCIsIGRlc2NyaXB0aW9uOlwiS29saWJyaSBpcyBhbiBvcGVuLXNvdXJjZSBlZHVjYXRpb25hbCBwbGF0Zm9ybSBzcGVjaWFsbHkgZGVzaWduZWQgdG8gcHJvdmlkZSBvZmZsaW5lIGFjY2VzcyB0byBhIHdpZGUgcmFuZ2Ugb2YgcXVhbGl0eSwgb3Blbmx5IGxpY2Vuc2VkIGVkdWNhdGlvbmFsIHJlc291cmNlcyBpbiBsb3ctcmVzb3VyY2UgY29udGV4dHMgbGlrZSBydXJhbCBzY2hvb2xzLCByZWZ1Z2VlIGNhbXBzLCBvcnBoYW5hZ2VzLCBhbmQgYWxzbyBpbiBub24tZm9ybWFsIHNjaG9vbCBwcm9ncmFtcy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4xNC43XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0Ly8ge25hbWU6XCJFdGhlcnBhZFwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjUsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9ldGhlcnBhZC5iZWVrZWUuYm94XCIsIGljb246XCJldGhlcnBhZC5wbmdcIiwgZGVzY3JpcHRpb246XCJFdGhlcnBhZCBhbGxvd3MgeW91IHRvIGVkaXQgZG9jdW1lbnRzIGNvbGxhYm9yYXRpdmVseSBpbiByZWFsLXRpbWUsIG11Y2ggbGlrZSBhIGxpdmUgbXVsdGktcGxheWVyIGVkaXRvciB0aGF0IHJ1bnMgaW4geW91ciBicm93c2VyLiBXcml0ZSBhcnRpY2xlcywgcHJlc3MgcmVsZWFzZXMsIHRvLWRvIGxpc3RzLCBldGMuIHRvZ2V0aGVyIHdpdGggeW91ciBmcmllbmRzLCBmZWxsb3cgc3R1ZGVudHMgb3IgY29sbGVhZ3VlcywgYWxsIHdvcmtpbmcgb24gdGhlIHNhbWUgZG9jdW1lbnQgYXQgdGhlIHNhbWUgdGltZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMS44LjE0XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJTdG9ybVwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjQsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9zdG9ybS5iZWVrZWUuYm94XCIsIGljb246XCJzdG9ybS5wbmdcIiwgZGVzY3JpcHRpb246XCJDcmVhdGUgYW5kIGFuaW1hdGUgbGl2ZSBzdXJ2ZXlzLCBicmFpbnN0b3JtcyBhbmQgcXVpenplcy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC40LjVcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlBhZFwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjUsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9wYWQuYmVla2VlLmJveFwiLCBpY29uOlwicGFkLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBjb2xsYWJvcmF0aXZlIHdhbGxzIHRvIHNoYXJlIGFuZCBvcmdhbml6ZSBjb250ZW50LlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjguMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiQnV6emVyXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjp0cnVlLCBvcmRlcjo2LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vYnV6emVyLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJ1enplci5wbmdcIiwgZGVzY3JpcHRpb246XCJDcmVhdGUgYSB2aXJ0dWFsIGdhbWluZyByb29tIGFyb3VuZCBhIGNvbm5lY3RlZCBidXp6ZXIuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMi40XCIsIGhpZGRlbjpmYWxzZX0sXG5cblx0XTtcblxuXHRfLmVhY2goZGVmYXVsdEFwcHMsIGZ1bmN0aW9uIChkZWZhdWx0QXBwcykge1xuXHRcdEFwcHMuaW5zZXJ0KGRlZmF1bHRBcHBzKTtcblx0fSk7XG59IiwiaW1wb3J0IHsgSFRUUCB9IGZyb20gXCJtZXRlb3IvaHR0cFwiO1xuXG5NZXRlb3Iuc3RhcnR1cChmdW5jdGlvbiAoKSB7XG4gIGlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgICB2YXIgZnMgPSBOcG0ucmVxdWlyZShcImZzXCIpO1xuICAgIGV4ZWMgPSBOcG0ucmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIikuZXhlYztcbiAgICBjbWQgPSBNZXRlb3Iud3JhcEFzeW5jKGV4ZWMpO1xuXG4gICAgdmFyIHdpZmlTZXR0aW5nc1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Mud2lmaVNldHRpbmdzUGF0aDtcbiAgICB2YXIgY29uZmlnUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5jb25maWdQYXRoO1xuICAgIHZhciBzY3JpcHRzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5zY3JpcHRzUGF0aCB8fCBcIi9ob21lL2JlZWtlZS9zY3JpcHRzXCI7XG4gICAgY29uc3QgcmVhZGxpbmUgPSByZXF1aXJlKFwicmVhZGxpbmVcIik7XG5cbiAgICBNZXRlb3IubWV0aG9kcyh7XG4gICAgICBhZG1pblNldE5ld1Bhc3N3b3JkOiBmdW5jdGlvbiAoYWRtaW5JZCwgdXNlcklkLCBuZXdQYXNzd29yZCkge1xuICAgICAgICAvLyBBZG1pbiBjYW4gZm9yY2libHkgY2hhbmdlIHRoZSBwYXNzd29yZCBmb3IgYSB1c2VyXG4gICAgICAgIGlmIChSb2xlcy51c2VySXNJblJvbGUoYWRtaW5JZCwgXCJhZG1pblwiKSkge1xuICAgICAgICAgIEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgbmV3UGFzc3dvcmQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY3JlYXRlQWNjb3VudDogZnVuY3Rpb24gKGVtYWlsLCBwYXNzd29yZCwgcHJvZmlsZSkge1xuICAgICAgICByZXR1cm4gQWNjb3VudHMuY3JlYXRlVXNlcih7XG4gICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgICBwcm9maWxlOiBwcm9maWxlLFxuICAgICAgICB9KTsgLy8gQ2FsbGJhY2sgaXMgbm90IHN1cHBvcnRlZCBvbiBzZXJ2ZXItc2lkZVxuICAgICAgfSxcbiAgICAgIGVkaXRBY2NvdW50OiBmdW5jdGlvbiAodXNlcklkLCBlbWFpbCwgcGFzc3dvcmQsIHByb2ZpbGUpIHtcbiAgICAgICAgTWV0ZW9yLnVzZXJzLnVwZGF0ZShcbiAgICAgICAgICB7IF9pZDogdXNlcklkIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJHNldDoge1xuICAgICAgICAgICAgICBcImVtYWlscy4wLmFkZHJlc3NcIjogZW1haWwsXG4gICAgICAgICAgICAgIHByb2ZpbGU6IHByb2ZpbGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIGlmIChwYXNzd29yZCkge1xuICAgICAgICAgIEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgcGFzc3dvcmQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2hhbmdlRW1haWw6IGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICB2YXIgZW1haWwgPSBlbWFpbDtcbiAgICAgICAgY2hlY2soZW1haWwsIFN0cmluZyk7XG4gICAgICAgIHZhciB1c2VyID0gTWV0ZW9yLnVzZXIoKTtcbiAgICAgICAgdmFyIG9sZGVtYWlsID0gdXNlci5lbWFpbHM7XG4gICAgICAgIHZhciBlbWFpbFJlZyA9IC9eKFtcXHctXFwuXStAKFtcXHctXStcXC4pK1tcXHctXXsyLDR9KT8kLztcbiAgICAgICAgaWYgKGVtYWlsUmVnLnRlc3QoZW1haWwpKSB7XG4gICAgICAgICAgaWYgKG9sZGVtYWlsICE9IG51bGwpIHtcbiAgICAgICAgICAgIEFjY291bnRzLnJlbW92ZUVtYWlsKHVzZXIuX2lkLCB1c2VyLmVtYWlsc1swXS5hZGRyZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQWNjb3VudHMuYWRkRW1haWwodXNlci5faWQsIGVtYWlsKTtcbiAgICAgICAgICByZXR1cm4gZW1haWw7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgICBkZWxldGVVc2VyOiBmdW5jdGlvbiAodXNlcklkKSB7XG4gICAgICAgIE1ldGVvci51c2Vycy5yZW1vdmUodXNlcklkLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aGVuIGRlbGV0aW5nIHVzZXIgOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRkTWFuYWdlclJvbGU6IGZ1bmN0aW9uICh1c2VySWQpIHtcbiAgICAgICAgUm9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJZCwgXCJtYW5hZ2VyXCIpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZU1hbmFnZXJSb2xlOiBmdW5jdGlvbiAodXNlcklkKSB7XG4gICAgICAgIFJvbGVzLnJlbW92ZVVzZXJzRnJvbVJvbGVzKHVzZXJJZCwgXCJtYW5hZ2VyXCIpO1xuICAgICAgfSxcbiAgICAgIGFkZEFkbWluUm9sZTogZnVuY3Rpb24gKHVzZXJJZCkge1xuICAgICAgICBSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklkLCBcImFkbWluXCIpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUFkbWluUm9sZTogZnVuY3Rpb24gKHVzZXJJZCkge1xuICAgICAgICBSb2xlcy5yZW1vdmVVc2Vyc0Zyb21Sb2xlcyh1c2VySWQsIFwiYWRtaW5cIik7XG4gICAgICB9LFxuXG4gICAgICAvLyAnZ2V0VXNlZFNwYWNlJzogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBcdHZhciByZXM7XG4gICAgICAvLyBcdHJlcyA9IGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpICsgXCIvIFwiICsgY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIikgKyBcIiAoXCIrY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIikrXCJ1c2VkKVwiO1xuICAgICAgLy8gXHRyZXR1cm4gcmVzO1xuICAgICAgLy8gfSxcbiAgICAgIHJ1bkNvbW1hbmQ6IGZ1bmN0aW9uIChwYXNzd29yZCwgY29tbWFuZCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXCJlY2hvIFwiICsgcGFzc3dvcmQgKyBcIiB8IHN1ZG8gLVMgXCIgKyBjb21tYW5kKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0sXG4gICAgICBnZXRVc2VkU3BhY2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcyA9IHt9O1xuICAgICAgICAvL3JlcyA9IGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpICsgXCIvIFwiICsgY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIikgKyBcIiAoXCIrY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIikrXCJ1c2VkKVwiO1xuICAgICAgICByZXMuc3RvcmFnZVVzYWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIik7XG4gICAgICAgIHJlcy5zdG9yYWdlVXNhZ2UgPSByZXMuc3RvcmFnZVVzYWdlIC8gMTAwMDAwMDtcbiAgICAgICAgcmVzLnN0b3JhZ2VVc2FnZSA9IHJlcy5zdG9yYWdlVXNhZ2UudG9GaXhlZCgyKTtcbiAgICAgICAgcmVzLnN0b3JhZ2VUb3RhbCA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpO1xuICAgICAgICByZXMuc3RvcmFnZVRvdGFsID0gcmVzLnN0b3JhZ2VUb3RhbCAvIDEwMDAwMDA7XG4gICAgICAgIHJlcy5zdG9yYWdlVG90YWwgPSByZXMuc3RvcmFnZVRvdGFsLnRvRml4ZWQoMik7XG4gICAgICAgIHJlcy5wZXJjZW50YWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIik7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LFxuICAgICAgZ2V0U1NJRDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJzc2lkPSguKilcIikpO1xuICAgICAgICB2YXIgU1NJRCA9IG1hdGNoWzFdO1xuICAgICAgICBTU0lEID0gZGVjb2RlVVJJQ29tcG9uZW50KFNTSUQucmVwbGFjZSgvLi4vZywgXCIlJCZcIikpO1xuICAgICAgICByZXR1cm4gU1NJRDtcbiAgICAgIH0sXG4gICAgICBzZXRTU0lEOiBmdW5jdGlvbiAobmV3U1NJRCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICBjb25zdCBlbmNvZGVkTmV3U1NJRCA9IG5ldyBCdWZmZXIobmV3U1NJRCkudG9TdHJpbmcoXCJoZXhcIik7IC8vIENvbnZlcnQgaW50byBIZXhcbiAgICAgICAgdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwic3NpZD0oLiopXCIpKVsxXSxcbiAgICAgICAgICBlbmNvZGVkTmV3U1NJRCxcbiAgICAgICAgKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCBcInV0Zi04XCIpO1xuICAgICAgfSxcbiAgICAgIGdldFdpZmlQYXNzd29yZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJwYXNzd29yZD0oLiopXCIpKTtcbiAgICAgICAgdmFyIHBhc3N3b3JkID0gbWF0Y2hbMV07XG4gICAgICAgIHJldHVybiBwYXNzd29yZDtcbiAgICAgIH0sXG4gICAgICBzZXRXaWZpUGFzc3dvcmQ6IGZ1bmN0aW9uIChuZXdQYXNzd29yZCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJwYXNzd29yZD0oLiopXCIpKVsxXSxcbiAgICAgICAgICBuZXdQYXNzd29yZCxcbiAgICAgICAgKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCBcInV0Zi04XCIpO1xuICAgICAgfSxcbiAgICAgIGdldFdpZmlDaGFubmVsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcImNoYW5uZWw9KC4qKVwiKSk7XG4gICAgICAgIHZhciBjaGFubmVsID0gbWF0Y2hbMV07XG4gICAgICAgIHJldHVybiBjaGFubmVsO1xuICAgICAgfSxcbiAgICAgIHNldFdpZmlDaGFubmVsOiBmdW5jdGlvbiAobmV3Q2hhbm5lbCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJjaGFubmVsPSguKilcIikpWzFdLFxuICAgICAgICAgIG5ld0NoYW5uZWwsXG4gICAgICAgICk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgXCJ1dGYtOFwiKTtcbiAgICAgIH0sXG4gICAgICBnZXRXaWZpQmFuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJiYW5kPSguKilcIikpO1xuXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBSZXR1cm4gZGVmYXVsdCB2YWx1ZSBpZiB0aGUgYmFuZCBzZXR0aW5nIGRvZXMgbm90IGV4aXN0XG4gICAgICAgICAgcmV0dXJuIFwiMi40R0h6XCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXRXaWZpQmFuZDogZnVuY3Rpb24gKG5ld0JhbmQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIGJhbmRSZWdleCA9IG5ldyBSZWdFeHAoXCJiYW5kPSguKilcIik7XG4gICAgICAgIHZhciBjaGFubmVsUmVnZXggPSBuZXcgUmVnRXhwKFwiY2hhbm5lbD0oLiopXCIpO1xuICAgICAgICB2YXIgbWF0Y2hCYW5kID0gZGF0YS5tYXRjaChiYW5kUmVnZXgpO1xuICAgICAgICB2YXIgbWF0Y2hDaGFubmVsID0gZGF0YS5tYXRjaChjaGFubmVsUmVnZXgpO1xuXG4gICAgICAgIHZhciBuZXdEYXRhID0gZGF0YTtcblxuICAgICAgICBpZiAobWF0Y2hCYW5kKSB7XG4gICAgICAgICAgLy8gUmVwbGFjZSB0aGUgZXhpc3RpbmcgYmFuZCBzZXR0aW5nXG4gICAgICAgICAgbmV3RGF0YSA9IG5ld0RhdGEucmVwbGFjZShiYW5kUmVnZXgsIGBiYW5kPSR7bmV3QmFuZH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBiYW5kIHNldHRpbmdcbiAgICAgICAgICBuZXdEYXRhID0gYCR7bmV3RGF0YS50cmltKCl9XFxuYmFuZD0ke25ld0JhbmR9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaENoYW5uZWwgJiYgbWF0Y2hDaGFubmVsWzFdKSB7XG4gICAgICAgICAgLy8gQ29udmVydCB0aGUgY2hhbm5lbCB2YWx1ZSB0byBhIG51bWJlclxuICAgICAgICAgIHZhciBjdXJyZW50Q2hhbm5lbCA9IHBhcnNlSW50KG1hdGNoQ2hhbm5lbFsxXSwgMTApO1xuXG4gICAgICAgICAgLy8gU2V0IGNoYW5uZWwgdG8gYSBkZWZhdWx0IDIuNEdIeiBjaGFubmVsIGlmIGN1cnJlbnQgY2hhbm5lbCBpcyBmb3IgNUdIelxuICAgICAgICAgIGlmIChuZXdCYW5kID09IFwiMi40R0h6XCIgJiYgY3VycmVudENoYW5uZWwgPiAxNCkge1xuICAgICAgICAgICAgbmV3RGF0YSA9IG5ld0RhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTExYCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChuZXdCYW5kID09IFwiNUdIelwiICYmIGN1cnJlbnRDaGFubmVsIDw9IDE0KSB7XG4gICAgICAgICAgICBuZXdEYXRhID0gbmV3RGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9NDRgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsIFwidXRmLThcIik7XG4gICAgICB9LCAvLyAgICdzZXRXaWZpQmFuZCc6IGZ1bmN0aW9uKG5ld0JhbmQpIHtcbiAgICAgIC8vIFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gICAgICAvLyBcdHZhciBiYW5kUmVnZXggPSBuZXcgUmVnRXhwKCdiYW5kPSguKiknKTtcbiAgICAgIC8vIFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChiYW5kUmVnZXgpO1xuXG4gICAgICAvLyBcdGlmIChtYXRjaCkge1xuICAgICAgLy8gXHQgIC8vIFJlcGxhY2UgdGhlIGV4aXN0aW5nIGJhbmQgc2V0dGluZ1xuICAgICAgLy8gXHQgIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGJhbmRSZWdleCwgYGJhbmQ9JHtuZXdCYW5kfWApO1xuICAgICAgLy8gXHR9IGVsc2Uge1xuICAgICAgLy8gXHQgIC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuICAgICAgLy8gXHQgIHZhciBuZXdEYXRhID0gYCR7ZGF0YS50cmltKCl9XFxuYmFuZD0ke25ld0JhbmR9YDtcbiAgICAgIC8vIFx0fVxuICAgICAgLy8gXHR2YXIgY2hhbm5lbFJlZ2V4ID0gbmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJyk7XG4gICAgICAvLyBcdHZhciBtYXRjaDIgPSBkYXRhLm1hdGNoKGNoYW5uZWxSZWdleCk7XG4gICAgICAvLyBcdGlmIChtYXRjaDIgJiYgbWF0Y2gyWzFdKSB7XG4gICAgICAvLyBcdFx0Ly8gU2V0IGNoYW5uZWwgdG8gYSBkZWZhdWx0IDIuNEdIeiBjaGFubmVsIGlmIGN1cnJlbnQgY2hhbm5lbCBpcyBmb3IgNUdIelxuICAgICAgLy8gXHRcdGlmIChuZXdCYW5kID09IFwiMi40R0h6XCIgJiYgbWF0Y2gyWzFdID4gMTQpIHtcbiAgICAgIC8vIFx0XHRcdC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuICAgICAgLy8gXHRcdFx0dmFyIG5ld0RhdGEyID0gZGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9MTFgKTtcbiAgICAgIC8vIFx0XHR9IGVsc2UgaWYgKG5ld0JhbmQgPT0gXCI1R0h6XCIgJiYgbWF0Y2gyWzFdIDw9IDE0KSB7XG4gICAgICAvLyBcdFx0XHR2YXIgbmV3RGF0YTIgPSBkYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD00NGApO1xuICAgICAgLy8gXHRcdH1cbiAgICAgIC8vIFx0fVxuICAgICAgLy8gXHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuICAgICAgLy8gICB9LFxuICAgICAgZ2V0U2VyaWFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcIlNFUklBTD0oLiopXCIpKTtcbiAgICAgICAgdmFyIHNlcmlhbCA9IG1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gc2VyaWFsO1xuICAgICAgfSxcbiAgICAgIGdldE9wZXJhdG9yTmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3BlcmF0b3JOYW1lO1xuICAgICAgICBvcGVyYXRvck5hbWUgPSBjbWQoXG4gICAgICAgICAgXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1vcGVyYXRvci1uYW1lIHwgZ3JlcCAtbTIgJ05hbWUgICAgICAgICAgICAgJyB8IGF3ayAne3ByaW50ICQzfSdcIixcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG9wZXJhdG9yTmFtZTtcbiAgICAgIH0sIC8vICdnZXRTaWduYWxTdHJlbmd0aCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFx0dmFyIHNpZ25hbFN0cmVuZ3RoO1xuICAgICAgLy8gXHRzaWduYWxTdHJlbmd0aCA9IGNtZChcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgLW0xIE5ldHdvcmsgfCBhd2sgJ3twcmludCAkMywgJDJ9J1wiKTtcbiAgICAgIC8vIFx0cmV0dXJuIHNpZ25hbFN0cmVuZ3RoO1xuICAgICAgLy8gfSxcbiAgICAgIGdldFNpZ25hbFN0cmVuZ3RoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzaWduYWxTdHJlbmd0aDtcbiAgICAgICAgLy8gVGhpcyBleHRyYWN0cyBqdXN0IHRoZSBudW1lcmljIHBhcnQgb2YgdGhlIHNpZ25hbCBzdHJlbmd0aC5cbiAgICAgICAgc2lnbmFsU3RyZW5ndGggPSBjbWQoXG4gICAgICAgICAgXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwICdOZXR3b3JrJyB8IGF3ayAne3ByaW50ICQzfScgfCBncmVwIC1vRSAnWy0wLTldKydcIixcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBDb252ZXJ0IHNpZ25hbCBzdHJlbmd0aCB0byBhIHF1YWxpdGF0aXZlIHZhbHVlXG4gICAgICAgIHZhciBzdHJlbmd0aFZhbHVlID0gcGFyc2VJbnQoc2lnbmFsU3RyZW5ndGgpO1xuICAgICAgICB2YXIgcXVhbGl0eSA9IFwiVW5rbm93blwiO1xuICAgICAgICBpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtNzApIHtcbiAgICAgICAgICBxdWFsaXR5ID0gXCJFeGNlbGxlbnRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlID49IC04NSkge1xuICAgICAgICAgIHF1YWxpdHkgPSBcIkdvb2RcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlID49IC0xMDApIHtcbiAgICAgICAgICBxdWFsaXR5ID0gXCJGYWlyXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA8IC0xMDApIHtcbiAgICAgICAgICBxdWFsaXR5ID0gXCJQb29yXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1YWxpdHk7XG4gICAgICB9LCAvLyAnZ2V0SXNPbmxpbmUnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBcdHZhciBpc09ubGluZTtcbiAgICAgIC8vIFx0aXNPbmxpbmUgPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrICd7cHJpbnQgJDMsICQyfSdcIik7XG4gICAgICAvLyBcdHJldHVybiBpc09ubGluZTtcbiAgICAgIC8vIH0sXG4gICAgICAvLyAnZ2V0QmFuZCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFx0dmFyIGJhbmQ7XG4gICAgICAvL1x0XHRcdGJhbmQgPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrIFxcXCJ7cHJpbnQgJDJ9XFxcIiB8IGN1dCAtZFxcXFwnIC1mMlwiKTtcbiAgICAgIC8vIFx0cmV0dXJuIGJhbmQ7XG4gICAgICAvLyB9LFxuICAgICAgZ2V0QVBOOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcIkFQTj0oLiopXCIpKTtcbiAgICAgICAgdmFyIEFQTiA9IG1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gQVBOO1xuICAgICAgfSxcbiAgICAgIGdldEFQTlVzZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiQVBOX1VTRVJOQU1FPSguKilcIikpO1xuICAgICAgICB2YXIgQVBOVXNlciA9IG1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gQVBOVXNlcjtcbiAgICAgIH0sXG4gICAgICBnZXRBUE5QYXNzd29yZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJBUE5fUEFTU1dPUkQ9KC4qKVwiKSk7XG4gICAgICAgIHZhciBBUE5QYXNzd29yZCA9IG1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gQVBOUGFzc3dvcmQ7XG4gICAgICB9LFxuICAgICAgZ2V0U2ltQ2FyZFN0YXR1czogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgc2ltU3RhdHVzUmVzdWx0ID0gXCJVbmtub3duXCI7IC8vIERlZmF1bHQgc3RhdHVzXG5cbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gZXhlY3V0ZSBjb21tYW5kIGFuZCBoYW5kbGUgZXJyb3JzXG4gICAgICAgIGZ1bmN0aW9uIGV4ZWN1dGVDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjbWQoY29tbWFuZCk7IC8vIEV4ZWN1dGUgdGhlIGNvbW1hbmRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcIm9iamVjdFwiICYmIHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAvLyBDaGVjayBpZiByZXN1bHQgaXMgYW4gZXJyb3Igb2JqZWN0XG4gICAgICAgICAgICAgIHJldHVybiBcIkVycm9yXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBleGNlcHRpb25zIGlmIGNvbW1hbmQgZXhlY3V0aW9uIGZhaWxzXG4gICAgICAgICAgICByZXR1cm4gXCJFcnJvclwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0OyAvLyBSZXR1cm4gdGhlIHJlc3VsdCBpZiBubyBlcnJvcnNcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4ZWN1dGUgU0lNIGNhcmQgc3RhdHVzIGNoZWNrIGNvbW1hbmRcbiAgICAgICAgbGV0IHNpbVN0YXR1cyA9IGV4ZWN1dGVDb21tYW5kKFxuICAgICAgICAgIFwic3VkbyBxbWljbGkgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLXVpbS1nZXQtY2FyZC1zdGF0dXMgfCBncmVwICdDYXJkIHN0YXRlOidcIixcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTSU0gY2FyZCBzdGF0dXM6XCIsIHNpbVN0YXR1cyk7IC8vIExvZyB0aGUgcmF3IG91dHB1dFxuICAgICAgICAvLyBQcm9jZXNzIHRoZSBvdXRwdXQgYW5kIGRldGVybWluZSBTSU0gY2FyZCBzdGF0dXNcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHNpbVN0YXR1cy5pbmNsdWRlcyhcIm5vLWF0ci1yZWNlaXZlZFwiKSB8fFxuICAgICAgICAgIHNpbVN0YXR1cy5pbmNsdWRlcyhcIm5vdC1pbnNlcnRlZFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICBzaW1TdGF0dXNSZXN1bHQgPSBcIk5vIFNJTSBjYXJkXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKFwiZXJyb3JcIikpIHtcbiAgICAgICAgICBzaW1TdGF0dXNSZXN1bHQgPSBzaW1TdGF0dXM7IC8vIFVzZSB0aGUgZXJyb3IgbWVzc2FnZSBvciBubyBTSU0gZGV0ZWN0ZWQgbWVzc2FnZVxuICAgICAgICB9IGVsc2UgaWYgKHNpbVN0YXR1cy5pbmNsdWRlcyhcInByZXNlbnRcIikpIHtcbiAgICAgICAgICBzaW1TdGF0dXNSZXN1bHQgPSBcIk9LXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgc2ltU3RhdHVzLmluY2x1ZGVzKFwibG9ja2VkXCIpIHx8XG4gICAgICAgICAgc2ltU3RhdHVzLmluY2x1ZGVzKFwicGluLXJlcXVpcmVkXCIpXG4gICAgICAgICkge1xuICAgICAgICAgIHNpbVN0YXR1c1Jlc3VsdCA9IFwiU0lNIGNhcmQgbG9ja2VkLCBQSU4gcmVxdWlyZWRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaW1TdGF0dXNSZXN1bHQgPSBcIlVua25vd25cIjsgLy8gRm9yIG90aGVyIHN0YXR1c2VzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpbVN0YXR1c1Jlc3VsdDtcbiAgICAgIH0sXG4gICAgICBnZXRTaW1QaW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiU0lNX1BJTj0oLiopXCIpKTtcbiAgICAgICAgdmFyIFNpbVBpbiA9IG1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gU2ltUGluO1xuICAgICAgfSxcbiAgICAgIHNldFNpbVBpbjogZnVuY3Rpb24gKFBJTikge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJTSU1fUElOPS4qXCIpKSxcbiAgICAgICAgICBcIlNJTV9QSU49XCIgKyBQSU4sXG4gICAgICAgICk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgXCJ1dGYtOFwiKTtcbiAgICAgIH0sXG4gICAgICBzZXRBUE46IGZ1bmN0aW9uIChBUE4sIHVzZXIsIHBhc3N3b3JkKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgIGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcIkFQTj0uKlwiKSksXG4gICAgICAgICAgXCJBUE49XCIgKyBBUE4sXG4gICAgICAgICk7XG4gICAgICAgIC8vIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOPSguKiknKSlbMV0sIEFQTik7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgXCJ1dGYtOFwiKTtcbiAgICAgIH0sXG4gICAgICBzZXRBUE5Vc2VyOiBmdW5jdGlvbiAoQVBOVXNlcikge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJBUE5fVVNFUk5BTUU9LipcIikpLFxuICAgICAgICAgIFwiQVBOX1VTRVJOQU1FPVwiICsgQVBOVXNlcixcbiAgICAgICAgKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCBcInV0Zi04XCIpO1xuICAgICAgfSxcbiAgICAgIHNldEFQTlBhc3N3b3JkOiBmdW5jdGlvbiAoQVBOUGFzc3dvcmQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiQVBOX1BBU1NXT1JEPS4qXCIpKSxcbiAgICAgICAgICBcIkFQTl9QQVNTV09SRD1cIiArIEFQTlBhc3N3b3JkLFxuICAgICAgICApO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsIFwidXRmLThcIik7XG4gICAgICB9LFxuICAgICAgZ2V0UmVtb3RlU3RhdHVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHJlcyA9IGNtZChcbiAgICAgICAgICBcInN5c3RlbWN0bCBpcy1hY3RpdmUgcmVtb3RlLWlvdC5zZXJ2aWNlID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIDEgfHwgZWNobyAwXCIsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChyZXNbMF0gPT0gXCIxXCIpIHtcbiAgICAgICAgICAvLyBbMF0gaXMgYSBoYWNrIGJlY2F1c2UgdGhlIHJlc3VsdCByZXMgaGFzIG9uZSBleHRyYSBjaGFyYWN0ZXJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBnZXRBdXRvU3luY1N0YXR1czogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXG4gICAgICAgICAgXCJzeXN0ZW1jdGwgaXMtYWN0aXZlIGF1dG9zeW5jLnNlcnZpY2UgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gMSB8fCBlY2hvIDBcIixcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJlc1swXSA9PSBcIjFcIikge1xuICAgICAgICAgIC8vIFswXSBpcyBhIGhhY2sgYmVjYXVzZSB0aGUgcmVzdWx0IHJlcyBoYXMgb25lIGV4dHJhIGNoYXJhY3RlclxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGdldFNoYXJlSW50ZXJuZXRWaWFFdGhlcm5ldFN0YXR1czogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNTaGFyaW5nO1xuICAgICAgICBpc1NoYXJpbmcgPSBjbWQoXG4gICAgICAgICAgXCIoc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUwgUE9TVFJPVVRJTkcgLXYgLW4gfCBncmVwIC1xICdNQVNRVUVSQURFICBhbGwgIC0tICAqICAgICAgZXRoMCcgJiYgaXAgbGluayBzaG93IGV0aDAgfCBncmVwIC1xICdzdGF0ZSBVUCcpICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBpc1NoYXJpbmc7XG4gICAgICB9LFxuICAgICAgZ2V0U2hhcmVJbnRlcm5ldFZpYU1vYmlsZVN0YXR1czogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNTaGFyaW5nO1xuICAgICAgICBpc1NoYXJpbmcgPSBjbWQoXG4gICAgICAgICAgXCIoc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUwgUE9TVFJPVVRJTkcgLXYgLW4gfCBncmVwIC1xICdNQVNRVUVSQURFICBhbGwgIC0tICAqICAgICAgd3dhbjAnICYmIGlwIGxpbmsgc2hvdyB3d2FuMCB8IGdyZXAgLXEgJ3N0YXRlIFVQJykgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIixcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGlzU2hhcmluZztcbiAgICAgIH0sIC8vICdhY3RpdmF0ZUludGVybmV0U2hhcmluZyc6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gXHR2YXIgcmVzO1xuICAgICAgLy8gXHRyZXMgPSBjbWQoXCJzdWRvIHdpZmktYXAuY29uZmlnIHNldCBzaGFyZS5kaXNhYmxlZD1mYWxzZVwiKTtcbiAgICAgIC8vIFx0cmV0dXJuIHJlcztcbiAgICAgIC8vIH0sXG4gICAgICAvLyAnZGlzYWN0aXZhdGVJbnRlcm5ldFNoYXJpbmcnOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFx0dmFyIHJlcztcbiAgICAgIC8vIFx0cmVzID0gY21kKFwic3VkbyB3aWZpLWFwLmNvbmZpZyBzZXQgc2hhcmUuZGlzYWJsZWQ9dHJ1ZVwiKTtcbiAgICAgIC8vIFx0cmV0dXJuIHJlcztcbiAgICAgIC8vIH0sXG4gICAgICBhY3RpdmF0ZVJlbW90ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdGFydCByZW1vdGUtaW90LnNlcnZpY2VcIik7XG4gICAgICAgIHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSxcbiAgICAgIGRpc2FjdGl2YXRlUmVtb3RlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuICAgICAgICByZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZGlzYWJsZSByZW1vdGUtaW90LnNlcnZpY2VcIik7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LFxuICAgICAgYWN0aXZhdGVBdXRvU3luYzogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdGFydCBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuICAgICAgICByZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZW5hYmxlIGF1dG9zeW5jLnNlcnZpY2VcIik7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LFxuICAgICAgZGlzYWN0aXZhdGVBdXRvU3luYzogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdG9wIGF1dG9zeW5jLnNlcnZpY2VcIik7XG4gICAgICAgIHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBkaXNhYmxlIGF1dG9zeW5jLnNlcnZpY2VcIik7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LFxuICAgICAgZ2V0QmF0dGVyeVN0YXR1czogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICB2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGg7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcIkJBVFRFUllfTU9EVUxFPSguKilcIikpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB2YXIgYmF0dGVyeU1vZHVsZSA9IG1hdGNoWzFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiYXR0ZXJ5TW9kdWxlICYmIGJhdHRlcnlNb2R1bGUgPT0gXCJQaVN1Z2FyXCIpIHtcbiAgICAgICAgICByZXMgPSBjbWQoXCJweXRob24zIFwiICsgc2NyaXB0c1BhdGggKyBcIi9waXN1Z2FyX3N0YXR1cy5weVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMgPSBjbWQoXCJweXRob24zIFwiICsgc2NyaXB0c1BhdGggKyBcIi9waWp1aWNlX3N0YXR1cy5weVwiKTtcbiAgICAgICAgICAvL3JlcyA9IGNtZChcInB5dGhvbjMgL2hvbWUvdWJ1bnR1L3NjcmlwdHMvcGlqdWljZV9zdGF0dXMucHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0sIC8vICdnZXRJc09ubGluZSc6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gXHR2YXIgcmVzO1xuICAgICAgLy8gXHR2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGg7XG4gICAgICAvLyBcdC8vIE1ha2Ugc3VyZSB5b3VyIHNjcmlwdCBpcyBleGVjdXRhYmxlLCBlLmcuLCBjaG1vZCAreCBjaGVja19pbnRlcm5ldC5zaFxuICAgICAgLy8gXHRyZXMgPSBjbWQoXCJiYXNoIFwiICsgc2NyaXB0c1BhdGggKyBcIi9jaGVja19pbnRlcm5ldC5zaFwiKTsgLy8gUmVwbGFjZSAnYmFzaCcgd2l0aCAnc2gnIGlmIG5lZWRlZFxuICAgICAgLy8gXHQvLyBUaGUgc2NyaXB0IHJldHVybnMgXCJ0cnVlXCIgb3IgXCJmYWxzZVwiIGFzIGEgc3RyaW5nLCBzbyB3ZSBjb21wYXJlIHRoZSByZXN1bHQgZGlyZWN0bHlcbiAgICAgIC8vIFx0cmV0dXJuIHJlcy50cmltKCkgPT09IFwidHJ1ZVwiOyAvLyBUaGlzIGNvbnZlcnRzIHRoZSBzdHJpbmcgdG8gYSBib29sZWFuXG4gICAgICAvLyB9LFxuICAgICAgZ2V0SXNPbmxpbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHJlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXMgPSBjbWQoXCJwaW5nIC1jIDEgZ29vZ2xlLmNvbVwiKTtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgcGluZyBjb21tYW5kIHdhcyBzdWNjZXNzZnVsIGJhc2VkIG9uIHRoZSBvdXRwdXRcbiAgICAgICAgICBsZXQgaXNPbmxpbmUgPVxuICAgICAgICAgICAgcmVzLmluY2x1ZGVzKFwiMSBwYWNrZXRzIHJlY2VpdmVkXCIpIHx8IHJlcy5pbmNsdWRlcyhcIjEgcmVjZWl2ZWRcIik7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJPbmxpbmUgc3RhdHVzOlwiLCBpc09ubGluZSk7IC8vIENvcnJlY3RseSBsb2dnaW5nIHRoZSBib29sZWFuIHJlc3VsdFxuICAgICAgICAgIHJldHVybiBpc09ubGluZTsgLy8gRGlyZWN0bHkgcmV0dXJuIHRoZSBib29sZWFuIHZhbHVlXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXJyb3Igb2NjdXJzICh3aGljaCBjb3VsZCBpbmNsdWRlIGJlaW5nIHVuYWJsZSB0byBydW4gdGhlIHBpbmcgY29tbWFuZCksIGFzc3VtZSBvZmZsaW5lXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBvciBvZmZsaW5lOlwiLCBlcnJvcik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBBc3N1bWUgb2ZmbGluZSBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXRFdGgwSVA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gR2V0IElQIG9mIGJveFxuICAgICAgICB2YXIgcmVzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVzdWx0IDogXCIrXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcbiAgICAgICAgcmVzID0gY21kKFxuICAgICAgICAgIFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIsXG4gICAgICAgICk7XG4gICAgICAgIC8vcmVzID0gY21kKFwiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImlwIDogXCIrXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuICAgICAgICAvL3JlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG4gICAgICAgIC8vcmVzID0gY21kKFwiaWZjb25maWcgXCIraW50ZXJmYWNlK1wiIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0sXG4gICAgICBnZXRXd2FuMElQOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEdldCBJUCBvZiBib3hcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlc3VsdCA6IFwiK1wiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG4gICAgICAgIHJlcyA9IGNtZChcbiAgICAgICAgICBcImlwIGFkZHIgc2hvdyB3d2FuMCB8IGdyZXAgXFxcImluZXRcXFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIixcbiAgICAgICAgKTtcblxuICAgICAgICAvL3JlcyA9IGNtZChcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpcCA6IFwiK1wiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcbiAgICAgICAgLy9yZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuICAgICAgICAvL3JlcyA9IGNtZChcImlmY29uZmlnIFwiK2ludGVyZmFjZStcIiAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LFxuXG4gICAgICBnZXRCZWVrZWVPc1ZlcnNpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiQkVFS0VFX09TX1ZFUlNJT049KC4qKVwiKSk7XG4gICAgICAgIHZhciBzZXJpYWwgPSBtYXRjaFsxXTtcbiAgICAgICAgcmV0dXJuIHNlcmlhbDtcbiAgICAgIH0sXG4gICAgICBnZXRCZWVrZWVIb21lVmVyc2lvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBqc29uID0gSlNPTi5wYXJzZShBc3NldHMuZ2V0VGV4dChcInZlcnNpb24uanNvblwiKSk7XG4gICAgICAgIHJldHVybiBqc29uLnZlcnNpb247XG4gICAgICB9LFxuICAgICAgcmVzdGFydE1vYmlsZUNvbm5lY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgcmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgcmVzdGFydCBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlXCIpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAoXCJcIik7XG4gICAgICB9LFxuICAgICAgZ2V0SW50ZXJuZXRJbnRlcmZhY2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHJlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXMgPSBjbWQoXCJpcCByb3V0ZSBnZXQgMS4yLjMuNCB8IGF3ayAne3ByaW50ICQ1OyBleGl0fSdcIik7IC8vIEV4ZWN1dGUgdGhlIGNvbW1hbmRcbiAgICAgICAgICBpZiAocmVzLnRyaW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy50cmltKCk7IC8vIFJldHVybiB0aGUgY2xlYW5lZC11cCByZXN1bHQgaWYgbm90IGVtcHR5XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIlVua25vd25cIjsgLy8gUmV0dXJuIGEgZGVmYXVsdCBtZXNzYWdlIGlmIHRoZSByZXN1bHQgaXMgZW1wdHlcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gSGFuZGxlIGNhc2VzIHdoZXJlIHRoZSBjb21tYW5kIGZhaWxzIG9yIGlzIG5vdCBmb3VuZFxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBpbnRlcm5ldCBpbnRlcmZhY2U6XCIsIGVycm9yKTtcbiAgICAgICAgICByZXR1cm4gXCJFcnJvclwiOyAvLyBSZXR1cm4gYW4gZXJyb3IgbWVzc2FnZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0d2xhbnVzYjogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBSZXR1cm4gdHJ1ZSBpZiB0aGUgd2xhbnVzYiBpbnRlcmZhY2UgZXhpc3RzIG9uIHRoZSBtYWNoaW5lLiBNYWtlIHN1cmUgdG8gcmV0dXJuIGEgYm9vbGVhbiB2YWx1ZS5cbiAgICAgICAgbGV0IHJlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXMgPSBjbWQoXCJpcCBsaW5rIHNob3cgd2xhbnVzYlwiKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXRXTEFOVVNCOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCByZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gY21kKFwiaXAgbGluayBzaG93IHdsYW51c2JcIik7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0V2lmaUNsaWVudE1vZGVFbmFibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgbm1NYW5hZ2VkID0gY21kKFxuICAgICAgICAgICAgXCJubWNsaSAtdCAtZiBHRU5FUkFMLlNUQVRFIGRldmljZSBzaG93IHdsYW51c2IgMj4vZGV2L251bGwgfCBncmVwIC1xICc6MTAwIChjb25uZWN0ZWQpXFx8OjMwIChkaXNjb25uZWN0ZWQpXFx8OjUwIChjb25uZWN0aW5nKScgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIixcbiAgICAgICAgICApXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnRyaW0oKTtcbiAgICAgICAgICBjb25zdCB3bGFudXNiQXBBY3RpdmUgPSBjbWQoXG4gICAgICAgICAgICBcInN5c3RlbWN0bCBpcy1hY3RpdmUgaG9zdGFwZEB3bGFudXNiLnNlcnZpY2UgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIsXG4gICAgICAgICAgKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC50cmltKCk7XG5cbiAgICAgICAgICBpZiAobm1NYW5hZ2VkID09PSBcInRydWVcIiAmJiB3bGFudXNiQXBBY3RpdmUgIT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBkZXRlY3RpbmcgV2ktRmkgY2xpZW50IG1vZGU6XCIsIGVycm9yKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlbmFibGVXaWZpQ2xpZW50TW9kZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBjbWQoYGJhc2ggJHtzY3JpcHRzUGF0aH0vbm9ybWFsX3RvX2NsaWVudC5zaGApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW5hYmxpbmcgV2ktRmkgY2xpZW50IG1vZGU6XCIsIGVycm9yKTtcbiAgICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuICAgICAgICAgICAgXCJ3aWZpLWNsaWVudC1tb2RlLWVuYWJsZS1mYWlsZWRcIixcbiAgICAgICAgICAgIFwiRmFpbGVkIHRvIGVuYWJsZSBXaS1GaSBjbGllbnQgbW9kZS5cIixcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzYWJsZVdpZmlDbGllbnRNb2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGNtZChgYmFzaCAke3NjcmlwdHNQYXRofS9jbGllbnRfdG9fbm9ybWFsLnNoYCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBkaXNhYmxpbmcgV2ktRmkgY2xpZW50IG1vZGU6XCIsIGVycm9yKTtcbiAgICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuICAgICAgICAgICAgXCJ3aWZpLWNsaWVudC1tb2RlLWRpc2FibGUtZmFpbGVkXCIsXG4gICAgICAgICAgICBcIkZhaWxlZCB0byBkaXNhYmxlIFdpLUZpIGNsaWVudCBtb2RlLlwiLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXRXaWZpTmV0d29ya3M6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdpZmkgPSByZXF1aXJlKFwibm9kZS13aWZpXCIpO1xuICAgICAgICB3aWZpLmluaXQoe1xuICAgICAgICAgIGlmYWNlOiBcIndsYW51c2JcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyB3aWZpIHNjYW5cIik7XG4gICAgICAgICAgd2lmaS5zY2FuKChlcnJvciwgbmV0d29ya3MpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2Nhbm5pbmcgbmV0d29ya3M6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldpZmkgc2NhbiBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuXG4gICAgICAgICAgICAgIC8vIENyZWF0ZSBhIE1hcCB0byBzdG9yZSB1bmlxdWUgbmV0d29ya3NcbiAgICAgICAgICAgICAgY29uc3QgdW5pcXVlTmV0d29ya3MgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgICAgICAgbmV0d29ya3MuZm9yRWFjaCgobmV0d29yaykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzdHJlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAobmV0d29yay5xdWFsaXR5ID4gODApIHtcbiAgICAgICAgICAgICAgICAgIHN0cmVuZ3RoID0gXCJ3aWZpLTRcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ldHdvcmsucXVhbGl0eSA+IDU1KSB7XG4gICAgICAgICAgICAgICAgICBzdHJlbmd0aCA9IFwid2lmaS0zXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXR3b3JrLnF1YWxpdHkgPiAzMCkge1xuICAgICAgICAgICAgICAgICAgc3RyZW5ndGggPSBcIndpZmktMlwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzdHJlbmd0aCA9IFwid2lmaS0xXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgdW5pcXVlIGtleSB1c2luZyBTU0lEIGFuZCBmaXJzdCAxNSBjaGFycyBvZiBNQUNcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBgJHtuZXR3b3JrLnNzaWR9OiR7bmV0d29yay5tYWMuc3Vic3RyaW5nKDAsIDE1KX1gO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBrZXkgZG9lc24ndCBleGlzdCBvciB0aGUgcXVhbGl0eSBpcyBoaWdoZXIsIGFkZC91cGRhdGUgdGhlIG5ldHdvcmtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAhdW5pcXVlTmV0d29ya3MuaGFzKGtleSkgfHxcbiAgICAgICAgICAgICAgICAgIG5ldHdvcmsucXVhbGl0eSA+IHVuaXF1ZU5ldHdvcmtzLmdldChrZXkpLnF1YWxpdHlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHVuaXF1ZU5ldHdvcmtzLnNldChrZXksIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmV0d29yay5zc2lkLFxuICAgICAgICAgICAgICAgICAgICBzdHJlbmd0aDogc3RyZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5OiBuZXR3b3JrLnNlY3VyaXR5LFxuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5OiBuZXR3b3JrLnF1YWxpdHksIC8vIEtlZXAgdGhpcyBmb3IgY29tcGFyaXNvblxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAvLyBDb252ZXJ0IE1hcCB2YWx1ZXMgdG8gYXJyYXlcbiAgICAgICAgICAgICAgY29uc3QgdW5pcXVlTmV0d29ya3NBcnJheSA9IEFycmF5LmZyb20odW5pcXVlTmV0d29ya3MudmFsdWVzKCkpO1xuXG4gICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcXVhbGl0eSBwcm9wZXJ0eSBhcyBpdCdzIG5vIGxvbmdlciBuZWVkZWQgaW4gdGhlIGZpbmFsIG91dHB1dFxuICAgICAgICAgICAgICB1bmlxdWVOZXR3b3Jrc0FycmF5LmZvckVhY2goKG5ldHdvcmspID0+IGRlbGV0ZSBuZXR3b3JrLnF1YWxpdHkpO1xuXG4gICAgICAgICAgICAgIHJlc29sdmUodW5pcXVlTmV0d29ya3NBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGNvbm5lY3RUb1dpZmk6IGZ1bmN0aW9uIChzc2lkLCBwYXNzd29yZCkge1xuICAgICAgICB2YXIgd2lmaSA9IHJlcXVpcmUoXCJub2RlLXdpZmlcIik7XG4gICAgICAgIHdpZmkuaW5pdCh7XG4gICAgICAgICAgaWZhY2U6IFwid2xhbnVzYlwiLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gUmV0dXJuIGJvb2xlYW5zLCBUcnVlIGlmIHRoZSBjb25uZWN0aW9uIGlzIHN1Y2Nlc3NmdWwsIG90aGVyd2lzZSByZXR1cm4gRmFsc2VcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB3aWZpLmNvbm5lY3QoeyBzc2lkOiBzc2lkLCBwYXNzd29yZDogcGFzc3dvcmQgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gd2lmaTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIHdpZmk6XCIsIHNzaWQpO1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBkaXNjb25uZWN0V2lmaTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2lmaSA9IHJlcXVpcmUoXCJub2RlLXdpZmlcIik7XG4gICAgICAgIHdpZmkuaW5pdCh7XG4gICAgICAgICAgaWZhY2U6IFwid2xhbnVzYlwiLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB3aWZpLmRpc2Nvbm5lY3QoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRpc2Nvbm5lY3RpbmcgZnJvbSB3aWZpOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaXNjb25uZWN0ZWQgZnJvbSB3aWZpXCIpO1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBmb3JnZXRXaWZpOiBmdW5jdGlvbiAoc3NpZCkge1xuICAgICAgICB2YXIgd2lmaSA9IHJlcXVpcmUoXCJub2RlLXdpZmlcIik7XG4gICAgICAgIHdpZmkuaW5pdCh7XG4gICAgICAgICAgaWZhY2U6IFwid2xhbnVzYlwiLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gUmV0dXJuIGJvb2xlYW5zLCBUcnVlIGlmIHRoZSBjb25uZWN0aW9uIGlzIHN1Y2Nlc3NmdWwsIG90aGVyd2lzZSByZXR1cm4gRmFsc2VcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB3aWZpLmRlbGV0ZUNvbm5lY3Rpb24oeyBzc2lkOiBzc2lkIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW5nIHRvIHdpZmk6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byB3aWZpOlwiLCBzc2lkKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0Q2xpZW50U1NJRDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgc3NpZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzc2lkID0gY21kKFwiaXdnZXRpZCAtclwiKS50cmltKCk7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgc3NpZCBpcyBub3QgZW1wdHkgYW5kIGlzIGEgc3RyaW5nXG4gICAgICAgICAgaWYgKHR5cGVvZiBzc2lkID09PSBcInN0cmluZ1wiICYmIHNzaWQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBzc2lkO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gXCJOb3QgY29ubmVjdGVkXCIgaWYgc3NpZCBpcyBlbXB0eSBvciBub3QgYSBzdHJpbmdcbiAgICAgICAgICAgIHJldHVybiBcIk5vdCBjb25uZWN0ZWRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gUmV0dXJuIFwiTm90IGNvbm5lY3RlZFwiIGluIGNhc2Ugb2YgYW55IGVycm9yXG4gICAgICAgICAgcmV0dXJuIFwiTm90IGNvbm5lY3RlZFwiO1xuICAgICAgICB9XG4gICAgICB9LCAvLyAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgLy8gXHQvLyBDb21tYW5kIHRvIGxpc3QgRk9SV0FSRCBydWxlc1xuICAgICAgLy8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG4gICAgICAvLyBcdGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgLy8gXHRcdGlmIChlcnJvciB8fCBzdGRlcnIpIHtcbiAgICAgIC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvciB8fCBzdGRlcnJ9YCk7XG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yIHx8IG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcbiAgICAgIC8vIFx0XHRcdHJldHVybjtcbiAgICAgIC8vIFx0XHR9XG5cbiAgICAgIC8vIFx0XHQvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG4gICAgICAvLyBcdFx0dmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gc3Rkb3V0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSBldGgwJykgJiYgc3Rkb3V0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG4gICAgICAvLyBcdFx0Y29uc29sZS5sb2coXCJpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZDogXCIraXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQpO1xuICAgICAgLy8gXHRcdC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcbiAgICAgIC8vIFx0XHR2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSBldGgwLztcbiAgICAgIC8vIFx0XHR2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cbiAgICAgIC8vIFx0XHQvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcbiAgICAgIC8vIFx0XHRpZiAoaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgJiYgIW1hdGNoKSB7XG4gICAgICAvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAxXCIpO1xuICAgICAgLy8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGxcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykge2NvbnNvbGUubG9nKFwic3RlcDEyXCIpOyBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfSk7fVxuICAgICAgLy8gXHRcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgIC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDJcIik7XG5cbiAgICAgIC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYSBzcGVjaWZpYyBNQUMgYWRkcmVzc1xuICAgICAgLy8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH0pO1xuICAgICAgLy8gXHRcdH0gZWxzZSB7XG4gICAgICAvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAzXCIpO1xuXG4gICAgICAvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGRpc2FibGVkIG9yIG5vdCBjb25maWd1cmVkIGFzIGV4cGVjdGVkXG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH0pO1xuICAgICAgLy8gXHRcdH1cbiAgICAgIC8vIFx0fSk7XG4gICAgICAvLyB9LFxuXG4gICAgICAvLyAgICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gXHRjb25zb2xlLmxvZygnU3RhcnRpbmcgdG8gZ2V0IGludGVybmV0IHNoYXJpbmcgc3RhdHVzIGZvciBFdGhlcm5ldC4uLicpO1xuICAgICAgLy8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG4gICAgICAvLyBcdC8vIFNpbmNlIGNtZCBpcyBhbHJlYWR5IHdyYXBwZWQgYnkgTWV0ZW9yLndyYXBBc3luYyhleGVjKSxcbiAgICAgIC8vIFx0Ly8gaXQgc2hvdWxkIHJldHVybiB7IHN0ZG91dCwgc3RkZXJyIH0gZGlyZWN0bHkuXG4gICAgICAvLyBcdHRyeSB7XG4gICAgICAvLyBcdCAgdmFyIHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cbiAgICAgIC8vIFx0ICBpZiAoc3RkZXJyKSB7XG4gICAgICAvLyBcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke3N0ZGVycn1gKTtcbiAgICAgIC8vIFx0XHQvLyBJdCdzIGJldHRlciB0byByZXR1cm4gYSBtZWFuaW5nZnVsIGVycm9yIHRvIHRoZSBjbGllbnQuXG4gICAgICAvLyBcdFx0cmV0dXJuIHsgZXJyb3I6IFwiRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzXCIsIGRldGFpbHM6IHN0ZGVyciB9O1xuICAgICAgLy8gXHQgIH1cblxuICAgICAgLy8gXHQgIGNvbnNvbGUubG9nKCdBbmFseXppbmcgaXB0YWJsZXMgRk9SV0FSRCBydWxlcyBvdXRwdXQuLi4nKTtcbiAgICAgIC8vIFx0ICAvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG4gICAgICAvLyBcdCAgdmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gc3Rkb3V0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSBldGgwJykgJiYgc3Rkb3V0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG4gICAgICAvLyBcdCAgY29uc29sZS5sb2coYGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkOiAke2lzR2VuZXJhbFNoYXJpbmdFbmFibGVkfWApO1xuXG4gICAgICAvLyBcdCAgLy8gRXh0cmFjdCBNQUMgYWRkcmVzcyBydWxlc1xuICAgICAgLy8gXHQgIHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIGV0aDAvO1xuICAgICAgLy8gXHQgIHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcbiAgICAgIC8vIFx0ICBjb25zb2xlLmxvZyhgTUFDIGFkZHJlc3MgZm91bmQ6ICR7bWF0Y2ggPyBtYXRjaFsxXSA6ICdOb25lJ31gKTtcblxuICAgICAgLy8gXHQgIC8vIERldGVybWluZSB0aGUgc3RhdHVzIGJhc2VkIG9uIHRoZSBydWxlcyBmb3VuZFxuICAgICAgLy8gXHQgIGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcbiAgICAgIC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGwuJyk7XG4gICAgICAvLyBcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuICAgICAgLy8gXHQgIH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgIC8vIFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzOiAke21hdGNoWzFdfWApO1xuICAgICAgLy8gXHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH07XG4gICAgICAvLyBcdCAgfSBlbHNlIHtcbiAgICAgIC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyBpcyBkaXNhYmxlZCBvciBub3QgY29uZmlndXJlZCBhcyBleHBlY3RlZC4nKTtcbiAgICAgIC8vIFx0XHRyZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcbiAgICAgIC8vIFx0ICB9XG4gICAgICAvLyBcdH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBcdCAgY29uc29sZS5lcnJvcihgQ29tbWFuZCBleGVjdXRpb24gZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAvLyBcdCAgLy8gSXQncyBiZXR0ZXIgdG8gcmV0dXJuIGEgbWVhbmluZ2Z1bCBlcnJvciB0byB0aGUgY2xpZW50LlxuICAgICAgLy8gXHQgIHJldHVybiB7IGVycm9yOiBcIkNvbW1hbmQgZXhlY3V0aW9uIGVycm9yXCIsIGRldGFpbHM6IGVycm9yLnRvU3RyaW5nKCkgfTtcbiAgICAgIC8vIFx0fVxuICAgICAgLy8gICB9LFxuXG4gICAgICAvLyAgICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcbiAgICAgIC8vIFx0dmFyIGNvbW1hbmRSZXN1bHQgPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXG4gICAgICAvLyBcdGlmICghY29tbWFuZFJlc3VsdCkge1xuICAgICAgLy8gXHQgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuICAgICAgLy8gXHR9XG5cbiAgICAgIC8vIFx0dmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcbiAgICAgIC8vIFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2UgZXRoMC87XG4gICAgICAvLyBcdHZhciBtYXRjaCA9IGNvbW1hbmRSZXN1bHQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cbiAgICAgIC8vIFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuICAgICAgLy8gXHQgIHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcbiAgICAgIC8vIFx0fSBlbHNlIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgLy8gXHQgIHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH07XG4gICAgICAvLyBcdH0gZWxzZSB7XG4gICAgICAvLyBcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG4gICAgICAvLyBcdH1cbiAgICAgIC8vICAgfSxcblxuICAgICAgZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gXCJzdWRvIGlwdGFibGVzIC1TIEZPUldBUkRcIjtcblxuICAgICAgICB2YXIgY29tbWFuZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cbiAgICAgICAgaWYgKCFjb21tYW5kUmVzdWx0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcbiAgICAgICAgICAgIFwiY29tbWFuZC1leGVjdXRpb24tZXJyb3JcIixcbiAgICAgICAgICAgIFwiVGhlIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIixcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHRoZSBzcGVjaWZpYyBydWxlIGluZGljYXRpbmcgaW50ZXJuZXQgc2hhcmluZyBmcm9tIHdsYW4wIHRvIGV0aDBcbiAgICAgICAgdmFyIHNoYXJpbmdGcm9tV2xhblRvRXRoID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcyhcbiAgICAgICAgICBcIi1BIEZPUldBUkQgLWkgd2xhbjAgLW8gZXRoMCAtaiBBQ0NFUFRcIixcbiAgICAgICAgKTtcbiAgICAgICAgdmFyIHNoYXJpbmdUb1dsYW5Gcm9tRXRoRXN0YWJsaXNoZWQgPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKFxuICAgICAgICAgIFwiLUEgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFRcIixcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoc2hhcmluZ0Zyb21XbGFuVG9FdGggJiYgc2hhcmluZ1RvV2xhbkZyb21FdGhFc3RhYmxpc2hlZCkge1xuICAgICAgICAgIC8vIElmIGF0IGxlYXN0IG9uZSBwYWlyIG9mIHJ1bGVzIGV4aXN0cywgaW50ZXJuZXQgc2hhcmluZyBpcyBjb25zaWRlcmVkIGVuYWJsZWQuXG4gICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcImVuYWJsZWQgZm9yIGFsbFwiLCBtYWNBZGRyZXNzOiBudWxsIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcImRpc2FibGVkXCIsIG1hY0FkZHJlc3M6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgZW5hYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgaXB0YWJsZXNDb21tYW5kcyA9IFtcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFRcIixcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUXCIsXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREVcIixcbiAgICAgICAgICBcInN1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZVwiLFxuICAgICAgICBdLmpvaW4oXCIgJiYgXCIpO1xuXG4gICAgICAgIGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGRlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coXCJJbnRlcm5ldCBzaGFyaW5nIHZpYSBFdGhlcm5ldCBlbmFibGVkIHN1Y2Nlc3NmdWxseS5cIik7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCBzdGRvdXQpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAvLyBEZWZpbmUgYSBsaXN0IG9mIGNvbW1hbmRzIHRvIHJlcGVhdGVkbHkgYXR0ZW1wdCBkZWxldGlvbi5cbiAgICAgICAgdmFyIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBbXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUXCIsXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVFwiLFxuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBNQVNRVUVSQURFXCIsXG4gICAgICAgICAgXCJzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmVcIixcbiAgICAgICAgXTtcblxuICAgICAgICAvLyBGdW5jdGlvbiB0byBleGVjdXRlIGEgY29tbWFuZCBhbmQgcmVjdXJzaXZlbHkgY2FsbCBpdHNlbGYgaWYgdGhlIGNvbW1hbmQgd2FzIHN1Y2Nlc3NmdWwgKHJ1bGUgd2FzIGZvdW5kIGFuZCBkZWxldGVkKS5cbiAgICAgICAgZnVuY3Rpb24gZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICBjbWQoY29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlcnJvciwgdGhlIHJ1bGUgd2FzIGZvdW5kIGFuZCBkZWxldGVkLCBzbyB0cnkgYWdhaW4uXG4gICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYW4gZXJyb3IsIGl0IGxpa2VseSBtZWFucyBubyBtb3JlIGluc3RhbmNlcyBvZiB0aGUgcnVsZSBleGlzdCwgc28gY2FsbCB0aGUgZG9uZUNhbGxiYWNrLlxuICAgICAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4ZWN1dGUgZGVsZXRpb24gZm9yIGVhY2ggY29tbWFuZCBhbmQgdHJhY2sgY29tcGxldGlvbi5cbiAgICAgICAgdmFyIHRhc2tzQ29tcGxldGVkID0gMDtcbiAgICAgICAgaXB0YWJsZXNEZWxldGVDb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG4gICAgICAgICAgZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrc0NvbXBsZXRlZCsrO1xuICAgICAgICAgICAgLy8gT25jZSBhbGwgZGVsZXRpb24gdGFza3MgYXJlIGRvbmUsIHNhdmUgdGhlIGlwdGFibGVzIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAgICBpZiAodGFza3NDb21wbGV0ZWQgPT09IGlwdGFibGVzRGVsZXRlQ29tbWFuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNtZChcInN1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZVwiLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgZXhlYyBlcnJvciBkdXJpbmcgc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWAsXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBzYXZlZC5gKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjayhcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJBbGwgc3BlY2lmaWVkIHJ1bGVzIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuXCIsXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvLyAnZGlzYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIC8vIFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG4gICAgICAvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFQnLFxuICAgICAgLy8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG4gICAgICAvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERScsXG4gICAgICAvLyBcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcbiAgICAgIC8vIFx0XS5qb2luKCcgJiYgJyk7XG5cbiAgICAgIC8vIFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgIC8vIFx0XHRpZiAoZXJyb3IpIHtcbiAgICAgIC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgICAgIC8vIFx0XHRcdHJldHVybjtcbiAgICAgIC8vIFx0XHR9XG4gICAgICAvLyBcdFx0aWYgKHN0ZGVycikge1xuICAgICAgLy8gXHRcdFx0Y29uc29sZS5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuICAgICAgLy8gXHRcdFx0cmV0dXJuO1xuICAgICAgLy8gXHRcdH1cbiAgICAgIC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXQgZGlzYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICAgICAgLy8gXHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcbiAgICAgIC8vIFx0fSk7XG4gICAgICAvLyB9LFxuICAgICAgZW5hYmxlSW50ZXJuZXRGb3JNYWNFdGhlcm5ldDogZnVuY3Rpb24gKG1hY0FkZHJlc3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIC8vIENvbW1hbmQgdG8gYWxsb3cgaW50ZXJuZXQgZm9yIHRoZSBzcGVjaWZpZWQgTUFDIGFkZHJlc3Mgb24gZXRoMC5cbiAgICAgICAgdmFyIGFsbG93TWFjQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgZXRoMCAtbSBtYWMgLS1tYWMtc291cmNlICR7bWFjQWRkcmVzc30gLWogQUNDRVBUYDtcbiAgICAgICAgLy8gQ29tbWFuZCB0byBkcm9wIGFsbCBvdGhlciBpbnRlcm5ldCB0cmFmZmljIG9uIGV0aDAuXG4gICAgICAgIHZhciBibG9ja090aGVyc0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIGV0aDAgLWogRFJPUGA7XG5cbiAgICAgICAgLy8gQWxsb3cgaW50ZXJuZXQgZm9yIHRoZSBzcGVjaWZpZWQgTUFDIGFkZHJlc3MuXG4gICAgICAgIHJlcyA9IGNtZChhbGxvd01hY0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIGBleGVjIGVycm9yIGR1cmluZyBhbGxvd2luZyBNQUMgJHttYWNBZGRyZXNzfTogJHtlcnJvcn1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBhbGxvd2VkIGZvciBNQUMgJHttYWNBZGRyZXNzfS5gKTtcblxuICAgICAgICAgIC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldC5cbiAgICAgICAgICByZXMgPSBjbWQoYmxvY2tPdGhlcnNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDczogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGJsb2NrZWQgZm9yIG90aGVyIE1BQyBhZGRyZXNzZXMuYCk7XG4gICAgICAgICAgICAvLyBPcHRpb25hbGx5LCBzYXZlIHRoZSBpcHRhYmxlcyBzZXR0aW5ncyB0byBtYWtlIHRoZW0gcGVyc2lzdGVudC5cbiAgICAgICAgICAgIGNtZChcInN1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZVwiLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICBgZXhlYyBlcnJvciBkdXJpbmcgc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBzYXZlZC5gKTtcbiAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlQWxsTWFjRmlsdGVyc0ZvckV0aGVybmV0OiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgLy8gTGlzdCBhbGwgRk9SV0FSRCBydWxlcyB3aXRoIGxpbmUgbnVtYmVyc1xuICAgICAgICBjbWQoXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLS1saW5lLW51bWJlcnMgLW5cIixcbiAgICAgICAgICAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQcm9jZXNzIHN0ZG91dCB0byBpZGVudGlmeSBydWxlcyByZWxhdGVkIHRvIE1BQyBmaWx0ZXJpbmcgb24gZXRoMFxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzdGRvdXQuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgICBjb25zdCBydWxlTnVtYmVycyA9IGxpbmVzLnJlZHVjZSgoYWNjLCBsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAobGluZS5pbmNsdWRlcyhcImV0aDBcIikgJiYgbGluZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwibWFjXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZU51bWJlciA9IGxpbmUuc3BsaXQoL1xccysvKVswXTsgLy8gRXh0cmFjdCB0aGUgcnVsZSBudW1iZXIsIGFzc3VtaW5nIGl0J3MgdGhlIGZpcnN0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBhY2MucHVzaChydWxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgaWRlbnRpZmllZCBydWxlcyBzdGFydGluZyBmcm9tIHRoZSBoaWdoZXN0IG51bWJlciB0byBwcmV2ZW50IHNoaWZ0aW5nIG9mIGxpbmUgbnVtYmVyc1xuICAgICAgICAgICAgcnVsZU51bWJlcnNcbiAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIgLSBhKVxuICAgICAgICAgICAgICAuZm9yRWFjaCgocnVsZU51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNtZChcbiAgICAgICAgICAgICAgICAgIGBzdWRvIGlwdGFibGVzIC1EIEZPUldBUkQgJHtydWxlTnVtYmVyfWAsXG4gICAgICAgICAgICAgICAgICAocmVtb3ZlRXJyb3IsIHJlbW92ZVN0ZG91dCwgcmVtb3ZlU3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdmVFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgcmVtb3ZpbmcgcnVsZSAke3J1bGVOdW1iZXJ9OiAke3JlbW92ZUVycm9yfWAsXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBEZWNpZGUgaWYgeW91IHdhbnQgdG8gY29udGludWUgcmVtb3Zpbmcgb3RoZXIgcnVsZXMgb3Igc3RvcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSdWxlICR7cnVsZU51bWJlcn0gcmVtb3ZlZCBzdWNjZXNzZnVsbHkuYCk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBZnRlciBhdHRlbXB0aW5nIHRvIHJlbW92ZSBhbGwgaWRlbnRpZmllZCBydWxlcywgc2F2ZSB0aGUgaXB0YWJsZXMgY29uZmlndXJhdGlvblxuICAgICAgICAgICAgY21kKFxuICAgICAgICAgICAgICBcInN1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZVwiLFxuICAgICAgICAgICAgICAoc2F2ZUVycm9yLCBzYXZlU3Rkb3V0LCBzYXZlU3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNhdmVFcnJvcikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke3NhdmVFcnJvcn1gKTtcbiAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soc2F2ZUVycm9yLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpcHRhYmxlcyBydWxlcyB1cGRhdGVkIGFuZCBzYXZlZC5cIik7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiQWxsIE1BQyBmaWx0ZXIgcnVsZXMgZm9yIEV0aGVybmV0IHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuXCIsXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGdldEludGVybmV0U2hhcmluZ1N0YXR1c01vYmlsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSBcInN1ZG8gaXB0YWJsZXMgLVMgRk9SV0FSRFwiO1xuXG4gICAgICAgIHZhciBjb21tYW5kUmVzdWx0ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblxuICAgICAgICBpZiAoIWNvbW1hbmRSZXN1bHQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuICAgICAgICAgICAgXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLFxuICAgICAgICAgICAgXCJUaGUgY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGp1c3RlZCB0byBjaGVjayBmb3IgdGhlIHNwZWNpZmljIHJ1bGUgaW5kaWNhdGluZyBpbnRlcm5ldCBzaGFyaW5nIGZyb20gd2xhbjAgdG8gd3dhbjBcbiAgICAgICAgdmFyIHNoYXJpbmdGcm9tV2xhblRvV3dhbiA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoXG4gICAgICAgICAgXCItQSBGT1JXQVJEIC1pIHdsYW4wIC1vIHd3YW4wIC1qIEFDQ0VQVFwiLFxuICAgICAgICApO1xuICAgICAgICB2YXIgc2hhcmluZ1RvV2xhbkZyb21Xd2FuRXN0YWJsaXNoZWQgPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKFxuICAgICAgICAgIFwiLUEgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUXCIsXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHNoYXJpbmdGcm9tV2xhblRvV3dhbiAmJiBzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCkge1xuICAgICAgICAgIC8vIElmIGF0IGxlYXN0IG9uZSBwYWlyIG9mIHJ1bGVzIGV4aXN0cywgaW50ZXJuZXQgc2hhcmluZyB0byB0aGUgbW9iaWxlIGludGVyZmFjZSBpcyBjb25zaWRlcmVkIGVuYWJsZWQuXG4gICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcImVuYWJsZWQgZm9yIGFsbFwiLCBtYWNBZGRyZXNzOiBudWxsIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcImRpc2FibGVkXCIsIG1hY0FkZHJlc3M6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLy8gJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAvLyBcdC8vIENvbW1hbmQgdG8gbGlzdCBGT1JXQVJEIHJ1bGVzXG4gICAgICAvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLW4gLS1saW5lLW51bWJlcic7XG5cbiAgICAgIC8vIFx0Y21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAvLyBcdFx0aWYgKGVycm9yIHx8IHN0ZGVycikge1xuICAgICAgLy8gXHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke2Vycm9yIHx8IHN0ZGVycn1gKTtcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IgfHwgbmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuICAgICAgLy8gXHRcdFx0cmV0dXJuO1xuICAgICAgLy8gXHRcdH1cblxuICAgICAgLy8gXHRcdC8vIENoZWNrIGZvciBnZW5lcmFsIGludGVybmV0IHNoYXJpbmcgcnVsZXNcbiAgICAgIC8vIFx0XHR2YXIgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgPSBzdGRvdXQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIHd3YW4wJykgJiYgc3Rkb3V0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG5cbiAgICAgIC8vIFx0XHQvLyBFeHRyYWN0IE1BQyBhZGRyZXNzIHJ1bGVzXG4gICAgICAvLyBcdFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2Ugd3dhbjAvO1xuICAgICAgLy8gXHRcdHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuICAgICAgLy8gXHRcdC8vIERldGVybWluZSB0aGUgc3RhdHVzIGJhc2VkIG9uIHRoZSBydWxlcyBmb3VuZFxuICAgICAgLy8gXHRcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcbiAgICAgIC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsXG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9KTtcbiAgICAgIC8vIFx0XHR9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgICAvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGEgc3BlY2lmaWMgTUFDIGFkZHJlc3NcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9KTtcbiAgICAgIC8vIFx0XHR9IGVsc2Uge1xuICAgICAgLy8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBkaXNhYmxlZCBvciBub3QgY29uZmlndXJlZCBhcyBleHBlY3RlZFxuICAgICAgLy8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9KTtcbiAgICAgIC8vIFx0XHR9XG4gICAgICAvLyBcdH0pO1xuICAgICAgLy8gfSxcblxuICAgICAgZW5hYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVFwiLFxuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUXCIsXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFXCIsXG4gICAgICAgICAgXCJzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmVcIixcbiAgICAgICAgXS5qb2luKFwiICYmIFwiKTtcblxuICAgICAgICBjbWQoaXB0YWJsZXNDb21tYW5kcywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RkZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuZXQgc2hhcmluZyB2aWEgbW9iaWxlIGVuYWJsZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGRpc2FibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAvLyBEZWZpbmUgY29tbWFuZHMgZm9yIGRlbGV0aW9uIHdpdGhvdXQgY29tYmluaW5nIHRoZW1cbiAgICAgICAgdmFyIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBbXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVFwiLFxuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUXCIsXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFXCIsXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gcmVjdXJzaXZlbHkgZXhlY3V0ZSBhIGNvbW1hbmQgdW50aWwgaXQgZmFpbHMgKGluZGljYXRpbmcgbm8gbW9yZSBpbnN0YW5jZXMgb2YgdGhlIHJ1bGUpXG4gICAgICAgIGZ1bmN0aW9uIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgICAgICAgY21kKGNvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgIC8vIE5vIGVycm9yIG1lYW5zIHRoZSBjb21tYW5kIHN1Y2NlZWRlZCwgc28gdGhlcmUgbWlnaHQgYmUgbW9yZSBpbnN0YW5jZXNcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gRXJyb3IgbGlrZWx5IG1lYW5zIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlLCBtb3ZlIG9uXG4gICAgICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXhlY3V0ZSBkZWxldGlvbiBmb3IgZWFjaCBjb21tYW5kIGFuZCB0cmFjayB3aGVuIGFsbCBhcmUgY29tcGxldGVkXG4gICAgICAgIHZhciB0YXNrc0NvbXBsZXRlZCA9IDA7XG4gICAgICAgIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMuZm9yRWFjaCgoY29tbWFuZCkgPT4ge1xuICAgICAgICAgIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgKCkgPT4ge1xuICAgICAgICAgICAgdGFza3NDb21wbGV0ZWQrKztcbiAgICAgICAgICAgIC8vIEFmdGVyIGFsbCBjb21tYW5kcyBoYXZlIGJlZW4gYXR0ZW1wdGVkLCBzYXZlIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICBpZiAodGFza3NDb21wbGV0ZWQgPT09IGlwdGFibGVzRGVsZXRlQ29tbWFuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNtZChcbiAgICAgICAgICAgICAgICBcInN1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZVwiLFxuICAgICAgICAgICAgICAgIChlcnJvciwgc2F2ZVN0ZG91dCwgc2F2ZVN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBcImlwdGFibGVzIHJ1bGVzIGZvciBtb2JpbGUgaW50ZXJmYWNlIHVwZGF0ZWQgYW5kIHNhdmVkLlwiLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICBcIkFsbCBzcGVjaWZpZWQgcnVsZXMgZm9yIG1vYmlsZSBpbnRlcmZhY2UgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC5cIixcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIC8vICdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIC8vIFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG4gICAgICAvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcbiAgICAgIC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcbiAgICAgIC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsXG4gICAgICAvLyBcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcbiAgICAgIC8vIFx0XS5qb2luKCcgJiYgJyk7XG5cbiAgICAgIC8vIFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgIC8vIFx0XHRpZiAoZXJyb3IpIHtcbiAgICAgIC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgICAgIC8vIFx0XHRcdHJldHVybjtcbiAgICAgIC8vIFx0XHR9XG4gICAgICAvLyBcdFx0aWYgKHN0ZGVycikge1xuICAgICAgLy8gXHRcdFx0Y29uc29sZS5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuICAgICAgLy8gXHRcdFx0cmV0dXJuO1xuICAgICAgLy8gXHRcdH1cbiAgICAgIC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgbW9iaWxlIGRpc2FibGVkIHN1Y2Nlc3NmdWxseS4nKTtcbiAgICAgIC8vIFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG4gICAgICAvLyBcdH0pO1xuICAgICAgLy8gfSxcbiAgICAgIGFsbG93SW50ZXJuZXRGb3JNYWNNb2JpbGU6IGZ1bmN0aW9uIChtYWNBZGRyZXNzLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICAvLyBGaXJzdCwgZW5hYmxlIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBmcm9tIHdsYW4wIHRvIHd3YW4wXG4gICAgICAgIHJlcyA9IGNtZChcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUICYmIHN1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAmJiBzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFXCIsXG4gICAgICAgICAgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgYGV4ZWMgZXJyb3IgZHVyaW5nIGVuYWJsaW5nIGludGVybmV0IHNoYXJpbmc6ICR7ZXJyb3J9YCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5ldCBzaGFyaW5nIGVuYWJsZWQgdmlhIHd3YW4wLmApO1xuICAgICAgICAgICAgLy8gQWxsb3cgaW50ZXJuZXQgb25seSBmb3IgdGhlIHNwZWNpZmllZCBNQUMgYWRkcmVzcyBvbiB3d2FuMFxuICAgICAgICAgICAgdmFyIGFsbG93TWFjQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1JIEZPUldBUkQgMSAtaSB3d2FuMCAtbSBtYWMgLS1tYWMtc291cmNlICR7bWFjQWRkcmVzc30gLWogQUNDRVBUYDtcbiAgICAgICAgICAgIC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldCB2aWEgd3dhbjAuXG4gICAgICAgICAgICB2YXIgYmxvY2tPdGhlcnNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3d2FuMCAtaiBEUk9QYDtcblxuICAgICAgICAgICAgLy8gQWxsb3cgc3BlY2lmaWMgTUFDXG4gICAgICAgICAgICByZXMgPSBjbWQoYWxsb3dNYWNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICBgZXhlYyBlcnJvciBkdXJpbmcgYWxsb3dpbmcgTUFDICR7bWFjQWRkcmVzc30gb24gV1dBTjogJHtlcnJvcn1gLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgSW50ZXJuZXQgYWNjZXNzIGFsbG93ZWQgZm9yIE1BQyAke21hY0FkZHJlc3N9IG9uIFdXQU4uYCxcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvLyBCbG9jayBhbGwgb3RoZXIgTUFDc1xuICAgICAgICAgICAgICByZXMgPSBjbWQoYmxvY2tPdGhlcnNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDcyBvbiBXV0FOOiAke2Vycm9yfWAsXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICBgSW50ZXJuZXQgYWNjZXNzIGJsb2NrZWQgZm9yIG90aGVyIE1BQyBhZGRyZXNzZXMgb24gV1dBTi5gLFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIGlwdGFibGVzIHJ1bGVzXG4gICAgICAgICAgICAgICAgY21kKFxuICAgICAgICAgICAgICAgICAgXCJzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmVcIixcbiAgICAgICAgICAgICAgICAgIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBleGVjIGVycm9yIGR1cmluZyBzYXZpbmcgaXB0YWJsZXMgcnVsZXMgZm9yIFdXQU46ICR7ZXJyb3J9YCxcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGlwdGFibGVzIHJ1bGVzIGZvciBXV0FOIHNhdmVkLmApO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUFsbE1hY0ZpbHRlcnNGb3JNb2JpbGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAvLyBMaXN0IGFsbCBGT1JXQVJEIHJ1bGVzXG4gICAgICAgIGNtZChcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtLWxpbmUtbnVtYmVycyAtblwiLFxuICAgICAgICAgIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIHJ1bGVzOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQcm9jZXNzIHN0ZG91dCB0byBmaW5kIHJ1bGVzIHRvIGRlbGV0ZS4gVGhpcyBwYXJ0IGlzIHBzZXVkby1jb2RlIGFuZCBuZWVkcyBhZGp1c3RtZW50XG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IHN0ZG91dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOdW1iZXJzID0gW107XG4gICAgICAgICAgICBsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChsaW5lLmluY2x1ZGVzKFwid3dhbjBcIikgJiYgbGluZS5pbmNsdWRlcyhcIk1BQ1wiKSkge1xuICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgdGhlIHJ1bGUgbnVtYmVyIGZyb20gdGhlIGxpbmVcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlTnVtYmVyID0gbGluZS5zcGxpdChcIiBcIilbMF07IC8vIFRoaXMgaXMgYSBzaW1wbGlmaWNhdGlvblxuICAgICAgICAgICAgICAgIHJ1bGVOdW1iZXJzLnB1c2gocnVsZU51bWJlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgcnVsZXMgYnkgdGhlaXIgbnVtYmVycywgc3RhcnRpbmcgZnJvbSB0aGUgaGlnaGVzdCBudW1iZXJcbiAgICAgICAgICAgIHJ1bGVOdW1iZXJzXG4gICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiIC0gYSlcbiAgICAgICAgICAgICAgLmZvckVhY2goKHJ1bGVOdW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjbWQoXG4gICAgICAgICAgICAgICAgICBgc3VkbyBpcHRhYmxlcyAtRCBGT1JXQVJEICR7cnVsZU51bWJlcn1gLFxuICAgICAgICAgICAgICAgICAgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHJlbW92aW5nIHJ1bGUgJHtydWxlTnVtYmVyfTogJHtlcnJvcn1gLFxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW9uYWxseSwgc3RvcCB0aGUgcHJvY2VzcyBvciBjb250aW51ZSBhdHRlbXB0aW5nIHRvIHJlbW92ZSBvdGhlciBydWxlc1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUnVsZSAke3J1bGVOdW1iZXJ9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQWZ0ZXIgYWxsIHJ1bGVzIGhhdmUgYmVlbiBwcm9jZXNzZWQsIHNhdmUgdGhlIGlwdGFibGVzIHJ1bGVzXG4gICAgICAgICAgICBjbWQoXCJzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmVcIiwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXB0YWJsZXMgcnVsZXMgdXBkYXRlZCBhbmQgc2F2ZWQuXCIpO1xuICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgXCJBbGwgTUFDIGZpbHRlciBydWxlcyBmb3IgV1dBTiByZW1vdmVkIGFuZCBjaGFuZ2VzIHNhdmVkLlwiLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHJlYm9vdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXCJzdWRvIHJlYm9vdFwiLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgc2h1dGRvd246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgcmVzID0gY21kKFwic3VkbyBoYWx0XCIsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBzeW5jaHJvbml6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIHN5bmMuLi5cIik7XG5cbiAgICAgICAgdmFyIGRldmljZVNlcmlhbCA9IE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuc2VyaWFsO1xuICAgICAgICB2YXIgZGV2aWNlVG9rZW4gPSBNZXRlb3Iuc2V0dGluZ3MubW9vZGxlQVBJVG9rZW47XG4gICAgICAgIHZhciB1cmwgPSBNZXRlb3Iuc2V0dGluZ3MuY2xvdWRVUkwgKyBcIi9hcGkvc3RhcnRTeW5jXCI7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGV2aWNlU2VyaWFsOiBkZXZpY2VTZXJpYWwsXG4gICAgICAgICAgICBkZXZpY2VUb2tlbjogZGV2aWNlVG9rZW4sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBucG1SZXF1ZXN0T3B0aW9uczoge1xuICAgICAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSwgLy8gVE9ETyByZW1vdmUgd2hlbiBkZXBsb3lcbiAgICAgICAgICAgIHRpbWVvdXQ6IDEyMDAwMDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aW1lb3V0OiAxMjAwMDAwLFxuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vdmFyIHJlc3VsdCA9IEhUVFAuY2FsbCgnUE9TVCcsIHVybCwgb3B0aW9ucyk7XG5cbiAgICAgICAgICB2YXIgcmVzdWx0ID0gSFRUUC5wb3N0KHVybCwgb3B0aW9ucyk7XG4gICAgICAgICAgdmFyIHJlc3VsdENvbnRlbnQgPSByZXN1bHQuY29udGVudDtcbiAgICAgICAgICAvL1N5bmNocm9uaXphdGlvbnMuaW5zZXJ0KHtkYXRlOkRhdGUubm93KCl9KTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0Q29udGVudDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi5cIiwgZSk7XG4gICAgICAgICAgcmV0dXJuIFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi4gXCIgKyBlO1xuICAgICAgICB9XG4gICAgICAgIC8vcmV0dXJuIHJlc3VsdENvbnRlbnQ7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59KTtcbiIsIi8vIE1ldGVvci5wdWJsaXNoKCdhbGxBcHBzJywgZnVuY3Rpb24oKSB7XG4vLyBcdHJldHVybiBBcHBzLmZpbmQoe30pO1xuLy8gfSk7XG5cbi8vIE1ldGVvci5wdWJsaXNoKFwidXNlcnNcIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKHt9LCB7ZmllbGRzOntjcmVhdGVkQXQ6IHRydWUsIHByb2ZpbGU6IHRydWUsIGVtYWlsczogdHJ1ZSwgdXNlcm5hbWU6IHRydWV9fSk7XG4vLyB9KTtcblxuXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICB9KTsiLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcblxuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9hcHBzLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvc3luY2hyb25pemF0aW9ucy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL3VzZXJzLmpzJztcblxuaW1wb3J0ICcuLi9zZXJ2ZXIvZml4dHVyZXMuanMnO1xuaW1wb3J0ICcuLi9zZXJ2ZXIvbWV0aG9kcy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci9wdWJsaWNhdGlvbnMuanMnO1xuaW1wb3J0ICcuLi9saWIvYXBwX2xvYWRlci5qcyc7XG5cblxuLy9pbXBvcnQge0REUH0gZnJvbSAnbWV0ZW9yL2RkcCc7XG4vL2ltcG9ydCB7QWNjb3VudHN9IGZyb20gJ21ldGVvci9hY2NvdW50cy1iYXNlJztcblxuXG4vLyBpbXBvcnQgJy4uL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXIvZml4dHVyZXMuanMnO1xuXG4vLyBpbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2ZpeHR1cmVzLmpzJztcblxuXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG5cdGNvbnNvbGUubG9nKFwibWV0ZW9yIHN0YXJ0ZWQuLi5cIik7XG5cblxuXG4gIC8vIGNvZGUgdG8gcnVuIG9uIHNlcnZlciBhdCBzdGFydHVwXG5cbiAvLyAgU2VydmVyMiA9IEREUC5jb25uZWN0KFwiaHR0cDovL2JlZWtlZS5ib3g6ODNcIik7XG5cdC8vIEFjY291bnRzLmNvbm5lY3Rpb24gPSBTZXJ2ZXIyO1xuXHQvLyBjb25zb2xlLmxvZyhcIm9uIGNvbm5lY3RlLi4uXCIpO1xufSk7XG4iXX0=
