import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { DataService } from './data.service';
import { EvaluationDetailComp } from './evaluationDetail.component';

@Component({
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
})
export class AllEvaluationComp {
  today: number = Date.now();
  show;
  agree = true;
  uniquenames = [];
  slist;
  evalarr = [];
  resObj = {
    APPLICANTNAME: '',
    EVALUATORNAME: '',
    EVALNAME: '',
  };
  uniqueskills = [];
  name;
  eval;
  tech;
  evalcomp;

  constructor(private ds: DataService, private router: Router) {
    this.callDataServer();
  }
  callDataServer() {
    this.ds.getEvalData().subscribe(
      (res) => {
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
        } else {
          this.show = false;
        }
      },
      (err) => {
        console.log('Error : ', err);
      }
    );
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
