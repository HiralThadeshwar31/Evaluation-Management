import { Component } from '@angular/core';

@Component({
  selector: 'app-config',
  template: ``,
})
export class ConfigComp {
  evaluationAPI =  'https://opportunity-tracking-dev.mybluemix.net/api/evaluation';
  templateAPI = 'https://opportunity-tracking-dev.mybluemix.net/api/template';
}
