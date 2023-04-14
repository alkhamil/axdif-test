import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import { AuthGuard } from './guards/auth.guard';
import { BaseComponent } from './views/layouts/base/base.component';

const routes: Routes = [
  { 
    path: 'auth', 
    loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: BaseComponent,
    children: [
      { 
        path: 'dashboard', 
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule) 
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { 
        path: 'error',
        component: ErrorPageComponent,
      },
      { path: '**', redirectTo: 'error', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
