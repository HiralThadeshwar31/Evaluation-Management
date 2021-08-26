// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DismissAlertComponent } from './DismissAlert.component';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { $ } from 'protractor';
import { Router } from '@angular/router';

@Component({
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
})
export class CreateEvaluationComp {
  today: number = Date.now();
  showFailModal;
  showModal;
  success;
  evalObj = {
    APPLICANTNAME: '',
    EVALUATORNAME: '',
  };
  score;
  evalarr = [];
  tarea = '';
  techarr = [];
  uniquetech = [];
  editUser = false;
  tech;
  skill;
  value;
  index = 0;
  skillid = [];
  slist;
  templist = [];
  sname = [];
  scores = [];
  tid;
  tname;
  updateskill;
  NEW = [];
  UPDATE = [];
  EVALUATION = [];

  constructor(
    private ds: DataService,
    private http: HttpClient,
    private router: Router
  ) {
    this.callDataServer();
  }
  callDataServer() {
    this.ds.getData().subscribe(
      (res) => {
        this.slist = res;
        console.log(this.slist);
        console.log(this.slist.EVALUATION_TEMP);

        this.slist.EVALUATION_TEMP.forEach((element) => {
          this.techarr.push(element.TEMPTECHNAME);
        });

        this.uniquetech = this.techarr.filter((x, i, a) => a.indexOf(x) == i);
        console.log('unique arr : ', this.uniquetech);
        console.log(this.tarea);
      },
      (err) => {
        console.log('Error : ', err);
      }
    );
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
    this.ds.getTechData(tech).subscribe(
      (res) => {
        this.slist = res;
        console.log('temp list : ', this.slist);
        this.templist = this.slist.body;
        console.log('temp list body : ', this.templist);
      },
      (err) => {
        console.log('Error : ', err);
      }
    );
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
    if (
      this.evalObj.APPLICANTNAME &&
      this.evalObj.EVALUATORNAME &&
      this.tarea
    ) {
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

      this.ds.postEvalData(jsonObj).subscribe(
        (res) => {
          console.log(res);
          this.success = true;
          console.log(this.success);

          this.showModal = true;

          //   this.slist = res;
        },
        (err) => {
          this.success = false;
          this.showFailModal = 'true';
        }
      );
    } else {
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

  //   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //   tarea = '';
  //   techarr = [];
  //   uniquetech = [];
  //   editUser = false;
  //   tech;
  //   skill;
  //   value;
  //   index = 0;
  //   id = 0;
  //   slist;
  //   templist;
  //   sname = [];
  //   tid;
  //   tname;
  //   updateskill;
  //   NEW = [];
  //   UPDATE = [];

  //   constructor(private ds: DataService) {
  //     this.callDataServer();
  //   }
  //   callDataServer() {
  //     this.ds.getData().subscribe(
  //       (res) => {
  //         this.templist = res;
  //         this.slist = res;
  //         console.log(this.slist);
  //         console.log(this.slist.EVALUATION_TEMP);

  //         this.slist.EVALUATION_TEMP.forEach((element) => {
  //           this.techarr.push(element.TEMPTECHNAME);
  //         });

  //         this.uniquetech = this.techarr.filter((x, i, a) => a.indexOf(x) == i);
  //         console.log('unique arr : ', this.uniquetech);
  //         console.log(this.tarea);
  //         this.slist.EVALUATION_TEMP.forEach((element) => {
  //           if (element.TEMPTECHNAME === this.tarea) {
  //             this.sname.push(element.TEMPSKILL);
  //           }
  //         });
  //         console.log(this.sname);
  //       },
  //       (err) => {
  //         console.log('Error : ', err);
  //       }
  //     );
  //   }

  //   dropdownHandler(tech) {
  //     console.log('entered');
  //     console.log(tech);
  //     this.tarea = tech;
  //     this.sname = [];
  //     this.callDataServer();
  //   }

  // ====================================================================================

  // tarea = '';
  // editUser = false;
  // skill;
  // value;
  // index;
  // id = 0;
  // slist;
  // sname = [];
  // tid;
  // tname;
  // updateskill;
  // today: number = Date.now();

  // constructor(private ds: DataService) {
  //   this.callDataServer();
  // }
  // callDataServer() {
  //   this.ds.getData().subscribe(
  //     (res) => {
  //       this.slist = res;
  //       console.log(this.slist);
  //       this.tarea = this.slist.techarea;
  //       console.log(this.tarea);
  //       this.slist.skills.forEach((element) => {
  //         let index = element;
  //         this.sname.push(index.name);
  //       });
  //       console.log(this.sname);
  //     },
  //     (err) => {
  //       console.log('Error : ', err);
  //     }
  //   );
  // }
}
