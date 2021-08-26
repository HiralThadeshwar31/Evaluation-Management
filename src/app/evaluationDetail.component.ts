import { Component, Input } from '@angular/core';
import { DataService } from './data.service';

@Component({
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
})
export class EvaluationDetailComp {
  today: number = Date.now();
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

  constructor(private ds: DataService) {
    this.callDataServer();
  }
  callDataServer() {
    this.ds.getEvalData().subscribe(
      (res) => {
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
      },
      (err) => {
        console.log('Error : ', err);
      }
    );
  }
}
