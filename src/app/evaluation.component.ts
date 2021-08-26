// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { DataService } from './data.service';

import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
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
})
export class EvaluationComp {
  today: number = Date.now();

  tarea = '';
  techarr = [];
  uniquetech = [];
  editUser = false;
  tech;
  skill;
  value;
  index = 0;
  id = 0;
  slist;
  templist;
  sname = [];
  tid;
  tname;
  updateskill;
  NEW = [];
  UPDATE = [];

  constructor(private ds: DataService) {
    this.callDataServer();
  }
  callDataServer() {
    this.ds.getData().subscribe(
      (res) => {
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
      },
      (err) => {
        console.log('Error : ', err);
      }
    );
  }

  dropdownHandler(tech) {
    console.log('entered');
    console.log(tech);
    this.tarea = tech;
    this.sname = [];
    this.callDataServer();
  }

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
