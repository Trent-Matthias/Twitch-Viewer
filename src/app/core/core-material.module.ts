import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatSnackBarModule,
  MatExpansionModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    MatExpansionModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    MatExpansionModule
  ],
  declarations: []
})
export class CoreMaterialModule {}
