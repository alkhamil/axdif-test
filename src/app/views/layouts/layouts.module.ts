import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PrimengModule } from 'src/app/primeng.module';


@NgModule({
  declarations: [
    BaseComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule
  ]
})
export class LayoutsModule { }
