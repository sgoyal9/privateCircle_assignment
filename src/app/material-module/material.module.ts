import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
  ],
})
export class MaterialModule {}
