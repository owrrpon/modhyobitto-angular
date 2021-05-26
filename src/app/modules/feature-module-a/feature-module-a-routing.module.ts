import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModuleAContainerComponent } from './feature-module-a-container.component';
import { PageA1Component } from './page-a1/page-a1.component';
import { PageA2Component } from './page-a2/page-a2.component';
import { PageA3Component } from './page-a3/page-a3.component';
import { PageA4Component } from './page-a4/page-a4.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'page-a1',
    pathMatch: 'full'
  },
  {
    path:'',
    component: FeatureModuleAContainerComponent,
    children: [
      {
        path: 'page-a1',
        component: PageA1Component
      },
      {
        path: 'page-a2',
        component: PageA2Component
      },
      {
        path: 'page-a3',
        component: PageA3Component
      },
      {
        path: 'page-a4',
        component: PageA4Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModuleARoutingModule { }
