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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ".example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  .example-card{\r\n      margin-top: 4px;\r\n  }\r\n  \r\n  .example-header-image { \r\n    background-size: cover;\r\n  }\r\n  \r\n  .title{\r\n      font-weight: bold;\r\n  }\r\n  \r\n  .img-article{\r\n      height: 350px;\r\n  }\r\n  \r\n  .action-buttons{\r\n      text-align: center;\r\n  }\r\n  \r\n  .example-container {\r\n      width: 100%;\r\n      height: auto;\r\n      border: 1px solid rgba(111, 111, 111, 0.50);\r\n  }\r\n  \r\n  .example-sidenav-content {\r\n      display: flex;\r\n      height: 75%;\r\n      align-items: center;\r\n      justify-content: center;\r\n  }\r\n  \r\n  .example-sidenav {\r\n      padding: 20px;\r\n  }\r\n  \r\n  .source-name {\r\n      margin-left:5px; \r\n  }\r\n  \r\n  .list-item:hover{\r\n      cursor: pointer;\r\n      background-color: #3f51b5;\r\n      color: white;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCOztFQUVBO01BQ0ksZUFBZTtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtNQUNJLGlCQUFpQjtFQUNyQjs7RUFFQTtNQUNJLGFBQWE7RUFDakI7O0VBRUE7TUFDSSxrQkFBa0I7RUFDdEI7O0VBRUE7TUFDSSxXQUFXO01BQ1gsWUFBWTtNQUNaLDJDQUEyQztFQUMvQzs7RUFFQTtNQUNJLGFBQWE7TUFDYixXQUFXO01BQ1gsbUJBQW1CO01BQ25CLHVCQUF1QjtFQUMzQjs7RUFFQTtNQUNJLGFBQWE7RUFDakI7O0VBRUE7TUFDSSxlQUFlO0VBQ25COztFQUVBO01BQ0ksZUFBZTtNQUNmLHlCQUF5QjtNQUN6QixZQUFZO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNhcmR7XHJcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBcclxuICAudGl0bGV7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuaW1nLWFydGljbGV7XHJcbiAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3Rpb24tYnV0dG9uc3tcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEsIDAuNTApO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDc1JTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuc291cmNlLW5hbWUge1xyXG4gICAgICBtYXJnaW4tbGVmdDo1cHg7IFxyXG4gIH1cclxuICBcclxuICAubGlzdC1pdGVtOmhvdmVye1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar color=\"primary\">\n  <button mat-button (click)=\"sidenav.open ()\" ><mat-icon>menu</mat-icon></button>\n  <span>News Headlines</span>  \n  <span class=\"example-spacer\"></span>\n  <!-- <button mat-button [matMenuTriggerFor]=\"appMenu\"><mat-icon>settings</mat-icon></button> -->\n</mat-toolbar>\n<!-- <mat-menu #appMenu=\"matMenu\">\n  <button mat-menu-item> Settings </button>\n  <button mat-menu-item> Help </button>\n</mat-menu> -->\n<mat-sidenav-container class=\"example-container\">\n\n  <mat-sidenav #sidenav class=\"example-sidenav\">\n    <mat-list class=\"list-nav\">\n        <mat-list-item class=\"list-item\" *ngFor=\"let source of mSources\" (click)=\"searchArticles(source.id);sidenav.close();\">\n\n          <div mat-card-avatar [ngStyle]=\"{'background-image': 'url(../assets/images/'+ source.id +'.png)'}\" class=\"example-header-image\"></div>\n\n          <span class=\"source-name\"> {{source.name}}</span>\n\n        </mat-list-item>\n    </mat-list>\n  </mat-sidenav>\n  <mat-card class=\"example-card\"  *ngFor=\"let article of mArticles\">\n    <mat-card-header>\n      <div mat-card-avatar [ngStyle]=\"{'background-image': 'url(../assets/images/'+ article.source.id +'.png)'}\" class=\"example-header-image\"></div>\n      <mat-card-title class=\"title\">{{article.title}}</mat-card-title>\n      <mat-card-subtitle>{{article.source.name}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image class=\"img-article\" src={{article.urlToImage}} alt=\"\">\n    <mat-card-content>\n      <p>\n        {{article.description}}\n      </p>\n    </mat-card-content>\n    <mat-card-actions class=\"action-buttons\">\n      <button mat-button color=\"primary\"><mat-icon>thumb_up_alt</mat-icon> 12 Likes</button>\n      <button mat-button color=\"primary\"><mat-icon>comment</mat-icon> Comments</button>\n      <button mat-button color=\"primary\"><mat-icon>share</mat-icon> Share</button>\n      <a mat-button color=\"primary\" href={{article.url}} target=\"_blank\" ><mat-icon>visibility</mat-icon> More</a>\n    </mat-card-actions>\n  </mat-card>\n</mat-sidenav-container>\n\n<a href=\"https://newsapi.org/\">Powered by NewsAPI.org</a>\n\n<p title=\"Powered by NewsAPI\">\n  Special Thanks to NewsAPI allows me to use API for Education purpose. Developer: Prasanth Kolanchi, Chennai.\n  </p>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-api.service */ "./src/app/news-api.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(newsapi) {
        this.newsapi = newsapi;
        console.log('app component constructor called');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //load articles
        this.newsapi.initArticles().subscribe(function (data) { return _this.mArticles = data['articles']; });
        //load news sources
        this.newsapi.initSources().subscribe(function (data) { return _this.mSources = data['sources']; });
    };
    AppComponent.prototype.searchArticles = function (source) {
        var _this = this;
        console.log("selected source is: " + source);
        this.newsapi.getArticlesByID(source).subscribe(function (data) { return _this.mArticles = data['articles']; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_api_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _news_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-api.service */ "./src/app/news-api.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            ],
            providers: [_news_api_service__WEBPACK_IMPORTED_MODULE_6__["NewsApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/news-api.service.ts":
/*!*************************************!*\
  !*** ./src/app/news-api.service.ts ***!
  \*************************************/
/*! exports provided: NewsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsApiService", function() { return NewsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NewsApiService = /** @class */ (function () {
    function NewsApiService(http) {
        this.http = http;
        this.api_key = 'af0bb2771de346b185a4343daf067355';
    }
    NewsApiService.prototype.initSources = function () {
        return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
    };
    NewsApiService.prototype.initArticles = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
    };
    NewsApiService.prototype.getArticlesByID = function (source) {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
    };
    NewsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsApiService);
    return NewsApiService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular\sampleTry\news-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map