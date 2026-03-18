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
        const response = cmd('curl --interface wlanusb -s -m 8 -D - -o /dev/null http://connectivitycheck.gstatic.com/generate_204 || true').toString();
        const statusMatch = response.match(/HTTP\/[0-9.]+\s+(\d{3})/);
        const locationMatch = response.match(/^[Ll]ocation:\s*(.+)$/m);
        const statusCode = statusMatch ? parseInt(statusMatch[1], 10) : null;
        let url = locationMatch ? locationMatch[1].trim() : null;

        if (url && /^\/\//.test(url)) {
          url = `http:${url}`;
        }

        if (url && !/^https?:\/\//i.test(url)) {
          url = 'http://neverssl.com';
        }

        if (url) {
          return {
            detected: true,
            url: url,
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

        if (statusCode === 200) {
          return {
            detected: true,
            url: 'http://neverssl.com',
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
          const connectionConfig = {
            ssid: ssid
          };

          if (typeof password === 'string' && password !== '') {
            connectionConfig.password = password;
          }

          wifi.connect(connectionConfig, error => {
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
        return getClientSSIDFromSystem();
      },
      'getCaptivePortalStatus': function () {
        ensureWifiClientModeEnabled();
        return getCaptivePortalStatusFromSystem();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS93aWZpQ2xpZW50TW9kZVN0YXRlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiYWRkQ2xhc3MiLCJmYWRlT3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnQiLCJBcHBzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJhbGxvdyIsImluc2VydCIsInVwZGF0ZSIsInVzZXJJZCIsInNwYWNlIiwicHVibGlzaCIsImFwcHNQdWJsaWNhdGlvbiIsImZpbmQiLCJTeW5jaHJvbml6YXRpb25zIiwic3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uIiwiaXNBZG1pbiIsImNvbnNvbGUiLCJsb2ciLCJSb2xlcyIsInVzZXJJc0luUm9sZSIsInVzZXIiLCJyb2xlQXNzaWdubWVudCIsInJlYWR5IiwiV2lmaUNsaWVudE1vZGVTdGF0ZSIsIndpZmlDbGllbnRNb2RlU3RhdGVQdWJsaWNhdGlvbiIsIl9pZCIsImNyZWF0ZVJvbGUiLCJ1bmxlc3NFeGlzdHMiLCJ1c2VycyIsImNvdW50IiwiYWRtaW5QYXNzd29yZCIsInNldHRpbmdzIiwidXNlcm5hbWUiLCJyb2xlcyIsIl8iLCJlYWNoIiwiaWQiLCJBY2NvdW50cyIsImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJvZmlsZSIsIm5hbWUiLCJsZW5ndGgiLCJhZGRVc2Vyc1RvUm9sZXMiLCJkZWZhdWx0QXBwcyIsImN1c3RvbUFwcCIsIm9ubHlUZWFjaGVyIiwib3JkZXIiLCJkb2NfdXNlciIsImRvY19hZG1pbiIsImxhc3RfdmVyc2lvbiIsInVybCIsImljb24iLCJkZXNjcmlwdGlvbiIsImluc3RhbGxlZCIsInZlcnNpb24iLCJoaWRkZW4iLCJIVFRQIiwiZnMiLCJOcG0iLCJyZXF1aXJlIiwiZXhlYyIsImNtZCIsIndyYXBBc3luYyIsIndpZmlTZXR0aW5nc1BhdGgiLCJjb25maWdQYXRoIiwic2NyaXB0c1BhdGgiLCJ3aWZpQ2xpZW50RW5hYmxlU2NyaXB0TmFtZSIsIndpZmlDbGllbnREaXNhYmxlU2NyaXB0TmFtZSIsIndpZmlDbGllbnRNb2RlU3RhdGVQYXRoIiwicmVhZGxpbmUiLCJzaGVsbEVzY2FwZSIsInZhbHVlIiwiU3RyaW5nIiwicmVwbGFjZSIsInJlc29sdmVTY3JpcHRQYXRoIiwic2NyaXB0TmFtZSIsInJlYWRXaWZpQ2xpZW50TW9kZVN0YXRlIiwiZXhpc3RzU3luYyIsInN0YXRlIiwicmVhZEZpbGVTeW5jIiwidHJpbSIsImVycm9yIiwid3JpdGVXaWZpQ2xpZW50TW9kZVN0YXRlIiwiZW5hYmxlZCIsIndyaXRlRmlsZVN5bmMiLCJwZXJzaXN0V2lmaUNsaWVudE1vZGVTdGF0ZSIsInVwc2VydCIsIiRzZXQiLCJ1cGRhdGVkQXQiLCJEYXRlIiwiZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0iLCJoYXNXbGFuVXNiIiwidG9TdHJpbmciLCJoYXNBcEFkZHJlc3MiLCJkZXRlY3RXaWZpQ2xpZW50TW9kZUZyb21TeXN0ZW0iLCJubVN0YXRlIiwidGVzdCIsImdldFdpZmlDbGllbnRNb2RlU3RhdGUiLCJkZXRlY3RlZFN0YXRlIiwiZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkIiwiRXJyb3IiLCJnZXRDbGllbnRTU0lERnJvbVN5c3RlbSIsInNzaWQiLCJnZXRDYXB0aXZlUG9ydGFsU3RhdHVzRnJvbVN5c3RlbSIsImRldGVjdGVkIiwicmVzcG9uc2UiLCJzdGF0dXNNYXRjaCIsIm1hdGNoIiwibG9jYXRpb25NYXRjaCIsInN0YXR1c0NvZGUiLCJwYXJzZUludCIsInJ1bldpZmlNb2RlU2NyaXB0Iiwic2NyaXB0UGF0aCIsIm1ldGhvZHMiLCJhZG1pbklkIiwibmV3UGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNoZWNrIiwib2xkZW1haWwiLCJlbWFpbHMiLCJlbWFpbFJlZyIsInJlbW92ZUVtYWlsIiwiYWRkcmVzcyIsImFkZEVtYWlsIiwicmVzdWx0IiwibWVzc2FnZSIsInJlbW92ZVVzZXJzRnJvbVJvbGVzIiwiY29tbWFuZCIsInJlcyIsInN0b3JhZ2VVc2FnZSIsInRvRml4ZWQiLCJzdG9yYWdlVG90YWwiLCJwZXJjZW50YWdlIiwiZGF0YSIsIlJlZ0V4cCIsIlNTSUQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJuZXdTU0lEIiwiZW5jb2RlZE5ld1NTSUQiLCJCdWZmZXIiLCJuZXdEYXRhIiwiY2hhbm5lbCIsIm5ld0NoYW5uZWwiLCJzZXJpYWwiLCJvcGVyYXRvck5hbWUiLCJzaWduYWxTdHJlbmd0aCIsInN0cmVuZ3RoVmFsdWUiLCJxdWFsaXR5IiwiQVBOIiwiQVBOVXNlciIsIkFQTlBhc3N3b3JkIiwic2ltU3RhdHVzUmVzdWx0IiwiZXhlY3V0ZUNvbW1hbmQiLCJzaW1TdGF0dXMiLCJpbmNsdWRlcyIsIlNpbVBpbiIsIlBJTiIsImlzU2hhcmluZyIsInJlczIiLCJpc09ubGluZSIsImpzb24iLCJKU09OIiwicGFyc2UiLCJyZWFzb24iLCJ3aWZpIiwiaW5pdCIsImlmYWNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzY2FuIiwibmV0d29ya3MiLCJ1bmlxdWVOZXR3b3JrcyIsIk1hcCIsImZvckVhY2giLCJuZXR3b3JrIiwic3RyZW5ndGgiLCJrZXkiLCJtYWMiLCJzdWJzdHJpbmciLCJoYXMiLCJnZXQiLCJzZXQiLCJzZWN1cml0eSIsInVuaXF1ZU5ldHdvcmtzQXJyYXkiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJjb25uZWN0aW9uQ29uZmlnIiwiY29ubmVjdCIsImRpc2Nvbm5lY3QiLCJkZWxldGVDb25uZWN0aW9uIiwibGlzdEZvcndhcmRSdWxlc0NvbW1hbmQiLCJsaXN0TmF0UnVsZXNDb21tYW5kIiwiZm9yd2FyZFJlc3VsdCIsIm5hdFJlc3VsdCIsInNoYXJpbmdGcm9tV2xhbmludFRvRXRoIiwic2hhcmluZ0Zyb21XbGFudXNiVG9FdGgiLCJzaGFyaW5nVG9XbGFuaW50RnJvbUV0aEVzdGFibGlzaGVkIiwic2hhcmluZ1RvV2xhbnVzYkZyb21FdGhFc3RhYmxpc2hlZCIsIm5hdEZvcldsYW5pbnQiLCJuYXRGb3JXbGFudXNiIiwic3RhdHVzIiwibWFjQWRkcmVzcyIsImNhbGxiYWNrIiwiaXB0YWJsZXNDb21tYW5kcyIsImpvaW4iLCJzdGRvdXQiLCJzdGRlcnIiLCJpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzIiwiZXhlY3V0ZUFuZFJlcGVhdCIsImRvbmVDYWxsYmFjayIsInRhc2tzQ29tcGxldGVkIiwiYWxsb3dNYWNDb21tYW5kIiwiYmxvY2tPdGhlcnNDb21tYW5kIiwibGluZXMiLCJzcGxpdCIsInJ1bGVOdW1iZXJzIiwicmVkdWNlIiwiYWNjIiwibGluZSIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJydWxlTnVtYmVyIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInJlbW92ZUVycm9yIiwicmVtb3ZlU3Rkb3V0IiwicmVtb3ZlU3RkZXJyIiwic2F2ZUVycm9yIiwic2F2ZVN0ZG91dCIsInNhdmVTdGRlcnIiLCJzaGFyaW5nRnJvbVdsYW5pbnRUb1d3YW4iLCJzaGFyaW5nRnJvbVdsYW51c2JUb1d3YW4iLCJzaGFyaW5nVG9XbGFuaW50RnJvbVd3YW5Fc3RhYmxpc2hlZCIsInNoYXJpbmdUb1dsYW51c2JGcm9tV3dhbkVzdGFibGlzaGVkIiwiZGV2aWNlU2VyaWFsIiwicHVibGljIiwiZGV2aWNlVG9rZW4iLCJtb29kbGVBUElUb2tlbiIsImNsb3VkVVJMIiwib3B0aW9ucyIsImhlYWRlcnMiLCJucG1SZXF1ZXN0T3B0aW9ucyIsInJlamVjdFVuYXV0aG9yaXplZCIsInRpbWVvdXQiLCJwb3N0IiwicmVzdWx0Q29udGVudCIsImNvbnRlbnQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sQ0FBQ0MsUUFBWCxFQUFxQjtBQUNwQkMsUUFBTSxDQUFDQyxPQUFQLENBQWUsWUFBZixFQUE2QiwyTkFBN0I7QUFFQUQsUUFBTSxDQUFDRSxPQUFQLENBQWUsWUFBZixFQUE2QkMsTUFBTSxDQUFDQyxPQUFQLENBQWUsaUJBQWYsQ0FBN0I7QUFDQTs7QUFFRCxJQUFJTixNQUFNLENBQUNPLFFBQVgsRUFBcUI7QUFDcEJQLFFBQU0sQ0FBQ1EsT0FBUCxDQUFlLFlBQVc7QUFFekJDLGNBQVUsQ0FBQyxZQUFXO0FBQ2pCQyxPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCQyxRQUFsQixDQUEyQixlQUEzQjtBQUVKRCxPQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QkUsT0FBNUIsQ0FBb0MsR0FBcEMsRUFBeUMsWUFBVztBQUNuREYsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxNQUFSO0FBQ0FILFNBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JJLFdBQWxCLENBQThCLGVBQTlCO0FBQ0QsT0FIQTtBQUlBLEtBUFMsRUFPUCxHQVBPLENBQVY7QUFRQSxHQVZEO0FBV0EsQzs7Ozs7Ozs7Ozs7QUNsQkRDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUNDLE1BQUksRUFBQyxNQUFJQTtBQUFWLENBQWQ7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Q0FBYWhCLElBQWIsR0FBb0JpQixLQUFwQixFQUF0QjtBQUNDLFNBQU85QyxNQUFNLENBQUM2QyxLQUFQLENBQWFoQixJQUFiLEVBQVA7QUFDRCxDQUhELEU7Ozs7Ozs7Ozs7O0FDVEYsSUFBSTdCLE1BQUo7QUFBV2UsTUFBTSxDQUFDSSxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDbkIsUUFBTSxDQUFDb0IsQ0FBRCxFQUFHO0FBQUNwQixVQUFNLEdBQUNvQixDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFETCxNQUFNLENBQUNJLElBQVAsQ0FBWSx3QkFBWjtBQUFzQ0osTUFBTSxDQUFDSSxJQUFQLENBQVksb0NBQVo7QUFBa0RKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHlCQUFaO0FBQXVDSixNQUFNLENBQUNJLElBQVAsQ0FBWSx1QkFBWjtBQUFxQ0osTUFBTSxDQUFDSSxJQUFQLENBQVksc0JBQVo7QUFBb0NKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLDJCQUFaO0FBQXlDSixNQUFNLENBQUNJLElBQVAsQ0FBWSxzQkFBWjtBQVlqVDtBQUNBO0FBR0E7QUFFQTtBQUdBbkIsTUFBTSxDQUFDUSxPQUFQLENBQWUsTUFBTTtBQUNwQnlCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBRG9CLENBS25CO0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FWRCxFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cdEluamVjdC5yYXdIZWFkKFwibWV0YUxvYWRlclwiLCAnPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPTAsIHdpZHRoPWRldmljZS13aWR0aCwgaGVpZ2h0PWRldmljZS1oZWlnaHRcIi8+PG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCI+XHQ8bWV0YSBuYW1lPVwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj4nKTtcblxuXHRJbmplY3QucmF3Qm9keShcImh0bWxMb2FkZXJcIiwgQXNzZXRzLmdldFRleHQoJ2FwcF9sb2FkZXIuaHRtbCcpKTtcbn1cblxuaWYgKE1ldGVvci5pc0NsaWVudCkge1xuXHRNZXRlb3Iuc3RhcnR1cChmdW5jdGlvbigpIHtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdCQoJy5pbmRleC0taWNvbicpLmFkZENsYXNzKCdhbmltYXRlZC1pY29uJyk7XG5cblx0XHRcdCQoXCIjaW5qZWN0LWxvYWRlci13cmFwcGVyXCIpLmZhZGVPdXQoNTAwLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0JCgnLmluZGV4LS1pY29uJykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkLWljb24nKTtcblx0XHR9KTtcblx0XHR9LCA1MDApO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgQXBwcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdob21lLWFwcHMnKTtcblxuXG5cbkFwcHMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0dXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblx0cmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsQXBwcycsIGZ1bmN0aW9uIGFwcHNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gQXBwcy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBTeW5jaHJvbml6YXRpb25zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtc3luY2hyb25pemF0aW9ucycpO1xuXG5cblxuU3luY2hyb25pemF0aW9ucy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHJlbW92ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsU3luY2hyb25pemF0aW9ucycsIGZ1bmN0aW9uIHN5bmNocm9uaXphdGlvbnNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gU3luY2hyb25pemF0aW9ucy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuLy8gdmFyIHVzZXJzREJcdD0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vIHZhciBjb2xsZWN0aW9uXHQ9IHVzZXJzREIub3BlbigndXNlcnMnKTtcblxuXG4vL2NvbnN0IGRhdGFiYXNlID0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vY29uc3QgY29sbGVjdGlvbiA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy9leHBvcnQgY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vIFNoYXJpbmcgdGhlIHNhbWUgQWNjb3VudCBjb2xsZWN0aW9uIHRoYW4gYmVla2VlLWxpdmVcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHQvLyBjaGVjayB0aGF0IHRoZSB1c2VySWQgc3BlY2lmaWVkIGlzIGFkbWluXG5pc0FkbWluID0gZnVuY3Rpb24odXNlcklkKSB7XG5cdGNvbnNvbGUubG9nKFwiaXNhZG1pblwiKTtcbiAgcmV0dXJuIFJvbGVzLnVzZXJJc0luUm9sZShNZXRlb3IudXNlcigpLCAnYWRtaW4nKTtcbn1cblxuXG4vLyBQdWJsaXNoIFJvbGVzIHRvIGNsaWVudFxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoeyAndXNlci5faWQnOiB0aGlzLnVzZXJJZCB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJlYWR5KClcbiAgfVxufSk7XG5cbk1ldGVvci5wdWJsaXNoKG51bGwsIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCgpO1xuXG59KTtcblxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG5cbi8vIFNlcnZlcjIgPSBERFAuY29ubmVjdChcImh0dHA6Ly9iZWVrZWUuYm94OjgzXCIpO1xuLy8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFNlcnZlcjI7XG5cblxuLy92YXIgZGF0YWJhc2UgPSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy9NZXRlb3IudXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vZXhwb3J0IGNvbnN0IFVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2FwcHMnKTtcblxuXG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG5leHBvcnQgY29uc3QgV2lmaUNsaWVudE1vZGVTdGF0ZSA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCd3aWZpQ2xpZW50TW9kZVN0YXRlJyk7XG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblx0TWV0ZW9yLnB1Ymxpc2goJ3dpZmlDbGllbnRNb2RlU3RhdGUnLCBmdW5jdGlvbiB3aWZpQ2xpZW50TW9kZVN0YXRlUHVibGljYXRpb24oKSB7XG5cdFx0cmV0dXJuIFdpZmlDbGllbnRNb2RlU3RhdGUuZmluZCh7IF9pZDogJ3dpZmktY2xpZW50LW1vZGUtc3RhdGUnIH0pO1xuXHR9KTtcbn1cbiIsImltcG9ydCB7IEFwcHMgfSBmcm9tICcuLi9pbXBvcnRzL2FwaS9hcHBzLmpzJztcblxuXHQvLyBDcmVhdGUgdGhlIHJvbGVzXG5cdFJvbGVzLmNyZWF0ZVJvbGUoJ21hbmFnZXInLCB7dW5sZXNzRXhpc3RzOiB0cnVlfSk7XG5cblxuLy8gIyMjICBDcmVhdGUgYWRtaW4gdXNlciBhdCBmaXJzdCBzdGFydCAgIyMjXG5cblxuaWYgKE1ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuXHRcblx0Ly8gQ3JlYXRlIHRoZSByb2xlXG5cdFJvbGVzLmNyZWF0ZVJvbGUoJ21hbmFnZXInLCB7dW5sZXNzRXhpc3RzOiB0cnVlfSk7XG5cdFJvbGVzLmNyZWF0ZVJvbGUoJ2FkbWluJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXG5cdHZhciBhZG1pblBhc3N3b3JkID0gTWV0ZW9yLnNldHRpbmdzLmFkbWluUGFzc3dvcmQ7XG5cblx0dmFyIHVzZXJzID0gW1xuXHRcdHt1c2VybmFtZTpcImFkbWluXCIscm9sZXM6WydhZG1pbiddfSxcblx0XTtcblxuXHRfLmVhY2godXNlcnMsIGZ1bmN0aW9uICh1c2VyKSB7XG5cdFx0dmFyIGlkO1xuXHRcdGlkID0gQWNjb3VudHMuY3JlYXRlVXNlcih7XG5cdFx0XHR1c2VybmFtZTogdXNlci51c2VybmFtZSxcblx0XHRcdGVtYWlsOiBcIkFkbWluXCIsXG5cdFx0XHRwYXNzd29yZDogYWRtaW5QYXNzd29yZCxcblx0XHRcdHByb2ZpbGU6e25hbWU6XCJBZG1pblwifVxuXHRcdH0pO1xuXG5cdFx0aWYgKHVzZXIucm9sZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Um9sZXMuYWRkVXNlcnNUb1JvbGVzKGlkLCB1c2VyLnJvbGVzKTtcblx0XHR9XG5cdH0pO1xufVxuXG5cbmlmIChBcHBzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG5cblx0dmFyIGRlZmF1bHRBcHBzID0gW1xuXHRcdHtuYW1lOlwiTGl2ZVwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjozLCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vbGl2ZS5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtbGl2ZS5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgTGl2ZSBwcm9tb3RlIHJlYWwtdGltZSBpbnRlcmFjdGlvbiBieSBhbGxvd2luZyBsZWFybmVycyB0byBleHByZXNzIHRoZW1zZWx2ZXMgYXNraW5nIHF1ZXN0aW9ucywgcG9zdGluZyBwaG90b3Mgb3Igc2hhcmluZyBmaWxlcy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMS40XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJSZXNvdXJjZXNcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NywgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL3Jlc291cmNlcy5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtcmVzb3VyY2VzLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIldpdGggQmVla2VlIFJlc291cmNlcywgeW91IGNhbiBlYXNpbHkgc2hhcmUgZmlsZXMgd2l0aCB5b3VyIGxlYXJuZXJzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIldoZWVsXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6dHJ1ZSwgb3JkZXI6OSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMC43XCIsIHVybDpcImh0dHA6Ly93aGVlbC5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtd2hlZWwucG5nXCIsIGRlc2NyaXB0aW9uOlwiQmVla2VlIFdoZWVsIGlzIGEgc2ltcGxlIHJhbmRvbSBwaWNrZXIgd2hlZWwgdGhhdCBhbGxvdyB5b3UgdG8gcGljayB1cCBhIHJhbmRvbSBuYW1lLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjhcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlRpbWVyXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjgsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly90aW1lci5iZWVrZWUuYm94XCIsIGljb246XCJiZWVrZWUtdGltZXIucG5nXCIsIGRlc2NyaXB0aW9uOlwiQmVla2VlIFRpbWVyIGlzIGEgc2ltcGxlIHRpbWVyIHRoYXQgbGV0cyB5b3VyIGxlYXJuZXJzIGtub3cgaG93IG11Y2ggdGltZSB0aGV5IGhhdmUgbGVmdC5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJNb29kbGVcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjoxLCBkb2NfdXNlcjpcIm1vb2RsZV90ZWFjaGVyZG9jLnBkZlwiLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9tb29kbGUuYmVla2VlLmJveFwiLCBpY29uOlwibW9vZGxlLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIk1vb2RsZSBpcyBhIGZyZWUsIG9ubGluZSBMZWFybmluZyBNYW5hZ2VtZW50IHN5c3RlbSBlbmFibGluZyBlZHVjYXRvcnMgdG8gY3JlYXRlIHRoZWlyIG93biBwcml2YXRlIHdlYnNpdGUgZmlsbGVkIHdpdGggZHluYW1pYyBjb3Vyc2VzIHRoYXQgZXh0ZW5kIGxlYXJuaW5nLCBhbnkgdGltZSwgYW55d2hlcmUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjMuMTEuMlwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiS29saWJyaVwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjIsIGRvY191c2VyOlwia29saWJyaV91c2VyZG9jLnBkZlwiLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9rb2xpYnJpLmJlZWtlZS5ib3hcIiwgaWNvbjpcImtvbGlicmkucG5nXCIsIGRlc2NyaXB0aW9uOlwiS29saWJyaSBpcyBhbiBvcGVuLXNvdXJjZSBlZHVjYXRpb25hbCBwbGF0Zm9ybSBzcGVjaWFsbHkgZGVzaWduZWQgdG8gcHJvdmlkZSBvZmZsaW5lIGFjY2VzcyB0byBhIHdpZGUgcmFuZ2Ugb2YgcXVhbGl0eSwgb3Blbmx5IGxpY2Vuc2VkIGVkdWNhdGlvbmFsIHJlc291cmNlcyBpbiBsb3ctcmVzb3VyY2UgY29udGV4dHMgbGlrZSBydXJhbCBzY2hvb2xzLCByZWZ1Z2VlIGNhbXBzLCBvcnBoYW5hZ2VzLCBhbmQgYWxzbyBpbiBub24tZm9ybWFsIHNjaG9vbCBwcm9ncmFtcy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4xNC43XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0Ly8ge25hbWU6XCJFdGhlcnBhZFwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjUsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9ldGhlcnBhZC5iZWVrZWUuYm94XCIsIGljb246XCJldGhlcnBhZC5wbmdcIiwgZGVzY3JpcHRpb246XCJFdGhlcnBhZCBhbGxvd3MgeW91IHRvIGVkaXQgZG9jdW1lbnRzIGNvbGxhYm9yYXRpdmVseSBpbiByZWFsLXRpbWUsIG11Y2ggbGlrZSBhIGxpdmUgbXVsdGktcGxheWVyIGVkaXRvciB0aGF0IHJ1bnMgaW4geW91ciBicm93c2VyLiBXcml0ZSBhcnRpY2xlcywgcHJlc3MgcmVsZWFzZXMsIHRvLWRvIGxpc3RzLCBldGMuIHRvZ2V0aGVyIHdpdGggeW91ciBmcmllbmRzLCBmZWxsb3cgc3R1ZGVudHMgb3IgY29sbGVhZ3VlcywgYWxsIHdvcmtpbmcgb24gdGhlIHNhbWUgZG9jdW1lbnQgYXQgdGhlIHNhbWUgdGltZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMS44LjE0XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJTdG9ybVwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjQsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9zdG9ybS5iZWVrZWUuYm94XCIsIGljb246XCJzdG9ybS5wbmdcIiwgZGVzY3JpcHRpb246XCJDcmVhdGUgYW5kIGFuaW1hdGUgbGl2ZSBzdXJ2ZXlzLCBicmFpbnN0b3JtcyBhbmQgcXVpenplcy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC40LjVcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlBhZFwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjUsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9wYWQuYmVla2VlLmJveFwiLCBpY29uOlwicGFkLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBjb2xsYWJvcmF0aXZlIHdhbGxzIHRvIHNoYXJlIGFuZCBvcmdhbml6ZSBjb250ZW50LlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjguMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiQnV6emVyXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjp0cnVlLCBvcmRlcjo2LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vYnV6emVyLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJ1enplci5wbmdcIiwgZGVzY3JpcHRpb246XCJDcmVhdGUgYSB2aXJ0dWFsIGdhbWluZyByb29tIGFyb3VuZCBhIGNvbm5lY3RlZCBidXp6ZXIuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMi40XCIsIGhpZGRlbjpmYWxzZX0sXG5cblx0XTtcblxuXHRfLmVhY2goZGVmYXVsdEFwcHMsIGZ1bmN0aW9uIChkZWZhdWx0QXBwcykge1xuXHRcdEFwcHMuaW5zZXJ0KGRlZmF1bHRBcHBzKTtcblx0fSk7XG59IiwiaW1wb3J0IHsgSFRUUCB9IGZyb20gJ21ldGVvci9odHRwJ1xuaW1wb3J0IHsgV2lmaUNsaWVudE1vZGVTdGF0ZSB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL3dpZmlDbGllbnRNb2RlU3RhdGUuanMnO1xuXG5NZXRlb3Iuc3RhcnR1cChmdW5jdGlvbigpIHtcblxuXHRpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0dmFyIGZzID0gTnBtLnJlcXVpcmUoJ2ZzJyk7XG5cdGV4ZWMgPSBOcG0ucmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWM7XG5cdGNtZCA9IE1ldGVvci53cmFwQXN5bmMoZXhlYyk7XG5cblx0dmFyIHdpZmlTZXR0aW5nc1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Mud2lmaVNldHRpbmdzUGF0aDtcblx0dmFyIGNvbmZpZ1BhdGggPSBNZXRlb3Iuc2V0dGluZ3MuY29uZmlnUGF0aDtcblx0dmFyIHNjcmlwdHNQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnNjcmlwdHNQYXRoIHx8ICcvaG9tZS9iZWVrZWUvc2NyaXB0cyc7XG5cdHZhciB3aWZpQ2xpZW50RW5hYmxlU2NyaXB0TmFtZSA9ICdzd2l0Y2hfd2lmaV90b19jbGllbnQuc2gnO1xuXHR2YXIgd2lmaUNsaWVudERpc2FibGVTY3JpcHROYW1lID0gJ3N3aXRjaF93aWZpX3RvX2FwLnNoJztcblx0dmFyIHdpZmlDbGllbnRNb2RlU3RhdGVQYXRoID0gTWV0ZW9yLnNldHRpbmdzLndpZmlDbGllbnRNb2RlU3RhdGVQYXRoIHx8IGAke3NjcmlwdHNQYXRofS8ud2lmaS1jbGllbnQtbW9kZS1zdGF0ZWA7XG5cdGNvbnN0IHJlYWRsaW5lID0gcmVxdWlyZSgncmVhZGxpbmUnKTtcblxuXHRmdW5jdGlvbiBzaGVsbEVzY2FwZSh2YWx1ZSkge1xuXHRcdHJldHVybiBgJyR7U3RyaW5nKHZhbHVlKS5yZXBsYWNlKC8nL2csIGAnXFxcXCcnYCl9J2A7XG5cdH1cblxuXHRmdW5jdGlvbiByZXNvbHZlU2NyaXB0UGF0aChzY3JpcHROYW1lKSB7XG5cdFx0cmV0dXJuIGAke3NjcmlwdHNQYXRofS8ke3NjcmlwdE5hbWV9YDtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlYWRXaWZpQ2xpZW50TW9kZVN0YXRlKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoIWZzLmV4aXN0c1N5bmMod2lmaUNsaWVudE1vZGVTdGF0ZVBhdGgpKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdGF0ZSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpQ2xpZW50TW9kZVN0YXRlUGF0aCwgJ3V0Zi04JykudHJpbSgpO1xuXG5cdFx0XHRpZiAoc3RhdGUgPT09ICdlbmFibGVkJykge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHN0YXRlID09PSAnZGlzYWJsZWQnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIHJlYWRpbmcgV2ktRmkgY2xpZW50IG1vZGUgc3RhdGU6JywgZXJyb3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gd3JpdGVXaWZpQ2xpZW50TW9kZVN0YXRlKGVuYWJsZWQpIHtcblx0XHR0cnkge1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhcblx0XHRcdFx0d2lmaUNsaWVudE1vZGVTdGF0ZVBhdGgsXG5cdFx0XHRcdGVuYWJsZWQgPyAnZW5hYmxlZFxcbicgOiAnZGlzYWJsZWRcXG4nLFxuXHRcdFx0XHQndXRmLTgnXG5cdFx0XHQpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3Igd3JpdGluZyBXaS1GaSBjbGllbnQgbW9kZSBzdGF0ZTonLCBlcnJvcik7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gcGVyc2lzdFdpZmlDbGllbnRNb2RlU3RhdGUoZW5hYmxlZCkge1xuXHRcdHdyaXRlV2lmaUNsaWVudE1vZGVTdGF0ZShlbmFibGVkKTtcblx0XHRXaWZpQ2xpZW50TW9kZVN0YXRlLnVwc2VydChcblx0XHRcdHsgX2lkOiAnd2lmaS1jbGllbnQtbW9kZS1zdGF0ZScgfSxcblx0XHRcdHtcblx0XHRcdFx0JHNldDoge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IGVuYWJsZWQgPT09IHRydWUsXG5cdFx0XHRcdFx0dXBkYXRlZEF0OiBuZXcgRGF0ZSgpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0oKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGhhc1dsYW5Vc2IgPSBjbWQoJ2lwIGxpbmsgc2hvdyB3bGFudXNiID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZScpLnRvU3RyaW5nKCkudHJpbSgpO1xuXG5cdFx0XHRpZiAoaGFzV2xhblVzYiAhPT0gJ3RydWUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaGFzQXBBZGRyZXNzID0gY21kKFwiaXAgLTQgYWRkciBzaG93IHdsYW51c2IgfCBncmVwIC1xICcxMFxcXFwuMVxcXFwuMFxcXFwuMS8yNCcgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIikudG9TdHJpbmcoKS50cmltKCk7XG5cblx0XHRcdHJldHVybiBoYXNBcEFkZHJlc3MgPT09ICd0cnVlJztcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGRldGVjdGluZyBXaS1GaSBhY2Nlc3MgcG9pbnQgbW9kZSBmcm9tIHN5c3RlbTonLCBlcnJvcik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZGV0ZWN0V2lmaUNsaWVudE1vZGVGcm9tU3lzdGVtKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoZGV0ZWN0V2lmaUFjY2Vzc1BvaW50TW9kZUZyb21TeXN0ZW0oKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGhhc1dsYW5Vc2IgPSBjbWQoJ2lwIGxpbmsgc2hvdyB3bGFudXNiID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZScpLnRvU3RyaW5nKCkudHJpbSgpO1xuXG5cdFx0XHRpZiAoaGFzV2xhblVzYiAhPT0gJ3RydWUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgbm1TdGF0ZSA9IGNtZChcIm5tY2xpIC10IC1mIERFVklDRSxTVEFURSBkZXZpY2Ugc3RhdHVzIDI+L2Rldi9udWxsIHwgYXdrIC1GOiAnJDE9PVxcXCJ3bGFudXNiXFxcIiB7cHJpbnQgJDI7IGV4aXR9JyB8fCB0cnVlXCIpLnRvU3RyaW5nKCkudHJpbSgpO1xuXG5cdFx0XHRyZXR1cm4gL14oY29ubmVjdGVkfGRpc2Nvbm5lY3RlZHxjb25uZWN0aW5nfHByZXBhcmluZykvLnRlc3Qobm1TdGF0ZSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBkZXRlY3RpbmcgV2ktRmkgY2xpZW50IG1vZGUgZnJvbSBzeXN0ZW06JywgZXJyb3IpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGdldFdpZmlDbGllbnRNb2RlU3RhdGUoKSB7XG5cdFx0aWYgKGRldGVjdFdpZmlBY2Nlc3NQb2ludE1vZGVGcm9tU3lzdGVtKCkpIHtcblx0XHRcdHBlcnNpc3RXaWZpQ2xpZW50TW9kZVN0YXRlKGZhbHNlKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBkZXRlY3RlZFN0YXRlID0gZGV0ZWN0V2lmaUNsaWVudE1vZGVGcm9tU3lzdGVtKCk7XG5cdFx0cGVyc2lzdFdpZmlDbGllbnRNb2RlU3RhdGUoZGV0ZWN0ZWRTdGF0ZSk7XG5cdFx0cmV0dXJuIGRldGVjdGVkU3RhdGU7XG5cdH1cblxuXHRmdW5jdGlvbiBlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKSB7XG5cdFx0aWYgKCFnZXRXaWZpQ2xpZW50TW9kZVN0YXRlKCkpIHtcblx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ3dpZmktY2xpZW50LW1vZGUtZGlzYWJsZWQnLCAnRW5hYmxlIFdpLUZpIGNsaWVudCBtb2RlIGJlZm9yZSBzY2FubmluZyBvciBjb25uZWN0aW5nLicpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGdldENsaWVudFNTSURGcm9tU3lzdGVtKCkge1xuXHRcdGxldCBzc2lkO1xuXHRcdHRyeSB7XG5cdFx0XHRzc2lkID0gY21kKCdpd2dldGlkIC1yIHdsYW51c2IgMj4vZGV2L251bGwgfHwgdHJ1ZScpLnRyaW0oKTtcblxuXHRcdFx0aWYgKCFzc2lkKSB7XG5cdFx0XHRcdHNzaWQgPSBjbWQoJ25tY2xpIC1nIEdFTkVSQUwuQ09OTkVDVElPTiBkZXZpY2Ugc2hvdyB3bGFudXNiIDI+L2Rldi9udWxsIHwgaGVhZCAtbiAxIHx8IHRydWUnKS50cmltKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzc2lkID09PSAnLS0nKSB7XG5cdFx0XHRcdHNzaWQgPSAnJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBzc2lkID09PSAnc3RyaW5nJyAmJiBzc2lkICE9PSAnJykge1xuXHRcdFx0XHRyZXR1cm4gc3NpZDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIHJldHJpZXZpbmcgY2xpZW50IFNTSUQ6JywgZXJyb3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiAnTm90IGNvbm5lY3RlZCc7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDYXB0aXZlUG9ydGFsU3RhdHVzRnJvbVN5c3RlbSgpIHtcblx0XHRjb25zdCBzc2lkID0gZ2V0Q2xpZW50U1NJREZyb21TeXN0ZW0oKTtcblxuXHRcdGlmIChzc2lkID09PSAnTm90IGNvbm5lY3RlZCcpIHtcblx0XHRcdHJldHVybiB7IGRldGVjdGVkOiBmYWxzZSwgdXJsOiBudWxsLCBzc2lkOiBzc2lkIH07XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY21kKFxuXHRcdFx0XHQnY3VybCAtLWludGVyZmFjZSB3bGFudXNiIC1zIC1tIDggLUQgLSAtbyAvZGV2L251bGwgaHR0cDovL2Nvbm5lY3Rpdml0eWNoZWNrLmdzdGF0aWMuY29tL2dlbmVyYXRlXzIwNCB8fCB0cnVlJ1xuXHRcdFx0KS50b1N0cmluZygpO1xuXHRcdFx0Y29uc3Qgc3RhdHVzTWF0Y2ggPSByZXNwb25zZS5tYXRjaCgvSFRUUFxcL1swLTkuXStcXHMrKFxcZHszfSkvKTtcblx0XHRcdGNvbnN0IGxvY2F0aW9uTWF0Y2ggPSByZXNwb25zZS5tYXRjaCgvXltMbF1vY2F0aW9uOlxccyooLispJC9tKTtcblx0XHRcdGNvbnN0IHN0YXR1c0NvZGUgPSBzdGF0dXNNYXRjaCA/IHBhcnNlSW50KHN0YXR1c01hdGNoWzFdLCAxMCkgOiBudWxsO1xuXHRcdFx0bGV0IHVybCA9IGxvY2F0aW9uTWF0Y2ggPyBsb2NhdGlvbk1hdGNoWzFdLnRyaW0oKSA6IG51bGw7XG5cblx0XHRcdGlmICh1cmwgJiYgL15cXC9cXC8vLnRlc3QodXJsKSkge1xuXHRcdFx0XHR1cmwgPSBgaHR0cDoke3VybH1gO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodXJsICYmICEvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KHVybCkpIHtcblx0XHRcdFx0dXJsID0gJ2h0dHA6Ly9uZXZlcnNzbC5jb20nO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodXJsKSB7XG5cdFx0XHRcdHJldHVybiB7IGRldGVjdGVkOiB0cnVlLCB1cmw6IHVybCwgc3NpZDogc3NpZCwgc3RhdHVzQ29kZTogc3RhdHVzQ29kZSB9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3RhdHVzQ29kZSA9PT0gMjA0KSB7XG5cdFx0XHRcdHJldHVybiB7IGRldGVjdGVkOiBmYWxzZSwgdXJsOiBudWxsLCBzc2lkOiBzc2lkLCBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlIH07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdGF0dXNDb2RlID09PSAyMDApIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRkZXRlY3RlZDogdHJ1ZSxcblx0XHRcdFx0XHR1cmw6ICdodHRwOi8vbmV2ZXJzc2wuY29tJyxcblx0XHRcdFx0XHRzc2lkOiBzc2lkLFxuXHRcdFx0XHRcdHN0YXR1c0NvZGU6IHN0YXR1c0NvZGVcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGRldGVjdGluZyBjYXB0aXZlIHBvcnRhbDonLCBlcnJvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHsgZGV0ZWN0ZWQ6IGZhbHNlLCB1cmw6IG51bGwsIHNzaWQ6IHNzaWQgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJ1bldpZmlNb2RlU2NyaXB0KHNjcmlwdE5hbWUpIHtcblx0XHRjb25zdCBzY3JpcHRQYXRoID0gcmVzb2x2ZVNjcmlwdFBhdGgoc2NyaXB0TmFtZSk7XG5cblx0XHRpZiAoIWZzLmV4aXN0c1N5bmMoc2NyaXB0UGF0aCkpIHtcblx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ3dpZmktY2xpZW50LW1vZGUtc2NyaXB0LW1pc3NpbmcnLCBgTWlzc2luZyBXaS1GaSBtb2RlIHNjcmlwdDogJHtzY3JpcHRQYXRofWApO1xuXHRcdH1cblxuXHRcdHJldHVybiBjbWQoYHRpbWVvdXQgNDVzIGJhc2ggJHtzaGVsbEVzY2FwZShzY3JpcHRQYXRoKX1gKTtcblx0fVxuXG5cdGlmIChkZXRlY3RXaWZpQWNjZXNzUG9pbnRNb2RlRnJvbVN5c3RlbSgpKSB7XG5cdFx0cGVyc2lzdFdpZmlDbGllbnRNb2RlU3RhdGUoZmFsc2UpO1xuXHR9IGVsc2Uge1xuXHRcdHBlcnNpc3RXaWZpQ2xpZW50TW9kZVN0YXRlKGRldGVjdFdpZmlDbGllbnRNb2RlRnJvbVN5c3RlbSgpKTtcblx0fVxuXG5cblx0TWV0ZW9yLm1ldGhvZHMoe1xuXG5cdFx0J2FkbWluU2V0TmV3UGFzc3dvcmQnOiBmdW5jdGlvbihhZG1pbklkLCB1c2VySWQsIG5ld1Bhc3N3b3JkKSB7IC8vIEFkbWluIGNhbiBmb3JjaWJseSBjaGFuZ2UgdGhlIHBhc3N3b3JkIGZvciBhIHVzZXJcblx0XHRcdGlmIChSb2xlcy51c2VySXNJblJvbGUoYWRtaW5JZCwgJ2FkbWluJykpIHtcblx0XHRcdFx0QWNjb3VudHMuc2V0UGFzc3dvcmQodXNlcklkLCBuZXdQYXNzd29yZCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnY3JlYXRlQWNjb3VudCc6IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCwgcHJvZmlsZSkge1xuXHRcdFx0cmV0dXJuIEFjY291bnRzLmNyZWF0ZVVzZXIoe2VtYWlsOmVtYWlsLHBhc3N3b3JkOnBhc3N3b3JkLHByb2ZpbGU6cHJvZmlsZX0pOyAvLyBDYWxsYmFjayBpcyBub3Qgc3VwcG9ydGVkIG9uIHNlcnZlci1zaWRlXG5cdFx0fSxcblx0XHQnZWRpdEFjY291bnQnOiBmdW5jdGlvbih1c2VySWQsIGVtYWlsLCBwYXNzd29yZCwgcHJvZmlsZSkge1xuXHRcdFx0TWV0ZW9yLnVzZXJzLnVwZGF0ZSh7X2lkOiB1c2VySWR9LCB7XG5cdCAgXHRcdFx0JHNldDoge1xuXHQgICAgXHRcdFx0J2VtYWlscy4wLmFkZHJlc3MnOiBlbWFpbCxcblx0ICAgIFx0XHRcdHByb2ZpbGU6IHByb2ZpbGVcblx0ICBcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGlmIChwYXNzd29yZCkge1xuXHRcdFx0XHRBY2NvdW50cy5zZXRQYXNzd29yZCh1c2VySWQsIHBhc3N3b3JkKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdjaGFuZ2VFbWFpbCc6IGZ1bmN0aW9uKGVtYWlsKSB7XG5cdFx0XHR2YXIgZW1haWwgPSBlbWFpbDtcblx0XHRcdGNoZWNrKGVtYWlsLCBTdHJpbmcpO1xuXHRcdFx0dmFyIHVzZXIgPSBNZXRlb3IudXNlcigpO1xuXHRcdFx0dmFyIG9sZGVtYWlsID0gdXNlci5lbWFpbHM7XG5cdFx0XHR2YXIgZW1haWxSZWcgPSAvXihbXFx3LVxcLl0rQChbXFx3LV0rXFwuKStbXFx3LV17Miw0fSk/JC87XG5cdFx0XHRpZiAoZW1haWxSZWcudGVzdChlbWFpbCkpIHtcblx0XHRcdGlmKG9sZGVtYWlsICE9IG51bGwpe1xuXHRcdFx0ICBBY2NvdW50cy5yZW1vdmVFbWFpbCh1c2VyLl9pZCwgdXNlci5lbWFpbHNbMF0uYWRkcmVzcylcblx0XHRcdH1cblx0XHRcdEFjY291bnRzLmFkZEVtYWlsKHVzZXIuX2lkLCBlbWFpbCk7XG5cdFx0XHRyZXR1cm4gZW1haWw7XG5cdFx0ICB9IGVsc2Vcblx0XHQgIHJldHVybiBudWxsXG5cdFx0IH0sXG5cdFx0J2RlbGV0ZVVzZXInOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdE1ldGVvci51c2Vycy5yZW1vdmUodXNlcklkLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHdoZW4gZGVsZXRpbmcgdXNlciA6IFwiK2Vycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdhZGRNYW5hZ2VyUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJZCwgJ21hbmFnZXInKTtcblx0XHR9LFxuXHRcdCdyZW1vdmVNYW5hZ2VyUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMucmVtb3ZlVXNlcnNGcm9tUm9sZXModXNlcklkLCAnbWFuYWdlcicpO1xuXHRcdH0sXG5cdFx0J2FkZEFkbWluUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJZCwgJ2FkbWluJyk7XG5cdFx0fSxcblx0XHQncmVtb3ZlQWRtaW5Sb2xlJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRSb2xlcy5yZW1vdmVVc2Vyc0Zyb21Sb2xlcyh1c2VySWQsICdhZG1pbicpO1xuXHRcdH0sXG5cblx0XHQvLyAnZ2V0VXNlZFNwYWNlJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0cmVzID0gY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIikgKyBcIi8gXCIgKyBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKSArIFwiIChcIitjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKStcInVzZWQpXCI7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzO1xuXHRcdC8vIH0sXG5cdFx0J3J1bkNvbW1hbmQnOiBmdW5jdGlvbihwYXNzd29yZCwgY29tbWFuZCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcImVjaG8gXCIrcGFzc3dvcmQrXCIgfCBzdWRvIC1TIFwiK2NvbW1hbmQpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRVc2VkU3BhY2UnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXMgPSB7fTtcblx0XHRcdC8vcmVzID0gY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIikgKyBcIi8gXCIgKyBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKSArIFwiIChcIitjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKStcInVzZWQpXCI7XG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIilcblx0XHRcdHJlcy5zdG9yYWdlVXNhZ2UgPSByZXMuc3RvcmFnZVVzYWdlLzEwMDAwMDA7XG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gcmVzLnN0b3JhZ2VVc2FnZS50b0ZpeGVkKDIpO1xuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpXG5cdFx0XHRyZXMuc3RvcmFnZVRvdGFsID0gcmVzLnN0b3JhZ2VUb3RhbC8xMDAwMDAwO1xuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IHJlcy5zdG9yYWdlVG90YWwudG9GaXhlZCgyKTtcblx0XHRcdHJlcy5wZXJjZW50YWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFNTSUQnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnc3NpZD0oLiopJykpO1xuICBcdFx0XHR2YXIgU1NJRCA9IG1hdGNoWzFdO1xuICBcdFx0XHRTU0lEID0gZGVjb2RlVVJJQ29tcG9uZW50KFNTSUQucmVwbGFjZSgvLi4vZywgJyUkJicpKVxuICBcdFx0XHRyZXR1cm4gU1NJRDtcblx0XHR9LFxuXHRcdCdzZXRTU0lEJzogZnVuY3Rpb24obmV3U1NJRCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdGNvbnN0IGVuY29kZWROZXdTU0lEID0gbmV3IEJ1ZmZlcihuZXdTU0lEKS50b1N0cmluZygnaGV4Jyk7IC8vIENvbnZlcnQgaW50byBIZXhcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdzc2lkPSguKiknKSlbMV0sIGVuY29kZWROZXdTU0lEKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0V2lmaVBhc3N3b3JkJzogZnVuY3Rpb24oKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3Bhc3N3b3JkPSguKiknKSk7XG4gIFx0XHRcdHZhciBwYXNzd29yZCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gcGFzc3dvcmQ7XG5cdFx0fSxcblx0XHQnc2V0V2lmaVBhc3N3b3JkJzogZnVuY3Rpb24obmV3UGFzc3dvcmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3Bhc3N3b3JkPSguKiknKSlbMV0sIG5ld1Bhc3N3b3JkKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0V2lmaUNoYW5uZWwnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJykpO1xuICBcdFx0XHR2YXIgY2hhbm5lbCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gY2hhbm5lbDtcblx0XHR9LFxuXHRcdCdzZXRXaWZpQ2hhbm5lbCc6IGZ1bmN0aW9uKG5ld0NoYW5uZWwpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpKVsxXSwgbmV3Q2hhbm5lbCk7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0Ly8gJ2dldFdpZmlCYW5kJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcblx0XHQvLyBcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnYmFuZD0oLiopJykpO1xuXG5cdFx0Ly8gXHRpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHQvLyBcdCAgcmV0dXJuIG1hdGNoWzFdO1xuXHRcdC8vIFx0fSBlbHNlIHtcblx0XHQvLyBcdCAgLy8gUmV0dXJuIGRlZmF1bHQgdmFsdWUgaWYgdGhlIGJhbmQgc2V0dGluZyBkb2VzIG5vdCBleGlzdFxuXHRcdC8vIFx0ICByZXR1cm4gJzIuNEdIeic7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gICB9LFxuXHRcdC8vICdzZXRXaWZpQmFuZCc6IGZ1bmN0aW9uKG5ld0JhbmQpIHtcblx0XHQvLyBcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuXHRcdC8vIFx0dmFyIGJhbmRSZWdleCA9IG5ldyBSZWdFeHAoJ2JhbmQ9KC4qKScpO1xuXHRcdC8vIFx0dmFyIGNoYW5uZWxSZWdleCA9IG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpO1xuXHRcdC8vIFx0dmFyIG1hdGNoQmFuZCA9IGRhdGEubWF0Y2goYmFuZFJlZ2V4KTtcblx0XHQvLyBcdHZhciBtYXRjaENoYW5uZWwgPSBkYXRhLm1hdGNoKGNoYW5uZWxSZWdleCk7XG5cblx0XHQvLyBcdHZhciBuZXdEYXRhID0gZGF0YTtcblxuXHRcdC8vIFx0aWYgKG1hdGNoQmFuZCkge1xuXHRcdC8vIFx0XHQvLyBSZXBsYWNlIHRoZSBleGlzdGluZyBiYW5kIHNldHRpbmdcblx0XHQvLyBcdFx0bmV3RGF0YSA9IG5ld0RhdGEucmVwbGFjZShiYW5kUmVnZXgsIGBiYW5kPSR7bmV3QmFuZH1gKTtcblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0XHRuZXdEYXRhID0gYCR7bmV3RGF0YS50cmltKCl9XFxuYmFuZD0ke25ld0JhbmR9YDtcblx0XHQvLyBcdH1cblxuXHRcdC8vIFx0aWYgKG1hdGNoQ2hhbm5lbCAmJiBtYXRjaENoYW5uZWxbMV0pIHtcblx0XHQvLyBcdFx0Ly8gQ29udmVydCB0aGUgY2hhbm5lbCB2YWx1ZSB0byBhIG51bWJlclxuXHRcdC8vIFx0XHR2YXIgY3VycmVudENoYW5uZWwgPSBwYXJzZUludChtYXRjaENoYW5uZWxbMV0sIDEwKTtcblxuXHRcdC8vIFx0XHQvLyBTZXQgY2hhbm5lbCB0byBhIGRlZmF1bHQgMi40R0h6IGNoYW5uZWwgaWYgY3VycmVudCBjaGFubmVsIGlzIGZvciA1R0h6XG5cdFx0Ly8gXHRcdGlmIChuZXdCYW5kID09IFwiMi40R0h6XCIgJiYgY3VycmVudENoYW5uZWwgPiAxNCkge1xuXHRcdC8vIFx0XHRcdG5ld0RhdGEgPSBuZXdEYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD0xMWApO1xuXHRcdC8vIFx0XHR9IGVsc2UgaWYgKG5ld0JhbmQgPT0gXCI1R0h6XCIgJiYgY3VycmVudENoYW5uZWwgPD0gMTQpIHtcblx0XHQvLyBcdFx0XHRuZXdEYXRhID0gbmV3RGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9NDRgKTtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fVxuXG5cdFx0Ly8gXHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdC8vIH0sXG5cdFx0Ly8gICAnc2V0V2lmaUJhbmQnOiBmdW5jdGlvbihuZXdCYW5kKSB7XG5cdFx0Ly8gXHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcblx0XHQvLyBcdHZhciBiYW5kUmVnZXggPSBuZXcgUmVnRXhwKCdiYW5kPSguKiknKTtcblx0XHQvLyBcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2goYmFuZFJlZ2V4KTtcblxuXHRcdC8vIFx0aWYgKG1hdGNoKSB7XG5cdFx0Ly8gXHQgIC8vIFJlcGxhY2UgdGhlIGV4aXN0aW5nIGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0ICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShiYW5kUmVnZXgsIGBiYW5kPSR7bmV3QmFuZH1gKTtcblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHQgIC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0ICB2YXIgbmV3RGF0YSA9IGAke2RhdGEudHJpbSgpfVxcbmJhbmQ9JHtuZXdCYW5kfWA7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHR2YXIgY2hhbm5lbFJlZ2V4ID0gbmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJyk7XG5cdFx0Ly8gXHR2YXIgbWF0Y2gyID0gZGF0YS5tYXRjaChjaGFubmVsUmVnZXgpO1xuXHRcdC8vIFx0aWYgKG1hdGNoMiAmJiBtYXRjaDJbMV0pIHtcblx0XHQvLyBcdFx0Ly8gU2V0IGNoYW5uZWwgdG8gYSBkZWZhdWx0IDIuNEdIeiBjaGFubmVsIGlmIGN1cnJlbnQgY2hhbm5lbCBpcyBmb3IgNUdIelxuXHRcdC8vIFx0XHRpZiAobmV3QmFuZCA9PSBcIjIuNEdIelwiICYmIG1hdGNoMlsxXSA+IDE0KSB7XG5cdFx0Ly8gXHRcdFx0Ly8gQXBwZW5kIHRoZSBuZXcgYmFuZCBzZXR0aW5nXG5cdFx0Ly8gXHRcdFx0dmFyIG5ld0RhdGEyID0gZGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9MTFgKTtcblx0XHQvLyBcdFx0fSBlbHNlIGlmIChuZXdCYW5kID09IFwiNUdIelwiICYmIG1hdGNoMlsxXSA8PSAxNCkge1xuXHRcdC8vIFx0XHRcdHZhciBuZXdEYXRhMiA9IGRhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTQ0YCk7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH1cblx0XHQvLyBcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0Ly8gICB9LFxuXHRcdCdnZXRTZXJpYWwnOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ1NFUklBTD0oLiopJykpO1xuICBcdFx0XHR2YXIgc2VyaWFsID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBzZXJpYWw7XG5cdFx0fSxcblx0XHQnZ2V0T3BlcmF0b3JOYW1lJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgb3BlcmF0b3JOYW1lO1xuXHRcdFx0b3BlcmF0b3JOYW1lID0gY21kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtb3BlcmF0b3ItbmFtZSB8IGdyZXAgLW0yICdOYW1lICAgICAgICAgICAgICcgfCBhd2sgJ3twcmludCAkM30nXCIpO1xuXHRcdFx0cmV0dXJuIG9wZXJhdG9yTmFtZTtcblx0XHR9LFxuXHRcdC8vICdnZXRTaWduYWxTdHJlbmd0aCc6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdHZhciBzaWduYWxTdHJlbmd0aDtcblx0XHQvLyBcdHNpZ25hbFN0cmVuZ3RoID0gY21kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayAne3ByaW50ICQzLCAkMn0nXCIpO1xuXHRcdC8vIFx0cmV0dXJuIHNpZ25hbFN0cmVuZ3RoO1xuXHRcdC8vIH0sXG5cdFx0J2dldFNpZ25hbFN0cmVuZ3RoJzogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHNpZ25hbFN0cmVuZ3RoO1xuXHRcdFx0Ly8gVGhpcyBleHRyYWN0cyBqdXN0IHRoZSBudW1lcmljIHBhcnQgb2YgdGhlIHNpZ25hbCBzdHJlbmd0aC5cblx0XHRcdHNpZ25hbFN0cmVuZ3RoID0gY21kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAnTmV0d29yaycgfCBhd2sgJ3twcmludCAkM30nIHwgZ3JlcCAtb0UgJ1stMC05XSsnXCIpO1xuXG5cdFx0XHQvLyBDb252ZXJ0IHNpZ25hbCBzdHJlbmd0aCB0byBhIHF1YWxpdGF0aXZlIHZhbHVlXG5cdFx0XHR2YXIgc3RyZW5ndGhWYWx1ZSA9IHBhcnNlSW50KHNpZ25hbFN0cmVuZ3RoKTtcblx0XHRcdHZhciBxdWFsaXR5ID0gJ1Vua25vd24nO1xuXHRcdFx0aWYgKHN0cmVuZ3RoVmFsdWUgPj0gLTcwKSB7XG5cdFx0XHRcdHF1YWxpdHkgPSAnRXhjZWxsZW50Jztcblx0XHRcdH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtODUpIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdHb29kJztcblx0XHRcdH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtMTAwKSB7XG5cdFx0XHRcdHF1YWxpdHkgPSAnRmFpcic7XG5cdFx0XHR9IGVsc2UgaWYgKHN0cmVuZ3RoVmFsdWUgPCAtMTAwKSB7XG5cdFx0XHRcdHF1YWxpdHkgPSAnUG9vcic7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcXVhbGl0eTtcblx0XHR9LFxuXHRcdC8vICdnZXRJc09ubGluZSc6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdHZhciBpc09ubGluZTtcblx0XHQvLyBcdGlzT25saW5lID0gY21kKFwic3VkbyBxbWljbGkgLXAgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayAne3ByaW50ICQzLCAkMn0nXCIpO1xuXHRcdC8vIFx0cmV0dXJuIGlzT25saW5lO1xuXHRcdC8vIH0sXG5cdFx0Ly8gJ2dldEJhbmQnOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHR2YXIgYmFuZDtcbi8vXHRcdFx0YmFuZCA9IGNtZChcInN1ZG8gcW1pY2xpIC1wIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgLW0xIE5ldHdvcmsgfCBhd2sgXFxcIntwcmludCAkMn1cXFwiIHwgY3V0IC1kXFxcXCcgLWYyXCIpO1xuXHRcdC8vIFx0cmV0dXJuIGJhbmQ7XG5cdFx0Ly8gfSxcblx0XHQnZ2V0QVBOJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49KC4qKScpKTtcbiAgXHRcdFx0dmFyIEFQTiA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gQVBOO1xuXHRcdH0sXG5cdFx0J2dldEFQTlVzZXInOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9VU0VSTkFNRT0oLiopJykpO1xuICBcdFx0XHR2YXIgQVBOVXNlciA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gQVBOVXNlcjtcblx0XHR9LFxuXHRcdCdnZXRBUE5QYXNzd29yZCc6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1BBU1NXT1JEPSguKiknKSk7XG4gIFx0XHRcdHZhciBBUE5QYXNzd29yZCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gQVBOUGFzc3dvcmQ7XG5cdFx0fSxcblx0XHQnZ2V0U2ltQ2FyZFN0YXR1cyc6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBzaW1TdGF0dXNSZXN1bHQgPSAnVW5rbm93bic7IC8vIERlZmF1bHQgc3RhdHVzXG5cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgY29tbWFuZCBhbmQgaGFuZGxlIGVycm9yc1xuXHRcdFx0ZnVuY3Rpb24gZXhlY3V0ZUNvbW1hbmQoY29tbWFuZCkge1xuXHRcdFx0XHRsZXQgcmVzdWx0O1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IGNtZChjb21tYW5kKTsgLy8gRXhlY3V0ZSB0aGUgY29tbWFuZFxuXHRcdFx0XHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJiByZXN1bHQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdC8vIENoZWNrIGlmIHJlc3VsdCBpcyBhbiBlcnJvciBvYmplY3Rcblx0XHRcdFx0XHRcdHJldHVybiAnRXJyb3InO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHQvLyBIYW5kbGUgZXhjZXB0aW9ucyBpZiBjb21tYW5kIGV4ZWN1dGlvbiBmYWlsc1xuXHRcdFx0XHRcdHJldHVybiAnRXJyb3InO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7IC8vIFJldHVybiB0aGUgcmVzdWx0IGlmIG5vIGVycm9yc1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFeGVjdXRlIFNJTSBjYXJkIHN0YXR1cyBjaGVjayBjb21tYW5kXG5cdFx0XHRsZXQgc2ltU3RhdHVzID0gZXhlY3V0ZUNvbW1hbmQoXCJzdWRvIHFtaWNsaSAtcCAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tdWltLWdldC1jYXJkLXN0YXR1cyB8IGdyZXAgJ0NhcmQgc3RhdGU6J1wiKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiU0lNIGNhcmQgc3RhdHVzOlwiLCBzaW1TdGF0dXMpOyAvLyBMb2cgdGhlIHJhdyBvdXRwdXRcblx0XHRcdC8vIFByb2Nlc3MgdGhlIG91dHB1dCBhbmQgZGV0ZXJtaW5lIFNJTSBjYXJkIHN0YXR1c1xuXHRcdFx0aWYgKHNpbVN0YXR1cy5pbmNsdWRlcygnbm8tYXRyLXJlY2VpdmVkJykgfHwgc2ltU3RhdHVzLmluY2x1ZGVzKCdub3QtaW5zZXJ0ZWQnKSkge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSAnTm8gU0lNIGNhcmQnO1xuXHRcdFx0fSBlbHNlIGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoJ2Vycm9yJykpIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gc2ltU3RhdHVzOyAvLyBVc2UgdGhlIGVycm9yIG1lc3NhZ2Ugb3Igbm8gU0lNIGRldGVjdGVkIG1lc3NhZ2Vcblx0XHRcdH0gZWxzZSBpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKCdwcmVzZW50JykpIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gJ09LJztcblx0XHRcdH0gZWxzZSBpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKCdsb2NrZWQnKSB8fCBzaW1TdGF0dXMuaW5jbHVkZXMoJ3Bpbi1yZXF1aXJlZCcpKSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9ICdTSU0gY2FyZCBsb2NrZWQsIFBJTiByZXF1aXJlZCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSAnVW5rbm93bic7IC8vIEZvciBvdGhlciBzdGF0dXNlc1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNpbVN0YXR1c1Jlc3VsdDtcblx0XHR9LFxuXHRcdCdnZXRTaW1QaW4nOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ1NJTV9QSU49KC4qKScpKTtcbiAgXHRcdFx0dmFyIFNpbVBpbiA9IG1hdGNoWzFdO1xuXHRcdFx0cmV0dXJuIFNpbVBpbjtcblx0XHR9LFxuXHRcdCdzZXRTaW1QaW4nOiBmdW5jdGlvbihQSU4pIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ1NJTV9QSU49LionKSksICdTSU1fUElOPScrUElOKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOJzogZnVuY3Rpb24oQVBOLCB1c2VyLCBwYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOPS4qJykpLCAnQVBOPScrQVBOKTtcbiAgXHRcdFx0Ly8gdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49KC4qKScpKVsxXSwgQVBOKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOVXNlcic6IGZ1bmN0aW9uKEFQTlVzZXIpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9VU0VSTkFNRT0uKicpKSwgJ0FQTl9VU0VSTkFNRT0nK0FQTlVzZXIpO1xuICBcdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J3NldEFQTlBhc3N3b3JkJzogZnVuY3Rpb24oQVBOUGFzc3dvcmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9QQVNTV09SRD0uKicpKSwgJ0FQTl9QQVNTV09SRD0nK0FQTlBhc3N3b3JkKTtcbiAgXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRSZW1vdGVTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzeXN0ZW1jdGwgaXMtYWN0aXZlIHJlbW90ZS1pb3Quc2VydmljZSA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyAxIHx8IGVjaG8gMFwiKTtcblx0XHRcdGlmIChyZXNbMF0gPT0gXCIxXCIpIHsgLy8gWzBdIGlzIGEgaGFjayBiZWNhdXNlIHRoZSByZXN1bHQgcmVzIGhhcyBvbmUgZXh0cmEgY2hhcmFjdGVyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQnZ2V0QXV0b1N5bmNTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzeXN0ZW1jdGwgaXMtYWN0aXZlIGF1dG9zeW5jLnNlcnZpY2UgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gMSB8fCBlY2hvIDBcIik7XG5cdFx0XHRpZiAocmVzWzBdID09IFwiMVwiKSB7IC8vIFswXSBpcyBhIGhhY2sgYmVjYXVzZSB0aGUgcmVzdWx0IHJlcyBoYXMgb25lIGV4dHJhIGNoYXJhY3RlclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0J2dldFNoYXJlSW50ZXJuZXRWaWFFdGhlcm5ldFN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlzU2hhcmluZztcblx0XHRcdGlzU2hhcmluZyA9IGNtZChcIihzdWRvIGlwdGFibGVzIC10IG5hdCAtTCBQT1NUUk9VVElORyAtdiAtbiB8IGdyZXAgLXEgJ01BU1FVRVJBREUgIGFsbCAgLS0gICogICAgICBldGgwJyAmJiBpcCBsaW5rIHNob3cgZXRoMCB8IGdyZXAgLXEgJ3N0YXRlIFVQJykgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIik7XG5cdFx0XHRyZXR1cm4gaXNTaGFyaW5nO1xuXHRcdH0sXG5cdFx0J2dldFNoYXJlSW50ZXJuZXRWaWFNb2JpbGVTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpc1NoYXJpbmc7XG5cdFx0XHRpc1NoYXJpbmcgPSBjbWQoXCIoc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUwgUE9TVFJPVVRJTkcgLXYgLW4gfCBncmVwIC1xICdNQVNRVUVSQURFICBhbGwgIC0tICAqICAgICAgd3dhbjAnICYmIGlwIGxpbmsgc2hvdyB3d2FuMCB8IGdyZXAgLXEgJ3N0YXRlIFVQJykgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIik7XG5cdFx0XHRyZXR1cm4gaXNTaGFyaW5nO1xuXHRcdH0sXG5cdFx0Ly8gJ2FjdGl2YXRlSW50ZXJuZXRTaGFyaW5nJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0cmVzID0gY21kKFwic3VkbyB3aWZpLWFwLmNvbmZpZyBzZXQgc2hhcmUuZGlzYWJsZWQ9ZmFsc2VcIik7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzO1xuXHRcdC8vIH0sXG5cdFx0Ly8gJ2Rpc2FjdGl2YXRlSW50ZXJuZXRTaGFyaW5nJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0cmVzID0gY21kKFwic3VkbyB3aWZpLWFwLmNvbmZpZyBzZXQgc2hhcmUuZGlzYWJsZWQ9dHJ1ZVwiKTtcblx0XHQvLyBcdHJldHVybiByZXM7XG5cdFx0Ly8gfSxcblx0XHQnYWN0aXZhdGVSZW1vdGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdGFydCByZW1vdGUtaW90LnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZW5hYmxlIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZGlzYWN0aXZhdGVSZW1vdGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdG9wIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBkaXNhYmxlIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnYWN0aXZhdGVBdXRvU3luYyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0YXJ0IGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZW5hYmxlIGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2Rpc2FjdGl2YXRlQXV0b1N5bmMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdG9wIGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZGlzYWJsZSBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRCYXR0ZXJ5U3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0dmFyIHNjcmlwdHNQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnNjcmlwdHNQYXRoO1xuXHRcdFx0cmVzID0gY21kKFwicHl0aG9uMyBcIitzY3JpcHRzUGF0aCtcIi9waWp1aWNlX3N0YXR1cy5weVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQvLyAnZ2V0SXNPbmxpbmUnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciByZXM7XG5cdFx0Ly8gXHR2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGg7XG5cdFx0Ly8gXHQvLyBNYWtlIHN1cmUgeW91ciBzY3JpcHQgaXMgZXhlY3V0YWJsZSwgZS5nLiwgY2htb2QgK3ggY2hlY2tfaW50ZXJuZXQuc2hcblx0XHQvLyBcdHJlcyA9IGNtZChcImJhc2ggXCIgKyBzY3JpcHRzUGF0aCArIFwiL2NoZWNrX2ludGVybmV0LnNoXCIpOyAvLyBSZXBsYWNlICdiYXNoJyB3aXRoICdzaCcgaWYgbmVlZGVkXG5cdFx0Ly8gXHQvLyBUaGUgc2NyaXB0IHJldHVybnMgXCJ0cnVlXCIgb3IgXCJmYWxzZVwiIGFzIGEgc3RyaW5nLCBzbyB3ZSBjb21wYXJlIHRoZSByZXN1bHQgZGlyZWN0bHlcblx0XHQvLyBcdHJldHVybiByZXMudHJpbSgpID09PSBcInRydWVcIjsgLy8gVGhpcyBjb252ZXJ0cyB0aGUgc3RyaW5nIHRvIGEgYm9vbGVhblxuXHRcdC8vIH0sXG5cdFx0J2dldElzT25saW5lJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgcmVzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzID0gY21kKFwicGluZyAtYyAxIDguOC44LjhcIik7XG5cdFx0XHRcdC8vIENoZWNrIGlmIHRoZSBwaW5nIGNvbW1hbmQgd2FzIHN1Y2Nlc3NmdWwgYmFzZWQgb24gdGhlIG91dHB1dFxuXHRcdFx0XHRsZXQgaXNPbmxpbmUgPSByZXMuaW5jbHVkZXMoXCIxIHBhY2tldHMgcmVjZWl2ZWRcIikgfHwgcmVzLmluY2x1ZGVzKFwiMSByZWNlaXZlZFwiKTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJPbmxpbmUgc3RhdHVzOlwiLCBpc09ubGluZSk7IC8vIENvcnJlY3RseSBsb2dnaW5nIHRoZSBib29sZWFuIHJlc3VsdFxuXHRcdFx0XHRyZXR1cm4gaXNPbmxpbmU7IC8vIERpcmVjdGx5IHJldHVybiB0aGUgYm9vbGVhbiB2YWx1ZVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Ly8gSWYgYW4gZXJyb3Igb2NjdXJzICh3aGljaCBjb3VsZCBpbmNsdWRlIGJlaW5nIHVuYWJsZSB0byBydW4gdGhlIHBpbmcgY29tbWFuZCksIGFzc3VtZSBvZmZsaW5lXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igb3Igb2ZmbGluZTpcIiwgZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIEFzc3VtZSBvZmZsaW5lIGlmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdnZXRFdGgwSVAnOiBmdW5jdGlvbigpIHsgLy8gR2V0IElQIG9mIGJveFxuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vY29uc29sZS5sb2coXCJyZXN1bHQgOiBcIitcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImlwIDogXCIrXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBcIitpbnRlcmZhY2UrXCIgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRXd2FuMElQJzogZnVuY3Rpb24oKSB7IC8vIEdldCBJUCBvZiBib3hcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwicmVzdWx0IDogXCIrXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJlcyA9IGNtZChcImlwIGFkZHIgc2hvdyB3d2FuMCB8IGdyZXAgXFxcImluZXRcXFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cblx0XHRcdC8vY29uc29sZS5sb2coXCJpcCA6IFwiK1wiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgXCIraW50ZXJmYWNlK1wiIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblxuXHRcdCdnZXRCZWVrZWVPc1ZlcnNpb24nOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdCRUVLRUVfT1NfVkVSU0lPTj0oLiopJykpO1xuXHRcdFx0dmFyIHNlcmlhbCA9IG1hdGNoWzFdO1xuXHRcdFx0cmV0dXJuIHNlcmlhbDtcblx0XHR9LFxuXHRcdCdnZXRCZWVrZWVIb21lVmVyc2lvbic6IGZ1bmN0aW9uKCkge1xuXHRcdFx0anNvbiA9IEpTT04ucGFyc2UoQXNzZXRzLmdldFRleHQoXCJ2ZXJzaW9uLmpzb25cIikpO1xuXHRcdFx0cmV0dXJuIGpzb24udmVyc2lvbjtcblx0XHR9LFxuXHRcdCdyZXN0YXJ0TW9iaWxlQ29ubmVjdCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHJlc3RhcnQgbW9iaWxlX2Nvbm5lY3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7Jydcblx0XHR9LFxuXHRcdCdnZXRNb2JpbGVDb25uZWN0RW5hYmxlZCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IHJlcztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGlzLWFjdGl2ZSBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiKTtcblx0XHRcdFx0cmV0dXJuIHJlcy50b1N0cmluZygpLnRyaW0oKSA9PT0gXCJ0cnVlXCI7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZW5hYmxlTW9iaWxlQ29ubmVjdCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y21kKFwic3VkbyBzeXN0ZW1jdGwgc3RhcnQgbW9iaWxlX2Nvbm5lY3Quc2VydmljZVwiKTtcblx0XHRcdGNtZChcInN1ZG8gc3lzdGVtY3RsIGVuYWJsZSBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHQnZGlzYWJsZU1vYmlsZUNvbm5lY3QnOiBmdW5jdGlvbigpIHtcblx0XHRcdGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgbW9iaWxlX2Nvbm5lY3Quc2VydmljZVwiKTtcblx0XHRcdGNtZChcInN1ZG8gc3lzdGVtY3RsIGRpc2FibGUgbW9iaWxlX2Nvbm5lY3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0J2dldEludGVybmV0SW50ZXJmYWNlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgcmVzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzID0gY21kKFwiaXAgcm91dGUgZ2V0IDEuMi4zLjQgfCBhd2sgJ3twcmludCAkNTsgZXhpdH0nXCIpOyAvLyBFeGVjdXRlIHRoZSBjb21tYW5kXG5cdFx0XHRcdGlmIChyZXMudHJpbSgpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcy50cmltKCk7IC8vIFJldHVybiB0aGUgY2xlYW5lZC11cCByZXN1bHQgaWYgbm90IGVtcHR5XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuICdVbmtub3duJzsgLy8gUmV0dXJuIGEgZGVmYXVsdCBtZXNzYWdlIGlmIHRoZSByZXN1bHQgaXMgZW1wdHlcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Ly8gSGFuZGxlIGNhc2VzIHdoZXJlIHRoZSBjb21tYW5kIGZhaWxzIG9yIGlzIG5vdCBmb3VuZFxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHJldHJpZXZpbmcgaW50ZXJuZXQgaW50ZXJmYWNlOlwiLCBlcnJvcik7XG5cdFx0XHRcdHJldHVybiAnRXJyb3InOyAvLyBSZXR1cm4gYW4gZXJyb3IgbWVzc2FnZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2dldFdMQU5VU0InOiBmdW5jdGlvbigpIHtcblx0XHRcdGxldCByZXM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXMgPSBjbWQoJ2lwIGxpbmsgc2hvdyB3bGFudXNiJyk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2dldFdpZmlDbGllbnRNb2RlRW5hYmxlZCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGdldFdpZmlDbGllbnRNb2RlU3RhdGUoKTtcblx0XHR9LFxuXHRcdCdlbmFibGVXaWZpQ2xpZW50TW9kZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cnVuV2lmaU1vZGVTY3JpcHQod2lmaUNsaWVudEVuYWJsZVNjcmlwdE5hbWUpO1xuXHRcdFx0XHRyZXR1cm4gZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGVuYWJsaW5nIFdpLUZpIGNsaWVudCBtb2RlOicsIGVycm9yKTtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcblx0XHRcdFx0XHQnd2lmaS1jbGllbnQtbW9kZS1lbmFibGUtZmFpbGVkJyxcblx0XHRcdFx0XHRlcnJvci5yZWFzb24gfHwgZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGVuYWJsZSBXaS1GaSBjbGllbnQgbW9kZS4nXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZGlzYWJsZVdpZmlDbGllbnRNb2RlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRydW5XaWZpTW9kZVNjcmlwdCh3aWZpQ2xpZW50RGlzYWJsZVNjcmlwdE5hbWUpO1xuXHRcdFx0XHRyZXR1cm4gZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGRpc2FibGluZyBXaS1GaSBjbGllbnQgbW9kZTonLCBlcnJvcik7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG5cdFx0XHRcdFx0J3dpZmktY2xpZW50LW1vZGUtZGlzYWJsZS1mYWlsZWQnLFxuXHRcdFx0XHRcdGVycm9yLnJlYXNvbiB8fCBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZGlzYWJsZSBXaS1GaSBjbGllbnQgbW9kZS4nXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZ2V0V2lmaU5ldHdvcmtzJzogYXN5bmMgZnVuY3Rpb24oKSB7XG5cdFx0XHRlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblxuXHRcdFx0dmFyIHdpZmkgPSByZXF1aXJlKCdub2RlLXdpZmknKTtcblx0XHRcdHdpZmkuaW5pdCh7XG5cdFx0XHRcdGlmYWNlOiAnd2xhbnVzYicsXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTdGFydGluZyB3aWZpIHNjYW4nKTtcblx0XHRcdFx0d2lmaS5zY2FuKChlcnJvciwgbmV0d29ya3MpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNjYW5uaW5nIG5ldHdvcmtzOicsIGVycm9yKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoW10pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnV2lmaSBzY2FuIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHknKTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgdW5pcXVlTmV0d29ya3MgPSBuZXcgTWFwKCk7XG5cblx0XHRcdFx0XHRcdG5ldHdvcmtzLmZvckVhY2goKG5ldHdvcmspID0+IHtcblx0XHRcdFx0XHRcdFx0bGV0IHN0cmVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRpZiAobmV0d29yay5xdWFsaXR5ID4gODApIHtcblx0XHRcdFx0XHRcdFx0XHRzdHJlbmd0aCA9ICd3aWZpLTQnO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG5ldHdvcmsucXVhbGl0eSA+IDU1KSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RyZW5ndGggPSAnd2lmaS0zJztcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChuZXR3b3JrLnF1YWxpdHkgPiAzMCkge1xuXHRcdFx0XHRcdFx0XHRcdHN0cmVuZ3RoID0gJ3dpZmktMic7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RyZW5ndGggPSAnd2lmaS0xJztcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9IGAke25ldHdvcmsuc3NpZH06JHtuZXR3b3JrLm1hYy5zdWJzdHJpbmcoMCwgMTUpfWA7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCF1bmlxdWVOZXR3b3Jrcy5oYXMoa2V5KSB8fCBuZXR3b3JrLnF1YWxpdHkgPiB1bmlxdWVOZXR3b3Jrcy5nZXQoa2V5KS5xdWFsaXR5KSB7XG5cdFx0XHRcdFx0XHRcdFx0dW5pcXVlTmV0d29ya3Muc2V0KGtleSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogbmV0d29yay5zc2lkLFxuXHRcdFx0XHRcdFx0XHRcdFx0c3RyZW5ndGg6IHN0cmVuZ3RoLFxuXHRcdFx0XHRcdFx0XHRcdFx0c2VjdXJpdHk6IG5ldHdvcmsuc2VjdXJpdHksXG5cdFx0XHRcdFx0XHRcdFx0XHRxdWFsaXR5OiBuZXR3b3JrLnF1YWxpdHksXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRjb25zdCB1bmlxdWVOZXR3b3Jrc0FycmF5ID0gQXJyYXkuZnJvbSh1bmlxdWVOZXR3b3Jrcy52YWx1ZXMoKSk7XG5cdFx0XHRcdFx0XHR1bmlxdWVOZXR3b3Jrc0FycmF5LmZvckVhY2goKG5ldHdvcmspID0+IGRlbGV0ZSBuZXR3b3JrLnF1YWxpdHkpO1xuXG5cdFx0XHRcdFx0XHRyZXNvbHZlKHVuaXF1ZU5ldHdvcmtzQXJyYXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdjb25uZWN0VG9XaWZpJzogZnVuY3Rpb24oc3NpZCwgcGFzc3dvcmQpIHtcblx0XHRcdGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXG5cdFx0XHR2YXIgd2lmaSA9IHJlcXVpcmUoJ25vZGUtd2lmaScpO1xuXHRcdFx0d2lmaS5pbml0KHtcblx0XHRcdFx0aWZhY2U6ICd3bGFudXNiJyxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0Y29uc3QgY29ubmVjdGlvbkNvbmZpZyA9IHsgc3NpZDogc3NpZCB9O1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgcGFzc3dvcmQgPT09ICdzdHJpbmcnICYmIHBhc3N3b3JkICE9PSAnJykge1xuXHRcdFx0XHRcdGNvbm5lY3Rpb25Db25maWcucGFzc3dvcmQgPSBwYXNzd29yZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdpZmkuY29ubmVjdChjb25uZWN0aW9uQ29uZmlnLCAoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvbm5lY3RpbmcgdG8gd2lmaTonLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKGZhbHNlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byB3aWZpOicsIHNzaWQpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZGlzY29ubmVjdFdpZmknOiBmdW5jdGlvbigpIHtcblx0XHRcdGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXG5cdFx0XHR2YXIgd2lmaSA9IHJlcXVpcmUoJ25vZGUtd2lmaScpO1xuXHRcdFx0d2lmaS5pbml0KHtcblx0XHRcdFx0aWZhY2U6ICd3bGFudXNiJyxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0d2lmaS5kaXNjb25uZWN0KChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgZGlzY29ubmVjdGluZyBmcm9tIHdpZmk6JywgZXJyb3IpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShmYWxzZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdEaXNjb25uZWN0ZWQgZnJvbSB3aWZpJyk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdmb3JnZXRXaWZpJzogZnVuY3Rpb24oc3NpZCkge1xuXHRcdFx0ZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkKCk7XG5cblx0XHRcdHZhciB3aWZpID0gcmVxdWlyZSgnbm9kZS13aWZpJyk7XG5cdFx0XHR3aWZpLmluaXQoe1xuXHRcdFx0XHRpZmFjZTogJ3dsYW51c2InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHR3aWZpLmRlbGV0ZUNvbm5lY3Rpb24oeyBzc2lkOiBzc2lkIH0sIChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgY29ubmVjdGluZyB0byB3aWZpOicsIGVycm9yKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoZmFsc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIHdpZmk6Jywgc3NpZCk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdnZXRDbGllbnRTU0lEJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gZ2V0Q2xpZW50U1NJREZyb21TeXN0ZW0oKTtcblx0XHR9LFxuXHRcdCdnZXRDYXB0aXZlUG9ydGFsU3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblx0XHRcdHJldHVybiBnZXRDYXB0aXZlUG9ydGFsU3RhdHVzRnJvbVN5c3RlbSgpO1xuXHRcdH0sXG5cdFx0Ly8gJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdC8vIENvbW1hbmQgdG8gbGlzdCBGT1JXQVJEIHJ1bGVzXG5cdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG5cdFx0Ly8gXHRjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yIHx8IHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvciB8fCBzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciB8fCBuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cblx0XHQvLyBcdFx0Ly8gQ2hlY2sgZm9yIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBydWxlc1xuXHRcdC8vIFx0XHR2YXIgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgPSBzdGRvdXQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIGV0aDAnKSAmJiBzdGRvdXQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coXCJpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZDogXCIraXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQpO1xuXHRcdC8vIFx0XHQvLyBFeHRyYWN0IE1BQyBhZGRyZXNzIHJ1bGVzXG5cdFx0Ly8gXHRcdHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIGV0aDAvO1xuXHRcdC8vIFx0XHR2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cblx0XHQvLyBcdFx0Ly8gRGV0ZXJtaW5lIHRoZSBzdGF0dXMgYmFzZWQgb24gdGhlIHJ1bGVzIGZvdW5kXG5cdFx0Ly8gXHRcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAxXCIpO1xuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSB7Y29uc29sZS5sb2coXCJzdGVwMTJcIik7IGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9KTt9XG5cdFx0Ly8gXHRcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAyXCIpO1xuXG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH0pO1xuXHRcdC8vIFx0XHR9IGVsc2Uge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDNcIik7XG5cblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGRpc2FibGVkIG9yIG5vdCBjb25maWd1cmVkIGFzIGV4cGVjdGVkXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9KTtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fSk7XG5cdFx0Ly8gfSxcblxuXG5cblxuXHRcdFx0Ly8gICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coJ1N0YXJ0aW5nIHRvIGdldCBpbnRlcm5ldCBzaGFyaW5nIHN0YXR1cyBmb3IgRXRoZXJuZXQuLi4nKTtcblx0XHRcdC8vIFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtbiAtLWxpbmUtbnVtYmVyJztcblxuXHRcdFx0Ly8gXHQvLyBTaW5jZSBjbWQgaXMgYWxyZWFkeSB3cmFwcGVkIGJ5IE1ldGVvci53cmFwQXN5bmMoZXhlYyksXG5cdFx0XHQvLyBcdC8vIGl0IHNob3VsZCByZXR1cm4geyBzdGRvdXQsIHN0ZGVyciB9IGRpcmVjdGx5LlxuXHRcdFx0Ly8gXHR0cnkge1xuXHRcdFx0Ly8gXHQgIHZhciB7IHN0ZG91dCwgc3RkZXJyIH0gPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHQvLyBcdCAgaWYgKHN0ZGVycikge1xuXHRcdFx0Ly8gXHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtzdGRlcnJ9YCk7XG5cdFx0XHQvLyBcdFx0Ly8gSXQncyBiZXR0ZXIgdG8gcmV0dXJuIGEgbWVhbmluZ2Z1bCBlcnJvciB0byB0aGUgY2xpZW50LlxuXHRcdFx0Ly8gXHRcdHJldHVybiB7IGVycm9yOiBcIkVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlc1wiLCBkZXRhaWxzOiBzdGRlcnIgfTtcblx0XHRcdC8vIFx0ICB9XG5cblx0XHRcdC8vIFx0ICBjb25zb2xlLmxvZygnQW5hbHl6aW5nIGlwdGFibGVzIEZPUldBUkQgcnVsZXMgb3V0cHV0Li4uJyk7XG5cdFx0XHQvLyBcdCAgLy8gQ2hlY2sgZm9yIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBydWxlc1xuXHRcdFx0Ly8gXHQgIHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IHN0ZG91dC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuXHRcdFx0Ly8gXHQgIGNvbnNvbGUubG9nKGBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZDogJHtpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZH1gKTtcblxuXHRcdFx0Ly8gXHQgIC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcblx0XHRcdC8vIFx0ICB2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSBldGgwLztcblx0XHRcdC8vIFx0ICB2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cdFx0XHQvLyBcdCAgY29uc29sZS5sb2coYE1BQyBhZGRyZXNzIGZvdW5kOiAke21hdGNoID8gbWF0Y2hbMV0gOiAnTm9uZSd9YCk7XG5cblx0XHRcdC8vIFx0ICAvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcblx0XHRcdC8vIFx0ICBpZiAoaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgJiYgIW1hdGNoKSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsLicpO1xuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdC8vIFx0ICB9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coYEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYSBzcGVjaWZpYyBNQUMgYWRkcmVzczogJHttYXRjaFsxXX1gKTtcblx0XHRcdC8vIFx0XHRyZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9O1xuXHRcdFx0Ly8gXHQgIH0gZWxzZSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWQuJyk7XG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHQvLyBcdCAgfVxuXHRcdFx0Ly8gXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Ly8gXHQgIGNvbnNvbGUuZXJyb3IoYENvbW1hbmQgZXhlY3V0aW9uIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0Ly8gXHQgIC8vIEl0J3MgYmV0dGVyIHRvIHJldHVybiBhIG1lYW5pbmdmdWwgZXJyb3IgdG8gdGhlIGNsaWVudC5cblx0XHRcdC8vIFx0ICByZXR1cm4geyBlcnJvcjogXCJDb21tYW5kIGV4ZWN1dGlvbiBlcnJvclwiLCBkZXRhaWxzOiBlcnJvci50b1N0cmluZygpIH07XG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vICAgfSxcblxuXG5cblx0XHRcdFx0Ly8gICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcblx0XHRcdFx0Ly8gXHR2YXIgY29tbWFuZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdFx0Ly8gXHRpZiAoIWNvbW1hbmRSZXN1bHQpIHtcblx0XHRcdFx0Ly8gXHQgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0XHQvLyBcdH1cblxuXHRcdFx0XHQvLyBcdHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIGV0aDAnKSAmJiBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG5cdFx0XHRcdC8vIFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2UgZXRoMC87XG5cdFx0XHRcdC8vIFx0dmFyIG1hdGNoID0gY29tbWFuZFJlc3VsdC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuXHRcdFx0XHQvLyBcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHRcdFx0Ly8gXHQgIHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdFx0Ly8gXHR9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0XHRcdC8vIFx0ICByZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9O1xuXHRcdFx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFx0ICByZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdC8vICAgfSxcblxuXG5cblxuXHRcdFx0XHRcdCAgJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0JzogZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXHRcdFx0dmFyIGxpc3ROYXRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtdCBuYXQgLVMgUE9TVFJPVVRJTkcnO1xuXG5cdFx0XHR2YXIgZm9yd2FyZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cdFx0XHR2YXIgbmF0UmVzdWx0ID0gY21kKGxpc3ROYXRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHRpZiAoIWZvcndhcmRSZXN1bHQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIEZPUldBUkQgY2hhaW4gY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFuYXRSZXN1bHQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIFBPU1RST1VUSU5HIGNoYWluIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzaGFyaW5nRnJvbVdsYW5pbnRUb0V0aCA9IGZvcndhcmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd2xhbmludCAtbyBldGgwIC1qIEFDQ0VQVCcpO1xuXHRcdFx0dmFyIHNoYXJpbmdGcm9tV2xhbnVzYlRvRXRoID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFudXNiIC1vIGV0aDAgLWogQUNDRVBUJyk7XG5cdFx0XHR2YXIgc2hhcmluZ1RvV2xhbmludEZyb21FdGhFc3RhYmxpc2hlZCA9IGZvcndhcmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgZXRoMCAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnKTtcblx0XHRcdHZhciBzaGFyaW5nVG9XbGFudXNiRnJvbUV0aEVzdGFibGlzaGVkID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW51c2IgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcpO1xuXG5cdFx0XHR2YXIgbmF0Rm9yV2xhbmludCA9IG5hdFJlc3VsdC5pbmNsdWRlcygnLUEgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gZXRoMCAtaiBNQVNRVUVSQURFJyk7XG5cdFx0XHR2YXIgbmF0Rm9yV2xhbnVzYiA9IG5hdFJlc3VsdC5pbmNsdWRlcygnLUEgUE9TVFJPVVRJTkcgLXMgMTAuMS4wLjAvMjQgLW8gZXRoMCAtaiBNQVNRVUVSQURFJyk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0c2hhcmluZ0Zyb21XbGFuaW50VG9FdGggJiZcblx0XHRcdFx0c2hhcmluZ0Zyb21XbGFudXNiVG9FdGggJiZcblx0XHRcdFx0c2hhcmluZ1RvV2xhbmludEZyb21FdGhFc3RhYmxpc2hlZCAmJlxuXHRcdFx0XHRzaGFyaW5nVG9XbGFudXNiRnJvbUV0aEVzdGFibGlzaGVkICYmXG5cdFx0XHRcdG5hdEZvcldsYW5pbnQgJiZcblx0XHRcdFx0bmF0Rm9yV2xhbnVzYlxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQnZW5hYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXG5cdFx0XHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IG51bGw7XG5cblx0XHRcdGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgd2xhbmludCAtbyBldGgwIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd2xhbmludCAtbyBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgd2xhbnVzYiAtbyBldGgwIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd2xhbnVzYiAtbyBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgZXRoMCAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIGV0aDAgLW8gd2xhbmludCAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLUMgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW51c2IgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgZXRoMCAtbyB3bGFudXNiIC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUMgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gZXRoMCAtaiBNQVNRVUVSQURFIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1BIFBPU1RST1VUSU5HIC1zIDEwLjAuMC4wLzI0IC1vIGV0aDAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC10IG5hdCAtQyBQT1NUUk9VVElORyAtcyAxMC4xLjAuMC8yNCAtbyBldGgwIC1qIE1BU1FVRVJBREUgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUEgUE9TVFJPVVRJTkcgLXMgMTAuMS4wLjAvMjQgLW8gZXRoMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcblx0XHRcdF0uam9pbignICYmICcpO1xuXG5cdFx0XHRjbWQoaXB0YWJsZXNDb21tYW5kcywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3RkZXJyKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgdmlhIEV0aGVybmV0IGVuYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0Ly8gRGVmaW5lIGEgbGlzdCBvZiBjb21tYW5kcyB0byByZXBlYXRlZGx5IGF0dGVtcHQgZGVsZXRpb24uXG5cdFx0XHR2YXIgaXB0YWJsZXNEZWxldGVDb21tYW5kcyA9IG51bGw7XG5cblx0XHRcdGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBbXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbmludCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW51c2IgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW51c2IgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tc291cmNlIDEwLjAuMC4wLzI0IC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLXNvdXJjZSAxMC4xLjAuMC8yNCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBNQVNRVUVSQURFJ1xuXHRcdFx0XTtcblxuXHRcdFx0Ly8gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhIGNvbW1hbmQgYW5kIHJlY3Vyc2l2ZWx5IGNhbGwgaXRzZWxmIGlmIHRoZSBjb21tYW5kIHdhcyBzdWNjZXNzZnVsIChydWxlIHdhcyBmb3VuZCBhbmQgZGVsZXRlZCkuXG5cdFx0XHRmdW5jdGlvbiBleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjaykge1xuXHRcdFx0XHRjbWQoY29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3Mgbm8gZXJyb3IsIHRoZSBydWxlIHdhcyBmb3VuZCBhbmQgZGVsZXRlZCwgc28gdHJ5IGFnYWluLlxuXHRcdFx0XHRcdGlmICghZXJyb3IpIHtcblx0XHRcdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvciwgaXQgbGlrZWx5IG1lYW5zIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlIGV4aXN0LCBzbyBjYWxsIHRoZSBkb25lQ2FsbGJhY2suXG5cdFx0XHRcdFx0XHRkb25lQ2FsbGJhY2soKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFeGVjdXRlIGRlbGV0aW9uIGZvciBlYWNoIGNvbW1hbmQgYW5kIHRyYWNrIGNvbXBsZXRpb24uXG5cdFx0XHR2YXIgdGFza3NDb21wbGV0ZWQgPSAwO1xuXHRcdFx0aXB0YWJsZXNEZWxldGVDb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG5cdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgKCkgPT4ge1xuXHRcdFx0XHRcdHRhc2tzQ29tcGxldGVkKys7XG5cdFx0XHRcdFx0Ly8gT25jZSBhbGwgZGVsZXRpb24gdGFza3MgYXJlIGRvbmUsIHNhdmUgdGhlIGlwdGFibGVzIGNvbmZpZ3VyYXRpb24uXG5cdFx0XHRcdFx0aWYgKHRhc2tzQ29tcGxldGVkID09PSBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYGlwdGFibGVzIHJ1bGVzIHNhdmVkLmApO1xuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsICdBbGwgc3BlY2lmaWVkIHJ1bGVzIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvLyAnZGlzYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gW1xuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdC8vIFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdC8vIFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHQvLyBcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0Ly8gXHRcdGlmIChlcnJvcikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGlmIChzdGRlcnIpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXQgZGlzYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdC8vIFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXHRcdCdlbmFibGVJbnRlcm5ldEZvck1hY0V0aGVybmV0JzogZnVuY3Rpb24obWFjQWRkcmVzcywgY2FsbGJhY2spIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvLyBDb21tYW5kIHRvIGFsbG93IGludGVybmV0IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzIG9uIGV0aDAuXG5cdFx0XHR2YXIgYWxsb3dNYWNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1tIG1hYyAtLW1hYy1zb3VyY2UgJHttYWNBZGRyZXNzfSAtaiBBQ0NFUFRgO1xuXHRcdFx0Ly8gQ29tbWFuZCB0byBkcm9wIGFsbCBvdGhlciBpbnRlcm5ldCB0cmFmZmljIG9uIGV0aDAuXG5cdFx0XHR2YXIgYmxvY2tPdGhlcnNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1qIERST1BgO1xuXG5cdFx0XHQvLyBBbGxvdyBpbnRlcm5ldCBmb3IgdGhlIHNwZWNpZmllZCBNQUMgYWRkcmVzcy5cblx0XHRcdHJlcyA9IGNtZChhbGxvd01hY0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYWxsb3dpbmcgTUFDICR7bWFjQWRkcmVzc306ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGFsbG93ZWQgZm9yIE1BQyAke21hY0FkZHJlc3N9LmApO1xuXG5cdFx0XHRcdC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldC5cblx0XHRcdFx0cmVzID0gY21kKGJsb2NrT3RoZXJzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBibG9ja2VkIGZvciBvdGhlciBNQUMgYWRkcmVzc2VzLmApO1xuXHRcdFx0XHRcdC8vIE9wdGlvbmFsbHksIHNhdmUgdGhlIGlwdGFibGVzIHNldHRpbmdzIHRvIG1ha2UgdGhlbSBwZXJzaXN0ZW50LlxuXHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayhudWxsKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdyZW1vdmVBbGxNYWNGaWx0ZXJzRm9yRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0Ly8gTGlzdCBhbGwgRk9SV0FSRCBydWxlcyB3aXRoIGxpbmUgbnVtYmVyc1xuXHRcdFx0Y21kKCdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLS1saW5lLW51bWJlcnMgLW4nLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9jZXNzIHN0ZG91dCB0byBpZGVudGlmeSBydWxlcyByZWxhdGVkIHRvIE1BQyBmaWx0ZXJpbmcgb24gZXRoMFxuXHRcdFx0XHRjb25zdCBsaW5lcyA9IHN0ZG91dC5zcGxpdCgnXFxuJyk7XG5cdFx0XHRcdGNvbnN0IHJ1bGVOdW1iZXJzID0gbGluZXMucmVkdWNlKChhY2MsIGxpbmUsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGxpbmUuaW5jbHVkZXMoJ2V0aDAnKSAmJiBsaW5lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ21hYycpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBydWxlTnVtYmVyID0gbGluZS5zcGxpdCgvXFxzKy8pWzBdOyAvLyBFeHRyYWN0IHRoZSBydWxlIG51bWJlciwgYXNzdW1pbmcgaXQncyB0aGUgZmlyc3QgZWxlbWVudFxuXHRcdFx0XHRcdFx0YWNjLnB1c2gocnVsZU51bWJlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHRcdH0sIFtdKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgaWRlbnRpZmllZCBydWxlcyBzdGFydGluZyBmcm9tIHRoZSBoaWdoZXN0IG51bWJlciB0byBwcmV2ZW50IHNoaWZ0aW5nIG9mIGxpbmUgbnVtYmVyc1xuXHRcdFx0XHRydWxlTnVtYmVycy5zb3J0KChhLCBiKSA9PiBiIC0gYSkuZm9yRWFjaChydWxlTnVtYmVyID0+IHtcblx0XHRcdFx0XHRjbWQoYHN1ZG8gaXB0YWJsZXMgLUQgRk9SV0FSRCAke3J1bGVOdW1iZXJ9YCwgKHJlbW92ZUVycm9yLCByZW1vdmVTdGRvdXQsIHJlbW92ZVN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHJlbW92ZUVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHJlbW92aW5nIHJ1bGUgJHtydWxlTnVtYmVyfTogJHtyZW1vdmVFcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0Ly8gRGVjaWRlIGlmIHlvdSB3YW50IHRvIGNvbnRpbnVlIHJlbW92aW5nIG90aGVyIHJ1bGVzIG9yIHN0b3AgaGVyZVxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgUnVsZSAke3J1bGVOdW1iZXJ9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBBZnRlciBhdHRlbXB0aW5nIHRvIHJlbW92ZSBhbGwgaWRlbnRpZmllZCBydWxlcywgc2F2ZSB0aGUgaXB0YWJsZXMgY29uZmlndXJhdGlvblxuXHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChzYXZlRXJyb3IsIHNhdmVTdGRvdXQsIHNhdmVTdGRlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoc2F2ZUVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7c2F2ZUVycm9yfWApO1xuXHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhzYXZlRXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnaXB0YWJsZXMgcnVsZXMgdXBkYXRlZCBhbmQgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIE1BQyBmaWx0ZXIgcnVsZXMgZm9yIEV0aGVybmV0IHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzTW9iaWxlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcblx0XHRcdHZhciBsaXN0TmF0UnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLXQgbmF0IC1TIFBPU1RST1VUSU5HJztcblxuXHRcdFx0dmFyIGZvcndhcmRSZXN1bHQgPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXHRcdFx0dmFyIG5hdFJlc3VsdCA9IGNtZChsaXN0TmF0UnVsZXNDb21tYW5kKTtcblxuXHRcdFx0aWYgKCFmb3J3YXJkUmVzdWx0KSB7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBGT1JXQVJEIGNoYWluIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghbmF0UmVzdWx0KSB7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBQT1NUUk9VVElORyBjaGFpbiBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0fVxuXG5cblx0XHRcdHZhciBzaGFyaW5nRnJvbVdsYW5pbnRUb1d3YW4gPSBmb3J3YXJkUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW5pbnQgLW8gd3dhbjAgLWogQUNDRVBUJyk7XG5cdFx0XHR2YXIgc2hhcmluZ0Zyb21XbGFudXNiVG9Xd2FuID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFudXNiIC1vIHd3YW4wIC1qIEFDQ0VQVCcpO1xuXHRcdFx0dmFyIHNoYXJpbmdUb1dsYW5pbnRGcm9tV3dhbkVzdGFibGlzaGVkID0gZm9yd2FyZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnKTtcblx0XHRcdHZhciBzaGFyaW5nVG9XbGFudXNiRnJvbVd3YW5Fc3RhYmxpc2hlZCA9IGZvcndhcmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyk7XG5cblx0XHRcdHZhciBuYXRGb3JXbGFuaW50ID0gbmF0UmVzdWx0LmluY2x1ZGVzKCctQSBQT1NUUk9VVElORyAtcyAxMC4wLjAuMC8yNCAtbyB3d2FuMCAtaiBNQVNRVUVSQURFJyk7XG5cdFx0XHR2YXIgbmF0Rm9yV2xhbnVzYiA9IG5hdFJlc3VsdC5pbmNsdWRlcygnLUEgUE9TVFJPVVRJTkcgLXMgMTAuMS4wLjAvMjQgLW8gd3dhbjAgLWogTUFTUVVFUkFERScpO1xuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdHNoYXJpbmdGcm9tV2xhbmludFRvV3dhbiAmJlxuXHRcdFx0XHRzaGFyaW5nRnJvbVdsYW51c2JUb1d3YW4gJiZcblx0XHRcdFx0c2hhcmluZ1RvV2xhbmludEZyb21Xd2FuRXN0YWJsaXNoZWQgJiZcblx0XHRcdFx0c2hhcmluZ1RvV2xhbnVzYkZyb21Xd2FuRXN0YWJsaXNoZWQgJiZcblx0XHRcdFx0bmF0Rm9yV2xhbmludCAmJlxuXHRcdFx0XHRuYXRGb3JXbGFudXNiXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdCdlbmFibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBudWxsO1xuXHRcdFx0aXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuaW50IC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtQyBGT1JXQVJEIC1pIHdsYW51c2IgLW8gd3dhbjAgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3bGFudXNiIC1vIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC1DIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbmludCAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFuaW50IC1tIGNvbm50cmFjayAtLWN0c3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtQyBGT1JXQVJEIC1pIHd3YW4wIC1vIHdsYW51c2IgLW0gY29ubnRyYWNrIC0tY3RzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAyPi9kZXYvbnVsbCB8fCBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLXQgbmF0IC1DIFBPU1RST1VUSU5HIC1zIDEwLjAuMC4wLzI0IC1vIHd3YW4wIC1qIE1BU1FVRVJBREUgMj4vZGV2L251bGwgfHwgc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUEgUE9TVFJPVVRJTkcgLXMgMTAuMC4wLjAvMjQgLW8gd3dhbjAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC10IG5hdCAtQyBQT1NUUk9VVElORyAtcyAxMC4xLjAuMC8yNCAtbyB3d2FuMCAtaiBNQVNRVUVSQURFIDI+L2Rldi9udWxsIHx8IHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1BIFBPU1RST1VUSU5HIC1zIDEwLjEuMC4wLzI0IC1vIHd3YW4wIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHRcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGRlcnIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgbW9iaWxlIGVuYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdC8vIERlZmluZSBjb21tYW5kcyBmb3IgZGVsZXRpb24gd2l0aG91dCBjb21iaW5pbmcgdGhlbVxuXHRcdFx0dmFyIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBudWxsO1xuXG5cdFx0XHRpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gW1xuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW5pbnQgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbnVzYiAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbmludCAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbnVzYiAtbSBjb25udHJhY2sgLS1jdHN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1zb3VyY2UgMTAuMC4wLjAvMjQgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLXNvdXJjZSAxMC4xLjAuMC8yNCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERSdcblx0XHRcdF07XG5cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIHJlY3Vyc2l2ZWx5IGV4ZWN1dGUgYSBjb21tYW5kIHVudGlsIGl0IGZhaWxzIChpbmRpY2F0aW5nIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlKVxuXHRcdFx0ZnVuY3Rpb24gZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spIHtcblx0XHRcdFx0Y21kKGNvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHQvLyBObyBlcnJvciBtZWFucyB0aGUgY29tbWFuZCBzdWNjZWVkZWQsIHNvIHRoZXJlIG1pZ2h0IGJlIG1vcmUgaW5zdGFuY2VzXG5cdFx0XHRcdFx0aWYgKCFlcnJvcikge1xuXHRcdFx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBFcnJvciBsaWtlbHkgbWVhbnMgbm8gbW9yZSBpbnN0YW5jZXMgb2YgdGhlIHJ1bGUsIG1vdmUgb25cblx0XHRcdFx0XHRcdGRvbmVDYWxsYmFjaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEV4ZWN1dGUgZGVsZXRpb24gZm9yIGVhY2ggY29tbWFuZCBhbmQgdHJhY2sgd2hlbiBhbGwgYXJlIGNvbXBsZXRlZFxuXHRcdFx0dmFyIHRhc2tzQ29tcGxldGVkID0gMDtcblx0XHRcdGlwdGFibGVzRGVsZXRlQ29tbWFuZHMuZm9yRWFjaCgoY29tbWFuZCkgPT4ge1xuXHRcdFx0XHRleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsICgpID0+IHtcblx0XHRcdFx0XHR0YXNrc0NvbXBsZXRlZCsrO1xuXHRcdFx0XHRcdC8vIEFmdGVyIGFsbCBjb21tYW5kcyBoYXZlIGJlZW4gYXR0ZW1wdGVkLCBzYXZlIHRoZSBjb25maWd1cmF0aW9uXG5cdFx0XHRcdFx0aWYgKHRhc2tzQ29tcGxldGVkID09PSBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHNhdmVTdGRvdXQsIHNhdmVTdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3Igc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnaXB0YWJsZXMgcnVsZXMgZm9yIG1vYmlsZSBpbnRlcmZhY2UgdXBkYXRlZCBhbmQgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgJ0FsbCBzcGVjaWZpZWQgcnVsZXMgZm9yIG1vYmlsZSBpbnRlcmZhY2UgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0Ly8gJ2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdC8vIFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsXG5cdFx0Ly8gXHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0Ly8gXHRdLmpvaW4oJyAmJiAnKTtcblxuXHRcdC8vIFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdFx0aWYgKHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBtb2JpbGUgZGlzYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdC8vIFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXHRcdCdhbGxvd0ludGVybmV0Rm9yTWFjTW9iaWxlJzogZnVuY3Rpb24obWFjQWRkcmVzcywgY2FsbGJhY2spIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvLyBGaXJzdCwgZW5hYmxlIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyB0byB3d2FuMFxuXHRcdFx0cmVzID0gY21kKCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbmludCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUICYmIHN1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFudXNiIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuaW50IC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFudXNiIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgZW5hYmxpbmcgaW50ZXJuZXQgc2hhcmluZzogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBJbnRlcm5ldCBzaGFyaW5nIGVuYWJsZWQgdmlhIHd3YW4wLmApO1xuXHRcdFx0XHQvLyBBbGxvdyBpbnRlcm5ldCBvbmx5IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzIG9uIHd3YW4wXG5cdFx0XHRcdHZhciBhbGxvd01hY0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtSSBGT1JXQVJEIDEgLWkgd3dhbjAgLW0gbWFjIC0tbWFjLXNvdXJjZSAke21hY0FkZHJlc3N9IC1qIEFDQ0VQVGA7XG5cdFx0XHRcdC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldCB2aWEgd3dhbjAuXG5cdFx0XHRcdHZhciBibG9ja090aGVyc0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIHd3YW4wIC1qIERST1BgO1xuXG5cdFx0XHRcdC8vIEFsbG93IHNwZWNpZmljIE1BQ1xuXHRcdFx0XHRyZXMgPSBjbWQoYWxsb3dNYWNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBhbGxvd2luZyBNQUMgJHttYWNBZGRyZXNzfSBvbiBXV0FOOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBhbGxvd2VkIGZvciBNQUMgJHttYWNBZGRyZXNzfSBvbiBXV0FOLmApO1xuXG5cdFx0XHRcdFx0Ly8gQmxvY2sgYWxsIG90aGVyIE1BQ3Ncblx0XHRcdFx0XHRyZXMgPSBjbWQoYmxvY2tPdGhlcnNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDcyBvbiBXV0FOOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBibG9ja2VkIGZvciBvdGhlciBNQUMgYWRkcmVzc2VzIG9uIFdXQU4uYCk7XG5cblx0XHRcdFx0XHRcdC8vIFNhdmUgaXB0YWJsZXMgcnVsZXNcblx0XHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBzYXZpbmcgaXB0YWJsZXMgcnVsZXMgZm9yIFdXQU46ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgZm9yIFdXQU4gc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKG51bGwpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQncmVtb3ZlQWxsTWFjRmlsdGVyc0Zvck1vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBMaXN0IGFsbCBGT1JXQVJEIHJ1bGVzXG5cdFx0XHRjbWQoJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtLWxpbmUtbnVtYmVycyAtbicsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9jZXNzIHN0ZG91dCB0byBmaW5kIHJ1bGVzIHRvIGRlbGV0ZS4gVGhpcyBwYXJ0IGlzIHBzZXVkby1jb2RlIGFuZCBuZWVkcyBhZGp1c3RtZW50XG5cdFx0XHRcdGNvbnN0IGxpbmVzID0gc3Rkb3V0LnNwbGl0KCdcXG4nKTtcblx0XHRcdFx0Y29uc3QgcnVsZU51bWJlcnMgPSBbXTtcblx0XHRcdFx0bGluZXMuZm9yRWFjaChsaW5lID0+IHtcblx0XHRcdFx0XHRpZiAobGluZS5pbmNsdWRlcygnd3dhbjAnKSAmJiBsaW5lLmluY2x1ZGVzKCdNQUMnKSkge1xuXHRcdFx0XHRcdFx0Ly8gRXh0cmFjdCB0aGUgcnVsZSBudW1iZXIgZnJvbSB0aGUgbGluZVxuXHRcdFx0XHRcdFx0Y29uc3QgcnVsZU51bWJlciA9IGxpbmUuc3BsaXQoJyAnKVswXTsgLy8gVGhpcyBpcyBhIHNpbXBsaWZpY2F0aW9uXG5cdFx0XHRcdFx0XHRydWxlTnVtYmVycy5wdXNoKHJ1bGVOdW1iZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIHJ1bGVzIGJ5IHRoZWlyIG51bWJlcnMsIHN0YXJ0aW5nIGZyb20gdGhlIGhpZ2hlc3QgbnVtYmVyXG5cdFx0XHRcdHJ1bGVOdW1iZXJzLnNvcnQoKGEsIGIpID0+IGIgLSBhKS5mb3JFYWNoKHJ1bGVOdW1iZXIgPT4ge1xuXHRcdFx0XHRcdGNtZChgc3VkbyBpcHRhYmxlcyAtRCBGT1JXQVJEICR7cnVsZU51bWJlcn1gLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgcmVtb3ZpbmcgcnVsZSAke3J1bGVOdW1iZXJ9OiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdFx0Ly8gT3B0aW9uYWxseSwgc3RvcCB0aGUgcHJvY2VzcyBvciBjb250aW51ZSBhdHRlbXB0aW5nIHRvIHJlbW92ZSBvdGhlciBydWxlc1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgUnVsZSAke3J1bGVOdW1iZXJ9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBBZnRlciBhbGwgcnVsZXMgaGF2ZSBiZWVuIHByb2Nlc3NlZCwgc2F2ZSB0aGUgaXB0YWJsZXMgcnVsZXNcblx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2lwdGFibGVzIHJ1bGVzIHVwZGF0ZWQgYW5kIHNhdmVkLicpO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgJ0FsbCBNQUMgZmlsdGVyIHJ1bGVzIGZvciBXV0FOIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQncmVib290JzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKCdzdWRvIHJlYm9vdCcsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHQgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdCAgcmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3NodXRkb3duJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKCdzdWRvIGhhbHQnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0ICBjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0XHQgIHJldHVybjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdzeW5jaHJvbml6ZSc6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIHN5bmMuLi5cIik7XG5cblx0XHRcdHZhciBkZXZpY2VTZXJpYWwgPSBNZXRlb3Iuc2V0dGluZ3MucHVibGljLnNlcmlhbDtcblx0XHRcdHZhciBkZXZpY2VUb2tlbiA9IE1ldGVvci5zZXR0aW5ncy5tb29kbGVBUElUb2tlbjtcblx0XHRcdHZhciB1cmwgPSBNZXRlb3Iuc2V0dGluZ3MuY2xvdWRVUkwgKyBcIi9hcGkvc3RhcnRTeW5jXCI7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQnZGV2aWNlU2VyaWFsJzogZGV2aWNlU2VyaWFsLFxuXHRcdFx0XHRcdCdkZXZpY2VUb2tlbic6IGRldmljZVRva2VuXG5cdFx0XHRcdH0sXG5cdFx0XHQgICAgbnBtUmVxdWVzdE9wdGlvbnM6IHtcblx0XHRcdCAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSwgLy8gVE9ETyByZW1vdmUgd2hlbiBkZXBsb3lcblx0XHRcdCAgICAgICAgdGltZW91dDogMTIwMDAwMFxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgdGltZW91dDogMTIwMDAwMFxuXHRcdFx0fVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly92YXIgcmVzdWx0ID0gSFRUUC5jYWxsKCdQT1NUJywgdXJsLCBvcHRpb25zKTtcblxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gSFRUUC5wb3N0KCB1cmwsIG9wdGlvbnMgKTtcblx0XHRcdFx0dmFyIHJlc3VsdENvbnRlbnQgPSByZXN1bHQuY29udGVudDtcblx0XHRcdFx0Ly9TeW5jaHJvbml6YXRpb25zLmluc2VydCh7ZGF0ZTpEYXRlLm5vdygpfSk7XG5cdFx0XHRcdHJldHVybiByZXN1bHRDb250ZW50O1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCBcIkVycm9yIHdoaWxlIHRyeWluZyB0byBzeW5jcm9uaXplLi4uXCIsIGUgKTtcblx0XHRcdFx0cmV0dXJuIFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi4gXCIrIGU7XG5cdFx0XHR9XG5cdFx0Ly9yZXR1cm4gcmVzdWx0Q29udGVudDtcblx0XHR9LFxuXHR9KTtcbn1cbn0pO1xuIiwiLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbEFwcHMnLCBmdW5jdGlvbigpIHtcbi8vIFx0cmV0dXJuIEFwcHMuZmluZCh7fSk7XG4vLyB9KTtcblxuLy8gTWV0ZW9yLnB1Ymxpc2goXCJ1c2Vyc1wiLCBmdW5jdGlvbigpIHtcbi8vICAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoe30sIHtmaWVsZHM6e2NyZWF0ZWRBdDogdHJ1ZSwgcHJvZmlsZTogdHJ1ZSwgZW1haWxzOiB0cnVlLCB1c2VybmFtZTogdHJ1ZX19KTtcbi8vIH0pO1xuXG5cbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIH0pOyIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuXG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9zeW5jaHJvbml6YXRpb25zLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvdXNlcnMuanMnO1xuXG5pbXBvcnQgJy4uL3NlcnZlci9maXh0dXJlcy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci9tZXRob2RzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL3B1YmxpY2F0aW9ucy5qcyc7XG5pbXBvcnQgJy4uL2xpYi9hcHBfbG9hZGVyLmpzJztcblxuXG4vL2ltcG9ydCB7RERQfSBmcm9tICdtZXRlb3IvZGRwJztcbi8vaW1wb3J0IHtBY2NvdW50c30gZnJvbSAnbWV0ZW9yL2FjY291bnRzLWJhc2UnO1xuXG5cbi8vIGltcG9ydCAnLi4vaW1wb3J0cy9zdGFydHVwL3NlcnZlci9maXh0dXJlcy5qcyc7XG5cbi8vIGltcG9ydCAnLi4vaW1wb3J0cy9hcGkvZml4dHVyZXMuanMnO1xuXG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcblx0Y29uc29sZS5sb2coXCJtZXRlb3Igc3RhcnRlZC4uLlwiKTtcblxuXG5cbiAgLy8gY29kZSB0byBydW4gb24gc2VydmVyIGF0IHN0YXJ0dXBcblxuIC8vICBTZXJ2ZXIyID0gRERQLmNvbm5lY3QoXCJodHRwOi8vYmVla2VlLmJveDo4M1wiKTtcblx0Ly8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFNlcnZlcjI7XG5cdC8vIGNvbnNvbGUubG9nKFwib24gY29ubmVjdGUuLi5cIik7XG59KTtcbiJdfQ==
