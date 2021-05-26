import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModuleBContainerComponent } from './feature-module-b-container.component';
import { PageB5Component } from './page-b5/page-b5.component';
import { PageB6Component } from './page-b6/page-b6.component';
import { PageB7Component } from './page-b7/page-b7.component';
import { PageB8Component } from './page-b8/page-b8.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'page-b5',
    pathMatch: 'full'
  },
  {
    path:'',
    component: FeatureModuleBContainerComponent,
    children: [
      {
        path: 'page-b5',
        component: PageB5Component
      },
      {
        path: 'page-b6',
        component: PageB6Component
      },
      {
        path: 'page-b7',
        component: PageB7Component
      },
      {
        path: 'page-b8',
        component: PageB8Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModuleBRoutingModule { }
