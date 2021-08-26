(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HiralThadeshwar\Documents\GitHub\evaluation-management\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.component */ "jSa5");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class DataService {
    constructor(http) {
        this.http = http;
        this.config = new _config_component__WEBPACK_IMPORTED_MODULE_1__["ConfigComp"]();
    }
    getData() {
        return this.http.get(this.config.templateAPI);
    }
    postData(data) {
        return this.http.post(this.config.templateAPI, data);
    }
    getEvalData() {
        return this.http.get(this.config.evaluationAPI);
    }
    getTechData(data) {
        return this.http.get(this.config.templateAPI + '/' + data);
    }
    postEvalData(data) {
        return this.http.post(this.config.evaluationAPI, data);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sq7+":
/*!***********************************************!*\
  !*** ./src/app/evaluationDetail.component.ts ***!
  \***********************************************/
/*! exports provided: EvaluationDetailComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationDetailComp", function() { return EvaluationDetailComp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function EvaluationDetailComp_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EvaluationDetailComp_tr_31_Template_input_ngModelChange_5_listener($event) { const skill_r1 = ctx.$implicit; return skill_r1.EVALSCORE = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.EVALSKILL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", skill_r1.EVALSCORE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r1.EVALSCORE, " ");
} }
class EvaluationDetailComp {
    constructor(ds) {
        this.ds = ds;
        this.today = Date.now();
        this.agree = true;
        this.uniquenames = [];
        this.evalarr = [];
        this.resObj = {
            APPLICANTNAME: '',
            EVALUATORNAME: '',
            EVALNAME: '',
        };
        this.uniqueskills = [];
        this.callDataServer();
    }
    callDataServer() {
        this.ds.getEvalData().subscribe((res) => {
            this.slist = res;
            console.log(this.slist);
            console.log(this.slist.EVALUATION);
            this.resObj = {
                APPLICANTNAME: this.ds.applicantName,
                EVALUATORNAME: this.ds.evaluatorName,
                EVALNAME: this.ds.technology,
            };
            this.slist.EVALUATION.forEach((element) => {
                if (element.APPLICANTNAME === this.ds.applicantName) {
                    let obj = {
                        EVALSCORE: element.EVALSCORE,
                        EVALSKILL: element.EVALSKILL,
                    };
                    this.uniqueskills.push(obj);
                }
            });
            console.log('uni skills : ', this.uniqueskills);
        }, (err) => {
            console.log('Error : ', err);
        });
    }
}
EvaluationDetailComp.ɵfac = function EvaluationDetailComp_Factory(t) { return new (t || EvaluationDetailComp)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
EvaluationDetailComp.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvaluationDetailComp, selectors: [["app-eval-details"]], decls: 32, vars: 8, consts: [[1, "container"], [1, "table"], ["scope", "col", "colspan", "3"], ["for", ""], ["disabled", "", 1, "form-control", "labelstyle", 3, "value"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "range", "min", "0", "max", "10", "step", "1", 3, "ngModel", "ngModelChange"]], template: function EvaluationDetailComp_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Applicant's Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Evaluators's Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Technology : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Skills :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Scores :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, EvaluationDetailComp_tr_31_Template, 7, 3, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.resObj.APPLICANTNAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.resObj.EVALUATORNAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", " ", ctx.resObj.EVALNAME, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "  ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 5, ctx.today, "dd/MMM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.uniqueskills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\n        width: 70%;\n        margin: 0% auto;\n      }\n      input[_ngcontent-%COMP%] {\n        height: 55px;\n        width: 100%;\n      }\n      th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n        vertical-align: middle;\n      }\n      .labelstyle[_ngcontent-%COMP%] {\n        width: 100%;\n        border: 1px solid lightgrey;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EvaluationDetailComp, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-eval-details',
                template: `
    <div class="container">
      <table class="table">
        <tbody>
          <tr>
            <th scope="col" colspan="3">
              <label for="">Applicant's Name : </label>

              <input
                class="form-control labelstyle"
                value="{{ resObj.APPLICANTNAME }}"
                disabled
              />
            </th>
          </tr>
          <tr>
            <th scope="col" colspan="3">
              <label for="">Evaluators's Name : </label>

              <input
                class="form-control labelstyle"
                value="{{ resObj.EVALUATORNAME }}"
                disabled
              />
            </th>
          </tr>
          <tr>
            <th scope="col" colspan="3">
              <label for="">Technology : </label>

              <input
                class="form-control labelstyle"
                value=" {{ resObj.EVALNAME }}"
                disabled
              />
            </th>
          </tr>
          <tr>
            <th scope="col" colspan="3">
              <label for="">Date : </label>

              <input
                class="form-control labelstyle"
                value="  {{ today | date: 'dd/MMM/yyyy' }}"
                disabled
              />
            </th>
          </tr>

          <tr>
            <th scope="col">
              <label for="">Skills :</label>
            </th>
            <th scope="col">
              <label for="">Scores :</label>
            </th>
          </tr>
          <tr *ngFor="let skill of uniqueskills">
            <td scope="col">
              <label for="">{{ skill.EVALSKILL }}</label>
            </td>
            <td scope="col">
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                [(ngModel)]="skill.EVALSCORE"
              />
              {{ skill.EVALSCORE }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
                styles: [
                    `
      table {
        width: 70%;
        margin: 0% auto;
      }
      input {
        height: 55px;
        width: 100%;
      }
      th,
      td {
        vertical-align: middle;
      }
      .labelstyle {
        width: 100%;
        border: 1px solid lightgrey;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["createevaluation"]; };
const _c1 = function () { return ["allevaluation"]; };
const _c2 = function () { return ["createtemplate"]; };
const _c3 = function () { return ["alltemplate"]; };
class AppComponent {
    constructor() {
        this.title = 'evaluation-management';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 39, vars: 8, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["onload", "init()"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "static-top"], [1, "container"], ["href", "#", 1, "navbar-brand", "navbar-left"], ["src", "../assets/images/header-icon.png", "alt", "", 1, "img-responsive"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-right", 2, "margin-right", "2%"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse", "navbar-right"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown"], ["data-toggle", "dropdown", "href", "#", 1, "nav-link", "main", "dropdown-toggle", "active"], [1, "caret"], [1, "dropdown-menu"], [1, "nav-item"], ["href", "#", 1, "nav-link", "drop", 3, "routerLink"], ["data-toggle", "dropdown", "href", "#", 1, "nav-link", "main", "dropdown-toggle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Evaluation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Create Evaluation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "All Evaluations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Create Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "All Templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */", "nav[_ngcontent-%COMP%] {\n        padding: 0%;\n        border: 0px solid transparent;\n        margin-bottom: 1%;\n      }\n      a[_ngcontent-%COMP%]:link.main {\n        margin: 0%;\n        font-family: Arial, Helvetica, sans-serif;\n        text-decoration: none;\n        padding: 20px;\n        text-align: center;\n        color: black;\n      }\n      a[_ngcontent-%COMP%]:hover.main, a[_ngcontent-%COMP%]:visited.main {\n        font-family: Arial, Helvetica, sans-serif;\n        color: #3f6fac;\n        background-color: #f3f3f3;\n        \n      }\n      a[_ngcontent-%COMP%]:active.main {\n        font-family: Arial, Helvetica, sans-serif;\n        color: #3f6fac;\n        background-color: #94dbf7;\n      }\n      a[_ngcontent-%COMP%]:link.drop {\n        margin: 0%;\n        font-family: Arial, Helvetica, sans-serif;\n        text-decoration: none;\n        text-align: center;\n        color: black;\n      }\n      a[_ngcontent-%COMP%]:hover.drop, a[_ngcontent-%COMP%]:visited.drop {\n        font-family: Arial, Helvetica, sans-serif;\n        color: #3f6fac;\n        background-color: #f3f3f3;\n      }\n      .active.main.nav-link[_ngcontent-%COMP%] {\n        background-color: #94dbf7;\n        padding: 20px;\n        margin: 0%;\n        text-decoration: none;\n        text-align: center;\n        font-family: Arial, Helvetica, sans-serif;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TJQ1":
/*!*******************************************!*\
  !*** ./src/app/DismissAlert.component.ts ***!
  \*******************************************/
/*! exports provided: DismissAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DismissAlertComponent", function() { return DismissAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["alert"];
class DismissAlertComponent {
    closeAlert() {
        this.alert.nativeElement.classList.remove('show');
    }
}
DismissAlertComponent.ɵfac = function DismissAlertComponent_Factory(t) { return new (t || DismissAlertComponent)(); };
DismissAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DismissAlertComponent, selectors: [["dismiss-alert"]], viewQuery: function DismissAlertComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.alert = _t.first);
    } }, decls: 30, vars: 0, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://fonts.googleapis.com/css?family=Roboto|Varela+Round")], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css")], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://fonts.googleapis.com/icon?family=Material+Icons")], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")], ["id", "myModal", 1, "modal", "fade"], [1, "modal-dialog", "modal-confirm"], [1, "modal-content"], [1, "modal-header", "flex-column"], [1, "icon-box"], [1, "material-icons"], [1, "modal-title", "w-100"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close"], [1, "modal-body"], [1, "modal-footer", "justify-content-center"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-danger"]], template: function DismissAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bootstrap Delete Confirmation Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\uE5CD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Are you sure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Do you really want to delete these records? This process cannot be undone. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n        font-family: \"Varela Round\", sans-serif;\n      }\n      .modal-confirm[_ngcontent-%COMP%] {\n        color: #636363;\n        width: 400px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n        padding: 20px;\n        border-radius: 5px;\n        border: none;\n        text-align: center;\n        font-size: 14px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n        border-bottom: none;\n        position: relative;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        text-align: center;\n        font-size: 26px;\n        margin: 30px 0 -10px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n        position: absolute;\n        top: -5px;\n        right: -2px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n        color: #999;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n        border: none;\n        text-align: center;\n        border-radius: 5px;\n        font-size: 13px;\n        padding: 10px 15px 25px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #999;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n        width: 80px;\n        height: 80px;\n        margin: 0 auto;\n        border-radius: 50%;\n        z-index: 9;\n        text-align: center;\n        border: 3px solid #f15e5e;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        color: #f15e5e;\n        font-size: 46px;\n        display: inline-block;\n        margin-top: 13px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n        color: #fff;\n        border-radius: 4px;\n        background: #60c7c1;\n        text-decoration: none;\n        transition: all 0.4s;\n        line-height: normal;\n        min-width: 120px;\n        border: none;\n        min-height: 40px;\n        border-radius: 3px;\n        margin: 0 5px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n        background: #c1c1c1;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover, .modal-confirm[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:focus {\n        background: #a8a8a8;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n        background: #f15e5e;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover, .modal-confirm[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:focus {\n        background: #ee3535;\n      }\n      .trigger-btn[_ngcontent-%COMP%] {\n        display: inline-block;\n        margin: 100px auto;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DismissAlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dismiss-alert',
                templateUrl: './dismiss-alert.component.html'
            }]
    }], null, { alert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['alert', { static: true }]
        }] }); })();


/***/ }),

/***/ "XDvr":
/*!**********************************************!*\
  !*** ./src/app/create-template.component.ts ***!
  \**********************************************/
/*! exports provided: CreateTemplateComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTemplateComp", function() { return CreateTemplateComp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






const _c0 = function (a0) { return { show: a0 }; };
const _c1 = function () { return { width: "70%", margin: "0% auto" }; };
const _c2 = function () { return { "vertical-align": "middle" }; };
const _c3 = function () { return { height: "55px" }; };
const _c4 = function () { return { "margin-top": "2%" }; };
class CreateTemplateComp {
    constructor(ds, router) {
        this.ds = ds;
        this.router = router;
        this.tarea = '';
        this.techarr = [];
        this.uniquetech = [];
        this.editUser = false;
        this.index = 0;
        this.id = 0;
        this.sname = [];
        this.NEW = [];
        this.UPDATE = [];
        this.callDataServer();
    }
    callDataServer() {
        this.ds.getData().subscribe((res) => {
            this.templist = res;
            this.slist = res;
            console.log(this.slist);
            console.log(this.slist.EVALUATION_TEMP);
            this.slist.EVALUATION_TEMP.forEach((element) => {
                this.techarr.push(element.TEMPTECHNAME);
            });
            this.uniquetech = this.techarr.filter((x, i, a) => a.indexOf(x) == i);
            console.log('unique arr : ', this.uniquetech);
            console.log(this.tarea);
            this.slist.EVALUATION_TEMP.forEach((element) => {
                if (element.TEMPTECHNAME === this.tarea) {
                    this.sname.push(element.TEMPSKILL);
                }
            });
            console.log(this.sname);
        }, (err) => {
            console.log('Error : ', err);
        });
    }
    redirectFun() {
        this.router.navigate(['alltemplate']);
    }
    addSkillHandler(skill) {
        let resobj = {
            TEMPSKILL: skill,
            TEMPTECHNAME: this.tarea,
        };
        this.sname.push(skill);
        console.log(skill);
        this.NEW.push(resobj);
        console.log(this.NEW);
    }
    submitHandler(skill) {
        if (skill && this.tarea) {
            console.log('tech : ', this.tarea);
            let resobj = {
                TEMPSKILL: skill,
                TEMPTECHNAME: this.tarea,
            };
            this.sname.push(skill);
            console.log(skill);
            this.NEW.push(resobj);
            console.log(this.NEW);
            let jsonObj = {
                NEW: this.NEW,
                UPDATE: [],
                DELETE: [],
            };
            let obj = {
                EVALUATION_TEMP: jsonObj,
            };
            console.log(jsonObj);
            this.ds.postData(obj).subscribe((res) => {
                console.log(res);
                this.slist = res;
                this.error = false;
                this.showModal = true;
                document.getElementById('technology').nodeValue = '';
                document.getElementById('skillname').nodeValue = '';
            }, (err) => {
                this.error = true;
                this.showFailModal = 'true';
            });
        }
        else {
        }
    }
}
CreateTemplateComp.ɵfac = function CreateTemplateComp_Factory(t) { return new (t || CreateTemplateComp)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CreateTemplateComp.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateTemplateComp, selectors: [["app-createtemplate-comp"]], decls: 51, vars: 20, consts: [["id", "myModal", 1, "modal", "fail", "fade", 3, "ngClass"], [1, "modal-dialog", "modal-confirm", "fail"], [1, "modal-content", "fail"], [1, "modal-header", "flex-column", "fail"], [1, "icon-box", "fail"], [1, "material-icons", "fail"], [1, "fail", "modal-title", "w-100"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close", "fail", 3, "click"], [1, "modal-body", "fail"], [1, "fail", "modal-footer", "justify-content-center"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "fail", 3, "click"], ["id", "myModal", 1, "modal", "fade", 3, "ngClass"], [1, "modal-dialog", "modal-confirm"], [1, "modal-content"], [1, "modal-header", "justify-content-center"], [1, "icon-box"], [1, "material-icons"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close", 3, "click"], [1, "modal-body", "text-center"], [1, "container"], ["ngNativeValidate", ""], [1, "table", 3, "ngStyle"], ["scope", "col", 3, "ngStyle"], ["for", "technology"], ["scope", "col", "colspan", "3"], ["id", "technology", "type", "text", "name", "techarea", "required", "", "placeholder", "Enter Technology", 1, "form-control", 3, "ngStyle", "ngModel", "ngModelChange"], [3, "ngStyle"], ["for", "skillname"], ["type", "text", "name", "skillname", "id", "skillname", "placeholder", "Enter Skill", "required", "", 1, "form-control", 3, "ngStyle", "ngModel", "ngModelChange"], ["skillname", ""], [1, "mb-3"], ["type", "submit", 1, "btn", "btn-primary", "mb-3", 3, "ngStyle", "click"]], template: function CreateTemplateComp_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\uE5CD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Error Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTemplateComp_Template_button_click_9_listener() { return [ctx.showFailModal = false]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Please check the error. Something went wrong!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTemplateComp_Template_button_click_15_listener() { return ctx.showFailModal = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\uE876");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTemplateComp_Template_button_click_24_listener() { return [ctx.showModal = false, ctx.redirectFun()]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Great!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Your technology has been added successfully.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Technology :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateTemplateComp_Template_input_ngModelChange_40_listener($event) { return ctx.tarea = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Skill :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateTemplateComp_Template_input_ngModelChange_46_listener($event) { return ctx.skill = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTemplateComp_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); return ctx.submitHandler(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Add Technology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.showFailModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.showModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c3))("ngModel", ctx.tarea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3))("ngModel", ctx.skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c4));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".modal.show[_ngcontent-%COMP%] {\n        display: block;\n      }\n      .modal-confirm[_ngcontent-%COMP%] {\n        color: #434e65;\n        width: 525px;\n        border: 1px solid gray;\n        border-radius: 5px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n        padding: 20px;\n        font-size: 16px;\n        border-radius: 5px;\n        border: none;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n        background: #8faed6;\n        border-bottom: none;\n        position: relative;\n        text-align: center;\n        margin: -20px -20px 0;\n        border-radius: 5px 5px 0 0;\n        padding: 35px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        text-align: center;\n        font-size: 36px;\n        margin: 10px 0;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n        min-height: 40px;\n        border-radius: 3px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 15px;\n        right: 15px;\n        color: #fff;\n        text-shadow: none;\n        opacity: 0.5;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n        opacity: 0.8;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n        color: #fff;\n        width: 95px;\n        height: 95px;\n        display: inline-block;\n        border-radius: 50%;\n        z-index: 9;\n        border: 5px solid #fff;\n        padding: 15px;\n        text-align: center;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        font-size: 64px;\n        margin: -4px 0 0 -4px;\n      }\n      .modal-confirm.modal-dialog[_ngcontent-%COMP%] {\n        margin-top: 80px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n        color: #fff;\n        border-radius: 4px;\n        background: #eeb711 !important;\n        text-decoration: none;\n        transition: all 0.4s;\n        line-height: normal;\n        border-radius: 30px;\n        margin-top: 10px;\n        padding: 6px 20px;\n        border: none;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n        background: #eda645 !important;\n        outline: none;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin: 1px 3px 0;\n        float: left;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        margin-left: 1px;\n        font-size: 20px;\n        float: right;\n      }\n      .trigger-btn[_ngcontent-%COMP%] {\n        display: inline-block;\n        margin: 100px auto;\n      }\n\n      .fail.modal-confirm[_ngcontent-%COMP%] {\n        color: #636363;\n        width: 400px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n        padding: 20px;\n        border-radius: 5px;\n        border: none;\n        text-align: center;\n        font-size: 14px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n        border-bottom: none;\n        background-color: #ff9999;\n        position: relative;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        text-align: center;\n        font-size: 26px;\n        margin: 30px 0 -10px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n        position: absolute;\n        top: -5px;\n        right: -2px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n        color: black;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n        border: none;\n        text-align: center;\n        border-radius: 5px;\n        font-size: 13px;\n        padding: 10px 15px 25px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #999;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n        width: 80px;\n        height: 80px;\n        margin: 0 auto;\n        border-radius: 50%;\n        z-index: 9;\n        text-align: center;\n        border: 3px solid #f15e5e;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        color: #f15e5e;\n        font-size: 46px;\n        display: inline-block;\n        margin: 0px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .fail.modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n        color: #fff;\n        border-radius: 4px;\n        background: #ff9999;\n        text-decoration: none;\n        transition: all 0.4s;\n        line-height: normal;\n        min-width: 120px;\n        border: none;\n        min-height: 40px;\n        border-radius: 3px;\n        margin: 0 5px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n        background: #ff9999;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover, .fail.modal-confirm[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:focus {\n        background: #ff9999;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n        background: #ff9999;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover, .fail.modal-confirm[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:focus {\n        background: #ff9999;\n      }\n      .btn[_ngcontent-%COMP%] {\n        text-align: center;\n        padding: 1%;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateTemplateComp, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-createtemplate-comp',
                template: `
    <div
      id="myModal"
      class="modal fail fade"
      [ngClass]="{ show: showFailModal }"
    >
      <div class="modal-dialog modal-confirm fail">
        <div class="modal-content fail">
          <div class="modal-header flex-column fail">
            <div class="icon-box fail">
              <i class="material-icons fail">&#xE5CD;</i>
            </div>
            <h4 class="fail modal-title w-100">Error Alert</h4>
            <button
              (click)="[(showFailModal = false)]"
              type="button"
              class="close fail"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div class="modal-body fail">
            <p>Please check the error. Something went wrong!</p>
          </div>
          <div class="fail modal-footer justify-content-center">
            <button
              (click)="showFailModal = false"
              type="button"
              class="btn btn-secondary fail"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <div id="myModal" class="modal fade" [ngClass]="{ show: showModal }">
      <div class="modal-dialog modal-confirm">
        <div class="modal-content">
          <div class="modal-header justify-content-center">
            <div class="icon-box">
              <i class="material-icons">&#xE876;</i>
            </div>
            <button
              type="button"
              class="close"
              (click)="[(showModal = false), redirectFun()]"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div class="modal-body text-center">
            <h4>Great!</h4>
            <p>Your technology has been added successfully.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <form ngNativeValidate>
        <table class="table" [ngStyle]="{ width: '70%', margin: '0% auto' }">
          <tbody>
            <tr>
              <th scope="col" [ngStyle]="{ 'vertical-align': 'middle' }">
                <label for="technology">Technology :</label>
              </th>
              <th scope="col" colspan="3">
                <input
                  [ngStyle]="{ height: '55px' }"
                  id="technology"
                  type="text"
                  [(ngModel)]="tarea"
                  name="techarea"
                  class="form-control"
                  required
                  placeholder="Enter Technology"
                />
              </th>
            </tr>
            <tr>
              <th [ngStyle]="{ 'vertical-align': 'middle' }">
                <label for="skillname">Skill :</label>
              </th>
              <td>
                <input
                  [ngStyle]="{ height: '55px' }"
                  type="text"
                  [(ngModel)]="skill"
                  name="skillname"
                  class="form-control"
                  id="skillname"
                  placeholder="Enter Skill"
                  #skillname
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div class="mb-3">
          <button
            class="btn"
            [ngStyle]="{ 'margin-top': '2%' }"
            type="submit"
            (click)="submitHandler(skillname.value)"
            class="btn btn-primary mb-3"
          >
            Add Technology
          </button>
        </div>
      </form>
    </div>
  `,
                styles: [
                    `
      .modal.show {
        display: block;
      }
      .modal-confirm {
        color: #434e65;
        width: 525px;
        border: 1px solid gray;
        border-radius: 5px;
      }
      .modal-confirm .modal-content {
        padding: 20px;
        font-size: 16px;
        border-radius: 5px;
        border: none;
      }
      .modal-confirm .modal-header {
        background: #8faed6;
        border-bottom: none;
        position: relative;
        text-align: center;
        margin: -20px -20px 0;
        border-radius: 5px 5px 0 0;
        padding: 35px;
      }
      .modal-confirm h4 {
        text-align: center;
        font-size: 36px;
        margin: 10px 0;
      }
      .modal-confirm .form-control,
      .modal-confirm .btn {
        min-height: 40px;
        border-radius: 3px;
      }
      .modal-confirm .close {
        position: absolute;
        top: 15px;
        right: 15px;
        color: #fff;
        text-shadow: none;
        opacity: 0.5;
      }
      .modal-confirm .close:hover {
        opacity: 0.8;
      }
      .modal-confirm .icon-box {
        color: #fff;
        width: 95px;
        height: 95px;
        display: inline-block;
        border-radius: 50%;
        z-index: 9;
        border: 5px solid #fff;
        padding: 15px;
        text-align: center;
      }
      .modal-confirm .icon-box i {
        font-size: 64px;
        margin: -4px 0 0 -4px;
      }
      .modal-confirm.modal-dialog {
        margin-top: 80px;
      }
      .modal-confirm .btn,
      .modal-confirm .btn:active {
        color: #fff;
        border-radius: 4px;
        background: #eeb711 !important;
        text-decoration: none;
        transition: all 0.4s;
        line-height: normal;
        border-radius: 30px;
        margin-top: 10px;
        padding: 6px 20px;
        border: none;
      }
      .modal-confirm .btn:hover,
      .modal-confirm .btn:focus {
        background: #eda645 !important;
        outline: none;
      }
      .modal-confirm .btn span {
        margin: 1px 3px 0;
        float: left;
      }
      .modal-confirm .btn i {
        margin-left: 1px;
        font-size: 20px;
        float: right;
      }
      .trigger-btn {
        display: inline-block;
        margin: 100px auto;
      }

      .fail.modal-confirm {
        color: #636363;
        width: 400px;
      }
      .fail.modal-confirm .modal-content {
        padding: 20px;
        border-radius: 5px;
        border: none;
        text-align: center;
        font-size: 14px;
      }
      .fail.modal-confirm .modal-header {
        border-bottom: none;
        background-color: #ff9999;
        position: relative;
      }
      .fail.modal-confirm h4 {
        text-align: center;
        font-size: 26px;
        margin: 30px 0 -10px;
      }
      .fail.modal-confirm .close {
        position: absolute;
        top: -5px;
        right: -2px;
      }
      .modal-confirm .modal-body {
        color: black;
      }
      .modal-confirm .modal-footer {
        border: none;
        text-align: center;
        border-radius: 5px;
        font-size: 13px;
        padding: 10px 15px 25px;
      }
      .fail.modal-confirm .modal-footer a {
        color: #999;
      }
      .fail.modal-confirm .icon-box {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        border-radius: 50%;
        z-index: 9;
        text-align: center;
        border: 3px solid #f15e5e;
      }
      .fail.modal-confirm .icon-box i {
        color: #f15e5e;
        font-size: 46px;
        display: inline-block;
        margin: 0px;
      }
      .fail.modal-confirm .btn,
      .fail.modal-confirm .btn:active {
        color: #fff;
        border-radius: 4px;
        background: #ff9999;
        text-decoration: none;
        transition: all 0.4s;
        line-height: normal;
        min-width: 120px;
        border: none;
        min-height: 40px;
        border-radius: 3px;
        margin: 0 5px;
      }
      .fail.modal-confirm .btn-secondary {
        background: #ff9999;
      }
      .fail.modal-confirm .btn-secondary:hover,
      .fail.modal-confirm .btn-secondary:focus {
        background: #ff9999;
      }
      .fail.modal-confirm .btn-danger {
        background: #ff9999;
      }
      .fail.modal-confirm .btn-danger:hover,
      .fail.modal-confirm .btn-danger:focus {
        background: #ff9999;
      }
      .btn {
        text-align: center;
        padding: 1%;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "YUUL":
/*!********************************************!*\
  !*** ./src/app/template-form.component.ts ***!
  \********************************************/
/*! exports provided: TemplateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateForm", function() { return TemplateForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["createtemplate"]; };
const _c1 = function () { return ["alltemplate"]; };
class TemplateForm {
}
TemplateForm.ɵfac = function TemplateForm_Factory(t) { return new (t || TemplateForm)(); };
TemplateForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateForm, selectors: [["app-template-form"]], decls: 7, vars: 4, consts: [[1, "conatiner", "contain"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "routerLink"]], template: function TemplateForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        color: crimson;\n      }\n      tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n        border: 2px solid crimson;\n      }\n      tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input.ng-valid.ng-touched[_ngcontent-%COMP%] {\n        border: 2px solid darkseagreen;\n      }\n      .contain[_ngcontent-%COMP%] {\n        padding: 1% 10%;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-template-form',
                template: `
    <div class="conatiner contain">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-secondary" [routerLink]="['createtemplate']">Create Template</button>
        <button type="button" class="btn btn-outline-secondary" [routerLink]="['alltemplate']">All Templates</button>
      </div>
    </div>
    <router-outlet></router-outlet>
    
  `,
                styles: [
                    `
      tr td span {
        color: crimson;
      }
      tr td input.ng-invalid.ng-touched {
        border: 2px solid crimson;
      }
      tr td input.ng-valid.ng-touched {
        border: 2px solid darkseagreen;
      }
      .contain {
        padding: 1% 10%;
      }
    `,
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _template_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-form.component */ "YUUL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.service */ "R7Hv");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _evaluation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./evaluation.component */ "qmAf");
/* harmony import */ var _allevaluation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./allevaluation.component */ "q6no");
/* harmony import */ var _alltemplate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./alltemplate.component */ "td0Y");
/* harmony import */ var _create_evaluation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-evaluation.component */ "v4WI");
/* harmony import */ var _DismissAlert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DismissAlert.component */ "TJQ1");
/* harmony import */ var _create_template_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-template.component */ "XDvr");
/* harmony import */ var _tech_specific_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tech-specific.component */ "rWOM");
/* harmony import */ var _config_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./config.component */ "jSa5");
/* harmony import */ var _evaluationDetail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./evaluationDetail.component */ "Sq7+");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _template_form_component__WEBPACK_IMPORTED_MODULE_4__["TemplateForm"],
        _evaluation_component__WEBPACK_IMPORTED_MODULE_8__["EvaluationComp"],
        _allevaluation_component__WEBPACK_IMPORTED_MODULE_9__["AllEvaluationComp"],
        _alltemplate_component__WEBPACK_IMPORTED_MODULE_10__["AllTemplateComp"],
        _create_evaluation_component__WEBPACK_IMPORTED_MODULE_11__["CreateEvaluationComp"],
        _DismissAlert_component__WEBPACK_IMPORTED_MODULE_12__["DismissAlertComponent"],
        _create_template_component__WEBPACK_IMPORTED_MODULE_13__["CreateTemplateComp"],
        _tech_specific_component__WEBPACK_IMPORTED_MODULE_14__["TechnologySpecificComp"],
        _config_component__WEBPACK_IMPORTED_MODULE_15__["ConfigComp"],
        _evaluationDetail_component__WEBPACK_IMPORTED_MODULE_16__["EvaluationDetailComp"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _template_form_component__WEBPACK_IMPORTED_MODULE_4__["TemplateForm"],
                    _evaluation_component__WEBPACK_IMPORTED_MODULE_8__["EvaluationComp"],
                    _allevaluation_component__WEBPACK_IMPORTED_MODULE_9__["AllEvaluationComp"],
                    _alltemplate_component__WEBPACK_IMPORTED_MODULE_10__["AllTemplateComp"],
                    _create_evaluation_component__WEBPACK_IMPORTED_MODULE_11__["CreateEvaluationComp"],
                    _DismissAlert_component__WEBPACK_IMPORTED_MODULE_12__["DismissAlertComponent"],
                    _create_template_component__WEBPACK_IMPORTED_MODULE_13__["CreateTemplateComp"],
                    _tech_specific_component__WEBPACK_IMPORTED_MODULE_14__["TechnologySpecificComp"],
                    _config_component__WEBPACK_IMPORTED_MODULE_15__["ConfigComp"],
                    _evaluationDetail_component__WEBPACK_IMPORTED_MODULE_16__["EvaluationDetailComp"]
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
                providers: [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "jSa5":
/*!*************************************!*\
  !*** ./src/app/config.component.ts ***!
  \*************************************/
/*! exports provided: ConfigComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComp", function() { return ConfigComp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ConfigComp {
    constructor() {
        this.evaluationAPI = 'https://opportunity-tracking-dev.mybluemix.net/api/evaluation';
        this.templateAPI = 'https://opportunity-tracking-dev.mybluemix.net/api/template';
    }
}
ConfigComp.ɵfac = function ConfigComp_Factory(t) { return new (t || ConfigComp)(); };
ConfigComp.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfigComp, selectors: [["app-config"]], decls: 0, vars: 0, template: function ConfigComp_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigComp, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-config',
                template: ``,
            }]
    }], null, null); })();


/***/ }),

/***/ "q6no":
/*!********************************************!*\
  !*** ./src/app/allevaluation.component.ts ***!
  \********************************************/
/*! exports provided: AllEvaluationComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllEvaluationComp", function() { return AllEvaluationComp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AllEvaluationComp_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data to display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "vertical-align": "middle" }; };
function AllEvaluationComp_ng_template_1_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllEvaluationComp_ng_template_1_tr_12_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const evalitems_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.clickHandler(evalitems_r3.APPLICANTNAME, evalitems_r3.EVALUATORNAME, evalitems_r3.EVALNAME); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const evalitems_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, evalitems_r3.APPLICANTNAME));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, evalitems_r3.EVALUATORNAME), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", evalitems_r3.EVALNAME, " ");
} }
const _c1 = function () { return { width: "70%", margin: "0% auto" }; };
function AllEvaluationComp_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Applicant's Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Evaluator's Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AllEvaluationComp_ng_template_1_tr_12_Template, 10, 11, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.evalarr);
} }
class AllEvaluationComp {
    constructor(ds, router) {
        this.ds = ds;
        this.router = router;
        this.today = Date.now();
        this.agree = true;
        this.uniquenames = [];
        this.evalarr = [];
        this.resObj = {
            APPLICANTNAME: '',
            EVALUATORNAME: '',
            EVALNAME: '',
        };
        this.uniqueskills = [];
        this.callDataServer();
    }
    callDataServer() {
        this.ds.getEvalData().subscribe((res) => {
            if (res) {
                this.slist = res;
                console.log(this.slist);
                console.log(this.slist.EVALUATION);
                let Unique = (arr) => {
                    //Store the unique
                    let uniques = [];
                    //Track the items added to the uniques
                    let itemsFound = {};
                    for (let val of arr) {
                        //If item is already added then move to the next item
                        if (itemsFound[val.APPLICANTNAME]) {
                            continue;
                        }
                        //Else push it to the unique list
                        uniques.push(val);
                        //Mark it as added
                        itemsFound[val.APPLICANTNAME] = true;
                    }
                    //Return the uniques
                    return uniques;
                };
                this.evalarr = Unique(this.slist.EVALUATION);
                console.log(this.evalarr);
                this.show = true;
            }
            else {
                this.show = false;
            }
        }, (err) => {
            console.log('Error : ', err);
        });
    }
    clickHandler(name, evaluator, tech) {
        this.ds.applicantName = name;
        this.ds.evaluatorName = evaluator;
        this.ds.technology = tech;
        this.router.navigate(['evaluationDetails']);
        // console.log('name : ', name);
        // this.agree = false;
        // this.resObj = {
        //   APPLICANTNAME: name,
        //   EVALUATORNAME: evaluator,
        //   EVALNAME: tech,
        // };
        // this.slist.EVALUATION.forEach((element) => {
        //   if (element.APPLICANTNAME === name) {
        //     let obj = {
        //       EVALSCORE: element.EVALSCORE,
        //       EVALSKILL: element.EVALSKILL,
        //     };
        //     this.uniqueskills.push(obj);
        //   }
        // });
        // console.log('uni skills : ', this.uniqueskills);
    }
}
AllEvaluationComp.ɵfac = function AllEvaluationComp_Factory(t) { return new (t || AllEvaluationComp)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AllEvaluationComp.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllEvaluationComp, selectors: [["app-allEvaluation-form"]], decls: 2, vars: 2, consts: [[3, "ngIf"], [1, "container"], [1, "table-responsive"], ["border", "1px", 1, "table", "table-light", "table-hover", "table-striped", 3, "ngStyle"], [4, "ngFor", "ngForOf"], ["scope", "col"], [1, "nav-link", 3, "click"], ["scope", "col", 3, "ngStyle"]], template: function AllEvaluationComp_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllEvaluationComp_ng_template_0_Template, 2, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllEvaluationComp_ng_template_1_Template, 13, 3, "ng-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllEvaluationComp, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-allEvaluation-form',
                template: `
    <ng-template [ngIf]="show == false">
      <div>No Data to display</div>
    </ng-template>
    <ng-template [ngIf]="show == true">
      <div class="container">
        <div class="table-responsive">
          <table
            class="table table-light table-hover table-striped"
            border="1px"
            [ngStyle]="{ width: '70%', margin: '0% auto' }"
          >
            <thead>
              <tr>
                <th>Applicant's Name</th>
                <th>Evaluator's Name</th>
                <th>Technology</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let evalitems of evalarr">
                <td scope="col">
                  <a
                    (click)="
                      clickHandler(
                        evalitems.APPLICANTNAME,
                        evalitems.EVALUATORNAME,
                        evalitems.EVALNAME
                      )
                    "
                    class="nav-link"
                    >{{ evalitems.APPLICANTNAME | titlecase }}</a
                  >
                </td>
                <td scope="col" [ngStyle]="{ 'vertical-align': 'middle' }">
                  {{ evalitems.EVALUATORNAME | titlecase }}
                </td>
                <td scope="col" [ngStyle]="{ 'vertical-align': 'middle' }">
                  {{ evalitems.EVALNAME }}
                </td>
              </tr>
              <!--tr>
            <td scope="col">
              <b>Date :</b> {{ evalitems.CREATEDATE | date: 'dd/MMM/yyyy' }}
            </td>
          </tr>
          <tr>
            <td scope="col">
              <b>Skills : </b>
              <label>{{ evalitems.EVALSKILL }}</label>
            </td>
            <td scope="col">
              <b>Scores : 
              &nbsp;
              </b>
              <progress
                [value]="evalitems.EVALSCORE"
                min="0"
                max="10"
                step="1"
              ></progress>
            </td>
          <!/tr -->
            </tbody>
          </table>
        </div>
        <!--div class="mb-3">
          <center>
            <button type="submit" class="btn btn-primary mb-3">Submit</button>
          </center>
        <!/div-->
      </div>

      <!-- ng-template [ngIf]="agree == false">
      <div class="container">
        <table class="table" [ngStyle]="{ width: '70%', margin: '0% auto' }">
          <tbody>
            <tr>
              <th scope="col"><label for="">Applicant's Name : </label></th>
              <td>
                {{ resObj.APPLICANTNAME }}
              </td>

              <th scope="col">
                <label for="">Evaluators's Name : </label>
              </th>
              <td>
                {{ resObj.EVALUATORNAME }}
              </td>
            </tr>
            <tr>
              <th scope="col"><label for=""> Technology : </label></th>
              <td>
                {{ resObj.EVALNAME }}
              </td>

              <th scope="col">
                <label for="">Date : </label>
              </th>
              <td>
                {{ today | date: 'dd/MMM/yyyy' }}
              </td>
            </tr>

            <tr>
              <th scope="col" colspan="2">Skills :</th>
              <th scope="col" colspan="2">Scores :</th>
            </tr>
            <tr *ngFor="let skill of uniqueskills">
              <td
                scope="col"
                colspan="2"
                [ngStyle]="{ 'vertical-align': 'middle' }"
              >
                <label for="">{{ skill.EVALSKILL }}</label>
              </td>
              <td
                scope="col"
                colspan="2"
                [ngStyle]="{ 'vertical-align': 'middle' }"
              >
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  [(ngModel)]="skill.EVALSCORE"
                />
                {{ skill.EVALSCORE }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    <!/ng-template -->
    </ng-template>
  `,
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "qmAf":
/*!*****************************************!*\
  !*** ./src/app/evaluation.component.ts ***!
  \*****************************************/
/*! exports provided: EvaluationComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationComp", function() { return EvaluationComp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "R7Hv");
// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { DataService } from './data.service';



class EvaluationComp {
    constructor(ds) {
        this.ds = ds;
        this.today = Date.now();
        this.tarea = '';
        this.techarr = [];
        this.uniquetech = [];
        this.editUser = false;
        this.index = 0;
        this.id = 0;
        this.sname = [];
        this.NEW = [];
        this.UPDATE = [];
        this.callDataServer();
    }
    callDataServer() {
        this.ds.getData().subscribe((res) => {
            this.templist = res;
            this.slist = res;
            console.log(this.slist);
            console.log(this.slist.EVALUATION_TEMP);
            this.slist.EVALUATION_TEMP.forEach((element) => {
                this.techarr.push(element.TEMPTECHNAME);
            });
            this.uniquetech = this.techarr.filter((x, i, a) => a.indexOf(x) == i);
            console.log('unique arr : ', this.uniquetech);
            console.log(this.tarea);
            this.slist.EVALUATION_TEMP.forEach((element) => {
                if (element.TEMPTECHNAME === this.tarea) {
                    this.sname.push(element.TEMPSKILL);
                }
            });
            console.log(this.sname);
        }, (err) => {
            console.log('Error : ', err);
        });
    }
    dropdownHandler(tech) {
        console.log('entered');
        console.log(tech);
        this.tarea = tech;
        this.sname = [];
        this.callDataServer();
    }
}
EvaluationComp.ɵfac = function EvaluationComp_Factory(t) { return new (t || EvaluationComp)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
EvaluationComp.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvaluationComp, selectors: [["app-evaluation-form"]], decls: 0, vars: 0, template: function EvaluationComp_Template(rf, ctx) { }, styles: [".contain[_ngcontent-%COMP%] {\n        padding: 1% 10%;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EvaluationComp, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-evaluation-form',
                template: `
    <!-- div class="conatiner contain">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          class="btn btn-outline-secondary"
          [routerLink]="['createevaluation']"
        >
          Create Evaluation
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          [routerLink]="['allevaluation']"
        >
          All Evaluations
        </button>
      </div>
    <!/div -->
    <!-- router-outlet><!/router-outlet -->
    <!-- div class="container">
      <table class="table">
        <tbody>
          <tr>
            <th scope="col">
              Applicant's Name :
              <input type="text" placeholder=" XYZ" />
            </th>
            <th scope="col">
              Evaluators's Name :
              <input type="text" placeholder=" ABC" />
            </th>
          </tr>
          <tr>
            <th scope="col">
              Technology :
              <select
                #techarea
                required
                (change)="dropdownHandler(techarea.value)"
              >
                <option *ngFor="let tech of uniquetech" [value]="tech">
                  {{ tech }}
                </option>
              </select>
            </th>

            <td scope="col"><b>Date :</b> {{ today | date: 'dd/MMM/yyyy' }}</td>
          </tr>
          <tr>
            <th scope="col">Skills</th>
            <th scope="col">Scores</th>
          </tr>
          <tr *ngFor="let skill of sname">
            <td scope="col">{{ skill }}</td>
            <th scope="col">
              <input type="range" min="0" max="10" step="1" />
            </th>
          </tr>
        </tbody>
      </table>
      <div class="mb-3">
        <center>
          <button
            type="submit"
            [routerLink]="['evaluation']"
            class="btn btn-primary mb-3"
          >
            Submit
          </button>
        </center>
      </div>
    <!/div -->
  `,
                styles: [
                    `
      .contain {
        padding: 1% 10%;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "rWOM":
/*!********************************************!*\
  !*** ./src/app/tech-specific.component.ts ***!
  \********************************************/
/*! exports provided: TechnologySpecificComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologySpecificComp", function() { return TechnologySpecificComp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "R7Hv");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = function () { return { "vertical-align": "middle" }; };
function TechnologySpecificComp_tr_34_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TechnologySpecificComp_tr_34_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.skill = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnologySpecificComp_tr_34_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return [ctx_r6.addSkillHandler(ctx_r6.skill), _r3.value = ""]; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add Skill ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.skill);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function TechnologySpecificComp_tr_35_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TechnologySpecificComp_tr_35_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.skill = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnologySpecificComp_tr_35_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return [ctx_r9.updateHandler(ctx_r9.skill), ctx_r9.editUser = !ctx_r9.editUser]; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Update Skill ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.skill);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function TechnologySpecificComp_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnologySpecificComp_tr_36_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const skills_r10 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return [ctx_r12.editHandler(skills_r10), ctx_r12.editUser = !ctx_r12.editUser]; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnologySpecificComp_tr_36_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const skills_r10 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.deleteHandler(skills_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skills_r10 = ctx.$implicit;
    const idx_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Skill ", idx_r11 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skills_r10);
} }
const _c1 = function (a0) { return { show: a0 }; };
const _c2 = function () { return { width: "70%", margin: "0% auto", "text-align": "center" }; };
class TechnologySpecificComp {
    constructor(ds, http, router) {
        this.ds = ds;
        this.http = http;
        this.router = router;
        this.tarea = '';
        this.techarr = [];
        this.uniquetech = [];
        this.editUser = false;
        this.index = 0;
        this.id = 0;
        this.sname = [];
        this.NEW = [];
        this.UPDATE = [];
        this.agree = false;
        console.log(this.router.url);
        let temparr = this.router.url.split('/');
        console.log(temparr);
        this.technology = temparr.slice(-1)[0];
        console.log(this.technology);
        this.callDataServer();
    }
    callDataServer() {
        console.log('tech name : ', this.technology);
        this.ds.getTechData(this.technology).subscribe((res) => {
            this.templist = res;
            this.slist = res;
            console.log('entered');
            console.log(this.slist);
            this.slist.body.forEach((element) => {
                this.sname.push(element.TEMPSKILL);
            });
            console.log(this.sname);
        }, (err) => {
            console.log('Error : ', err);
        });
    }
    addSkillHandler(skill) {
        console.log('added skill : ', skill);
        console.log('tech area : ', this.technology);
        let resobj = {
            TEMPSKILL: skill,
            TEMPTECHNAME: this.technology,
        };
        this.sname.push(skill);
        this.NEW.push(resobj);
        console.log(this.NEW);
        document.getElementById('skillname').nodeValue = '';
    }
    editHandler(skill) {
        let resObj;
        this.slist.body.forEach((element) => {
            if (element.TEMPSKILL === skill) {
                this.updateskill = skill;
                resObj = {
                    TEMPID: element.TEMPID,
                    TEMPSKILL: element.TEMPSKILL,
                };
                return false;
            }
        });
        console.log(resObj);
        this.UPDATE.push(resObj);
        console.log(this.UPDATE);
        this.index = this.sname.indexOf(skill);
        // console.log(this.index);
    }
    updateHandler(skill) {
        this.slist.body.forEach((element) => {
            if (element.TEMPSKILL === this.updateskill) {
                element.TEMPSKILL = skill;
                return false;
            }
        });
        this.sname[this.index] = skill;
        console.log(this.sname);
        console.log(this.slist);
        this.UPDATE.forEach((element) => {
            if (element.TEMPSKILL === this.updateskill) {
                element.TEMPSKILL = skill;
                return false;
            }
        });
        document.getElementById('editskill').nodeValue = '';
    }
    deleteHandler(skills) { }
    redirectFun() {
        this.router.navigate(['alltemplate']);
    }
    submitHandler() {
        let jsonObj = {
            NEW: this.NEW,
            UPDATE: this.UPDATE,
            DELETE: [],
        };
        let obj = {
            EVALUATION_TEMP: jsonObj,
        };
        console.log(jsonObj);
        this.ds.postData(obj).subscribe((res) => {
            console.log(res);
            this.slist = res;
            this.error = false;
            this.showModal = true;
        }, (err) => {
            this.error = true;
            this.showFailModal = 'true';
        });
    }
}
TechnologySpecificComp.ɵfac = function TechnologySpecificComp_Factory(t) { return new (t || TechnologySpecificComp)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TechnologySpecificComp.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TechnologySpecificComp, selectors: [["app-technology-form"]], decls: 40, vars: 11, consts: [["id", "myModal", 1, "modal", "fail", "fade", 3, "ngClass"], [1, "modal-dialog", "modal-confirm", "fail"], [1, "modal-content", "fail"], [1, "modal-header", "flex-column", "fail"], [1, "icon-box", "fail"], [1, "material-icons", "fail"], [1, "fail", "modal-title", "w-100"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close", "fail", 3, "click"], [1, "modal-body", "fail"], [1, "fail", "modal-footer", "justify-content-center"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "fail", 3, "click"], ["id", "myModal", 1, "modal", "fade", 3, "ngClass"], [1, "modal-dialog", "modal-confirm"], [1, "modal-content"], [1, "modal-header", "justify-content-center"], [1, "icon-box"], [1, "material-icons"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close", 3, "click"], [1, "modal-body", "text-center"], [1, "container"], [1, "table", 3, "ngStyle"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "mb-3"], ["type", "submit", 1, "btn", "btn-primary", "mb-3", "submit", 3, "click"], ["scope", "col", "colspan", "3"], ["type", "text", "id", "skillname", "placeholder", "Enter Skill", 1, "form-control", 3, "ngModel", "ngModelChange"], ["skillname", ""], [3, "ngStyle"], ["type", "submit", 1, "btn", "btn-info", "mb-3", "btnstyle", 3, "click"], ["colspan", "3"], ["type", "text", "id", "editskill", "placeholder", "Enter Skill ", 1, "form-control", 3, "ngModel", "ngModelChange"], ["scope", "row", 3, "ngStyle"], [1, "bi", "bi-pencil-square", "btn", "btn-outline-info", 3, "click"], [1, "bi", "bi", "bi-trash", "btn", "btn-outline-danger", 3, "click"]], template: function TechnologySpecificComp_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\uE5CD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Error Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnologySpecificComp_Template_button_click_9_listener() { return [ctx.showFailModal = false]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Please check the error. Something went wrong!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnologySpecificComp_Template_button_click_15_listener() { return ctx.showFailModal = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\uE876");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnologySpecificComp_Template_button_click_24_listener() { return [ctx.showModal = false, ctx.redirectFun()]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Great!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Your evaluation has been added successfully.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TechnologySpecificComp_tr_34_Template, 7, 3, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, TechnologySpecificComp_tr_35_Template, 6, 3, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, TechnologySpecificComp_tr_36_Template, 11, 6, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnologySpecificComp_Template_button_click_38_listener() { return ctx.submitHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.showFailModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.showModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sname);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".submit[_ngcontent-%COMP%] {\n        margin: '2% auto';\n      }\n\n      .modal.show[_ngcontent-%COMP%] {\n        display: block;\n      }\n      .modal-confirm[_ngcontent-%COMP%] {\n        color: #434e65;\n        width: 525px;\n        border: 1px solid gray;\n        border-radius: 5px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n        padding: 20px;\n        font-size: 16px;\n        border-radius: 5px;\n        border: none;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n        background: #8faed6;\n        border-bottom: none;\n        position: relative;\n        text-align: center;\n        margin: -20px -20px 0;\n        border-radius: 5px 5px 0 0;\n        padding: 35px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        text-align: center;\n        font-size: 36px;\n        margin: 10px 0;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n        min-height: 40px;\n        border-radius: 3px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 15px;\n        right: 15px;\n        color: #fff;\n        text-shadow: none;\n        opacity: 0.5;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n        opacity: 0.8;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n        color: #fff;\n        width: 95px;\n        height: 95px;\n        display: inline-block;\n        border-radius: 50%;\n        z-index: 9;\n        border: 5px solid #fff;\n        padding: 15px;\n        text-align: center;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        font-size: 64px;\n        margin: -4px 0 0 -4px;\n      }\n      .modal-confirm.modal-dialog[_ngcontent-%COMP%] {\n        margin-top: 80px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n        color: #fff;\n        border-radius: 4px;\n        background: #eeb711 !important;\n        text-decoration: none;\n        transition: all 0.4s;\n        line-height: normal;\n        border-radius: 30px;\n        margin-top: 10px;\n        padding: 6px 20px;\n        border: none;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n        background: #eda645 !important;\n        outline: none;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin: 1px 3px 0;\n        float: left;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        margin-left: 1px;\n        font-size: 20px;\n        float: right;\n      }\n      .trigger-btn[_ngcontent-%COMP%] {\n        display: inline-block;\n        margin: 100px auto;\n      }\n\n      .fail.modal-confirm[_ngcontent-%COMP%] {\n        color: #636363;\n        width: 400px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n        padding: 20px;\n        border-radius: 5px;\n        border: none;\n        text-align: center;\n        font-size: 14px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n        border-bottom: none;\n        background-color: #ff9999;\n        position: relative;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        text-align: center;\n        font-size: 26px;\n        margin: 30px 0 -10px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n        position: absolute;\n        top: -5px;\n        right: -2px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n        color: black;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n        border: none;\n        text-align: center;\n        border-radius: 5px;\n        font-size: 13px;\n        padding: 10px 15px 25px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #999;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n        width: 80px;\n        height: 80px;\n        margin: 0 auto;\n        border-radius: 50%;\n        z-index: 9;\n        text-align: center;\n        border: 3px solid #f15e5e;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        color: #f15e5e;\n        font-size: 46px;\n        display: inline-block;\n        margin: 0px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .fail.modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n        color: #fff;\n        border-radius: 4px;\n        background: #ff9999;\n        text-decoration: none;\n        transition: all 0.4s;\n        line-height: normal;\n        min-width: 120px;\n        border: none;\n        min-height: 40px;\n        border-radius: 3px;\n        margin: 0 5px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n        background: #ff9999;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover, .fail.modal-confirm[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:focus {\n        background: #ff9999;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n        background: #ff9999;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover, .fail.modal-confirm[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:focus {\n        background: #ff9999;\n      }\n      td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n        vertical-align: middle;\n      }\n      input[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 55px;\n      }\n      .btnstyle[_ngcontent-%COMP%] {\n        margin-top: 8%;\n        vertical-align: middle;\n        padding: 7%;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechnologySpecificComp, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-technology-form',
                template: `
    <div
      id="myModal"
      class="modal fail fade"
      [ngClass]="{ show: showFailModal }"
    >
      <div class="modal-dialog modal-confirm fail">
        <div class="modal-content fail">
          <div class="modal-header flex-column fail">
            <div class="icon-box fail">
              <i class="material-icons fail">&#xE5CD;</i>
            </div>
            <h4 class="fail modal-title w-100">Error Alert</h4>
            <button
              (click)="[(showFailModal = false)]"
              type="button"
              class="close fail"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div class="modal-body fail">
            <p>Please check the error. Something went wrong!</p>
          </div>
          <div class="fail modal-footer justify-content-center">
            <button
              (click)="showFailModal = false"
              type="button"
              class="btn btn-secondary fail"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <div id="myModal" class="modal fade" [ngClass]="{ show: showModal }">
      <div class="modal-dialog modal-confirm">
        <div class="modal-content">
          <div class="modal-header justify-content-center">
            <div class="icon-box">
              <i class="material-icons">&#xE876;</i>
            </div>
            <button
              type="button"
              class="close"
              (click)="[(showModal = false), redirectFun()]"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div class="modal-body text-center">
            <h4>Great!</h4>
            <p>Your evaluation has been added successfully.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <table
        class="table"
        [ngStyle]="{ width: '70%', margin: '0% auto', 'text-align': 'center' }"
      >
        <tbody>
          <tr *ngIf="!editUser">
            <td scope="col" colspan="3">
              <input
                type="text"
                [(ngModel)]="skill"
                class="form-control"
                id="skillname"
                placeholder="Enter Skill"
                #skillname
              />
            </td>
            <td [ngStyle]="{ 'vertical-align': 'middle' }">
              <button
                type="submit"
                (click)="[addSkillHandler(skill), (skillname.value = '')]"
                class="btn btn-info mb-3 btnstyle"
              >
                Add Skill
              </button>
            </td>
          </tr>

          <tr *ngIf="editUser">
            <td colspan="3">
              <input
                type="text"
                [(ngModel)]="skill"
                class="form-control"
                id="editskill"
                placeholder="Enter Skill "
              />
            </td>
            <td [ngStyle]="{ 'vertical-align': 'middle' }">
              <button
                type="submit"
                (click)="[updateHandler(skill), (editUser = !editUser)]"
                class="btn btn-info mb-3 btnstyle"
              >
                Update Skill
              </button>
            </td>
          </tr>

          <tr *ngFor="let skills of sname; index as idx">
            <th scope="row" [ngStyle]="{ 'vertical-align': 'middle' }">
              Skill {{ idx + 1 }}
            </th>
            <td [ngStyle]="{ 'vertical-align': 'middle' }">{{ skills }}</td>
            <td>
              <button
                class="bi bi-pencil-square btn btn-outline-info"
                (click)="[editHandler(skills), (editUser = !editUser)]"
              >
                Edit
              </button>
            </td>
            <td>
              <button
                class="bi bi bi-trash btn btn-outline-danger"
                (click)="deleteHandler(skills)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- ng-template [ngIf]="!editUser">
    <h5>Add Skills</h5>
    <div class="mb-3">
      <label for="skillname" class="form-label"></label>
      <input
        type="text"
        [(ngModel)]="skill"
        class="form-control"
        id="skillname"
        placeholder="Enter Skill"
        #skillname
      />
    </div>

    <div class="mb-3">
      <button
        type="submit"
        (click)="[addSkillHandler(skill), (skillname.value = '')]"
        class="btn btn-info mb-3"
      >
        Add Skill
      </button>
    </div>
  <!/ng-template -->

      <!-- ng-template [ngIf]="editUser">
    <h5>Edit Skills</h5>
    <div class="mb-3">
      <label for="username" class="form-label"></label>
      <input
        type="text"
        [(ngModel)]="skill"
        class="form-control"
        id="username"
        placeholder="Enter Skill "
      />
    </div>

    <div class="mb-3">
      <button
        type="submit"
        (click)="[updateHandler(skill), (editUser = !editUser)]"
        class="btn btn-info mb-3"
      >
        Update Skill
      </button>
    </div>
  <!/ng-template -->

      <div class="mb-3">
        <button
          type="submit"
          (click)="submitHandler()"
          class="btn btn-primary mb-3 submit"
        >
          Submit
        </button>
      </div>
    </div>
  `,
                styles: [
                    `
      .submit {
        margin: '2% auto';
      }

      .modal.show {
        display: block;
      }
      .modal-confirm {
        color: #434e65;
        width: 525px;
        border: 1px solid gray;
        border-radius: 5px;
      }
      .modal-confirm .modal-content {
        padding: 20px;
        font-size: 16px;
        border-radius: 5px;
        border: none;
      }
      .modal-confirm .modal-header {
        background: #8faed6;
        border-bottom: none;
        position: relative;
        text-align: center;
        margin: -20px -20px 0;
        border-radius: 5px 5px 0 0;
        padding: 35px;
      }
      .modal-confirm h4 {
        text-align: center;
        font-size: 36px;
        margin: 10px 0;
      }
      .modal-confirm .form-control,
      .modal-confirm .btn {
        min-height: 40px;
        border-radius: 3px;
      }
      .modal-confirm .close {
        position: absolute;
        top: 15px;
        right: 15px;
        color: #fff;
        text-shadow: none;
        opacity: 0.5;
      }
      .modal-confirm .close:hover {
        opacity: 0.8;
      }
      .modal-confirm .icon-box {
        color: #fff;
        width: 95px;
        height: 95px;
        display: inline-block;
        border-radius: 50%;
        z-index: 9;
        border: 5px solid #fff;
        padding: 15px;
        text-align: center;
      }
      .modal-confirm .icon-box i {
        font-size: 64px;
        margin: -4px 0 0 -4px;
      }
      .modal-confirm.modal-dialog {
        margin-top: 80px;
      }
      .modal-confirm .btn,
      .modal-confirm .btn:active {
        color: #fff;
        border-radius: 4px;
        background: #eeb711 !important;
        text-decoration: none;
        transition: all 0.4s;
        line-height: normal;
        border-radius: 30px;
        margin-top: 10px;
        padding: 6px 20px;
        border: none;
      }
      .modal-confirm .btn:hover,
      .modal-confirm .btn:focus {
        background: #eda645 !important;
        outline: none;
      }
      .modal-confirm .btn span {
        margin: 1px 3px 0;
        float: left;
      }
      .modal-confirm .btn i {
        margin-left: 1px;
        font-size: 20px;
        float: right;
      }
      .trigger-btn {
        display: inline-block;
        margin: 100px auto;
      }

      .fail.modal-confirm {
        color: #636363;
        width: 400px;
      }
      .fail.modal-confirm .modal-content {
        padding: 20px;
        border-radius: 5px;
        border: none;
        text-align: center;
        font-size: 14px;
      }
      .fail.modal-confirm .modal-header {
        border-bottom: none;
        background-color: #ff9999;
        position: relative;
      }
      .fail.modal-confirm h4 {
        text-align: center;
        font-size: 26px;
        margin: 30px 0 -10px;
      }
      .fail.modal-confirm .close {
        position: absolute;
        top: -5px;
        right: -2px;
      }
      .modal-confirm .modal-body {
        color: black;
      }
      .modal-confirm .modal-footer {
        border: none;
        text-align: center;
        border-radius: 5px;
        font-size: 13px;
        padding: 10px 15px 25px;
      }
      .fail.modal-confirm .modal-footer a {
        color: #999;
      }
      .fail.modal-confirm .icon-box {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        border-radius: 50%;
        z-index: 9;
        text-align: center;
        border: 3px solid #f15e5e;
      }
      .fail.modal-confirm .icon-box i {
        color: #f15e5e;
        font-size: 46px;
        display: inline-block;
        margin: 0px;
      }
      .fail.modal-confirm .btn,
      .fail.modal-confirm .btn:active {
        color: #fff;
        border-radius: 4px;
        background: #ff9999;
        text-decoration: none;
        transition: all 0.4s;
        line-height: normal;
        min-width: 120px;
        border: none;
        min-height: 40px;
        border-radius: 3px;
        margin: 0 5px;
      }
      .fail.modal-confirm .btn-secondary {
        background: #ff9999;
      }
      .fail.modal-confirm .btn-secondary:hover,
      .fail.modal-confirm .btn-secondary:focus {
        background: #ff9999;
      }
      .fail.modal-confirm .btn-danger {
        background: #ff9999;
      }
      .fail.modal-confirm .btn-danger:hover,
      .fail.modal-confirm .btn-danger:focus {
        background: #ff9999;
      }
      td,
      th {
        vertical-align: middle;
      }
      input {
        width: 100%;
        height: 55px;
      }
      .btnstyle {
        margin-top: 8%;
        vertical-align: middle;
        padding: 7%;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "td0Y":
/*!******************************************!*\
  !*** ./src/app/alltemplate.component.ts ***!
  \******************************************/
/*! exports provided: AllTemplateComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTemplateComp", function() { return AllTemplateComp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "R7Hv");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AllTemplateComp_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data to display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function AllTemplateComp_ng_template_1_tr_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllTemplateComp_ng_template_1_tr_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const tech_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return [ctx_r4.techPage(tech_r3), ctx_r4.tarea = tech_r3]; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tech_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "" + tech_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tech_r3);
} }
const _c1 = function () { return { width: "70%", margin: "0% auto", "text-align": "center" }; };
function AllTemplateComp_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AllTemplateComp_ng_template_1_tr_7_Template, 3, 5, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.uniquetech);
} }
class AllTemplateComp {
    constructor(ds, http, router) {
        this.ds = ds;
        this.http = http;
        this.router = router;
        this.tarea = '';
        this.techarr = [];
        this.uniquetech = [];
        this.editUser = false;
        this.index = 0;
        this.id = 0;
        this.sname = [];
        this.NEW = [];
        this.UPDATE = [];
        this.agree = false;
        this.callDataServer();
    }
    callDataServer() {
        this.ds.getData().subscribe((res) => {
            if (res) {
                this.templist = res;
                this.slist = res;
                console.log(this.slist);
                console.log(this.slist.EVALUATION_TEMP);
                this.slist.EVALUATION_TEMP.forEach((element) => {
                    this.techarr.push(element.TEMPTECHNAME);
                });
                this.uniquetech = this.techarr.filter((x, i, a) => a.indexOf(x) == i);
                console.log('unique arr : ', this.uniquetech);
                console.log(this.tarea);
                // this.slist.EVALUATION_TEMP.forEach((element) => {
                //   if (element.TEMPTECHNAME === this.tarea) {
                //     this.sname.push(element.TEMPSKILL);
                //   }
                // });
                console.log(this.sname);
                this.show = true;
            }
            else {
                this.show = false;
            }
        }, (err) => {
            console.log('Error : ', err);
        });
    }
    techPage(tech) {
        this.agree = true;
        console.log('tarea : ', tech);
        this.tarea = tech;
        console.log('var tarea : ', this.tarea);
    }
}
AllTemplateComp.ɵfac = function AllTemplateComp_Factory(t) { return new (t || AllTemplateComp)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AllTemplateComp.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllTemplateComp, selectors: [["app-alltemplate-comp"]], decls: 2, vars: 2, consts: [[3, "ngIf"], [1, "container"], [1, "table", "table-light", "table-hover", "table-striped", 3, "ngStyle"], ["scope", "col"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["href", "", 1, "nav-link", 3, "routerLink", "click"]], template: function AllTemplateComp_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllTemplateComp_ng_template_0_Template, 2, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllTemplateComp_ng_template_1_Template, 9, 3, "ng-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        color: crimson;\n      }\n      tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n        border: 2px solid crimson;\n      }\n      tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input.ng-valid.ng-touched[_ngcontent-%COMP%] {\n        border: 2px solid darkseagreen;\n      }\n      a[_ngcontent-%COMP%]:link.link-style {\n        color: black;\n      }\n      a[_ngcontent-%COMP%]:hover.link-style {\n        color: gray;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllTemplateComp, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alltemplate-comp',
                template: `
    <ng-template [ngIf]="show == false">
      <div>No Data to display</div>
    </ng-template>
    <ng-template [ngIf]="show == true">
      <div class="container">
        <table
          class="table table-light table-hover table-striped"
          [ngStyle]="{
            width: '70%',
            margin: '0% auto',
            'text-align': 'center'
          }"
        >
          <thead>
            <tr>
              <th scope="col">Technology</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let tech of uniquetech" [value]="tech">
              <a
                (click)="[techPage(tech), (tarea = tech)]"
                href=""
                [routerLink]="['' + tech]"
                class="nav-link"
                >{{ tech }}</a
              >
            </tr>
          </tbody>
        </table>
      </div>

      <router-outlet></router-outlet>

      <!-- ng-template [ngIf]="router.url.includes(tech)">
      <div class="container">
        <table class="table">
          <tbody>
            <tr *ngIf="!editUser">
              <td colspan="3">
                <input
                  type="text"
                  [(ngModel)]="skill"
                  class="form-control"
                  id="skillname"
                  placeholder="Enter Skill"
                  #skillname
                />
              </td>
              <td>
                <button
                  type="submit"
                  (click)="[addSkillHandler(skill), (skillname.value = '')]"
                  class="btn btn-info mb-3"
                >
                  Add Skill
                </button>
              </td>
            </tr>

            <tr *ngIf="editUser">
              <td colspan="3">
                <input
                  type="text"
                  [(ngModel)]="skill"
                  class="form-control"
                  id="username"
                  placeholder="Enter Skill "
                />
              </td>
              <td>
                <button
                  type="submit"
                  (click)="[updateHandler(skill), (editUser = !editUser)]"
                  class="btn btn-info mb-3"
                >
                  Update Skill
                </button>
              </td>
            </tr>

            <tr *ngFor="let skills of sname; index as idx">
              <th scope="row">Skill {{ idx + 1 }}</th>
              <td>{{ skills }}</td>
              <td>
                <button
                  class="bi bi-pencil-square btn btn-outline-info"
                  (click)="[editHandler(skills), (editUser = !editUser)]"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  class="bi bi bi-trash btn btn-outline-danger"
                  (click)="deleteHandler(skills)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- ng-template [ngIf]="!editUser">
          <h5>Add Skills</h5>
          <div class="mb-3">
            <label for="skillname" class="form-label"></label>
            <input
              type="text"
              [(ngModel)]="skill"
              class="form-control"
              id="skillname"
              placeholder="Enter Skill"
              #skillname
            />
          </div>

          <div class="mb-3">
            <button
              type="submit"
              (click)="[addSkillHandler(skill), (skillname.value = '')]"
              class="btn btn-info mb-3"
            >
              Add Skill
            </button>
          </div>
        <!/ng-template -->

      <!-- ng-template [ngIf]="editUser">
          <h5>Edit Skills</h5>
          <div class="mb-3">
            <label for="username" class="form-label"></label>
            <input
              type="text"
              [(ngModel)]="skill"
              class="form-control"
              id="username"
              placeholder="Enter Skill "
            />
          </div>

          <div class="mb-3">
            <button
              type="submit"
              (click)="[updateHandler(skill), (editUser = !editUser)]"
              class="btn btn-info mb-3"
            >
              Update Skill
            </button>
          </div>
        <!/ng-template -->

      <!-- div class="mb-3">
      
        <button
          type="submit"
          (click)="submitHandler()"
          class="btn btn-primary mb-3"
        >
          Submit
        </button>
 
    <!/div -->

      <!/ng-template -->
    </ng-template>
  `,
                styles: [
                    `
      tr td span {
        color: crimson;
      }
      tr td input.ng-invalid.ng-touched {
        border: 2px solid crimson;
      }
      tr td input.ng-valid.ng-touched {
        border: 2px solid darkseagreen;
      }
      a:link.link-style {
        color: black;
      }
      a:hover.link-style {
        color: gray;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "v4WI":
/*!************************************************!*\
  !*** ./src/app/create-evaluation.component.ts ***!
  \************************************************/
/*! exports provided: CreateEvaluationComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEvaluationComp", function() { return CreateEvaluationComp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "R7Hv");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function CreateEvaluationComp_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tech_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tech_r3, " ");
} }
function CreateEvaluationComp_tr_66_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateEvaluationComp_tr_66_Template_input_ngModelChange_6_listener($event) { const skill_r4 = ctx.$implicit; return skill_r4.EVALSCORE = $event; })("input", function CreateEvaluationComp_tr_66_Template_input_input_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const skill_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.pushScore(skill_r4.EVALSCORE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "output", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r4.TEMPSKILL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", skill_r4.EVALSCORE);
} }
const _c0 = function (a0) { return { show: a0 }; };
const _c1 = function () { return { width: "70%", margin: "0% auto" }; };
const _c2 = function () { return { height: "55px" }; };
const _c3 = function () { return { "margin-top": "2%" }; };
class CreateEvaluationComp {
    constructor(ds, http, router) {
        this.ds = ds;
        this.http = http;
        this.router = router;
        this.today = Date.now();
        this.evalObj = {
            APPLICANTNAME: '',
            EVALUATORNAME: '',
        };
        this.evalarr = [];
        this.tarea = '';
        this.techarr = [];
        this.uniquetech = [];
        this.editUser = false;
        this.index = 0;
        this.skillid = [];
        this.templist = [];
        this.sname = [];
        this.scores = [];
        this.NEW = [];
        this.UPDATE = [];
        this.EVALUATION = [];
        this.callDataServer();
    }
    callDataServer() {
        this.ds.getData().subscribe((res) => {
            this.slist = res;
            console.log(this.slist);
            console.log(this.slist.EVALUATION_TEMP);
            this.slist.EVALUATION_TEMP.forEach((element) => {
                this.techarr.push(element.TEMPTECHNAME);
            });
            this.uniquetech = this.techarr.filter((x, i, a) => a.indexOf(x) == i);
            console.log('unique arr : ', this.uniquetech);
            console.log(this.tarea);
        }, (err) => {
            console.log('Error : ', err);
        });
    }
    redirectFun() {
        this.router.navigate(['allevaluation']);
    }
    dropdownHandler(tech) {
        console.log('entered');
        console.log(tech);
        this.tarea = tech;
        this.sname = [];
        this.http;
        this.ds.getTechData(tech).subscribe((res) => {
            this.slist = res;
            console.log('temp list : ', this.slist);
            this.templist = this.slist.body;
            console.log('temp list body : ', this.templist);
        }, (err) => {
            console.log('Error : ', err);
        });
    }
    pushScore(score) {
        console.log('score : ', score);
        console.log(this.templist);
        const allRanges = document.querySelectorAll('.range-wrap');
        allRanges.forEach((wrap) => {
            const range = wrap.querySelector('.range');
            const bubble = wrap.querySelector('.bubble');
            range.addEventListener('input', () => {
                setBubble(range, bubble);
            });
            setBubble(range, bubble);
        });
        function setBubble(range, bubble) {
            const val = range.value;
            const min = range.min ? range.min : 0;
            const max = range.max ? range.max : 100;
            const newVal = Number(((val - min) * 100) / (max - min));
            bubble.innerHTML = val;
            // Sorta magic numbers based on size of the native UI thumb
            bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
        }
    }
    submitHandler() {
        if (this.evalObj.APPLICANTNAME &&
            this.evalObj.EVALUATORNAME &&
            this.tarea) {
            console.log(this.evalObj);
            let resObj;
            let i = 0;
            this.templist.forEach((element) => {
                resObj = {
                    EVALNAME: this.tarea,
                    APPLICANTNAME: this.evalObj.APPLICANTNAME,
                    EVALUATORNAME: this.evalObj.EVALUATORNAME,
                    EVALSKILL: element.TEMPSKILL,
                    EVALSCORE: element.EVALSCORE || 0,
                };
                this.EVALUATION.push(resObj);
                i++;
            });
            let jsonObj = {
                EVALUATION: this.EVALUATION,
            };
            console.log(jsonObj);
            this.ds.postEvalData(jsonObj).subscribe((res) => {
                console.log(res);
                this.success = true;
                console.log(this.success);
                this.showModal = true;
                //   this.slist = res;
            }, (err) => {
                this.success = false;
                this.showFailModal = 'true';
            });
        }
        else {
        }
        // let jsonObj = {
        //   NEW: this.NEW,
        //   UPDATE: this.UPDATE,
        //   DELETE: [],
        // };
        // let obj = {
        //   EVALUATION_TEMP: jsonObj,
        // };
        // console.log(jsonObj);
        // this.ds.postData(obj).subscribe((res) => {
        //   console.log(res);
        //   this.slist = res;
        // });
    }
}
CreateEvaluationComp.ɵfac = function CreateEvaluationComp_Factory(t) { return new (t || CreateEvaluationComp)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CreateEvaluationComp.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateEvaluationComp, selectors: [["app-evaluation-create"]], decls: 70, vars: 26, consts: [["id", "myModal", 1, "modal", "fail", "fade", 3, "ngClass"], [1, "modal-dialog", "modal-confirm", "fail"], [1, "modal-content", "fail"], [1, "modal-header", "flex-column", "fail"], [1, "icon-box", "fail"], [1, "material-icons", "fail"], [1, "fail", "modal-title", "w-100"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close", "fail", 3, "click"], [1, "modal-body", "fail"], [1, "fail", "modal-footer", "justify-content-center"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "fail", 3, "click"], ["id", "myModal", 1, "modal", "fade", 3, "ngClass"], [1, "modal-dialog", "modal-confirm"], [1, "modal-content"], [1, "modal-header", "justify-content-center"], [1, "icon-box"], [1, "material-icons"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close", 3, "click"], [1, "modal-body", "text-center"], [1, "container"], ["ngNativeValidate", ""], [1, "table", 3, "ngStyle"], ["scope", "col", "colspan", "2"], ["for", ""], ["colspan", "3", "type", "text", "placeholder", " Enter Applicant's Name", "name", "applicant", "required", "", 1, "form-control", 3, "ngStyle", "ngModel", "ngModelChange"], ["type", "text", "placeholder", " Enter Evaluator's Name", "name", "evaluator", "required", "", 1, "form-control", 3, "ngStyle", "ngModel", "ngModelChange"], ["required", "", 1, "form-control", 3, "ngStyle", "change"], ["techarea", ""], [3, "value", 4, "ngFor", "ngForOf"], ["scope", "col", "colspan", "2", 3, "ngStyle"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "mb-3"], ["type", "submit", "id", "submitbtn", "data-toggle", "modal", 1, "btn", "btn-primary", "mb-3", 3, "ngStyle", "click"], [3, "value"], [1, "range-wrap"], ["id", "range", "type", "range", "min", "0", "max", "10", "step", "1", "name", "score", "required", "", 1, "range", 3, "ngModel", "ngModelChange", "input"], [1, "bubble"]], template: function CreateEvaluationComp_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\uE5CD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Error Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEvaluationComp_Template_button_click_9_listener() { return [ctx.showFailModal = false]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Please check the error. Something went wrong!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEvaluationComp_Template_button_click_15_listener() { return ctx.showFailModal = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\uE876");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEvaluationComp_Template_button_click_24_listener() { return [ctx.showModal = false, ctx.redirectFun()]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Great!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Your evaluation has been added successfully.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Applicant's Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateEvaluationComp_Template_input_ngModelChange_39_listener($event) { return ctx.evalObj.APPLICANTNAME = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Evaluators's Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateEvaluationComp_Template_input_ngModelChange_44_listener($event) { return ctx.evalObj.EVALUATORNAME = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Technology :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "select", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateEvaluationComp_Template_select_change_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50); return ctx.dropdownHandler(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CreateEvaluationComp_option_51_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Skills : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Scores : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, CreateEvaluationComp_tr_66_Template, 9, 2, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEvaluationComp_Template_button_click_68_listener() { return [ctx.submitHandler()]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.showFailModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.showModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2))("ngModel", ctx.evalObj.APPLICANTNAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c2))("ngModel", ctx.evalObj.EVALUATORNAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.uniquetech);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](58, 13, ctx.today, "dd/MMM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.templist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c3));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RangeValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".range-wrap[_ngcontent-%COMP%] {\n        position: relative;\n        margin: 0 auto 3rem;\n      }\n      .range[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n      .bubble[_ngcontent-%COMP%] {\n        background: #4d79ff;\n        color: white;\n        padding: 4px 12px;\n        position: absolute;\n        border-radius: 4px;\n        left: 50%;\n        transform: translateX(-50%);\n      }\n      .bubble[_ngcontent-%COMP%]::after {\n        content: '';\n        position: absolute;\n        width: 2px;\n        height: 2px;\n        background: red;\n        top: -1px;\n        left: 50%;\n      }\n\n      .modal.show[_ngcontent-%COMP%] {\n        display: block;\n      }\n      .modal-confirm[_ngcontent-%COMP%] {\n        color: #434e65;\n        width: 525px;\n        border: 1px solid gray;\n        border-radius: 5px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n        padding: 20px;\n        font-size: 16px;\n        border-radius: 5px;\n        border: none;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n        background: #8faed6;\n        border-bottom: none;\n        position: relative;\n        text-align: center;\n        margin: -20px -20px 0;\n        border-radius: 5px 5px 0 0;\n        padding: 35px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        text-align: center;\n        font-size: 36px;\n        margin: 10px 0;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n        min-height: 40px;\n        border-radius: 3px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 15px;\n        right: 15px;\n        color: #fff;\n        text-shadow: none;\n        opacity: 0.5;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n        opacity: 0.8;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n        color: #fff;\n        width: 95px;\n        height: 95px;\n        display: inline-block;\n        border-radius: 50%;\n        z-index: 9;\n        border: 5px solid #fff;\n        padding: 15px;\n        text-align: center;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        font-size: 64px;\n        margin: -4px 0 0 -4px;\n      }\n      .modal-confirm.modal-dialog[_ngcontent-%COMP%] {\n        margin-top: 80px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n        color: #fff;\n        border-radius: 4px;\n        background: #eeb711 !important;\n        text-decoration: none;\n        transition: all 0.4s;\n        line-height: normal;\n        border-radius: 30px;\n        margin-top: 10px;\n        padding: 6px 20px;\n        border: none;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n        background: #eda645 !important;\n        outline: none;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin: 1px 3px 0;\n        float: left;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        margin-left: 1px;\n        font-size: 20px;\n        float: right;\n      }\n      .trigger-btn[_ngcontent-%COMP%] {\n        display: inline-block;\n        margin: 100px auto;\n      }\n\n      .fail.modal-confirm[_ngcontent-%COMP%] {\n        color: #636363;\n        width: 400px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n        padding: 20px;\n        border-radius: 5px;\n        border: none;\n        text-align: center;\n        font-size: 14px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n        border-bottom: none;\n        background-color: #ff9999;\n        position: relative;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        text-align: center;\n        font-size: 26px;\n        margin: 30px 0 -10px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n        position: absolute;\n        top: -5px;\n        right: -2px;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n        color: black;\n      }\n      .modal-confirm[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n        border: none;\n        text-align: center;\n        border-radius: 5px;\n        font-size: 13px;\n        padding: 10px 15px 25px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #999;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n        width: 80px;\n        height: 80px;\n        margin: 0 auto;\n        border-radius: 50%;\n        z-index: 9;\n        text-align: center;\n        border: 3px solid #f15e5e;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        color: #f15e5e;\n        font-size: 46px;\n        display: inline-block;\n        margin: 0px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .fail.modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n        color: #fff;\n        border-radius: 4px;\n        background: #ff9999;\n        text-decoration: none;\n        transition: all 0.4s;\n        line-height: normal;\n        min-width: 120px;\n        border: none;\n        min-height: 40px;\n        border-radius: 3px;\n        margin: 0 5px;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n        background: #ff9999;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover, .fail.modal-confirm[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:focus {\n        background: #ff9999;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n        background: #ff9999;\n      }\n      .fail.modal-confirm[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover, .fail.modal-confirm[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:focus {\n        background: #ff9999;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateEvaluationComp, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-evaluation-create',
                template: `
    <div
      id="myModal"
      class="modal fail fade"
      [ngClass]="{ show: showFailModal }"
    >
      <div class="modal-dialog modal-confirm fail">
        <div class="modal-content fail">
          <div class="modal-header flex-column fail">
            <div class="icon-box fail">
              <i class="material-icons fail">&#xE5CD;</i>
            </div>
            <h4 class="fail modal-title w-100">Error Alert</h4>
            <button
              (click)="[(showFailModal = false)]"
              type="button"
              class="close fail"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div class="modal-body fail">
            <p>Please check the error. Something went wrong!</p>
          </div>
          <div class="fail modal-footer justify-content-center">
            <button
              (click)="showFailModal = false"
              type="button"
              class="btn btn-secondary fail"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <div id="myModal" class="modal fade" [ngClass]="{ show: showModal }">
      <div class="modal-dialog modal-confirm">
        <div class="modal-content">
          <div class="modal-header justify-content-center">
            <div class="icon-box">
              <i class="material-icons">&#xE876;</i>
            </div>
            <button
              type="button"
              class="close"
              (click)="[(showModal = false), redirectFun()]"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div class="modal-body text-center">
            <h4>Great!</h4>
            <p>Your evaluation has been added successfully.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <form ngNativeValidate>
        <table class="table" [ngStyle]="{ width: '70%', margin: '0% auto' }">
          <tbody>
            <tr>
              <th scope="col" colspan="2">
                <label for=""> Applicant's Name :</label>

                <input
                  [ngStyle]="{ height: '55px' }"
                  colspan="3"
                  class="form-control"
                  type="text"
                  placeholder=" Enter Applicant's Name"
                  [(ngModel)]="evalObj.APPLICANTNAME"
                  name="applicant"
                  required
                />
              </th>
            </tr>
            <tr>
              <th scope="col" colspan="2">
                <label for=""> Evaluators's Name :</label>

                <input
                  [ngStyle]="{ height: '55px' }"
                  class="form-control"
                  type="text"
                  placeholder=" Enter Evaluator's Name"
                  [(ngModel)]="evalObj.EVALUATORNAME"
                  name="evaluator"
                  required
                />
              </th>
            </tr>
            <tr>
              <th scope="col" colspan="2">
                <label for=""> Technology :</label>

                <select
                  [ngStyle]="{ height: '55px' }"
                  class="form-control"
                  #techarea
                  (change)="dropdownHandler(techarea.value)"
                  required
                >
                  <option *ngFor="let tech of uniquetech" [value]="tech">
                    {{ tech }}
                  </option>
                </select>
              </th>
            </tr>
            <tr>
              <td scope="col" colspan="2" [ngStyle]="{ height: '55px' }">
                <label for="">
                  <b>Date :</b> {{ today | date: 'dd/MMM/yyyy' }}</label
                >
              </td>
            </tr>
            <tr>
              <th scope="col">
                <label for="">Skills : </label>
              </th>
              <th scope="col">
                <label for="">Scores : </label>
              </th>
            </tr>
            <tr *ngFor="let skill of templist">
              <th scope="col">
                <label for="">{{ skill.TEMPSKILL }}</label>
              </th>
              <th scope="col">
                <!--input
                  id="range"
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  [(ngModel)]="skill.EVALSCORE"
                  name="score"
                  (input)="pushScore(skill.EVALSCORE)"
                  required
                /-->
                <div class="range-wrap">
                  <input
                    id="range"
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    name="score"
                    [(ngModel)]="skill.EVALSCORE"
                    (input)="pushScore(skill.EVALSCORE)"
                    class="range"
                    required
                  />
                  <br />
                  <output class="bubble"></output>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        <div class="mb-3">
          <button
            [ngStyle]="{ 'margin-top': '2%' }"
            type="submit"
            id="submitbtn"
            (click)="[submitHandler()]"
            class="btn btn-primary mb-3"
            data-toggle="modal"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  `,
                styles: [
                    `
      .range-wrap {
        position: relative;
        margin: 0 auto 3rem;
      }
      .range {
        width: 100%;
      }
      .bubble {
        background: #4d79ff;
        color: white;
        padding: 4px 12px;
        position: absolute;
        border-radius: 4px;
        left: 50%;
        transform: translateX(-50%);
      }
      .bubble::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 2px;
        background: red;
        top: -1px;
        left: 50%;
      }

      .modal.show {
        display: block;
      }
      .modal-confirm {
        color: #434e65;
        width: 525px;
        border: 1px solid gray;
        border-radius: 5px;
      }
      .modal-confirm .modal-content {
        padding: 20px;
        font-size: 16px;
        border-radius: 5px;
        border: none;
      }
      .modal-confirm .modal-header {
        background: #8faed6;
        border-bottom: none;
        position: relative;
        text-align: center;
        margin: -20px -20px 0;
        border-radius: 5px 5px 0 0;
        padding: 35px;
      }
      .modal-confirm h4 {
        text-align: center;
        font-size: 36px;
        margin: 10px 0;
      }
      .modal-confirm .form-control,
      .modal-confirm .btn {
        min-height: 40px;
        border-radius: 3px;
      }
      .modal-confirm .close {
        position: absolute;
        top: 15px;
        right: 15px;
        color: #fff;
        text-shadow: none;
        opacity: 0.5;
      }
      .modal-confirm .close:hover {
        opacity: 0.8;
      }
      .modal-confirm .icon-box {
        color: #fff;
        width: 95px;
        height: 95px;
        display: inline-block;
        border-radius: 50%;
        z-index: 9;
        border: 5px solid #fff;
        padding: 15px;
        text-align: center;
      }
      .modal-confirm .icon-box i {
        font-size: 64px;
        margin: -4px 0 0 -4px;
      }
      .modal-confirm.modal-dialog {
        margin-top: 80px;
      }
      .modal-confirm .btn,
      .modal-confirm .btn:active {
        color: #fff;
        border-radius: 4px;
        background: #eeb711 !important;
        text-decoration: none;
        transition: all 0.4s;
        line-height: normal;
        border-radius: 30px;
        margin-top: 10px;
        padding: 6px 20px;
        border: none;
      }
      .modal-confirm .btn:hover,
      .modal-confirm .btn:focus {
        background: #eda645 !important;
        outline: none;
      }
      .modal-confirm .btn span {
        margin: 1px 3px 0;
        float: left;
      }
      .modal-confirm .btn i {
        margin-left: 1px;
        font-size: 20px;
        float: right;
      }
      .trigger-btn {
        display: inline-block;
        margin: 100px auto;
      }

      .fail.modal-confirm {
        color: #636363;
        width: 400px;
      }
      .fail.modal-confirm .modal-content {
        padding: 20px;
        border-radius: 5px;
        border: none;
        text-align: center;
        font-size: 14px;
      }
      .fail.modal-confirm .modal-header {
        border-bottom: none;
        background-color: #ff9999;
        position: relative;
      }
      .fail.modal-confirm h4 {
        text-align: center;
        font-size: 26px;
        margin: 30px 0 -10px;
      }
      .fail.modal-confirm .close {
        position: absolute;
        top: -5px;
        right: -2px;
      }
      .modal-confirm .modal-body {
        color: black;
      }
      .modal-confirm .modal-footer {
        border: none;
        text-align: center;
        border-radius: 5px;
        font-size: 13px;
        padding: 10px 15px 25px;
      }
      .fail.modal-confirm .modal-footer a {
        color: #999;
      }
      .fail.modal-confirm .icon-box {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        border-radius: 50%;
        z-index: 9;
        text-align: center;
        border: 3px solid #f15e5e;
      }
      .fail.modal-confirm .icon-box i {
        color: #f15e5e;
        font-size: 46px;
        display: inline-block;
        margin: 0px;
      }
      .fail.modal-confirm .btn,
      .fail.modal-confirm .btn:active {
        color: #fff;
        border-radius: 4px;
        background: #ff9999;
        text-decoration: none;
        transition: all 0.4s;
        line-height: normal;
        min-width: 120px;
        border: none;
        min-height: 40px;
        border-radius: 3px;
        margin: 0 5px;
      }
      .fail.modal-confirm .btn-secondary {
        background: #ff9999;
      }
      .fail.modal-confirm .btn-secondary:hover,
      .fail.modal-confirm .btn-secondary:focus {
        background: #ff9999;
      }
      .fail.modal-confirm .btn-danger {
        background: #ff9999;
      }
      .fail.modal-confirm .btn-danger:hover,
      .fail.modal-confirm .btn-danger:focus {
        background: #ff9999;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _allevaluation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allevaluation.component */ "q6no");
/* harmony import */ var _alltemplate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alltemplate.component */ "td0Y");
/* harmony import */ var _create_evaluation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-evaluation.component */ "v4WI");
/* harmony import */ var _create_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-template.component */ "XDvr");
/* harmony import */ var _evaluation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./evaluation.component */ "qmAf");
/* harmony import */ var _evaluationDetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./evaluationDetail.component */ "Sq7+");
/* harmony import */ var _tech_specific_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tech-specific.component */ "rWOM");
/* harmony import */ var _template_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template-form.component */ "YUUL");












const routes = [
    {
        path: 'template',
        component: _template_form_component__WEBPACK_IMPORTED_MODULE_9__["TemplateForm"],
    },
    {
        path: 'evaluation',
        component: _evaluation_component__WEBPACK_IMPORTED_MODULE_6__["EvaluationComp"],
    },
    {
        path: 'allevaluation',
        component: _allevaluation_component__WEBPACK_IMPORTED_MODULE_2__["AllEvaluationComp"],
    },
    { path: 'createevaluation', component: _create_evaluation_component__WEBPACK_IMPORTED_MODULE_4__["CreateEvaluationComp"] },
    {
        path: 'alltemplate',
        component: _alltemplate_component__WEBPACK_IMPORTED_MODULE_3__["AllTemplateComp"],
        children: [],
    },
    { path: 'alltemplate/:type', component: _tech_specific_component__WEBPACK_IMPORTED_MODULE_8__["TechnologySpecificComp"] },
    { path: 'createtemplate', component: _create_template_component__WEBPACK_IMPORTED_MODULE_5__["CreateTemplateComp"] },
    { path: 'evaluationDetails', component: _evaluationDetail_component__WEBPACK_IMPORTED_MODULE_7__["EvaluationDetailComp"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map