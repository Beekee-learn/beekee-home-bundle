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
      'activateInternetSharing': function () {
        var res;
        res = cmd("sudo wifi-ap.config set share.disabled=false");
        return res;
      },
      'disactivateInternetSharing': function () {
        var res;
        res = cmd("sudo wifi-ap.config set share.disabled=true");
        return res;
      },
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
        res = cmd("python3 " + scriptsPath + "/pijuice_status.py"); //res = cmd("python3 /home/ubuntu/scripts/pijuice_status.py");

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiYWRkQ2xhc3MiLCJmYWRlT3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnQiLCJBcHBzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJhbGxvdyIsImluc2VydCIsInVwZGF0ZSIsInVzZXJJZCIsInNwYWNlIiwicHVibGlzaCIsImFwcHNQdWJsaWNhdGlvbiIsImZpbmQiLCJTeW5jaHJvbml6YXRpb25zIiwic3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uIiwiaXNBZG1pbiIsImNvbnNvbGUiLCJsb2ciLCJSb2xlcyIsInVzZXJJc0luUm9sZSIsInVzZXIiLCJyb2xlQXNzaWdubWVudCIsInJlYWR5IiwiY3JlYXRlUm9sZSIsInVubGVzc0V4aXN0cyIsInVzZXJzIiwiY291bnQiLCJhZG1pblBhc3N3b3JkIiwic2V0dGluZ3MiLCJ1c2VybmFtZSIsInJvbGVzIiwiXyIsImVhY2giLCJpZCIsIkFjY291bnRzIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJwcm9maWxlIiwibmFtZSIsImxlbmd0aCIsImFkZFVzZXJzVG9Sb2xlcyIsImRlZmF1bHRBcHBzIiwiY3VzdG9tQXBwIiwib25seVRlYWNoZXIiLCJvcmRlciIsImRvY191c2VyIiwiZG9jX2FkbWluIiwibGFzdF92ZXJzaW9uIiwidXJsIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiaW5zdGFsbGVkIiwidmVyc2lvbiIsImhpZGRlbiIsIkhUVFAiLCJmcyIsIk5wbSIsInJlcXVpcmUiLCJleGVjIiwiY21kIiwid3JhcEFzeW5jIiwid2lmaVNldHRpbmdzUGF0aCIsImNvbmZpZ1BhdGgiLCJyZWFkbGluZSIsIm1ldGhvZHMiLCJhZG1pbklkIiwibmV3UGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIl9pZCIsIiRzZXQiLCJlcnJvciIsInJlc3VsdCIsIm1lc3NhZ2UiLCJyZW1vdmVVc2Vyc0Zyb21Sb2xlcyIsImNvbW1hbmQiLCJyZXMiLCJzdG9yYWdlVXNhZ2UiLCJ0b0ZpeGVkIiwic3RvcmFnZVRvdGFsIiwicGVyY2VudGFnZSIsImRhdGEiLCJyZWFkRmlsZVN5bmMiLCJtYXRjaCIsIlJlZ0V4cCIsIlNTSUQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwibmV3U1NJRCIsImVuY29kZWROZXdTU0lEIiwiQnVmZmVyIiwidG9TdHJpbmciLCJuZXdEYXRhIiwid3JpdGVGaWxlU3luYyIsImNoYW5uZWwiLCJuZXdDaGFubmVsIiwic2VyaWFsIiwib3BlcmF0b3JOYW1lIiwic2lnbmFsU3RyZW5ndGgiLCJzdHJlbmd0aFZhbHVlIiwicGFyc2VJbnQiLCJxdWFsaXR5IiwiQVBOIiwiQVBOVXNlciIsIkFQTlBhc3N3b3JkIiwic2ltU3RhdHVzUmVzdWx0IiwiZXhlY3V0ZUNvbW1hbmQiLCJzaW1TdGF0dXMiLCJpbmNsdWRlcyIsIlNpbVBpbiIsIlBJTiIsImlzU2hhcmluZyIsInJlczIiLCJzY3JpcHRzUGF0aCIsImlzT25saW5lIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInRyaW0iLCJsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCIsImNvbW1hbmRSZXN1bHQiLCJFcnJvciIsInNoYXJpbmdGcm9tV2xhblRvRXRoIiwic2hhcmluZ1RvV2xhbkZyb21FdGhFc3RhYmxpc2hlZCIsInN0YXR1cyIsIm1hY0FkZHJlc3MiLCJjYWxsYmFjayIsImlwdGFibGVzQ29tbWFuZHMiLCJqb2luIiwic3Rkb3V0Iiwic3RkZXJyIiwiaXB0YWJsZXNEZWxldGVDb21tYW5kcyIsImV4ZWN1dGVBbmRSZXBlYXQiLCJkb25lQ2FsbGJhY2siLCJ0YXNrc0NvbXBsZXRlZCIsImZvckVhY2giLCJhbGxvd01hY0NvbW1hbmQiLCJibG9ja090aGVyc0NvbW1hbmQiLCJsaW5lcyIsInNwbGl0IiwicnVsZU51bWJlcnMiLCJyZWR1Y2UiLCJhY2MiLCJsaW5lIiwiaW5kZXgiLCJ0b0xvd2VyQ2FzZSIsInJ1bGVOdW1iZXIiLCJwdXNoIiwic29ydCIsImEiLCJiIiwicmVtb3ZlRXJyb3IiLCJyZW1vdmVTdGRvdXQiLCJyZW1vdmVTdGRlcnIiLCJzYXZlRXJyb3IiLCJzYXZlU3Rkb3V0Iiwic2F2ZVN0ZGVyciIsInNoYXJpbmdGcm9tV2xhblRvV3dhbiIsInNoYXJpbmdUb1dsYW5Gcm9tV3dhbkVzdGFibGlzaGVkIiwiZGV2aWNlU2VyaWFsIiwicHVibGljIiwiZGV2aWNlVG9rZW4iLCJtb29kbGVBUElUb2tlbiIsImNsb3VkVVJMIiwib3B0aW9ucyIsImhlYWRlcnMiLCJucG1SZXF1ZXN0T3B0aW9ucyIsInJlamVjdFVuYXV0aG9yaXplZCIsInRpbWVvdXQiLCJwb3N0IiwicmVzdWx0Q29udGVudCIsImNvbnRlbnQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sQ0FBQ0MsUUFBWCxFQUFxQjtBQUNwQkMsUUFBTSxDQUFDQyxPQUFQLENBQWUsWUFBZixFQUE2QiwyTkFBN0I7QUFFQUQs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QTVCLEVBQWtELENBQWxEO0FBQXFETCxNQUFNLENBQUNJLElBQVAsQ0FBWSx3QkFBWjtBQUFzQ0osTUFBTSxDQUFDSSxJQUFQLENBQVksb0NBQVo7QUFBa0RKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHlCQUFaO0FBQXVDSixNQUFNLENBQUNJLElBQVAsQ0FBWSx1QkFBWjtBQUFxQ0osTUFBTSxDQUFDSSxJQUFQLENBQVksc0JBQVo7QUFBb0NKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLDJCQUFaO0FBQXlDSixNQUFNLENBQUNJLElBQVAsQ0FBWSxzQkFBWjtBQVlqVDtBQUNBO0FBR0E7QUFFQTtBQUdBbkIsTUFBTSxDQUFDUSxPQUFQLENBQWUsTUFBTTtBQUNwQnlCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBRG9CLENBS25CO0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FWRCxFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cdEluamVjdC5yYXdIZWFkKFwibWV0YUxvYWRlclwiLCAnPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPTAsIHdpZHRoPWRldmljZS13aWR0aCwgaGVpZ2h0PWRldmljZS1oZWlnaHRcIi8+PG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCI+XHQ8bWV0YSBuYW1lPVwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj4nKTtcblxuXHRJbmplY3QucmF3Qm9keShcImh0bWxMb2FkZXJcIiwgQXNzZXRzLmdldFRleHQoJ2FwcF9sb2FkZXIuaHRtbCcpKTtcbn1cblxuaWYgKE1ldGVvci5pc0NsaWVudCkge1xuXHRNZXRlb3Iuc3RhcnR1cChmdW5jdGlvbigpIHtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdCQoJy5pbmRleC0taWNvbicpLmFkZENsYXNzKCdhbmltYXRlZC1pY29uJyk7XG5cblx0XHRcdCQoXCIjaW5qZWN0LWxvYWRlci13cmFwcGVyXCIpLmZhZGVPdXQoNTAwLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0JCgnLmluZGV4LS1pY29uJykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkLWljb24nKTtcblx0XHR9KTtcblx0XHR9LCA1MDApO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgQXBwcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdob21lLWFwcHMnKTtcblxuXG5cbkFwcHMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0dXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblx0cmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsQXBwcycsIGZ1bmN0aW9uIGFwcHNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gQXBwcy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBTeW5jaHJvbml6YXRpb25zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtc3luY2hyb25pemF0aW9ucycpO1xuXG5cblxuU3luY2hyb25pemF0aW9ucy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHJlbW92ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsU3luY2hyb25pemF0aW9ucycsIGZ1bmN0aW9uIHN5bmNocm9uaXphdGlvbnNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gU3luY2hyb25pemF0aW9ucy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuLy8gdmFyIHVzZXJzREJcdD0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vIHZhciBjb2xsZWN0aW9uXHQ9IHVzZXJzREIub3BlbigndXNlcnMnKTtcblxuXG4vL2NvbnN0IGRhdGFiYXNlID0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vY29uc3QgY29sbGVjdGlvbiA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy9leHBvcnQgY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vIFNoYXJpbmcgdGhlIHNhbWUgQWNjb3VudCBjb2xsZWN0aW9uIHRoYW4gYmVla2VlLWxpdmVcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHQvLyBjaGVjayB0aGF0IHRoZSB1c2VySWQgc3BlY2lmaWVkIGlzIGFkbWluXG5pc0FkbWluID0gZnVuY3Rpb24odXNlcklkKSB7XG5cdGNvbnNvbGUubG9nKFwiaXNhZG1pblwiKTtcbiAgcmV0dXJuIFJvbGVzLnVzZXJJc0luUm9sZShNZXRlb3IudXNlcigpLCAnYWRtaW4nKTtcbn1cblxuXG4vLyBQdWJsaXNoIFJvbGVzIHRvIGNsaWVudFxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoeyAndXNlci5faWQnOiB0aGlzLnVzZXJJZCB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJlYWR5KClcbiAgfVxufSk7XG5cbk1ldGVvci5wdWJsaXNoKG51bGwsIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCgpO1xuXG59KTtcblxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG5cbi8vIFNlcnZlcjIgPSBERFAuY29ubmVjdChcImh0dHA6Ly9iZWVrZWUuYm94OjgzXCIpO1xuLy8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFNlcnZlcjI7XG5cblxuLy92YXIgZGF0YWJhc2UgPSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy9NZXRlb3IudXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vZXhwb3J0IGNvbnN0IFVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2FwcHMnKTtcblxuXG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG59IiwiaW1wb3J0IHsgQXBwcyB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuXG5cdC8vIENyZWF0ZSB0aGUgcm9sZXNcblx0Um9sZXMuY3JlYXRlUm9sZSgnbWFuYWdlcicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblxuXG4vLyAjIyMgIENyZWF0ZSBhZG1pbiB1c2VyIGF0IGZpcnN0IHN0YXJ0ICAjIyNcblxuXG5pZiAoTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG5cdFxuXHQvLyBDcmVhdGUgdGhlIHJvbGVcblx0Um9sZXMuY3JlYXRlUm9sZSgnbWFuYWdlcicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblx0Um9sZXMuY3JlYXRlUm9sZSgnYWRtaW4nLCB7dW5sZXNzRXhpc3RzOiB0cnVlfSk7XG5cblx0dmFyIGFkbWluUGFzc3dvcmQgPSBNZXRlb3Iuc2V0dGluZ3MuYWRtaW5QYXNzd29yZDtcblxuXHR2YXIgdXNlcnMgPSBbXG5cdFx0e3VzZXJuYW1lOlwiYWRtaW5cIixyb2xlczpbJ2FkbWluJ119LFxuXHRdO1xuXG5cdF8uZWFjaCh1c2VycywgZnVuY3Rpb24gKHVzZXIpIHtcblx0XHR2YXIgaWQ7XG5cdFx0aWQgPSBBY2NvdW50cy5jcmVhdGVVc2VyKHtcblx0XHRcdHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuXHRcdFx0ZW1haWw6IFwiQWRtaW5cIixcblx0XHRcdHBhc3N3b3JkOiBhZG1pblBhc3N3b3JkLFxuXHRcdFx0cHJvZmlsZTp7bmFtZTpcIkFkbWluXCJ9XG5cdFx0fSk7XG5cblx0XHRpZiAodXNlci5yb2xlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRSb2xlcy5hZGRVc2Vyc1RvUm9sZXMoaWQsIHVzZXIucm9sZXMpO1xuXHRcdH1cblx0fSk7XG59XG5cblxuaWYgKEFwcHMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblxuXHR2YXIgZGVmYXVsdEFwcHMgPSBbXG5cdFx0e25hbWU6XCJMaXZlXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjMsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly9saXZlLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1saXZlLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBMaXZlIHByb21vdGUgcmVhbC10aW1lIGludGVyYWN0aW9uIGJ5IGFsbG93aW5nIGxlYXJuZXJzIHRvIGV4cHJlc3MgdGhlbXNlbHZlcyBhc2tpbmcgcXVlc3Rpb25zLCBwb3N0aW5nIHBob3RvcyBvciBzaGFyaW5nIGZpbGVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlJlc291cmNlc1wiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo3LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vcmVzb3VyY2VzLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1yZXNvdXJjZXMucG5nXCIsIGRlc2NyaXB0aW9uOlwiV2l0aCBCZWVrZWUgUmVzb3VyY2VzLCB5b3UgY2FuIGVhc2lseSBzaGFyZSBmaWxlcyB3aXRoIHlvdXIgbGVhcm5lcnMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiV2hlZWxcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjp0cnVlLCBvcmRlcjo5LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIwLjdcIiwgdXJsOlwiaHR0cDovL3doZWVsLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS13aGVlbC5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgV2hlZWwgaXMgYSBzaW1wbGUgcmFuZG9tIHBpY2tlciB3aGVlbCB0aGF0IGFsbG93IHlvdSB0byBwaWNrIHVwIGEgcmFuZG9tIG5hbWUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiVGltZXJcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6OCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL3RpbWVyLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS10aW1lci5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgVGltZXIgaXMgYSBzaW1wbGUgdGltZXIgdGhhdCBsZXRzIHlvdXIgbGVhcm5lcnMga25vdyBob3cgbXVjaCB0aW1lIHRoZXkgaGF2ZSBsZWZ0LlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIk1vb2RsZVwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjEsIGRvY191c2VyOlwibW9vZGxlX3RlYWNoZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL21vb2RsZS5iZWVrZWUuYm94XCIsIGljb246XCJtb29kbGUucG5nXCIsIGRlc2NyaXB0aW9uOlwiTW9vZGxlIGlzIGEgZnJlZSwgb25saW5lIExlYXJuaW5nIE1hbmFnZW1lbnQgc3lzdGVtIGVuYWJsaW5nIGVkdWNhdG9ycyB0byBjcmVhdGUgdGhlaXIgb3duIHByaXZhdGUgd2Vic2l0ZSBmaWxsZWQgd2l0aCBkeW5hbWljIGNvdXJzZXMgdGhhdCBleHRlbmQgbGVhcm5pbmcsIGFueSB0aW1lLCBhbnl3aGVyZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMy4xMS4yXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJLb2xpYnJpXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MiwgZG9jX3VzZXI6XCJrb2xpYnJpX3VzZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2tvbGlicmkuYmVla2VlLmJveFwiLCBpY29uOlwia29saWJyaS5wbmdcIiwgZGVzY3JpcHRpb246XCJLb2xpYnJpIGlzIGFuIG9wZW4tc291cmNlIGVkdWNhdGlvbmFsIHBsYXRmb3JtIHNwZWNpYWxseSBkZXNpZ25lZCB0byBwcm92aWRlIG9mZmxpbmUgYWNjZXNzIHRvIGEgd2lkZSByYW5nZSBvZiBxdWFsaXR5LCBvcGVubHkgbGljZW5zZWQgZWR1Y2F0aW9uYWwgcmVzb3VyY2VzIGluIGxvdy1yZXNvdXJjZSBjb250ZXh0cyBsaWtlIHJ1cmFsIHNjaG9vbHMsIHJlZnVnZWUgY2FtcHMsIG9ycGhhbmFnZXMsIGFuZCBhbHNvIGluIG5vbi1mb3JtYWwgc2Nob29sIHByb2dyYW1zLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjE0LjdcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHQvLyB7bmFtZTpcIkV0aGVycGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2V0aGVycGFkLmJlZWtlZS5ib3hcIiwgaWNvbjpcImV0aGVycGFkLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkV0aGVycGFkIGFsbG93cyB5b3UgdG8gZWRpdCBkb2N1bWVudHMgY29sbGFib3JhdGl2ZWx5IGluIHJlYWwtdGltZSwgbXVjaCBsaWtlIGEgbGl2ZSBtdWx0aS1wbGF5ZXIgZWRpdG9yIHRoYXQgcnVucyBpbiB5b3VyIGJyb3dzZXIuIFdyaXRlIGFydGljbGVzLCBwcmVzcyByZWxlYXNlcywgdG8tZG8gbGlzdHMsIGV0Yy4gdG9nZXRoZXIgd2l0aCB5b3VyIGZyaWVuZHMsIGZlbGxvdyBzdHVkZW50cyBvciBjb2xsZWFndWVzLCBhbGwgd29ya2luZyBvbiB0aGUgc2FtZSBkb2N1bWVudCBhdCB0aGUgc2FtZSB0aW1lLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjguMTRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlN0b3JtXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3N0b3JtLmJlZWtlZS5ib3hcIiwgaWNvbjpcInN0b3JtLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhbmQgYW5pbWF0ZSBsaXZlIHN1cnZleXMsIGJyYWluc3Rvcm1zIGFuZCBxdWl6emVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjQuNVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiUGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3BhZC5iZWVrZWUuYm94XCIsIGljb246XCJwYWQucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGNvbGxhYm9yYXRpdmUgd2FsbHMgdG8gc2hhcmUgYW5kIG9yZ2FuaXplIGNvbnRlbnQuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJCdXp6ZXJcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOnRydWUsIG9yZGVyOjYsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9idXp6ZXIuYmVla2VlLmJveFwiLCBpY29uOlwiYnV6emVyLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhIHZpcnR1YWwgZ2FtaW5nIHJvb20gYXJvdW5kIGEgY29ubmVjdGVkIGJ1enplci5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4yLjRcIiwgaGlkZGVuOmZhbHNlfSxcblxuXHRdO1xuXG5cdF8uZWFjaChkZWZhdWx0QXBwcywgZnVuY3Rpb24gKGRlZmF1bHRBcHBzKSB7XG5cdFx0QXBwcy5pbnNlcnQoZGVmYXVsdEFwcHMpO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBIVFRQIH0gZnJvbSAnbWV0ZW9yL2h0dHAnXG5cbk1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuXG5cdGlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHR2YXIgZnMgPSBOcG0ucmVxdWlyZSgnZnMnKTtcblx0ZXhlYyA9IE5wbS5yZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuZXhlYztcblx0Y21kID0gTWV0ZW9yLndyYXBBc3luYyhleGVjKTtcblxuXHR2YXIgd2lmaVNldHRpbmdzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy53aWZpU2V0dGluZ3NQYXRoO1xuXHR2YXIgY29uZmlnUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5jb25maWdQYXRoO1xuXHRjb25zdCByZWFkbGluZSA9IHJlcXVpcmUoJ3JlYWRsaW5lJyk7XG5cblxuXHRNZXRlb3IubWV0aG9kcyh7XG5cblx0XHQnYWRtaW5TZXROZXdQYXNzd29yZCc6IGZ1bmN0aW9uKGFkbWluSWQsIHVzZXJJZCwgbmV3UGFzc3dvcmQpIHsgLy8gQWRtaW4gY2FuIGZvcmNpYmx5IGNoYW5nZSB0aGUgcGFzc3dvcmQgZm9yIGEgdXNlclxuXHRcdFx0aWYgKFJvbGVzLnVzZXJJc0luUm9sZShhZG1pbklkLCAnYWRtaW4nKSkge1xuXHRcdFx0XHRBY2NvdW50cy5zZXRQYXNzd29yZCh1c2VySWQsIG5ld1Bhc3N3b3JkKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdjcmVhdGVBY2NvdW50JzogZnVuY3Rpb24oZW1haWwsIHBhc3N3b3JkLCBwcm9maWxlKSB7XG5cdFx0XHRyZXR1cm4gQWNjb3VudHMuY3JlYXRlVXNlcih7ZW1haWw6ZW1haWwscGFzc3dvcmQ6cGFzc3dvcmQscHJvZmlsZTpwcm9maWxlfSk7IC8vIENhbGxiYWNrIGlzIG5vdCBzdXBwb3J0ZWQgb24gc2VydmVyLXNpZGVcblx0XHR9LFxuXHRcdCdlZGl0QWNjb3VudCc6IGZ1bmN0aW9uKHVzZXJJZCwgZW1haWwsIHBhc3N3b3JkLCBwcm9maWxlKSB7XG5cdFx0XHRNZXRlb3IudXNlcnMudXBkYXRlKHtfaWQ6IHVzZXJJZH0sIHtcblx0ICBcdFx0XHQkc2V0OiB7XG5cdCAgICBcdFx0XHQnZW1haWxzLjAuYWRkcmVzcyc6IGVtYWlsLFxuXHQgICAgXHRcdFx0cHJvZmlsZTogcHJvZmlsZVxuXHQgIFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0aWYgKHBhc3N3b3JkKSB7XG5cdFx0XHRcdEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgcGFzc3dvcmQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2RlbGV0ZVVzZXInOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdE1ldGVvci51c2Vycy5yZW1vdmUodXNlcklkLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHdoZW4gZGVsZXRpbmcgdXNlciA6IFwiK2Vycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdhZGRNYW5hZ2VyUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJZCwgJ21hbmFnZXInKTtcblx0XHR9LFxuXHRcdCdyZW1vdmVNYW5hZ2VyUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMucmVtb3ZlVXNlcnNGcm9tUm9sZXModXNlcklkLCAnbWFuYWdlcicpO1xuXHRcdH0sXG5cdFx0J2FkZEFkbWluUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJZCwgJ2FkbWluJyk7XG5cdFx0fSxcblx0XHQncmVtb3ZlQWRtaW5Sb2xlJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRSb2xlcy5yZW1vdmVVc2Vyc0Zyb21Sb2xlcyh1c2VySWQsICdhZG1pbicpO1xuXHRcdH0sXG5cblx0XHQvLyAnZ2V0VXNlZFNwYWNlJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0cmVzID0gY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIikgKyBcIi8gXCIgKyBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKSArIFwiIChcIitjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKStcInVzZWQpXCI7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzO1xuXHRcdC8vIH0sXG5cdFx0J3J1bkNvbW1hbmQnOiBmdW5jdGlvbihwYXNzd29yZCwgY29tbWFuZCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcImVjaG8gXCIrcGFzc3dvcmQrXCIgfCBzdWRvIC1TIFwiK2NvbW1hbmQpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRVc2VkU3BhY2UnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXMgPSB7fTtcblx0XHRcdC8vcmVzID0gY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIikgKyBcIi8gXCIgKyBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKSArIFwiIChcIitjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKStcInVzZWQpXCI7XG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkMyl9JyB8IHRhaWwgLTFcIilcblx0XHRcdHJlcy5zdG9yYWdlVXNhZ2UgPSByZXMuc3RvcmFnZVVzYWdlLzEwMDAwMDA7XG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gcmVzLnN0b3JhZ2VVc2FnZS50b0ZpeGVkKDIpO1xuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpXG5cdFx0XHRyZXMuc3RvcmFnZVRvdGFsID0gcmVzLnN0b3JhZ2VUb3RhbC8xMDAwMDAwO1xuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IHJlcy5zdG9yYWdlVG90YWwudG9GaXhlZCgyKTtcblx0XHRcdHJlcy5wZXJjZW50YWdlID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFNTSUQnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnc3NpZD0oLiopJykpO1xuICBcdFx0XHR2YXIgU1NJRCA9IG1hdGNoWzFdO1xuICBcdFx0XHRTU0lEID0gZGVjb2RlVVJJQ29tcG9uZW50KFNTSUQucmVwbGFjZSgvLi4vZywgJyUkJicpKVxuICBcdFx0XHRyZXR1cm4gU1NJRDtcblx0XHR9LFxuXHRcdCdzZXRTU0lEJzogZnVuY3Rpb24obmV3U1NJRCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdGNvbnN0IGVuY29kZWROZXdTU0lEID0gbmV3IEJ1ZmZlcihuZXdTU0lEKS50b1N0cmluZygnaGV4Jyk7IC8vIENvbnZlcnQgaW50byBIZXhcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdzc2lkPSguKiknKSlbMV0sIGVuY29kZWROZXdTU0lEKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0V2lmaVBhc3N3b3JkJzogZnVuY3Rpb24oKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3Bhc3N3b3JkPSguKiknKSk7XG4gIFx0XHRcdHZhciBwYXNzd29yZCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gcGFzc3dvcmQ7XG5cdFx0fSxcblx0XHQnc2V0V2lmaVBhc3N3b3JkJzogZnVuY3Rpb24obmV3UGFzc3dvcmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3Bhc3N3b3JkPSguKiknKSlbMV0sIG5ld1Bhc3N3b3JkKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0V2lmaUNoYW5uZWwnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJykpO1xuICBcdFx0XHR2YXIgY2hhbm5lbCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gY2hhbm5lbDtcblx0XHR9LFxuXHRcdCdzZXRXaWZpQ2hhbm5lbCc6IGZ1bmN0aW9uKG5ld0NoYW5uZWwpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpKVsxXSwgbmV3Q2hhbm5lbCk7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFNlcmlhbCc6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnU0VSSUFMPSguKiknKSk7XG4gIFx0XHRcdHZhciBzZXJpYWwgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIHNlcmlhbDtcblx0XHR9LFxuXHRcdCdnZXRPcGVyYXRvck5hbWUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvcGVyYXRvck5hbWU7XG5cdFx0XHRvcGVyYXRvck5hbWUgPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1vcGVyYXRvci1uYW1lIHwgZ3JlcCAtbTIgJ05hbWUgICAgICAgICAgICAgJyB8IGF3ayAne3ByaW50ICQzfSdcIik7XG5cdFx0XHRyZXR1cm4gb3BlcmF0b3JOYW1lO1xuXHRcdH0sXG5cdFx0Ly8gJ2dldFNpZ25hbFN0cmVuZ3RoJzogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0dmFyIHNpZ25hbFN0cmVuZ3RoO1xuXHRcdC8vIFx0c2lnbmFsU3RyZW5ndGggPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrICd7cHJpbnQgJDMsICQyfSdcIik7XG5cdFx0Ly8gXHRyZXR1cm4gc2lnbmFsU3RyZW5ndGg7XG5cdFx0Ly8gfSxcblx0XHQnZ2V0U2lnbmFsU3RyZW5ndGgnOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgc2lnbmFsU3RyZW5ndGg7XG5cdFx0XHQvLyBUaGlzIGV4dHJhY3RzIGp1c3QgdGhlIG51bWVyaWMgcGFydCBvZiB0aGUgc2lnbmFsIHN0cmVuZ3RoLlxuXHRcdFx0c2lnbmFsU3RyZW5ndGggPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwICdOZXR3b3JrJyB8IGF3ayAne3ByaW50ICQzfScgfCBncmVwIC1vRSAnWy0wLTldKydcIik7XG5cblx0XHRcdC8vIENvbnZlcnQgc2lnbmFsIHN0cmVuZ3RoIHRvIGEgcXVhbGl0YXRpdmUgdmFsdWVcblx0XHRcdHZhciBzdHJlbmd0aFZhbHVlID0gcGFyc2VJbnQoc2lnbmFsU3RyZW5ndGgpO1xuXHRcdFx0dmFyIHF1YWxpdHkgPSAnVW5rbm93bic7XG5cdFx0XHRpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtNzApIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdFeGNlbGxlbnQnO1xuXHRcdFx0fSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlID49IC04NSkge1xuXHRcdFx0XHRxdWFsaXR5ID0gJ0dvb2QnO1xuXHRcdFx0fSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlID49IC0xMDApIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdGYWlyJztcblx0XHRcdH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA8IC0xMDApIHtcblx0XHRcdFx0cXVhbGl0eSA9ICdQb29yJztcblx0XHRcdH1cblx0XHRcdHJldHVybiBxdWFsaXR5O1xuXHRcdH0sXG5cdFx0Ly8gJ2dldElzT25saW5lJzogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0dmFyIGlzT25saW5lO1xuXHRcdC8vIFx0aXNPbmxpbmUgPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrICd7cHJpbnQgJDMsICQyfSdcIik7XG5cdFx0Ly8gXHRyZXR1cm4gaXNPbmxpbmU7XG5cdFx0Ly8gfSxcblx0XHQvLyAnZ2V0QmFuZCc6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdHZhciBiYW5kO1xuLy9cdFx0XHRiYW5kID0gY21kKFwic3VkbyBxbWljbGkgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayBcXFwie3ByaW50ICQyfVxcXCIgfCBjdXQgLWRcXFxcJyAtZjJcIik7XG5cdFx0Ly8gXHRyZXR1cm4gYmFuZDtcblx0XHQvLyB9LFxuXHRcdCdnZXRBUE4nOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTj0oLiopJykpO1xuICBcdFx0XHR2YXIgQVBOID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBBUE47XG5cdFx0fSxcblx0XHQnZ2V0QVBOVXNlcic6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1VTRVJOQU1FPSguKiknKSk7XG4gIFx0XHRcdHZhciBBUE5Vc2VyID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBBUE5Vc2VyO1xuXHRcdH0sXG5cdFx0J2dldEFQTlBhc3N3b3JkJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE5fUEFTU1dPUkQ9KC4qKScpKTtcbiAgXHRcdFx0dmFyIEFQTlBhc3N3b3JkID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBBUE5QYXNzd29yZDtcblx0XHR9LFxuXHRcdCdnZXRTaW1DYXJkU3RhdHVzJzogZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHNpbVN0YXR1c1Jlc3VsdCA9ICdVbmtub3duJzsgLy8gRGVmYXVsdCBzdGF0dXNcblxuXHRcdFx0Ly8gRnVuY3Rpb24gdG8gZXhlY3V0ZSBjb21tYW5kIGFuZCBoYW5kbGUgZXJyb3JzXG5cdFx0XHRmdW5jdGlvbiBleGVjdXRlQ29tbWFuZChjb21tYW5kKSB7XG5cdFx0XHRcdGxldCByZXN1bHQ7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gY21kKGNvbW1hbmQpOyAvLyBFeGVjdXRlIHRoZSBjb21tYW5kXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHJlc3VsdCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgcmVzdWx0IGlzIGFuIGVycm9yIG9iamVjdFxuXHRcdFx0XHRcdFx0cmV0dXJuICdFcnJvcic7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdC8vIEhhbmRsZSBleGNlcHRpb25zIGlmIGNvbW1hbmQgZXhlY3V0aW9uIGZhaWxzXG5cdFx0XHRcdFx0cmV0dXJuICdFcnJvcic7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDsgLy8gUmV0dXJuIHRoZSByZXN1bHQgaWYgbm8gZXJyb3JzXG5cdFx0XHR9XG5cblx0XHRcdC8vIEV4ZWN1dGUgU0lNIGNhcmQgc3RhdHVzIGNoZWNrIGNvbW1hbmRcblx0XHRcdGxldCBzaW1TdGF0dXMgPSBleGVjdXRlQ29tbWFuZChcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS11aW0tZ2V0LWNhcmQtc3RhdHVzIHwgZ3JlcCAnQ2FyZCBzdGF0ZTonXCIpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJTSU0gY2FyZCBzdGF0dXM6XCIsIHNpbVN0YXR1cyk7IC8vIExvZyB0aGUgcmF3IG91dHB1dFxuXHRcdFx0Ly8gUHJvY2VzcyB0aGUgb3V0cHV0IGFuZCBkZXRlcm1pbmUgU0lNIGNhcmQgc3RhdHVzXG5cdFx0XHRpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKCduby1hdHItcmVjZWl2ZWQnKSB8fCBzaW1TdGF0dXMuaW5jbHVkZXMoJ25vdC1pbnNlcnRlZCcpKSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9ICdObyBTSU0gY2FyZCc7XG5cdFx0XHR9IGVsc2UgaWYgKHNpbVN0YXR1cy5pbmNsdWRlcygnZXJyb3InKSkge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSBzaW1TdGF0dXM7IC8vIFVzZSB0aGUgZXJyb3IgbWVzc2FnZSBvciBubyBTSU0gZGV0ZWN0ZWQgbWVzc2FnZVxuXHRcdFx0fSBlbHNlIGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoJ3ByZXNlbnQnKSkge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSAnT0snO1xuXHRcdFx0fSBlbHNlIGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoJ2xvY2tlZCcpIHx8IHNpbVN0YXR1cy5pbmNsdWRlcygncGluLXJlcXVpcmVkJykpIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gJ1NJTSBjYXJkIGxvY2tlZCwgUElOIHJlcXVpcmVkJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9ICdVbmtub3duJzsgLy8gRm9yIG90aGVyIHN0YXR1c2VzXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc2ltU3RhdHVzUmVzdWx0O1xuXHRcdH0sXG5cdFx0J2dldFNpbVBpbic6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnU0lNX1BJTj0oLiopJykpO1xuICBcdFx0XHR2YXIgU2ltUGluID0gbWF0Y2hbMV07XG5cdFx0XHRyZXR1cm4gU2ltUGluO1xuXHRcdH0sXG5cdFx0J3NldFNpbVBpbic6IGZ1bmN0aW9uKFBJTikge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnU0lNX1BJTj0uKicpKSwgJ1NJTV9QSU49JytQSU4pO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdzZXRBUE4nOiBmdW5jdGlvbihBUE4sIHVzZXIsIHBhc3N3b3JkKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49LionKSksICdBUE49JytBUE4pO1xuICBcdFx0XHQvLyB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTj0oLiopJykpWzFdLCBBUE4pO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdzZXRBUE5Vc2VyJzogZnVuY3Rpb24oQVBOVXNlcikge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1VTRVJOQU1FPS4qJykpLCAnQVBOX1VTRVJOQU1FPScrQVBOVXNlcik7XG4gIFx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOUGFzc3dvcmQnOiBmdW5jdGlvbihBUE5QYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1BBU1NXT1JEPS4qJykpLCAnQVBOX1BBU1NXT1JEPScrQVBOUGFzc3dvcmQpO1xuICBcdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFJlbW90ZVN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN5c3RlbWN0bCBpcy1hY3RpdmUgcmVtb3RlLWlvdC5zZXJ2aWNlID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIDEgfHwgZWNobyAwXCIpO1xuXHRcdFx0aWYgKHJlc1swXSA9PSBcIjFcIikgeyAvLyBbMF0gaXMgYSBoYWNrIGJlY2F1c2UgdGhlIHJlc3VsdCByZXMgaGFzIG9uZSBleHRyYSBjaGFyYWN0ZXJcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdCdnZXRBdXRvU3luY1N0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN5c3RlbWN0bCBpcy1hY3RpdmUgYXV0b3N5bmMuc2VydmljZSA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyAxIHx8IGVjaG8gMFwiKTtcblx0XHRcdGlmIChyZXNbMF0gPT0gXCIxXCIpIHsgLy8gWzBdIGlzIGEgaGFjayBiZWNhdXNlIHRoZSByZXN1bHQgcmVzIGhhcyBvbmUgZXh0cmEgY2hhcmFjdGVyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQnZ2V0U2hhcmVJbnRlcm5ldFZpYUV0aGVybmV0U3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaXNTaGFyaW5nO1xuXHRcdFx0aXNTaGFyaW5nID0gY21kKFwiKHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1MIFBPU1RST1VUSU5HIC12IC1uIHwgZ3JlcCAtcSAnTUFTUVVFUkFERSAgYWxsICAtLSAgKiAgICAgIGV0aDAnICYmIGlwIGxpbmsgc2hvdyBldGgwIHwgZ3JlcCAtcSAnc3RhdGUgVVAnKSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiKTtcblx0XHRcdHJldHVybiBpc1NoYXJpbmc7XG5cdFx0fSxcblx0XHQnZ2V0U2hhcmVJbnRlcm5ldFZpYU1vYmlsZVN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlzU2hhcmluZztcblx0XHRcdGlzU2hhcmluZyA9IGNtZChcIihzdWRvIGlwdGFibGVzIC10IG5hdCAtTCBQT1NUUk9VVElORyAtdiAtbiB8IGdyZXAgLXEgJ01BU1FVRVJBREUgIGFsbCAgLS0gICogICAgICB3d2FuMCcgJiYgaXAgbGluayBzaG93IHd3YW4wIHwgZ3JlcCAtcSAnc3RhdGUgVVAnKSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiKTtcblx0XHRcdHJldHVybiBpc1NoYXJpbmc7XG5cdFx0fSxcblx0XHQnYWN0aXZhdGVJbnRlcm5ldFNoYXJpbmcnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHdpZmktYXAuY29uZmlnIHNldCBzaGFyZS5kaXNhYmxlZD1mYWxzZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZGlzYWN0aXZhdGVJbnRlcm5ldFNoYXJpbmcnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHdpZmktYXAuY29uZmlnIHNldCBzaGFyZS5kaXNhYmxlZD10cnVlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdhY3RpdmF0ZVJlbW90ZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0YXJ0IHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdkaXNhY3RpdmF0ZVJlbW90ZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGRpc2FibGUgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdhY3RpdmF0ZUF1dG9TeW5jJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RhcnQgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZGlzYWN0aXZhdGVBdXRvU3luYyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBkaXNhYmxlIGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldEJhdHRlcnlTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHR2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGg7XG5cdFx0XHRyZXMgPSBjbWQoXCJweXRob24zIFwiK3NjcmlwdHNQYXRoK1wiL3BpanVpY2Vfc3RhdHVzLnB5XCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJweXRob24zIC9ob21lL3VidW50dS9zY3JpcHRzL3BpanVpY2Vfc3RhdHVzLnB5XCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdC8vICdnZXRJc09ubGluZSc6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0dmFyIHJlcztcblx0XHQvLyBcdHZhciBzY3JpcHRzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5zY3JpcHRzUGF0aDtcblx0XHQvLyBcdC8vIE1ha2Ugc3VyZSB5b3VyIHNjcmlwdCBpcyBleGVjdXRhYmxlLCBlLmcuLCBjaG1vZCAreCBjaGVja19pbnRlcm5ldC5zaFxuXHRcdC8vIFx0cmVzID0gY21kKFwiYmFzaCBcIiArIHNjcmlwdHNQYXRoICsgXCIvY2hlY2tfaW50ZXJuZXQuc2hcIik7IC8vIFJlcGxhY2UgJ2Jhc2gnIHdpdGggJ3NoJyBpZiBuZWVkZWRcblx0XHQvLyBcdC8vIFRoZSBzY3JpcHQgcmV0dXJucyBcInRydWVcIiBvciBcImZhbHNlXCIgYXMgYSBzdHJpbmcsIHNvIHdlIGNvbXBhcmUgdGhlIHJlc3VsdCBkaXJlY3RseVxuXHRcdC8vIFx0cmV0dXJuIHJlcy50cmltKCkgPT09IFwidHJ1ZVwiOyAvLyBUaGlzIGNvbnZlcnRzIHRoZSBzdHJpbmcgdG8gYSBib29sZWFuXG5cdFx0Ly8gfSxcblx0XHQnZ2V0SXNPbmxpbmUnOiBmdW5jdGlvbigpIHtcblx0XHRcdGxldCByZXM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXMgPSBjbWQoXCJwaW5nIC1jIDEgZ29vZ2xlLmNvbVwiKTtcblx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHBpbmcgY29tbWFuZCB3YXMgc3VjY2Vzc2Z1bCBiYXNlZCBvbiB0aGUgb3V0cHV0XG5cdFx0XHRcdGxldCBpc09ubGluZSA9IHJlcy5pbmNsdWRlcyhcIjEgcGFja2V0cyByZWNlaXZlZFwiKSB8fCByZXMuaW5jbHVkZXMoXCIxIHJlY2VpdmVkXCIpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIk9ubGluZSBzdGF0dXM6XCIsIGlzT25saW5lKTsgLy8gQ29ycmVjdGx5IGxvZ2dpbmcgdGhlIGJvb2xlYW4gcmVzdWx0XG5cdFx0XHRcdHJldHVybiBpc09ubGluZTsgLy8gRGlyZWN0bHkgcmV0dXJuIHRoZSBib29sZWFuIHZhbHVlXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHQvLyBJZiBhbiBlcnJvciBvY2N1cnMgKHdoaWNoIGNvdWxkIGluY2x1ZGUgYmVpbmcgdW5hYmxlIHRvIHJ1biB0aGUgcGluZyBjb21tYW5kKSwgYXNzdW1lIG9mZmxpbmVcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciBvciBvZmZsaW5lOlwiLCBlcnJvcik7XG5cdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gQXNzdW1lIG9mZmxpbmUgaWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2dldEV0aDBJUCc6IGZ1bmN0aW9uKCkgeyAvLyBHZXQgSVAgb2YgYm94XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcInJlc3VsdCA6IFwiK1wiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiaXAgOiBcIitcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIFwiK2ludGVyZmFjZStcIiAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFd3YW4wSVAnOiBmdW5jdGlvbigpIHsgLy8gR2V0IElQIG9mIGJveFxuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vY29uc29sZS5sb2coXCJyZXN1bHQgOiBcIitcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmVzID0gY21kKFwiaXAgYWRkciBzaG93IHd3YW4wIHwgZ3JlcCBcXFwiaW5ldFxcXFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblxuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImlwIDogXCIrXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBcIitpbnRlcmZhY2UrXCIgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXG5cdFx0J2dldEJlZWtlZU9zVmVyc2lvbic6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG5cdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0JFRUtFRV9PU19WRVJTSU9OPSguKiknKSk7XG5cdFx0XHR2YXIgc2VyaWFsID0gbWF0Y2hbMV07XG5cdFx0XHRyZXR1cm4gc2VyaWFsO1xuXHRcdH0sXG5cdFx0J2dldEJlZWtlZUhvbWVWZXJzaW9uJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRqc29uID0gSlNPTi5wYXJzZShBc3NldHMuZ2V0VGV4dChcInZlcnNpb24uanNvblwiKSk7XG5cdFx0XHRyZXR1cm4ganNvbi52ZXJzaW9uO1xuXHRcdH0sXG5cdFx0J3Jlc3RhcnRNb2JpbGVDb25uZWN0JzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgcmVzdGFydCBtb2JpbGVfY29ubmVjdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlczsnJ1xuXHRcdH0sXG5cdFx0J2dldEludGVybmV0SW50ZXJmYWNlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgcmVzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzID0gY21kKFwiaXAgcm91dGUgZ2V0IDEuMi4zLjQgfCBhd2sgJ3twcmludCAkNTsgZXhpdH0nXCIpOyAvLyBFeGVjdXRlIHRoZSBjb21tYW5kXG5cdFx0XHRcdGlmIChyZXMudHJpbSgpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcy50cmltKCk7IC8vIFJldHVybiB0aGUgY2xlYW5lZC11cCByZXN1bHQgaWYgbm90IGVtcHR5XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuICdVbmtub3duJzsgLy8gUmV0dXJuIGEgZGVmYXVsdCBtZXNzYWdlIGlmIHRoZSByZXN1bHQgaXMgZW1wdHlcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Ly8gSGFuZGxlIGNhc2VzIHdoZXJlIHRoZSBjb21tYW5kIGZhaWxzIG9yIGlzIG5vdCBmb3VuZFxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHJldHJpZXZpbmcgaW50ZXJuZXQgaW50ZXJmYWNlOlwiLCBlcnJvcik7XG5cdFx0XHRcdHJldHVybiAnRXJyb3InOyAvLyBSZXR1cm4gYW4gZXJyb3IgbWVzc2FnZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8gJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdC8vIENvbW1hbmQgdG8gbGlzdCBGT1JXQVJEIHJ1bGVzXG5cdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG5cdFx0Ly8gXHRjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yIHx8IHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvciB8fCBzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciB8fCBuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cblx0XHQvLyBcdFx0Ly8gQ2hlY2sgZm9yIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBydWxlc1xuXHRcdC8vIFx0XHR2YXIgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgPSBzdGRvdXQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIGV0aDAnKSAmJiBzdGRvdXQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coXCJpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZDogXCIraXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQpO1xuXHRcdC8vIFx0XHQvLyBFeHRyYWN0IE1BQyBhZGRyZXNzIHJ1bGVzXG5cdFx0Ly8gXHRcdHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIGV0aDAvO1xuXHRcdC8vIFx0XHR2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cblx0XHQvLyBcdFx0Ly8gRGV0ZXJtaW5lIHRoZSBzdGF0dXMgYmFzZWQgb24gdGhlIHJ1bGVzIGZvdW5kXG5cdFx0Ly8gXHRcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAxXCIpO1xuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSB7Y29uc29sZS5sb2coXCJzdGVwMTJcIik7IGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9KTt9XG5cdFx0Ly8gXHRcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAyXCIpO1xuXG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH0pO1xuXHRcdC8vIFx0XHR9IGVsc2Uge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDNcIik7XG5cblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGRpc2FibGVkIG9yIG5vdCBjb25maWd1cmVkIGFzIGV4cGVjdGVkXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9KTtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fSk7XG5cdFx0Ly8gfSxcblxuXG5cblxuXHRcdFx0Ly8gICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coJ1N0YXJ0aW5nIHRvIGdldCBpbnRlcm5ldCBzaGFyaW5nIHN0YXR1cyBmb3IgRXRoZXJuZXQuLi4nKTtcblx0XHRcdC8vIFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtbiAtLWxpbmUtbnVtYmVyJztcblxuXHRcdFx0Ly8gXHQvLyBTaW5jZSBjbWQgaXMgYWxyZWFkeSB3cmFwcGVkIGJ5IE1ldGVvci53cmFwQXN5bmMoZXhlYyksXG5cdFx0XHQvLyBcdC8vIGl0IHNob3VsZCByZXR1cm4geyBzdGRvdXQsIHN0ZGVyciB9IGRpcmVjdGx5LlxuXHRcdFx0Ly8gXHR0cnkge1xuXHRcdFx0Ly8gXHQgIHZhciB7IHN0ZG91dCwgc3RkZXJyIH0gPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHQvLyBcdCAgaWYgKHN0ZGVycikge1xuXHRcdFx0Ly8gXHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtzdGRlcnJ9YCk7XG5cdFx0XHQvLyBcdFx0Ly8gSXQncyBiZXR0ZXIgdG8gcmV0dXJuIGEgbWVhbmluZ2Z1bCBlcnJvciB0byB0aGUgY2xpZW50LlxuXHRcdFx0Ly8gXHRcdHJldHVybiB7IGVycm9yOiBcIkVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlc1wiLCBkZXRhaWxzOiBzdGRlcnIgfTtcblx0XHRcdC8vIFx0ICB9XG5cblx0XHRcdC8vIFx0ICBjb25zb2xlLmxvZygnQW5hbHl6aW5nIGlwdGFibGVzIEZPUldBUkQgcnVsZXMgb3V0cHV0Li4uJyk7XG5cdFx0XHQvLyBcdCAgLy8gQ2hlY2sgZm9yIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBydWxlc1xuXHRcdFx0Ly8gXHQgIHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IHN0ZG91dC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuXHRcdFx0Ly8gXHQgIGNvbnNvbGUubG9nKGBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZDogJHtpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZH1gKTtcblxuXHRcdFx0Ly8gXHQgIC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcblx0XHRcdC8vIFx0ICB2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSBldGgwLztcblx0XHRcdC8vIFx0ICB2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cdFx0XHQvLyBcdCAgY29uc29sZS5sb2coYE1BQyBhZGRyZXNzIGZvdW5kOiAke21hdGNoID8gbWF0Y2hbMV0gOiAnTm9uZSd9YCk7XG5cblx0XHRcdC8vIFx0ICAvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcblx0XHRcdC8vIFx0ICBpZiAoaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgJiYgIW1hdGNoKSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsLicpO1xuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdC8vIFx0ICB9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coYEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYSBzcGVjaWZpYyBNQUMgYWRkcmVzczogJHttYXRjaFsxXX1gKTtcblx0XHRcdC8vIFx0XHRyZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9O1xuXHRcdFx0Ly8gXHQgIH0gZWxzZSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWQuJyk7XG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHQvLyBcdCAgfVxuXHRcdFx0Ly8gXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Ly8gXHQgIGNvbnNvbGUuZXJyb3IoYENvbW1hbmQgZXhlY3V0aW9uIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0Ly8gXHQgIC8vIEl0J3MgYmV0dGVyIHRvIHJldHVybiBhIG1lYW5pbmdmdWwgZXJyb3IgdG8gdGhlIGNsaWVudC5cblx0XHRcdC8vIFx0ICByZXR1cm4geyBlcnJvcjogXCJDb21tYW5kIGV4ZWN1dGlvbiBlcnJvclwiLCBkZXRhaWxzOiBlcnJvci50b1N0cmluZygpIH07XG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vICAgfSxcblxuXG5cblx0XHRcdFx0Ly8gICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcblx0XHRcdFx0Ly8gXHR2YXIgY29tbWFuZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdFx0Ly8gXHRpZiAoIWNvbW1hbmRSZXN1bHQpIHtcblx0XHRcdFx0Ly8gXHQgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJjb21tYW5kLWV4ZWN1dGlvbi1lcnJvclwiLCBcIlRoZSBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIpO1xuXHRcdFx0XHQvLyBcdH1cblxuXHRcdFx0XHQvLyBcdHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIGV0aDAnKSAmJiBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG5cdFx0XHRcdC8vIFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2UgZXRoMC87XG5cdFx0XHRcdC8vIFx0dmFyIG1hdGNoID0gY29tbWFuZFJlc3VsdC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuXHRcdFx0XHQvLyBcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHRcdFx0Ly8gXHQgIHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdFx0Ly8gXHR9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0XHRcdC8vIFx0ICByZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9O1xuXHRcdFx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFx0ICByZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdC8vICAgfSxcblxuXG5cblxuXHRcdFx0XHRcdCAgJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0JzogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEJztcblxuXHRcdFx0XHRcdFx0dmFyIGNvbW1hbmRSZXN1bHQgPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXG5cdFx0XHRcdFx0XHRpZiAoIWNvbW1hbmRSZXN1bHQpIHtcblx0XHRcdFx0XHRcdCAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIENoZWNrIGZvciB0aGUgc3BlY2lmaWMgcnVsZSBpbmRpY2F0aW5nIGludGVybmV0IHNoYXJpbmcgZnJvbSB3bGFuMCB0byBldGgwXG5cdFx0XHRcdFx0XHR2YXIgc2hhcmluZ0Zyb21XbGFuVG9FdGggPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHdsYW4wIC1vIGV0aDAgLWogQUNDRVBUJyk7XG5cdFx0XHRcdFx0XHR2YXIgc2hhcmluZ1RvV2xhbkZyb21FdGhFc3RhYmxpc2hlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgZXRoMCAtbyB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyk7XG5cblx0XHRcdFx0XHRcdGlmIChzaGFyaW5nRnJvbVdsYW5Ub0V0aCAmJiBzaGFyaW5nVG9XbGFuRnJvbUV0aEVzdGFibGlzaGVkKSB7XG5cdFx0XHRcdFx0XHQgIC8vIElmIGF0IGxlYXN0IG9uZSBwYWlyIG9mIHJ1bGVzIGV4aXN0cywgaW50ZXJuZXQgc2hhcmluZyBpcyBjb25zaWRlcmVkIGVuYWJsZWQuXG5cdFx0XHRcdFx0XHQgIHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQgIHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCAgfSxcblxuXG5cblxuXG5cblxuXG5cdFx0J2VuYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gW1xuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHRcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGRlcnIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXQgZW5hYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBEZWZpbmUgYSBsaXN0IG9mIGNvbW1hbmRzIHRvIHJlcGVhdGVkbHkgYXR0ZW1wdCBkZWxldGlvbi5cblx0XHRcdHZhciBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gW1xuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XTtcblxuXHRcdFx0Ly8gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhIGNvbW1hbmQgYW5kIHJlY3Vyc2l2ZWx5IGNhbGwgaXRzZWxmIGlmIHRoZSBjb21tYW5kIHdhcyBzdWNjZXNzZnVsIChydWxlIHdhcyBmb3VuZCBhbmQgZGVsZXRlZCkuXG5cdFx0XHRmdW5jdGlvbiBleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjaykge1xuXHRcdFx0XHRjbWQoY29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3Mgbm8gZXJyb3IsIHRoZSBydWxlIHdhcyBmb3VuZCBhbmQgZGVsZXRlZCwgc28gdHJ5IGFnYWluLlxuXHRcdFx0XHRcdGlmICghZXJyb3IpIHtcblx0XHRcdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvciwgaXQgbGlrZWx5IG1lYW5zIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlIGV4aXN0LCBzbyBjYWxsIHRoZSBkb25lQ2FsbGJhY2suXG5cdFx0XHRcdFx0XHRkb25lQ2FsbGJhY2soKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFeGVjdXRlIGRlbGV0aW9uIGZvciBlYWNoIGNvbW1hbmQgYW5kIHRyYWNrIGNvbXBsZXRpb24uXG5cdFx0XHR2YXIgdGFza3NDb21wbGV0ZWQgPSAwO1xuXHRcdFx0aXB0YWJsZXNEZWxldGVDb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG5cdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgKCkgPT4ge1xuXHRcdFx0XHRcdHRhc2tzQ29tcGxldGVkKys7XG5cdFx0XHRcdFx0Ly8gT25jZSBhbGwgZGVsZXRpb24gdGFza3MgYXJlIGRvbmUsIHNhdmUgdGhlIGlwdGFibGVzIGNvbmZpZ3VyYXRpb24uXG5cdFx0XHRcdFx0aWYgKHRhc2tzQ29tcGxldGVkID09PSBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYGlwdGFibGVzIHJ1bGVzIHNhdmVkLmApO1xuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsICdBbGwgc3BlY2lmaWVkIHJ1bGVzIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdC8vICdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdC8vIFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERScsXG5cdFx0Ly8gXHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0Ly8gXHRdLmpvaW4oJyAmJiAnKTtcblxuXHRcdC8vIFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdFx0aWYgKHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBFdGhlcm5ldCBkaXNhYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG5cdFx0Ly8gXHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcblx0XHQvLyBcdH0pO1xuXHRcdC8vIH0sXG5cdFx0J2VuYWJsZUludGVybmV0Rm9yTWFjRXRoZXJuZXQnOiBmdW5jdGlvbihtYWNBZGRyZXNzLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vIENvbW1hbmQgdG8gYWxsb3cgaW50ZXJuZXQgZm9yIHRoZSBzcGVjaWZpZWQgTUFDIGFkZHJlc3Mgb24gZXRoMC5cblx0XHRcdHZhciBhbGxvd01hY0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIGV0aDAgLW0gbWFjIC0tbWFjLXNvdXJjZSAke21hY0FkZHJlc3N9IC1qIEFDQ0VQVGA7XG5cdFx0XHQvLyBDb21tYW5kIHRvIGRyb3AgYWxsIG90aGVyIGludGVybmV0IHRyYWZmaWMgb24gZXRoMC5cblx0XHRcdHZhciBibG9ja090aGVyc0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIGV0aDAgLWogRFJPUGA7XG5cblx0XHRcdC8vIEFsbG93IGludGVybmV0IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzLlxuXHRcdFx0cmVzID0gY21kKGFsbG93TWFjQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBhbGxvd2luZyBNQUMgJHttYWNBZGRyZXNzfTogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBJbnRlcm5ldCBhY2Nlc3MgYWxsb3dlZCBmb3IgTUFDICR7bWFjQWRkcmVzc30uYCk7XG5cblx0XHRcdFx0Ly8gQmxvY2sgYWxsIG90aGVyIE1BQyBhZGRyZXNzZXMgZnJvbSBhY2Nlc3NpbmcgdGhlIGludGVybmV0LlxuXHRcdFx0XHRyZXMgPSBjbWQoYmxvY2tPdGhlcnNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBibG9ja2luZyBvdGhlciBNQUNzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGJsb2NrZWQgZm9yIG90aGVyIE1BQyBhZGRyZXNzZXMuYCk7XG5cdFx0XHRcdFx0Ly8gT3B0aW9uYWxseSwgc2F2ZSB0aGUgaXB0YWJsZXMgc2V0dGluZ3MgdG8gbWFrZSB0aGVtIHBlcnNpc3RlbnQuXG5cdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBzYXZlZC5gKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKG51bGwpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3JlbW92ZUFsbE1hY0ZpbHRlcnNGb3JFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBMaXN0IGFsbCBGT1JXQVJEIHJ1bGVzIHdpdGggbGluZSBudW1iZXJzXG5cdFx0XHRjbWQoJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtLWxpbmUtbnVtYmVycyAtbicsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByb2Nlc3Mgc3Rkb3V0IHRvIGlkZW50aWZ5IHJ1bGVzIHJlbGF0ZWQgdG8gTUFDIGZpbHRlcmluZyBvbiBldGgwXG5cdFx0XHRcdGNvbnN0IGxpbmVzID0gc3Rkb3V0LnNwbGl0KCdcXG4nKTtcblx0XHRcdFx0Y29uc3QgcnVsZU51bWJlcnMgPSBsaW5lcy5yZWR1Y2UoKGFjYywgbGluZSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRpZiAobGluZS5pbmNsdWRlcygnZXRoMCcpICYmIGxpbmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnbWFjJykpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHJ1bGVOdW1iZXIgPSBsaW5lLnNwbGl0KC9cXHMrLylbMF07IC8vIEV4dHJhY3QgdGhlIHJ1bGUgbnVtYmVyLCBhc3N1bWluZyBpdCdzIHRoZSBmaXJzdCBlbGVtZW50XG5cdFx0XHRcdFx0XHRhY2MucHVzaChydWxlTnVtYmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdFx0fSwgW10pO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBpZGVudGlmaWVkIHJ1bGVzIHN0YXJ0aW5nIGZyb20gdGhlIGhpZ2hlc3QgbnVtYmVyIHRvIHByZXZlbnQgc2hpZnRpbmcgb2YgbGluZSBudW1iZXJzXG5cdFx0XHRcdHJ1bGVOdW1iZXJzLnNvcnQoKGEsIGIpID0+IGIgLSBhKS5mb3JFYWNoKHJ1bGVOdW1iZXIgPT4ge1xuXHRcdFx0XHRcdGNtZChgc3VkbyBpcHRhYmxlcyAtRCBGT1JXQVJEICR7cnVsZU51bWJlcn1gLCAocmVtb3ZlRXJyb3IsIHJlbW92ZVN0ZG91dCwgcmVtb3ZlU3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAocmVtb3ZlRXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgcmVtb3ZpbmcgcnVsZSAke3J1bGVOdW1iZXJ9OiAke3JlbW92ZUVycm9yfWApO1xuXHRcdFx0XHRcdFx0XHQvLyBEZWNpZGUgaWYgeW91IHdhbnQgdG8gY29udGludWUgcmVtb3Zpbmcgb3RoZXIgcnVsZXMgb3Igc3RvcCBoZXJlXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBSdWxlICR7cnVsZU51bWJlcn0gcmVtb3ZlZCBzdWNjZXNzZnVsbHkuYCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIEFmdGVyIGF0dGVtcHRpbmcgdG8gcmVtb3ZlIGFsbCBpZGVudGlmaWVkIHJ1bGVzLCBzYXZlIHRoZSBpcHRhYmxlcyBjb25maWd1cmF0aW9uXG5cdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKHNhdmVFcnJvciwgc2F2ZVN0ZG91dCwgc2F2ZVN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdGlmIChzYXZlRXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtzYXZlRXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHNhdmVFcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdpcHRhYmxlcyBydWxlcyB1cGRhdGVkIGFuZCBzYXZlZC4nKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsICdBbGwgTUFDIGZpbHRlciBydWxlcyBmb3IgRXRoZXJuZXQgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNNb2JpbGUnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXG5cdFx0XHR2YXIgY29tbWFuZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdGlmICghY29tbWFuZFJlc3VsdCkge1xuXHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkanVzdGVkIHRvIGNoZWNrIGZvciB0aGUgc3BlY2lmaWMgcnVsZSBpbmRpY2F0aW5nIGludGVybmV0IHNoYXJpbmcgZnJvbSB3bGFuMCB0byB3d2FuMFxuXHRcdFx0dmFyIHNoYXJpbmdGcm9tV2xhblRvV3dhbiA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd2xhbjAgLW8gd3dhbjAgLWogQUNDRVBUJyk7XG5cdFx0XHR2YXIgc2hhcmluZ1RvV2xhbkZyb21Xd2FuRXN0YWJsaXNoZWQgPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCctQSBGT1JXQVJEIC1pIHd3YW4wIC1vIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnKTtcblxuXHRcdFx0aWYgKHNoYXJpbmdGcm9tV2xhblRvV3dhbiAmJiBzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCkge1xuXHRcdFx0Ly8gSWYgYXQgbGVhc3Qgb25lIHBhaXIgb2YgcnVsZXMgZXhpc3RzLCBpbnRlcm5ldCBzaGFyaW5nIHRvIHRoZSBtb2JpbGUgaW50ZXJmYWNlIGlzIGNvbnNpZGVyZWQgZW5hYmxlZC5cblx0XHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0Ly8gXHQvLyBDb21tYW5kIHRvIGxpc3QgRk9SV0FSRCBydWxlc1xuXHRcdC8vIFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtbiAtLWxpbmUtbnVtYmVyJztcblxuXHRcdC8vIFx0Y21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0Ly8gXHRcdGlmIChlcnJvciB8fCBzdGRlcnIpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIEZPUldBUkQgcnVsZXM6ICR7ZXJyb3IgfHwgc3RkZXJyfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IgfHwgbmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXG5cdFx0Ly8gXHRcdC8vIENoZWNrIGZvciBnZW5lcmFsIGludGVybmV0IHNoYXJpbmcgcnVsZXNcblx0XHQvLyBcdFx0dmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gc3Rkb3V0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSB3d2FuMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuXG5cdFx0Ly8gXHRcdC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcblx0XHQvLyBcdFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2Ugd3dhbjAvO1xuXHRcdC8vIFx0XHR2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cblx0XHQvLyBcdFx0Ly8gRGV0ZXJtaW5lIHRoZSBzdGF0dXMgYmFzZWQgb24gdGhlIHJ1bGVzIGZvdW5kXG5cdFx0Ly8gXHRcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGFsbFxuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH0pO1xuXHRcdC8vIFx0XHR9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH0pO1xuXHRcdC8vIFx0XHR9IGVsc2Uge1xuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWRcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH0pO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXG5cdFx0J2VuYWJsZUludGVybmV0U2hhcmluZ01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJyxcblx0XHRcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcblx0XHRcdF0uam9pbignICYmICcpO1xuXG5cdFx0XHRjbWQoaXB0YWJsZXNDb21tYW5kcywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3RkZXJyKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgdmlhIG1vYmlsZSBlbmFibGVkIHN1Y2Nlc3NmdWxseS4nKTtcblx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCBzdGRvdXQpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZGlzYWJsZUludGVybmV0U2hhcmluZ01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBEZWZpbmUgY29tbWFuZHMgZm9yIGRlbGV0aW9uIHdpdGhvdXQgY29tYmluaW5nIHRoZW1cblx0XHRcdHZhciBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gW1xuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREUnXG5cdFx0XHRdO1xuXG5cdFx0XHQvLyBGdW5jdGlvbiB0byByZWN1cnNpdmVseSBleGVjdXRlIGEgY29tbWFuZCB1bnRpbCBpdCBmYWlscyAoaW5kaWNhdGluZyBubyBtb3JlIGluc3RhbmNlcyBvZiB0aGUgcnVsZSlcblx0XHRcdGZ1bmN0aW9uIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKSB7XG5cdFx0XHRcdGNtZChjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0Ly8gTm8gZXJyb3IgbWVhbnMgdGhlIGNvbW1hbmQgc3VjY2VlZGVkLCBzbyB0aGVyZSBtaWdodCBiZSBtb3JlIGluc3RhbmNlc1xuXHRcdFx0XHRcdGlmICghZXJyb3IpIHtcblx0XHRcdFx0XHRcdGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gRXJyb3IgbGlrZWx5IG1lYW5zIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlLCBtb3ZlIG9uXG5cdFx0XHRcdFx0XHRkb25lQ2FsbGJhY2soKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFeGVjdXRlIGRlbGV0aW9uIGZvciBlYWNoIGNvbW1hbmQgYW5kIHRyYWNrIHdoZW4gYWxsIGFyZSBjb21wbGV0ZWRcblx0XHRcdHZhciB0YXNrc0NvbXBsZXRlZCA9IDA7XG5cdFx0XHRpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcblx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCAoKSA9PiB7XG5cdFx0XHRcdFx0dGFza3NDb21wbGV0ZWQrKztcblx0XHRcdFx0XHQvLyBBZnRlciBhbGwgY29tbWFuZHMgaGF2ZSBiZWVuIGF0dGVtcHRlZCwgc2F2ZSB0aGUgY29uZmlndXJhdGlvblxuXHRcdFx0XHRcdGlmICh0YXNrc0NvbXBsZXRlZCA9PT0gaXB0YWJsZXNEZWxldGVDb21tYW5kcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzYXZlU3Rkb3V0LCBzYXZlU3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2lwdGFibGVzIHJ1bGVzIGZvciBtb2JpbGUgaW50ZXJmYWNlIHVwZGF0ZWQgYW5kIHNhdmVkLicpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsICdBbGwgc3BlY2lmaWVkIHJ1bGVzIGZvciBtb2JpbGUgaW50ZXJmYWNlIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdC8vICdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gW1xuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREUnLFxuXHRcdC8vIFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdC8vIFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHQvLyBcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0Ly8gXHRcdGlmIChlcnJvcikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGlmIChzdGRlcnIpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgbW9iaWxlIGRpc2FibGVkIHN1Y2Nlc3NmdWxseS4nKTtcblx0XHQvLyBcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCBzdGRvdXQpO1xuXHRcdC8vIFx0fSk7XG5cdFx0Ly8gfSxcblx0XHQnYWxsb3dJbnRlcm5ldEZvck1hY01vYmlsZSc6IGZ1bmN0aW9uKG1hY0FkZHJlc3MsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0Ly8gRmlyc3QsIGVuYWJsZSBnZW5lcmFsIGludGVybmV0IHNoYXJpbmcgZnJvbSB3bGFuMCB0byB3d2FuMFxuXHRcdFx0cmVzID0gY21kKCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCAmJiBzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgZW5hYmxpbmcgaW50ZXJuZXQgc2hhcmluZzogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBJbnRlcm5ldCBzaGFyaW5nIGVuYWJsZWQgdmlhIHd3YW4wLmApO1xuXHRcdFx0XHQvLyBBbGxvdyBpbnRlcm5ldCBvbmx5IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzIG9uIHd3YW4wXG5cdFx0XHRcdHZhciBhbGxvd01hY0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtSSBGT1JXQVJEIDEgLWkgd3dhbjAgLW0gbWFjIC0tbWFjLXNvdXJjZSAke21hY0FkZHJlc3N9IC1qIEFDQ0VQVGA7XG5cdFx0XHRcdC8vIEJsb2NrIGFsbCBvdGhlciBNQUMgYWRkcmVzc2VzIGZyb20gYWNjZXNzaW5nIHRoZSBpbnRlcm5ldCB2aWEgd3dhbjAuXG5cdFx0XHRcdHZhciBibG9ja090aGVyc0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIHd3YW4wIC1qIERST1BgO1xuXG5cdFx0XHRcdC8vIEFsbG93IHNwZWNpZmljIE1BQ1xuXHRcdFx0XHRyZXMgPSBjbWQoYWxsb3dNYWNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBhbGxvd2luZyBNQUMgJHttYWNBZGRyZXNzfSBvbiBXV0FOOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBhbGxvd2VkIGZvciBNQUMgJHttYWNBZGRyZXNzfSBvbiBXV0FOLmApO1xuXG5cdFx0XHRcdFx0Ly8gQmxvY2sgYWxsIG90aGVyIE1BQ3Ncblx0XHRcdFx0XHRyZXMgPSBjbWQoYmxvY2tPdGhlcnNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgYmxvY2tpbmcgb3RoZXIgTUFDcyBvbiBXV0FOOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBibG9ja2VkIGZvciBvdGhlciBNQUMgYWRkcmVzc2VzIG9uIFdXQU4uYCk7XG5cblx0XHRcdFx0XHRcdC8vIFNhdmUgaXB0YWJsZXMgcnVsZXNcblx0XHRcdFx0XHRcdGNtZCgnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBzYXZpbmcgaXB0YWJsZXMgcnVsZXMgZm9yIFdXQU46ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgZm9yIFdXQU4gc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKG51bGwpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQncmVtb3ZlQWxsTWFjRmlsdGVyc0Zvck1vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBMaXN0IGFsbCBGT1JXQVJEIHJ1bGVzXG5cdFx0XHRjbWQoJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtLWxpbmUtbnVtYmVycyAtbicsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9jZXNzIHN0ZG91dCB0byBmaW5kIHJ1bGVzIHRvIGRlbGV0ZS4gVGhpcyBwYXJ0IGlzIHBzZXVkby1jb2RlIGFuZCBuZWVkcyBhZGp1c3RtZW50XG5cdFx0XHRcdGNvbnN0IGxpbmVzID0gc3Rkb3V0LnNwbGl0KCdcXG4nKTtcblx0XHRcdFx0Y29uc3QgcnVsZU51bWJlcnMgPSBbXTtcblx0XHRcdFx0bGluZXMuZm9yRWFjaChsaW5lID0+IHtcblx0XHRcdFx0XHRpZiAobGluZS5pbmNsdWRlcygnd3dhbjAnKSAmJiBsaW5lLmluY2x1ZGVzKCdNQUMnKSkge1xuXHRcdFx0XHRcdFx0Ly8gRXh0cmFjdCB0aGUgcnVsZSBudW1iZXIgZnJvbSB0aGUgbGluZVxuXHRcdFx0XHRcdFx0Y29uc3QgcnVsZU51bWJlciA9IGxpbmUuc3BsaXQoJyAnKVswXTsgLy8gVGhpcyBpcyBhIHNpbXBsaWZpY2F0aW9uXG5cdFx0XHRcdFx0XHRydWxlTnVtYmVycy5wdXNoKHJ1bGVOdW1iZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIHJ1bGVzIGJ5IHRoZWlyIG51bWJlcnMsIHN0YXJ0aW5nIGZyb20gdGhlIGhpZ2hlc3QgbnVtYmVyXG5cdFx0XHRcdHJ1bGVOdW1iZXJzLnNvcnQoKGEsIGIpID0+IGIgLSBhKS5mb3JFYWNoKHJ1bGVOdW1iZXIgPT4ge1xuXHRcdFx0XHRcdGNtZChgc3VkbyBpcHRhYmxlcyAtRCBGT1JXQVJEICR7cnVsZU51bWJlcn1gLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgcmVtb3ZpbmcgcnVsZSAke3J1bGVOdW1iZXJ9OiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdFx0Ly8gT3B0aW9uYWxseSwgc3RvcCB0aGUgcHJvY2VzcyBvciBjb250aW51ZSBhdHRlbXB0aW5nIHRvIHJlbW92ZSBvdGhlciBydWxlc1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgUnVsZSAke3J1bGVOdW1iZXJ9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBBZnRlciBhbGwgcnVsZXMgaGF2ZSBiZWVuIHByb2Nlc3NlZCwgc2F2ZSB0aGUgaXB0YWJsZXMgcnVsZXNcblx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2lwdGFibGVzIHJ1bGVzIHVwZGF0ZWQgYW5kIHNhdmVkLicpO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgJ0FsbCBNQUMgZmlsdGVyIHJ1bGVzIGZvciBXV0FOIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQncmVib290JzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKCdzdWRvIHJlYm9vdCcsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHQgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdCAgcmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3NodXRkb3duJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKCdzdWRvIGhhbHQnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0ICBjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdFx0XHQgIHJldHVybjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdzeW5jaHJvbml6ZSc6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIHN5bmMuLi5cIik7XG5cblx0XHRcdHZhciBkZXZpY2VTZXJpYWwgPSBNZXRlb3Iuc2V0dGluZ3MucHVibGljLnNlcmlhbDtcblx0XHRcdHZhciBkZXZpY2VUb2tlbiA9IE1ldGVvci5zZXR0aW5ncy5tb29kbGVBUElUb2tlbjtcblx0XHRcdHZhciB1cmwgPSBNZXRlb3Iuc2V0dGluZ3MuY2xvdWRVUkwgKyBcIi9hcGkvc3RhcnRTeW5jXCI7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQnZGV2aWNlU2VyaWFsJzogZGV2aWNlU2VyaWFsLFxuXHRcdFx0XHRcdCdkZXZpY2VUb2tlbic6IGRldmljZVRva2VuXG5cdFx0XHRcdH0sXG5cdFx0XHQgICAgbnBtUmVxdWVzdE9wdGlvbnM6IHtcblx0XHRcdCAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSwgLy8gVE9ETyByZW1vdmUgd2hlbiBkZXBsb3lcblx0XHRcdCAgICAgICAgdGltZW91dDogMTIwMDAwMFxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgdGltZW91dDogMTIwMDAwMFxuXHRcdFx0fVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly92YXIgcmVzdWx0ID0gSFRUUC5jYWxsKCdQT1NUJywgdXJsLCBvcHRpb25zKTtcblxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gSFRUUC5wb3N0KCB1cmwsIG9wdGlvbnMgKTtcblx0XHRcdFx0dmFyIHJlc3VsdENvbnRlbnQgPSByZXN1bHQuY29udGVudDtcblx0XHRcdFx0Ly9TeW5jaHJvbml6YXRpb25zLmluc2VydCh7ZGF0ZTpEYXRlLm5vdygpfSk7XG5cdFx0XHRcdHJldHVybiByZXN1bHRDb250ZW50O1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCBcIkVycm9yIHdoaWxlIHRyeWluZyB0byBzeW5jcm9uaXplLi4uXCIsIGUgKTtcblx0XHRcdFx0cmV0dXJuIFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi4gXCIrIGU7XG5cdFx0XHR9XG5cdFx0Ly9yZXR1cm4gcmVzdWx0Q29udGVudDtcblx0XHR9LFxuXHR9KTtcbn1cbn0pOyIsIi8vIE1ldGVvci5wdWJsaXNoKCdhbGxBcHBzJywgZnVuY3Rpb24oKSB7XG4vLyBcdHJldHVybiBBcHBzLmZpbmQoe30pO1xuLy8gfSk7XG5cbi8vIE1ldGVvci5wdWJsaXNoKFwidXNlcnNcIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKHt9LCB7ZmllbGRzOntjcmVhdGVkQXQ6IHRydWUsIHByb2ZpbGU6IHRydWUsIGVtYWlsczogdHJ1ZSwgdXNlcm5hbWU6IHRydWV9fSk7XG4vLyB9KTtcblxuXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICB9KTsiLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcblxuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9hcHBzLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvc3luY2hyb25pemF0aW9ucy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL3VzZXJzLmpzJztcblxuaW1wb3J0ICcuLi9zZXJ2ZXIvZml4dHVyZXMuanMnO1xuaW1wb3J0ICcuLi9zZXJ2ZXIvbWV0aG9kcy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci9wdWJsaWNhdGlvbnMuanMnO1xuaW1wb3J0ICcuLi9saWIvYXBwX2xvYWRlci5qcyc7XG5cblxuLy9pbXBvcnQge0REUH0gZnJvbSAnbWV0ZW9yL2RkcCc7XG4vL2ltcG9ydCB7QWNjb3VudHN9IGZyb20gJ21ldGVvci9hY2NvdW50cy1iYXNlJztcblxuXG4vLyBpbXBvcnQgJy4uL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXIvZml4dHVyZXMuanMnO1xuXG4vLyBpbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2ZpeHR1cmVzLmpzJztcblxuXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG5cdGNvbnNvbGUubG9nKFwibWV0ZW9yIHN0YXJ0ZWQuLi5cIik7XG5cblxuXG4gIC8vIGNvZGUgdG8gcnVuIG9uIHNlcnZlciBhdCBzdGFydHVwXG5cbiAvLyAgU2VydmVyMiA9IEREUC5jb25uZWN0KFwiaHR0cDovL2JlZWtlZS5ib3g6ODNcIik7XG5cdC8vIEFjY291bnRzLmNvbm5lY3Rpb24gPSBTZXJ2ZXIyO1xuXHQvLyBjb25zb2xlLmxvZyhcIm9uIGNvbm5lY3RlLi4uXCIpO1xufSk7XG4iXX0=
