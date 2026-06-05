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
        return {
          interfaceName: interfaceName,
          ipAddress: validInternetInterface ? getInterfaceIPAddressFromSystem(interfaceName) : 'Unavailable',
          macAddress: validInternetInterface ? getInterfaceMACAddressFromSystem(interfaceName) : 'Unavailable'
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS93aWZpQ2xpZW50TW9kZVN0YXRlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiYWRkQ2xhc3MiLCJmYWRlT3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnQiLCJBcHBzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJhbGxvdyIsImluc2VydCIsInVwZGF0ZSIsInVzZXJJZCIsInNwYWNlIiwicHVibGlzaCIsImFwcHNQdWJsaWNhdGlvbiIsImZpbmQiLCJTeW5jaHJvbml6YXRpb25zIiwic3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uIiwiaXNBZG1pbiIsImNvbnNvbGUiLCJsb2ciLCJSb2xlcyIsInVzZXJJc0luUm9sZSIsInVzZXIiLCJyb2xlQXNzaWdubWVudCIsInJlYWR5IiwiV2lmaUNsaWVudE1vZGVTdGF0ZSIsIndpZmlDbGllbnRNb2RlU3RhdGVQdWJsaWNhdGlvbiIsIl9pZCIsImNyZWF0ZVJvbGUiLCJ1bmxlc3NFeGlzdHMiLCJ1c2VycyIsImNvdW50IiwiYWRtaW5QYXNzd29yZCIsInNldHRpbmdzIiwidXNlcm5hbWUiLCJyb2xlcyIsIl8iLCJlYWNoIiwiaWQiLCJBY2NvdW50cyIsImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJvZmlsZSIsIm5hbWUiLCJsZW5ndGgiLCJhZGRVc2Vyc1RvUm9sZXMiLCJkZWZhdWx0QXBwcyIsImN1c3RvbUFwcCIsIm9ubHlUZWFjaGVyIiwib3JkZXIiLCJkb2NfdXNlciIsImRvY19hZG1pbiIsImxhc3RfdmVyc2lvbiIsInVybCIsImljb24iLCJkZXNjcmlwdGlvbiIsImluc3RhbGxlZCIsInZlcnNpb24iLCJoaWRkZW4iLCJIVFRQIiwiZnMiLCJOcG0iLCJyZXF1aXJlIiwiZXhlYyIsImNtZCIsIndyYXBBc3luYyIsIndpZmlTZXR0aW5nc1BhdGgiLCJjb25maWdQYXRoIiwic2NyaXB0c1BhdGgiLCJ3aWZpQ2xpZW50RW5hYmxlU2NyaXB0TmFtZSIsIndpZmlDbGllbnREaXNhYmxlU2NyaXB0TmFtZSIsIndpZmlDbGllbnRNb2RlU3RhdGVQYXRoIiwicmVhZGxpbmUiLCJzaGVsbEVzY2FwZSIsInZhbHVlIiwiU3RyaW5nIiwicmVwbGFjZSIsInJlc29sdmVTY3JpcHRQYXRoIiwic2NyaXB0TmFtZSIsInJlYWRXaWZpQ2xpZW50TW9kZVN0YXRlIiwiZXhpc3RzU3luYyIsInN0YXRlIiwicmVhZEZpbGVTeW5jIiwidHJpbSIsImVycm9yIiwid3JpdGVXaWZpQ2xpZW50TW9kZVN0YXRlIiwiZW5hYmxlZCIsIndyaXRlRmlsZVN5bmMiLCJwZXJzaXN0V2lmaUNsaWVudE1vZGVTdGF0ZSIsInVwc2VydCIsIiRzZXQiLCJ1cGRhdGVkQXQiLCJEYXRlIiwiZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0iLCJoYXNXbGFuVXNiIiwidG9TdHJpbmciLCJoYXNBcEFkZHJlc3MiLCJkZXRlY3RXaWZpQ2xpZW50TW9kZUZyb21TeXN0ZW0iLCJubVN0YXRlIiwidGVzdCIsImdldFdpZmlDbGllbnRNb2RlU3RhdGUiLCJkZXRlY3RlZFN0YXRlIiwiZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkIiwiRXJyb3IiLCJnZXRDbGllbnRTU0lERnJvbVN5c3RlbSIsInNzaWQiLCJnZXRDbGllbnRCU1NJREZyb21TeXN0ZW0iLCJic3NpZCIsInRvVXBwZXJDYXNlIiwiZ2V0Q2xpZW50Q29ubmVjdGlvbkluZm9Gcm9tU3lzdGVtIiwid2FpdCIsIm1pbGxpc2Vjb25kcyIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2V0SW50ZXJuZXRJbnRlcmZhY2VGcm9tU3lzdGVtIiwicmVzIiwiZ2V0SW50ZXJmYWNlSVBBZGRyZXNzRnJvbVN5c3RlbSIsImludGVyZmFjZU5hbWUiLCJnZXRJbnRlcmZhY2VNQUNBZGRyZXNzRnJvbVN5c3RlbSIsIndhaXRGb3JDbGllbnRTU0lEIiwiZXhwZWN0ZWRTU0lEIiwidGltZW91dE1pbGxpc2Vjb25kcyIsImRlYWRsaW5lIiwibm93IiwiZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzV2lmaUNsaWVudEZyb21TeXN0ZW0iLCJzdGF0dXMiLCJtYWNBZGRyZXNzIiwibGlzdEZvcndhcmRSdWxlc0NvbW1hbmQiLCJsaXN0TmF0UnVsZXNDb21tYW5kIiwiZm9yd2FyZFJlc3VsdCIsIm5hdFJlc3VsdCIsInNoYXJpbmdGcm9tV2xhbmludFRvV2xhbnVzYiIsImluY2x1ZGVzIiwic2hhcmluZ1RvV2xhbmludEZyb21XbGFudXNiRXN0YWJsaXNoZWQiLCJuYXRGb3JXbGFuaW50IiwiZW5hYmxlSW50ZXJuZXRTaGFyaW5nV2lmaUNsaWVudEluU3lzdGVtIiwiaXB0YWJsZXNDb21tYW5kcyIsImpvaW4iLCJkaXNhYmxlSW50ZXJuZXRTaGFyaW5nV2lmaUNsaWVudEluU3lzdGVtIiwiaXB0YWJsZXNEZWxldGVDb21tYW5kcyIsImV4ZWN1dGVBbmRSZXBlYXQiLCJjb21tYW5kIiwiZm9yRWFjaCIsImdldENhcHRpdmVQb3J0YWxTdGF0dXNGcm9tU3lzdGVtIiwiZGV0ZWN0ZWQiLCJyZXNwb25zZSIsInN0YXR1c01hdGNoIiwibWF0Y2giLCJsb2NhdGlvbk1hdGNoIiwiZWZmZWN0aXZlVXJsTWF0Y2giLCJzdGF0dXNDb2RlIiwicGFyc2VJbnQiLCJlZmZlY3RpdmVVcmwiLCJydW5XaWZpTW9kZVNjcmlwdCIsInNjcmlwdFBhdGgiLCJtZXRob2RzIiwiYWRtaW5JZCIsIm5ld1Bhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjaGVjayIsIm9sZGVtYWlsIiwiZW1haWxzIiwiZW1haWxSZWciLCJyZW1vdmVFbWFpbCIsImFkZHJlc3MiLCJhZGRFbWFpbCIsInJlc3VsdCIsIm1lc3NhZ2UiLCJyZW1vdmVVc2Vyc0Zyb21Sb2xlcyIsInN0b3JhZ2VVc2FnZSIsInRvRml4ZWQiLCJzdG9yYWdlVG90YWwiLCJwZXJjZW50YWdlIiwiZGF0YSIsIlJlZ0V4cCIsIlNTSUQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJuZXdTU0lEIiwiZW5jb2RlZE5ld1NTSUQiLCJCdWZmZXIiLCJuZXdEYXRhIiwiY2hhbm5lbCIsIm5ld0NoYW5uZWwiLCJzZXJpYWwiLCJvcGVyYXRvck5hbWUiLCJzaWduYWxTdHJlbmd0aCIsInN0cmVuZ3RoVmFsdWUiLCJxdWFsaXR5IiwiQVBOIiwiQVBOVXNlciIsIkFQTlBhc3N3b3JkIiwic2ltU3RhdHVzUmVzdWx0IiwiZXhlY3V0ZUNvbW1hbmQiLCJzaW1TdGF0dXMiLCJTaW1QaW4iLCJQSU4iLCJpc1NoYXJpbmciLCJyZXMyIiwiaXNPbmxpbmUiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwidmFsaWRJbnRlcm5ldEludGVyZmFjZSIsImlwQWRkcmVzcyIsInJlYXNvbiIsIndpZmkiLCJpbml0IiwiaWZhY2UiLCJyZWplY3QiLCJzY2FuIiwibmV0d29ya3MiLCJ1bmlxdWVOZXR3b3JrcyIsIk1hcCIsIm5ldHdvcmsiLCJzdHJlbmd0aCIsIm1hYyIsImtleSIsImhhcyIsImdldCIsInNldCIsInNlY3VyaXR5IiwidW5pcXVlTmV0d29ya3NBcnJheSIsIkFycmF5IiwiZnJvbSIsInZhbHVlcyIsImN1cnJlbnRDb25uZWN0aW9uSW5mbyIsImNvbm5lY3Rpb25Db25maWciLCJkaXNjb25uZWN0IiwiY29ubmVjdFJlc3VsdCIsImNvbm5lY3QiLCJpc1ZlcmlmaWVkIiwiZGVsZXRlQ29ubmVjdGlvbiIsInNoYXJpbmdGcm9tV2xhbmludFRvRXRoIiwic2hhcmluZ0Zyb21XbGFudXNiVG9FdGgiLCJzaGFyaW5nVG9XbGFuaW50RnJvbUV0aEVzdGFibGlzaGVkIiwic2hhcmluZ1RvV2xhbnVzYkZyb21FdGhFc3RhYmxpc2hlZCIsIm5hdEZvcldsYW51c2IiLCJjYWxsYmFjayIsInN0ZG91dCIsInN0ZGVyciIsImRvbmVDYWxsYmFjayIsInRhc2tzQ29tcGxldGVkIiwiYWxsb3dNYWNDb21tYW5kIiwiYmxvY2tPdGhlcnNDb21tYW5kIiwibGluZXMiLCJzcGxpdCIsInJ1bGVOdW1iZXJzIiwicmVkdWNlIiwiYWNjIiwibGluZSIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJydWxlTnVtYmVyIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInJlbW92ZUVycm9yIiwicmVtb3ZlU3Rkb3V0IiwicmVtb3ZlU3RkZXJyIiwic2F2ZUVycm9yIiwic2F2ZVN0ZG91dCIsInNhdmVTdGRlcnIiLCJzaGFyaW5nRnJvbVdsYW5pbnRUb1d3YW4iLCJzaGFyaW5nRnJvbVdsYW51c2JUb1d3YW4iLCJzaGFyaW5nVG9XbGFuaW50RnJvbVd3YW5Fc3RhYmxpc2hlZCIsInNoYXJpbmdUb1dsYW51c2JGcm9tV3dhbkVzdGFibGlzaGVkIiwiZGV2aWNlU2VyaWFsIiwicHVibGljIiwiZGV2aWNlVG9rZW4iLCJtb29kbGVBUElUb2tlbiIsImNsb3VkVVJMIiwib3B0aW9ucyIsImhlYWRlcnMiLCJucG1SZXF1ZXN0T3B0aW9ucyIsInJlamVjdFVuYXV0aG9yaXplZCIsInRpbWVvdXQiLCJwb3N0IiwicmVzdWx0Q29udGVudCIsImNvbnRlbnQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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SixNQUFNLENBQUNJLElBQVAsQ0FBWSwyQkFBWjtBQUF5Q0osTUFBTSxDQUFDSSxJQUFQLENBQVksc0JBQVo7QUFZalQ7QUFDQTtBQUdBO0FBRUE7QUFHQW5CLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlLE1BQU07QUFDcEJ5QixTQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQURvQixDQUtuQjtBQUVEO0FBQ0E7QUFDQTtBQUNBLENBVkQsRSIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXHRJbmplY3QucmF3SGVhZChcIm1ldGFMb2FkZXJcIiwgJzxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT0wLCB3aWR0aD1kZXZpY2Utd2lkdGgsIGhlaWdodD1kZXZpY2UtaGVpZ2h0XCIvPjxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiPlx0PG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCI+Jyk7XG5cblx0SW5qZWN0LnJhd0JvZHkoXCJodG1sTG9hZGVyXCIsIEFzc2V0cy5nZXRUZXh0KCdhcHBfbG9hZGVyLmh0bWwnKSk7XG59XG5cbmlmIChNZXRlb3IuaXNDbGllbnQpIHtcblx0TWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24oKSB7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQkKCcuaW5kZXgtLWljb24nKS5hZGRDbGFzcygnYW5pbWF0ZWQtaWNvbicpO1xuXG5cdFx0XHQkKFwiI2luamVjdC1sb2FkZXItd3JhcHBlclwiKS5mYWRlT3V0KDUwMCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdCQoJy5pbmRleC0taWNvbicpLnJlbW92ZUNsYXNzKCdhbmltYXRlZC1pY29uJyk7XG5cdFx0fSk7XG5cdFx0fSwgNTAwKTtcblx0fSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuIFxuZXhwb3J0IGNvbnN0IEFwcHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignaG9tZS1hcHBzJyk7XG5cblxuXG5BcHBzLmFsbG93KHtcblxuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHVwZGF0ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gdHJ1ZX0sXG5cdHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gdHJ1ZX0sXG5cblx0Ly8gaW5zZXJ0OiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHVwZGF0ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyByZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH1cbn0pO1xuXG4vLyBQdWJsaWNhdGlvbnNcblxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbEFwcHMnLCBmdW5jdGlvbiBhcHBzUHVibGljYXRpb24oKSB7XG4gICAgcmV0dXJuIEFwcHMuZmluZCgpO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgU3luY2hyb25pemF0aW9ucyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdob21lLXN5bmNocm9uaXphdGlvbnMnKTtcblxuXG5cblN5bmNocm9uaXphdGlvbnMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0dXBkYXRlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cblx0Ly8gaW5zZXJ0OiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHVwZGF0ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyByZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH1cbn0pO1xuXG4vLyBQdWJsaWNhdGlvbnNcblxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbFN5bmNocm9uaXphdGlvbnMnLCBmdW5jdGlvbiBzeW5jaHJvbml6YXRpb25zUHVibGljYXRpb24oKSB7XG4gICAgcmV0dXJuIFN5bmNocm9uaXphdGlvbnMuZmluZCgpO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5cbi8vIHZhciB1c2Vyc0RCXHQ9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vLyB2YXIgY29sbGVjdGlvblx0PSB1c2Vyc0RCLm9wZW4oJ3VzZXJzJyk7XG5cblxuLy9jb25zdCBkYXRhYmFzZSA9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vL2NvbnN0IGNvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vZXhwb3J0IGNvbnN0IFVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vLyBTaGFyaW5nIHRoZSBzYW1lIEFjY291bnQgY29sbGVjdGlvbiB0aGFuIGJlZWtlZS1saXZlXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0Ly8gY2hlY2sgdGhhdCB0aGUgdXNlcklkIHNwZWNpZmllZCBpcyBhZG1pblxuaXNBZG1pbiA9IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRjb25zb2xlLmxvZyhcImlzYWRtaW5cIik7XG4gIHJldHVybiBSb2xlcy51c2VySXNJblJvbGUoTWV0ZW9yLnVzZXIoKSwgJ2FkbWluJyk7XG59XG5cblxuLy8gUHVibGlzaCBSb2xlcyB0byBjbGllbnRcbk1ldGVvci5wdWJsaXNoKG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgcmV0dXJuIE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKHsgJ3VzZXIuX2lkJzogdGhpcy51c2VySWQgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5yZWFkeSgpXG4gIH1cbn0pO1xuXG5NZXRlb3IucHVibGlzaChudWxsLCBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoKTtcblxufSk7XG5cbiAgLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICAvLyBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gIC8vICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIC8vIH0pO1xuXG4vLyBTZXJ2ZXIyID0gRERQLmNvbm5lY3QoXCJodHRwOi8vYmVla2VlLmJveDo4M1wiKTtcbi8vIEFjY291bnRzLmNvbm5lY3Rpb24gPSBTZXJ2ZXIyO1xuXG5cbi8vdmFyIGRhdGFiYXNlID0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vTWV0ZW9yLnVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vL2V4cG9ydCBjb25zdCBVc2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdhcHBzJyk7XG5cblxuICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcbiAgLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICAvLyBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gIC8vICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIC8vIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuZXhwb3J0IGNvbnN0IFdpZmlDbGllbnRNb2RlU3RhdGUgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignd2lmaUNsaWVudE1vZGVTdGF0ZScpO1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cdE1ldGVvci5wdWJsaXNoKCd3aWZpQ2xpZW50TW9kZVN0YXRlJywgZnVuY3Rpb24gd2lmaUNsaWVudE1vZGVTdGF0ZVB1YmxpY2F0aW9uKCkge1xuXHRcdHJldHVybiBXaWZpQ2xpZW50TW9kZVN0YXRlLmZpbmQoeyBfaWQ6ICd3aWZpLWNsaWVudC1tb2RlLXN0YXRlJyB9KTtcblx0fSk7XG59XG4iLCJpbXBvcnQgeyBBcHBzIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvYXBwcy5qcyc7XG5cblx0Ly8gQ3JlYXRlIHRoZSByb2xlc1xuXHRSb2xlcy5jcmVhdGVSb2xlKCdtYW5hZ2VyJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXG5cbi8vICMjIyAgQ3JlYXRlIGFkbWluIHVzZXIgYXQgZmlyc3Qgc3RhcnQgICMjI1xuXG5cbmlmIChNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblx0XG5cdC8vIENyZWF0ZSB0aGUgcm9sZVxuXHRSb2xlcy5jcmVhdGVSb2xlKCdtYW5hZ2VyJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXHRSb2xlcy5jcmVhdGVSb2xlKCdhZG1pbicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblxuXHR2YXIgYWRtaW5QYXNzd29yZCA9IE1ldGVvci5zZXR0aW5ncy5hZG1pblBhc3N3b3JkO1xuXG5cdHZhciB1c2VycyA9IFtcblx0XHR7dXNlcm5hbWU6XCJhZG1pblwiLHJvbGVzOlsnYWRtaW4nXX0sXG5cdF07XG5cblx0Xy5lYWNoKHVzZXJzLCBmdW5jdGlvbiAodXNlcikge1xuXHRcdHZhciBpZDtcblx0XHRpZCA9IEFjY291bnRzLmNyZWF0ZVVzZXIoe1xuXHRcdFx0dXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG5cdFx0XHRlbWFpbDogXCJBZG1pblwiLFxuXHRcdFx0cGFzc3dvcmQ6IGFkbWluUGFzc3dvcmQsXG5cdFx0XHRwcm9maWxlOntuYW1lOlwiQWRtaW5cIn1cblx0XHR9KTtcblxuXHRcdGlmICh1c2VyLnJvbGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyhpZCwgdXNlci5yb2xlcyk7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG5pZiAoQXBwcy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuXG5cdHZhciBkZWZhdWx0QXBwcyA9IFtcblx0XHR7bmFtZTpcIkxpdmVcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MywgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL2xpdmUuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLWxpdmUucG5nXCIsIGRlc2NyaXB0aW9uOlwiQmVla2VlIExpdmUgcHJvbW90ZSByZWFsLXRpbWUgaW50ZXJhY3Rpb24gYnkgYWxsb3dpbmcgbGVhcm5lcnMgdG8gZXhwcmVzcyB0aGVtc2VsdmVzIGFza2luZyBxdWVzdGlvbnMsIHBvc3RpbmcgcGhvdG9zIG9yIHNoYXJpbmcgZmlsZXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjEuNFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiUmVzb3VyY2VzXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjcsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly9yZXNvdXJjZXMuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXJlc291cmNlcy5wbmdcIiwgZGVzY3JpcHRpb246XCJXaXRoIEJlZWtlZSBSZXNvdXJjZXMsIHlvdSBjYW4gZWFzaWx5IHNoYXJlIGZpbGVzIHdpdGggeW91ciBsZWFybmVycy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJXaGVlbFwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOnRydWUsIG9yZGVyOjksIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjAuN1wiLCB1cmw6XCJodHRwOi8vd2hlZWwuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXdoZWVsLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBXaGVlbCBpcyBhIHNpbXBsZSByYW5kb20gcGlja2VyIHdoZWVsIHRoYXQgYWxsb3cgeW91IHRvIHBpY2sgdXAgYSByYW5kb20gbmFtZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC44XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJUaW1lclwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo4LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vdGltZXIuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXRpbWVyLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBUaW1lciBpcyBhIHNpbXBsZSB0aW1lciB0aGF0IGxldHMgeW91ciBsZWFybmVycyBrbm93IGhvdyBtdWNoIHRpbWUgdGhleSBoYXZlIGxlZnQuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiTW9vZGxlXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MSwgZG9jX3VzZXI6XCJtb29kbGVfdGVhY2hlcmRvYy5wZGZcIiwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vbW9vZGxlLmJlZWtlZS5ib3hcIiwgaWNvbjpcIm1vb2RsZS5wbmdcIiwgZGVzY3JpcHRpb246XCJNb29kbGUgaXMgYSBmcmVlLCBvbmxpbmUgTGVhcm5pbmcgTWFuYWdlbWVudCBzeXN0ZW0gZW5hYmxpbmcgZWR1Y2F0b3JzIHRvIGNyZWF0ZSB0aGVpciBvd24gcHJpdmF0ZSB3ZWJzaXRlIGZpbGxlZCB3aXRoIGR5bmFtaWMgY291cnNlcyB0aGF0IGV4dGVuZCBsZWFybmluZywgYW55IHRpbWUsIGFueXdoZXJlLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIzLjExLjJcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIktvbGlicmlcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjoyLCBkb2NfdXNlcjpcImtvbGlicmlfdXNlcmRvYy5wZGZcIiwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8va29saWJyaS5iZWVrZWUuYm94XCIsIGljb246XCJrb2xpYnJpLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIktvbGlicmkgaXMgYW4gb3Blbi1zb3VyY2UgZWR1Y2F0aW9uYWwgcGxhdGZvcm0gc3BlY2lhbGx5IGRlc2lnbmVkIHRvIHByb3ZpZGUgb2ZmbGluZSBhY2Nlc3MgdG8gYSB3aWRlIHJhbmdlIG9mIHF1YWxpdHksIG9wZW5seSBsaWNlbnNlZCBlZHVjYXRpb25hbCByZXNvdXJjZXMgaW4gbG93LXJlc291cmNlIGNvbnRleHRzIGxpa2UgcnVyYWwgc2Nob29scywgcmVmdWdlZSBjYW1wcywgb3JwaGFuYWdlcywgYW5kIGFsc28gaW4gbm9uLWZvcm1hbCBzY2hvb2wgcHJvZ3JhbXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMTQuN1wiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdC8vIHtuYW1lOlwiRXRoZXJwYWRcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo1LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vZXRoZXJwYWQuYmVla2VlLmJveFwiLCBpY29uOlwiZXRoZXJwYWQucG5nXCIsIGRlc2NyaXB0aW9uOlwiRXRoZXJwYWQgYWxsb3dzIHlvdSB0byBlZGl0IGRvY3VtZW50cyBjb2xsYWJvcmF0aXZlbHkgaW4gcmVhbC10aW1lLCBtdWNoIGxpa2UgYSBsaXZlIG11bHRpLXBsYXllciBlZGl0b3IgdGhhdCBydW5zIGluIHlvdXIgYnJvd3Nlci4gV3JpdGUgYXJ0aWNsZXMsIHByZXNzIHJlbGVhc2VzLCB0by1kbyBsaXN0cywgZXRjLiB0b2dldGhlciB3aXRoIHlvdXIgZnJpZW5kcywgZmVsbG93IHN0dWRlbnRzIG9yIGNvbGxlYWd1ZXMsIGFsbCB3b3JraW5nIG9uIHRoZSBzYW1lIGRvY3VtZW50IGF0IHRoZSBzYW1lIHRpbWUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjEuOC4xNFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiU3Rvcm1cIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo0LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vc3Rvcm0uYmVla2VlLmJveFwiLCBpY29uOlwic3Rvcm0ucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGFuZCBhbmltYXRlIGxpdmUgc3VydmV5cywgYnJhaW5zdG9ybXMgYW5kIHF1aXp6ZXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuNC41XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJQYWRcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo1LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vcGFkLmJlZWtlZS5ib3hcIiwgaWNvbjpcInBhZC5wbmdcIiwgZGVzY3JpcHRpb246XCJDcmVhdGUgY29sbGFib3JhdGl2ZSB3YWxscyB0byBzaGFyZSBhbmQgb3JnYW5pemUgY29udGVudC5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC44LjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIkJ1enplclwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6dHJ1ZSwgb3JkZXI6NiwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2J1enplci5iZWVrZWUuYm94XCIsIGljb246XCJidXp6ZXIucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGEgdmlydHVhbCBnYW1pbmcgcm9vbSBhcm91bmQgYSBjb25uZWN0ZWQgYnV6emVyLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjIuNFwiLCBoaWRkZW46ZmFsc2V9LFxuXG5cdF07XG5cblx0Xy5lYWNoKGRlZmF1bHRBcHBzLCBmdW5jdGlvbiAoZGVmYXVsdEFwcHMpIHtcblx0XHRBcHBzLmluc2VydChkZWZhdWx0QXBwcyk7XG5cdH0pO1xufSIsImltcG9ydCB7IEhUVFAgfSBmcm9tICdtZXRlb3IvaHR0cCdcbmltcG9ydCB7IFdpZmlDbGllbnRNb2RlU3RhdGUgfSBmcm9tICcuLi9pbXBvcnRzL2FwaS93aWZpQ2xpZW50TW9kZVN0YXRlLmpzJztcblxuTWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24oKSB7XG5cblx0aWYgKE1ldGVvci5pc1NlcnZlcikge1xuXG5cdHZhciBmcyA9IE5wbS5yZXF1aXJlKCdmcycpO1xuXHRleGVjID0gTnBtLnJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5leGVjO1xuXHRjbWQgPSBNZXRlb3Iud3JhcEFzeW5jKGV4ZWMpO1xuXG5cdHZhciB3aWZpU2V0dGluZ3NQYXRoID0gTWV0ZW9yLnNldHRpbmdzLndpZmlTZXR0aW5nc1BhdGg7XG5cdHZhciBjb25maWdQYXRoID0gTWV0ZW9yLnNldHRpbmdzLmNvbmZpZ1BhdGg7XG5cdHZhciBzY3JpcHRzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5zY3JpcHRzUGF0aCB8fCAnL2hvbWUvYmVla2VlL3NjcmlwdHMnO1xuXHR2YXIgd2lmaUNsaWVudEVuYWJsZVNjcmlwdE5hbWUgPSAnc3dpdGNoX3dpZmlfdG9fY2xpZW50LnNoJztcblx0dmFyIHdpZmlDbGllbnREaXNhYmxlU2NyaXB0TmFtZSA9ICdzd2l0Y2hfd2lmaV90b19hcC5zaCc7XG5cdHZhciB3aWZpQ2xpZW50TW9kZVN0YXRlUGF0aCA9IE1ldGVvci5zZXR0aW5ncy53aWZpQ2xpZW50TW9kZVN0YXRlUGF0aCB8fCBgJHtzY3JpcHRzUGF0aH0vLndpZmktY2xpZW50LW1vZGUtc3RhdGVgO1xuXHRjb25zdCByZWFkbGluZSA9IHJlcXVpcmUoJ3JlYWRsaW5lJyk7XG5cblx0ZnVuY3Rpb24gc2hlbGxFc2NhcGUodmFsdWUpIHtcblx0XHRyZXR1cm4gYCcke1N0cmluZyh2YWx1ZSkucmVwbGFjZSgvJy9nLCBgJ1xcXFwnJ2ApfSdgO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzb2x2ZVNjcmlwdFBhdGgoc2NyaXB0TmFtZSkge1xuXHRcdHJldHVybiBgJHtzY3JpcHRzUGF0aH0vJHtzY3JpcHROYW1lfWA7XG5cdH1cblxuXHRmdW5jdGlvbiByZWFkV2lmaUNsaWVudE1vZGVTdGF0ZSgpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKCFmcy5leGlzdHNTeW5jKHdpZmlDbGllbnRNb2RlU3RhdGVQYXRoKSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3RhdGUgPSBmcy5yZWFkRmlsZVN5bmMod2lmaUNsaWVudE1vZGVTdGF0ZVBhdGgsICd1dGYtOCcpLnRyaW0oKTtcblxuXHRcdFx0aWYgKHN0YXRlID09PSAnZW5hYmxlZCcpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdGF0ZSA9PT0gJ2Rpc2FibGVkJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciByZWFkaW5nIFdpLUZpIGNsaWVudCBtb2RlIHN0YXRlOicsIGVycm9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGZ1bmN0aW9uIHdyaXRlV2lmaUNsaWVudE1vZGVTdGF0ZShlbmFibGVkKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMoXG5cdFx0XHRcdHdpZmlDbGllbnRNb2RlU3RhdGVQYXRoLFxuXHRcdFx0XHRlbmFibGVkID8gJ2VuYWJsZWRcXG4nIDogJ2Rpc2FibGVkXFxuJyxcblx0XHRcdFx0J3V0Zi04J1xuXHRcdFx0KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIHdyaXRpbmcgV2ktRmkgY2xpZW50IG1vZGUgc3RhdGU6JywgZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHBlcnNpc3RXaWZpQ2xpZW50TW9kZVN0YXRlKGVuYWJsZWQpIHtcblx0XHR3cml0ZVdpZmlDbGllbnRNb2RlU3RhdGUoZW5hYmxlZCk7XG5cdFx0V2lmaUNsaWVudE1vZGVTdGF0ZS51cHNlcnQoXG5cdFx0XHR7IF9pZDogJ3dpZmktY2xpZW50LW1vZGUtc3RhdGUnIH0sXG5cdFx0XHR7XG5cdFx0XHRcdCRzZXQ6IHtcblx0XHRcdFx0XHRlbmFibGVkOiBlbmFibGVkID09PSB0cnVlLFxuXHRcdFx0XHRcdHVwZGF0ZWRBdDogbmV3IERhdGUoKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRldGVjdFdpZmlBY2Nlc3NQb2ludE1vZGVGcm9tU3lzdGVtKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBoYXNXbGFuVXNiID0gY21kKCdpcCBsaW5rIHNob3cgd2xhbnVzYiA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2UnKS50b1N0cmluZygpLnRyaW0oKTtcblxuXHRcdFx0aWYgKGhhc1dsYW5Vc2IgIT09ICd0cnVlJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGhhc0FwQWRkcmVzcyA9IGNtZChcImlwIC00IGFkZHIgc2hvdyB3bGFudXNiIHwgZ3JlcCAtcSAnMTBcXFxcLjFcXFxcLjBcXFxcLjEvMjQnICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIpLnRvU3RyaW5nKCkudHJpbSgpO1xuXG5cdFx0XHRyZXR1cm4gaGFzQXBBZGRyZXNzID09PSAndHJ1ZSc7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBkZXRlY3RpbmcgV2ktRmkgYWNjZXNzIHBvaW50IG1vZGUgZnJvbSBzeXN0ZW06JywgZXJyb3IpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGRldGVjdFdpZmlDbGllbnRNb2RlRnJvbVN5c3RlbSgpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGRldGVjdFdpZmlBY2Nlc3NQb2ludE1vZGVGcm9tU3lzdGVtKCkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBoYXNXbGFuVXNiID0gY21kKCdpcCBsaW5rIHNob3cgd2xhbnVzYiA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2UnKS50b1N0cmluZygpLnRyaW0oKTtcblxuXHRcdFx0aWYgKGhhc1dsYW5Vc2IgIT09ICd0cnVlJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG5tU3RhdGUgPSBjbWQoXCJubWNsaSAtdCAtZiBERVZJQ0UsU1RBVEUgZGV2aWNlIHN0YXR1cyAyPi9kZXYvbnVsbCB8IGF3ayAtRjogJyQxPT1cXFwid2xhbnVzYlxcXCIge3ByaW50ICQyOyBleGl0fScgfHwgdHJ1ZVwiKS50b1N0cmluZygpLnRyaW0oKTtcblxuXHRcdFx0cmV0dXJuIC9eKGNvbm5lY3RlZHxkaXNjb25uZWN0ZWR8Y29ubmVjdGluZ3xwcmVwYXJpbmcpLy50ZXN0KG5tU3RhdGUpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgZGV0ZWN0aW5nIFdpLUZpIGNsaWVudCBtb2RlIGZyb20gc3lzdGVtOicsIGVycm9yKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRXaWZpQ2xpZW50TW9kZVN0YXRlKCkge1xuXHRcdGlmIChkZXRlY3RXaWZpQWNjZXNzUG9pbnRNb2RlRnJvbVN5c3RlbSgpKSB7XG5cdFx0XHRwZXJzaXN0V2lmaUNsaWVudE1vZGVTdGF0ZShmYWxzZSk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGV0ZWN0ZWRTdGF0ZSA9IGRldGVjdFdpZmlDbGllbnRNb2RlRnJvbVN5c3RlbSgpO1xuXHRcdHBlcnNpc3RXaWZpQ2xpZW50TW9kZVN0YXRlKGRldGVjdGVkU3RhdGUpO1xuXHRcdHJldHVybiBkZXRlY3RlZFN0YXRlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkKCkge1xuXHRcdGlmICghZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpKSB7XG5cdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCd3aWZpLWNsaWVudC1tb2RlLWRpc2FibGVkJywgJ0VuYWJsZSBXaS1GaSBjbGllbnQgbW9kZSBiZWZvcmUgc2Nhbm5pbmcgb3IgY29ubmVjdGluZy4nKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDbGllbnRTU0lERnJvbVN5c3RlbSgpIHtcblx0XHRsZXQgc3NpZDtcblx0XHR0cnkge1xuXHRcdFx0c3NpZCA9IGNtZCgnaXdnZXRpZCAtciB3bGFudXNiIDI+L2Rldi9udWxsIHx8IHRydWUnKS50cmltKCk7XG5cblx0XHRcdGlmICghc3NpZCkge1xuXHRcdFx0XHRzc2lkID0gY21kKCdubWNsaSAtZyBHRU5FUkFMLkNPTk5FQ1RJT04gZGV2aWNlIHNob3cgd2xhbnVzYiAyPi9kZXYvbnVsbCB8IGhlYWQgLW4gMSB8fCB0cnVlJykudHJpbSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3NpZCA9PT0gJy0tJykge1xuXHRcdFx0XHRzc2lkID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2Ygc3NpZCA9PT0gJ3N0cmluZycgJiYgc3NpZCAhPT0gJycpIHtcblx0XHRcdFx0cmV0dXJuIHNzaWQ7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciByZXRyaWV2aW5nIGNsaWVudCBTU0lEOicsIGVycm9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJ05vdCBjb25uZWN0ZWQnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q2xpZW50QlNTSURGcm9tU3lzdGVtKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBic3NpZCA9IGNtZChcIml3IGRldiB3bGFudXNiIGxpbmsgMj4vZGV2L251bGwgfCBhd2sgJy9Db25uZWN0ZWQgdG8vIHtwcmludCAkMzsgZXhpdH0nIHx8IHRydWVcIikudHJpbSgpO1xuXG5cdFx0XHRpZiAoYnNzaWQgJiYgYnNzaWQgIT09ICdOb3QgY29ubmVjdGVkJykge1xuXHRcdFx0XHRyZXR1cm4gYnNzaWQudG9VcHBlckNhc2UoKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIHJldHJpZXZpbmcgY2xpZW50IEJTU0lEOicsIGVycm9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENsaWVudENvbm5lY3Rpb25JbmZvRnJvbVN5c3RlbSgpIHtcblx0XHRjb25zdCBzc2lkID0gZ2V0Q2xpZW50U1NJREZyb21TeXN0ZW0oKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRzc2lkOiBzc2lkLFxuXHRcdFx0YnNzaWQ6IHNzaWQgPT09ICdOb3QgY29ubmVjdGVkJyA/IG51bGwgOiBnZXRDbGllbnRCU1NJREZyb21TeXN0ZW0oKVxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiB3YWl0KG1pbGxpc2Vjb25kcykge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0c2V0VGltZW91dChyZXNvbHZlLCBtaWxsaXNlY29uZHMpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0SW50ZXJuZXRJbnRlcmZhY2VGcm9tU3lzdGVtKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXMgPSBjbWQoXCJpcCByb3V0ZSBnZXQgMS4yLjMuNCB8IGF3ayAne3ByaW50ICQ1OyBleGl0fSdcIikudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRyZXR1cm4gcmVzIHx8ICdVbmtub3duJztcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIGludGVybmV0IGludGVyZmFjZTpcIiwgZXJyb3IpO1xuXHRcdFx0cmV0dXJuICdFcnJvcic7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0SW50ZXJmYWNlSVBBZGRyZXNzRnJvbVN5c3RlbShpbnRlcmZhY2VOYW1lKSB7XG5cdFx0aWYgKCEvXlthLXpBLVowLTlfLjotXSskLy50ZXN0KGludGVyZmFjZU5hbWUgfHwgJycpKSB7XG5cdFx0XHRyZXR1cm4gJ1VuYXZhaWxhYmxlJztcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzID0gY21kKGBpcCAtNCBhZGRyIHNob3cgJHtzaGVsbEVzY2FwZShpbnRlcmZhY2VOYW1lKX0gfCBhd2sgJy9pbmV0IC8ge3ByaW50ICQyOyBleGl0fScgfCBjdXQgLWQvIC1mMSB8fCB0cnVlYCkudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRyZXR1cm4gcmVzIHx8ICdVbmF2YWlsYWJsZSc7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGBFcnJvciByZXRyaWV2aW5nIElQIGFkZHJlc3MgZm9yICR7aW50ZXJmYWNlTmFtZX06YCwgZXJyb3IpO1xuXHRcdFx0cmV0dXJuICdVbmF2YWlsYWJsZSc7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0SW50ZXJmYWNlTUFDQWRkcmVzc0Zyb21TeXN0ZW0oaW50ZXJmYWNlTmFtZSkge1xuXHRcdGlmICghL15bYS16QS1aMC05Xy46LV0rJC8udGVzdChpbnRlcmZhY2VOYW1lIHx8ICcnKSkge1xuXHRcdFx0cmV0dXJuICdVbmF2YWlsYWJsZSc7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlcyA9IGNtZChgY2F0IC9zeXMvY2xhc3MvbmV0LyR7c2hlbGxFc2NhcGUoaW50ZXJmYWNlTmFtZSl9L2FkZHJlc3MgMj4vZGV2L251bGwgfHwgdHJ1ZWApLnRvU3RyaW5nKCkudHJpbSgpO1xuXHRcdFx0cmV0dXJuIHJlcyA/IHJlcy50b1VwcGVyQ2FzZSgpIDogJ1VuYXZhaWxhYmxlJztcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coYEVycm9yIHJldHJpZXZpbmcgTUFDIGFkZHJlc3MgZm9yICR7aW50ZXJmYWNlTmFtZX06YCwgZXJyb3IpO1xuXHRcdFx0cmV0dXJuICdVbmF2YWlsYWJsZSc7XG5cdFx0fVxuXHR9XG5cblx0XHRhc3luYyBmdW5jdGlvbiB3YWl0Rm9yQ2xpZW50U1NJRChleHBlY3RlZFNTSUQsIHRpbWVvdXRNaWxsaXNlY29uZHMpIHtcblx0XHRcdGNvbnN0IGRlYWRsaW5lID0gRGF0ZS5ub3coKSArIHRpbWVvdXRNaWxsaXNlY29uZHM7XG5cblx0XHRcdHdoaWxlIChEYXRlLm5vdygpIDwgZGVhZGxpbmUpIHtcblx0XHRcdFx0aWYgKGdldENsaWVudFNTSURGcm9tU3lzdGVtKCkgPT09IGV4cGVjdGVkU1NJRCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0YXdhaXQgd2FpdCgxMDAwKTtcblx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNXaWZpQ2xpZW50RnJvbVN5c3RlbSgpIHtcblx0XHRcdGlmICghZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpKSB7XG5cdFx0XHRcdHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcblx0XHRcdHZhciBsaXN0TmF0UnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLXQgbmF0IC1TIFBPU1RST1VUSU5HJztcblxuXHRcdFx0dmFyIGZvcndhcmRSZXN1bHQgPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXHRcdFx0dmFyIG5hdFJlc3VsdCA9IGNtZChsaXN0TmF0UnVsZXNDb21tYW5kKTtcblxuXHRcdFx0aWYgKCFmb3J3YXJkUmVzdWx0KSB7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2NvbW1hbmQtZXhlY3V0aW9uLWVycm9yJywgJ1RoZSBGT1JXQVJEIGNoYWluIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC4nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFuYXRSZXN1bHQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignY29tbWFuZC1leGVjdXRpb24tZXJyb3InLCAnVGhlIFBPU1RST1VUSU5HIGNoYWluIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC4nKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHNoYXJpbmdGcm9tV2xhbmludFRvV2xhbnVzYiA9IGZvcndhcmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd2xhbmludCAtbyB3bGFudXNiIC1qIEFDQ0VQVCcpO1xuXHRcdFx0dmFyIHNoYXJpbmdUb1dsYW5pbnRGcm9tV2xhbnVzYkVzdGFibGlzaGVkID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFudXNiIC1vIHdsYW5pbnQgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcpO1xuXHRcdFx0dmFyIG5hdEZvcldsYW5pbnQgPSBuYXRSZXN1bHQuaW5jbHVkZXMoJy1BIFBPU1RST1VUSU5HIC1zIDEwLjAuMC4wLzI0IC1vIHdsYW51c2IgLWogTUFTUVVFUkFERScpO1xuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdHNoYXJpbmdGcm9tV2xhbmludFRvV2xhbnVzYiAmJlxuXHRcdFx0XHRzaGFyaW5nVG9XbGFuaW50RnJvbVdsYW51c2JFc3RhYmxpc2hlZCAmJlxuXHRcdFx0XHRuYXRGb3JXbGFuaW50XG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBlbmFibGVJbnRlcm5ldFNoYXJpbmdXaWZpQ2xpZW50SW5TeXN0ZW0oKSB7XG5cdFx0XHRlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblxuXHRcdFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgd2xhbmludCAtbyB3bGFudXNiIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd2xhbmludCAtbyB3bGFudXNiIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgd2xhbnVzYiAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIHdsYW51c2IgLW8gd2xhbmludCAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLXQgbmF0IC1DIFBPU1RST1VUSU5HIC1zIDEwLjAuMC4wLzI0IC1vIHdsYW51c2IgLWogTUFTUVVFUkFERSAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC10IG5hdCAtQSBQT1NUUk9VVElORyAtcyAxMC4wLjAuMC8yNCAtbyB3bGFudXNiIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHRcdGNtZChpcHRhYmxlc0NvbW1hbmRzKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGRpc2FibGVJbnRlcm5ldFNoYXJpbmdXaWZpQ2xpZW50SW5TeXN0ZW0oKSB7XG5cdFx0XHR2YXIgaXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSB3bGFudXNiIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbnVzYiAtLW91dC1pbnRlcmZhY2Ugd2xhbmludCAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1zb3VyY2UgMTAuMC4wLjAvMjQgLS1vdXQtaW50ZXJmYWNlIHdsYW51c2IgLWogTUFTUVVFUkFERSdcblx0XHRcdF07XG5cblx0XHRcdGZ1bmN0aW9uIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCkge1xuXHRcdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRjbWQoY29tbWFuZCk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aXB0YWJsZXNEZWxldGVDb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG5cdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldENhcHRpdmVQb3J0YWxTdGF0dXNGcm9tU3lzdGVtKCkge1xuXHRcdFx0Y29uc3Qgc3NpZCA9IGdldENsaWVudFNTSURGcm9tU3lzdGVtKCk7XG5cblx0XHRpZiAoc3NpZCA9PT0gJ05vdCBjb25uZWN0ZWQnKSB7XG5cdFx0XHRyZXR1cm4geyBkZXRlY3RlZDogZmFsc2UsIHVybDogbnVsbCwgc3NpZDogc3NpZCB9O1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGNtZChcblx0XHRcdFx0J2N1cmwgLS1pbnRlcmZhY2Ugd2xhbnVzYiAtcyAtbSA4IC1MIC1EIC0gLW8gL2Rldi9udWxsIC13IFwiXFxcXG5DVVJMX0VGRkVDVElWRV9VUkw6JXt1cmxfZWZmZWN0aXZlfVxcXFxuXCIgaHR0cDovL2Nvbm5lY3Rpdml0eWNoZWNrLmdzdGF0aWMuY29tL2dlbmVyYXRlXzIwNCB8fCB0cnVlJ1xuXHRcdFx0KS50b1N0cmluZygpO1xuXHRcdFx0Y29uc3Qgc3RhdHVzTWF0Y2ggPSByZXNwb25zZS5tYXRjaCgvSFRUUFxcL1swLTkuXStcXHMrKFxcZHszfSkvKTtcblx0XHRcdGNvbnN0IGxvY2F0aW9uTWF0Y2ggPSByZXNwb25zZS5tYXRjaCgvXltMbF1vY2F0aW9uOlxccyooLispJC9tKTtcblx0XHRcdGNvbnN0IGVmZmVjdGl2ZVVybE1hdGNoID0gcmVzcG9uc2UubWF0Y2goL0NVUkxfRUZGRUNUSVZFX1VSTDooLispJC9tKTtcblx0XHRcdGNvbnN0IHN0YXR1c0NvZGUgPSBzdGF0dXNNYXRjaCA/IHBhcnNlSW50KHN0YXR1c01hdGNoWzFdLCAxMCkgOiBudWxsO1xuXHRcdFx0bGV0IHVybCA9IGxvY2F0aW9uTWF0Y2ggPyBsb2NhdGlvbk1hdGNoWzFdLnRyaW0oKSA6IG51bGw7XG5cdFx0XHRjb25zdCBlZmZlY3RpdmVVcmwgPSBlZmZlY3RpdmVVcmxNYXRjaCA/IGVmZmVjdGl2ZVVybE1hdGNoWzFdLnRyaW0oKSA6IG51bGw7XG5cblx0XHRcdGlmICh1cmwgJiYgL15cXC9cXC8vLnRlc3QodXJsKSkge1xuXHRcdFx0XHR1cmwgPSBgaHR0cDoke3VybH1gO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodXJsICYmICEvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KHVybCkpIHtcblx0XHRcdFx0dXJsID0gJ2h0dHA6Ly9uZXZlcnNzbC5jb20nO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodXJsICYmICEvbmV2ZXJzc2xcXC5jb20vaS50ZXN0KHVybCkgJiYgIS9jb25uZWN0aXZpdHljaGVja1xcLmdzdGF0aWNcXC5jb20vaS50ZXN0KHVybCkpIHtcblx0XHRcdFx0cmV0dXJuIHsgZGV0ZWN0ZWQ6IHRydWUsIHVybDogdXJsLCBzc2lkOiBzc2lkLCBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlIH07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChcblx0XHRcdFx0ZWZmZWN0aXZlVXJsICYmXG5cdFx0XHRcdCEvXmh0dHA6XFwvXFwvY29ubmVjdGl2aXR5Y2hlY2tcXC5nc3RhdGljXFwuY29tXFwvZ2VuZXJhdGVfMjA0XFwvPyQvaS50ZXN0KGVmZmVjdGl2ZVVybCkgJiZcblx0XHRcdFx0IS9eaHR0cDpcXC9cXC8oW14vXStcXC4pP25ldmVyc3NsXFwuY29tKFxcL3wkKS9pLnRlc3QoZWZmZWN0aXZlVXJsKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybiB7IGRldGVjdGVkOiB0cnVlLCB1cmw6IGVmZmVjdGl2ZVVybCwgc3NpZDogc3NpZCwgc3RhdHVzQ29kZTogc3RhdHVzQ29kZSB9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3RhdHVzQ29kZSA9PT0gMjA0KSB7XG5cdFx0XHRcdHJldHVybiB7IGRldGVjdGVkOiBmYWxzZSwgdXJsOiBudWxsLCBzc2lkOiBzc2lkLCBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlIH07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBkZXRlY3RpbmcgY2FwdGl2ZSBwb3J0YWw6JywgZXJyb3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiB7IGRldGVjdGVkOiBmYWxzZSwgdXJsOiBudWxsLCBzc2lkOiBzc2lkIH07XG5cdH1cblxuXHRmdW5jdGlvbiBydW5XaWZpTW9kZVNjcmlwdChzY3JpcHROYW1lKSB7XG5cdFx0Y29uc3Qgc2NyaXB0UGF0aCA9IHJlc29sdmVTY3JpcHRQYXRoKHNjcmlwdE5hbWUpO1xuXG5cdFx0aWYgKCFmcy5leGlzdHNTeW5jKHNjcmlwdFBhdGgpKSB7XG5cdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCd3aWZpLWNsaWVudC1tb2RlLXNjcmlwdC1taXNzaW5nJywgYE1pc3NpbmcgV2ktRmkgbW9kZSBzY3JpcHQ6ICR7c2NyaXB0UGF0aH1gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY21kKGB0aW1lb3V0IDQ1cyBiYXNoICR7c2hlbGxFc2NhcGUoc2NyaXB0UGF0aCl9YCk7XG5cdH1cblxuXHRpZiAoZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0oKSkge1xuXHRcdHBlcnNpc3RXaWZpQ2xpZW50TW9kZVN0YXRlKGZhbHNlKTtcblx0fSBlbHNlIHtcblx0XHRwZXJzaXN0V2lmaUNsaWVudE1vZGVTdGF0ZShkZXRlY3RXaWZpQ2xpZW50TW9kZUZyb21TeXN0ZW0oKSk7XG5cdH1cblxuXG5cdE1ldGVvci5tZXRob2RzKHtcblxuXHRcdCdhZG1pblNldE5ld1Bhc3N3b3JkJzogZnVuY3Rpb24oYWRtaW5JZCwgdXNlcklkLCBuZXdQYXNzd29yZCkgeyAvLyBBZG1pbiBjYW4gZm9yY2libHkgY2hhbmdlIHRoZSBwYXNzd29yZCBmb3IgYSB1c2VyXG5cdFx0XHRpZiAoUm9sZXMudXNlcklzSW5Sb2xlKGFkbWluSWQsICdhZG1pbicpKSB7XG5cdFx0XHRcdEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgbmV3UGFzc3dvcmQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2NyZWF0ZUFjY291bnQnOiBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQsIHByb2ZpbGUpIHtcblx0XHRcdHJldHVybiBBY2NvdW50cy5jcmVhdGVVc2VyKHtlbWFpbDplbWFpbCxwYXNzd29yZDpwYXNzd29yZCxwcm9maWxlOnByb2ZpbGV9KTsgLy8gQ2FsbGJhY2sgaXMgbm90IHN1cHBvcnRlZCBvbiBzZXJ2ZXItc2lkZVxuXHRcdH0sXG5cdFx0J2VkaXRBY2NvdW50JzogZnVuY3Rpb24odXNlcklkLCBlbWFpbCwgcGFzc3dvcmQsIHByb2ZpbGUpIHtcblx0XHRcdE1ldGVvci51c2Vycy51cGRhdGUoe19pZDogdXNlcklkfSwge1xuXHQgIFx0XHRcdCRzZXQ6IHtcblx0ICAgIFx0XHRcdCdlbWFpbHMuMC5hZGRyZXNzJzogZW1haWwsXG5cdCAgICBcdFx0XHRwcm9maWxlOiBwcm9maWxlXG5cdCAgXHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRpZiAocGFzc3dvcmQpIHtcblx0XHRcdFx0QWNjb3VudHMuc2V0UGFzc3dvcmQodXNlcklkLCBwYXNzd29yZCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnY2hhbmdlRW1haWwnOiBmdW5jdGlvbihlbWFpbCkge1xuXHRcdFx0dmFyIGVtYWlsID0gZW1haWw7XG5cdFx0XHRjaGVjayhlbWFpbCwgU3RyaW5nKTtcblx0XHRcdHZhciB1c2VyID0gTWV0ZW9yLnVzZXIoKTtcblx0XHRcdHZhciBvbGRlbWFpbCA9IHVzZXIuZW1haWxzO1xuXHRcdFx0dmFyIGVtYWlsUmVnID0gL14oW1xcdy1cXC5dK0AoW1xcdy1dK1xcLikrW1xcdy1dezIsNH0pPyQvO1xuXHRcdFx0aWYgKGVtYWlsUmVnLnRlc3QoZW1haWwpKSB7XG5cdFx0XHRpZihvbGRlbWFpbCAhPSBudWxsKXtcblx0XHRcdCAgQWNjb3VudHMucmVtb3ZlRW1haWwodXNlci5faWQsIHVzZXIuZW1haWxzWzBdLmFkZHJlc3MpXG5cdFx0XHR9XG5cdFx0XHRBY2NvdW50cy5hZGRFbWFpbCh1c2VyLl9pZCwgZW1haWwpO1xuXHRcdFx0cmV0dXJuIGVtYWlsO1xuXHRcdCAgfSBlbHNlXG5cdFx0ICByZXR1cm4gbnVsbFxuXHRcdCB9LFxuXHRcdCdkZWxldGVVc2VyJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRNZXRlb3IudXNlcnMucmVtb3ZlKHVzZXJJZCwgZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGVuIGRlbGV0aW5nIHVzZXIgOiBcIitlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnYWRkTWFuYWdlclJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsICdtYW5hZ2VyJyk7XG5cdFx0fSxcblx0XHQncmVtb3ZlTWFuYWdlclJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLnJlbW92ZVVzZXJzRnJvbVJvbGVzKHVzZXJJZCwgJ21hbmFnZXInKTtcblx0XHR9LFxuXHRcdCdhZGRBZG1pblJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsICdhZG1pbicpO1xuXHRcdH0sXG5cdFx0J3JlbW92ZUFkbWluUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMucmVtb3ZlVXNlcnNGcm9tUm9sZXModXNlcklkLCAnYWRtaW4nKTtcblx0XHR9LFxuXG5cdFx0Ly8gJ2dldFVzZWRTcGFjZSc6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0dmFyIHJlcztcblx0XHQvLyBcdHJlcyA9IGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpICsgXCIvIFwiICsgY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIikgKyBcIiAoXCIrY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIikrXCJ1c2VkKVwiO1xuXHRcdC8vIFx0cmV0dXJuIHJlcztcblx0XHQvLyB9LFxuXHRcdCdydW5Db21tYW5kJzogZnVuY3Rpb24ocGFzc3dvcmQsIGNvbW1hbmQpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJlY2hvIFwiK3Bhc3N3b3JkK1wiIHwgc3VkbyAtUyBcIitjb21tYW5kKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0VXNlZFNwYWNlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzID0ge307XG5cdFx0XHQvL3JlcyA9IGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpICsgXCIvIFwiICsgY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIikgKyBcIiAoXCIrY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIikrXCJ1c2VkKVwiO1xuXHRcdFx0cmVzLnN0b3JhZ2VVc2FnZSA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpXG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gcmVzLnN0b3JhZ2VVc2FnZS8xMDAwMDAwO1xuXHRcdFx0cmVzLnN0b3JhZ2VVc2FnZSA9IHJlcy5zdG9yYWdlVXNhZ2UudG9GaXhlZCgyKTtcblx0XHRcdHJlcy5zdG9yYWdlVG90YWwgPSBjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKVxuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IHJlcy5zdG9yYWdlVG90YWwvMTAwMDAwMDtcblx0XHRcdHJlcy5zdG9yYWdlVG90YWwgPSByZXMuc3RvcmFnZVRvdGFsLnRvRml4ZWQoMik7XG5cdFx0XHRyZXMucGVyY2VudGFnZSA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRTU0lEJzogZnVuY3Rpb24oKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3NzaWQ9KC4qKScpKTtcbiAgXHRcdFx0dmFyIFNTSUQgPSBtYXRjaFsxXTtcbiAgXHRcdFx0U1NJRCA9IGRlY29kZVVSSUNvbXBvbmVudChTU0lELnJlcGxhY2UoLy4uL2csICclJCYnKSlcbiAgXHRcdFx0cmV0dXJuIFNTSUQ7XG5cdFx0fSxcblx0XHQnc2V0U1NJRCc6IGZ1bmN0aW9uKG5ld1NTSUQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHRjb25zdCBlbmNvZGVkTmV3U1NJRCA9IG5ldyBCdWZmZXIobmV3U1NJRCkudG9TdHJpbmcoJ2hleCcpOyAvLyBDb252ZXJ0IGludG8gSGV4XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnc3NpZD0oLiopJykpWzFdLCBlbmNvZGVkTmV3U1NJRCk7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFdpZmlQYXNzd29yZCc6IGZ1bmN0aW9uKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdwYXNzd29yZD0oLiopJykpO1xuICBcdFx0XHR2YXIgcGFzc3dvcmQgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIHBhc3N3b3JkO1xuXHRcdH0sXG5cdFx0J3NldFdpZmlQYXNzd29yZCc6IGZ1bmN0aW9uKG5ld1Bhc3N3b3JkKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdwYXNzd29yZD0oLiopJykpWzFdLCBuZXdQYXNzd29yZCk7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFdpZmlDaGFubmVsJzogZnVuY3Rpb24oKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpKTtcbiAgXHRcdFx0dmFyIGNoYW5uZWwgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIGNoYW5uZWw7XG5cdFx0fSxcblx0XHQnc2V0V2lmaUNoYW5uZWwnOiBmdW5jdGlvbihuZXdDaGFubmVsKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdjaGFubmVsPSguKiknKSlbMV0sIG5ld0NoYW5uZWwpO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdC8vICdnZXRXaWZpQmFuZCc6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG5cdFx0Ly8gXHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ2JhbmQ9KC4qKScpKTtcblxuXHRcdC8vIFx0aWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0Ly8gXHQgIHJldHVybiBtYXRjaFsxXTtcblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHQgIC8vIFJldHVybiBkZWZhdWx0IHZhbHVlIGlmIHRoZSBiYW5kIHNldHRpbmcgZG9lcyBub3QgZXhpc3Rcblx0XHQvLyBcdCAgcmV0dXJuICcyLjRHSHonO1xuXHRcdC8vIFx0fVxuXHRcdC8vICAgfSxcblx0XHQvLyAnc2V0V2lmaUJhbmQnOiBmdW5jdGlvbihuZXdCYW5kKSB7XG5cdFx0Ly8gXHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcblx0XHQvLyBcdHZhciBiYW5kUmVnZXggPSBuZXcgUmVnRXhwKCdiYW5kPSguKiknKTtcblx0XHQvLyBcdHZhciBjaGFubmVsUmVnZXggPSBuZXcgUmVnRXhwKCdjaGFubmVsPSguKiknKTtcblx0XHQvLyBcdHZhciBtYXRjaEJhbmQgPSBkYXRhLm1hdGNoKGJhbmRSZWdleCk7XG5cdFx0Ly8gXHR2YXIgbWF0Y2hDaGFubmVsID0gZGF0YS5tYXRjaChjaGFubmVsUmVnZXgpO1xuXG5cdFx0Ly8gXHR2YXIgbmV3RGF0YSA9IGRhdGE7XG5cblx0XHQvLyBcdGlmIChtYXRjaEJhbmQpIHtcblx0XHQvLyBcdFx0Ly8gUmVwbGFjZSB0aGUgZXhpc3RpbmcgYmFuZCBzZXR0aW5nXG5cdFx0Ly8gXHRcdG5ld0RhdGEgPSBuZXdEYXRhLnJlcGxhY2UoYmFuZFJlZ2V4LCBgYmFuZD0ke25ld0JhbmR9YCk7XG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0XHQvLyBBcHBlbmQgdGhlIG5ldyBiYW5kIHNldHRpbmdcblx0XHQvLyBcdFx0bmV3RGF0YSA9IGAke25ld0RhdGEudHJpbSgpfVxcbmJhbmQ9JHtuZXdCYW5kfWA7XG5cdFx0Ly8gXHR9XG5cblx0XHQvLyBcdGlmIChtYXRjaENoYW5uZWwgJiYgbWF0Y2hDaGFubmVsWzFdKSB7XG5cdFx0Ly8gXHRcdC8vIENvbnZlcnQgdGhlIGNoYW5uZWwgdmFsdWUgdG8gYSBudW1iZXJcblx0XHQvLyBcdFx0dmFyIGN1cnJlbnRDaGFubmVsID0gcGFyc2VJbnQobWF0Y2hDaGFubmVsWzFdLCAxMCk7XG5cblx0XHQvLyBcdFx0Ly8gU2V0IGNoYW5uZWwgdG8gYSBkZWZhdWx0IDIuNEdIeiBjaGFubmVsIGlmIGN1cnJlbnQgY2hhbm5lbCBpcyBmb3IgNUdIelxuXHRcdC8vIFx0XHRpZiAobmV3QmFuZCA9PSBcIjIuNEdIelwiICYmIGN1cnJlbnRDaGFubmVsID4gMTQpIHtcblx0XHQvLyBcdFx0XHRuZXdEYXRhID0gbmV3RGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9MTFgKTtcblx0XHQvLyBcdFx0fSBlbHNlIGlmIChuZXdCYW5kID09IFwiNUdIelwiICYmIGN1cnJlbnRDaGFubmVsIDw9IDE0KSB7XG5cdFx0Ly8gXHRcdFx0bmV3RGF0YSA9IG5ld0RhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTQ0YCk7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH1cblxuXHRcdC8vIFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHQvLyB9LFxuXHRcdC8vICAgJ3NldFdpZmlCYW5kJzogZnVuY3Rpb24obmV3QmFuZCkge1xuXHRcdC8vIFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG5cdFx0Ly8gXHR2YXIgYmFuZFJlZ2V4ID0gbmV3IFJlZ0V4cCgnYmFuZD0oLiopJyk7XG5cdFx0Ly8gXHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKGJhbmRSZWdleCk7XG5cblx0XHQvLyBcdGlmIChtYXRjaCkge1xuXHRcdC8vIFx0ICAvLyBSZXBsYWNlIHRoZSBleGlzdGluZyBiYW5kIHNldHRpbmdcblx0XHQvLyBcdCAgdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoYmFuZFJlZ2V4LCBgYmFuZD0ke25ld0JhbmR9YCk7XG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0ICAvLyBBcHBlbmQgdGhlIG5ldyBiYW5kIHNldHRpbmdcblx0XHQvLyBcdCAgdmFyIG5ld0RhdGEgPSBgJHtkYXRhLnRyaW0oKX1cXG5iYW5kPSR7bmV3QmFuZH1gO1xuXHRcdC8vIFx0fVxuXHRcdC8vIFx0dmFyIGNoYW5uZWxSZWdleCA9IG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpO1xuXHRcdC8vIFx0dmFyIG1hdGNoMiA9IGRhdGEubWF0Y2goY2hhbm5lbFJlZ2V4KTtcblx0XHQvLyBcdGlmIChtYXRjaDIgJiYgbWF0Y2gyWzFdKSB7XG5cdFx0Ly8gXHRcdC8vIFNldCBjaGFubmVsIHRvIGEgZGVmYXVsdCAyLjRHSHogY2hhbm5lbCBpZiBjdXJyZW50IGNoYW5uZWwgaXMgZm9yIDVHSHpcblx0XHQvLyBcdFx0aWYgKG5ld0JhbmQgPT0gXCIyLjRHSHpcIiAmJiBtYXRjaDJbMV0gPiAxNCkge1xuXHRcdC8vIFx0XHRcdC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0XHRcdHZhciBuZXdEYXRhMiA9IGRhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTExYCk7XG5cdFx0Ly8gXHRcdH0gZWxzZSBpZiAobmV3QmFuZCA9PSBcIjVHSHpcIiAmJiBtYXRjaDJbMV0gPD0gMTQpIHtcblx0XHQvLyBcdFx0XHR2YXIgbmV3RGF0YTIgPSBkYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD00NGApO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdC8vICAgfSxcblx0XHQnZ2V0U2VyaWFsJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdTRVJJQUw9KC4qKScpKTtcbiAgXHRcdFx0dmFyIHNlcmlhbCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gc2VyaWFsO1xuXHRcdH0sXG5cdFx0J2dldE9wZXJhdG9yTmFtZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG9wZXJhdG9yTmFtZTtcblx0XHRcdG9wZXJhdG9yTmFtZSA9IGNtZChcInN1ZG8gcW1pY2xpIC1wIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LW9wZXJhdG9yLW5hbWUgfCBncmVwIC1tMiAnTmFtZSAgICAgICAgICAgICAnIHwgYXdrICd7cHJpbnQgJDN9J1wiKTtcblx0XHRcdHJldHVybiBvcGVyYXRvck5hbWU7XG5cdFx0fSxcblx0XHQvLyAnZ2V0U2lnbmFsU3RyZW5ndGgnOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHR2YXIgc2lnbmFsU3RyZW5ndGg7XG5cdFx0Ly8gXHRzaWduYWxTdHJlbmd0aCA9IGNtZChcInN1ZG8gcW1pY2xpIC1wIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgLW0xIE5ldHdvcmsgfCBhd2sgJ3twcmludCAkMywgJDJ9J1wiKTtcblx0XHQvLyBcdHJldHVybiBzaWduYWxTdHJlbmd0aDtcblx0XHQvLyB9LFxuXHRcdCdnZXRTaWduYWxTdHJlbmd0aCc6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBzaWduYWxTdHJlbmd0aDtcblx0XHRcdC8vIFRoaXMgZXh0cmFjdHMganVzdCB0aGUgbnVtZXJpYyBwYXJ0IG9mIHRoZSBzaWduYWwgc3RyZW5ndGguXG5cdFx0XHRzaWduYWxTdHJlbmd0aCA9IGNtZChcInN1ZG8gcW1pY2xpIC1wIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgJ05ldHdvcmsnIHwgYXdrICd7cHJpbnQgJDN9JyB8IGdyZXAgLW9FICdbLTAtOV0rJ1wiKTtcblxuXHRcdFx0Ly8gQ29udmVydCBzaWduYWwgc3RyZW5ndGggdG8gYSBxdWFsaXRhdGl2ZSB2YWx1ZVxuXHRcdFx0dmFyIHN0cmVuZ3RoVmFsdWUgPSBwYXJzZUludChzaWduYWxTdHJlbmd0aCk7XG5cdFx0XHR2YXIgcXVhbGl0eSA9ICdVbmtub3duJztcblx0XHRcdGlmIChzdHJlbmd0aFZhbHVlID49IC03MCkge1xuXHRcdFx0XHRxdWFsaXR5ID0gJ0V4Y2VsbGVudCc7XG5cdFx0XHR9IGVsc2UgaWYgKHN0cmVuZ3RoVmFsdWUgPj0gLTg1KSB7XG5cdFx0XHRcdHF1YWxpdHkgPSAnR29vZCc7XG5cdFx0XHR9IGVsc2UgaWYgKHN0cmVuZ3RoVmFsdWUgPj0gLTEwMCkge1xuXHRcdFx0XHRxdWFsaXR5ID0gJ0ZhaXInO1xuXHRcdFx0fSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlIDwgLTEwMCkge1xuXHRcdFx0XHRxdWFsaXR5ID0gJ1Bvb3InO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHF1YWxpdHk7XG5cdFx0fSxcblx0XHQvLyAnZ2V0SXNPbmxpbmUnOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHR2YXIgaXNPbmxpbmU7XG5cdFx0Ly8gXHRpc09ubGluZSA9IGNtZChcInN1ZG8gcW1pY2xpIC1wIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgLW0xIE5ldHdvcmsgfCBhd2sgJ3twcmludCAkMywgJDJ9J1wiKTtcblx0XHQvLyBcdHJldHVybiBpc09ubGluZTtcblx0XHQvLyB9LFxuXHRcdC8vICdnZXRCYW5kJzogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0dmFyIGJhbmQ7XG4vL1x0XHRcdGJhbmQgPSBjbWQoXCJzdWRvIHFtaWNsaSAtcCAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrIFxcXCJ7cHJpbnQgJDJ9XFxcIiB8IGN1dCAtZFxcXFwnIC1mMlwiKTtcblx0XHQvLyBcdHJldHVybiBiYW5kO1xuXHRcdC8vIH0sXG5cdFx0J2dldEFQTic6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOPSguKiknKSk7XG4gIFx0XHRcdHZhciBBUE4gPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIEFQTjtcblx0XHR9LFxuXHRcdCdnZXRBUE5Vc2VyJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE5fVVNFUk5BTUU9KC4qKScpKTtcbiAgXHRcdFx0dmFyIEFQTlVzZXIgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIEFQTlVzZXI7XG5cdFx0fSxcblx0XHQnZ2V0QVBOUGFzc3dvcmQnOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9QQVNTV09SRD0oLiopJykpO1xuICBcdFx0XHR2YXIgQVBOUGFzc3dvcmQgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIEFQTlBhc3N3b3JkO1xuXHRcdH0sXG5cdFx0J2dldFNpbUNhcmRTdGF0dXMnOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgc2ltU3RhdHVzUmVzdWx0ID0gJ1Vua25vd24nOyAvLyBEZWZhdWx0IHN0YXR1c1xuXG5cdFx0XHQvLyBGdW5jdGlvbiB0byBleGVjdXRlIGNvbW1hbmQgYW5kIGhhbmRsZSBlcnJvcnNcblx0XHRcdGZ1bmN0aW9uIGV4ZWN1dGVDb21tYW5kKGNvbW1hbmQpIHtcblx0XHRcdFx0bGV0IHJlc3VsdDtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXN1bHQgPSBjbWQoY29tbWFuZCk7IC8vIEV4ZWN1dGUgdGhlIGNvbW1hbmRcblx0XHRcdFx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgJiYgcmVzdWx0ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHQvLyBDaGVjayBpZiByZXN1bHQgaXMgYW4gZXJyb3Igb2JqZWN0XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ0Vycm9yJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0Ly8gSGFuZGxlIGV4Y2VwdGlvbnMgaWYgY29tbWFuZCBleGVjdXRpb24gZmFpbHNcblx0XHRcdFx0XHRyZXR1cm4gJ0Vycm9yJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0OyAvLyBSZXR1cm4gdGhlIHJlc3VsdCBpZiBubyBlcnJvcnNcblx0XHRcdH1cblxuXHRcdFx0Ly8gRXhlY3V0ZSBTSU0gY2FyZCBzdGF0dXMgY2hlY2sgY29tbWFuZFxuXHRcdFx0bGV0IHNpbVN0YXR1cyA9IGV4ZWN1dGVDb21tYW5kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLXVpbS1nZXQtY2FyZC1zdGF0dXMgfCBncmVwICdDYXJkIHN0YXRlOidcIik7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlNJTSBjYXJkIHN0YXR1czpcIiwgc2ltU3RhdHVzKTsgLy8gTG9nIHRoZSByYXcgb3V0cHV0XG5cdFx0XHQvLyBQcm9jZXNzIHRoZSBvdXRwdXQgYW5kIGRldGVybWluZSBTSU0gY2FyZCBzdGF0dXNcblx0XHRcdGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoJ25vLWF0ci1yZWNlaXZlZCcpIHx8IHNpbVN0YXR1cy5pbmNsdWRlcygnbm90LWluc2VydGVkJykpIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gJ05vIFNJTSBjYXJkJztcblx0XHRcdH0gZWxzZSBpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKCdlcnJvcicpKSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9IHNpbVN0YXR1czsgLy8gVXNlIHRoZSBlcnJvciBtZXNzYWdlIG9yIG5vIFNJTSBkZXRlY3RlZCBtZXNzYWdlXG5cdFx0XHR9IGVsc2UgaWYgKHNpbVN0YXR1cy5pbmNsdWRlcygncHJlc2VudCcpKSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9ICdPSyc7XG5cdFx0XHR9IGVsc2UgaWYgKHNpbVN0YXR1cy5pbmNsdWRlcygnbG9ja2VkJykgfHwgc2ltU3RhdHVzLmluY2x1ZGVzKCdwaW4tcmVxdWlyZWQnKSkge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSAnU0lNIGNhcmQgbG9ja2VkLCBQSU4gcmVxdWlyZWQnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gJ1Vua25vd24nOyAvLyBGb3Igb3RoZXIgc3RhdHVzZXNcblx0XHRcdH1cblx0XHRcdHJldHVybiBzaW1TdGF0dXNSZXN1bHQ7XG5cdFx0fSxcblx0XHQnZ2V0U2ltUGluJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdTSU1fUElOPSguKiknKSk7XG4gIFx0XHRcdHZhciBTaW1QaW4gPSBtYXRjaFsxXTtcblx0XHRcdHJldHVybiBTaW1QaW47XG5cdFx0fSxcblx0XHQnc2V0U2ltUGluJzogZnVuY3Rpb24oUElOKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdTSU1fUElOPS4qJykpLCAnU0lNX1BJTj0nK1BJTik7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J3NldEFQTic6IGZ1bmN0aW9uKEFQTiwgdXNlciwgcGFzc3dvcmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTj0uKicpKSwgJ0FQTj0nK0FQTik7XG4gIFx0XHRcdC8vIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOPSguKiknKSlbMV0sIEFQTik7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J3NldEFQTlVzZXInOiBmdW5jdGlvbihBUE5Vc2VyKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE5fVVNFUk5BTUU9LionKSksICdBUE5fVVNFUk5BTUU9JytBUE5Vc2VyKTtcbiAgXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdzZXRBUE5QYXNzd29yZCc6IGZ1bmN0aW9uKEFQTlBhc3N3b3JkKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE5fUEFTU1dPUkQ9LionKSksICdBUE5fUEFTU1dPUkQ9JytBUE5QYXNzd29yZCk7XG4gIFx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0UmVtb3RlU3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3lzdGVtY3RsIGlzLWFjdGl2ZSByZW1vdGUtaW90LnNlcnZpY2UgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gMSB8fCBlY2hvIDBcIik7XG5cdFx0XHRpZiAocmVzWzBdID09IFwiMVwiKSB7IC8vIFswXSBpcyBhIGhhY2sgYmVjYXVzZSB0aGUgcmVzdWx0IHJlcyBoYXMgb25lIGV4dHJhIGNoYXJhY3RlclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0J2dldEF1dG9TeW5jU3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3lzdGVtY3RsIGlzLWFjdGl2ZSBhdXRvc3luYy5zZXJ2aWNlID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIDEgfHwgZWNobyAwXCIpO1xuXHRcdFx0aWYgKHJlc1swXSA9PSBcIjFcIikgeyAvLyBbMF0gaXMgYSBoYWNrIGJlY2F1c2UgdGhlIHJlc3VsdCByZXMgaGFzIG9uZSBleHRyYSBjaGFyYWN0ZXJcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdCdnZXRTaGFyZUludGVybmV0VmlhRXRoZXJuZXRTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpc1NoYXJpbmc7XG5cdFx0XHRpc1NoYXJpbmcgPSBjbWQoXCIoc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUwgUE9TVFJPVVRJTkcgLXYgLW4gfCBncmVwIC1xICdNQVNRVUVSQURFICBhbGwgIC0tICAqICAgICAgZXRoMCcgJiYgaXAgbGluayBzaG93IGV0aDAgfCBncmVwIC1xICdzdGF0ZSBVUCcpICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIpO1xuXHRcdFx0cmV0dXJuIGlzU2hhcmluZztcblx0XHR9LFxuXHRcdCdnZXRTaGFyZUludGVybmV0VmlhTW9iaWxlU3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaXNTaGFyaW5nO1xuXHRcdFx0aXNTaGFyaW5nID0gY21kKFwiKHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1MIFBPU1RST1VUSU5HIC12IC1uIHwgZ3JlcCAtcSAnTUFTUVVFUkFERSAgYWxsICAtLSAgKiAgICAgIHd3YW4wJyAmJiBpcCBsaW5rIHNob3cgd3dhbjAgfCBncmVwIC1xICdzdGF0ZSBVUCcpICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIpO1xuXHRcdFx0cmV0dXJuIGlzU2hhcmluZztcblx0XHR9LFxuXHRcdC8vICdhY3RpdmF0ZUludGVybmV0U2hhcmluZyc6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0dmFyIHJlcztcblx0XHQvLyBcdHJlcyA9IGNtZChcInN1ZG8gd2lmaS1hcC5jb25maWcgc2V0IHNoYXJlLmRpc2FibGVkPWZhbHNlXCIpO1xuXHRcdC8vIFx0cmV0dXJuIHJlcztcblx0XHQvLyB9LFxuXHRcdC8vICdkaXNhY3RpdmF0ZUludGVybmV0U2hhcmluZyc6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0dmFyIHJlcztcblx0XHQvLyBcdHJlcyA9IGNtZChcInN1ZG8gd2lmaS1hcC5jb25maWcgc2V0IHNoYXJlLmRpc2FibGVkPXRydWVcIik7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzO1xuXHRcdC8vIH0sXG5cdFx0J2FjdGl2YXRlUmVtb3RlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RhcnQgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGVuYWJsZSByZW1vdGUtaW90LnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2Rpc2FjdGl2YXRlUmVtb3RlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RvcCByZW1vdGUtaW90LnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZGlzYWJsZSByZW1vdGUtaW90LnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2FjdGl2YXRlQXV0b1N5bmMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdGFydCBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuXHRcdFx0cmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGVuYWJsZSBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdkaXNhY3RpdmF0ZUF1dG9TeW5jJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RvcCBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuXHRcdFx0cmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGRpc2FibGUgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0QmF0dGVyeVN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHZhciBzY3JpcHRzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5zY3JpcHRzUGF0aDtcblx0XHRcdHJlcyA9IGNtZChcInB5dGhvbjMgXCIrc2NyaXB0c1BhdGgrXCIvcGlqdWljZV9zdGF0dXMucHlcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0Ly8gJ2dldElzT25saW5lJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0dmFyIHNjcmlwdHNQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnNjcmlwdHNQYXRoO1xuXHRcdC8vIFx0Ly8gTWFrZSBzdXJlIHlvdXIgc2NyaXB0IGlzIGV4ZWN1dGFibGUsIGUuZy4sIGNobW9kICt4IGNoZWNrX2ludGVybmV0LnNoXG5cdFx0Ly8gXHRyZXMgPSBjbWQoXCJiYXNoIFwiICsgc2NyaXB0c1BhdGggKyBcIi9jaGVja19pbnRlcm5ldC5zaFwiKTsgLy8gUmVwbGFjZSAnYmFzaCcgd2l0aCAnc2gnIGlmIG5lZWRlZFxuXHRcdC8vIFx0Ly8gVGhlIHNjcmlwdCByZXR1cm5zIFwidHJ1ZVwiIG9yIFwiZmFsc2VcIiBhcyBhIHN0cmluZywgc28gd2UgY29tcGFyZSB0aGUgcmVzdWx0IGRpcmVjdGx5XG5cdFx0Ly8gXHRyZXR1cm4gcmVzLnRyaW0oKSA9PT0gXCJ0cnVlXCI7IC8vIFRoaXMgY29udmVydHMgdGhlIHN0cmluZyB0byBhIGJvb2xlYW5cblx0XHQvLyB9LFxuXHRcdCdnZXRJc09ubGluZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IHJlcztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlcyA9IGNtZChcInBpbmcgLWMgMSA4LjguOC44XCIpO1xuXHRcdFx0XHQvLyBDaGVjayBpZiB0aGUgcGluZyBjb21tYW5kIHdhcyBzdWNjZXNzZnVsIGJhc2VkIG9uIHRoZSBvdXRwdXRcblx0XHRcdFx0bGV0IGlzT25saW5lID0gcmVzLmluY2x1ZGVzKFwiMSBwYWNrZXRzIHJlY2VpdmVkXCIpIHx8IHJlcy5pbmNsdWRlcyhcIjEgcmVjZWl2ZWRcIik7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiT25saW5lIHN0YXR1czpcIiwgaXNPbmxpbmUpOyAvLyBDb3JyZWN0bHkgbG9nZ2luZyB0aGUgYm9vbGVhbiByZXN1bHRcblx0XHRcdFx0cmV0dXJuIGlzT25saW5lOyAvLyBEaXJlY3RseSByZXR1cm4gdGhlIGJvb2xlYW4gdmFsdWVcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdC8vIElmIGFuIGVycm9yIG9jY3VycyAod2hpY2ggY291bGQgaW5jbHVkZSBiZWluZyB1bmFibGUgdG8gcnVuIHRoZSBwaW5nIGNvbW1hbmQpLCBhc3N1bWUgb2ZmbGluZVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIG9yIG9mZmxpbmU6XCIsIGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBBc3N1bWUgb2ZmbGluZSBpZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZ2V0RXRoMElQJzogZnVuY3Rpb24oKSB7IC8vIEdldCBJUCBvZiBib3hcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwicmVzdWx0IDogXCIrXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcXFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cblx0XHRcdC8vY29uc29sZS5sb2coXCJpcCA6IFwiK1wiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgXCIraW50ZXJmYWNlK1wiIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0V3dhbjBJUCc6IGZ1bmN0aW9uKCkgeyAvLyBHZXQgSVAgb2YgYm94XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcInJlc3VsdCA6IFwiK1wiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgd3dhbjAgfCBncmVwIFxcXCJpbmV0XFxcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiaXAgOiBcIitcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIFwiK2ludGVyZmFjZStcIiAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cblx0XHQnZ2V0QmVla2VlT3NWZXJzaW9uJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcblx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQkVFS0VFX09TX1ZFUlNJT049KC4qKScpKTtcblx0XHRcdHZhciBzZXJpYWwgPSBtYXRjaFsxXTtcblx0XHRcdHJldHVybiBzZXJpYWw7XG5cdFx0fSxcblx0XHQnZ2V0QmVla2VlSG9tZVZlcnNpb24nOiBmdW5jdGlvbigpIHtcblx0XHRcdGpzb24gPSBKU09OLnBhcnNlKEFzc2V0cy5nZXRUZXh0KFwidmVyc2lvbi5qc29uXCIpKTtcblx0XHRcdHJldHVybiBqc29uLnZlcnNpb247XG5cdFx0fSxcblx0XHQncmVzdGFydE1vYmlsZUNvbm5lY3QnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCByZXN0YXJ0IG1vYmlsZV9jb25uZWN0LnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzOycnXG5cdFx0fSxcblx0XHQnZ2V0TW9iaWxlQ29ubmVjdEVuYWJsZWQnOiBmdW5jdGlvbigpIHtcblx0XHRcdGxldCByZXM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBpcy1hY3RpdmUgbW9iaWxlX2Nvbm5lY3Quc2VydmljZSA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIik7XG5cdFx0XHRcdHJldHVybiByZXMudG9TdHJpbmcoKS50cmltKCkgPT09IFwidHJ1ZVwiO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2VuYWJsZU1vYmlsZUNvbm5lY3QnOiBmdW5jdGlvbigpIHtcblx0XHRcdGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0YXJ0IG1vYmlsZV9jb25uZWN0LnNlcnZpY2VcIik7XG5cdFx0XHRjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgbW9iaWxlX2Nvbm5lY3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0J2Rpc2FibGVNb2JpbGVDb25uZWN0JzogZnVuY3Rpb24oKSB7XG5cdFx0XHRjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdG9wIG1vYmlsZV9jb25uZWN0LnNlcnZpY2VcIik7XG5cdFx0XHRjbWQoXCJzdWRvIHN5c3RlbWN0bCBkaXNhYmxlIG1vYmlsZV9jb25uZWN0LnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXHRcdCdnZXRJbnRlcm5ldEludGVyZmFjZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGdldEludGVybmV0SW50ZXJmYWNlRnJvbVN5c3RlbSgpO1xuXHRcdH0sXG5cdFx0J2dldEludGVybmV0U3RhdHVzRGV0YWlscyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlTmFtZSA9IGdldEludGVybmV0SW50ZXJmYWNlRnJvbVN5c3RlbSgpO1xuXHRcdFx0Y29uc3QgdmFsaWRJbnRlcm5ldEludGVyZmFjZSA9IGludGVyZmFjZU5hbWUgIT09ICdVbmtub3duJyAmJiBpbnRlcmZhY2VOYW1lICE9PSAnRXJyb3InO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpbnRlcmZhY2VOYW1lOiBpbnRlcmZhY2VOYW1lLFxuXHRcdFx0XHRpcEFkZHJlc3M6IHZhbGlkSW50ZXJuZXRJbnRlcmZhY2UgPyBnZXRJbnRlcmZhY2VJUEFkZHJlc3NGcm9tU3lzdGVtKGludGVyZmFjZU5hbWUpIDogJ1VuYXZhaWxhYmxlJyxcblx0XHRcdFx0bWFjQWRkcmVzczogdmFsaWRJbnRlcm5ldEludGVyZmFjZSA/IGdldEludGVyZmFjZU1BQ0FkZHJlc3NGcm9tU3lzdGVtKGludGVyZmFjZU5hbWUpIDogJ1VuYXZhaWxhYmxlJyxcblx0XHRcdH07XG5cdFx0fSxcblx0XHQnZ2V0V0xBTlVTQic6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IHJlcztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlcyA9IGNtZCgnaXAgbGluayBzaG93IHdsYW51c2InKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZ2V0V2lmaUNsaWVudE1vZGVFbmFibGVkJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpO1xuXHRcdH0sXG5cdFx0J2VuYWJsZVdpZmlDbGllbnRNb2RlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRydW5XaWZpTW9kZVNjcmlwdCh3aWZpQ2xpZW50RW5hYmxlU2NyaXB0TmFtZSk7XG5cdFx0XHRcdHJldHVybiBnZXRXaWZpQ2xpZW50TW9kZVN0YXRlKCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgZW5hYmxpbmcgV2ktRmkgY2xpZW50IG1vZGU6JywgZXJyb3IpO1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuXHRcdFx0XHRcdCd3aWZpLWNsaWVudC1tb2RlLWVuYWJsZS1mYWlsZWQnLFxuXHRcdFx0XHRcdGVycm9yLnJlYXNvbiB8fCBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZW5hYmxlIFdpLUZpIGNsaWVudCBtb2RlLidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdkaXNhYmxlV2lmaUNsaWVudE1vZGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJ1bldpZmlNb2RlU2NyaXB0KHdpZmlDbGllbnREaXNhYmxlU2NyaXB0TmFtZSk7XG5cdFx0XHRcdGRpc2FibGVJbnRlcm5ldFNoYXJpbmdXaWZpQ2xpZW50SW5TeXN0ZW0oKTtcblx0XHRcdFx0cmV0dXJuIGdldFdpZmlDbGllbnRNb2RlU3RhdGUoKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBkaXNhYmxpbmcgV2ktRmkgY2xpZW50IG1vZGU6JywgZXJyb3IpO1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuXHRcdFx0XHRcdCd3aWZpLWNsaWVudC1tb2RlLWRpc2FibGUtZmFpbGVkJyxcblx0XHRcdFx0XHRlcnJvci5yZWFzb24gfHwgZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGRpc2FibGUgV2ktRmkgY2xpZW50IG1vZGUuJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2dldFdpZmlOZXR3b3Jrcyc6IGFzeW5jIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkKCk7XG5cblx0XHRcdHZhciB3aWZpID0gcmVxdWlyZSgnbm9kZS13aWZpJyk7XG5cdFx0XHR3aWZpLmluaXQoe1xuXHRcdFx0XHRpZmFjZTogJ3dsYW51c2InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnU3RhcnRpbmcgd2lmaSBzY2FuJyk7XG5cdFx0XHRcdHdpZmkuc2NhbigoZXJyb3IsIG5ldHdvcmtzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBzY2FubmluZyBuZXR3b3JrczonLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKFtdKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ1dpZmkgc2NhbiBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHVuaXF1ZU5ldHdvcmtzID0gbmV3IE1hcCgpO1xuXG5cdFx0XHRcdFx0XHRuZXR3b3Jrcy5mb3JFYWNoKChuZXR3b3JrKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGxldCBzdHJlbmd0aDtcblx0XHRcdFx0XHRcdFx0aWYgKG5ldHdvcmsucXVhbGl0eSA+IDgwKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RyZW5ndGggPSAnd2lmaS00Jztcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChuZXR3b3JrLnF1YWxpdHkgPiA1NSkge1xuXHRcdFx0XHRcdFx0XHRcdHN0cmVuZ3RoID0gJ3dpZmktMyc7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobmV0d29yay5xdWFsaXR5ID4gMzApIHtcblx0XHRcdFx0XHRcdFx0XHRzdHJlbmd0aCA9ICd3aWZpLTInO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHN0cmVuZ3RoID0gJ3dpZmktMSc7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBic3NpZCA9IG5ldHdvcmsubWFjID8gbmV0d29yay5tYWMudG9VcHBlckNhc2UoKSA6IG51bGw7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9IGAke25ldHdvcmsuc3NpZH06JHtic3NpZCB8fCAndW5rbm93bid9YDtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIXVuaXF1ZU5ldHdvcmtzLmhhcyhrZXkpIHx8IG5ldHdvcmsucXVhbGl0eSA+IHVuaXF1ZU5ldHdvcmtzLmdldChrZXkpLnF1YWxpdHkpIHtcblx0XHRcdFx0XHRcdFx0XHR1bmlxdWVOZXR3b3Jrcy5zZXQoa2V5LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiBuZXR3b3JrLnNzaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRic3NpZDogYnNzaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJlbmd0aDogc3RyZW5ndGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWN1cml0eTogbmV0d29yay5zZWN1cml0eSxcblx0XHRcdFx0XHRcdFx0XHRcdHF1YWxpdHk6IG5ldHdvcmsucXVhbGl0eSxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHVuaXF1ZU5ldHdvcmtzQXJyYXkgPSBBcnJheS5mcm9tKHVuaXF1ZU5ldHdvcmtzLnZhbHVlcygpKTtcblx0XHRcdFx0XHRcdHVuaXF1ZU5ldHdvcmtzQXJyYXkuZm9yRWFjaCgobmV0d29yaykgPT4gZGVsZXRlIG5ldHdvcmsucXVhbGl0eSk7XG5cblx0XHRcdFx0XHRcdHJlc29sdmUodW5pcXVlTmV0d29ya3NBcnJheSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2Nvbm5lY3RUb1dpZmknOiBhc3luYyBmdW5jdGlvbihzc2lkLCBwYXNzd29yZCkge1xuXHRcdFx0ZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkKCk7XG5cblx0XHRcdHZhciB3aWZpID0gcmVxdWlyZSgnbm9kZS13aWZpJyk7XG5cdFx0XHR3aWZpLmluaXQoe1xuXHRcdFx0XHRpZmFjZTogJ3dsYW51c2InLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBjdXJyZW50Q29ubmVjdGlvbkluZm8gPSBnZXRDbGllbnRDb25uZWN0aW9uSW5mb0Zyb21TeXN0ZW0oKTtcblx0XHRcdGlmIChjdXJyZW50Q29ubmVjdGlvbkluZm8uc3NpZCA9PT0gc3NpZCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgY29ubmVjdGlvbkNvbmZpZyA9IHsgc3NpZDogc3NpZCB9O1xuXG5cdFx0XHRpZiAodHlwZW9mIHBhc3N3b3JkID09PSAnc3RyaW5nJyAmJiBwYXNzd29yZCAhPT0gJycpIHtcblx0XHRcdFx0Y29ubmVjdGlvbkNvbmZpZy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuXHRcdFx0fVxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XHRcdHdpZmkuZGlzY29ubmVjdCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNtZCgnbm1jbGkgZGV2aWNlIGRpc2Nvbm5lY3Qgd2xhbnVzYiA+L2Rldi9udWxsIDI+JjEgfHwgdHJ1ZScpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBkaXNjb25uZWN0aW5nIHdsYW51c2IgYmVmb3JlIHJlY29ubmVjdDonLCBlcnJvcik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhd2FpdCB3YWl0KDE1MDApO1xuXG5cdFx0XHRcdGNvbnN0IGNvbm5lY3RSZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XHRcdHdpZmkuY29ubmVjdChjb25uZWN0aW9uQ29uZmlnLCAoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBjb25uZWN0aW5nIHRvIHdpZmk6JywgZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKGZhbHNlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmICghY29ubmVjdFJlc3VsdCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGlzVmVyaWZpZWQgPSBhd2FpdCB3YWl0Rm9yQ2xpZW50U1NJRChzc2lkLCAxNTAwMCk7XG5cblx0XHRcdFx0aWYgKCFpc1ZlcmlmaWVkKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCBjYWxsYmFjayByZXR1cm5lZCBzdWNjZXNzIGJ1dCBTU0lEIHZlcmlmaWNhdGlvbiBmYWlsZWQ6Jywgc3NpZCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byB3aWZpOicsIHNzaWQpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3Igd2hpbGUgY29ubmVjdGluZyB0byB3aWZpOicsIGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2Rpc2Nvbm5lY3RXaWZpJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblxuXHRcdFx0dmFyIHdpZmkgPSByZXF1aXJlKCdub2RlLXdpZmknKTtcblx0XHRcdHdpZmkuaW5pdCh7XG5cdFx0XHRcdGlmYWNlOiAnd2xhbnVzYicsXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHdpZmkuZGlzY29ubmVjdCgoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRpc2Nvbm5lY3RpbmcgZnJvbSB3aWZpOicsIGVycm9yKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoZmFsc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRGlzY29ubmVjdGVkIGZyb20gd2lmaScpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZm9yZ2V0V2lmaSc6IGZ1bmN0aW9uKHNzaWQpIHtcblx0XHRcdGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXG5cdFx0XHR2YXIgd2lmaSA9IHJlcXVpcmUoJ25vZGUtd2lmaScpO1xuXHRcdFx0d2lmaS5pbml0KHtcblx0XHRcdFx0aWZhY2U6ICd3bGFudXNiJyxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0d2lmaS5kZWxldGVDb25uZWN0aW9uKHsgc3NpZDogc3NpZCB9LCAoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvbm5lY3RpbmcgdG8gd2lmaTonLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKGZhbHNlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byB3aWZpOicsIHNzaWQpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZ2V0Q2xpZW50U1NJRCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGdldENsaWVudFNTSURGcm9tU3lzdGVtKCk7XG5cdFx0fSxcblx0XHQnZ2V0Q2xpZW50Q29ubmVjdGlvbkluZm8nOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBnZXRDbGllbnRDb25uZWN0aW9uSW5mb0Zyb21TeXN0ZW0oKTtcblx0XHR9LFxuXHRcdCdnZXRDYXB0aXZlUG9ydGFsU3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblx0XHRcdHJldHVybiBnZXRDYXB0aXZlUG9ydGFsU3RhdHVzRnJvbVN5c3RlbSgpO1xuXHRcdH0sXG5cdFx0J2dldEludGVybmV0U2hhcmluZ1N0YXR1c1dpZmlDbGllbnQnOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNXaWZpQ2xpZW50RnJvbVN5c3RlbSgpO1xuXHRcdH0sXG5cdFx0J2VuYWJsZUludGVybmV0U2hhcmluZ1dpZmlDbGllbnQnOiBmdW5jdGlvbigpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGVuYWJsZUludGVybmV0U2hhcmluZ1dpZmlDbGllbnRJblN5c3RlbSgpO1xuXHRcdFx0XHRyZXR1cm4gZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzV2lmaUNsaWVudEZyb21TeXN0ZW0oKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBlbmFibGluZyBpbnRlcm5ldCBzaGFyaW5nIHZpYSBXaS1GaSBjbGllbnQ6JywgZXJyb3IpO1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuXHRcdFx0XHRcdCd3aWZpLWNsaWVudC1zaGFyaW5nLWVuYWJsZS1mYWlsZWQnLFxuXHRcdFx0XHRcdGVycm9yLnJlYXNvbiB8fCBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZW5hYmxlIGludGVybmV0IHNoYXJpbmcgdmlhIFdpLUZpIGNsaWVudC4nXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZGlzYWJsZUludGVybmV0U2hhcmluZ1dpZmlDbGllbnQnOiBmdW5jdGlvbigpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRpc2FibGVJbnRlcm5ldFNoYXJpbmdXaWZpQ2xpZW50SW5TeXN0ZW0oKTtcblx0XHRcdFx0cmV0dXJuIGdldEludGVybmV0U2hhcmluZ1N0YXR1c1dpZmlDbGllbnRGcm9tU3lzdGVtKCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgZGlzYWJsaW5nIGludGVybmV0IHNoYXJpbmcgdmlhIFdpLUZpIGNsaWVudDonLCBlcnJvcik7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG5cdFx0XHRcdFx0J3dpZmktY2xpZW50LXNoYXJpbmctZGlzYWJsZS1mYWlsZWQnLFxuXHRcdFx0XHRcdGVycm9yLnJlYXNvbiB8fCBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZGlzYWJsZSBpbnRlcm5ldCBzaGFyaW5nIHZpYSBXaS1GaSBjbGllbnQuJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8gJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdC8vIENvbW1hbmQgdG8gbGlzdCBGT1JXQVJEIHJ1bGVzXG5cdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG5cdFx0Ly8gXHRjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yIHx8IHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvciB8fCBzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciB8fCBuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cblx0XHQvLyBcdFx0Ly8gQ2hlY2sgZm9yIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBydWxlc1xuXHRcdC8vIFx0XHR2YXIgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgPSBzdGRvdXQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIGV0aDAnKSAmJiBzdGRvdXQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coXCJpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZDogXCIraXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQpO1xuXHRcdC8vIFx0XHQvLyBFeHRyYWN0IE1BQyBhZGRyZXNzIHJ1bGVzXG5cdFx0Ly8gXHRcdHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIGV0aDAvO1xuXHRcdC8vIFx0XHR2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cblx0XHQvLyBcdFx0Ly8gRGV0ZXJtaW5lIHRoZSBzdGF0dXMgYmFzZWQgb24gdGhlIHJ1bGVzIGZvdW5kXG5cdFx0Ly8gXHRcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAxXCIpO1xuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSB7Y29uc29sZS5sb2coXCJzdGVwMTJcIik7IGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9KTt9XG5cdFx0Ly8gXHRcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAyXCIpO1xuXG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH0pO1xuXHRcdC8vIFx0XHR9IGVsc2Uge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDNcIik7XG5cblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGRpc2FibGVkIG9yIG5vdCBjb25maWd1cmVkIGFzIGV4cGVjdGVkXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9KTtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fSk7XG5cdFx0Ly8gfSxcblxuXG5cblxuXHRcdFx0Ly8gICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coJ1N0YXJ0aW5nIHRvIGdldCBpbnRlcm5ldCBzaGFyaW5nIHN0YXR1cyBmb3IgRXRoZXJuZXQuLi4nKTtcblx0XHRcdC8vIFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtbiAtLWxpbmUtbnVtYmVyJztcblxuXHRcdFx0Ly8gXHQvLyBTaW5jZSBjbWQgaXMgYWxyZWFkeSB3cmFwcGVkIGJ5IE1ldGVvci53cmFwQXN5bmMoZXhlYyksXG5cdFx0XHQvLyBcdC8vIGl0IHNob3VsZCByZXR1cm4geyBzdGRvdXQsIHN0ZGVyciB9IGRpcmVjdGx5LlxuXHRcdFx0Ly8gXHR0cnkge1xuXHRcdFx0Ly8gXHQgIHZhciB7IHN0ZG91dCwgc3RkZXJyIH0gPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHQvLyBcdCAgaWYgKHN0ZGVycikge1xuXHRcdFx0Ly8gXHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtzdGRlcnJ9YCk7XG5cdFx0XHQvLyBcdFx0Ly8gSXQncyBiZXR0ZXIgdG8gcmV0dXJuIGEgbWVhbmluZ2Z1bCBlcnJvciB0byB0aGUgY2xpZW50LlxuXHRcdFx0Ly8gXHRcdHJldHVybiB7IGVycm9yOiBcIkVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlc1wiLCBkZXRhaWxzOiBzdGRlcnIgfTtcblx0XHRcdC8vIFx0ICB9XG5cblx0XHRcdC8vIFx0ICBjb25zb2xlLmxvZygnQW5hbHl6aW5nIGlwdGFibGVzIEZPUldBUkQgcnVsZXMgb3V0cHV0Li4uJyk7XG5cdFx0XHQvLyBcdCAgLy8gQ2hlY2sgZm9yIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBydWxlc1xuXHRcdFx0Ly8gXHQgIHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IHN0ZG91dC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuXHRcdFx0Ly8gXHQgIGNvbnNvbGUubG9nKGBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZDogJHtpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZH1gKTtcblxuXHRcdFx0Ly8gXHQgIC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcblx0XHRcdC8vIFx0ICB2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSBldGgwLztcblx0XHRcdC8vIFx0ICB2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cdFx0XHQvLyBcdCAgY29uc29sZS5sb2coYE1BQyBhZGRyZXNzIGZvdW5kOiAke21hdGNoID8gbWF0Y2hbMV0gOiAnTm9uZSd9YCk7XG5cblx0XHRcdC8vIFx0ICAvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcblx0XHRcdC8vIFx0ICBpZiAoaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgJiYgIW1hdGNoKSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsLicpO1xuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdC8vIFx0ICB9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coYEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYSBzcGVjaWZpYyBNQUMgYWRkcmVzczogJHttYXRjaFsxXX1gKTtcblx0XHRcdC8vIFx0XHRyZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9O1xuXHRcdFx0Ly8gXHQgIH0gZWxzZSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWQuJyk7XG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHQvLyBcdCAgfVxuXHRcdFx0Ly8gXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Ly8gXHQgIGNvbnNvbGUuZXJyb3IoYENvbW1hbmQgZXhlY3V0aW9uIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0Ly8gXHQgIC8vIEl0J3MgYmV0dGVyIHRvIHJldHVybiBhIG1lYW5pbmdmdWwgZXJyb3IgdG8gdGhlIGNsaWVudC5cblx0XHRcdC8vIFx0ICByZXR1cm4geyBlcnJvcjogXCJDb21tYW5kIGV4ZWN1dGlvbiBlcnJvclwiLCBkZXRhaWxzOiBlcnJvci50b1N0cmluZygpIH07XG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vICAgfSxcblxuXG5cblx0XHRcdFx0Ly8gICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcblx0XHRcdFx0Ly8gXHR2YXIgY29tbWFuZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdFx0Ly8gXHRpZiAoIWNvbW1hbmRSZXN1bHQpIHtcblx0XHRcdFx0Ly8gXHQgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0XHQvLyBcdH1cblxuXHRcdFx0XHQvLyBcdHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIGV0aDAnKSAmJiBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG5cdFx0XHRcdC8vIFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2UgZXRoMC87XG5cdFx0XHRcdC8vIFx0dmFyIG1hdGNoID0gY29tbWFuZFJlc3VsdC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuXHRcdFx0XHQvLyBcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHRcdFx0Ly8gXHQgIHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdFx0Ly8gXHR9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0XHRcdC8vIFx0ICByZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9O1xuXHRcdFx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFx0ICByZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdC8vICAgfSxcblxuXG5cblxuXHRcdFx0XHRcdCAgJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0JzogZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXHRcdFx0dmFyIGxpc3ROYXRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtdCBuYXQgLVMgUE9TVFJPVVRJTkcnO1xuXG5cdFx0XHR2YXIgZm9yd2FyZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cdFx0XHR2YXIgbmF0UmVzdWx0ID0gY21kKGxpc3ROYXRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHRpZiAoIWZvcndhcmRSZXN1bHQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIEZPUldBUkQgY2hhaW4gY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFuYXRSZXN1bHQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIFBPU1RST1VUSU5HIGNoYWluIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzaGFyaW5nRnJvbVdsYW5pbnRUb0V0aCA9IGZvcndhcmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd2xhbmludCAtbyBldGgwIC1qIEFDQ0VQVCcpO1xuXHRcdFx0dmFyIHNoYXJpbmdGcm9tV2xhbnVzYlRvRXRoID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFudXNiIC1vIGV0aDAgLWogQUNDRVBUJyk7XG5cdFx0XHR2YXIgc2hhcmluZ1RvV2xhbmludEZyb21FdGhFc3RhYmxpc2hlZCA9IGZvcndhcmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgZXRoMCAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnKTtcblx0XHRcdHZhciBzaGFyaW5nVG9XbGFudXNiRnJvbUV0aEVzdGFibGlzaGVkID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW51c2IgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcpO1xuXG5cdFx0XHR2YXIgbmF0Rm9yV2xhbmludCA9IG5hdFJlc3VsdC5pbmNsdWRlcygnLUEgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gZXRoMCAtaiBNQVNRVUVSQURFJyk7XG5cdFx0XHR2YXIgbmF0Rm9yV2xhbnVzYiA9IG5hdFJlc3VsdC5pbmNsdWRlcygnLUEgUE9TVFJPVVRJTkcgLXMgMTAuMS4wLjAvMjQgLW8gZXRoMCAtaiBNQVNRVUVSQURFJyk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0c2hhcmluZ0Zyb21XbGFuaW50VG9FdGggJiZcblx0XHRcdFx0c2hhcmluZ0Zyb21XbGFudXNiVG9FdGggJiZcblx0XHRcdFx0c2hhcmluZ1RvV2xhbmludEZyb21FdGhFc3RhYmxpc2hlZCAmJlxuXHRcdFx0XHRzaGFyaW5nVG9XbGFudXNiRnJvbUV0aEVzdGFibGlzaGVkICYmXG5cdFx0XHRcdG5hdEZvcldsYW5pbnQgJiZcblx0XHRcdFx0bmF0Rm9yV2xhbnVzYlxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQnZW5hYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXG5cdFx0XHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IG51bGw7XG5cblx0XHRcdGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgd2xhbmludCAtbyBldGgwIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd2xhbmludCAtbyBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgd2xhbnVzYiAtbyBldGgwIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd2xhbnVzYiAtbyBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgZXRoMCAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIGV0aDAgLW8gd2xhbmludCAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW51c2IgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgZXRoMCAtbyB3bGFudXNiIC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUMgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gZXRoMCAtaiBNQVNRVUVSQURFIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1BIFBPU1RST1VUSU5HIC1zIDEwLjAuMC4wLzI0IC1vIGV0aDAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC10IG5hdCAtQyBQT1NUUk9VVElORyAtcyAxMC4xLjAuMC8yNCAtbyBldGgwIC1qIE1BU1FVRVJBREUgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUEgUE9TVFJPVVRJTkcgLXMgMTAuMS4wLjAvMjQgLW8gZXRoMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcblx0XHRcdF0uam9pbignICYmICcpO1xuXG5cdFx0XHRjbWQoaXB0YWJsZXNDb21tYW5kcywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3RkZXJyKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgdmlhIEV0aGVybmV0IGVuYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0Ly8gRGVmaW5lIGEgbGlzdCBvZiBjb21tYW5kcyB0byByZXBlYXRlZGx5IGF0dGVtcHQgZGVsZXRpb24uXG5cdFx0XHR2YXIgaXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IG51bGw7XG5cblx0XHRcdGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBbXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbmludCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW51c2IgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW51c2IgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tc291cmNlIDEwLjAuMC4wLzI0IC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLXNvdXJjZSAxMC4xLjAuMC8yNCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBNQVNRVUVSQURFJ1xuXHRcdFx0XTtcblxuXHRcdFx0Ly8gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhIGNvbW1hbmQgYW5kIHJlY3Vyc2l2ZWx5IGNhbGwgaXRzZWxmIGlmIHRoZSBjb21tYW5kIHdhcyBzdWNjZXNzZnVsIChydWxlIHdhcyBmb3VuZCBhbmQgZGVsZXRlZCkuXG5cdFx0XHRmdW5jdGlvbiBleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjaykge1xuXHRcdFx0XHRjbWQoY29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3Mgbm8gZXJyb3IsIHRoZSBydWxlIHdhcyBmb3VuZCBhbmQgZGVsZXRlZCwgc28gdHJ5IGFnYWluLlxuXHRcdFx0XHRcdGlmICghZXJyb3IpIHtcblx0XHRcdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvciwgaXQgbGlrZWx5IG1lYW5zIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlIGV4aXN0LCBzbyBjYWxsIHRoZSBkb25lQ2FsbGJhY2suXG5cdFx0XHRcdFx0XHRkb25lQ2FsbGJhY2soKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFeGVjdXRlIGRlbGV0aW9uIGZvciBlYWNoIGNvbW1hbmQgYW5kIHRyYWNrIGNvbXBsZXRpb24uXG5cdFx0XHR2YXIgdGFza3NDb21wbGV0ZWQgPSAwO1xuXHRcdFx0aXB0YWJsZXNEZWxldGVDb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG5cdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgKCkgPT4ge1xuXHRcdFx0XHRcdHRhc2tzQ29tcGxldGVkKys7XG5cdFx0XHRcdFx0Ly8gT25jZSBhbGwgZGVsZXRpb24gdGFza3MgYXJlIGRvbmUsIHNhdmUgdGhlIGlwdGFibGVzIGNvbmZpZ3VyYXRpb24uXG5cdFx0XHRcdFx0aWYgKHRhc2tzQ29tcGxldGVkID09PSBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYGlwdGFibGVzIHJ1bGVzIHNhdmVkLmApO1xuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsICdBbGwgc3BlY2lmaWVkIHJ1bGVzIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvLyAnZGlzYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gW1xuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdC8vIFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdC8vIFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHQvLyBcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0Ly8gXHRcdGlmIChlcnJvcikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGlmIChzdGRlcnIpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXQgZGlzYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdC8vIFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXHRcdCdlbmFibGVJbnRlcm5ldEZvck1hY0V0aGVybmV0JzogZnVuY3Rpb24obWFjQWRkcmVzcywgY2FsbGJhY2spIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvLyBDb21tYW5kIHRvIGFsbG93IGludGVybmV0IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzIG9uIGV0aDAuXG5cdFx0XHR2YXIgYWxsb3dNYWNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1tIG1hYyAtLW1hYy1zb3VyY2UgJHttYWNBZGRyZXNzfSAtaiBBQ0NFUFRgO1xuXHRcdFx0Ly8gQ29tbWFuZCB0byBkcm9wIGFsbCBvdGhlciBpbnRlcm5ldCB0cmFmZmljIG9uIGV0aDAuXG5cdFx0XHR2YXIgYmxvY2tPdGhlcnNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1qIERST1BgO1xuXG5cdFx0XHQvLyBBbGxvdyBpbnRlcm5ldCBmb3IgdGhlIHNwZWNpZmllZCBNQUMgYWRkcmVzcy5cblx0XHRcdHJlcyA9IGNtZChhbGxvd01hY0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYWxsb3dpbmcgTUFDICR7bWFjQWRkcmVzc306ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGFsbG93ZWQgZm9yIE1BQyAke21hY0FkZHJlc3N9LmApO1xuXG5cdFx0XHRcdC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldC5cblx0XHRcdFx0cmVzID0gY21kKGJsb2NrT3RoZXJzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBibG9ja2VkIGZvciBvdGhlciBNQUMgYWRkcmVzc2VzLmApO1xuXHRcdFx0XHRcdC8vIE9wdGlvbmFsbHksIHNhdmUgdGhlIGlwdGFibGVzIHNldHRpbmdzIHRvIG1ha2UgdGhlbSBwZXJzaXN0ZW50LlxuXHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayhudWxsKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdyZW1vdmVBbGxNYWNGaWx0ZXJzRm9yRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0Ly8gTGlzdCBhbGwgRk9SV0FSRCBydWxlcyB3aXRoIGxpbmUgbnVtYmVyc1xuXHRcdFx0Y21kKCdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLS1saW5lLW51bWJlcnMgLW4nLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9jZXNzIHN0ZG91dCB0byBpZGVudGlmeSBydWxlcyByZWxhdGVkIHRvIE1BQyBmaWx0ZXJpbmcgb24gZXRoMFxuXHRcdFx0XHRjb25zdCBsaW5lcyA9IHN0ZG91dC5zcGxpdCgnXFxuJyk7XG5cdFx0XHRcdGNvbnN0IHJ1bGVOdW1iZXJzID0gbGluZXMucmVkdWNlKChhY2MsIGxpbmUsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGxpbmUuaW5jbHVkZXMoJ2V0aDAnKSAmJiBsaW5lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ21hYycpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBydWxlTnVtYmVyID0gbGluZS5zcGxpdCgvXFxzKy8pWzBdOyAvLyBFeHRyYWN0IHRoZSBydWxlIG51bWJlciwgYXNzdW1pbmcgaXQncyB0aGUgZmlyc3QgZWxlbWVudFxuXHRcdFx0XHRcdFx0YWNjLnB1c2gocnVsZU51bWJlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHRcdH0sIFtdKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgaWRlbnRpZmllZCBydWxlcyBzdGFydGluZyBmcm9tIHRoZSBoaWdoZXN0IG51bWJlciB0byBwcmV2ZW50IHNoaWZ0aW5nIG9mIGxpbmUgbnVtYmVyc1xuXHRcdFx0XHRydWxlTnVtYmVycy5zb3J0KChhLCBiKSA9PiBiIC0gYSkuZm9yRWFjaChydWxlTnVtYmVyID0+IHtcblx0XHRcdFx0XHRjbWQoYHN1ZG8gaXB0YWJsZXMgLUQgRk9SV0FSRCAke3J1bGVOdW1iZXJ9YCwgKHJlbW92ZUVycm9yLCByZW1vdmVTdGRvdXQsIHJlbW92ZVN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHJlbW92ZUVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHJlbW92aW5nIHJ1bGUgJHtydWxlTnVtYmVyfTogJHtyZW1vdmVFcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0Ly8gRGVjaWRlIGlmIHlvdSB3YW50IHRvIGNvbnRpbnVlIHJlbW92aW5nIG90aGVyIHJ1bGVzIG9yIHN0b3AgaGVyZVxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgUnVsZSAke3J1bGVOdW1iZXJ9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBBZnRlciBhdHRlbXB0aW5nIHRvIHJlbW92ZSBhbGwgaWRlbnRpZmllZCBydWxlcywgc2F2ZSB0aGUgaXB0YWJsZXMgY29uZmlndXJhdGlvblxuXHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChzYXZlRXJyb3IsIHNhdmVTdGRvdXQsIHNhdmVTdGRlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoc2F2ZUVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7c2F2ZUVycm9yfWApO1xuXHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhzYXZlRXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnaXB0YWJsZXMgcnVsZXMgdXBkYXRlZCBhbmQgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIE1BQyBmaWx0ZXIgcnVsZXMgZm9yIEV0aGVybmV0IHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzTW9iaWxlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcblx0XHRcdHZhciBsaXN0TmF0UnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLXQgbmF0IC1TIFBPU1RST1VUSU5HJztcblxuXHRcdFx0dmFyIGZvcndhcmRSZXN1bHQgPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXHRcdFx0dmFyIG5hdFJlc3VsdCA9IGNtZChsaXN0TmF0UnVsZXNDb21tYW5kKTtcblxuXHRcdFx0aWYgKCFmb3J3YXJkUmVzdWx0KSB7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBGT1JXQVJEIGNoYWluIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghbmF0UmVzdWx0KSB7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBQT1NUUk9VVElORyBjaGFpbiBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0fVxuXG5cblx0XHRcdHZhciBzaGFyaW5nRnJvbVdsYW5pbnRUb1d3YW4gPSBmb3J3YXJkUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW5pbnQgLW8gd3dhbjAgLWogQUNDRVBUJyk7XG5cdFx0XHR2YXIgc2hhcmluZ0Zyb21XbGFudXNiVG9Xd2FuID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFudXNiIC1vIHd3YW4wIC1qIEFDQ0VQVCcpO1xuXHRcdFx0dmFyIHNoYXJpbmdUb1dsYW5pbnRGcm9tV3dhbkVzdGFibGlzaGVkID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnKTtcblx0XHRcdHZhciBzaGFyaW5nVG9XbGFudXNiRnJvbVd3YW5Fc3RhYmxpc2hlZCA9IGZvcndhcmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyk7XG5cblx0XHRcdHZhciBuYXRGb3JXbGFuaW50ID0gbmF0UmVzdWx0LmluY2x1ZGVzKCctQSBQT1NUUk9VVElORyAtcyAxMC4wLjAuMC8yNCAtbyB3d2FuMCAtaiBNQVNRVUVSQURFJyk7XG5cdFx0XHR2YXIgbmF0Rm9yV2xhbnVzYiA9IG5hdFJlc3VsdC5pbmNsdWRlcygnLUEgUE9TVFJPVVRJTkcgLXMgMTAuMS4wLjAvMjQgLW8gd3dhbjAgLWogTUFTUVVFUkFERScpO1xuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdHNoYXJpbmdGcm9tV2xhbmludFRvV3dhbiAmJlxuXHRcdFx0XHRzaGFyaW5nRnJvbVdsYW51c2JUb1d3YW4gJiZcblx0XHRcdFx0c2hhcmluZ1RvV2xhbmludEZyb21Xd2FuRXN0YWJsaXNoZWQgJiZcblx0XHRcdFx0c2hhcmluZ1RvV2xhbnVzYkZyb21Xd2FuRXN0YWJsaXNoZWQgJiZcblx0XHRcdFx0bmF0Rm9yV2xhbmludCAmJlxuXHRcdFx0XHRuYXRGb3JXbGFudXNiXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdCdlbmFibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBudWxsO1xuXHRcdFx0aXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtQyBGT1JXQVJEIC1pIHdsYW51c2IgLW8gd3dhbjAgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3bGFudXNiIC1vIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbmludCAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtQyBGT1JXQVJEIC1pIHd3YW4wIC1vIHdsYW51c2IgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLXQgbmF0IC1DIFBPU1RST1VUSU5HIC1zIDEwLjAuMC4wLzI0IC1vIHd3YW4wIC1qIE1BU1FVRVJBREUgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUEgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gd3dhbjAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC10IG5hdCAtQyBQT1NUUk9VVElORyAtcyAxMC4xLjAuMC8yNCAtbyB3d2FuMCAtaiBNQVNRVUVSQURFIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1BIFBPU1RST1VUSU5HIC1zIDEwLjEuMC4wLzI0IC1vIHd3YW4wIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHRcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGRlcnIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgbW9iaWxlIGVuYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdC8vIERlZmluZSBjb21tYW5kcyBmb3IgZGVsZXRpb24gd2l0aG91dCBjb21iaW5pbmcgdGhlbVxuXHRcdFx0dmFyIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBudWxsO1xuXG5cdFx0XHRpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gW1xuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW5pbnQgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbnVzYiAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbmludCAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1zb3VyY2UgMTAuMC4wLjAvMjQgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLXNvdXJjZSAxMC4xLjAuMC8yNCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERSdcblx0XHRcdF07XG5cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIHJlY3Vyc2l2ZWx5IGV4ZWN1dGUgYSBjb21tYW5kIHVudGlsIGl0IGZhaWxzIChpbmRpY2F0aW5nIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlKVxuXHRcdFx0ZnVuY3Rpb24gZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spIHtcblx0XHRcdFx0Y21kKGNvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHQvLyBObyBlcnJvciBtZWFucyB0aGUgY29tbWFuZCBzdWNjZWVkZWQsIHNvIHRoZXJlIG1pZ2h0IGJlIG1vcmUgaW5zdGFuY2VzXG5cdFx0XHRcdFx0aWYgKCFlcnJvcikge1xuXHRcdFx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBFcnJvciBsaWtlbHkgbWVhbnMgbm8gbW9yZSBpbnN0YW5jZXMgb2YgdGhlIHJ1bGUsIG1vdmUgb25cblx0XHRcdFx0XHRcdGRvbmVDYWxsYmFjaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEV4ZWN1dGUgZGVsZXRpb24gZm9yIGVhY2ggY29tbWFuZCBhbmQgdHJhY2sgd2hlbiBhbGwgYXJlIGNvbXBsZXRlZFxuXHRcdFx0dmFyIHRhc2tzQ29tcGxldGVkID0gMDtcblx0XHRcdGlwdGFibGVzRGVsZXRlQ29tbWFuZHMuZm9yRWFjaCgoY29tbWFuZCkgPT4ge1xuXHRcdFx0XHRleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsICgpID0+IHtcblx0XHRcdFx0XHR0YXNrc0NvbXBsZXRlZCsrO1xuXHRcdFx0XHRcdC8vIEFmdGVyIGFsbCBjb21tYW5kcyBoYXZlIGJlZW4gYXR0ZW1wdGVkLCBzYXZlIHRoZSBjb25maWd1cmF0aW9uXG5cdFx0XHRcdFx0aWYgKHRhc2tzQ29tcGxldGVkID09PSBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHNhdmVTdGRvdXQsIHNhdmVTdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3Igc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnaXB0YWJsZXMgcnVsZXMgZm9yIG1vYmlsZSBpbnRlcmZhY2UgdXBkYXRlZCBhbmQgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgJ0FsbCBzcGVjaWZpZWQgcnVsZXMgZm9yIG1vYmlsZSBpbnRlcmZhY2UgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0Ly8gJ2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdC8vIFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsXG5cdFx0Ly8gXHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0Ly8gXHRdLmpvaW4oJyAmJiAnKTtcblxuXHRcdC8vIFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdFx0aWYgKHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBtb2JpbGUgZGlzYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdC8vIFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXHRcdCdhbGxvd0ludGVybmV0Rm9yTWFjTW9iaWxlJzogZnVuY3Rpb24obWFjQWRkcmVzcywgY2FsbGJhY2spIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvLyBGaXJzdCwgZW5hYmxlIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyB0byB3d2FuMFxuXHRcdFx0cmVzID0gY21kKCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbmludCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUICYmIHN1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFudXNiIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuaW50IC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFudXNiIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgZW5hYmxpbmcgaW50ZXJuZXQgc2hhcmluZzogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBJbnRlcm5ldCBzaGFyaW5nIGVuYWJsZWQgdmlhIHd3YW4wLmApO1xuXHRcdFx0XHQvLyBBbGxvdyBpbnRlcm5ldCBvbmx5IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzIG9uIHd3YW4wXG5cdFx0XHRcdHZhciBhbGxvd01hY0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtSSBGT1JXQVJEIDEgLWkgd3dhbjAgLW0gbWFjIC0tbWFjLXNvdXJjZSAke21hY0FkZHJlc3N9IC1qIEFDQ0VQVGA7XG5cdFx0XHRcdC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldCB2aWEgd3dhbjAuXG5cdFx0XHRcdHZhciBibG9ja090aGVyc0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIHd3YW4wIC1qIERST1BgO1xuXG5cdFx0XHRcdC8vIEFsbG93IHNwZWNpZmljIE1BQ1xuXHRcdFx0XHRyZXMgPSBjbWQoYWxsb3dNYWNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBhbGxvd2luZyBNQUMgJHttYWNBZGRyZXNzfSBvbiBXV0FOOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBhbGxvd2VkIGZvciBNQUMgJHttYWNBZGRyZXNzfSBvbiBXV0FOLmApO1xuXG5cdFx0XHRcdFx0Ly8gQmxvY2sgYWxsIG90aGVyIE1BQ3Ncblx0XHRcdFx0XHRyZXMgPSBjbWQoYmxvY2tPdGhlcnNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDcyBvbiBXV0FOOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBibG9ja2VkIGZvciBvdGhlciBNQUMgYWRkcmVzc2VzIG9uIFdXQU4uYCk7XG5cblx0XHRcdFx0XHRcdC8vIFNhdmUgaXB0YWJsZXMgcnVsZXNcblx0XHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBzYXZpbmcgaXB0YWJsZXMgcnVsZXMgZm9yIFdXQU46ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgZm9yIFdXQU4gc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKG51bGwpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQncmVtb3ZlQWxsTWFjRmlsdGVyc0Zvck1vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBMaXN0IGFsbCBGT1JXQVJEIHJ1bGVzXG5cdFx0XHRjbWQoJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtLWxpbmUtbnVtYmVycyAtbicsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9jZXNzIHN0ZG91dCB0byBmaW5kIHJ1bGVzIHRvIGRlbGV0ZS4gVGhpcyBwYXJ0IGlzIHBzZXVkby1jb2RlIGFuZCBuZWVkcyBhZGp1c3RtZW50XG5cdFx0XHRcdGNvbnN0IGxpbmVzID0gc3Rkb3V0LnNwbGl0KCdcXG4nKTtcblx0XHRcdFx0Y29uc3QgcnVsZU51bWJlcnMgPSBbXTtcblx0XHRcdFx0bGluZXMuZm9yRWFjaChsaW5lID0+IHtcblx0XHRcdFx0XHRpZiAobGluZS5pbmNsdWRlcygnd3dhbjAnKSAmJiBsaW5lLmluY2x1ZGVzKCdNQUMnKSkge1xuXHRcdFx0XHRcdFx0Ly8gRXh0cmFjdCB0aGUgcnVsZSBudW1iZXIgZnJvbSB0aGUgbGluZVxuXHRcdFx0XHRcdFx0Y29uc3QgcnVsZU51bWJlciA9IGxpbmUuc3BsaXQoJyAnKVswXTsgLy8gVGhpcyBpcyBhIHNpbXBsaWZpY2F0aW9uXG5cdFx0XHRcdFx0XHRydWxlTnVtYmVycy5wdXNoKHJ1bGVOdW1iZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIHJ1bGVzIGJ5IHRoZWlyIG51bWJlcnMsIHN0YXJ0aW5nIGZyb20gdGhlIGhpZ2hlc3QgbnVtYmVyXG5cdFx0XHRcdHJ1bGVOdW1iZXJzLnNvcnQoKGEsIGIpID0+IGIgLSBhKS5mb3JFYWNoKHJ1bGVOdW1iZXIgPT4ge1xuXHRcdFx0XHRcdGNtZChgc3VkbyBpcHRhYmxlcyAtRCBGT1JXQVJEICR7cnVsZU51bWJlcn1gLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgcmVtb3ZpbmcgcnVsZSAke3J1bGVOdW1iZXJ9OiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdFx0Ly8gT3B0aW9uYWxseSwgc3RvcCB0aGUgcHJvY2VzcyBvciBjb250aW51ZSBhdHRlbXB0aW5nIHRvIHJlbW92ZSBvdGhlciBydWxlc1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgUnVsZSAke3J1bGVOdW1iZXJ9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBBZnRlciBhbGwgcnVsZXMgaGF2ZSBiZWVuIHByb2Nlc3NlZCwgc2F2ZSB0aGUgaXB0YWJsZXMgcnVsZXNcblx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2lwdGFibGVzIHJ1bGVzIHVwZGF0ZWQgYW5kIHNhdmVkLicpO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgJ0FsbCBNQUMgZmlsdGVyIHJ1bGVzIGZvciBXV0FOIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQncmVib290JzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKCdzdWRvIHJlYm9vdCcsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHQgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdCAgcmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3NodXRkb3duJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKCdzdWRvIGhhbHQnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0ICBjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0XHQgIHJldHVybjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdzeW5jaHJvbml6ZSc6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIHN5bmMuLi5cIik7XG5cblx0XHRcdHZhciBkZXZpY2VTZXJpYWwgPSBNZXRlb3Iuc2V0dGluZ3MucHVibGljLnNlcmlhbDtcblx0XHRcdHZhciBkZXZpY2VUb2tlbiA9IE1ldGVvci5zZXR0aW5ncy5tb29kbGVBUElUb2tlbjtcblx0XHRcdHZhciB1cmwgPSBNZXRlb3Iuc2V0dGluZ3MuY2xvdWRVUkwgKyBcIi9hcGkvc3RhcnRTeW5jXCI7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQnZGV2aWNlU2VyaWFsJzogZGV2aWNlU2VyaWFsLFxuXHRcdFx0XHRcdCdkZXZpY2VUb2tlbic6IGRldmljZVRva2VuXG5cdFx0XHRcdH0sXG5cdFx0XHQgICAgbnBtUmVxdWVzdE9wdGlvbnM6IHtcblx0XHRcdCAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSwgLy8gVE9ETyByZW1vdmUgd2hlbiBkZXBsb3lcblx0XHRcdCAgICAgICAgdGltZW91dDogMTIwMDAwMFxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgdGltZW91dDogMTIwMDAwMFxuXHRcdFx0fVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly92YXIgcmVzdWx0ID0gSFRUUC5jYWxsKCdQT1NUJywgdXJsLCBvcHRpb25zKTtcblxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gSFRUUC5wb3N0KCB1cmwsIG9wdGlvbnMgKTtcblx0XHRcdFx0dmFyIHJlc3VsdENvbnRlbnQgPSByZXN1bHQuY29udGVudDtcblx0XHRcdFx0Ly9TeW5jaHJvbml6YXRpb25zLmluc2VydCh7ZGF0ZTpEYXRlLm5vdygpfSk7XG5cdFx0XHRcdHJldHVybiByZXN1bHRDb250ZW50O1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCBcIkVycm9yIHdoaWxlIHRyeWluZyB0byBzeW5jcm9uaXplLi4uXCIsIGUgKTtcblx0XHRcdFx0cmV0dXJuIFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi4gXCIrIGU7XG5cdFx0XHR9XG5cdFx0Ly9yZXR1cm4gcmVzdWx0Q29udGVudDtcblx0XHR9LFxuXHR9KTtcbn1cbn0pO1xuIiwiLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbEFwcHMnLCBmdW5jdGlvbigpIHtcbi8vIFx0cmV0dXJuIEFwcHMuZmluZCh7fSk7XG4vLyB9KTtcblxuLy8gTWV0ZW9yLnB1Ymxpc2goXCJ1c2Vyc1wiLCBmdW5jdGlvbigpIHtcbi8vICAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoe30sIHtmaWVsZHM6e2NyZWF0ZWRBdDogdHJ1ZSwgcHJvZmlsZTogdHJ1ZSwgZW1haWxzOiB0cnVlLCB1c2VybmFtZTogdHJ1ZX19KTtcbi8vIH0pO1xuXG5cbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIH0pOyIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuXG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9zeW5jaHJvbml6YXRpb25zLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvdXNlcnMuanMnO1xuXG5pbXBvcnQgJy4uL3NlcnZlci9maXh0dXJlcy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci9tZXRob2RzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL3B1YmxpY2F0aW9ucy5qcyc7XG5pbXBvcnQgJy4uL2xpYi9hcHBfbG9hZGVyLmpzJztcblxuXG4vL2ltcG9ydCB7RERQfSBmcm9tICdtZXRlb3IvZGRwJztcbi8vaW1wb3J0IHtBY2NvdW50c30gZnJvbSAnbWV0ZW9yL2FjY291bnRzLWJhc2UnO1xuXG5cbi8vIGltcG9ydCAnLi4vaW1wb3J0cy9zdGFydHVwL3NlcnZlci9maXh0dXJlcy5qcyc7XG5cbi8vIGltcG9ydCAnLi4vaW1wb3J0cy9hcGkvZml4dHVyZXMuanMnO1xuXG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcblx0Y29uc29sZS5sb2coXCJtZXRlb3Igc3RhcnRlZC4uLlwiKTtcblxuXG5cbiAgLy8gY29kZSB0byBydW4gb24gc2VydmVyIGF0IHN0YXJ0dXBcblxuIC8vICBTZXJ2ZXIyID0gRERQLmNvbm5lY3QoXCJodHRwOi8vYmVla2VlLmJveDo4M1wiKTtcblx0Ly8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFNlcnZlcjI7XG5cdC8vIGNvbnNvbGUubG9nKFwib24gY29ubmVjdGUuLi5cIik7XG59KTtcbiJdfQ==
