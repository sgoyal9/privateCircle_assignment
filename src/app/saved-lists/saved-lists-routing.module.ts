import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDashboardComponent } from './components/list-dashboard/list-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ListDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedListsRoutingModule {}
