import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { PrimengModule } from 'src/app/primeng.module';
import { TaskComponent } from './task/task.component';
import { ChatComponent } from './chat/chat.component';
import { PayrollComponent } from './payroll/payroll.component';


@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    EmployeeStatusComponent,
    TaskComponent,
    ChatComponent,
    PayrollComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengModule
  ]
})
export class DashboardModule { }
