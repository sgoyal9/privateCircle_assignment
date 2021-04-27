import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDashboardComponent } from './components/list-dashboard/list-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material-module/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SavedListsRoutingModule } from './saved-lists-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListDashboardComponent, HeaderComponent],
  imports: [
    CommonModule,
    SavedListsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SavedListsModule {}
