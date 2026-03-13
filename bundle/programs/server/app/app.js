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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS93aWZpQ2xpZW50TW9kZVN0YXRlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiYWRkQ2xhc3MiLCJmYWRlT3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnQiLCJBcHBzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJhbGxvdyIsImluc2VydCIsInVwZGF0ZSIsInVzZXJJZCIsInNwYWNlIiwicHVibGlzaCIsImFwcHNQdWJsaWNhdGlvbiIsImZpbmQiLCJTeW5jaHJvbml6YXRpb25zIiwic3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uIiwiaXNBZG1pbiIsImNvbnNvbGUiLCJsb2ciLCJSb2xlcyIsInVzZXJJc0luUm9sZSIsInVzZXIiLCJyb2xlQXNzaWdubWVudCIsInJlYWR5IiwiV2lmaUNsaWVudE1vZGVTdGF0ZSIsIndpZmlDbGllbnRNb2RlU3RhdGVQdWJsaWNhdGlvbiIsIl9pZCIsImNyZWF0ZVJvbGUiLCJ1bmxlc3NFeGlzdHMiLCJ1c2VycyIsImNvdW50IiwiYWRtaW5QYXNzd29yZCIsInNldHRpbmdzIiwidXNlcm5hbWUiLCJyb2xlcyIsIl8iLCJlYWNoIiwiaWQiLCJBY2NvdW50cyIsImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJvZmlsZSIsIm5hbWUiLCJsZW5ndGgiLCJhZGRVc2Vyc1RvUm9sZXMiLCJkZWZhdWx0QXBwcyIsImN1c3RvbUFwcCIsIm9ubHlUZWFjaGVyIiwib3JkZXIiLCJkb2NfdXNlciIsImRvY19hZG1pbiIsImxhc3RfdmVyc2lvbiIsInVybCIsImljb24iLCJkZXNjcmlwdGlvbiIsImluc3RhbGxlZCIsInZlcnNpb24iLCJoaWRkZW4iLCJIVFRQIiwiZnMiLCJOcG0iLCJyZXF1aXJlIiwiZXhlYyIsImNtZCIsIndyYXBBc3luYyIsIndpZmlTZXR0aW5nc1BhdGgiLCJjb25maWdQYXRoIiwic2NyaXB0c1BhdGgiLCJ3aWZpQ2xpZW50RW5hYmxlU2NyaXB0TmFtZSIsIndpZmlDbGllbnREaXNhYmxlU2NyaXB0TmFtZSIsIndpZmlDbGllbnRNb2RlU3RhdGVQYXRoIiwicmVhZGxpbmUiLCJzaGVsbEVzY2FwZSIsInZhbHVlIiwiU3RyaW5nIiwicmVwbGFjZSIsInJlc29sdmVTY3JpcHRQYXRoIiwic2NyaXB0TmFtZSIsInJlYWRXaWZpQ2xpZW50TW9kZVN0YXRlIiwiZXhpc3RzU3luYyIsInN0YXRlIiwicmVhZEZpbGVTeW5jIiwidHJpbSIsImVycm9yIiwid3JpdGVXaWZpQ2xpZW50TW9kZVN0YXRlIiwiZW5hYmxlZCIsIndyaXRlRmlsZVN5bmMiLCJwZXJzaXN0V2lmaUNsaWVudE1vZGVTdGF0ZSIsInVwc2VydCIsIiRzZXQiLCJ1cGRhdGVkQXQiLCJEYXRlIiwiZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0iLCJoYXNXbGFuVXNiIiwidG9TdHJpbmciLCJoYXNBcEFkZHJlc3MiLCJkZXRlY3RXaWZpQ2xpZW50TW9kZUZyb21TeXN0ZW0iLCJubVN0YXRlIiwidGVzdCIsImdldFdpZmlDbGllbnRNb2RlU3RhdGUiLCJkZXRlY3RlZFN0YXRlIiwiZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkIiwiRXJyb3IiLCJydW5XaWZpTW9kZVNjcmlwdCIsInNjcmlwdFBhdGgiLCJtZXRob2RzIiwiYWRtaW5JZCIsIm5ld1Bhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjaGVjayIsIm9sZGVtYWlsIiwiZW1haWxzIiwiZW1haWxSZWciLCJyZW1vdmVFbWFpbCIsImFkZHJlc3MiLCJhZGRFbWFpbCIsInJlc3VsdCIsIm1lc3NhZ2UiLCJyZW1vdmVVc2Vyc0Zyb21Sb2xlcyIsImNvbW1hbmQiLCJyZXMiLCJzdG9yYWdlVXNhZ2UiLCJ0b0ZpeGVkIiwic3RvcmFnZVRvdGFsIiwicGVyY2VudGFnZSIsImRhdGEiLCJtYXRjaCIsIlJlZ0V4cCIsIlNTSUQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJuZXdTU0lEIiwiZW5jb2RlZE5ld1NTSUQiLCJCdWZmZXIiLCJuZXdEYXRhIiwiY2hhbm5lbCIsIm5ld0NoYW5uZWwiLCJzZXJpYWwiLCJvcGVyYXRvck5hbWUiLCJzaWduYWxTdHJlbmd0aCIsInN0cmVuZ3RoVmFsdWUiLCJwYXJzZUludCIsInF1YWxpdHkiLCJBUE4iLCJBUE5Vc2VyIiwiQVBOUGFzc3dvcmQiLCJzaW1TdGF0dXNSZXN1bHQiLCJleGVjdXRlQ29tbWFuZCIsInNpbVN0YXR1cyIsImluY2x1ZGVzIiwiU2ltUGluIiwiUElOIiwiaXNTaGFyaW5nIiwicmVzMiIsImlzT25saW5lIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInJlYXNvbiIsIndpZmkiLCJpbml0IiwiaWZhY2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNjYW4iLCJuZXR3b3JrcyIsInVuaXF1ZU5ldHdvcmtzIiwiTWFwIiwiZm9yRWFjaCIsIm5ldHdvcmsiLCJzdHJlbmd0aCIsImtleSIsInNzaWQiLCJtYWMiLCJzdWJzdHJpbmciLCJoYXMiLCJnZXQiLCJzZXQiLCJzZWN1cml0eSIsInVuaXF1ZU5ldHdvcmtzQXJyYXkiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJjb25uZWN0IiwiZGlzY29ubmVjdCIsImRlbGV0ZUNvbm5lY3Rpb24iLCJsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCIsImNvbW1hbmRSZXN1bHQiLCJzaGFyaW5nRnJvbVdsYW5Ub0V0aCIsInNoYXJpbmdUb1dsYW5Gcm9tRXRoRXN0YWJsaXNoZWQiLCJiZWVrZWVPU1ZlcnNpb24iLCJjYWxsIiwic3RhdHVzIiwibWFjQWRkcmVzcyIsImNhbGxiYWNrIiwiaXB0YWJsZXNDb21tYW5kcyIsImpvaW4iLCJzdGRvdXQiLCJzdGRlcnIiLCJpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzIiwiZXhlY3V0ZUFuZFJlcGVhdCIsImRvbmVDYWxsYmFjayIsInRhc2tzQ29tcGxldGVkIiwiYWxsb3dNYWNDb21tYW5kIiwiYmxvY2tPdGhlcnNDb21tYW5kIiwibGluZXMiLCJzcGxpdCIsInJ1bGVOdW1iZXJzIiwicmVkdWNlIiwiYWNjIiwibGluZSIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJydWxlTnVtYmVyIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInJlbW92ZUVycm9yIiwicmVtb3ZlU3Rkb3V0IiwicmVtb3ZlU3RkZXJyIiwic2F2ZUVycm9yIiwic2F2ZVN0ZG91dCIsInNhdmVTdGRlcnIiLCJzaGFyaW5nRnJvbVdsYW5Ub1d3YW4iLCJzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCIsImRldmljZVNlcmlhbCIsInB1YmxpYyIsImRldmljZVRva2VuIiwibW9vZGxlQVBJVG9rZW4iLCJjbG91ZFVSTCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwibnBtUmVxdWVzdE9wdGlvbnMiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJ0aW1lb3V0IiwicG9zdCIsInJlc3VsdENvbnRlbnQiLCJjb250ZW50IiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LENBQVksWUFBVWxDLE1BQU0sQ0FBQzZDLEtBQVAsQ0FBYWhCLElBQWIsR0FBb0JpQixLQUFwQixFQUF0QjtBQUNDLFNBQU85QyxNQUFNLENBQUM2QyxLQUFQLENBQWFoQixJQUFiLEVBQVA7QUFDRCxDQUhELEU7Ozs7Ozs7Ozs7O0FDVEYsSUFBSTdCLE1BQUo7QUFBV2UsTUFBTSxDQUFDSSxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDbkIsUUFBTSxDQUFDb0IsQ0FBRCxFQUFHO0FBQUNwQixVQUFNLEdBQUNvQixDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFETCxNQUFNLENBQUNJLElBQVAsQ0FBWSx3QkFBWjtBQUFzQ0osTUFBTSxDQUFDSSxJQUFQLENBQVksb0NBQVo7QUFBa0RKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHlCQUFaO0FBQXVDSixNQUFNLENBQUNJLElBQVAsQ0FBWSx1QkFBWjtBQUFxQ0osTUFBTSxDQUFDSSxJQUFQLENBQVksc0JBQVo7QUFBb0NKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLDJCQUFaO0FBQXlDSixNQUFNLENBQUNJLElBQVAsQ0FBWSxzQkFBWjtBQVlqVDtBQUNBO0FBR0E7QUFFQTtBQUdBbkIsTUFBTSxDQUFDUSxPQUFQLENBQWUsTUFBTTtBQUNwQnlCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBRG9CLENBS25CO0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FWRCxFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cdEluamVjdC5yYXdIZWFkKFwibWV0YUxvYWRlclwiLCAnPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPTAsIHdpZHRoPWRldmljZS13aWR0aCwgaGVpZ2h0PWRldmljZS1oZWlnaHRcIi8+PG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCI+XHQ8bWV0YSBuYW1lPVwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj4nKTtcblxuXHRJbmplY3QucmF3Qm9keShcImh0bWxMb2FkZXJcIiwgQXNzZXRzLmdldFRleHQoJ2FwcF9sb2FkZXIuaHRtbCcpKTtcbn1cblxuaWYgKE1ldGVvci5pc0NsaWVudCkge1xuXHRNZXRlb3Iuc3RhcnR1cChmdW5jdGlvbigpIHtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdCQoJy5pbmRleC0taWNvbicpLmFkZENsYXNzKCdhbmltYXRlZC1pY29uJyk7XG5cblx0XHRcdCQoXCIjaW5qZWN0LWxvYWRlci13cmFwcGVyXCIpLmZhZGVPdXQoNTAwLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0JCgnLmluZGV4LS1pY29uJykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkLWljb24nKTtcblx0XHR9KTtcblx0XHR9LCA1MDApO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgQXBwcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdob21lLWFwcHMnKTtcblxuXG5cbkFwcHMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0dXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblx0cmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsQXBwcycsIGZ1bmN0aW9uIGFwcHNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gQXBwcy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBTeW5jaHJvbml6YXRpb25zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtc3luY2hyb25pemF0aW9ucycpO1xuXG5cblxuU3luY2hyb25pemF0aW9ucy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHJlbW92ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsU3luY2hyb25pemF0aW9ucycsIGZ1bmN0aW9uIHN5bmNocm9uaXphdGlvbnNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gU3luY2hyb25pemF0aW9ucy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuLy8gdmFyIHVzZXJzREJcdD0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vIHZhciBjb2xsZWN0aW9uXHQ9IHVzZXJzREIub3BlbigndXNlcnMnKTtcblxuXG4vL2NvbnN0IGRhdGFiYXNlID0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vY29uc3QgY29sbGVjdGlvbiA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy9leHBvcnQgY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vIFNoYXJpbmcgdGhlIHNhbWUgQWNjb3VudCBjb2xsZWN0aW9uIHRoYW4gYmVla2VlLWxpdmVcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHQvLyBjaGVjayB0aGF0IHRoZSB1c2VySWQgc3BlY2lmaWVkIGlzIGFkbWluXG5pc0FkbWluID0gZnVuY3Rpb24odXNlcklkKSB7XG5cdGNvbnNvbGUubG9nKFwiaXNhZG1pblwiKTtcbiAgcmV0dXJuIFJvbGVzLnVzZXJJc0luUm9sZShNZXRlb3IudXNlcigpLCAnYWRtaW4nKTtcbn1cblxuXG4vLyBQdWJsaXNoIFJvbGVzIHRvIGNsaWVudFxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoeyAndXNlci5faWQnOiB0aGlzLnVzZXJJZCB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJlYWR5KClcbiAgfVxufSk7XG5cbk1ldGVvci5wdWJsaXNoKG51bGwsIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCgpO1xuXG59KTtcblxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG5cbi8vIFNlcnZlcjIgPSBERFAuY29ubmVjdChcImh0dHA6Ly9iZWVrZWUuYm94OjgzXCIpO1xuLy8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFNlcnZlcjI7XG5cblxuLy92YXIgZGF0YWJhc2UgPSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy9NZXRlb3IudXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vZXhwb3J0IGNvbnN0IFVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2FwcHMnKTtcblxuXG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG5leHBvcnQgY29uc3QgV2lmaUNsaWVudE1vZGVTdGF0ZSA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCd3aWZpQ2xpZW50TW9kZVN0YXRlJyk7XG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblx0TWV0ZW9yLnB1Ymxpc2goJ3dpZmlDbGllbnRNb2RlU3RhdGUnLCBmdW5jdGlvbiB3aWZpQ2xpZW50TW9kZVN0YXRlUHVibGljYXRpb24oKSB7XG5cdFx0cmV0dXJuIFdpZmlDbGllbnRNb2RlU3RhdGUuZmluZCh7IF9pZDogJ3dpZmktY2xpZW50LW1vZGUtc3RhdGUnIH0pO1xuXHR9KTtcbn1cbiIsImltcG9ydCB7IEFwcHMgfSBmcm9tICcuLi9pbXBvcnRzL2FwaS9hcHBzLmpzJztcblxuXHQvLyBDcmVhdGUgdGhlIHJvbGVzXG5cdFJvbGVzLmNyZWF0ZVJvbGUoJ21hbmFnZXInLCB7dW5sZXNzRXhpc3RzOiB0cnVlfSk7XG5cblxuLy8gIyMjICBDcmVhdGUgYWRtaW4gdXNlciBhdCBmaXJzdCBzdGFydCAgIyMjXG5cblxuaWYgKE1ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuXHRcblx0Ly8gQ3JlYXRlIHRoZSByb2xlXG5cdFJvbGVzLmNyZWF0ZVJvbGUoJ21hbmFnZXInLCB7dW5sZXNzRXhpc3RzOiB0cnVlfSk7XG5cdFJvbGVzLmNyZWF0ZVJvbGUoJ2FkbWluJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXG5cdHZhciBhZG1pblBhc3N3b3JkID0gTWV0ZW9yLnNldHRpbmdzLmFkbWluUGFzc3dvcmQ7XG5cblx0dmFyIHVzZXJzID0gW1xuXHRcdHt1c2VybmFtZTpcImFkbWluXCIscm9sZXM6WydhZG1pbiddfSxcblx0XTtcblxuXHRfLmVhY2godXNlcnMsIGZ1bmN0aW9uICh1c2VyKSB7XG5cdFx0dmFyIGlkO1xuXHRcdGlkID0gQWNjb3VudHMuY3JlYXRlVXNlcih7XG5cdFx0XHR1c2VybmFtZTogdXNlci51c2VybmFtZSxcblx0XHRcdGVtYWlsOiBcIkFkbWluXCIsXG5cdFx0XHRwYXNzd29yZDogYWRtaW5QYXNzd29yZCxcblx0XHRcdHByb2ZpbGU6e25hbWU6XCJBZG1pblwifVxuXHRcdH0pO1xuXG5cdFx0aWYgKHVzZXIucm9sZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Um9sZXMuYWRkVXNlcnNUb1JvbGVzKGlkLCB1c2VyLnJvbGVzKTtcblx0XHR9XG5cdH0pO1xufVxuXG5cbmlmIChBcHBzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG5cblx0dmFyIGRlZmF1bHRBcHBzID0gW1xuXHRcdHtuYW1lOlwiTGl2ZVwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjozLCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vbGl2ZS5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtbGl2ZS5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgTGl2ZSBwcm9tb3RlIHJlYWwtdGltZSBpbnRlcmFjdGlvbiBieSBhbGxvd2luZyBsZWFybmVycyB0byBleHByZXNzIHRoZW1zZWx2ZXMgYXNraW5nIHF1ZXN0aW9ucywgcG9zdGluZyBwaG90b3Mgb3Igc2hhcmluZyBmaWxlcy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMS40XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJSZXNvdXJjZXNcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NywgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL3Jlc291cmNlcy5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtcmVzb3VyY2VzLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIldpdGggQmVla2VlIFJlc291cmNlcywgeW91IGNhbiBlYXNpbHkgc2hhcmUgZmlsZXMgd2l0aCB5b3VyIGxlYXJuZXJzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIldoZWVsXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6dHJ1ZSwgb3JkZXI6OSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMC43XCIsIHVybDpcImh0dHA6Ly93aGVlbC5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtd2hlZWwucG5nXCIsIGRlc2NyaXB0aW9uOlwiQmVla2VlIFdoZWVsIGlzIGEgc2ltcGxlIHJhbmRvbSBwaWNrZXIgd2hlZWwgdGhhdCBhbGxvdyB5b3UgdG8gcGljayB1cCBhIHJhbmRvbSBuYW1lLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjhcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlRpbWVyXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjgsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly90aW1lci5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtdGltZXIucG5nXCIsIGRlc2NyaXB0aW9uOlwiQmVla2VlIFRpbWVyIGlzIGEgc2ltcGxlIHRpbWVyIHRoYXQgbGV0cyB5b3VyIGxlYXJuZXJzIGtub3cgaG93IG11Y2ggdGltZSB0aGV5IGhhdmUgbGVmdC5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJNb29kbGVcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjoxLCBkb2NfdXNlcjpcIm1vb2RsZV90ZWFjaGVyZG9jLnBkZlwiLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9tb29kbGUuYmVla2VlLmJveFwiLCBpY29uOlwibW9vZGxlLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIk1vb2RsZSBpcyBhIGZyZWUsIG9ubGluZSBMZWFybmluZyBNYW5hZ2VtZW50IHN5c3RlbSBlbmFibGluZyBlZHVjYXRvcnMgdG8gY3JlYXRlIHRoZWlyIG93biBwcml2YXRlIHdlYnNpdGUgZmlsbGVkIHdpdGggZHluYW1pYyBjb3Vyc2VzIHRoYXQgZXh0ZW5kIGxlYXJuaW5nLCBhbnkgdGltZSwgYW55d2hlcmUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjMuMTEuMlwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiS29saWJyaVwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjIsIGRvY191c2VyOlwia29saWJyaV91c2VyZG9jLnBkZlwiLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9rb2xpYnJpLmJlZWtlZS5ib3hcIiwgaWNvbjpcImtvbGlicmkucG5nXCIsIGRlc2NyaXB0aW9uOlwiS29saWJyaSBpcyBhbiBvcGVuLXNvdXJjZSBlZHVjYXRpb25hbCBwbGF0Zm9ybSBzcGVjaWFsbHkgZGVzaWduZWQgdG8gcHJvdmlkZSBvZmZsaW5lIGFjY2VzcyB0byBhIHdpZGUgcmFuZ2Ugb2YgcXVhbGl0eSwgb3Blbmx5IGxpY2Vuc2VkIGVkdWNhdGlvbmFsIHJlc291cmNlcyBpbiBsb3ctcmVzb3VyY2UgY29udGV4dHMgbGlrZSBydXJhbCBzY2hvb2xzLCByZWZ1Z2VlIGNhbXBzLCBvcnBoYW5hZ2VzLCBhbmQgYWxzbyBpbiBub24tZm9ybWFsIHNjaG9vbCBwcm9ncmFtcy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4xNC43XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0Ly8ge25hbWU6XCJFdGhlcnBhZFwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjUsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9ldGhlcnBhZC5iZWVrZWUuYm94XCIsIGljb246XCJldGhlcnBhZC5wbmdcIiwgZGVzY3JpcHRpb246XCJFdGhlcnBhZCBhbGxvd3MgeW91IHRvIGVkaXQgZG9jdW1lbnRzIGNvbGxhYm9yYXRpdmVseSBpbiByZWFsLXRpbWUsIG11Y2ggbGlrZSBhIGxpdmUgbXVsdGktcGxheWVyIGVkaXRvciB0aGF0IHJ1bnMgaW4geW91ciBicm93c2VyLiBXcml0ZSBhcnRpY2xlcywgcHJlc3MgcmVsZWFzZXMsIHRvLWRvIGxpc3RzLCBldGMuIHRvZ2V0aGVyIHdpdGggeW91ciBmcmllbmRzLCBmZWxsb3cgc3R1ZGVudHMgb3IgY29sbGVhZ3VlcywgYWxsIHdvcmtpbmcgb24gdGhlIHNhbWUgZG9jdW1lbnQgYXQgdGhlIHNhbWUgdGltZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMS44LjE0XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJTdG9ybVwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjQsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9zdG9ybS5iZWVrZWUuYm94XCIsIGljb246XCJzdG9ybS5wbmdcIiwgZGVzY3JpcHRpb246XCJDcmVhdGUgYW5kIGFuaW1hdGUgbGl2ZSBzdXJ2ZXlzLCBicmFpbnN0b3JtcyBhbmQgcXVpenplcy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC40LjVcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlBhZFwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjUsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9wYWQuYmVla2VlLmJveFwiLCBpY29uOlwicGFkLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBjb2xsYWJvcmF0aXZlIHdhbGxzIHRvIHNoYXJlIGFuZCBvcmdhbml6ZSBjb250ZW50LlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjguMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiQnV6emVyXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjp0cnVlLCBvcmRlcjo2LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vYnV6emVyLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJ1enplci5wbmdcIiwgZGVzY3JpcHRpb246XCJDcmVhdGUgYSB2aXJ0dWFsIGdhbWluZyByb29tIGFyb3VuZCBhIGNvbm5lY3RlZCBidXp6ZXIuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMi40XCIsIGhpZGRlbjpmYWxzZX0sXG5cblx0XTtcblxuXHRfLmVhY2goZGVmYXVsdEFwcHMsIGZ1bmN0aW9uIChkZWZhdWx0QXBwcykge1xuXHRcdEFwcHMuaW5zZXJ0KGRlZmF1bHRBcHBzKTtcblx0fSk7XG59IiwiaW1wb3J0IHsgSFRUUCB9IGZyb20gJ21ldGVvci9odHRwJ1xuaW1wb3J0IHsgV2lmaUNsaWVudE1vZGVTdGF0ZSB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL3dpZmlDbGllbnRNb2RlU3RhdGUuanMnO1xuXG5NZXRlb3Iuc3RhcnR1cChmdW5jdGlvbigpIHtcblxuXHRpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0dmFyIGZzID0gTnBtLnJlcXVpcmUoJ2ZzJyk7XG5cdGV4ZWMgPSBOcG0ucmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWM7XG5cdGNtZCA9IE1ldGVvci53cmFwQXN5bmMoZXhlYyk7XG5cblx0dmFyIHdpZmlTZXR0aW5nc1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Mud2lmaVNldHRpbmdzUGF0aDtcblx0dmFyIGNvbmZpZ1BhdGggPSBNZXRlb3Iuc2V0dGluZ3MuY29uZmlnUGF0aDtcblx0dmFyIHNjcmlwdHNQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnNjcmlwdHNQYXRoIHx8ICcvaG9tZS9iZWVrZWUvc2NyaXB0cyc7XG5cdHZhciB3aWZpQ2xpZW50RW5hYmxlU2NyaXB0TmFtZSA9ICdzd2l0Y2hfd2lmaV90b19jbGllbnQuc2gnO1xuXHR2YXIgd2lmaUNsaWVudERpc2FibGVTY3JpcHROYW1lID0gJ3N3aXRjaF93aWZpX3RvX2FwLnNoJztcblx0dmFyIHdpZmlDbGllbnRNb2RlU3RhdGVQYXRoID0gTWV0ZW9yLnNldHRpbmdzLndpZmlDbGllbnRNb2RlU3RhdGVQYXRoIHx8IGAke3NjcmlwdHNQYXRofS8ud2lmaS1jbGllbnQtbW9kZS1zdGF0ZWA7XG5cdGNvbnN0IHJlYWRsaW5lID0gcmVxdWlyZSgncmVhZGxpbmUnKTtcblxuXHRmdW5jdGlvbiBzaGVsbEVzY2FwZSh2YWx1ZSkge1xuXHRcdHJldHVybiBgJyR7U3RyaW5nKHZhbHVlKS5yZXBsYWNlKC8nL2csIGAnXFxcXCcnYCl9J2A7XG5cdH1cblxuXHRmdW5jdGlvbiByZXNvbHZlU2NyaXB0UGF0aChzY3JpcHROYW1lKSB7XG5cdFx0cmV0dXJuIGAke3NjcmlwdHNQYXRofS8ke3NjcmlwdE5hbWV9YDtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlYWRXaWZpQ2xpZW50TW9kZVN0YXRlKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoIWZzLmV4aXN0c1N5bmMod2lmaUNsaWVudE1vZGVTdGF0ZVBhdGgpKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdGF0ZSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpQ2xpZW50TW9kZVN0YXRlUGF0aCwgJ3V0Zi04JykudHJpbSgpO1xuXG5cdFx0XHRpZiAoc3RhdGUgPT09ICdlbmFibGVkJykge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHN0YXRlID09PSAnZGlzYWJsZWQnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIHJlYWRpbmcgV2ktRmkgY2xpZW50IG1vZGUgc3RhdGU6JywgZXJyb3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gd3JpdGVXaWZpQ2xpZW50TW9kZVN0YXRlKGVuYWJsZWQpIHtcblx0XHR0cnkge1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhcblx0XHRcdFx0d2lmaUNsaWVudE1vZGVTdGF0ZVBhdGgsXG5cdFx0XHRcdGVuYWJsZWQgPyAnZW5hYmxlZFxcbicgOiAnZGlzYWJsZWRcXG4nLFxuXHRcdFx0XHQndXRmLTgnXG5cdFx0XHQpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3Igd3JpdGluZyBXaS1GaSBjbGllbnQgbW9kZSBzdGF0ZTonLCBlcnJvcik7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gcGVyc2lzdFdpZmlDbGllbnRNb2RlU3RhdGUoZW5hYmxlZCkge1xuXHRcdHdyaXRlV2lmaUNsaWVudE1vZGVTdGF0ZShlbmFibGVkKTtcblx0XHRXaWZpQ2xpZW50TW9kZVN0YXRlLnVwc2VydChcblx0XHRcdHsgX2lkOiAnd2lmaS1jbGllbnQtbW9kZS1zdGF0ZScgfSxcblx0XHRcdHtcblx0XHRcdFx0JHNldDoge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IGVuYWJsZWQgPT09IHRydWUsXG5cdFx0XHRcdFx0dXBkYXRlZEF0OiBuZXcgRGF0ZSgpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0oKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGhhc1dsYW5Vc2IgPSBjbWQoJ2lwIGxpbmsgc2hvdyB3bGFudXNiID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZScpLnRvU3RyaW5nKCkudHJpbSgpO1xuXG5cdFx0XHRpZiAoaGFzV2xhblVzYiAhPT0gJ3RydWUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaGFzQXBBZGRyZXNzID0gY21kKFwiaXAgLTQgYWRkciBzaG93IHdsYW51c2IgfCBncmVwIC1xICcxMFxcXFwuMVxcXFwuMFxcXFwuMS8yNCcgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIikudG9TdHJpbmcoKS50cmltKCk7XG5cblx0XHRcdHJldHVybiBoYXNBcEFkZHJlc3MgPT09ICd0cnVlJztcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGRldGVjdGluZyBXaS1GaSBhY2Nlc3MgcG9pbnQgbW9kZSBmcm9tIHN5c3RlbTonLCBlcnJvcik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZGV0ZWN0V2lmaUNsaWVudE1vZGVGcm9tU3lzdGVtKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0oKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGhhc1dsYW5Vc2IgPSBjbWQoJ2lwIGxpbmsgc2hvdyB3bGFudXNiID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZScpLnRvU3RyaW5nKCkudHJpbSgpO1xuXG5cdFx0XHRpZiAoaGFzV2xhblVzYiAhPT0gJ3RydWUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgbm1TdGF0ZSA9IGNtZChcIm5tY2xpIC10IC1mIERFVklDRSxTVEFURSBkZXZpY2Ugc3RhdHVzIDI+L2Rldi9udWxsIHwgYXdrIC1GOiAnJDE9PVxcXCJ3bGFudXNiXFxcIiB7cHJpbnQgJDI7IGV4aXR9JyB8fCB0cnVlXCIpLnRvU3RyaW5nKCkudHJpbSgpO1xuXG5cdFx0XHRyZXR1cm4gL14oY29ubmVjdGVkfGRpc2Nvbm5lY3RlZHxjb25uZWN0aW5nfHByZXBhcmluZykvLnRlc3Qobm1TdGF0ZSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBkZXRlY3RpbmcgV2ktRmkgY2xpZW50IG1vZGUgZnJvbSBzeXN0ZW06JywgZXJyb3IpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGdldFdpZmlDbGllbnRNb2RlU3RhdGUoKSB7XG5cdFx0aWYgKGRldGVjdFdpZmlBY2Nlc3NQb2ludE1vZGVGcm9tU3lzdGVtKCkpIHtcblx0XHRcdHBlcnNpc3RXaWZpQ2xpZW50TW9kZVN0YXRlKGZhbHNlKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBkZXRlY3RlZFN0YXRlID0gZGV0ZWN0V2lmaUNsaWVudE1vZGVGcm9tU3lzdGVtKCk7XG5cdFx0cGVyc2lzdFdpZmlDbGllbnRNb2RlU3RhdGUoZGV0ZWN0ZWRTdGF0ZSk7XG5cdFx0cmV0dXJuIGRldGVjdGVkU3RhdGU7XG5cdH1cblxuXHRmdW5jdGlvbiBlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKSB7XG5cdFx0aWYgKCFnZXRXaWZpQ2xpZW50TW9kZVN0YXRlKCkpIHtcblx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ3dpZmktY2xpZW50LW1vZGUtZGlzYWJsZWQnLCAnRW5hYmxlIFdpLUZpIGNsaWVudCBtb2RlIGJlZm9yZSBzY2FubmluZyBvciBjb25uZWN0aW5nLicpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHJ1bldpZmlNb2RlU2NyaXB0KHNjcmlwdE5hbWUpIHtcblx0XHRjb25zdCBzY3JpcHRQYXRoID0gcmVzb2x2ZVNjcmlwdFBhdGgoc2NyaXB0TmFtZSk7XG5cblx0XHRpZiAoIWZzLmV4aXN0c1N5bmMoc2NyaXB0UGF0aCkpIHtcblx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ3dpZmktY2xpZW50LW1vZGUtc2NyaXB0LW1pc3NpbmcnLCBgTWlzc2luZyBXaS1GaSBtb2RlIHNjcmlwdDogJHtzY3JpcHRQYXRofWApO1xuXHRcdH1cblxuXHRcdHJldHVybiBjbWQoYHRpbWVvdXQgNDVzIGJhc2ggJHtzaGVsbEVzY2FwZShzY3JpcHRQYXRoKX1gKTtcblx0fVxuXG5cdGlmIChkZXRlY3RXaWZpQWNjZXNzUG9pbnRNb2RlRnJvbVN5c3RlbSgpKSB7XG5cdFx0cGVyc2lzdFdpZmlDbGllbnRNb2RlU3RhdGUoZmFsc2UpO1xuXHR9IGVsc2Uge1xuXHRcdHBlcnNpc3RXaWZpQ2xpZW50TW9kZVN0YXRlKGRldGVjdFdpZmlDbGllbnRNb2RlRnJvbVN5c3RlbSgpKTtcblx0fVxuXG5cblx0TWV0ZW9yLm1ldGhvZHMoe1xuXG5cdFx0J2FkbWluU2V0TmV3UGFzc3dvcmQnOiBmdW5jdGlvbihhZG1pbklkLCB1c2VySWQsIG5ld1Bhc3N3b3JkKSB7IC8vIEFkbWluIGNhbiBmb3JjaWJseSBjaGFuZ2UgdGhlIHBhc3N3b3JkIGZvciBhIHVzZXJcblx0XHRcdGlmIChSb2xlcy51c2VySXNJblJvbGUoYWRtaW5JZCwgJ2FkbWluJykpIHtcblx0XHRcdFx0QWNjb3VudHMuc2V0UGFzc3dvcmQodXNlcklkLCBuZXdQYXNzd29yZCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnY3JlYXRlQWNjb3VudCc6IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCwgcHJvZmlsZSkge1xuXHRcdFx0cmV0dXJuIEFjY291bnRzLmNyZWF0ZVVzZXIoe2VtYWlsOmVtYWlsLHBhc3N3b3JkOnBhc3N3b3JkLHByb2ZpbGU6cHJvZmlsZX0pOyAvLyBDYWxsYmFjayBpcyBub3Qgc3VwcG9ydGVkIG9uIHNlcnZlci1zaWRlXG5cdFx0fSxcblx0XHQnZWRpdEFjY291bnQnOiBmdW5jdGlvbih1c2VySWQsIGVtYWlsLCBwYXNzd29yZCwgcHJvZmlsZSkge1xuXHRcdFx0TWV0ZW9yLnVzZXJzLnVwZGF0ZSh7X2lkOiB1c2VySWR9LCB7XG5cdCAgXHRcdFx0JHNldDoge1xuXHQgICAgXHRcdFx0J2VtYWlscy4wLmFkZHJlc3MnOiBlbWFpbCxcblx0ICAgIFx0XHRcdHByb2ZpbGU6IHByb2ZpbGVcblx0ICBcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGlmIChwYXNzd29yZCkge1xuXHRcdFx0XHRBY2NvdW50cy5zZXRQYXNzd29yZCh1c2VySWQsIHBhc3N3b3JkKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdjaGFuZ2VFbWFpbCc6IGZ1bmN0aW9uKGVtYWlsKSB7XG5cdFx0XHR2YXIgZW1haWwgPSBlbWFpbDtcblx0XHRcdGNoZWNrKGVtYWlsLCBTdHJpbmcpO1xuXHRcdFx0dmFyIHVzZXIgPSBNZXRlb3IudXNlcigpO1xuXHRcdFx0dmFyIG9sZGVtYWlsID0gdXNlci5lbWFpbHM7XG5cdFx0XHR2YXIgZW1haWxSZWcgPSAvXihbXFx3LVxcLl0rQChbXFx3LV0rXFwuKStbXFx3LV17Miw0fSk/JC87XG5cdFx0XHRpZiAoZW1haWxSZWcudGVzdChlbWFpbCkpIHtcblx0XHRcdGlmKG9sZGVtYWlsICE9IG51bGwpe1xuXHRcdFx0ICBBY2NvdW50cy5yZW1vdmVFbWFpbCh1c2VyLl9pZCwgdXNlci5lbWFpbHNbMF0uYWRkcmVzcylcblx0XHRcdH1cblx0XHRcdEFjY291bnRzLmFkZEVtYWlsKHVzZXIuX2lkLCBlbWFpbCk7XG5cdFx0XHRyZXR1cm4gZW1haWw7XG5cdFx0ICB9IGVsc2Vcblx0XHQgIHJldHVybiBudWxsXG5cdFx0IH0sXG5cdFx0J2RlbGV0ZVVzZXInOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdE1ldGVvci51c2Vycy5yZW1vdmUodXNlcklkLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHdoZW4gZGVsZXRpbmcgdXNlciA6IFwiK2Vycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdhZGRNYW5hZ2VyUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJZCwgJ21hbmFnZXInKTtcblx0XHR9LFxuXHRcdCdyZW1vdmVNYW5hZ2VyUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMucmVtb3ZlVXNlcnNGcm9tUm9sZXModXNlcklkLCAnbWFuYWdlcicpO1xuXHRcdH0sXG5cdFx0J2FkZEFkbWluUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJZCwgJ2FkbWluJyk7XG5cdFx0fSxcblx0XHQncmVtb3ZlQWRtaW5Sb2xlJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRSb2xlcy5yZW1vdmVVc2Vyc0Zyb21Sb2xlcyh1c2VySWQsICdhZG1pbicpO1xuXHRcdH0sXG5cblx0XHQvLyAnZ2V0VXNlZFNwYWNlJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0cmVzID0gY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIikgKyBcIi8gXCIgKyBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKSArIFwiIChcIitjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKStcInVzZWQpXCI7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzO1xuXHRcdC8vIH0sXG5cdFx0J3J1bkNvbW1hbmQnOiBmdW5jdGlvbihwYXNzd29yZCwgY29tbWFuZCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcImVjaG8gXCIrcGFzc3dvcmQrXCIgfCBzdWRvIC1TIFwiK2NvbW1hbmQpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRVc2VkU3BhY2UnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXMgPSB7fTtcblx0XHRcdC8vcmVzID0gY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIikgKyBcIi8gXCIgKyBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKSArIFwiIChcIitjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKStcInVzZWQpXCI7XG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIilcblx0XHRcdHJlcy5zdG9yYWdlVXNhZ2UgPSByZXMuc3RvcmFnZVVzYWdlLzEwMDAwMDA7XG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gcmVzLnN0b3JhZ2VVc2FnZS50b0ZpeGVkKDIpO1xuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpXG5cdFx0XHRyZXMuc3RvcmFnZVRvdGFsID0gcmVzLnN0b3JhZ2VUb3RhbC8xMDAwMDAwO1xuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IHJlcy5zdG9yYWdlVG90YWwudG9GaXhlZCgyKTtcblx0XHRcdHJlcy5wZXJjZW50YWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFNTSUQnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnc3NpZD0oLiopJykpO1xuICBcdFx0XHR2YXIgU1NJRCA9IG1hdGNoWzFdO1xuICBcdFx0XHRTU0lEID0gZGVjb2RlVVJJQ29tcG9uZW50KFNTSUQucmVwbGFjZSgvLi4vZywgJyUkJicpKVxuICBcdFx0XHRyZXR1cm4gU1NJRDtcblx0XHR9LFxuXHRcdCdzZXRTU0lEJzogZnVuY3Rpb24obmV3U1NJRCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdGNvbnN0IGVuY29kZWROZXdTU0lEID0gbmV3IEJ1ZmZlcihuZXdTU0lEKS50b1N0cmluZygnaGV4Jyk7IC8vIENvbnZlcnQgaW50byBIZXhcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdzc2lkPSguKiknKSlbMV0sIGVuY29kZWROZXdTU0lEKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0V2lmaVBhc3N3b3JkJzogZnVuY3Rpb24oKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3Bhc3N3b3JkPSguKiknKSk7XG4gIFx0XHRcdHZhciBwYXNzd29yZCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gcGFzc3dvcmQ7XG5cdFx0fSxcblx0XHQnc2V0V2lmaVBhc3N3b3JkJzogZnVuY3Rpb24obmV3UGFzc3dvcmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3Bhc3N3b3JkPSguKiknKSlbMV0sIG5ld1Bhc3N3b3JkKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0V2lmaUNoYW5uZWwnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJykpO1xuICBcdFx0XHR2YXIgY2hhbm5lbCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gY2hhbm5lbDtcblx0XHR9LFxuXHRcdCdzZXRXaWZpQ2hhbm5lbCc6IGZ1bmN0aW9uKG5ld0NoYW5uZWwpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpKVsxXSwgbmV3Q2hhbm5lbCk7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0Ly8gJ2dldFdpZmlCYW5kJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcblx0XHQvLyBcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnYmFuZD0oLiopJykpO1xuXG5cdFx0Ly8gXHRpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHQvLyBcdCAgcmV0dXJuIG1hdGNoWzFdO1xuXHRcdC8vIFx0fSBlbHNlIHtcblx0XHQvLyBcdCAgLy8gUmV0dXJuIGRlZmF1bHQgdmFsdWUgaWYgdGhlIGJhbmQgc2V0dGluZyBkb2VzIG5vdCBleGlzdFxuXHRcdC8vIFx0ICByZXR1cm4gJzIuNEdIeic7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gICB9LFxuXHRcdC8vICdzZXRXaWZpQmFuZCc6IGZ1bmN0aW9uKG5ld0JhbmQpIHtcblx0XHQvLyBcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuXHRcdC8vIFx0dmFyIGJhbmRSZWdleCA9IG5ldyBSZWdFeHAoJ2JhbmQ9KC4qKScpO1xuXHRcdC8vIFx0dmFyIGNoYW5uZWxSZWdleCA9IG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpO1xuXHRcdC8vIFx0dmFyIG1hdGNoQmFuZCA9IGRhdGEubWF0Y2goYmFuZFJlZ2V4KTtcblx0XHQvLyBcdHZhciBtYXRjaENoYW5uZWwgPSBkYXRhLm1hdGNoKGNoYW5uZWxSZWdleCk7XG5cblx0XHQvLyBcdHZhciBuZXdEYXRhID0gZGF0YTtcblxuXHRcdC8vIFx0aWYgKG1hdGNoQmFuZCkge1xuXHRcdC8vIFx0XHQvLyBSZXBsYWNlIHRoZSBleGlzdGluZyBiYW5kIHNldHRpbmdcblx0XHQvLyBcdFx0bmV3RGF0YSA9IG5ld0RhdGEucmVwbGFjZShiYW5kUmVnZXgsIGBiYW5kPSR7bmV3QmFuZH1gKTtcblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0XHRuZXdEYXRhID0gYCR7bmV3RGF0YS50cmltKCl9XFxuYmFuZD0ke25ld0JhbmR9YDtcblx0XHQvLyBcdH1cblxuXHRcdC8vIFx0aWYgKG1hdGNoQ2hhbm5lbCAmJiBtYXRjaENoYW5uZWxbMV0pIHtcblx0XHQvLyBcdFx0Ly8gQ29udmVydCB0aGUgY2hhbm5lbCB2YWx1ZSB0byBhIG51bWJlclxuXHRcdC8vIFx0XHR2YXIgY3VycmVudENoYW5uZWwgPSBwYXJzZUludChtYXRjaENoYW5uZWxbMV0sIDEwKTtcblxuXHRcdC8vIFx0XHQvLyBTZXQgY2hhbm5lbCB0byBhIGRlZmF1bHQgMi40R0h6IGNoYW5uZWwgaWYgY3VycmVudCBjaGFubmVsIGlzIGZvciA1R0h6XG5cdFx0Ly8gXHRcdGlmIChuZXdCYW5kID09IFwiMi40R0h6XCIgJiYgY3VycmVudENoYW5uZWwgPiAxNCkge1xuXHRcdC8vIFx0XHRcdG5ld0RhdGEgPSBuZXdEYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD0xMWApO1xuXHRcdC8vIFx0XHR9IGVsc2UgaWYgKG5ld0JhbmQgPT0gXCI1R0h6XCIgJiYgY3VycmVudENoYW5uZWwgPD0gMTQpIHtcblx0XHQvLyBcdFx0XHRuZXdEYXRhID0gbmV3RGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9NDRgKTtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fVxuXG5cdFx0Ly8gXHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdC8vIH0sXG5cdFx0Ly8gICAnc2V0V2lmaUJhbmQnOiBmdW5jdGlvbihuZXdCYW5kKSB7XG5cdFx0Ly8gXHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcblx0XHQvLyBcdHZhciBiYW5kUmVnZXggPSBuZXcgUmVnRXhwKCdiYW5kPSguKiknKTtcblx0XHQvLyBcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2goYmFuZFJlZ2V4KTtcblxuXHRcdC8vIFx0aWYgKG1hdGNoKSB7XG5cdFx0Ly8gXHQgIC8vIFJlcGxhY2UgdGhlIGV4aXN0aW5nIGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0ICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShiYW5kUmVnZXgsIGBiYW5kPSR7bmV3QmFuZH1gKTtcblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHQgIC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0ICB2YXIgbmV3RGF0YSA9IGAke2RhdGEudHJpbSgpfVxcbmJhbmQ9JHtuZXdCYW5kfWA7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHR2YXIgY2hhbm5lbFJlZ2V4ID0gbmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJyk7XG5cdFx0Ly8gXHR2YXIgbWF0Y2gyID0gZGF0YS5tYXRjaChjaGFubmVsUmVnZXgpO1xuXHRcdC8vIFx0aWYgKG1hdGNoMiAmJiBtYXRjaDJbMV0pIHtcblx0XHQvLyBcdFx0Ly8gU2V0IGNoYW5uZWwgdG8gYSBkZWZhdWx0IDIuNEdIeiBjaGFubmVsIGlmIGN1cnJlbnQgY2hhbm5lbCBpcyBmb3IgNUdIelxuXHRcdC8vIFx0XHRpZiAobmV3QmFuZCA9PSBcIjIuNEdIelwiICYmIG1hdGNoMlsxXSA+IDE0KSB7XG5cdFx0Ly8gXHRcdFx0Ly8gQXBwZW5kIHRoZSBuZXcgYmFuZCBzZXR0aW5nXG5cdFx0Ly8gXHRcdFx0dmFyIG5ld0RhdGEyID0gZGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9MTFgKTtcblx0XHQvLyBcdFx0fSBlbHNlIGlmIChuZXdCYW5kID09IFwiNUdIelwiICYmIG1hdGNoMlsxXSA8PSAxNCkge1xuXHRcdC8vIFx0XHRcdHZhciBuZXdEYXRhMiA9IGRhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTQ0YCk7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH1cblx0XHQvLyBcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0Ly8gICB9LFxuXHRcdCdnZXRTZXJpYWwnOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ1NFUklBTD0oLiopJykpO1xuICBcdFx0XHR2YXIgc2VyaWFsID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBzZXJpYWw7XG5cdFx0fSxcblx0XHQnZ2V0T3BlcmF0b3JOYW1lJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgb3BlcmF0b3JOYW1lO1xuXHRcdFx0b3BlcmF0b3JOYW1lID0gY21kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtb3BlcmF0b3ItbmFtZSB8IGdyZXAgLW0yICdOYW1lICAgICAgICAgICAgICcgfCBhd2sgJ3twcmludCAkM30nXCIpO1xuXHRcdFx0cmV0dXJuIG9wZXJhdG9yTmFtZTtcblx0XHR9LFxuXHRcdC8vICdnZXRTaWduYWxTdHJlbmd0aCc6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdHZhciBzaWduYWxTdHJlbmd0aDtcblx0XHQvLyBcdHNpZ25hbFN0cmVuZ3RoID0gY21kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayAne3ByaW50ICQzLCAkMn0nXCIpO1xuXHRcdC8vIFx0cmV0dXJuIHNpZ25hbFN0cmVuZ3RoO1xuXHRcdC8vIH0sXG5cdFx0J2dldFNpZ25hbFN0cmVuZ3RoJzogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHNpZ25hbFN0cmVuZ3RoO1xuXHRcdFx0Ly8gVGhpcyBleHRyYWN0cyBqdXN0IHRoZSBudW1lcmljIHBhcnQgb2YgdGhlIHNpZ25hbCBzdHJlbmd0aC5cblx0XHRcdHNpZ25hbFN0cmVuZ3RoID0gY21kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAnTmV0d29yaycgfCBhd2sgJ3twcmludCAkM30nIHwgZ3JlcCAtb0UgJ1stMC05XSsnXCIpO1xuXG5cdFx0XHQvLyBDb252ZXJ0IHNpZ25hbCBzdHJlbmd0aCB0byBhIHF1YWxpdGF0aXZlIHZhbHVlXG5cdFx0XHR2YXIgc3RyZW5ndGhWYWx1ZSA9IHBhcnNlSW50KHNpZ25hbFN0cmVuZ3RoKTtcblx0XHRcdHZhciBxdWFsaXR5ID0gJ1Vua25vd24nO1xuXHRcdFx0aWYgKHN0cmVuZ3RoVmFsdWUgPj0gLTcwKSB7XG5cdFx0XHRcdHF1YWxpdHkgPSAnRXhjZWxsZW50Jztcblx0XHRcdH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtODUpIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdHb29kJztcblx0XHRcdH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtMTAwKSB7XG5cdFx0XHRcdHF1YWxpdHkgPSAnRmFpcic7XG5cdFx0XHR9IGVsc2UgaWYgKHN0cmVuZ3RoVmFsdWUgPCAtMTAwKSB7XG5cdFx0XHRcdHF1YWxpdHkgPSAnUG9vcic7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcXVhbGl0eTtcblx0XHR9LFxuXHRcdC8vICdnZXRJc09ubGluZSc6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdHZhciBpc09ubGluZTtcblx0XHQvLyBcdGlzT25saW5lID0gY21kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayAne3ByaW50ICQzLCAkMn0nXCIpO1xuXHRcdC8vIFx0cmV0dXJuIGlzT25saW5lO1xuXHRcdC8vIH0sXG5cdFx0Ly8gJ2dldEJhbmQnOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHR2YXIgYmFuZDtcbi8vXHRcdFx0YmFuZCA9IGNtZChcInN1ZG8gcW1pY2xpIC1wIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgLW0xIE5ldHdvcmsgfCBhd2sgXFxcIntwcmludCAkMn1cXFwiIHwgY3V0IC1kXFxcXCcgLWYyXCIpO1xuXHRcdC8vIFx0cmV0dXJuIGJhbmQ7XG5cdFx0Ly8gfSxcblx0XHQnZ2V0QVBOJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49KC4qKScpKTtcbiAgXHRcdFx0dmFyIEFQTiA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gQVBOO1xuXHRcdH0sXG5cdFx0J2dldEFQTlVzZXInOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9VU0VSTkFNRT0oLiopJykpO1xuICBcdFx0XHR2YXIgQVBOVXNlciA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gQVBOVXNlcjtcblx0XHR9LFxuXHRcdCdnZXRBUE5QYXNzd29yZCc6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1BBU1NXT1JEPSguKiknKSk7XG4gIFx0XHRcdHZhciBBUE5QYXNzd29yZCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gQVBOUGFzc3dvcmQ7XG5cdFx0fSxcblx0XHQnZ2V0U2ltQ2FyZFN0YXR1cyc6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBzaW1TdGF0dXNSZXN1bHQgPSAnVW5rbm93bic7IC8vIERlZmF1bHQgc3RhdHVzXG5cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgY29tbWFuZCBhbmQgaGFuZGxlIGVycm9yc1xuXHRcdFx0ZnVuY3Rpb24gZXhlY3V0ZUNvbW1hbmQoY29tbWFuZCkge1xuXHRcdFx0XHRsZXQgcmVzdWx0O1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IGNtZChjb21tYW5kKTsgLy8gRXhlY3V0ZSB0aGUgY29tbWFuZFxuXHRcdFx0XHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJiByZXN1bHQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdC8vIENoZWNrIGlmIHJlc3VsdCBpcyBhbiBlcnJvciBvYmplY3Rcblx0XHRcdFx0XHRcdHJldHVybiAnRXJyb3InO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHQvLyBIYW5kbGUgZXhjZXB0aW9ucyBpZiBjb21tYW5kIGV4ZWN1dGlvbiBmYWlsc1xuXHRcdFx0XHRcdHJldHVybiAnRXJyb3InO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7IC8vIFJldHVybiB0aGUgcmVzdWx0IGlmIG5vIGVycm9yc1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFeGVjdXRlIFNJTSBjYXJkIHN0YXR1cyBjaGVjayBjb21tYW5kXG5cdFx0XHRsZXQgc2ltU3RhdHVzID0gZXhlY3V0ZUNvbW1hbmQoXCJzdWRvIHFtaWNsaSAtcCAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tdWltLWdldC1jYXJkLXN0YXR1cyB8IGdyZXAgJ0NhcmQgc3RhdGU6J1wiKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiU0lNIGNhcmQgc3RhdHVzOlwiLCBzaW1TdGF0dXMpOyAvLyBMb2cgdGhlIHJhdyBvdXRwdXRcblx0XHRcdC8vIFByb2Nlc3MgdGhlIG91dHB1dCBhbmQgZGV0ZXJtaW5lIFNJTSBjYXJkIHN0YXR1c1xuXHRcdFx0aWYgKHNpbVN0YXR1cy5pbmNsdWRlcygnbm8tYXRyLXJlY2VpdmVkJykgfHwgc2ltU3RhdHVzLmluY2x1ZGVzKCdub3QtaW5zZXJ0ZWQnKSkge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSAnTm8gU0lNIGNhcmQnO1xuXHRcdFx0fSBlbHNlIGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoJ2Vycm9yJykpIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gc2ltU3RhdHVzOyAvLyBVc2UgdGhlIGVycm9yIG1lc3NhZ2Ugb3Igbm8gU0lNIGRldGVjdGVkIG1lc3NhZ2Vcblx0XHRcdH0gZWxzZSBpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKCdwcmVzZW50JykpIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gJ09LJztcblx0XHRcdH0gZWxzZSBpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKCdsb2NrZWQnKSB8fCBzaW1TdGF0dXMuaW5jbHVkZXMoJ3Bpbi1yZXF1aXJlZCcpKSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9ICdTSU0gY2FyZCBsb2NrZWQsIFBJTiByZXF1aXJlZCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSAnVW5rbm93bic7IC8vIEZvciBvdGhlciBzdGF0dXNlc1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNpbVN0YXR1c1Jlc3VsdDtcblx0XHR9LFxuXHRcdCdnZXRTaW1QaW4nOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ1NJTV9QSU49KC4qKScpKTtcbiAgXHRcdFx0dmFyIFNpbVBpbiA9IG1hdGNoWzFdO1xuXHRcdFx0cmV0dXJuIFNpbVBpbjtcblx0XHR9LFxuXHRcdCdzZXRTaW1QaW4nOiBmdW5jdGlvbihQSU4pIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ1NJTV9QSU49LionKSksICdTSU1fUElOPScrUElOKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOJzogZnVuY3Rpb24oQVBOLCB1c2VyLCBwYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOPS4qJykpLCAnQVBOPScrQVBOKTtcbiAgXHRcdFx0Ly8gdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49KC4qKScpKVsxXSwgQVBOKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOVXNlcic6IGZ1bmN0aW9uKEFQTlVzZXIpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9VU0VSTkFNRT0uKicpKSwgJ0FQTl9VU0VSTkFNRT0nK0FQTlVzZXIpO1xuICBcdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J3NldEFQTlBhc3N3b3JkJzogZnVuY3Rpb24oQVBOUGFzc3dvcmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9QQVNTV09SRD0uKicpKSwgJ0FQTl9QQVNTV09SRD0nK0FQTlBhc3N3b3JkKTtcbiAgXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRSZW1vdGVTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzeXN0ZW1jdGwgaXMtYWN0aXZlIHJlbW90ZS1pb3Quc2VydmljZSA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyAxIHx8IGVjaG8gMFwiKTtcblx0XHRcdGlmIChyZXNbMF0gPT0gXCIxXCIpIHsgLy8gWzBdIGlzIGEgaGFjayBiZWNhdXNlIHRoZSByZXN1bHQgcmVzIGhhcyBvbmUgZXh0cmEgY2hhcmFjdGVyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQnZ2V0QXV0b1N5bmNTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzeXN0ZW1jdGwgaXMtYWN0aXZlIGF1dG9zeW5jLnNlcnZpY2UgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gMSB8fCBlY2hvIDBcIik7XG5cdFx0XHRpZiAocmVzWzBdID09IFwiMVwiKSB7IC8vIFswXSBpcyBhIGhhY2sgYmVjYXVzZSB0aGUgcmVzdWx0IHJlcyBoYXMgb25lIGV4dHJhIGNoYXJhY3RlclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0J2dldFNoYXJlSW50ZXJuZXRWaWFFdGhlcm5ldFN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlzU2hhcmluZztcblx0XHRcdGlzU2hhcmluZyA9IGNtZChcIihzdWRvIGlwdGFibGVzIC10IG5hdCAtTCBQT1NUUk9VVElORyAtdiAtbiB8IGdyZXAgLXEgJ01BU1FVRVJBREUgIGFsbCAgLS0gICogICAgICBldGgwJyAmJiBpcCBsaW5rIHNob3cgZXRoMCB8IGdyZXAgLXEgJ3N0YXRlIFVQJykgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIik7XG5cdFx0XHRyZXR1cm4gaXNTaGFyaW5nO1xuXHRcdH0sXG5cdFx0J2dldFNoYXJlSW50ZXJuZXRWaWFNb2JpbGVTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpc1NoYXJpbmc7XG5cdFx0XHRpc1NoYXJpbmcgPSBjbWQoXCIoc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUwgUE9TVFJPVVRJTkcgLXYgLW4gfCBncmVwIC1xICdNQVNRVUVSQURFICBhbGwgIC0tICAqICAgICAgd3dhbjAnICYmIGlwIGxpbmsgc2hvdyB3d2FuMCB8IGdyZXAgLXEgJ3N0YXRlIFVQJykgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIik7XG5cdFx0XHRyZXR1cm4gaXNTaGFyaW5nO1xuXHRcdH0sXG5cdFx0Ly8gJ2FjdGl2YXRlSW50ZXJuZXRTaGFyaW5nJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0cmVzID0gY21kKFwic3VkbyB3aWZpLWFwLmNvbmZpZyBzZXQgc2hhcmUuZGlzYWJsZWQ9ZmFsc2VcIik7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzO1xuXHRcdC8vIH0sXG5cdFx0Ly8gJ2Rpc2FjdGl2YXRlSW50ZXJuZXRTaGFyaW5nJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0cmVzID0gY21kKFwic3VkbyB3aWZpLWFwLmNvbmZpZyBzZXQgc2hhcmUuZGlzYWJsZWQ9dHJ1ZVwiKTtcblx0XHQvLyBcdHJldHVybiByZXM7XG5cdFx0Ly8gfSxcblx0XHQnYWN0aXZhdGVSZW1vdGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdGFydCByZW1vdGUtaW90LnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZW5hYmxlIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZGlzYWN0aXZhdGVSZW1vdGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdG9wIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBkaXNhYmxlIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnYWN0aXZhdGVBdXRvU3luYyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0YXJ0IGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZW5hYmxlIGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2Rpc2FjdGl2YXRlQXV0b1N5bmMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdG9wIGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZGlzYWJsZSBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRCYXR0ZXJ5U3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0dmFyIHNjcmlwdHNQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnNjcmlwdHNQYXRoO1xuXHRcdFx0cmVzID0gY21kKFwicHl0aG9uMyBcIitzY3JpcHRzUGF0aCtcIi9waWp1aWNlX3N0YXR1cy5weVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQvLyAnZ2V0SXNPbmxpbmUnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciByZXM7XG5cdFx0Ly8gXHR2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGg7XG5cdFx0Ly8gXHQvLyBNYWtlIHN1cmUgeW91ciBzY3JpcHQgaXMgZXhlY3V0YWJsZSwgZS5nLiwgY2htb2QgK3ggY2hlY2tfaW50ZXJuZXQuc2hcblx0XHQvLyBcdHJlcyA9IGNtZChcImJhc2ggXCIgKyBzY3JpcHRzUGF0aCArIFwiL2NoZWNrX2ludGVybmV0LnNoXCIpOyAvLyBSZXBsYWNlICdiYXNoJyB3aXRoICdzaCcgaWYgbmVlZGVkXG5cdFx0Ly8gXHQvLyBUaGUgc2NyaXB0IHJldHVybnMgXCJ0cnVlXCIgb3IgXCJmYWxzZVwiIGFzIGEgc3RyaW5nLCBzbyB3ZSBjb21wYXJlIHRoZSByZXN1bHQgZGlyZWN0bHlcblx0XHQvLyBcdHJldHVybiByZXMudHJpbSgpID09PSBcInRydWVcIjsgLy8gVGhpcyBjb252ZXJ0cyB0aGUgc3RyaW5nIHRvIGEgYm9vbGVhblxuXHRcdC8vIH0sXG5cdFx0J2dldElzT25saW5lJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgcmVzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzID0gY21kKFwicGluZyAtYyAxIDguOC44LjhcIik7XG5cdFx0XHRcdC8vIENoZWNrIGlmIHRoZSBwaW5nIGNvbW1hbmQgd2FzIHN1Y2Nlc3NmdWwgYmFzZWQgb24gdGhlIG91dHB1dFxuXHRcdFx0XHRsZXQgaXNPbmxpbmUgPSByZXMuaW5jbHVkZXMoXCIxIHBhY2tldHMgcmVjZWl2ZWRcIikgfHwgcmVzLmluY2x1ZGVzKFwiMSByZWNlaXZlZFwiKTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJPbmxpbmUgc3RhdHVzOlwiLCBpc09ubGluZSk7IC8vIENvcnJlY3RseSBsb2dnaW5nIHRoZSBib29sZWFuIHJlc3VsdFxuXHRcdFx0XHRyZXR1cm4gaXNPbmxpbmU7IC8vIERpcmVjdGx5IHJldHVybiB0aGUgYm9vbGVhbiB2YWx1ZVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Ly8gSWYgYW4gZXJyb3Igb2NjdXJzICh3aGljaCBjb3VsZCBpbmNsdWRlIGJlaW5nIHVuYWJsZSB0byBydW4gdGhlIHBpbmcgY29tbWFuZCksIGFzc3VtZSBvZmZsaW5lXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igb3Igb2ZmbGluZTpcIiwgZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIEFzc3VtZSBvZmZsaW5lIGlmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdnZXRFdGgwSVAnOiBmdW5jdGlvbigpIHsgLy8gR2V0IElQIG9mIGJveFxuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vY29uc29sZS5sb2coXCJyZXN1bHQgOiBcIitcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImlwIDogXCIrXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBcIitpbnRlcmZhY2UrXCIgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRXd2FuMElQJzogZnVuY3Rpb24oKSB7IC8vIEdldCBJUCBvZiBib3hcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwicmVzdWx0IDogXCIrXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJlcyA9IGNtZChcImlwIGFkZHIgc2hvdyB3d2FuMCB8IGdyZXAgXFxcImluZXRcXFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cblx0XHRcdC8vY29uc29sZS5sb2coXCJpcCA6IFwiK1wiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgXCIraW50ZXJmYWNlK1wiIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblxuXHRcdCdnZXRCZWVrZWVPc1ZlcnNpb24nOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdCRUVLRUVfT1NfVkVSU0lPTj0oLiopJykpO1xuXHRcdFx0dmFyIHNlcmlhbCA9IG1hdGNoWzFdO1xuXHRcdFx0cmV0dXJuIHNlcmlhbDtcblx0XHR9LFxuXHRcdCdnZXRCZWVrZWVIb21lVmVyc2lvbic6IGZ1bmN0aW9uKCkge1xuXHRcdFx0anNvbiA9IEpTT04ucGFyc2UoQXNzZXRzLmdldFRleHQoXCJ2ZXJzaW9uLmpzb25cIikpO1xuXHRcdFx0cmV0dXJuIGpzb24udmVyc2lvbjtcblx0XHR9LFxuXHRcdCdyZXN0YXJ0TW9iaWxlQ29ubmVjdCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHJlc3RhcnQgbW9iaWxlX2Nvbm5lY3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7Jydcblx0XHR9LFxuXHRcdCdnZXRJbnRlcm5ldEludGVyZmFjZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IHJlcztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlcyA9IGNtZChcImlwIHJvdXRlIGdldCAxLjIuMy40IHwgYXdrICd7cHJpbnQgJDU7IGV4aXR9J1wiKTsgLy8gRXhlY3V0ZSB0aGUgY29tbWFuZFxuXHRcdFx0XHRpZiAocmVzLnRyaW0oKSkge1xuXHRcdFx0XHRcdHJldHVybiByZXMudHJpbSgpOyAvLyBSZXR1cm4gdGhlIGNsZWFuZWQtdXAgcmVzdWx0IGlmIG5vdCBlbXB0eVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiAnVW5rbm93bic7IC8vIFJldHVybiBhIGRlZmF1bHQgbWVzc2FnZSBpZiB0aGUgcmVzdWx0IGlzIGVtcHR5XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB0aGUgY29tbWFuZCBmYWlscyBvciBpcyBub3QgZm91bmRcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIGludGVybmV0IGludGVyZmFjZTpcIiwgZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gJ0Vycm9yJzsgLy8gUmV0dXJuIGFuIGVycm9yIG1lc3NhZ2Vcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdnZXRXTEFOVVNCJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgcmVzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzID0gY21kKCdpcCBsaW5rIHNob3cgd2xhbnVzYicpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdnZXRXaWZpQ2xpZW50TW9kZUVuYWJsZWQnOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBnZXRXaWZpQ2xpZW50TW9kZVN0YXRlKCk7XG5cdFx0fSxcblx0XHQnZW5hYmxlV2lmaUNsaWVudE1vZGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJ1bldpZmlNb2RlU2NyaXB0KHdpZmlDbGllbnRFbmFibGVTY3JpcHROYW1lKTtcblx0XHRcdFx0cmV0dXJuIGdldFdpZmlDbGllbnRNb2RlU3RhdGUoKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBlbmFibGluZyBXaS1GaSBjbGllbnQgbW9kZTonLCBlcnJvcik7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG5cdFx0XHRcdFx0J3dpZmktY2xpZW50LW1vZGUtZW5hYmxlLWZhaWxlZCcsXG5cdFx0XHRcdFx0ZXJyb3IucmVhc29uIHx8IGVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBlbmFibGUgV2ktRmkgY2xpZW50IG1vZGUuJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2Rpc2FibGVXaWZpQ2xpZW50TW9kZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cnVuV2lmaU1vZGVTY3JpcHQod2lmaUNsaWVudERpc2FibGVTY3JpcHROYW1lKTtcblx0XHRcdFx0cmV0dXJuIGdldFdpZmlDbGllbnRNb2RlU3RhdGUoKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBkaXNhYmxpbmcgV2ktRmkgY2xpZW50IG1vZGU6JywgZXJyb3IpO1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuXHRcdFx0XHRcdCd3aWZpLWNsaWVudC1tb2RlLWRpc2FibGUtZmFpbGVkJyxcblx0XHRcdFx0XHRlcnJvci5yZWFzb24gfHwgZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGRpc2FibGUgV2ktRmkgY2xpZW50IG1vZGUuJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2dldFdpZmlOZXR3b3Jrcyc6IGFzeW5jIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkKCk7XG5cblx0XHRcdHZhciB3aWZpID0gcmVxdWlyZSgnbm9kZS13aWZpJyk7XG5cdFx0XHR3aWZpLmluaXQoe1xuXHRcdFx0XHRpZmFjZTogJ3dsYW51c2InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnU3RhcnRpbmcgd2lmaSBzY2FuJyk7XG5cdFx0XHRcdHdpZmkuc2NhbigoZXJyb3IsIG5ldHdvcmtzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBzY2FubmluZyBuZXR3b3JrczonLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKFtdKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ1dpZmkgc2NhbiBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHVuaXF1ZU5ldHdvcmtzID0gbmV3IE1hcCgpO1xuXG5cdFx0XHRcdFx0XHRuZXR3b3Jrcy5mb3JFYWNoKChuZXR3b3JrKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGxldCBzdHJlbmd0aDtcblx0XHRcdFx0XHRcdFx0aWYgKG5ldHdvcmsucXVhbGl0eSA+IDgwKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RyZW5ndGggPSAnd2lmaS00Jztcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChuZXR3b3JrLnF1YWxpdHkgPiA1NSkge1xuXHRcdFx0XHRcdFx0XHRcdHN0cmVuZ3RoID0gJ3dpZmktMyc7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobmV0d29yay5xdWFsaXR5ID4gMzApIHtcblx0XHRcdFx0XHRcdFx0XHRzdHJlbmd0aCA9ICd3aWZpLTInO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHN0cmVuZ3RoID0gJ3dpZmktMSc7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSBgJHtuZXR3b3JrLnNzaWR9OiR7bmV0d29yay5tYWMuc3Vic3RyaW5nKDAsIDE1KX1gO1xuXG5cdFx0XHRcdFx0XHRcdGlmICghdW5pcXVlTmV0d29ya3MuaGFzKGtleSkgfHwgbmV0d29yay5xdWFsaXR5ID4gdW5pcXVlTmV0d29ya3MuZ2V0KGtleSkucXVhbGl0eSkge1xuXHRcdFx0XHRcdFx0XHRcdHVuaXF1ZU5ldHdvcmtzLnNldChrZXksIHtcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6IG5ldHdvcmsuc3NpZCxcblx0XHRcdFx0XHRcdFx0XHRcdHN0cmVuZ3RoOiBzdHJlbmd0aCxcblx0XHRcdFx0XHRcdFx0XHRcdHNlY3VyaXR5OiBuZXR3b3JrLnNlY3VyaXR5LFxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhbGl0eTogbmV0d29yay5xdWFsaXR5LFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgdW5pcXVlTmV0d29ya3NBcnJheSA9IEFycmF5LmZyb20odW5pcXVlTmV0d29ya3MudmFsdWVzKCkpO1xuXHRcdFx0XHRcdFx0dW5pcXVlTmV0d29ya3NBcnJheS5mb3JFYWNoKChuZXR3b3JrKSA9PiBkZWxldGUgbmV0d29yay5xdWFsaXR5KTtcblxuXHRcdFx0XHRcdFx0cmVzb2x2ZSh1bmlxdWVOZXR3b3Jrc0FycmF5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnY29ubmVjdFRvV2lmaSc6IGZ1bmN0aW9uKHNzaWQsIHBhc3N3b3JkKSB7XG5cdFx0XHRlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblxuXHRcdFx0dmFyIHdpZmkgPSByZXF1aXJlKCdub2RlLXdpZmknKTtcblx0XHRcdHdpZmkuaW5pdCh7XG5cdFx0XHRcdGlmYWNlOiAnd2xhbnVzYicsXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHdpZmkuY29ubmVjdCh7IHNzaWQ6IHNzaWQsIHBhc3N3b3JkOiBwYXNzd29yZCB9LCAoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvbm5lY3RpbmcgdG8gd2lmaTonLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKGZhbHNlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byB3aWZpOicsIHNzaWQpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZGlzY29ubmVjdFdpZmknOiBmdW5jdGlvbigpIHtcblx0XHRcdGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXG5cdFx0XHR2YXIgd2lmaSA9IHJlcXVpcmUoJ25vZGUtd2lmaScpO1xuXHRcdFx0d2lmaS5pbml0KHtcblx0XHRcdFx0aWZhY2U6ICd3bGFudXNiJyxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0d2lmaS5kaXNjb25uZWN0KChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgZGlzY29ubmVjdGluZyBmcm9tIHdpZmk6JywgZXJyb3IpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShmYWxzZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdEaXNjb25uZWN0ZWQgZnJvbSB3aWZpJyk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdmb3JnZXRXaWZpJzogZnVuY3Rpb24oc3NpZCkge1xuXHRcdFx0ZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkKCk7XG5cblx0XHRcdHZhciB3aWZpID0gcmVxdWlyZSgnbm9kZS13aWZpJyk7XG5cdFx0XHR3aWZpLmluaXQoe1xuXHRcdFx0XHRpZmFjZTogJ3dsYW51c2InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHR3aWZpLmRlbGV0ZUNvbm5lY3Rpb24oeyBzc2lkOiBzc2lkIH0sIChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgY29ubmVjdGluZyB0byB3aWZpOicsIGVycm9yKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoZmFsc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIHdpZmk6Jywgc3NpZCk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdnZXRDbGllbnRTU0lEJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgc3NpZDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHNzaWQgPSBjbWQoJ2l3Z2V0aWQgLXIgd2xhbnVzYiAyPi9kZXYvbnVsbCB8fCB0cnVlJykudHJpbSgpO1xuXG5cdFx0XHRcdGlmICghc3NpZCkge1xuXHRcdFx0XHRcdHNzaWQgPSBjbWQoJ25tY2xpIC1nIEdFTkVSQUwuQ09OTkVDVElPTiBkZXZpY2Ugc2hvdyB3bGFudXNiIDI+L2Rldi9udWxsIHwgaGVhZCAtbiAxIHx8IHRydWUnKS50cmltKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoc3NpZCA9PT0gJy0tJykge1xuXHRcdFx0XHRcdHNzaWQgPSAnJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0eXBlb2Ygc3NpZCA9PT0gJ3N0cmluZycgJiYgc3NpZCAhPT0gJycpIHtcblx0XHRcdFx0XHRyZXR1cm4gc3NpZDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gJ05vdCBjb25uZWN0ZWQnO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgcmV0cmlldmluZyBjbGllbnQgU1NJRDonLCBlcnJvcik7XG5cdFx0XHRcdHJldHVybiAnTm90IGNvbm5lY3RlZCc7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdC8vIFx0Ly8gQ29tbWFuZCB0byBsaXN0IEZPUldBUkQgcnVsZXNcblx0XHQvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLW4gLS1saW5lLW51bWJlcic7XG5cblx0XHQvLyBcdGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdC8vIFx0XHRpZiAoZXJyb3IgfHwgc3RkZXJyKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke2Vycm9yIHx8IHN0ZGVycn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yIHx8IG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblxuXHRcdC8vIFx0XHQvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG5cdFx0Ly8gXHRcdHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IHN0ZG91dC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyhcImlzR2VuZXJhbFNoYXJpbmdFbmFibGVkOiBcIitpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCk7XG5cdFx0Ly8gXHRcdC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcblx0XHQvLyBcdFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2UgZXRoMC87XG5cdFx0Ly8gXHRcdHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuXHRcdC8vIFx0XHQvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcblx0XHQvLyBcdFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDFcIik7XG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGxcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIHtjb25zb2xlLmxvZyhcInN0ZXAxMlwiKTsgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH0pO31cblx0XHQvLyBcdFx0fSBlbHNlIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDJcIik7XG5cblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGEgc3BlY2lmaWMgTUFDIGFkZHJlc3Ncblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3Igc3BlY2lmaWMgTUFDJywgbWFjQWRkcmVzczogbWF0Y2hbMV0gfSk7XG5cdFx0Ly8gXHRcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2coXCJzdGVwM1wiKTtcblxuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWRcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH0pO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXG5cblxuXG5cdFx0XHQvLyAgICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZygnU3RhcnRpbmcgdG8gZ2V0IGludGVybmV0IHNoYXJpbmcgc3RhdHVzIGZvciBFdGhlcm5ldC4uLicpO1xuXHRcdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG5cdFx0XHQvLyBcdC8vIFNpbmNlIGNtZCBpcyBhbHJlYWR5IHdyYXBwZWQgYnkgTWV0ZW9yLndyYXBBc3luYyhleGVjKSxcblx0XHRcdC8vIFx0Ly8gaXQgc2hvdWxkIHJldHVybiB7IHN0ZG91dCwgc3RkZXJyIH0gZGlyZWN0bHkuXG5cdFx0XHQvLyBcdHRyeSB7XG5cdFx0XHQvLyBcdCAgdmFyIHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdC8vIFx0ICBpZiAoc3RkZXJyKSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke3N0ZGVycn1gKTtcblx0XHRcdC8vIFx0XHQvLyBJdCdzIGJldHRlciB0byByZXR1cm4gYSBtZWFuaW5nZnVsIGVycm9yIHRvIHRoZSBjbGllbnQuXG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgZXJyb3I6IFwiRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzXCIsIGRldGFpbHM6IHN0ZGVyciB9O1xuXHRcdFx0Ly8gXHQgIH1cblxuXHRcdFx0Ly8gXHQgIGNvbnNvbGUubG9nKCdBbmFseXppbmcgaXB0YWJsZXMgRk9SV0FSRCBydWxlcyBvdXRwdXQuLi4nKTtcblx0XHRcdC8vIFx0ICAvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG5cdFx0XHQvLyBcdCAgdmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gc3Rkb3V0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSBldGgwJykgJiYgc3Rkb3V0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG5cdFx0XHQvLyBcdCAgY29uc29sZS5sb2coYGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkOiAke2lzR2VuZXJhbFNoYXJpbmdFbmFibGVkfWApO1xuXG5cdFx0XHQvLyBcdCAgLy8gRXh0cmFjdCBNQUMgYWRkcmVzcyBydWxlc1xuXHRcdFx0Ly8gXHQgIHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIGV0aDAvO1xuXHRcdFx0Ly8gXHQgIHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblx0XHRcdC8vIFx0ICBjb25zb2xlLmxvZyhgTUFDIGFkZHJlc3MgZm91bmQ6ICR7bWF0Y2ggPyBtYXRjaFsxXSA6ICdOb25lJ31gKTtcblxuXHRcdFx0Ly8gXHQgIC8vIERldGVybWluZSB0aGUgc3RhdHVzIGJhc2VkIG9uIHRoZSBydWxlcyBmb3VuZFxuXHRcdFx0Ly8gXHQgIGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGwuJyk7XG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0Ly8gXHQgIH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzOiAke21hdGNoWzFdfWApO1xuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH07XG5cdFx0XHQvLyBcdCAgfSBlbHNlIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyBpcyBkaXNhYmxlZCBvciBub3QgY29uZmlndXJlZCBhcyBleHBlY3RlZC4nKTtcblx0XHRcdC8vIFx0XHRyZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdC8vIFx0ICB9XG5cdFx0XHQvLyBcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHQvLyBcdCAgY29uc29sZS5lcnJvcihgQ29tbWFuZCBleGVjdXRpb24gZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHQvLyBcdCAgLy8gSXQncyBiZXR0ZXIgdG8gcmV0dXJuIGEgbWVhbmluZ2Z1bCBlcnJvciB0byB0aGUgY2xpZW50LlxuXHRcdFx0Ly8gXHQgIHJldHVybiB7IGVycm9yOiBcIkNvbW1hbmQgZXhlY3V0aW9uIGVycm9yXCIsIGRldGFpbHM6IGVycm9yLnRvU3RyaW5nKCkgfTtcblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gICB9LFxuXG5cblxuXHRcdFx0XHQvLyAgICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXHRcdFx0XHQvLyBcdHZhciBjb21tYW5kUmVzdWx0ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblxuXHRcdFx0XHQvLyBcdGlmICghY29tbWFuZFJlc3VsdCkge1xuXHRcdFx0XHQvLyBcdCAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG5cdFx0XHRcdC8vIFx0fVxuXG5cdFx0XHRcdC8vIFx0dmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcblx0XHRcdFx0Ly8gXHR2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSBldGgwLztcblx0XHRcdFx0Ly8gXHR2YXIgbWF0Y2ggPSBjb21tYW5kUmVzdWx0Lm1hdGNoKG1hY0FkZHJlc3NSdWxlUmVnZXgpO1xuXG5cdFx0XHRcdC8vIFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuXHRcdFx0XHQvLyBcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0XHQvLyBcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHRcdFx0Ly8gXHQgIHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH07XG5cdFx0XHRcdC8vIFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gXHQgIHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0XHQvLyBcdH1cblx0XHRcdFx0Ly8gICB9LFxuXG5cblxuXG5cdFx0XHRcdFx0ICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLVMgRk9SV0FSRCc7XG5cblx0XHRcdFx0XHRcdHZhciBjb21tYW5kUmVzdWx0ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblxuXHRcdFx0XHRcdFx0aWYgKCFjb21tYW5kUmVzdWx0KSB7XG5cdFx0XHRcdFx0XHQgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dmFyIHNoYXJpbmdGcm9tV2xhblRvRXRoID0gbnVsbDtcblx0XHRcdFx0XHRcdHZhciBzaGFyaW5nVG9XbGFuRnJvbUV0aEVzdGFibGlzaGVkID0gbnVsbDtcblxuXHRcdFx0XHRcdFx0dmFyIGJlZWtlZU9TVmVyc2lvbiA9IE1ldGVvci5jYWxsKCdnZXRCZWVrZWVPc1ZlcnNpb24nKTtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiYmVla2VlT1NWZXJzaW9uOiBcIitiZWVrZWVPU1ZlcnNpb24pO1xuXHRcdFx0XHRcdFx0aWYgKGJlZWtlZU9TVmVyc2lvbiA+PSAyMDI0MDkyNikge1xuXHRcdFx0XHRcdFx0XHQvLyBDaGVjayBmb3IgdGhlIHNwZWNpZmljIHJ1bGUgaW5kaWNhdGluZyBpbnRlcm5ldCBzaGFyaW5nIGZyb20gd2xhbjAgdG8gZXRoMFxuXHRcdFx0XHRcdFx0XHRzaGFyaW5nRnJvbVdsYW5Ub0V0aCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd2xhbmludCAtbyBldGgwIC1qIEFDQ0VQVCcpO1xuXHRcdFx0XHRcdFx0XHRzaGFyaW5nVG9XbGFuRnJvbUV0aEVzdGFibGlzaGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW5pbnQgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gQ2hlY2sgZm9yIHRoZSBzcGVjaWZpYyBydWxlIGluZGljYXRpbmcgaW50ZXJuZXQgc2hhcmluZyBmcm9tIHdsYW4wIHRvIGV0aDBcblx0XHRcdFx0XHRcdFx0c2hhcmluZ0Zyb21XbGFuVG9FdGggPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW4wIC1vIGV0aDAgLWogQUNDRVBUJyk7XG5cdFx0XHRcdFx0XHRcdHNoYXJpbmdUb1dsYW5Gcm9tRXRoRXN0YWJsaXNoZWQgPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIGV0aDAgLW8gd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoc2hhcmluZ0Zyb21XbGFuVG9FdGggJiYgc2hhcmluZ1RvV2xhbkZyb21FdGhFc3RhYmxpc2hlZCkge1xuXHRcdFx0XHRcdFx0ICAvLyBJZiBhdCBsZWFzdCBvbmUgcGFpciBvZiBydWxlcyBleGlzdHMsIGludGVybmV0IHNoYXJpbmcgaXMgY29uc2lkZXJlZCBlbmFibGVkLlxuXHRcdFx0XHRcdFx0ICByZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ICByZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQgIH0sXG5cblxuXG5cblxuXG5cblxuXHRcdCdlbmFibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cblx0XHRcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gbnVsbDtcblxuXHRcdFx0dmFyIGJlZWtlZU9TVmVyc2lvbiA9IE1ldGVvci5jYWxsKCdnZXRCZWVrZWVPc1ZlcnNpb24nKTtcblx0XHRcdGlmIChiZWVrZWVPU1ZlcnNpb24gPj0gMjAyNDA5MjYpIHtcblx0XHRcdFx0aXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW5pbnQgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW51c2IgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW5pbnQgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFudXNiIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0XHRcdF0uam9pbignICYmICcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XHRdLmpvaW4oJyAmJiAnKTtcblx0XHRcdH1cblxuXHRcdFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0ZGVycikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBFdGhlcm5ldCBlbmFibGVkIHN1Y2Nlc3NmdWxseS4nKTtcblx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCBzdGRvdXQpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZGlzYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdC8vIERlZmluZSBhIGxpc3Qgb2YgY29tbWFuZHMgdG8gcmVwZWF0ZWRseSBhdHRlbXB0IGRlbGV0aW9uLlxuXHRcdFx0dmFyIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBudWxsO1xuXG5cdFx0XHR2YXIgYmVla2VlT1NWZXJzaW9uID0gTWV0ZW9yLmNhbGwoJ2dldEJlZWtlZU9zVmVyc2lvbicpO1xuXHRcdFx0aWYgKGJlZWtlZU9TVmVyc2lvbiA+PSAyMDI0MDkyNikge1xuXHRcdFx0XHRpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gW1xuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbmludCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbnVzYiAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbmludCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW51c2IgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcblx0XHRcdFx0XTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBbXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcblx0XHRcdFx0XTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhIGNvbW1hbmQgYW5kIHJlY3Vyc2l2ZWx5IGNhbGwgaXRzZWxmIGlmIHRoZSBjb21tYW5kIHdhcyBzdWNjZXNzZnVsIChydWxlIHdhcyBmb3VuZCBhbmQgZGVsZXRlZCkuXG5cdFx0XHRmdW5jdGlvbiBleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjaykge1xuXHRcdFx0XHRjbWQoY29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3Mgbm8gZXJyb3IsIHRoZSBydWxlIHdhcyBmb3VuZCBhbmQgZGVsZXRlZCwgc28gdHJ5IGFnYWluLlxuXHRcdFx0XHRcdGlmICghZXJyb3IpIHtcblx0XHRcdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvciwgaXQgbGlrZWx5IG1lYW5zIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlIGV4aXN0LCBzbyBjYWxsIHRoZSBkb25lQ2FsbGJhY2suXG5cdFx0XHRcdFx0XHRkb25lQ2FsbGJhY2soKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFeGVjdXRlIGRlbGV0aW9uIGZvciBlYWNoIGNvbW1hbmQgYW5kIHRyYWNrIGNvbXBsZXRpb24uXG5cdFx0XHR2YXIgdGFza3NDb21wbGV0ZWQgPSAwO1xuXHRcdFx0aXB0YWJsZXNEZWxldGVDb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG5cdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgKCkgPT4ge1xuXHRcdFx0XHRcdHRhc2tzQ29tcGxldGVkKys7XG5cdFx0XHRcdFx0Ly8gT25jZSBhbGwgZGVsZXRpb24gdGFza3MgYXJlIGRvbmUsIHNhdmUgdGhlIGlwdGFibGVzIGNvbmZpZ3VyYXRpb24uXG5cdFx0XHRcdFx0aWYgKHRhc2tzQ29tcGxldGVkID09PSBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYGlwdGFibGVzIHJ1bGVzIHNhdmVkLmApO1xuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsICdBbGwgc3BlY2lmaWVkIHJ1bGVzIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdC8vICdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdC8vIFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERScsXG5cdFx0Ly8gXHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0Ly8gXHRdLmpvaW4oJyAmJiAnKTtcblxuXHRcdC8vIFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdFx0aWYgKHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBFdGhlcm5ldCBkaXNhYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0Ly8gXHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHQvLyBcdH0pO1xuXHRcdC8vIH0sXG5cdFx0J2VuYWJsZUludGVybmV0Rm9yTWFjRXRoZXJuZXQnOiBmdW5jdGlvbihtYWNBZGRyZXNzLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vIENvbW1hbmQgdG8gYWxsb3cgaW50ZXJuZXQgZm9yIHRoZSBzcGVjaWZpZWQgTUFDIGFkZHJlc3Mgb24gZXRoMC5cblx0XHRcdHZhciBhbGxvd01hY0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIGV0aDAgLW0gbWFjIC0tbWFjLXNvdXJjZSAke21hY0FkZHJlc3N9IC1qIEFDQ0VQVGA7XG5cdFx0XHQvLyBDb21tYW5kIHRvIGRyb3AgYWxsIG90aGVyIGludGVybmV0IHRyYWZmaWMgb24gZXRoMC5cblx0XHRcdHZhciBibG9ja090aGVyc0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIGV0aDAgLWogRFJPUGA7XG5cblx0XHRcdC8vIEFsbG93IGludGVybmV0IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzLlxuXHRcdFx0cmVzID0gY21kKGFsbG93TWFjQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBhbGxvd2luZyBNQUMgJHttYWNBZGRyZXNzfTogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBJbnRlcm5ldCBhY2Nlc3MgYWxsb3dlZCBmb3IgTUFDICR7bWFjQWRkcmVzc30uYCk7XG5cblx0XHRcdFx0Ly8gQmxvY2sgYWxsIG90aGVyIE1BQyBhZGRyZXNzZXMgZnJvbSBhY2Nlc3NpbmcgdGhlIGludGVybmV0LlxuXHRcdFx0XHRyZXMgPSBjbWQoYmxvY2tPdGhlcnNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBibG9ja2luZyBvdGhlciBNQUNzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGJsb2NrZWQgZm9yIG90aGVyIE1BQyBhZGRyZXNzZXMuYCk7XG5cdFx0XHRcdFx0Ly8gT3B0aW9uYWxseSwgc2F2ZSB0aGUgaXB0YWJsZXMgc2V0dGluZ3MgdG8gbWFrZSB0aGVtIHBlcnNpc3RlbnQuXG5cdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBzYXZlZC5gKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKG51bGwpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3JlbW92ZUFsbE1hY0ZpbHRlcnNGb3JFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBMaXN0IGFsbCBGT1JXQVJEIHJ1bGVzIHdpdGggbGluZSBudW1iZXJzXG5cdFx0XHRjbWQoJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtLWxpbmUtbnVtYmVycyAtbicsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByb2Nlc3Mgc3Rkb3V0IHRvIGlkZW50aWZ5IHJ1bGVzIHJlbGF0ZWQgdG8gTUFDIGZpbHRlcmluZyBvbiBldGgwXG5cdFx0XHRcdGNvbnN0IGxpbmVzID0gc3Rkb3V0LnNwbGl0KCdcXG4nKTtcblx0XHRcdFx0Y29uc3QgcnVsZU51bWJlcnMgPSBsaW5lcy5yZWR1Y2UoKGFjYywgbGluZSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRpZiAobGluZS5pbmNsdWRlcygnZXRoMCcpICYmIGxpbmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnbWFjJykpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHJ1bGVOdW1iZXIgPSBsaW5lLnNwbGl0KC9cXHMrLylbMF07IC8vIEV4dHJhY3QgdGhlIHJ1bGUgbnVtYmVyLCBhc3N1bWluZyBpdCdzIHRoZSBmaXJzdCBlbGVtZW50XG5cdFx0XHRcdFx0XHRhY2MucHVzaChydWxlTnVtYmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdFx0fSwgW10pO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBpZGVudGlmaWVkIHJ1bGVzIHN0YXJ0aW5nIGZyb20gdGhlIGhpZ2hlc3QgbnVtYmVyIHRvIHByZXZlbnQgc2hpZnRpbmcgb2YgbGluZSBudW1iZXJzXG5cdFx0XHRcdHJ1bGVOdW1iZXJzLnNvcnQoKGEsIGIpID0+IGIgLSBhKS5mb3JFYWNoKHJ1bGVOdW1iZXIgPT4ge1xuXHRcdFx0XHRcdGNtZChgc3VkbyBpcHRhYmxlcyAtRCBGT1JXQVJEICR7cnVsZU51bWJlcn1gLCAocmVtb3ZlRXJyb3IsIHJlbW92ZVN0ZG91dCwgcmVtb3ZlU3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAocmVtb3ZlRXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgcmVtb3ZpbmcgcnVsZSAke3J1bGVOdW1iZXJ9OiAke3JlbW92ZUVycm9yfWApO1xuXHRcdFx0XHRcdFx0XHQvLyBEZWNpZGUgaWYgeW91IHdhbnQgdG8gY29udGludWUgcmVtb3Zpbmcgb3RoZXIgcnVsZXMgb3Igc3RvcCBoZXJlXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBSdWxlICR7cnVsZU51bWJlcn0gcmVtb3ZlZCBzdWNjZXNzZnVsbHkuYCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIEFmdGVyIGF0dGVtcHRpbmcgdG8gcmVtb3ZlIGFsbCBpZGVudGlmaWVkIHJ1bGVzLCBzYXZlIHRoZSBpcHRhYmxlcyBjb25maWd1cmF0aW9uXG5cdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKHNhdmVFcnJvciwgc2F2ZVN0ZG91dCwgc2F2ZVN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdGlmIChzYXZlRXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtzYXZlRXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHNhdmVFcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdpcHRhYmxlcyBydWxlcyB1cGRhdGVkIGFuZCBzYXZlZC4nKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsICdBbGwgTUFDIGZpbHRlciBydWxlcyBmb3IgRXRoZXJuZXQgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNNb2JpbGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXG5cdFx0XHR2YXIgY29tbWFuZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdGlmICghY29tbWFuZFJlc3VsdCkge1xuXHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkanVzdGVkIHRvIGNoZWNrIGZvciB0aGUgc3BlY2lmaWMgcnVsZSBpbmRpY2F0aW5nIGludGVybmV0IHNoYXJpbmcgZnJvbSB3bGFuaW50IHRvIHd3YW4wXG5cdFx0XHR2YXIgc2hhcmluZ0Zyb21XbGFuVG9Xd2FuID0gbnVsbDtcblx0XHRcdHZhciBzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCA9IG51bGw7XG5cdFx0XHR2YXIgYmVla2VlT1NWZXJzaW9uID0gTWV0ZW9yLmNhbGwoJ2dldEJlZWtlZU9zVmVyc2lvbicpO1xuXHRcdFx0aWYgKGJlZWtlZU9TVmVyc2lvbiA+PSAyMDI0MDkyNikge1xuXHRcdFx0XHRzaGFyaW5nRnJvbVdsYW5Ub1d3YW4gPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW5pbnQgLW8gd3dhbjAgLWogQUNDRVBUJyk7XG5cdFx0XHRcdHNoYXJpbmdUb1dsYW5Gcm9tV3dhbkVzdGFibGlzaGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFuaW50IC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNoYXJpbmdGcm9tV2xhblRvV3dhbiA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd2xhbjAgLW8gd3dhbjAgLWogQUNDRVBUJyk7XG5cdFx0XHRcdHNoYXJpbmdUb1dsYW5Gcm9tV3dhbkVzdGFibGlzaGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2hhcmluZ0Zyb21XbGFuVG9Xd2FuICYmIHNoYXJpbmdUb1dsYW5Gcm9tV3dhbkVzdGFibGlzaGVkKSB7XG5cdFx0XHQvLyBJZiBhdCBsZWFzdCBvbmUgcGFpciBvZiBydWxlcyBleGlzdHMsIGludGVybmV0IHNoYXJpbmcgdG8gdGhlIG1vYmlsZSBpbnRlcmZhY2UgaXMgY29uc2lkZXJlZCBlbmFibGVkLlxuXHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdC8vIENvbW1hbmQgdG8gbGlzdCBGT1JXQVJEIHJ1bGVzXG5cdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG5cdFx0Ly8gXHRjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yIHx8IHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvciB8fCBzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciB8fCBuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cblx0XHQvLyBcdFx0Ly8gQ2hlY2sgZm9yIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBydWxlc1xuXHRcdC8vIFx0XHR2YXIgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgPSBzdGRvdXQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIHd3YW4wJykgJiYgc3Rkb3V0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG5cblx0XHQvLyBcdFx0Ly8gRXh0cmFjdCBNQUMgYWRkcmVzcyBydWxlc1xuXHRcdC8vIFx0XHR2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSB3d2FuMC87XG5cdFx0Ly8gXHRcdHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuXHRcdC8vIFx0XHQvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcblx0XHQvLyBcdFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfSk7XG5cdFx0Ly8gXHRcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGEgc3BlY2lmaWMgTUFDIGFkZHJlc3Ncblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3Igc3BlY2lmaWMgTUFDJywgbWFjQWRkcmVzczogbWF0Y2hbMV0gfSk7XG5cdFx0Ly8gXHRcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBkaXNhYmxlZCBvciBub3QgY29uZmlndXJlZCBhcyBleHBlY3RlZFxuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfSk7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH0pO1xuXHRcdC8vIH0sXG5cblx0XHQnZW5hYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gbnVsbDtcblx0XHRcdHZhciBiZWVrZWVPU1ZlcnNpb24gPSBNZXRlb3IuY2FsbCgnZ2V0QmVla2VlT3NWZXJzaW9uJyk7XG5cdFx0XHRpZiAoYmVla2VlT1NWZXJzaW9uID49IDIwMjQwOTI2KSB7XG5cdFx0XHRcdGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbnVzYiAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuaW50IC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW51c2IgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1hcHBlbmQgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0XHRcdF0uam9pbignICYmICcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XHRdLmpvaW4oJyAmJiAnKTtcblx0XHRcdH1cblxuXHRcdFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0ZGVycikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBtb2JpbGUgZW5hYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0Ly8gRGVmaW5lIGNvbW1hbmRzIGZvciBkZWxldGlvbiB3aXRob3V0IGNvbWJpbmluZyB0aGVtXG5cdFx0XHR2YXIgaXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IG51bGw7XG5cdFx0XHR2YXIgYmVla2VlT1NWZXJzaW9uID0gTWV0ZW9yLmNhbGwoJ2dldEJlZWtlZU9zVmVyc2lvbicpO1xuXHRcdFx0aWYgKGJlZWtlZU9TVmVyc2lvbiA+PSAyMDI0MDkyNikge1xuXHRcdFx0XHR2YXIgaXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IFtcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW5pbnQgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFudXNiIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW5pbnQgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbnVzYiAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERSdcblx0XHRcdFx0XTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gW1xuXHRcdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREUnXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIHJlY3Vyc2l2ZWx5IGV4ZWN1dGUgYSBjb21tYW5kIHVudGlsIGl0IGZhaWxzIChpbmRpY2F0aW5nIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlKVxuXHRcdFx0ZnVuY3Rpb24gZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spIHtcblx0XHRcdFx0Y21kKGNvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHQvLyBObyBlcnJvciBtZWFucyB0aGUgY29tbWFuZCBzdWNjZWVkZWQsIHNvIHRoZXJlIG1pZ2h0IGJlIG1vcmUgaW5zdGFuY2VzXG5cdFx0XHRcdFx0aWYgKCFlcnJvcikge1xuXHRcdFx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBFcnJvciBsaWtlbHkgbWVhbnMgbm8gbW9yZSBpbnN0YW5jZXMgb2YgdGhlIHJ1bGUsIG1vdmUgb25cblx0XHRcdFx0XHRcdGRvbmVDYWxsYmFjaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEV4ZWN1dGUgZGVsZXRpb24gZm9yIGVhY2ggY29tbWFuZCBhbmQgdHJhY2sgd2hlbiBhbGwgYXJlIGNvbXBsZXRlZFxuXHRcdFx0dmFyIHRhc2tzQ29tcGxldGVkID0gMDtcblx0XHRcdGlwdGFibGVzRGVsZXRlQ29tbWFuZHMuZm9yRWFjaCgoY29tbWFuZCkgPT4ge1xuXHRcdFx0XHRleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsICgpID0+IHtcblx0XHRcdFx0XHR0YXNrc0NvbXBsZXRlZCsrO1xuXHRcdFx0XHRcdC8vIEFmdGVyIGFsbCBjb21tYW5kcyBoYXZlIGJlZW4gYXR0ZW1wdGVkLCBzYXZlIHRoZSBjb25maWd1cmF0aW9uXG5cdFx0XHRcdFx0aWYgKHRhc2tzQ29tcGxldGVkID09PSBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHNhdmVTdGRvdXQsIHNhdmVTdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3Igc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnaXB0YWJsZXMgcnVsZXMgZm9yIG1vYmlsZSBpbnRlcmZhY2UgdXBkYXRlZCBhbmQgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgJ0FsbCBzcGVjaWZpZWQgcnVsZXMgZm9yIG1vYmlsZSBpbnRlcmZhY2UgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0Ly8gJ2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdC8vIFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsXG5cdFx0Ly8gXHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0Ly8gXHRdLmpvaW4oJyAmJiAnKTtcblxuXHRcdC8vIFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdFx0aWYgKHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBtb2JpbGUgZGlzYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdC8vIFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXHRcdCdhbGxvd0ludGVybmV0Rm9yTWFjTW9iaWxlJzogZnVuY3Rpb24obWFjQWRkcmVzcywgY2FsbGJhY2spIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvLyBGaXJzdCwgZW5hYmxlIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBmcm9tIHdsYW4wIHRvIHd3YW4wXG5cdFx0XHRyZXMgPSBjbWQoJ3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUICYmIHN1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAmJiBzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBlbmFibGluZyBpbnRlcm5ldCBzaGFyaW5nOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IHNoYXJpbmcgZW5hYmxlZCB2aWEgd3dhbjAuYCk7XG5cdFx0XHRcdC8vIEFsbG93IGludGVybmV0IG9ubHkgZm9yIHRoZSBzcGVjaWZpZWQgTUFDIGFkZHJlc3Mgb24gd3dhbjBcblx0XHRcdFx0dmFyIGFsbG93TWFjQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1JIEZPUldBUkQgMSAtaSB3d2FuMCAtbSBtYWMgLS1tYWMtc291cmNlICR7bWFjQWRkcmVzc30gLWogQUNDRVBUYDtcblx0XHRcdFx0Ly8gQmxvY2sgYWxsIG90aGVyIE1BQyBhZGRyZXNzZXMgZnJvbSBhY2Nlc3NpbmcgdGhlIGludGVybmV0IHZpYSB3d2FuMC5cblx0XHRcdFx0dmFyIGJsb2NrT3RoZXJzQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd3dhbjAgLWogRFJPUGA7XG5cblx0XHRcdFx0Ly8gQWxsb3cgc3BlY2lmaWMgTUFDXG5cdFx0XHRcdHJlcyA9IGNtZChhbGxvd01hY0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIGFsbG93aW5nIE1BQyAke21hY0FkZHJlc3N9IG9uIFdXQU46ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGFsbG93ZWQgZm9yIE1BQyAke21hY0FkZHJlc3N9IG9uIFdXQU4uYCk7XG5cblx0XHRcdFx0XHQvLyBCbG9jayBhbGwgb3RoZXIgTUFDc1xuXHRcdFx0XHRcdHJlcyA9IGNtZChibG9ja090aGVyc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBibG9ja2luZyBvdGhlciBNQUNzIG9uIFdXQU46ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGJsb2NrZWQgZm9yIG90aGVyIE1BQyBhZGRyZXNzZXMgb24gV1dBTi5gKTtcblxuXHRcdFx0XHRcdFx0Ly8gU2F2ZSBpcHRhYmxlcyBydWxlc1xuXHRcdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlcyBmb3IgV1dBTjogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBmb3IgV1dBTiBzYXZlZC5gKTtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sobnVsbCk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdyZW1vdmVBbGxNYWNGaWx0ZXJzRm9yTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdC8vIExpc3QgYWxsIEZPUldBUkQgcnVsZXNcblx0XHRcdGNtZCgnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC0tbGluZS1udW1iZXJzIC1uJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByb2Nlc3Mgc3Rkb3V0IHRvIGZpbmQgcnVsZXMgdG8gZGVsZXRlLiBUaGlzIHBhcnQgaXMgcHNldWRvLWNvZGUgYW5kIG5lZWRzIGFkanVzdG1lbnRcblx0XHRcdFx0Y29uc3QgbGluZXMgPSBzdGRvdXQuc3BsaXQoJ1xcbicpO1xuXHRcdFx0XHRjb25zdCBydWxlTnVtYmVycyA9IFtdO1xuXHRcdFx0XHRsaW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xuXHRcdFx0XHRcdGlmIChsaW5lLmluY2x1ZGVzKCd3d2FuMCcpICYmIGxpbmUuaW5jbHVkZXMoJ01BQycpKSB7XG5cdFx0XHRcdFx0XHQvLyBFeHRyYWN0IHRoZSBydWxlIG51bWJlciBmcm9tIHRoZSBsaW5lXG5cdFx0XHRcdFx0XHRjb25zdCBydWxlTnVtYmVyID0gbGluZS5zcGxpdCgnICcpWzBdOyAvLyBUaGlzIGlzIGEgc2ltcGxpZmljYXRpb25cblx0XHRcdFx0XHRcdHJ1bGVOdW1iZXJzLnB1c2gocnVsZU51bWJlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgcnVsZXMgYnkgdGhlaXIgbnVtYmVycywgc3RhcnRpbmcgZnJvbSB0aGUgaGlnaGVzdCBudW1iZXJcblx0XHRcdFx0cnVsZU51bWJlcnMuc29ydCgoYSwgYikgPT4gYiAtIGEpLmZvckVhY2gocnVsZU51bWJlciA9PiB7XG5cdFx0XHRcdFx0Y21kKGBzdWRvIGlwdGFibGVzIC1EIEZPUldBUkQgJHtydWxlTnVtYmVyfWAsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciByZW1vdmluZyBydWxlICR7cnVsZU51bWJlcn06ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0XHQvLyBPcHRpb25hbGx5LCBzdG9wIHRoZSBwcm9jZXNzIG9yIGNvbnRpbnVlIGF0dGVtcHRpbmcgdG8gcmVtb3ZlIG90aGVyIHJ1bGVzXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBSdWxlICR7cnVsZU51bWJlcn0gcmVtb3ZlZCBzdWNjZXNzZnVsbHkuYCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIEFmdGVyIGFsbCBydWxlcyBoYXZlIGJlZW4gcHJvY2Vzc2VkLCBzYXZlIHRoZSBpcHRhYmxlcyBydWxlc1xuXHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnaXB0YWJsZXMgcnVsZXMgdXBkYXRlZCBhbmQgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIE1BQyBmaWx0ZXIgcnVsZXMgZm9yIFdXQU4gcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdyZWJvb3QnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoJ3N1ZG8gcmVib290JywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdCAgY29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHRcdFx0ICByZXR1cm47XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnc2h1dGRvd24nOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoJ3N1ZG8gaGFsdCcsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHQgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdCAgcmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3N5bmNocm9uaXplJzogZnVuY3Rpb24oKSB7XG5cblx0XHRcdGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgc3luYy4uLlwiKTtcblxuXHRcdFx0dmFyIGRldmljZVNlcmlhbCA9IE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuc2VyaWFsO1xuXHRcdFx0dmFyIGRldmljZVRva2VuID0gTWV0ZW9yLnNldHRpbmdzLm1vb2RsZUFQSVRva2VuO1xuXHRcdFx0dmFyIHVybCA9IE1ldGVvci5zZXR0aW5ncy5jbG91ZFVSTCArIFwiL2FwaS9zdGFydFN5bmNcIjtcblx0XHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdCdkZXZpY2VTZXJpYWwnOiBkZXZpY2VTZXJpYWwsXG5cdFx0XHRcdFx0J2RldmljZVRva2VuJzogZGV2aWNlVG9rZW5cblx0XHRcdFx0fSxcblx0XHRcdCAgICBucG1SZXF1ZXN0T3B0aW9uczoge1xuXHRcdFx0ICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLCAvLyBUT0RPIHJlbW92ZSB3aGVuIGRlcGxveVxuXHRcdFx0ICAgICAgICB0aW1lb3V0OiAxMjAwMDAwXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICB0aW1lb3V0OiAxMjAwMDAwXG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvL3ZhciByZXN1bHQgPSBIVFRQLmNhbGwoJ1BPU1QnLCB1cmwsIG9wdGlvbnMpO1xuXG5cdFx0XHRcdHZhciByZXN1bHQgPSBIVFRQLnBvc3QoIHVybCwgb3B0aW9ucyApO1xuXHRcdFx0XHR2YXIgcmVzdWx0Q29udGVudCA9IHJlc3VsdC5jb250ZW50O1xuXHRcdFx0XHQvL1N5bmNocm9uaXphdGlvbnMuaW5zZXJ0KHtkYXRlOkRhdGUubm93KCl9KTtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdENvbnRlbnQ7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coIFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi5cIiwgZSApO1xuXHRcdFx0XHRyZXR1cm4gXCJFcnJvciB3aGlsZSB0cnlpbmcgdG8gc3luY3Jvbml6ZS4uLiBcIisgZTtcblx0XHRcdH1cblx0XHQvL3JldHVybiByZXN1bHRDb250ZW50O1xuXHRcdH0sXG5cdH0pO1xufVxufSk7XG4iLCIvLyBNZXRlb3IucHVibGlzaCgnYWxsQXBwcycsIGZ1bmN0aW9uKCkge1xuLy8gXHRyZXR1cm4gQXBwcy5maW5kKHt9KTtcbi8vIH0pO1xuXG4vLyBNZXRlb3IucHVibGlzaChcInVzZXJzXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCh7fSwge2ZpZWxkczp7Y3JlYXRlZEF0OiB0cnVlLCBwcm9maWxlOiB0cnVlLCBlbWFpbHM6IHRydWUsIHVzZXJuYW1lOiB0cnVlfX0pO1xuLy8gfSk7XG5cblxuICBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgfSk7IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5cbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvYXBwcy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS91c2Vycy5qcyc7XG5cbmltcG9ydCAnLi4vc2VydmVyL2ZpeHR1cmVzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL21ldGhvZHMuanMnO1xuaW1wb3J0ICcuLi9zZXJ2ZXIvcHVibGljYXRpb25zLmpzJztcbmltcG9ydCAnLi4vbGliL2FwcF9sb2FkZXIuanMnO1xuXG5cbi8vaW1wb3J0IHtERFB9IGZyb20gJ21ldGVvci9kZHAnO1xuLy9pbXBvcnQge0FjY291bnRzfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSc7XG5cblxuLy8gaW1wb3J0ICcuLi9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2ZpeHR1cmVzLmpzJztcblxuLy8gaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9maXh0dXJlcy5qcyc7XG5cblxuTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuXHRjb25zb2xlLmxvZyhcIm1ldGVvciBzdGFydGVkLi4uXCIpO1xuXG5cblxuICAvLyBjb2RlIHRvIHJ1biBvbiBzZXJ2ZXIgYXQgc3RhcnR1cFxuXG4gLy8gIFNlcnZlcjIgPSBERFAuY29ubmVjdChcImh0dHA6Ly9iZWVrZWUuYm94OjgzXCIpO1xuXHQvLyBBY2NvdW50cy5jb25uZWN0aW9uID0gU2VydmVyMjtcblx0Ly8gY29uc29sZS5sb2coXCJvbiBjb25uZWN0ZS4uLlwiKTtcbn0pO1xuIl19
