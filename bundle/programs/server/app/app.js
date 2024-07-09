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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiYWRkQ2xhc3MiLCJmYWRlT3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnQiLCJBcHBzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJhbGxvdyIsImluc2VydCIsInVwZGF0ZSIsInVzZXJJZCIsInNwYWNlIiwicHVibGlzaCIsImFwcHNQdWJsaWNhdGlvbiIsImZpbmQiLCJTeW5jaHJvbml6YXRpb25zIiwic3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uIiwiaXNBZG1pbiIsImNvbnNvbGUiLCJsb2ciLCJSb2xlcyIsInVzZXJJc0luUm9sZSIsInVzZXIiLCJyb2xlQXNzaWdubWVudCIsInJlYWR5IiwiY3JlYXRlUm9sZSIsInVubGVzc0V4aXN0cyIsInVzZXJzIiwiY291bnQiLCJhZG1pblBhc3N3b3JkIiwic2V0dGluZ3MiLCJ1c2VybmFtZSIsInJvbGVzIiwiXyIsImVhY2giLCJpZCIsIkFjY291bnRzIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJwcm9maWxlIiwibmFtZSIsImxlbmd0aCIsImFkZFVzZXJzVG9Sb2xlcyIsImRlZmF1bHRBcHBzIiwiY3VzdG9tQXBwIiwib25seVRlYWNoZXIiLCJvcmRlciIsImRvY191c2VyIiwiZG9jX2FkbWluIiwibGFzdF92ZXJzaW9uIiwidXJsIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiaW5zdGFsbGVkIiwidmVyc2lvbiIsImhpZGRlbiIsIkhUVFAiLCJmcyIsIk5wbSIsInJlcXVpcmUiLCJleGVjIiwiY21kIiwid3JhcEFzeW5jIiwid2lmaVNldHRpbmdzUGF0aCIsImNvbmZpZ1BhdGgiLCJyZWFkbGluZSIsIm1ldGhvZHMiLCJhZG1pbklkIiwibmV3UGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIl9pZCIsIiRzZXQiLCJjaGVjayIsIlN0cmluZyIsIm9sZGVtYWlsIiwiZW1haWxzIiwiZW1haWxSZWciLCJ0ZXN0IiwicmVtb3ZlRW1haWwiLCJhZGRyZXNzIiwiYWRkRW1haWwiLCJlcnJvciIsInJlc3VsdCIsIm1lc3NhZ2UiLCJyZW1vdmVVc2Vyc0Zyb21Sb2xlcyIsImNvbW1hbmQiLCJyZXMiLCJzdG9yYWdlVXNhZ2UiLCJ0b0ZpeGVkIiwic3RvcmFnZVRvdGFsIiwicGVyY2VudGFnZSIsImRhdGEiLCJyZWFkRmlsZVN5bmMiLCJtYXRjaCIsIlJlZ0V4cCIsIlNTSUQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwibmV3U1NJRCIsImVuY29kZWROZXdTU0lEIiwiQnVmZmVyIiwidG9TdHJpbmciLCJuZXdEYXRhIiwid3JpdGVGaWxlU3luYyIsImNoYW5uZWwiLCJuZXdDaGFubmVsIiwibmV3QmFuZCIsImJhbmRSZWdleCIsImNoYW5uZWxSZWdleCIsIm1hdGNoQmFuZCIsIm1hdGNoQ2hhbm5lbCIsInRyaW0iLCJjdXJyZW50Q2hhbm5lbCIsInBhcnNlSW50Iiwic2VyaWFsIiwib3BlcmF0b3JOYW1lIiwic2lnbmFsU3RyZW5ndGgiLCJzdHJlbmd0aFZhbHVlIiwicXVhbGl0eSIsIkFQTiIsIkFQTlVzZXIiLCJBUE5QYXNzd29yZCIsInNpbVN0YXR1c1Jlc3VsdCIsImV4ZWN1dGVDb21tYW5kIiwic2ltU3RhdHVzIiwiaW5jbHVkZXMiLCJTaW1QaW4iLCJQSU4iLCJpc1NoYXJpbmciLCJyZXMyIiwic2NyaXB0c1BhdGgiLCJiYXR0ZXJ5TW9kdWxlIiwiaXNPbmxpbmUiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwibGlzdEZvcndhcmRSdWxlc0NvbW1hbmQiLCJjb21tYW5kUmVzdWx0IiwiRXJyb3IiLCJzaGFyaW5nRnJvbVdsYW5Ub0V0aCIsInNoYXJpbmdUb1dsYW5Gcm9tRXRoRXN0YWJsaXNoZWQiLCJzdGF0dXMiLCJtYWNBZGRyZXNzIiwiY2FsbGJhY2siLCJpcHRhYmxlc0NvbW1hbmRzIiwiam9pbiIsInN0ZG91dCIsInN0ZGVyciIsImlwdGFibGVzRGVsZXRlQ29tbWFuZHMiLCJleGVjdXRlQW5kUmVwZWF0IiwiZG9uZUNhbGxiYWNrIiwidGFza3NDb21wbGV0ZWQiLCJmb3JFYWNoIiwiYWxsb3dNYWNDb21tYW5kIiwiYmxvY2tPdGhlcnNDb21tYW5kIiwibGluZXMiLCJzcGxpdCIsInJ1bGVOdW1iZXJzIiwicmVkdWNlIiwiYWNjIiwibGluZSIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJydWxlTnVtYmVyIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInJlbW92ZUVycm9yIiwicmVtb3ZlU3Rkb3V0IiwicmVtb3ZlU3RkZXJyIiwic2F2ZUVycm9yIiwic2F2ZVN0ZG91dCIsInNhdmVTdGRlcnIiLCJzaGFyaW5nRnJvbVdsYW5Ub1d3YW4iLCJzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCIsImRldmljZVNlcmlhbCIsInB1YmxpYyIsImRldmljZVRva2VuIiwibW9vZGxlQVBJVG9rZW4iLCJjbG91ZFVSTCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwibnBtUmVxdWVzdE9wdGlvbnMiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJ0aW1lb3V0IiwicG9zdCIsInJl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bkI7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQVZELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblx0SW5qZWN0LnJhd0hlYWQoXCJtZXRhTG9hZGVyXCIsICc8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBoZWlnaHQ9ZGV2aWNlLWhlaWdodFwiLz48bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj5cdDxtZXRhIG5hbWU9XCJtb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiPicpO1xuXG5cdEluamVjdC5yYXdCb2R5KFwiaHRtbExvYWRlclwiLCBBc3NldHMuZ2V0VGV4dCgnYXBwX2xvYWRlci5odG1sJykpO1xufVxuXG5pZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XG5cdE1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0JCgnLmluZGV4LS1pY29uJykuYWRkQ2xhc3MoJ2FuaW1hdGVkLWljb24nKTtcblxuXHRcdFx0JChcIiNpbmplY3QtbG9hZGVyLXdyYXBwZXJcIikuZmFkZU91dCg1MDAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHQkKCcuaW5kZXgtLWljb24nKS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQtaWNvbicpO1xuXHRcdH0pO1xuXHRcdH0sIDUwMCk7XG5cdH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBBcHBzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtYXBwcycpO1xuXG5cblxuQXBwcy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXG5cdC8vIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyB1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gcmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9XG59KTtcblxuLy8gUHVibGljYXRpb25zXG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxBcHBzJywgZnVuY3Rpb24gYXBwc1B1YmxpY2F0aW9uKCkge1xuICAgIHJldHVybiBBcHBzLmZpbmQoKTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuIFxuZXhwb3J0IGNvbnN0IFN5bmNocm9uaXphdGlvbnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignaG9tZS1zeW5jaHJvbml6YXRpb25zJyk7XG5cblxuXG5TeW5jaHJvbml6YXRpb25zLmFsbG93KHtcblxuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHVwZGF0ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0cmVtb3ZlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXG5cdC8vIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHQvLyB1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gcmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9XG59KTtcblxuLy8gUHVibGljYXRpb25zXG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIE1ldGVvci5wdWJsaXNoKCdhbGxTeW5jaHJvbml6YXRpb25zJywgZnVuY3Rpb24gc3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uKCkge1xuICAgIHJldHVybiBTeW5jaHJvbml6YXRpb25zLmZpbmQoKTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG4vLyB2YXIgdXNlcnNEQlx0PSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy8gdmFyIGNvbGxlY3Rpb25cdD0gdXNlcnNEQi5vcGVuKCd1c2VycycpO1xuXG5cbi8vY29uc3QgZGF0YWJhc2UgPSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy9jb25zdCBjb2xsZWN0aW9uID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7IF9kcml2ZXI6IGRhdGFiYXNlIH0pO1xuXG4vL2V4cG9ydCBjb25zdCBVc2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy8gU2hhcmluZyB0aGUgc2FtZSBBY2NvdW50IGNvbGxlY3Rpb24gdGhhbiBiZWVrZWUtbGl2ZVxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXG5cdC8vIGNoZWNrIHRoYXQgdGhlIHVzZXJJZCBzcGVjaWZpZWQgaXMgYWRtaW5cbmlzQWRtaW4gPSBmdW5jdGlvbih1c2VySWQpIHtcblx0Y29uc29sZS5sb2coXCJpc2FkbWluXCIpO1xuICByZXR1cm4gUm9sZXMudXNlcklzSW5Sb2xlKE1ldGVvci51c2VyKCksICdhZG1pbicpO1xufVxuXG5cbi8vIFB1Ymxpc2ggUm9sZXMgdG8gY2xpZW50XG5NZXRlb3IucHVibGlzaChudWxsLCBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnVzZXJJZCkge1xuICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCh7ICd1c2VyLl9pZCc6IHRoaXMudXNlcklkIH0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucmVhZHkoKVxuICB9XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKCk7XG5cbn0pO1xuXG4gIC8vIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgLy8gXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAvLyAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICAvLyB9KTtcblxuLy8gU2VydmVyMiA9IEREUC5jb25uZWN0KFwiaHR0cDovL2JlZWtlZS5ib3g6ODNcIik7XG4vLyBBY2NvdW50cy5jb25uZWN0aW9uID0gU2VydmVyMjtcblxuXG4vL3ZhciBkYXRhYmFzZSA9IG5ldyBNb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyKCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2JlZWtlZS1saXZlJyk7XG4vL01ldGVvci51c2VycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy9leHBvcnQgY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignYXBwcycpO1xuXG5cbiAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXG4gIC8vIE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uICgpIHtcbiAgLy8gXHRjb25zb2xlLmxvZyhcInVzZXJzOiBcIitNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkpO1xuICAvLyAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuICAvLyB9KTtcbn0iLCJpbXBvcnQgeyBBcHBzIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvYXBwcy5qcyc7XG5cblx0Ly8gQ3JlYXRlIHRoZSByb2xlc1xuXHRSb2xlcy5jcmVhdGVSb2xlKCdtYW5hZ2VyJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXG5cbi8vICMjIyAgQ3JlYXRlIGFkbWluIHVzZXIgYXQgZmlyc3Qgc3RhcnQgICMjI1xuXG5cbmlmIChNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblx0XG5cdC8vIENyZWF0ZSB0aGUgcm9sZVxuXHRSb2xlcy5jcmVhdGVSb2xlKCdtYW5hZ2VyJywge3VubGVzc0V4aXN0czogdHJ1ZX0pO1xuXHRSb2xlcy5jcmVhdGVSb2xlKCdhZG1pbicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblxuXHR2YXIgYWRtaW5QYXNzd29yZCA9IE1ldGVvci5zZXR0aW5ncy5hZG1pblBhc3N3b3JkO1xuXG5cdHZhciB1c2VycyA9IFtcblx0XHR7dXNlcm5hbWU6XCJhZG1pblwiLHJvbGVzOlsnYWRtaW4nXX0sXG5cdF07XG5cblx0Xy5lYWNoKHVzZXJzLCBmdW5jdGlvbiAodXNlcikge1xuXHRcdHZhciBpZDtcblx0XHRpZCA9IEFjY291bnRzLmNyZWF0ZVVzZXIoe1xuXHRcdFx0dXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG5cdFx0XHRlbWFpbDogXCJBZG1pblwiLFxuXHRcdFx0cGFzc3dvcmQ6IGFkbWluUGFzc3dvcmQsXG5cdFx0XHRwcm9maWxlOntuYW1lOlwiQWRtaW5cIn1cblx0XHR9KTtcblxuXHRcdGlmICh1c2VyLnJvbGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyhpZCwgdXNlci5yb2xlcyk7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG5pZiAoQXBwcy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuXG5cdHZhciBkZWZhdWx0QXBwcyA9IFtcblx0XHR7bmFtZTpcIkxpdmVcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MywgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL2xpdmUuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLWxpdmUucG5nXCIsIGRlc2NyaXB0aW9uOlwiQmVla2VlIExpdmUgcHJvbW90ZSByZWFsLXRpbWUgaW50ZXJhY3Rpb24gYnkgYWxsb3dpbmcgbGVhcm5lcnMgdG8gZXhwcmVzcyB0aGVtc2VsdmVzIGFza2luZyBxdWVzdGlvbnMsIHBvc3RpbmcgcGhvdG9zIG9yIHNoYXJpbmcgZmlsZXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjEuNFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiUmVzb3VyY2VzXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjcsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly9yZXNvdXJjZXMuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXJlc291cmNlcy5wbmdcIiwgZGVzY3JpcHRpb246XCJXaXRoIEJlZWtlZSBSZXNvdXJjZXMsIHlvdSBjYW4gZWFzaWx5IHNoYXJlIGZpbGVzIHdpdGggeW91ciBsZWFybmVycy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJXaGVlbFwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOnRydWUsIG9yZGVyOjksIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjAuN1wiLCB1cmw6XCJodHRwOi8vd2hlZWwuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXdoZWVsLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBXaGVlbCBpcyBhIHNpbXBsZSByYW5kb20gcGlja2VyIHdoZWVsIHRoYXQgYWxsb3cgeW91IHRvIHBpY2sgdXAgYSByYW5kb20gbmFtZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC44XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJUaW1lclwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo4LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vdGltZXIuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXRpbWVyLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBUaW1lciBpcyBhIHNpbXBsZSB0aW1lciB0aGF0IGxldHMgeW91ciBsZWFybmVycyBrbm93IGhvdyBtdWNoIHRpbWUgdGhleSBoYXZlIGxlZnQuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiTW9vZGxlXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MSwgZG9jX3VzZXI6XCJtb29kbGVfdGVhY2hlcmRvYy5wZGZcIiwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vbW9vZGxlLmJlZWtlZS5ib3hcIiwgaWNvbjpcIm1vb2RsZS5wbmdcIiwgZGVzY3JpcHRpb246XCJNb29kbGUgaXMgYSBmcmVlLCBvbmxpbmUgTGVhcm5pbmcgTWFuYWdlbWVudCBzeXN0ZW0gZW5hYmxpbmcgZWR1Y2F0b3JzIHRvIGNyZWF0ZSB0aGVpciBvd24gcHJpdmF0ZSB3ZWJzaXRlIGZpbGxlZCB3aXRoIGR5bmFtaWMgY291cnNlcyB0aGF0IGV4dGVuZCBsZWFybmluZywgYW55IHRpbWUsIGFueXdoZXJlLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIzLjExLjJcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIktvbGlicmlcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjoyLCBkb2NfdXNlcjpcImtvbGlicmlfdXNlcmRvYy5wZGZcIiwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8va29saWJyaS5iZWVrZWUuYm94XCIsIGljb246XCJrb2xpYnJpLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIktvbGlicmkgaXMgYW4gb3Blbi1zb3VyY2UgZWR1Y2F0aW9uYWwgcGxhdGZvcm0gc3BlY2lhbGx5IGRlc2lnbmVkIHRvIHByb3ZpZGUgb2ZmbGluZSBhY2Nlc3MgdG8gYSB3aWRlIHJhbmdlIG9mIHF1YWxpdHksIG9wZW5seSBsaWNlbnNlZCBlZHVjYXRpb25hbCByZXNvdXJjZXMgaW4gbG93LXJlc291cmNlIGNvbnRleHRzIGxpa2UgcnVyYWwgc2Nob29scywgcmVmdWdlZSBjYW1wcywgb3JwaGFuYWdlcywgYW5kIGFsc28gaW4gbm9uLWZvcm1hbCBzY2hvb2wgcHJvZ3JhbXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMTQuN1wiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdC8vIHtuYW1lOlwiRXRoZXJwYWRcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo1LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vZXRoZXJwYWQuYmVla2VlLmJveFwiLCBpY29uOlwiZXRoZXJwYWQucG5nXCIsIGRlc2NyaXB0aW9uOlwiRXRoZXJwYWQgYWxsb3dzIHlvdSB0byBlZGl0IGRvY3VtZW50cyBjb2xsYWJvcmF0aXZlbHkgaW4gcmVhbC10aW1lLCBtdWNoIGxpa2UgYSBsaXZlIG11bHRpLXBsYXllciBlZGl0b3IgdGhhdCBydW5zIGluIHlvdXIgYnJvd3Nlci4gV3JpdGUgYXJ0aWNsZXMsIHByZXNzIHJlbGVhc2VzLCB0by1kbyBsaXN0cywgZXRjLiB0b2dldGhlciB3aXRoIHlvdXIgZnJpZW5kcywgZmVsbG93IHN0dWRlbnRzIG9yIGNvbGxlYWd1ZXMsIGFsbCB3b3JraW5nIG9uIHRoZSBzYW1lIGRvY3VtZW50IGF0IHRoZSBzYW1lIHRpbWUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjEuOC4xNFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiU3Rvcm1cIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo0LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vc3Rvcm0uYmVla2VlLmJveFwiLCBpY29uOlwic3Rvcm0ucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGFuZCBhbmltYXRlIGxpdmUgc3VydmV5cywgYnJhaW5zdG9ybXMgYW5kIHF1aXp6ZXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuNC41XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJQYWRcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo1LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vcGFkLmJlZWtlZS5ib3hcIiwgaWNvbjpcInBhZC5wbmdcIiwgZGVzY3JpcHRpb246XCJDcmVhdGUgY29sbGFib3JhdGl2ZSB3YWxscyB0byBzaGFyZSBhbmQgb3JnYW5pemUgY29udGVudC5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC44LjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIkJ1enplclwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6dHJ1ZSwgb3JkZXI6NiwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2J1enplci5iZWVrZWUuYm94XCIsIGljb246XCJidXp6ZXIucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGEgdmlydHVhbCBnYW1pbmcgcm9vbSBhcm91bmQgYSBjb25uZWN0ZWQgYnV6emVyLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjIuNFwiLCBoaWRkZW46ZmFsc2V9LFxuXG5cdF07XG5cblx0Xy5lYWNoKGRlZmF1bHRBcHBzLCBmdW5jdGlvbiAoZGVmYXVsdEFwcHMpIHtcblx0XHRBcHBzLmluc2VydChkZWZhdWx0QXBwcyk7XG5cdH0pO1xufSIsImltcG9ydCB7IEhUVFAgfSBmcm9tICdtZXRlb3IvaHR0cCdcblxuTWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24oKSB7XG5cblx0aWYgKE1ldGVvci5pc1NlcnZlcikge1xuXG5cdHZhciBmcyA9IE5wbS5yZXF1aXJlKCdmcycpO1xuXHRleGVjID0gTnBtLnJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5leGVjO1xuXHRjbWQgPSBNZXRlb3Iud3JhcEFzeW5jKGV4ZWMpO1xuXG5cdHZhciB3aWZpU2V0dGluZ3NQYXRoID0gTWV0ZW9yLnNldHRpbmdzLndpZmlTZXR0aW5nc1BhdGg7XG5cdHZhciBjb25maWdQYXRoID0gTWV0ZW9yLnNldHRpbmdzLmNvbmZpZ1BhdGg7XG5cdGNvbnN0IHJlYWRsaW5lID0gcmVxdWlyZSgncmVhZGxpbmUnKTtcblxuXG5cdE1ldGVvci5tZXRob2RzKHtcblxuXHRcdCdhZG1pblNldE5ld1Bhc3N3b3JkJzogZnVuY3Rpb24oYWRtaW5JZCwgdXNlcklkLCBuZXdQYXNzd29yZCkgeyAvLyBBZG1pbiBjYW4gZm9yY2libHkgY2hhbmdlIHRoZSBwYXNzd29yZCBmb3IgYSB1c2VyXG5cdFx0XHRpZiAoUm9sZXMudXNlcklzSW5Sb2xlKGFkbWluSWQsICdhZG1pbicpKSB7XG5cdFx0XHRcdEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgbmV3UGFzc3dvcmQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2NyZWF0ZUFjY291bnQnOiBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQsIHByb2ZpbGUpIHtcblx0XHRcdHJldHVybiBBY2NvdW50cy5jcmVhdGVVc2VyKHtlbWFpbDplbWFpbCxwYXNzd29yZDpwYXNzd29yZCxwcm9maWxlOnByb2ZpbGV9KTsgLy8gQ2FsbGJhY2sgaXMgbm90IHN1cHBvcnRlZCBvbiBzZXJ2ZXItc2lkZVxuXHRcdH0sXG5cdFx0J2VkaXRBY2NvdW50JzogZnVuY3Rpb24odXNlcklkLCBlbWFpbCwgcGFzc3dvcmQsIHByb2ZpbGUpIHtcblx0XHRcdE1ldGVvci51c2Vycy51cGRhdGUoe19pZDogdXNlcklkfSwge1xuXHQgIFx0XHRcdCRzZXQ6IHtcblx0ICAgIFx0XHRcdCdlbWFpbHMuMC5hZGRyZXNzJzogZW1haWwsXG5cdCAgICBcdFx0XHRwcm9maWxlOiBwcm9maWxlXG5cdCAgXHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRpZiAocGFzc3dvcmQpIHtcblx0XHRcdFx0QWNjb3VudHMuc2V0UGFzc3dvcmQodXNlcklkLCBwYXNzd29yZCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnY2hhbmdlRW1haWwnOiBmdW5jdGlvbihlbWFpbCkge1xuXHRcdFx0dmFyIGVtYWlsID0gZW1haWw7XG5cdFx0XHRjaGVjayhlbWFpbCwgU3RyaW5nKTtcblx0XHRcdHZhciB1c2VyID0gTWV0ZW9yLnVzZXIoKTtcblx0XHRcdHZhciBvbGRlbWFpbCA9IHVzZXIuZW1haWxzO1xuXHRcdFx0dmFyIGVtYWlsUmVnID0gL14oW1xcdy1cXC5dK0AoW1xcdy1dK1xcLikrW1xcdy1dezIsNH0pPyQvO1xuXHRcdFx0aWYgKGVtYWlsUmVnLnRlc3QoZW1haWwpKSB7XG5cdFx0XHRpZihvbGRlbWFpbCAhPSBudWxsKXtcblx0XHRcdCAgQWNjb3VudHMucmVtb3ZlRW1haWwodXNlci5faWQsIHVzZXIuZW1haWxzWzBdLmFkZHJlc3MpXG5cdFx0XHR9XG5cdFx0XHRBY2NvdW50cy5hZGRFbWFpbCh1c2VyLl9pZCwgZW1haWwpO1xuXHRcdFx0cmV0dXJuIGVtYWlsO1xuXHRcdCAgfSBlbHNlXG5cdFx0ICByZXR1cm4gbnVsbFxuXHRcdCB9LFxuXHRcdCdkZWxldGVVc2VyJzogZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0XHRNZXRlb3IudXNlcnMucmVtb3ZlKHVzZXJJZCwgZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGVuIGRlbGV0aW5nIHVzZXIgOiBcIitlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnYWRkTWFuYWdlclJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsICdtYW5hZ2VyJyk7XG5cdFx0fSxcblx0XHQncmVtb3ZlTWFuYWdlclJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLnJlbW92ZVVzZXJzRnJvbVJvbGVzKHVzZXJJZCwgJ21hbmFnZXInKTtcblx0XHR9LFxuXHRcdCdhZGRBZG1pblJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsICdhZG1pbicpO1xuXHRcdH0sXG5cdFx0J3JlbW92ZUFkbWluUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMucmVtb3ZlVXNlcnNGcm9tUm9sZXModXNlcklkLCAnYWRtaW4nKTtcblx0XHR9LFxuXG5cdFx0Ly8gJ2dldFVzZWRTcGFjZSc6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0dmFyIHJlcztcblx0XHQvLyBcdHJlcyA9IGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpICsgXCIvIFwiICsgY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIikgKyBcIiAoXCIrY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIikrXCJ1c2VkKVwiO1xuXHRcdC8vIFx0cmV0dXJuIHJlcztcblx0XHQvLyB9LFxuXHRcdCdydW5Db21tYW5kJzogZnVuY3Rpb24ocGFzc3dvcmQsIGNvbW1hbmQpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJlY2hvIFwiK3Bhc3N3b3JkK1wiIHwgc3VkbyAtUyBcIitjb21tYW5kKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0VXNlZFNwYWNlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzID0ge307XG5cdFx0XHQvL3JlcyA9IGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpICsgXCIvIFwiICsgY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIikgKyBcIiAoXCIrY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIikrXCJ1c2VkKVwiO1xuXHRcdFx0cmVzLnN0b3JhZ2VVc2FnZSA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpXG5cdFx0XHRyZXMuc3RvcmFnZVVzYWdlID0gcmVzLnN0b3JhZ2VVc2FnZS8xMDAwMDAwO1xuXHRcdFx0cmVzLnN0b3JhZ2VVc2FnZSA9IHJlcy5zdG9yYWdlVXNhZ2UudG9GaXhlZCgyKTtcblx0XHRcdHJlcy5zdG9yYWdlVG90YWwgPSBjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKVxuXHRcdFx0cmVzLnN0b3JhZ2VUb3RhbCA9IHJlcy5zdG9yYWdlVG90YWwvMTAwMDAwMDtcblx0XHRcdHJlcy5zdG9yYWdlVG90YWwgPSByZXMuc3RvcmFnZVRvdGFsLnRvRml4ZWQoMik7XG5cdFx0XHRyZXMucGVyY2VudGFnZSA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRTU0lEJzogZnVuY3Rpb24oKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3NzaWQ9KC4qKScpKTtcbiAgXHRcdFx0dmFyIFNTSUQgPSBtYXRjaFsxXTtcbiAgXHRcdFx0U1NJRCA9IGRlY29kZVVSSUNvbXBvbmVudChTU0lELnJlcGxhY2UoLy4uL2csICclJCYnKSlcbiAgXHRcdFx0cmV0dXJuIFNTSUQ7XG5cdFx0fSxcblx0XHQnc2V0U1NJRCc6IGZ1bmN0aW9uKG5ld1NTSUQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHRjb25zdCBlbmNvZGVkTmV3U1NJRCA9IG5ldyBCdWZmZXIobmV3U1NJRCkudG9TdHJpbmcoJ2hleCcpOyAvLyBDb252ZXJ0IGludG8gSGV4XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnc3NpZD0oLiopJykpWzFdLCBlbmNvZGVkTmV3U1NJRCk7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFdpZmlQYXNzd29yZCc6IGZ1bmN0aW9uKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdwYXNzd29yZD0oLiopJykpO1xuICBcdFx0XHR2YXIgcGFzc3dvcmQgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIHBhc3N3b3JkO1xuXHRcdH0sXG5cdFx0J3NldFdpZmlQYXNzd29yZCc6IGZ1bmN0aW9uKG5ld1Bhc3N3b3JkKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdwYXNzd29yZD0oLiopJykpWzFdLCBuZXdQYXNzd29yZCk7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFdpZmlDaGFubmVsJzogZnVuY3Rpb24oKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpKTtcbiAgXHRcdFx0dmFyIGNoYW5uZWwgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIGNoYW5uZWw7XG5cdFx0fSxcblx0XHQnc2V0V2lmaUNoYW5uZWwnOiBmdW5jdGlvbihuZXdDaGFubmVsKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdjaGFubmVsPSguKiknKSlbMV0sIG5ld0NoYW5uZWwpO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRXaWZpQmFuZCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG5cdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ2JhbmQ9KC4qKScpKTtcblxuXHRcdFx0aWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG5cdFx0XHQgIHJldHVybiBtYXRjaFsxXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHQgIC8vIFJldHVybiBkZWZhdWx0IHZhbHVlIGlmIHRoZSBiYW5kIHNldHRpbmcgZG9lcyBub3QgZXhpc3Rcblx0XHRcdCAgcmV0dXJuICcyLjRHSHonO1xuXHRcdFx0fVxuXHRcdCAgfSxcblx0XHQnc2V0V2lmaUJhbmQnOiBmdW5jdGlvbihuZXdCYW5kKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcblx0XHRcdHZhciBiYW5kUmVnZXggPSBuZXcgUmVnRXhwKCdiYW5kPSguKiknKTtcblx0XHRcdHZhciBjaGFubmVsUmVnZXggPSBuZXcgUmVnRXhwKCdjaGFubmVsPSguKiknKTtcblx0XHRcdHZhciBtYXRjaEJhbmQgPSBkYXRhLm1hdGNoKGJhbmRSZWdleCk7XG5cdFx0XHR2YXIgbWF0Y2hDaGFubmVsID0gZGF0YS5tYXRjaChjaGFubmVsUmVnZXgpO1xuXG5cdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGE7XG5cblx0XHRcdGlmIChtYXRjaEJhbmQpIHtcblx0XHRcdFx0Ly8gUmVwbGFjZSB0aGUgZXhpc3RpbmcgYmFuZCBzZXR0aW5nXG5cdFx0XHRcdG5ld0RhdGEgPSBuZXdEYXRhLnJlcGxhY2UoYmFuZFJlZ2V4LCBgYmFuZD0ke25ld0JhbmR9YCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBBcHBlbmQgdGhlIG5ldyBiYW5kIHNldHRpbmdcblx0XHRcdFx0bmV3RGF0YSA9IGAke25ld0RhdGEudHJpbSgpfVxcbmJhbmQ9JHtuZXdCYW5kfWA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtYXRjaENoYW5uZWwgJiYgbWF0Y2hDaGFubmVsWzFdKSB7XG5cdFx0XHRcdC8vIENvbnZlcnQgdGhlIGNoYW5uZWwgdmFsdWUgdG8gYSBudW1iZXJcblx0XHRcdFx0dmFyIGN1cnJlbnRDaGFubmVsID0gcGFyc2VJbnQobWF0Y2hDaGFubmVsWzFdLCAxMCk7XG5cblx0XHRcdFx0Ly8gU2V0IGNoYW5uZWwgdG8gYSBkZWZhdWx0IDIuNEdIeiBjaGFubmVsIGlmIGN1cnJlbnQgY2hhbm5lbCBpcyBmb3IgNUdIelxuXHRcdFx0XHRpZiAobmV3QmFuZCA9PSBcIjIuNEdIelwiICYmIGN1cnJlbnRDaGFubmVsID4gMTQpIHtcblx0XHRcdFx0XHRuZXdEYXRhID0gbmV3RGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9MTFgKTtcblx0XHRcdFx0fSBlbHNlIGlmIChuZXdCYW5kID09IFwiNUdIelwiICYmIGN1cnJlbnRDaGFubmVsIDw9IDE0KSB7XG5cdFx0XHRcdFx0bmV3RGF0YSA9IG5ld0RhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTQ0YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdC8vICAgJ3NldFdpZmlCYW5kJzogZnVuY3Rpb24obmV3QmFuZCkge1xuXHRcdC8vIFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG5cdFx0Ly8gXHR2YXIgYmFuZFJlZ2V4ID0gbmV3IFJlZ0V4cCgnYmFuZD0oLiopJyk7XG5cdFx0Ly8gXHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKGJhbmRSZWdleCk7XG5cblx0XHQvLyBcdGlmIChtYXRjaCkge1xuXHRcdC8vIFx0ICAvLyBSZXBsYWNlIHRoZSBleGlzdGluZyBiYW5kIHNldHRpbmdcblx0XHQvLyBcdCAgdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoYmFuZFJlZ2V4LCBgYmFuZD0ke25ld0JhbmR9YCk7XG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0ICAvLyBBcHBlbmQgdGhlIG5ldyBiYW5kIHNldHRpbmdcblx0XHQvLyBcdCAgdmFyIG5ld0RhdGEgPSBgJHtkYXRhLnRyaW0oKX1cXG5iYW5kPSR7bmV3QmFuZH1gO1xuXHRcdC8vIFx0fVxuXHRcdC8vIFx0dmFyIGNoYW5uZWxSZWdleCA9IG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpO1xuXHRcdC8vIFx0dmFyIG1hdGNoMiA9IGRhdGEubWF0Y2goY2hhbm5lbFJlZ2V4KTtcblx0XHQvLyBcdGlmIChtYXRjaDIgJiYgbWF0Y2gyWzFdKSB7XG5cdFx0Ly8gXHRcdC8vIFNldCBjaGFubmVsIHRvIGEgZGVmYXVsdCAyLjRHSHogY2hhbm5lbCBpZiBjdXJyZW50IGNoYW5uZWwgaXMgZm9yIDVHSHpcblx0XHQvLyBcdFx0aWYgKG5ld0JhbmQgPT0gXCIyLjRHSHpcIiAmJiBtYXRjaDJbMV0gPiAxNCkge1xuXHRcdC8vIFx0XHRcdC8vIEFwcGVuZCB0aGUgbmV3IGJhbmQgc2V0dGluZ1xuXHRcdC8vIFx0XHRcdHZhciBuZXdEYXRhMiA9IGRhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTExYCk7XG5cdFx0Ly8gXHRcdH0gZWxzZSBpZiAobmV3QmFuZCA9PSBcIjVHSHpcIiAmJiBtYXRjaDJbMV0gPD0gMTQpIHtcblx0XHQvLyBcdFx0XHR2YXIgbmV3RGF0YTIgPSBkYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD00NGApO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHRmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdC8vICAgfSxcblx0XHQnZ2V0U2VyaWFsJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdTRVJJQUw9KC4qKScpKTtcbiAgXHRcdFx0dmFyIHNlcmlhbCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gc2VyaWFsO1xuXHRcdH0sXG5cdFx0J2dldE9wZXJhdG9yTmFtZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG9wZXJhdG9yTmFtZTtcblx0XHRcdG9wZXJhdG9yTmFtZSA9IGNtZChcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LW9wZXJhdG9yLW5hbWUgfCBncmVwIC1tMiAnTmFtZSAgICAgICAgICAgICAnIHwgYXdrICd7cHJpbnQgJDN9J1wiKTtcblx0XHRcdHJldHVybiBvcGVyYXRvck5hbWU7XG5cdFx0fSxcblx0XHQvLyAnZ2V0U2lnbmFsU3RyZW5ndGgnOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHR2YXIgc2lnbmFsU3RyZW5ndGg7XG5cdFx0Ly8gXHRzaWduYWxTdHJlbmd0aCA9IGNtZChcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgLW0xIE5ldHdvcmsgfCBhd2sgJ3twcmludCAkMywgJDJ9J1wiKTtcblx0XHQvLyBcdHJldHVybiBzaWduYWxTdHJlbmd0aDtcblx0XHQvLyB9LFxuXHRcdCdnZXRTaWduYWxTdHJlbmd0aCc6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBzaWduYWxTdHJlbmd0aDtcblx0XHRcdC8vIFRoaXMgZXh0cmFjdHMganVzdCB0aGUgbnVtZXJpYyBwYXJ0IG9mIHRoZSBzaWduYWwgc3RyZW5ndGguXG5cdFx0XHRzaWduYWxTdHJlbmd0aCA9IGNtZChcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgJ05ldHdvcmsnIHwgYXdrICd7cHJpbnQgJDN9JyB8IGdyZXAgLW9FICdbLTAtOV0rJ1wiKTtcblxuXHRcdFx0Ly8gQ29udmVydCBzaWduYWwgc3RyZW5ndGggdG8gYSBxdWFsaXRhdGl2ZSB2YWx1ZVxuXHRcdFx0dmFyIHN0cmVuZ3RoVmFsdWUgPSBwYXJzZUludChzaWduYWxTdHJlbmd0aCk7XG5cdFx0XHR2YXIgcXVhbGl0eSA9ICdVbmtub3duJztcblx0XHRcdGlmIChzdHJlbmd0aFZhbHVlID49IC03MCkge1xuXHRcdFx0XHRxdWFsaXR5ID0gJ0V4Y2VsbGVudCc7XG5cdFx0XHR9IGVsc2UgaWYgKHN0cmVuZ3RoVmFsdWUgPj0gLTg1KSB7XG5cdFx0XHRcdHF1YWxpdHkgPSAnR29vZCc7XG5cdFx0XHR9IGVsc2UgaWYgKHN0cmVuZ3RoVmFsdWUgPj0gLTEwMCkge1xuXHRcdFx0XHRxdWFsaXR5ID0gJ0ZhaXInO1xuXHRcdFx0fSBlbHNlIGlmIChzdHJlbmd0aFZhbHVlIDwgLTEwMCkge1xuXHRcdFx0XHRxdWFsaXR5ID0gJ1Bvb3InO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHF1YWxpdHk7XG5cdFx0fSxcblx0XHQvLyAnZ2V0SXNPbmxpbmUnOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHR2YXIgaXNPbmxpbmU7XG5cdFx0Ly8gXHRpc09ubGluZSA9IGNtZChcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgLW0xIE5ldHdvcmsgfCBhd2sgJ3twcmludCAkMywgJDJ9J1wiKTtcblx0XHQvLyBcdHJldHVybiBpc09ubGluZTtcblx0XHQvLyB9LFxuXHRcdC8vICdnZXRCYW5kJzogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0dmFyIGJhbmQ7XG4vL1x0XHRcdGJhbmQgPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrIFxcXCJ7cHJpbnQgJDJ9XFxcIiB8IGN1dCAtZFxcXFwnIC1mMlwiKTtcblx0XHQvLyBcdHJldHVybiBiYW5kO1xuXHRcdC8vIH0sXG5cdFx0J2dldEFQTic6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOPSguKiknKSk7XG4gIFx0XHRcdHZhciBBUE4gPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIEFQTjtcblx0XHR9LFxuXHRcdCdnZXRBUE5Vc2VyJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE5fVVNFUk5BTUU9KC4qKScpKTtcbiAgXHRcdFx0dmFyIEFQTlVzZXIgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIEFQTlVzZXI7XG5cdFx0fSxcblx0XHQnZ2V0QVBOUGFzc3dvcmQnOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9QQVNTV09SRD0oLiopJykpO1xuICBcdFx0XHR2YXIgQVBOUGFzc3dvcmQgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIEFQTlBhc3N3b3JkO1xuXHRcdH0sXG5cdFx0J2dldFNpbUNhcmRTdGF0dXMnOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgc2ltU3RhdHVzUmVzdWx0ID0gJ1Vua25vd24nOyAvLyBEZWZhdWx0IHN0YXR1c1xuXG5cdFx0XHQvLyBGdW5jdGlvbiB0byBleGVjdXRlIGNvbW1hbmQgYW5kIGhhbmRsZSBlcnJvcnNcblx0XHRcdGZ1bmN0aW9uIGV4ZWN1dGVDb21tYW5kKGNvbW1hbmQpIHtcblx0XHRcdFx0bGV0IHJlc3VsdDtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXN1bHQgPSBjbWQoY29tbWFuZCk7IC8vIEV4ZWN1dGUgdGhlIGNvbW1hbmRcblx0XHRcdFx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgJiYgcmVzdWx0ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHQvLyBDaGVjayBpZiByZXN1bHQgaXMgYW4gZXJyb3Igb2JqZWN0XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ0Vycm9yJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0Ly8gSGFuZGxlIGV4Y2VwdGlvbnMgaWYgY29tbWFuZCBleGVjdXRpb24gZmFpbHNcblx0XHRcdFx0XHRyZXR1cm4gJ0Vycm9yJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0OyAvLyBSZXR1cm4gdGhlIHJlc3VsdCBpZiBubyBlcnJvcnNcblx0XHRcdH1cblxuXHRcdFx0Ly8gRXhlY3V0ZSBTSU0gY2FyZCBzdGF0dXMgY2hlY2sgY29tbWFuZFxuXHRcdFx0bGV0IHNpbVN0YXR1cyA9IGV4ZWN1dGVDb21tYW5kKFwic3VkbyBxbWljbGkgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLXVpbS1nZXQtY2FyZC1zdGF0dXMgfCBncmVwICdDYXJkIHN0YXRlOidcIik7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlNJTSBjYXJkIHN0YXR1czpcIiwgc2ltU3RhdHVzKTsgLy8gTG9nIHRoZSByYXcgb3V0cHV0XG5cdFx0XHQvLyBQcm9jZXNzIHRoZSBvdXRwdXQgYW5kIGRldGVybWluZSBTSU0gY2FyZCBzdGF0dXNcblx0XHRcdGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoJ25vLWF0ci1yZWNlaXZlZCcpIHx8IHNpbVN0YXR1cy5pbmNsdWRlcygnbm90LWluc2VydGVkJykpIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gJ05vIFNJTSBjYXJkJztcblx0XHRcdH0gZWxzZSBpZiAoc2ltU3RhdHVzLmluY2x1ZGVzKCdlcnJvcicpKSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9IHNpbVN0YXR1czsgLy8gVXNlIHRoZSBlcnJvciBtZXNzYWdlIG9yIG5vIFNJTSBkZXRlY3RlZCBtZXNzYWdlXG5cdFx0XHR9IGVsc2UgaWYgKHNpbVN0YXR1cy5pbmNsdWRlcygncHJlc2VudCcpKSB7XG5cdFx0XHRcdHNpbVN0YXR1c1Jlc3VsdCA9ICdPSyc7XG5cdFx0XHR9IGVsc2UgaWYgKHNpbVN0YXR1cy5pbmNsdWRlcygnbG9ja2VkJykgfHwgc2ltU3RhdHVzLmluY2x1ZGVzKCdwaW4tcmVxdWlyZWQnKSkge1xuXHRcdFx0XHRzaW1TdGF0dXNSZXN1bHQgPSAnU0lNIGNhcmQgbG9ja2VkLCBQSU4gcmVxdWlyZWQnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2ltU3RhdHVzUmVzdWx0ID0gJ1Vua25vd24nOyAvLyBGb3Igb3RoZXIgc3RhdHVzZXNcblx0XHRcdH1cblx0XHRcdHJldHVybiBzaW1TdGF0dXNSZXN1bHQ7XG5cdFx0fSxcblx0XHQnZ2V0U2ltUGluJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdTSU1fUElOPSguKiknKSk7XG4gIFx0XHRcdHZhciBTaW1QaW4gPSBtYXRjaFsxXTtcblx0XHRcdHJldHVybiBTaW1QaW47XG5cdFx0fSxcblx0XHQnc2V0U2ltUGluJzogZnVuY3Rpb24oUElOKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdTSU1fUElOPS4qJykpLCAnU0lNX1BJTj0nK1BJTik7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J3NldEFQTic6IGZ1bmN0aW9uKEFQTiwgdXNlciwgcGFzc3dvcmQpIHtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTj0uKicpKSwgJ0FQTj0nK0FQTik7XG4gIFx0XHRcdC8vIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOPSguKiknKSlbMV0sIEFQTik7XG5cdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J3NldEFQTlVzZXInOiBmdW5jdGlvbihBUE5Vc2VyKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE5fVVNFUk5BTUU9LionKSksICdBUE5fVVNFUk5BTUU9JytBUE5Vc2VyKTtcbiAgXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdzZXRBUE5QYXNzd29yZCc6IGZ1bmN0aW9uKEFQTlBhc3N3b3JkKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE5fUEFTU1dPUkQ9LionKSksICdBUE5fUEFTU1dPUkQ9JytBUE5QYXNzd29yZCk7XG4gIFx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0UmVtb3RlU3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3lzdGVtY3RsIGlzLWFjdGl2ZSByZW1vdGUtaW90LnNlcnZpY2UgPi9kZXYvbnVsbCAyPiYxICYmIGVjaG8gMSB8fCBlY2hvIDBcIik7XG5cdFx0XHRpZiAocmVzWzBdID09IFwiMVwiKSB7IC8vIFswXSBpcyBhIGhhY2sgYmVjYXVzZSB0aGUgcmVzdWx0IHJlcyBoYXMgb25lIGV4dHJhIGNoYXJhY3RlclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0J2dldEF1dG9TeW5jU3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3lzdGVtY3RsIGlzLWFjdGl2ZSBhdXRvc3luYy5zZXJ2aWNlID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIDEgfHwgZWNobyAwXCIpO1xuXHRcdFx0aWYgKHJlc1swXSA9PSBcIjFcIikgeyAvLyBbMF0gaXMgYSBoYWNrIGJlY2F1c2UgdGhlIHJlc3VsdCByZXMgaGFzIG9uZSBleHRyYSBjaGFyYWN0ZXJcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdCdnZXRTaGFyZUludGVybmV0VmlhRXRoZXJuZXRTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpc1NoYXJpbmc7XG5cdFx0XHRpc1NoYXJpbmcgPSBjbWQoXCIoc3VkbyBpcHRhYmxlcyAtdCBuYXQgLUwgUE9TVFJPVVRJTkcgLXYgLW4gfCBncmVwIC1xICdNQVNRVUVSQURFICBhbGwgIC0tICAqICAgICAgZXRoMCcgJiYgaXAgbGluayBzaG93IGV0aDAgfCBncmVwIC1xICdzdGF0ZSBVUCcpICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIpO1xuXHRcdFx0cmV0dXJuIGlzU2hhcmluZztcblx0XHR9LFxuXHRcdCdnZXRTaGFyZUludGVybmV0VmlhTW9iaWxlU3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaXNTaGFyaW5nO1xuXHRcdFx0aXNTaGFyaW5nID0gY21kKFwiKHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1MIFBPU1RST1VUSU5HIC12IC1uIHwgZ3JlcCAtcSAnTUFTUVVFUkFERSAgYWxsICAtLSAgKiAgICAgIHd3YW4wJyAmJiBpcCBsaW5rIHNob3cgd3dhbjAgfCBncmVwIC1xICdzdGF0ZSBVUCcpICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIpO1xuXHRcdFx0cmV0dXJuIGlzU2hhcmluZztcblx0XHR9LFxuXHRcdC8vICdhY3RpdmF0ZUludGVybmV0U2hhcmluZyc6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0dmFyIHJlcztcblx0XHQvLyBcdHJlcyA9IGNtZChcInN1ZG8gd2lmaS1hcC5jb25maWcgc2V0IHNoYXJlLmRpc2FibGVkPWZhbHNlXCIpO1xuXHRcdC8vIFx0cmV0dXJuIHJlcztcblx0XHQvLyB9LFxuXHRcdC8vICdkaXNhY3RpdmF0ZUludGVybmV0U2hhcmluZyc6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0dmFyIHJlcztcblx0XHQvLyBcdHJlcyA9IGNtZChcInN1ZG8gd2lmaS1hcC5jb25maWcgc2V0IHNoYXJlLmRpc2FibGVkPXRydWVcIik7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzO1xuXHRcdC8vIH0sXG5cdFx0J2FjdGl2YXRlUmVtb3RlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RhcnQgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGVuYWJsZSByZW1vdGUtaW90LnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2Rpc2FjdGl2YXRlUmVtb3RlJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RvcCByZW1vdGUtaW90LnNlcnZpY2VcIik7XG5cdFx0XHRyZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZGlzYWJsZSByZW1vdGUtaW90LnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2FjdGl2YXRlQXV0b1N5bmMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdGFydCBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuXHRcdFx0cmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGVuYWJsZSBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdkaXNhY3RpdmF0ZUF1dG9TeW5jJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RvcCBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuXHRcdFx0cmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGRpc2FibGUgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0QmF0dGVyeVN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHZhciBzY3JpcHRzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5zY3JpcHRzUGF0aDtcblx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdCQVRURVJZX01PRFVMRT0oLiopJykpO1xuXHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdHZhciBiYXR0ZXJ5TW9kdWxlID0gbWF0Y2hbMV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoYmF0dGVyeU1vZHVsZSAmJiBiYXR0ZXJ5TW9kdWxlID09IFwiUGlTdWdhclwiKSB7XG5cdFx0XHRcdHJlcyA9IGNtZChcInB5dGhvbjMgXCIrc2NyaXB0c1BhdGgrXCIvcGlzdWdhcl9zdGF0dXMucHlcIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXMgPSBjbWQoXCJweXRob24zIFwiK3NjcmlwdHNQYXRoK1wiL3BpanVpY2Vfc3RhdHVzLnB5XCIpO1xuXHRcdFx0XHQvL3JlcyA9IGNtZChcInB5dGhvbjMgL2hvbWUvdWJ1bnR1L3NjcmlwdHMvcGlqdWljZV9zdGF0dXMucHlcIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0Ly8gJ2dldElzT25saW5lJzogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHR2YXIgcmVzO1xuXHRcdC8vIFx0dmFyIHNjcmlwdHNQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnNjcmlwdHNQYXRoO1xuXHRcdC8vIFx0Ly8gTWFrZSBzdXJlIHlvdXIgc2NyaXB0IGlzIGV4ZWN1dGFibGUsIGUuZy4sIGNobW9kICt4IGNoZWNrX2ludGVybmV0LnNoXG5cdFx0Ly8gXHRyZXMgPSBjbWQoXCJiYXNoIFwiICsgc2NyaXB0c1BhdGggKyBcIi9jaGVja19pbnRlcm5ldC5zaFwiKTsgLy8gUmVwbGFjZSAnYmFzaCcgd2l0aCAnc2gnIGlmIG5lZWRlZFxuXHRcdC8vIFx0Ly8gVGhlIHNjcmlwdCByZXR1cm5zIFwidHJ1ZVwiIG9yIFwiZmFsc2VcIiBhcyBhIHN0cmluZywgc28gd2UgY29tcGFyZSB0aGUgcmVzdWx0IGRpcmVjdGx5XG5cdFx0Ly8gXHRyZXR1cm4gcmVzLnRyaW0oKSA9PT0gXCJ0cnVlXCI7IC8vIFRoaXMgY29udmVydHMgdGhlIHN0cmluZyB0byBhIGJvb2xlYW5cblx0XHQvLyB9LFxuXHRcdCdnZXRJc09ubGluZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IHJlcztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlcyA9IGNtZChcInBpbmcgLWMgMSBnb29nbGUuY29tXCIpO1xuXHRcdFx0XHQvLyBDaGVjayBpZiB0aGUgcGluZyBjb21tYW5kIHdhcyBzdWNjZXNzZnVsIGJhc2VkIG9uIHRoZSBvdXRwdXRcblx0XHRcdFx0bGV0IGlzT25saW5lID0gcmVzLmluY2x1ZGVzKFwiMSBwYWNrZXRzIHJlY2VpdmVkXCIpIHx8IHJlcy5pbmNsdWRlcyhcIjEgcmVjZWl2ZWRcIik7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiT25saW5lIHN0YXR1czpcIiwgaXNPbmxpbmUpOyAvLyBDb3JyZWN0bHkgbG9nZ2luZyB0aGUgYm9vbGVhbiByZXN1bHRcblx0XHRcdFx0cmV0dXJuIGlzT25saW5lOyAvLyBEaXJlY3RseSByZXR1cm4gdGhlIGJvb2xlYW4gdmFsdWVcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdC8vIElmIGFuIGVycm9yIG9jY3VycyAod2hpY2ggY291bGQgaW5jbHVkZSBiZWluZyB1bmFibGUgdG8gcnVuIHRoZSBwaW5nIGNvbW1hbmQpLCBhc3N1bWUgb2ZmbGluZVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIG9yIG9mZmxpbmU6XCIsIGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBBc3N1bWUgb2ZmbGluZSBpZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZ2V0RXRoMElQJzogZnVuY3Rpb24oKSB7IC8vIEdldCBJUCBvZiBib3hcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwicmVzdWx0IDogXCIrXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcXFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cblx0XHRcdC8vY29uc29sZS5sb2coXCJpcCA6IFwiK1wiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgXCIraW50ZXJmYWNlK1wiIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0V3dhbjBJUCc6IGZ1bmN0aW9uKCkgeyAvLyBHZXQgSVAgb2YgYm94XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcInJlc3VsdCA6IFwiK1wiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgd3dhbjAgfCBncmVwIFxcXCJpbmV0XFxcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiaXAgOiBcIitcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cdFx0XHQvL3JlcyA9IGNtZChcImlmY29uZmlnIFwiK2ludGVyZmFjZStcIiAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cblx0XHQnZ2V0QmVla2VlT3NWZXJzaW9uJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcblx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQkVFS0VFX09TX1ZFUlNJT049KC4qKScpKTtcblx0XHRcdHZhciBzZXJpYWwgPSBtYXRjaFsxXTtcblx0XHRcdHJldHVybiBzZXJpYWw7XG5cdFx0fSxcblx0XHQnZ2V0QmVla2VlSG9tZVZlcnNpb24nOiBmdW5jdGlvbigpIHtcblx0XHRcdGpzb24gPSBKU09OLnBhcnNlKEFzc2V0cy5nZXRUZXh0KFwidmVyc2lvbi5qc29uXCIpKTtcblx0XHRcdHJldHVybiBqc29uLnZlcnNpb247XG5cdFx0fSxcblx0XHQncmVzdGFydE1vYmlsZUNvbm5lY3QnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCByZXN0YXJ0IG1vYmlsZV9jb25uZWN0LnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzOycnXG5cdFx0fSxcblx0XHQnZ2V0SW50ZXJuZXRJbnRlcmZhY2UnOiBmdW5jdGlvbigpIHtcblx0XHRcdGxldCByZXM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXMgPSBjbWQoXCJpcCByb3V0ZSBnZXQgMS4yLjMuNCB8IGF3ayAne3ByaW50ICQ1OyBleGl0fSdcIik7IC8vIEV4ZWN1dGUgdGhlIGNvbW1hbmRcblx0XHRcdFx0aWYgKHJlcy50cmltKCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzLnRyaW0oKTsgLy8gUmV0dXJuIHRoZSBjbGVhbmVkLXVwIHJlc3VsdCBpZiBub3QgZW1wdHlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gJ1Vua25vd24nOyAvLyBSZXR1cm4gYSBkZWZhdWx0IG1lc3NhZ2UgaWYgdGhlIHJlc3VsdCBpcyBlbXB0eVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHQvLyBIYW5kbGUgY2FzZXMgd2hlcmUgdGhlIGNvbW1hbmQgZmFpbHMgb3IgaXMgbm90IGZvdW5kXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBpbnRlcm5ldCBpbnRlcmZhY2U6XCIsIGVycm9yKTtcblx0XHRcdFx0cmV0dXJuICdFcnJvcic7IC8vIFJldHVybiBhbiBlcnJvciBtZXNzYWdlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdC8vIFx0Ly8gQ29tbWFuZCB0byBsaXN0IEZPUldBUkQgcnVsZXNcblx0XHQvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLW4gLS1saW5lLW51bWJlcic7XG5cblx0XHQvLyBcdGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdC8vIFx0XHRpZiAoZXJyb3IgfHwgc3RkZXJyKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke2Vycm9yIHx8IHN0ZGVycn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yIHx8IG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblxuXHRcdC8vIFx0XHQvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG5cdFx0Ly8gXHRcdHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IHN0ZG91dC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyhcImlzR2VuZXJhbFNoYXJpbmdFbmFibGVkOiBcIitpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCk7XG5cdFx0Ly8gXHRcdC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcblx0XHQvLyBcdFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2UgZXRoMC87XG5cdFx0Ly8gXHRcdHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuXHRcdC8vIFx0XHQvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcblx0XHQvLyBcdFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDFcIik7XG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGxcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIHtjb25zb2xlLmxvZyhcInN0ZXAxMlwiKTsgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH0pO31cblx0XHQvLyBcdFx0fSBlbHNlIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwic3RlcDJcIik7XG5cblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGEgc3BlY2lmaWMgTUFDIGFkZHJlc3Ncblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3Igc3BlY2lmaWMgTUFDJywgbWFjQWRkcmVzczogbWF0Y2hbMV0gfSk7XG5cdFx0Ly8gXHRcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2coXCJzdGVwM1wiKTtcblxuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWRcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH0pO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXG5cblxuXG5cdFx0XHQvLyAgICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZygnU3RhcnRpbmcgdG8gZ2V0IGludGVybmV0IHNoYXJpbmcgc3RhdHVzIGZvciBFdGhlcm5ldC4uLicpO1xuXHRcdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG5cdFx0XHQvLyBcdC8vIFNpbmNlIGNtZCBpcyBhbHJlYWR5IHdyYXBwZWQgYnkgTWV0ZW9yLndyYXBBc3luYyhleGVjKSxcblx0XHRcdC8vIFx0Ly8gaXQgc2hvdWxkIHJldHVybiB7IHN0ZG91dCwgc3RkZXJyIH0gZGlyZWN0bHkuXG5cdFx0XHQvLyBcdHRyeSB7XG5cdFx0XHQvLyBcdCAgdmFyIHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdC8vIFx0ICBpZiAoc3RkZXJyKSB7XG5cdFx0XHQvLyBcdFx0Y29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzOiAke3N0ZGVycn1gKTtcblx0XHRcdC8vIFx0XHQvLyBJdCdzIGJldHRlciB0byByZXR1cm4gYSBtZWFuaW5nZnVsIGVycm9yIHRvIHRoZSBjbGllbnQuXG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgZXJyb3I6IFwiRXJyb3IgbGlzdGluZyBGT1JXQVJEIHJ1bGVzXCIsIGRldGFpbHM6IHN0ZGVyciB9O1xuXHRcdFx0Ly8gXHQgIH1cblxuXHRcdFx0Ly8gXHQgIGNvbnNvbGUubG9nKCdBbmFseXppbmcgaXB0YWJsZXMgRk9SV0FSRCBydWxlcyBvdXRwdXQuLi4nKTtcblx0XHRcdC8vIFx0ICAvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG5cdFx0XHQvLyBcdCAgdmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gc3Rkb3V0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSBldGgwJykgJiYgc3Rkb3V0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG5cdFx0XHQvLyBcdCAgY29uc29sZS5sb2coYGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkOiAke2lzR2VuZXJhbFNoYXJpbmdFbmFibGVkfWApO1xuXG5cdFx0XHQvLyBcdCAgLy8gRXh0cmFjdCBNQUMgYWRkcmVzcyBydWxlc1xuXHRcdFx0Ly8gXHQgIHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIGV0aDAvO1xuXHRcdFx0Ly8gXHQgIHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblx0XHRcdC8vIFx0ICBjb25zb2xlLmxvZyhgTUFDIGFkZHJlc3MgZm91bmQ6ICR7bWF0Y2ggPyBtYXRjaFsxXSA6ICdOb25lJ31gKTtcblxuXHRcdFx0Ly8gXHQgIC8vIERldGVybWluZSB0aGUgc3RhdHVzIGJhc2VkIG9uIHRoZSBydWxlcyBmb3VuZFxuXHRcdFx0Ly8gXHQgIGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhbGwuJyk7XG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0Ly8gXHQgIH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzOiAke21hdGNoWzFdfWApO1xuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH07XG5cdFx0XHQvLyBcdCAgfSBlbHNlIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyBpcyBkaXNhYmxlZCBvciBub3QgY29uZmlndXJlZCBhcyBleHBlY3RlZC4nKTtcblx0XHRcdC8vIFx0XHRyZXR1cm4geyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcblx0XHRcdC8vIFx0ICB9XG5cdFx0XHQvLyBcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHQvLyBcdCAgY29uc29sZS5lcnJvcihgQ29tbWFuZCBleGVjdXRpb24gZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHQvLyBcdCAgLy8gSXQncyBiZXR0ZXIgdG8gcmV0dXJuIGEgbWVhbmluZ2Z1bCBlcnJvciB0byB0aGUgY2xpZW50LlxuXHRcdFx0Ly8gXHQgIHJldHVybiB7IGVycm9yOiBcIkNvbW1hbmQgZXhlY3V0aW9uIGVycm9yXCIsIGRldGFpbHM6IGVycm9yLnRvU3RyaW5nKCkgfTtcblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gICB9LFxuXG5cblxuXHRcdFx0XHQvLyAgICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXHRcdFx0XHQvLyBcdHZhciBjb21tYW5kUmVzdWx0ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblxuXHRcdFx0XHQvLyBcdGlmICghY29tbWFuZFJlc3VsdCkge1xuXHRcdFx0XHQvLyBcdCAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsIFwiVGhlIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIik7XG5cdFx0XHRcdC8vIFx0fVxuXG5cdFx0XHRcdC8vIFx0dmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJ3N0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQnKTtcblx0XHRcdFx0Ly8gXHR2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSBldGgwLztcblx0XHRcdFx0Ly8gXHR2YXIgbWF0Y2ggPSBjb21tYW5kUmVzdWx0Lm1hdGNoKG1hY0FkZHJlc3NSdWxlUmVnZXgpO1xuXG5cdFx0XHRcdC8vIFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuXHRcdFx0XHQvLyBcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0XHQvLyBcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHRcdFx0Ly8gXHQgIHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIHNwZWNpZmljIE1BQycsIG1hY0FkZHJlc3M6IG1hdGNoWzFdIH07XG5cdFx0XHRcdC8vIFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gXHQgIHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0XHQvLyBcdH1cblx0XHRcdFx0Ly8gICB9LFxuXG5cblxuXG5cdFx0XHRcdFx0ICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9ICdzdWRvIGlwdGFibGVzIC1TIEZPUldBUkQnO1xuXG5cdFx0XHRcdFx0XHR2YXIgY29tbWFuZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cblx0XHRcdFx0XHRcdGlmICghY29tbWFuZFJlc3VsdCkge1xuXHRcdFx0XHRcdFx0ICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFwiY29tbWFuZC1leGVjdXRpb24tZXJyb3JcIiwgXCJUaGUgY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gQ2hlY2sgZm9yIHRoZSBzcGVjaWZpYyBydWxlIGluZGljYXRpbmcgaW50ZXJuZXQgc2hhcmluZyBmcm9tIHdsYW4wIHRvIGV0aDBcblx0XHRcdFx0XHRcdHZhciBzaGFyaW5nRnJvbVdsYW5Ub0V0aCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd2xhbjAgLW8gZXRoMCAtaiBBQ0NFUFQnKTtcblx0XHRcdFx0XHRcdHZhciBzaGFyaW5nVG9XbGFuRnJvbUV0aEVzdGFibGlzaGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSBldGgwIC1vIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnKTtcblxuXHRcdFx0XHRcdFx0aWYgKHNoYXJpbmdGcm9tV2xhblRvRXRoICYmIHNoYXJpbmdUb1dsYW5Gcm9tRXRoRXN0YWJsaXNoZWQpIHtcblx0XHRcdFx0XHRcdCAgLy8gSWYgYXQgbGVhc3Qgb25lIHBhaXIgb2YgcnVsZXMgZXhpc3RzLCBpbnRlcm5ldCBzaGFyaW5nIGlzIGNvbnNpZGVyZWQgZW5hYmxlZC5cblx0XHRcdFx0XHRcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCAgcmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ICB9LFxuXG5cblxuXG5cblxuXG5cblx0XHQnZW5hYmxlSW50ZXJuZXRTaGFyaW5nRXRoZXJuZXQnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1hcHBlbmQgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0XHRdLmpvaW4oJyAmJiAnKTtcblxuXHRcdFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0ZGVycikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBFdGhlcm5ldCBlbmFibGVkIHN1Y2Nlc3NmdWxseS4nKTtcblx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCBzdGRvdXQpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnZGlzYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdC8vIERlZmluZSBhIGxpc3Qgb2YgY29tbWFuZHMgdG8gcmVwZWF0ZWRseSBhdHRlbXB0IGRlbGV0aW9uLlxuXHRcdFx0dmFyIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBbXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSBldGgwIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERScsXG5cdFx0XHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0XHRdO1xuXG5cdFx0XHQvLyBGdW5jdGlvbiB0byBleGVjdXRlIGEgY29tbWFuZCBhbmQgcmVjdXJzaXZlbHkgY2FsbCBpdHNlbGYgaWYgdGhlIGNvbW1hbmQgd2FzIHN1Y2Nlc3NmdWwgKHJ1bGUgd2FzIGZvdW5kIGFuZCBkZWxldGVkKS5cblx0XHRcdGZ1bmN0aW9uIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKSB7XG5cdFx0XHRcdGNtZChjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBubyBlcnJvciwgdGhlIHJ1bGUgd2FzIGZvdW5kIGFuZCBkZWxldGVkLCBzbyB0cnkgYWdhaW4uXG5cdFx0XHRcdFx0aWYgKCFlcnJvcikge1xuXHRcdFx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yLCBpdCBsaWtlbHkgbWVhbnMgbm8gbW9yZSBpbnN0YW5jZXMgb2YgdGhlIHJ1bGUgZXhpc3QsIHNvIGNhbGwgdGhlIGRvbmVDYWxsYmFjay5cblx0XHRcdFx0XHRcdGRvbmVDYWxsYmFjaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEV4ZWN1dGUgZGVsZXRpb24gZm9yIGVhY2ggY29tbWFuZCBhbmQgdHJhY2sgY29tcGxldGlvbi5cblx0XHRcdHZhciB0YXNrc0NvbXBsZXRlZCA9IDA7XG5cdFx0XHRpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcblx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCAoKSA9PiB7XG5cdFx0XHRcdFx0dGFza3NDb21wbGV0ZWQrKztcblx0XHRcdFx0XHQvLyBPbmNlIGFsbCBkZWxldGlvbiB0YXNrcyBhcmUgZG9uZSwgc2F2ZSB0aGUgaXB0YWJsZXMgY29uZmlndXJhdGlvbi5cblx0XHRcdFx0XHRpZiAodGFza3NDb21wbGV0ZWQgPT09IGlwdGFibGVzRGVsZXRlQ29tbWFuZHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvciBkdXJpbmcgc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgc2F2ZWQuYCk7XG5cdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgJ0FsbCBzcGVjaWZpZWQgcnVsZXMgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0Ly8gJ2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0Ly8gXHR2YXIgaXB0YWJsZXNDb21tYW5kcyA9IFtcblx0XHQvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBBQ0NFUFQnLFxuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBNQVNRVUVSQURFJyxcblx0XHQvLyBcdFx0J3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZSdcblx0XHQvLyBcdF0uam9pbignICYmICcpO1xuXG5cdFx0Ly8gXHRjbWQoaXB0YWJsZXNDb21tYW5kcywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdC8vIFx0XHRpZiAoZXJyb3IpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdC8vIFx0XHRcdHJldHVybjtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0XHRpZiAoc3RkZXJyKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgdmlhIEV0aGVybmV0IGRpc2FibGVkIHN1Y2Nlc3NmdWxseS4nKTtcblx0XHQvLyBcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCBzdGRvdXQpO1xuXHRcdC8vIFx0fSk7XG5cdFx0Ly8gfSxcblx0XHQnZW5hYmxlSW50ZXJuZXRGb3JNYWNFdGhlcm5ldCc6IGZ1bmN0aW9uKG1hY0FkZHJlc3MsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0Ly8gQ29tbWFuZCB0byBhbGxvdyBpbnRlcm5ldCBmb3IgdGhlIHNwZWNpZmllZCBNQUMgYWRkcmVzcyBvbiBldGgwLlxuXHRcdFx0dmFyIGFsbG93TWFjQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgZXRoMCAtbSBtYWMgLS1tYWMtc291cmNlICR7bWFjQWRkcmVzc30gLWogQUNDRVBUYDtcblx0XHRcdC8vIENvbW1hbmQgdG8gZHJvcCBhbGwgb3RoZXIgaW50ZXJuZXQgdHJhZmZpYyBvbiBldGgwLlxuXHRcdFx0dmFyIGJsb2NrT3RoZXJzQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgZXRoMCAtaiBEUk9QYDtcblxuXHRcdFx0Ly8gQWxsb3cgaW50ZXJuZXQgZm9yIHRoZSBzcGVjaWZpZWQgTUFDIGFkZHJlc3MuXG5cdFx0XHRyZXMgPSBjbWQoYWxsb3dNYWNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIGFsbG93aW5nIE1BQyAke21hY0FkZHJlc3N9OiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBhbGxvd2VkIGZvciBNQUMgJHttYWNBZGRyZXNzfS5gKTtcblxuXHRcdFx0XHQvLyBCbG9jayBhbGwgb3RoZXIgTUFDIGFkZHJlc3NlcyBmcm9tIGFjY2Vzc2luZyB0aGUgaW50ZXJuZXQuXG5cdFx0XHRcdHJlcyA9IGNtZChibG9ja090aGVyc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIGJsb2NraW5nIG90aGVyIE1BQ3M6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGBJbnRlcm5ldCBhY2Nlc3MgYmxvY2tlZCBmb3Igb3RoZXIgTUFDIGFkZHJlc3Nlcy5gKTtcblx0XHRcdFx0XHQvLyBPcHRpb25hbGx5LCBzYXZlIHRoZSBpcHRhYmxlcyBzZXR0aW5ncyB0byBtYWtlIHRoZW0gcGVyc2lzdGVudC5cblx0XHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYGlwdGFibGVzIHJ1bGVzIHNhdmVkLmApO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2sobnVsbCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQncmVtb3ZlQWxsTWFjRmlsdGVyc0ZvckV0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdC8vIExpc3QgYWxsIEZPUldBUkQgcnVsZXMgd2l0aCBsaW5lIG51bWJlcnNcblx0XHRcdGNtZCgnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC0tbGluZS1udW1iZXJzIC1uJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIEZPUldBUkQgcnVsZXM6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUHJvY2VzcyBzdGRvdXQgdG8gaWRlbnRpZnkgcnVsZXMgcmVsYXRlZCB0byBNQUMgZmlsdGVyaW5nIG9uIGV0aDBcblx0XHRcdFx0Y29uc3QgbGluZXMgPSBzdGRvdXQuc3BsaXQoJ1xcbicpO1xuXHRcdFx0XHRjb25zdCBydWxlTnVtYmVycyA9IGxpbmVzLnJlZHVjZSgoYWNjLCBsaW5lLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdGlmIChsaW5lLmluY2x1ZGVzKCdldGgwJykgJiYgbGluZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdtYWMnKSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgcnVsZU51bWJlciA9IGxpbmUuc3BsaXQoL1xccysvKVswXTsgLy8gRXh0cmFjdCB0aGUgcnVsZSBudW1iZXIsIGFzc3VtaW5nIGl0J3MgdGhlIGZpcnN0IGVsZW1lbnRcblx0XHRcdFx0XHRcdGFjYy5wdXNoKHJ1bGVOdW1iZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0XHR9LCBbXSk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGlkZW50aWZpZWQgcnVsZXMgc3RhcnRpbmcgZnJvbSB0aGUgaGlnaGVzdCBudW1iZXIgdG8gcHJldmVudCBzaGlmdGluZyBvZiBsaW5lIG51bWJlcnNcblx0XHRcdFx0cnVsZU51bWJlcnMuc29ydCgoYSwgYikgPT4gYiAtIGEpLmZvckVhY2gocnVsZU51bWJlciA9PiB7XG5cdFx0XHRcdFx0Y21kKGBzdWRvIGlwdGFibGVzIC1EIEZPUldBUkQgJHtydWxlTnVtYmVyfWAsIChyZW1vdmVFcnJvciwgcmVtb3ZlU3Rkb3V0LCByZW1vdmVTdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdGlmIChyZW1vdmVFcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciByZW1vdmluZyBydWxlICR7cnVsZU51bWJlcn06ICR7cmVtb3ZlRXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdC8vIERlY2lkZSBpZiB5b3Ugd2FudCB0byBjb250aW51ZSByZW1vdmluZyBvdGhlciBydWxlcyBvciBzdG9wIGhlcmVcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYFJ1bGUgJHtydWxlTnVtYmVyfSByZW1vdmVkIHN1Y2Nlc3NmdWxseS5gKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gQWZ0ZXIgYXR0ZW1wdGluZyB0byByZW1vdmUgYWxsIGlkZW50aWZpZWQgcnVsZXMsIHNhdmUgdGhlIGlwdGFibGVzIGNvbmZpZ3VyYXRpb25cblx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoc2F2ZUVycm9yLCBzYXZlU3Rkb3V0LCBzYXZlU3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHNhdmVFcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3Igc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke3NhdmVFcnJvcn1gKTtcblx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soc2F2ZUVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2lwdGFibGVzIHJ1bGVzIHVwZGF0ZWQgYW5kIHNhdmVkLicpO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgJ0FsbCBNQUMgZmlsdGVyIHJ1bGVzIGZvciBFdGhlcm5ldCByZW1vdmVkIGFuZCBjaGFuZ2VzIHNhdmVkLicpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J2dldEludGVybmV0U2hhcmluZ1N0YXR1c01vYmlsZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLVMgRk9SV0FSRCc7XG5cblx0XHRcdHZhciBjb21tYW5kUmVzdWx0ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblxuXHRcdFx0aWYgKCFjb21tYW5kUmVzdWx0KSB7XG5cdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFwiY29tbWFuZC1leGVjdXRpb24tZXJyb3JcIiwgXCJUaGUgY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRqdXN0ZWQgdG8gY2hlY2sgZm9yIHRoZSBzcGVjaWZpYyBydWxlIGluZGljYXRpbmcgaW50ZXJuZXQgc2hhcmluZyBmcm9tIHdsYW4wIHRvIHd3YW4wXG5cdFx0XHR2YXIgc2hhcmluZ0Zyb21XbGFuVG9Xd2FuID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcygnLUEgRk9SV0FSRCAtaSB3bGFuMCAtbyB3d2FuMCAtaiBBQ0NFUFQnKTtcblx0XHRcdHZhciBzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJy1BIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcpO1xuXG5cdFx0XHRpZiAoc2hhcmluZ0Zyb21XbGFuVG9Xd2FuICYmIHNoYXJpbmdUb1dsYW5Gcm9tV3dhbkVzdGFibGlzaGVkKSB7XG5cdFx0XHQvLyBJZiBhdCBsZWFzdCBvbmUgcGFpciBvZiBydWxlcyBleGlzdHMsIGludGVybmV0IHNoYXJpbmcgdG8gdGhlIG1vYmlsZSBpbnRlcmZhY2UgaXMgY29uc2lkZXJlZCBlbmFibGVkLlxuXHRcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3IgYWxsJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQvLyBcdC8vIENvbW1hbmQgdG8gbGlzdCBGT1JXQVJEIHJ1bGVzXG5cdFx0Ly8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG5cdFx0Ly8gXHRjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yIHx8IHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvciB8fCBzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciB8fCBuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cblx0XHQvLyBcdFx0Ly8gQ2hlY2sgZm9yIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBydWxlc1xuXHRcdC8vIFx0XHR2YXIgaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgPSBzdGRvdXQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIHd3YW4wJykgJiYgc3Rkb3V0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG5cblx0XHQvLyBcdFx0Ly8gRXh0cmFjdCBNQUMgYWRkcmVzcyBydWxlc1xuXHRcdC8vIFx0XHR2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSB3d2FuMC87XG5cdFx0Ly8gXHRcdHZhciBtYXRjaCA9IHN0ZG91dC5tYXRjaChtYWNBZGRyZXNzUnVsZVJlZ2V4KTtcblxuXHRcdC8vIFx0XHQvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcblx0XHQvLyBcdFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuXHRcdC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsXG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfSk7XG5cdFx0Ly8gXHRcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcblx0XHQvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGEgc3BlY2lmaWMgTUFDIGFkZHJlc3Ncblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3Igc3BlY2lmaWMgTUFDJywgbWFjQWRkcmVzczogbWF0Y2hbMV0gfSk7XG5cdFx0Ly8gXHRcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBkaXNhYmxlZCBvciBub3QgY29uZmlndXJlZCBhcyBleHBlY3RlZFxuXHRcdC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfSk7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH0pO1xuXHRcdC8vIH0sXG5cblx0XHQnZW5hYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gW1xuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHd3YW4wIC0tb3V0LWludGVyZmFjZSB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUJyxcblx0XHRcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1hcHBlbmQgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREUnLFxuXHRcdFx0XHQnc3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlJ1xuXHRcdFx0XS5qb2luKCcgJiYgJyk7XG5cblx0XHRcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGRlcnIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnSW50ZXJuZXQgc2hhcmluZyB2aWEgbW9iaWxlIGVuYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdkaXNhYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdC8vIERlZmluZSBjb21tYW5kcyBmb3IgZGVsZXRpb24gd2l0aG91dCBjb21iaW5pbmcgdGhlbVxuXHRcdFx0dmFyIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMgPSBbXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0XHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERSdcblx0XHRcdF07XG5cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIHJlY3Vyc2l2ZWx5IGV4ZWN1dGUgYSBjb21tYW5kIHVudGlsIGl0IGZhaWxzIChpbmRpY2F0aW5nIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlKVxuXHRcdFx0ZnVuY3Rpb24gZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spIHtcblx0XHRcdFx0Y21kKGNvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHQvLyBObyBlcnJvciBtZWFucyB0aGUgY29tbWFuZCBzdWNjZWVkZWQsIHNvIHRoZXJlIG1pZ2h0IGJlIG1vcmUgaW5zdGFuY2VzXG5cdFx0XHRcdFx0aWYgKCFlcnJvcikge1xuXHRcdFx0XHRcdFx0ZXhlY3V0ZUFuZFJlcGVhdChjb21tYW5kLCBkb25lQ2FsbGJhY2spO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBFcnJvciBsaWtlbHkgbWVhbnMgbm8gbW9yZSBpbnN0YW5jZXMgb2YgdGhlIHJ1bGUsIG1vdmUgb25cblx0XHRcdFx0XHRcdGRvbmVDYWxsYmFjaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEV4ZWN1dGUgZGVsZXRpb24gZm9yIGVhY2ggY29tbWFuZCBhbmQgdHJhY2sgd2hlbiBhbGwgYXJlIGNvbXBsZXRlZFxuXHRcdFx0dmFyIHRhc2tzQ29tcGxldGVkID0gMDtcblx0XHRcdGlwdGFibGVzRGVsZXRlQ29tbWFuZHMuZm9yRWFjaCgoY29tbWFuZCkgPT4ge1xuXHRcdFx0XHRleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsICgpID0+IHtcblx0XHRcdFx0XHR0YXNrc0NvbXBsZXRlZCsrO1xuXHRcdFx0XHRcdC8vIEFmdGVyIGFsbCBjb21tYW5kcyBoYXZlIGJlZW4gYXR0ZW1wdGVkLCBzYXZlIHRoZSBjb25maWd1cmF0aW9uXG5cdFx0XHRcdFx0aWYgKHRhc2tzQ29tcGxldGVkID09PSBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHNhdmVTdGRvdXQsIHNhdmVTdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgRXJyb3Igc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnaXB0YWJsZXMgcnVsZXMgZm9yIG1vYmlsZSBpbnRlcmZhY2UgdXBkYXRlZCBhbmQgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgJ0FsbCBzcGVjaWZpZWQgcnVsZXMgZm9yIG1vYmlsZSBpbnRlcmZhY2UgcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0Ly8gJ2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdC8vIFx0dmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG5cdFx0Ly8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuXHRcdC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERScsXG5cdFx0Ly8gXHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG5cdFx0Ly8gXHRdLmpvaW4oJyAmJiAnKTtcblxuXHRcdC8vIFx0Y21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHQvLyBcdFx0aWYgKGVycm9yKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHQvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcblx0XHQvLyBcdFx0XHRyZXR1cm47XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdFx0aWYgKHN0ZGVycikge1xuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG5cdFx0Ly8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdJbnRlcm5ldCBzaGFyaW5nIHZpYSBtb2JpbGUgZGlzYWJsZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXHRcdC8vIFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9LFxuXHRcdCdhbGxvd0ludGVybmV0Rm9yTWFjTW9iaWxlJzogZnVuY3Rpb24obWFjQWRkcmVzcywgY2FsbGJhY2spIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvLyBGaXJzdCwgZW5hYmxlIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBmcm9tIHdsYW4wIHRvIHd3YW4wXG5cdFx0XHRyZXMgPSBjbWQoJ3N1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3bGFuMCAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogQUNDRVBUICYmIHN1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCAmJiBzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tYXBwZW5kIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBNQVNRVUVSQURFJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBlbmFibGluZyBpbnRlcm5ldCBzaGFyaW5nOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coYEludGVybmV0IHNoYXJpbmcgZW5hYmxlZCB2aWEgd3dhbjAuYCk7XG5cdFx0XHRcdC8vIEFsbG93IGludGVybmV0IG9ubHkgZm9yIHRoZSBzcGVjaWZpZWQgTUFDIGFkZHJlc3Mgb24gd3dhbjBcblx0XHRcdFx0dmFyIGFsbG93TWFjQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1JIEZPUldBUkQgMSAtaSB3d2FuMCAtbSBtYWMgLS1tYWMtc291cmNlICR7bWFjQWRkcmVzc30gLWogQUNDRVBUYDtcblx0XHRcdFx0Ly8gQmxvY2sgYWxsIG90aGVyIE1BQyBhZGRyZXNzZXMgZnJvbSBhY2Nlc3NpbmcgdGhlIGludGVybmV0IHZpYSB3d2FuMC5cblx0XHRcdFx0dmFyIGJsb2NrT3RoZXJzQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd3dhbjAgLWogRFJPUGA7XG5cblx0XHRcdFx0Ly8gQWxsb3cgc3BlY2lmaWMgTUFDXG5cdFx0XHRcdHJlcyA9IGNtZChhbGxvd01hY0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIGFsbG93aW5nIE1BQyAke21hY0FkZHJlc3N9IG9uIFdXQU46ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGFsbG93ZWQgZm9yIE1BQyAke21hY0FkZHJlc3N9IG9uIFdXQU4uYCk7XG5cblx0XHRcdFx0XHQvLyBCbG9jayBhbGwgb3RoZXIgTUFDc1xuXHRcdFx0XHRcdHJlcyA9IGNtZChibG9ja090aGVyc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yIGR1cmluZyBibG9ja2luZyBvdGhlciBNQUNzIG9uIFdXQU46ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgSW50ZXJuZXQgYWNjZXNzIGJsb2NrZWQgZm9yIG90aGVyIE1BQyBhZGRyZXNzZXMgb24gV1dBTi5gKTtcblxuXHRcdFx0XHRcdFx0Ly8gU2F2ZSBpcHRhYmxlcyBydWxlc1xuXHRcdFx0XHRcdFx0Y21kKCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlcyBmb3IgV1dBTjogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBmb3IgV1dBTiBzYXZlZC5gKTtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sobnVsbCk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdyZW1vdmVBbGxNYWNGaWx0ZXJzRm9yTW9iaWxlJzogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdC8vIExpc3QgYWxsIEZPUldBUkQgcnVsZXNcblx0XHRcdGNtZCgnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC0tbGluZS1udW1iZXJzIC1uJywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIHJ1bGVzOiAke2Vycm9yfWApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByb2Nlc3Mgc3Rkb3V0IHRvIGZpbmQgcnVsZXMgdG8gZGVsZXRlLiBUaGlzIHBhcnQgaXMgcHNldWRvLWNvZGUgYW5kIG5lZWRzIGFkanVzdG1lbnRcblx0XHRcdFx0Y29uc3QgbGluZXMgPSBzdGRvdXQuc3BsaXQoJ1xcbicpO1xuXHRcdFx0XHRjb25zdCBydWxlTnVtYmVycyA9IFtdO1xuXHRcdFx0XHRsaW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xuXHRcdFx0XHRcdGlmIChsaW5lLmluY2x1ZGVzKCd3d2FuMCcpICYmIGxpbmUuaW5jbHVkZXMoJ01BQycpKSB7XG5cdFx0XHRcdFx0XHQvLyBFeHRyYWN0IHRoZSBydWxlIG51bWJlciBmcm9tIHRoZSBsaW5lXG5cdFx0XHRcdFx0XHRjb25zdCBydWxlTnVtYmVyID0gbGluZS5zcGxpdCgnICcpWzBdOyAvLyBUaGlzIGlzIGEgc2ltcGxpZmljYXRpb25cblx0XHRcdFx0XHRcdHJ1bGVOdW1iZXJzLnB1c2gocnVsZU51bWJlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgcnVsZXMgYnkgdGhlaXIgbnVtYmVycywgc3RhcnRpbmcgZnJvbSB0aGUgaGlnaGVzdCBudW1iZXJcblx0XHRcdFx0cnVsZU51bWJlcnMuc29ydCgoYSwgYikgPT4gYiAtIGEpLmZvckVhY2gocnVsZU51bWJlciA9PiB7XG5cdFx0XHRcdFx0Y21kKGBzdWRvIGlwdGFibGVzIC1EIEZPUldBUkQgJHtydWxlTnVtYmVyfWAsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciByZW1vdmluZyBydWxlICR7cnVsZU51bWJlcn06ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0XHQvLyBPcHRpb25hbGx5LCBzdG9wIHRoZSBwcm9jZXNzIG9yIGNvbnRpbnVlIGF0dGVtcHRpbmcgdG8gcmVtb3ZlIG90aGVyIHJ1bGVzXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBSdWxlICR7cnVsZU51bWJlcn0gcmVtb3ZlZCBzdWNjZXNzZnVsbHkuYCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIEFmdGVyIGFsbCBydWxlcyBoYXZlIGJlZW4gcHJvY2Vzc2VkLCBzYXZlIHRoZSBpcHRhYmxlcyBydWxlc1xuXHRcdFx0XHRjbWQoJ3N1ZG8gbmV0ZmlsdGVyLXBlcnNpc3RlbnQgc2F2ZScsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gKTtcblx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnaXB0YWJsZXMgcnVsZXMgdXBkYXRlZCBhbmQgc2F2ZWQuJyk7XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCAnQWxsIE1BQyBmaWx0ZXIgcnVsZXMgZm9yIFdXQU4gcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC4nKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdyZWJvb3QnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoJ3N1ZG8gcmVib290JywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdCAgY29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcblx0XHRcdFx0ICByZXR1cm47XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQnc2h1dGRvd24nOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoJ3N1ZG8gaGFsdCcsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHQgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdCAgcmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0J3N5bmNocm9uaXplJzogZnVuY3Rpb24oKSB7XG5cblx0XHRcdGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgc3luYy4uLlwiKTtcblxuXHRcdFx0dmFyIGRldmljZVNlcmlhbCA9IE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuc2VyaWFsO1xuXHRcdFx0dmFyIGRldmljZVRva2VuID0gTWV0ZW9yLnNldHRpbmdzLm1vb2RsZUFQSVRva2VuO1xuXHRcdFx0dmFyIHVybCA9IE1ldGVvci5zZXR0aW5ncy5jbG91ZFVSTCArIFwiL2FwaS9zdGFydFN5bmNcIjtcblx0XHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdCdkZXZpY2VTZXJpYWwnOiBkZXZpY2VTZXJpYWwsXG5cdFx0XHRcdFx0J2RldmljZVRva2VuJzogZGV2aWNlVG9rZW5cblx0XHRcdFx0fSxcblx0XHRcdCAgICBucG1SZXF1ZXN0T3B0aW9uczoge1xuXHRcdFx0ICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLCAvLyBUT0RPIHJlbW92ZSB3aGVuIGRlcGxveVxuXHRcdFx0ICAgICAgICB0aW1lb3V0OiAxMjAwMDAwXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICB0aW1lb3V0OiAxMjAwMDAwXG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvL3ZhciByZXN1bHQgPSBIVFRQLmNhbGwoJ1BPU1QnLCB1cmwsIG9wdGlvbnMpO1xuXG5cdFx0XHRcdHZhciByZXN1bHQgPSBIVFRQLnBvc3QoIHVybCwgb3B0aW9ucyApO1xuXHRcdFx0XHR2YXIgcmVzdWx0Q29udGVudCA9IHJlc3VsdC5jb250ZW50O1xuXHRcdFx0XHQvL1N5bmNocm9uaXphdGlvbnMuaW5zZXJ0KHtkYXRlOkRhdGUubm93KCl9KTtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdENvbnRlbnQ7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coIFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi5cIiwgZSApO1xuXHRcdFx0XHRyZXR1cm4gXCJFcnJvciB3aGlsZSB0cnlpbmcgdG8gc3luY3Jvbml6ZS4uLiBcIisgZTtcblx0XHRcdH1cblx0XHQvL3JldHVybiByZXN1bHRDb250ZW50O1xuXHRcdH0sXG5cdH0pO1xufVxufSk7IiwiLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbEFwcHMnLCBmdW5jdGlvbigpIHtcbi8vIFx0cmV0dXJuIEFwcHMuZmluZCh7fSk7XG4vLyB9KTtcblxuLy8gTWV0ZW9yLnB1Ymxpc2goXCJ1c2Vyc1wiLCBmdW5jdGlvbigpIHtcbi8vICAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoe30sIHtmaWVsZHM6e2NyZWF0ZWRBdDogdHJ1ZSwgcHJvZmlsZTogdHJ1ZSwgZW1haWxzOiB0cnVlLCB1c2VybmFtZTogdHJ1ZX19KTtcbi8vIH0pO1xuXG5cbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIH0pOyIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuXG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9zeW5jaHJvbml6YXRpb25zLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvdXNlcnMuanMnO1xuXG5pbXBvcnQgJy4uL3NlcnZlci9maXh0dXJlcy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci9tZXRob2RzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL3B1YmxpY2F0aW9ucy5qcyc7XG5pbXBvcnQgJy4uL2xpYi9hcHBfbG9hZGVyLmpzJztcblxuXG4vL2ltcG9ydCB7RERQfSBmcm9tICdtZXRlb3IvZGRwJztcbi8vaW1wb3J0IHtBY2NvdW50c30gZnJvbSAnbWV0ZW9yL2FjY291bnRzLWJhc2UnO1xuXG5cbi8vIGltcG9ydCAnLi4vaW1wb3J0cy9zdGFydHVwL3NlcnZlci9maXh0dXJlcy5qcyc7XG5cbi8vIGltcG9ydCAnLi4vaW1wb3J0cy9hcGkvZml4dHVyZXMuanMnO1xuXG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcblx0Y29uc29sZS5sb2coXCJtZXRlb3Igc3RhcnRlZC4uLlwiKTtcblxuXG5cbiAgLy8gY29kZSB0byBydW4gb24gc2VydmVyIGF0IHN0YXJ0dXBcblxuIC8vICBTZXJ2ZXIyID0gRERQLmNvbm5lY3QoXCJodHRwOi8vYmVla2VlLmJveDo4M1wiKTtcblx0Ly8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFNlcnZlcjI7XG5cdC8vIGNvbnNvbGUubG9nKFwib24gY29ubmVjdGUuLi5cIik7XG59KTtcbiJdfQ==
