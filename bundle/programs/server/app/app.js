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

    var path = Npm.require("path");

    exec = Npm.require("child_process").exec;
    cmd = Meteor.wrapAsync(exec);
    var wifiSettingsPath = Meteor.settings.wifiSettingsPath;
    var configPath = Meteor.settings.configPath;
    var scriptsPath = Meteor.settings.scriptsPath || "/home/beekee/scripts";
    var localScriptsPath = path.join(process.cwd(), "scripts");
    var preferredScriptsBasePath = fs.existsSync(localScriptsPath) ? localScriptsPath : scriptsPath;
    var wifiClientModeStatePath = Meteor.settings.wifiClientModeStatePath || path.join(preferredScriptsBasePath, ".wifi-client-mode-state");

    const readline = require("readline");

    function shellEscape(value) {
      return `'${String(value).replace(/'/g, `'\\''`)}'`;
    }

    function resolveScriptPath(scriptName) {
      const candidatePaths = [path.join(localScriptsPath, scriptName), path.join(scriptsPath, scriptName)];

      for (const candidatePath of candidatePaths) {
        if (fs.existsSync(candidatePath)) {
          return candidatePath;
        }
      }

      return candidatePaths[0];
    }

    function readWifiClientModeState() {
      try {
        if (!fs.existsSync(wifiClientModeStatePath)) {
          return null;
        }

        const state = fs.readFileSync(wifiClientModeStatePath, "utf-8").trim();

        if (state === "enabled") {
          return true;
        }

        if (state === "disabled") {
          return false;
        }
      } catch (error) {
        console.log("Error reading Wi-Fi client mode state:", error);
      }

      return null;
    }

    function detectWifiClientModeFromSystem() {
      try {
        const hasWlanUsb = cmd("ip link show wlanusb >/dev/null 2>&1 && echo true || echo false").toString().trim();

        if (hasWlanUsb !== "true") {
          return false;
        }

        const hasApAddress = cmd("ip -4 addr show wlanusb | grep -q '10\\.1\\.0\\.1/24' && echo true || echo false").toString().trim();

        if (hasApAddress === "true") {
          return false;
        }

        const nmState = cmd("nmcli -t -f DEVICE,STATE device status 2>/dev/null | awk -F: '$1==\"wlanusb\" {print $2; exit}' || true").toString().trim();
        return /^(connected|disconnected|connecting|preparing)/.test(nmState);
      } catch (error) {
        console.log("Error detecting Wi-Fi client mode from system:", error);
        return false;
      }
    }

    function getWifiClientModeState() {
      const persistedState = readWifiClientModeState();

      if (persistedState !== null) {
        return persistedState;
      }

      return detectWifiClientModeFromSystem();
    }

    function ensureWifiClientModeEnabled() {
      if (!getWifiClientModeState()) {
        throw new Meteor.Error("wifi-client-mode-disabled", "Enable Wi-Fi client mode before scanning or connecting.");
      }
    }

    function runWifiModeScript(scriptName) {
      const scriptPath = resolveScriptPath(scriptName);

      if (!fs.existsSync(scriptPath)) {
        throw new Meteor.Error("wifi-client-mode-script-missing", `Missing Wi-Fi mode script: ${scriptPath}`);
      }

      return cmd(`timeout 45s bash ${shellEscape(scriptPath)}`);
    }

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
        return getWifiClientModeState();
      },
      enableWifiClientMode: function () {
        try {
          runWifiModeScript("normal_to_client.sh");

          if (!getWifiClientModeState()) {
            throw new Error("Wi-Fi client mode did not stay enabled.");
          }

          return true;
        } catch (error) {
          console.log("Error enabling Wi-Fi client mode:", error);
          throw new Meteor.Error("wifi-client-mode-enable-failed", error.reason || error.message || "Failed to enable Wi-Fi client mode.");
        }
      },
      disableWifiClientMode: function () {
        try {
          runWifiModeScript("client_to_normal.sh");

          if (getWifiClientModeState()) {
            throw new Error("Wi-Fi client mode did not switch back to AP mode.");
          }

          return true;
        } catch (error) {
          console.log("Error disabling Wi-Fi client mode:", error);
          throw new Meteor.Error("wifi-client-mode-disable-failed", error.reason || error.message || "Failed to disable Wi-Fi client mode.");
        }
      },
      getWifiNetworks: function () {
        return Promise.asyncApply(() => {
          ensureWifiClientModeEnabled();

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
        ensureWifiClientModeEnabled();

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
        ensureWifiClientModeEnabled();

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
        ensureWifiClientModeEnabled();

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
          ssid = cmd("iwgetid -r wlanusb 2>/dev/null || true").trim();

          if (!ssid) {
            ssid = cmd("nmcli -g GENERAL.CONNECTION device show wlanusb 2>/dev/null | head -n 1 || true").trim();
          }

          if (ssid === "--") {
            ssid = "";
          } // Check if ssid is not empty and is a string


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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiYWRkQ2xhc3MiLCJmYWRlT3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnQiLCJBcHBzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJhbGxvdyIsImluc2VydCIsInVwZGF0ZSIsInVzZXJJZCIsInNwYWNlIiwicHVibGlzaCIsImFwcHNQdWJsaWNhdGlvbiIsImZpbmQiLCJTeW5jaHJvbml6YXRpb25zIiwic3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uIiwiaXNBZG1pbiIsImNvbnNvbGUiLCJsb2ciLCJSb2xlcyIsInVzZXJJc0luUm9sZSIsInVzZXIiLCJyb2xlQXNzaWdubWVudCIsInJlYWR5IiwiY3JlYXRlUm9sZSIsInVubGVzc0V4aXN0cyIsInVzZXJzIiwiY291bnQiLCJhZG1pblBhc3N3b3JkIiwic2V0dGluZ3MiLCJ1c2VybmFtZSIsInJvbGVzIiwiXyIsImVhY2giLCJpZCIsIkFjY291bnRzIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJwcm9maWxlIiwibmFtZSIsImxlbmd0aCIsImFkZFVzZXJzVG9Sb2xlcyIsImRlZmF1bHRBcHBzIiwiY3VzdG9tQXBwIiwib25seVRlYWNoZXIiLCJvcmRlciIsImRvY191c2VyIiwiZG9jX2FkbWluIiwibGFzdF92ZXJzaW9uIiwidXJsIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiaW5zdGFsbGVkIiwidmVyc2lvbiIsImhpZGRlbiIsIkhUVFAiLCJmcyIsIk5wbSIsInJlcXVpcmUiLCJwYXRoIiwiZXhlYyIsImNtZCIsIndyYXBBc3luYyIsIndpZmlTZXR0aW5nc1BhdGgiLCJjb25maWdQYXRoIiwic2NyaXB0c1BhdGgiLCJsb2NhbFNjcmlwdHNQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJwcmVmZXJyZWRTY3JpcHRzQmFzZVBhdGgiLCJleGlzdHNTeW5jIiwid2lmaUNsaWVudE1vZGVTdGF0ZVBhdGgiLCJyZWFkbGluZSIsInNoZWxsRXNjYXBlIiwidmFsdWUiLCJTdHJpbmciLCJyZXBsYWNlIiwicmVzb2x2ZVNjcmlwdFBhdGgiLCJzY3JpcHROYW1lIiwiY2FuZGlkYXRlUGF0aHMiLCJjYW5kaWRhdGVQYXRoIiwicmVhZFdpZmlDbGllbnRNb2RlU3RhdGUiLCJzdGF0ZSIsInJlYWRGaWxlU3luYyIsInRyaW0iLCJlcnJvciIsImRldGVjdFdpZmlDbGllbnRNb2RlRnJvbVN5c3RlbSIsImhhc1dsYW5Vc2IiLCJ0b1N0cmluZyIsImhhc0FwQWRkcmVzcyIsIm5tU3RhdGUiLCJ0ZXN0IiwiZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSIsInBlcnNpc3RlZFN0YXRlIiwiZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkIiwiRXJyb3IiLCJydW5XaWZpTW9kZVNjcmlwdCIsInNjcmlwdFBhdGgiLCJtZXRob2RzIiwiYWRtaW5TZXROZXdQYXNzd29yZCIsImFkbWluSWQiLCJuZXdQYXNzd29yZCIsInNldFBhc3N3b3JkIiwiY3JlYXRlQWNjb3VudCIsImVkaXRBY2NvdW50IiwiX2lkIiwiJHNldCIsImNoYW5nZUVtYWlsIiwiY2hlY2siLCJvbGRlbWFpbCIsImVtYWlscyIsImVtYWlsUmVnIiwicmVtb3ZlRW1haWwiLCJhZGRyZXNzIiwiYWRkRW1haWwiLCJkZWxldGVVc2VyIiwicmVzdWx0IiwibWVzc2FnZSIsImFkZE1hbmFnZXJSb2xlIiwicmVtb3ZlTWFuYWdlclJvbGUiLCJyZW1vdmVVc2Vyc0Zyb21Sb2xlcyIsImFkZEFkbWluUm9sZSIsInJlbW92ZUFkbWluUm9sZSIsInJ1bkNvbW1hbmQiLCJjb21tYW5kIiwicmVzIiwiZ2V0VXNlZFNwYWNlIiwic3RvcmFnZVVzYWdlIiwidG9GaXhlZCIsInN0b3JhZ2VUb3RhbCIsInBlcmNlbnRhZ2UiLCJnZXRTU0lEIiwiZGF0YSIsIm1hdGNoIiwiUmVnRXhwIiwiU1NJRCIsImRlY29kZVVSSUNvbXBvbmVudCIsInNldFNTSUQiLCJuZXdTU0lEIiwiZW5jb2RlZE5ld1NTSUQiLCJCdWZmZXIiLCJuZXdEYXRhIiwid3JpdGVGaWxlU3luYyIsImdldFdpZmlQYXNzd29yZCIsInNldFdpZmlQYXNzd29yZCIsImdldFdpZmlDaGFubmVsIiwiY2hhbm5lbCIsInNldFdpZmlDaGFubmVsIiwibmV3Q2hhbm5lbCIsImdldFdpZmlCYW5kIiwic2V0V2lmaUJhbmQiLCJuZXdCYW5kIiwiYmFuZFJlZ2V4IiwiY2hhbm5lbFJlZ2V4IiwibWF0Y2hCYW5kIiwibWF0Y2hDaGFubmVsIiwiY3VycmVudENoYW5uZWwiLCJwYXJzZUludCIsImdldFNlcmlhbCIsInNlcmlhbCIsImdldE9wZXJhdG9yTmFtZSIsIm9wZXJhdG9yTmFtZSIsImdldFNpZ25hbFN0cmVuZ3RoIiwic2lnbmFsU3RyZW5ndGgiLCJzdHJlbmd0aFZhbHVlIiwicXVhbGl0eSIsImdldEFQTiIsIkFQTiIsImdldEFQTlVzZXIiLCJBUE5Vc2VyIiwiZ2V0QVBOUGFzc3dvcmQiLCJBUE5QYXNzd29yZCIsImdldFNpbUNhcmRTdGF0dXMiLCJzaW1TdGF0dXNSZXN1bHQiLCJleGVjdXRlQ29tbWFuZCIsInNpbVN0YXR1cyIsImluY2x1ZGVzIiwiZ2V0U2ltUGluIiwiU2ltUGluIiwic2V0U2ltUGluIiwiUElOIiwic2V0QVBOIiwic2V0QVBOVXNlciIsInNldEFQTlBhc3N3b3JkIiwiZ2V0UmVtb3RlU3RhdHVzIiwiZ2V0QXV0b1N5bmNTdGF0dXMiLCJnZXRTaGFyZUludGVybmV0VmlhRXRoZXJuZXRTdGF0dXMiLCJpc1NoYXJpbmciLCJnZXRTaGFyZUludGVybmV0VmlhTW9iaWxlU3RhdHVzIiwiYWN0aXZhdGVSZW1vdGUiLCJyZXMyIiwiZGlzYWN0aXZhdGVSZW1vdGUiLCJhY3RpdmF0ZUF1dG9TeW5jIiwiZGlzYWN0aXZhdGVBdXRvU3luYyIsImdldEJhdHRlcnlTdGF0dXMiLCJiYXR0ZXJ5TW9kdWxlIiwiZ2V0SXNPbmxpbmUiLCJpc09ubGluZSIsImdldEV0aDBJUCIsImdldFd3YW4wSVAiLCJnZXRCZWVrZWVPc1ZlcnNpb24iLCJnZXRCZWVrZWVIb21lVmVyc2lvbiIsImpzb24iLCJKU09OIiwicGFyc2UiLCJyZXN0YXJ0TW9iaWxlQ29ubmVjdCIsImdldEludGVybmV0SW50ZXJmYWNlIiwiZ2V0d2xhbnVzYiIsImdldFdMQU5VU0IiLCJnZXRXaWZpQ2xpZW50TW9kZUVuYWJsZWQiLCJlbmFibGVXaWZpQ2xpZW50TW9kZSIsInJlYXNvbiIsImRpc2FibGVXaWZpQ2xpZW50TW9kZSIsImdldFdpZmlOZXR3b3JrcyIsIndpZmkiLCJpbml0IiwiaWZhY2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNjYW4iLCJuZXR3b3JrcyIsInVuaXF1ZU5ldHdvcmtzIiwiTWFwIiwiZm9yRWFjaCIsIm5ldHdvcmsiLCJzdHJlbmd0aCIsImtleSIsInNzaWQiLCJtYWMiLCJzdWJzdHJpbmciLCJoYXMiLCJnZXQiLCJzZXQiLCJzZWN1cml0eSIsInVuaXF1ZU5ldHdvcmtzQXJyYXkiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJjb25uZWN0VG9XaWZpIiwiY29ubmVjdCIsImRpc2Nvbm5lY3RXaWZpIiwiZGlzY29ubmVjdCIsImZvcmdldFdpZmkiLCJkZWxldGVDb25uZWN0aW9uIiwiZ2V0Q2xpZW50U1NJRCIsImdldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0IiwibGlzdEZvcndhcmRSdWxlc0NvbW1hbmQiLCJjb21tYW5kUmVzdWx0Iiwic2hhcmluZ0Zyb21XbGFuVG9FdGgiLCJzaGFyaW5nVG9XbGFuRnJvbUV0aEVzdGFibGlzaGVkIiwic3RhdHVzIiwibWFjQWRkcmVzcyIsImVuYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0IiwiY2FsbGJhY2siLCJpcHRhYmxlc0NvbW1hbmRzIiwic3Rkb3V0Iiwic3RkZXJyIiwiZGlzYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0IiwiaXB0YWJsZXNEZWxldGVDb21tYW5kcyIsImV4ZWN1dGVBbmRSZXBlYXQiLCJkb25lQ2FsbGJhY2siLCJ0YXNrc0NvbXBsZXRlZCIsImVuYWJsZUludGVybmV0Rm9yTWFjRXRoZXJuZXQiLCJhbGxvd01hY0NvbW1hbmQiLCJibG9ja090aGVyc0NvbW1hbmQiLCJyZW1vdmVBbGxNYWNGaWx0ZXJzRm9yRXRoZXJuZXQiLCJsaW5lcyIsInNwbGl0IiwicnVsZU51bWJlcnMiLCJyZWR1Y2UiLCJhY2MiLCJsaW5lIiwiaW5kZXgiLCJ0b0xvd2VyQ2FzZSIsInJ1bGVOdW1iZXIiLCJwdXNoIiwic29ydCIsImEiLCJiIiwicmVtb3ZlRXJyb3IiLCJyZW1vdmVTdGRvdXQiLCJyZW1vdmVTdGRlcnIiLCJzYXZlRXJyb3IiLCJzYXZlU3Rkb3V0Iiwic2F2ZVN0ZGVyciIsImdldEludGVybmV0U2hhcmluZ1N0YXR1c01vYmlsZSIsInNoYXJpbmdGcm9tV2xhblRvV3dhbiIsInNoYXJpbmdUb1dsYW5Gcm9tV3dhbkVzdGFibGlzaGVkIiwiZW5hYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlIiwiZGlzYWJsZUludGVybmV0U2hhcmluZ01vYmlsZSIsImFsbG93SW50ZXJuZXRGb3JNYWNNb2JpbGUiLCJyZW1vdmVBbGxNYWNGaWx0ZXJzRm9yTW9iaWxlIiwicmVib290Iiwic2h1dGRvd24iLCJzeW5jaHJvbml6ZSIsImRldmljZVNlcmlhbCIsInB1YmxpYyIsImRldmljZVRva2VuIiwibW9vZGxlQVBJVG9rZW4iLCJjbG91ZFVSTCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwibnBtUmVxdWVzdE9wdGlvbnMiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJ0aW1lb3V0IiwicG9zdCIsInJlc3VsdENvbnRlbnQiLCJjb250ZW50IiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLENBQUNDLFFBQVgsRUFBcUI7QUFDcEJDLFFBQU0sQ0FBQ0MsT0FBUCxDQUFlLFlBQWYsRUFBNkIsMk5BQTdCO0FBRUFELFFBQU0sQ0FBQ0UsT0FBUCxDQUFlLFlBQWYsRUFBNkJDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLGlCQUFmLENBQTdCO0FBQ0E7O0FBRUQsSUFBSU4sTUFBTSxDQUFDTyxRQUFYLEVBQXFCO0FBQ3BCUCxRQUFNLENBQUNRLE9BQVAsQ0FBZSxZQUFXO0FBRXpCQyxjQUFVLENBQUMsWUFBVztBQUNqQkMsT0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkMsUUFBbEIsQ0FBMkIsZUFBM0I7QUFFSkQsT0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJFLE9BQTVCLENBQW9DLEdBQXBDLEVBQXlDLFlBQVc7QUFDbkRGLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsTUFBUjtBQUNBSCxTQUFDLENBQUMsY0FBRCxDQUFELENBQWtCSSxXQUFsQixDQUE4QixlQUE5QjtBQUNELE9BSEE7QUFJQSxLQVBTLEVBT1AsR0FQTyxDQUFWO0FBUUEsR0FWRDtBQVdBLEM7Ozs7Ozs7Ozs7O0FDbEJEQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFDQyxNQUFJLEVBQUMsTUFBSUE7QUFBVixDQUFkO0FBQStCLElBQUlDLEtBQUo7QUFB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YyxLQUFwQixFQUF0QjtBQUNDLFNBQU8zQyxNQUFNLENBQUMwQyxLQUFQLENBQWFiLElBQWIsRUFBUDtBQUNELENBSEQsRTs7Ozs7Ozs7Ozs7QUNURixJQUFJN0IsTUFBSjtBQUFXZSxNQUFNLENBQUNJLElBQVAsQ0FBWSxlQUFaLEVBQTRCO0FBQUNuQixRQUFNLENBQUNvQixDQUFELEVBQUc7QUFBQ3BCLFVBQU0sR0FBQ29CLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcURMLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHdCQUFaO0FBQXNDSixNQUFNLENBQUNJLElBQVAsQ0FBWSxvQ0FBWjtBQUFrREosTUFBTSxDQUFDSSxJQUFQLENBQVkseUJBQVo7QUFBdUNKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHVCQUFaO0FBQXFDSixNQUFNLENBQUNJLElBQVAsQ0FBWSxzQkFBWjtBQUFvQ0osTUFBTSxDQUFDSSxJQUFQLENBQVksMkJBQVo7QUFBeUNKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHNCQUFaO0FBWWpUO0FBQ0E7QUFHQTtBQUVBO0FBR0FuQixNQUFNLENBQUNRLE9BQVAsQ0FBZSxNQUFNO0FBQ3BCeUIsU0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFEb0IsQ0FLbkI7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQVZELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblx0SW5qZWN0LnJhd0hlYWQoXCJtZXRhTG9hZGVyXCIsICc8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBoZWlnaHQ9ZGV2aWNlLWhlaWdodFwiLz48bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj5cdDxtZXRhIG5hbWU9XCJtb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiPicpO1xuXG5cdEluamVjdC5yYXdCb2R5KFwiaHRtbExvYWRlclwiLCBBc3NldHMuZ2V0VGV4dCgnYXBwX2xvYWRlci5odG1sJykpO1xufVxuXG5pZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XG5cdE1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0JCgnLmluZGV4LS1pY29uJykuYWRkQ2xhc3MoJ2FuaW1hdGVkLWljb24nKTtcblxuXHRcdFx0JChcIiNpbmplY3QtbG9hZGVyLXdyYXBwZXJcIikuZmFkZU91dCg1MDAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHQkKCcuaW5kZXgtLWljb24nKS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQtaWNvbicpO1xuXHRcdH0pO1xuXHRcdH0sIDUwMCk7XG5cdH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBBcHBzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtYXBwcycpO1xuXG5cblxuQXBwcy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXG5cdC8vIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyB1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gcmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9XG59KTtcblxuLy8gUHVibGljYXRpb25zXG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxBcHBzJywgZnVuY3Rpb24gYXBwc1B1YmxpY2F0aW9uKCkge1xuICAgIHJldHVybiBBcHBzLmZpbmQoKTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuIFxuZXhwb3J0IGNvbnN0IFN5bmNocm9uaXphdGlvbnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignaG9tZS1zeW5jaHJvbml6YXRpb25zJyk7XG5cblxuXG5TeW5jaHJvbml6YXRpb25zLmFsbG93KHtcblxuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHVwZGF0ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0cmVtb3ZlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXG5cdC8vIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyB1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gcmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9XG59KTtcblxuLy8gUHVibGljYXRpb25zXG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxTeW5jaHJvbml6YXRpb25zJywgZnVuY3Rpb24gc3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uKCkge1xuICAgIHJldHVybiBTeW5jaHJvbml6YXRpb25zLmZpbmQoKTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG4vLyB2YXIgdXNlcnNEQlx0PSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy8gdmFyIGNvbGxlY3Rpb25cdD0gdXNlcnNEQi5vcGVuKCd1c2VycycpO1xuXG5cbi8vY29uc3QgZGF0YWJhc2UgPSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy9jb25zdCBjb2xsZWN0aW9uID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vL2V4cG9ydCBjb25zdCBVc2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy8gU2hhcmluZyB0aGUgc2FtZSBBY2NvdW50IGNvbGxlY3Rpb24gdGhhbiBiZWVrZWUtbGl2ZVxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXG5cdC8vIGNoZWNrIHRoYXQgdGhlIHVzZXJJZCBzcGVjaWZpZWQgaXMgYWRtaW5cbmlzQWRtaW4gPSBmdW5jdGlvbih1c2VySWQpIHtcblx0Y29uc29sZS5sb2coXCJpc2FkbWluXCIpO1xuICByZXR1cm4gUm9sZXMudXNlcklzSW5Sb2xlKE1ldGVvci51c2VyKCksICdhZG1pbicpO1xufVxuXG5cbi8vIFB1Ymxpc2ggUm9sZXMgdG8gY2xpZW50XG5NZXRlb3IucHVibGlzaChudWxsLCBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnVzZXJJZCkge1xuICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCh7ICd1c2VyLl9pZCc6IHRoaXMudXNlcklkIH0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucmVhZHkoKVxuICB9XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKCk7XG5cbn0pO1xuXG4gIC8vIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgLy8gXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAvLyAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICAvLyB9KTtcblxuLy8gU2VydmVyMiA9IEREUC5jb25uZWN0KFwiaHR0cDovL2JlZWtlZS5ib3g6ODNcIik7XG4vLyBBY2NvdW50cy5jb25uZWN0aW9uID0gU2VydmVyMjtcblxuXG4vL3ZhciBkYXRhYmFzZSA9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vL01ldGVvci51c2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy9leHBvcnQgY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignYXBwcycpO1xuXG5cbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIC8vIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgLy8gXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAvLyAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICAvLyB9KTtcbn0iLCJpbXBvcnQgeyBBcHBzIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvYXBwcy5qcyc7XG5cblx0Ly8gQ3JlYXRlIHRoZSByb2xlc1xuXHRSb2xlcy5jcmVhdGVSb2xlKCdtYW5hZ2VyJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXG5cbi8vICMjIyAgQ3JlYXRlIGFkbWluIHVzZXIgYXQgZmlyc3Qgc3RhcnQgICMjI1xuXG5cbmlmIChNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblx0XG5cdC8vIENyZWF0ZSB0aGUgcm9sZVxuXHRSb2xlcy5jcmVhdGVSb2xlKCdtYW5hZ2VyJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXHRSb2xlcy5jcmVhdGVSb2xlKCdhZG1pbicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblxuXHR2YXIgYWRtaW5QYXNzd29yZCA9IE1ldGVvci5zZXR0aW5ncy5hZG1pblBhc3N3b3JkO1xuXG5cdHZhciB1c2VycyA9IFtcblx0XHR7dXNlcm5hbWU6XCJhZG1pblwiLHJvbGVzOlsnYWRtaW4nXX0sXG5cdF07XG5cblx0Xy5lYWNoKHVzZXJzLCBmdW5jdGlvbiAodXNlcikge1xuXHRcdHZhciBpZDtcblx0XHRpZCA9IEFjY291bnRzLmNyZWF0ZVVzZXIoe1xuXHRcdFx0dXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG5cdFx0XHRlbWFpbDogXCJBZG1pblwiLFxuXHRcdFx0cGFzc3dvcmQ6IGFkbWluUGFzc3dvcmQsXG5cdFx0XHRwcm9maWxlOntuYW1lOlwiQWRtaW5cIn1cblx0XHR9KTtcblxuXHRcdGlmICh1c2VyLnJvbGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyhpZCwgdXNlci5yb2xlcyk7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG5pZiAoQXBwcy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuXG5cdHZhciBkZWZhdWx0QXBwcyA9IFtcblx0XHR7bmFtZTpcIkxpdmVcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MywgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL2xpdmUuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLWxpdmUucG5nXCIsIGRlc2NyaXB0aW9uOlwiQmVla2VlIExpdmUgcHJvbW90ZSByZWFsLXRpbWUgaW50ZXJhY3Rpb24gYnkgYWxsb3dpbmcgbGVhcm5lcnMgdG8gZXhwcmVzcyB0aGVtc2VsdmVzIGFza2luZyBxdWVzdGlvbnMsIHBvc3RpbmcgcGhvdG9zIG9yIHNoYXJpbmcgZmlsZXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjEuNFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiUmVzb3VyY2VzXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjcsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly9yZXNvdXJjZXMuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXJlc291cmNlcy5wbmdcIiwgZGVzY3JpcHRpb246XCJXaXRoIEJlZWtlZSBSZXNvdXJjZXMsIHlvdSBjYW4gZWFzaWx5IHNoYXJlIGZpbGVzIHdpdGggeW91ciBsZWFybmVycy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJXaGVlbFwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOnRydWUsIG9yZGVyOjksIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjAuN1wiLCB1cmw6XCJodHRwOi8vd2hlZWwuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXdoZWVsLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBXaGVlbCBpcyBhIHNpbXBsZSByYW5kb20gcGlja2VyIHdoZWVsIHRoYXQgYWxsb3cgeW91IHRvIHBpY2sgdXAgYSByYW5kb20gbmFtZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC44XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJUaW1lclwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo4LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vdGltZXIuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXRpbWVyLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBUaW1lciBpcyBhIHNpbXBsZSB0aW1lciB0aGF0IGxldHMgeW91ciBsZWFybmVycyBrbm93IGhvdyBtdWNoIHRpbWUgdGhleSBoYXZlIGxlZnQuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiTW9vZGxlXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MSwgZG9jX3VzZXI6XCJtb29kbGVfdGVhY2hlcmRvYy5wZGZcIiwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vbW9vZGxlLmJlZWtlZS5ib3hcIiwgaWNvbjpcIm1vb2RsZS5wbmdcIiwgZGVzY3JpcHRpb246XCJNb29kbGUgaXMgYSBmcmVlLCBvbmxpbmUgTGVhcm5pbmcgTWFuYWdlbWVudCBzeXN0ZW0gZW5hYmxpbmcgZWR1Y2F0b3JzIHRvIGNyZWF0ZSB0aGVpciBvd24gcHJpdmF0ZSB3ZWJzaXRlIGZpbGxlZCB3aXRoIGR5bmFtaWMgY291cnNlcyB0aGF0IGV4dGVuZCBsZWFybmluZywgYW55IHRpbWUsIGFueXdoZXJlLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIzLjExLjJcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIktvbGlicmlcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjoyLCBkb2NfdXNlcjpcImtvbGlicmlfdXNlcmRvYy5wZGZcIiwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8va29saWJyaS5iZWVrZWUuYm94XCIsIGljb246XCJrb2xpYnJpLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIktvbGlicmkgaXMgYW4gb3Blbi1zb3VyY2UgZWR1Y2F0aW9uYWwgcGxhdGZvcm0gc3BlY2lhbGx5IGRlc2lnbmVkIHRvIHByb3ZpZGUgb2ZmbGluZSBhY2Nlc3MgdG8gYSB3aWRlIHJhbmdlIG9mIHF1YWxpdHksIG9wZW5seSBsaWNlbnNlZCBlZHVjYXRpb25hbCByZXNvdXJjZXMgaW4gbG93LXJlc291cmNlIGNvbnRleHRzIGxpa2UgcnVyYWwgc2Nob29scywgcmVmdWdlZSBjYW1wcywgb3JwaGFuYWdlcywgYW5kIGFsc28gaW4gbm9uLWZvcm1hbCBzY2hvb2wgcHJvZ3JhbXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMTQuN1wiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdC8vIHtuYW1lOlwiRXRoZXJwYWRcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo1LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vZXRoZXJwYWQuYmVla2VlLmJveFwiLCBpY29uOlwiZXRoZXJwYWQucG5nXCIsIGRlc2NyaXB0aW9uOlwiRXRoZXJwYWQgYWxsb3dzIHlvdSB0byBlZGl0IGRvY3VtZW50cyBjb2xsYWJvcmF0aXZlbHkgaW4gcmVhbC10aW1lLCBtdWNoIGxpa2UgYSBsaXZlIG11bHRpLXBsYXllciBlZGl0b3IgdGhhdCBydW5zIGluIHlvdXIgYnJvd3Nlci4gV3JpdGUgYXJ0aWNsZXMsIHByZXNzIHJlbGVhc2VzLCB0by1kbyBsaXN0cywgZXRjLiB0b2dldGhlciB3aXRoIHlvdXIgZnJpZW5kcywgZmVsbG93IHN0dWRlbnRzIG9yIGNvbGxlYWd1ZXMsIGFsbCB3b3JraW5nIG9uIHRoZSBzYW1lIGRvY3VtZW50IGF0IHRoZSBzYW1lIHRpbWUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjEuOC4xNFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiU3Rvcm1cIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo0LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vc3Rvcm0uYmVla2VlLmJveFwiLCBpY29uOlwic3Rvcm0ucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGFuZCBhbmltYXRlIGxpdmUgc3VydmV5cywgYnJhaW5zdG9ybXMgYW5kIHF1aXp6ZXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuNC41XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJQYWRcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo1LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vcGFkLmJlZWtlZS5ib3hcIiwgaWNvbjpcInBhZC5wbmdcIiwgZGVzY3JpcHRpb246XCJDcmVhdGUgY29sbGFib3JhdGl2ZSB3YWxscyB0byBzaGFyZSBhbmQgb3JnYW5pemUgY29udGVudC5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC44LjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIkJ1enplclwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6dHJ1ZSwgb3JkZXI6NiwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2J1enplci5iZWVrZWUuYm94XCIsIGljb246XCJidXp6ZXIucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGEgdmlydHVhbCBnYW1pbmcgcm9vbSBhcm91bmQgYSBjb25uZWN0ZWQgYnV6emVyLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjIuNFwiLCBoaWRkZW46ZmFsc2V9LFxuXG5cdF07XG5cblx0Xy5lYWNoKGRlZmF1bHRBcHBzLCBmdW5jdGlvbiAoZGVmYXVsdEFwcHMpIHtcblx0XHRBcHBzLmluc2VydChkZWZhdWx0QXBwcyk7XG5cdH0pO1xufSIsImltcG9ydCB7IEhUVFAgfSBmcm9tIFwibWV0ZW9yL2h0dHBcIjtcblxuTWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24gKCkge1xuICBpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gICAgdmFyIGZzID0gTnBtLnJlcXVpcmUoXCJmc1wiKTtcbiAgICB2YXIgcGF0aCA9IE5wbS5yZXF1aXJlKFwicGF0aFwiKTtcbiAgICBleGVjID0gTnBtLnJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLmV4ZWM7XG4gICAgY21kID0gTWV0ZW9yLndyYXBBc3luYyhleGVjKTtcblxuICAgIHZhciB3aWZpU2V0dGluZ3NQYXRoID0gTWV0ZW9yLnNldHRpbmdzLndpZmlTZXR0aW5nc1BhdGg7XG4gICAgdmFyIGNvbmZpZ1BhdGggPSBNZXRlb3Iuc2V0dGluZ3MuY29uZmlnUGF0aDtcbiAgICB2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGggfHwgXCIvaG9tZS9iZWVrZWUvc2NyaXB0c1wiO1xuICAgIHZhciBsb2NhbFNjcmlwdHNQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwic2NyaXB0c1wiKTtcbiAgICB2YXIgcHJlZmVycmVkU2NyaXB0c0Jhc2VQYXRoID0gZnMuZXhpc3RzU3luYyhsb2NhbFNjcmlwdHNQYXRoKVxuICAgICAgPyBsb2NhbFNjcmlwdHNQYXRoXG4gICAgICA6IHNjcmlwdHNQYXRoO1xuICAgIHZhciB3aWZpQ2xpZW50TW9kZVN0YXRlUGF0aCA9XG4gICAgICBNZXRlb3Iuc2V0dGluZ3Mud2lmaUNsaWVudE1vZGVTdGF0ZVBhdGggfHxcbiAgICAgIHBhdGguam9pbihwcmVmZXJyZWRTY3JpcHRzQmFzZVBhdGgsIFwiLndpZmktY2xpZW50LW1vZGUtc3RhdGVcIik7XG4gICAgY29uc3QgcmVhZGxpbmUgPSByZXF1aXJlKFwicmVhZGxpbmVcIik7XG5cbiAgICBmdW5jdGlvbiBzaGVsbEVzY2FwZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGAnJHtTdHJpbmcodmFsdWUpLnJlcGxhY2UoLycvZywgYCdcXFxcJydgKX0nYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlU2NyaXB0UGF0aChzY3JpcHROYW1lKSB7XG4gICAgICBjb25zdCBjYW5kaWRhdGVQYXRocyA9IFtcbiAgICAgICAgcGF0aC5qb2luKGxvY2FsU2NyaXB0c1BhdGgsIHNjcmlwdE5hbWUpLFxuICAgICAgICBwYXRoLmpvaW4oc2NyaXB0c1BhdGgsIHNjcmlwdE5hbWUpLFxuICAgICAgXTtcblxuICAgICAgZm9yIChjb25zdCBjYW5kaWRhdGVQYXRoIG9mIGNhbmRpZGF0ZVBhdGhzKSB7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGNhbmRpZGF0ZVBhdGgpKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZVBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhbmRpZGF0ZVBhdGhzWzBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWRXaWZpQ2xpZW50TW9kZVN0YXRlKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKHdpZmlDbGllbnRNb2RlU3RhdGVQYXRoKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhdGUgPSBmcy5yZWFkRmlsZVN5bmMod2lmaUNsaWVudE1vZGVTdGF0ZVBhdGgsIFwidXRmLThcIikudHJpbSgpO1xuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gXCJlbmFibGVkXCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gXCJkaXNhYmxlZFwiKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHJlYWRpbmcgV2ktRmkgY2xpZW50IG1vZGUgc3RhdGU6XCIsIGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGV0ZWN0V2lmaUNsaWVudE1vZGVGcm9tU3lzdGVtKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaGFzV2xhblVzYiA9IGNtZChcbiAgICAgICAgICBcImlwIGxpbmsgc2hvdyB3bGFudXNiID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiLFxuICAgICAgICApXG4gICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAudHJpbSgpO1xuXG4gICAgICAgIGlmIChoYXNXbGFuVXNiICE9PSBcInRydWVcIikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhc0FwQWRkcmVzcyA9IGNtZChcbiAgICAgICAgICBcImlwIC00IGFkZHIgc2hvdyB3bGFudXNiIHwgZ3JlcCAtcSAnMTBcXFxcLjFcXFxcLjBcXFxcLjEvMjQnICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIsXG4gICAgICAgIClcbiAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgIC50cmltKCk7XG5cbiAgICAgICAgaWYgKGhhc0FwQWRkcmVzcyA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBubVN0YXRlID0gY21kKFxuICAgICAgICAgIFwibm1jbGkgLXQgLWYgREVWSUNFLFNUQVRFIGRldmljZSBzdGF0dXMgMj4vZGV2L251bGwgfCBhd2sgLUY6ICckMT09XFxcIndsYW51c2JcXFwiIHtwcmludCAkMjsgZXhpdH0nIHx8IHRydWVcIixcbiAgICAgICAgKVxuICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgLnRyaW0oKTtcblxuICAgICAgICByZXR1cm4gL14oY29ubmVjdGVkfGRpc2Nvbm5lY3RlZHxjb25uZWN0aW5nfHByZXBhcmluZykvLnRlc3Qobm1TdGF0ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGRldGVjdGluZyBXaS1GaSBjbGllbnQgbW9kZSBmcm9tIHN5c3RlbTpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpIHtcbiAgICAgIGNvbnN0IHBlcnNpc3RlZFN0YXRlID0gcmVhZFdpZmlDbGllbnRNb2RlU3RhdGUoKTtcblxuICAgICAgaWYgKHBlcnNpc3RlZFN0YXRlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBwZXJzaXN0ZWRTdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGVjdFdpZmlDbGllbnRNb2RlRnJvbVN5c3RlbSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpIHtcbiAgICAgIGlmICghZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpKSB7XG4gICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG4gICAgICAgICAgXCJ3aWZpLWNsaWVudC1tb2RlLWRpc2FibGVkXCIsXG4gICAgICAgICAgXCJFbmFibGUgV2ktRmkgY2xpZW50IG1vZGUgYmVmb3JlIHNjYW5uaW5nIG9yIGNvbm5lY3RpbmcuXCIsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuV2lmaU1vZGVTY3JpcHQoc2NyaXB0TmFtZSkge1xuICAgICAgY29uc3Qgc2NyaXB0UGF0aCA9IHJlc29sdmVTY3JpcHRQYXRoKHNjcmlwdE5hbWUpO1xuXG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoc2NyaXB0UGF0aCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcbiAgICAgICAgICBcIndpZmktY2xpZW50LW1vZGUtc2NyaXB0LW1pc3NpbmdcIixcbiAgICAgICAgICBgTWlzc2luZyBXaS1GaSBtb2RlIHNjcmlwdDogJHtzY3JpcHRQYXRofWAsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbWQoYHRpbWVvdXQgNDVzIGJhc2ggJHtzaGVsbEVzY2FwZShzY3JpcHRQYXRoKX1gKTtcbiAgICB9XG5cbiAgICBNZXRlb3IubWV0aG9kcyh7XG4gICAgICBhZG1pblNldE5ld1Bhc3N3b3JkOiBmdW5jdGlvbiAoYWRtaW5JZCwgdXNlcklkLCBuZXdQYXNzd29yZCkge1xuICAgICAgICAvLyBBZG1pbiBjYW4gZm9yY2libHkgY2hhbmdlIHRoZSBwYXNzd29yZCBmb3IgYSB1c2VyXG4gICAgICAgIGlmIChSb2xlcy51c2VySXNJblJvbGUoYWRtaW5JZCwgXCJhZG1pblwiKSkge1xuICAgICAgICAgIEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgbmV3UGFzc3dvcmQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY3JlYXRlQWNjb3VudDogZnVuY3Rpb24gKGVtYWlsLCBwYXNzd29yZCwgcHJvZmlsZSkge1xuICAgICAgICByZXR1cm4gQWNjb3VudHMuY3JlYXRlVXNlcih7XG4gICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgICBwcm9maWxlOiBwcm9maWxlLFxuICAgICAgICB9KTsgLy8gQ2FsbGJhY2sgaXMgbm90IHN1cHBvcnRlZCBvbiBzZXJ2ZXItc2lkZVxuICAgICAgfSxcbiAgICAgIGVkaXRBY2NvdW50OiBmdW5jdGlvbiAodXNlcklkLCBlbWFpbCwgcGFzc3dvcmQsIHByb2ZpbGUpIHtcbiAgICAgICAgTWV0ZW9yLnVzZXJzLnVwZGF0ZShcbiAgICAgICAgICB7IF9pZDogdXNlcklkIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJHNldDoge1xuICAgICAgICAgICAgICBcImVtYWlscy4wLmFkZHJlc3NcIjogZW1haWwsXG4gICAgICAgICAgICAgIHByb2ZpbGU6IHByb2ZpbGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIGlmIChwYXNzd29yZCkge1xuICAgICAgICAgIEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgcGFzc3dvcmQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2hhbmdlRW1haWw6IGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICB2YXIgZW1haWwgPSBlbWFpbDtcbiAgICAgICAgY2hlY2soZW1haWwsIFN0cmluZyk7XG4gICAgICAgIHZhciB1c2VyID0gTWV0ZW9yLnVzZXIoKTtcbiAgICAgICAgdmFyIG9sZGVtYWlsID0gdXNlci5lbWFpbHM7XG4gICAgICAgIHZhciBlbWFpbFJlZyA9IC9eKFtcXHctXFwuXStAKFtcXHctXStcXC4pK1tcXHctXXsyLDR9KT8kLztcbiAgICAgICAgaWYgKGVtYWlsUmVnLnRlc3QoZW1haWwpKSB7XG4gICAgICAgICAgaWYgKG9sZGVtYWlsICE9IG51bGwpIHtcbiAgICAgICAgICAgIEFjY291bnRzLnJlbW92ZUVtYWlsKHVzZXIuX2lkLCB1c2VyLmVtYWlsc1swXS5hZGRyZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQWNjb3VudHMuYWRkRW1haWwodXNlci5faWQsIGVtYWlsKTtcbiAgICAgICAgICByZXR1cm4gZW1haWw7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgICBkZWxldGVVc2VyOiBmdW5jdGlvbiAodXNlcklkKSB7XG4gICAgICAgIE1ldGVvci51c2Vycy5yZW1vdmUodXNlcklkLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aGVuIGRlbGV0aW5nIHVzZXIgOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRkTWFuYWdlclJvbGU6IGZ1bmN0aW9uICh1c2VySWQpIHtcbiAgICAgICAgUm9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJZCwgXCJtYW5hZ2VyXCIpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZU1hbmFnZXJSb2xlOiBmdW5jdGlvbiAodXNlcklkKSB7XG4gICAgICAgIFJvbGVzLnJlbW92ZVVzZXJzRnJvbVJvbGVzKHVzZXJJZCwgXCJtYW5hZ2VyXCIpO1xuICAgICAgfSxcbiAgICAgIGFkZEFkbWluUm9sZTogZnVuY3Rpb24gKHVzZXJJZCkge1xuICAgICAgICBSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklkLCBcImFkbWluXCIpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUFkbWluUm9sZTogZnVuY3Rpb24gKHVzZXJJZCkge1xuICAgICAgICBSb2xlcy5yZW1vdmVVc2Vyc0Zyb21Sb2xlcyh1c2VySWQsIFwiYWRtaW5cIik7XG4gICAgICB9LFxuXG4gICAgICAvLyAnZ2V0VXNlZFNwYWNlJzogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBcdHZhciByZXM7XG4gICAgICAvLyBcdHJlcyA9IGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpICsgXCIvIFwiICsgY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIikgKyBcIiAoXCIrY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIikrXCJ1c2VkKVwiO1xuICAgICAgLy8gXHRyZXR1cm4gcmVzO1xuICAgICAgLy8gfSxcbiAgICAgIHJ1bkNvbW1hbmQ6IGZ1bmN0aW9uIChwYXNzd29yZCwgY29tbWFuZCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXCJlY2hvIFwiICsgcGFzc3dvcmQgKyBcIiB8IHN1ZG8gLVMgXCIgKyBjb21tYW5kKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0sXG4gICAgICBnZXRVc2VkU3BhY2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcyA9IHt9O1xuICAgICAgICAvL3JlcyA9IGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpICsgXCIvIFwiICsgY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIikgKyBcIiAoXCIrY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIikrXCJ1c2VkKVwiO1xuICAgICAgICByZXMuc3RvcmFnZVVzYWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIik7XG4gICAgICAgIHJlcy5zdG9yYWdlVXNhZ2UgPSByZXMuc3RvcmFnZVVzYWdlIC8gMTAwMDAwMDtcbiAgICAgICAgcmVzLnN0b3JhZ2VVc2FnZSA9IHJlcy5zdG9yYWdlVXNhZ2UudG9GaXhlZCgyKTtcbiAgICAgICAgcmVzLnN0b3JhZ2VUb3RhbCA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpO1xuICAgICAgICByZXMuc3RvcmFnZVRvdGFsID0gcmVzLnN0b3JhZ2VUb3RhbCAvIDEwMDAwMDA7XG4gICAgICAgIHJlcy5zdG9yYWdlVG90YWwgPSByZXMuc3RvcmFnZVRvdGFsLnRvRml4ZWQoMik7XG4gICAgICAgIHJlcy5wZXJjZW50YWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIik7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LFxuICAgICAgZ2V0U1NJRDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJzc2lkPSguKilcIikpO1xuICAgICAgICB2YXIgU1NJRCA9IG1hdGNoWzFdO1xuICAgICAgICBTU0lEID0gZGVjb2RlVVJJQ29tcG9uZW50KFNTSUQucmVwbGFjZSgvLi4vZywgXCIlJCZcIikpO1xuICAgICAgICByZXR1cm4gU1NJRDtcbiAgICAgIH0sXG4gICAgICBzZXRTU0lEOiBmdW5jdGlvbiAobmV3U1NJRCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICBjb25zdCBlbmNvZGVkTmV3U1NJRCA9IG5ldyBCdWZmZXIobmV3U1NJRCkudG9TdHJpbmcoXCJoZXhcIik7IC8vIENvbnZlcnQgaW50byBIZXhcbiAgICAgICAgdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwic3NpZD0oLiopXCIpKVsxXSxcbiAgICAgICAgICBlbmNvZGVkTmV3U1NJRCxcbiAgICAgICAgKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCBcInV0Zi04XCIpO1xuICAgICAgfSxcbiAgICAgIGdldFdpZmlQYXNzd29yZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJwYXNzd29yZD0oLiopXCIpKTtcbiAgICAgICAgdmFyIHBhc3N3b3JkID0gbWF0Y2hbMV07XG4gICAgICAgIHJldHVybiBwYXNzd29yZDtcbiAgICAgIH0sXG4gICAgICBzZXRXaWZpUGFzc3dvcmQ6IGZ1bmN0aW9uIChuZXdQYXNzd29yZCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJwYXNzd29yZD0oLiopXCIpKVsxXSxcbiAgICAgICAgICBuZXdQYXNzd29yZCxcbiAgICAgICAgKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCBcInV0Zi04XCIpO1xuICAgICAgfSxcbiAgICAgIGdldFdpZmlDaGFubmVsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcImNoYW5uZWw9KC4qKVwiKSk7XG4gICAgICAgIHZhciBjaGFubmVsID0gbWF0Y2hbMV07XG4gICAgICAgIHJldHVybiBjaGFubmVsO1xuICAgICAgfSxcbiAgICAgIHNldFdpZmlDaGFubmVsOiBmdW5jdGlvbiAobmV3Q2hhbm5lbCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJjaGFubmVsPSguKilcIikpWzFdLFxuICAgICAgICAgIG5ld0NoYW5uZWwsXG4gICAgICAgICk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgXCJ1dGYtOFwiKTtcbiAgICAgIH0sXG4gICAgICBnZXRXaWZpQmFuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJiYW5kPSguKilcIikpO1xuXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBSZXR1cm4gZGVmYXVsdCB2YWx1ZSBpZiB0aGUgYmFuZCBzZXR0aW5nIGRvZXMgbm90IGV4aXN0XG4gICAgICAgICAgcmV0dXJuIFwiMi40R0h6XCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXRXaWZpQmFuZDogZnVuY3Rpb24gKG5ld0JhbmQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIGJhbmRSZWdleCA9IG5ldyBSZWdFeHAoXCJiYW5kPSguKilcIik7XG4gICAgICAgIHZhciBjaGFubmVsUmVnZXggPSBuZXcgUmVnRXhwKFwiY2hhbm5lbD0oLiopXCIpO1xuICAgICAgICB2YXIgbWF0Y2hCYW5kID0gZGF0YS5tYXRjaChiYW5kUmVnZXgpO1xuICAgICAgICB2YXIgbWF0Y2hDaGFubmVsID0gZGF0YS5tYXRjaChjaGFubmVsUmVnZXgpO1xuXG4gICAgICAgIHZhciBuZXdEYXRhID0gZGF0YTtcblxuICAgICAgICBpZiAobWF0Y2hCYW5kKSB7XG4gICAgICAgICAgLy8gUmVwbGFjZSB0aGUgZXhpc3RpbmcgYmFuZCBzZXR0aW5nXG4gICAgICAgICAgbmV3RGF0YSA9IG5ld0RhdGEucmVwbGFjZShiYW5kUmVnZXgsIGBiYW5kPSR7bmV3QmFuZH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBiYW5kIHNldHRpbmdcbiAgICAgICAgICBuZXdEYXRhID0gYCR7bmV3RGF0YS50cmltKCl9XFxuYmFuZD0ke25ld0JhbmR9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaENoYW5uZWwgJiYgbWF0Y2hDaGFubmVsWzFdKSB7XG4gICAgICAgICAgLy8gQ29udmVydCB0aGUgY2hhbm5lbCB2YWx1ZSB0byBhIG51bWJlclxuICAgICAgICAgIHZhciBjdXJyZW50Q2hhbm5lbCA9IHBhcnNlSW50KG1hdGNoQ2hhbm5lbFsxXSwgMTApO1xuXG4gICAgICAgICAgLy8gU2V0IGNoYW5uZWwgdG8gYSBkZWZhdWx0IDIuNEdIeiBjaGFubmVsIGlmIGN1cnJlbnQgY2hhbm5lbCBpcyBmb3IgNUdIelxuICAgICAgICAgIGlmIChuZXdCYW5kID09IFwiMi40R0h6XCIgJiYgY3VycmVudENoYW5uZWwgPiAxNCkge1xuICAgICAgICAgICAgbmV3RGF0YSA9IG5ld0RhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTExYCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChuZXdCYW5kID09IFwiNUdIelwiICYmIGN1cnJlbnRDaGFubmVsIDw9IDE0KSB7XG4gICAgICAgICAgICBuZXdEYXRhID0gbmV3RGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9NDRgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsIFwidXRmLThcIik7XG4gICAgICB9LCAvLyAgICdzZXRXaWZpQmFuZCc6IGZ1bmN0aW9uKG5ld0JhbmQpIHtcbiAgICAgIC8vIFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gICAgICAvLyBcdHZhciBiYW5kUmVnZXggPSBuZXcgUmVnRXhwKCdiYW5kPSguKiknKTtcbiAgICAgIC8vIFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChiYW5kUmVnZXgpO1xuXG4gICAgICAvLyBcdGlmIChtYXRjaCkge1xuICAgICAgLy8gXHQgIC8vIFJlcGxhY2UgdGhlIGV4aXN0aW5nIGJhbmQgc2V0dGluZ1xuICAgICAgLy8gXHQgIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGJhbmRSZWdleCwgYGJhbmQ9JHtuZXdCYW5kfWApO1xuICAgICAgLy8gXHR9IGVsc2Uge1xuICAgICAgLy8gXHQgIC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuICAgICAgLy8gXHQgIHZhciBuZXdEYXRhID0gYCR7ZGF0YS50cmltKCl9XFxuYmFuZD0ke25ld0JhbmR9YDtcbiAgICAgIC8vIFx0fVxuICAgICAgLy8gXHR2YXIgY2hhbm5lbFJlZ2V4ID0gbmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJyk7XG4gICAgICAvLyBcdHZhciBtYXRjaDIgPSBkYXRhLm1hdGNoKGNoYW5uZWxSZWdleCk7XG4gICAgICAvLyBcdGlmIChtYXRjaDIgJiYgbWF0Y2gyWzFdKSB7XG4gICAgICAvLyBcdFx0Ly8gU2V0IGNoYW5uZWwgdG8gYSBkZWZhdWx0IDIuNEdIeiBjaGFubmVsIGlmIGN1cnJlbnQgY2hhbm5lbCBpcyBmb3IgNUdIelxuICAgICAgLy8gXHRcdGlmIChuZXdCYW5kID09IFwiMi40R0h6XCIgJiYgbWF0Y2gyWzFdID4gMTQpIHtcbiAgICAgIC8vIFx0XHRcdC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuICAgICAgLy8gXHRcdFx0dmFyIG5ld0RhdGEyID0gZGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9MTFgKTtcbiAgICAgIC8vIFx0XHR9IGVsc2UgaWYgKG5ld0JhbmQgPT0gXCI1R0h6XCIgJiYgbWF0Y2gyWzFdIDw9IDE0KSB7XG4gICAgICAvLyBcdFx0XHR2YXIgbmV3RGF0YTIgPSBkYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD00NGApO1xuICAgICAgLy8gXHRcdH1cbiAgICAgIC8vIFx0fVxuICAgICAgLy8gXHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuICAgICAgLy8gICB9LFxuICAgICAgZ2V0U2VyaWFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcIlNFUklBTD0oLiopXCIpKTtcbiAgICAgICAgdmFyIHNlcmlhbCA9IG1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gc2VyaWFsO1xuICAgICAgfSxcbiAgICAgIGdldE9wZXJhdG9yTmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3BlcmF0b3JOYW1lO1xuICAgICAgICBvcGVyYXRvck5hbWUgPSBjbWQoXG4gICAgICAgICAgXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1vcGVyYXRvci1uYW1lIHwgZ3JlcCAtbTIgJ05hbWUgICAgICAgICAgICAgJyB8IGF3ayAne3ByaW50ICQzfSdcIixcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG9wZXJhdG9yTmFtZTtcbiAgICAgIH0sIC8vICdnZXRTaWduYWxTdHJlbmd0aCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFx0dmFyIHNpZ25hbFN0cmVuZ3RoO1xuICAgICAgLy8gXHRzaWduYWxTdHJlbmd0aCA9IGNtZChcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgLW0xIE5ldHdvcmsgfCBhd2sgJ3twcmludCAkMywgJDJ9J1wiKTtcbiAgICAgIC8vIFx0cmV0dXJuIHNpZ25hbFN0cmVuZ3RoO1xuICAgICAgLy8gfSxcbiAgICAgIGdldFNpZ25hbFN0cmVuZ3RoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzaWduYWxTdHJlbmd0aDtcbiAgICAgICAgLy8gVGhpcyBleHRyYWN0cyBqdXN0IHRoZSBudW1lcmljIHBhcnQgb2YgdGhlIHNpZ25hbCBzdHJlbmd0aC5cbiAgICAgICAgc2lnbmFsU3RyZW5ndGggPSBjbWQoXG4gICAgICAgICAgXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwICdOZXR3b3JrJyB8IGF3ayAne3ByaW50ICQzfScgfCBncmVwIC1vRSAnWy0wLTldKydcIixcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBDb252ZXJ0IHNpZ25hbCBzdHJlbmd0aCB0byBhIHF1YWxpdGF0aXZlIHZhbHVlXG4gICAgICAgIHZhciBzdHJlbmd0aFZhbHVlID0gcGFyc2VJbnQoc2lnbmFsU3RyZW5ndGgpO1xuICAgICAgICB2YXIgcXVhbGl0eSA9IFwiVW5rbm93blwiO1xuICAgICAgICBpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtNzApIHtcbiAgICAgICAgICBxdWFsaXR5ID0gXCJFeGNlbGxlbnRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlID49IC04NSkge1xuICAgICAgICAgIHF1YWxpdHkgPSBcIkdvb2RcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlID49IC0xMDApIHtcbiAgICAgICAgICBxdWFsaXR5ID0gXCJGYWlyXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA8IC0xMDApIHtcbiAgICAgICAgICBxdWFsaXR5ID0gXCJQb29yXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1YWxpdHk7XG4gICAgICB9LCAvLyAnZ2V0SXNPbmxpbmUnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBcdHZhciBpc09ubGluZTtcbiAgICAgIC8vIFx0aXNPbmxpbmUgPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrICd7cHJpbnQgJDMsICQyfSdcIik7XG4gICAgICAvLyBcdHJldHVybiBpc09ubGluZTtcbiAgICAgIC8vIH0sXG4gICAgICAvLyAnZ2V0QmFuZCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFx0dmFyIGJhbmQ7XG4gICAgICAvL1x0XHRcdGJhbmQgPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrIFxcXCJ7cHJpbnQgJDJ9XFxcIiB8IGN1dCAtZFxcXFwnIC1mMlwiKTtcbiAgICAgIC8vIFx0cmV0dXJuIGJhbmQ7XG4gICAgICAvLyB9LFxuICAgICAgZ2V0QVBOOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcIkFQTj0oLiopXCIpKTtcbiAgICAgICAgdmFyIEFQTiA9IG1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gQVBOO1xuICAgICAgfSxcbiAgICAgIGdldEFQTlVzZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiQVBOX1VTRVJOQU1FPSguKilcIikpO1xuICAgICAgICB2YXIgQVBOVXNlciA9IG1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gQVBOVXNlcjtcbiAgICAgIH0sXG4gICAgICBnZXRBUE5QYXNzd29yZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJBUE5fUEFTU1dPUkQ9KC4qKVwiKSk7XG4gICAgICAgIHZhciBBUE5QYXNzd29yZCA9IG1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gQVBOUGFzc3dvcmQ7XG4gICAgICB9LFxuICAgICAgZ2V0U2ltQ2FyZFN0YXR1czogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgc2ltU3RhdHVzUmVzdWx0ID0gXCJVbmtub3duXCI7IC8vIERlZmF1bHQgc3RhdHVzXG5cbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gZXhlY3V0ZSBjb21tYW5kIGFuZCBoYW5kbGUgZXJyb3JzXG4gICAgICAgIGZ1bmN0aW9uIGV4ZWN1dGVDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjbWQoY29tbWFuZCk7IC8vIEV4ZWN1dGUgdGhlIGNvbW1hbmRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcIm9iamVjdFwiICYmIHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAvLyBDaGVjayBpZiByZXN1bHQgaXMgYW4gZXJyb3Igb2JqZWN0XG4gICAgICAgICAgICAgIHJldHVybiBcIkVycm9yXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBleGNlcHRpb25zIGlmIGNvbW1hbmQgZXhlY3V0aW9uIGZhaWxzXG4gICAgICAgICAgICByZXR1cm4gXCJFcnJvclwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0OyAvLyBSZXR1cm4gdGhlIHJlc3VsdCBpZiBubyBlcnJvcnNcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4ZWN1dGUgU0lNIGNhcmQgc3RhdHVzIGNoZWNrIGNvbW1hbmRcbiAgICAgICAgbGV0IHNpbVN0YXR1cyA9IGV4ZWN1dGVDb21tYW5kKFxuICAgICAgICAgIFwic3VkbyBxbWljbGkgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLXVpbS1nZXQtY2FyZC1zdGF0dXMgfCBncmVwICdDYXJkIHN0YXRlOidcIixcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTSU0gY2FyZCBzdGF0dXM6XCIsIHNpbVN0YXR1cyk7IC8vIExvZyB0aGUgcmF3IG91dHB1dFxuICAgICAgICAvLyBQcm9jZXNzIHRoZSBvdXRwdXQgYW5kIGRldGVybWluZSBTSU0gY2FyZCBzdGF0dXNcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHNpbVN0YXR1cy5pbmNsdWRlcyhcIm5vLWF0ci1yZWNlaXZlZFwiKSB8fFxuICAgICAgICAgIHNpbVN0YXR1cy5pbmNsdWRlcyhcIm5vdC1pbnNlcnRlZFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICBzaW1TdGF0dXNSZXN1bHQgPSBcIk5vIFNJTSBjYXJkXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKFwiZXJyb3JcIikpIHtcbiAgICAgICAgICBzaW1TdGF0dXNSZXN1bHQgPSBzaW1TdGF0dXM7IC8vIFVzZSB0aGUgZXJyb3IgbWVzc2FnZSBvciBubyBTSU0gZGV0ZWN0ZWQgbWVzc2FnZVxuICAgICAgICB9IGVsc2UgaWYgKHNpbVN0YXR1cy5pbmNsdWRlcyhcInByZXNlbnRcIikpIHtcbiAgICAgICAgICBzaW1TdGF0dXNSZXN1bHQgPSBcIk9LXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgc2ltU3RhdHVzLmluY2x1ZGVzKFwibG9ja2VkXCIpIHx8XG4gICAgICAgICAgc2ltU3RhdHVzLmluY2x1ZGVzKFwicGluLXJlcXVpcmVkXCIpXG4gICAgICAgICkge1xuICAgICAgICAgIHNpbVN0YXR1c1Jlc3VsdCA9IFwiU0lNIGNhcmQgbG9ja2VkLCBQSU4gcmVxdWlyZWRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaW1TdGF0dXNSZXN1bHQgPSBcIlVua25vd25cIjsgLy8gRm9yIG90aGVyIHN0YXR1c2VzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpbVN0YXR1c1Jlc3VsdDtcbiAgICAgIH0sXG4gICAgICBnZXRTaW1QaW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiU0lNX1BJTj0oLiopXCIpKTtcbiAgICAgICAgdmFyIFNpbVBpbiA9IG1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gU2ltUGluO1xuICAgICAgfSxcbiAgICAgIHNldFNpbVBpbjogZnVuY3Rpb24gKFBJTikge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJTSU1fUElOPS4qXCIpKSxcbiAgICAgICAgICBcIlNJTV9QSU49XCIgKyBQSU4sXG4gICAgICAgICk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgXCJ1dGYtOFwiKTtcbiAgICAgIH0sXG4gICAgICBzZXRBUE46IGZ1bmN0aW9uIChBUE4sIHVzZXIsIHBhc3N3b3JkKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgIGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcIkFQTj0uKlwiKSksXG4gICAgICAgICAgXCJBUE49XCIgKyBBUE4sXG4gICAgICAgICk7XG4gICAgICAgIC8vIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOPSguKiknKSlbMV0sIEFQTik7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgXCJ1dGYtOFwiKTtcbiAgICAgIH0sXG4gICAgICBzZXRBUE5Vc2VyOiBmdW5jdGlvbiAoQVBOVXNlcikge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJBUE5fVVNFUk5BTUU9LipcIikpLFxuICAgICAgICAgIFwiQVBOX1VTRVJOQU1FPVwiICsgQVBOVXNlcixcbiAgICAgICAgKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCBcInV0Zi04XCIpO1xuICAgICAgfSxcbiAgICAgIHNldEFQTlBhc3N3b3JkOiBmdW5jdGlvbiAoQVBOUGFzc3dvcmQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiQVBOX1BBU1NXT1JEPS4qXCIpKSxcbiAgICAgICAgICBcIkFQTl9QQVNTV09SRD1cIiArIEFQTlBhc3N3b3JkLFxuICAgICAgICApO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsIFwidXRmLThcIik7XG4gICAgICB9LFxuICAgICAgZ2V0UmVtb3RlU3RhdHVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHJlcyA9IGNtZChcbiAgICAgICAgICBcInN5c3RlbWN0bCBpcy1hY3RpdmUgcmVtb3RlLWlvdC5zZXJ2aWNlID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIDEgfHwgZWNobyAwXCIsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChyZXNbMF0gPT0gXCIxXCIpIHtcbiAgICAgICAgICAvLyBbMF0gaXMgYSBoYWNrIGJlY2F1c2UgdGhlIHJlc3VsdCByZXMgaGFzIG9uZSBleHRyYSBjaGFyYWN0ZXJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBnZXRBdXRvU3luY1N0YXR1czogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXG4gICAgICAgICAgXCJzeXN0ZW1jdGwgaXMtYWN0aXZlIGF1dG9zeW5jLnNlcnZpY2UgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gMSB8fCBlY2hvIDBcIixcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJlc1swXSA9PSBcIjFcIikge1xuICAgICAgICAgIC8vIFswXSBpcyBhIGhhY2sgYmVjYXVzZSB0aGUgcmVzdWx0IHJlcyBoYXMgb25lIGV4dHJhIGNoYXJhY3RlclxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGdldFNoYXJlSW50ZXJuZXRWaWFFdGhlcm5ldFN0YXR1czogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNTaGFyaW5nO1xuICAgICAgICBpc1NoYXJpbmcgPSBjbWQoXG4gICAgICAgICAgXCIoc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUwgUE9TVFJPVVRJTkcgLXYgLW4gfCBncmVwIC1xICdNQVNRVUVSQURFICBhbGwgIC0tICAqICAgICAgZXRoMCcgJiYgaXAgbGluayBzaG93IGV0aDAgfCBncmVwIC1xICdzdGF0ZSBVUCcpICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBpc1NoYXJpbmc7XG4gICAgICB9LFxuICAgICAgZ2V0U2hhcmVJbnRlcm5ldFZpYU1vYmlsZVN0YXR1czogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNTaGFyaW5nO1xuICAgICAgICBpc1NoYXJpbmcgPSBjbWQoXG4gICAgICAgICAgXCIoc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUwgUE9TVFJPVVRJTkcgLXYgLW4gfCBncmVwIC1xICdNQVNRVUVSQURFICBhbGwgIC0tICAqICAgICAgd3dhbjAnICYmIGlwIGxpbmsgc2hvdyB3d2FuMCB8IGdyZXAgLXEgJ3N0YXRlIFVQJykgJiYgZWNobyB0cnVlIHx8IGVjaG8gZmFsc2VcIixcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGlzU2hhcmluZztcbiAgICAgIH0sIC8vICdhY3RpdmF0ZUludGVybmV0U2hhcmluZyc6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gXHR2YXIgcmVzO1xuICAgICAgLy8gXHRyZXMgPSBjbWQoXCJzdWRvIHdpZmktYXAuY29uZmlnIHNldCBzaGFyZS5kaXNhYmxlZD1mYWxzZVwiKTtcbiAgICAgIC8vIFx0cmV0dXJuIHJlcztcbiAgICAgIC8vIH0sXG4gICAgICAvLyAnZGlzYWN0aXZhdGVJbnRlcm5ldFNoYXJpbmcnOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFx0dmFyIHJlcztcbiAgICAgIC8vIFx0cmVzID0gY21kKFwic3VkbyB3aWZpLWFwLmNvbmZpZyBzZXQgc2hhcmUuZGlzYWJsZWQ9dHJ1ZVwiKTtcbiAgICAgIC8vIFx0cmV0dXJuIHJlcztcbiAgICAgIC8vIH0sXG4gICAgICBhY3RpdmF0ZVJlbW90ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdGFydCByZW1vdGUtaW90LnNlcnZpY2VcIik7XG4gICAgICAgIHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSxcbiAgICAgIGRpc2FjdGl2YXRlUmVtb3RlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuICAgICAgICByZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZGlzYWJsZSByZW1vdGUtaW90LnNlcnZpY2VcIik7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LFxuICAgICAgYWN0aXZhdGVBdXRvU3luYzogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdGFydCBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuICAgICAgICByZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZW5hYmxlIGF1dG9zeW5jLnNlcnZpY2VcIik7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LFxuICAgICAgZGlzYWN0aXZhdGVBdXRvU3luYzogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdG9wIGF1dG9zeW5jLnNlcnZpY2VcIik7XG4gICAgICAgIHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBkaXNhYmxlIGF1dG9zeW5jLnNlcnZpY2VcIik7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LFxuICAgICAgZ2V0QmF0dGVyeVN0YXR1czogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICB2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGg7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcIkJBVFRFUllfTU9EVUxFPSguKilcIikpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB2YXIgYmF0dGVyeU1vZHVsZSA9IG1hdGNoWzFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiYXR0ZXJ5TW9kdWxlICYmIGJhdHRlcnlNb2R1bGUgPT0gXCJQaVN1Z2FyXCIpIHtcbiAgICAgICAgICByZXMgPSBjbWQoXCJweXRob24zIFwiICsgc2NyaXB0c1BhdGggKyBcIi9waXN1Z2FyX3N0YXR1cy5weVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMgPSBjbWQoXCJweXRob24zIFwiICsgc2NyaXB0c1BhdGggKyBcIi9waWp1aWNlX3N0YXR1cy5weVwiKTtcbiAgICAgICAgICAvL3JlcyA9IGNtZChcInB5dGhvbjMgL2hvbWUvdWJ1bnR1L3NjcmlwdHMvcGlqdWljZV9zdGF0dXMucHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0sIC8vICdnZXRJc09ubGluZSc6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gXHR2YXIgcmVzO1xuICAgICAgLy8gXHR2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGg7XG4gICAgICAvLyBcdC8vIE1ha2Ugc3VyZSB5b3VyIHNjcmlwdCBpcyBleGVjdXRhYmxlLCBlLmcuLCBjaG1vZCAreCBjaGVja19pbnRlcm5ldC5zaFxuICAgICAgLy8gXHRyZXMgPSBjbWQoXCJiYXNoIFwiICsgc2NyaXB0c1BhdGggKyBcIi9jaGVja19pbnRlcm5ldC5zaFwiKTsgLy8gUmVwbGFjZSAnYmFzaCcgd2l0aCAnc2gnIGlmIG5lZWRlZFxuICAgICAgLy8gXHQvLyBUaGUgc2NyaXB0IHJldHVybnMgXCJ0cnVlXCIgb3IgXCJmYWxzZVwiIGFzIGEgc3RyaW5nLCBzbyB3ZSBjb21wYXJlIHRoZSByZXN1bHQgZGlyZWN0bHlcbiAgICAgIC8vIFx0cmV0dXJuIHJlcy50cmltKCkgPT09IFwidHJ1ZVwiOyAvLyBUaGlzIGNvbnZlcnRzIHRoZSBzdHJpbmcgdG8gYSBib29sZWFuXG4gICAgICAvLyB9LFxuICAgICAgZ2V0SXNPbmxpbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHJlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXMgPSBjbWQoXCJwaW5nIC1jIDEgZ29vZ2xlLmNvbVwiKTtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgcGluZyBjb21tYW5kIHdhcyBzdWNjZXNzZnVsIGJhc2VkIG9uIHRoZSBvdXRwdXRcbiAgICAgICAgICBsZXQgaXNPbmxpbmUgPVxuICAgICAgICAgICAgcmVzLmluY2x1ZGVzKFwiMSBwYWNrZXRzIHJlY2VpdmVkXCIpIHx8IHJlcy5pbmNsdWRlcyhcIjEgcmVjZWl2ZWRcIik7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJPbmxpbmUgc3RhdHVzOlwiLCBpc09ubGluZSk7IC8vIENvcnJlY3RseSBsb2dnaW5nIHRoZSBib29sZWFuIHJlc3VsdFxuICAgICAgICAgIHJldHVybiBpc09ubGluZTsgLy8gRGlyZWN0bHkgcmV0dXJuIHRoZSBib29sZWFuIHZhbHVlXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXJyb3Igb2NjdXJzICh3aGljaCBjb3VsZCBpbmNsdWRlIGJlaW5nIHVuYWJsZSB0byBydW4gdGhlIHBpbmcgY29tbWFuZCksIGFzc3VtZSBvZmZsaW5lXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBvciBvZmZsaW5lOlwiLCBlcnJvcik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBBc3N1bWUgb2ZmbGluZSBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXRFdGgwSVA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gR2V0IElQIG9mIGJveFxuICAgICAgICB2YXIgcmVzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVzdWx0IDogXCIrXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcbiAgICAgICAgcmVzID0gY21kKFxuICAgICAgICAgIFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIsXG4gICAgICAgICk7XG4gICAgICAgIC8vcmVzID0gY21kKFwiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImlwIDogXCIrXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuICAgICAgICAvL3JlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG4gICAgICAgIC8vcmVzID0gY21kKFwiaWZjb25maWcgXCIraW50ZXJmYWNlK1wiIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0sXG4gICAgICBnZXRXd2FuMElQOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEdldCBJUCBvZiBib3hcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlc3VsdCA6IFwiK1wiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG4gICAgICAgIHJlcyA9IGNtZChcbiAgICAgICAgICBcImlwIGFkZHIgc2hvdyB3d2FuMCB8IGdyZXAgXFxcImluZXRcXFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIixcbiAgICAgICAgKTtcblxuICAgICAgICAvL3JlcyA9IGNtZChcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpcCA6IFwiK1wiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcbiAgICAgICAgLy9yZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuICAgICAgICAvL3JlcyA9IGNtZChcImlmY29uZmlnIFwiK2ludGVyZmFjZStcIiAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LFxuXG4gICAgICBnZXRCZWVrZWVPc1ZlcnNpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiQkVFS0VFX09TX1ZFUlNJT049KC4qKVwiKSk7XG4gICAgICAgIHZhciBzZXJpYWwgPSBtYXRjaFsxXTtcbiAgICAgICAgcmV0dXJuIHNlcmlhbDtcbiAgICAgIH0sXG4gICAgICBnZXRCZWVrZWVIb21lVmVyc2lvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBqc29uID0gSlNPTi5wYXJzZShBc3NldHMuZ2V0VGV4dChcInZlcnNpb24uanNvblwiKSk7XG4gICAgICAgIHJldHVybiBqc29uLnZlcnNpb247XG4gICAgICB9LFxuICAgICAgcmVzdGFydE1vYmlsZUNvbm5lY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgcmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgcmVzdGFydCBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlXCIpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAoXCJcIik7XG4gICAgICB9LFxuICAgICAgZ2V0SW50ZXJuZXRJbnRlcmZhY2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHJlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXMgPSBjbWQoXCJpcCByb3V0ZSBnZXQgMS4yLjMuNCB8IGF3ayAne3ByaW50ICQ1OyBleGl0fSdcIik7IC8vIEV4ZWN1dGUgdGhlIGNvbW1hbmRcbiAgICAgICAgICBpZiAocmVzLnRyaW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy50cmltKCk7IC8vIFJldHVybiB0aGUgY2xlYW5lZC11cCByZXN1bHQgaWYgbm90IGVtcHR5XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIlVua25vd25cIjsgLy8gUmV0dXJuIGEgZGVmYXVsdCBtZXNzYWdlIGlmIHRoZSByZXN1bHQgaXMgZW1wdHlcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gSGFuZGxlIGNhc2VzIHdoZXJlIHRoZSBjb21tYW5kIGZhaWxzIG9yIGlzIG5vdCBmb3VuZFxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBpbnRlcm5ldCBpbnRlcmZhY2U6XCIsIGVycm9yKTtcbiAgICAgICAgICByZXR1cm4gXCJFcnJvclwiOyAvLyBSZXR1cm4gYW4gZXJyb3IgbWVzc2FnZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0d2xhbnVzYjogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBSZXR1cm4gdHJ1ZSBpZiB0aGUgd2xhbnVzYiBpbnRlcmZhY2UgZXhpc3RzIG9uIHRoZSBtYWNoaW5lLiBNYWtlIHN1cmUgdG8gcmV0dXJuIGEgYm9vbGVhbiB2YWx1ZS5cbiAgICAgICAgbGV0IHJlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXMgPSBjbWQoXCJpcCBsaW5rIHNob3cgd2xhbnVzYlwiKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXRXTEFOVVNCOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCByZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gY21kKFwiaXAgbGluayBzaG93IHdsYW51c2JcIik7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0V2lmaUNsaWVudE1vZGVFbmFibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRXaWZpQ2xpZW50TW9kZVN0YXRlKCk7XG4gICAgICB9LFxuICAgICAgZW5hYmxlV2lmaUNsaWVudE1vZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBydW5XaWZpTW9kZVNjcmlwdChcIm5vcm1hbF90b19jbGllbnQuc2hcIik7XG5cbiAgICAgICAgICBpZiAoIWdldFdpZmlDbGllbnRNb2RlU3RhdGUoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2ktRmkgY2xpZW50IG1vZGUgZGlkIG5vdCBzdGF5IGVuYWJsZWQuXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW5hYmxpbmcgV2ktRmkgY2xpZW50IG1vZGU6XCIsIGVycm9yKTtcbiAgICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuICAgICAgICAgICAgXCJ3aWZpLWNsaWVudC1tb2RlLWVuYWJsZS1mYWlsZWRcIixcbiAgICAgICAgICAgIGVycm9yLnJlYXNvbiB8fCBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGVuYWJsZSBXaS1GaSBjbGllbnQgbW9kZS5cIixcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzYWJsZVdpZmlDbGllbnRNb2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcnVuV2lmaU1vZGVTY3JpcHQoXCJjbGllbnRfdG9fbm9ybWFsLnNoXCIpO1xuXG4gICAgICAgICAgaWYgKGdldFdpZmlDbGllbnRNb2RlU3RhdGUoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2ktRmkgY2xpZW50IG1vZGUgZGlkIG5vdCBzd2l0Y2ggYmFjayB0byBBUCBtb2RlLlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGRpc2FibGluZyBXaS1GaSBjbGllbnQgbW9kZTpcIiwgZXJyb3IpO1xuICAgICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG4gICAgICAgICAgICBcIndpZmktY2xpZW50LW1vZGUtZGlzYWJsZS1mYWlsZWRcIixcbiAgICAgICAgICAgIGVycm9yLnJlYXNvbiB8fFxuICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlIHx8XG4gICAgICAgICAgICAgIFwiRmFpbGVkIHRvIGRpc2FibGUgV2ktRmkgY2xpZW50IG1vZGUuXCIsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldFdpZmlOZXR3b3JrczogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICBlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblxuICAgICAgICB2YXIgd2lmaSA9IHJlcXVpcmUoXCJub2RlLXdpZmlcIik7XG4gICAgICAgIHdpZmkuaW5pdCh7XG4gICAgICAgICAgaWZhY2U6IFwid2xhbnVzYlwiLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIHdpZmkgc2NhblwiKTtcbiAgICAgICAgICB3aWZpLnNjYW4oKGVycm9yLCBuZXR3b3JrcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzY2FubmluZyBuZXR3b3JrczpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2lmaSBzY2FuIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHlcIik7XG5cbiAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgTWFwIHRvIHN0b3JlIHVuaXF1ZSBuZXR3b3Jrc1xuICAgICAgICAgICAgICBjb25zdCB1bmlxdWVOZXR3b3JrcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAgICAgICBuZXR3b3Jrcy5mb3JFYWNoKChuZXR3b3JrKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHN0cmVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChuZXR3b3JrLnF1YWxpdHkgPiA4MCkge1xuICAgICAgICAgICAgICAgICAgc3RyZW5ndGggPSBcIndpZmktNFwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV0d29yay5xdWFsaXR5ID4gNTUpIHtcbiAgICAgICAgICAgICAgICAgIHN0cmVuZ3RoID0gXCJ3aWZpLTNcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ldHdvcmsucXVhbGl0eSA+IDMwKSB7XG4gICAgICAgICAgICAgICAgICBzdHJlbmd0aCA9IFwid2lmaS0yXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHN0cmVuZ3RoID0gXCJ3aWZpLTFcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSB1bmlxdWUga2V5IHVzaW5nIFNTSUQgYW5kIGZpcnN0IDE1IGNoYXJzIG9mIE1BQ1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGAke25ldHdvcmsuc3NpZH06JHtuZXR3b3JrLm1hYy5zdWJzdHJpbmcoMCwgMTUpfWA7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGtleSBkb2Vzbid0IGV4aXN0IG9yIHRoZSBxdWFsaXR5IGlzIGhpZ2hlciwgYWRkL3VwZGF0ZSB0aGUgbmV0d29ya1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICF1bmlxdWVOZXR3b3Jrcy5oYXMoa2V5KSB8fFxuICAgICAgICAgICAgICAgICAgbmV0d29yay5xdWFsaXR5ID4gdW5pcXVlTmV0d29ya3MuZ2V0KGtleSkucXVhbGl0eVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgdW5pcXVlTmV0d29ya3Muc2V0KGtleSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuZXR3b3JrLnNzaWQsXG4gICAgICAgICAgICAgICAgICAgIHN0cmVuZ3RoOiBzdHJlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHk6IG5ldHdvcmsuc2VjdXJpdHksXG4gICAgICAgICAgICAgICAgICAgIHF1YWxpdHk6IG5ldHdvcmsucXVhbGl0eSwgLy8gS2VlcCB0aGlzIGZvciBjb21wYXJpc29uXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIC8vIENvbnZlcnQgTWFwIHZhbHVlcyB0byBhcnJheVxuICAgICAgICAgICAgICBjb25zdCB1bmlxdWVOZXR3b3Jrc0FycmF5ID0gQXJyYXkuZnJvbSh1bmlxdWVOZXR3b3Jrcy52YWx1ZXMoKSk7XG5cbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBxdWFsaXR5IHByb3BlcnR5IGFzIGl0J3Mgbm8gbG9uZ2VyIG5lZWRlZCBpbiB0aGUgZmluYWwgb3V0cHV0XG4gICAgICAgICAgICAgIHVuaXF1ZU5ldHdvcmtzQXJyYXkuZm9yRWFjaCgobmV0d29yaykgPT4gZGVsZXRlIG5ldHdvcmsucXVhbGl0eSk7XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZSh1bmlxdWVOZXR3b3Jrc0FycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgY29ubmVjdFRvV2lmaTogZnVuY3Rpb24gKHNzaWQsIHBhc3N3b3JkKSB7XG4gICAgICAgIGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXG4gICAgICAgIHZhciB3aWZpID0gcmVxdWlyZShcIm5vZGUtd2lmaVwiKTtcbiAgICAgICAgd2lmaS5pbml0KHtcbiAgICAgICAgICBpZmFjZTogXCJ3bGFudXNiXCIsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBSZXR1cm4gYm9vbGVhbnMsIFRydWUgaWYgdGhlIGNvbm5lY3Rpb24gaXMgc3VjY2Vzc2Z1bCwgb3RoZXJ3aXNlIHJldHVybiBGYWxzZVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHdpZmkuY29ubmVjdCh7IHNzaWQ6IHNzaWQsIHBhc3N3b3JkOiBwYXNzd29yZCB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byB3aWZpOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gd2lmaTpcIiwgc3NpZCk7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGRpc2Nvbm5lY3RXaWZpOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXG4gICAgICAgIHZhciB3aWZpID0gcmVxdWlyZShcIm5vZGUtd2lmaVwiKTtcbiAgICAgICAgd2lmaS5pbml0KHtcbiAgICAgICAgICBpZmFjZTogXCJ3bGFudXNiXCIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHdpZmkuZGlzY29ubmVjdCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGlzY29ubmVjdGluZyBmcm9tIHdpZmk6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpc2Nvbm5lY3RlZCBmcm9tIHdpZmlcIik7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGZvcmdldFdpZmk6IGZ1bmN0aW9uIChzc2lkKSB7XG4gICAgICAgIGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpO1xuXG4gICAgICAgIHZhciB3aWZpID0gcmVxdWlyZShcIm5vZGUtd2lmaVwiKTtcbiAgICAgICAgd2lmaS5pbml0KHtcbiAgICAgICAgICBpZmFjZTogXCJ3bGFudXNiXCIsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBSZXR1cm4gYm9vbGVhbnMsIFRydWUgaWYgdGhlIGNvbm5lY3Rpb24gaXMgc3VjY2Vzc2Z1bCwgb3RoZXJ3aXNlIHJldHVybiBGYWxzZVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHdpZmkuZGVsZXRlQ29ubmVjdGlvbih7IHNzaWQ6IHNzaWQgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gd2lmaTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIHdpZmk6XCIsIHNzaWQpO1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBnZXRDbGllbnRTU0lEOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzc2lkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHNzaWQgPSBjbWQoXCJpd2dldGlkIC1yIHdsYW51c2IgMj4vZGV2L251bGwgfHwgdHJ1ZVwiKS50cmltKCk7XG5cbiAgICAgICAgICBpZiAoIXNzaWQpIHtcbiAgICAgICAgICAgIHNzaWQgPSBjbWQoXG4gICAgICAgICAgICAgIFwibm1jbGkgLWcgR0VORVJBTC5DT05ORUNUSU9OIGRldmljZSBzaG93IHdsYW51c2IgMj4vZGV2L251bGwgfCBoZWFkIC1uIDEgfHwgdHJ1ZVwiLFxuICAgICAgICAgICAgKS50cmltKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNzaWQgPT09IFwiLS1cIikge1xuICAgICAgICAgICAgc3NpZCA9IFwiXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgc3NpZCBpcyBub3QgZW1wdHkgYW5kIGlzIGEgc3RyaW5nXG4gICAgICAgICAgaWYgKHR5cGVvZiBzc2lkID09PSBcInN0cmluZ1wiICYmIHNzaWQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBzc2lkO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gXCJOb3QgY29ubmVjdGVkXCIgaWYgc3NpZCBpcyBlbXB0eSBvciBub3QgYSBzdHJpbmdcbiAgICAgICAgICAgIHJldHVybiBcIk5vdCBjb25uZWN0ZWRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gUmV0dXJuIFwiTm90IGNvbm5lY3RlZFwiIGluIGNhc2Ugb2YgYW55IGVycm9yXG4gICAgICAgICAgcmV0dXJuIFwiTm90IGNvbm5lY3RlZFwiO1xuICAgICAgICB9XG4gICAgICB9LCAvLyAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgLy8gXHQvLyBDb21tYW5kIHRvIGxpc3QgRk9SV0FSRCBydWxlc1xuICAgICAgLy8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG4gICAgICAvLyBcdGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgLy8gXHRcdGlmIChlcnJvciB8fCBzdGRlcnIpIHtcbiAgICAgIC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvciB8fCBzdGRlcnJ9YCk7XG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yIHx8IG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcbiAgICAgIC8vIFx0XHRcdHJldHVybjtcbiAgICAgIC8vIFx0XHR9XG5cbiAgICAgIC8vIFx0XHQvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG4gICAgICAvLyBcdFx0dmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gc3Rkb3V0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSBldGgwJykgJiYgc3Rkb3V0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG4gICAgICAvLyBcdFx0Y29uc29sZS5sb2coXCJpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZDogXCIraXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQpO1xuICAgICAgLy8gXHRcdC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcbiAgICAgIC8vIFx0XHR2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSBldGgwLztcbiAgICAgIC8vIFx0XHR2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cbiAgICAgIC8vIFx0XHQvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcbiAgICAgIC8vIFx0XHRpZiAoaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgJiYgIW1hdGNoKSB7XG4gICAgICAvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAxXCIpO1xuICAgICAgLy8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGxcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykge2NvbnNvbGUubG9nKFwic3RlcDEyXCIpOyBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfSk7fVxuICAgICAgLy8gXHRcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgIC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDJcIik7XG5cbiAgICAgIC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYSBzcGVjaWZpYyBNQUMgYWRkcmVzc1xuICAgICAgLy8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH0pO1xuICAgICAgLy8gXHRcdH0gZWxzZSB7XG4gICAgICAvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAzXCIpO1xuXG4gICAgICAvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGRpc2FibGVkIG9yIG5vdCBjb25maWd1cmVkIGFzIGV4cGVjdGVkXG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH0pO1xuICAgICAgLy8gXHRcdH1cbiAgICAgIC8vIFx0fSk7XG4gICAgICAvLyB9LFxuXG4gICAgICAvLyAgICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gXHRjb25zb2xlLmxvZygnU3RhcnRpbmcgdG8gZ2V0IGludGVybmV0IHNoYXJpbmcgc3RhdHVzIGZvciBFdGhlcm5ldC4uLicpO1xuICAgICAgLy8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG4gICAgICAvLyBcdC8vIFNpbmNlIGNtZCBpcyBhbHJlYWR5IHdyYXBwZWQgYnkgTWV0ZW9yLndyYXBBc3luYyhleGVjKSxcbiAgICAgIC8vIFx0Ly8gaXQgc2hvdWxkIHJldHVybiB7IHN0ZG91dCwgc3RkZXJyIH0gZGlyZWN0bHkuXG4gICAgICAvLyBcdHRyeSB7XG4gICAgICAvLyBcdCAgdmFyIHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cbiAgICAgIC8vIFx0ICBpZiAoc3RkZXJyKSB7XG4gICAgICAvLyBcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke3N0ZGVycn1gKTtcbiAgICAgIC8vIFx0XHQvLyBJdCdzIGJldHRlciB0byByZXR1cm4gYSBtZWFuaW5nZnVsIGVycm9yIHRvIHRoZSBjbGllbnQuXG4gICAgICAvLyBcdFx0cmV0dXJuIHsgZXJyb3I6IFwiRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzXCIsIGRldGFpbHM6IHN0ZGVyciB9O1xuICAgICAgLy8gXHQgIH1cblxuICAgICAgLy8gXHQgIGNvbnNvbGUubG9nKCdBbmFseXppbmcgaXB0YWJsZXMgRk9SV0FSRCBydWxlcyBvdXRwdXQuLi4nKTtcbiAgICAgIC8vIFx0ICAvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG4gICAgICAvLyBcdCAgdmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gc3Rkb3V0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSBldGgwJykgJiYgc3Rkb3V0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG4gICAgICAvLyBcdCAgY29uc29sZS5sb2coYGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkOiAke2lzR2VuZXJhbFNoYXJpbmdFbmFibGVkfWApO1xuXG4gICAgICAvLyBcdCAgLy8gRXh0cmFjdCBNQUMgYWRkcmVzcyBydWxlc1xuICAgICAgLy8gXHQgIHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIGV0aDAvO1xuICAgICAgLy8gXHQgIHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcbiAgICAgIC8vIFx0ICBjb25zb2xlLmxvZyhgTUFDIGFkZHJlc3MgZm91bmQ6ICR7bWF0Y2ggPyBtYXRjaFsxXSA6ICdOb25lJ31gKTtcblxuICAgICAgLy8gXHQgIC8vIERldGVybWluZSB0aGUgc3RhdHVzIGJhc2VkIG9uIHRoZSBydWxlcyBmb3VuZFxuICAgICAgLy8gXHQgIGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcbiAgICAgIC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGwuJyk7XG4gICAgICAvLyBcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuICAgICAgLy8gXHQgIH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgIC8vIFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzOiAke21hdGNoWzFdfWApO1xuICAgICAgLy8gXHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH07XG4gICAgICAvLyBcdCAgfSBlbHNlIHtcbiAgICAgIC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyBpcyBkaXNhYmxlZCBvciBub3QgY29uZmlndXJlZCBhcyBleHBlY3RlZC4nKTtcbiAgICAgIC8vIFx0XHRyZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcbiAgICAgIC8vIFx0ICB9XG4gICAgICAvLyBcdH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBcdCAgY29uc29sZS5lcnJvcihgQ29tbWFuZCBleGVjdXRpb24gZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAvLyBcdCAgLy8gSXQncyBiZXR0ZXIgdG8gcmV0dXJuIGEgbWVhbmluZ2Z1bCBlcnJvciB0byB0aGUgY2xpZW50LlxuICAgICAgLy8gXHQgIHJldHVybiB7IGVycm9yOiBcIkNvbW1hbmQgZXhlY3V0aW9uIGVycm9yXCIsIGRldGFpbHM6IGVycm9yLnRvU3RyaW5nKCkgfTtcbiAgICAgIC8vIFx0fVxuICAgICAgLy8gICB9LFxuXG4gICAgICAvLyAgICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcbiAgICAgIC8vIFx0dmFyIGNvbW1hbmRSZXN1bHQgPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXG4gICAgICAvLyBcdGlmICghY29tbWFuZFJlc3VsdCkge1xuICAgICAgLy8gXHQgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuICAgICAgLy8gXHR9XG5cbiAgICAgIC8vIFx0dmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcbiAgICAgIC8vIFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2UgZXRoMC87XG4gICAgICAvLyBcdHZhciBtYXRjaCA9IGNvbW1hbmRSZXN1bHQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cbiAgICAgIC8vIFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuICAgICAgLy8gXHQgIHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcbiAgICAgIC8vIFx0fSBlbHNlIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgLy8gXHQgIHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH07XG4gICAgICAvLyBcdH0gZWxzZSB7XG4gICAgICAvLyBcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG4gICAgICAvLyBcdH1cbiAgICAgIC8vICAgfSxcblxuICAgICAgZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gXCJzdWRvIGlwdGFibGVzIC1TIEZPUldBUkRcIjtcblxuICAgICAgICB2YXIgY29tbWFuZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cbiAgICAgICAgaWYgKCFjb21tYW5kUmVzdWx0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcbiAgICAgICAgICAgIFwiY29tbWFuZC1leGVjdXRpb24tZXJyb3JcIixcbiAgICAgICAgICAgIFwiVGhlIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIixcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHRoZSBzcGVjaWZpYyBydWxlIGluZGljYXRpbmcgaW50ZXJuZXQgc2hhcmluZyBmcm9tIHdsYW4wIHRvIGV0aDBcbiAgICAgICAgdmFyIHNoYXJpbmdGcm9tV2xhblRvRXRoID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcyhcbiAgICAgICAgICBcIi1BIEZPUldBUkQgLWkgd2xhbjAgLW8gZXRoMCAtaiBBQ0NFUFRcIixcbiAgICAgICAgKTtcbiAgICAgICAgdmFyIHNoYXJpbmdUb1dsYW5Gcm9tRXRoRXN0YWJsaXNoZWQgPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKFxuICAgICAgICAgIFwiLUEgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFRcIixcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoc2hhcmluZ0Zyb21XbGFuVG9FdGggJiYgc2hhcmluZ1RvV2xhbkZyb21FdGhFc3RhYmxpc2hlZCkge1xuICAgICAgICAgIC8vIElmIGF0IGxlYXN0IG9uZSBwYWlyIG9mIHJ1bGVzIGV4aXN0cywgaW50ZXJuZXQgc2hhcmluZyBpcyBjb25zaWRlcmVkIGVuYWJsZWQuXG4gICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcImVuYWJsZWQgZm9yIGFsbFwiLCBtYWNBZGRyZXNzOiBudWxsIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcImRpc2FibGVkXCIsIG1hY0FkZHJlc3M6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgZW5hYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgaXB0YWJsZXNDb21tYW5kcyA9IFtcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFRcIixcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUXCIsXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREVcIixcbiAgICAgICAgICBcInN1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZVwiLFxuICAgICAgICBdLmpvaW4oXCIgJiYgXCIpO1xuXG4gICAgICAgIGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGRlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coXCJJbnRlcm5ldCBzaGFyaW5nIHZpYSBFdGhlcm5ldCBlbmFibGVkIHN1Y2Nlc3NmdWxseS5cIik7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCBzdGRvdXQpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAvLyBEZWZpbmUgYSBsaXN0IG9mIGNvbW1hbmRzIHRvIHJlcGVhdGVkbHkgYXR0ZW1wdCBkZWxldGlvbi5cbiAgICAgICAgdmFyIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBbXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUXCIsXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVFwiLFxuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBNQVNRVUVSQURFXCIsXG4gICAgICAgICAgXCJzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmVcIixcbiAgICAgICAgXTtcblxuICAgICAgICAvLyBGdW5jdGlvbiB0byBleGVjdXRlIGEgY29tbWFuZCBhbmQgcmVjdXJzaXZlbHkgY2FsbCBpdHNlbGYgaWYgdGhlIGNvbW1hbmQgd2FzIHN1Y2Nlc3NmdWwgKHJ1bGUgd2FzIGZvdW5kIGFuZCBkZWxldGVkKS5cbiAgICAgICAgZnVuY3Rpb24gZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICBjbWQoY29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlcnJvciwgdGhlIHJ1bGUgd2FzIGZvdW5kIGFuZCBkZWxldGVkLCBzbyB0cnkgYWdhaW4uXG4gICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYW4gZXJyb3IsIGl0IGxpa2VseSBtZWFucyBubyBtb3JlIGluc3RhbmNlcyBvZiB0aGUgcnVsZSBleGlzdCwgc28gY2FsbCB0aGUgZG9uZUNhbGxiYWNrLlxuICAgICAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4ZWN1dGUgZGVsZXRpb24gZm9yIGVhY2ggY29tbWFuZCBhbmQgdHJhY2sgY29tcGxldGlvbi5cbiAgICAgICAgdmFyIHRhc2tzQ29tcGxldGVkID0gMDtcbiAgICAgICAgaXB0YWJsZXNEZWxldGVDb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG4gICAgICAgICAgZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrc0NvbXBsZXRlZCsrO1xuICAgICAgICAgICAgLy8gT25jZSBhbGwgZGVsZXRpb24gdGFza3MgYXJlIGRvbmUsIHNhdmUgdGhlIGlwdGFibGVzIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAgICBpZiAodGFza3NDb21wbGV0ZWQgPT09IGlwdGFibGVzRGVsZXRlQ29tbWFuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNtZChcInN1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZVwiLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgZXhlYyBlcnJvciBkdXJpbmcgc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWAsXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBzYXZlZC5gKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjayhcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJBbGwgc3BlY2lmaWVkIHJ1bGVzIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuXCIsXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvLyAnZGlzYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIC8vIFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG4gICAgICAvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFQnLFxuICAgICAgLy8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG4gICAgICAvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERScsXG4gICAgICAvLyBcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcbiAgICAgIC8vIFx0XS5qb2luKCcgJiYgJyk7XG5cbiAgICAgIC8vIFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgIC8vIFx0XHRpZiAoZXJyb3IpIHtcbiAgICAgIC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgICAgIC8vIFx0XHRcdHJldHVybjtcbiAgICAgIC8vIFx0XHR9XG4gICAgICAvLyBcdFx0aWYgKHN0ZGVycikge1xuICAgICAgLy8gXHRcdFx0Y29uc29sZS5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuICAgICAgLy8gXHRcdFx0cmV0dXJuO1xuICAgICAgLy8gXHRcdH1cbiAgICAgIC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXQgZGlzYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICAgICAgLy8gXHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcbiAgICAgIC8vIFx0fSk7XG4gICAgICAvLyB9LFxuICAgICAgZW5hYmxlSW50ZXJuZXRGb3JNYWNFdGhlcm5ldDogZnVuY3Rpb24gKG1hY0FkZHJlc3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIC8vIENvbW1hbmQgdG8gYWxsb3cgaW50ZXJuZXQgZm9yIHRoZSBzcGVjaWZpZWQgTUFDIGFkZHJlc3Mgb24gZXRoMC5cbiAgICAgICAgdmFyIGFsbG93TWFjQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgZXRoMCAtbSBtYWMgLS1tYWMtc291cmNlICR7bWFjQWRkcmVzc30gLWogQUNDRVBUYDtcbiAgICAgICAgLy8gQ29tbWFuZCB0byBkcm9wIGFsbCBvdGhlciBpbnRlcm5ldCB0cmFmZmljIG9uIGV0aDAuXG4gICAgICAgIHZhciBibG9ja090aGVyc0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIGV0aDAgLWogRFJPUGA7XG5cbiAgICAgICAgLy8gQWxsb3cgaW50ZXJuZXQgZm9yIHRoZSBzcGVjaWZpZWQgTUFDIGFkZHJlc3MuXG4gICAgICAgIHJlcyA9IGNtZChhbGxvd01hY0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIGBleGVjIGVycm9yIGR1cmluZyBhbGxvd2luZyBNQUMgJHttYWNBZGRyZXNzfTogJHtlcnJvcn1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBhbGxvd2VkIGZvciBNQUMgJHttYWNBZGRyZXNzfS5gKTtcblxuICAgICAgICAgIC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldC5cbiAgICAgICAgICByZXMgPSBjbWQoYmxvY2tPdGhlcnNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDczogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGJsb2NrZWQgZm9yIG90aGVyIE1BQyBhZGRyZXNzZXMuYCk7XG4gICAgICAgICAgICAvLyBPcHRpb25hbGx5LCBzYXZlIHRoZSBpcHRhYmxlcyBzZXR0aW5ncyB0byBtYWtlIHRoZW0gcGVyc2lzdGVudC5cbiAgICAgICAgICAgIGNtZChcInN1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZVwiLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICBgZXhlYyBlcnJvciBkdXJpbmcgc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBzYXZlZC5gKTtcbiAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlQWxsTWFjRmlsdGVyc0ZvckV0aGVybmV0OiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgLy8gTGlzdCBhbGwgRk9SV0FSRCBydWxlcyB3aXRoIGxpbmUgbnVtYmVyc1xuICAgICAgICBjbWQoXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLS1saW5lLW51bWJlcnMgLW5cIixcbiAgICAgICAgICAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQcm9jZXNzIHN0ZG91dCB0byBpZGVudGlmeSBydWxlcyByZWxhdGVkIHRvIE1BQyBmaWx0ZXJpbmcgb24gZXRoMFxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzdGRvdXQuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgICBjb25zdCBydWxlTnVtYmVycyA9IGxpbmVzLnJlZHVjZSgoYWNjLCBsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAobGluZS5pbmNsdWRlcyhcImV0aDBcIikgJiYgbGluZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwibWFjXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZU51bWJlciA9IGxpbmUuc3BsaXQoL1xccysvKVswXTsgLy8gRXh0cmFjdCB0aGUgcnVsZSBudW1iZXIsIGFzc3VtaW5nIGl0J3MgdGhlIGZpcnN0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBhY2MucHVzaChydWxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgaWRlbnRpZmllZCBydWxlcyBzdGFydGluZyBmcm9tIHRoZSBoaWdoZXN0IG51bWJlciB0byBwcmV2ZW50IHNoaWZ0aW5nIG9mIGxpbmUgbnVtYmVyc1xuICAgICAgICAgICAgcnVsZU51bWJlcnNcbiAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIgLSBhKVxuICAgICAgICAgICAgICAuZm9yRWFjaCgocnVsZU51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNtZChcbiAgICAgICAgICAgICAgICAgIGBzdWRvIGlwdGFibGVzIC1EIEZPUldBUkQgJHtydWxlTnVtYmVyfWAsXG4gICAgICAgICAgICAgICAgICAocmVtb3ZlRXJyb3IsIHJlbW92ZVN0ZG91dCwgcmVtb3ZlU3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdmVFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgcmVtb3ZpbmcgcnVsZSAke3J1bGVOdW1iZXJ9OiAke3JlbW92ZUVycm9yfWAsXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBEZWNpZGUgaWYgeW91IHdhbnQgdG8gY29udGludWUgcmVtb3Zpbmcgb3RoZXIgcnVsZXMgb3Igc3RvcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSdWxlICR7cnVsZU51bWJlcn0gcmVtb3ZlZCBzdWNjZXNzZnVsbHkuYCk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBZnRlciBhdHRlbXB0aW5nIHRvIHJlbW92ZSBhbGwgaWRlbnRpZmllZCBydWxlcywgc2F2ZSB0aGUgaXB0YWJsZXMgY29uZmlndXJhdGlvblxuICAgICAgICAgICAgY21kKFxuICAgICAgICAgICAgICBcInN1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZVwiLFxuICAgICAgICAgICAgICAoc2F2ZUVycm9yLCBzYXZlU3Rkb3V0LCBzYXZlU3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNhdmVFcnJvcikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke3NhdmVFcnJvcn1gKTtcbiAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soc2F2ZUVycm9yLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpcHRhYmxlcyBydWxlcyB1cGRhdGVkIGFuZCBzYXZlZC5cIik7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiQWxsIE1BQyBmaWx0ZXIgcnVsZXMgZm9yIEV0aGVybmV0IHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuXCIsXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGdldEludGVybmV0U2hhcmluZ1N0YXR1c01vYmlsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSBcInN1ZG8gaXB0YWJsZXMgLVMgRk9SV0FSRFwiO1xuXG4gICAgICAgIHZhciBjb21tYW5kUmVzdWx0ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblxuICAgICAgICBpZiAoIWNvbW1hbmRSZXN1bHQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuICAgICAgICAgICAgXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLFxuICAgICAgICAgICAgXCJUaGUgY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGp1c3RlZCB0byBjaGVjayBmb3IgdGhlIHNwZWNpZmljIHJ1bGUgaW5kaWNhdGluZyBpbnRlcm5ldCBzaGFyaW5nIGZyb20gd2xhbjAgdG8gd3dhbjBcbiAgICAgICAgdmFyIHNoYXJpbmdGcm9tV2xhblRvV3dhbiA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoXG4gICAgICAgICAgXCItQSBGT1JXQVJEIC1pIHdsYW4wIC1vIHd3YW4wIC1qIEFDQ0VQVFwiLFxuICAgICAgICApO1xuICAgICAgICB2YXIgc2hhcmluZ1RvV2xhbkZyb21Xd2FuRXN0YWJsaXNoZWQgPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKFxuICAgICAgICAgIFwiLUEgRk9SV0FSRCAtaSB3d2FuMCAtbyB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUXCIsXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHNoYXJpbmdGcm9tV2xhblRvV3dhbiAmJiBzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCkge1xuICAgICAgICAgIC8vIElmIGF0IGxlYXN0IG9uZSBwYWlyIG9mIHJ1bGVzIGV4aXN0cywgaW50ZXJuZXQgc2hhcmluZyB0byB0aGUgbW9iaWxlIGludGVyZmFjZSBpcyBjb25zaWRlcmVkIGVuYWJsZWQuXG4gICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcImVuYWJsZWQgZm9yIGFsbFwiLCBtYWNBZGRyZXNzOiBudWxsIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcImRpc2FibGVkXCIsIG1hY0FkZHJlc3M6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLy8gJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAvLyBcdC8vIENvbW1hbmQgdG8gbGlzdCBGT1JXQVJEIHJ1bGVzXG4gICAgICAvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLW4gLS1saW5lLW51bWJlcic7XG5cbiAgICAgIC8vIFx0Y21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAvLyBcdFx0aWYgKGVycm9yIHx8IHN0ZGVycikge1xuICAgICAgLy8gXHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke2Vycm9yIHx8IHN0ZGVycn1gKTtcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IgfHwgbmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuICAgICAgLy8gXHRcdFx0cmV0dXJuO1xuICAgICAgLy8gXHRcdH1cblxuICAgICAgLy8gXHRcdC8vIENoZWNrIGZvciBnZW5lcmFsIGludGVybmV0IHNoYXJpbmcgcnVsZXNcbiAgICAgIC8vIFx0XHR2YXIgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgPSBzdGRvdXQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIHd3YW4wJykgJiYgc3Rkb3V0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG5cbiAgICAgIC8vIFx0XHQvLyBFeHRyYWN0IE1BQyBhZGRyZXNzIHJ1bGVzXG4gICAgICAvLyBcdFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2Ugd3dhbjAvO1xuICAgICAgLy8gXHRcdHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuICAgICAgLy8gXHRcdC8vIERldGVybWluZSB0aGUgc3RhdHVzIGJhc2VkIG9uIHRoZSBydWxlcyBmb3VuZFxuICAgICAgLy8gXHRcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcbiAgICAgIC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsXG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9KTtcbiAgICAgIC8vIFx0XHR9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgICAvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGEgc3BlY2lmaWMgTUFDIGFkZHJlc3NcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9KTtcbiAgICAgIC8vIFx0XHR9IGVsc2Uge1xuICAgICAgLy8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBkaXNhYmxlZCBvciBub3QgY29uZmlndXJlZCBhcyBleHBlY3RlZFxuICAgICAgLy8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9KTtcbiAgICAgIC8vIFx0XHR9XG4gICAgICAvLyBcdH0pO1xuICAgICAgLy8gfSxcblxuICAgICAgZW5hYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVFwiLFxuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUXCIsXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFXCIsXG4gICAgICAgICAgXCJzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmVcIixcbiAgICAgICAgXS5qb2luKFwiICYmIFwiKTtcblxuICAgICAgICBjbWQoaXB0YWJsZXNDb21tYW5kcywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RkZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuZXQgc2hhcmluZyB2aWEgbW9iaWxlIGVuYWJsZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGRpc2FibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAvLyBEZWZpbmUgY29tbWFuZHMgZm9yIGRlbGV0aW9uIHdpdGhvdXQgY29tYmluaW5nIHRoZW1cbiAgICAgICAgdmFyIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBbXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVFwiLFxuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUXCIsXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFXCIsXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gcmVjdXJzaXZlbHkgZXhlY3V0ZSBhIGNvbW1hbmQgdW50aWwgaXQgZmFpbHMgKGluZGljYXRpbmcgbm8gbW9yZSBpbnN0YW5jZXMgb2YgdGhlIHJ1bGUpXG4gICAgICAgIGZ1bmN0aW9uIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgICAgICAgY21kKGNvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgIC8vIE5vIGVycm9yIG1lYW5zIHRoZSBjb21tYW5kIHN1Y2NlZWRlZCwgc28gdGhlcmUgbWlnaHQgYmUgbW9yZSBpbnN0YW5jZXNcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gRXJyb3IgbGlrZWx5IG1lYW5zIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlLCBtb3ZlIG9uXG4gICAgICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXhlY3V0ZSBkZWxldGlvbiBmb3IgZWFjaCBjb21tYW5kIGFuZCB0cmFjayB3aGVuIGFsbCBhcmUgY29tcGxldGVkXG4gICAgICAgIHZhciB0YXNrc0NvbXBsZXRlZCA9IDA7XG4gICAgICAgIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMuZm9yRWFjaCgoY29tbWFuZCkgPT4ge1xuICAgICAgICAgIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgKCkgPT4ge1xuICAgICAgICAgICAgdGFza3NDb21wbGV0ZWQrKztcbiAgICAgICAgICAgIC8vIEFmdGVyIGFsbCBjb21tYW5kcyBoYXZlIGJlZW4gYXR0ZW1wdGVkLCBzYXZlIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICBpZiAodGFza3NDb21wbGV0ZWQgPT09IGlwdGFibGVzRGVsZXRlQ29tbWFuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNtZChcbiAgICAgICAgICAgICAgICBcInN1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZVwiLFxuICAgICAgICAgICAgICAgIChlcnJvciwgc2F2ZVN0ZG91dCwgc2F2ZVN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBcImlwdGFibGVzIHJ1bGVzIGZvciBtb2JpbGUgaW50ZXJmYWNlIHVwZGF0ZWQgYW5kIHNhdmVkLlwiLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICBcIkFsbCBzcGVjaWZpZWQgcnVsZXMgZm9yIG1vYmlsZSBpbnRlcmZhY2UgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC5cIixcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIC8vICdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIC8vIFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG4gICAgICAvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcbiAgICAgIC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcbiAgICAgIC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsXG4gICAgICAvLyBcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcbiAgICAgIC8vIFx0XS5qb2luKCcgJiYgJyk7XG5cbiAgICAgIC8vIFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgIC8vIFx0XHRpZiAoZXJyb3IpIHtcbiAgICAgIC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgICAgIC8vIFx0XHRcdHJldHVybjtcbiAgICAgIC8vIFx0XHR9XG4gICAgICAvLyBcdFx0aWYgKHN0ZGVycikge1xuICAgICAgLy8gXHRcdFx0Y29uc29sZS5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuICAgICAgLy8gXHRcdFx0cmV0dXJuO1xuICAgICAgLy8gXHRcdH1cbiAgICAgIC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgbW9iaWxlIGRpc2FibGVkIHN1Y2Nlc3NmdWxseS4nKTtcbiAgICAgIC8vIFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG4gICAgICAvLyBcdH0pO1xuICAgICAgLy8gfSxcbiAgICAgIGFsbG93SW50ZXJuZXRGb3JNYWNNb2JpbGU6IGZ1bmN0aW9uIChtYWNBZGRyZXNzLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICAvLyBGaXJzdCwgZW5hYmxlIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBmcm9tIHdsYW4wIHRvIHd3YW4wXG4gICAgICAgIHJlcyA9IGNtZChcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUICYmIHN1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAmJiBzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFXCIsXG4gICAgICAgICAgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgYGV4ZWMgZXJyb3IgZHVyaW5nIGVuYWJsaW5nIGludGVybmV0IHNoYXJpbmc6ICR7ZXJyb3J9YCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5ldCBzaGFyaW5nIGVuYWJsZWQgdmlhIHd3YW4wLmApO1xuICAgICAgICAgICAgLy8gQWxsb3cgaW50ZXJuZXQgb25seSBmb3IgdGhlIHNwZWNpZmllZCBNQUMgYWRkcmVzcyBvbiB3d2FuMFxuICAgICAgICAgICAgdmFyIGFsbG93TWFjQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1JIEZPUldBUkQgMSAtaSB3d2FuMCAtbSBtYWMgLS1tYWMtc291cmNlICR7bWFjQWRkcmVzc30gLWogQUNDRVBUYDtcbiAgICAgICAgICAgIC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldCB2aWEgd3dhbjAuXG4gICAgICAgICAgICB2YXIgYmxvY2tPdGhlcnNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSB3d2FuMCAtaiBEUk9QYDtcblxuICAgICAgICAgICAgLy8gQWxsb3cgc3BlY2lmaWMgTUFDXG4gICAgICAgICAgICByZXMgPSBjbWQoYWxsb3dNYWNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICBgZXhlYyBlcnJvciBkdXJpbmcgYWxsb3dpbmcgTUFDICR7bWFjQWRkcmVzc30gb24gV1dBTjogJHtlcnJvcn1gLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgSW50ZXJuZXQgYWNjZXNzIGFsbG93ZWQgZm9yIE1BQyAke21hY0FkZHJlc3N9IG9uIFdXQU4uYCxcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvLyBCbG9jayBhbGwgb3RoZXIgTUFDc1xuICAgICAgICAgICAgICByZXMgPSBjbWQoYmxvY2tPdGhlcnNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDcyBvbiBXV0FOOiAke2Vycm9yfWAsXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICBgSW50ZXJuZXQgYWNjZXNzIGJsb2NrZWQgZm9yIG90aGVyIE1BQyBhZGRyZXNzZXMgb24gV1dBTi5gLFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIGlwdGFibGVzIHJ1bGVzXG4gICAgICAgICAgICAgICAgY21kKFxuICAgICAgICAgICAgICAgICAgXCJzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmVcIixcbiAgICAgICAgICAgICAgICAgIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBleGVjIGVycm9yIGR1cmluZyBzYXZpbmcgaXB0YWJsZXMgcnVsZXMgZm9yIFdXQU46ICR7ZXJyb3J9YCxcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGlwdGFibGVzIHJ1bGVzIGZvciBXV0FOIHNhdmVkLmApO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUFsbE1hY0ZpbHRlcnNGb3JNb2JpbGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAvLyBMaXN0IGFsbCBGT1JXQVJEIHJ1bGVzXG4gICAgICAgIGNtZChcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtLWxpbmUtbnVtYmVycyAtblwiLFxuICAgICAgICAgIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIHJ1bGVzOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQcm9jZXNzIHN0ZG91dCB0byBmaW5kIHJ1bGVzIHRvIGRlbGV0ZS4gVGhpcyBwYXJ0IGlzIHBzZXVkby1jb2RlIGFuZCBuZWVkcyBhZGp1c3RtZW50XG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IHN0ZG91dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOdW1iZXJzID0gW107XG4gICAgICAgICAgICBsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChsaW5lLmluY2x1ZGVzKFwid3dhbjBcIikgJiYgbGluZS5pbmNsdWRlcyhcIk1BQ1wiKSkge1xuICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgdGhlIHJ1bGUgbnVtYmVyIGZyb20gdGhlIGxpbmVcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlTnVtYmVyID0gbGluZS5zcGxpdChcIiBcIilbMF07IC8vIFRoaXMgaXMgYSBzaW1wbGlmaWNhdGlvblxuICAgICAgICAgICAgICAgIHJ1bGVOdW1iZXJzLnB1c2gocnVsZU51bWJlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgcnVsZXMgYnkgdGhlaXIgbnVtYmVycywgc3RhcnRpbmcgZnJvbSB0aGUgaGlnaGVzdCBudW1iZXJcbiAgICAgICAgICAgIHJ1bGVOdW1iZXJzXG4gICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiIC0gYSlcbiAgICAgICAgICAgICAgLmZvckVhY2goKHJ1bGVOdW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjbWQoXG4gICAgICAgICAgICAgICAgICBgc3VkbyBpcHRhYmxlcyAtRCBGT1JXQVJEICR7cnVsZU51bWJlcn1gLFxuICAgICAgICAgICAgICAgICAgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHJlbW92aW5nIHJ1bGUgJHtydWxlTnVtYmVyfTogJHtlcnJvcn1gLFxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW9uYWxseSwgc3RvcCB0aGUgcHJvY2VzcyBvciBjb250aW51ZSBhdHRlbXB0aW5nIHRvIHJlbW92ZSBvdGhlciBydWxlc1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUnVsZSAke3J1bGVOdW1iZXJ9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQWZ0ZXIgYWxsIHJ1bGVzIGhhdmUgYmVlbiBwcm9jZXNzZWQsIHNhdmUgdGhlIGlwdGFibGVzIHJ1bGVzXG4gICAgICAgICAgICBjbWQoXCJzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmVcIiwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXB0YWJsZXMgcnVsZXMgdXBkYXRlZCBhbmQgc2F2ZWQuXCIpO1xuICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgXCJBbGwgTUFDIGZpbHRlciBydWxlcyBmb3IgV1dBTiByZW1vdmVkIGFuZCBjaGFuZ2VzIHNhdmVkLlwiLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHJlYm9vdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXCJzdWRvIHJlYm9vdFwiLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgc2h1dGRvd246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgcmVzID0gY21kKFwic3VkbyBoYWx0XCIsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBzeW5jaHJvbml6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIHN5bmMuLi5cIik7XG5cbiAgICAgICAgdmFyIGRldmljZVNlcmlhbCA9IE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuc2VyaWFsO1xuICAgICAgICB2YXIgZGV2aWNlVG9rZW4gPSBNZXRlb3Iuc2V0dGluZ3MubW9vZGxlQVBJVG9rZW47XG4gICAgICAgIHZhciB1cmwgPSBNZXRlb3Iuc2V0dGluZ3MuY2xvdWRVUkwgKyBcIi9hcGkvc3RhcnRTeW5jXCI7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGV2aWNlU2VyaWFsOiBkZXZpY2VTZXJpYWwsXG4gICAgICAgICAgICBkZXZpY2VUb2tlbjogZGV2aWNlVG9rZW4sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBucG1SZXF1ZXN0T3B0aW9uczoge1xuICAgICAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSwgLy8gVE9ETyByZW1vdmUgd2hlbiBkZXBsb3lcbiAgICAgICAgICAgIHRpbWVvdXQ6IDEyMDAwMDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aW1lb3V0OiAxMjAwMDAwLFxuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vdmFyIHJlc3VsdCA9IEhUVFAuY2FsbCgnUE9TVCcsIHVybCwgb3B0aW9ucyk7XG5cbiAgICAgICAgICB2YXIgcmVzdWx0ID0gSFRUUC5wb3N0KHVybCwgb3B0aW9ucyk7XG4gICAgICAgICAgdmFyIHJlc3VsdENvbnRlbnQgPSByZXN1bHQuY29udGVudDtcbiAgICAgICAgICAvL1N5bmNocm9uaXphdGlvbnMuaW5zZXJ0KHtkYXRlOkRhdGUubm93KCl9KTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0Q29udGVudDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi5cIiwgZSk7XG4gICAgICAgICAgcmV0dXJuIFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi4gXCIgKyBlO1xuICAgICAgICB9XG4gICAgICAgIC8vcmV0dXJuIHJlc3VsdENvbnRlbnQ7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59KTtcbiIsIi8vIE1ldGVvci5wdWJsaXNoKCdhbGxBcHBzJywgZnVuY3Rpb24oKSB7XG4vLyBcdHJldHVybiBBcHBzLmZpbmQoe30pO1xuLy8gfSk7XG5cbi8vIE1ldGVvci5wdWJsaXNoKFwidXNlcnNcIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKHt9LCB7ZmllbGRzOntjcmVhdGVkQXQ6IHRydWUsIHByb2ZpbGU6IHRydWUsIGVtYWlsczogdHJ1ZSwgdXNlcm5hbWU6IHRydWV9fSk7XG4vLyB9KTtcblxuXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICB9KTsiLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcblxuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9hcHBzLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvc3luY2hyb25pemF0aW9ucy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL3VzZXJzLmpzJztcblxuaW1wb3J0ICcuLi9zZXJ2ZXIvZml4dHVyZXMuanMnO1xuaW1wb3J0ICcuLi9zZXJ2ZXIvbWV0aG9kcy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci9wdWJsaWNhdGlvbnMuanMnO1xuaW1wb3J0ICcuLi9saWIvYXBwX2xvYWRlci5qcyc7XG5cblxuLy9pbXBvcnQge0REUH0gZnJvbSAnbWV0ZW9yL2RkcCc7XG4vL2ltcG9ydCB7QWNjb3VudHN9IGZyb20gJ21ldGVvci9hY2NvdW50cy1iYXNlJztcblxuXG4vLyBpbXBvcnQgJy4uL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXIvZml4dHVyZXMuanMnO1xuXG4vLyBpbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2ZpeHR1cmVzLmpzJztcblxuXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG5cdGNvbnNvbGUubG9nKFwibWV0ZW9yIHN0YXJ0ZWQuLi5cIik7XG5cblxuXG4gIC8vIGNvZGUgdG8gcnVuIG9uIHNlcnZlciBhdCBzdGFydHVwXG5cbiAvLyAgU2VydmVyMiA9IEREUC5jb25uZWN0KFwiaHR0cDovL2JlZWtlZS5ib3g6ODNcIik7XG5cdC8vIEFjY291bnRzLmNvbm5lY3Rpb24gPSBTZXJ2ZXIyO1xuXHQvLyBjb25zb2xlLmxvZyhcIm9uIGNvbm5lY3RlLi4uXCIpO1xufSk7XG4iXX0=
