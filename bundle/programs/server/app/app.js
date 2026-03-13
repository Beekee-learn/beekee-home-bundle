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
    var bundleScriptsPath = path.join(path.dirname(process.argv[1] || process.cwd()), "scripts");
    var localScriptsPath = fs.existsSync(bundleScriptsPath) ? bundleScriptsPath : path.join(process.cwd(), "scripts");
    var preferredScriptsBasePath = fs.existsSync(localScriptsPath) ? localScriptsPath : scriptsPath;
    var wifiClientEnableScriptName = "switch_wifi_to_client.sh";
    var wifiClientDisableScriptName = "switch_wifi_to_ap.sh";
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

    function writeWifiClientModeState(enabled) {
      try {
        fs.writeFileSync(wifiClientModeStatePath, enabled ? "enabled\n" : "disabled\n", "utf-8");
      } catch (error) {
        console.log("Error writing Wi-Fi client mode state:", error);
      }
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

    writeWifiClientModeState(detectWifiClientModeFromSystem());
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
          runWifiModeScript(wifiClientEnableScriptName);
          writeWifiClientModeState(true);
          return true;
        } catch (error) {
          console.log("Error enabling Wi-Fi client mode:", error);
          throw new Meteor.Error("wifi-client-mode-enable-failed", error.reason || error.message || "Failed to enable Wi-Fi client mode.");
        }
      },
      disableWifiClientMode: function () {
        try {
          runWifiModeScript(wifiClientDisableScriptName);
          writeWifiClientModeState(false);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiYWRkQ2xhc3MiLCJmYWRlT3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnQiLCJBcHBzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJhbGxvdyIsImluc2VydCIsInVwZGF0ZSIsInVzZXJJZCIsInNwYWNlIiwicHVibGlzaCIsImFwcHNQdWJsaWNhdGlvbiIsImZpbmQiLCJTeW5jaHJvbml6YXRpb25zIiwic3luY2hyb25pemF0aW9uc1B1YmxpY2F0aW9uIiwiaXNBZG1pbiIsImNvbnNvbGUiLCJsb2ciLCJSb2xlcyIsInVzZXJJc0luUm9sZSIsInVzZXIiLCJyb2xlQXNzaWdubWVudCIsInJlYWR5IiwiY3JlYXRlUm9sZSIsInVubGVzc0V4aXN0cyIsInVzZXJzIiwiY291bnQiLCJhZG1pblBhc3N3b3JkIiwic2V0dGluZ3MiLCJ1c2VybmFtZSIsInJvbGVzIiwiXyIsImVhY2giLCJpZCIsIkFjY291bnRzIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJwcm9maWxlIiwibmFtZSIsImxlbmd0aCIsImFkZFVzZXJzVG9Sb2xlcyIsImRlZmF1bHRBcHBzIiwiY3VzdG9tQXBwIiwib25seVRlYWNoZXIiLCJvcmRlciIsImRvY191c2VyIiwiZG9jX2FkbWluIiwibGFzdF92ZXJzaW9uIiwidXJsIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiaW5zdGFsbGVkIiwidmVyc2lvbiIsImhpZGRlbiIsIkhUVFAiLCJmcyIsIk5wbSIsInJlcXVpcmUiLCJwYXRoIiwiZXhlYyIsImNtZCIsIndyYXBBc3luYyIsIndpZmlTZXR0aW5nc1BhdGgiLCJjb25maWdQYXRoIiwic2NyaXB0c1BhdGgiLCJidW5kbGVTY3JpcHRzUGF0aCIsImpvaW4iLCJkaXJuYW1lIiwicHJvY2VzcyIsImFyZ3YiLCJjd2QiLCJsb2NhbFNjcmlwdHNQYXRoIiwiZXhpc3RzU3luYyIsInByZWZlcnJlZFNjcmlwdHNCYXNlUGF0aCIsIndpZmlDbGllbnRFbmFibGVTY3JpcHROYW1lIiwid2lmaUNsaWVudERpc2FibGVTY3JpcHROYW1lIiwid2lmaUNsaWVudE1vZGVTdGF0ZVBhdGgiLCJyZWFkbGluZSIsInNoZWxsRXNjYXBlIiwidmFsdWUiLCJTdHJpbmciLCJyZXBsYWNlIiwicmVzb2x2ZVNjcmlwdFBhdGgiLCJzY3JpcHROYW1lIiwiY2FuZGlkYXRlUGF0aHMiLCJjYW5kaWRhdGVQYXRoIiwicmVhZFdpZmlDbGllbnRNb2RlU3RhdGUiLCJzdGF0ZSIsInJlYWRGaWxlU3luYyIsInRyaW0iLCJlcnJvciIsIndyaXRlV2lmaUNsaWVudE1vZGVTdGF0ZSIsImVuYWJsZWQiLCJ3cml0ZUZpbGVTeW5jIiwiZGV0ZWN0V2lmaUNsaWVudE1vZGVGcm9tU3lzdGVtIiwiaGFzV2xhblVzYiIsInRvU3RyaW5nIiwiaGFzQXBBZGRyZXNzIiwibm1TdGF0ZSIsInRlc3QiLCJnZXRXaWZpQ2xpZW50TW9kZVN0YXRlIiwicGVyc2lzdGVkU3RhdGUiLCJlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQiLCJFcnJvciIsInJ1bldpZmlNb2RlU2NyaXB0Iiwic2NyaXB0UGF0aCIsIm1ldGhvZHMiLCJhZG1pblNldE5ld1Bhc3N3b3JkIiwiYWRtaW5JZCIsIm5ld1Bhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjcmVhdGVBY2NvdW50IiwiZWRpdEFjY291bnQiLCJfaWQiLCIkc2V0IiwiY2hhbmdlRW1haWwiLCJjaGVjayIsIm9sZGVtYWlsIiwiZW1haWxzIiwiZW1haWxSZWciLCJyZW1vdmVFbWFpbCIsImFkZHJlc3MiLCJhZGRFbWFpbCIsImRlbGV0ZVVzZXIiLCJyZXN1bHQiLCJtZXNzYWdlIiwiYWRkTWFuYWdlclJvbGUiLCJyZW1vdmVNYW5hZ2VyUm9sZSIsInJlbW92ZVVzZXJzRnJvbVJvbGVzIiwiYWRkQWRtaW5Sb2xlIiwicmVtb3ZlQWRtaW5Sb2xlIiwicnVuQ29tbWFuZCIsImNvbW1hbmQiLCJyZXMiLCJnZXRVc2VkU3BhY2UiLCJzdG9yYWdlVXNhZ2UiLCJ0b0ZpeGVkIiwic3RvcmFnZVRvdGFsIiwicGVyY2VudGFnZSIsImdldFNTSUQiLCJkYXRhIiwibWF0Y2giLCJSZWdFeHAiLCJTU0lEIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2V0U1NJRCIsIm5ld1NTSUQiLCJlbmNvZGVkTmV3U1NJRCIsIkJ1ZmZlciIsIm5ld0RhdGEiLCJnZXRXaWZpUGFzc3dvcmQiLCJzZXRXaWZpUGFzc3dvcmQiLCJnZXRXaWZpQ2hhbm5lbCIsImNoYW5uZWwiLCJzZXRXaWZpQ2hhbm5lbCIsIm5ld0NoYW5uZWwiLCJnZXRXaWZpQmFuZCIsInNldFdpZmlCYW5kIiwibmV3QmFuZCIsImJhbmRSZWdleCIsImNoYW5uZWxSZWdleCIsIm1hdGNoQmFuZCIsIm1hdGNoQ2hhbm5lbCIsImN1cnJlbnRDaGFubmVsIiwicGFyc2VJbnQiLCJnZXRTZXJpYWwiLCJzZXJpYWwiLCJnZXRPcGVyYXRvck5hbWUiLCJvcGVyYXRvck5hbWUiLCJnZXRTaWduYWxTdHJlbmd0aCIsInNpZ25hbFN0cmVuZ3RoIiwic3RyZW5ndGhWYWx1ZSIsInF1YWxpdHkiLCJnZXRBUE4iLCJBUE4iLCJnZXRBUE5Vc2VyIiwiQVBOVXNlciIsImdldEFQTlBhc3N3b3JkIiwiQVBOUGFzc3dvcmQiLCJnZXRTaW1DYXJkU3RhdHVzIiwic2ltU3RhdHVzUmVzdWx0IiwiZXhlY3V0ZUNvbW1hbmQiLCJzaW1TdGF0dXMiLCJpbmNsdWRlcyIsImdldFNpbVBpbiIsIlNpbVBpbiIsInNldFNpbVBpbiIsIlBJTiIsInNldEFQTiIsInNldEFQTlVzZXIiLCJzZXRBUE5QYXNzd29yZCIsImdldFJlbW90ZVN0YXR1cyIsImdldEF1dG9TeW5jU3RhdHVzIiwiZ2V0U2hhcmVJbnRlcm5ldFZpYUV0aGVybmV0U3RhdHVzIiwiaXNTaGFyaW5nIiwiZ2V0U2hhcmVJbnRlcm5ldFZpYU1vYmlsZVN0YXR1cyIsImFjdGl2YXRlUmVtb3RlIiwicmVzMiIsImRpc2FjdGl2YXRlUmVtb3RlIiwiYWN0aXZhdGVBdXRvU3luYyIsImRpc2FjdGl2YXRlQXV0b1N5bmMiLCJnZXRCYXR0ZXJ5U3RhdHVzIiwiYmF0dGVyeU1vZHVsZSIsImdldElzT25saW5lIiwiaXNPbmxpbmUiLCJnZXRFdGgwSVAiLCJnZXRXd2FuMElQIiwiZ2V0QmVla2VlT3NWZXJzaW9uIiwiZ2V0QmVla2VlSG9tZVZlcnNpb24iLCJqc29uIiwiSlNPTiIsInBhcnNlIiwicmVzdGFydE1vYmlsZUNvbm5lY3QiLCJnZXRJbnRlcm5ldEludGVyZmFjZSIsImdldHdsYW51c2IiLCJnZXRXTEFOVVNCIiwiZ2V0V2lmaUNsaWVudE1vZGVFbmFibGVkIiwiZW5hYmxlV2lmaUNsaWVudE1vZGUiLCJyZWFzb24iLCJkaXNhYmxlV2lmaUNsaWVudE1vZGUiLCJnZXRXaWZpTmV0d29ya3MiLCJ3aWZpIiwiaW5pdCIsImlmYWNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzY2FuIiwibmV0d29ya3MiLCJ1bmlxdWVOZXR3b3JrcyIsIk1hcCIsImZvckVhY2giLCJuZXR3b3JrIiwic3RyZW5ndGgiLCJrZXkiLCJzc2lkIiwibWFjIiwic3Vic3RyaW5nIiwiaGFzIiwiZ2V0Iiwic2V0Iiwic2VjdXJpdHkiLCJ1bmlxdWVOZXR3b3Jrc0FycmF5IiwiQXJyYXkiLCJmcm9tIiwidmFsdWVzIiwiY29ubmVjdFRvV2lmaSIsImNvbm5lY3QiLCJkaXNjb25uZWN0V2lmaSIsImRpc2Nvbm5lY3QiLCJmb3JnZXRXaWZpIiwiZGVsZXRlQ29ubmVjdGlvbiIsImdldENsaWVudFNTSUQiLCJnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNFdGhlcm5ldCIsImxpc3RGb3J3YXJkUnVsZXNDb21tYW5kIiwiY29tbWFuZFJlc3VsdCIsInNoYXJpbmdGcm9tV2xhblRvRXRoIiwic2hhcmluZ1RvV2xhbkZyb21FdGhFc3RhYmxpc2hlZCIsInN0YXR1cyIsIm1hY0FkZHJlc3MiLCJlbmFibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCIsImNhbGxiYWNrIiwiaXB0YWJsZXNDb21tYW5kcyIsInN0ZG91dCIsInN0ZGVyciIsImRpc2FibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCIsImlwdGFibGVzRGVsZXRlQ29tbWFuZHMiLCJleGVjdXRlQW5kUmVwZWF0IiwiZG9uZUNhbGxiYWNrIiwidGFza3NDb21wbGV0ZWQiLCJlbmFibGVJbnRlcm5ldEZvck1hY0V0aGVybmV0IiwiYWxsb3dNYWNDb21tYW5kIiwiYmxvY2tPdGhlcnNDb21tYW5kIiwicmVtb3ZlQWxsTWFjRmlsdGVyc0ZvckV0aGVybmV0IiwibGluZXMiLCJzcGxpdCIsInJ1bGVOdW1iZXJzIiwicmVkdWNlIiwiYWNjIiwibGluZSIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJydWxlTnVtYmVyIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInJlbW92ZUVycm9yIiwicmVtb3ZlU3Rkb3V0IiwicmVtb3ZlU3RkZXJyIiwic2F2ZUVycm9yIiwic2F2ZVN0ZG91dCIsInNhdmVTdGRlcnIiLCJnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNNb2JpbGUiLCJzaGFyaW5nRnJvbVdsYW5Ub1d3YW4iLCJzaGFyaW5nVG9XbGFuRnJvbVd3YW5Fc3RhYmxpc2hlZCIsImVuYWJsZUludGVybmV0U2hhcmluZ01vYmlsZSIsImRpc2FibGVJbnRlcm5ldFNoYXJpbmdNb2JpbGUiLCJhbGxvd0ludGVybmV0Rm9yTWFjTW9iaWxlIiwicmVtb3ZlQWxsTWFjRmlsdGVyc0Zvck1vYmlsZSIsInJlYm9vdCIsInNodXRkb3duIiwic3luY2hyb25pemUiLCJkZXZpY2VTZXJpYWwiLCJwdWJsaWMiLCJkZXZpY2VUb2tlbiIsIm1vb2RsZUFQSVRva2VuIiwiY2xvdWRVUkwiLCJvcHRpb25zIiwiaGVhZGVycyIsIm5wbVJlcXVlc3RPcHRpb25zIiwicmVqZWN0VW5hdXRob3JpemVkIiwidGltZW91dCIsInBvc3QiLCJyZXN1bHRDb250ZW50IiwiY29udGVudCIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxDQUFDQyxRQUFYLEVBQXFCO0FBQ3BCQyxRQUFNLENBQUNDLE9BQVAsQ0FBZSxZQUFmLEVBQTZCLDJOQUE3QjtBQUVBRCxRQUFNLENBQUNFLE9BQVAsQ0FBZSxZQUFmLEVBQTZCQyxNQUFNLENBQUNDLE9BQVAsQ0FBZSxpQkFBZixDQUE3QjtBQUNBOztBQUVELElBQUlOLE1BQU0sQ0FBQ08sUUFBWCxFQUFxQjtBQUNwQlAsUUFBTSxDQUFDUSxPQUFQLENBQWUsWUFBVztBQUV6QkMsY0FBVSxDQUFDLFlBQVc7QUFDakJDLE9BQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JDLFFBQWxCLENBQTJCLGVBQTNCO0FBRUpELE9BQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCRSxPQUE1QixDQUFvQyxHQUFwQyxFQUF5QyxZQUFXO0FBQ25ERixTQUFDLENBQUMsSUFBRCxDQUFELENBQVFHLE1BQVI7QUFDQUgsU0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkksV0FBbEIsQ0FBOEIsZUFBOUI7QUFDRCxPQUhB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LElBQVAsQ0FBWSx1QkFBWjtBQUFxQ0osTUFBTSxDQUFDSSxJQUFQLENBQVksc0JBQVo7QUFBb0NKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLDJCQUFaO0FBQXlDSixNQUFNLENBQUNJLElBQVAsQ0FBWSxzQkFBWjtBQVlqVDtBQUNBO0FBR0E7QUFFQTtBQUdBbkIsTUFBTSxDQUFDUSxPQUFQLENBQWUsTUFBTTtBQUNwQnlCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBRG9CLENBS25CO0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FWRCxFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cdEluamVjdC5yYXdIZWFkKFwibWV0YUxvYWRlclwiLCAnPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPTAsIHdpZHRoPWRldmljZS13aWR0aCwgaGVpZ2h0PWRldmljZS1oZWlnaHRcIi8+PG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCI+XHQ8bWV0YSBuYW1lPVwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj4nKTtcblxuXHRJbmplY3QucmF3Qm9keShcImh0bWxMb2FkZXJcIiwgQXNzZXRzLmdldFRleHQoJ2FwcF9sb2FkZXIuaHRtbCcpKTtcbn1cblxuaWYgKE1ldGVvci5pc0NsaWVudCkge1xuXHRNZXRlb3Iuc3RhcnR1cChmdW5jdGlvbigpIHtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdCQoJy5pbmRleC0taWNvbicpLmFkZENsYXNzKCdhbmltYXRlZC1pY29uJyk7XG5cblx0XHRcdCQoXCIjaW5qZWN0LWxvYWRlci13cmFwcGVyXCIpLmZhZGVPdXQoNTAwLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0JCgnLmluZGV4LS1pY29uJykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkLWljb24nKTtcblx0XHR9KTtcblx0XHR9LCA1MDApO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgQXBwcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdob21lLWFwcHMnKTtcblxuXG5cbkFwcHMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0dXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblx0cmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsQXBwcycsIGZ1bmN0aW9uIGFwcHNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gQXBwcy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBTeW5jaHJvbml6YXRpb25zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtc3luY2hyb25pemF0aW9ucycpO1xuXG5cblxuU3luY2hyb25pemF0aW9ucy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHJlbW92ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsU3luY2hyb25pemF0aW9ucycsIGZ1bmN0aW9uIHN5bmNocm9uaXphdGlvbnNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gU3luY2hyb25pemF0aW9ucy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuLy8gdmFyIHVzZXJzREJcdD0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vIHZhciBjb2xsZWN0aW9uXHQ9IHVzZXJzREIub3BlbigndXNlcnMnKTtcblxuXG4vL2NvbnN0IGRhdGFiYXNlID0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vY29uc3QgY29sbGVjdGlvbiA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy9leHBvcnQgY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vIFNoYXJpbmcgdGhlIHNhbWUgQWNjb3VudCBjb2xsZWN0aW9uIHRoYW4gYmVla2VlLWxpdmVcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHQvLyBjaGVjayB0aGF0IHRoZSB1c2VySWQgc3BlY2lmaWVkIGlzIGFkbWluXG5pc0FkbWluID0gZnVuY3Rpb24odXNlcklkKSB7XG5cdGNvbnNvbGUubG9nKFwiaXNhZG1pblwiKTtcbiAgcmV0dXJuIFJvbGVzLnVzZXJJc0luUm9sZShNZXRlb3IudXNlcigpLCAnYWRtaW4nKTtcbn1cblxuXG4vLyBQdWJsaXNoIFJvbGVzIHRvIGNsaWVudFxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoeyAndXNlci5faWQnOiB0aGlzLnVzZXJJZCB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJlYWR5KClcbiAgfVxufSk7XG5cbk1ldGVvci5wdWJsaXNoKG51bGwsIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCgpO1xuXG59KTtcblxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG5cbi8vIFNlcnZlcjIgPSBERFAuY29ubmVjdChcImh0dHA6Ly9iZWVrZWUuYm94OjgzXCIpO1xuLy8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFNlcnZlcjI7XG5cblxuLy92YXIgZGF0YWJhc2UgPSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy9NZXRlb3IudXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vZXhwb3J0IGNvbnN0IFVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2FwcHMnKTtcblxuXG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG59IiwiaW1wb3J0IHsgQXBwcyB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuXG5cdC8vIENyZWF0ZSB0aGUgcm9sZXNcblx0Um9sZXMuY3JlYXRlUm9sZSgnbWFuYWdlcicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblxuXG4vLyAjIyMgIENyZWF0ZSBhZG1pbiB1c2VyIGF0IGZpcnN0IHN0YXJ0ICAjIyNcblxuXG5pZiAoTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG5cdFxuXHQvLyBDcmVhdGUgdGhlIHJvbGVcblx0Um9sZXMuY3JlYXRlUm9sZSgnbWFuYWdlcicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblx0Um9sZXMuY3JlYXRlUm9sZSgnYWRtaW4nLCB7dW5sZXNzRXhpc3RzOiB0cnVlfSk7XG5cblx0dmFyIGFkbWluUGFzc3dvcmQgPSBNZXRlb3Iuc2V0dGluZ3MuYWRtaW5QYXNzd29yZDtcblxuXHR2YXIgdXNlcnMgPSBbXG5cdFx0e3VzZXJuYW1lOlwiYWRtaW5cIixyb2xlczpbJ2FkbWluJ119LFxuXHRdO1xuXG5cdF8uZWFjaCh1c2VycywgZnVuY3Rpb24gKHVzZXIpIHtcblx0XHR2YXIgaWQ7XG5cdFx0aWQgPSBBY2NvdW50cy5jcmVhdGVVc2VyKHtcblx0XHRcdHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuXHRcdFx0ZW1haWw6IFwiQWRtaW5cIixcblx0XHRcdHBhc3N3b3JkOiBhZG1pblBhc3N3b3JkLFxuXHRcdFx0cHJvZmlsZTp7bmFtZTpcIkFkbWluXCJ9XG5cdFx0fSk7XG5cblx0XHRpZiAodXNlci5yb2xlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRSb2xlcy5hZGRVc2Vyc1RvUm9sZXMoaWQsIHVzZXIucm9sZXMpO1xuXHRcdH1cblx0fSk7XG59XG5cblxuaWYgKEFwcHMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblxuXHR2YXIgZGVmYXVsdEFwcHMgPSBbXG5cdFx0e25hbWU6XCJMaXZlXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjMsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly9saXZlLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1saXZlLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBMaXZlIHByb21vdGUgcmVhbC10aW1lIGludGVyYWN0aW9uIGJ5IGFsbG93aW5nIGxlYXJuZXJzIHRvIGV4cHJlc3MgdGhlbXNlbHZlcyBhc2tpbmcgcXVlc3Rpb25zLCBwb3N0aW5nIHBob3RvcyBvciBzaGFyaW5nIGZpbGVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlJlc291cmNlc1wiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo3LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vcmVzb3VyY2VzLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS1yZXNvdXJjZXMucG5nXCIsIGRlc2NyaXB0aW9uOlwiV2l0aCBCZWVrZWUgUmVzb3VyY2VzLCB5b3UgY2FuIGVhc2lseSBzaGFyZSBmaWxlcyB3aXRoIHlvdXIgbGVhcm5lcnMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiV2hlZWxcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjp0cnVlLCBvcmRlcjo5LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIwLjdcIiwgdXJsOlwiaHR0cDovL3doZWVsLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS13aGVlbC5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgV2hlZWwgaXMgYSBzaW1wbGUgcmFuZG9tIHBpY2tlciB3aGVlbCB0aGF0IGFsbG93IHlvdSB0byBwaWNrIHVwIGEgcmFuZG9tIG5hbWUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiVGltZXJcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6OCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL3RpbWVyLmJlZWtlZS5ib3hcIiwgaWNvbjpcImJlZWtlZS10aW1lci5wbmdcIiwgZGVzY3JpcHRpb246XCJCZWVrZWUgVGltZXIgaXMgYSBzaW1wbGUgdGltZXIgdGhhdCBsZXRzIHlvdXIgbGVhcm5lcnMga25vdyBob3cgbXVjaCB0aW1lIHRoZXkgaGF2ZSBsZWZ0LlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIk1vb2RsZVwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjEsIGRvY191c2VyOlwibW9vZGxlX3RlYWNoZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL21vb2RsZS5iZWVrZWUuYm94XCIsIGljb246XCJtb29kbGUucG5nXCIsIGRlc2NyaXB0aW9uOlwiTW9vZGxlIGlzIGEgZnJlZSwgb25saW5lIExlYXJuaW5nIE1hbmFnZW1lbnQgc3lzdGVtIGVuYWJsaW5nIGVkdWNhdG9ycyB0byBjcmVhdGUgdGhlaXIgb3duIHByaXZhdGUgd2Vic2l0ZSBmaWxsZWQgd2l0aCBkeW5hbWljIGNvdXJzZXMgdGhhdCBleHRlbmQgbGVhcm5pbmcsIGFueSB0aW1lLCBhbnl3aGVyZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMy4xMS4yXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJLb2xpYnJpXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MiwgZG9jX3VzZXI6XCJrb2xpYnJpX3VzZXJkb2MucGRmXCIsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2tvbGlicmkuYmVla2VlLmJveFwiLCBpY29uOlwia29saWJyaS5wbmdcIiwgZGVzY3JpcHRpb246XCJLb2xpYnJpIGlzIGFuIG9wZW4tc291cmNlIGVkdWNhdGlvbmFsIHBsYXRmb3JtIHNwZWNpYWxseSBkZXNpZ25lZCB0byBwcm92aWRlIG9mZmxpbmUgYWNjZXNzIHRvIGEgd2lkZSByYW5nZSBvZiBxdWFsaXR5LCBvcGVubHkgbGljZW5zZWQgZWR1Y2F0aW9uYWwgcmVzb3VyY2VzIGluIGxvdy1yZXNvdXJjZSBjb250ZXh0cyBsaWtlIHJ1cmFsIHNjaG9vbHMsIHJlZnVnZWUgY2FtcHMsIG9ycGhhbmFnZXMsIGFuZCBhbHNvIGluIG5vbi1mb3JtYWwgc2Nob29sIHByb2dyYW1zLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjE0LjdcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHQvLyB7bmFtZTpcIkV0aGVycGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2V0aGVycGFkLmJlZWtlZS5ib3hcIiwgaWNvbjpcImV0aGVycGFkLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkV0aGVycGFkIGFsbG93cyB5b3UgdG8gZWRpdCBkb2N1bWVudHMgY29sbGFib3JhdGl2ZWx5IGluIHJlYWwtdGltZSwgbXVjaCBsaWtlIGEgbGl2ZSBtdWx0aS1wbGF5ZXIgZWRpdG9yIHRoYXQgcnVucyBpbiB5b3VyIGJyb3dzZXIuIFdyaXRlIGFydGljbGVzLCBwcmVzcyByZWxlYXNlcywgdG8tZG8gbGlzdHMsIGV0Yy4gdG9nZXRoZXIgd2l0aCB5b3VyIGZyaWVuZHMsIGZlbGxvdyBzdHVkZW50cyBvciBjb2xsZWFndWVzLCBhbGwgd29ya2luZyBvbiB0aGUgc2FtZSBkb2N1bWVudCBhdCB0aGUgc2FtZSB0aW1lLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIxLjguMTRcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIlN0b3JtXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NCwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3N0b3JtLmJlZWtlZS5ib3hcIiwgaWNvbjpcInN0b3JtLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhbmQgYW5pbWF0ZSBsaXZlIHN1cnZleXMsIGJyYWluc3Rvcm1zIGFuZCBxdWl6emVzLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjQuNVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiUGFkXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6NSwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL3BhZC5iZWVrZWUuYm94XCIsIGljb246XCJwYWQucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGNvbGxhYm9yYXRpdmUgd2FsbHMgdG8gc2hhcmUgYW5kIG9yZ2FuaXplIGNvbnRlbnQuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuOC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJCdXp6ZXJcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOnRydWUsIG9yZGVyOjYsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcInh4XCIsIHVybDpcImh0dHA6Ly9idXp6ZXIuYmVla2VlLmJveFwiLCBpY29uOlwiYnV6emVyLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkNyZWF0ZSBhIHZpcnR1YWwgZ2FtaW5nIHJvb20gYXJvdW5kIGEgY29ubmVjdGVkIGJ1enplci5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4yLjRcIiwgaGlkZGVuOmZhbHNlfSxcblxuXHRdO1xuXG5cdF8uZWFjaChkZWZhdWx0QXBwcywgZnVuY3Rpb24gKGRlZmF1bHRBcHBzKSB7XG5cdFx0QXBwcy5pbnNlcnQoZGVmYXVsdEFwcHMpO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBIVFRQIH0gZnJvbSBcIm1ldGVvci9odHRwXCI7XG5cbk1ldGVvci5zdGFydHVwKGZ1bmN0aW9uICgpIHtcbiAgaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICAgIHZhciBmcyA9IE5wbS5yZXF1aXJlKFwiZnNcIik7XG4gICAgdmFyIHBhdGggPSBOcG0ucmVxdWlyZShcInBhdGhcIik7XG4gICAgZXhlYyA9IE5wbS5yZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKS5leGVjO1xuICAgIGNtZCA9IE1ldGVvci53cmFwQXN5bmMoZXhlYyk7XG5cbiAgICB2YXIgd2lmaVNldHRpbmdzUGF0aCA9IE1ldGVvci5zZXR0aW5ncy53aWZpU2V0dGluZ3NQYXRoO1xuICAgIHZhciBjb25maWdQYXRoID0gTWV0ZW9yLnNldHRpbmdzLmNvbmZpZ1BhdGg7XG4gICAgdmFyIHNjcmlwdHNQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnNjcmlwdHNQYXRoIHx8IFwiL2hvbWUvYmVla2VlL3NjcmlwdHNcIjtcbiAgICB2YXIgYnVuZGxlU2NyaXB0c1BhdGggPSBwYXRoLmpvaW4oXG4gICAgICBwYXRoLmRpcm5hbWUocHJvY2Vzcy5hcmd2WzFdIHx8IHByb2Nlc3MuY3dkKCkpLFxuICAgICAgXCJzY3JpcHRzXCIsXG4gICAgKTtcbiAgICB2YXIgbG9jYWxTY3JpcHRzUGF0aCA9IGZzLmV4aXN0c1N5bmMoYnVuZGxlU2NyaXB0c1BhdGgpXG4gICAgICA/IGJ1bmRsZVNjcmlwdHNQYXRoXG4gICAgICA6IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInNjcmlwdHNcIik7XG4gICAgdmFyIHByZWZlcnJlZFNjcmlwdHNCYXNlUGF0aCA9IGZzLmV4aXN0c1N5bmMobG9jYWxTY3JpcHRzUGF0aClcbiAgICAgID8gbG9jYWxTY3JpcHRzUGF0aFxuICAgICAgOiBzY3JpcHRzUGF0aDtcbiAgICB2YXIgd2lmaUNsaWVudEVuYWJsZVNjcmlwdE5hbWUgPSBcInN3aXRjaF93aWZpX3RvX2NsaWVudC5zaFwiO1xuICAgIHZhciB3aWZpQ2xpZW50RGlzYWJsZVNjcmlwdE5hbWUgPSBcInN3aXRjaF93aWZpX3RvX2FwLnNoXCI7XG4gICAgdmFyIHdpZmlDbGllbnRNb2RlU3RhdGVQYXRoID1cbiAgICAgIE1ldGVvci5zZXR0aW5ncy53aWZpQ2xpZW50TW9kZVN0YXRlUGF0aCB8fFxuICAgICAgcGF0aC5qb2luKHByZWZlcnJlZFNjcmlwdHNCYXNlUGF0aCwgXCIud2lmaS1jbGllbnQtbW9kZS1zdGF0ZVwiKTtcbiAgICBjb25zdCByZWFkbGluZSA9IHJlcXVpcmUoXCJyZWFkbGluZVwiKTtcblxuICAgIGZ1bmN0aW9uIHNoZWxsRXNjYXBlKHZhbHVlKSB7XG4gICAgICByZXR1cm4gYCcke1N0cmluZyh2YWx1ZSkucmVwbGFjZSgvJy9nLCBgJ1xcXFwnJ2ApfSdgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVTY3JpcHRQYXRoKHNjcmlwdE5hbWUpIHtcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZVBhdGhzID0gW1xuICAgICAgICBwYXRoLmpvaW4obG9jYWxTY3JpcHRzUGF0aCwgc2NyaXB0TmFtZSksXG4gICAgICAgIHBhdGguam9pbihzY3JpcHRzUGF0aCwgc2NyaXB0TmFtZSksXG4gICAgICBdO1xuXG4gICAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZVBhdGggb2YgY2FuZGlkYXRlUGF0aHMpIHtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoY2FuZGlkYXRlUGF0aCkpIHtcbiAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlUGF0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FuZGlkYXRlUGF0aHNbMF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZFdpZmlDbGllbnRNb2RlU3RhdGUoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMod2lmaUNsaWVudE1vZGVTdGF0ZVBhdGgpKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGF0ZSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpQ2xpZW50TW9kZVN0YXRlUGF0aCwgXCJ1dGYtOFwiKS50cmltKCk7XG5cbiAgICAgICAgaWYgKHN0YXRlID09PSBcImVuYWJsZWRcIikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlID09PSBcImRpc2FibGVkXCIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgcmVhZGluZyBXaS1GaSBjbGllbnQgbW9kZSBzdGF0ZTpcIiwgZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3cml0ZVdpZmlDbGllbnRNb2RlU3RhdGUoZW5hYmxlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhcbiAgICAgICAgICB3aWZpQ2xpZW50TW9kZVN0YXRlUGF0aCxcbiAgICAgICAgICBlbmFibGVkID8gXCJlbmFibGVkXFxuXCIgOiBcImRpc2FibGVkXFxuXCIsXG4gICAgICAgICAgXCJ1dGYtOFwiLFxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3cml0aW5nIFdpLUZpIGNsaWVudCBtb2RlIHN0YXRlOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGV0ZWN0V2lmaUNsaWVudE1vZGVGcm9tU3lzdGVtKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaGFzV2xhblVzYiA9IGNtZChcbiAgICAgICAgICBcImlwIGxpbmsgc2hvdyB3bGFudXNiID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiLFxuICAgICAgICApXG4gICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAudHJpbSgpO1xuXG4gICAgICAgIGlmIChoYXNXbGFuVXNiICE9PSBcInRydWVcIikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhc0FwQWRkcmVzcyA9IGNtZChcbiAgICAgICAgICBcImlwIC00IGFkZHIgc2hvdyB3bGFudXNiIHwgZ3JlcCAtcSAnMTBcXFxcLjFcXFxcLjBcXFxcLjEvMjQnICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIsXG4gICAgICAgIClcbiAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgIC50cmltKCk7XG5cbiAgICAgICAgaWYgKGhhc0FwQWRkcmVzcyA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBubVN0YXRlID0gY21kKFxuICAgICAgICAgIFwibm1jbGkgLXQgLWYgREVWSUNFLFNUQVRFIGRldmljZSBzdGF0dXMgMj4vZGV2L251bGwgfCBhd2sgLUY6ICckMT09XFxcIndsYW51c2JcXFwiIHtwcmludCAkMjsgZXhpdH0nIHx8IHRydWVcIixcbiAgICAgICAgKVxuICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgLnRyaW0oKTtcblxuICAgICAgICByZXR1cm4gL14oY29ubmVjdGVkfGRpc2Nvbm5lY3RlZHxjb25uZWN0aW5nfHByZXBhcmluZykvLnRlc3Qobm1TdGF0ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGRldGVjdGluZyBXaS1GaSBjbGllbnQgbW9kZSBmcm9tIHN5c3RlbTpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpIHtcbiAgICAgIGNvbnN0IHBlcnNpc3RlZFN0YXRlID0gcmVhZFdpZmlDbGllbnRNb2RlU3RhdGUoKTtcblxuICAgICAgaWYgKHBlcnNpc3RlZFN0YXRlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBwZXJzaXN0ZWRTdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGVjdFdpZmlDbGllbnRNb2RlRnJvbVN5c3RlbSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuc3VyZVdpZmlDbGllbnRNb2RlRW5hYmxlZCgpIHtcbiAgICAgIGlmICghZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpKSB7XG4gICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG4gICAgICAgICAgXCJ3aWZpLWNsaWVudC1tb2RlLWRpc2FibGVkXCIsXG4gICAgICAgICAgXCJFbmFibGUgV2ktRmkgY2xpZW50IG1vZGUgYmVmb3JlIHNjYW5uaW5nIG9yIGNvbm5lY3RpbmcuXCIsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuV2lmaU1vZGVTY3JpcHQoc2NyaXB0TmFtZSkge1xuICAgICAgY29uc3Qgc2NyaXB0UGF0aCA9IHJlc29sdmVTY3JpcHRQYXRoKHNjcmlwdE5hbWUpO1xuXG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoc2NyaXB0UGF0aCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcbiAgICAgICAgICBcIndpZmktY2xpZW50LW1vZGUtc2NyaXB0LW1pc3NpbmdcIixcbiAgICAgICAgICBgTWlzc2luZyBXaS1GaSBtb2RlIHNjcmlwdDogJHtzY3JpcHRQYXRofWAsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbWQoYHRpbWVvdXQgNDVzIGJhc2ggJHtzaGVsbEVzY2FwZShzY3JpcHRQYXRoKX1gKTtcbiAgICB9XG5cbiAgICB3cml0ZVdpZmlDbGllbnRNb2RlU3RhdGUoZGV0ZWN0V2lmaUNsaWVudE1vZGVGcm9tU3lzdGVtKCkpO1xuXG4gICAgTWV0ZW9yLm1ldGhvZHMoe1xuICAgICAgYWRtaW5TZXROZXdQYXNzd29yZDogZnVuY3Rpb24gKGFkbWluSWQsIHVzZXJJZCwgbmV3UGFzc3dvcmQpIHtcbiAgICAgICAgLy8gQWRtaW4gY2FuIGZvcmNpYmx5IGNoYW5nZSB0aGUgcGFzc3dvcmQgZm9yIGEgdXNlclxuICAgICAgICBpZiAoUm9sZXMudXNlcklzSW5Sb2xlKGFkbWluSWQsIFwiYWRtaW5cIikpIHtcbiAgICAgICAgICBBY2NvdW50cy5zZXRQYXNzd29yZCh1c2VySWQsIG5ld1Bhc3N3b3JkKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNyZWF0ZUFjY291bnQ6IGZ1bmN0aW9uIChlbWFpbCwgcGFzc3dvcmQsIHByb2ZpbGUpIHtcbiAgICAgICAgcmV0dXJuIEFjY291bnRzLmNyZWF0ZVVzZXIoe1xuICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgcHJvZmlsZTogcHJvZmlsZSxcbiAgICAgICAgfSk7IC8vIENhbGxiYWNrIGlzIG5vdCBzdXBwb3J0ZWQgb24gc2VydmVyLXNpZGVcbiAgICAgIH0sXG4gICAgICBlZGl0QWNjb3VudDogZnVuY3Rpb24gKHVzZXJJZCwgZW1haWwsIHBhc3N3b3JkLCBwcm9maWxlKSB7XG4gICAgICAgIE1ldGVvci51c2Vycy51cGRhdGUoXG4gICAgICAgICAgeyBfaWQ6IHVzZXJJZCB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICRzZXQ6IHtcbiAgICAgICAgICAgICAgXCJlbWFpbHMuMC5hZGRyZXNzXCI6IGVtYWlsLFxuICAgICAgICAgICAgICBwcm9maWxlOiBwcm9maWxlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICBpZiAocGFzc3dvcmQpIHtcbiAgICAgICAgICBBY2NvdW50cy5zZXRQYXNzd29yZCh1c2VySWQsIHBhc3N3b3JkKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNoYW5nZUVtYWlsOiBmdW5jdGlvbiAoZW1haWwpIHtcbiAgICAgICAgdmFyIGVtYWlsID0gZW1haWw7XG4gICAgICAgIGNoZWNrKGVtYWlsLCBTdHJpbmcpO1xuICAgICAgICB2YXIgdXNlciA9IE1ldGVvci51c2VyKCk7XG4gICAgICAgIHZhciBvbGRlbWFpbCA9IHVzZXIuZW1haWxzO1xuICAgICAgICB2YXIgZW1haWxSZWcgPSAvXihbXFx3LVxcLl0rQChbXFx3LV0rXFwuKStbXFx3LV17Miw0fSk/JC87XG4gICAgICAgIGlmIChlbWFpbFJlZy50ZXN0KGVtYWlsKSkge1xuICAgICAgICAgIGlmIChvbGRlbWFpbCAhPSBudWxsKSB7XG4gICAgICAgICAgICBBY2NvdW50cy5yZW1vdmVFbWFpbCh1c2VyLl9pZCwgdXNlci5lbWFpbHNbMF0uYWRkcmVzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEFjY291bnRzLmFkZEVtYWlsKHVzZXIuX2lkLCBlbWFpbCk7XG4gICAgICAgICAgcmV0dXJuIGVtYWlsO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgICAgZGVsZXRlVXNlcjogZnVuY3Rpb24gKHVzZXJJZCkge1xuICAgICAgICBNZXRlb3IudXNlcnMucmVtb3ZlKHVzZXJJZCwgZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiBkZWxldGluZyB1c2VyIDogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFkZE1hbmFnZXJSb2xlOiBmdW5jdGlvbiAodXNlcklkKSB7XG4gICAgICAgIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsIFwibWFuYWdlclwiKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVNYW5hZ2VyUm9sZTogZnVuY3Rpb24gKHVzZXJJZCkge1xuICAgICAgICBSb2xlcy5yZW1vdmVVc2Vyc0Zyb21Sb2xlcyh1c2VySWQsIFwibWFuYWdlclwiKTtcbiAgICAgIH0sXG4gICAgICBhZGRBZG1pblJvbGU6IGZ1bmN0aW9uICh1c2VySWQpIHtcbiAgICAgICAgUm9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJZCwgXCJhZG1pblwiKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVBZG1pblJvbGU6IGZ1bmN0aW9uICh1c2VySWQpIHtcbiAgICAgICAgUm9sZXMucmVtb3ZlVXNlcnNGcm9tUm9sZXModXNlcklkLCBcImFkbWluXCIpO1xuICAgICAgfSxcblxuICAgICAgLy8gJ2dldFVzZWRTcGFjZSc6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gXHR2YXIgcmVzO1xuICAgICAgLy8gXHRyZXMgPSBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKSArIFwiLyBcIiArIGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpICsgXCIgKFwiK2NtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpK1widXNlZClcIjtcbiAgICAgIC8vIFx0cmV0dXJuIHJlcztcbiAgICAgIC8vIH0sXG4gICAgICBydW5Db21tYW5kOiBmdW5jdGlvbiAocGFzc3dvcmQsIGNvbW1hbmQpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgcmVzID0gY21kKFwiZWNobyBcIiArIHBhc3N3b3JkICsgXCIgfCBzdWRvIC1TIFwiICsgY29tbWFuZCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LFxuICAgICAgZ2V0VXNlZFNwYWNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXMgPSB7fTtcbiAgICAgICAgLy9yZXMgPSBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKSArIFwiLyBcIiArIGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpICsgXCIgKFwiK2NtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpK1widXNlZClcIjtcbiAgICAgICAgcmVzLnN0b3JhZ2VVc2FnZSA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpO1xuICAgICAgICByZXMuc3RvcmFnZVVzYWdlID0gcmVzLnN0b3JhZ2VVc2FnZSAvIDEwMDAwMDA7XG4gICAgICAgIHJlcy5zdG9yYWdlVXNhZ2UgPSByZXMuc3RvcmFnZVVzYWdlLnRvRml4ZWQoMik7XG4gICAgICAgIHJlcy5zdG9yYWdlVG90YWwgPSBjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQyKX0nIHwgdGFpbCAtMVwiKTtcbiAgICAgICAgcmVzLnN0b3JhZ2VUb3RhbCA9IHJlcy5zdG9yYWdlVG90YWwgLyAxMDAwMDAwO1xuICAgICAgICByZXMuc3RvcmFnZVRvdGFsID0gcmVzLnN0b3JhZ2VUb3RhbC50b0ZpeGVkKDIpO1xuICAgICAgICByZXMucGVyY2VudGFnZSA9IGNtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSxcbiAgICAgIGdldFNTSUQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwic3NpZD0oLiopXCIpKTtcbiAgICAgICAgdmFyIFNTSUQgPSBtYXRjaFsxXTtcbiAgICAgICAgU1NJRCA9IGRlY29kZVVSSUNvbXBvbmVudChTU0lELnJlcGxhY2UoLy4uL2csIFwiJSQmXCIpKTtcbiAgICAgICAgcmV0dXJuIFNTSUQ7XG4gICAgICB9LFxuICAgICAgc2V0U1NJRDogZnVuY3Rpb24gKG5ld1NTSUQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgY29uc3QgZW5jb2RlZE5ld1NTSUQgPSBuZXcgQnVmZmVyKG5ld1NTSUQpLnRvU3RyaW5nKFwiaGV4XCIpOyAvLyBDb252ZXJ0IGludG8gSGV4XG4gICAgICAgIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgIGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcInNzaWQ9KC4qKVwiKSlbMV0sXG4gICAgICAgICAgZW5jb2RlZE5ld1NTSUQsXG4gICAgICAgICk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgXCJ1dGYtOFwiKTtcbiAgICAgIH0sXG4gICAgICBnZXRXaWZpUGFzc3dvcmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwicGFzc3dvcmQ9KC4qKVwiKSk7XG4gICAgICAgIHZhciBwYXNzd29yZCA9IG1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gcGFzc3dvcmQ7XG4gICAgICB9LFxuICAgICAgc2V0V2lmaVBhc3N3b3JkOiBmdW5jdGlvbiAobmV3UGFzc3dvcmQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwicGFzc3dvcmQ9KC4qKVwiKSlbMV0sXG4gICAgICAgICAgbmV3UGFzc3dvcmQsXG4gICAgICAgICk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgXCJ1dGYtOFwiKTtcbiAgICAgIH0sXG4gICAgICBnZXRXaWZpQ2hhbm5lbDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJjaGFubmVsPSguKilcIikpO1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gY2hhbm5lbDtcbiAgICAgIH0sXG4gICAgICBzZXRXaWZpQ2hhbm5lbDogZnVuY3Rpb24gKG5ld0NoYW5uZWwpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiY2hhbm5lbD0oLiopXCIpKVsxXSxcbiAgICAgICAgICBuZXdDaGFubmVsLFxuICAgICAgICApO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIG5ld0RhdGEsIFwidXRmLThcIik7XG4gICAgICB9LFxuICAgICAgZ2V0V2lmaUJhbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiYmFuZD0oLiopXCIpKTtcblxuICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2hbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUmV0dXJuIGRlZmF1bHQgdmFsdWUgaWYgdGhlIGJhbmQgc2V0dGluZyBkb2VzIG5vdCBleGlzdFxuICAgICAgICAgIHJldHVybiBcIjIuNEdIelwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2V0V2lmaUJhbmQ6IGZ1bmN0aW9uIChuZXdCYW5kKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBiYW5kUmVnZXggPSBuZXcgUmVnRXhwKFwiYmFuZD0oLiopXCIpO1xuICAgICAgICB2YXIgY2hhbm5lbFJlZ2V4ID0gbmV3IFJlZ0V4cChcImNoYW5uZWw9KC4qKVwiKTtcbiAgICAgICAgdmFyIG1hdGNoQmFuZCA9IGRhdGEubWF0Y2goYmFuZFJlZ2V4KTtcbiAgICAgICAgdmFyIG1hdGNoQ2hhbm5lbCA9IGRhdGEubWF0Y2goY2hhbm5lbFJlZ2V4KTtcblxuICAgICAgICB2YXIgbmV3RGF0YSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKG1hdGNoQmFuZCkge1xuICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGV4aXN0aW5nIGJhbmQgc2V0dGluZ1xuICAgICAgICAgIG5ld0RhdGEgPSBuZXdEYXRhLnJlcGxhY2UoYmFuZFJlZ2V4LCBgYmFuZD0ke25ld0JhbmR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgYmFuZCBzZXR0aW5nXG4gICAgICAgICAgbmV3RGF0YSA9IGAke25ld0RhdGEudHJpbSgpfVxcbmJhbmQ9JHtuZXdCYW5kfWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hDaGFubmVsICYmIG1hdGNoQ2hhbm5lbFsxXSkge1xuICAgICAgICAgIC8vIENvbnZlcnQgdGhlIGNoYW5uZWwgdmFsdWUgdG8gYSBudW1iZXJcbiAgICAgICAgICB2YXIgY3VycmVudENoYW5uZWwgPSBwYXJzZUludChtYXRjaENoYW5uZWxbMV0sIDEwKTtcblxuICAgICAgICAgIC8vIFNldCBjaGFubmVsIHRvIGEgZGVmYXVsdCAyLjRHSHogY2hhbm5lbCBpZiBjdXJyZW50IGNoYW5uZWwgaXMgZm9yIDVHSHpcbiAgICAgICAgICBpZiAobmV3QmFuZCA9PSBcIjIuNEdIelwiICYmIGN1cnJlbnRDaGFubmVsID4gMTQpIHtcbiAgICAgICAgICAgIG5ld0RhdGEgPSBuZXdEYXRhLnJlcGxhY2UoY2hhbm5lbFJlZ2V4LCBgY2hhbm5lbD0xMWApO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmV3QmFuZCA9PSBcIjVHSHpcIiAmJiBjdXJyZW50Q2hhbm5lbCA8PSAxNCkge1xuICAgICAgICAgICAgbmV3RGF0YSA9IG5ld0RhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTQ0YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCBcInV0Zi04XCIpO1xuICAgICAgfSwgLy8gICAnc2V0V2lmaUJhbmQnOiBmdW5jdGlvbihuZXdCYW5kKSB7XG4gICAgICAvLyBcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdpZmlTZXR0aW5nc1BhdGgsICd1dGYtOCcpO1xuICAgICAgLy8gXHR2YXIgYmFuZFJlZ2V4ID0gbmV3IFJlZ0V4cCgnYmFuZD0oLiopJyk7XG4gICAgICAvLyBcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2goYmFuZFJlZ2V4KTtcblxuICAgICAgLy8gXHRpZiAobWF0Y2gpIHtcbiAgICAgIC8vIFx0ICAvLyBSZXBsYWNlIHRoZSBleGlzdGluZyBiYW5kIHNldHRpbmdcbiAgICAgIC8vIFx0ICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShiYW5kUmVnZXgsIGBiYW5kPSR7bmV3QmFuZH1gKTtcbiAgICAgIC8vIFx0fSBlbHNlIHtcbiAgICAgIC8vIFx0ICAvLyBBcHBlbmQgdGhlIG5ldyBiYW5kIHNldHRpbmdcbiAgICAgIC8vIFx0ICB2YXIgbmV3RGF0YSA9IGAke2RhdGEudHJpbSgpfVxcbmJhbmQ9JHtuZXdCYW5kfWA7XG4gICAgICAvLyBcdH1cbiAgICAgIC8vIFx0dmFyIGNoYW5uZWxSZWdleCA9IG5ldyBSZWdFeHAoJ2NoYW5uZWw9KC4qKScpO1xuICAgICAgLy8gXHR2YXIgbWF0Y2gyID0gZGF0YS5tYXRjaChjaGFubmVsUmVnZXgpO1xuICAgICAgLy8gXHRpZiAobWF0Y2gyICYmIG1hdGNoMlsxXSkge1xuICAgICAgLy8gXHRcdC8vIFNldCBjaGFubmVsIHRvIGEgZGVmYXVsdCAyLjRHSHogY2hhbm5lbCBpZiBjdXJyZW50IGNoYW5uZWwgaXMgZm9yIDVHSHpcbiAgICAgIC8vIFx0XHRpZiAobmV3QmFuZCA9PSBcIjIuNEdIelwiICYmIG1hdGNoMlsxXSA+IDE0KSB7XG4gICAgICAvLyBcdFx0XHQvLyBBcHBlbmQgdGhlIG5ldyBiYW5kIHNldHRpbmdcbiAgICAgIC8vIFx0XHRcdHZhciBuZXdEYXRhMiA9IGRhdGEucmVwbGFjZShjaGFubmVsUmVnZXgsIGBjaGFubmVsPTExYCk7XG4gICAgICAvLyBcdFx0fSBlbHNlIGlmIChuZXdCYW5kID09IFwiNUdIelwiICYmIG1hdGNoMlsxXSA8PSAxNCkge1xuICAgICAgLy8gXHRcdFx0dmFyIG5ld0RhdGEyID0gZGF0YS5yZXBsYWNlKGNoYW5uZWxSZWdleCwgYGNoYW5uZWw9NDRgKTtcbiAgICAgIC8vIFx0XHR9XG4gICAgICAvLyBcdH1cbiAgICAgIC8vIFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcbiAgICAgIC8vICAgfSxcbiAgICAgIGdldFNlcmlhbDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJTRVJJQUw9KC4qKVwiKSk7XG4gICAgICAgIHZhciBzZXJpYWwgPSBtYXRjaFsxXTtcbiAgICAgICAgcmV0dXJuIHNlcmlhbDtcbiAgICAgIH0sXG4gICAgICBnZXRPcGVyYXRvck5hbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZXJhdG9yTmFtZTtcbiAgICAgICAgb3BlcmF0b3JOYW1lID0gY21kKFxuICAgICAgICAgIFwic3VkbyBxbWljbGkgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtb3BlcmF0b3ItbmFtZSB8IGdyZXAgLW0yICdOYW1lICAgICAgICAgICAgICcgfCBhd2sgJ3twcmludCAkM30nXCIsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBvcGVyYXRvck5hbWU7XG4gICAgICB9LCAvLyAnZ2V0U2lnbmFsU3RyZW5ndGgnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBcdHZhciBzaWduYWxTdHJlbmd0aDtcbiAgICAgIC8vIFx0c2lnbmFsU3RyZW5ndGggPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrICd7cHJpbnQgJDMsICQyfSdcIik7XG4gICAgICAvLyBcdHJldHVybiBzaWduYWxTdHJlbmd0aDtcbiAgICAgIC8vIH0sXG4gICAgICBnZXRTaWduYWxTdHJlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2lnbmFsU3RyZW5ndGg7XG4gICAgICAgIC8vIFRoaXMgZXh0cmFjdHMganVzdCB0aGUgbnVtZXJpYyBwYXJ0IG9mIHRoZSBzaWduYWwgc3RyZW5ndGguXG4gICAgICAgIHNpZ25hbFN0cmVuZ3RoID0gY21kKFxuICAgICAgICAgIFwic3VkbyBxbWljbGkgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAnTmV0d29yaycgfCBhd2sgJ3twcmludCAkM30nIHwgZ3JlcCAtb0UgJ1stMC05XSsnXCIsXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gQ29udmVydCBzaWduYWwgc3RyZW5ndGggdG8gYSBxdWFsaXRhdGl2ZSB2YWx1ZVxuICAgICAgICB2YXIgc3RyZW5ndGhWYWx1ZSA9IHBhcnNlSW50KHNpZ25hbFN0cmVuZ3RoKTtcbiAgICAgICAgdmFyIHF1YWxpdHkgPSBcIlVua25vd25cIjtcbiAgICAgICAgaWYgKHN0cmVuZ3RoVmFsdWUgPj0gLTcwKSB7XG4gICAgICAgICAgcXVhbGl0eSA9IFwiRXhjZWxsZW50XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtODUpIHtcbiAgICAgICAgICBxdWFsaXR5ID0gXCJHb29kXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyZW5ndGhWYWx1ZSA+PSAtMTAwKSB7XG4gICAgICAgICAgcXVhbGl0eSA9IFwiRmFpclwiO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmVuZ3RoVmFsdWUgPCAtMTAwKSB7XG4gICAgICAgICAgcXVhbGl0eSA9IFwiUG9vclwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWFsaXR5O1xuICAgICAgfSwgLy8gJ2dldElzT25saW5lJzogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gXHR2YXIgaXNPbmxpbmU7XG4gICAgICAvLyBcdGlzT25saW5lID0gY21kKFwic3VkbyBxbWljbGkgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayAne3ByaW50ICQzLCAkMn0nXCIpO1xuICAgICAgLy8gXHRyZXR1cm4gaXNPbmxpbmU7XG4gICAgICAvLyB9LFxuICAgICAgLy8gJ2dldEJhbmQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBcdHZhciBiYW5kO1xuICAgICAgLy9cdFx0XHRiYW5kID0gY21kKFwic3VkbyBxbWljbGkgLS1kZXZpY2U9L2Rldi9jZGMtd2RtMCAtLW5hcy1nZXQtc2lnbmFsLXN0cmVuZ3RoIHwgZ3JlcCAtbTEgTmV0d29yayB8IGF3ayBcXFwie3ByaW50ICQyfVxcXCIgfCBjdXQgLWRcXFxcJyAtZjJcIik7XG4gICAgICAvLyBcdHJldHVybiBiYW5kO1xuICAgICAgLy8gfSxcbiAgICAgIGdldEFQTjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJBUE49KC4qKVwiKSk7XG4gICAgICAgIHZhciBBUE4gPSBtYXRjaFsxXTtcbiAgICAgICAgcmV0dXJuIEFQTjtcbiAgICAgIH0sXG4gICAgICBnZXRBUE5Vc2VyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcIkFQTl9VU0VSTkFNRT0oLiopXCIpKTtcbiAgICAgICAgdmFyIEFQTlVzZXIgPSBtYXRjaFsxXTtcbiAgICAgICAgcmV0dXJuIEFQTlVzZXI7XG4gICAgICB9LFxuICAgICAgZ2V0QVBOUGFzc3dvcmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiQVBOX1BBU1NXT1JEPSguKilcIikpO1xuICAgICAgICB2YXIgQVBOUGFzc3dvcmQgPSBtYXRjaFsxXTtcbiAgICAgICAgcmV0dXJuIEFQTlBhc3N3b3JkO1xuICAgICAgfSxcbiAgICAgIGdldFNpbUNhcmRTdGF0dXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHNpbVN0YXR1c1Jlc3VsdCA9IFwiVW5rbm93blwiOyAvLyBEZWZhdWx0IHN0YXR1c1xuXG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgY29tbWFuZCBhbmQgaGFuZGxlIGVycm9yc1xuICAgICAgICBmdW5jdGlvbiBleGVjdXRlQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gY21kKGNvbW1hbmQpOyAvLyBFeGVjdXRlIHRoZSBjb21tYW5kXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJvYmplY3RcIiAmJiByZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgcmVzdWx0IGlzIGFuIGVycm9yIG9iamVjdFxuICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvclwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgZXhjZXB0aW9ucyBpZiBjb21tYW5kIGV4ZWN1dGlvbiBmYWlsc1xuICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3JcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDsgLy8gUmV0dXJuIHRoZSByZXN1bHQgaWYgbm8gZXJyb3JzXG4gICAgICAgIH1cblxuICAgICAgICAvLyBFeGVjdXRlIFNJTSBjYXJkIHN0YXR1cyBjaGVjayBjb21tYW5kXG4gICAgICAgIGxldCBzaW1TdGF0dXMgPSBleGVjdXRlQ29tbWFuZChcbiAgICAgICAgICBcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS11aW0tZ2V0LWNhcmQtc3RhdHVzIHwgZ3JlcCAnQ2FyZCBzdGF0ZTonXCIsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0lNIGNhcmQgc3RhdHVzOlwiLCBzaW1TdGF0dXMpOyAvLyBMb2cgdGhlIHJhdyBvdXRwdXRcbiAgICAgICAgLy8gUHJvY2VzcyB0aGUgb3V0cHV0IGFuZCBkZXRlcm1pbmUgU0lNIGNhcmQgc3RhdHVzXG4gICAgICAgIGlmIChcbiAgICAgICAgICBzaW1TdGF0dXMuaW5jbHVkZXMoXCJuby1hdHItcmVjZWl2ZWRcIikgfHxcbiAgICAgICAgICBzaW1TdGF0dXMuaW5jbHVkZXMoXCJub3QtaW5zZXJ0ZWRcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2ltU3RhdHVzUmVzdWx0ID0gXCJObyBTSU0gY2FyZFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHNpbVN0YXR1cy5pbmNsdWRlcyhcImVycm9yXCIpKSB7XG4gICAgICAgICAgc2ltU3RhdHVzUmVzdWx0ID0gc2ltU3RhdHVzOyAvLyBVc2UgdGhlIGVycm9yIG1lc3NhZ2Ugb3Igbm8gU0lNIGRldGVjdGVkIG1lc3NhZ2VcbiAgICAgICAgfSBlbHNlIGlmIChzaW1TdGF0dXMuaW5jbHVkZXMoXCJwcmVzZW50XCIpKSB7XG4gICAgICAgICAgc2ltU3RhdHVzUmVzdWx0ID0gXCJPS1wiO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHNpbVN0YXR1cy5pbmNsdWRlcyhcImxvY2tlZFwiKSB8fFxuICAgICAgICAgIHNpbVN0YXR1cy5pbmNsdWRlcyhcInBpbi1yZXF1aXJlZFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICBzaW1TdGF0dXNSZXN1bHQgPSBcIlNJTSBjYXJkIGxvY2tlZCwgUElOIHJlcXVpcmVkXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2ltU3RhdHVzUmVzdWx0ID0gXCJVbmtub3duXCI7IC8vIEZvciBvdGhlciBzdGF0dXNlc1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaW1TdGF0dXNSZXN1bHQ7XG4gICAgICB9LFxuICAgICAgZ2V0U2ltUGluOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcIlNJTV9QSU49KC4qKVwiKSk7XG4gICAgICAgIHZhciBTaW1QaW4gPSBtYXRjaFsxXTtcbiAgICAgICAgcmV0dXJuIFNpbVBpbjtcbiAgICAgIH0sXG4gICAgICBzZXRTaW1QaW46IGZ1bmN0aW9uIChQSU4pIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiU0lNX1BJTj0uKlwiKSksXG4gICAgICAgICAgXCJTSU1fUElOPVwiICsgUElOLFxuICAgICAgICApO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsIFwidXRmLThcIik7XG4gICAgICB9LFxuICAgICAgc2V0QVBOOiBmdW5jdGlvbiAoQVBOLCB1c2VyLCBwYXNzd29yZCkge1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJBUE49LipcIikpLFxuICAgICAgICAgIFwiQVBOPVwiICsgQVBOLFxuICAgICAgICApO1xuICAgICAgICAvLyB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTj0oLiopJykpWzFdLCBBUE4pO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsIFwidXRmLThcIik7XG4gICAgICB9LFxuICAgICAgc2V0QVBOVXNlcjogZnVuY3Rpb24gKEFQTlVzZXIpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgdmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgZGF0YS5tYXRjaChuZXcgUmVnRXhwKFwiQVBOX1VTRVJOQU1FPS4qXCIpKSxcbiAgICAgICAgICBcIkFQTl9VU0VSTkFNRT1cIiArIEFQTlVzZXIsXG4gICAgICAgICk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgXCJ1dGYtOFwiKTtcbiAgICAgIH0sXG4gICAgICBzZXRBUE5QYXNzd29yZDogZnVuY3Rpb24gKEFQTlBhc3N3b3JkKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgIGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcIkFQTl9QQVNTV09SRD0uKlwiKSksXG4gICAgICAgICAgXCJBUE5fUEFTU1dPUkQ9XCIgKyBBUE5QYXNzd29yZCxcbiAgICAgICAgKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCBcInV0Zi04XCIpO1xuICAgICAgfSxcbiAgICAgIGdldFJlbW90ZVN0YXR1czogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXG4gICAgICAgICAgXCJzeXN0ZW1jdGwgaXMtYWN0aXZlIHJlbW90ZS1pb3Quc2VydmljZSA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyAxIHx8IGVjaG8gMFwiLFxuICAgICAgICApO1xuICAgICAgICBpZiAocmVzWzBdID09IFwiMVwiKSB7XG4gICAgICAgICAgLy8gWzBdIGlzIGEgaGFjayBiZWNhdXNlIHRoZSByZXN1bHQgcmVzIGhhcyBvbmUgZXh0cmEgY2hhcmFjdGVyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgZ2V0QXV0b1N5bmNTdGF0dXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgcmVzID0gY21kKFxuICAgICAgICAgIFwic3lzdGVtY3RsIGlzLWFjdGl2ZSBhdXRvc3luYy5zZXJ2aWNlID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIDEgfHwgZWNobyAwXCIsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChyZXNbMF0gPT0gXCIxXCIpIHtcbiAgICAgICAgICAvLyBbMF0gaXMgYSBoYWNrIGJlY2F1c2UgdGhlIHJlc3VsdCByZXMgaGFzIG9uZSBleHRyYSBjaGFyYWN0ZXJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBnZXRTaGFyZUludGVybmV0VmlhRXRoZXJuZXRTdGF0dXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzU2hhcmluZztcbiAgICAgICAgaXNTaGFyaW5nID0gY21kKFxuICAgICAgICAgIFwiKHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1MIFBPU1RST1VUSU5HIC12IC1uIHwgZ3JlcCAtcSAnTUFTUVVFUkFERSAgYWxsICAtLSAgKiAgICAgIGV0aDAnICYmIGlwIGxpbmsgc2hvdyBldGgwIHwgZ3JlcCAtcSAnc3RhdGUgVVAnKSAmJiBlY2hvIHRydWUgfHwgZWNobyBmYWxzZVwiLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gaXNTaGFyaW5nO1xuICAgICAgfSxcbiAgICAgIGdldFNoYXJlSW50ZXJuZXRWaWFNb2JpbGVTdGF0dXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzU2hhcmluZztcbiAgICAgICAgaXNTaGFyaW5nID0gY21kKFxuICAgICAgICAgIFwiKHN1ZG8gaXB0YWJsZXMgLXQgbmF0IC1MIFBPU1RST1VUSU5HIC12IC1uIHwgZ3JlcCAtcSAnTUFTUVVFUkFERSAgYWxsICAtLSAgKiAgICAgIHd3YW4wJyAmJiBpcCBsaW5rIHNob3cgd3dhbjAgfCBncmVwIC1xICdzdGF0ZSBVUCcpICYmIGVjaG8gdHJ1ZSB8fCBlY2hvIGZhbHNlXCIsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBpc1NoYXJpbmc7XG4gICAgICB9LCAvLyAnYWN0aXZhdGVJbnRlcm5ldFNoYXJpbmcnOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFx0dmFyIHJlcztcbiAgICAgIC8vIFx0cmVzID0gY21kKFwic3VkbyB3aWZpLWFwLmNvbmZpZyBzZXQgc2hhcmUuZGlzYWJsZWQ9ZmFsc2VcIik7XG4gICAgICAvLyBcdHJldHVybiByZXM7XG4gICAgICAvLyB9LFxuICAgICAgLy8gJ2Rpc2FjdGl2YXRlSW50ZXJuZXRTaGFyaW5nJzogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBcdHZhciByZXM7XG4gICAgICAvLyBcdHJlcyA9IGNtZChcInN1ZG8gd2lmaS1hcC5jb25maWcgc2V0IHNoYXJlLmRpc2FibGVkPXRydWVcIik7XG4gICAgICAvLyBcdHJldHVybiByZXM7XG4gICAgICAvLyB9LFxuICAgICAgYWN0aXZhdGVSZW1vdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgcmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RhcnQgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuICAgICAgICByZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZW5hYmxlIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0sXG4gICAgICBkaXNhY3RpdmF0ZVJlbW90ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICByZXMgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBzdG9wIHJlbW90ZS1pb3Quc2VydmljZVwiKTtcbiAgICAgICAgcmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGRpc2FibGUgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSxcbiAgICAgIGFjdGl2YXRlQXV0b1N5bmM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgcmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RhcnQgYXV0b3N5bmMuc2VydmljZVwiKTtcbiAgICAgICAgcmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGVuYWJsZSBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSxcbiAgICAgIGRpc2FjdGl2YXRlQXV0b1N5bmM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgcmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RvcCBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuICAgICAgICByZXMyID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgZGlzYWJsZSBhdXRvc3luYy5zZXJ2aWNlXCIpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSxcbiAgICAgIGdldEJhdHRlcnlTdGF0dXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgdmFyIHNjcmlwdHNQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnNjcmlwdHNQYXRoO1xuICAgICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICB2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoXCJCQVRURVJZX01PRFVMRT0oLiopXCIpKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIGJhdHRlcnlNb2R1bGUgPSBtYXRjaFsxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmF0dGVyeU1vZHVsZSAmJiBiYXR0ZXJ5TW9kdWxlID09IFwiUGlTdWdhclwiKSB7XG4gICAgICAgICAgcmVzID0gY21kKFwicHl0aG9uMyBcIiArIHNjcmlwdHNQYXRoICsgXCIvcGlzdWdhcl9zdGF0dXMucHlcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzID0gY21kKFwicHl0aG9uMyBcIiArIHNjcmlwdHNQYXRoICsgXCIvcGlqdWljZV9zdGF0dXMucHlcIik7XG4gICAgICAgICAgLy9yZXMgPSBjbWQoXCJweXRob24zIC9ob21lL3VidW50dS9zY3JpcHRzL3BpanVpY2Vfc3RhdHVzLnB5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LCAvLyAnZ2V0SXNPbmxpbmUnOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFx0dmFyIHJlcztcbiAgICAgIC8vIFx0dmFyIHNjcmlwdHNQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnNjcmlwdHNQYXRoO1xuICAgICAgLy8gXHQvLyBNYWtlIHN1cmUgeW91ciBzY3JpcHQgaXMgZXhlY3V0YWJsZSwgZS5nLiwgY2htb2QgK3ggY2hlY2tfaW50ZXJuZXQuc2hcbiAgICAgIC8vIFx0cmVzID0gY21kKFwiYmFzaCBcIiArIHNjcmlwdHNQYXRoICsgXCIvY2hlY2tfaW50ZXJuZXQuc2hcIik7IC8vIFJlcGxhY2UgJ2Jhc2gnIHdpdGggJ3NoJyBpZiBuZWVkZWRcbiAgICAgIC8vIFx0Ly8gVGhlIHNjcmlwdCByZXR1cm5zIFwidHJ1ZVwiIG9yIFwiZmFsc2VcIiBhcyBhIHN0cmluZywgc28gd2UgY29tcGFyZSB0aGUgcmVzdWx0IGRpcmVjdGx5XG4gICAgICAvLyBcdHJldHVybiByZXMudHJpbSgpID09PSBcInRydWVcIjsgLy8gVGhpcyBjb252ZXJ0cyB0aGUgc3RyaW5nIHRvIGEgYm9vbGVhblxuICAgICAgLy8gfSxcbiAgICAgIGdldElzT25saW5lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCByZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gY21kKFwicGluZyAtYyAxIGdvb2dsZS5jb21cIik7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHBpbmcgY29tbWFuZCB3YXMgc3VjY2Vzc2Z1bCBiYXNlZCBvbiB0aGUgb3V0cHV0XG4gICAgICAgICAgbGV0IGlzT25saW5lID1cbiAgICAgICAgICAgIHJlcy5pbmNsdWRlcyhcIjEgcGFja2V0cyByZWNlaXZlZFwiKSB8fCByZXMuaW5jbHVkZXMoXCIxIHJlY2VpdmVkXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiT25saW5lIHN0YXR1czpcIiwgaXNPbmxpbmUpOyAvLyBDb3JyZWN0bHkgbG9nZ2luZyB0aGUgYm9vbGVhbiByZXN1bHRcbiAgICAgICAgICByZXR1cm4gaXNPbmxpbmU7IC8vIERpcmVjdGx5IHJldHVybiB0aGUgYm9vbGVhbiB2YWx1ZVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIElmIGFuIGVycm9yIG9jY3VycyAod2hpY2ggY291bGQgaW5jbHVkZSBiZWluZyB1bmFibGUgdG8gcnVuIHRoZSBwaW5nIGNvbW1hbmQpLCBhc3N1bWUgb2ZmbGluZVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igb3Igb2ZmbGluZTpcIiwgZXJyb3IpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gQXNzdW1lIG9mZmxpbmUgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0RXRoMElQOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEdldCBJUCBvZiBib3hcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlc3VsdCA6IFwiK1wiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG4gICAgICAgIHJlcyA9IGNtZChcbiAgICAgICAgICBcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcXFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiLFxuICAgICAgICApO1xuICAgICAgICAvL3JlcyA9IGNtZChcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpcCA6IFwiK1wiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcbiAgICAgICAgLy9yZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuICAgICAgICAvL3JlcyA9IGNtZChcImlmY29uZmlnIFwiK2ludGVyZmFjZStcIiAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LFxuICAgICAgZ2V0V3dhbjBJUDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBHZXQgSVAgb2YgYm94XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZXN1bHQgOiBcIitcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuICAgICAgICByZXMgPSBjbWQoXG4gICAgICAgICAgXCJpcCBhZGRyIHNob3cgd3dhbjAgfCBncmVwIFxcXCJpbmV0XFxcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIsXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9yZXMgPSBjbWQoXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXAgOiBcIitcImlwIGFkZHIgc2hvdyBldGgwIHwgZ3JlcCBcXFwiaW5ldFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG4gICAgICAgIC8vcmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcbiAgICAgICAgLy9yZXMgPSBjbWQoXCJpZmNvbmZpZyBcIitpbnRlcmZhY2UrXCIgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSxcblxuICAgICAgZ2V0QmVla2VlT3NWZXJzaW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsIFwidXRmLThcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cChcIkJFRUtFRV9PU19WRVJTSU9OPSguKilcIikpO1xuICAgICAgICB2YXIgc2VyaWFsID0gbWF0Y2hbMV07XG4gICAgICAgIHJldHVybiBzZXJpYWw7XG4gICAgICB9LFxuICAgICAgZ2V0QmVla2VlSG9tZVZlcnNpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAganNvbiA9IEpTT04ucGFyc2UoQXNzZXRzLmdldFRleHQoXCJ2ZXJzaW9uLmpzb25cIikpO1xuICAgICAgICByZXR1cm4ganNvbi52ZXJzaW9uO1xuICAgICAgfSxcbiAgICAgIHJlc3RhcnRNb2JpbGVDb25uZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHJlc3RhcnQgbW9iaWxlX2Nvbm5lY3Quc2VydmljZVwiKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgKFwiXCIpO1xuICAgICAgfSxcbiAgICAgIGdldEludGVybmV0SW50ZXJmYWNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCByZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gY21kKFwiaXAgcm91dGUgZ2V0IDEuMi4zLjQgfCBhd2sgJ3twcmludCAkNTsgZXhpdH0nXCIpOyAvLyBFeGVjdXRlIHRoZSBjb21tYW5kXG4gICAgICAgICAgaWYgKHJlcy50cmltKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMudHJpbSgpOyAvLyBSZXR1cm4gdGhlIGNsZWFuZWQtdXAgcmVzdWx0IGlmIG5vdCBlbXB0eVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJVbmtub3duXCI7IC8vIFJldHVybiBhIGRlZmF1bHQgbWVzc2FnZSBpZiB0aGUgcmVzdWx0IGlzIGVtcHR5XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB0aGUgY29tbWFuZCBmYWlscyBvciBpcyBub3QgZm91bmRcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHJldHJpZXZpbmcgaW50ZXJuZXQgaW50ZXJmYWNlOlwiLCBlcnJvcik7XG4gICAgICAgICAgcmV0dXJuIFwiRXJyb3JcIjsgLy8gUmV0dXJuIGFuIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldHdsYW51c2I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUmV0dXJuIHRydWUgaWYgdGhlIHdsYW51c2IgaW50ZXJmYWNlIGV4aXN0cyBvbiB0aGUgbWFjaGluZS4gTWFrZSBzdXJlIHRvIHJldHVybiBhIGJvb2xlYW4gdmFsdWUuXG4gICAgICAgIGxldCByZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gY21kKFwiaXAgbGluayBzaG93IHdsYW51c2JcIik7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0V0xBTlVTQjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcmVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IGNtZChcImlwIGxpbmsgc2hvdyB3bGFudXNiXCIpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldFdpZmlDbGllbnRNb2RlRW5hYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0V2lmaUNsaWVudE1vZGVTdGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIGVuYWJsZVdpZmlDbGllbnRNb2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcnVuV2lmaU1vZGVTY3JpcHQod2lmaUNsaWVudEVuYWJsZVNjcmlwdE5hbWUpO1xuICAgICAgICAgIHdyaXRlV2lmaUNsaWVudE1vZGVTdGF0ZSh0cnVlKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW5hYmxpbmcgV2ktRmkgY2xpZW50IG1vZGU6XCIsIGVycm9yKTtcbiAgICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuICAgICAgICAgICAgXCJ3aWZpLWNsaWVudC1tb2RlLWVuYWJsZS1mYWlsZWRcIixcbiAgICAgICAgICAgIGVycm9yLnJlYXNvbiB8fCBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGVuYWJsZSBXaS1GaSBjbGllbnQgbW9kZS5cIixcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzYWJsZVdpZmlDbGllbnRNb2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcnVuV2lmaU1vZGVTY3JpcHQod2lmaUNsaWVudERpc2FibGVTY3JpcHROYW1lKTtcbiAgICAgICAgICB3cml0ZVdpZmlDbGllbnRNb2RlU3RhdGUoZmFsc2UpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBkaXNhYmxpbmcgV2ktRmkgY2xpZW50IG1vZGU6XCIsIGVycm9yKTtcbiAgICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuICAgICAgICAgICAgXCJ3aWZpLWNsaWVudC1tb2RlLWRpc2FibGUtZmFpbGVkXCIsXG4gICAgICAgICAgICBlcnJvci5yZWFzb24gfHxcbiAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSB8fFxuICAgICAgICAgICAgICBcIkZhaWxlZCB0byBkaXNhYmxlIFdpLUZpIGNsaWVudCBtb2RlLlwiLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXRXaWZpTmV0d29ya3M6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZW5zdXJlV2lmaUNsaWVudE1vZGVFbmFibGVkKCk7XG5cbiAgICAgICAgdmFyIHdpZmkgPSByZXF1aXJlKFwibm9kZS13aWZpXCIpO1xuICAgICAgICB3aWZpLmluaXQoe1xuICAgICAgICAgIGlmYWNlOiBcIndsYW51c2JcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyB3aWZpIHNjYW5cIik7XG4gICAgICAgICAgd2lmaS5zY2FuKChlcnJvciwgbmV0d29ya3MpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2Nhbm5pbmcgbmV0d29ya3M6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldpZmkgc2NhbiBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuXG4gICAgICAgICAgICAgIC8vIENyZWF0ZSBhIE1hcCB0byBzdG9yZSB1bmlxdWUgbmV0d29ya3NcbiAgICAgICAgICAgICAgY29uc3QgdW5pcXVlTmV0d29ya3MgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgICAgICAgbmV0d29ya3MuZm9yRWFjaCgobmV0d29yaykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzdHJlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAobmV0d29yay5xdWFsaXR5ID4gODApIHtcbiAgICAgICAgICAgICAgICAgIHN0cmVuZ3RoID0gXCJ3aWZpLTRcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ldHdvcmsucXVhbGl0eSA+IDU1KSB7XG4gICAgICAgICAgICAgICAgICBzdHJlbmd0aCA9IFwid2lmaS0zXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXR3b3JrLnF1YWxpdHkgPiAzMCkge1xuICAgICAgICAgICAgICAgICAgc3RyZW5ndGggPSBcIndpZmktMlwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzdHJlbmd0aCA9IFwid2lmaS0xXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgdW5pcXVlIGtleSB1c2luZyBTU0lEIGFuZCBmaXJzdCAxNSBjaGFycyBvZiBNQUNcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBgJHtuZXR3b3JrLnNzaWR9OiR7bmV0d29yay5tYWMuc3Vic3RyaW5nKDAsIDE1KX1gO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBrZXkgZG9lc24ndCBleGlzdCBvciB0aGUgcXVhbGl0eSBpcyBoaWdoZXIsIGFkZC91cGRhdGUgdGhlIG5ldHdvcmtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAhdW5pcXVlTmV0d29ya3MuaGFzKGtleSkgfHxcbiAgICAgICAgICAgICAgICAgIG5ldHdvcmsucXVhbGl0eSA+IHVuaXF1ZU5ldHdvcmtzLmdldChrZXkpLnF1YWxpdHlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHVuaXF1ZU5ldHdvcmtzLnNldChrZXksIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmV0d29yay5zc2lkLFxuICAgICAgICAgICAgICAgICAgICBzdHJlbmd0aDogc3RyZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5OiBuZXR3b3JrLnNlY3VyaXR5LFxuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5OiBuZXR3b3JrLnF1YWxpdHksIC8vIEtlZXAgdGhpcyBmb3IgY29tcGFyaXNvblxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAvLyBDb252ZXJ0IE1hcCB2YWx1ZXMgdG8gYXJyYXlcbiAgICAgICAgICAgICAgY29uc3QgdW5pcXVlTmV0d29ya3NBcnJheSA9IEFycmF5LmZyb20odW5pcXVlTmV0d29ya3MudmFsdWVzKCkpO1xuXG4gICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcXVhbGl0eSBwcm9wZXJ0eSBhcyBpdCdzIG5vIGxvbmdlciBuZWVkZWQgaW4gdGhlIGZpbmFsIG91dHB1dFxuICAgICAgICAgICAgICB1bmlxdWVOZXR3b3Jrc0FycmF5LmZvckVhY2goKG5ldHdvcmspID0+IGRlbGV0ZSBuZXR3b3JrLnF1YWxpdHkpO1xuXG4gICAgICAgICAgICAgIHJlc29sdmUodW5pcXVlTmV0d29ya3NBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGNvbm5lY3RUb1dpZmk6IGZ1bmN0aW9uIChzc2lkLCBwYXNzd29yZCkge1xuICAgICAgICBlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblxuICAgICAgICB2YXIgd2lmaSA9IHJlcXVpcmUoXCJub2RlLXdpZmlcIik7XG4gICAgICAgIHdpZmkuaW5pdCh7XG4gICAgICAgICAgaWZhY2U6IFwid2xhbnVzYlwiLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gUmV0dXJuIGJvb2xlYW5zLCBUcnVlIGlmIHRoZSBjb25uZWN0aW9uIGlzIHN1Y2Nlc3NmdWwsIG90aGVyd2lzZSByZXR1cm4gRmFsc2VcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB3aWZpLmNvbm5lY3QoeyBzc2lkOiBzc2lkLCBwYXNzd29yZDogcGFzc3dvcmQgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gd2lmaTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIHdpZmk6XCIsIHNzaWQpO1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBkaXNjb25uZWN0V2lmaTogZnVuY3Rpb24gKCkge1xuICAgICAgICBlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblxuICAgICAgICB2YXIgd2lmaSA9IHJlcXVpcmUoXCJub2RlLXdpZmlcIik7XG4gICAgICAgIHdpZmkuaW5pdCh7XG4gICAgICAgICAgaWZhY2U6IFwid2xhbnVzYlwiLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB3aWZpLmRpc2Nvbm5lY3QoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRpc2Nvbm5lY3RpbmcgZnJvbSB3aWZpOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaXNjb25uZWN0ZWQgZnJvbSB3aWZpXCIpO1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBmb3JnZXRXaWZpOiBmdW5jdGlvbiAoc3NpZCkge1xuICAgICAgICBlbnN1cmVXaWZpQ2xpZW50TW9kZUVuYWJsZWQoKTtcblxuICAgICAgICB2YXIgd2lmaSA9IHJlcXVpcmUoXCJub2RlLXdpZmlcIik7XG4gICAgICAgIHdpZmkuaW5pdCh7XG4gICAgICAgICAgaWZhY2U6IFwid2xhbnVzYlwiLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gUmV0dXJuIGJvb2xlYW5zLCBUcnVlIGlmIHRoZSBjb25uZWN0aW9uIGlzIHN1Y2Nlc3NmdWwsIG90aGVyd2lzZSByZXR1cm4gRmFsc2VcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB3aWZpLmRlbGV0ZUNvbm5lY3Rpb24oeyBzc2lkOiBzc2lkIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW5nIHRvIHdpZmk6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byB3aWZpOlwiLCBzc2lkKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0Q2xpZW50U1NJRDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgc3NpZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzc2lkID0gY21kKFwiaXdnZXRpZCAtciB3bGFudXNiIDI+L2Rldi9udWxsIHx8IHRydWVcIikudHJpbSgpO1xuXG4gICAgICAgICAgaWYgKCFzc2lkKSB7XG4gICAgICAgICAgICBzc2lkID0gY21kKFxuICAgICAgICAgICAgICBcIm5tY2xpIC1nIEdFTkVSQUwuQ09OTkVDVElPTiBkZXZpY2Ugc2hvdyB3bGFudXNiIDI+L2Rldi9udWxsIHwgaGVhZCAtbiAxIHx8IHRydWVcIixcbiAgICAgICAgICAgICkudHJpbSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzc2lkID09PSBcIi0tXCIpIHtcbiAgICAgICAgICAgIHNzaWQgPSBcIlwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENoZWNrIGlmIHNzaWQgaXMgbm90IGVtcHR5IGFuZCBpcyBhIHN0cmluZ1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3NpZCA9PT0gXCJzdHJpbmdcIiAmJiBzc2lkICE9PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gc3NpZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmV0dXJuIFwiTm90IGNvbm5lY3RlZFwiIGlmIHNzaWQgaXMgZW1wdHkgb3Igbm90IGEgc3RyaW5nXG4gICAgICAgICAgICByZXR1cm4gXCJOb3QgY29ubmVjdGVkXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIFJldHVybiBcIk5vdCBjb25uZWN0ZWRcIiBpbiBjYXNlIG9mIGFueSBlcnJvclxuICAgICAgICAgIHJldHVybiBcIk5vdCBjb25uZWN0ZWRcIjtcbiAgICAgICAgfVxuICAgICAgfSwgLy8gJ2dldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0JzogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIC8vIFx0Ly8gQ29tbWFuZCB0byBsaXN0IEZPUldBUkQgcnVsZXNcbiAgICAgIC8vIFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtbiAtLWxpbmUtbnVtYmVyJztcblxuICAgICAgLy8gXHRjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgIC8vIFx0XHRpZiAoZXJyb3IgfHwgc3RkZXJyKSB7XG4gICAgICAvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBFcnJvciBsaXN0aW5nIEZPUldBUkQgcnVsZXM6ICR7ZXJyb3IgfHwgc3RkZXJyfWApO1xuICAgICAgLy8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciB8fCBuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG4gICAgICAvLyBcdFx0XHRyZXR1cm47XG4gICAgICAvLyBcdFx0fVxuXG4gICAgICAvLyBcdFx0Ly8gQ2hlY2sgZm9yIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBydWxlc1xuICAgICAgLy8gXHRcdHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IHN0ZG91dC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuICAgICAgLy8gXHRcdGNvbnNvbGUubG9nKFwiaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQ6IFwiK2lzR2VuZXJhbFNoYXJpbmdFbmFibGVkKTtcbiAgICAgIC8vIFx0XHQvLyBFeHRyYWN0IE1BQyBhZGRyZXNzIHJ1bGVzXG4gICAgICAvLyBcdFx0dmFyIG1hY0FkZHJlc3NSdWxlUmVnZXggPSAvTUFDIChbXFxkYS1mQS1GOl0rKSAuKiBpbi1pbnRlcmZhY2UgZXRoMC87XG4gICAgICAvLyBcdFx0dmFyIG1hdGNoID0gc3Rkb3V0Lm1hdGNoKG1hY0FkZHJlc3NSdWxlUmVnZXgpO1xuXG4gICAgICAvLyBcdFx0Ly8gRGV0ZXJtaW5lIHRoZSBzdGF0dXMgYmFzZWQgb24gdGhlIHJ1bGVzIGZvdW5kXG4gICAgICAvLyBcdFx0aWYgKGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkICYmICFtYXRjaCkge1xuICAgICAgLy8gXHRcdFx0Y29uc29sZS5sb2coXCJzdGVwMVwiKTtcbiAgICAgIC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsXG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIHtjb25zb2xlLmxvZyhcInN0ZXAxMlwiKTsgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH0pO31cbiAgICAgIC8vIFx0XHR9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgICAvLyBcdFx0XHRjb25zb2xlLmxvZyhcInN0ZXAyXCIpO1xuXG4gICAgICAvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGEgc3BlY2lmaWMgTUFDIGFkZHJlc3NcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9KTtcbiAgICAgIC8vIFx0XHR9IGVsc2Uge1xuICAgICAgLy8gXHRcdFx0Y29uc29sZS5sb2coXCJzdGVwM1wiKTtcblxuICAgICAgLy8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBkaXNhYmxlZCBvciBub3QgY29uZmlndXJlZCBhcyBleHBlY3RlZFxuICAgICAgLy8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9KTtcbiAgICAgIC8vIFx0XHR9XG4gICAgICAvLyBcdH0pO1xuICAgICAgLy8gfSxcblxuICAgICAgLy8gICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFx0Y29uc29sZS5sb2coJ1N0YXJ0aW5nIHRvIGdldCBpbnRlcm5ldCBzaGFyaW5nIHN0YXR1cyBmb3IgRXRoZXJuZXQuLi4nKTtcbiAgICAgIC8vIFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLUwgRk9SV0FSRCAtbiAtLWxpbmUtbnVtYmVyJztcblxuICAgICAgLy8gXHQvLyBTaW5jZSBjbWQgaXMgYWxyZWFkeSB3cmFwcGVkIGJ5IE1ldGVvci53cmFwQXN5bmMoZXhlYyksXG4gICAgICAvLyBcdC8vIGl0IHNob3VsZCByZXR1cm4geyBzdGRvdXQsIHN0ZGVyciB9IGRpcmVjdGx5LlxuICAgICAgLy8gXHR0cnkge1xuICAgICAgLy8gXHQgIHZhciB7IHN0ZG91dCwgc3RkZXJyIH0gPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXG4gICAgICAvLyBcdCAgaWYgKHN0ZGVycikge1xuICAgICAgLy8gXHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtzdGRlcnJ9YCk7XG4gICAgICAvLyBcdFx0Ly8gSXQncyBiZXR0ZXIgdG8gcmV0dXJuIGEgbWVhbmluZ2Z1bCBlcnJvciB0byB0aGUgY2xpZW50LlxuICAgICAgLy8gXHRcdHJldHVybiB7IGVycm9yOiBcIkVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlc1wiLCBkZXRhaWxzOiBzdGRlcnIgfTtcbiAgICAgIC8vIFx0ICB9XG5cbiAgICAgIC8vIFx0ICBjb25zb2xlLmxvZygnQW5hbHl6aW5nIGlwdGFibGVzIEZPUldBUkQgcnVsZXMgb3V0cHV0Li4uJyk7XG4gICAgICAvLyBcdCAgLy8gQ2hlY2sgZm9yIGdlbmVyYWwgaW50ZXJuZXQgc2hhcmluZyBydWxlc1xuICAgICAgLy8gXHQgIHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IHN0ZG91dC5pbmNsdWRlcygnaW4taW50ZXJmYWNlIHdsYW4wIG91dC1pbnRlcmZhY2UgZXRoMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuICAgICAgLy8gXHQgIGNvbnNvbGUubG9nKGBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZDogJHtpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZH1gKTtcblxuICAgICAgLy8gXHQgIC8vIEV4dHJhY3QgTUFDIGFkZHJlc3MgcnVsZXNcbiAgICAgIC8vIFx0ICB2YXIgbWFjQWRkcmVzc1J1bGVSZWdleCA9IC9NQUMgKFtcXGRhLWZBLUY6XSspIC4qIGluLWludGVyZmFjZSBldGgwLztcbiAgICAgIC8vIFx0ICB2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG4gICAgICAvLyBcdCAgY29uc29sZS5sb2coYE1BQyBhZGRyZXNzIGZvdW5kOiAke21hdGNoID8gbWF0Y2hbMV0gOiAnTm9uZSd9YCk7XG5cbiAgICAgIC8vIFx0ICAvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcbiAgICAgIC8vIFx0ICBpZiAoaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgJiYgIW1hdGNoKSB7XG4gICAgICAvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYWxsLicpO1xuICAgICAgLy8gXHRcdHJldHVybiB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfTtcbiAgICAgIC8vIFx0ICB9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgICAvLyBcdFx0Y29uc29sZS5sb2coYEludGVybmV0IHNoYXJpbmcgaXMgZW5hYmxlZCBmb3IgYSBzcGVjaWZpYyBNQUMgYWRkcmVzczogJHttYXRjaFsxXX1gKTtcbiAgICAgIC8vIFx0XHRyZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9O1xuICAgICAgLy8gXHQgIH0gZWxzZSB7XG4gICAgICAvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWQuJyk7XG4gICAgICAvLyBcdFx0cmV0dXJuIHsgc3RhdHVzOiAnZGlzYWJsZWQnLCBtYWNBZGRyZXNzOiBudWxsIH07XG4gICAgICAvLyBcdCAgfVxuICAgICAgLy8gXHR9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gXHQgIGNvbnNvbGUuZXJyb3IoYENvbW1hbmQgZXhlY3V0aW9uIGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgLy8gXHQgIC8vIEl0J3MgYmV0dGVyIHRvIHJldHVybiBhIG1lYW5pbmdmdWwgZXJyb3IgdG8gdGhlIGNsaWVudC5cbiAgICAgIC8vIFx0ICByZXR1cm4geyBlcnJvcjogXCJDb21tYW5kIGV4ZWN1dGlvbiBlcnJvclwiLCBkZXRhaWxzOiBlcnJvci50b1N0cmluZygpIH07XG4gICAgICAvLyBcdH1cbiAgICAgIC8vICAgfSxcblxuICAgICAgLy8gICAnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzRXRoZXJuZXQnOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFx0dmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gJ3N1ZG8gaXB0YWJsZXMgLVMgRk9SV0FSRCc7XG4gICAgICAvLyBcdHZhciBjb21tYW5kUmVzdWx0ID0gY21kKGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kKTtcblxuICAgICAgLy8gXHRpZiAoIWNvbW1hbmRSZXN1bHQpIHtcbiAgICAgIC8vIFx0ICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFwiY29tbWFuZC1leGVjdXRpb24tZXJyb3JcIiwgXCJUaGUgY29tbWFuZCBkaWQgbm90IHJldHVybiBhbnkgb3V0cHV0LlwiKTtcbiAgICAgIC8vIFx0fVxuXG4gICAgICAvLyBcdHZhciBpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoJ2luLWludGVyZmFjZSB3bGFuMCBvdXQtaW50ZXJmYWNlIGV0aDAnKSAmJiBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKCdzdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEJyk7XG4gICAgICAvLyBcdHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIGV0aDAvO1xuICAgICAgLy8gXHR2YXIgbWF0Y2ggPSBjb21tYW5kUmVzdWx0Lm1hdGNoKG1hY0FkZHJlc3NSdWxlUmVnZXgpO1xuXG4gICAgICAvLyBcdGlmIChpc0dlbmVyYWxTaGFyaW5nRW5hYmxlZCAmJiAhbWF0Y2gpIHtcbiAgICAgIC8vIFx0ICByZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBhbGwnLCBtYWNBZGRyZXNzOiBudWxsIH07XG4gICAgICAvLyBcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgIC8vIFx0ICByZXR1cm4geyBzdGF0dXM6ICdlbmFibGVkIGZvciBzcGVjaWZpYyBNQUMnLCBtYWNBZGRyZXNzOiBtYXRjaFsxXSB9O1xuICAgICAgLy8gXHR9IGVsc2Uge1xuICAgICAgLy8gXHQgIHJldHVybiB7IHN0YXR1czogJ2Rpc2FibGVkJywgbWFjQWRkcmVzczogbnVsbCB9O1xuICAgICAgLy8gXHR9XG4gICAgICAvLyAgIH0sXG5cbiAgICAgIGdldEludGVybmV0U2hhcmluZ1N0YXR1c0V0aGVybmV0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCA9IFwic3VkbyBpcHRhYmxlcyAtUyBGT1JXQVJEXCI7XG5cbiAgICAgICAgdmFyIGNvbW1hbmRSZXN1bHQgPSBjbWQobGlzdEZvcndhcmRSdWxlc0NvbW1hbmQpO1xuXG4gICAgICAgIGlmICghY29tbWFuZFJlc3VsdCkge1xuICAgICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG4gICAgICAgICAgICBcImNvbW1hbmQtZXhlY3V0aW9uLWVycm9yXCIsXG4gICAgICAgICAgICBcIlRoZSBjb21tYW5kIGRpZCBub3QgcmV0dXJuIGFueSBvdXRwdXQuXCIsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGZvciB0aGUgc3BlY2lmaWMgcnVsZSBpbmRpY2F0aW5nIGludGVybmV0IHNoYXJpbmcgZnJvbSB3bGFuMCB0byBldGgwXG4gICAgICAgIHZhciBzaGFyaW5nRnJvbVdsYW5Ub0V0aCA9IGNvbW1hbmRSZXN1bHQuaW5jbHVkZXMoXG4gICAgICAgICAgXCItQSBGT1JXQVJEIC1pIHdsYW4wIC1vIGV0aDAgLWogQUNDRVBUXCIsXG4gICAgICAgICk7XG4gICAgICAgIHZhciBzaGFyaW5nVG9XbGFuRnJvbUV0aEVzdGFibGlzaGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcyhcbiAgICAgICAgICBcIi1BIEZPUldBUkQgLWkgZXRoMCAtbyB3bGFuMCAtbSBzdGF0ZSAtLXN0YXRlIFJFTEFURUQsRVNUQUJMSVNIRUQgLWogQUNDRVBUXCIsXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHNoYXJpbmdGcm9tV2xhblRvRXRoICYmIHNoYXJpbmdUb1dsYW5Gcm9tRXRoRXN0YWJsaXNoZWQpIHtcbiAgICAgICAgICAvLyBJZiBhdCBsZWFzdCBvbmUgcGFpciBvZiBydWxlcyBleGlzdHMsIGludGVybmV0IHNoYXJpbmcgaXMgY29uc2lkZXJlZCBlbmFibGVkLlxuICAgICAgICAgIHJldHVybiB7IHN0YXR1czogXCJlbmFibGVkIGZvciBhbGxcIiwgbWFjQWRkcmVzczogbnVsbCB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7IHN0YXR1czogXCJkaXNhYmxlZFwiLCBtYWNBZGRyZXNzOiBudWxsIH07XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGVuYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0OiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGlwdGFibGVzQ29tbWFuZHMgPSBbXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUXCIsXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2UgZXRoMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVFwiLFxuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2UgZXRoMCAtaiBNQVNRVUVSQURFXCIsXG4gICAgICAgICAgXCJzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmVcIixcbiAgICAgICAgXS5qb2luKFwiICYmIFwiKTtcblxuICAgICAgICBjbWQoaXB0YWJsZXNDb21tYW5kcywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RkZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXcgRXJyb3Ioc3RkZXJyKSwgbnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuZXQgc2hhcmluZyB2aWEgRXRoZXJuZXQgZW5hYmxlZCBzdWNjZXNzZnVsbHkuXCIpO1xuICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgc3Rkb3V0KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZGlzYWJsZUludGVybmV0U2hhcmluZ0V0aGVybmV0OiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgLy8gRGVmaW5lIGEgbGlzdCBvZiBjb21tYW5kcyB0byByZXBlYXRlZGx5IGF0dGVtcHQgZGVsZXRpb24uXG4gICAgICAgIHZhciBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gW1xuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIEFDQ0VQVFwiLFxuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFRcIixcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogTUFTUVVFUkFERVwiLFxuICAgICAgICAgIFwic3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlXCIsXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhIGNvbW1hbmQgYW5kIHJlY3Vyc2l2ZWx5IGNhbGwgaXRzZWxmIGlmIHRoZSBjb21tYW5kIHdhcyBzdWNjZXNzZnVsIChydWxlIHdhcyBmb3VuZCBhbmQgZGVsZXRlZCkuXG4gICAgICAgIGZ1bmN0aW9uIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgICAgICAgY21kKGNvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZXJyb3IsIHRoZSBydWxlIHdhcyBmb3VuZCBhbmQgZGVsZXRlZCwgc28gdHJ5IGFnYWluLlxuICAgICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgICBleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGFuIGVycm9yLCBpdCBsaWtlbHkgbWVhbnMgbm8gbW9yZSBpbnN0YW5jZXMgb2YgdGhlIHJ1bGUgZXhpc3QsIHNvIGNhbGwgdGhlIGRvbmVDYWxsYmFjay5cbiAgICAgICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFeGVjdXRlIGRlbGV0aW9uIGZvciBlYWNoIGNvbW1hbmQgYW5kIHRyYWNrIGNvbXBsZXRpb24uXG4gICAgICAgIHZhciB0YXNrc0NvbXBsZXRlZCA9IDA7XG4gICAgICAgIGlwdGFibGVzRGVsZXRlQ29tbWFuZHMuZm9yRWFjaCgoY29tbWFuZCkgPT4ge1xuICAgICAgICAgIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgKCkgPT4ge1xuICAgICAgICAgICAgdGFza3NDb21wbGV0ZWQrKztcbiAgICAgICAgICAgIC8vIE9uY2UgYWxsIGRlbGV0aW9uIHRhc2tzIGFyZSBkb25lLCBzYXZlIHRoZSBpcHRhYmxlcyBjb25maWd1cmF0aW9uLlxuICAgICAgICAgICAgaWYgKHRhc2tzQ29tcGxldGVkID09PSBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBjbWQoXCJzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmVcIiwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgc2F2ZWQuYCk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiQWxsIHNwZWNpZmllZCBydWxlcyByZW1vdmVkIGFuZCBjaGFuZ2VzIHNhdmVkLlwiLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLy8gJ2Rpc2FibGVJbnRlcm5ldFNoYXJpbmdFdGhlcm5ldCc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAvLyBcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gW1xuICAgICAgLy8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIGV0aDAgLWogQUNDRVBUJyxcbiAgICAgIC8vIFx0XHQnc3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIGV0aDAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQnLFxuICAgICAgLy8gXHRcdCdzdWRvIGlwdGFibGVzIC0tdGFibGUgbmF0IC0tZGVsZXRlIFBPU1RST1VUSU5HIC0tb3V0LWludGVyZmFjZSBldGgwIC1qIE1BU1FVRVJBREUnLFxuICAgICAgLy8gXHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG4gICAgICAvLyBcdF0uam9pbignICYmICcpO1xuXG4gICAgICAvLyBcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAvLyBcdFx0aWYgKGVycm9yKSB7XG4gICAgICAvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgLy8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgICAvLyBcdFx0XHRyZXR1cm47XG4gICAgICAvLyBcdFx0fVxuICAgICAgLy8gXHRcdGlmIChzdGRlcnIpIHtcbiAgICAgIC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcbiAgICAgIC8vIFx0XHRcdHJldHVybjtcbiAgICAgIC8vIFx0XHR9XG4gICAgICAvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgdmlhIEV0aGVybmV0IGRpc2FibGVkIHN1Y2Nlc3NmdWxseS4nKTtcbiAgICAgIC8vIFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHN0ZG91dCk7XG4gICAgICAvLyBcdH0pO1xuICAgICAgLy8gfSxcbiAgICAgIGVuYWJsZUludGVybmV0Rm9yTWFjRXRoZXJuZXQ6IGZ1bmN0aW9uIChtYWNBZGRyZXNzLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICAvLyBDb21tYW5kIHRvIGFsbG93IGludGVybmV0IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzIG9uIGV0aDAuXG4gICAgICAgIHZhciBhbGxvd01hY0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtQSBGT1JXQVJEIC1pIGV0aDAgLW0gbWFjIC0tbWFjLXNvdXJjZSAke21hY0FkZHJlc3N9IC1qIEFDQ0VQVGA7XG4gICAgICAgIC8vIENvbW1hbmQgdG8gZHJvcCBhbGwgb3RoZXIgaW50ZXJuZXQgdHJhZmZpYyBvbiBldGgwLlxuICAgICAgICB2YXIgYmxvY2tPdGhlcnNDb21tYW5kID0gYHN1ZG8gaXB0YWJsZXMgLUEgRk9SV0FSRCAtaSBldGgwIC1qIERST1BgO1xuXG4gICAgICAgIC8vIEFsbG93IGludGVybmV0IGZvciB0aGUgc3BlY2lmaWVkIE1BQyBhZGRyZXNzLlxuICAgICAgICByZXMgPSBjbWQoYWxsb3dNYWNDb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBgZXhlYyBlcnJvciBkdXJpbmcgYWxsb3dpbmcgTUFDICR7bWFjQWRkcmVzc306ICR7ZXJyb3J9YCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5ldCBhY2Nlc3MgYWxsb3dlZCBmb3IgTUFDICR7bWFjQWRkcmVzc30uYCk7XG5cbiAgICAgICAgICAvLyBCbG9jayBhbGwgb3RoZXIgTUFDIGFkZHJlc3NlcyBmcm9tIGFjY2Vzc2luZyB0aGUgaW50ZXJuZXQuXG4gICAgICAgICAgcmVzID0gY21kKGJsb2NrT3RoZXJzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3IgZHVyaW5nIGJsb2NraW5nIG90aGVyIE1BQ3M6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coYEludGVybmV0IGFjY2VzcyBibG9ja2VkIGZvciBvdGhlciBNQUMgYWRkcmVzc2VzLmApO1xuICAgICAgICAgICAgLy8gT3B0aW9uYWxseSwgc2F2ZSB0aGUgaXB0YWJsZXMgc2V0dGluZ3MgdG8gbWFrZSB0aGVtIHBlcnNpc3RlbnQuXG4gICAgICAgICAgICBjbWQoXCJzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmVcIiwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgYGV4ZWMgZXJyb3IgZHVyaW5nIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtlcnJvcn1gLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaXB0YWJsZXMgcnVsZXMgc2F2ZWQuYCk7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUFsbE1hY0ZpbHRlcnNGb3JFdGhlcm5ldDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIC8vIExpc3QgYWxsIEZPUldBUkQgcnVsZXMgd2l0aCBsaW5lIG51bWJlcnNcbiAgICAgICAgY21kKFxuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC0tbGluZS1udW1iZXJzIC1uXCIsXG4gICAgICAgICAgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUHJvY2VzcyBzdGRvdXQgdG8gaWRlbnRpZnkgcnVsZXMgcmVsYXRlZCB0byBNQUMgZmlsdGVyaW5nIG9uIGV0aDBcbiAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gc3Rkb3V0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICAgICAgY29uc3QgcnVsZU51bWJlcnMgPSBsaW5lcy5yZWR1Y2UoKGFjYywgbGluZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoXCJldGgwXCIpICYmIGxpbmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcIm1hY1wiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGVOdW1iZXIgPSBsaW5lLnNwbGl0KC9cXHMrLylbMF07IC8vIEV4dHJhY3QgdGhlIHJ1bGUgbnVtYmVyLCBhc3N1bWluZyBpdCdzIHRoZSBmaXJzdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgYWNjLnB1c2gocnVsZU51bWJlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0sIFtdKTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGlkZW50aWZpZWQgcnVsZXMgc3RhcnRpbmcgZnJvbSB0aGUgaGlnaGVzdCBudW1iZXIgdG8gcHJldmVudCBzaGlmdGluZyBvZiBsaW5lIG51bWJlcnNcbiAgICAgICAgICAgIHJ1bGVOdW1iZXJzXG4gICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiIC0gYSlcbiAgICAgICAgICAgICAgLmZvckVhY2goKHJ1bGVOdW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjbWQoXG4gICAgICAgICAgICAgICAgICBgc3VkbyBpcHRhYmxlcyAtRCBGT1JXQVJEICR7cnVsZU51bWJlcn1gLFxuICAgICAgICAgICAgICAgICAgKHJlbW92ZUVycm9yLCByZW1vdmVTdGRvdXQsIHJlbW92ZVN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3ZlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHJlbW92aW5nIHJ1bGUgJHtydWxlTnVtYmVyfTogJHtyZW1vdmVFcnJvcn1gLFxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gRGVjaWRlIGlmIHlvdSB3YW50IHRvIGNvbnRpbnVlIHJlbW92aW5nIG90aGVyIHJ1bGVzIG9yIHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUnVsZSAke3J1bGVOdW1iZXJ9IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmApO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQWZ0ZXIgYXR0ZW1wdGluZyB0byByZW1vdmUgYWxsIGlkZW50aWZpZWQgcnVsZXMsIHNhdmUgdGhlIGlwdGFibGVzIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICAgIGNtZChcbiAgICAgICAgICAgICAgXCJzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmVcIixcbiAgICAgICAgICAgICAgKHNhdmVFcnJvciwgc2F2ZVN0ZG91dCwgc2F2ZVN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzYXZlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHNhdmluZyBpcHRhYmxlcyBydWxlczogJHtzYXZlRXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHNhdmVFcnJvciwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXB0YWJsZXMgcnVsZXMgdXBkYXRlZCBhbmQgc2F2ZWQuXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIkFsbCBNQUMgZmlsdGVyIHJ1bGVzIGZvciBFdGhlcm5ldCByZW1vdmVkIGFuZCBjaGFuZ2VzIHNhdmVkLlwiLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNNb2JpbGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxpc3RGb3J3YXJkUnVsZXNDb21tYW5kID0gXCJzdWRvIGlwdGFibGVzIC1TIEZPUldBUkRcIjtcblxuICAgICAgICB2YXIgY29tbWFuZFJlc3VsdCA9IGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCk7XG5cbiAgICAgICAgaWYgKCFjb21tYW5kUmVzdWx0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcbiAgICAgICAgICAgIFwiY29tbWFuZC1leGVjdXRpb24tZXJyb3JcIixcbiAgICAgICAgICAgIFwiVGhlIGNvbW1hbmQgZGlkIG5vdCByZXR1cm4gYW55IG91dHB1dC5cIixcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRqdXN0ZWQgdG8gY2hlY2sgZm9yIHRoZSBzcGVjaWZpYyBydWxlIGluZGljYXRpbmcgaW50ZXJuZXQgc2hhcmluZyBmcm9tIHdsYW4wIHRvIHd3YW4wXG4gICAgICAgIHZhciBzaGFyaW5nRnJvbVdsYW5Ub1d3YW4gPSBjb21tYW5kUmVzdWx0LmluY2x1ZGVzKFxuICAgICAgICAgIFwiLUEgRk9SV0FSRCAtaSB3bGFuMCAtbyB3d2FuMCAtaiBBQ0NFUFRcIixcbiAgICAgICAgKTtcbiAgICAgICAgdmFyIHNoYXJpbmdUb1dsYW5Gcm9tV3dhbkVzdGFibGlzaGVkID0gY29tbWFuZFJlc3VsdC5pbmNsdWRlcyhcbiAgICAgICAgICBcIi1BIEZPUldBUkQgLWkgd3dhbjAgLW8gd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVFwiLFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChzaGFyaW5nRnJvbVdsYW5Ub1d3YW4gJiYgc2hhcmluZ1RvV2xhbkZyb21Xd2FuRXN0YWJsaXNoZWQpIHtcbiAgICAgICAgICAvLyBJZiBhdCBsZWFzdCBvbmUgcGFpciBvZiBydWxlcyBleGlzdHMsIGludGVybmV0IHNoYXJpbmcgdG8gdGhlIG1vYmlsZSBpbnRlcmZhY2UgaXMgY29uc2lkZXJlZCBlbmFibGVkLlxuICAgICAgICAgIHJldHVybiB7IHN0YXR1czogXCJlbmFibGVkIGZvciBhbGxcIiwgbWFjQWRkcmVzczogbnVsbCB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7IHN0YXR1czogXCJkaXNhYmxlZFwiLCBtYWNBZGRyZXNzOiBudWxsIH07XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8vICdnZXRJbnRlcm5ldFNoYXJpbmdTdGF0dXNNb2JpbGUnOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgLy8gXHQvLyBDb21tYW5kIHRvIGxpc3QgRk9SV0FSRCBydWxlc1xuICAgICAgLy8gXHR2YXIgbGlzdEZvcndhcmRSdWxlc0NvbW1hbmQgPSAnc3VkbyBpcHRhYmxlcyAtTCBGT1JXQVJEIC1uIC0tbGluZS1udW1iZXInO1xuXG4gICAgICAvLyBcdGNtZChsaXN0Rm9yd2FyZFJ1bGVzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgLy8gXHRcdGlmIChlcnJvciB8fCBzdGRlcnIpIHtcbiAgICAgIC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGxpc3RpbmcgRk9SV0FSRCBydWxlczogJHtlcnJvciB8fCBzdGRlcnJ9YCk7XG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yIHx8IG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcbiAgICAgIC8vIFx0XHRcdHJldHVybjtcbiAgICAgIC8vIFx0XHR9XG5cbiAgICAgIC8vIFx0XHQvLyBDaGVjayBmb3IgZ2VuZXJhbCBpbnRlcm5ldCBzaGFyaW5nIHJ1bGVzXG4gICAgICAvLyBcdFx0dmFyIGlzR2VuZXJhbFNoYXJpbmdFbmFibGVkID0gc3Rkb3V0LmluY2x1ZGVzKCdpbi1pbnRlcmZhY2Ugd2xhbjAgb3V0LWludGVyZmFjZSB3d2FuMCcpICYmIHN0ZG91dC5pbmNsdWRlcygnc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCcpO1xuXG4gICAgICAvLyBcdFx0Ly8gRXh0cmFjdCBNQUMgYWRkcmVzcyBydWxlc1xuICAgICAgLy8gXHRcdHZhciBtYWNBZGRyZXNzUnVsZVJlZ2V4ID0gL01BQyAoW1xcZGEtZkEtRjpdKykgLiogaW4taW50ZXJmYWNlIHd3YW4wLztcbiAgICAgIC8vIFx0XHR2YXIgbWF0Y2ggPSBzdGRvdXQubWF0Y2gobWFjQWRkcmVzc1J1bGVSZWdleCk7XG5cbiAgICAgIC8vIFx0XHQvLyBEZXRlcm1pbmUgdGhlIHN0YXR1cyBiYXNlZCBvbiB0aGUgcnVsZXMgZm91bmRcbiAgICAgIC8vIFx0XHRpZiAoaXNHZW5lcmFsU2hhcmluZ0VuYWJsZWQgJiYgIW1hdGNoKSB7XG4gICAgICAvLyBcdFx0XHQvLyBJbnRlcm5ldCBzaGFyaW5nIGlzIGVuYWJsZWQgZm9yIGFsbFxuICAgICAgLy8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogJ2VuYWJsZWQgZm9yIGFsbCcsIG1hY0FkZHJlc3M6IG51bGwgfSk7XG4gICAgICAvLyBcdFx0fSBlbHNlIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgLy8gXHRcdFx0Ly8gSW50ZXJuZXQgc2hhcmluZyBpcyBlbmFibGVkIGZvciBhIHNwZWNpZmljIE1BQyBhZGRyZXNzXG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiAnZW5hYmxlZCBmb3Igc3BlY2lmaWMgTUFDJywgbWFjQWRkcmVzczogbWF0Y2hbMV0gfSk7XG4gICAgICAvLyBcdFx0fSBlbHNlIHtcbiAgICAgIC8vIFx0XHRcdC8vIEludGVybmV0IHNoYXJpbmcgaXMgZGlzYWJsZWQgb3Igbm90IGNvbmZpZ3VyZWQgYXMgZXhwZWN0ZWRcbiAgICAgIC8vIFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6ICdkaXNhYmxlZCcsIG1hY0FkZHJlc3M6IG51bGwgfSk7XG4gICAgICAvLyBcdFx0fVxuICAgICAgLy8gXHR9KTtcbiAgICAgIC8vIH0sXG5cbiAgICAgIGVuYWJsZUludGVybmV0U2hhcmluZ01vYmlsZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBpcHRhYmxlc0NvbW1hbmRzID0gW1xuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLWFwcGVuZCBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFRcIixcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS1hcHBlbmQgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVFwiLFxuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERVwiLFxuICAgICAgICAgIFwic3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlXCIsXG4gICAgICAgIF0uam9pbihcIiAmJiBcIik7XG5cbiAgICAgICAgY21kKGlwdGFibGVzQ29tbWFuZHMsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGV4ZWMgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0ZGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKHN0ZGVyciksIG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkludGVybmV0IHNoYXJpbmcgdmlhIG1vYmlsZSBlbmFibGVkIHN1Y2Nlc3NmdWxseS5cIik7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCBzdGRvdXQpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlSW50ZXJuZXRTaGFyaW5nTW9iaWxlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgLy8gRGVmaW5lIGNvbW1hbmRzIGZvciBkZWxldGlvbiB3aXRob3V0IGNvbWJpbmluZyB0aGVtXG4gICAgICAgIHZhciBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzID0gW1xuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLWRlbGV0ZSBGT1JXQVJEIC0taW4taW50ZXJmYWNlIHdsYW4wIC0tb3V0LWludGVyZmFjZSB3d2FuMCAtaiBBQ0NFUFRcIixcbiAgICAgICAgICBcInN1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVFwiLFxuICAgICAgICAgIFwic3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWRlbGV0ZSBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERVwiLFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIHJlY3Vyc2l2ZWx5IGV4ZWN1dGUgYSBjb21tYW5kIHVudGlsIGl0IGZhaWxzIChpbmRpY2F0aW5nIG5vIG1vcmUgaW5zdGFuY2VzIG9mIHRoZSBydWxlKVxuICAgICAgICBmdW5jdGlvbiBleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsIGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGNtZChjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAvLyBObyBlcnJvciBtZWFucyB0aGUgY29tbWFuZCBzdWNjZWVkZWQsIHNvIHRoZXJlIG1pZ2h0IGJlIG1vcmUgaW5zdGFuY2VzXG4gICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgIGV4ZWN1dGVBbmRSZXBlYXQoY29tbWFuZCwgZG9uZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEVycm9yIGxpa2VseSBtZWFucyBubyBtb3JlIGluc3RhbmNlcyBvZiB0aGUgcnVsZSwgbW92ZSBvblxuICAgICAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4ZWN1dGUgZGVsZXRpb24gZm9yIGVhY2ggY29tbWFuZCBhbmQgdHJhY2sgd2hlbiBhbGwgYXJlIGNvbXBsZXRlZFxuICAgICAgICB2YXIgdGFza3NDb21wbGV0ZWQgPSAwO1xuICAgICAgICBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcbiAgICAgICAgICBleGVjdXRlQW5kUmVwZWF0KGNvbW1hbmQsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tzQ29tcGxldGVkKys7XG4gICAgICAgICAgICAvLyBBZnRlciBhbGwgY29tbWFuZHMgaGF2ZSBiZWVuIGF0dGVtcHRlZCwgc2F2ZSB0aGUgY29uZmlndXJhdGlvblxuICAgICAgICAgICAgaWYgKHRhc2tzQ29tcGxldGVkID09PSBpcHRhYmxlc0RlbGV0ZUNvbW1hbmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBjbWQoXG4gICAgICAgICAgICAgICAgXCJzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmVcIixcbiAgICAgICAgICAgICAgICAoZXJyb3IsIHNhdmVTdGRvdXQsIHNhdmVTdGRlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgaXB0YWJsZXMgcnVsZXM6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgXCJpcHRhYmxlcyBydWxlcyBmb3IgbW9iaWxlIGludGVyZmFjZSB1cGRhdGVkIGFuZCBzYXZlZC5cIixcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKFxuICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgXCJBbGwgc3BlY2lmaWVkIHJ1bGVzIGZvciBtb2JpbGUgaW50ZXJmYWNlIHJlbW92ZWQgYW5kIGNoYW5nZXMgc2F2ZWQuXCIsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvLyAnZGlzYWJsZUludGVybmV0U2hhcmluZ01vYmlsZSc6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAvLyBcdHZhciBpcHRhYmxlc0NvbW1hbmRzID0gW1xuICAgICAgLy8gXHRcdCdzdWRvIGlwdGFibGVzIC0tZGVsZXRlIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCcsXG4gICAgICAvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS1kZWxldGUgRk9SV0FSRCAtLWluLWludGVyZmFjZSB3d2FuMCAtLW91dC1pbnRlcmZhY2Ugd2xhbjAgLW0gc3RhdGUgLS1zdGF0ZSBSRUxBVEVELEVTVEFCTElTSEVEIC1qIEFDQ0VQVCcsXG4gICAgICAvLyBcdFx0J3N1ZG8gaXB0YWJsZXMgLS10YWJsZSBuYXQgLS1kZWxldGUgUE9TVFJPVVRJTkcgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIE1BU1FVRVJBREUnLFxuICAgICAgLy8gXHRcdCdzdWRvIG5ldGZpbHRlci1wZXJzaXN0ZW50IHNhdmUnXG4gICAgICAvLyBcdF0uam9pbignICYmICcpO1xuXG4gICAgICAvLyBcdGNtZChpcHRhYmxlc0NvbW1hbmRzLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAvLyBcdFx0aWYgKGVycm9yKSB7XG4gICAgICAvLyBcdFx0XHRjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgLy8gXHRcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgICAvLyBcdFx0XHRyZXR1cm47XG4gICAgICAvLyBcdFx0fVxuICAgICAgLy8gXHRcdGlmIChzdGRlcnIpIHtcbiAgICAgIC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG4gICAgICAvLyBcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG5ldyBFcnJvcihzdGRlcnIpLCBudWxsKTtcbiAgICAgIC8vIFx0XHRcdHJldHVybjtcbiAgICAgIC8vIFx0XHR9XG4gICAgICAvLyBcdFx0Y29uc29sZS5sb2coJ0ludGVybmV0IHNoYXJpbmcgdmlhIG1vYmlsZSBkaXNhYmxlZCBzdWNjZXNzZnVsbHkuJyk7XG4gICAgICAvLyBcdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsLCBzdGRvdXQpO1xuICAgICAgLy8gXHR9KTtcbiAgICAgIC8vIH0sXG4gICAgICBhbGxvd0ludGVybmV0Rm9yTWFjTW9iaWxlOiBmdW5jdGlvbiAobWFjQWRkcmVzcywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgLy8gRmlyc3QsIGVuYWJsZSBnZW5lcmFsIGludGVybmV0IHNoYXJpbmcgZnJvbSB3bGFuMCB0byB3d2FuMFxuICAgICAgICByZXMgPSBjbWQoXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd2xhbjAgLS1vdXQtaW50ZXJmYWNlIHd3YW4wIC1qIEFDQ0VQVCAmJiBzdWRvIGlwdGFibGVzIC0tYXBwZW5kIEZPUldBUkQgLS1pbi1pbnRlcmZhY2Ugd3dhbjAgLS1vdXQtaW50ZXJmYWNlIHdsYW4wIC1tIHN0YXRlIC0tc3RhdGUgUkVMQVRFRCxFU1RBQkxJU0hFRCAtaiBBQ0NFUFQgJiYgc3VkbyBpcHRhYmxlcyAtLXRhYmxlIG5hdCAtLWFwcGVuZCBQT1NUUk9VVElORyAtLW91dC1pbnRlcmZhY2Ugd3dhbjAgLWogTUFTUVVFUkFERVwiLFxuICAgICAgICAgIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgIGBleGVjIGVycm9yIGR1cmluZyBlbmFibGluZyBpbnRlcm5ldCBzaGFyaW5nOiAke2Vycm9yfWAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSW50ZXJuZXQgc2hhcmluZyBlbmFibGVkIHZpYSB3d2FuMC5gKTtcbiAgICAgICAgICAgIC8vIEFsbG93IGludGVybmV0IG9ubHkgZm9yIHRoZSBzcGVjaWZpZWQgTUFDIGFkZHJlc3Mgb24gd3dhbjBcbiAgICAgICAgICAgIHZhciBhbGxvd01hY0NvbW1hbmQgPSBgc3VkbyBpcHRhYmxlcyAtSSBGT1JXQVJEIDEgLWkgd3dhbjAgLW0gbWFjIC0tbWFjLXNvdXJjZSAke21hY0FkZHJlc3N9IC1qIEFDQ0VQVGA7XG4gICAgICAgICAgICAvLyBCbG9jayBhbGwgb3RoZXIgTUFDIGFkZHJlc3NlcyBmcm9tIGFjY2Vzc2luZyB0aGUgaW50ZXJuZXQgdmlhIHd3YW4wLlxuICAgICAgICAgICAgdmFyIGJsb2NrT3RoZXJzQ29tbWFuZCA9IGBzdWRvIGlwdGFibGVzIC1BIEZPUldBUkQgLWkgd3dhbjAgLWogRFJPUGA7XG5cbiAgICAgICAgICAgIC8vIEFsbG93IHNwZWNpZmljIE1BQ1xuICAgICAgICAgICAgcmVzID0gY21kKGFsbG93TWFjQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgYGV4ZWMgZXJyb3IgZHVyaW5nIGFsbG93aW5nIE1BQyAke21hY0FkZHJlc3N9IG9uIFdXQU46ICR7ZXJyb3J9YCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgYEludGVybmV0IGFjY2VzcyBhbGxvd2VkIGZvciBNQUMgJHttYWNBZGRyZXNzfSBvbiBXV0FOLmAsXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgLy8gQmxvY2sgYWxsIG90aGVyIE1BQ3NcbiAgICAgICAgICAgICAgcmVzID0gY21kKGJsb2NrT3RoZXJzQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgYGV4ZWMgZXJyb3IgZHVyaW5nIGJsb2NraW5nIG90aGVyIE1BQ3Mgb24gV1dBTjogJHtlcnJvcn1gLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgYEludGVybmV0IGFjY2VzcyBibG9ja2VkIGZvciBvdGhlciBNQUMgYWRkcmVzc2VzIG9uIFdXQU4uYCxcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBpcHRhYmxlcyBydWxlc1xuICAgICAgICAgICAgICAgIGNtZChcbiAgICAgICAgICAgICAgICAgIFwic3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlXCIsXG4gICAgICAgICAgICAgICAgICAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgZXhlYyBlcnJvciBkdXJpbmcgc2F2aW5nIGlwdGFibGVzIHJ1bGVzIGZvciBXV0FOOiAke2Vycm9yfWAsXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpcHRhYmxlcyBydWxlcyBmb3IgV1dBTiBzYXZlZC5gKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVBbGxNYWNGaWx0ZXJzRm9yTW9iaWxlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgLy8gTGlzdCBhbGwgRk9SV0FSRCBydWxlc1xuICAgICAgICBjbWQoXG4gICAgICAgICAgXCJzdWRvIGlwdGFibGVzIC1MIEZPUldBUkQgLS1saW5lLW51bWJlcnMgLW5cIixcbiAgICAgICAgICAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgbGlzdGluZyBydWxlczogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUHJvY2VzcyBzdGRvdXQgdG8gZmluZCBydWxlcyB0byBkZWxldGUuIFRoaXMgcGFydCBpcyBwc2V1ZG8tY29kZSBhbmQgbmVlZHMgYWRqdXN0bWVudFxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzdGRvdXQuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgICBjb25zdCBydWxlTnVtYmVycyA9IFtdO1xuICAgICAgICAgICAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobGluZS5pbmNsdWRlcyhcInd3YW4wXCIpICYmIGxpbmUuaW5jbHVkZXMoXCJNQUNcIikpIHtcbiAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IHRoZSBydWxlIG51bWJlciBmcm9tIHRoZSBsaW5lXG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZU51bWJlciA9IGxpbmUuc3BsaXQoXCIgXCIpWzBdOyAvLyBUaGlzIGlzIGEgc2ltcGxpZmljYXRpb25cbiAgICAgICAgICAgICAgICBydWxlTnVtYmVycy5wdXNoKHJ1bGVOdW1iZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHJ1bGVzIGJ5IHRoZWlyIG51bWJlcnMsIHN0YXJ0aW5nIGZyb20gdGhlIGhpZ2hlc3QgbnVtYmVyXG4gICAgICAgICAgICBydWxlTnVtYmVyc1xuICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYiAtIGEpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKChydWxlTnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY21kKFxuICAgICAgICAgICAgICAgICAgYHN1ZG8gaXB0YWJsZXMgLUQgRk9SV0FSRCAke3J1bGVOdW1iZXJ9YCxcbiAgICAgICAgICAgICAgICAgIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciByZW1vdmluZyBydWxlICR7cnVsZU51bWJlcn06ICR7ZXJyb3J9YCxcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIE9wdGlvbmFsbHksIHN0b3AgdGhlIHByb2Nlc3Mgb3IgY29udGludWUgYXR0ZW1wdGluZyB0byByZW1vdmUgb3RoZXIgcnVsZXNcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJ1bGUgJHtydWxlTnVtYmVyfSByZW1vdmVkIHN1Y2Nlc3NmdWxseS5gKTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEFmdGVyIGFsbCBydWxlcyBoYXZlIGJlZW4gcHJvY2Vzc2VkLCBzYXZlIHRoZSBpcHRhYmxlcyBydWxlc1xuICAgICAgICAgICAgY21kKFwic3VkbyBuZXRmaWx0ZXItcGVyc2lzdGVudCBzYXZlXCIsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igc2F2aW5nIGlwdGFibGVzIHJ1bGVzOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlwdGFibGVzIHJ1bGVzIHVwZGF0ZWQgYW5kIHNhdmVkLlwiKTtcbiAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKFxuICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgIFwiQWxsIE1BQyBmaWx0ZXIgcnVsZXMgZm9yIFdXQU4gcmVtb3ZlZCBhbmQgY2hhbmdlcyBzYXZlZC5cIixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICByZWJvb3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgcmVzID0gY21kKFwic3VkbyByZWJvb3RcIiwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHNodXRkb3duOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHJlcyA9IGNtZChcInN1ZG8gaGFsdFwiLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgc3luY2hyb25pemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyBzeW5jLi4uXCIpO1xuXG4gICAgICAgIHZhciBkZXZpY2VTZXJpYWwgPSBNZXRlb3Iuc2V0dGluZ3MucHVibGljLnNlcmlhbDtcbiAgICAgICAgdmFyIGRldmljZVRva2VuID0gTWV0ZW9yLnNldHRpbmdzLm1vb2RsZUFQSVRva2VuO1xuICAgICAgICB2YXIgdXJsID0gTWV0ZW9yLnNldHRpbmdzLmNsb3VkVVJMICsgXCIvYXBpL3N0YXJ0U3luY1wiO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGRldmljZVNlcmlhbDogZGV2aWNlU2VyaWFsLFxuICAgICAgICAgICAgZGV2aWNlVG9rZW46IGRldmljZVRva2VuLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbnBtUmVxdWVzdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsIC8vIFRPRE8gcmVtb3ZlIHdoZW4gZGVwbG95XG4gICAgICAgICAgICB0aW1lb3V0OiAxMjAwMDAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGltZW91dDogMTIwMDAwMCxcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvL3ZhciByZXN1bHQgPSBIVFRQLmNhbGwoJ1BPU1QnLCB1cmwsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgdmFyIHJlc3VsdCA9IEhUVFAucG9zdCh1cmwsIG9wdGlvbnMpO1xuICAgICAgICAgIHZhciByZXN1bHRDb250ZW50ID0gcmVzdWx0LmNvbnRlbnQ7XG4gICAgICAgICAgLy9TeW5jaHJvbml6YXRpb25zLmluc2VydCh7ZGF0ZTpEYXRlLm5vdygpfSk7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdENvbnRlbnQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIHRyeWluZyB0byBzeW5jcm9uaXplLi4uXCIsIGUpO1xuICAgICAgICAgIHJldHVybiBcIkVycm9yIHdoaWxlIHRyeWluZyB0byBzeW5jcm9uaXplLi4uIFwiICsgZTtcbiAgICAgICAgfVxuICAgICAgICAvL3JldHVybiByZXN1bHRDb250ZW50O1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufSk7XG4iLCIvLyBNZXRlb3IucHVibGlzaCgnYWxsQXBwcycsIGZ1bmN0aW9uKCkge1xuLy8gXHRyZXR1cm4gQXBwcy5maW5kKHt9KTtcbi8vIH0pO1xuXG4vLyBNZXRlb3IucHVibGlzaChcInVzZXJzXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCh7fSwge2ZpZWxkczp7Y3JlYXRlZEF0OiB0cnVlLCBwcm9maWxlOiB0cnVlLCBlbWFpbHM6IHRydWUsIHVzZXJuYW1lOiB0cnVlfX0pO1xuLy8gfSk7XG5cblxuICBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgfSk7IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5cbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvYXBwcy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS91c2Vycy5qcyc7XG5cbmltcG9ydCAnLi4vc2VydmVyL2ZpeHR1cmVzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL21ldGhvZHMuanMnO1xuaW1wb3J0ICcuLi9zZXJ2ZXIvcHVibGljYXRpb25zLmpzJztcbmltcG9ydCAnLi4vbGliL2FwcF9sb2FkZXIuanMnO1xuXG5cbi8vaW1wb3J0IHtERFB9IGZyb20gJ21ldGVvci9kZHAnO1xuLy9pbXBvcnQge0FjY291bnRzfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSc7XG5cblxuLy8gaW1wb3J0ICcuLi9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2ZpeHR1cmVzLmpzJztcblxuLy8gaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9maXh0dXJlcy5qcyc7XG5cblxuTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuXHRjb25zb2xlLmxvZyhcIm1ldGVvciBzdGFydGVkLi4uXCIpO1xuXG5cblxuICAvLyBjb2RlIHRvIHJ1biBvbiBzZXJ2ZXIgYXQgc3RhcnR1cFxuXG4gLy8gIFNlcnZlcjIgPSBERFAuY29ubmVjdChcImh0dHA6Ly9iZWVrZWUuYm94OjgzXCIpO1xuXHQvLyBBY2NvdW50cy5jb25uZWN0aW9uID0gU2VydmVyMjtcblx0Ly8gY29uc29sZS5sb2coXCJvbiBjb25uZWN0ZS4uLlwiKTtcbn0pO1xuIl19
