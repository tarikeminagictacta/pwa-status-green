import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InViewportModule } from 'ng-in-viewport';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    InViewportModule,

    MaterialModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, TaskCardComponent]
})
export class DashboardModule { }
