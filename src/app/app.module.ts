import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateForm } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EvaluationComp } from './evaluation.component';
import { AllEvaluationComp } from './allevaluation.component';
import { AllTemplateComp } from './alltemplate.component';
import { CreateEvaluationComp } from './create-evaluation.component';
import { DismissAlertComponent } from './DismissAlert.component';
import { CreateTemplateComp } from './create-template.component';
import { TechnologySpecificComp } from './tech-specific.component';
import { ConfigComp } from './config.component';
import { EvaluationDetailComp } from './evaluationDetail.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateForm,
    EvaluationComp,
    AllEvaluationComp,
    AllTemplateComp,
    CreateEvaluationComp,
    DismissAlertComponent,
    CreateTemplateComp,
    TechnologySpecificComp,
    ConfigComp,
    EvaluationDetailComp
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
