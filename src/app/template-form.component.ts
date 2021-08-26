import { Component, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from './data.service';
import { Routes, RouterModule } from '@angular/router';

@Component({
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
})
export class TemplateForm {
  // tarea = '';
  // techarr = [];
  // uniquetech = [];
  // editUser = false;
  // tech;
  // skill;
  // value;
  // index = 0;
  // id = 0;
  // slist;
  // templist;
  // sname = [];
  // tid;
  // tname;
  // updateskill;
  // NEW = [];
  // UPDATE = [];
  // constructor(private ds: DataService) {
  //   this.callDataServer();
  // }
  // callDataServer() {
  //   this.ds.getData().subscribe(
  //     (res) => {
  //       this.templist = res;
  //       this.slist = res;
  //       console.log(this.slist);
  //       console.log(this.slist.EVALUATION_TEMP);
  //       this.slist.EVALUATION_TEMP.forEach((element) => {
  //         this.techarr.push(element.TEMPTECHNAME);
  //       });
  //       this.uniquetech = this.techarr.filter((x, i, a) => a.indexOf(x) == i);
  //       console.log('unique arr : ', this.uniquetech);
  //       console.log(this.tarea);
  //       this.slist.EVALUATION_TEMP.forEach((element) => {
  //         if (element.TEMPTECHNAME === this.tarea) {
  //           this.sname.push(element.TEMPSKILL);
  //         }
  //       });
  //       console.log(this.sname);
  //     },
  //     (err) => {
  //       console.log('Error : ', err);
  //     }
  //   );
  // }
  // dropdownHandler(tech) {
  //   console.log('entered');
  //   console.log(tech);
  //   this.tarea = tech;
  //   this.sname = [];
  //   this.callDataServer();
  // }
  // addSkillHandler(skill) {
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
  //   this.slist.EVALUATION_TEMP.forEach((element) => {
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
  //   this.slist.EVALUATION_TEMP.forEach((element) => {
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
  //   this.ds.postData(obj).subscribe((res) => {
  //     console.log(res);
  //     this.slist = res;
  //   });
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
