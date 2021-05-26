import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './global-components/dashboard/dashboard.component';
import { LoginComponent } from './global-components/login/login.component';
import { SecureContainerComponent } from './global-components/secure-container/secure-container.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'secure',
    component: SecureContainerComponent,
    children: [
      { path: '',
        redirectTo: '/secure/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'module-a',
        loadChildren: () => import('./modules/feature-module-a/feature-module-a.module').then(m => m.FeatureModuleAModule)
      },
      {
        path: 'module-b',
        loadChildren: () => import('./modules/feature-module-b/feature-module-b.module').then(m => m.FeatureModuleBModule)
      },
      {
        path: '**',
        redirectTo: '/secure/dashboard'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
