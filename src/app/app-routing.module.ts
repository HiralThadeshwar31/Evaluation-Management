import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllEvaluationComp } from './allevaluation.component';
import { AllTemplateComp } from './alltemplate.component';
import { CreateEvaluationComp } from './create-evaluation.component';
import { CreateTemplateComp } from './create-template.component';
import { EvaluationComp } from './evaluation.component';
import { EvaluationDetailComp } from './evaluationDetail.component';
import { TechnologySpecificComp } from './tech-specific.component';
import { TemplateForm } from './template-form.component';

const routes: Routes = [
  {
    path: 'template',
    component: TemplateForm,
  },
  {
    path: 'evaluation',
    component: EvaluationComp,
  },
  {
    path: 'allevaluation',
    component: AllEvaluationComp,
  },
  { path: 'createevaluation', component: CreateEvaluationComp },
  {
    path: 'alltemplate',
    component: AllTemplateComp,
    children: [],
  },
  { path: 'alltemplate/:type', component: TechnologySpecificComp },
  { path: 'createtemplate', component: CreateTemplateComp },
  { path: 'evaluationDetails', component: EvaluationDetailComp },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
