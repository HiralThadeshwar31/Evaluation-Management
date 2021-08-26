import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigComp } from './config.component';
@Injectable()
export class DataService {
  applicantName;
  evaluatorName;
  technology;
  config = new ConfigComp();
  constructor(private http: HttpClient) {}

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
  // getData() {
  //   return this.http.get('http://localhost:6060/');
  // }
  // postData(data) {
  //   return this.http.post('http://localhost:6060/', data);
  // }
  // updateData(data) {
  //   return this.http.post('http://localhost:6060/edit', data);
  // }
  // selectToUpdate(data) {
  //   return this.http.post('http://localhost:6060/selectedit', data);
  // }
  // deleteData(data) {
  //   return this.http.post('http://localhost:6060/delete', data);
  // }
}

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable()
// export class DataService {
//   skills = [];
// }
