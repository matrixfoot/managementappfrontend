function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDefaultDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-pane\">\r\n  <h1 class=\"text-center\">Acceuil Dir/stratégie-développement</h1>\r\n  <div class=\"part-grid\">\r\n    \r\n    <div class=\"part\" (click)=\"onNavigate('part-three')\">\r\n      <h1>Connexion/\r\n        Inscription</h1>\r\n    </div>\r\n    <div class=\"part\" (click)=\"onNavigate('part-four')\">\r\n      <h1>Page Principale</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\r\n  <h1 class=\"header-title\">\r\n    Tableau de bord\r\n  </h1>\r\n  <ul class=\"header-navigation\">\r\n    <li class=\"header-navigation-item\" *ngIf=\"part >= 3 && isAuth\">\r\n      <a class=\"header-link\" routerLink=\"/all-projet\" routerLinkActive=\"active\">Liste des projets</a>\r\n    </li>\r\n    <li class=\"header-navigation-item\" *ngIf=\"part >= 3 && isAuth\">\r\n      <a class=\"header-link\" routerLink=\"/new-project\" routerLinkActive=\"active\">Nouveau projet</a>\r\n    </li>\r\n    <li class=\"header-navigation-item\" *ngIf=\"(part >= 3 && isAuth)\">\r\n      <a class=\"header-link\" style=\"cursor: pointer\" (click)=\"onLogout()\">DECONNEXION</a>\r\n    </li>\r\n    <li class=\"header-navigation-item\" *ngIf=\"(part >= 3 && !isAuth)\">\r\n      <a class=\"header-link\" routerLink=\"/auth/login\" routerLinkActive=\"active\">CONNEXION</a>\r\n    </li>\r\n    <li class=\"header-navigation-item\" *ngIf=\"(part >= 3 && !isAuth)\">\r\n      <a class=\"header-link\" routerLink=\"/auth/signup\" routerLinkActive=\"active\">INSCRIPTION</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"header-navigation nav-end\">\r\n    \r\n  </ul>\r\n</header>\r\n<div class=\"hero-image\" *ngIf=\"mode === 'list'\">\r\n  <h2 class=\"hero-text\">\r\n    Le meilleur endroit pour la vision golable des projets\r\n  </h2>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-project/modify-project.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modify-project/modify-project.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModifyProjectModifyProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<div *ngIf=\"!loading\" class=\"col-sm-6 offset-sm-3 mt-2\">\r\n    <form [formGroup]=\"projectForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Titre</label>\r\n          <input type=\"text\" placeholder=\"titre du projet\" id=\"title\" formControlName=\"title\" class=\"form-control\">\r\n        </div>\r\n        <button class=\"btn btn-success\" type=\"button\" (click)=\"filePicker.click()\">Ajouter la fiche du projet</button>\r\n        <input type=\"file\"  #filePicker (change)=\"onImagePick($event)\"  class=\"form-control\" accept=\"application/pdf\" accept=\"application/vnd.openxmlformats-officedocument.presentationml.presentation\" accept=\"application/vnd.ms-powerpoint\">\r\n        <div class=\"image-preview\" *ngIf=\"imagePreview\">\r\n          <img [src]=\"imagePreview\" alt=\"\">\r\n        </div>\r\n        <p class=\"text-success\" *ngIf=\"fileUploaded\">Fichier chargé !</p>\r\n    \r\n    \r\n        <div class=\"form-group\">\r\n            <label for=\"chef\">chef du projet</label>\r\n            <input type=\"text\" placeholder=\"chef du projet\" id=\"chef\" formControlName=\"chef\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"avancement\">Avancement</label>\r\n            <input type=\"text\" placeholder=\"avancement du projet\" id=\"avancement\" formControlName=\"avancement\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"blocage\">Blocage/risques</label>\r\n            <input type=\"text\" placeholder=\"blocages ou risques\" id=\"blocage\" formControlName=\"blocage\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"resteafaire\">reste à faire</label>\r\n            <input type=\"text\" placeholder=\"reste à faire du projet\" id=\"resteafaire\" formControlName=\"resteafaire\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"pmo\">PMO</label>\r\n            <input type=\"text\" placeholder=\"PMO\" id=\"pmo\" formControlName=\"pmo\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"echeance\">Echéance</label>\r\n            <input type=\"text\" placeholder=\"Echéance planifié\" id=\"echeance\" formControlName=\"echeance\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"pole\">pole</label>\r\n            <input type=\"text\" placeholder=\"pole\" id=\"pole\" formControlName=\"pole\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"structure\">structure</label>\r\n            <input type=\"text\" placeholder=\"Structure\" id=\"structure\" formControlName=\"structure\" class=\"form-control\">\r\n          </div>\r\n       \r\n        <button class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"projectForm.invalid\">Valider</button>\r\n        <p class=\"alert-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\r\n      </form>\r\n    </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-project/new-project.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-project/new-project.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewProjectNewProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<div *ngIf=\"!loading\" class=\"col-sm-6 offset-sm-3 mt-2\">\r\n  <form [formGroup]=\"projectForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">Titre</label>\r\n      <input type=\"text\" placeholder=\"titre du projet\" id=\"title\" formControlName=\"title\" class=\"form-control\">\r\n    </div>\r\n    <button class=\"btn btn-success\" type=\"button\" (click)=\"filePicker.click()\">Ajouter la fiche du projet</button>\r\n    <input type=\"file\"  #filePicker (change)=\"onImagePick($event)\"  class=\"form-control\" accept=\"application/pdf\">\r\n    <div class=\"image-preview\" *ngIf=\"imagePreview\">\r\n      <img [src]=\"imagePreview\" alt=\"\">\r\n    </div>\r\n    <p class=\"text-success\" *ngIf=\"fileUploaded\">Fichier chargé !</p>\r\n\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"chef\">chef du projet</label>\r\n        <input type=\"text\" placeholder=\"chef du projet\" id=\"chef\" formControlName=\"chef\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"avancement\">Avancement</label>\r\n        <input type=\"text\" placeholder=\"avancement du projet\" id=\"avancement\" formControlName=\"avancement\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"blocage\">Blocage/risques</label>\r\n        <textarea name=\"blocage\"\r\n                id=\"blocage\"\r\n                cols=\"30\" rows=\"7\"\r\n                class=\"form-control\"\r\n                formControlName=\"blocage\"\r\n                placeholder=\"blocages ou risques éventuels\"></textarea>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"resteafaire\">reste à faire</label>\r\n        <textarea name=\"resteafaire\"\r\n                id=\"resteafaire\"\r\n                cols=\"30\" rows=\"7\"\r\n                class=\"form-control\"\r\n                formControlName=\"resteafaire\"\r\n                placeholder=\"Décrivez brièvement le reste à faire du projet\"></textarea>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"pmo\">PMO</label>\r\n        <input type=\"text\" placeholder=\"PMO\" id=\"pmo\" formControlName=\"pmo\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"echeance\">Echéance</label>\r\n        <input type=\"text\" placeholder=\"Echéance planifié\" id=\"echeance\" formControlName=\"echeance\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"pole\">pole</label>\r\n        <input type=\"text\" placeholder=\"pole\" id=\"pole\" formControlName=\"pole\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"structure\">structure</label>\r\n        <input type=\"text\" placeholder=\"Structure\" id=\"structure\" formControlName=\"structure\" class=\"form-control\">\r\n      </div>\r\n   \r\n    <button class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"thingForm.invalid\">Valider</button>\r\n    <p class=\"alert-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/part-four.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/part-four.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPartFourPartFourComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/login/login.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/login/login.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPartThreeAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<div class=\"col-sm-8 offset-sm-2 mt-2\" *ngIf=\"!loading\">\r\n  <form [formGroup]=\"loginForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Adresse mail</label>\r\n      <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Mot de passe</label>\r\n      <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\">\r\n    </div>\r\n    <button class=\"btn btn-success\" (click)=\"onLogin()\" [disabled]=\"loginForm.invalid\">Connexion</button>\r\n  </form>\r\n  <p>{{ errorMessage }}</p>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/signup/signup.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/signup/signup.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPartThreeAuthSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<div class=\"col-sm-8 offset-sm-2 mt-2\" *ngIf=\"!loading\">\r\n  <form [formGroup]=\"signupForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Adresse mail</label>\r\n      <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Mot de passe</label>\r\n      <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\">\r\n    </div>\r\n    <button class=\"btn btn-success\" (click)=\"onSignup()\" [disabled]=\"signupForm.invalid\">Inscription</button>\r\n  </form>\r\n  <p>{{ errorMessage }}</p>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/part-three.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/part-three.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPartThreePartThreeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projet-list/projet-list.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projet-list/projet-list.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjetListProjetListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<p class=\"text-center\" *ngIf=\"projet.length <= 0 && !loading\">Pas de projets !</p>\r\n<div class=\"projet-grid\" *ngIf=\"projet.length >= 0\">\r\n  <h2 class=\"text-center\" > Liste des projets</h2>  \r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n    <tr>\r\n\r\n      <th>#</th>\r\n      <th>Titre</th>\r\n      \r\n      <th>Reste à faire</th>\r\n      <th>Avancement</th>\r\n      <th>Fiche projet</th>\r\n      \r\n      <th>PMO</th>\r\n      <th>Echeance</th>\r\n      \r\n      <th>Détails projet</th>\r\n      \r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let project of projet\">\r\n\r\n      <td>{{project._id}}</td>\r\n      <td>{{project.title}}</td>\r\n      \r\n      <td>{{project.resteafaire}}</td>\r\n      <td>{{project.avancement}}</td>\r\n      <td>{{project.ficheurl}} <a href={{project.ficheUrl}}>Ouvrir le PDF</a></td>\r\n      \r\n      <td>{{project.pmo}}</td>\r\n      <td>{{project.echeance}}</td>\r\n      \r\n      <td>  <button type=\"button\" class=\"btn btn-success\" (click)=\"getNavigation('view', project._id)\">View</button></td>\r\n      \r\n        \r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-project/view-project.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-project/view-project.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewProjectViewProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<div *ngIf=\"!loading\">\r\n  <button class=\"btn btn-link\" (click)=\"onGoBack()\"><< Retour</button>\r\n\r\n  <div style=\"border: 2px solid #1c75c8; padding: 3px; background-color: #c5ddf6;text-align: center; -moz-border-radius-topleft: 5px; -moz-border-radius-topright: 5px; -moz-border-radius-bottomright: 5px; -moz-border-radius-bottomleft: 5px;\">\r\n    \r\n    <strong>ID//Titre du projet</strong>:{{project._id}} // {{project.title}}\r\n  \r\n    </div>\r\n    <div style=\"padding:3px; padding-left:6px; border-left:4px solid #d0d0d0; background-color:#f1f1f1;text-align:center; margin-left:20px; font-style:italic;\">\r\n      <strong>Informations supplémentaires</strong>:  <p> <label for=\"\"> chef du projet: </label>  {{project.chef}}</p> <p> <label for=\"\"> PMO du projet: </label> {{project.pmo}}</p>\r\n      <p> <label for=\"\"> échéance du projet: </label> {{project.echeance}}</p>\r\n      <p> <label for=\"\"> Pole du projet: </label> {{project.pole}}</p>\r\n      <p> <label for=\"\"> Structure contenant le projet: </label> {{project.structure}}</p>\r\n      </div>\r\n             \r\n      <div style=\"padding:3px; border:4px inset #4cdc67;text-align:center; background-color:#4cdc67;\">\r\n        <strong>Informations dynamiques</strong>: <p> <label for=\"\"> Reste à faire du projet: </label> {{project.resteafaire}}</p>\r\n        <p> <label for=\"\"> Avancement du projet: </label> {{project.avancement}}</p>\r\n        <p>{{project.ficheurl}}</p> <a href={{project.ficheUrl}}>Apercu de la fiche du projet</a>\r\n        <p> <label for=\"\"> blocages ou risques du projet: </label> {{project.blocage}}</p>\r\n        </div>\r\n     \r\n      \r\n     \r\n      \r\n    \r\n  \r\n  <button type=\"button\" class=\"btn btn-warning\" (click)=\"getNavigation('update', project._id)\">Modifier</button>\r\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDelete()\">Supprimer</button>\r\n</div>\r\n      ";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _part_three_part_three_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./part-three/part-three.component */
    "./src/app/part-three/part-three.component.ts");
    /* harmony import */


    var _part_four_part_four_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./part-four/part-four.component */
    "./src/app/part-four/part-four.component.ts");
    /* harmony import */


    var _default_default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./default/default.component */
    "./src/app/default/default.component.ts");
    /* harmony import */


    var _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./part-three/auth/login/login.component */
    "./src/app/part-three/auth/login/login.component.ts");
    /* harmony import */


    var _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./part-three/auth/signup/signup.component */
    "./src/app/part-three/auth/signup/signup.component.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _projet_list_projet_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./projet-list/projet-list.component */
    "./src/app/projet-list/projet-list.component.ts");
    /* harmony import */


    var _new_project_new_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./new-project/new-project.component */
    "./src/app/new-project/new-project.component.ts");
    /* harmony import */


    var _view_project_view_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./view-project/view-project.component */
    "./src/app/view-project/view-project.component.ts");
    /* harmony import */


    var _modify_project_modify_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./modify-project/modify-project.component */
    "./src/app/modify-project/modify-project.component.ts");

    var routes = [{
      path: 'part-three',
      component: _part_three_part_three_component__WEBPACK_IMPORTED_MODULE_3__["PartThreeComponent"],
      children: [{
        path: 'auth/login',
        component: _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
      }, {
        path: 'auth/signup',
        component: _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth/login'
      }, {
        path: '**',
        redirectTo: 'all-projet'
      }]
    }, {
      path: 'part-four',
      component: _part_four_part_four_component__WEBPACK_IMPORTED_MODULE_4__["PartFourComponent"],
      children: [{
        path: 'auth/login',
        component: _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
      }, {
        path: 'auth/signup',
        component: _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth/login'
      }, {
        path: '**',
        redirectTo: 'all-projet'
      }]
    }, {
      path: 'default',
      component: _default_default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"]
    }, {
      path: 'auth/login',
      component: _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'auth/signup',
      component: _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
    }, {
      path: 'all-projet',
      component: _projet_list_projet_list_component__WEBPACK_IMPORTED_MODULE_9__["ProjetListComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'new-project',
      component: _new_project_new_project_component__WEBPACK_IMPORTED_MODULE_10__["NewProjectComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'view/:id',
      component: _view_project_view_project_component__WEBPACK_IMPORTED_MODULE_11__["ViewProjectComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'update/:id',
      component: _modify_project_modify_project_component__WEBPACK_IMPORTED_MODULE_12__["ModifyProjectComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: '',
      pathMatch: 'full',
      component: _default_default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _part_three_part_three_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./part-three/part-three.component */
    "./src/app/part-three/part-three.component.ts");
    /* harmony import */


    var _part_four_part_four_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./part-four/part-four.component */
    "./src/app/part-four/part-four.component.ts");
    /* harmony import */


    var _default_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./default/default.component */
    "./src/app/default/default.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./part-three/auth/login/login.component */
    "./src/app/part-three/auth/login/login.component.ts");
    /* harmony import */


    var _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./part-three/auth/signup/signup.component */
    "./src/app/part-three/auth/signup/signup.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./interceptors/auth-interceptor */
    "./src/app/interceptors/auth-interceptor.ts");
    /* harmony import */


    var _projet_list_projet_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./projet-list/projet-list.component */
    "./src/app/projet-list/projet-list.component.ts");
    /* harmony import */


    var _new_project_new_project_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./new-project/new-project.component */
    "./src/app/new-project/new-project.component.ts");
    /* harmony import */


    var _view_project_view_project_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./view-project/view-project.component */
    "./src/app/view-project/view-project.component.ts");
    /* harmony import */


    var _modify_project_modify_project_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./modify-project/modify-project.component */
    "./src/app/modify-project/modify-project.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _part_three_part_three_component__WEBPACK_IMPORTED_MODULE_4__["PartThreeComponent"], _part_four_part_four_component__WEBPACK_IMPORTED_MODULE_5__["PartFourComponent"], _default_default_component__WEBPACK_IMPORTED_MODULE_6__["DefaultComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"], _projet_list_projet_list_component__WEBPACK_IMPORTED_MODULE_16__["ProjetListComponent"], _new_project_new_project_component__WEBPACK_IMPORTED_MODULE_17__["NewProjectComponent"], _view_project_view_project_component__WEBPACK_IMPORTED_MODULE_18__["ViewProjectComponent"], _modify_project_modify_project_component__WEBPACK_IMPORTED_MODULE_19__["ModifyProjectComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/default/default.component.scss":
  /*!************************************************!*\
    !*** ./src/app/default/default.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDefaultDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-pane {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main-pane h1 {\n  color: #333333;\n}\n.part-grid {\n  display: flex;\n  justify-content: center;\n}\n.part {\n  transition: all 0.3s ease-in-out;\n  position: relative;\n  height: 300px;\n  width: 300px;\n  margin: 5px;\n  background: #333333;\n  cursor: pointer;\n}\n.part:hover {\n  transform: scale(1.05);\n}\n.part h1 {\n  color: white;\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  text-align: center;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC9EOlxcZnJvbnRlbmQvc3JjXFxhcHBcXGRlZmF1bHRcXGRlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0NGO0FEQUU7RUFDRSxjQUFBO0FDRUo7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0NGO0FERUE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7QURBRTtFQUNFLHNCQUFBO0FDRUo7QURBRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tcGFuZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBoMSB7XHJcbiAgICBjb2xvcjogIzMzMzMzM1xyXG4gIH1cclxufVxyXG5cclxuLnBhcnQtZ3JpZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhcnQge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBtYXJnaW46IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluLXBhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm1haW4tcGFuZSBoMSB7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4ucGFydC1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wYXJ0IHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDVweDtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhcnQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuLnBhcnQgaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/default/default.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/default/default.component.ts ***!
    \**********************************************/

  /*! exports provided: DefaultComponent */

  /***/
  function srcAppDefaultDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultComponent", function () {
      return DefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DefaultComponent = /*#__PURE__*/function () {
      function DefaultComponent(router) {
        _classCallCheck(this, DefaultComponent);

        this.router = router;
      }

      _createClass(DefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNavigate",
        value: function onNavigate(endpoint) {
          this.router.navigate([endpoint]);
        }
      }]);

      return DefaultComponent;
    }();

    DefaultComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-default',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./default.component.scss */
      "./src/app/default/default.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], DefaultComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header {\n  display: flex;\n  align-items: center;\n  background-color: #333333;\n  color: white;\n  padding: 0.2rem 2%;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  margin: 0 0 0 5%;\n  padding: 0;\n}\n\nli {\n  display: inline-block;\n  margin: 0 14px;\n}\n\na {\n  color: white;\n  font-weight: 600;\n}\n\na:hover {\n  text-decoration: none;\n}\n\n.active {\n  background-color: #6eb5ff;\n  color: white;\n  padding: 0.3rem 0.5rem;\n}\n\n.hero-image {\n  position: relative;\n  width: 100%;\n  height: 320px;\n  background-size: cover;\n  background: url('38521354191_0f9b6016bc_b.jpg') no-repeat 0 80%;\n  background-size: cover;\n}\n\n.hero-text {\n  color: #a1c9ff;\n  font-weight: 800;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 40%;\n  text-align: center;\n  -webkit-filter: drop-shadow(2px 2px 3px black);\n          filter: drop-shadow(2px 2px 3px black);\n  font-size: 3rem;\n}\n\n.nav-end {\n  flex-direction: row-reverse;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxmcm9udGVuZC9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQUU7RUFDRSxxQkFBQTtBQ0VKOztBREVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLCtEQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjJyZW0gMiU7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgMCAwIDUlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDE0cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjVmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcclxufVxyXG5cclxuLmhlcm8taW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMyMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvMzg1MjEzNTQxOTFfMGY5YjYwMTZiY19iLmpwZycpIG5vLXJlcGVhdCAwIDgwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uaGVyby10ZXh0IHtcclxuICBjb2xvcjogI2ExYzlmZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgd2lkdGg6IDQwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDNweCBibGFjayk7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG59XHJcblxyXG4ubmF2LWVuZCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG4iLCJoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuMnJlbSAyJTtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgMCAwIDUlO1xuICBwYWRkaW5nOiAwO1xufVxuXG5saSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDE0cHg7XG59XG5cbmEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjVmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xufVxuXG4uaGVyby1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy8zODUyMTM1NDE5MV8wZjliNjAxNmJjX2IuanBnXCIpIG5vLXJlcGVhdCAwIDgwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmhlcm8tdGV4dCB7XG4gIGNvbG9yOiAjYTFjOWZmO1xuICBmb250LXdlaWdodDogODAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogNDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAzcHggYmxhY2spO1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi5uYXYtZW5kIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBmbGV4LWdyb3c6IDE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(state, auth, router) {
        _classCallCheck(this, HeaderComponent);

        this.state = state;
        this.auth = auth;
        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.modeSub = this.state.mode$.subscribe(function (mode) {
            _this.mode = mode;
          });
          this.partSub = this.state.part$.subscribe(function (part) {
            _this.part = part;

            switch (part) {
              case 3:
                _this.partString = 'part-three';
                break;

              case 4:
                _this.partString = 'part-four';
                break;

              default:
                break;
            }
          });
          this.isAuthSub = this.auth.isAuth$.subscribe(function (auth) {
            _this.isAuth = auth;
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.auth.logout();
          this.router.navigate(['/' + this.partString + '/auth/login']);
        }
      }, {
        key: "onBackToParts",
        value: function onBackToParts() {
          this.router.navigate(['/default']);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.modeSub.unsubscribe();
          this.partSub.unsubscribe();
          this.isAuthSub.unsubscribe();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/interceptors/auth-interceptor.ts":
  /*!**************************************************!*\
    !*** ./src/app/interceptors/auth-interceptor.ts ***!
    \**************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppInterceptorsAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(auth) {
        _classCallCheck(this, AuthInterceptor);

        this.auth = auth;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authToken = this.auth.token;
          var newRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
          });
          return next.handle(newRequest);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/models/Project.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/Project.model.ts ***!
    \*****************************************/

  /*! exports provided: Project */

  /***/
  function srcAppModelsProjectModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Project", function () {
      return Project;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Project = function Project() {
      _classCallCheck(this, Project);
    };
    /***/

  },

  /***/
  "./src/app/modify-project/modify-project.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/modify-project/modify-project.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModifyProjectModifyProjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmeS1wcm9qZWN0L21vZGlmeS1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modify-project/modify-project.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/modify-project/modify-project.component.ts ***!
    \************************************************************/

  /*! exports provided: ModifyProjectComponent */

  /***/
  function srcAppModifyProjectModifyProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifyProjectComponent", function () {
      return ModifyProjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _services_projet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/projet.service */
    "./src/app/services/projet.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _models_Project_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../models/Project.model */
    "./src/app/models/Project.model.ts");

    var ModifyProjectComponent = /*#__PURE__*/function () {
      function ModifyProjectComponent(state, formBuilder, projetService, route, router, auth) {
        _classCallCheck(this, ModifyProjectComponent);

        this.state = state;
        this.formBuilder = formBuilder;
        this.projetService = projetService;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.loading = false;
      }

      _createClass(ModifyProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.loading = true;
          this.state.mode$.next('form');
          this.userId = this.auth.userId;
          this.route.params.subscribe(function (params) {
            _this2.projetService.getProjectById(params.id).then(function (project) {
              _this2.project = project;
              _this2.projectForm = _this2.formBuilder.group({
                title: [project.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                chef: [project.chef, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                avancement: [project.avancement, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                blocage: [project.blocage, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                resteafaire: [project.resteafaire, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                pmo: [project.pmo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                echeance: [project.echeance, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                pole: [project.pole, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                structure: [project.structure, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                image: [project.ficheUrl, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              });
              _this2.imagePreview = project.ficheUrl;
              _this2.loading = false;
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          this.loading = true;
          var project = new _models_Project_model__WEBPACK_IMPORTED_MODULE_7__["Project"]();
          project._id = this.project._id;
          project.title = this.projectForm.get('title').value;
          project.chef = this.projectForm.get('chef').value;
          project.avancement = this.projectForm.get('avancement').value;
          project.blocage = this.projectForm.get('blocage').value;
          project.resteafaire = this.projectForm.get('resteafaire').value;
          project.pmo = this.projectForm.get('pmo').value;
          project.echeance = this.projectForm.get('echeance').value;
          project.pole = this.projectForm.get('pole').value;
          project.structure = this.projectForm.get('structure').value;
          project.ficheUrl = '';
          project.userId = this.userId;
          this.projetService.modifyProjectWithFile(this.project._id, project, this.projectForm.get('image').value).then(function () {
            _this3.projectForm.reset();

            _this3.loading = false;

            _this3.router.navigate(['/all-projet']);
          }, function (error) {
            _this3.loading = false;
            _this3.errorMessage = error.message;
          });
        }
      }, {
        key: "onImagePick",
        value: function onImagePick(event) {
          var _this4 = this;

          var file = event.target.files[0];
          console.log(file);
          this.projectForm.get('image').patchValue(file);
          this.projectForm.get('image').updateValueAndValidity();
          var reader = new FileReader();

          reader.onload = function () {
            if (_this4.projectForm.get('image').valid) {
              _this4.imagePreview = reader.result;
            } else {
              _this4.imagePreview = null;
            }
          };

          reader.readAsDataURL(file);
        }
      }]);

      return ModifyProjectComponent;
    }();

    ModifyProjectComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_projet_service__WEBPACK_IMPORTED_MODULE_4__["ProjetService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    ModifyProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modify-project',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modify-project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-project/modify-project.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modify-project.component.scss */
      "./src/app/modify-project/modify-project.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_projet_service__WEBPACK_IMPORTED_MODULE_4__["ProjetService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], ModifyProjectComponent);
    /***/
  },

  /***/
  "./src/app/new-project/new-project.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/new-project/new-project.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewProjectNewProjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1wcm9qZWN0L25ldy1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/new-project/new-project.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/new-project/new-project.component.ts ***!
    \******************************************************/

  /*! exports provided: NewProjectComponent */

  /***/
  function srcAppNewProjectNewProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewProjectComponent", function () {
      return NewProjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _services_projet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/projet.service */
    "./src/app/services/projet.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _models_Project_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../models/Project.model */
    "./src/app/models/Project.model.ts");
    /* harmony import */


    var _part_four_mime_type_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../part-four/mime-type.validator */
    "./src/app/part-four/mime-type.validator.ts");

    var NewProjectComponent = /*#__PURE__*/function () {
      function NewProjectComponent(state, formBuilder, projetService, router, auth) {
        _classCallCheck(this, NewProjectComponent);

        this.state = state;
        this.formBuilder = formBuilder;
        this.projetService = projetService;
        this.router = router;
        this.auth = auth;
        this.loading = false;
        this.fileUploaded = false;
      }

      _createClass(NewProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.state.mode$.next('form');
          this.projectForm = this.formBuilder.group({
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            chef: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            avancement: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            blocage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            resteafaire: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pmo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            echeance: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pole: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            structure: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _part_four_mime_type_validator__WEBPACK_IMPORTED_MODULE_8__["mimeType"]]
          });
          this.userId = this.auth.userId;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this5 = this;

          this.loading = true;
          var project = new _models_Project_model__WEBPACK_IMPORTED_MODULE_7__["Project"]();
          project.title = this.projectForm.get('title').value;
          project.chef = this.projectForm.get('chef').value;
          project.avancement = this.projectForm.get('avancement').value;
          project.blocage = this.projectForm.get('blocage').value;
          project.resteafaire = this.projectForm.get('resteafaire').value;
          project.pmo = this.projectForm.get('pmo').value;
          project.echeance = this.projectForm.get('echeance').value;
          project.pole = this.projectForm.get('pole').value;
          project.structure = this.projectForm.get('structure').value;
          project.ficheUrl = '';
          project.userId = this.userId;
          this.projetService.createNewProjectWithFile(project, this.projectForm.get('image').value).then(function () {
            _this5.projectForm.reset();

            _this5.loading = false;

            _this5.router.navigate(['/all-projet']);
          }, function (error) {
            _this5.loading = false;
            _this5.errorMessage = error.message;
          });
        }
      }, {
        key: "onImagePick",
        value: function onImagePick(event) {
          var _this6 = this;

          var file = event.target.files[0];
          this.projectForm.get('image').patchValue(file);
          this.projectForm.get('image').updateValueAndValidity();
          var reader = new FileReader();

          reader.onload = function () {
            if (_this6.projectForm.get('image').valid) {
              _this6.imagePreview = reader.result;
              _this6.fileUploaded = true;
            } else {
              _this6.imagePreview = null;
            }
          };

          reader.readAsDataURL(file);
        }
      }]);

      return NewProjectComponent;
    }();

    NewProjectComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_projet_service__WEBPACK_IMPORTED_MODULE_4__["ProjetService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    NewProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-project',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-project/new-project.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-project.component.scss */
      "./src/app/new-project/new-project.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_projet_service__WEBPACK_IMPORTED_MODULE_4__["ProjetService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], NewProjectComponent);
    /***/
  },

  /***/
  "./src/app/part-four/mime-type.validator.ts":
  /*!**************************************************!*\
    !*** ./src/app/part-four/mime-type.validator.ts ***!
    \**************************************************/

  /*! exports provided: mimeType */

  /***/
  function srcAppPartFourMimeTypeValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mimeType", function () {
      return mimeType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var mimeType = function mimeType(control) {
      if (typeof control.value === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
      }

      var file = control.value;
      var fileReader = new FileReader();
      var frObs = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
        fileReader.addEventListener('loadend', function () {
          var arr = new Uint8Array(fileReader.result).subarray(0, 4);
          var header = '';
          var isValid = false;

          for (var i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
          }

          switch (header) {
            case '89504e47':
              isValid = true;
              break;

            case 'ffd8ffe0':
            case 'ffd8ffe1':
            case 'ffd8ffe2':
            case 'ffd8ffe3':
            case 'ffd8ffe8':
            case '25504446':
            case 'D0CF11E0':
            case 'D0CF11E0':
            case 'D0CF11E0':
            case '504B0304':
            case '504B0506':
            case '504B0708':
              isValid = true;
              break;

            default:
              isValid = false; // Or you can use the blob.type as fallback

              break;
          }

          if (isValid) {
            observer.next(null);
          } else {
            observer.next({
              invalidMimeType: true
            });
          }

          observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
      });
      return frObs;
    };
    /***/

  },

  /***/
  "./src/app/part-four/part-four.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/part-four/part-four.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPartFourPartFourComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtZm91ci9wYXJ0LWZvdXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/part-four/part-four.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/part-four/part-four.component.ts ***!
    \**************************************************/

  /*! exports provided: PartFourComponent */

  /***/
  function srcAppPartFourPartFourComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartFourComponent", function () {
      return PartFourComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var PartFourComponent = /*#__PURE__*/function () {
      function PartFourComponent(state, auth) {
        _classCallCheck(this, PartFourComponent);

        this.state = state;
        this.auth = auth;
      }

      _createClass(PartFourComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.auth.isAuth$.next(false);
          this.auth.userId = '';
          this.auth.token = '';
          this.state.part$.next(4);
          this.state.part = 4;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return PartFourComponent;
    }();

    PartFourComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    PartFourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-part-four',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./part-four.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/part-four.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./part-four.component.scss */
      "./src/app/part-four/part-four.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], PartFourComponent);
    /***/
  },

  /***/
  "./src/app/part-three/auth/login/login.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/part-three/auth/login/login.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPartThreeAuthLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtdGhyZWUvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/part-three/auth/login/login.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/part-three/auth/login/login.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPartThreeAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/state.service */
    "./src/app/services/state.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, router, auth, state) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.state = state;
        this.loading = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.state.mode$.next('form');
          this.loginForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this7 = this;

          this.loading = true;
          var email = this.loginForm.get('email').value;
          var password = this.loginForm.get('password').value;
          this.auth.login(email, password).then(function () {
            _this7.loading = false;

            if (_this7.state.part === 3) {
              _this7.router.navigate(['/all-projet']);
            } else if (_this7.state.part === 4) {
              _this7.router.navigate(['/all-projet']);
            }
          })["catch"](function (error) {
            _this7.loading = false;
            _this7.errorMessage = error.message;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/part-three/auth/login/login.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/part-three/auth/signup/signup.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/part-three/auth/signup/signup.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPartThreeAuthSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtdGhyZWUvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/part-three/auth/signup/signup.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/part-three/auth/signup/signup.component.ts ***!
    \************************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppPartThreeAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/state.service */
    "./src/app/services/state.service.ts");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(formBuilder, router, auth, state) {
        _classCallCheck(this, SignupComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.state = state;
        this.loading = false;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.state.mode$.next('form');
          this.signupForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onSignup",
        value: function onSignup() {
          var _this8 = this;

          this.loading = true;
          var email = this.signupForm.get('email').value;
          var password = this.signupForm.get('password').value;
          this.auth.createNewUser(email, password).then(function () {
            _this8.loading = false;

            if (_this8.state.part === 3) {
              _this8.router.navigate(['/part-four/all-projet']);
            } else if (_this8.state.part === 4) {
              _this8.router.navigate(['/part-four/all-projet']);
            }
          })["catch"](function (error) {
            _this8.loading = false;
            _this8.errorMessage = error.message;
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/part-three/auth/signup/signup.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]])], SignupComponent);
    /***/
  },

  /***/
  "./src/app/part-three/part-three.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/part-three/part-three.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPartThreePartThreeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtdGhyZWUvcGFydC10aHJlZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/part-three/part-three.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/part-three/part-three.component.ts ***!
    \****************************************************/

  /*! exports provided: PartThreeComponent */

  /***/
  function srcAppPartThreePartThreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartThreeComponent", function () {
      return PartThreeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var PartThreeComponent = /*#__PURE__*/function () {
      function PartThreeComponent(state, auth) {
        _classCallCheck(this, PartThreeComponent);

        this.state = state;
        this.auth = auth;
      }

      _createClass(PartThreeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.auth.isAuth$.next(false);
          this.auth.userId = '';
          this.auth.token = '';
          this.state.part$.next(3);
          this.state.part = 3;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return PartThreeComponent;
    }();

    PartThreeComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    PartThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-part-three',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./part-three.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/part-three.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./part-three.component.scss */
      "./src/app/part-three/part-three.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], PartThreeComponent);
    /***/
  },

  /***/
  "./src/app/projet-list/projet-list.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/projet-list/projet-list.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjetListProjetListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldC1saXN0L3Byb2pldC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/projet-list/projet-list.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/projet-list/projet-list.component.ts ***!
    \******************************************************/

  /*! exports provided: ProjetListComponent */

  /***/
  function srcAppProjetListProjetListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetListComponent", function () {
      return ProjetListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _services_projet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/projet.service */
    "./src/app/services/projet.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProjetListComponent = /*#__PURE__*/function () {
      function ProjetListComponent(state, projetService, router) {
        _classCallCheck(this, ProjetListComponent);

        this.state = state;
        this.projetService = projetService;
        this.router = router;
        this.projet = [];
      }

      _createClass(ProjetListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.loading = true;
          this.state.mode$.next('list');
          this.projetSub = this.projetService.projet$.subscribe(function (projet) {
            _this9.projet = projet;
            _this9.loading = false;
          });
          this.partSub = this.state.part$.subscribe(function (part) {
            _this9.part = part;
          });
          this.projetService.getProjet();
        }
      }, {
        key: "getNavigation",
        value: function getNavigation(link, id) {
          this.router.navigate([link + '/' + id]);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.projetSub.unsubscribe();
          this.partSub.unsubscribe();
        }
      }]);

      return ProjetListComponent;
    }();

    ProjetListComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }, {
        type: _services_projet_service__WEBPACK_IMPORTED_MODULE_3__["ProjetService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ProjetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projet-list/projet-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-list.component.scss */
      "./src/app/projet-list/projet-list.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"], _services_projet_service__WEBPACK_IMPORTED_MODULE_3__["ProjetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ProjetListComponent);
    /***/
  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./state.service */
    "./src/app/services/state.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth, state, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.state = state;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this10 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            _this10.auth.isAuth$.subscribe(function (auth) {
              if (!auth) {
                _this10.state.part$.subscribe(function (part) {
                  if (part === 3) {
                    _this10.router.navigate(['/part-four/auth/login']);
                  } else if (part === 4) {
                    _this10.router.navigate(['/part-four/auth/login']);
                  }
                });
              }

              observer.next(true);
            });
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(router, http) {
        _classCallCheck(this, AuthService);

        this.router = router;
        this.http = http;
        this.isAuth$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
      }

      _createClass(AuthService, [{
        key: "createNewUser",
        value: function createNewUser(email, password) {
          var _this11 = this;

          return new Promise(function (resolve, reject) {
            _this11.http.post('https://backendmanagementapp.herokuapp.com/api/auth/signup', {
              email: email,
              password: password
            }).subscribe(function () {
              _this11.login(email, password).then(function () {
                resolve();
              })["catch"](function (error) {
                reject(error);
              });
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this12 = this;

          return new Promise(function (resolve, reject) {
            _this12.http.post('https://backendmanagementapp.herokuapp.com/api/auth/login', {
              email: email,
              password: password
            }).subscribe(function (authData) {
              _this12.token = authData.token;
              _this12.userId = authData.userId;

              _this12.isAuth$.next(true);

              resolve();
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.isAuth$.next(false);
          this.userId = null;
          this.token = null;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/projet.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/projet.service.ts ***!
    \********************************************/

  /*! exports provided: ProjetService */

  /***/
  function srcAppServicesProjetServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetService", function () {
      return ProjetService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProjetService = /*#__PURE__*/function () {
      function ProjetService(http) {
        _classCallCheck(this, ProjetService);

        this.http = http;
        this.projet = [];
        this.projet$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(ProjetService, [{
        key: "getProjet",
        value: function getProjet() {
          var _this13 = this;

          this.http.get('https://backendmanagementapp.herokuapp.com/api/projet').subscribe(function (projet) {
            if (projet) {
              _this13.projet = projet;

              _this13.emitProjet();
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "emitProjet",
        value: function emitProjet() {
          this.projet$.next(this.projet);
        }
      }, {
        key: "getProjectById",
        value: function getProjectById(id) {
          var _this14 = this;

          return new Promise(function (resolve, reject) {
            _this14.http.get('https://backendmanagementapp.herokuapp.com/api/projet/' + id).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "createNewProjectWithFile",
        value: function createNewProjectWithFile(project, image) {
          var _this15 = this;

          return new Promise(function (resolve, reject) {
            var projectData = new FormData();
            projectData.append('project', JSON.stringify(project));
            projectData.append('image', image, project.title);

            _this15.http.post('https://backendmanagementapp.herokuapp.com/api/projet', projectData).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "modifyProjectWithFile",
        value: function modifyProjectWithFile(id, project, image) {
          var _this16 = this;

          return new Promise(function (resolve, reject) {
            var projectData;

            if (typeof image === 'string') {
              project.ficheUrl = image;
              projectData = project;
            } else {
              projectData = new FormData();
              projectData.append('project', JSON.stringify(project));
              projectData.append('image', image, project.title);
            }

            _this16.http.put('https://backendmanagementapp.herokuapp.com/api/projet/' + id, projectData).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "deleteProject",
        value: function deleteProject(id) {
          var _this17 = this;

          return new Promise(function (resolve, reject) {
            _this17.http["delete"]('https://backendmanagementapp.herokuapp.com/api/projet/' + id).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }]);

      return ProjetService;
    }();

    ProjetService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ProjetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], ProjetService);
    /***/
  },

  /***/
  "./src/app/services/state.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/state.service.ts ***!
    \*******************************************/

  /*! exports provided: StateService */

  /***/
  function srcAppServicesStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateService", function () {
      return StateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StateService = function StateService() {
      _classCallCheck(this, StateService);

      this.part$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
      this.part = 0;
      this.mode$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    };

    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], StateService);
    /***/
  },

  /***/
  "./src/app/view-project/view-project.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/view-project/view-project.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewProjectViewProjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcHJvamVjdC92aWV3LXByb2plY3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/view-project/view-project.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/view-project/view-project.component.ts ***!
    \********************************************************/

  /*! exports provided: ViewProjectComponent */

  /***/
  function srcAppViewProjectViewProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewProjectComponent", function () {
      return ViewProjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_projet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/projet.service */
    "./src/app/services/projet.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var ViewProjectComponent = /*#__PURE__*/function () {
      function ViewProjectComponent(state, router, route, projetService, auth) {
        _classCallCheck(this, ViewProjectComponent);

        this.state = state;
        this.router = router;
        this.route = route;
        this.projetService = projetService;
        this.auth = auth;
      }

      _createClass(ViewProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.loading = true;
          this.state.mode$.next('new-project');
          this.userId = this.auth.userId ? this.auth.userId : 'userID40282382';
          this.route.params.subscribe(function (params) {
            _this18.projetService.getProjectById(params.id).then(function (project) {
              _this18.loading = false;
              _this18.project = project;
            });
          });
          this.partSub = this.state.part$.subscribe(function (part) {
            _this18.part = part;

            if (part >= 3) {
              _this18.userId = _this18.auth.userId;
            }
          });
        }
      }, {
        key: "onGoBack",
        value: function onGoBack() {
          this.router.navigate(['/all-projet']);
        }
      }, {
        key: "getNavigation",
        value: function getNavigation(link, id) {
          this.router.navigate([link + '/' + this.project._id]);
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          var _this19 = this;

          this.loading = true;
          this.projetService.deleteProject(this.project._id).then(function () {
            _this19.loading = false;

            _this19.router.navigate(['/all-projet']);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.partSub.unsubscribe();
        }
      }]);

      return ViewProjectComponent;
    }();

    ViewProjectComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_projet_service__WEBPACK_IMPORTED_MODULE_4__["ProjetService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    ViewProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-project',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-project/view-project.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-project.component.scss */
      "./src/app/view-project/view-project.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_projet_service__WEBPACK_IMPORTED_MODULE_4__["ProjetService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], ViewProjectComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map