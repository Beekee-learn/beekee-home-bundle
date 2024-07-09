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
      'getWifiBand': function () {
        var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
        var match = data.match(new RegExp('band=(.*)'));

        if (match && match[1]) {
          return match[1];
        } else {
          // Return default value if the band setting does not exist
          return '2.4GHz';
        }
      },
      'setWifiBand': function (newBand) {
        var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
        var bandRegex = new RegExp('band=(.*)');
        var channelRegex = new RegExp('channel=(.*)');
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

        fs.writeFileSync(wifiSettingsPath, newData, 'utf-8');
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
        var signalStrength; // This extracts just the numeric part of the signal strength.

        signalStrength = cmd("sudo qmicli --device=/dev/cdc-wdm0 --nas-get-signal-strength | grep 'Network' | awk '{print $3}' | grep -oE '[-0-9]+'"); // Convert signal strength to a qualitative value

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
        } // Execute SIM card status check command


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
        var data = fs.readFileSync(configPath, 'utf-8');
        var match = data.match(new RegExp('BATTERY_MODULE=(.*)'));

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
      'getIsOnline': function () {
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
        } // Check for the specific rule indicating internet sharing from wlan0 to eth0


        var sharingFromWlanToEth = commandResult.includes('-A FORWARD -i wlan0 -o eth0 -j ACCEPT');
        var sharingToWlanFromEthEstablished = commandResult.includes('-A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT');

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
        var iptablesCommands = ['sudo iptables --append FORWARD --in-interface wlan0 --out-interface eth0 -j ACCEPT', 'sudo iptables --append FORWARD --in-interface eth0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --table nat --append POSTROUTING --out-interface eth0 -j MASQUERADE', 'sudo netfilter-persistent save'].join(' && ');
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
        var iptablesDeleteCommands = ['sudo iptables --delete FORWARD --in-interface wlan0 --out-interface eth0 -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface eth0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --table nat --delete POSTROUTING --out-interface eth0 -j MASQUERADE', 'sudo netfilter-persistent save']; // Function to execute a command and recursively call itself if the command was successful (rule was found and deleted).

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
        } // Adjusted to check for the specific rule indicating internet sharing from wlan0 to wwan0


        var sharingFromWlanToWwan = commandResult.includes('-A FORWARD -i wlan0 -o wwan0 -j ACCEPT');
        var sharingToWlanFromWwanEstablished = commandResult.includes('-A FORWARD -i wwan0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT');

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
        var iptablesCommands = ['sudo iptables --append FORWARD --in-interface wlan0 --out-interface wwan0 -j ACCEPT', 'sudo iptables --append FORWARD --in-interface wwan0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --table nat --append POSTROUTING --out-interface wwan0 -j MASQUERADE', 'sudo netfilter-persistent save'].join(' && ');
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
        var iptablesDeleteCommands = ['sudo iptables --delete FORWARD --in-interface wlan0 --out-interface wwan0 -j ACCEPT', 'sudo iptables --delete FORWARD --in-interface wwan0 --out-interface wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT', 'sudo iptables --table nat --delete POSTROUTING --out-interface wwan0 -j MASQUERADE']; // Function to recursively execute a command until it fails (indicating no more instances of the rule)

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiYWRkQ2xhc3MiLCJmYWRlT3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnQiLCJBcHBzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJhbGxvdyIsImluc2VydCIsInVwZGF0ZSIsInVzZXJJZCIsInNwYWNlIiwicHVibGlzaCIsImFwcHNQdWJsaWNhdGlvbiIsImZpbmQiLCJTeW5jaHJvbml6YXRpb25zIiwic3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uIiwiaXNBZG1pbiIsImNvbnNvbGUiLCJsb2ciLCJSb2xlcyIsInVzZXJJc0luUm9sZSIsInVzZXIiLCJyb2xlQXNzaWdubWVudCIsInJlYWR5IiwiY3JlYXRlUm9sZSIsInVubGVzc0V4aXN0cyIsInVzZXJzIiwiY291bnQiLCJhZG1pblBhc3N3b3JkIiwic2V0dGluZ3MiLCJ1c2VybmFtZSIsInJvbGVzIiwiXyIsImVhY2giLCJpZCIsIkFjY291bnRzIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJwcm9maWxlIiwibmFtZSIsImxlbmd0aCIsImFkZFVzZXJzVG9Sb2xlcyIsImRlZmF1bHRBcHBzIiwiY3VzdG9tQXBwIiwib25seVRlYWNoZXIiLCJvcmRlciIsImRvY191c2VyIiwiZG9jX2FkbWluIiwibGFzdF92ZXJzaW9uIiwidXJsIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiaW5zdGFsbGVkIiwidmVyc2lvbiIsImhpZGRlbiIsIkhUVFAiLCJmcyIsIk5wbSIsInJlcXVpcmUiLCJleGVjIiwiY21kIiwid3JhcEFzeW5jIiwid2lmaVNldHRpbmdzUGF0aCIsImNvbmZpZ1BhdGgiLCJyZWFkbGluZSIsIm1ldGhvZHMiLCJhZG1pbklkIiwibmV3UGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIl9pZCIsIiRzZXQiLCJlcnJvciIsInJlc3VsdCIsIm1lc3NhZ2UiLCJyZW1vdmVVc2Vyc0Zyb21Sb2xlcyIsImNvbW1hbmQiLCJyZXMiLCJzdG9yYWdlVXNhZ2UiLCJ0b0ZpeGVkIiwic3RvcmFnZVRvdGFsIiwicGVyY2VudGFnZSIsImRhdGEiLCJyZWFkRmlsZVN5bmMiLCJtYXRjaCIsIlJlZ0V4cCIsIlNTSUQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwibmV3U1NJRCIsImVuY29kZWROZXdTU0lEIiwiQnVmZmVyIiwidG9TdHJpbmciLCJuZXdEYXRhIiwid3JpdGVGaWxlU3luYyIsImNoYW5uZWwiLCJuZXdDaGFubmVsIiwibmV3QmFuZCIsImJhbmRSZWdleCIsImNoYW5uZWxSZWdleCIsIm1hdGNoQmFuZCIsIm1hdGNoQ2hhbm5lbCIsInRyaW0iLCJjdXJyZW50Q2hhbm5lbCIsInBhcnNlSW50Iiwic2VyaWFsIiwib3BlcmF0b3JOYW1lIiwic2lnbmFsU3RyZW5ndGgiLCJzdHJlbmd0aFZhbHVlIiwicXVhbGl0eSIsIkFQTiIsIkFQTlVzZXIiLCJBUE5QYXNzd29yZCIsInNpbVN0YXR1c1Jlc3VsdCIsImV4ZWN1dGVDb21tYW5kIiwic2ltU3RhdHVzIiwiaW5jbHVkZXMiLCJTaW1QaW4iLCJQSU4iLCJpc1NoYXJpbmciLCJyZXMyIiwic2NyaXB0c1BhdGgiLCJiYXR0ZXJ5TW9kdWxlIiwiaXNPbmxpbmUiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwibGlzdEZvcndhcmRSdWxlc0NvbW1hbmQiLCJjb21tYW5kUmVzdWx0IiwiRXJyb3IiLCJzaGFyaW5nRnJvbVdsYW5Ub0V0aCIsInNoYXJpbmdUb1dsYW5Gcm9tRXRoRXN0YWJsaXNoZWQiLCJzdGF0dXMiLCJtYWNBZGRyZXNzIiwiY2FsbGJhY2siLCJpcHRhYmxlc0NvbW1hbmRzIiwiam9pbiIsInN0ZG91dCIsInN0ZGVyciIsImlwdGFibGVzRGVsZXRlQ29tbWFuZHMiLCJleGVjdXRlQW5kUmVwZWF0IiwiZG9uZUNhbGxiYWNrIiwidGFza3NDb21wbGV0ZWQiLCJmb3JFYWNoIiwiYWxsb3dNYWNDb21tYW5kIiwiYmxvY2tPdGhlcnNDb21tYW5kIiwibGluZXMiLCJzcGxpdCIsInJ1bGVOdW1iZXJzIiwicmVkdWNlIiwiYWNjIiwibGluZSIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJydWxlTnVtYmVyIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInJlbW92ZUVycm9yIiwicmVtb3ZlU3Rkb3V0IiwicmVtb3ZlU3RkZXJyIiwic2F2ZUVycm9yIiwic2F2ZVN0ZG91dCIsInNhdmVTdGRlcnIiLCJzaGFyaW5nRnJvbVdsYW5Ub1d3YW4iLCJzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCIsImRldmljZVNlcmlhbCIsInB1YmxpYyIsImRldmljZVRva2VuIiwibW9vZGxlQVBJVG9rZW4iLCJjbG91ZFVSTCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwibnBtUmVxdWVzdE9wdGlvbnMiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJ0aW1lb3V0IiwicG9zdCIsInJlc3VsdENvbnRlbnQiLCJjb250ZW50IiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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b0NBQVo7QUFBa0RKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHlCQUFaO0FBQXVDSixNQUFNLENBQUNJLElBQVAsQ0FBWSx1QkFBWjtBQUFxQ0osTUFBTSxDQUFDSSxJQUFQLENBQVksc0JBQVo7QUFBb0NKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLDJCQUFaO0FBQXlDSixNQUFNLENBQUNJLElBQVAsQ0FBWSxzQkFBWjtBQVlqVDtBQUNBO0FBR0E7QUFFQTtBQUdBbkIsTUFBTSxDQUFDUSxPQUFQLENBQWUsTUFBTTtBQUNwQnlCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBRG9CLENBS25CO0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FWRCxFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cdEluamVjdC5yYXdIZWFkKFwibWV0YUxvYWRlclwiLCAnPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPTAsIHdpZHRoPWRldmljZS13aWR0aCwgaGVpZ2h0PWRldmljZS1oZWlnaHRcIi8+PG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCI+XHQ8bWV0YSBuYW1lPVwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj4nKTtcblxuXHRJbmplY3QucmF3Qm9keShcImh0bWxMb2FkZXJcIiwgQXNzZXRzLmdldFRleHQoJ2FwcF9sb2FkZXIuaHRtbCcpKTtcbn1cblxuaWYgKE1ldGVvci5pc0NsaWVudCkge1xuXHRNZXRlb3Iuc3RhcnR1cChmdW5jdGlvbigpIHtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdCQoJy5pbmRleC0taWNvbicpLmFkZENsYXNzKCdhbmltYXRlZC1pY29uJyk7XG5cblx0XHRcdCQoXCIjaW5qZWN0LWxvYWRlci13cmFwcGVyXCIpLmZhZGVPdXQoNTAwLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0JCgnLmluZGV4LS1pY29uJykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkLWljb24nKTtcblx0XHR9KTtcblx0XHR9LCA1MDApO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgQXBwcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdob21lLWFwcHMnKTtcblxuXG5cbkFwcHMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0dXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblx0cmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsQXBwcycsIGZ1bmN0aW9uIGFwcHNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gQXBwcy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBTeW5jaHJvbml6YXRpb25zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtc3luY2hyb25pemF0aW9ucycpO1xuXG5cblxuU3luY2hyb25pemF0aW9ucy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHJlbW92ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsU3luY2hyb25pemF0aW9ucycsIGZ1bmN0aW9uIHN5bmNocm9uaXphdGlvbnNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gU3luY2hyb25pemF0aW9ucy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuLy8gdmFyIHVzZXJzREJcdD0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vIHZhciBjb2xsZWN0aW9uXHQ9IHVzZXJzREIub3BlbigndXNlcnMnKTtcblxuXG4vL2NvbnN0IGRhdGFiYXNlID0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vY29uc3QgY29sbGVjdGlvbiA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy9leHBvcnQgY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vIFNoYXJpbmcgdGhlIHNhbWUgQWNjb3VudCBjb2xsZWN0aW9uIHRoYW4gYmVla2VlLWxpdmVcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHQvLyBjaGVjayB0aGF0IHRoZSB1c2VySWQgc3BlY2lmaWVkIGlzIGFkbWluXG5pc0FkbWluID0gZnVuY3Rpb24odXNlcklkKSB7XG5cdGNvbnNvbGUubG9nKFwiaXNhZG1pblwiKTtcbiAgcmV0dXJuIFJvbGVzLnVzZXJJc0luUm9sZShNZXRlb3IudXNlcigpLCAnYWRtaW4nKTtcbn1cblxuXG4vLyBQdWJsaXNoIFJvbGVzIHRvIGNsaWVudFxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoeyAndXNlci5faWQnOiB0aGlzLnVzZXJJZCB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJlYWR5KClcbiAgfVxufSk7XG5cbk1ldGVvci5wdWJsaXNoKG51bGwsIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCgpO1xuXG59KTtcblxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG5cbi8vIFNlcnZlcjIgPSBERFAuY29ubmVjdChcImh0dHA6Ly9iZWVrZWUuYm94OjgzXCIpO1xuLy8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFNlcnZlcjI7XG5cblxuLy92YXIgZGF0YWJhc2UgPSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy9NZXRlb3IudXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vZXhwb3J0IGNvbnN0IFVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2FwcHMnKTtcblxuXG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG59IiwiaW1wb3J0IHsgQXBwcyB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuXG5cdC8vIENyZWF0ZSB0aGUgcm9sZXNcblx0Um9sZXMuY3JlYXRlUm9sZSgnbWFuYWdlcicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblxuXG4vLyAjIyMgIENyZWF0ZSBhZG1pbiB1c2VyIGF0IGZpcnN0IHN0YXJ0ICAjIyNcblxuXG5pZiAoTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG5cdFxuXHQvLyBDcmVhdGUgdGhlIHJvbGVcblx0Um9sZXMuY3JlYXRlUm9sZSgnbWFuYWdlcicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblx0Um9sZXMuY3JlYXRlUm9sZSgnYWRtaW4nLCB7dW5sZXNzRXhpc3RzOiB0cnVlfSk7XG5cblx0dmFyIGFkbWluUGFzc3dvcmQgPSBNZXRlb3Iuc2V0dGluZ3MuYWRtaW5QYXNzd29yZDtcblxuXHR2YXIgdXNlcnMgPSBbXG5cdFx0e3VzZXJuYW1lOlwiYWRtaW5cIixyb2xlczpbJ2FkbWluJ119LFxuXHRdO1xuXG5cdF8uZWFjaCh1c2VycywgZnVuY3Rpb24gKHVzZXIpIHtcblx0XHR2YXIgaWQ7XG5cdFx0aWQgPSBBY2NvdW50cy5jcmVhdGVVc2VyKHtcblx0XHRcdHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuXHRcdFx0ZW1haWw6IFwiQWRtaW5cIixcblx0XHRcdHBhc3N3b3JkOiBhZG1pblBhc3N3b3JkLFxuXHRcdFx0cHJvZmlsZTp7bmFtZTpcIkFkbWluXCJ9XG5cdFx0fSk7XG5cblx0XHRpZiAodXNlci5yb2xlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRSb2xlcy5hZGRVc2Vyc1RvUm9sZXMoaWQsIHVzZXIucm9sZXMpO1xuXHRcdH1cblx0fSk7XG59XG5cblxuaWYgKEFwcHMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblxuXHR2YXIgZGVmYXVsdEFwcHMgPSBbXG5cdFx0e25hbWU6XCJMaXZlXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjMsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly9saXZlLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1saXZlLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBMaXZlIHByb21vdGUgcmVhbC10aW1lIGludGVyYWN0aW9uIGJ5IGFsbG93aW5nIGxlYXJuZXJzIHRvIGV4cHJlc3MgdGhlbXNlbHZlcyBhc2tpbmcgcXVlc3Rpb25zLCBwb3N0aW5nIHBob3RvcyBvciBzaGFyaW5nIGZpbGVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlJlc291cmNlc1wiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo3LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vcmVzb3VyY2VzLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1yZXNvdXJjZXMucG5nXCIsIGRlc2NyaXB0aW9uOlwiV2l0aCBCZWVrZWUgUmVzb3VyY2VzLCB5b3UgY2FuIGVhc2lseSBzaGFyZSBmaWxlcyB3aXRoIHlvdXIgbGVhcm5lcnMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiV2hlZWxcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjp0cnVlLCBvcmRlcjo5LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIwLjdcIiwgdXJsOlwiaHR0cDovL3doZWVsLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS13aGVlbC5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgV2hlZWwgaXMgYSBzaW1wbGUgcmFuZG9tIHBpY2tlciB3aGVlbCB0aGF0IGFsbG93IHlvdSB0byBwaWNrIHVwIGEgcmFuZG9tIG5hbWUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiVGltZXJcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6OCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL3RpbWVyLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS10aW1lci5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgVGltZXIgaXMgYSBzaW1wbGUgdGltZXIgdGhhdCBsZXRzIHlvdXIgbGVhcm5lcnMga25vdyBob3cgbXVjaCB0aW1lIHRoZXkgaGF2ZSBsZWZ0LlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIk1vb2RsZVwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjEsIGRvY191c2VyOlwibW9vZGxlX3RlYWNoZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL21vb2RsZS5iZWVrZWUuYm94XCIsIGljb246XCJtb29kbGUucG5nXCIsIGRlc2NyaXB0aW9uOlwiTW9vZGxlIGlzIGEgZnJlZSwgb25saW5lIExlYXJuaW5nIE1hbmFnZW1lbnQgc3lzdGVtIGVuYWJsaW5nIGVkdWNhdG9ycyB0byBjcmVhdGUgdGhlaXIgb3duIHByaXZhdGUgd2Vic2l0ZSBmaWxsZWQgd2l0aCBkeW5hbWljIGNvdXJzZXMgdGhhdCBleHRlbmQgbGVhcm5pbmcsIGFueSB0aW1lLCBhbnl3aGVyZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMy4xMS4yXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJLb2xpYnJpXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MiwgZG9jX3VzZXI6XCJrb2xpYnJpX3VzZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2tvbGlicmkuYmVla2VlLmJveFwiLCBpY29uOlwia29saWJyaS5wbmdcIiwgZGVzY3JpcHRpb246XCJLb2xpYnJpIGlzIGFuIG9wZW4tc291cmNlIGVkdWNhdGlvbmFsIHBsYXRmb3JtIHNwZWNpYWxseSBkZXNpZ25lZCB0byBwcm92aWRlIG9mZmxpbmUgYWNjZXNzIHRvIGEgd2lkZSByYW5nZSBvZiBxdWFsaXR5LCBvcGVubHkgbGljZW5zZWQgZWR1Y2F0aW9uYWwgcmVzb3VyY2VzIGluIGxvdy1yZXNvdXJjZSBjb250ZXh0cyBsaWtlIHJ1cmFsIHNjaG9vbHMsIHJlZnVnZWUgY2FtcHMsIG9ycGhhbmFnZXMsIGFuZCBhbHNvIGluIG5vbi1mb3JtYWwgc2Nob29sIHByb2dyYW1zLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjE0LjdcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHQvLyB7bmFtZTpcIkV0aGVycGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2V0aGVycGFkLmJlZWtlZS5ib3hcIiwgaWNvbjpcImV0aGVycGFkLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkV0aGVycGFkIGFsbG93cyB5b3UgdG8gZWRpdCBkb2N1bWVudHMgY29sbGFib3JhdGl2ZWx5IGluIHJlYWwtdGltZSwgbXVjaCBsaWtlIGEgbGl2ZSBtdWx0aS1wbGF5ZXIgZWRpdG9yIHRoYXQgcnVucyBpbiB5b3VyIGJyb3dzZXIuIFdyaXRlIGFydGljbGVzLCBwcmVzcyByZWxlYXNlcywgdG8tZG8gbGlzdHMsIGV0Yy4gdG9nZXRoZXIgd2l0aCB5b3VyIGZyaWVuZHMsIGZlbGxvdyBzdHVkZW50cyBvciBjb2xsZWFndWVzLCBhbGwgd29ya2luZyBvbiB0aGUgc2FtZSBkb2N1bWVudCBhdCB0aGUgc2FtZSB0aW1lLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjguMTRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlN0b3JtXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3N0b3JtLmJlZWtlZS5ib3hcIiwgaWNvbjpcInN0b3JtLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhbmQgYW5pbWF0ZSBsaXZlIHN1cnZleXMsIGJyYWluc3Rvcm1zIGFuZCBxdWl6emVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjQuNVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiUGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3BhZC5iZWVrZWUuYm94XCIsIGljb246XCJwYWQucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGNvbGxhYm9yYXRpdmUgd2FsbHMgdG8gc2hhcmUgYW5kIG9yZ2FuaXplIGNvbnRlbnQuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJCdXp6ZXJcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOnRydWUsIG9yZGVyOjYsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9idXp6ZXIuYmVla2VlLmJveFwiLCBpY29uOlwiYnV6emVyLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhIHZpcnR1YWwgZ2FtaW5nIHJvb20gYXJvdW5kIGEgY29ubmVjdGVkIGJ1enplci5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4yLjRcIiwgaGlkZGVuOmZhbHNlfSxcblxuXHRdO1xuXG5cdF8uZWFjaChkZWZhdWx0QXBwcywgZnVuY3Rpb24gKGRlZmF1bHRBcHBzKSB7XG5cdFx0QXBwcy5pbnNlcnQoZGVmYXVsdEFwcHMpO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBIVFRQIH0gZnJvbSAnbWV0ZW9yL2h0dHAnXG5cbk1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuXG5cdGlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHR2YXIgZnMgPSBOcG0ucmVxdWlyZSgnZnMnKTtcblx0ZXhlYyA9IE5wbS5yZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuZXhlYztcblx0Y21kID0gTWV0ZW9yLndyYXBBc3luYyhleGVjKTtcblxuXHR2YXIgd2lmaVNldHRpbmdzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy53aWZpU2V0dGluZ3NQYXRoO1xuXHR2YXIgY29uZmlnUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5jb25maWdQYXRoO1xuXHRjb25zdCByZWFkbGluZSA9IHJlcXVpcmUoJ3JlYWRsaW5lJyk7XG5cblxuXHRNZXRlb3IubWV0aG9kcyh7XG5cblx0XHQnYWRtaW5TZXROZXdQYXNzd29yZCc6IGZ1bmN0aW9uKGFkbWluSWQsIHVzZXJJZCwgbmV3UGFzc3dvcmQpIHsgLy8gQWRtaW4gY2FuIGZvcmNpYmx5IGNoYW5nZSB0aGUgcGFzc3dvcmQgZm9yIGEgdXNlclxuXHRcdFx0aWYgKFJvbGVzLnVzZXJJc0luUm9sZShhZG1pbklkLCAnYWRtaW4nKSkge1xuXHRcdFx0XHRBY2NvdW50cy5zZXRQYXNzd29yZCh1c2VySWQsIG5ld1Bhc3N3b3JkKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdjcmVhdGVBY2NvdW50JzogZnVuY3Rpb24oZW1haWwsIHBhc3N3b3JkLCBwcm9maWxlKSB7XG5cdFx0XHRyZXR1cm4gQWNjb3VudHMuY3JlYXRlVXNlcih7ZW1haWw6ZW1haWwscGFzc3dvcmQ6cGFzc3dvcmQscHJvZmlsZTpwcm9maWxlfSk7IC8vIENhbGxiYWNrIGlzIG5vdCBzdXBwb3J0ZWQgb24gc2VydmVyLXNpZGVcblx0XHR9LFxuXHRcdCdlZGl0QWNjb3VudCc6IGZ1bmN0aW9uKHVzZXJJZCwgZW1haWwsIHBhc3N3b3JkLCBwcm9maWxlKSB7XG5cdFx0XHRNZXRlb3IudXNlcnMudXBkYXRlKHtfaWQ6IHVzZXJJZH0sIHtcblx0ICBcdFx0XHQkc2V0OiB7XG5cdCAgICBcdFx0XHQnZW1haWxzLjAuYWRkcmVzcyc6IGVtYWlsLFxuXHQgICAgXHRcdFx0cHJvZmlsZTogcHJvZmlsZVxuXHQgIFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0aWYgKHBhc3N3b3JkKSB7XG5cdFx0XHRcdEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgcGFzc3dvcmQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2RlbGV0ZVVzZXInOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdE1ldGVvci51c2Vycy5yZW1vdmUodXNlcklkLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHdoZW4gZGVsZXRpbmcgdXNlciA6IFwiK2Vycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdhZGRNYW5hZ2VyUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJZCwgJ21hbmFnZXInKTtcblx0XHR9LFxuXHRcdCdyZW1vdmVNYW5hZ2VyUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMucmVtb3ZlVXNlcnNGcm9tUm9sZXModXNlcklkLCAnbWFuYWdlcicpO1xuXHRcdH0sXG5cdFx0J2FkZEFkbWluUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJZCwgJ2FkbWluJyk7XG5cdFx0fSxcblx0XHQncmVtb3ZlQWRtaW5Sb2xlJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRSb2xlcy5yZW1vdmVVc2Vyc0Zyb21Sb2xlcyh1c2VySWQsICdhZG1pbicpO1xuXHRcdH0sXG5cblx0XHQvLyAnZ2V0VXNlZFNwYWNlJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0cmVzID0gY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIikgKyBcIi8gXCIgKyBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKSArIFwiIChcIitjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKStcInVzZWQpXCI7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzO1xuXHRcdC8vIH0sXG5cdFx0J3J1bkNvbW1hbmQnOiBmdW5jdGlvbihwYXNzd29yZCwgY29tbWFuZCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcImVjaG8gXCIrcGFzc3dvcmQrXCIgfCBzdWRvIC1TIFwiK2NvbW1hbmQpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRVc2VkU3BhY2UnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXMgPSB7fTtcblx0XHRcdC8vcmVzID0gY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIikgKyBcIi8gXCIgKyBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKSArIFwiIChcIitjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKStcInVzZWQpXCI7XG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIilcblx0XHRcdHJlcy5zdG9yYWdlVXNhZ2UgPSByZXMuc3RvcmFnZVVzYWdlLzEwMDAwMDA7XG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gcmVzLnN0b3JhZ2VVc2FnZS50b0ZpeGVkKDIpO1xuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpXG5cdFx0XHRyZXMuc3RvcmFnZVRvdGFsID0gcmVzLnN0b3JhZ2VUb3RhbC8xMDAwMDAwO1xuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IHJlcy5zdG9yYWdlVG90YWwudG9GaXhlZCgyKTtcblx0XHRcdHJlcy5wZXJjZW50YWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFNTSUQnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnc3NpZD0oLiopJykpO1xuICBcdFx0XHR2YXIgU1NJRCA9IG1hdGNoWzFdO1xuICBcdFx0XHRTU0lEID0gZGVjb2RlVVJJQ29tcG9uZW50KFNTSUQucmVwbGFjZSgvLi4vZywgJyUkJicpKVxuICBcdFx0XHRyZXR1cm4gU1NJRDtcblx0XHR9LFxuXHRcdCdzZXRTU0lEJzogZnVuY3Rpb24obmV3U1NJRCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdGNvbnN0IGVuY29kZWROZXdTU0lEID0gbmV3IEJ1ZmZlcihuZXdTU0lEKS50b1N0cmluZygnaGV4Jyk7IC8vIENvbnZlcnQgaW50byBIZXhcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdzc2lkPSguKiknKSlbMV0sIGVuY29kZWROZXdTU0lEKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0V2lmaVBhc3N3b3JkJzogZnVuY3Rpb24oKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3Bhc3N3b3JkPSguKiknKSk7XG4gIFx0XHRcdHZhciBwYXNzd29yZCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gcGFzc3dvcmQ7XG5cdFx0fSxcblx0XHQnc2V0V2lmaVBhc3N3b3JkJzogZnVuY3Rpb24obmV3UGFzc3dvcmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3Bhc3N3b3JkPSguKiknKSlbMV0sIG5ld1Bhc3N3b3JkKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0V2lmaUNoYW5uZWwnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJykpO1xuICBcdFx0XHR2YXIgY2hhbm5lbCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gY2hhbm5lbDtcblx0XHR9LFxuXHRcdCdzZXRXaWZpQ2hhbm5lbCc6IGZ1bmN0aW9uKG5ld0NoYW5uZWwpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpKVsxXSwgbmV3Q2hhbm5lbCk7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFdpZmlCYW5kJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcblx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnYmFuZD0oLiopJykpO1xuXG5cdFx0XHRpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHRcdCAgcmV0dXJuIG1hdGNoWzFdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdCAgLy8gUmV0dXJuIGRlZmF1bHQgdmFsdWUgaWYgdGhlIGJhbmQgc2V0dGluZyBkb2VzIG5vdCBleGlzdFxuXHRcdFx0ICByZXR1cm4gJzIuNEdIeic7XG5cdFx0XHR9XG5cdFx0ICB9LFxuXHRcdCdzZXRXaWZpQmFuZCc6IGZ1bmN0aW9uKG5ld0JhbmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuXHRcdFx0dmFyIGJhbmRSZWdleCA9IG5ldyBSZWdFeHAoJ2JhbmQ9KC4qKScpO1xuXHRcdFx0dmFyIGNoYW5uZWxSZWdleCA9IG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpO1xuXHRcdFx0dmFyIG1hdGNoQmFuZCA9IGRhdGEubWF0Y2goYmFuZFJlZ2V4KTtcblx0XHRcdHZhciBtYXRjaENoYW5uZWwgPSBkYXRhLm1hdGNoKGNoYW5uZWxSZWdleCk7XG5cblx0XHRcdHZhciBuZXdEYXRhID0gZGF0YTtcblxuXHRcdFx0aWYgKG1hdGNoQmFuZCkge1xuXHRcdFx0XHQvLyBSZXBsYWNlIHRoZSBleGlzdGluZyBiYW5kIHNldHRpbmdcblx0XHRcdFx0bmV3RGF0YSA9IG5ld0RhdGEucmVwbGFjZShiYW5kUmVnZXgsIGBiYW5kPSR7bmV3QmFuZH1gKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuXHRcdFx0XHRuZXdEYXRhID0gYCR7bmV3RGF0YS50cmltKCl9XFxuYmFuZD0ke25ld0JhbmR9YDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG1hdGNoQ2hhbm5lbCAmJiBtYXRjaENoYW5uZWxbMV0pIHtcblx0XHRcdFx0Ly8gQ29udmVydCB0aGUgY2hhbm5lbCB2YWx1ZSB0byBhIG51bWJlclxuXHRcdFx0XHR2YXIgY3VycmVudENoYW5uZWwgPSBwYXJzZUludChtYXRjaENoYW5uZWxbMV0sIDEwKTtcblxuXHRcdFx0XHQvLyBTZXQgY2hhbm5lbCB0byBhIGRlZmF1bHQgMi40R0h6IGNoYW5uZWwgaWYgY3VycmVudCBjaGFubmVsIGlzIGZvciA1R0h6XG5cdFx0XHRcdGlmIChuZXdCYW5kID09IFwiMi40R0h6XCIgJiYgY3VycmVudENoYW5uZWwgPiAxNCkge1xuXHRcdFx0XHRcdG5ld0RhdGEgPSBuZXdEYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD0xMWApO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5ld0JhbmQgPT0gXCI1R0h6XCIgJiYgY3VycmVudENoYW5uZWwgPD0gMTQpIHtcblx0XHRcdFx0XHRuZXdEYXRhID0gbmV3RGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9NDRgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0Ly8gICAnc2V0V2lmaUJhbmQnOiBmdW5jdGlvbihuZXdCYW5kKSB7XG5cdFx0Ly8gXHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcblx0XHQvLyBcdHZhciBiYW5kUmVnZXggPSBuZXcgUmVnRXhwKCdiYW5kPSguKiknKTtcblx0XHQvLyBcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2goYmFuZFJlZ2V4KTtcblxuXHRcdC8vIFx0aWYgKG1hdGNoKSB7XG5cdFx0Ly8gXHQgIC8vIFJlcGxhY2UgdGhlIGV4aXN0aW5nIGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0ICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShiYW5kUmVnZXgsIGBiYW5kPSR7bmV3QmFuZH1gKTtcblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHQgIC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0ICB2YXIgbmV3RGF0YSA9IGAke2RhdGEudHJpbSgpfVxcbmJhbmQ9JHtuZXdCYW5kfWA7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHR2YXIgY2hhbm5lbFJlZ2V4ID0gbmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJyk7XG5cdFx0Ly8gXHR2YXIgbWF0Y2gyID0gZGF0YS5tYXRjaChjaGFubmVsUmVnZXgpO1xuXHRcdC8vIFx0aWYgKG1hdGNoMiAmJiBtYXRjaDJbMV0pIHtcblx0XHQvLyBcdFx0Ly8gU2V0IGNoYW5uZWwgdG8gYSBkZWZhdWx0IDIuNEdIeiBjaGFubmVsIGlmIGN1cnJlbnQgY2hhbm5lbCBpcyBmb3IgNUdIelxuXHRcdC8vIFx0XHRpZiAobmV3QmFuZCA9PSBcIjIuNEdIelwiICYmIG1hdGNoMlsxXSA+IDE0KSB7XG5cdFx0Ly8gXHRcdFx0Ly8gQXBwZW5kIHRoZSBuZXcgYmFuZCBzZXR0aW5nXG5cdFx0Ly8gXHRcdFx0dmFyIG5ld0RhdGEyID0gZGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9MTFgKTtcblx0XHQvLyBcdFx0fSBlbHNlIGlmIChuZXdCYW5kID09IFwiNUdIelwiICYmIG1hdGNoMlsxXSA8PSAxNCkge1xuXHRcdC8vIFx0XHRcdHZhciBuZXdEYXRhMiA9IGRhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTQ0YCk7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH1cblx0XHQvLyBcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0Ly8gICB9LFxuXHRcdCdnZXRTZXJpYWwnOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ1NFUklBTD0oLiopJykpO1xuICBcdFx0XHR2YXIgc2VyaWFsID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBzZXJpYWw7XG5cdFx0fSxcblx0XHQnZ2V0T3BlcmF0b3JOYW1lJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgb3BlcmF0b3JOYW1lO1xuXHRcdFx0b3BlcmF0b3JOYW1lID0gY21kKFwic3VkbyBxbWljbGkgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtb3BlcmF0b3ItbmFtZSB8IGdyZXAgLW0yICdOYW1lICAgICAgICAgICAgICcgfCBhd2sgJ3twcmludCAkM30nXCIpO1xuXHRcdFx0cmV0dXJuIG9wZXJhdG9yTmFtZTtcblx0XHR9LFxuXHRcdC8vICdnZXRTaWduYWxTdHJlbmd0aCc6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdHZhciBzaWduYWxTdHJlbmd0aDtcblx0XHQvLyBcdHNpZ25hbFN0cmVuZ3RoID0gY21kKFwic3VkbyBxbWljbGkgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayAne3ByaW50ICQzLCAkMn0nXCIpO1xuXHRcdC8vIFx0cmV0dXJuIHNpZ25hbFN0cmVuZ3RoO1xuXHRcdC8vIH0sXG5cdFx0J2dldFNpZ25hbFN0cmVuZ3RoJzogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHNpZ25hbFN0cmVuZ3RoO1xuXHRcdFx0Ly8gVGhpcyBleHRyYWN0cyBqdXN0IHRoZSBudW1lcmljIHBhcnQgb2YgdGhlIHNpZ25hbCBzdHJlbmd0aC5cblx0XHRcdHNpZ25hbFN0cmVuZ3RoID0gY21kKFwic3VkbyBxbWljbGkgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAnTmV0d29yaycgfCBhd2sgJ3twcmludCAkM30nIHwgZ3JlcCAtb0UgJ1stMC05XSsnXCIpO1xuXG5cdFx0XHQvLyBDb252ZXJ0IHNpZ25hbCBzdHJlbmd0aCB0byBhIHF1YWxpdGF0aXZlIHZhbHVlXG5cdFx0XHR2YXIgc3RyZW5ndGhWYWx1ZSA9IHBhcnNlSW50KHNpZ25hbFN0cmVuZ3RoKTtcblx0XHRcdHZhciBxdWFsaXR5ID0gJ1Vua25vd24nO1xuXHRcdFx0aWYgKHN0cmVuZ3RoVmFsdWUgPj0gLTcwKSB7XG5cdFx0XHRcdHF1YWxpdHkgPSAnRXhjZWxsZW50Jztcblx0XHRcdH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtODUpIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdHb29kJztcblx0XHRcdH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtMTAwKSB7XG5cdFx0XHRcdHF1YWxpdHkgPSAnRmFpcic7XG5cdFx0XHR9IGVsc2UgaWYgKHN0cmVuZ3RoVmFsdWUgPCAtMTAwKSB7XG5cdFx0XHRcdHF1YWxpdHkgPSAnUG9vcic7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcXVhbGl0eTtcblx0XHR9LFxuXHRcdC8vICdnZXRJc09ubGluZSc6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdHZhciBpc09ubGluZTtcblx0XHQvLyBcdGlzT25saW5lID0gY21kKFwic3VkbyBxbWljbGkgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayAne3ByaW50ICQzLCAkMn0nXCIpO1xuXHRcdC8vIFx0cmV0dXJuIGlzT25saW5lO1xuXHRcdC8vIH0sXG5cdFx0Ly8gJ2dldEJhbmQnOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHR2YXIgYmFuZDtcbi8vXHRcdFx0YmFuZCA9IGNtZChcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgLW0xIE5ldHdvcmsgfCBhd2sgXFxcIntwcmludCAkMn1cXFwiIHwgY3V0IC1kXFxcXCcgLWYyXCIpO1xuXHRcdC8vIFx0cmV0dXJuIGJhbmQ7XG5cdFx0Ly8gfSxcblx0XHQnZ2V0QVBOJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49KC4qKScpKTtcbiAgXHRcdFx0dmFyIEFQTiA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gQVBOO1xuXHRcdH0sXG5cdFx0J2dldEFQTlVzZXInOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9VU0VSTkFNRT0oLiopJykpO1xuICBcdFx0XHR2YXIgQVBOVXNlciA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gQVBOVXNlcjtcblx0XHR9LFxuXHRcdCdnZXRBUE5QYXNzd29yZCc6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1BBU1NXT1JEPSguKiknKSk7XG4gIFx0XHRcdHZhciBBUE5QYXNzd29yZCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gQVBOUGFzc3dvcmQ7XG5cdFx0fSxcblx0XHQnZ2V0U2ltQ2FyZFN0YXR1cyc6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBzaW1TdGF0dXNSZXN1bHQgPSAnVW5rbm93bic7IC8vIERlZmF1bHQgc3RhdHVzXG5cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgY29tbWFuZCBhbmQgaGFuZGxlIGVycm9yc1xuXHRcdFx0ZnVuY3Rpb24gZXhlY3V0ZUNvbW1hbmQoY29tbWFuZCkge1xuXHRcdFx0XHRsZXQgcmVzdWx0O1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IGNtZChjb21tYW5kKTsgLy8gRXhlY3V0ZSB0aGUgY29tbWFuZFxuXHRcdFx0XHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJiByZXN1bHQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdC8vIENoZWNrIGlmIHJlc3VsdCBpcyBhbiBlcnJvciBvYmplY3Rcblx0XHRcdFx0XHRcdHJldHVybiAnRXJyb3InO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHQvLyBIYW5kbGUgZXhjZXB0aW9ucyBpZiBjb21tYW5kIGV4ZWN1dGlvbiBmYWlsc1xuXHRcdFx0XHRcdHJldHVybiAnRXJyb3InO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7IC8vIFJldHVybiB0aGUgcmVzdWx0IGlmIG5vIGVycm9yc1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFeGVjdXRlIFNJTSBjYXJkIHN0YXR1cyBjaGVjayBjb21tYW5kXG5cdFx0XHRsZXQgc2ltU3RhdHVzID0gZXhlY3V0ZUNvbW1hbmQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tdWltLWdldC1jYXJkLXN0YXR1cyB8IGdyZXAgJ0NhcmQgc3RhdGU6J1wiKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiU0lNIGNhcmQgc3RhdHVzOlwiLCBzaW1TdGF0dXMpOyAvLyBMb2cgdGhlIHJhdyBvdXRwdXRcblx0XHRcdC8vIFByb2Nlc3MgdGhlIG91dHB1dCBhbmQgZGV0ZXJtaW5lIFNJTSBjYXJkIHN0YXR1c1xuXHRcdFx0aWYgKHNpbVN0YXR1cy5pbmNsdWRlcygnbm8tYXRyLXJlY2VpdmVkJykgfHwgc2ltU3RhdHVzLmluY2x1ZGVzKCdub3QtaW5zZXJ0ZWQnKSkge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSAnTm8gU0lNIGNhcmQnO1xuXHRcdFx0fSBlbHNlIGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoJ2Vycm9yJykpIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gc2ltU3RhdHVzOyAvLyBVc2UgdGhlIGVycm9yIG1lc3NhZ2Ugb3Igbm8gU0lNIGRldGVjdGVkIG1lc3NhZ2Vcblx0XHRcdH0gZWxzZSBpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKCdwcmVzZW50JykpIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gJ09LJztcblx0XHRcdH0gZWxzZSBpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKCdsb2NrZWQnKSB8fCBzaW1TdGF0dXMuaW5jbHVkZXMoJ3Bpbi1yZXF1aXJlZCcpKSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9ICdTSU0gY2FyZCBsb2NrZWQsIFBJTiByZXF1aXJlZCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSAnVW5rbm93bic7IC8vIEZvciBvdGhlciBzdGF0dXNlc1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNpbVN0YXR1c1Jlc3VsdDtcblx0XHR9LFxuXHRcdCdnZXRTaW1QaW4nOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ1NJTV9QSU49KC4qKScpKTtcbiAgXHRcdFx0dmFyIFNpbVBpbiA9IG1hdGNoWzFdO1xuXHRcdFx0cmV0dXJuIFNpbVBpbjtcblx0XHR9LFxuXHRcdCdzZXRTaW1QaW4nOiBmdW5jdGlvbihQSU4pIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ1NJTV9QSU49LionKSksICdTSU1fUElOPScrUElOKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOJzogZnVuY3Rpb24oQVBOLCB1c2VyLCBwYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOPS4qJykpLCAnQVBOPScrQVBOKTtcbiAgXHRcdFx0Ly8gdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49KC4qKScpKVsxXSwgQVBOKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOVXNlcic6IGZ1bmN0aW9uKEFQTlVzZXIpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9VU0VSTkFNRT0uKicpKSwgJ0FQTl9VU0VSTkFNRT0nK0FQTlVzZXIpO1xuICBcdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J3NldEFQTlBhc3N3b3JkJzogZnVuY3Rpb24oQVBOUGFzc3dvcmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9QQVNTV09SRD0uKicpKSwgJ0FQTl9QQVNTV09SRD0nK0FQTlBhc3N3b3JkKTtcbiAgXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRSZW1vdGVTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzeXN0ZW1jdGwgaXMtYWN0aXZlIHJlbW90ZS1pb3Quc2VydmljZSA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyAxIHx8IGVjaG8gMFwiKTtcblx0XHRcdGlmIChyZXNbMF0gPT0gXCIxXCIpIHsgLy8gWzBdIGlzIGEgaGFjayBiZWNhdXNlIHRoZSByZXN1bHQgcmVzIGhhcyBvbmUgZXh0cmEgY2hhcmFjdGVyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQnZ2V0QXV0b1N5bmNTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzeXN0ZW1jdGwgaXMtYWN0aXZlIGF1dG9zeW5jLnNlcnZpY2UgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gMSB8fCBlY2hvIDBcIik7XG5cdFx0XHRpZiAocmVzWzBdID09IFwiMVwiKSB7IC8vIFswXSBpcyBhIGhhY2sgYmVjYXVzZSB0aGUgcmVzdWx0IHJlcyBoYXMgb25lIGV4dHJhIGNoYXJhY3RlclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0J2dldFNoYXJlSW50ZXJuZXRWaWFFdGhlcm5ldFN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlzU2hhcmluZztcblx0XHRcdGlzU2hhcmluZyA9IGNtZChcIihzdWRvIGlwdGFibGVzIC10IG5hdCAtTCBQT1NUUk9VVElORyAtdiAtbiB8IGdyZXAgLXEgJ01BU1FVRVJBREUgIGFsbCAgLS0gICogICAgICBldGgwJyAmJiBpcCBsaW5rIHNob3cgZXRoMCB8IGdyZXAgLXEgJ3N0YXRlIFVQJykgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIik7XG5cdFx0XHRyZXR1cm4gaXNTaGFyaW5nO1xuXHRcdH0sXG5cdFx0J2dldFNoYXJlSW50ZXJuZXRWaWFNb2JpbGVTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpc1NoYXJpbmc7XG5cdFx0XHRpc1NoYXJpbmcgPSBjbWQoXCIoc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUwgUE9TVFJPVVRJTkcgLXYgLW4gfCBncmVwIC1xICdNQVNRVUVSQURFICBhbGwgIC0tICAqICAgICAgd3dhbjAnICYmIGlwIGxpbmsgc2hvdyB3d2FuMCB8IGdyZXAgLXEgJ3N0YXRlIFVQJykgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIik7XG5cdFx0XHRyZXR1cm4gaXNTaGFyaW5nO1xuXHRcdH0sXG5cdFx0Ly8gJ2FjdGl2YXRlSW50ZXJuZXRTaGFyaW5nJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0cmVzID0gY21kKFwic3VkbyB3aWZpLWFwLmNvbmZpZyBzZXQgc2hhcmUuZGlzYWJsZWQ9ZmFsc2VcIik7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzO1xuXHRcdC8vIH0sXG5cdFx0Ly8gJ2Rpc2FjdGl2YXRlSW50ZXJuZXRTaGFyaW5nJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0cmVzID0gY21kKFwic3VkbyB3aWZpLWFwLmNvbmZpZyBzZXQgc2hhcmUuZGlzYWJsZWQ9dHJ1ZVwiKTtcblx0XHQvLyBcdHJldHVybiByZXM7XG5cdFx0Ly8gfSxcblx0XHQnYWN0aXZhdGVSZW1vdGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdGFydCByZW1vdGUtaW90LnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZW5hYmxlIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZGlzYWN0aXZhdGVSZW1vdGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdG9wIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBkaXNhYmxlIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnYWN0aXZhdGVBdXRvU3luYyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0YXJ0IGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZW5hYmxlIGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2Rpc2FjdGl2YXRlQXV0b1N5bmMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdG9wIGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZGlzYWJsZSBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRCYXR0ZXJ5U3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0dmFyIHNjcmlwdHNQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnNjcmlwdHNQYXRoO1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG5cdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0JBVFRFUllfTU9EVUxFPSguKiknKSk7XG5cdFx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdFx0dmFyIGJhdHRlcnlNb2R1bGUgPSBtYXRjaFsxXTtcblx0XHRcdH1cblx0XHRcdGlmIChiYXR0ZXJ5TW9kdWxlICYmIGJhdHRlcnlNb2R1bGUgPT0gXCJQaVN1Z2FyXCIpIHtcblx0XHRcdFx0cmVzID0gY21kKFwicHl0aG9uMyBcIitzY3JpcHRzUGF0aCtcIi9waXN1Z2FyX3N0YXR1cy5weVwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlcyA9IGNtZChcInB5dGhvbjMgXCIrc2NyaXB0c1BhdGgrXCIvcGlqdWljZV9zdGF0dXMucHlcIik7XG5cdFx0XHRcdC8vcmVzID0gY21kKFwicHl0aG9uMyAvaG9tZS91YnVudHUvc2NyaXB0cy9waWp1aWNlX3N0YXR1cy5weVwiKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQvLyAnZ2V0SXNPbmxpbmUnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciByZXM7XG5cdFx0Ly8gXHR2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGg7XG5cdFx0Ly8gXHQvLyBNYWtlIHN1cmUgeW91ciBzY3JpcHQgaXMgZXhlY3V0YWJsZSwgZS5nLiwgY2htb2QgK3ggY2hlY2tfaW50ZXJuZXQuc2hcblx0XHQvLyBcdHJlcyA9IGNtZChcImJhc2ggXCIgKyBzY3JpcHRzUGF0aCArIFwiL2NoZWNrX2ludGVybmV0LnNoXCIpOyAvLyBSZXBsYWNlICdiYXNoJyB3aXRoICdzaCcgaWYgbmVlZGVkXG5cdFx0Ly8gXHQvLyBUaGUgc2NyaXB0IHJldHVybnMgXCJ0cnVlXCIgb3IgXCJmYWxzZVwiIGFzIGEgc3RyaW5nLCBzbyB3ZSBjb21wYXJlIHRoZSByZXN1bHQgZGlyZWN0bHlcblx0XHQvLyBcdHJldHVybiByZXMudHJpbSgpID09PSBcInRydWVcIjsgLy8gVGhpcyBjb252ZXJ0cyB0aGUgc3RyaW5nIHRvIGEgYm9vbGVhblxuXHRcdC8vIH0sXG5cdFx0J2dldElzT25saW5lJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgcmVzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzID0gY21kKFwicGluZyAtYyAxIGdvb2dsZS5jb21cIik7XG5cdFx0XHRcdC8vIENoZWNrIGlmIHRoZSBwaW5nIGNvbW1hbmQgd2FzIHN1Y2Nlc3NmdWwgYmFzZWQgb24gdGhlIG91dHB1dFxuXHRcdFx0XHRsZXQgaXNPbmxpbmUgPSByZXMuaW5jbHVkZXMoXCIxIHBhY2tldHMgcmVjZWl2ZWRcIikgfHwgcmVzLmluY2x1ZGVzKFwiMSByZWNlaXZlZFwiKTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJPbmxpbmUgc3RhdHVzOlwiLCBpc09ubGluZSk7IC8vIENvcnJlY3RseSBsb2dnaW5nIHRoZSBib29sZWFuIHJlc3VsdFxuXHRcdFx0XHRyZXR1cm4gaXNPbmxpbmU7IC8vIERpcmVjdGx5IHJldHVybiB0aGUgYm9vbGVhbiB2YWx1ZVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Ly8gSWYgYW4gZXJyb3Igb2NjdXJzICh3aGljaCBjb3VsZCBpbmNsdWRlIGJlaW5nIHVuYWJsZSB0byBydW4gdGhlIHBpbmcgY29tbWFuZCksIGFzc3VtZSBvZmZsaW5lXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igb3Igb2ZmbGluZTpcIiwgZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIEFzc3VtZSBvZmZsaW5lIGlmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdnZXRFdGgwSVAnOiBmdW5jdGlvbigpIHsgLy8gR2V0IElQIG9mIGJveFxuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vY29uc29sZS5sb2coXCJyZXN1bHQgOiBcIitcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImlwIDogXCIrXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBcIitpbnRlcmZhY2UrXCIgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRXd2FuMElQJzogZnVuY3Rpb24oKSB7IC8vIEdldCBJUCBvZiBib3hcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwicmVzdWx0IDogXCIrXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJlcyA9IGNtZChcImlwIGFkZHIgc2hvdyB3d2FuMCB8IGdyZXAgXFxcImluZXRcXFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cblx0XHRcdC8vY29uc29sZS5sb2coXCJpcCA6IFwiK1wiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgXCIraW50ZXJmYWNlK1wiIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblxuXHRcdCdnZXRCZWVrZWVPc1ZlcnNpb24nOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdCRUVLRUVfT1NfVkVSU0lPTj0oLiopJykpO1xuXHRcdFx0dmFyIHNlcmlhbCA9IG1hdGNoWzFdO1xuXHRcdFx0cmV0dXJuIHNlcmlhbDtcblx0XHR9LFxuXHRcdCdnZXRCZWVrZWVIb21lVmVyc2lvbic6IGZ1bmN0aW9uKCkge1xuXHRcdFx0anNvbiA9IEpTT04ucGFyc2UoQXNzZXRzLmdldFRleHQoXCJ2ZXJzaW9uLmpzb25cIikpO1xuXHRcdFx0cmV0dXJuIGpzb24udmVyc2lvbjtcblx0XHR9LFxuXHRcdCdyZXN0YXJ0TW9iaWxlQ29ubmVjdCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHJlc3RhcnQgbW9iaWxlX2Nvbm5lY3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7Jydcblx0XHR9LFxuXHRcdCdnZXRJbnRlcm5ldEludGVyZmFjZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IHJlcztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlcyA9IGNtZChcImlwIHJvdXRlIGdldCAxLjIuMy40IHwgYXdrICd7cHJpbnQgJDU7IGV4aXR9J1wiKTsgLy8gRXhlY3V0ZSB0aGUgY29tbWFuZFxuXHRcdFx0XHRpZiAocmVzLnRyaW0oKSkge1xuXHRcdFx0XHRcdHJldHVybiByZXMudHJpbSgpOyAvLyBSZXR1cm4gdGhlIGNsZWFuZWQtdXAgcmVzdWx0IGlmIG5vdCBlbXB0eVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiAnVW5rbm93bic7IC8vIFJldHVybiBhIGRlZmF1bHQgbWVzc2FnZSBpZiB0aGUgcmVzdWx0IGlzIGVtcHR5XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB0aGUgY29tbWFuZCBmYWlscyBvciBpcyBub3QgZm91bmRcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIGludGVybmV0IGludGVyZmFjZTpcIiwgZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gJ0Vycm9yJzsgLy8gUmV0dXJuIGFuIGVycm9yIG1lc3NhZ2Vcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0Ly8gXHQvLyBDb21tYW5kIHRvIGxpc3QgRk9SV0FSRCBydWxlc1xuXHRcdC8vIFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtbiAtLWxpbmUtbnVtYmVyJztcblxuXHRcdC8vIFx0Y21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0Ly8gXHRcdGlmIChlcnJvciB8fCBzdGRlcnIpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIEZPUldBUkQgcnVsZXM6ICR7ZXJyb3IgfHwgc3RkZXJyfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IgfHwgbmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXG5cdFx0Ly8gXHRcdC8vIENoZWNrIGZvciBnZW5lcmFsIGludGVybmV0IHNoYXJpbmcgcnVsZXNcblx0XHQvLyBcdFx0dmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gc3Rkb3V0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSBldGgwJykgJiYgc3Rkb3V0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKFwiaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQ6IFwiK2lzR2VuZXJhbFNoYXJpbmdFbmFibGVkKTtcblx0XHQvLyBcdFx0Ly8gRXh0cmFjdCBNQUMgYWRkcmVzcyBydWxlc1xuXHRcdC8vIFx0XHR2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSBldGgwLztcblx0XHQvLyBcdFx0dmFyIG1hdGNoID0gc3Rkb3V0Lm1hdGNoKG1hY0FkZHJlc3NSdWxlUmVnZXgpO1xuXG5cdFx0Ly8gXHRcdC8vIERldGVybWluZSB0aGUgc3RhdHVzIGJhc2VkIG9uIHRoZSBydWxlcyBmb3VuZFxuXHRcdC8vIFx0XHRpZiAoaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgJiYgIW1hdGNoKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2coXCJzdGVwMVwiKTtcblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGFsbFxuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykge2NvbnNvbGUubG9nKFwic3RlcDEyXCIpOyBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfSk7fVxuXHRcdC8vIFx0XHR9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2coXCJzdGVwMlwiKTtcblxuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYSBzcGVjaWZpYyBNQUMgYWRkcmVzc1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9KTtcblx0XHQvLyBcdFx0fSBlbHNlIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAzXCIpO1xuXG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBkaXNhYmxlZCBvciBub3QgY29uZmlndXJlZCBhcyBleHBlY3RlZFxuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfSk7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH0pO1xuXHRcdC8vIH0sXG5cblxuXG5cblx0XHRcdC8vICAgJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0JzogZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKCdTdGFydGluZyB0byBnZXQgaW50ZXJuZXQgc2hhcmluZyBzdGF0dXMgZm9yIEV0aGVybmV0Li4uJyk7XG5cdFx0XHQvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLW4gLS1saW5lLW51bWJlcic7XG5cblx0XHRcdC8vIFx0Ly8gU2luY2UgY21kIGlzIGFscmVhZHkgd3JhcHBlZCBieSBNZXRlb3Iud3JhcEFzeW5jKGV4ZWMpLFxuXHRcdFx0Ly8gXHQvLyBpdCBzaG91bGQgcmV0dXJuIHsgc3Rkb3V0LCBzdGRlcnIgfSBkaXJlY3RseS5cblx0XHRcdC8vIFx0dHJ5IHtcblx0XHRcdC8vIFx0ICB2YXIgeyBzdGRvdXQsIHN0ZGVyciB9ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblxuXHRcdFx0Ly8gXHQgIGlmIChzdGRlcnIpIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIEZPUldBUkQgcnVsZXM6ICR7c3RkZXJyfWApO1xuXHRcdFx0Ly8gXHRcdC8vIEl0J3MgYmV0dGVyIHRvIHJldHVybiBhIG1lYW5pbmdmdWwgZXJyb3IgdG8gdGhlIGNsaWVudC5cblx0XHRcdC8vIFx0XHRyZXR1cm4geyBlcnJvcjogXCJFcnJvciBsaXN0aW5nIEZPUldBUkQgcnVsZXNcIiwgZGV0YWlsczogc3RkZXJyIH07XG5cdFx0XHQvLyBcdCAgfVxuXG5cdFx0XHQvLyBcdCAgY29uc29sZS5sb2coJ0FuYWx5emluZyBpcHRhYmxlcyBGT1JXQVJEIHJ1bGVzIG91dHB1dC4uLicpO1xuXHRcdFx0Ly8gXHQgIC8vIENoZWNrIGZvciBnZW5lcmFsIGludGVybmV0IHNoYXJpbmcgcnVsZXNcblx0XHRcdC8vIFx0ICB2YXIgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgPSBzdGRvdXQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIGV0aDAnKSAmJiBzdGRvdXQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcblx0XHRcdC8vIFx0ICBjb25zb2xlLmxvZyhgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQ6ICR7aXNHZW5lcmFsU2hhcmluZ0VuYWJsZWR9YCk7XG5cblx0XHRcdC8vIFx0ICAvLyBFeHRyYWN0IE1BQyBhZGRyZXNzIHJ1bGVzXG5cdFx0XHQvLyBcdCAgdmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2UgZXRoMC87XG5cdFx0XHQvLyBcdCAgdmFyIG1hdGNoID0gc3Rkb3V0Lm1hdGNoKG1hY0FkZHJlc3NSdWxlUmVnZXgpO1xuXHRcdFx0Ly8gXHQgIGNvbnNvbGUubG9nKGBNQUMgYWRkcmVzcyBmb3VuZDogJHttYXRjaCA/IG1hdGNoWzFdIDogJ05vbmUnfWApO1xuXG5cdFx0XHQvLyBcdCAgLy8gRGV0ZXJtaW5lIHRoZSBzdGF0dXMgYmFzZWQgb24gdGhlIHJ1bGVzIGZvdW5kXG5cdFx0XHQvLyBcdCAgaWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuXHRcdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGFsbC4nKTtcblx0XHRcdC8vIFx0XHRyZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHQvLyBcdCAgfSBlbHNlIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuXHRcdFx0Ly8gXHRcdGNvbnNvbGUubG9nKGBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGEgc3BlY2lmaWMgTUFDIGFkZHJlc3M6ICR7bWF0Y2hbMV19YCk7XG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3Igc3BlY2lmaWMgTUFDJywgbWFjQWRkcmVzczogbWF0Y2hbMV0gfTtcblx0XHRcdC8vIFx0ICB9IGVsc2Uge1xuXHRcdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIGlzIGRpc2FibGVkIG9yIG5vdCBjb25maWd1cmVkIGFzIGV4cGVjdGVkLicpO1xuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0Ly8gXHQgIH1cblx0XHRcdC8vIFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdC8vIFx0ICBjb25zb2xlLmVycm9yKGBDb21tYW5kIGV4ZWN1dGlvbiBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHRcdC8vIFx0ICAvLyBJdCdzIGJldHRlciB0byByZXR1cm4gYSBtZWFuaW5nZnVsIGVycm9yIHRvIHRoZSBjbGllbnQuXG5cdFx0XHQvLyBcdCAgcmV0dXJuIHsgZXJyb3I6IFwiQ29tbWFuZCBleGVjdXRpb24gZXJyb3JcIiwgZGV0YWlsczogZXJyb3IudG9TdHJpbmcoKSB9O1xuXHRcdFx0Ly8gXHR9XG5cdFx0XHQvLyAgIH0sXG5cblxuXG5cdFx0XHRcdC8vICAgJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0JzogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLVMgRk9SV0FSRCc7XG5cdFx0XHRcdC8vIFx0dmFyIGNvbW1hbmRSZXN1bHQgPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHRcdC8vIFx0aWYgKCFjb21tYW5kUmVzdWx0KSB7XG5cdFx0XHRcdC8vIFx0ICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFwiY29tbWFuZC1leGVjdXRpb24tZXJyb3JcIiwgXCJUaGUgY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiKTtcblx0XHRcdFx0Ly8gXHR9XG5cblx0XHRcdFx0Ly8gXHR2YXIgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSBldGgwJykgJiYgY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuXHRcdFx0XHQvLyBcdHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIGV0aDAvO1xuXHRcdFx0XHQvLyBcdHZhciBtYXRjaCA9IGNvbW1hbmRSZXN1bHQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cblx0XHRcdFx0Ly8gXHRpZiAoaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgJiYgIW1hdGNoKSB7XG5cdFx0XHRcdC8vIFx0ICByZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHRcdC8vIFx0fSBlbHNlIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuXHRcdFx0XHQvLyBcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3Igc3BlY2lmaWMgTUFDJywgbWFjQWRkcmVzczogbWF0Y2hbMV0gfTtcblx0XHRcdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHRcdC8vIFx0fVxuXHRcdFx0XHQvLyAgIH0sXG5cblxuXG5cblx0XHRcdFx0XHQgICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLVMgRk9SV0FSRCc7XG5cblx0XHRcdFx0XHRcdHZhciBjb21tYW5kUmVzdWx0ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblxuXHRcdFx0XHRcdFx0aWYgKCFjb21tYW5kUmVzdWx0KSB7XG5cdFx0XHRcdFx0XHQgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBDaGVjayBmb3IgdGhlIHNwZWNpZmljIHJ1bGUgaW5kaWNhdGluZyBpbnRlcm5ldCBzaGFyaW5nIGZyb20gd2xhbjAgdG8gZXRoMFxuXHRcdFx0XHRcdFx0dmFyIHNoYXJpbmdGcm9tV2xhblRvRXRoID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFuMCAtbyBldGgwIC1qIEFDQ0VQVCcpO1xuXHRcdFx0XHRcdFx0dmFyIHNoYXJpbmdUb1dsYW5Gcm9tRXRoRXN0YWJsaXNoZWQgPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIGV0aDAgLW8gd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcpO1xuXG5cdFx0XHRcdFx0XHRpZiAoc2hhcmluZ0Zyb21XbGFuVG9FdGggJiYgc2hhcmluZ1RvV2xhbkZyb21FdGhFc3RhYmxpc2hlZCkge1xuXHRcdFx0XHRcdFx0ICAvLyBJZiBhdCBsZWFzdCBvbmUgcGFpciBvZiBydWxlcyBleGlzdHMsIGludGVybmV0IHNoYXJpbmcgaXMgY29uc2lkZXJlZCBlbmFibGVkLlxuXHRcdFx0XHRcdFx0ICByZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ICByZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQgIH0sXG5cblxuXG5cblxuXG5cblxuXHRcdCdlbmFibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcblx0XHRcdF0uam9pbignICYmICcpO1xuXG5cdFx0XHRjbWQoaXB0YWJsZXNDb21tYW5kcywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3RkZXJyKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgdmlhIEV0aGVybmV0IGVuYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0Ly8gRGVmaW5lIGEgbGlzdCBvZiBjb21tYW5kcyB0byByZXBlYXRlZGx5IGF0dGVtcHQgZGVsZXRpb24uXG5cdFx0XHR2YXIgaXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcblx0XHRcdF07XG5cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYSBjb21tYW5kIGFuZCByZWN1cnNpdmVseSBjYWxsIGl0c2VsZiBpZiB0aGUgY29tbWFuZCB3YXMgc3VjY2Vzc2Z1bCAocnVsZSB3YXMgZm91bmQgYW5kIGRlbGV0ZWQpLlxuXHRcdFx0ZnVuY3Rpb24gZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spIHtcblx0XHRcdFx0Y21kKGNvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIG5vIGVycm9yLCB0aGUgcnVsZSB3YXMgZm91bmQgYW5kIGRlbGV0ZWQsIHNvIHRyeSBhZ2Fpbi5cblx0XHRcdFx0XHRpZiAoIWVycm9yKSB7XG5cdFx0XHRcdFx0XHRleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjayk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3IsIGl0IGxpa2VseSBtZWFucyBubyBtb3JlIGluc3RhbmNlcyBvZiB0aGUgcnVsZSBleGlzdCwgc28gY2FsbCB0aGUgZG9uZUNhbGxiYWNrLlxuXHRcdFx0XHRcdFx0ZG9uZUNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRXhlY3V0ZSBkZWxldGlvbiBmb3IgZWFjaCBjb21tYW5kIGFuZCB0cmFjayBjb21wbGV0aW9uLlxuXHRcdFx0dmFyIHRhc2tzQ29tcGxldGVkID0gMDtcblx0XHRcdGlwdGFibGVzRGVsZXRlQ29tbWFuZHMuZm9yRWFjaCgoY29tbWFuZCkgPT4ge1xuXHRcdFx0XHRleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsICgpID0+IHtcblx0XHRcdFx0XHR0YXNrc0NvbXBsZXRlZCsrO1xuXHRcdFx0XHRcdC8vIE9uY2UgYWxsIGRlbGV0aW9uIHRhc2tzIGFyZSBkb25lLCBzYXZlIHRoZSBpcHRhYmxlcyBjb25maWd1cmF0aW9uLlxuXHRcdFx0XHRcdGlmICh0YXNrc0NvbXBsZXRlZCA9PT0gaXB0YWJsZXNEZWxldGVDb21tYW5kcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBzYXZlZC5gKTtcblx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIHNwZWNpZmllZCBydWxlcyByZW1vdmVkIGFuZCBjaGFuZ2VzIHNhdmVkLicpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHQvLyAnZGlzYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gW1xuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdC8vIFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdC8vIFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHQvLyBcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0Ly8gXHRcdGlmIChlcnJvcikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGlmIChzdGRlcnIpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXQgZGlzYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdC8vIFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXHRcdCdlbmFibGVJbnRlcm5ldEZvck1hY0V0aGVybmV0JzogZnVuY3Rpb24obWFjQWRkcmVzcywgY2FsbGJhY2spIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvLyBDb21tYW5kIHRvIGFsbG93IGludGVybmV0IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzIG9uIGV0aDAuXG5cdFx0XHR2YXIgYWxsb3dNYWNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1tIG1hYyAtLW1hYy1zb3VyY2UgJHttYWNBZGRyZXNzfSAtaiBBQ0NFUFRgO1xuXHRcdFx0Ly8gQ29tbWFuZCB0byBkcm9wIGFsbCBvdGhlciBpbnRlcm5ldCB0cmFmZmljIG9uIGV0aDAuXG5cdFx0XHR2YXIgYmxvY2tPdGhlcnNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1qIERST1BgO1xuXG5cdFx0XHQvLyBBbGxvdyBpbnRlcm5ldCBmb3IgdGhlIHNwZWNpZmllZCBNQUMgYWRkcmVzcy5cblx0XHRcdHJlcyA9IGNtZChhbGxvd01hY0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYWxsb3dpbmcgTUFDICR7bWFjQWRkcmVzc306ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGFsbG93ZWQgZm9yIE1BQyAke21hY0FkZHJlc3N9LmApO1xuXG5cdFx0XHRcdC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldC5cblx0XHRcdFx0cmVzID0gY21kKGJsb2NrT3RoZXJzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBibG9ja2VkIGZvciBvdGhlciBNQUMgYWRkcmVzc2VzLmApO1xuXHRcdFx0XHRcdC8vIE9wdGlvbmFsbHksIHNhdmUgdGhlIGlwdGFibGVzIHNldHRpbmdzIHRvIG1ha2UgdGhlbSBwZXJzaXN0ZW50LlxuXHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayhudWxsKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdyZW1vdmVBbGxNYWNGaWx0ZXJzRm9yRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0Ly8gTGlzdCBhbGwgRk9SV0FSRCBydWxlcyB3aXRoIGxpbmUgbnVtYmVyc1xuXHRcdFx0Y21kKCdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLS1saW5lLW51bWJlcnMgLW4nLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9jZXNzIHN0ZG91dCB0byBpZGVudGlmeSBydWxlcyByZWxhdGVkIHRvIE1BQyBmaWx0ZXJpbmcgb24gZXRoMFxuXHRcdFx0XHRjb25zdCBsaW5lcyA9IHN0ZG91dC5zcGxpdCgnXFxuJyk7XG5cdFx0XHRcdGNvbnN0IHJ1bGVOdW1iZXJzID0gbGluZXMucmVkdWNlKChhY2MsIGxpbmUsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGxpbmUuaW5jbHVkZXMoJ2V0aDAnKSAmJiBsaW5lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ21hYycpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBydWxlTnVtYmVyID0gbGluZS5zcGxpdCgvXFxzKy8pWzBdOyAvLyBFeHRyYWN0IHRoZSBydWxlIG51bWJlciwgYXNzdW1pbmcgaXQncyB0aGUgZmlyc3QgZWxlbWVudFxuXHRcdFx0XHRcdFx0YWNjLnB1c2gocnVsZU51bWJlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHRcdH0sIFtdKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgaWRlbnRpZmllZCBydWxlcyBzdGFydGluZyBmcm9tIHRoZSBoaWdoZXN0IG51bWJlciB0byBwcmV2ZW50IHNoaWZ0aW5nIG9mIGxpbmUgbnVtYmVyc1xuXHRcdFx0XHRydWxlTnVtYmVycy5zb3J0KChhLCBiKSA9PiBiIC0gYSkuZm9yRWFjaChydWxlTnVtYmVyID0+IHtcblx0XHRcdFx0XHRjbWQoYHN1ZG8gaXB0YWJsZXMgLUQgRk9SV0FSRCAke3J1bGVOdW1iZXJ9YCwgKHJlbW92ZUVycm9yLCByZW1vdmVTdGRvdXQsIHJlbW92ZVN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHJlbW92ZUVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHJlbW92aW5nIHJ1bGUgJHtydWxlTnVtYmVyfTogJHtyZW1vdmVFcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0Ly8gRGVjaWRlIGlmIHlvdSB3YW50IHRvIGNvbnRpbnVlIHJlbW92aW5nIG90aGVyIHJ1bGVzIG9yIHN0b3AgaGVyZVxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgUnVsZSAke3J1bGVOdW1iZXJ9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBBZnRlciBhdHRlbXB0aW5nIHRvIHJlbW92ZSBhbGwgaWRlbnRpZmllZCBydWxlcywgc2F2ZSB0aGUgaXB0YWJsZXMgY29uZmlndXJhdGlvblxuXHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChzYXZlRXJyb3IsIHNhdmVTdGRvdXQsIHNhdmVTdGRlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoc2F2ZUVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7c2F2ZUVycm9yfWApO1xuXHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhzYXZlRXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnaXB0YWJsZXMgcnVsZXMgdXBkYXRlZCBhbmQgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIE1BQyBmaWx0ZXIgcnVsZXMgZm9yIEV0aGVybmV0IHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzTW9iaWxlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcblxuXHRcdFx0dmFyIGNvbW1hbmRSZXN1bHQgPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHRpZiAoIWNvbW1hbmRSZXN1bHQpIHtcblx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGp1c3RlZCB0byBjaGVjayBmb3IgdGhlIHNwZWNpZmljIHJ1bGUgaW5kaWNhdGluZyBpbnRlcm5ldCBzaGFyaW5nIGZyb20gd2xhbjAgdG8gd3dhbjBcblx0XHRcdHZhciBzaGFyaW5nRnJvbVdsYW5Ub1d3YW4gPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW4wIC1vIHd3YW4wIC1qIEFDQ0VQVCcpO1xuXHRcdFx0dmFyIHNoYXJpbmdUb1dsYW5Gcm9tV3dhbkVzdGFibGlzaGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyk7XG5cblx0XHRcdGlmIChzaGFyaW5nRnJvbVdsYW5Ub1d3YW4gJiYgc2hhcmluZ1RvV2xhbkZyb21Xd2FuRXN0YWJsaXNoZWQpIHtcblx0XHRcdC8vIElmIGF0IGxlYXN0IG9uZSBwYWlyIG9mIHJ1bGVzIGV4aXN0cywgaW50ZXJuZXQgc2hhcmluZyB0byB0aGUgbW9iaWxlIGludGVyZmFjZSBpcyBjb25zaWRlcmVkIGVuYWJsZWQuXG5cdFx0XHRyZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdC8vIFx0Ly8gQ29tbWFuZCB0byBsaXN0IEZPUldBUkQgcnVsZXNcblx0XHQvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLW4gLS1saW5lLW51bWJlcic7XG5cblx0XHQvLyBcdGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdC8vIFx0XHRpZiAoZXJyb3IgfHwgc3RkZXJyKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke2Vycm9yIHx8IHN0ZGVycn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yIHx8IG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblxuXHRcdC8vIFx0XHQvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG5cdFx0Ly8gXHRcdHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IHN0ZG91dC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2Ugd3dhbjAnKSAmJiBzdGRvdXQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcblxuXHRcdC8vIFx0XHQvLyBFeHRyYWN0IE1BQyBhZGRyZXNzIHJ1bGVzXG5cdFx0Ly8gXHRcdHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIHd3YW4wLztcblx0XHQvLyBcdFx0dmFyIG1hdGNoID0gc3Rkb3V0Lm1hdGNoKG1hY0FkZHJlc3NSdWxlUmVnZXgpO1xuXG5cdFx0Ly8gXHRcdC8vIERldGVybWluZSB0aGUgc3RhdHVzIGJhc2VkIG9uIHRoZSBydWxlcyBmb3VuZFxuXHRcdC8vIFx0XHRpZiAoaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgJiYgIW1hdGNoKSB7XG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGxcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9KTtcblx0XHQvLyBcdFx0fSBlbHNlIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYSBzcGVjaWZpYyBNQUMgYWRkcmVzc1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9KTtcblx0XHQvLyBcdFx0fSBlbHNlIHtcblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGRpc2FibGVkIG9yIG5vdCBjb25maWd1cmVkIGFzIGV4cGVjdGVkXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9KTtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fSk7XG5cdFx0Ly8gfSxcblxuXHRcdCdlbmFibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0XHRdLmpvaW4oJyAmJiAnKTtcblxuXHRcdFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0ZGVycikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBtb2JpbGUgZW5hYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0Ly8gRGVmaW5lIGNvbW1hbmRzIGZvciBkZWxldGlvbiB3aXRob3V0IGNvbWJpbmluZyB0aGVtXG5cdFx0XHR2YXIgaXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJ1xuXHRcdFx0XTtcblxuXHRcdFx0Ly8gRnVuY3Rpb24gdG8gcmVjdXJzaXZlbHkgZXhlY3V0ZSBhIGNvbW1hbmQgdW50aWwgaXQgZmFpbHMgKGluZGljYXRpbmcgbm8gbW9yZSBpbnN0YW5jZXMgb2YgdGhlIHJ1bGUpXG5cdFx0XHRmdW5jdGlvbiBleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjaykge1xuXHRcdFx0XHRjbWQoY29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdC8vIE5vIGVycm9yIG1lYW5zIHRoZSBjb21tYW5kIHN1Y2NlZWRlZCwgc28gdGhlcmUgbWlnaHQgYmUgbW9yZSBpbnN0YW5jZXNcblx0XHRcdFx0XHRpZiAoIWVycm9yKSB7XG5cdFx0XHRcdFx0XHRleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjayk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIEVycm9yIGxpa2VseSBtZWFucyBubyBtb3JlIGluc3RhbmNlcyBvZiB0aGUgcnVsZSwgbW92ZSBvblxuXHRcdFx0XHRcdFx0ZG9uZUNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRXhlY3V0ZSBkZWxldGlvbiBmb3IgZWFjaCBjb21tYW5kIGFuZCB0cmFjayB3aGVuIGFsbCBhcmUgY29tcGxldGVkXG5cdFx0XHR2YXIgdGFza3NDb21wbGV0ZWQgPSAwO1xuXHRcdFx0aXB0YWJsZXNEZWxldGVDb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG5cdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgKCkgPT4ge1xuXHRcdFx0XHRcdHRhc2tzQ29tcGxldGVkKys7XG5cdFx0XHRcdFx0Ly8gQWZ0ZXIgYWxsIGNvbW1hbmRzIGhhdmUgYmVlbiBhdHRlbXB0ZWQsIHNhdmUgdGhlIGNvbmZpZ3VyYXRpb25cblx0XHRcdFx0XHRpZiAodGFza3NDb21wbGV0ZWQgPT09IGlwdGFibGVzRGVsZXRlQ29tbWFuZHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChlcnJvciwgc2F2ZVN0ZG91dCwgc2F2ZVN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdpcHRhYmxlcyBydWxlcyBmb3IgbW9iaWxlIGludGVyZmFjZSB1cGRhdGVkIGFuZCBzYXZlZC4nKTtcblx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIHNwZWNpZmllZCBydWxlcyBmb3IgbW9iaWxlIGludGVyZmFjZSByZW1vdmVkIGFuZCBjaGFuZ2VzIHNhdmVkLicpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHQvLyAnZGlzYWJsZUludGVybmV0U2hhcmluZ01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0Ly8gXHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJyxcblx0XHQvLyBcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcblx0XHQvLyBcdF0uam9pbignICYmICcpO1xuXG5cdFx0Ly8gXHRjbWQoaXB0YWJsZXNDb21tYW5kcywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdC8vIFx0XHRpZiAoZXJyb3IpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0XHRpZiAoc3RkZXJyKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgdmlhIG1vYmlsZSBkaXNhYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0Ly8gXHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHQvLyBcdH0pO1xuXHRcdC8vIH0sXG5cdFx0J2FsbG93SW50ZXJuZXRGb3JNYWNNb2JpbGUnOiBmdW5jdGlvbihtYWNBZGRyZXNzLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vIEZpcnN0LCBlbmFibGUgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIGZyb20gd2xhbjAgdG8gd3dhbjBcblx0XHRcdHJlcyA9IGNtZCgnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUICYmIHN1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1hcHBlbmQgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIGVuYWJsaW5nIGludGVybmV0IHNoYXJpbmc6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgc2hhcmluZyBlbmFibGVkIHZpYSB3d2FuMC5gKTtcblx0XHRcdFx0Ly8gQWxsb3cgaW50ZXJuZXQgb25seSBmb3IgdGhlIHNwZWNpZmllZCBNQUMgYWRkcmVzcyBvbiB3d2FuMFxuXHRcdFx0XHR2YXIgYWxsb3dNYWNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUkgRk9SV0FSRCAxIC1pIHd3YW4wIC1tIG1hYyAtLW1hYy1zb3VyY2UgJHttYWNBZGRyZXNzfSAtaiBBQ0NFUFRgO1xuXHRcdFx0XHQvLyBCbG9jayBhbGwgb3RoZXIgTUFDIGFkZHJlc3NlcyBmcm9tIGFjY2Vzc2luZyB0aGUgaW50ZXJuZXQgdmlhIHd3YW4wLlxuXHRcdFx0XHR2YXIgYmxvY2tPdGhlcnNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3d2FuMCAtaiBEUk9QYDtcblxuXHRcdFx0XHQvLyBBbGxvdyBzcGVjaWZpYyBNQUNcblx0XHRcdFx0cmVzID0gY21kKGFsbG93TWFjQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYWxsb3dpbmcgTUFDICR7bWFjQWRkcmVzc30gb24gV1dBTjogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGBJbnRlcm5ldCBhY2Nlc3MgYWxsb3dlZCBmb3IgTUFDICR7bWFjQWRkcmVzc30gb24gV1dBTi5gKTtcblxuXHRcdFx0XHRcdC8vIEJsb2NrIGFsbCBvdGhlciBNQUNzXG5cdFx0XHRcdFx0cmVzID0gY21kKGJsb2NrT3RoZXJzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIGJsb2NraW5nIG90aGVyIE1BQ3Mgb24gV1dBTjogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBJbnRlcm5ldCBhY2Nlc3MgYmxvY2tlZCBmb3Igb3RoZXIgTUFDIGFkZHJlc3NlcyBvbiBXV0FOLmApO1xuXG5cdFx0XHRcdFx0XHQvLyBTYXZlIGlwdGFibGVzIHJ1bGVzXG5cdFx0XHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgc2F2aW5nIGlwdGFibGVzIHJ1bGVzIGZvciBXV0FOOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYGlwdGFibGVzIHJ1bGVzIGZvciBXV0FOIHNhdmVkLmApO1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayhudWxsKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3JlbW92ZUFsbE1hY0ZpbHRlcnNGb3JNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0Ly8gTGlzdCBhbGwgRk9SV0FSRCBydWxlc1xuXHRcdFx0Y21kKCdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLS1saW5lLW51bWJlcnMgLW4nLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgcnVsZXM6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUHJvY2VzcyBzdGRvdXQgdG8gZmluZCBydWxlcyB0byBkZWxldGUuIFRoaXMgcGFydCBpcyBwc2V1ZG8tY29kZSBhbmQgbmVlZHMgYWRqdXN0bWVudFxuXHRcdFx0XHRjb25zdCBsaW5lcyA9IHN0ZG91dC5zcGxpdCgnXFxuJyk7XG5cdFx0XHRcdGNvbnN0IHJ1bGVOdW1iZXJzID0gW107XG5cdFx0XHRcdGxpbmVzLmZvckVhY2gobGluZSA9PiB7XG5cdFx0XHRcdFx0aWYgKGxpbmUuaW5jbHVkZXMoJ3d3YW4wJykgJiYgbGluZS5pbmNsdWRlcygnTUFDJykpIHtcblx0XHRcdFx0XHRcdC8vIEV4dHJhY3QgdGhlIHJ1bGUgbnVtYmVyIGZyb20gdGhlIGxpbmVcblx0XHRcdFx0XHRcdGNvbnN0IHJ1bGVOdW1iZXIgPSBsaW5lLnNwbGl0KCcgJylbMF07IC8vIFRoaXMgaXMgYSBzaW1wbGlmaWNhdGlvblxuXHRcdFx0XHRcdFx0cnVsZU51bWJlcnMucHVzaChydWxlTnVtYmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBydWxlcyBieSB0aGVpciBudW1iZXJzLCBzdGFydGluZyBmcm9tIHRoZSBoaWdoZXN0IG51bWJlclxuXHRcdFx0XHRydWxlTnVtYmVycy5zb3J0KChhLCBiKSA9PiBiIC0gYSkuZm9yRWFjaChydWxlTnVtYmVyID0+IHtcblx0XHRcdFx0XHRjbWQoYHN1ZG8gaXB0YWJsZXMgLUQgRk9SV0FSRCAke3J1bGVOdW1iZXJ9YCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHJlbW92aW5nIHJ1bGUgJHtydWxlTnVtYmVyfTogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0XHRcdC8vIE9wdGlvbmFsbHksIHN0b3AgdGhlIHByb2Nlc3Mgb3IgY29udGludWUgYXR0ZW1wdGluZyB0byByZW1vdmUgb3RoZXIgcnVsZXNcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYFJ1bGUgJHtydWxlTnVtYmVyfSByZW1vdmVkIHN1Y2Nlc3NmdWxseS5gKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gQWZ0ZXIgYWxsIHJ1bGVzIGhhdmUgYmVlbiBwcm9jZXNzZWQsIHNhdmUgdGhlIGlwdGFibGVzIHJ1bGVzXG5cdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3Igc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdpcHRhYmxlcyBydWxlcyB1cGRhdGVkIGFuZCBzYXZlZC4nKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsICdBbGwgTUFDIGZpbHRlciBydWxlcyBmb3IgV1dBTiByZW1vdmVkIGFuZCBjaGFuZ2VzIHNhdmVkLicpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3JlYm9vdCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZCgnc3VkbyByZWJvb3QnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0ICBjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0XHQgIHJldHVybjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdzaHV0ZG93bic6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZCgnc3VkbyBoYWx0JywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdCAgY29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHRcdFx0ICByZXR1cm47XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnc3luY2hyb25pemUnOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0Y29uc29sZS5sb2coXCJTdGFydGluZyBzeW5jLi4uXCIpO1xuXG5cdFx0XHR2YXIgZGV2aWNlU2VyaWFsID0gTWV0ZW9yLnNldHRpbmdzLnB1YmxpYy5zZXJpYWw7XG5cdFx0XHR2YXIgZGV2aWNlVG9rZW4gPSBNZXRlb3Iuc2V0dGluZ3MubW9vZGxlQVBJVG9rZW47XG5cdFx0XHR2YXIgdXJsID0gTWV0ZW9yLnNldHRpbmdzLmNsb3VkVVJMICsgXCIvYXBpL3N0YXJ0U3luY1wiO1xuXHRcdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0J2RldmljZVNlcmlhbCc6IGRldmljZVNlcmlhbCxcblx0XHRcdFx0XHQnZGV2aWNlVG9rZW4nOiBkZXZpY2VUb2tlblxuXHRcdFx0XHR9LFxuXHRcdFx0ICAgIG5wbVJlcXVlc3RPcHRpb25zOiB7XG5cdFx0XHQgICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsIC8vIFRPRE8gcmVtb3ZlIHdoZW4gZGVwbG95XG5cdFx0XHQgICAgICAgIHRpbWVvdXQ6IDEyMDAwMDBcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgIHRpbWVvdXQ6IDEyMDAwMDBcblx0XHRcdH1cblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vdmFyIHJlc3VsdCA9IEhUVFAuY2FsbCgnUE9TVCcsIHVybCwgb3B0aW9ucyk7XG5cblx0XHRcdFx0dmFyIHJlc3VsdCA9IEhUVFAucG9zdCggdXJsLCBvcHRpb25zICk7XG5cdFx0XHRcdHZhciByZXN1bHRDb250ZW50ID0gcmVzdWx0LmNvbnRlbnQ7XG5cdFx0XHRcdC8vU3luY2hyb25pemF0aW9ucy5pbnNlcnQoe2RhdGU6RGF0ZS5ub3coKX0pO1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0Q29udGVudDtcblx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyggXCJFcnJvciB3aGlsZSB0cnlpbmcgdG8gc3luY3Jvbml6ZS4uLlwiLCBlICk7XG5cdFx0XHRcdHJldHVybiBcIkVycm9yIHdoaWxlIHRyeWluZyB0byBzeW5jcm9uaXplLi4uIFwiKyBlO1xuXHRcdFx0fVxuXHRcdC8vcmV0dXJuIHJlc3VsdENvbnRlbnQ7XG5cdFx0fSxcblx0fSk7XG59XG59KTsiLCIvLyBNZXRlb3IucHVibGlzaCgnYWxsQXBwcycsIGZ1bmN0aW9uKCkge1xuLy8gXHRyZXR1cm4gQXBwcy5maW5kKHt9KTtcbi8vIH0pO1xuXG4vLyBNZXRlb3IucHVibGlzaChcInVzZXJzXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCh7fSwge2ZpZWxkczp7Y3JlYXRlZEF0OiB0cnVlLCBwcm9maWxlOiB0cnVlLCBlbWFpbHM6IHRydWUsIHVzZXJuYW1lOiB0cnVlfX0pO1xuLy8gfSk7XG5cblxuICBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgfSk7IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5cbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvYXBwcy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS91c2Vycy5qcyc7XG5cbmltcG9ydCAnLi4vc2VydmVyL2ZpeHR1cmVzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL21ldGhvZHMuanMnO1xuaW1wb3J0ICcuLi9zZXJ2ZXIvcHVibGljYXRpb25zLmpzJztcbmltcG9ydCAnLi4vbGliL2FwcF9sb2FkZXIuanMnO1xuXG5cbi8vaW1wb3J0IHtERFB9IGZyb20gJ21ldGVvci9kZHAnO1xuLy9pbXBvcnQge0FjY291bnRzfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSc7XG5cblxuLy8gaW1wb3J0ICcuLi9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2ZpeHR1cmVzLmpzJztcblxuLy8gaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9maXh0dXJlcy5qcyc7XG5cblxuTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuXHRjb25zb2xlLmxvZyhcIm1ldGVvciBzdGFydGVkLi4uXCIpO1xuXG5cblxuICAvLyBjb2RlIHRvIHJ1biBvbiBzZXJ2ZXIgYXQgc3RhcnR1cFxuXG4gLy8gIFNlcnZlcjIgPSBERFAuY29ubmVjdChcImh0dHA6Ly9iZWVrZWUuYm94OjgzXCIpO1xuXHQvLyBBY2NvdW50cy5jb25uZWN0aW9uID0gU2VydmVyMjtcblx0Ly8gY29uc29sZS5sb2coXCJvbiBjb25uZWN0ZS4uLlwiKTtcbn0pO1xuIl19
