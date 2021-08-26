import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { TechnologySpecificComp } from './tech-specific.component';
import { NgForm } from '@angular/forms';
import { error } from 'selenium-webdriver';
import { DataService } from './data.service';
import { DismissAlertComponent } from './DismissAlert.component';
import { Router } from '@angular/router'; //import router

@Component({
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
})
export class AllTemplateComp {
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
  error;
  agree = false;
  skillid;
  show;

  constructor(
    private ds: DataService,
    private http: HttpClient,
    public router: Router
  ) {
    this.callDataServer();
  }
  callDataServer() {
    this.ds.getData().subscribe(
      (res) => {
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
        } else {
          this.show = false;
        }
      },
      (err) => {
        console.log('Error : ', err);
      }
    );
  }
  techPage(tech) {
    this.agree = true;
    console.log('tarea : ', tech);
    this.tarea = tech;
    console.log('var tarea : ', this.tarea);
  }

  // techPage(tech) {
  //   this.agree = true;
  //   this.tarea = tech;
  //   console.log(tech);
  //   this.http
  //     .get(
  //       'https://opportunity-tracking-dev.mybluemix.net/api/template/' + tech
  //     )
  //     .subscribe(
  //       (res) => {
  //         this.templist = res;
  //         this.slist = res;
  //         console.log('entered');
  //         console.log(this.slist);

  //         this.slist.body.forEach((element) => {
  //           this.sname.push(element.TEMPSKILL);
  //         });

  //         console.log(this.sname);
  //       },
  //       (err) => {
  //         console.log('Error : ', err);
  //       }
  //     );
  // }

  // // dropdownHandler(tech) {
  // //   console.log('entered');
  // //   console.log(tech);
  // //   this.tarea = tech;
  // //   this.sname = [];
  // //   this.callDataServer();
  // // }

  // addSkillHandler(skill) {
  //   console.log('tech area : ', this.tarea);
  //   let resobj = {
  //     TEMPSKILL: skill,
  //     TEMPTECHNAME: this.tarea,
  //   };
  //   this.sname.push(skill);
  //   console.log(skill);
  //   this.NEW.push(resobj);
  //   console.log(this.NEW);
  // }

  // editHandler(skill) {
  //   let resObj;
  //   this.slist.body.forEach((element) => {
  //     if (element.TEMPSKILL === skill) {
  //       this.updateskill = skill;
  //       resObj = {
  //         TEMPID: element.TEMPID,
  //         TEMPSKILL: element.TEMPSKILL,
  //       };
  //       return false;
  //     }
  //   });
  //   console.log(resObj);
  //   this.UPDATE.push(resObj);
  //   console.log(this.UPDATE);
  //   this.index = this.sname.indexOf(skill);
  //   // console.log(this.index);
  // }

  // updateHandler(skill) {
  //   this.slist.body.forEach((element) => {
  //     if (element.TEMPSKILL === this.updateskill) {
  //       element.TEMPSKILL = skill;
  //       return false;
  //     }
  //   });
  //   this.sname[this.index] = skill;
  //   console.log(this.sname);
  //   console.log(this.slist);
  //   this.UPDATE.forEach((element) => {
  //     if (element.TEMPSKILL === this.updateskill) {
  //       element.TEMPSKILL = skill;
  //       return false;
  //     }
  //   });
  // }

  // deleteHandler(skills) {}

  // submitHandler() {
  //   let jsonObj = {
  //     NEW: this.NEW,
  //     UPDATE: this.UPDATE,
  //     DELETE: [],
  //   };
  //   let obj = {
  //     EVALUATION_TEMP: jsonObj,
  //   };
  //   console.log(jsonObj);

  //   this.ds.postData(obj).subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.slist = res;
  //       this.error = false;
  //     },
  //     (err) => {
  //       this.error = true;
  //     }
  //   );
  // }

  //***************************************************************** */

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
  // addSkillHandler(skill) {
  //   let resobj = {
  //     skills: skill,
  //   };
  //   this.sname.push(skill);
  //   this.ds.postData(resobj).subscribe((res) => {
  //     console.log(res);
  //     this.slist = res;
  //   });

  //   // if (this.slist.find((sk) => this.slist === skill)) {
  //   //   console.log('user already exists');
  //   // } else {
  //   //   console.log(skill);
  //   //   this.slist.push(skill);
  //   // }
  // }

  // deleteHandler(skills) {
  //   console.log(skills);
  //   this.slist.skills.forEach((element) => {
  //     let index = element;
  //     console.log('entered');
  //     if (index.name === skills) {
  //       console.log('right');
  //       console.log(index.id);
  //       this.tid = index.id;
  //       this.tname = index.name;
  //     }
  //   });
  //   let resObj = {
  //     id: this.tid,
  //     skills: this.tname,
  //   };
  //   this.ds.deleteData(resObj).subscribe((res) => {
  //     console.log(res);
  //     this.slist = res;
  //   });
  //   window.location.reload(true);
  // }
  // editHandler(skills) {
  //   this.slist.skills.forEach((element) => {
  //     let index = element;
  //     console.log('entered');
  //     if (index.name === skills) {
  //       console.log('right');
  //       console.log(index.id);
  //       this.tid = index.id;
  //       this.tname = index.name;
  //     }
  //   });
  //   let resObj = {
  //     id: this.tid,
  //     skills: this.tname,
  //   };
  //   this.ds.selectToUpdate(resObj).subscribe((res) => {
  //     console.log(res);
  //     this.updateskill = res;
  //   });
  // }
  // updateUser(skill) {
  //   console.log(skill);
  //   let resObj = {
  //     id: this.updateskill.id,
  //     skills: skill,
  //   };
  //   console.log(resObj);
  //   this.ds.updateData(resObj).subscribe((res) => {
  //     console.log(res);
  //     this.updateskill = res;
  //   });
  //   window.location.reload(true);
  // }
  // submitHandler() {}
}
