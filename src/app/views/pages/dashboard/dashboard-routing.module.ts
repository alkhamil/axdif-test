import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { TaskComponent } from './task/task.component';
import { ChatComponent } from './chat/chat.component';
import { PayrollComponent } from './payroll/payroll.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'employee-status',
        component: EmployeeStatusComponent
      },
      {
        path: 'task',
        component: TaskComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      },
      {
        path: 'payroll',
        component: PayrollComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
