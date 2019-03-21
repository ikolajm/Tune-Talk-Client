
import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, 
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatExpansionModule, MatDividerModule, MatListModule
} from '@angular/material';

@NgModule({
  imports: [
  CommonModule,
  MatDividerModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatExpansionModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatDividerModule,
   MatExpansionModule,
   MatCardModule, 
   MatInputModule, 
   MatDialogModule,
   MatListModule,
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule
   ],
})

export class CustomMaterialModule { }
