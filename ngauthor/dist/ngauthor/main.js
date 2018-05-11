(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _newauthor_newauthor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newauthor/newauthor.component */ "./src/app/newauthor/newauthor.component.ts");
/* harmony import */ var _editauthor_editauthor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editauthor/editauthor.component */ "./src/app/editauthor/editauthor.component.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotes/quotes.component */ "./src/app/quotes/quotes.component.ts");
/* harmony import */ var _quotesadd_quotesadd_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quotesadd/quotesadd.component */ "./src/app/quotesadd/quotesadd.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'new', component: _newauthor_newauthor_component__WEBPACK_IMPORTED_MODULE_2__["NewauthorComponent"] },
    { path: 'edit/:id', component: _editauthor_editauthor_component__WEBPACK_IMPORTED_MODULE_3__["EditauthorComponent"] },
    { path: 'listing', component: _listing_listing_component__WEBPACK_IMPORTED_MODULE_4__["ListingComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'quotes/:id', component: _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_6__["QuotesComponent"] },
    { path: 'write/:id', component: _quotesadd_quotesadd_component__WEBPACK_IMPORTED_MODULE_7__["QuotesaddComponent"] },
    // { path: '', component: HomeComponent},
    // { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{ title }}!\n  </h1>\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Quote Ranks';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./author.service */ "./src/app/author.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _newauthor_newauthor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newauthor/newauthor.component */ "./src/app/newauthor/newauthor.component.ts");
/* harmony import */ var _editauthor_editauthor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editauthor/editauthor.component */ "./src/app/editauthor/editauthor.component.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quotes/quotes.component */ "./src/app/quotes/quotes.component.ts");
/* harmony import */ var _quotesadd_quotesadd_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quotesadd/quotesadd.component */ "./src/app/quotesadd/quotesadd.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _newauthor_newauthor_component__WEBPACK_IMPORTED_MODULE_7__["NewauthorComponent"],
                _editauthor_editauthor_component__WEBPACK_IMPORTED_MODULE_8__["EditauthorComponent"],
                _listing_listing_component__WEBPACK_IMPORTED_MODULE_9__["ListingComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_11__["QuotesComponent"],
                _quotesadd_quotesadd_component__WEBPACK_IMPORTED_MODULE_12__["QuotesaddComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [
                _author_service__WEBPACK_IMPORTED_MODULE_4__["AuthorService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/author.service.ts":
/*!***********************************!*\
  !*** ./src/app/author.service.ts ***!
  \***********************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorService = /** @class */ (function () {
    function AuthorService(_http) {
        this._http = _http;
        this.baseUrl = '/authors/';
    }
    AuthorService.prototype.getAll = function () {
        return this._http.get(this.baseUrl);
    };
    AuthorService.prototype.getOne = function (id) {
        return this._http.get(this.baseUrl + id);
    };
    AuthorService.prototype.addNew = function (newItem) {
        return this._http.post(this.baseUrl, newItem);
    };
    AuthorService.prototype.update = function (id, item) {
        return this._http.put(this.baseUrl + id, item, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };
    AuthorService.prototype.delete = function (id) {
        return this._http.delete(this.baseUrl + id);
    };
    AuthorService.prototype.vote = function (id, quote) {
        console.log(id, quote);
        return this._http.post(this.baseUrl + 'quotes/vote/' + id, quote);
    };
    AuthorService.prototype.deleteQuote = function (id, quote_id) {
        return this._http.delete(this.baseUrl + 'quotes/' + id + '/' + quote_id);
    };
    AuthorService.prototype.createQuote = function (id, quote) {
        return this._http.post(this.baseUrl + 'quotes/' + id, quote);
    };
    AuthorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthorService);
    return AuthorService;
}());



/***/ }),

/***/ "./src/app/editauthor/editauthor.component.css":
/*!*****************************************************!*\
  !*** ./src/app/editauthor/editauthor.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/editauthor/editauthor.component.html":
/*!******************************************************!*\
  !*** ./src/app/editauthor/editauthor.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\">Home</a>\n<h3>Editing...</h3>\n<p>{{message}}</p>\n<p>{{ author | json}}</p>\n<form (submit)=\"onSubmit()\">\n  <label>\n    Author name:\n    <input type=\"text\" name=\"author.name\" [(ngModel)]=\"author.name\">\n  </label>\n  \n  <input type=\"submit\" value=\"Submit\" />\n</form>"

/***/ }),

/***/ "./src/app/editauthor/editauthor.component.ts":
/*!****************************************************!*\
  !*** ./src/app/editauthor/editauthor.component.ts ***!
  \****************************************************/
/*! exports provided: EditauthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditauthorComponent", function() { return EditauthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../author.service */ "./src/app/author.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditauthorComponent = /** @class */ (function () {
    function EditauthorComponent(_authorService, _route) {
        this._authorService = _authorService;
        this._route = _route;
        this.message = '';
        this.author = { name: '' };
        console.log('constructor');
    }
    EditauthorComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('init');
        this._route.params.subscribe(function (params) {
            _this.getAuthor(params['id']);
        });
    };
    EditauthorComponent.prototype.getAuthor = function (id) {
        var _this = this;
        var obsItem = this._authorService.getOne(id);
        obsItem.subscribe(function (data) {
            if (data['message'] === 'Success') {
                _this.author = data['data'][0];
            }
            else {
                console.log(data);
            }
        });
    };
    EditauthorComponent.prototype.onSubmit = function () {
        var _this = this;
        var obsItem = this._authorService.update(this.author._id, this.author);
        obsItem.subscribe(function (data) {
            console.log(data);
            _this.message = data['message'];
            // this.author = {name: ''};
        });
    };
    EditauthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editauthor',
            template: __webpack_require__(/*! ./editauthor.component.html */ "./src/app/editauthor/editauthor.component.html"),
            styles: [__webpack_require__(/*! ./editauthor.component.css */ "./src/app/editauthor/editauthor.component.css")]
        }),
        __metadata("design:paramtypes", [_author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditauthorComponent);
    return EditauthorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/new']\">Add  an author</a>\n<app-listing></app-listing>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/listing/listing.component.css":
/*!***********************************************!*\
  !*** ./src/app/listing/listing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listing/listing.component.html":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let a of authors\">\n    <div>\n      <span>{{a.name}}</span>\n      <button routerLink = \"/quotes/{{a._id}}\">View quotes</button>\n      <button routerLink = \"/edit/{{a._id}}\" >Edit</button>\n      <button (click)=\"onDelete(a._id)\" >Delete</button>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/listing/listing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/listing/listing.component.ts ***!
  \**********************************************/
/*! exports provided: ListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingComponent", function() { return ListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../author.service */ "./src/app/author.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListingComponent = /** @class */ (function () {
    function ListingComponent(_authorService) {
        this._authorService = _authorService;
    }
    ListingComponent.prototype.ngOnInit = function () {
        this.getAuthors();
    };
    ListingComponent.prototype.getAuthors = function () {
        var _this = this;
        var obsItem = this._authorService.getAll();
        obsItem.subscribe(function (data) {
            _this.authors = data['data'];
        });
    };
    ListingComponent.prototype.onDelete = function (id) {
        var _this = this;
        console.log(id);
        var obsItem = this._authorService.delete(id);
        obsItem.subscribe(function (data) {
            console.log(data);
            _this.getAuthors();
        });
    };
    ListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__(/*! ./listing.component.html */ "./src/app/listing/listing.component.html"),
            styles: [__webpack_require__(/*! ./listing.component.css */ "./src/app/listing/listing.component.css")]
        }),
        __metadata("design:paramtypes", [_author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"]])
    ], ListingComponent);
    return ListingComponent;
}());



/***/ }),

/***/ "./src/app/newauthor/newauthor.component.css":
/*!***************************************************!*\
  !*** ./src/app/newauthor/newauthor.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/newauthor/newauthor.component.html":
/*!****************************************************!*\
  !*** ./src/app/newauthor/newauthor.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]=\"['/home']\">Home</a>\n<h3>Favoite authors</h3>\n<p>{{message}}</p>\n<form (submit)=\"onSubmit()\">\n  <label>\n    Author name:\n    <input type=\"text\" name=\"author.name\" [(ngModel)]=\"author.name\">\n  </label>\n  \n  <input type=\"submit\" value=\"Submit\" />\n</form>"

/***/ }),

/***/ "./src/app/newauthor/newauthor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/newauthor/newauthor.component.ts ***!
  \**************************************************/
/*! exports provided: NewauthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewauthorComponent", function() { return NewauthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../author.service */ "./src/app/author.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewauthorComponent = /** @class */ (function () {
    function NewauthorComponent(_authorService, _router) {
        this._authorService = _authorService;
        this._router = _router;
        this.message = '';
    }
    NewauthorComponent.prototype.ngOnInit = function () {
        this.author = { name: '' };
    };
    NewauthorComponent.prototype.onSubmit = function () {
        var _this = this;
        var obsItem = this._authorService.addNew(this.author);
        obsItem.subscribe(function (data) {
            console.log(data);
            _this.message = data['message'];
            if (data['message'] === 'Success') {
                _this.message = ': ' + _this.author.name + ' was added!';
                _this.author = { name: '' };
                _this.goHome();
            }
        });
    };
    NewauthorComponent.prototype.goHome = function () {
        this._router.navigate(['/']);
    };
    NewauthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newauthor',
            template: __webpack_require__(/*! ./newauthor.component.html */ "./src/app/newauthor/newauthor.component.html"),
            styles: [__webpack_require__(/*! ./newauthor.component.css */ "./src/app/newauthor/newauthor.component.css")]
        }),
        __metadata("design:paramtypes", [_author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewauthorComponent);
    return NewauthorComponent;
}());



/***/ }),

/***/ "./src/app/quotes/quotes.component.css":
/*!*********************************************!*\
  !*** ./src/app/quotes/quotes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quotes/quotes.component.html":
/*!**********************************************!*\
  !*** ./src/app/quotes/quotes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]=\"['/']\">Home</a>  \n<div *ngIf=\"author\">\n  <h3>Quotes by {{author.name}}</h3>\n  <a routerLink='/write/{{author._id}}'>New Quote</a>\n  <table>\n    <tr>\n      <th>Quote</th>\n      <th>Votes</th>\n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let q of author.quotes\">\n      <td>{{q.content}}</td>\n      <td>{{q.vote}}</td>\n      <td>\n        <button (click)=\"vote(q._id, 1)\">Vote up</button>\n        <button (click)=\"vote(q._id, -1)\">Vote down</button>\n        <button (click)=\"onDelete(q._id)\">Delete</button>\n      </td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/quotes/quotes.component.ts":
/*!********************************************!*\
  !*** ./src/app/quotes/quotes.component.ts ***!
  \********************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../author.service */ "./src/app/author.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesComponent = /** @class */ (function () {
    function QuotesComponent(_authorService, _route) {
        this._authorService = _authorService;
        this._route = _route;
        // this.author = {name: ''};
    }
    QuotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.getAuthor(params['id']);
        });
    };
    QuotesComponent.prototype.getAuthor = function (id) {
        var _this = this;
        var obsItem = this._authorService.getOne(id);
        obsItem.subscribe(function (data) {
            if (data['message'] === 'Success') {
                _this.author = data['data'][0];
            }
            else {
                console.log(data);
            }
        });
    };
    QuotesComponent.prototype.vote = function (id, vote) {
        var _this = this;
        var quote = { 'quote_id': id, 'vote': vote };
        var obsItem = this._authorService.vote(this.author._id, quote);
        obsItem.subscribe(function (data) {
            console.log(data);
            _this.author = data['data'];
        });
    };
    QuotesComponent.prototype.onDelete = function (quote_id) {
        var _this = this;
        var obsItem = this._authorService.deleteQuote(this.author._id, quote_id);
        obsItem.subscribe(function (data) {
            console.log(data);
            _this.author = data['data'];
        });
    };
    QuotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotes',
            template: __webpack_require__(/*! ./quotes.component.html */ "./src/app/quotes/quotes.component.html"),
            styles: [__webpack_require__(/*! ./quotes.component.css */ "./src/app/quotes/quotes.component.css")]
        }),
        __metadata("design:paramtypes", [_author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], QuotesComponent);
    return QuotesComponent;
}());



/***/ }),

/***/ "./src/app/quotesadd/quotesadd.component.css":
/*!***************************************************!*\
  !*** ./src/app/quotesadd/quotesadd.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quotesadd/quotesadd.component.html":
/*!****************************************************!*\
  !*** ./src/app/quotesadd/quotesadd.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/home']\">Home</a>\n<div *ngIf=\"author\">\n  <h3>Provide a quote by {{author.name}}</h3>\n  <p>{{message}}</p>\n  <form (submit)=\"onSubmit($event)\" >\n      <label>\n        Quote:\n        <input type=\"text\" name=\"content\" />\n      </label>\n      \n      <input type=\"submit\" value=\"Submit\" />\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/quotesadd/quotesadd.component.ts":
/*!**************************************************!*\
  !*** ./src/app/quotesadd/quotesadd.component.ts ***!
  \**************************************************/
/*! exports provided: QuotesaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesaddComponent", function() { return QuotesaddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../author.service */ "./src/app/author.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { FormGroup } from '@angular/forms';
var QuotesaddComponent = /** @class */ (function () {
    // myform: FormGroup;
    function QuotesaddComponent(_authorService, _route, _router) {
        this._authorService = _authorService;
        this._route = _route;
        this._router = _router;
        this.quote = { content: '', vote: 0 };
        this.message = '';
        this.message = '';
    }
    QuotesaddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.getAuthor(params['id']);
        });
    };
    QuotesaddComponent.prototype.getAuthor = function (id) {
        var _this = this;
        var obsItem = this._authorService.getOne(id);
        obsItem.subscribe(function (data) {
            if (data['message'] === 'Success') {
                _this.author = data['data'][0];
            }
            else {
                console.log(data);
            }
        });
    };
    QuotesaddComponent.prototype.onSubmit = function (event) {
        var _this = this;
        console.log(event);
        // event.preventDefault();
        console.log(event.target.content.value);
        this.quote.content = event.target.content.value;
        if (this.quote.content.length < 4) {
            this.message = 'Quote should be longer than 3 characters';
        }
        else {
            var obsItem = this._authorService.createQuote(this.author._id, this.quote);
            obsItem.subscribe(function (data) {
                if (data['message'] === 'Success') {
                    _this._router.navigate(['/']);
                    console.log(data);
                }
                else {
                    console.log(data);
                    _this.message = data['message'];
                }
            });
        }
    };
    QuotesaddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotesadd',
            template: __webpack_require__(/*! ./quotesadd.component.html */ "./src/app/quotesadd/quotesadd.component.html"),
            styles: [__webpack_require__(/*! ./quotesadd.component.css */ "./src/app/quotesadd/quotesadd.component.css")]
        }),
        __metadata("design:paramtypes", [_author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuotesaddComponent);
    return QuotesaddComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chanthy/Desktop/dj/mean/authorcrud/ngauthor/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map