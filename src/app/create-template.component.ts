import { Component, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { DataService } from './data.service';
import { DismissAlertComponent } from './DismissAlert.component';

@Component({
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
})
export class CreateTemplateComp {
  showFailModal;
  showModal;
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

  constructor(private ds: DataService, private router: Router) {
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

      this.ds.postData(obj).subscribe(
        (res) => {
          console.log(res);
          this.slist = res;
          this.error = false;
          this.showModal = true;
          document.getElementById('technology').nodeValue = '';
          document.getElementById('skillname').nodeValue = '';
        },
        (err) => {
          this.error = true;
          this.showFailModal = 'true';
        }
      );
    } else {
    }
  }

  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  // import { Component, Output } from '@angular/core';
  // import { NgForm } from '@angular/forms';
  // import { error } from 'selenium-webdriver';
  // import { DataService } from './data.service';
  // import { DismissAlertComponent } from './DismissAlert.component';

  // @Component({
  //   selector: 'app-createtemplate-comp',
  //   template: `
  //     <div class="container">
  //       <table class="table">
  //         <thead>
  //           <tr>
  //             <th scope="col">Technology</th>
  //             <th scope="col" colspan="3">
  //               <select
  //                 #techarea
  //                 required
  //                 (change)="dropdownHandler(techarea.value)"
  //               >
  //                 <option *ngFor="let tech of uniquetech" [value]="tech">
  //                   {{ tech }}
  //                 </option>
  //               </select>
  //             </th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr *ngIf="!editUser">
  //             <td colspan="3">
  //               <input
  //                 type="text"
  //                 [(ngModel)]="skill"
  //                 class="form-control"
  //                 id="skillname"
  //                 placeholder="Enter Skill"
  //                 #skillname
  //               />
  //             </td>
  //             <td>
  //               <button
  //                 type="submit"
  //                 (click)="[addSkillHandler(skill), (skillname.value = '')]"
  //                 class="btn btn-info mb-3"
  //               >
  //                 Add Skill
  //               </button>
  //             </td>
  //           </tr>

  //           <tr *ngIf="editUser">
  //             <td colspan="3">
  //               <input
  //                 type="text"
  //                 [(ngModel)]="skill"
  //                 class="form-control"
  //                 id="username"
  //                 placeholder="Enter Skill "
  //               />
  //             </td>
  //             <td>
  //               <button
  //                 type="submit"
  //                 (click)="[updateHandler(skill), (editUser = !editUser)]"
  //                 class="btn btn-info mb-3"
  //               >
  //                 Update Skill
  //               </button>
  //             </td>
  //           </tr>

  //           <tr *ngFor="let skills of sname; index as idx">
  //             <th scope="row">Skill {{ idx + 1 }}</th>
  //             <td>{{ skills }}</td>
  //             <td>
  //               <button
  //                 class="bi bi-pencil-square btn btn-outline-info"
  //                 (click)="[editHandler(skills), (editUser = !editUser)]"
  //               >
  //                 Edit
  //               </button>
  //             </td>
  //             <td>
  //               <button
  //                 class="bi bi bi-trash btn btn-outline-danger"
  //                 (click)="deleteHandler(skills)"
  //               >
  //                 Delete
  //               </button>
  //             </td>
  //           </tr>
  //         </tbody>
  //       </table>

  //       <!-- ng-template [ngIf]="!editUser">
  //         <h5>Add Skills</h5>
  //         <div class="mb-3">
  //           <label for="skillname" class="form-label"></label>
  //           <input
  //             type="text"
  //             [(ngModel)]="skill"
  //             class="form-control"
  //             id="skillname"
  //             placeholder="Enter Skill"
  //             #skillname
  //           />
  //         </div>

  //         <div class="mb-3">
  //           <button
  //             type="submit"
  //             (click)="[addSkillHandler(skill), (skillname.value = '')]"
  //             class="btn btn-info mb-3"
  //           >
  //             Add Skill
  //           </button>
  //         </div>
  //       <!/ng-template -->

  //       <!-- ng-template [ngIf]="editUser">
  //         <h5>Edit Skills</h5>
  //         <div class="mb-3">
  //           <label for="username" class="form-label"></label>
  //           <input
  //             type="text"
  //             [(ngModel)]="skill"
  //             class="form-control"
  //             id="username"
  //             placeholder="Enter Skill "
  //           />
  //         </div>

  //         <div class="mb-3">
  //           <button
  //             type="submit"
  //             (click)="[updateHandler(skill), (editUser = !editUser)]"
  //             class="btn btn-info mb-3"
  //           >
  //             Update Skill
  //           </button>
  //         </div>
  //       <!/ng-template -->

  //       <div class="mb-3">
  //         <center>
  //           <button
  //             type="submit"
  //             (click)="submitHandler()"
  //             class="btn btn-primary mb-3"
  //           >
  //             Submit
  //           </button>
  //         </center>
  //       </div>
  //     </div>
  //   `,
  //   styles: [
  //     `
  //       tr td span {
  //         color: crimson;
  //       }
  //       tr td input.ng-invalid.ng-touched {
  //         border: 2px solid crimson;
  //       }
  //       tr td input.ng-valid.ng-touched {
  //         border: 2px solid darkseagreen;
  //       }
  //     `,
  //   ],
  // })
  // export class CreateTemplateComp {
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
  //   error;

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

  //   addSkillHandler(skill) {
  //     let resobj = {
  //       TEMPSKILL: skill,
  //       TEMPTECHNAME: this.tarea,
  //     };
  //     this.sname.push(skill);
  //     console.log(skill);
  //     this.NEW.push(resobj);
  //     console.log(this.NEW);
  //   }

  //   editHandler(skill) {
  //     let resObj;
  //     this.slist.EVALUATION_TEMP.forEach((element) => {
  //       if (element.TEMPSKILL === skill) {
  //         this.updateskill = skill;
  //         resObj = {
  //           TEMPID: element.TEMPID,
  //           TEMPSKILL: element.TEMPSKILL,
  //         };
  //         return false;
  //       }
  //     });
  //     console.log(resObj);
  //     this.UPDATE.push(resObj);
  //     console.log(this.UPDATE);
  //     this.index = this.sname.indexOf(skill);
  //     // console.log(this.index);
  //   }

  //   updateHandler(skill) {
  //     this.slist.EVALUATION_TEMP.forEach((element) => {
  //       if (element.TEMPSKILL === this.updateskill) {
  //         element.TEMPSKILL = skill;
  //         return false;
  //       }
  //     });
  //     this.sname[this.index] = skill;
  //     console.log(this.sname);
  //     console.log(this.slist);
  //     this.UPDATE.forEach((element) => {
  //       if (element.TEMPSKILL === this.updateskill) {
  //         element.TEMPSKILL = skill;
  //         return false;
  //       }
  //     });
  //   }

  //   deleteHandler(skills) {}

  //   submitHandler() {
  //     let jsonObj = {
  //       NEW: this.NEW,
  //       UPDATE: this.UPDATE,
  //       DELETE: [],
  //     };
  //     let obj = {
  //       EVALUATION_TEMP: jsonObj,
  //     };
  //     console.log(jsonObj);

  //     this.ds.postData(obj).subscribe(
  //       (res) => {
  //         console.log(res);
  //         this.slist = res;
  //         this.error = false;
  //       },
  //       (err) => {
  //         this.error = true;
  //       }
  //     );
  //   }

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
